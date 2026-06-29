import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getEdfTempoPageSchema } from "../data/structuredData";
import edfTempoContent, {
  edfTempoFaqEn,
  edfTempoFaqFr,
  TEMPO_API_URL,
} from "../data/edfTempoData";

import styles from "./comparison.module.css";
import t from "./edfTempo.module.css";

const TEMPO_COLORS = ["blue", "white", "red"];
const normalizeColor = (c) => (TEMPO_COLORS.includes(c) ? c : "unknown");

function DayCard({ label, colorKey, name, hint, loading }) {
  return (
    <div
      className={`${t.dayCard} ${t[colorKey]} ${loading ? t.skeleton : ""}`}
      aria-live="polite"
    >
      <span className={t.dot} aria-hidden="true" />
      <span className={t.dayLabel}>{label}</span>
      <span className={t.dayColorName}>{name}</span>
      {hint ? <span className={t.dayHint}>{hint}</span> : null}
    </div>
  );
}

function TempoWidget({ strings }) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let alive = true;
    fetch(TEMPO_API_URL)
      .then((r) => r.json())
      .then((d) => {
        if (alive) {
          setState({ status: "ok", today: d.today, tomorrow: d.tomorrow });
        }
      })
      .catch(() => {
        if (alive) setState({ status: "error" });
      });
    return () => {
      alive = false;
    };
  }, []);

  if (state.status === "error") {
    return <div className={t.error}>{strings.error}</div>;
  }

  const loading = state.status === "loading";
  const todayKey = loading ? "unknown" : normalizeColor(state.today);
  const tomorrowKey = loading ? "unknown" : normalizeColor(state.tomorrow);

  const todayName = loading ? strings.loading : strings.colors[todayKey].name;
  const todayHint = loading ? "" : strings.colors[todayKey].hint;

  const tomorrowName = loading
    ? strings.loading
    : strings.colors[tomorrowKey].name;
  const tomorrowHint = loading
    ? ""
    : tomorrowKey === "unknown"
    ? strings.tomorrowUnknownHint
    : strings.colors[tomorrowKey].hint;

  return (
    <>
      <div className={t.widget}>
        <DayCard
          label={strings.todayLabel}
          colorKey={todayKey}
          name={todayName}
          hint={todayHint}
          loading={loading}
        />
        <DayCard
          label={strings.tomorrowLabel}
          colorKey={tomorrowKey}
          name={tomorrowName}
          hint={tomorrowHint}
          loading={loading}
        />
      </div>
      {!loading && (
        <div className={t.liveRow}>
          <span className={t.liveDot} aria-hidden="true" />
          {strings.live}
        </div>
      )}
      <p className={t.source}>{strings.source}</p>
    </>
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

const SWATCH_CLASS = {
  blue: t.legendSwatchBlue,
  white: t.legendSwatchWhite,
  red: t.legendSwatchRed,
};

function TempoPage({ content, faq }) {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        {/* HERO + LIVE WIDGET */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
        </header>
        <TempoWidget strings={content.widget} />

        {/* WHAT IS TEMPO */}
        <section className={styles.section} aria-labelledby="whatis-title">
          <h2 id="whatis-title" className={styles.sectionTitle}>
            {content.whatIs.title}
          </h2>
          <div className={styles.intro}>
            {content.whatIs.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* THE THREE COLOURS */}
        <section className={styles.section} aria-labelledby="colors-title">
          <h2 id="colors-title" className={styles.sectionTitle}>
            {content.colorsLegend.title}
          </h2>
          <p className={styles.blockIntro}>{content.colorsLegend.intro}</p>
          <div className={t.legendGrid}>
            {content.colorsLegend.cards.map((card) => (
              <div key={card.key} className={t.legendCard}>
                <div className={t.legendHead}>
                  <span
                    className={`${t.legendSwatch} ${SWATCH_CLASS[card.key]}`}
                    aria-hidden="true"
                  />
                  <span className={t.legendName}>{card.name}</span>
                </div>
                <div className={t.legendDays}>{card.days}</div>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RED DAYS */}
        <section className={styles.section} aria-labelledby="reddays-title">
          <h2 id="reddays-title" className={styles.sectionTitle}>
            {content.redDays.title}
          </h2>
          <p className={styles.blockIntro}>{content.redDays.intro}</p>
          <ul className={styles.bulletList}>
            {content.redDays.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.redDays.outro}</p>
        </section>

        {/* AUTOMATE WITH GLADYS */}
        <section className={styles.section} aria-labelledby="gladys-title">
          <h2 id="gladys-title" className={styles.sectionTitle}>
            {content.gladys.title}
          </h2>
          <div className={styles.whyNotBoth}>
            {content.gladys.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className={styles.compareLink}>
              {content.gladys.links.map((link, i) => (
                <React.Fragment key={i}>
                  <Link to={link.href}>{link.label}</Link>
                  {i < content.gladys.links.length - 1 ? (
                    <span aria-hidden="true">{"  ·  "}</span>
                  ) : null}
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>

        {/* RELATED / MESH */}
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

export default function EdfTempoPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = edfTempoContent[lang];
  const faq = lang === "fr" ? edfTempoFaqFr : edfTempoFaqEn;

  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getEdfTempoPageSchema(lang)} />
      <TempoPage content={content} faq={faq} />
    </Layout>
  );
}
