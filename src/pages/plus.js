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
import HowItWorks from "../components/plus/HowItWorks";
import EuropeanHosting from "../components/plus/EuropeanHosting";
import ValueAnchor from "../components/plus/ValueAnchor";
import FounderNote from "../components/plus/FounderNote";
import StickyMobileCta from "../components/plus/StickyMobileCta";

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
    <main className={plusStyles.plusPageMain}>
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
                  Control your home from anywhere, securely
                </Translate>
              </h1>
              <p className={plusStyles.heroSubtitle}>
                <Translate id="gladysPlusPage.v2.hero.subtitle">
                  Gladys Plus unlocks encrypted remote access, automatic
                  backups, and advanced integrations for your Gladys Assistant.
                  Try it free for 1 month, no credit card required.
                </Translate>
              </p>

              <p className={plusStyles.heroSocialProof}>
                <span
                  className={plusStyles.heroSocialProofStar}
                  aria-hidden="true"
                >
                  ★
                </span>
                <Translate id="gladysPlusPage.v2.hero.socialProof.github">
                  3,100+ stars on GitHub · open-source since 2013
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

        <HowItWorks />

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

        <ValueAnchor />

        <FounderNote />

        {/* FINAL CTA */}
        <FinalCTA />
      </div>

      <StickyMobileCta />
    </main>
  );
}

function PlusParent() {
  return (
    <Layout
      title={translate({
        id: "gladysgladysPlusPage.title",
        message: "Gladys Plus: secure remote access for your smart home",
      })}
      description={translate({
        id: "gladysgladysPlusPage.metaDescription",
        message:
          "Access Gladys Assistant from anywhere with end-to-end encryption. Daily backups, voice assistants, AI, and more. Try Gladys Plus free for 1 month, no credit card required.",
      })}
    >
      <PlusContent />
    </Layout>
  );
}

export default PlusParent;
