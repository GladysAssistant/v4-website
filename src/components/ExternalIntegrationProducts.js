import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./ExternalIntegrationProducts.module.css";

// "Where to buy the hardware" box of a generated external integration page.
// The products come from src/data/integrationProducts.js: the generation
// script passes the ones of the page, as links that already carry the
// affiliate partner id of the page's language.
function ExternalIntegrationProducts({ name, products }) {
  if (!products || products.length === 0) {
    return null;
  }
  return (
    <aside className={styles.box}>
      <p className={styles.title}>
        <Translate
          id="externalIntegration.products.title"
          description="Title of the box listing the hardware to buy for an external integration"
          values={{ name }}
        >
          {"Need the hardware for {name}?"}
        </Translate>
      </p>
      <ul className={styles.products}>
        {products.map((product) => (
          <li key={product.href}>
            <a
              href={product.href}
              target="_blank"
              rel="sponsored nofollow noopener"
            >
              <Translate
                id="externalIntegration.products.link"
                description="Link to a product on Amazon, on an external integration page"
                values={{ product: product.label }}
              >
                {"{product} on Amazon"}
              </Translate>
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.disclosure}>
        <Translate
          id="externalIntegration.products.disclosure"
          description="Affiliate disclosure under the products of an external integration"
        >
          Affiliate links: as an Amazon Associate, Gladys Assistant earns from
          qualifying purchases, at no extra cost for you. It helps fund the
          open source project.
        </Translate>
      </p>
    </aside>
  );
}

export default ExternalIntegrationProducts;
