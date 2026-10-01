import React, { useEffect, useState } from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import JsonLd from "../components/seo/JsonLd";
import { getHydroQuebecPeakEventsPageSchema } from "../data/schemas/hydroQuebecPeakEvents";
import hydroQuebecPeakEventsContent, {
  hydroQuebecPeakEventsFaqEn,
  hydroQuebecPeakEventsFaqFr,
  HQ_PEAK_EVENTS_API_URL,
  HQ_OPEN_DATA_URL,
} from "../data/hydroQuebecPeakEventsData";

import styles from "./comparison.module.css";
import t from "./hydroQuebecPeakEvents.module.css";

// Peak events are published in UTC; everything is displayed in Quebec time.
const TZ = "America/Toronto";
const RESIDENTIAL_OFFERS = ["TPC-DPC", "CPC-D"];
const FLEX_D = "TPC-DPC";

// "YYYY-MM-DD" in Quebec time.
const dayKey = (date) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

const shiftDay = (key, days) => {
  const d = new Date(`${key}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
};

// The winter period runs Dec 1 to Mar 31. Outside of it, show the last one.
function getSeason(todayKey) {
  const year = Number(todayKey.slice(0, 4));
  const month = Number(todayKey.slice(5, 7));
  const startYear = month === 12 ? year : year - 1;
  return {
    start: `${startYear}-12-01`,
    end: `${startYear + 1}-03-31`,
    label: `${startYear}-${startYear + 1}`,
    inSeason: month === 12 || month <= 3,
  };
}

const quebecHour = (date) =>
  Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      hour: "2-digit",
      hourCycle: "h23",
    }).format(date)
  );

function formatHour(date, lang) {
  const h = quebecHour(date);
  if (lang === "fr") return `${h} h`;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12} ${h < 12 ? "a.m." : "p.m."}`;
}

const formatRange = (event, lang) =>
  `${formatHour(event.start, lang)}–${formatHour(event.end, lang)}`;

function formatDate(key, lang) {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", {
    timeZone: "UTC",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${key}T12:00:00Z`));
}

// Flex D and Winter Credit events usually share the same slot: merge them
// into a single event carrying the list of offers.
function groupEvents(records) {
  const byWindow = new Map();
  records.forEach((r) => {
    if (!RESIDENTIAL_OFFERS.includes(r.offre)) return;
    const id = `${r.datedebut}|${r.datefin}`;
    if (!byWindow.has(id)) {
      const start = new Date(r.datedebut);
      byWindow.set(id, {
        id,
        start,
        end: new Date(r.datefin),
        day: dayKey(start),
        offers: [],
      });
    }
    const event = byWindow.get(id);
    if (!event.offers.includes(r.offre)) event.offers.push(r.offre);
  });
  // Always list Flex D first, whatever order the API returns.
  byWindow.forEach((event) =>
    event.offers.sort(
      (x, y) => RESIDENTIAL_OFFERS.indexOf(x) - RESIDENTIAL_OFFERS.indexOf(y)
    )
  );
  return [...byWindow.values()].sort((a, b) => a.start - b.start);
}

function DayCard({ label, events, now, inSeason, isTomorrow, strings, lang, loading }) {
  let variant = "none";
  let name = strings.noEvent;
  let hint = isTomorrow ? strings.tomorrowNoEventHint : strings.noEventHint;
  let slots = null;

  if (loading) {
    variant = "unknown";
    name = strings.loading;
    hint = "";
  } else if (events.length > 0) {
    variant = "event";
    name = events.length > 1 ? strings.events : strings.event;
    hint = "";
    slots = events.map((e) => {
      const status =
        now >= e.start && now < e.end
          ? strings.inProgress
          : now >= e.end
          ? strings.done
          : null;
      return (
        <span key={e.id} className={t.slot}>
          {formatRange(e, lang)}
          {status ? <span className={t.slotStatus}>{status}</span> : null}
        </span>
      );
    });
  } else if (!inSeason) {
    variant = "unknown";
    name = strings.offSeason;
    hint = strings.offSeasonHint;
  }

  return (
    <div
      className={`${t.dayCard} ${t[variant]} ${loading ? t.skeleton : ""}`}
      aria-live="polite"
    >
      <span className={t.dot} aria-hidden="true" />
      <span className={t.dayLabel}>{label}</span>
      <span className={t.dayName}>{name}</span>
      {slots ? <span className={t.slots}>{slots}</span> : null}
      {hint ? <span className={t.dayHint}>{hint}</span> : null}
    </div>
  );
}

function OfferTags({ offers, strings }) {
  return offers.map((o) => (
    <span key={o} className={`${t.tag} ${o === FLEX_D ? t.tagFlex : t.tagCredit}`}>
      {strings.offers[o]}
    </span>
  ));
}

function PeakEventsWidget({ strings, lang }) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let alive = true;
    const now = new Date();
    const todayKey = dayKey(now);
    const season = getSeason(todayKey);
    // One day of margin: events start at 6 a.m. Quebec time, well after
    // midnight UTC, so a UTC date bound is enough.
    const where = `secteurclient="Residentiel" and datedebut>=date'${shiftDay(
      season.start,
      -1
    )}'`;
    const url = `${HQ_PEAK_EVENTS_API_URL}?limit=100&order_by=datedebut%20asc&where=${encodeURIComponent(
      where
    )}`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => {
        if (!alive) return;
        const events = groupEvents(d.results || []).filter(
          (e) => e.day >= season.start && e.day <= season.end
        );
        setState({ status: "ok", now, todayKey, season, events });
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
  const events = loading ? [] : state.events;
  const todayKey = loading ? "" : state.todayKey;
  const tomorrowKey = loading ? "" : shiftDay(todayKey, 1);
  const season = loading ? null : state.season;
  const tomorrowInSeason =
    !loading && getSeason(tomorrowKey).inSeason;

  // "So far": during the season, tomorrow's announced events aren't counted yet.
  const counted = loading
    ? []
    : events.filter((e) => !season.inSeason || e.start <= state.now);
  const flexD = counted.filter((e) => e.offers.includes(FLEX_D));
  const flexDHours = Math.round(
    flexD.reduce((sum, e) => sum + (e.end - e.start) / 3600000, 0)
  );
  const credit = counted.filter((e) => e.offers.includes("CPC-D"));

  return (
    <>
      <div className={t.widget}>
        <DayCard
          label={strings.todayLabel}
          events={events.filter((e) => e.day === todayKey)}
          now={loading ? null : state.now}
          inSeason={!loading && season.inSeason}
          strings={strings}
          lang={lang}
          loading={loading}
        />
        <DayCard
          label={strings.tomorrowLabel}
          events={events.filter((e) => e.day === tomorrowKey)}
          now={loading ? null : state.now}
          inSeason={tomorrowInSeason}
          isTomorrow
          strings={strings}
          lang={lang}
          loading={loading}
        />
      </div>
      {!loading && (
        <div className={t.liveRow}>
          <span className={t.liveDot} aria-hidden="true" />
          {strings.live}
        </div>
      )}

      {!loading && (
        <div className={t.season}>
          <div className={t.seasonHead}>
            <span className={t.seasonTitle}>
              {strings.seasonTitle(season.label)}
            </span>
            <span className={t.seasonSub}>
              {season.inSeason ? strings.seasonCurrent : strings.seasonLast}
            </span>
          </div>
          <div className={t.seasonStats}>
            <span>
              <OfferTags offers={[FLEX_D]} strings={strings} />
              {strings.flexDStat(flexD.length, flexDHours)}
            </span>
            <span>
              <OfferTags offers={["CPC-D"]} strings={strings} />
              {strings.creditStat(credit.length)}
            </span>
          </div>
          {events.length === 0 ? (
            <p className={t.empty}>{strings.emptySeason}</p>
          ) : (
            <div className={t.tableWrap}>
              <table className={t.table}>
                <thead>
                  <tr>
                    <th>{strings.tableDate}</th>
                    <th>{strings.tableTime}</th>
                    <th>{strings.tableOffers}</th>
                  </tr>
                </thead>
                <tbody>
                  {[...events].reverse().map((e) => (
                    <tr key={e.id}>
                      <td>{formatDate(e.day, lang)}</td>
                      <td className={t.nowrap}>{formatRange(e, lang)}</td>
                      <td>
                        <OfferTags offers={e.offers} strings={strings} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <p className={t.source}>
        {strings.source}{" "}
        <a href={HQ_OPEN_DATA_URL} target="_blank" rel="noopener noreferrer">
          {strings.sourceLink}
        </a>
      </p>
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

function PeakEventsContent({ content, faq, lang }) {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        {/* HERO + LIVE WIDGET */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
        </header>
        <PeakEventsWidget strings={content.widget} lang={lang} />

        {/* WHAT IS A PEAK EVENT */}
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

        {/* RULES */}
        <section className={styles.section} aria-labelledby="rules-title">
          <h2 id="rules-title" className={styles.sectionTitle}>
            {content.rules.title}
          </h2>
          <p className={styles.blockIntro}>{content.rules.intro}</p>
          <ul className={styles.bulletList}>
            {content.rules.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        {/* LAST WINTER */}
        <section className={styles.section} aria-labelledby="lastwinter-title">
          <h2 id="lastwinter-title" className={styles.sectionTitle}>
            {content.lastWinter.title}
          </h2>
          <p className={styles.blockIntro}>{content.lastWinter.intro}</p>
          <div className={t.statGrid}>
            {content.lastWinter.stats.map((stat, i) => (
              <div key={i} className={t.statCard}>
                <div className={t.statValue}>{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <p className={styles.blockOutro}>{content.lastWinter.outro}</p>
        </section>

        {/* PREPARE */}
        <section className={styles.section} aria-labelledby="prepare-title">
          <h2 id="prepare-title" className={styles.sectionTitle}>
            {content.prepare.title}
          </h2>
          <p className={styles.blockIntro}>{content.prepare.intro}</p>
          <ul className={styles.bulletList}>
            {content.prepare.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className={styles.blockOutro}>{content.prepare.outro}</p>
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

export default function HydroQuebecPeakEventsPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = hydroQuebecPeakEventsContent[lang];
  const faq =
    lang === "fr" ? hydroQuebecPeakEventsFaqFr : hydroQuebecPeakEventsFaqEn;

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getHydroQuebecPeakEventsPageSchema(lang)} />
      <PeakEventsContent content={content} faq={faq} lang={lang} />
    </HorizonPage>
  );
}
