import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getMatterHubPageSchema } from "../data/structuredData";
import matterHubContent, {
  matterHubFaqEn,
  matterHubFaqFr,
} from "../data/matterHubData";

import styles from "./comparison.module.css";

function JobCard({ name, tag, text }) {
  return (
    <div className={styles.card}>
      {tag && <span className={styles.cardTag}>{tag}</span>}
      <div className={styles.cardTitle}>{name}</div>
      <p>{text}</p>
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

function GuideContent({ content, faq }) {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        {/* HERO */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
          <div className={styles.intro}>
            {content.hero.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to={content.hero.primaryCta.href}
            >
              {content.hero.primaryCta.label}
            </Link>
            <Link
              className="button button--secondary button--lg"
              to={content.hero.secondaryCta.href}
            >
              {content.hero.secondaryCta.label}
            </Link>
          </div>
        </header>

        {/* THE THREE JOBS */}
        <section className={styles.section} aria-labelledby="jobs-title">
          <h2 id="jobs-title" className={styles.sectionTitle}>
            {content.jobs.title}
          </h2>
          <p className={styles.blockIntro}>{content.jobs.intro}</p>
          <div className={styles.cardGrid}>
            {content.jobs.items.map((item, i) => (
              <JobCard key={i} {...item} />
            ))}
          </div>
          <p className={styles.blockOutro}>{content.jobs.outro}</p>
        </section>

        {/* DO YOU NEED ONE */}
        <section className={styles.section} aria-labelledby="decision-title">
          <h2 id="decision-title" className={styles.sectionTitle}>
            {content.decision.title}
          </h2>
          <p className={styles.blockIntro}>{content.decision.intro}</p>
          <ul className={styles.bulletList}>
            {content.decision.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.decision.outro}</p>
        </section>

        {/* COMPARISON TABLE */}
        <section className={styles.section} aria-labelledby="comparison-title">
          <h2 id="comparison-title" className={styles.sectionTitle}>
            {content.comparison.title}
          </h2>
          <p className={styles.blockIntro}>{content.comparison.intro}</p>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {content.comparison.table.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.table.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th
                          key={c}
                          scope="row"
                          className={r === 0 ? styles.gladysCol : undefined}
                        >
                          {cell}
                        </th>
                      ) : (
                        <td key={c}>{cell}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.blockOutro}>{content.comparison.outro}</p>
        </section>

        {/* GLADYS AS A MATTER HUB */}
        <section className={styles.section} aria-labelledby="gladys-title">
          <h2 id="gladys-title" className={styles.sectionTitle}>
            {content.gladys.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.gladys.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className={styles.compareLink}>
              <Link to={content.gladys.link.href}>{content.gladys.link.label}</Link>
            </p>
          </div>
        </section>

        {/* RELATED / INTERNAL MESH */}
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

export default function MatterHubPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = matterHubContent[lang];
  const faq = lang === "fr" ? matterHubFaqFr : matterHubFaqEn;

  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getMatterHubPageSchema(lang)} />
      <GuideContent content={content} faq={faq} />
    </Layout>
  );
}
