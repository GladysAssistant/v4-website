import React, { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluralForm } from "@docusaurus/theme-common";

import devActivitySnapshot from "../data/devActivity.json";
import {
  buildAchievements,
  buildHeatmap,
  computeStats,
  formatDate,
  formatDayLabel,
  formatLabel,
  formatMonthLabel,
  formatRelativeTime,
  labelTone,
} from "../utils/devActivity";

import styles from "./dev.module.css";

const GITHUB_API = "https://api.github.com/repos/GladysAssistant/Gladys";
const FORUM_ACCEPTED_URL =
  "https://community.gladysassistant.com/tags/c/feature-requests/43/accepted";
const MAX_RELEASES_SHOWN = 8;

const TIER_LABELS = {
  steady: translate({
    id: "devPage.tier.steady",
    description: "Development pace tier",
    message: "Steady pace",
  }),
  fast: translate({
    id: "devPage.tier.fast",
    description: "Development pace tier",
    message: "Fast lane",
  }),
  onFire: translate({
    id: "devPage.tier.onFire",
    description: "Development pace tier",
    message: "On fire",
  }),
  supersonic: translate({
    id: "devPage.tier.supersonic",
    description: "Development pace tier",
    message: "Supersonic",
  }),
  ludicrous: translate({
    id: "devPage.tier.ludicrous",
    description: "Development pace tier",
    message: "Ludicrous speed",
  }),
  singularity: translate({
    id: "devPage.tier.singularity",
    description: "Development pace tier",
    message: "Singularity",
  }),
};

// selectMessage comes from usePluralForm: Docusaurus does not read ICU plural
// syntax, plural forms are pipe-delimited and picked by count.
function achievementText(achievement, selectMessage) {
  switch (achievement.key) {
    case "record":
      return {
        title: translate({
          id: "devPage.achievement.record.title",
          description: "Achievement title",
          message: "Record week",
        }),
        detail: translate(
          {
            id: "devPage.achievement.record.detail",
            description: "Achievement detail",
            message: "{count} commits in a single week",
          },
          { count: achievement.value }
        ),
      };
    case "streak":
      return {
        title: translate({
          id: "devPage.achievement.streak.title",
          description: "Achievement title",
          message: "Streak",
        }),
        detail: translate(
          {
            id: "devPage.achievement.streak.detail",
            description: "Achievement detail",
            message: "{count} weeks in a row with commits",
          },
          { count: achievement.value }
        ),
      };
    case "acceleration":
      return {
        title: translate({
          id: "devPage.achievement.acceleration.title",
          description: "Achievement title",
          message: "Warp drive",
        }),
        detail: translate(
          {
            id: "devPage.achievement.acceleration.detail",
            description: "Achievement detail",
            message: "×{count} faster than earlier this year",
          },
          { count: achievement.value }
        ),
      };
    case "releases":
      return {
        title: translate({
          id: "devPage.achievement.releases.title",
          description: "Achievement title",
          message: "Ship it",
        }),
        detail: selectMessage(
          achievement.value,
          translate(
            {
              id: "devPage.achievement.releases.detail",
              description: "Achievement detail",
              message:
                "One release in the last 90 days|{count} releases in the last 90 days",
            },
            { count: achievement.value }
          )
        ),
      };
    case "cadence":
      return {
        title: translate({
          id: "devPage.achievement.cadence.title",
          description: "Achievement title",
          message: "Metronome",
        }),
        detail: selectMessage(
          achievement.value,
          translate(
            {
              id: "devPage.achievement.cadence.detail",
              description: "Achievement detail",
              message:
                "A release every day on average|A release every {count} days on average",
            },
            { count: achievement.value }
          )
        ),
      };
    case "contributors":
      return {
        title: translate({
          id: "devPage.achievement.contributors.title",
          description: "Achievement title",
          message: "Team effort",
        }),
        detail: translate(
          {
            id: "devPage.achievement.contributors.detail",
            description: "Achievement detail",
            message: "{count} people have contributed code",
          },
          { count: achievement.value }
        ),
      };
    case "stars":
      return {
        title: translate({
          id: "devPage.achievement.stars.title",
          description: "Achievement title",
          message: "Starred",
        }),
        detail: translate(
          {
            id: "devPage.achievement.stars.detail",
            description: "Achievement detail",
            message: "{count} stars on GitHub",
          },
          { count: achievement.value }
        ),
      };
    case "roadmap":
      return {
        title: translate({
          id: "devPage.achievement.roadmap.title",
          description: "Achievement title",
          message: "Community roadmap",
        }),
        detail: selectMessage(
          achievement.value,
          translate(
            {
              id: "devPage.achievement.roadmap.detail",
              description: "Achievement detail",
              message:
                "One feature request accepted|{count} feature requests accepted",
            },
            { count: achievement.value }
          )
        ),
      };
    default:
      return { title: achievement.key, detail: "" };
  }
}

