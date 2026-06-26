import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getGoogleHomeAlternativePageSchema } from "../data/structuredData";
import alternativeContent, {
  alternativeFaqEn,
  alternativeFaqFr,
} from "../data/googleHomeAlternativeData";

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
      ? "Le tableau de bord de Gladys Assistant"
      : "The Gladys Assistant dashboard";

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
          ? "Une interface locale et épurée où vos données restent chez vous, sans cloud obligatoire."
          : "A clean, local interface where your data stays at home, with no mandatory cloud."}
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

function AlternativeContent({ content, faq, lang }) {
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

        {/* WHY LOOK FOR AN ALTERNATIVE */}
        <section className={styles.section} aria-labelledby="why-title">
          <h2 id="why-title" className={styles.sectionTitle}>
            {content.whyLooking.title}
          </h2>
          <p className={styles.blockIntro}>{content.whyLooking.intro}</p>
          <ul className={styles.bulletList}>
            {content.whyLooking.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.whyLooking.outro}</p>
        </section>

        {/* REASONS TO CHOOSE GLADYS */}
        <section className={styles.section} aria-labelledby="reasons-title">
          <h2 id="reasons-title" className={styles.sectionTitle}>
            {content.reasons.title}
          </h2>
          <div className={styles.cardGrid}>
            {content.reasons.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </section>

        {/* HONEST TRADE-OFFS */}
        <section className={styles.section} aria-labelledby="honesty-title">
          <h2 id="honesty-title" className={styles.sectionTitle}>
            {content.honesty.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.honesty.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className={styles.compareLink}>
              <Link to={content.honesty.compareLink.href}>
                {content.honesty.compareLink.label}
              </Link>
            </p>
          </div>
        </section>

        {/* OTHER ALTERNATIVES */}
        <section className={styles.section} aria-labelledby="others-title">
          <h2 id="others-title" className={styles.sectionTitle}>
            {content.others.title}
          </h2>
          <p className={styles.blockIntro}>{content.others.intro}</p>
          <div className={styles.cardGrid}>
            {content.others.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
          <p className={styles.blockOutro}>{content.others.outro}</p>
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

export default function GoogleHomeAlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = alternativeContent[lang];
  const faq = lang === "fr" ? alternativeFaqFr : alternativeFaqEn;

  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getGoogleHomeAlternativePageSchema(lang)} />
      <AlternativeContent content={content} faq={faq} lang={lang} />
    </Layout>
  );
}
