/**
 * Pure helpers turning the raw GitHub / forum payloads into the numbers shown
 * on the /dev/ page.
 *
 * Every function takes the reference time as an argument instead of reading
 * the clock: the page renders server-side with the snapshot timestamp, then
 * re-renders with the real time once mounted, so the markup matches on
 * hydration while the browser still shows live values.
 */

const DAY_MS = 24 * 60 * 60 * 1000;

// How many recent weeks make up the "current pace" window.
const RECENT_WEEKS = 8;

export const TIERS = [
  { key: "steady", emoji: "🌱", min: 0 },
  { key: "fast", emoji: "⚡", min: 10 },
  { key: "onFire", emoji: "🔥", min: 20 },
  { key: "supersonic", emoji: "🚀", min: 35 },
  { key: "ludicrous", emoji: "🛸", min: 50 },
  { key: "singularity", emoji: "🌌", min: 100 },
];

export function getTier(commitsPerWeek) {
  let index = 0;
  TIERS.forEach((tier, i) => {
    if (commitsPerWeek >= tier.min) {
      index = i;
    }
  });
  const tier = TIERS[index];
  const next = TIERS[index + 1] || null;
  const progress = next
    ? Math.min(
        100,
        Math.round(
          ((commitsPerWeek - tier.min) / (next.min - tier.min)) * 100
        )
      )
    : 100;
  return { ...tier, next, progress };
}

/**
 * Flattens the 52 weekly buckets into one day-by-day series, dropping the days
 * of the current week that have not happened yet.
 */
export function buildDailySeries(weeks, now) {
  const nowMs = now instanceof Date ? now.getTime() : new Date(now).getTime();
  const days = [];
  (weeks || []).forEach((week) => {
    week.d.forEach((count, dayIndex) => {
      const timestamp = (week.w + dayIndex * 86400) * 1000;
      if (timestamp <= nowMs) {
        days.push({ timestamp, count });
      }
    });
  });
  return days;
}

function sumLastDays(days, count) {
  return days.slice(-count).reduce((total, day) => total + day.count, 0);
}

function average(values) {
  if (values.length === 0) {
    return 0;
  }
  return values.reduce((total, value) => total + value, 0) / values.length;
}

// Consecutive weeks with at least one commit, ignoring the week in progress so
// a Monday morning visit never shows the streak collapsing to zero.
function computeWeeklyStreak(weeklyTotals) {
  const completed = weeklyTotals.slice(0, -1);
  let streak = 0;
  for (let i = completed.length - 1; i >= 0; i -= 1) {
    if (completed[i] > 0) {
      streak += 1;
    } else {
      break;
    }
  }
  const current = weeklyTotals[weeklyTotals.length - 1];
  return current > 0 ? streak + 1 : streak;
}

function daysBetween(from, to) {
  return Math.floor((new Date(to).getTime() - new Date(from).getTime()) / DAY_MS);
}

export function computeStats(data, now) {
  const nowDate = now instanceof Date ? now : new Date(now);
  const weeks = data.weeks || [];
  const weeklyTotals = weeks.map((week) => week.t);
  const days = buildDailySeries(weeks, nowDate);

  // The current week, Sunday to now: the same number GitHub prints as the last
  // bar of Insights > Commits, because it comes from the same payload.
  const commitsThisWeek = weeklyTotals.length
    ? weeklyTotals[weeklyTotals.length - 1]
    : 0;
  const commitsLast30Days = sumLastDays(days, 30);
  const commitsLastYear = weeklyTotals.reduce((total, week) => total + week, 0);

  // The last bucket is the week in progress: comparing it with full weeks
  // would understate the pace, so the average uses completed weeks only.
  const completedWeeks = weeklyTotals.slice(0, -1);
  const recentWeeks = completedWeeks.slice(-RECENT_WEEKS);
  const baselineWeeks = completedWeeks.slice(0, -RECENT_WEEKS);
  const recentAverage = average(recentWeeks);
  const baselineAverage = average(baselineWeeks);
  const acceleration =
    baselineAverage > 0
      ? Math.round((recentAverage / baselineAverage) * 10) / 10
      : null;

  const bestWeekTotal = weeklyTotals.length ? Math.max(...weeklyTotals) : 0;
  const activeDaysLast30 = days
    .slice(-30)
    .filter((day) => day.count > 0).length;

  const releases = data.releases || [];
  const releasesLast90Days = releases.filter(
    (release) => daysBetween(release.publishedAt, nowDate) <= 90
  );
  const changesLast90Days = releasesLast90Days.reduce(
    (total, release) => total + (release.changes || 0),
    0
  );
  const daysSinceLastRelease = releases.length
    ? Math.max(0, daysBetween(releases[0].publishedAt, nowDate))
    : null;
  const releaseCadence =
    releases.length > 1
      ? Math.max(
          1,
          Math.round(
            daysBetween(
              releases[releases.length - 1].publishedAt,
              releases[0].publishedAt
            ) /
              (releases.length - 1)
          )
        )
      : null;

  const mergedPullRequests = data.mergedPullRequests || [];
  const mergedLast30Days = mergedPullRequests.filter(
    (pullRequest) => daysBetween(pullRequest.mergedAt, nowDate) <= 30
  ).length;

  return {
    commitsThisWeek,
    commitsLast30Days,
    commitsLastYear,
    recentAverage: Math.round(recentAverage),
    baselineAverage: Math.round(baselineAverage * 10) / 10,
    baselineWeeksCount: baselineWeeks.length,
    recentWeeksCount: recentWeeks.length,
    acceleration,
    bestWeekTotal,
    weeklyStreak: computeWeeklyStreak(weeklyTotals),
    activeDaysLast30,
    releasesCount: releases.length,
    releasesLast90Days: releasesLast90Days.length,
    changesLast90Days,
    daysSinceLastRelease,
    releaseCadence,
    openPullRequestsCount:
      data.openPullRequestsCount || (data.openPullRequests || []).length,
    mergedLast30Days,
    contributorsCount: data.contributorsCount || 0,
    forumRequestsCount: (data.forumRequests || []).length,
    stars: data.repository ? data.repository.stars : 0,
    // The tier climbs with the week and starts over every Sunday, on the same
    // count GitHub shows.
    tier: getTier(commitsThisWeek),
  };
}