// GitHub payloads -> the shape stored in the snapshot, so the live refresh and
// the build-time data feed the exact same rendering code.
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

// A stalled request would leave the page on the snapshot forever; eight
// seconds is well past a healthy GitHub response.
const LIVE_TIMEOUT_MS = 8000;

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    signal: AbortSignal.timeout(LIVE_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(String(response.status));
  }
  return response.json();
}

/**
 * Refreshes the GitHub half of the page straight from the public API. Anything
 * that fails (rate limit, offline, statistics still being computed by GitHub)
 * simply leaves the build-time snapshot in place.
 */
async function fetchLiveActivity() {
  const [weeks, releases, openPullRequests] = await Promise.all([
    fetchJson(`${GITHUB_API}/stats/commit_activity`).catch(() => null),
    fetchJson(`${GITHUB_API}/releases?per_page=12`).catch(() => null),
    fetchJson(
      `${GITHUB_API}/pulls?state=open&per_page=100&sort=updated&direction=desc`
    ).catch(() => null),
  ]);

  const live = {};
  if (Array.isArray(weeks) && weeks.length > 0) {
    live.weeks = weeks.map((week) => ({
      w: week.week,
      t: week.total,
      d: week.days,
    }));
  }
  if (Array.isArray(releases) && releases.length > 0) {
    live.releases = releases
      .filter((release) => !release.draft)
      .map((release) => {
        // Release notes are not re-parsed in the browser: the snapshot already
        // carries the change counts for the releases it knows about.
        const known = devActivitySnapshot.releases.find(
          (candidate) => candidate.tag === release.tag_name
        );
        return {
          tag: release.tag_name,
          name: release.name || release.tag_name,
          url: release.html_url,
          publishedAt: release.published_at,
          prerelease: release.prerelease,
          changes: known?.changes || 0,
          highlights: known?.highlights || [],
        };
      });
  }
  if (Array.isArray(openPullRequests)) {
    const open = openPullRequests
      .filter((pullRequest) => !pullRequest.draft)
      .map(mapPullRequest);
    live.openPullRequestsCount = open.length;
    live.openPullRequests = open.slice(0, 15);
  }
  return live;
}

function StatCard({ emoji, value, label, sub, accent }) {
  return (
    <div className={`${styles.statCard} ${accent ? styles.statCardAccent : ""}`}>
      <div className={styles.statEmoji} aria-hidden="true">
        {emoji}
      </div>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
      {sub ? <div className={styles.statSub}>{sub}</div> : null}
    </div>
  );
}

function WeeklyBars({ weeks, locale }) {
  const max = Math.max(1, ...weeks.map((week) => week.t));
  return (
    <div className={styles.bars} role="img" aria-label={translate({
      id: "devPage.rhythm.barsAlt",
      description: "Accessible label of the weekly commits chart",
      message: "Commits per week over the last 52 weeks",
    })}>
      {weeks.map((week) => {
        const height = Math.max(3, Math.round((week.t / max) * 100));
        return (
          <div
            key={week.w}
            className={styles.barSlot}
            title={`${formatDayLabel(week.w * 1000, locale)} · ${week.t}`}
          >
            <div className={styles.bar} style={{ height: `${height}%` }} />
          </div>
        );
      })}
    </div>
  );
}

