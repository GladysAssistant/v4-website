// The integrations of the homepage: the brands scrolling under the hero, and
// the section that tells how many integrations Gladys has, with a search box
// and the categories of the catalog (/docs/integrations/).
//
// The figures come from plugins/integrations-summary.js, computed at build
// time from the same data as the catalog page.

import React, { useState } from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";
import Translate, { translate } from "@docusaurus/Translate";

import Icon from "../integrations/icons";
import integrationCategories from "../../data/integrationCategories";
import horizon from "../horizon/styles.module.css";
import styles from "./integrations.module.css";

const localePrefix = (lang) => (lang === "en" ? "" : `/${lang}`);

const ICON_BY_CATEGORY = Object.fromEntries(
  integrationCategories.map(({ key, icon }) => [key, icon])
);

/**
 * The integrations summary, with the numbers formatted for the locale:
 * `rounded` is the total rounded down to the hundred ("1,000"), for the
 * "1,000+ integrations" claims, `exact` is the total itself ("1,041").
 */
export function useIntegrationsSummary(lang) {
  const summary = usePluginData("integrations-summary");
  const format = (value) => new Intl.NumberFormat(lang).format(value);
  return {
    ...summary,
    format,
    rounded: format(Math.floor(summary.total / 100) * 100),
    exact: format(summary.total),
    catalogUrl: `${localePrefix(lang)}/docs/integrations/`,
  };
}

const MarqueeRow = ({ items, lang, reverse }) => {
  const chips = (copy) =>
    items.map((item) => (
      <Link
        key={`${copy}-${item.path}`}
        className={styles.chip}
        to={`${localePrefix(lang)}/${item.path}`}
        // The second copy only exists to loop the animation seamlessly.
        tabIndex={copy === "copy" ? -1 : undefined}
      >
        <span className={styles.chipIcon}>
          <Icon name={ICON_BY_CATEGORY[item.category] || "grid"} size={14} />
        </span>
        {item.label}
      </Link>
    ));

  return (
    <div
      className={classnames(styles.marqueeTrack, {
        [styles.marqueeTrackReverse]: reverse,
      })}
    >
      <div className={styles.marqueeGroup}>{chips("main")}</div>
      <div className={styles.marqueeGroup} aria-hidden="true">
        {chips("copy")}
      </div>
    </div>
  );
};

/**
 * The strip under the hero buttons: a few dozen brands people own, scrolling
 * on two rows, under the total of the catalog.
 */
