import React, {
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory, useLocation } from "@docusaurus/router";
import { usePluralForm } from "@docusaurus/theme-common";
import integrationCategories from "@site/src/data/integrationCategories";
import Icon from "./icons";
import {
  STORE_INDEX_URL,
  buildCatalog,
  catalogDate,
  catalogStats,
  filterCatalog,
  latestAdditions,
  snapshot,
  snapshotFromStoreIndex,
  sortCatalog,
} from "./catalog";
import styles from "./IntegrationsCatalog.module.css";

// Cards rendered at first, and added by each "Show more": the catalog is
// meant to hold thousands of integrations, so the page never mounts them all
// up front. 48 fills whole rows of 2, 3, 4 or 6 columns.
const PAGE_SIZE = 48;
const LATEST_SIZE = 6;
const SORTS = ["az", "newest", "updated"];
const ORIGINS = ["native", "community"];
const TRANSPORTS = ["local", "cloud"];

const DEFAULT_FILTERS = {
  query: "",
  category: null,
  origin: null,
  transport: null,
  author: null,
  sort: "az",
};

// The view lives in the query string (?q=shelly&category=energy…), so a
// filtered catalog can be linked to from anywhere: a guide, a forum post, the
// "can't find your device" banner of the app.
const parseFilters = (search, categoryKeys) => {
  const params = new URLSearchParams(search);
  const pick = (name, allowed) =>
    allowed.includes(params.get(name)) ? params.get(name) : null;
  return {
    query: params.get("q") || "",
    category: pick("category", categoryKeys),
    origin: pick("origin", ORIGINS),
    transport: pick("transport", TRANSPORTS),
    author: params.get("author") || null,
    sort: pick("sort", SORTS) || DEFAULT_FILTERS.sort,
  };
};

const serializeFilters = (filters) => {
  const params = new URLSearchParams();
  if (filters.query) params.set("q", filters.query);
  if (filters.category) params.set("category", filters.category);
  if (filters.origin) params.set("origin", filters.origin);
  if (filters.transport) params.set("transport", filters.transport);
  if (filters.author) params.set("author", filters.author);
  if (filters.sort !== DEFAULT_FILTERS.sort) params.set("sort", filters.sort);
  const search = params.toString();
  return search ? `?${search}` : "";
};

const CATEGORY_KEYS = integrationCategories.map(({ key }) => key);

const ORIGIN_LABELS = {
  native: translate({
    id: "integrationsCatalog.origin.native",
    message: "Native",
    description: "Badge and filter of the integrations built into Gladys",
  }),
  community: translate({
    id: "integrationsCatalog.origin.community",
    message: "Community",
    description: "Badge and filter of the integrations built by the community",
  }),
};

const TRANSPORT_LABELS = {
  local: translate({
    id: "integrationsCatalog.transport.local",
    message: "Local",
    description: "Filter of the integrations that work on the local network",
  }),
  cloud: translate({
    id: "integrationsCatalog.transport.cloud",
    message: "Cloud",
    description: "Filter of the integrations that go through a cloud service",
  }),
};

const TRANSPORT_TITLES = {
  local: translate({
    id: "integrationsCatalog.transport.localTitle",
    message: "Works on your local network",
    description: "Tooltip of the local icon on an integration card",
  }),
  cloud: translate({
    id: "integrationsCatalog.transport.cloudTitle",
    message: "Goes through a cloud service",
    description: "Tooltip of the cloud icon on an integration card",
  }),
};

const SORT_LABELS = {
  az: translate({
    id: "integrationsCatalog.sort.az",
    message: "A → Z",
    description: "Sort option: alphabetical",
  }),
  newest: translate({
    id: "integrationsCatalog.sort.newest",
    message: "Newest first",
    description: "Sort option: most recently published integrations first",
  }),
  updated: translate({
    id: "integrationsCatalog.sort.updated",
    message: "Recently updated",
    description: "Sort option: most recently updated integrations first",
  }),
};

function useFormatNumber(locale) {
  return useMemo(() => {
    const formatter = new Intl.NumberFormat(locale);
    return (value) => formatter.format(value);
  }, [locale]);
}

