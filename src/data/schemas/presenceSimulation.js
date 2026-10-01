import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { presenceFaqEn, presenceFaqFr } from "../presenceSimulationData";

export function getPresenceSimulationPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/presence-simulation/`;

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
            ? "Simulation de présence : faites croire que votre maison est occupée"
            : "Presence simulation: make your home look occupied while away",
        description:
          lang === "fr"
            ? "Mettez en place une simulation de présence avec Gladys : allumez et éteignez aléatoirement lumières, volets et TV pendant votre absence pour dissuader les cambrioleurs, avec des scènes locales, gratuites et privées."
            : "Set up presence simulation with Gladys: randomly turn lights, shutters and TV on and off while you're away to deter burglars, all built from local scenes, free and private.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "Presence simulation" },
          { "@type": "Thing", name: "Burglary deterrence" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? presenceFaqFr : presenceFaqEn, pageUrl),
    ],
  };
}
