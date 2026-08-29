/**
 * Builds the snapshot powering the /dev/ development activity page.
 *
 * GitHub data is public and CORS-enabled, so the page refreshes the commit,
 * release and pull request numbers in the browser. This snapshot is what gets
 * server-rendered (good for SEO and for visitors hitting the GitHub API rate
 * limit) and it is the only source for the forum feature requests, which
 * Discourse does not serve cross-origin.
 *
 * The deploy build runs without a token (see DEV_ACTIVITY_GITHUB_TOKEN below),
 * on a shared Cloudflare Pages IP, so the anonymous 60 requests/hour budget is
 * often already spent by someone else. Two things keep that from wiping the
 * page data:
 *
 *   - conditional requests: each answer is stored with its ETag and re-sent as
 *     `If-None-Match`, and GitHub does not count the 304 answers against the
 *     rate limit, so an unchanged repository costs nothing;
 *   - per section fallback: whatever cannot be downloaded keeps the values
 *     committed in the snapshot instead of failing the whole refresh.
 *
 * Run with `yarn load-dev-activity`. Refreshed daily by the
 * `refresh-dev-activity` workflow.
 */
// Only useful to read a local token from .env, and this script runs during the
// deploy build, where a missing dev dependency must not break it.
try {
  require("dotenv").config();
} catch (error) {
  // no .env support, that is fine
}
const fs = require("fs");
const path = require("path");

const GITHUB_OWNER = "GladysAssistant";
const GITHUB_REPO = "Gladys";
const GITHUB_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

const FORUM_URL = "https://community.gladysassistant.com";
// A feature request the community voted for gets the "accepted" tag once it is
// greenlit, and moves to the "Demandes livrées" category once shipped. Listing
// the tag rather than one category keeps both states: filtering on the category
// alone made the page drop a request the day it was delivered.
const FORUM_ACCEPTED_PATH = "/tag/accepted.json";
// "Demande de fonctionnalités": accepted, still to be built.
const FORUM_PENDING_CATEGORY = 43;
// "Demandes livrées": accepted and shipped.
const FORUM_DELIVERED_CATEGORY = 52;

const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "devActivity.json");

// Bump this whenever the shape of the snapshot or the way a payload is parsed
// below changes: it throws away the stored ETags, which would otherwise keep
// serving data built by the previous version of this script.
const SNAPSHOT_VERSION = 1;

const MAX_RELEASES = 12;
const MAX_OPEN_PULL_REQUESTS = 15;
const MAX_MERGED_PULL_REQUESTS = 12;
const MAX_CONTRIBUTORS = 12;
const MAX_FORUM_REQUESTS = 24;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MAX_ATTEMPTS = 6;
const REQUEST_TIMEOUT_MS = 20000;
// A rate limit resets on the hour, so waiting it out is only worth it when it
// is seconds away. Anything longer falls back on the committed snapshot rather
// than parking the deploy build.
const MAX_RATE_LIMIT_WAIT_MS = 30000;

// DEV_ACTIVITY_GITHUB_TOKEN is the name to set on the deploy environment:
// GITHUB_TOKEN is generic enough that half the tooling of a build reads it (and
// GitHub Actions gives that name to its own automatic token), so a token meant
// for this script alone deserves its own name. GITHUB_TOKEN is still accepted
// as a fallback, which is what a workflow passing `secrets.GITHUB_TOKEN` uses.
const gitHubTokenVariable = process.env.DEV_ACTIVITY_GITHUB_TOKEN
  ? "DEV_ACTIVITY_GITHUB_TOKEN"
  : process.env.GITHUB_TOKEN
    ? "GITHUB_TOKEN"
    : null;
const gitHubToken = gitHubTokenVariable ? process.env[gitHubTokenVariable] : null;

