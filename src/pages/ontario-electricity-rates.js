import React, { useEffect, useState } from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getOntarioElectricityRatesPageSchema } from "../data/structuredData";
import ontarioElectricityRatesContent, {
  ontarioElectricityRatesFaqEn,
  ontarioElectricityRatesFaqFr,
  INITIAL_RATES,
  ratesFor,
  OEB_RATES_URL,
} from "../data/ontarioElectricityRatesData";
import {
  ontarioParts,
  ontarioHolidays,
  periodAt,
} from "../components/ontarioRates";

import styles from "./comparison.module.css";
import t from "./ontarioElectricityRates.module.css";

const PLANS = ["tou", "ulo"];

function formatHour(hour, lang) {
  const h = hour % 24;
  if (lang === "fr") return `${h} h`;
  if (h === 0) return "midnight";
  if (h === 12) return "noon";
  return `${h % 12} ${h < 12 ? "a.m." : "p.m."}`;
}

function formatDate(iso, lang) {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}

// Current period, when it ends and what comes next, for one plan. Walks
// forward hour by hour (up to four days, enough for a long weekend).
function describe(plan, now, lang) {
  const p = ontarioParts(now);
  const holidays = ontarioHolidays(p.year);
  const hours = Array.from({ length: 24 }, (_, hour) =>
    periodAt(plan, { ...p, hour }, holidays)
  );
  const current = hours[p.hour];
  let next = null;
  let endLabel = null;
  for (let i = 1; i <= 96; i += 1) {
    const at = new Date(now.getTime() + i * 3600 * 1000);
    const ap = ontarioParts(at);
    const period = periodAt(plan, ap, ontarioHolidays(ap.year));
    if (period !== current) {
      next = period;
      const sameDay = ap.key === p.key;
      const day = sameDay
        ? ""
        : `${new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", {
            timeZone: "UTC",
            weekday: "short",
          }).format(new Date(`${ap.key}T12:00:00Z`))} `;
      endLabel = `${day}${formatHour(ap.hour, lang)}`;
      break;
    }
  }
  return {
    hours,
    hourNow: p.hour,
    current,
    next,
    endLabel,
    holiday: holidays.has(p.key),
    weekend: p.weekday === "Sat" || p.weekday === "Sun",
  };
}

// Current time, set in the browser only, refreshed every minute.
function useNow() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

// Price period covering today; the static HTML uses the first period.
const ratesAt = (now) =>
  now
    ? ratesFor(ontarioParts(now).key)
    : { rates: INITIAL_RATES, outdated: false };

function PlanWidget({ strings, lang, now }) {
  const [plan, setPlan] = useState("tou");
  const info = now ? describe(plan, now, lang) : null;
  const { rates, outdated } = ratesAt(now);
  const price = info ? rates[plan][info.current] : null;

  return (
    <div className={t.widget}>
      <div className={t.tabs} role="tablist">
        {PLANS.map((p) => (
          <button
            key={p}
            type="button"
            role="tab"
            aria-selected={plan === p}
            className={`${t.tab} ${plan === p ? t.tabActive : ""}`}
            onClick={() => setPlan(p)}
          >
            {strings.plans[p]}
          </button>
        ))}
      </div>

      <div
        className={`${t.card} ${info ? t[info.current] : t.loading}`}
        aria-live="polite"
      >
        <span className={t.cardLabel}>{strings.now}</span>
        <span className={t.cardName}>
          {info ? strings.periods[info.current] : "…"}
        </span>
        <span className={t.cardPrice}>
          {info ? `${price.toFixed(1)} ${strings.unit}` : ""}
        </span>
        {info && info.next ? (
          <span className={t.cardHint}>
            {strings.until(info.endLabel)} ·{" "}
            {strings.next(strings.periods[info.next].toLowerCase())}
          </span>
        ) : null}
        {info && (info.holiday || info.weekend) ? (
          <span className={t.cardNote}>
            {strings.dayNotes[plan][info.holiday ? "holiday" : "weekend"]}
          </span>
        ) : null}
      </div>

      {info ? (
        <div className={t.timeline}>
          <div className={t.timelineLabel}>{strings.today}</div>
          <div className={t.bar} aria-hidden="true">
            {info.hours.map((period, hour) => (
              <span
                key={hour}
                className={`${t.slot} ${t[period]} ${
                  hour === info.hourNow ? t.slotNow : ""
                }`}
                title={`${formatHour(hour, lang)} · ${strings.periods[period]}`}
              />
            ))}
          </div>
          <div className={t.scale}>
            {[0, 6, 12, 18].map((h) => (
              <span key={h}>{formatHour(h, lang)}</span>
            ))}
          </div>
          <div className={t.legend}>
            {Object.keys(rates[plan]).map((period) => (
              <span key={period} className={t.legendItem}>
                <span className={`${t.swatch} ${t[period]}`} />
                {strings.periods[period]} · {rates[plan][period].toFixed(1)}{" "}
                {strings.unit}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {outdated ? <p className={t.outdated}>{strings.outdated}</p> : null}
      <p className={t.source}>
        {strings.source(formatDate(rates.from, lang), formatDate(rates.to, lang))}{" "}
        <a href={OEB_RATES_URL} target="_blank" rel="noopener noreferrer">
          {strings.sourceLink}
        </a>
      </p>
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

function RatesContent({ content, faq, lang }) {
  const tbl = content.table;
  const now = useNow();
  const { rates } = ratesAt(now);
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
        </header>
        <PlanWidget strings={content.widget} lang={lang} now={now} />

        {/* ALL RATES */}
        <section className={styles.section} aria-labelledby="prices-title">
          <h2 id="prices-title" className={styles.sectionTitle}>
            {content.pricesTitle}
          </h2>
          <p className={styles.blockIntro}>{content.pricesIntro}</p>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">{tbl.plan}</th>
                  <th scope="col">{tbl.period}</th>
                  <th scope="col">{tbl.when}</th>
                  <th scope="col">{tbl.price}</th>
                </tr>
              </thead>
              <tbody>
                {tbl.rows.map(([plan, period, when]) => (
                  <tr key={`${plan}-${period}`}>
                    <th scope="row">{tbl.planNames[plan]}</th>
                    <td>
                      {plan === "tiered"
                        ? tbl.tierNames[period]
                        : content.widget.periods[period]}
                    </td>
                    <td>{when}</td>
                    <td className={t.nowrap}>
                      {rates[plan][period].toFixed(1)} {content.widget.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TIPS */}
        <section className={styles.section} aria-labelledby="tips-title">
          <h2 id="tips-title" className={styles.sectionTitle}>
            {content.tips.title}
          </h2>
          <p className={styles.blockIntro}>{content.tips.intro}</p>
          <ul className={styles.bulletList}>
            {content.tips.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
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

        {/* RELATED */}
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

export default function OntarioElectricityRatesPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = ontarioElectricityRatesContent[lang];
  const faq =
    lang === "fr" ? ontarioElectricityRatesFaqFr : ontarioElectricityRatesFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getOntarioElectricityRatesPageSchema(lang)} />
      <RatesContent content={content} faq={faq} lang={lang} />
    </HorizonPage>
  );
}
