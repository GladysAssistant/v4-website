// Data and logic of the integrations catalog (/docs/integrations/): built-in
// and community integrations normalized into one list, filtered, sorted and
// summed up for the page. Pure functions, no React.

import snapshot from "@site/src/data/externalIntegrations.json";
import nativeIntegrations from "@site/src/data/nativeIntegrations";

const DAY = 24 * 60 * 60 * 1000;

// A community integration first seen less than this many days before the
// snapshot gets the "New" badge.
export const NEW_DAYS = 14;

// The GitHub organization of the core team, which also publishes a few
// integrations in the store: they are not counted as community contributors.
const CORE_TEAM = "GladysAssistant";

// Every date is relative to the snapshot, not to the clock of the visitor:
// the page renders the same on the server and in the browser, and the figures
// describe the catalog the page actually lists.
export const catalogDate = Date.parse(snapshot.generated_at);

export const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

const localePrefix = (locale) => (locale === "en" ? "" : `/${locale}`);

const parseDate = (value) => {
  const time = value ? Date.parse(value) : NaN;
  return Number.isNaN(time) ? null : time;
};

export function buildCatalog(locale) {
  const prefix = localePrefix(locale);

  const native = nativeIntegrations.map((item) => ({
    id: `native/${item.key}`,
    origin: "native",
    name: item.name[locale] || item.name.en,
    description: item.description[locale] || item.description.en,
    cover: `/img/integrations/native/${item.cover}`,
    url: `${prefix}/docs/integrations/${item.doc}/`,
    categories: item.categories,
    transports: item.transports,
    gladysPlus: Boolean(item.gladysPlus),
    author: null,
    firstSeenAt: null,
    pushedAt: null,
    isNew: false,
  }));

  const community = snapshot.integrations.map((item) => {
    const firstSeenAt = parseDate(item.first_seen_at);
    return {
      id: item.store_slug,
      origin: "community",
      name: item.name,
      description: item.description[locale] || item.description.en || "",
      cover: item.cover_url,
      url: `${prefix}/docs/integrations/external/${item.slug}/`,
      categories: item.categories || [],
      transports: item.transports || [],
      gladysPlus: false,
      author: {
        login: item.store_slug.split("/")[0],
        avatar: item.owner_avatar_url,
      },
      firstSeenAt,
      pushedAt: parseDate(item.pushed_at),
      isNew: firstSeenAt !== null && catalogDate - firstSeenAt < NEW_DAYS * DAY,
    };
  });

  return [...native, ...community].map((item) => ({
    ...item,
    searchName: normalize(item.name),
    searchText: normalize(
      [item.description, item.author ? item.author.login : "Gladys"].join(" ")
    ),
  }));
}

// Search relevance: a name that starts with the query first, then a name that
// contains it, then a match in the description or the author.
const matchScore = (item, query) => {
  if (!query) return 1;
  if (item.searchName.startsWith(query)) return 3;
  if (item.searchName.includes(query)) return 2;
  if (item.searchText.includes(query)) return 1;
  // Every word of the query somewhere: "zigbee hub", "shelly local".
  const words = query.split(/\s+/).filter(Boolean);
  if (
    words.length > 1 &&
    words.every(
      (word) => item.searchName.includes(word) || item.searchText.includes(word)
    )
  ) {
    return 1;
  }
  return 0;
};

// Every filter but the category: what the counts of the category chips are
// computed on, so each chip tells how many results it would give.
const matchesFacets = (item, { origin, transport, author }) =>
  (!origin || item.origin === origin) &&
  (!transport || item.transports.includes(transport)) &&
  (!author || (item.author && item.author.login === author));

export function filterCatalog(items, filters) {
  const query = normalize(filters.query).trim();
  const scored = [];
  const categoryCounts = {};
  let facetTotal = 0;
  items.forEach((item) => {
    const score = matchScore(item, query);
    if (!score || !matchesFacets(item, filters)) return;
    facetTotal += 1;
    item.categories.forEach((category) => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    if (filters.category && !item.categories.includes(filters.category)) {
      return;
    }
    scored.push({ item, score });
  });
  return { results: scored, categoryCounts, facetTotal };
}

const byDateDesc = (key) => (a, b) => {
  if (a[key] === b[key]) return 0;
  if (a[key] === null) return 1;
  if (b[key] === null) return -1;
  return b[key] - a[key];
};

export function sortCatalog(scored, sort, locale) {
  const collator = new Intl.Collator(locale, { sensitivity: "base" });
  const byName = (a, b) =>
    collator.compare(a.name, b.name) || (a.id < b.id ? -1 : 1);
  const compare =
    sort === "newest"
      ? byDateDesc("firstSeenAt")
      : sort === "updated"
      ? byDateDesc("pushedAt")
      : () => 0;
  return [...scored]
    .sort(
      (a, b) =>
        b.score - a.score ||
        compare(a.item, b.item) ||
        byName(a.item, b.item)
    )
    .map(({ item }) => item);
}

// The figures of the header of the page.
export function catalogStats(items) {
  const community = items.filter((item) => item.origin === "community");
  const since = (days) => catalogDate - days * DAY;

  const contributors = new Map();
  community.forEach(({ author }) => {
    if (author.login === CORE_TEAM) return;
    const entry = contributors.get(author.login) || { ...author, count: 0 };
    entry.count += 1;
    contributors.set(author.login, entry);
  });

  // Community integrations in the store at the end of each of the last 12
  // weeks, the last point being the catalog itself.
  const growth = Array.from({ length: 12 }, (_, index) => {
    const end = catalogDate - (11 - index) * 7 * DAY;
    return {
      date: end,
      count: community.filter(
        (item) => item.firstSeenAt === null || item.firstSeenAt <= end
      ).length,
    };
  });

  return {
    total: items.length,
    native: items.length - community.length,
    community: community.length,
    addedLast30Days: community.filter(
      (item) => item.firstSeenAt !== null && item.firstSeenAt > since(30)
    ).length,
    updatedLast7Days: community.filter(
      (item) => item.pushedAt !== null && item.pushedAt > since(7)
    ).length,
    contributors: [...contributors.values()].sort(
      (a, b) => b.count - a.count || a.login.localeCompare(b.login)
    ),
    growth,
  };
}

// The latest community integrations, one per author so that a contributor
// publishing a whole batch does not fill the row on their own.
export function latestAdditions(items, size) {
  const seenAuthors = new Set();
  return items
    .filter((item) => item.firstSeenAt !== null)
    .sort((a, b) => b.firstSeenAt - a.firstSeenAt || (a.id < b.id ? -1 : 1))
    .filter((item) => {
      if (seenAuthors.has(item.author.login)) return false;
      seenAuthors.add(item.author.login);
      return true;
    })
    .slice(0, size);
}
