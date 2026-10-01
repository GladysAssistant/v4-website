import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import {
  bestZigbeeDongleFaqEn,
  bestZigbeeDongleFaqFr,
} from "../bestZigbeeDongleData";

export function getBestZigbeeDonglePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/best-zigbee-dongle/`;

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
            ? "Quelle clé Zigbee USB choisir pour le Raspberry Pi et Zigbee2MQTT (2026)"
            : "Best Zigbee USB dongle for Raspberry Pi & Zigbee2MQTT (2026)",
        description:
          lang === "fr"
            ? "Guide d'achat des meilleurs coordinateurs Zigbee pour Raspberry Pi, Zigbee2MQTT et Gladys Assistant : Sonoff, SMLIGHT, ConBee et plus."
            : "A buyer's guide to the best Zigbee coordinators for Raspberry Pi, Zigbee2MQTT and Gladys Assistant: Sonoff, SMLIGHT, ConBee and more.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "Zigbee USB dongle" },
          { "@type": "Thing", name: "Zigbee coordinator" },
          { "@type": "Thing", name: "Zigbee2MQTT" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? bestZigbeeDongleFaqFr : bestZigbeeDongleFaqEn,
        pageUrl,
      ),
    ],
  };
}
