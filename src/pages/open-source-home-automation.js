import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import GladysScreenshot from "../components/horizon/GladysScreenshot";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getOpenSourceHomeAutomationPageSchema } from "../data/structuredData";
import openSourceHomeAutomationContent, {
  openSourceHomeAutomationFaqEn,
  openSourceHomeAutomationFaqFr,
} from "../data/openSourceHomeAutomationData";

import styles from "./comparison.module.css";

// Reuses the homepage hero dashboard screenshot (localized, responsive) to
// break up the text and show off the Gladys interface.

function Card({ icon, logo, logoAlt, title, text }) {
  return (
    <div className={styles.card}>
      {logo ? (
        <img className={styles.cardLogo} src={useBaseUrl(logo)} alt={logoAlt || ""} />
      ) : (
        icon && (
          <span className={styles.cardIcon} aria-hidden="true">
            {icon}
          </span>
        )
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

function PillarContent({ content, faq, lang }) {
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

        {/* GLADYS SCREENSHOT */}
        <GladysScreenshot
          lang={lang}
          caption={
            lang === "fr"
              ? "Une interface open source et épurée, auto-hébergée, où vos données restent chez vous."
              : "A clean, open-source, self-hosted interface where your data stays at home."
          }
        />

        {/* WHY OPEN SOURCE MATTERS */}
        <section className={styles.section} aria-labelledby="why-title">
          <h2 id="why-title" className={styles.sectionTitle}>
            {content.whyCloud.title}
          </h2>
          <p className={styles.blockIntro}>{content.whyCloud.intro}</p>
          <ul className={styles.bulletList}>
            {content.whyCloud.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.whyCloud.outro}</p>
        </section>

        {/* WHAT IS OPEN-SOURCE HOME AUTOMATION */}
        <section className={styles.section} aria-labelledby="definition-title">
          <h2 id="definition-title" className={styles.sectionTitle}>
            {content.definition.title}
          </h2>
          <p className={styles.blockIntro}>{content.definition.intro}</p>
          <ul className={styles.bulletList}>
            {content.definition.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.definition.outro}</p>
        </section>

        {/* THE MAIN PLATFORMS */}
        <section className={styles.section} aria-labelledby="platforms-title">
          <h2 id="platforms-title" className={styles.sectionTitle}>
            {content.howTo.title}
          </h2>
          {content.howTo.intro && (
            <p className={styles.blockIntro}>{content.howTo.intro}</p>
          )}
          {content.howTo.table && (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {content.howTo.table.headers.map((header, i) => (
                      <th key={i}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.howTo.table.rows.map((row, r) => (
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
          )}
          <div className={styles.cardGrid} style={{ marginTop: "1.75rem" }}>
            {content.howTo.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </section>

        {/* HUB / HARDWARE */}
        <section className={styles.section} aria-labelledby="hardware-title">
          <h2 id="hardware-title" className={styles.sectionTitle}>
            {content.hardware.title}
          </h2>
          <p className={styles.blockIntro}>{content.hardware.intro}</p>
          <ul className={styles.bulletList}>
            {content.hardware.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.hardware.outro}</p>
          <p className={styles.compareLink}>
            <Link to={content.hardware.link.href}>
              {content.hardware.link.label}
            </Link>
          </p>
        </section>

        {/* GLADYS AS THE FOUNDATION */}
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

export default function OpenSourceHomeAutomationPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = openSourceHomeAutomationContent[lang];
  const faq =
    lang === "fr"
      ? openSourceHomeAutomationFaqFr
      : openSourceHomeAutomationFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getOpenSourceHomeAutomationPageSchema(lang)} />
      <PillarContent content={content} faq={faq} lang={lang} />
    </HorizonPage>
  );
}
