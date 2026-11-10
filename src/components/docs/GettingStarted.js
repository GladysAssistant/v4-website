// The building blocks of the "Getting started" page (/docs/, the slug of
// docs/installation/0_hardware.md and of its translations).
//
// The page has one job: take a newcomer from "what is this?" to a running
// Gladys, then to a first device and a first scene. These components only
// carry the layout; every word stays in the Markdown of each locale, so the
// page is translated like any other doc and its headings feed the table of
// contents and the search index.

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import Icon from "../integrations/icons";
import { useIntegrationsSummary } from "../home/Integrations";
import styles from "./GettingStarted.module.css";

// Feather icons (MIT) this page needs on top of the catalog's set, inlined
// for the same reason as there: the package would ship all ~280 of them.
const PATHS = {
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
  smartphone:
    '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
  monitor:
    '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
  clock:
    '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  check: '<polyline points="20 6 9 17 4 12"></polyline>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  terminal:
    '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
  "refresh-cw":
    '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
  "wifi-off":
    '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
};

function GsIcon({ name, size = 18, className }) {
  if (!PATHS[name]) {
    return <Icon name={name} size={size} className={className} />;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
}

/**
 * The four steps of the page, as a strip of anchors at the top: the reader
 * sees the whole path, and how short it is, before reading anything else.
 * `steps`: [{ href: "#install", title, time }].
 */
export function Roadmap({ steps, label }) {
  return (
    <nav className={styles.roadmap} aria-label={label}>
      <ol className={styles.roadmapList}>
        {steps.map((step, index) => (
          <li key={step.href} className={styles.roadmapItem}>
            <a className={styles.roadmapLink} href={step.href}>
              <span className={styles.roadmapNumber}>{index + 1}</span>
              <span className={styles.roadmapText}>
                <span className={styles.roadmapTitle}>{step.title}</span>
                {step.time && (
                  <span className={styles.roadmapTime}>
                    <GsIcon name="clock" size={13} />
                    {step.time}
                  </span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Where Gladys runs, in one picture: devices on one side, the apps on the
 * other, and Gladys on a small computer at home in the middle. It answers
 * the first question of every newcomer: "why do I need to install it?".
 * `nodes`: three { title, text } objects, from the devices to the apps.
 */
export function HowItWorks({ nodes, children }) {
  const icons = [
    ["thermometer", "zap", "shield"],
    ["cpu"],
    ["smartphone", "monitor"],
  ];
  return (
    <figure className={styles.how}>
      <div className={styles.howRow}>
        {nodes.map((node, index) => (
          <React.Fragment key={node.title}>
            {index > 0 && (
              <span className={styles.howArrow} aria-hidden="true">
                <GsIcon name="arrow-right" size={20} />
              </span>
            )}
            <div
              className={clsx(styles.howNode, index === 1 && styles.howHub)}
            >
              <span className={styles.howIcons}>
                {icons[index].map((name) => (
                  <GsIcon key={name} name={name} size={index === 1 ? 26 : 20} />
                ))}
              </span>
              <span className={styles.howTitle}>{node.title}</span>
              <span className={styles.howText}>{node.text}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      {children && (
        <figcaption className={styles.howCaption}>{children}</figcaption>
      )}
    </figure>
  );
}

/** The cards of the install step. */
export function InstallOptions({ children }) {
  return <div className={styles.options}>{children}</div>;
}

/**
 * One way to install Gladys. `featured` is the recommended one: it spans
 * the whole row and carries the main call to action of the page.
 * `facts`: short [icon, text] pairs (duration, skill level...).
 */
export function InstallOption({
  icon,
  title,
  badge,
  facts = [],
  cta,
  to,
  featured,
  children,
}) {
  return (
    <div className={clsx(styles.option, featured && styles.optionFeatured)}>
      <div className={styles.optionHead}>
        <span className={styles.optionIcon}>
          <GsIcon name={icon} size={featured ? 24 : 20} />
        </span>
        <div>
          {badge && <span className={styles.optionBadge}>{badge}</span>}
          <h3 className={styles.optionTitle}>{title}</h3>
        </div>
      </div>
      {facts.length > 0 && (
        <ul className={styles.optionFacts}>
          {facts.map(([factIcon, text]) => (
            <li key={text}>
              <GsIcon name={factIcon} size={14} />
              {text}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.optionBody}>{children}</div>
      {cta && to && (
        <Link
          className={clsx(
            "button",
            featured ? "button--primary button--lg" : "button--secondary",
            styles.optionCta
          )}
          to={to}
        >
          {cta}
          <GsIcon name="arrow-right" size={16} />
        </Link>
      )}
    </div>
  );
}

/** The total of the integrations catalog, rounded down to the hundred. */
export function IntegrationsCount({ lang }) {
  return useIntegrationsSummary(lang).rounded;
}

/**
 * The brands a newcomer is most likely to own, each linking to its page,
 * then a link to the whole catalog. `allLabel` holds `{count}`.
 */
export function IntegrationChips({ lang, allLabel, max = 16 }) {
  const summary = useIntegrationsSummary(lang);
  const prefix = lang === "en" ? "" : `/${lang}`;
  const items = summary.showcase.flat().slice(0, max);
  return (
    <div className={styles.chips}>
      {items.map((item) => (
        <Link
          key={item.path}
          className={styles.chip}
          to={`${prefix}/${item.path}`}
        >
          {item.label}
        </Link>
      ))}
      <Link
        className={clsx(styles.chip, styles.chipAll)}
        to={summary.catalogUrl}
      >
        {allLabel.replace("{count}", summary.rounded)}
        <GsIcon name="arrow-right" size={14} />
      </Link>
    </div>
  );
}

/** Small cards with an icon, for the reassurance points and the ideas. */
export function Highlights({ items }) {
  return (
    <ul className={styles.highlights}>
      {items.map((item) => (
        <li key={item.title} className={styles.highlight}>
          <span className={styles.highlightIcon}>
            <GsIcon name={item.icon} size={18} />
          </span>
          <span>
            <strong className={styles.highlightTitle}>{item.title}</strong>
            <span className={styles.highlightText}>{item.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
