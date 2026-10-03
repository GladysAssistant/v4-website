import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { protocolsFaqEn, protocolsFaqFr } from "../protocolsComparisonData";

export function getProtocolsComparisonPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
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
            : "Zigbee vs Matter vs Z-Wave: which smart home protocol to choose?",
        description:
          lang === "fr"
            ? "Comparatif clair et neutre des trois grands standards de la maison connectée : leurs différences, leurs forces et limites, et comment choisir."
            : "A clear, neutral comparison of the three main smart home standards: how they differ, their strengths and limits, and how to choose.",
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
          { "@type": "Thing", name: "Zigbee" },
          { "@type": "Thing", name: "Z-Wave" },
          { "@type": "Thing", name: "Matter" },
          { "@type": "Thing", name: "Thread" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? protocolsFaqFr : protocolsFaqEn, pageUrl),
    ],
  };
}
