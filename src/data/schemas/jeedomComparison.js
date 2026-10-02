import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  comparisonFaqEn as jeedomComparisonFaqEn,
  comparisonFaqFr as jeedomComparisonFaqFr,
} from "../jeedomComparisonData";

export function getJeedomComparisonPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/jeedom-vs-gladys-assistant/`;

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
            ? "Gladys vs Jeedom : le comparatif honnête"
            : "Gladys vs Jeedom: an honest comparison",
        description:
          lang === "fr"
            ? "Comparatif honnête entre Gladys Assistant et Jeedom par le créateur de Gladys : installation, simplicité, intégrations, scénarios, communauté et prix."
            : "An honest comparison between Gladys Assistant and Jeedom by Gladys' creator: installation, ease of use, integrations, scenarios, community and pricing.",
        image: getOgImageUrl(pageUrl, lang),
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
          { "@type": "SoftwareApplication", name: "Jeedom" },
        ],
      },
      toFaqPage(
        lang === "fr" ? jeedomComparisonFaqFr : jeedomComparisonFaqEn,
        pageUrl,
      ),
    ],
  };
}
