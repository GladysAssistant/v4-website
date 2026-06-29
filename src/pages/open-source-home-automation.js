import React from "react";
import Layout from "@theme/Layout";
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
function GladysScreenshot({ lang }) {
  const key =
    lang === "fr"
      ? "main_screenshot_fr_ncm1yr_c_scale"
      : "main_screenshot_en_j5czyj_c_scale";
  const widths =
    lang === "fr"
      ? [825, 1090, 1342, 1548, 1951, 2800]
      : [850, 1142, 1388, 1623, 2022, 2800];
  const base = `/img/home/main_screenshot/${key}`;
  const srcSet = widths
    .map((w) => `${useBaseUrl(`${base},w_${w}.png`)} ${w}w`)
    .join(", ");
  const defaultWidth = lang === "fr" ? 1342 : 1388;
  const alt =
    lang === "fr"
      ? "Le tableau de bord open source de Gladys Assistant"
      : "The open-source Gladys Assistant dashboard";

  return (
    <figure className={styles.screenshot}>
      <img
        src={useBaseUrl(`${base},w_${defaultWidth}.png`)}
        srcSet={srcSet}
        sizes="(max-width: 52rem) 100vw, 52rem"
        alt={alt}
      />
      <figcaption className={styles.screenshotCaption}>
        {lang === "fr"
          ? "Une interface open source et épurée, auto-hébergée, où vos données restent chez vous."
          : "A clean, open-source, self-hosted interface where your data stays at home."}
      </figcaption>
    </figure>
  );
}

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
        <GladysScreenshot lang={lang} />

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
          <div className={styles.cardGrid}>
            {content.howTo.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
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
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getOpenSourceHomeAutomationPageSchema(lang)} />
      <PillarContent content={content} faq={faq} lang={lang} />
    </Layout>
  );
}