// What the build log says about the token, without ever printing it: whether
// one was found at all, and whether it looks like a GitHub token. A deploy that
// refreshes nothing must not leave the question "was the token even passed to
// the build?" open, since the answer changes where to look entirely.
function describeToken() {
  if (!gitHubToken) {
    return (
      "no token (DEV_ACTIVITY_GITHUB_TOKEN and GITHUB_TOKEN are unset): GitHub " +
      "calls go out anonymously, on 60 requests/hour shared by every build on this IP"
    );
  }
  const kinds = {
    github_pat_: "fine-grained token",
    ghp_: "classic token",
    ghs_: "Actions token",
    gho_: "OAuth token",
    ghu_: "user-to-server token",
  };
  const prefix = Object.keys(kinds).find((candidate) => gitHubToken.startsWith(candidate));
  // An unrecognized shape is a finding in itself: a value truncated by a copy
  // and paste, quoted, or holding a trailing newline never gets accepted.
  const kind = prefix ? kinds[prefix] : "unrecognized format";
  return `${gitHubTokenVariable} (${kind}, ${gitHubToken.length} characters)`;
}

// A token GitHub refuses (expired, revoked, missing the repository) must not
// leave the page stale while the anonymous budget is still there: the first
// call to be refused drops it and the following ones go out anonymously.
let gitHubTokenRejected = false;

// Returned instead of a payload when GitHub answers 304 Not Modified.
const NOT_MODIFIED = Symbol("not modified");

// ETag per URL, read from the committed snapshot and written back to it. An
// entry means "the values committed for this URL are what it last answered",
// so it is only kept once the section it belongs to parsed fine: `stagedEtags`
// holds the ETags of the section being loaded until then.
const etags = new Map();
const stagedEtags = new Map();

// GitHub explains every refusal in the body ("Bad credentials", "Resource not
// accessible by personal access token", "API rate limit exceeded for x.x.x.x"),
// and a build log without it leaves nothing to debug with.
async function apiMessage(response) {
  try {
    const body = await response.json();
    return typeof body?.message === "string" ? body.message : "";
  } catch (error) {
    return "";
  }
}

function authLabel(headers) {
  if (!headers.Authorization) {
    return "anonymous";
  }
  return `with the ${gitHubTokenVariable} token`;
}

function describeFailure(response, url, message, headers) {
  const budget = response.headers.get("x-ratelimit-remaining");
  const details = [message, `${authLabel(headers)}`];
  if (budget !== null) {
    details.push(`${budget}/${response.headers.get("x-ratelimit-limit") || "?"} requests left`);
  }
  return `${response.status} ${response.statusText} on ${url} — ${details.filter(Boolean).join(", ")}`;
}

class RateLimitError extends Error {
  constructor(url, delayMs, message, headers) {
    const when = Number.isFinite(delayMs)
      ? `it resets in about ${Math.max(1, Math.round(delayMs / 60000))} min`
      : "no reset date given";
    super(
      `GitHub rate limit reached on ${url} (${authLabel(headers)}, ${when})` +
        `${message ? `: ${message}` : ""}. ` +
        (headers.Authorization
          ? "Wait for the reset, the token cannot lift it any further."
          : "Set DEV_ACTIVITY_GITHUB_TOKEN to lift the anonymous 60 requests/hour limit.")
    );
    this.name = "RateLimitError";
    // What the sections skipped afterwards report, without repeating the URL
    // and the advice of the call that actually hit the limit.
    this.summary = `GitHub rate limit reached (${authLabel(headers)}), ${when}`;
  }
}

// Once the budget is spent every other GitHub call would fail the same way, so
// the first one to hit it makes the rest give up immediately.
let gitHubRateLimit = null;

// Returns how long to wait when a response was refused for rate limiting, or
// null when it was refused for another reason. GitHub answers 403 or 429 with
// `retry-after` on the secondary limit, and with `x-ratelimit-remaining: 0`
// plus a `x-ratelimit-reset` timestamp on the primary one.
function rateLimitDelay(response) {
  if (response.status !== 403 && response.status !== 429) {
    return null;
  }
  const retryAfter = Number(response.headers.get("retry-after"));
  if (Number.isFinite(retryAfter) && retryAfter > 0) {
    return retryAfter * 1000;
  }
  if (response.headers.get("x-ratelimit-remaining") !== "0") {
    return null;
  }
  const reset = Number(response.headers.get("x-ratelimit-reset"));
  if (!Number.isFinite(reset) || reset <= 0) {
    return Infinity;
  }
  return Math.max(0, reset * 1000 - Date.now());
}

