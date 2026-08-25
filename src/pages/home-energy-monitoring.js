import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import GladysScreenshot from "../components/horizon/GladysScreenshot";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getEnergyMonitoringPageSchema } from "../data/structuredData";
import energyContent, {
  energyFaqEn,
  energyFaqFr,
} from "../data/energyMonitoringData";

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

function EnergyContent({ content, faq, lang }) {
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

        {/* SCREENSHOT */}
        <GladysScreenshot
          lang={lang}
          caption={
            lang === "fr"
              ? "Suivez votre consommation d'énergie en temps réel, en local, dans Gladys."
              : "Track your energy consumption in real time, locally, in Gladys."
          }
          shot="energy"
        />

        {/* THE PROBLEM */}
        <section className={styles.section} aria-labelledby="problem-title">
          <h2 id="problem-title" className={styles.sectionTitle}>
            {content.problem.title}
          </h2>
          <p className={styles.blockIntro}>{content.problem.intro}</p>
          <ul className={styles.bulletList}>
            {content.problem.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.problem.outro}</p>
        </section>

        {/* WHAT YOU CAN SEE */}
        <section className={styles.section} aria-labelledby="see-title">
          <h2 id="see-title" className={styles.sectionTitle}>
            {content.see.title}
          </h2>
          <p className={styles.blockIntro}>{content.see.intro}</p>
          <div className={styles.cardGrid}>
            {content.see.cards.map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>
        </section>

        {/* HOW AUTOMATION SAVES */}
        <section className={styles.section} aria-labelledby="save-title">
          <h2 id="save-title" className={styles.sectionTitle}>
            {content.save.title}
          </h2>
          <p className={styles.blockIntro}>{content.save.intro}</p>
          <ul className={styles.bulletList}>
            {content.save.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.save.outro}</p>
        </section>

        {/* TRACK YOUR WHOLE HOME */}
        <section className={styles.section} aria-labelledby="track-title">
          <h2 id="track-title" className={styles.sectionTitle}>
            {content.track.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.track.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className={styles.compareLink}>
              <Link to={content.track.link.href}>{content.track.link.label}</Link>
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

export default function HomeEnergyMonitoringPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = energyContent[lang];
  const faq = lang === "fr" ? energyFaqFr : energyFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getEnergyMonitoringPageSchema(lang)} />
      <EnergyContent content={content} faq={faq} lang={lang} />
    </HorizonPage>
  );
}
