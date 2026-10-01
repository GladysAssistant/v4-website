import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import {
  homeWeatherStationFaqEn,
  homeWeatherStationFaqFr,
} from "../homeWeatherStationData";

export function getHomeWeatherStationPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-weather-station/`;

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
            ? "Quelle station météo connectée pour une maison connectée (Zigbee, Matter, Netatmo)"
            : "Best home weather station for a smart home (Zigbee, Matter, Netatmo)",
        description:
          lang === "fr"
            ? "Guide des capteurs météo sans fil pour Gladys Assistant : capteurs Zigbee et Matter locaux, station Netatmo, et OpenWeather pour les prévisions."
            : "A guide to wireless weather sensors for Gladys Assistant: local Zigbee and Matter sensors, the Netatmo station, and OpenWeather for forecast data.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "Home weather station" },
          { "@type": "Thing", name: "Weather sensor" },
          { "@type": "Thing", name: "Zigbee" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? homeWeatherStationFaqFr : homeWeatherStationFaqEn,
        pageUrl,
      ),
    ],
  };
}