async function getJson(url, { retryOn202 = false, conditional = false } = {}) {
  const isGitHub = url.startsWith(GITHUB_API);
  if (isGitHub && gitHubRateLimit) {
    throw new Error(`${gitHubRateLimit.summary}, skipping this call`);
  }

  const headers = {
    Accept: isGitHub ? "application/vnd.github+json" : "application/json",
    "User-Agent": "gladysassistant-website",
  };
  if (isGitHub) {
    headers["X-GitHub-Api-Version"] = "2022-11-28";
  }
  // Optional: lifts the 60 requests/hour anonymous limit, a local run works
  // fine without one. Only ever sent to the GitHub API, never to the forum.
  if (isGitHub && gitHubToken && !gitHubTokenRejected) {
    headers.Authorization = `Bearer ${gitHubToken}`;
  }
  // A 304 answer does not count against the rate limit, which is the whole
  // point: an unchanged repository makes the refresh free.
  const knownEtag = conditional ? etags.get(url) : undefined;
  if (knownEtag) {
    headers["If-None-Match"] = knownEtag;
  }

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const response = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    if (response.status === 304) {
      return NOT_MODIFIED;
    }
    // The statistics endpoints answer 202 while GitHub computes the cache.
    if (response.status === 202 && retryOn202) {
      console.log(`   202 from ${url}, waiting for GitHub to compute it...`);
      await sleep(3000);
      continue;
    }
    const rateLimited = rateLimitDelay(response);
    if (rateLimited !== null) {
      const message = await apiMessage(response);
      if (rateLimited <= MAX_RATE_LIMIT_WAIT_MS && attempt < MAX_ATTEMPTS - 1) {
        console.log(`   rate limited on ${url}, retrying in ${Math.round(rateLimited / 1000)}s...`);
        await sleep(rateLimited + 1000);
        continue;
      }
      const error = new RateLimitError(url, rateLimited, message, headers);
      if (isGitHub) {
        gitHubRateLimit = error;
      }
      throw error;
    }
    // Refused for the credentials rather than for the budget: drop the token
    // and try again anonymously, which still has its own 60 requests/hour.
    if ((response.status === 401 || response.status === 403) && headers.Authorization) {
      const message = await apiMessage(response);
      console.log(`   ${describeFailure(response, url, message, headers)}`);
      console.log(`   retrying anonymously, ${gitHubTokenVariable} is not being accepted`);
      gitHubTokenRejected = true;
      delete headers.Authorization;
      continue;
    }
    // A single 502 from GitHub should not fail the daily refresh.
    if (response.status >= 500 && attempt < MAX_ATTEMPTS - 1) {
      console.log(`   ${response.status} from ${url}, retrying...`);
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (!response.ok) {
      throw new Error(describeFailure(response, url, await apiMessage(response), headers));
    }
    const etag = response.headers.get("etag");
    if (conditional && etag) {
      stagedEtags.set(url, etag);
    }
    return response.json();
  }
  throw new Error(`Gave up waiting for ${url}`);
}

