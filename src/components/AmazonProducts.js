import React from "react";
import LANDING_PRODUCTS from "../data/landingProducts";
import { amazonSearchLink } from "../utils/affiliateLinks";
import styles from "./AmazonProducts.module.css";

// "The hardware for this guide" box of a landing page: the products listed for
// the page in src/data/landingProducts.js, as Amazon search links carrying the
// partner id of the page's language. Renders nothing in a language with no
// Amazon partner id (de, es) or when the page has no product in it.
const STRINGS = {
  en: {
    title: "The hardware for this guide",
    link: (product) => `${product} on Amazon`,
    disclosure:
      "Affiliate links: as an Amazon Associate, Gladys Assistant earns from qualifying purchases, at no extra cost for you. It helps fund the open source project.",
  },
  fr: {
    title: "Le matériel pour ce guide",
    link: (product) => `${product} sur Amazon`,
    disclosure:
      "Liens affiliés : en tant que Partenaire Amazon, Gladys Assistant réalise un bénéfice sur les achats remplissant les conditions requises, sans surcoût pour vous. Cela aide à financer le projet open source.",
  },
};

export default function AmazonProducts({ page, lang }) {
  const strings = STRINGS[lang];
  if (!strings) {
    return null;
  }
  const products = (LANDING_PRODUCTS[page] || [])
    .map((product) => (typeof product === "string" ? product : product[lang]))
    .filter(Boolean)
    .map((label) => ({ label, href: amazonSearchLink(label, lang) }))
    .filter((product) => product.href);
  if (products.length === 0) {
    return null;
  }
  return (
    <aside className={styles.box} aria-label={strings.title}>
      <p className={styles.title}>{strings.title}</p>
      <ul className={styles.products}>
        {products.map((product) => (
          <li key={product.href}>
            <a
              href={product.href}
              target="_blank"
              rel="sponsored nofollow noopener"
            >
              {strings.link(product.label)}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.disclosure}>{strings.disclosure}</p>
    </aside>
  );
}
