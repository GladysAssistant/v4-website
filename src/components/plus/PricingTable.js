import React, { useState } from "react";
import cx from "classnames";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.featureCheck}
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CHECKOUT_URL =
  "https://direct-pay-gladys-plus.gladysassistant.workers.dev";

function PriceLine({ period, monthlyPrice, yearlyPrice }) {
  const display =
    period === "yearly"
      ? (yearlyPrice / 12).toFixed(2).replace(".", ",")
      : monthlyPrice.toFixed(2).replace(".", ",");
  return (
    <>
      <div className={styles.pricingPriceLine}>
        <span className={styles.pricingPrice}>{display}€</span>
        <span className={styles.pricingPeriod}>
          <Translate id="gladysPlusPage.v2.perMonthShort">/ mois</Translate>
        </span>
      </div>
      <div className={styles.pricingBilling}>
        {period === "yearly" ? (
          <Translate
            id="gladysPlusPage.v2.billingYearlyAmount"
            values={{ amount: yearlyPrice.toFixed(2).replace(".", ",") }}
          >
            {"{amount}€ facturés annuellement"}
          </Translate>
        ) : (
          <Translate id="gladysPlusPage.v2.billingMonthly">
            Sans engagement · annulation à tout moment
          </Translate>
        )}
      </div>
    </>
  );
}

function Plan({
  language,
  period,
  planKey,
  name,
  tagline,
  monthlyPrice,
  yearlyPrice,
  features,
  highlighted,
  badgeLabel,
}) {
  const isFr = language === "fr";
  const checkoutHref = `${CHECKOUT_URL}?locale=${
    isFr ? "fr" : "en"
  }&plan=${planKey}&period=${period}`;

  return (
    <div
      className={cx(styles.pricingCard, {
        [styles.pricingCardHighlighted]: highlighted,
        [styles.pricingCardLite]: !highlighted,
      })}
    >
      {highlighted && badgeLabel && (
        <div className={styles.pricingBadge}>{badgeLabel}</div>
      )}
      <div className={styles.pricingHeader}>
        <div className={styles.pricingPlanName}>{name}</div>
        {tagline && <div className={styles.pricingTagline}>{tagline}</div>}
        <PriceLine
          period={period}
          monthlyPrice={monthlyPrice}
          yearlyPrice={yearlyPrice}
        />
      </div>

      <ul className={styles.pricingFeatures}>
        {features.map((feature, i) => (
          <li key={i}>
            <Check />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={checkoutHref}
        className={cx(
          "button",
          highlighted ? "button--primary" : "button--secondary",
          styles.pricingCta,
        )}
        data-track={`plus_click_subscribe_${planKey}_${period}`}
      >
        <Translate id="gladysPlusPage.v2.startTrialCta">
          Start 1-month free trial
        </Translate>
      </a>
      <div className={styles.pricingNoCc}>
        <Translate id="gladysPlusPage.v2.noCreditCard">
          No credit card required
        </Translate>
      </div>
    </div>
  );
}

function PricingTable({ language }) {
  const [period, setPeriod] = useState("yearly");

  const monthlyLabel = translate({
    id: "gladysPlusPage.v2.toggleMonthly",
    message: "Monthly",
  });
  const yearlyLabel = translate({
    id: "gladysPlusPage.v2.toggleYearly",
    message: "Yearly",
  });
  const saveLabel = translate({
    id: "gladysPlusPage.v2.toggleSave",
    message: "-17%",
  });

  // ---- Lite features (image: remote, voice, open API)
  const liteFeatures = [
    translate({
      id: "gladysPlusPage.v2.feature.remote",
      message: "End-to-end encrypted remote access",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.voice",
      message: "Google Home & Amazon Alexa",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.api",
      message: "Open REST API",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.family",
      message: "Accounts for the whole family",
    }),
  ];

  // ---- Plus features (everything in Lite + extras)
  const plusFeatures = [
    translate({
      id: "gladysPlusPage.v2.plus.includesLite",
      message: "Everything in Plus Lite, plus:",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.backups",
      message: "Daily encrypted backups (E2E)",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.camera",
      message: "Remote camera streaming",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.ai",
      message: "AI integration (Mistral, hosted in France)",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.enedis",
      message: "Enedis integration (electricity usage, France)",
    }),
    translate({
      id: "gladysPlusPage.v2.feature.mcp",
      message: "MCP server (Model Context Protocol)",
    }),
  ];

  return (
    <div className={styles.pricingWrapper} id="pricing">
      <div className={styles.toggleWrapper}>
        <div
          className={styles.toggle}
          role="tablist"
          aria-label="Billing period"
        >
          <button
            type="button"
            role="tab"
            aria-selected={period === "monthly"}
            className={cx(styles.toggleBtn, {
              [styles.toggleBtnActive]: period === "monthly",
            })}
            onClick={() => setPeriod("monthly")}
            data-track="plus_toggle_monthly"
          >
            {monthlyLabel}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={period === "yearly"}
            className={cx(styles.toggleBtn, {
              [styles.toggleBtnActive]: period === "yearly",
            })}
            onClick={() => setPeriod("yearly")}
            data-track="plus_toggle_yearly"
          >
            {yearlyLabel}
            <span className={styles.toggleSaveBadge}>{saveLabel}</span>
          </button>
        </div>
      </div>

      <div className={styles.pricingGrid}>
        <Plan
          language={language}
          period={period}
          planKey="lite"
          name="Gladys Plus Lite"
          tagline={translate({
            id: "gladysPlusPage.v2.lite.tagline",
            message: "L'essentiel pour l'accès à distance",
          })}
          monthlyPrice={6.99}
          yearlyPrice={69.99}
          features={liteFeatures}
        />
        <Plan
          language={language}
          period={period}
          planKey="plus"
          name="Gladys Plus"
          tagline={translate({
            id: "gladysPlusPage.v2.plus.tagline",
            message: "Toutes les intégrations avancées",
          })}
          monthlyPrice={9.99}
          yearlyPrice={99.99}
          features={plusFeatures}
          highlighted
          badgeLabel={translate({
            id: "gladysPlusPage.v2.plus.badge",
            message: "Plus populaire",
          })}
        />
      </div>

      <div className={styles.pricingFootnote}>
        <Translate id="gladysPlusPage.v2.guarantee">
          ✓ 1 month free trial (no credit card) · ✓ Satisfied or refunded · ✓ No
          commitment
        </Translate>
      </div>
    </div>
  );
}

export default PricingTable;