// Release notes are the generated "What's Changed" list: one bullet per merged
// pull request, each crediting its author with "by @login".
function parseReleaseBody(body) {
  const bullets = (body || "")
    .split(/\r?\n/)
    .filter((line) => /^\s*[*-]\s+/.test(line))
    // The generated notes end with a "New Contributors" list; those bullets
    // repeat pull requests already counted above.
    .filter((line) => !/made their first contribution/i.test(line));

  const authors = new Set();
  bullets.forEach((line) => {
    const match = line.match(/by @([\w-]+)/);
    if (match) {
      authors.add(match[1]);
    }
  });

  const highlights = bullets
    .map((line) =>
      line
        .replace(/^\s*[*-]\s+/, "")
        // "… by @author in https://github.com/…/pull/123" is noise once the
        // release is already credited as a whole.
        .replace(/\s+by @[\w-]+(\s+in\b.*)?$/i, "")
        .replace(/https?:\/\/\S+/g, "")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter((line) => line.length > 3 && !/^full changelog/i.test(line));

  return {
    changes: bullets.length,
    authors: [...authors],
    highlights: highlights.slice(0, 3),
  };
}

async function getRepository() {
  const repository = await getJson(GITHUB_API, { conditional: true });
  if (repository === NOT_MODIFIED) {
    return NOT_MODIFIED;
  }
  return {
    repository: {
      owner: GITHUB_OWNER,
      name: GITHUB_REPO,
      url: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      openIssues: repository.open_issues_count,
      watchers: repository.subscribers_count,
      createdAt: repository.created_at,
      pushedAt: repository.pushed_at,
    },
  };
}

async function getWeeks() {
  const weeks = await getJson(`${GITHUB_API}/stats/commit_activity`, {
    retryOn202: true,
    conditional: true,
  });
  if (weeks === NOT_MODIFIED) {
    return NOT_MODIFIED;
  }
  // GitHub answers 202 with an empty body while it builds the statistics
  // cache; fail with something readable rather than a map() stack trace.
  if (!Array.isArray(weeks)) {
    throw new Error("Unexpected commit activity payload from GitHub");
  }
  // Compact keys: this file lands in git, and 52 weeks of verbose objects make
  // for a needlessly noisy diff.
  return {
    weeks: weeks.map((week) => ({
      w: week.week,
      t: week.total,
      d: week.days,
    })),
  };
}

async function getReleases() {
  const releases = await getJson(`${GITHUB_API}/releases?per_page=30`, {
    conditional: true,
  });
  if (releases === NOT_MODIFIED) {
    return NOT_MODIFIED;
  }
  return {
    releases: releases
      .filter((release) => !release.draft)
      .slice(0, MAX_RELEASES)
      .map((release) => {
        const { changes, authors, highlights } = parseReleaseBody(release.body);
        return {
          tag: release.tag_name,
          name: release.name || release.tag_name,
          url: release.html_url,
          publishedAt: release.published_at,
          prerelease: release.prerelease,
          changes,
          authors,
          highlights,
        };
      }),
  };
}

function mapPullRequest(pullRequest) {
  return {
    number: pullRequest.number,
    title: pullRequest.title,
    url: pullRequest.html_url,
    author: pullRequest.user.login,
    avatar: pullRequest.user.avatar_url,
    labels: pullRequest.labels.map((label) => label.name),
    createdAt: pullRequest.created_at,
    updatedAt: pullRequest.updated_at,
    mergedAt: pullRequest.merged_at || null,
  };
}

async function getOpenPullRequests() {
  const pullRequests = await getJson(
    `${GITHUB_API}/pulls?state=open&per_page=100&sort=updated&direction=desc`,
    { conditional: true }
  );
  if (pullRequests === NOT_MODIFIED) {
    return NOT_MODIFIED;
  }
  const openPullRequests = pullRequests
    .filter((pullRequest) => !pullRequest.draft)
    .map(mapPullRequest);

  return {
    openPullRequestsCount: openPullRequests.length,
    openPullRequests: openPullRequests.slice(0, MAX_OPEN_PULL_REQUESTS),
  };
}

async function getMergedPullRequests() {
  const pullRequests = await getJson(
    `${GITHUB_API}/pulls?state=closed&per_page=100&sort=updated&direction=desc`,
    { conditional: true }
  );
  if (pullRequests === NOT_MODIFIED) {
    return NOT_MODIFIED;
  }
  return {
    mergedPullRequests: pullRequests
      .filter((pullRequest) => pullRequest.merged_at)
      .map(mapPullRequest)
      .sort((a, b) => new Date(b.mergedAt) - new Date(a.mergedAt))
      .slice(0, MAX_MERGED_PULL_REQUESTS),
  };
}

async function getContributors() {
  const contributors = await getJson(`${GITHUB_API}/contributors?per_page=100`, {
    conditional: true,
  });
  if (contributors === NOT_MODIFIED) {
    return NOT_MODIFIED;
  }
  return {
    contributorsCount: contributors.length,
    contributors: contributors.slice(0, MAX_CONTRIBUTORS).map((contributor) => ({
      login: contributor.login,
      avatar: contributor.avatar_url,
      url: contributor.html_url,
      contributions: contributor.contributions,
    })),
  };
}

async function getForumRequests() {
  const topics = [];
  const users = new Map();

  // Discourse paginates tag listings; two pages cover the accepted tag with
  // room to grow.
  for (let page = 0; page < 2; page += 1) {
    const url = `${FORUM_URL}${FORUM_ACCEPTED_PATH}${page > 0 ? `?page=${page}` : ""}`;
    // No conditional request here: a section made of several calls could not
    // rebuild itself from a mix of 304 and 200 answers.
    const data = await getJson(url);
    (data.users || []).forEach((user) => users.set(user.id, user));
    const pageTopics = data.topic_list?.topics || [];
    topics.push(...pageTopics);
    if (pageTopics.length === 0) {
      break;
    }
  }

  const seen = new Set();
  return {
    forumRequests: topics
      .filter((topic) => {
        // The tag is what makes a topic part of the roadmap, but it can be put
        // on anything: only the two feature request categories belong here.
        if (
          topic.category_id !== FORUM_PENDING_CATEGORY &&
          topic.category_id !== FORUM_DELIVERED_CATEGORY
        ) {
          return false;
        }
        if (seen.has(topic.id)) {
          return false;
        }
        seen.add(topic.id);
        return true;
      })
      // What is still to be built comes first: that is the part of the page
      // that answers "what is coming next".
      .sort((a, b) => {
        const delivered = Number(a.category_id === FORUM_DELIVERED_CATEGORY) -
          Number(b.category_id === FORUM_DELIVERED_CATEGORY);
        return delivered || new Date(b.bumped_at) - new Date(a.bumped_at);
      })
      .slice(0, MAX_FORUM_REQUESTS)
      .map((topic) => {
        const posterId = topic.posters?.[0]?.user_id;
        const author = posterId != null ? users.get(posterId) : null;
        return {
          id: topic.id,
          // Not fancy_title: Discourse HTML-encodes it ("l&rsquo;énergie") and
          // React would render the entity as-is.
          title: topic.title,
          url: `${FORUM_URL}/t/${topic.slug}/${topic.id}`,
          views: topic.views,
          replies: topic.posts_count > 0 ? topic.posts_count - 1 : 0,
          likes: topic.like_count,
          createdAt: topic.created_at,
          bumpedAt: topic.bumped_at,
          author: author ? author.username : null,
          delivered: topic.category_id === FORUM_DELIVERED_CATEGORY,
          // The "accepted" tag is on every topic here, so it carries no signal.
          tags: (topic.tags || [])
            .filter((tag) => tag.name !== "accepted")
            .map((tag) => tag.name),
        };
      }),
  };
}

// Each section is one part of the snapshot: the keys it owns in the output
// file, and the loader downloading them. A section either refreshes entirely
// or keeps the values already committed.
const GITHUB_SECTIONS = [
  { name: "repository metadata", keys: ["repository"], load: getRepository },
  { name: "commit activity", keys: ["weeks"], load: getWeeks },
  { name: "releases", keys: ["releases"], load: getReleases },
  {
    name: "open pull requests",
    keys: ["openPullRequestsCount", "openPullRequests"],
    load: getOpenPullRequests,
  },
  { name: "merged pull requests", keys: ["mergedPullRequests"], load: getMergedPullRequests },
  { name: "contributors", keys: ["contributorsCount", "contributors"], load: getContributors },
];

const FORUM_SECTION = {
  name: "accepted feature requests",
  keys: ["forumRequests"],
  load: getForumRequests,
};

// The GitHub sections come first and are loaded one after the other: they share
// one rate limit budget, and the first call to exhaust it saves the following
// ones the round trip.
const SECTIONS = [...GITHUB_SECTIONS, FORUM_SECTION];

// Every key of the snapshot holding data, in the order the sections build them.
const DATA_KEYS = SECTIONS.flatMap((section) => section.keys);

function readCommittedSnapshot() {
  try {
    const snapshot = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"));
    // Written by an older version of this script: the values are still usable
    // as a fallback, but its ETags would freeze the data in the old shape.
    if (snapshot.snapshotVersion === SNAPSHOT_VERSION) {
      Object.entries(snapshot.etags || {}).forEach(([url, etag]) => etags.set(url, etag));
    }
    return snapshot;
  } catch (error) {
    console.log(`>> No usable snapshot committed yet (${error.message})`);
    return {};
  }
}

const committedSnapshot = readCommittedSnapshot();

function committedValues(section) {
  const missing = section.keys.filter((key) => committedSnapshot[key] === undefined);
  if (missing.length > 0) {
    throw new Error(
      `Nothing to fall back on for the ${section.name}: ${missing.join(", ")} ` +
        "missing from the committed snapshot"
    );
  }
  console.log(`   keeping the committed ${section.name}`);
  return Object.fromEntries(section.keys.map((key) => [key, committedSnapshot[key]]));
}

// A list coming back much shorter than the committed one is usually an upstream
// change rather than real news: a forum category emptied by an archiving pass, a
// filter that stopped matching. The fresh values are still the truth and get
// written, but a silent collapse of a page section is worth saying out loud.
function warnAboutShrinking(values) {
  Object.entries(values).forEach(([key, fresh]) => {
    const committed = committedSnapshot[key];
    if (!Array.isArray(fresh) || !Array.isArray(committed)) {
      return;
    }
    if (committed.length >= 5 && fresh.length * 2 < committed.length) {
      console.log(
        `   !! ${key}: ${committed.length} entries committed, ${fresh.length} downloaded, ` +
          "check that the source still holds what this page expects"
      );
    }
  });
}

async function loadSection(section) {
  console.log(`>> Downloading the ${section.name}`);
  stagedEtags.clear();
  try {
    const values = await section.load();
    if (values !== NOT_MODIFIED) {
      stagedEtags.forEach((etag, url) => etags.set(url, etag));
      warnAboutShrinking(values);
      return values;
    }
    console.log("   unchanged upstream");
  } catch (error) {
    console.log(`   ${error.message}`);
  }
  return committedValues(section);
}

async function main() {
  console.log(`>> GitHub calls: ${describeToken()}`);

  const data = {};
  for (const section of SECTIONS) {
    Object.assign(data, await loadSection(section));
  }

  // The /dev/ page shows this as "last updated", so it has to date the data
  // rather than the build: a refresh where everything was kept from the
  // committed snapshot did not make the numbers any fresher.
  const dataChanged = DATA_KEYS.some(
    (key) => JSON.stringify(data[key]) !== JSON.stringify(committedSnapshot[key])
  );
  const generatedAt =
    dataChanged || !committedSnapshot.generatedAt
      ? new Date().toISOString()
      : committedSnapshot.generatedAt;
  if (!dataChanged) {
    console.log(">> Nothing changed since the committed snapshot");
  }

  const snapshot = {
    generatedAt,
    ...data,
    snapshotVersion: SNAPSHOT_VERSION,
    // Sorted so the file stays diff-friendly.
    etags: Object.fromEntries([...etags.entries()].sort(([a], [b]) => a.localeCompare(b))),
  };

  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(
    `>> Wrote ${path.relative(process.cwd(), OUTPUT_FILE)}: ${snapshot.weeks.length} weeks, ` +
      `${snapshot.releases.length} releases, ` +
      `${snapshot.openPullRequests.length}/${snapshot.openPullRequestsCount} open PRs, ` +
      `${snapshot.mergedPullRequests.length} merged PRs, ` +
      `${snapshot.forumRequests.length} feature requests`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
