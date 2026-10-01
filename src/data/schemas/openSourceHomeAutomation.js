import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import {
  openSourceHomeAutomationFaqEn,
  openSourceHomeAutomationFaqFr,
} from "../openSourceHomeAutomationData";

export function getOpenSourceHomeAutomationPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
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
            : "Best Open-Source Home Automation Platforms: 6 Compared (2026)",
        description:
          lang === "fr"
            ? "Comparez les meilleures plateformes domotiques open source (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz, Node-RED) : interface, facilité et licence, pour choisir le bon logiciel domotique libre et auto-hébergé."
            : "Compare the best open-source home automation platforms (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz, Node-RED): interface, ease of use and license, to choose the right free, self-hosted smart home software.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
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
          : openSourceHomeAutomationFaqEn,
        pageUrl,
      ),
    ],
  };
}
