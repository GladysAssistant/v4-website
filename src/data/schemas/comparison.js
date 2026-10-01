import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { comparisonFaqEn, comparisonFaqFr } from "../comparisonData";

export function getComparisonPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-assistant-vs-gladys-assistant/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          lang === "fr"
            ? "Home Assistant vs Gladys Assistant : le comparatif honnête"
            : "Home Assistant vs Gladys Assistant: an honest comparison",
        description:
          lang === "fr"
            ? "Comparatif honnête entre Home Assistant et Gladys Assistant par le créateur de Gladys : installation, simplicité, intégrations, automatisations, communauté et prix."
            : "An honest comparison between Home Assistant and Gladys Assistant by Gladys' creator: installation, ease of use, integrations, automations, community and pricing.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "SoftwareApplication", name: "Home Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? comparisonFaqFr : comparisonFaqEn, pageUrl),
    ],
  };
}
