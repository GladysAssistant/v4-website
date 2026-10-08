import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getBestSmartHomeHubPageSchema } from "../data/schemas/bestSmartHomeHub";
import bestSmartHomeHubContent, {
  bestSmartHomeHubFaqEn,
  bestSmartHomeHubFaqFr,
  bestSmartHomeHubFaqDe,
  bestSmartHomeHubFaqEs,
} from "../data/bestSmartHomeHubData";

import styles from "./comparison.module.css";
import h from "./bestSmartHomeHub.module.css";

// Buyer's guide comparing several hubs at once: the shared UseCasePage only
// has a two-column comparison, so this page has its own multi-column table.
// The English and French versions compare different hubs (US market vs the
// French "box domotique" market), all driven by the data file.

function PickCard({ tag, name, text, link }) {
  return (
    <div className={styles.card}>
      {tag && <span className={styles.cardTag}>{tag}</span>}
      <div className={styles.cardTitle}>{name}</div>
      <p>{text}</p>
      {link && (
        <p className={styles.compareLink}>
          <Link to={link.href}>{link.label}</Link>
        </p>
      )}
    </div>
  );
}

function LinkCard({ label, href, text }) {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardTitle}>{label} →</div>
      <p>{text}</p>
    </Link>
  );
}

function HubGuide({ content, faq }) {
  const { table } = content;
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        {/* HERO */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
          <div className={styles.intro}>
            {content.hero.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </header>

        {/* QUICK PICKS */}
        <section className={styles.section} aria-labelledby="picks-title">
          <h2 id="picks-title" className={styles.sectionTitle}>
            {content.picks.title}
          </h2>
          <p className={styles.blockIntro}>{content.picks.intro}</p>
          <div className={styles.cardGrid}>
            {content.picks.cards.map((card, i) => (
              <PickCard key={i} {...card} />
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className={styles.section} aria-labelledby="table-title">
          <h2 id="table-title" className={styles.sectionTitle}>
            {table.title}
          </h2>
          <p className={styles.blockIntro}>{table.intro}</p>
          <div className={styles.tableWrapper}>
            <table className={`${styles.table} ${h.hubTable}`}>
              <thead>
                <tr>
                  {table.columns.map((col, i) => (
                    <th key={i} scope="col">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.name}>
                    <th
                      scope="row"
                      className={row.highlight ? styles.gladysCol : undefined}
                    >
                      {row.name}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.blockOutro}>{table.outro}</p>
        </section>

        {/* HOW TO CHOOSE */}
        <section className={styles.section} aria-labelledby="criteria-title">
          <h2 id="criteria-title" className={styles.sectionTitle}>
            {content.criteria.title}
          </h2>
          <p className={styles.blockIntro}>{content.criteria.intro}</p>
          <ul className={styles.bulletList}>
            {content.criteria.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        {/* GLADYS */}
        <section className={styles.section} aria-labelledby="gladys-title">
          <h2 id="gladys-title" className={styles.sectionTitle}>
            {content.gladys.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.gladys.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className={styles.compareLink}>
              {content.gladys.links.map((link, i) => (
                <React.Fragment key={i}>
                  <Link to={link.href}>{link.label}</Link>
                  {i < content.gladys.links.length - 1 ? (
                    <span aria-hidden="true">{"  ·  "}</span>
                  ) : null}
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>

        {/* RELATED */}
        <section className={styles.section} aria-labelledby="related-title">
          <h2 id="related-title" className={styles.sectionTitle}>
            {content.related.title}
          </h2>
          <p className={styles.blockIntro}>{content.related.intro}</p>
          <div className={styles.cardGrid}>
            {content.related.links.map((link, i) => (
              <LinkCard key={i} {...link} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.sectionTitle}>
            {content.faqTitle}
          </h2>
          {faq.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.question}</h3>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <h2 id="cta-title" className={styles.ctaTitle}>
            {content.cta.title}
          </h2>
          <p className={styles.ctaText}>{content.cta.text}</p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to={content.cta.primary.href}
            >
              {content.cta.primary.label}
            </Link>
            <Link
              className="button button--secondary button--lg"
              to={content.cta.secondary.href}
            >
              {content.cta.secondary.label}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function BestSmartHomeHubPage() {
  const { i18n } = useDocusaurusContext();
  const lang = ["fr", "de", "es"].includes(i18n.currentLocale) ? i18n.currentLocale : "en";
  const content = bestSmartHomeHubContent[lang];
  const faq =
    lang === "fr"
      ? bestSmartHomeHubFaqFr
      : lang === "de"
        ? bestSmartHomeHubFaqDe
      : lang === "es"
        ? bestSmartHomeHubFaqEs
        : bestSmartHomeHubFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getBestSmartHomeHubPageSchema(lang)} />
      <HubGuide content={content} faq={faq} />
    </HorizonPage>
  );
}
