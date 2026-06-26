import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getProtocolsComparisonPageSchema } from "../data/structuredData";
import protocolsContent, {
  protocolsFaqEn,
  protocolsFaqFr,
} from "../data/protocolsComparisonData";

import styles from "./comparison.module.css";

function Card({ icon, title, text }) {
  return (
    <div className={styles.card}>
      {icon && (
        <span className={styles.cardIcon} aria-hidden="true">
          {icon}
        </span>
      )}
      <div className={styles.cardTitle}>{title}</div>
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

function ProtocolsContent({ content, faq, lang }) {
  const strengthsLabel = lang === "fr" ? "Points forts" : "Strengths";
  const limitsLabel = lang === "fr" ? "Limites" : "Limitations";

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

        {/* KEY POINT */}
        <section className={styles.section} aria-labelledby="key-point-title">
          <h2 id="key-point-title" className={styles.sectionTitle}>
            {content.keyPoint.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.keyPoint.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
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
                  <th scope="col">{content.tableCols.zigbee}</th>
                  <th scope="col">{content.tableCols.zwave}</th>
                  <th scope="col">{content.tableCols.matter}</th>
                </tr>
              </thead>
              <tbody>
                {content.table.map((row, i) => (
                  <tr key={i}>
                    <th scope="row">{row.feature}</th>
                    <td>{row.zigbee}</td>
                    <td>{row.zwave}</td>
                    <td>{row.matter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PER-PROTOCOL DETAIL */}
        {content.protocols.map((protocol) => (
          <section
            key={protocol.id}
            className={styles.section}
            aria-labelledby={`${protocol.id}-title`}
          >
            <h2 id={`${protocol.id}-title`} className={styles.sectionTitle}>
              {protocol.name}
            </h2>
            <p className={styles.blockIntro}>
              <strong>{protocol.tagline}.</strong> {protocol.intro}
            </p>
            <div className={styles.compareGrid}>
              <div className={`${styles.compareCol} ${styles.compareColGladys}`}>
                <div className={styles.compareColTitle}>{strengthsLabel}</div>
                <ul className={styles.bulletList}>
                  {protocol.strengths.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.compareCol} ${styles.compareColHa}`}>
                <div className={styles.compareColTitle}>{limitsLabel}</div>
                <ul className={styles.bulletList}>
                  {protocol.limits.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* WHICH TO CHOOSE */}
        <section className={styles.section} aria-labelledby="choose-title">
          <h2 id="choose-title" className={styles.sectionTitle}>
            {content.choose.title}
          </h2>
          <p className={styles.blockIntro}>{content.choose.intro}</p>
          <div className={styles.cardGrid}>
            {content.choose.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </section>

        {/* GLADYS: NO LOCK-IN */}
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

export default function ProtocolsComparisonPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = protocolsContent[lang];
  const faq = lang === "fr" ? protocolsFaqFr : protocolsFaqEn;

  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getProtocolsComparisonPageSchema(lang)} />
      <ProtocolsContent content={content} faq={faq} lang={lang} />
    </Layout>
  );
}
