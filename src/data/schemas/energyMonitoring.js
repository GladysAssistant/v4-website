import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { energyFaqEn, energyFaqFr } from "../energyMonitoringData";

export function getEnergyMonitoringPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-energy-monitoring/`;

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
            ? "Suivi de consommation électrique : réduisez votre facture d'électricité"
            : "Home energy monitoring: track your consumption and cut your electricity bill",
        description:
          lang === "fr"
            ? "Suivez la consommation électrique de votre maison en temps réel, au global et appareil par appareil, puis automatisez les économies, en local avec Gladys Assistant. Compatible Linky, Enedis et Tempo."
            : "Monitor your home's electricity consumption in real time, whole-home and per device, then use automations to cut your bill, locally and privately with Gladys Assistant.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "Home energy monitoring" },
          { "@type": "Thing", name: "Electricity bill savings" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? energyFaqFr : energyFaqEn, pageUrl),
    ],
  };
}