function Heatmap({ weeks, now, locale }) {
  const { columns, months } = useMemo(
    () => buildHeatmap(weeks, now),
    [weeks, now]
  );
  return (
    <div className={styles.heatmapScroll}>
      <div
        className={styles.heatmap}
        style={{ "--dev-weeks": columns.length }}
      >
        <div className={styles.heatmapMonths}>
          {months.map((month) => (
            <span
              key={month.timestamp}
              className={styles.heatmapMonth}
              style={{ gridColumn: month.index + 1 }}
            >
              {formatMonthLabel(month.timestamp, locale)}
            </span>
          ))}
        </div>
        <div className={styles.heatmapGrid}>
          {columns.map((column) => (
            <div key={column.week} className={styles.heatmapColumn}>
              {column.days.map((day) => (
                <span
                  key={day.timestamp}
                  className={`${styles.heatmapCell} ${
                    styles[`level${day.level}`]
                  } ${day.future ? styles.heatmapCellFuture : ""}`}
                  title={`${formatDayLabel(day.timestamp, locale)} · ${
                    day.count
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PullRequestLabels({ labels }) {
  const shown = labels
    .filter((label) => label.startsWith("type:") || label.startsWith("area:"))
    .slice(0, 4);
  if (shown.length === 0) {
    return null;
  }
  return (
    <div className={styles.labels}>
      {shown.map((label) => (
        <span
          key={label}
          className={`${styles.label} ${styles[`tone_${labelTone(label)}`]}`}
        >
          {formatLabel(label)}
        </span>
      ))}
    </div>
  );
}

function DevPage() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const { selectMessage } = usePluralForm();

  const [data, setData] = useState(devActivitySnapshot);
  // Rendered server-side with the snapshot timestamp so the markup produced at
  // build time matches the first client render, then switched to the real
  // clock once mounted.
  const [now, setNow] = useState(() => new Date(devActivitySnapshot.generatedAt));
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let alive = true;
    setNow(new Date());
    fetchLiveActivity()
      .then((live) => {
        if (!alive || Object.keys(live).length === 0) {
          return;
        }
        setData((current) => ({ ...current, ...live }));
        setNow(new Date());
        setIsLive(true);
      })
      .catch(() => {
        /* the snapshot stays on screen */
      });
    return () => {
      alive = false;
    };
  }, []);

  const stats = useMemo(() => computeStats(data, now), [data, now]);
  const achievements = useMemo(() => buildAchievements(stats), [stats]);
  const tierLabel = TIER_LABELS[stats.tier.key];

  // The snapshot keeps more releases than the page shows: the extra ones feed
  // the release cadence stat without turning the timeline into a changelog.
  const releases = (data.releases || []).slice(0, MAX_RELEASES_SHOWN);
  const openPullRequests = data.openPullRequests || [];
  const mergedPullRequests = data.mergedPullRequests || [];
  const forumRequests = data.forumRequests || [];
  const contributors = data.contributors || [];

  return (
    <Layout
      title={translate({
        id: "devPage.title",
        description: "Dev activity page title",
        message: "Development activity",
      })}
      description={translate({
        id: "devPage.metaDescription",
        description: "Dev activity page meta description",
        message:
          "Follow the development pace of Gladys Assistant live: commits per week, latest releases, work in progress and the community feature requests already accepted.",
      })}
    >
      <main className={styles.page}>
        <div className="container">
          {/* HERO ---------------------------------------------------------- */}
          <header className={styles.hero}>
            <span className={styles.eyebrow}>
              <span className={styles.liveDot} aria-hidden="true" />
              {isLive ? (
                <Translate
                  id="devPage.eyebrow.live"
                  description="Live badge when the GitHub API answered"
                >
                  Live from GitHub
                </Translate>
              ) : (
                <Translate
                  id="devPage.eyebrow.snapshot"
                  description="Badge shown when only the snapshot is available"
                >
                  Updated automatically
                </Translate>
              )}
            </span>
            <h1 className={styles.heroTitle}>
              <Translate id="devPage.h1" description="Dev activity page H1">
                The development rhythm of Gladys
              </Translate>
            </h1>
            <p className={styles.heroLead}>
              <Translate
                id="devPage.lead"
                description="Dev activity page lead paragraph"
              >
                Gladys is built in the open, one commit at a time. Everything on
                this page comes straight from the public GitHub repository and
                from the community forum, with nothing curated in between.
              </Translate>
            </p>
            <p className={styles.updatedAt}>
              {isLive ? (
                <Translate
                  id="devPage.updatedJustNow"
                  description="Last update line once the live refresh succeeded"
                >
                  Last updated just now
                </Translate>
              ) : (
                <Translate
                  id="devPage.updatedAt"
                  description="Last update line"
                  values={{
                    time: (
                      <strong key="time">
                        {formatRelativeTime(data.generatedAt, now, locale)}
                      </strong>
                    ),
                  }}
                >
                  {"Last updated {time}"}
                </Translate>
              )}
            </p>
          </header>

          {/* PACE ---------------------------------------------------------- */}
          <section className={styles.paceCard} aria-labelledby="pace-title">
            <div className={styles.paceEmoji} aria-hidden="true">
              {stats.tier.emoji}
            </div>
            <div className={styles.paceBody}>
              <div className={styles.paceKicker}>
                <Translate
                  id="devPage.pace.kicker"
                  description="Pace card kicker"
                >
                  Current pace
                </Translate>
              </div>
              <h2 id="pace-title" className={styles.paceTitle}>
                {tierLabel}
              </h2>
              <p className={styles.paceCount}>
                <Translate
                  id="devPage.pace.count"
                  description="Commits in the last 7 days"
                  values={{
                    count: (
                      <strong key="count" className={styles.paceNumber}>
                        {stats.commitsLast7Days}
                      </strong>
                    ),
                  }}
                >
                  {"{count} commits in the last 7 days"}
                </Translate>
              </p>
              <div
                className={styles.progressTrack}
                role="progressbar"
                aria-valuenow={stats.tier.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={tierLabel}
              >
                <div
                  className={styles.progressFill}
                  style={{ width: `${stats.tier.progress}%` }}
                />
              </div>
              <div className={styles.progressLegend}>
                {stats.tier.next ? (
                  selectMessage(
                    stats.tier.next.min - stats.commitsLast7Days,
                    translate(
                      {
                        id: "devPage.pace.next",
                        description: "Progress to the next pace tier",
                        message:
                          "One commit away from {tier}|{count} commits away from {tier}",
                      },
                      {
                        count: stats.tier.next.min - stats.commitsLast7Days,
                        tier: TIER_LABELS[stats.tier.next.key],
                      }
                    )
                  )
                ) : (
                  <Translate
                    id="devPage.pace.max"
                    description="Top pace tier reached"
                  >
                    Top tier unlocked. There is no level above this one.
                  </Translate>
                )}
              </div>
            </div>
          </section>

          {/* STATS --------------------------------------------------------- */}
          <section className={styles.statGrid} aria-label={translate({
            id: "devPage.stats.aria",
            description: "Stats grid accessible label",
            message: "Key development numbers",
          })}>
            <StatCard
              emoji="⌨️"
              value={stats.commitsLast30Days}
              accent
              label={
                <Translate
                  id="devPage.stat.commits30"
                  description="Stat label"
                >
                  Commits in 30 days
                </Translate>
              }
              sub={selectMessage(
                stats.activeDaysLast30,
                translate(
                  {
                    id: "devPage.stat.commits30Sub",
                    description: "Stat sublabel",
                    message: "One active day|{count} active days",
                  },
                  { count: stats.activeDaysLast30 }
                )
              )}
            />
            <StatCard
              emoji="📈"
              value={stats.recentAverage}
              label={
                <Translate id="devPage.stat.average" description="Stat label">
                  Commits per week
                </Translate>
              }
              sub={
                <Translate
                  id="devPage.stat.averageSub"
                  description="Stat sublabel"
                  values={{ count: stats.recentWeeksCount }}
                >
                  {"Average over {count} weeks"}
                </Translate>
              }
            />
            {stats.acceleration ? (
              <StatCard
                emoji="⚡"
                value={`×${stats.acceleration}`}
                accent
                label={
                  <Translate
                    id="devPage.stat.acceleration"
                    description="Stat label"
                  >
                    Acceleration
                  </Translate>
                }
                sub={
                  <Translate
                    id="devPage.stat.accelerationSub"
                    description="Stat sublabel"
                    values={{ count: stats.baselineWeeksCount }}
                  >
                    {"vs the {count} weeks before"}
                  </Translate>
                }
              />
            ) : null}
            <StatCard
              emoji="🚀"
              value={stats.releasesLast90Days}
              label={
                <Translate id="devPage.stat.releases" description="Stat label">
                  Releases in 90 days
                </Translate>
              }
              sub={
                stats.releaseCadence
                  ? selectMessage(
                      stats.releaseCadence,
                      translate(
                        {
                          id: "devPage.stat.releasesSub",
                          description: "Stat sublabel",
                          message: "One every day|One every {count} days",
                        },
                        { count: stats.releaseCadence }
                      )
                    )
                  : null
              }
            />
            <StatCard
              emoji="🛠️"
              value={stats.openPullRequestsCount}
              label={
                <Translate id="devPage.stat.openPrs" description="Stat label">
                  Pull requests in flight
                </Translate>
              }
              sub={
                <Translate
                  id="devPage.stat.openPrsSub"
                  description="Stat sublabel"
                >
                  Being reviewed right now
                </Translate>
              }
            />
            <StatCard
              emoji="🤝"
              value={stats.contributorsCount}
              label={
                <Translate
                  id="devPage.stat.contributors"
                  description="Stat label"
                >
                  Contributors
                </Translate>
              }
              sub={
                <Translate
                  id="devPage.stat.contributorsSub"
                  description="Stat sublabel"
                >
                  Since the very first commit
                </Translate>
              }
            />
          </section>

          {/* RHYTHM -------------------------------------------------------- */}
          <section className={styles.panel} aria-labelledby="rhythm-title">
            <div className={styles.panelHead}>
              <h2 id="rhythm-title" className={styles.panelTitle}>
                <Translate id="devPage.rhythm.title" description="Section title">
                  One year of commits
                </Translate>
              </h2>
              <p className={styles.panelIntro}>
                <Translate
                  id="devPage.rhythm.intro"
                  description="Section intro"
                  values={{ count: stats.commitsLastYear }}
                >
                  {"{count} commits over the last 52 weeks. Each bar is a week, each square below is a day."}
                </Translate>
              </p>
            </div>
            <WeeklyBars weeks={data.weeks || []} locale={locale} />
            <Heatmap weeks={data.weeks || []} now={now} locale={locale} />
            <div className={styles.heatmapLegend}>
              <span>
                <Translate
                  id="devPage.rhythm.less"
                  description="Heatmap legend low end"
                >
                  Quiet
                </Translate>
              </span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={`${styles.heatmapCell} ${styles[`level${level}`]}`}
                />
              ))}
              <span>
                <Translate
                  id="devPage.rhythm.more"
                  description="Heatmap legend high end"
                >
                  Busy
                </Translate>
              </span>
            </div>
          </section>

          {/* ACHIEVEMENTS -------------------------------------------------- */}
          <section className={styles.section} aria-labelledby="badges-title">
            <h2 id="badges-title" className={styles.sectionTitle}>
              <Translate id="devPage.badges.title" description="Section title">
                Badges unlocked
              </Translate>
            </h2>
            <div className={styles.badgeGrid}>
              {achievements.map((achievement) => {
                const text = achievementText(achievement, selectMessage);
                return (
                  <div key={achievement.key} className={styles.badge}>
                    <span className={styles.badgeEmoji} aria-hidden="true">
                      {achievement.emoji}
                    </span>
                    <div>
                      <div className={styles.badgeTitle}>{text.title}</div>
                      <div className={styles.badgeDetail}>{text.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* RELEASES ------------------------------------------------------ */}
          <section className={styles.section} aria-labelledby="releases-title">
            <h2 id="releases-title" className={styles.sectionTitle}>
              <Translate id="devPage.releases.title" description="Section title">
                Latest releases
              </Translate>
            </h2>
            <p className={styles.sectionIntro}>
              {stats.daysSinceLastRelease === 0 ? (
                <Translate
                  id="devPage.releases.introToday"
                  description="Release intro when a release shipped today"
                >
                  A new version shipped today. Every release note lives on
                  GitHub, click a version to read it.
                </Translate>
              ) : (
                selectMessage(
                  stats.daysSinceLastRelease,
                  translate(
                    {
                      id: "devPage.releases.intro",
                      description: "Release intro",
                      message:
                        "Last release yesterday. Click a version to read its full release note on GitHub.|Last release {count} days ago. Click a version to read its full release note on GitHub.",
                    },
                    { count: stats.daysSinceLastRelease }
                  )
                )
              )}
            </p>
            <ol className={styles.timeline}>
              {releases.map((release, index) => (
                <li key={release.tag} className={styles.timelineItem}>
                  <span
                    className={`${styles.timelineDot} ${
                      index === 0 ? styles.timelineDotLatest : ""
                    }`}
                    aria-hidden="true"
                  />
                  <Link
                    className={styles.releaseCard}
                    to={release.url}
                    aria-label={release.name}
                  >
                    <div className={styles.releaseHead}>
                      <span className={styles.releaseTag}>{release.tag}</span>
                      {index === 0 ? (
                        <span className={styles.releaseLatest}>
                          <Translate
                            id="devPage.releases.latest"
                            description="Latest release badge"
                          >
                            Latest
                          </Translate>
                        </span>
                      ) : null}
                      {release.prerelease ? (
                        <span className={styles.releasePre}>
                          <Translate
                            id="devPage.releases.prerelease"
                            description="Pre-release badge"
                          >
                            Beta
                          </Translate>
                        </span>
                      ) : null}
                      <span className={styles.releaseDate}>
                        {formatDate(release.publishedAt, locale)}
                      </span>
                    </div>
                    {release.changes ? (
                      <div className={styles.releaseChanges}>
                        {selectMessage(
                          release.changes,
                          translate(
                            {
                              id: "devPage.releases.changes",
                              description: "Number of changes in a release",
                              message:
                                "One change merged|{count} changes merged",
                            },
                            { count: release.changes }
                          )
                        )}
                      </div>
                    ) : null}
                    {release.highlights && release.highlights.length > 0 ? (
                      <ul className={styles.releaseHighlights}>
                        {release.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ol>
            <p className={styles.sectionMore}>
              <Link to="https://github.com/GladysAssistant/Gladys/releases">
                <Translate
                  id="devPage.releases.all"
                  description="Link to all releases"
                >
                  See every release on GitHub →
                </Translate>
              </Link>
            </p>
          </section>

          {/* IN PROGRESS --------------------------------------------------- */}
          <section className={styles.section} aria-labelledby="inprogress-title">
            <h2 id="inprogress-title" className={styles.sectionTitle}>
              <Translate
                id="devPage.inProgress.title"
                description="Section title"
              >
                Being built right now
              </Translate>
            </h2>
            <p className={styles.sectionIntro}>
              {selectMessage(
                stats.openPullRequestsCount,
                translate(
                  {
                    id: "devPage.inProgress.intro",
                    description: "Section intro",
                    message:
                      "One pull request is open on the repository right now.|{count} pull requests are open on the repository. Here are the ones that moved most recently.",
                  },
                  { count: stats.openPullRequestsCount }
                )
              )}
            </p>
            <div className={styles.cardGrid}>
              {openPullRequests.map((pullRequest) => (
                <Link
                  key={pullRequest.number}
                  to={pullRequest.url}
                  className={styles.prCard}
                >
                  <div className={styles.prHead}>
                    <img
                      className={styles.avatar}
                      src={`${pullRequest.avatar}&s=48`}
                      alt=""
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                    <span className={styles.prAuthor}>{pullRequest.author}</span>
                    <span className={styles.prNumber}>#{pullRequest.number}</span>
                  </div>
                  <div className={styles.prTitle}>{pullRequest.title}</div>
                  <PullRequestLabels labels={pullRequest.labels} />
                  <div className={styles.prMeta}>
                    <Translate
                      id="devPage.inProgress.updated"
                      description="Pull request updated time"
                      values={{
                        time: formatRelativeTime(
                          pullRequest.updatedAt,
                          now,
                          locale
                        ),
                      }}
                    >
                      {"Updated {time}"}
                    </Translate>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* JUST SHIPPED -------------------------------------------------- */}
          {mergedPullRequests.length > 0 ? (
            <section className={styles.panel} aria-labelledby="shipped-title">
              <div className={styles.panelHead}>
                <h2 id="shipped-title" className={styles.panelTitle}>
                  <Translate
                    id="devPage.shipped.title"
                    description="Section title"
                  >
                    Just shipped
                  </Translate>
                </h2>
                <p className={styles.panelIntro}>
                  {selectMessage(
                    stats.mergedLast30Days,
                    translate(
                      {
                        id: "devPage.shipped.intro",
                        description: "Section intro",
                        message:
                          "One pull request merged in the last 30 days.|{count} pull requests merged in the last 30 days.",
                      },
                      { count: stats.mergedLast30Days }
                    )
                  )}
                </p>
              </div>
              <ul className={styles.shippedList}>
                {mergedPullRequests.map((pullRequest) => (
                  <li key={pullRequest.number} className={styles.shippedItem}>
                    <span className={styles.shippedCheck} aria-hidden="true">
                      ✓
                    </span>
                    <Link to={pullRequest.url} className={styles.shippedTitle}>
                      {pullRequest.title}
                    </Link>
                    <span className={styles.shippedMeta}>
                      {pullRequest.author} ·{" "}
                      {formatRelativeTime(pullRequest.mergedAt, now, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* FORUM REQUESTS ------------------------------------------------ */}
          <section className={styles.section} aria-labelledby="requests-title">
            <h2 id="requests-title" className={styles.sectionTitle}>
              <Translate id="devPage.requests.title" description="Section title">
                Accepted by the community
              </Translate>
            </h2>
            <p className={styles.sectionIntro}>
              <Translate
                id="devPage.requests.intro"
                description="Section intro"
              >
                Anyone can suggest a feature on the forum. Once a request is
                validated it gets the "accepted" tag and joins the roadmap.
                These are the ones waiting to be built.
              </Translate>
            </p>
            <div className={styles.cardGrid}>
              {forumRequests.map((request) => (
                <Link
                  key={request.id}
                  to={request.url}
                  className={styles.requestCard}
                >
                  <span className={styles.acceptedBadge}>
                    <Translate
                      id="devPage.requests.accepted"
                      description="Accepted tag badge"
                    >
                      ✓ accepted
                    </Translate>
                  </span>
                  <div className={styles.requestTitle}>{request.title}</div>
                  <div className={styles.requestMeta}>
                    <span>👁️ {request.views}</span>
                    <span>💬 {request.replies}</span>
                    {request.author ? <span>· {request.author}</span> : null}
                  </div>
                </Link>
              ))}
            </div>
            <p className={styles.sectionMore}>
              <Link to={FORUM_ACCEPTED_URL}>
                <Translate
                  id="devPage.requests.all"
                  description="Link to the forum"
                >
                  Browse every accepted request on the forum →
                </Translate>
              </Link>
            </p>
          </section>

          {/* CONTRIBUTORS -------------------------------------------------- */}
          {contributors.length > 0 ? (
            <section className={styles.section} aria-labelledby="people-title">
              <h2 id="people-title" className={styles.sectionTitle}>
                <Translate id="devPage.people.title" description="Section title">
                  The people behind the commits
                </Translate>
              </h2>
              <div className={styles.people}>
                {contributors.map((contributor, index) => (
                  <Link
                    key={contributor.login}
                    to={contributor.url}
                    className={styles.person}
                    title={`${contributor.login} · ${contributor.contributions}`}
                  >
                    <img
                      className={styles.personAvatar}
                      src={`${contributor.avatar}&s=96`}
                      alt=""
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <span className={styles.personName}>
                      {index < 3 ? ["🥇", "🥈", "🥉"][index] : ""}{" "}
                      {contributor.login}
                    </span>
                    <span className={styles.personCount}>
                      {contributor.contributions}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTA ----------------------------------------------------------- */}
          <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>
              <Translate id="devPage.cta.title" description="CTA title">
                Want to influence what comes next?
              </Translate>
            </h2>
            <p className={styles.ctaBody}>
              <Translate id="devPage.cta.body" description="CTA body">
                Every feature on this page started as an idea from someone using
                Gladys at home. Share yours on the forum, or open a pull request
                if you speak JavaScript.
              </Translate>
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className={styles.ctaPrimary}
                to="https://community.gladysassistant.com/c/feature-requests/43"
              >
                <Translate
                  id="devPage.cta.forum"
                  description="CTA forum button"
                >
                  Suggest a feature
                </Translate>
              </Link>
              <Link
                className={styles.ctaSecondary}
                to="https://github.com/GladysAssistant/Gladys"
              >
                <Translate
                  id="devPage.cta.github"
                  description="CTA GitHub button"
                >
                  Browse the code
                </Translate>
              </Link>
              <Link className={styles.ctaSecondary} to="/open/">
                <Translate id="devPage.cta.open" description="CTA open button">
                  See the open metrics
                </Translate>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default DevPage;
