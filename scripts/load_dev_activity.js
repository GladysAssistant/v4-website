/**
 * Builds the snapshot powering the /dev/ development activity page.
 *
 * GitHub data is public and CORS-enabled, so the page refreshes the commit,
 * release and pull request numbers in the browser. This snapshot is what gets
 * server-rendered (good for SEO and for visitors hitting the GitHub API rate
 * limit) and it is the only source for the forum feature requests, which
 * Discourse does not serve cross-origin.
 *
 * Run with `yarn load-dev-activity`. Refreshed daily by the
 * `refresh-dev-activity` workflow.
 */
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const GITHUB_OWNER = "GladysAssistant";
const GITHUB_REPO = "Gladys";
const GITHUB_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

const FORUM_URL = "https://community.gladysassistant.com";
// Feature requests (category 43) tagged "accepted" (tag 184): the roadmap the
// community voted for and that has been greenlit.
const FORUM_ACCEPTED_PATH = "/tags/c/feature-requests/43/accepted/184.json";

const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "devActivity.json");

const MAX_RELEASES = 12;
const MAX_OPEN_PULL_REQUESTS = 15;
const MAX_MERGED_PULL_REQUESTS = 12;
const MAX_CONTRIBUTORS = 12;
const MAX_FORUM_REQUESTS = 24;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MAX_ATTEMPTS = 6;
const REQUEST_TIMEOUT_MS = 20000;

async function getJson(url, { retryOn202 = false } = {}) {
  const isGitHub = url.startsWith(GITHUB_API);
  const headers = {
    Accept: isGitHub ? "application/vnd.github+json" : "application/json",
    "User-Agent": "gladysassistant-website",
  };
  // Optional: lifts the 60 requests/hour anonymous limit. The workflow passes
  // the automatic GITHUB_TOKEN, a local run works fine without one. Only ever
  // sent to the GitHub API, never to the forum.
  if (isGitHub && process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const response = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    // The statistics endpoints answer 202 while GitHub computes the cache.
    if (response.status === 202 && retryOn202) {
      console.log(`   202 from ${url}, waiting for GitHub to compute it...`);
      await sleep(3000);
      continue;
    }
    // A single 502 from GitHub should not fail the daily refresh.
    if (response.status >= 500 && attempt < MAX_ATTEMPTS - 1) {
      console.log(`   ${response.status} from ${url}, retrying...`);
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText} on ${url}`);
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
  console.log(">> Downloading repository metadata");
  const repository = await getJson(GITHUB_API);
  return {
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    openIssues: repository.open_issues_count,
    watchers: repository.subscribers_count,
    createdAt: repository.created_at,
    pushedAt: repository.pushed_at,
  };
}

async function getWeeks() {
  console.log(">> Downloading the last 52 weeks of commit activity");
  const weeks = await getJson(`${GITHUB_API}/stats/commit_activity`, {
    retryOn202: true,
  });
  // GitHub answers 202 with an empty body while it builds the statistics
  // cache; fail with something readable rather than a map() stack trace.
  if (!Array.isArray(weeks)) {
    throw new Error("Unexpected commit activity payload from GitHub");
  }
  // Compact keys: this file lands in git, and 52 weeks of verbose objects make
  // for a needlessly noisy diff.
  return weeks.map((week) => ({
    w: week.week,
    t: week.total,
    d: week.days,
  }));
}

async function getReleases() {
  console.log(">> Downloading releases");
  const releases = await getJson(`${GITHUB_API}/releases?per_page=30`);
  return releases
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
    });
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
  console.log(">> Downloading open pull requests");
  const pullRequests = await getJson(
    `${GITHUB_API}/pulls?state=open&per_page=100&sort=updated&direction=desc`
  );
  const openPullRequests = pullRequests
    .filter((pullRequest) => !pullRequest.draft)
    .map(mapPullRequest);

  return {
    openPullRequestsCount: openPullRequests.length,
    openPullRequests: openPullRequests.slice(0, MAX_OPEN_PULL_REQUESTS),
  };
}

async function getMergedPullRequests() {
  console.log(">> Downloading recently merged pull requests");
  const pullRequests = await getJson(
    `${GITHUB_API}/pulls?state=closed&per_page=100&sort=updated&direction=desc`
  );
  return pullRequests
    .filter((pullRequest) => pullRequest.merged_at)
    .map(mapPullRequest)
    .sort((a, b) => new Date(b.mergedAt) - new Date(a.mergedAt))
    .slice(0, MAX_MERGED_PULL_REQUESTS);
}

async function getContributors() {
  console.log(">> Downloading contributors");
  const contributors = await getJson(`${GITHUB_API}/contributors?per_page=100`);
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
  console.log(">> Downloading accepted feature requests from the forum");
  const topics = [];
  const users = new Map();

  // Discourse paginates tag listings; two pages cover the accepted list with
  // room to grow.
  for (let page = 0; page < 2; page += 1) {
    const url = `${FORUM_URL}${FORUM_ACCEPTED_PATH}${page > 0 ? `?page=${page}` : ""}`;
    const data = await getJson(url);
    (data.users || []).forEach((user) => users.set(user.id, user));
    const pageTopics = data.topic_list?.topics || [];
    topics.push(...pageTopics);
    if (pageTopics.length === 0) {
      break;
    }
  }

  const seen = new Set();
  return topics
    .filter((topic) => {
      if (seen.has(topic.id)) {
        return false;
      }
      seen.add(topic.id);
      return true;
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
        // The "accepted" tag is on every topic here, so it carries no signal.
        tags: (topic.tags || [])
          .filter((tag) => tag.name !== "accepted")
          .map((tag) => tag.name),
      };
    });
}

async function main() {
  const [
    repository,
    weeks,
    releases,
    { openPullRequestsCount, openPullRequests },
    mergedPullRequests,
    { contributorsCount, contributors },
    forumRequests,
  ] = await Promise.all([
    getRepository(),
    getWeeks(),
    getReleases(),
    getOpenPullRequests(),
    getMergedPullRequests(),
    getContributors(),
    getForumRequests(),
  ]);

  const snapshot = {
    generatedAt: new Date().toISOString(),
    repository: {
      owner: GITHUB_OWNER,
      name: GITHUB_REPO,
      url: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`,
      ...repository,
    },
    weeks,
    releases,
    openPullRequestsCount,
    openPullRequests,
    mergedPullRequests,
    contributorsCount,
    contributors,
    forumRequests,
  };

  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(
    `>> Wrote ${path.relative(process.cwd(), OUTPUT_FILE)}: ${weeks.length} weeks, ` +
      `${releases.length} releases, ${openPullRequests.length}/${openPullRequestsCount} open PRs, ` +
      `${mergedPullRequests.length} merged PRs, ${forumRequests.length} feature requests`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
