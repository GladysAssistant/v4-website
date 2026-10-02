import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  alternativeFaqEn as jeedomAlternativeFaqEn,
  alternativeFaqFr as jeedomAlternativeFaqFr,
} from "../jeedomAlternativeData";

export function getJeedomAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/jeedom-alternative/`;

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
            ? "La meilleure alternative à Jeedom : Gladys Assistant"
            : "The best Jeedom alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative française à Jeedom, plus simple et avec des intégrations gratuites : sans plugins payants, sans YAML, sans cloud, auto-hébergée et stable."
            : "Why Gladys Assistant is a simpler French Jeedom alternative with free integrations: no paid plugins, no YAML, no cloud, self-hosted and stable.",
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
        lang === "fr" ? jeedomAlternativeFaqFr : jeedomAlternativeFaqEn,
        pageUrl,
      ),
    ],
  };
}
