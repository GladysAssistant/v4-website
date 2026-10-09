import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  alternativeFaqEn as googleHomeAlternativeFaqEn,
  alternativeFaqFr as googleHomeAlternativeFaqFr,
  alternativeFaqDe as googleHomeAlternativeFaqDe,
  alternativeFaqEs as googleHomeAlternativeFaqEs,
} from "../googleHomeAlternativeData";

export function getGoogleHomeAlternativePageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const pageUrl = `${SITE_URL}${prefix}/google-home-alternative/`;

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
            ? "La meilleure alternative à Google Home, respectueuse de la vie privée : Gladys Assistant"
            : lang === "de"
              ? "Die beste Google Home Alternative mit Datenschutz: Gladys Assistant"
              : lang === "es"
              ? "La mejor alternativa a Google Home que respeta tu privacidad: Gladys Assistant"
              : "The best privacy-friendly Google Home alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative locale et respectueuse de la vie privée à Google Home : vos données restent chez vous, sans cloud obligatoire, open source et auto-hébergée."
            : lang === "de"
              ? "Warum Gladys Assistant die lokale, datenschutzfreundliche Alternative zu Google Home ist: Deine Daten bleiben zu Hause, keine Cloud-Pflicht, Open Source und selbst gehostet."
              : lang === "es"
              ? "Por qué Gladys Assistant es una alternativa a Google Home local y respetuosa con la privacidad: tus datos se quedan en casa, sin nube obligatoria, de código abierto y autoalojada."
              : "Why Gladys Assistant is a local, privacy-friendly Google Home alternative: your data stays at home, no mandatory cloud, open-source and self-hosted.",
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
          { "@type": "Product", name: "Google Home" },
        ],
      },
      toFaqPage(
        lang === "fr"
          ? googleHomeAlternativeFaqFr
          : lang === "de"
            ? googleHomeAlternativeFaqDe
          : lang === "es"
            ? googleHomeAlternativeFaqEs
            : googleHomeAlternativeFaqEn,
        pageUrl,
      ),
    ],
  };
}
