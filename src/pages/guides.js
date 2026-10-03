import React from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBrokenLinks from "@docusaurus/useBrokenLinks";

import JsonLd from "../components/seo/JsonLd";
import { getGuidesHubPageSchema } from "../data/schemas/guidesHub";
import { guidesHubContent, guidesSections } from "../data/guidesHubData";

import styles from "./comparison.module.css";

// Hub listing every landing page by theme, linked from the footer
// ("All guides") so the footer itself can stay short.
export default function GuidesPage() {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === "fr" ? "fr" : "en";
  const content = guidesHubContent[lang];
  // Register the section anchors so links like /guides/#compare (footer)
  // pass Docusaurus' broken anchor check.
  const brokenLinks = useBrokenLinks();
  guidesSections.forEach((section) => brokenLinks.collectAnchor(section.id));

  return (
    <HorizonPage title={content.meta.title} description={content.meta.description}>
      <JsonLd data={getGuidesHubPageSchema(lang)} />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          <header className={styles.hero}>
            <h1 className={styles.heroTitle}>{content.title}</h1>
            <p className={styles.heroSubtitle}>{content.subtitle}</p>
            <div className={styles.ctaButtons}>
              {guidesSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="button button--secondary button--sm"
                >
                  {section.title[lang]}
                </a>
              ))}
            </div>
          </header>

          {guidesSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
              aria-labelledby={`${section.id}-title`}
            >
              <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                {section.title[lang]}
              </h2>
              <div className={styles.cardGrid}>
                {section.items.map((item) => (
                  <Link key={item.href} to={item.href} className={styles.card}>
                    <div className={styles.cardTitle}>{item[lang].label} →</div>
                    <p>{item[lang].text}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </HorizonPage>
  );
}
