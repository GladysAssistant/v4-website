import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getCheckoutUrl, handleCheckoutClick } from "./checkout";
import styles from "./styles.module.css";

// Shipped with Gladys 5.1: Gladys Plus already sees the instance connect and
// disconnect, so it can email the account admins when it stays unreachable.
// The setting is not gated by plan, so it is sold as part of Lite (and Plus).
function OfflineAlert() {
  const { i18n } = useDocusaurusContext();
  const language = i18n.currentLocale;
  const screenshotLang = language === "fr" ? "fr" : "en";
  const screenshotUrl = useBaseUrl(
    `/img/articles/gladys-assistant-5-1/06-offline-alert-${screenshotLang}.webp`,
  );

  const cards = [
    {
      icon: "⏱️",
      titleId: "gladysPlusPage.v2.offlineAlert.delay.title",
      titleDefault: "You pick the delay",
      textId: "gladysPlusPage.v2.offlineAlert.delay.text",
      textDefault:
        "From 10 minutes to 24 hours: short enough to react fast, long enough not to be woken up by an internet box that reboots.",
    },
    {
      icon: "✅",
      titleId: "gladysPlusPage.v2.offlineAlert.back.title",
      titleDefault: "An email when it's back",
      textId: "gladysPlusPage.v2.offlineAlert.back.text",
      textDefault:
        "Once your Gladys is back online, a second email tells you so. No need to go and check.",
    },
    {
      icon: "🧘",
      titleId: "gladysPlusPage.v2.offlineAlert.nothing.title",
      titleDefault: "Nothing to install",
      textId: "gladysPlusPage.v2.offlineAlert.nothing.text",
      textDefault:
        "No monitoring service to host: turn the alert on in one click from Gladys Plus, and every admin of your account gets the email.",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="offline-alert-title">
      <div className={styles.offlineAlert}>
        <div className={styles.offlineAlertHeader}>
          <span className={styles.newBadge}>
            <Translate id="gladysPlusPage.v2.offlineAlert.badge">New</Translate>
          </span>
          <h2 id="offline-alert-title" className={styles.offlineAlertTitle}>
            <Translate id="gladysPlusPage.v2.offlineAlert.title">
              Get an email when your Gladys goes down
            </Translate>
          </h2>
          <p className={styles.offlineAlertSubtitle}>
            <Translate id="gladysPlusPage.v2.offlineAlert.subtitle">
              Power cut, internet box down, dead SD card, a Docker update gone
              wrong: when your instance stays unreachable, Gladys Plus emails
              you. You find out the same day, not in the evening when you get
              home.
            </Translate>
          </p>
        </div>

        <figure className={styles.offlineAlertFigure}>
          <img
            src={screenshotUrl}
            alt={translate({
              id: "gladysPlusPage.v2.offlineAlert.screenshotAlt",
              message:
                "The Gladys Plus setting to get an email when Gladys goes offline, with the delay to choose",
            })}
            width="1800"
            height="495"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className={styles.offlineAlertGrid}>
          {cards.map((card) => (
            <div className={styles.offlineAlertCard} key={card.titleId}>
              <div className={styles.offlineAlertCardIcon} aria-hidden="true">
                {card.icon}
              </div>
              <h3 className={styles.offlineAlertCardTitle}>
                <Translate id={card.titleId}>{card.titleDefault}</Translate>
              </h3>
              <p className={styles.offlineAlertCardText}>
                <Translate id={card.textId}>{card.textDefault}</Translate>
              </p>
            </div>
          ))}
        </div>

        <div className={styles.offlineAlertCta}>
          <a
            href={getCheckoutUrl(language)}
            onClick={handleCheckoutClick}
            className="button button--primary button--lg"
            data-track="plus_offline_alert_start_trial_plus_yearly"
          >
            <Translate id="gladysPlusPage.v2.offlineAlert.cta">
              Try it free for 1 month →
            </Translate>
          </a>
          <p className={styles.offlineAlertFootnote}>
            <Translate id="gladysPlusPage.v2.offlineAlert.plans">
              Included in both plans, Lite and Plus · No credit card required
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}

export default OfflineAlert;
