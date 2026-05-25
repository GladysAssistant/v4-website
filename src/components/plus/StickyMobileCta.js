import React, { useEffect, useState } from "react";
import cx from "classnames";
import Translate from "@docusaurus/Translate";
import { getCheckoutUrl } from "./checkout";
import styles from "./styles.module.css";

const MOBILE_MAX_WIDTH = 996;
const SCROLL_THRESHOLD = 480;

function StickyMobileCta({ language }) {
  const checkoutHref = getCheckoutUrl(language);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
      setVisible(isMobile && window.scrollY > SCROLL_THRESHOLD);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.stickyMobileCta} role="region" aria-label="Quick action">
      <a
        href={checkoutHref}
        className={cx("button button--primary button--block", styles.stickyMobileCtaBtn)}
        data-track="plus_sticky_mobile_cta_plus_yearly"
      >
        <Translate id="gladysPlusPage.v2.stickyCta.label">
          Start my free trial →
        </Translate>
      </a>
    </div>
  );
}

export default StickyMobileCta;
