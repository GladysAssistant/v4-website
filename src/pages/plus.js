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
import NabuCasaCompare from "../components/plus/NabuCasaCompare";
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

              <div className={plusStyles.heroPrice}>
                <span className={plusStyles.heroPriceFrom}>
                  <Translate id="gladysPlusPage.v2.hero.from">From</Translate>
                </span>
                <span className={plusStyles.heroPriceMain}>6,99€</span>
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
                <span className={plusStyles.heroBadge}>
                  ✓{" "}
                  <Translate id="gladysPlusPage.v2.hero.badge.trial">
                    1 month free trial
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
                    Choose your plan →
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
              <div className={plusStyles.heroCompare}>
                <a
                  href="#compare-title"
                  data-track="plus_hero_compare_nabucasa"
                >
                  <Translate id="gladysPlusPage.v2.hero.cta.compare">
                    Compare with Nabu Casa →
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
              Plus Lite for the essentials (cheaper than Nabu Casa). Plus for
              the full experience including AI, camera streaming, Enedis and
              encrypted backups.
            </Translate>
          </p>
          <PricingTable language={language} />
        </section>

        {/* DETAILED FEATURES */}
        <section
          className={plusStyles.section}
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className={plusStyles.sectionTitle}>
            <Translate id="gladysPlusPage.v2.features.title">
              What Gladys Plus unlocks
            </Translate>
          </h2>

          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <img
                alt=""
                className={cx(isDarkTheme ? "" : styles.invertImageColor)}
                src={useBaseUrl("/img/plus/plus-e2e-white.png")}
                style={{ width: "80%", marginLeft: "10%" }}
              />
            </div>
            <div className="col col--6">
              <h3 className={cx(styles.plusFeatureTitle)}>
                <Translate id="gladysPlusPage.endToEndEncryptedRemoteAccess">
                  End-to-End Encrypted remote access
                </Translate>
              </h3>
              <p>
                <Translate id="gladysPlusPage.endToEndEncryptedRemoteAccessText">
                  Access your local Gladys instance from your phone or any
                  browser, from anywhere in the world, without configuration.
                </Translate>
              </p>
              <p>
                <Translate id="gladysPlusPage.endToEndEncryptedRemoteAccessText2">
                  The data is end-to-end encrypted using modern cryptography
                  algorithm, we don't have access to your instance.
                </Translate>
              </p>
            </div>
          </div>

          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <h3 className={cx(styles.plusFeatureTitle)}>
                <Translate id="gladysPlusPage.automatedBackups">
                  Automatic & encrypted backups
                </Translate>
              </h3>
              <p>
                <Translate id="gladysPlusPage.automatedBackupsText">
                  Gladys Plus backup your local instance once every day, so you
                  don't have to worry about losing your local data again.
                </Translate>
              </p>
              <p>
                <Translate id="gladysPlusPage.automatedBackupsText2">
                  Your data is encrypted with a key you own, we are not able to
                  read your data.
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <img
                alt=""
                src={useBaseUrl("/img/plus/plus-backup-white.png")}
                className={cx(isDarkTheme ? "" : styles.invertImageColor)}
                style={{ width: "80%", marginLeft: "10%" }}
              />
            </div>
          </div>

          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <pre>
                <code>
                  {`POST https://api.gladysgateway.com/v1/api/device/state

{
    "device_feature_external_id": "temperature",
    "state": 30
}`}
                </code>
              </pre>
            </div>
            <div className="col col--6">
              <h3 className={cx(styles.plusFeatureTitle)}>
                <Translate id="gladysPlusPage.restApi">
                  Remote REST API, from anywhere
                </Translate>
              </h3>
              <p>
                <Translate id="gladysPlusPage.restApiText">
                  Send HTTP request from anywhere in the world, safely proxied
                  to your local instance.
                </Translate>
              </p>
            </div>
          </div>

          <div className={cx("row", styles.plusRow)}>
            <div className="col col--6">
              <h3 className={cx(styles.plusFeatureTitle)}>
                <Translate id="gladysPlusPage.voiceAssistant">
                  Voice assistant
                </Translate>
              </h3>
              <p>
                <Translate id="gladysPlusPage.voiceAssistantText">
                  Send requests to any Gladys devices from Google Assistant or
                  Amazon Alexa by voice, or from your phone on the Google Home /
                  Alexa app.
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <img
                alt="Google Assistant"
                src={useBaseUrl("/img/plus/google-assistant.svg")}
                style={{ width: "40%", marginLeft: "30%" }}
              />
            </div>
          </div>

          <div className={cx("row", styles.plusRow)}>
            <div className="col col--12">
              <h3 className={cx(styles.plusFeatureTitle, "text--center")}>
                <Translate id="gladysPlusPage.v2.features.advanced">
                  And much more: Enedis, Mistral AI, camera streaming, MCP
                  server
                </Translate>
              </h3>
              <p
                className="text--center"
                style={{ maxWidth: "42rem", margin: "0 auto" }}
              >
                <Translate id="gladysPlusPage.v2.features.advancedText">
                  Gladys Plus also includes the integrations that make a daily
                  difference: electricity usage tracking with Enedis, natural
                  voice control with Mistral AI (hosted in France by Scaleway),
                  remote access to your camera streams, and an MCP server to
                  plug your favorite AIs into your home automation.
                </Translate>
              </p>
            </div>
          </div>

          {language === "fr" && (
            <div className={cx("container", styles.plusRow)}>
              <YoutubeEmbedVideo id="TmjrBeufjyo" />
            </div>
          )}
        </section>

        {/* COMPARE */}
        <NabuCasaCompare />

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
