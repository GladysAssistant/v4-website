import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { ikeaSmartHomeFaqEn, ikeaSmartHomeFaqFr } from "../ikeaSmartHomeData";

export function getIkeaSmartHomePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/ikea-smart-home/`;

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
            ? "Maison connectée IKEA : Dirigera, Matter over Thread et Zigbee"
            : "IKEA Smart Home: Dirigera, Matter over Thread & Zigbee",
        description:
          lang === "fr"
            ? "Pilotez votre maison connectée IKEA en local avec Gladys Assistant : Tradfri en Zigbee2MQTT, le hub Dirigera en Matter, et la nouvelle gamme Matter over Thread, avec ou sans Dirigera."
            : "Control your IKEA smart home locally with Gladys Assistant: Tradfri over Zigbee2MQTT, the Dirigera hub over Matter, and the new Matter over Thread range, with or without Dirigera.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "IKEA smart home" },
          { "@type": "Thing", name: "IKEA Dirigera" },
          { "@type": "Thing", name: "IKEA Tradfri" },
          { "@type": "Thing", name: "Matter over Thread" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? ikeaSmartHomeFaqFr : ikeaSmartHomeFaqEn,
        pageUrl,
      ),
    ],
  };
}
