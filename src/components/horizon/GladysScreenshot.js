import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

/**
 * The product screenshot the marketing pages drop into their copy.
 *
 * Every page used to carry its own copy of this component, each pointing at
 * the old hero PNG; they now share one, so the shots follow the app in a
 * single place. `shot` picks which capture to show, out of the set exported
 * to /static/img/home/horizon.
 */
const WIDTHS = [640, 1000, 1400];

function GladysScreenshot({ lang, caption, shot = "hero", alt }) {
  const { siteConfig } = useDocusaurusContext();
  const url = (width) =>
    `${siteConfig.baseUrl}img/home/horizon/${shot}-${lang}-${width}.webp`;

  const defaultAlt =
    lang === "fr"
      ? "Le tableau de bord de Gladys Assistant"
      : "The Gladys Assistant dashboard";

  return (
    <figure className={styles.screenshot}>
      <span className={styles.shotFrame}>
        <img
          src={url(WIDTHS[WIDTHS.length - 1])}
          srcSet={WIDTHS.map((width) => `${url(width)} ${width}w`).join(", ")}
          sizes="(max-width: 52rem) 100vw, 52rem"
          width="1600"
          height="950"
          alt={alt || defaultAlt}
          loading="lazy"
          decoding="async"
        />
      </span>
      {caption && (
        <figcaption className={styles.screenshotCaption}>{caption}</figcaption>
      )}
    </figure>
  );
}

export default GladysScreenshot;
