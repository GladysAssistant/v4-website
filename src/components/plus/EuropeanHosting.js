import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";
import useRegion from "./useRegion";

function EuropeanHosting() {
  // "Hosted in Europe" is an EU data-residency selling point that doesn't land
  // for North American visitors (and implies transatlantic latency for their
  // remote access), so hide it for US/Canada. The end-to-end encryption message
  // it carries is already covered elsewhere on the page.
  const region = useRegion();
  if (region === "us") {
    return null;
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="european-hosting-title"
    >
      <div className={styles.euCallout}>
        <div className={styles.euCalloutHeader}>
          <span className={styles.euFlag} aria-hidden="true">
            🇪🇺
          </span>
          <h2 id="european-hosting-title" className={styles.euCalloutTitle}>
            <Translate id="gladysPlusPage.v2.eu.title">
              Hosted in Europe
            </Translate>
          </h2>
        </div>
        <p className={styles.euCalloutSubtitle}>
          <Translate id="gladysPlusPage.v2.eu.subtitle">
            The infrastructure that powers Gladys Plus runs primarily in
            European data centers, and your data is always end-to-end encrypted.
          </Translate>
        </p>

        <div className={styles.euGrid}>
          <div className={styles.euCard}>
            <div className={styles.euCardIcon} aria-hidden="true">
              🧠
            </div>
            <h3 className={styles.euCardTitle}>
              <Translate id="gladysPlusPage.v2.eu.ai.title">
                Open-Weight AI models
              </Translate>
            </h3>
            <p className={styles.euCardText}>
              <Translate id="gladysPlusPage.v2.eu.ai.text">
                The Open-Weight AI models used by Gladys Plus are hosted by
                Scaleway in European data centers. AI inference stays within the
                EU.
              </Translate>
            </p>
          </div>

          <div className={styles.euCard}>
            <div className={styles.euCardIcon} aria-hidden="true">
              🏛️
            </div>
            <h3 className={styles.euCardTitle}>
              <Translate id="gladysPlusPage.v2.eu.infra.title">
                Infrastructure in Europe
              </Translate>
            </h3>
            <p className={styles.euCardText}>
              <Translate id="gladysPlusPage.v2.eu.infra.text">
                The Gladys Plus infrastructure (API, backups, relays) runs in
                European data centers, operated under GDPR.
              </Translate>
            </p>
          </div>

          <div className={styles.euCard}>
            <div className={styles.euCardIcon} aria-hidden="true">
              🔒
            </div>
            <h3 className={styles.euCardTitle}>
              <Translate id="gladysPlusPage.v2.eu.e2e.title">
                End-to-end encrypted anyway
              </Translate>
            </h3>
            <p className={styles.euCardText}>
              <Translate id="gladysPlusPage.v2.eu.e2e.text">
                Even if our servers were compromised, your data stays safe: your
                commands and backups are end-to-end encrypted with keys that
                only your local Gladys instance owns.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EuropeanHosting;
