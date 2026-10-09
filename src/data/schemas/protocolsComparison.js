import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { protocolsFaqEn, protocolsFaqFr, protocolsFaqDe, protocolsFaqEs } from "../protocolsComparisonData";

export function getProtocolsComparisonPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const pageUrl = `${SITE_URL}${prefix}/zigbee-vs-matter-vs-zwave/`;

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
            ? "Zigbee vs Matter vs Z-Wave : quel protocole domotique choisir ?"
            : lang === "de"
              ? "Zigbee vs. Matter vs. Z-Wave: Welcher Smart-Home-Funkstandard passt zu dir?"
              : lang === "es"
              ? "Zigbee vs Matter vs Z-Wave: ¿qué protocolo domótico elegir?"
              : "Zigbee vs Matter vs Z-Wave: which smart home protocol to choose?",
        description:
          lang === "fr"
            ? "Comparatif clair et neutre des trois grands standards de la maison connectée : leurs différences, leurs forces et limites, et comment choisir."
            : lang === "de"
              ? "Ein klarer, neutraler Vergleich der drei großen Smart-Home-Standards: Unterschiede, Stärken und Grenzen – und wie du den richtigen wählst."
              : lang === "es"
              ? "Una comparación clara y neutral de los tres grandes estándares del hogar inteligente: en qué se diferencian, sus puntos fuertes y sus límites, y cómo elegir."
              : "A clear, neutral comparison of the three main smart home standards: how they differ, their strengths and limits, and how to choose.",
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
          { "@type": "Thing", name: "Zigbee" },
          { "@type": "Thing", name: "Z-Wave" },
          { "@type": "Thing", name: "Matter" },
          { "@type": "Thing", name: "Thread" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? protocolsFaqFr : lang === "de" ? protocolsFaqDe : lang === "es" ? protocolsFaqEs : protocolsFaqEn,
        pageUrl
      ),
    ],
  };
}
