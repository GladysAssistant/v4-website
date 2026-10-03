import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  localSmartHomeFaqEn,
  localSmartHomeFaqFr,
} from "../localSmartHomeData";

export function getLocalSmartHomePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/local-smart-home/`;

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
            ? "Comment créer une maison connectée 100% locale et privée (sans cloud)"
            : "How to build a 100% local, private smart home (no cloud)",
        description:
          lang === "fr"
            ? "Le guide complet pour construire une maison connectée locale et privée qui fonctionne sans le cloud : pourquoi c'est important, ce que « local » veut dire, et comment faire avec des standards ouverts et un logiciel open source auto-hébergé."
            : "A complete guide to building a local, private smart home that runs without the cloud: why it matters, what 'local' really means, and how to do it with open standards and self-hosted, open-source software.",
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
          { "@type": "Thing", name: "Local smart home" },
          { "@type": "Thing", name: "Home automation privacy" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr" ? localSmartHomeFaqFr : localSmartHomeFaqEn,
        pageUrl,
      ),
    ],
  };
}
