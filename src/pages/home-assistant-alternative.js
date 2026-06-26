import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getAlternativePageSchema } from "../data/structuredData";
import alternativeContent, {
  alternativeFaqEn,
  alternativeFaqFr,
} from "../data/alternativeData";

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

function AlternativeContent({ content, faq }) {
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

export default function AlternativePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = alternativeContent[lang];
  const faq = lang === "fr" ? alternativeFaqFr : alternativeFaqEn;

  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getAlternativePageSchema(lang)} />
      <AlternativeContent content={content} faq={faq} />
    </Layout>
  );
}
