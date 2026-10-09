import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { ikeaSmartHomeFaqEn, ikeaSmartHomeFaqFr, ikeaSmartHomeFaqDe, ikeaSmartHomeFaqEs } from "../ikeaSmartHomeData";

export function getIkeaSmartHomePageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
              ? "IKEA Smart Home: Dirigera, Matter over Thread & Zigbee"
              : lang === "es"
              ? "Casa inteligente IKEA: Dirigera, Matter sobre Thread y Zigbee"
              : "IKEA Smart Home: Dirigera, Matter over Thread & Zigbee",
        description:
          lang === "fr"
            ? "Pilotez votre maison connectée IKEA en local avec Gladys Assistant : Tradfri en Zigbee2MQTT, le hub Dirigera en Matter, et la nouvelle gamme Matter over Thread, avec ou sans Dirigera."
            : lang === "de"
              ? "Steuere dein IKEA Smart Home lokal mit Gladys Assistant: Tradfri über Zigbee2MQTT, den Dirigera-Hub über Matter und die neue Matter-over-Thread-Serie, mit oder ohne Dirigera."
              : lang === "es"
              ? "Controla en local tu casa inteligente IKEA con Gladys Assistant: Tradfri mediante Zigbee2MQTT, el hub Dirigera mediante Matter y la nueva gama Matter sobre Thread, con o sin Dirigera."
              : "Control your IKEA smart home locally with Gladys Assistant: Tradfri over Zigbee2MQTT, the Dirigera hub over Matter, and the new Matter over Thread range, with or without Dirigera.",
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
          { "@type": "Thing", name: "IKEA smart home" },
          { "@type": "Thing", name: "IKEA Dirigera" },
          { "@type": "Thing", name: "IKEA Tradfri" },
          { "@type": "Thing", name: "Matter over Thread" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? ikeaSmartHomeFaqFr : lang === "de" ? ikeaSmartHomeFaqDe : lang === "es" ? ikeaSmartHomeFaqEs : ikeaSmartHomeFaqEn,
        pageUrl,
      ),
    ],
  };
}