const HEATMAP_THRESHOLDS = [1, 3, 6, 10];

export function heatmapLevel(count) {
  if (count <= 0) {
    return 0;
  }
  let level = 1;
  HEATMAP_THRESHOLDS.forEach((threshold, index) => {
    if (count >= threshold) {
      level = index + 1;
    }
  });
  return level;
}

/**
 * Builds the GitHub-style grid: one column per week, one cell per day, plus
 * the month labels to print above the columns where the month changes.
 */
export function buildHeatmap(weeks, now) {
  const nowMs = now instanceof Date ? now.getTime() : new Date(now).getTime();
  const columns = (weeks || []).map((week) => ({
    week: week.w,
    days: week.d.map((count, dayIndex) => {
      const timestamp = (week.w + dayIndex * 86400) * 1000;
      return {
        timestamp,
        count,
        level: heatmapLevel(count),
        future: timestamp > nowMs,
      };
    }),
  }));

  const months = [];
  let lastMonth = null;
  columns.forEach((column, index) => {
    const month = new Date(column.week * 1000).getUTCMonth();
    if (month !== lastMonth) {
      months.push({ index, month, timestamp: column.week * 1000 });
      lastMonth = month;
    }
  });

  return { columns, months };
}

/**
 * Achievement keys are translated by the page; this only decides which ones
 * are unlocked and with what number.
 */
export function buildAchievements(stats) {
  const achievements = [
    {
      key: "record",
      emoji: "🏆",
      value: stats.bestWeekTotal,
      unlocked: stats.bestWeekTotal > 0,
    },
    {
      key: "streak",
      emoji: "🔥",
      value: stats.weeklyStreak,
      unlocked: stats.weeklyStreak >= 2,
    },
    {
      key: "acceleration",
      emoji: "⚡",
      value: stats.acceleration,
      unlocked: stats.acceleration !== null && stats.acceleration >= 1.5,
    },
    {
      key: "releases",
      emoji: "🚀",
      value: stats.releasesLast90Days,
      unlocked: stats.releasesLast90Days > 0,
    },
    {
      key: "cadence",
      emoji: "📦",
      value: stats.releaseCadence,
      unlocked: stats.releaseCadence !== null,
    },
    {
      key: "contributors",
      emoji: "🤝",
      value: stats.contributorsCount,
      unlocked: stats.contributorsCount > 1,
    },
    {
      key: "stars",
      emoji: "🌟",
      value: stats.stars,
      unlocked: stats.stars > 0,
    },
    {
      key: "roadmap",
      emoji: "🗳️",
      value: stats.forumRequestsCount,
      unlocked: stats.forumRequestsCount > 0,
    },
  ];
  return achievements.filter((achievement) => achievement.unlocked);
}

// Dates are always formatted in UTC: the page is pre-rendered at build time,
// and a visitor in another time zone must get the exact same string or React
// throws away the server markup on hydration.
export function formatDate(date, locale) {
  return new Date(date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDayLabel(timestamp, locale) {
  return new Date(timestamp).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }
  );
}

export function formatMonthLabel(timestamp, locale) {
  return new Date(timestamp).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    { month: "short", timeZone: "UTC" }
  );
}

export function formatRelativeTime(date, now, locale) {
  const nowMs = now instanceof Date ? now.getTime() : new Date(now).getTime();
  const diffSeconds = Math.round((new Date(date).getTime() - nowMs) / 1000);
  const formatter = new Intl.RelativeTimeFormat(
    locale === "fr" ? "fr-FR" : "en-US",
    { numeric: "auto" }
  );
  const thresholds = [
    { unit: "minute", seconds: 60 },
    { unit: "hour", seconds: 3600 },
    { unit: "day", seconds: 86400 },
    { unit: "week", seconds: 604800 },
    { unit: "month", seconds: 2592000 },
    { unit: "year", seconds: 31536000 },
  ];
  const absolute = Math.abs(diffSeconds);
  // Under a minute, rounding to 0 gives "this minute", which reads like a
  // glitch: "1 minute ago" is both closer to the truth and to plain French.
  if (absolute < 60) {
    return formatter.format(diffSeconds > 0 ? 1 : -1, "minute");
  }
  let chosen = thresholds[thresholds.length - 1];
  for (let i = 0; i < thresholds.length; i += 1) {
    const next = thresholds[i + 1];
    if (!next || absolute < next.seconds) {
      chosen = thresholds[i];
      break;
    }
  }
  return formatter.format(Math.round(diffSeconds / chosen.seconds), chosen.unit);
}

/**
 * Turns the raw GitHub label names into something readable, and keeps the ones
 * that say what a pull request is about ("type:feature" -> "feature").
 */
export function formatLabel(label) {
  return label.replace(/^[a-z]+:/, "").replace(/-/g, " ");
}

const LABEL_TONES = {
  "type:feature": "feature",
  "type:fix": "fix",
  "type:chore": "chore",
  dependencies: "chore",
};

export function labelTone(label) {
  if (LABEL_TONES[label]) {
    return LABEL_TONES[label];
  }
  if (label.startsWith("area:")) {
    return "area";
  }
  return "default";
}
