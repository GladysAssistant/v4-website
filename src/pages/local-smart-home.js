import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import GladysScreenshot from "../components/horizon/GladysScreenshot";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getLocalSmartHomePageSchema } from "../data/structuredData";
import localSmartHomeContent, {
  localSmartHomeFaqEn,
  localSmartHomeFaqFr,
} from "../data/localSmartHomeData";

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
              ? "Une interface locale et épurée où vos données restent chez vous, sans cloud obligatoire."
              : "A clean, local interface where your data stays at home, with no mandatory cloud."
          }
        />

        {/* WHY NOT THE CLOUD */}
        <section className={styles.section} aria-labelledby="why-cloud-title">
          <h2 id="why-cloud-title" className={styles.sectionTitle}>
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

        {/* WHAT IS A LOCAL SMART HOME */}
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

        {/* HOW TO BUILD ONE */}
        <section className={styles.section} aria-labelledby="how-to-title">
          <h2 id="how-to-title" className={styles.sectionTitle}>
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

export default function LocalSmartHomePage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = localSmartHomeContent[lang];
  const faq = lang === "fr" ? localSmartHomeFaqFr : localSmartHomeFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getLocalSmartHomePageSchema(lang)} />
      <PillarContent content={content} faq={faq} lang={lang} />
    </HorizonPage>
  );
}
