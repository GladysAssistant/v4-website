import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  energyFaqEn,
  energyFaqFr,
  energyFaqDe,
  energyFaqEs,
} from "../energyMonitoringData";

export function getEnergyMonitoringPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
            ? "Energiemonitoring zu Hause: Stromverbrauch messen und Stromrechnung senken"
            : lang === "es"
            ? "Monitorización energética del hogar: controla tu consumo y reduce tu factura de la luz"
            : "Home energy monitoring: track your consumption and cut your electricity bill",
        description:
          lang === "fr"
            ? "Suivez la consommation électrique de votre maison en temps réel, au global et appareil par appareil, puis automatisez les économies, en local avec Gladys Assistant. Compatible Linky, Enedis et Tempo."
            : lang === "de"
            ? "Miss den Stromverbrauch deines Zuhauses in Echtzeit, für das ganze Haus und pro Gerät, und senke deine Rechnung mit Automationen, lokal und privat mit Gladys Assistant."
            : lang === "es"
            ? "Monitoriza en tiempo real el consumo eléctrico de tu casa, en total y por dispositivo, y usa automatizaciones para reducir tu factura, en local y de forma privada con Gladys Assistant."
            : "Monitor your home's electricity consumption in real time, whole-home and per device, then use automations to cut your bill, locally and privately with Gladys Assistant.",
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
          { "@type": "Thing", name: "Home energy monitoring" },
          { "@type": "Thing", name: "Electricity bill savings" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? energyFaqFr : lang === "de" ? energyFaqDe : lang === "es" ? energyFaqEs : energyFaqEn,
        pageUrl,
      ),
    ],
  };
}
