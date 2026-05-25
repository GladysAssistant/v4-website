import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function Personas() {
  return (
    <section className={styles.section} aria-labelledby="personas-title">
      <h2 id="personas-title" className={styles.sectionTitle}>
        <Translate id="gladysPlusPage.v2.personas.title">
          Who is it for?
        </Translate>
      </h2>
      <p className={styles.sectionSubtitle}>
        <Translate id="gladysPlusPage.v2.personas.subtitle">
          Gladys Plus is built for three kinds of users — you probably recognize
          yourself in one of them.
        </Translate>
      </p>

      <div className={styles.personas}>
        <div className={styles.personaCard}>
          <div className={styles.personaIcon} aria-hidden="true">
            🌍
          </div>
          <h3 className={styles.personaTitle}>
            <Translate id="gladysPlusPage.v2.personas.mobile.title">
              You want to access Gladys from anywhere
            </Translate>
          </h3>
          <p className={styles.personaText}>
            <Translate id="gladysPlusPage.v2.personas.mobile.text">
              Reach your home automation from anywhere in the world, securely,
              without opening any port or renewing certificates. Everything is
              end-to-end encrypted.
            </Translate>
          </p>
        </div>

        <div className={styles.personaCard}>
          <div className={styles.personaIcon} aria-hidden="true">
            ⚡
          </div>
          <h3 className={styles.personaTitle}>
            <Translate id="gladysPlusPage.v2.personas.power.title">
              You want the advanced integrations
            </Translate>
          </h3>
          <p className={styles.personaText}>
            <Translate id="gladysPlusPage.v2.personas.power.text">
              Enedis to track your electricity usage, Mistral AI to talk to your
              home, remote camera streaming, MCP server to plug your favorite
              AIs into your home automation.
            </Translate>
          </p>
        </div>

        <div className={styles.personaCard}>
          <div className={styles.personaIcon} aria-hidden="true">
            ❤️
          </div>
          <h3 className={styles.personaTitle}>
            <Translate id="gladysPlusPage.v2.personas.support.title">
              You want to support the project
            </Translate>
          </h3>
          <p className={styles.personaText}>
            <Translate id="gladysPlusPage.v2.personas.support.text">
              Gladys is free and open-source forever. Gladys Plus is what lets
              me work on it full-time. Every subscription truly counts.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Personas;