// "2 days ago", computed in the browser only: the server-rendered HTML must
// not depend on the day the site was built.
function useRelativeDays(locale) {
  const [now, setNow] = useState(null);
  useEffect(() => setNow(Date.now()), []);
  return useMemo(() => {
    if (!now) return () => null;
    const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
    return (time) => {
      const days = Math.max(0, Math.floor((now - time) / 86400000));
      if (days < 7) return formatter.format(-days, "day");
      if (days < 30) return formatter.format(-Math.floor(days / 7), "week");
      return formatter.format(-Math.floor(days / 30), "month");
    };
  }, [now, locale]);
}

// The community catalog: the committed snapshot (refreshed every week) on the
// server and on the first render, so that hydration matches the HTML; then,
// once mounted, the live store index, rebuilt every hour, so that a newly
// published integration shows up without waiting for the next refresh. If the
// request fails (offline, blocked), the snapshot stays.
function useCommunityCatalog() {
  const [community, setCommunity] = useState(snapshot);
  useEffect(() => {
    let cancelled = false;
    fetch(STORE_INDEX_URL)
      .then((response) => (response.ok ? response.json() : null))
      .then((index) => {
        const live = snapshotFromStoreIndex(index);
        if (live && !cancelled) {
          setCommunity(live);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return community;
}

function Sparkline({ points, label }) {
  const width = 132;
  const height = 40;
  const pad = 4;
  const counts = points.map((point) => point.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const x = (index) => pad + (index * (width - 2 * pad)) / (points.length - 1);
  const y = (count) =>
    height - pad - ((count - min) / (max - min || 1)) * (height - 2 * pad);
  const line = points
    .map((point, index) => `${index ? "L" : "M"}${x(index)},${y(point.count)}`)
    .join(" ");
  const last = points.length - 1;
  return (
    <svg
      className={styles.sparkline}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label={label}
    >
      <path
        d={`${line} L${x(last)},${height} L${x(0)},${height} Z`}
        className={styles.sparklineArea}
      />
      <path d={line} className={styles.sparklineLine} />
      <circle
        cx={x(last)}
        cy={y(points[last].count)}
        r="4"
        className={styles.sparklineDot}
      />
    </svg>
  );
}

function Hero({ stats, latest, locale }) {
  const formatNumber = useFormatNumber(locale);
  const relativeDays = useRelativeDays(locale);
  const shownContributors = stats.contributors.slice(0, 7);
  const hiddenContributors = stats.contributors.length - shownContributors.length;
  return (
    <header className={styles.hero}>
      <p className={styles.eyebrow}>
        <span className={styles.pulse} aria-hidden="true" />
        <Translate
          id="integrationsCatalog.eyebrow"
          description="Small line above the title of the integrations catalog"
        >
          Growing every day, built with the community
        </Translate>
      </p>
      <h1 className={styles.title}>
        <Translate
          id="integrationsCatalog.title"
          description="Title of the integrations catalog"
          values={{
            count: <span className={styles.titleCount}>{formatNumber(stats.total)}</span>,
          }}
        >
          {"{count} integrations, and counting"}
        </Translate>
      </h1>
      <p className={styles.subtitle}>
        <Translate
          id="integrationsCatalog.subtitle"
          description="Introduction of the integrations catalog"
        >
          The open protocols built into Gladys (Zigbee, Matter, MQTT…) and a
          catalog of community integrations that grows every day. Each one
          installs in one click and runs in its own sandbox, on your hardware.
        </Translate>
      </p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statText}>
            <span className={styles.statLabel}>
              <Translate
                id="integrationsCatalog.stat.community"
                description="Label of the number of community integrations"
              >
                Community integrations
              </Translate>
            </span>
            <span className={styles.statValue}>
              {formatNumber(stats.community)}
            </span>
            <span className={styles.statDelta}>
              <Translate
                id="integrationsCatalog.stat.communityDelta"
                description="Community integrations published in the last 30 days"
                values={{ count: formatNumber(stats.addedLast30Days) }}
              >
                {"+{count} in the last 30 days"}
              </Translate>
            </span>
          </div>
          <Sparkline
            points={stats.growth}
            label={translate(
              {
                id: "integrationsCatalog.stat.growthLabel",
                message:
                  "Community integrations over the last 12 weeks: from {from} to {to}",
                description: "Accessible label of the growth chart",
              },
              {
                from: formatNumber(stats.growth[0].count),
                to: formatNumber(stats.growth[stats.growth.length - 1].count),
              }
            )}
          />
        </div>

        <div className={styles.stat}>
          <div className={styles.statText}>
            <span className={styles.statLabel}>
              <Translate
                id="integrationsCatalog.stat.contributors"
                description="Label of the number of community contributors"
              >
                Contributors
              </Translate>
            </span>
            <span className={styles.statValue}>
              {formatNumber(stats.contributors.length)}
            </span>
            <a href="#contributors" className={styles.statDelta}>
              <Translate
                id="integrationsCatalog.stat.contributorsLink"
                description="Link to the contributors section"
              >
                Meet them
              </Translate>{" "}
              →
            </a>
          </div>
          <div className={styles.avatarStack} aria-hidden="true">
            {shownContributors.map((contributor) => (
              <img
                key={contributor.login}
                src={contributor.avatar}
                alt=""
                width="32"
                height="32"
                loading="lazy"
              />
            ))}
            {hiddenContributors > 0 && (
              <span className={styles.avatarMore}>+{hiddenContributors}</span>
            )}
          </div>
        </div>

        <div className={styles.stat}>
          <div className={styles.statText}>
            <span className={styles.statLabel}>
              <Translate
                id="integrationsCatalog.stat.updated"
                description="Label of the number of integrations updated in the last 7 days"
              >
                Updated this week
              </Translate>
            </span>
            <span className={styles.statValue}>
              {formatNumber(stats.updatedLast7Days)}
            </span>
            <span className={styles.statDetail}>
              <Translate
                id="integrationsCatalog.stat.updatedDetail"
                description="Detail of the number of integrations updated in the last 7 days"
              >
                community integrations improved in the last 7 days
              </Translate>
            </span>
          </div>
        </div>
      </div>

      {latest.length > 0 && (
        <div className={styles.latest}>
          <h2 className={styles.latestTitle}>
            <Translate
              id="integrationsCatalog.latest.title"
              description="Title of the row of the latest community integrations"
            >
              Just landed
            </Translate>
          </h2>
          <ul className={styles.latestList}>
            {latest.map((item) => (
              <li key={item.id}>
                <Link to={item.url} className={styles.latestItem}>
                  <img
                    src={item.cover}
                    alt=""
                    width="72"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    className={styles.latestCover}
                  />
                  <span className={styles.latestText}>
                    <span className={styles.latestName}>{item.name}</span>
                    <span className={styles.latestMeta}>
                      <img
                        src={item.author.avatar}
                        alt=""
                        width="16"
                        height="16"
                        loading="lazy"
                        className={styles.avatarSmall}
                      />
                      {item.author.login}
                      {relativeDays(item.firstSeenAt) && (
                        <> · {relativeDays(item.firstSeenAt)}</>
                      )}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function IntegrationCard({ item }) {
  return (
    <Link to={item.url} className={styles.card}>
      <div className={styles.coverFrame}>
        <img
          src={item.cover}
          alt=""
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          className={styles.cover}
        />
        {item.gladysPlus && (
          <span className={styles.plusBadge}>Gladys Plus</span>
        )}
        {item.isNew && (
          <span className={styles.newBadge}>
            <Translate
              id="integrationsCatalog.badge.new"
              description="Badge of a recently published integration"
            >
              New
            </Translate>
          </span>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{item.name}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.author}>
          {item.author ? (
            <>
              <img
                src={item.author.avatar}
                alt=""
                width="20"
                height="20"
                loading="lazy"
                className={styles.avatarSmall}
              />
              <span className={styles.authorName}>{item.author.login}</span>
            </>
          ) : (
            <>
              <img
                src="/img/logo.svg"
                alt=""
                width="20"
                height="20"
                className={styles.avatarSmall}
              />
              <span className={styles.authorName}>Gladys</span>
            </>
          )}
        </span>
        <span className={styles.tags}>
          {item.transports.map((transport) => (
            <span
              key={transport}
              className={styles.transport}
              title={TRANSPORT_TITLES[transport]}
            >
              <Icon name={transport === "local" ? "home" : "cloud"} size={14} />
              <span className={styles.srOnly}>{TRANSPORT_LABELS[transport]}</span>
            </span>
          ))}
          {/* The author already tells a community integration apart. */}
          {item.origin === "native" && (
            <span className={clsx(styles.pill, styles.pillNative)}>
              {ORIGIN_LABELS.native}
            </span>
          )}
        </span>
      </div>
    </Link>
  );
}

function Chip({ active, onClick, children, className }) {
  return (
    <button
      type="button"
      className={clsx(styles.chip, active && styles.chipActive, className)}
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Contributors({ contributors, onSelect, locale }) {
  const { selectMessage } = usePluralForm();
  const formatNumber = useFormatNumber(locale);
  return (
    <section id="contributors" className={styles.contributors}>
      <h2>
        <Translate
          id="integrationsCatalog.contributors.title"
          description="Title of the contributors section"
        >
          The people behind the integrations
        </Translate>
      </h2>
      <p className={styles.sectionIntro}>
        <Translate
          id="integrationsCatalog.contributors.intro"
          description="Introduction of the contributors section"
        >
          Every community integration is written, published and maintained by a
          Gladys user. Pick someone to see what they built.
        </Translate>
      </p>
      <ul className={styles.contributorList}>
        {contributors.map((contributor) => (
          <li key={contributor.login}>
            <button
              type="button"
              className={styles.contributor}
              onClick={() => onSelect(contributor.login)}
            >
              <img
                src={contributor.avatar}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <span className={styles.contributorText}>
                <span className={styles.contributorName}>
                  {contributor.login}
                </span>
                <span className={styles.contributorCount}>
                  {selectMessage(
                    contributor.count,
                    translate(
                      {
                        id: "integrationsCatalog.contributors.count",
                        message: "{count} integration|{count} integrations",
                        description:
                          "Number of integrations published by a contributor (pipe-separated plural forms)",
                      },
                      { count: formatNumber(contributor.count) }
                    )
                  )}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BuildYourOwn({ locale }) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return (
    <section className={styles.build}>
      <div className={styles.buildIcon} aria-hidden="true">
        <Icon name="plus" size={28} />
      </div>
      <div className={styles.buildText}>
        <h2>
          <Translate
            id="integrationsCatalog.build.title"
            description="Title of the call to build an integration"
          >
            Your device is missing? Build its integration
          </Translate>
        </h2>
        <p>
          <Translate
            id="integrationsCatalog.build.text"
            description="Text of the call to build an integration"
          >
            A community integration is a small Docker container published on
            GitHub: any language, no pull request, no review. It shows up in
            every Gladys within the hour.
          </Translate>
        </p>
      </div>
      <div className={styles.buildActions}>
        <Link
          className="button button--primary"
          to={`${prefix}/docs/dev/external-integrations/`}
        >
          <Translate
            id="integrationsCatalog.build.guide"
            description="Link to the developer guide of external integrations"
          >
            Read the developer guide
          </Translate>
        </Link>
        <Link
          className="button button--secondary"
          to="https://community.gladysassistant.com/"
        >
          <Translate
            id="integrationsCatalog.build.forum"
            description="Link to the community forum"
          >
            Ask the community
          </Translate>
        </Link>
      </div>
    </section>
  );
}

function IntegrationsCatalog() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const history = useHistory();
  const location = useLocation();
  const { selectMessage } = usePluralForm();
  const formatNumber = useFormatNumber(currentLocale);

  const community = useCommunityCatalog();
  const date = catalogDate(community);
  const items = useMemo(
    () => buildCatalog(currentLocale, community),
    [currentLocale, community]
  );
  const stats = useMemo(() => catalogStats(items, date), [items, date]);
  const latest = useMemo(() => latestAdditions(items, LATEST_SIZE), [items]);

  // The server renders the default view; the query string is applied once
  // mounted, so that hydration matches the server-rendered HTML.
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [ready, setReady] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const catalogRef = useRef(null);

  useEffect(() => {
    // The filters write the URL with history.replace (below): reading those
    // changes back would race with a visitor typing in the search field.
    // Only the first render, back/forward and links to a filtered view are
    // read.
    if (ready && history.action === "REPLACE") return;
    setFilters(parseFilters(location.search, CATEGORY_KEYS));
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  useEffect(() => {
    if (!ready) return;
    const search = serializeFilters(filters);
    if (search !== location.search) {
      history.replace({ ...location, search });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, ready]);

  const query = useDeferredValue(filters.query);
  const { results, categoryCounts, facetTotal } = useMemo(
    () => filterCatalog(items, { ...filters, query }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      items,
      query,
      filters.category,
      filters.origin,
      filters.transport,
      filters.author,
    ]
  );
  const sorted = useMemo(
    () => sortCatalog(results, filters.sort, currentLocale),
    [results, filters.sort, currentLocale]
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [
    query,
    filters.category,
    filters.origin,
    filters.transport,
    filters.author,
    filters.sort,
  ]);

  const update = (changes) =>
    setFilters((current) => ({ ...current, ...changes }));
  const toggle = (name, value) =>
    setFilters((current) => ({
      ...current,
      [name]: current[name] === value ? null : value,
    }));
  const hasFilters =
    filters.query ||
    filters.category ||
    filters.origin ||
    filters.transport ||
    filters.author;

  const selectAuthor = (login) => {
    setFilters({ ...DEFAULT_FILTERS, author: login, sort: "newest" });
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const shown = sorted.slice(0, visibleCount);
  const remaining = sorted.length - shown.length;
  const prefix = currentLocale === "en" ? "" : `/${currentLocale}`;

  return (
    <div className={styles.catalog}>
      <Hero stats={stats} latest={latest} locale={currentLocale} />

      <section
        id="catalog"
        ref={catalogRef}
        className={styles.browser}
        aria-labelledby="catalog-title"
      >
        <h2 id="catalog-title" className={styles.srOnly}>
          <Translate
            id="integrationsCatalog.browse.title"
            description="Accessible title of the catalog section"
          >
            Browse the integrations
          </Translate>
        </h2>

        <div className={styles.toolbar}>
          <label className={styles.search}>
            <Icon name="search" size={18} className={styles.searchIcon} />
            <span className={styles.srOnly}>
              <Translate
                id="integrationsCatalog.search.label"
                description="Accessible label of the search field"
              >
                Search an integration
              </Translate>
            </span>
            <input
              type="search"
              value={filters.query}
              onChange={(event) => update({ query: event.target.value })}
              placeholder={translate(
                {
                  id: "integrationsCatalog.search.placeholder",
                  message: "Search {count} integrations: Shelly, Zigbee, Netatmo…",
                  description: "Placeholder of the search field",
                },
                { count: formatNumber(stats.total) }
              )}
              autoComplete="off"
              spellCheck="false"
            />
            {filters.query && (
              <button
                type="button"
                className={styles.searchClear}
                onClick={() => update({ query: "" })}
                aria-label={translate({
                  id: "integrationsCatalog.search.clear",
                  message: "Clear the search",
                  description: "Button that empties the search field",
                })}
              >
                <Icon name="x" size={16} />
              </button>
            )}
          </label>
          <label className={styles.sort}>
            <span>
              <Translate
                id="integrationsCatalog.sort.label"
                description="Label of the sort selector"
              >
                Sort
              </Translate>
            </span>
            <select
              value={filters.sort}
              onChange={(event) => update({ sort: event.target.value })}
            >
              {SORTS.map((sort) => (
                <option key={sort} value={sort}>
                  {SORT_LABELS[sort]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          className={styles.categories}
          role="group"
          aria-label={translate({
            id: "integrationsCatalog.categories.label",
            message: "Categories",
            description: "Accessible label of the category filters",
          })}
        >
          <Chip
            active={!filters.category}
            onClick={() => update({ category: null })}
          >
            <Icon name="grid" />
            <Translate
              id="integrationsCatalog.categories.all"
              description="Category filter showing every integration"
            >
              All
            </Translate>
            <span className={styles.chipCount}>{formatNumber(facetTotal)}</span>
          </Chip>
          {integrationCategories.map((category) => (
            <Chip
              key={category.key}
              active={filters.category === category.key}
              onClick={() => toggle("category", category.key)}
              className={
                !categoryCounts[category.key] &&
                filters.category !== category.key
                  ? styles.chipEmpty
                  : undefined
              }
            >
              <Icon name={category.icon} />
              {category.label[currentLocale] || category.label.en}
              <span className={styles.chipCount}>
                {formatNumber(categoryCounts[category.key] || 0)}
              </span>
            </Chip>
          ))}
        </div>

        <div className={styles.facets}>
          {ORIGINS.map((origin) => (
            <Chip
              key={origin}
              active={filters.origin === origin}
              onClick={() => toggle("origin", origin)}
            >
              <Icon name={origin === "native" ? "package" : "users"} />
              {ORIGIN_LABELS[origin]}
            </Chip>
          ))}
          <span className={styles.facetSeparator} aria-hidden="true" />
          {TRANSPORTS.map((transport) => (
            <Chip
              key={transport}
              active={filters.transport === transport}
              onClick={() => toggle("transport", transport)}
            >
              <Icon name={transport === "local" ? "home" : "cloud"} />
              {TRANSPORT_LABELS[transport]}
            </Chip>
          ))}
          {filters.author && (
            <Chip active onClick={() => update({ author: null })}>
              <Translate
                id="integrationsCatalog.filter.author"
                description="Active filter on the integrations of one contributor"
                values={{ author: filters.author }}
              >
                {"By {author}"}
              </Translate>
              <Icon name="x" size={14} />
            </Chip>
          )}
          {hasFilters && (
            <button
              type="button"
              className={styles.reset}
              onClick={() =>
                setFilters({ ...DEFAULT_FILTERS, sort: filters.sort })
              }
            >
              <Translate
                id="integrationsCatalog.filter.reset"
                description="Button that clears every filter"
              >
                Reset filters
              </Translate>
            </button>
          )}
        </div>

        <p className={styles.resultCount} aria-live="polite">
          {selectMessage(
            sorted.length,
            translate(
              {
                id: "integrationsCatalog.resultCount",
                message: "{count} integration|{count} integrations",
                description:
                  "Number of integrations matching the filters (pipe-separated plural forms)",
              },
              { count: formatNumber(sorted.length) }
            )
          )}
        </p>

        {shown.length > 0 ? (
          <div className={styles.grid}>
            {shown.map((item) => (
              <IntegrationCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <h3>
              <Translate
                id="integrationsCatalog.empty.title"
                description="Title shown when no integration matches the filters"
              >
                No integration matches yet
              </Translate>
            </h3>
            <p>
              <Translate
                id="integrationsCatalog.empty.text"
                description="Text shown when no integration matches the filters"
              >
                Someone in the community may already be working on it: ask on
                the forum, or build it yourself, in any language.
              </Translate>
            </p>
            <div className={styles.emptyActions}>
              <Link
                className="button button--primary"
                to="https://community.gladysassistant.com/"
              >
                <Translate id="integrationsCatalog.build.forum">
                  Ask the community
                </Translate>
              </Link>
              <Link
                className="button button--secondary"
                to={`${prefix}/docs/dev/external-integrations/`}
              >
                <Translate id="integrationsCatalog.build.guide">
                  Read the developer guide
                </Translate>
              </Link>
            </div>
          </div>
        )}

        {remaining > 0 && (
          <div className={styles.more}>
            <button
              type="button"
              className="button button--secondary button--lg"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              <Translate
                id="integrationsCatalog.showMore"
                description="Button that shows more integrations"
                values={{
                  count: formatNumber(Math.min(PAGE_SIZE, remaining)),
                  total: formatNumber(remaining),
                }}
              >
                {"Show {count} more ({total} left)"}
              </Translate>
            </button>
          </div>
        )}
      </section>

      <Contributors
        contributors={stats.contributors}
        onSelect={selectAuthor}
        locale={currentLocale}
      />

      <BuildYourOwn locale={currentLocale} />

      <p className={styles.catalogDate}>
        <Translate
          id="integrationsCatalog.catalogDate"
          description="When the community catalog listed on the page was last refreshed"
          values={{
            // UTC, so the server and the browser print the same day.
            date: new Date(date).toLocaleDateString(currentLocale, {
              dateStyle: "long",
              timeZone: "UTC",
            }),
          }}
        >
          {"Community catalog as of {date}. The catalog inside Gladys refreshes every hour."}
        </Translate>
      </p>
    </div>
  );
}

export default IntegrationsCatalog;
