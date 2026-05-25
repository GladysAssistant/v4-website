import React from "react";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const FOUNDER_LINKS = {
  blog: "/blog",
  x: "https://x.com/pierregillesl",
  github: "https://github.com/Pierre-Gilles",
};

function FounderNote() {
  const photoUrl = useBaseUrl("/img/pierre-gilles.jpg");
  const blogUrl = useBaseUrl(FOUNDER_LINKS.blog);

  return (
    <section className={styles.founderNote} aria-labelledby="founder-note-title">
      <img
        className={styles.founderPhoto}
        src={photoUrl}
        alt="Pierre-Gilles Leymarie"
        width={96}
        height={96}
        loading="lazy"
      />
      <div className={styles.founderBody}>
        <h2 id="founder-note-title" className={styles.founderTitle}>
          <Translate id="gladysPlusPage.v2.founder.title">
            Hi, I'm Pierre-Gilles
          </Translate>
        </h2>
        <p className={styles.founderText}>
          <Translate id="gladysPlusPage.v2.founder.text">
            I created Gladys Assistant in 2013 and build Gladys Plus myself. No
            investors, no ads. Just an indie open-source project funded by
            people who use it every day. Questions? I read every message.
          </Translate>
        </p>
        <div className={styles.founderLinks}>
          <a href={blogUrl} data-track="plus_founder_blog">
            <Translate id="gladysPlusPage.v2.founder.link.blog">Blog</Translate>
          </a>
          <a
            href={FOUNDER_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            data-track="plus_founder_x"
          >
            <Translate id="gladysPlusPage.v2.founder.link.x">X</Translate>
          </a>
          <a
            href={FOUNDER_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            data-track="plus_founder_github"
          >
            <Translate id="gladysPlusPage.v2.founder.link.github">GitHub</Translate>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FounderNote;
