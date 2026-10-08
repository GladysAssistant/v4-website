import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  openSourceHomeAutomationFaqEn,
  openSourceHomeAutomationFaqFr,
  openSourceHomeAutomationFaqDe,
} from "../openSourceHomeAutomationData";

export function getOpenSourceHomeAutomationPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const pageUrl = `${SITE_URL}${prefix}/open-source-home-automation/`;

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
            ? "Meilleurs logiciels domotiques open source : 6 comparés (2026)"
            : lang === "de"
            ? "Die beste Open-Source-Software für Hausautomation: 6 Plattformen im Vergleich (2026)"
            : "Best Open-Source Home Automation Platforms: 6 Compared (2026)",
        description:
          lang === "fr"
            ? "Comparez les meilleures plateformes domotiques open source (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz, Node-RED) : interface, facilité et licence, pour choisir le bon logiciel domotique libre et auto-hébergé."
            : lang === "de"
            ? "Vergleiche die besten Open-Source-Plattformen für Hausautomation (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz, Node-RED): Oberfläche, Bedienbarkeit und Lizenz, um die richtige freie, selbst gehostete Smart-Home-Software zu finden."
            : "Compare the best open-source home automation platforms (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz, Node-RED): interface, ease of use and license, to choose the right free, self-hosted smart home software.",
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
          { "@type": "Thing", name: "Open-source home automation" },
          { "@type": "Thing", name: "Self-hosted smart home" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr"
          ? openSourceHomeAutomationFaqFr
          : lang === "de"
          ? openSourceHomeAutomationFaqDe
          : openSourceHomeAutomationFaqEn,
        pageUrl,
      ),
    ],
  };
}
