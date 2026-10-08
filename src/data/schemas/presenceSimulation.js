import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { presenceFaqEn, presenceFaqFr, presenceFaqDe } from "../presenceSimulationData";

export function getPresenceSimulationPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
              ? "Anwesenheitssimulation: Lass dein Zuhause bewohnt wirken, wenn du weg bist"
              : lang === "es"
              ? "Simulación de presencia: que tu casa parezca habitada cuando no estás"
              : "Presence simulation: make your home look occupied while away",
        description:
          lang === "fr"
            ? "Mettez en place une simulation de présence avec Gladys : allumez et éteignez aléatoirement lumières, volets et TV pendant votre absence pour dissuader les cambrioleurs, avec des scènes locales, gratuites et privées."
            : lang === "de"
              ? "Richte mit Gladys eine Anwesenheitssimulation ein: Licht, Rollläden und TV schalten sich in deiner Abwesenheit zufällig ein und aus und schrecken Einbrecher ab, mit lokalen Szenen, kostenlos und privat."
              : lang === "es"
              ? "Configura una simulación de presencia con Gladys: enciende y apaga al azar luces, persianas y televisión mientras estás fuera para disuadir a los ladrones, todo con escenas locales, gratis y en privado."
              : "Set up presence simulation with Gladys: randomly turn lights, shutters and TV on and off while you're away to deter burglars, all built from local scenes, free and private.",
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
          { "@type": "Thing", name: "Presence simulation" },
          { "@type": "Thing", name: "Burglary deterrence" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? presenceFaqFr : lang === "de" ? presenceFaqDe : lang === "es" ? presenceFaqEs : presenceFaqEn, pageUrl),
    ],
  };
}
