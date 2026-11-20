import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./AffiliateDisclosure.module.css";

// Small affiliate notice added by plugins/remark-affiliate-links.js at the end
// of every doc, blog post or page whose Markdown links to Amazon. The product
// boxes (AmazonProducts, ExternalIntegrationProducts) carry their own notice.
export default function AffiliateDisclosure() {
  return (
    <p className={styles.disclosure}>
      <Translate
        id="affiliateLinks.disclosure"
        description="Affiliate notice at the end of a doc or blog post that links to Amazon"
      >
        This page contains affiliate links: as an Amazon Associate, Gladys
        Assistant earns from qualifying purchases, at no extra cost to you.
      </Translate>
    </p>
  );
}
