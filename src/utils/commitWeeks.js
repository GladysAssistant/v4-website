/**
 * The repositories whose commits make up the development rhythm shown on the
 * /dev/ page, and the helper adding their weekly series together.
 *
 * Only the commit chart and the commit counts span these repositories: the
 * releases, pull requests and contributors of the page stay those of Gladys
 * itself, the first entry here.
 *
 * Written as CommonJS on purpose: `scripts/load_dev_activity.js` needs it at
 * build time to write the snapshot, and the page needs the exact same
 * arithmetic to merge what it refreshes from the GitHub API in the browser.
 */

const GITHUB_OWNER = "GladysAssistant";

const COMMIT_REPOSITORIES = [
  { owner: GITHUB_OWNER, name: "Gladys" },
  { owner: GITHUB_OWNER, name: "v4-website" },
  { owner: GITHUB_OWNER, name: "gladys-gateway" },
].map((repository) => ({
  ...repository,
  url: `https://github.com/${repository.owner}/${repository.name}`,
}));

// GitHub's commit activity endpoint always answers the last 52 weeks.
const WEEKS_COUNT = 52;

// GitHub payload -> the compact shape stored in the snapshot: `w` is the Unix
// timestamp of the week's Sunday, `t` its total, `d` one count per day.
function compactWeeks(weeks) {
  return weeks.map((week) => ({
    w: week.week,
    t: week.total,
    d: week.days,
  }));
}

/**
 * Adds several weekly series (compact shape) into one, week by week and day by
 * day. The series are matched on the week timestamp rather than on their
 * position: one downloaded on a Sunday and one kept from the day before do not
 * start on the same week, and only the last 52 weeks of the union are kept so
 * the result still covers exactly one year.
 */
function mergeWeeks(seriesList) {
  const byWeek = new Map();
  seriesList.forEach((weeks) => {
    (weeks || []).forEach((week) => {
      const merged = byWeek.get(week.w) || { w: week.w, t: 0, d: [0, 0, 0, 0, 0, 0, 0] };
      merged.t += week.t;
      week.d.forEach((count, dayIndex) => {
        merged.d[dayIndex] += count;
      });
      byWeek.set(week.w, merged);
    });
  });
  return [...byWeek.values()].sort((a, b) => a.w - b.w).slice(-WEEKS_COUNT);
}

module.exports = {
  COMMIT_REPOSITORIES,
  compactWeeks,
  mergeWeeks,
};
