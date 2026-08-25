import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getHomeWeatherStationPageSchema } from "../data/structuredData";
import homeWeatherStationContent, {
  homeWeatherStationFaqEn,
  homeWeatherStationFaqFr,
} from "../data/homeWeatherStationData";

import styles from "./comparison.module.css";

function ProductCard({ name, tag, text, buyHref, buyLabel, docHref, docLabel }) {
  return (
    <div className={styles.card}>
      {tag && <span className={styles.cardTag}>{tag}</span>}
      <div className={styles.cardTitle}>{name}</div>
      <p>{text}</p>
      {buyHref && (
        <p className={styles.compareLink}>
          <a href={buyHref} target="_blank" rel="noopener noreferrer sponsored">
            {buyLabel}
          </a>
        </p>
      )}
      {docHref && (
        <p className={styles.compareLink}>
          <Link to={docHref}>{docLabel}</Link>
        </p>
      )}
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

function ProductSection({ id, titleId, section }) {
  return (
    <section className={styles.section} id={id} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.sectionTitle}>
        {section.title}
      </h2>
      <p className={styles.blockIntro}>{section.intro}</p>
      <div className={styles.cardGrid}>
        {section.items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
      <p className={styles.blockOutro}>{section.outro}</p>
    </section>
  );
}

function WeatherContent({ content, faq }) {
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
            <a
              className="button button--primary button--lg"
              href={content.hero.primaryCta.href}
            >
              {content.hero.primaryCta.label}
            </a>
            <Link
              className="button button--secondary button--lg"
              to={content.hero.secondaryCta.href}
            >
              {content.hero.secondaryCta.label}
            </Link>
          </div>
        </header>

        {/* WHAT TO LOOK FOR */}
        <section className={styles.section} aria-labelledby="criteria-title">
          <h2 id="criteria-title" className={styles.sectionTitle}>
            {content.criteria.title}
          </h2>
          <p className={styles.blockIntro}>{content.criteria.intro}</p>
          <ul className={styles.bulletList}>
            {content.criteria.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.criteria.outro}</p>
        </section>

        {/* LOCAL SENSORS */}
        <ProductSection id="local" titleId="local-title" section={content.local} />

        {/* CONNECTED STATIONS */}
        <ProductSection id="cloud" titleId="cloud-title" section={content.cloud} />

        {/* WHY GLADYS */}
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

export default function HomeWeatherStationPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = homeWeatherStationContent[lang];
  const faq = lang === "fr" ? homeWeatherStationFaqFr : homeWeatherStationFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getHomeWeatherStationPageSchema(lang)} />
      <WeatherContent content={content} faq={faq} />
    </HorizonPage>
  );
}
