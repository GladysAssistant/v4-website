import React from "react";
import Layout from "@theme/Layout";
import cx from "classnames";

import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

import YoutubeEmbedVideo from "../components/YoutubeEmbedVideo";
import { TestimonialSection } from "../components/Testimonial";
import testimonialsFr from "../components/testimonials/testimonial.plus.fr.json";
import testimonialsEn from "../components/testimonials/testimonial.plus.en.json";

import BlackFridayBanner from "../components/plus/BlackFridayBanner";
import PricingTable from "../components/plus/PricingTable";
import Personas from "../components/plus/Personas";
import FAQPlus from "../components/plus/FAQPlus";
import FinalCTA from "../components/plus/FinalCTA";
import MiniStats from "../components/plus/MiniStats";
import EuropeanHosting from "../components/plus/EuropeanHosting";

import styles from "./styles.module.css";
import plusStyles from "../components/plus/styles.module.css";

const testimonials = {
  fr: testimonialsFr,
  en: testimonialsEn,
};

function PlusContent() {
  const { i18n } = useDocusaurusContext();
  const isDarkTheme = useColorMode().colorMode === "dark";
  const language = i18n.currentLocale;

  return (
    <main>
      <BlackFridayBanner language={language} />

      <div
        className="container"
        style={{
          maxWidth: "72rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* HERO */}
        <section className={plusStyles.hero}>
          <div className="row">
            <div className="col col--6">
              <h1 className={plusStyles.heroTitle}>
                <Translate id="gladysPlusPage.v2.hero.title">
                  Gladys Plus
                </Translate>
              </h1>
              <p className={plusStyles.heroSubtitle}>
                <Translate id="gladysPlusPage.v2.hero.subtitle">
                  Gladys Assistant is free and open-source, forever. Gladys Plus
                  is the subscription that funds the project and unlocks remote
                  access, encrypted backups, and all advanced integrations.
                </Translate>
              </p>

              <a
                href="#pricing"
                className={plusStyles.heroTrialBanner}
                data-track="plus_hero_trial_banner"
              >
                <span
                  className={plusStyles.heroTrialBannerIcon}
                  aria-hidden="true"
                >
                  🎁
                </span>
                <div>
                  <strong>
                    <Translate id="gladysPlusPage.v2.hero.trial.headline">
                      Try free for 1 month
                    </Translate>
                  </strong>
                  <span className={plusStyles.heroTrialBannerSub}>
                    <Translate id="gladysPlusPage.v2.hero.trial.sub">
                      No credit card required. No commitment.
                    </Translate>
                  </span>
                </div>
                <span
                  className={plusStyles.heroTrialBannerArrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <div className={plusStyles.heroPrice}>
                <span className={plusStyles.heroPriceFrom}>
                  <Translate id="gladysPlusPage.v2.hero.from">From</Translate>
                </span>
                <span className={plusStyles.heroPriceMain}>5,83€</span>
                <span className={plusStyles.heroPricePeriod}>
                  <Translate id="gladysPlusPage.v2.hero.perMonth">
                    /month
                  </Translate>
                </span>
              </div>
              <div className={plusStyles.heroPriceAlt}>
                <Translate id="gladysPlusPage.v2.hero.altPrice2">
                  Two plans: Plus Lite (6,99€/mo) or Plus (9,99€/mo). Save 17%
                  yearly.
                </Translate>
              </div>

              <div className={plusStyles.heroBadges}>
                <span className={plusStyles.heroBadge}>
                  ✓{" "}
                  <Translate id="gladysPlusPage.v2.hero.badge.refund">
                    Satisfied or refunded
                  </Translate>
                </span>
                <span className={plusStyles.heroBadge}>
                  ✓{" "}
                  <Translate id="gladysPlusPage.v2.hero.badge.cancel">
                    No commitment
                  </Translate>
                </span>
              </div>

              <div className={plusStyles.heroCtas}>
                <a
                  href="#pricing"
                  className="button button--primary button--lg"
                  data-track="plus_hero_choose_plan"
                >
                  <Translate id="gladysPlusPage.v2.hero.cta.primary">
                    Start my free trial →
                  </Translate>
                </a>
                <a
                  href={useBaseUrl("/starter-kit")}
                  className="button button--secondary button--lg"
                  data-track="plus_hero_starter_kit"
                >
                  <Translate id="gladysPlusPage.v2.hero.cta.secondary">
                    Starter kit (6 months free)
                  </Translate>
                </a>
              </div>
            </div>
            <div className="col col--6">
              <img
                alt="Gladys Plus"
                src={useBaseUrl("img/plus/mockup-1x.png")}
                srcSet={`${useBaseUrl(
                  "img/plus/mockup-1x.png",
                )} 1x, ${useBaseUrl("img/plus/mockup-2x.png")} 2x`}
                className={cx(
                  isDarkTheme ? "" : styles.invertImageColor,
                  styles.plusImage,
                )}
              />
            </div>
          </div>
        </section>

        <MiniStats />

        {/* PERSONAS */}
        <Personas />

        {/* PRICING */}
        <section className={plusStyles.section} aria-labelledby="pricing-title">
          <h2 id="pricing-title" className={plusStyles.sectionTitle}>
            <Translate id="gladysPlusPage.v2.pricing.title">
              Two plans, no surprises
            </Translate>
          </h2>
          <p className={plusStyles.sectionSubtitle}>
            <Translate id="gladysPlusPage.v2.pricing.subtitle">
              Lite for the essentials: remote access, voice assistants and open
              API. Plus for the full experience including AI, camera streaming,
              Enedis and encrypted backups.
            </Translate>
          </p>
          <PricingTable language={language} />
        </section>

        {language === "fr" && (
          <section
            className={plusStyles.section}
            aria-labelledby="demo-video-title"
          >
            <h2 id="demo-video-title" className={plusStyles.sectionTitle}>
              <Translate id="gladysPlusPage.v2.video.title">
                Gladys Plus en vidéo
              </Translate>
            </h2>
            <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
              <YoutubeEmbedVideo id="TmjrBeufjyo" />
            </div>
          </section>
        )}

        {/* EUROPEAN HOSTING */}
        <EuropeanHosting />

        {/* TESTIMONIALS */}
        <div style={{ margin: "5rem 0" }}>
          <TestimonialSection lang={language} testimonials={testimonials} />
        </div>

        {/* FAQ */}
        <FAQPlus lang={language} />

        {/* FINAL CTA */}
        <FinalCTA />
      </div>
    </main>
  );
}

function PlusParent() {
  return (
    <Layout
      title={translate({
        id: "gladysgladysPlusPage.title",
        message: "Gladys Plus",
      })}
      description={translate({
        id: "gladysgladysPlusPage.metaDescription",
        message: "Add more features to Gladys Assistant with Gladys Plus",
      })}
    >
      <PlusContent />
    </Layout>
  );
}

export default PlusParent;
