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
  localSmartHomeFaqDe,
  localSmartHomeFaqEs,
} from "../localSmartHomeData";

export function getLocalSmartHomePageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
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
            : lang === "de"
            ? "So baust du ein 100 % lokales, privates Smart Home (ohne Cloud)"
            : lang === "es"
            ? "Cómo crear un hogar inteligente 100 % local y privado (sin nube)"
            : "How to build a 100% local, private smart home (no cloud)",
        description:
          lang === "fr"
            ? "Le guide complet pour construire une maison connectée locale et privée qui fonctionne sans le cloud : pourquoi c'est important, ce que « local » veut dire, et comment faire avec des standards ouverts et un logiciel open source auto-hébergé."
            : lang === "de"
            ? "Der komplette Guide für ein lokales, privates Smart Home ohne Cloud: warum es wichtig ist, was „lokal“ wirklich bedeutet und wie du es mit offenen Standards und selbst gehosteter Open-Source-Software umsetzt."
            : lang === "es"
            ? "Una guía completa para crear un hogar inteligente local y privado que funcione sin la nube: por qué importa, qué significa realmente 'local' y cómo lograrlo con estándares abiertos y software de código abierto autoalojado."
            : "A complete guide to building a local, private smart home that runs without the cloud: why it matters, what 'local' really means, and how to do it with open standards and self-hosted, open-source software.",
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
          { "@type": "Thing", name: "Local smart home" },
          { "@type": "Thing", name: "Home automation privacy" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr"
          ? localSmartHomeFaqFr
          : lang === "de"
          ? localSmartHomeFaqDe
          : lang === "es"
          ? localSmartHomeFaqEs
          : localSmartHomeFaqEn,
        pageUrl,
      ),
    ],
  };
}
