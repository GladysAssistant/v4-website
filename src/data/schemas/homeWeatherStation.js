import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  homeWeatherStationFaqEn,
  homeWeatherStationFaqFr,
  homeWeatherStationFaqDe,
} from "../homeWeatherStationData";

export function getHomeWeatherStationPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
              ? "Die beste Wetterstation fürs Smart Home (Zigbee, Matter, Netatmo)"
              : "Best home weather station for a smart home (Zigbee, Matter, Netatmo)",
        description:
          lang === "fr"
            ? "Guide des capteurs météo sans fil pour Gladys Assistant : capteurs Zigbee et Matter locaux, station Netatmo, et OpenWeather pour les prévisions."
            : lang === "de"
              ? "Ratgeber für kabellose Wettersensoren mit Gladys Assistant: lokale Zigbee- und Matter-Sensoren, die Netatmo-Wetterstation und OpenWeather für Wettervorhersagen."
              : "A guide to wireless weather sensors for Gladys Assistant: local Zigbee and Matter sensors, the Netatmo station, and OpenWeather for forecast data.",
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
          { "@type": "Thing", name: "Home weather station" },
          { "@type": "Thing", name: "Weather sensor" },
          { "@type": "Thing", name: "Zigbee" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? homeWeatherStationFaqFr : lang === "de" ? homeWeatherStationFaqDe : homeWeatherStationFaqEn,
        pageUrl,
      ),
    ],
  };
}