export function IntegrationsMarquee({ lang }) {
  const { showcase, exact, catalogUrl } = useIntegrationsSummary(lang);

  return (
    <div className={styles.marqueeBlock}>
      <p className={styles.marqueeLabel}>
        <Translate
          id="home.integrations.marqueeLabel"
          description="Label above the scrolling brands under the homepage hero. {count} is the exact number of integrations (e.g. 1,041), shown as a link to the catalog."
          values={{
            count: (
              <Link to={catalogUrl} className={styles.marqueeCount}>
                <Translate
                  id="home.integrations.marqueeCount"
                  description="The link of the label above the scrolling brands of the homepage. {count} is the exact number of integrations (e.g. 1,041)."
                  values={{ count: exact }}
                >
                  {"{count} integrations"}
                </Translate>
              </Link>
            ),
          }}
        >
          {"Works with the devices you already own: {count}, and counting"}
        </Translate>
      </p>
      <div className={styles.marquee}>
        {showcase.map((row, index) => (
          <MarqueeRow
            key={index}
            items={row}
            lang={lang}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

const SearchForm = ({ catalogUrl }) => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  // Without JavaScript the form still works: it is a plain GET to the
  // catalog, which reads its search from `?q=`.
  const onSubmit = (event) => {
    event.preventDefault();
    const q = query.trim();
    history.push(q ? `${catalogUrl}?q=${encodeURIComponent(q)}` : catalogUrl);
  };

  const label = translate({
    id: "home.integrations.searchLabel",
    description:
      "Accessible label of the search box of the homepage integrations section",
    message: "Search for a brand or a device",
  });

  return (
    <form
      className={styles.search}
      action={catalogUrl}
      method="get"
      role="search"
      onSubmit={onSubmit}
    >
      <span className={styles.searchIcon}>
        <Icon name="search" size={20} />
      </span>
      <input
        className={styles.searchInput}
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label={label}
        placeholder={translate({
          id: "home.integrations.searchPlaceholder",
          description:
            "Placeholder of the search box of the homepage integrations section: a few well-known brands",
          message: "Philips Hue, Shelly, Sonos, Daikin…",
        })}
        autoComplete="off"
      />
      <button
        type="submit"
        className={classnames(
          horizon.btn,
          horizon.btnPrimary,
          styles.searchButton
        )}
      >
        <Translate
          id="home.integrations.searchButton"
          description="Button of the search box of the homepage integrations section"
        >
          Check
        </Translate>
      </button>
    </form>
  );
};

const Stat = ({ value, label }) => (
  <div className={styles.stat}>
    <span className={styles.statValue}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

/**
 * The integrations section, right after the hero: the total, a search box to
 * check a device, and one card per category of the catalog.
 */
export function IntegrationsSection({ lang }) {
  const {
    categories,
    local,
    addedLast30Days,
    format,
    rounded,
    exact,
    catalogUrl,
  } = useIntegrationsSummary(lang);

  const countByCategory = Object.fromEntries(
    categories.map(({ key, count }) => [key, count])
  );

  return (
    <section className={horizon.section} id="integrations">
      <div className={horizon.sectionHeader}>
        <span className={horizon.eyebrow}>
          <Translate
            id="home.integrations.eyebrow"
            description="Eyebrow above the integrations section of the homepage. {count} is the total rounded down to the hundred (e.g. 1,000)."
            values={{ count: rounded }}
          >
            {"{count}+ integrations"}
          </Translate>
        </span>
        <h2 className={horizon.sectionTitle}>
          <Translate
            id="home.compatibilities.title"
            description="Title of the integrations section of the homepage"
          >
            Works With Everything You Own
          </Translate>
        </h2>
        <p className={horizon.sectionLead}>
          <Translate
            id="home.integrations.lead"
            description="Lead of the integrations section of the homepage. {count} is the total rounded down to the hundred (e.g. 1,000)."
            values={{ count: rounded }}
          >
            {
              "Lights, heating, cameras, solar panels, appliances, TVs, cars: more than {count} integrations bring them into one app, each installed in one click. Zigbee, Matter and MQTT add thousands of devices from any brand."
            }
          </Translate>
        </p>
      </div>

      <SearchForm catalogUrl={catalogUrl} />

      <div className={styles.stats}>
        <Stat
          value={exact}
          label={
            <Translate
              id="home.integrations.statTotal"
              description="Label under the total number of integrations, homepage"
            >
              integrations available
            </Translate>
          }
        />
        <Stat
          value={format(local)}
          label={
            <Translate
              id="home.integrations.statLocal"
              description="Label under the number of integrations that work locally, homepage"
            >
              run 100% locally, no cloud
            </Translate>
          }
        />
        {addedLast30Days > 0 && (
          <Stat
            value={`+${format(addedLast30Days)}`}
            label={
              <Translate
                id="home.integrations.statNew"
                description="Label under the number of integrations added to the catalog in the last 30 days, homepage"
              >
                added in the last 30 days
              </Translate>
            }
          />
        )}
      </div>

      <div className={styles.categoryGrid}>
        {integrationCategories
          .filter(({ key }) => countByCategory[key])
          .map(({ key, icon, label }) => (
            <Link
              key={key}
              className={styles.category}
              to={`${catalogUrl}?category=${key}`}
            >
              <span className={styles.categoryIcon}>
                <Icon name={icon} size={20} />
              </span>
              <span className={styles.categoryText}>
                <span className={styles.categoryLabel}>
                  {label[lang] || label.en}
                </span>
                <span className={styles.categoryCount}>
                  <Translate
                    id="home.integrations.categoryCount"
                    description="Number of integrations of a category card, homepage. {count} is a number."
                    values={{ count: format(countByCategory[key]) }}
                  >
                    {"{count} integrations"}
                  </Translate>
                </span>
              </span>
              <span className={styles.categoryArrow}>
                <Icon name="arrow-right" size={16} />
              </span>
            </Link>
          ))}
      </div>

      <div className={styles.footer}>
        <Link
          className={classnames(horizon.btn, horizon.btnGlass)}
          to={catalogUrl}
        >
          <Translate
            id="home.integrations.browseAll"
            description="Button under the integrations section of the homepage. {count} is the exact number of integrations (e.g. 1,041)."
            values={{ count: exact }}
          >
            {"Browse all {count} integrations →"}
          </Translate>
        </Link>
        <p className={styles.footerNote}>
          <Translate
            id="home.integrations.buildYourOwn"
            description="Note under the integrations section of the homepage, before the link to the developer documentation"
            values={{
              link: (
                <Link
                  to={`${localePrefix(lang)}/docs/dev/external-integrations/`}
                >
                  <Translate
                    id="home.integrations.buildYourOwnLink"
                    description="Link to the developer documentation of external integrations, homepage"
                  >
                    create it
                  </Translate>
                </Link>
              ),
            }}
          >
            {"Still missing one? Anyone can {link}, in the language of their choice."}
          </Translate>
        </p>
      </div>
    </section>
  );
}
