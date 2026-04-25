import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function MiniStats() {
  return (
    <div
      className={styles.miniStats}
      role="list"
      aria-label="Project highlights"
    >
      <div className={styles.miniStat} role="listitem">
        <div className={styles.miniStatValue}>2013</div>
        <div className={styles.miniStatLabel}>
          <Translate id="gladysPlusPage.v2.stats.since">Started in</Translate>
        </div>
      </div>
      <div className={styles.miniStat} role="listitem">
        <div className={styles.miniStatValue}>100%</div>
        <div className={styles.miniStatLabel}>
          <Translate id="gladysPlusPage.v2.stats.opensource">
            Open-source · Privacy-first
          </Translate>
        </div>
      </div>
      <div className={styles.miniStat} role="listitem">
        <div className={styles.miniStatValue}>🇫🇷</div>
        <div className={styles.miniStatLabel}>
          <Translate id="gladysPlusPage.v2.stats.indie">
            Indie · No investors
          </Translate>
        </div>
      </div>
    </div>
  );
}

export default MiniStats;
