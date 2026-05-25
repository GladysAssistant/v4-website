import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

function ValueAnchor() {
  return (
    <section className={styles.valueAnchor} aria-labelledby="value-anchor-title">
      <p id="value-anchor-title" className={styles.valueAnchorText}>
        <Translate id="gladysPlusPage.v2.valueAnchor.text">
          For the price of a coffee per month, you get encrypted remote access,
          automatic backups, French-hosted AI, remote camera streaming, and you
          fund the open-source project you use every day.
        </Translate>
      </p>
    </section>
  );
}

export default ValueAnchor;
