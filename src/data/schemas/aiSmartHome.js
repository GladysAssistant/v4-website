import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import {
  aiSmartHomeFaqEn,
  aiSmartHomeFaqFr,
  aiSmartHomeFaqDe,
} from "../aiSmartHomeData";

export function getAiSmartHomePageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const pageUrl = `${SITE_URL}${prefix}/ai-smart-home/`;

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
            ? "Maison connectée et IA : contrôlez votre maison avec l'intelligence artificielle"
            : lang === "de"
            ? "KI im Smart Home: dein Zuhause privat mit KI steuern"
            : "AI smart home: control your home with AI, privately",
        description:
          lang === "fr"
            ? "Pilotez votre maison en langage naturel, recevez un rapport hebdomadaire par IA, laissez une IA proactive agir pour vous, et connectez Claude, Perplexity ou Mistral via MCP, avec une IA open-weight hébergée en Europe."
            : lang === "de"
            ? "Steuere dein Smart Home in natürlicher Sprache, erhalte einen wöchentlichen KI-Bericht, lass einen proaktiven KI-Agenten für dich handeln und verbinde Claude, Perplexity oder Mistral per MCP, mit Open-Weight-KI gehostet in Europa."
            : "Control your smart home in natural language, get a weekly AI report, let a proactive AI agent act for you, and connect Claude, Perplexity or Mistral via MCP, with open-weight AI hosted in Europe.",
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
          { "@type": "Thing", name: "AI smart home" },
          {
            "@type": "Thing",
            name: "Home automation with artificial intelligence",
          },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(
        lang === "fr"
          ? aiSmartHomeFaqFr
          : lang === "de"
          ? aiSmartHomeFaqDe
          : aiSmartHomeFaqEn,
        pageUrl,
      ),
    ],
  };
}
