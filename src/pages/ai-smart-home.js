import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import GladysScreenshot from "../components/horizon/GladysScreenshot";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getAiSmartHomePageSchema } from "../data/structuredData";
import aiSmartHomeContent, {
  aiSmartHomeFaqEn,
  aiSmartHomeFaqFr,
} from "../data/aiSmartHomeData";

import styles from "./comparison.module.css";

// Reuses the homepage hero dashboard screenshot (localized, responsive) to
// break up the text and show off the Gladys interface.

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
        <GladysScreenshot
          lang={lang}
          caption={
            lang === "fr"
              ? "Parlez à votre maison en langage naturel : l'IA de Gladys s'occupe du reste."
              : "Talk to your home in plain language: Gladys' AI handles the rest."
          }
        />

        {/* CAPABILITIES */}
        <section className={styles.section} aria-labelledby="capabilities-title">
          <h2 id="capabilities-title" className={styles.sectionTitle}>
            {content.capabilities.title}
          </h2>
          <p className={styles.blockIntro}>{content.capabilities.intro}</p>
          <div className={styles.cardGrid}>
            {content.capabilities.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </section>

        {/* PRIVACY */}
        <section className={styles.section} aria-labelledby="privacy-title">
          <h2 id="privacy-title" className={styles.sectionTitle}>
            {content.privacy.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.privacy.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className={styles.compareLink}>
              <Link to={content.privacy.link.href}>{content.privacy.link.label}</Link>
            </p>
          </div>
        </section>

        {/* HOW TO GET STARTED */}
        <section className={styles.section} aria-labelledby="how-to-title">
          <h2 id="how-to-title" className={styles.sectionTitle}>
            {content.howTo.title}
          </h2>
          <p className={styles.blockIntro}>{content.howTo.intro}</p>
          <ul className={styles.bulletList}>
            {content.howTo.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.howTo.outro}</p>
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

export default function AiSmartHomePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = aiSmartHomeContent[lang];
  const faq = lang === "fr" ? aiSmartHomeFaqFr : aiSmartHomeFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getAiSmartHomePageSchema(lang)} />
      <PillarContent content={content} faq={faq} lang={lang} />
    </HorizonPage>
  );
}
