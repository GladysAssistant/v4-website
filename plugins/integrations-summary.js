// The figures of the integrations catalog the homepage shows: how many
// integrations Gladys has, per category, and the brands of its marquee.
//
// They are computed at build time from the same data as the catalog page
// (/docs/integrations/): the built-in integrations of
// src/data/nativeIntegrations.js and the snapshot of the community store in
// src/data/externalIntegrations.json. That snapshot weighs about 1 MB: going
// through a plugin keeps it out of the homepage bundle, which only receives
// the few numbers below (`usePluginData("integrations-summary")`). Every
// `yarn load-external-integrations` refresh updates them on the next build.

const fs = require("fs");
const path = require("path");

const NATIVE_FILE = path.join(__dirname, "../src/data/nativeIntegrations.js");
const COMMUNITY_FILE = path.join(
  __dirname,
  "../src/data/externalIntegrations.json"
);
const SHOWCASE_FILE = path.join(
  __dirname,
  "../src/data/homeIntegrationsShowcase.js"
);

const DAY = 24 * 60 * 60 * 1000;

// Fresh copies on every load, so `docusaurus start` picks up an edit.
const load = (file) => {
  delete require.cache[require.resolve(file)];
  return require(file);
};

function summarize() {
  const native = load(NATIVE_FILE);
  const community = JSON.parse(fs.readFileSync(COMMUNITY_FILE, "utf8"));
  const showcase = load(SHOWCASE_FILE);

  // Dates are relative to the snapshot, like on the catalog page, so the
  // figures describe the catalog the site actually lists.
  const catalogDate = Date.parse(community.generated_at);

  const items = [
    ...native.map((item) => ({
      name: item.name.en,
      path: `docs/integrations/${item.doc}/`,
      categories: item.categories || [],
      transports: item.transports || [],
      firstSeenAt: null,
    })),
    ...community.integrations.map((item) => ({
      name: item.name,
      // An integration published after the last snapshot has no page yet.
      path: item.slug ? `docs/integrations/external/${item.slug}/` : null,
      categories: item.categories || [],
      transports: item.transports || [],
      firstSeenAt: item.first_seen_at ? Date.parse(item.first_seen_at) : null,
    })),
  ];

  const categoryCounts = {};
  items.forEach((item) =>
    item.categories.forEach((category) => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    })
  );

  // The first integration of a name wins: a built-in one before a community
  // one carrying the same name.
  const byName = new Map();
  items.forEach((item) => {
    if (item.path && !byName.has(item.name)) byName.set(item.name, item);
  });

  return {
    generatedAt: community.generated_at,
    total: items.length,
    native: native.length,
    community: community.integrations.length,
    // Local and nothing else: an integration that also declares `cloud` has a
    // path through someone's servers, so it is not counted as cloud-free.
    localOnly: items.filter(
      (item) =>
        item.transports.includes("local") &&
        !item.transports.includes("cloud")
    ).length,
    addedLast30Days: community.integrations.filter(
      (item) =>
        item.first_seen_at &&
        catalogDate - Date.parse(item.first_seen_at) < 30 * DAY
    ).length,
    categories: Object.entries(categoryCounts)
      .map(([key, count]) => ({ key, count }))
      .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key)),
    showcase: showcase.map((row) =>
      row
        .filter((entry) => byName.has(entry.name))
        .map((entry) => {
          const item = byName.get(entry.name);
          return {
            label: entry.label || entry.name,
            path: item.path,
            category: item.categories[0] || null,
          };
        })
    ),
  };
}

module.exports = function integrationsSummaryPlugin() {
  return {
    name: "integrations-summary",

    getPathsToWatch() {
      return [NATIVE_FILE, COMMUNITY_FILE, SHOWCASE_FILE];
    },

    async loadContent() {
      return summarize();
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};
