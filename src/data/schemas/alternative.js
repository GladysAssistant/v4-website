import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  alternativeFaqEn,
  alternativeFaqFr,
  alternativeFaqDe,
  alternativeFaqEs,
} from "../alternativeData";

export function getAlternativePageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
              ? "Die beste Home Assistant Alternative: Gladys Assistant"
              : lang === "es"
              ? "La mejor alternativa a Home Assistant: Gladys Assistant"
              : "The best Home Assistant alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative open source plus simple à Home Assistant : sans YAML, sans cloud, auto-hébergée et stable."
            : lang === "de"
              ? "Warum Gladys Assistant die einfachere Open-Source-Alternative zu Home Assistant ist: ohne YAML, ohne Cloud, selbst gehostet und stabil."
              : lang === "es"
              ? "Por qué Gladys Assistant es una alternativa de código abierto más sencilla a Home Assistant: sin YAML, sin nube, autoalojada y estable."
              : "Why Gladys Assistant is a simpler open-source alternative to Home Assistant: no YAML, no cloud, self-hosted and stable.",
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
          ? alternativeFaqFr
          : lang === "de"
            ? alternativeFaqDe
          : lang === "es"
            ? alternativeFaqEs
            : alternativeFaqEn,
        pageUrl,
      ),
    ],
  };
}
