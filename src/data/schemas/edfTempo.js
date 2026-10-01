import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
} from "../structuredData";
import { edfTempoFaqEn, edfTempoFaqFr } from "../edfTempoData";

export function getEdfTempoPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/edf-tempo/`;

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
            ? "Tempo EDF : la couleur du jour (et de demain)"
            : "EDF Tempo: today's colour (and tomorrow's)",
        description:
          lang === "fr"
            ? "La couleur du jour EDF Tempo et celle de demain en direct, ce que coûte chaque couleur, et comment automatiser Tempo chez soi avec Gladys."
            : "The live EDF Tempo colour for today and tomorrow, what each colour costs, and how to automate Tempo at home with Gladys.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "EDF Tempo" },
          { "@type": "Thing", name: "Tempo colour of the day" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? edfTempoFaqFr : edfTempoFaqEn, pageUrl),
    ],
  };
}
