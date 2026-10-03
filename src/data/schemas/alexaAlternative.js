import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  alternativeFaqEn as alexaAlternativeFaqEn,
  alternativeFaqFr as alexaAlternativeFaqFr,
} from "../alexaAlternativeData";

export function getAlexaAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/alexa-alternative/`;

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
            ? "La meilleure alternative à Alexa, respectueuse de la vie privée : Gladys Assistant"
            : "The best privacy-friendly Alexa alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative locale et respectueuse de la vie privée à Alexa : vos données restent chez vous, sans cloud obligatoire, open source et auto-hébergée."
            : "Why Gladys Assistant is a local, privacy-friendly Alexa alternative: your data stays at home, no mandatory cloud, open-source and self-hosted.",
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
          { "@type": "Product", name: "Amazon Alexa" },
        ],
      },
      toFaqPage(
        lang === "fr" ? alexaAlternativeFaqFr : alexaAlternativeFaqEn,
        pageUrl,
      ),
    ],
  };
}
