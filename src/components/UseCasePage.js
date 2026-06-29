import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import JsonLd from "./seo/JsonLd";

import styles from "../pages/comparison.module.css";

// Shared layout for problem-led "use-case" SEO pages (energy savings, DIY alarm,
// presence simulation, …). Each page provides a locale-keyed `content` object
// with the same shape, its FAQ list, and the JSON-LD schema for the page. This
// keeps the individual page files tiny and the pages visually consistent.

// Reuses the homepage hero dashboard screenshot (localized, responsive).
function GladysScreenshot({ lang, caption }) {
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
      <figcaption className={styles.screenshotCaption}>{caption}</figcaption>
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

export default function UseCasePage({ content, faq, schemaData, lang }) {
  return (
    <Layout title={content.meta.title} description={content.meta.description}>
      <JsonLd data={schemaData} />
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
          <GladysScreenshot lang={lang} caption={content.screenshotCaption} />

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

          {/* FEATURES */}
          <section className={styles.section} aria-labelledby="features-title">
            <h2 id="features-title" className={styles.sectionTitle}>
              {content.features.title}
            </h2>
            <p className={styles.blockIntro}>{content.features.intro}</p>
            <div className={styles.cardGrid}>
              {content.features.cards.map((card, i) => (
                <Card key={i} {...card} />
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className={styles.section} aria-labelledby="how-title">
            <h2 id="how-title" className={styles.sectionTitle}>
              {content.how.title}
            </h2>
            <p className={styles.blockIntro}>{content.how.intro}</p>
            <ul className={styles.bulletList}>
              {content.how.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className={styles.blockOutro}>{content.how.outro}</p>
          </section>

          {/* SOLUTION / GLADYS ANGLE */}
          <section className={styles.section} aria-labelledby="solution-title">
            <h2 id="solution-title" className={styles.sectionTitle}>
              {content.solution.title}
            </h2>
            <div className={styles.whyNotBoth}>
              {content.solution.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              <p className={styles.compareLink}>
                <Link to={content.solution.link.href}>
                  {content.solution.link.label}
                </Link>
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
    </Layout>
  );
}
