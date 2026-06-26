import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import YoutubeEmbedVideo from "../components/YoutubeEmbedVideo";
import JsonLd from "../components/seo/JsonLd";
import { getComparisonPageSchema } from "../data/structuredData";
import comparisonContent, {
  comparisonFaqEn,
  comparisonFaqFr,
  YOUTUBE_VIDEO_ID,
} from "../data/comparisonData";

import styles from "./comparison.module.css";

function VerdictCard({ data, isGladys }) {
  return (
    <div
      className={
        isGladys
          ? `${styles.verdictCard} ${styles.verdictCardGladys}`
          : styles.verdictCard
      }
    >
      <h3 className={styles.verdictCardTitle}>{data.title}</h3>
      <ul className={styles.verdictList}>
        {data.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonContent({ content, faq, lang }) {
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
        </header>

        {/* VERDICT */}
        <section className={styles.section} aria-labelledby="verdict-title">
          <h2 id="verdict-title" className={styles.sectionTitle}>
            {content.verdict.title}
          </h2>
          <div className={styles.verdictGrid}>
            <VerdictCard data={content.verdict.gladys} isGladys />
            <VerdictCard data={content.verdict.ha} />
          </div>
        </section>

        {/* QUICK TABLE */}
        <section className={styles.section} aria-labelledby="table-title">
          <h2 id="table-title" className={styles.sectionTitle}>
            {content.tableTitle}
          </h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">{content.tableCols.feature}</th>
                  <th scope="col" className={styles.gladysCol}>
                    {content.tableCols.gladys}
                  </th>
                  <th scope="col">{content.tableCols.ha}</th>
                </tr>
              </thead>
              <tbody>
                {content.table.map((row, i) => (
                  <tr key={i}>
                    <th scope="row">{row.feature}</th>
                    <td>{row.gladys}</td>
                    <td>{row.ha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DETAILED SECTIONS */}
        {content.sections.map((section) => (
          <section
            key={section.id}
            className={styles.section}
            aria-labelledby={`${section.id}-title`}
          >
            <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
              {section.title}
            </h2>
            <div className={styles.compareGrid}>
              <div className={`${styles.compareCol} ${styles.compareColGladys}`}>
                <div className={styles.compareColTitle}>Gladys Assistant</div>
                {section.gladys.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className={`${styles.compareCol} ${styles.compareColHa}`}>
                <div className={styles.compareColTitle}>Home Assistant</div>
                {section.ha.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <p className={styles.takeaway}>
              <strong>{lang === "fr" ? "Le verdict" : "The verdict"}</strong>
              {section.takeaway}
            </p>
          </section>
        ))}

        {/* WHY NOT BOTH */}
        <section className={styles.section} aria-labelledby="why-not-both-title">
          <h2 id="why-not-both-title" className={styles.sectionTitle}>
            {content.whyNotBoth.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.whyNotBoth.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* VIDEO (optional) */}
        {YOUTUBE_VIDEO_ID && (
          <section className={styles.section} aria-labelledby="video-title">
            <h2 id="video-title" className={styles.sectionTitle}>
              {content.videoTitle}
            </h2>
            <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
              <YoutubeEmbedVideo id={YOUTUBE_VIDEO_ID} />
            </div>
          </section>
        )}

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

export default function ComparisonPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = comparisonContent[lang];
  const faq = lang === "fr" ? comparisonFaqFr : comparisonFaqEn;

  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getComparisonPageSchema(lang)} />
      <ComparisonContent content={content} faq={faq} lang={lang} />
    </Layout>
  );
}
