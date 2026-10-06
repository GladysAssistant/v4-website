import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  comparisonFaqEn,
  comparisonFaqFr,
  comparisonFaqDe,
} from "../comparisonData";

export function getComparisonPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
              ? "Home Assistant vs. Gladys Assistant: der ehrliche Vergleich"
              : "Home Assistant vs Gladys Assistant: an honest comparison",
        description:
          lang === "fr"
            ? "Comparatif honnête entre Home Assistant et Gladys Assistant par le créateur de Gladys : installation, simplicité, intégrations, automatisations, communauté et prix."
            : lang === "de"
              ? "Ehrlicher Vergleich von Home Assistant und Gladys Assistant – vom Gladys-Entwickler selbst: Installation, Bedienung, Integrationen, Automatisierungen, Community und Preis."
              : "An honest comparison between Home Assistant and Gladys Assistant by Gladys' creator: installation, ease of use, integrations, automations, community and pricing.",
        image: getOgImageUrl(pageUrl, lang),
        url: pageUrl,
        inLanguage: lang,
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
      toFaqPage(
        lang === "fr"
          ? comparisonFaqFr
          : lang === "de"
            ? comparisonFaqDe
            : comparisonFaqEn,
        pageUrl,
      ),
    ],
  };
}
