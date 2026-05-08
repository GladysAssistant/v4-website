import React from "react";
import cx from "classnames";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function FinalCTA() {
  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <h2 id="final-cta-title" className={styles.finalCtaTitle}>
        <Translate id="gladysPlusPage.v2.finalCta.title">
          Ready to try Gladys Plus?
        </Translate>
      </h2>
      <p className={styles.finalCtaText}>
        <Translate id="gladysPlusPage.v2.finalCta.text">
          One month free trial — no credit card required, no commitment. Cancel
          anytime. Or start with the starter kit, which includes Gladys
          pre-installed and 6 free months of Gladys Plus.
        </Translate>
      </p>
      <div className={styles.finalCtaButtons}>
        <a
          href="#pricing"
          className={cx("button button--primary button--lg")}
          data-track="plus_final_cta_subscribe"
        >
          <Translate id="gladysPlusPage.v2.finalCta.primary">
            Start free trial
          </Translate>
        </a>
        <a
          href={useBaseUrl("/starter-kit")}
          className={cx("button button--secondary button--lg")}
          data-track="plus_final_cta_starter_kit"
        >
          <Translate id="gladysPlusPage.v2.finalCta.secondary">
            See the starter kit
          </Translate>
        </a>
      </div>
    </section>
  );
}

export default FinalCTA;
