import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { matterHubFaqEn, matterHubFaqFr } from "../matterHubData";

export function getMatterHubPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/matter-hub/`;

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
            ? "Quel hub Matter choisir ? (guide 2026)"
            : "Which Matter hub do you need? (2026 guide)",
        description:
          lang === "fr"
            ? "Contrôleur Matter, routeur de bordure Thread ou pont Matter : quel hub Matter vous faut-il vraiment, et comment héberger le vôtre avec Gladys."
            : "Matter controller, Thread border router or Matter bridge: which Matter hub you actually need, and how to run your own with Gladys.",
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
          { "@type": "Thing", name: "Matter hub" },
          { "@type": "Thing", name: "Matter controller" },
          { "@type": "Thing", name: "Thread border router" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? matterHubFaqFr : matterHubFaqEn, pageUrl),
    ],
  };
}
