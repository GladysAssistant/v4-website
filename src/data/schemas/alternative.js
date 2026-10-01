import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { alternativeFaqEn, alternativeFaqFr } from "../alternativeData";

export function getAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-assistant-alternative/`;

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
            ? "La meilleure alternative à Home Assistant : Gladys Assistant"
            : "The best Home Assistant alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative open source plus simple à Home Assistant : sans YAML, sans cloud, auto-hébergée et stable."
            : "Why Gladys Assistant is a simpler open-source alternative to Home Assistant: no YAML, no cloud, self-hosted and stable.",
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
      toFaqPage(lang === "fr" ? alternativeFaqFr : alternativeFaqEn, pageUrl),
    ],
  };
}
