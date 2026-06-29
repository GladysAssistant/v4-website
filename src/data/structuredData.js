import { comparisonFaqEn, comparisonFaqFr } from "./comparisonData";
import { alternativeFaqEn, alternativeFaqFr } from "./alternativeData";
import {
  comparisonFaqEn as jeedomComparisonFaqEn,
  comparisonFaqFr as jeedomComparisonFaqFr,
} from "./jeedomComparisonData";
import {
  alternativeFaqEn as jeedomAlternativeFaqEn,
  alternativeFaqFr as jeedomAlternativeFaqFr,
} from "./jeedomAlternativeData";
import {
  alternativeFaqEn as alexaAlternativeFaqEn,
  alternativeFaqFr as alexaAlternativeFaqFr,
} from "./alexaAlternativeData";
import {
  alternativeFaqEn as googleHomeAlternativeFaqEn,
  alternativeFaqFr as googleHomeAlternativeFaqFr,
} from "./googleHomeAlternativeData";
import {
  localSmartHomeFaqEn,
  localSmartHomeFaqFr,
} from "./localSmartHomeData";
import { aiSmartHomeFaqEn, aiSmartHomeFaqFr } from "./aiSmartHomeData";
import {
  openSourceHomeAutomationFaqEn,
  openSourceHomeAutomationFaqFr,
} from "./openSourceHomeAutomationData";
import { protocolsFaqEn, protocolsFaqFr } from "./protocolsComparisonData";
import { energyFaqEn, energyFaqFr } from "./energyMonitoringData";
import { alarmFaqEn, alarmFaqFr } from "./alarmSystemData";
import { presenceFaqEn, presenceFaqFr } from "./presenceSimulationData";

const SITE_URL = "https://gladysassistant.com";

const SAME_AS = [
  "https://github.com/GladysAssistant/Gladys",
  "https://twitter.com/gladysassistant",
  "https://community.gladysassistant.com",
  "https://www.youtube.com/c/GladysAssistant",
];

const homepageFaqEn = [
  {
    question: "Is Gladys really free?",
    answer:
      "Yes, 100% free and open-source. Gladys Assistant can be installed with a single Docker command. No subscription, limitations, or credit card required. It runs on any Linux machine with Docker: mini-PC, NAS, Raspberry Pi, or server.",
  },
  {
    question: "Is it hard to install?",
    answer:
      "It takes some technical steps, but documentation guides you through each one with screenshots and videos. You need a Linux machine and Docker. A French starter kit is also available with Gladys pre-installed.",
  },
  {
    question: "Is my data really private?",
    answer:
      "Yes, by design. Gladys runs at home on your machine. Smart home data stays on your local network. No mandatory cloud, no tracking, no data selling. Optional Gladys Plus adds remote access and AI without changing the self-hosted core.",
  },
  {
    question: "Does Gladys work with my devices?",
    answer:
      "Very likely. Gladys supports thousands of devices through Zigbee (Zigbee2MQTT), Matter, MQTT, and dedicated integrations (Shelly, Sonos, Tuya, RTSP cameras). Unsupported devices can be bridged via Matterbridge or the AI-powered plugin factory.",
  },
  {
    question: "Can I access Gladys remotely?",
    answer:
      "Yes. Gladys Plus provides end-to-end encrypted remote access from anywhere (iOS/Android app). Alternatively, advanced users can set up their own VPN or reverse proxy while keeping Gladys free.",
  },
];

const homepageFaqFr = [
  {
    question: "Gladys est-elle vraiment gratuite ?",
    answer:
      "Oui, 100 % gratuite et open-source. Gladys Assistant s'installe en une seule commande Docker, sans abonnement ni carte bancaire. Elle tourne sur toute machine Linux avec Docker : mini-PC, NAS, Raspberry Pi ou serveur.",
  },
  {
    question: "Est-ce compliqué à installer ?",
    answer:
      "Cela demande un peu de technique, mais la documentation vous guide pas à pas avec captures d'écran et vidéos. Il faut une machine Linux et Docker. Un kit de démarrage français est aussi disponible avec Gladys pré-installée.",
  },
  {
    question: "Mes données sont-elles vraiment privées ?",
    answer:
      "Oui, par conception. Gladys tourne chez vous, sur votre machine. Vos données domotiques restent sur votre réseau local. Pas de cloud obligatoire, pas de tracking, pas de revente de données. Gladys Plus est optionnel.",
  },
  {
    question: "Gladys fonctionne-t-elle avec mes appareils ?",
    answer:
      "Très probablement. Gladys supporte des milliers d'appareils via Zigbee (Zigbee2MQTT), Matter, MQTT et des intégrations dédiées (Shelly, Sonos, Tuya, caméras RTSP). Matterbridge et l'usine à plugins IA couvrent les appareils non supportés.",
  },
  {
    question: "Puis-je accéder à Gladys depuis l'extérieur ?",
    answer:
      "Oui. Gladys Plus offre un accès distant chiffré de bout en bout depuis n'importe où (app iOS/Android). Les experts peuvent aussi configurer leur propre VPN ou reverse proxy en gardant Gladys gratuite.",
  },
];

const plusFaqEn = [
  {
    question: "Why should I subscribe to Gladys Plus?",
    answer:
      "Gladys Plus unlocks secure remote access, encrypted daily backups, Enedis energy monitoring, Open-Weight AI models hosted in France (Scaleway), camera streaming, and an MCP server for AI agents. It supports a growing French open-source project.",
  },
  {
    question: "What's the difference between the Lite and Plus plans?",
    answer:
      "Lite (€6.99/month) covers encrypted remote access, Google Home/Alexa, open REST API, and family accounts. Plus (€9.99/month) adds daily encrypted backups, remote camera streaming, Open-Weight AI models, Enedis integration, and an MCP server.",
  },
  {
    question: "How do I activate Gladys Plus on my existing Gladys instance?",
    answer:
      "After subscribing, you receive an email with your activation link. Open your local Gladys instance, go to Settings → Gladys Plus, sign in with your email and password. No reset, no configuration lost.",
  },
  {
    question: "Can I unsubscribe at any time?",
    answer:
      "Yes. You can cancel in one click from the Gladys Plus interface. Gladys is an open-source project, not a subscription trap.",
  },
  {
    question: "Satisfied or refunded?",
    answer:
      "Yes. If you are not satisfied, email the founder for a full refund, no questions asked.",
  },
  {
    question: "What happens after the 6 free months from the starter kit?",
    answer:
      "Starter kit buyers get 6 free months of Gladys Plus. Before the period ends, you receive an email and freely decide whether to subscribe. No hidden auto-charge.",
  },
  {
    question: "Why isn't Gladys Plus free?",
    answer:
      "Gladys core is free and open-source forever. Gladys Plus funds servers, domains, community, and development time. No investors, no ads, no data resale.",
  },
  {
    question: "Can you explain how end-to-end encryption works?",
    answer:
      "Commands and backups are end-to-end encrypted. Even if Gladys Plus servers were compromised, data cannot be read without your local instance private key. Encryption uses AES-GCM 256-bit, RSA-OAEP 2048-bit, and ECDSA P-256 with manual public key validation.",
  },
];

const plusFaqFr = [
  {
    question: "Pourquoi s'inscrire à Gladys Plus ?",
    answer:
      "Gladys Plus débloque l'accès distant sécurisé, les sauvegardes quotidiennes chiffrées, Enedis, des modèles d'IA Open-Weight hébergés en France (Scaleway), le streaming caméra et un serveur MCP. Il soutient un projet open-source français en pleine croissance.",
  },
  {
    question: "Quelle différence entre la formule Lite et la formule Plus ?",
    answer:
      "Lite (6,99 €/mois) couvre l'accès distant chiffré, Google Home/Alexa, l'API REST ouverte et les comptes famille. Plus (9,99 €/mois) ajoute les sauvegardes chiffrées, le streaming caméra, l'IA Open-Weight, Enedis et le serveur MCP.",
  },
  {
    question: "Comment activer Gladys Plus depuis mon instance Gladys existante ?",
    answer:
      "Après abonnement, vous recevez un email avec le lien d'activation. Connectez-vous à votre instance locale, allez dans Paramètres → Gladys Plus, connectez-vous avec email/mot de passe. Aucun reset, aucune perte de configuration.",
  },
  {
    question: "Est-ce que je peux me désabonner à tout moment ?",
    answer:
      "Oui. Vous pouvez annuler en un clic depuis l'interface Gladys Plus. Gladys est un projet open-source, pas une grosse entreprise sans scrupule.",
  },
  {
    question: "Satisfait ou remboursé ?",
    answer:
      "Oui. Si Gladys Plus ne vous convient pas, envoyez un email pour un remboursement sans discussion.",
  },
  {
    question: "Que se passe-t-il à la fin des 6 mois offerts du kit de démarrage ?",
    answer:
      "Le kit de démarrage inclut 6 mois Gladys Plus offerts. Avant la fin, vous recevez un email et choisissez librement de vous abonner ou non. Aucun prélèvement automatique caché.",
  },
  {
    question: "Pourquoi Gladys Plus est-il payant ?",
    answer:
      "Gladys reste gratuite et open-source pour toujours. Gladys Plus finance les serveurs, domaines, communauté et le temps de développement. Pas d'investisseurs, pas de publicité, pas de revente de données.",
  },
  {
    question: "Peux-tu parler du chiffrement de bout en bout ?",
    answer:
      "Les commandes et sauvegardes sont chiffrées de bout en bout. Même si les serveurs Gladys Plus étaient compromis, personne ne peut lire vos données sans la clé privée de votre instance locale. Chiffrement AES-GCM 256 bits, RSA-OAEP 2048 bits, ECDSA P-256.",
  },
];

function toFaqPage(faqs, pageUrl) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

function getOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Gladys Assistant",
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.svg`,
    description:
      "Privacy-first, open-source, self-hosted home automation platform. A simpler alternative to Home Assistant, focused on local control and European privacy standards.",
    foundingDate: "2013",
    sameAs: SAME_AS,
    founder: {
      "@type": "Person",
      name: "Pierre-Gilles Leymarie",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@gladysassistant.com",
      contactType: "customer support",
      availableLanguage: ["English", "French"],
    },
  };
}

function getWebSiteNode(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Gladys Assistant",
    url: `${SITE_URL}${prefix}/`,
    inLanguage: lang === "fr" ? "fr" : "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function getHomepageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Gladys Assistant",
        applicationCategory: "HomeAutomationApplication",
        operatingSystem: "Linux, Docker, Raspberry Pi",
        description:
          lang === "fr"
            ? "Logiciel de domotique open-source, auto-hébergé et respectueux de la vie privée. Alternative à Home Assistant, centrée sur la simplicité et le contrôle local."
            : "Privacy-first, open-source, self-hosted home automation software. Alternative to Home Assistant, focused on simplicity and local control.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        url: pageUrl,
        downloadUrl: "https://github.com/GladysAssistant/Gladys",
        softwareVersion: "4",
        author: { "@id": `${SITE_URL}/#organization` },
        sameAs: SAME_AS,
      },
      toFaqPage(lang === "fr" ? homepageFaqFr : homepageFaqEn, pageUrl),
    ],
  };
}

export function getComparisonPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-assistant-vs-gladys-assistant/`;

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
            ? "Home Assistant vs Gladys Assistant : le comparatif honnête"
            : "Home Assistant vs Gladys Assistant: an honest comparison",
        description:
          lang === "fr"
            ? "Comparatif honnête entre Home Assistant et Gladys Assistant par le créateur de Gladys : installation, simplicité, intégrations, automatisations, communauté et prix."
            : "An honest comparison between Home Assistant and Gladys Assistant by Gladys' creator: installation, ease of use, integrations, automations, community and pricing.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "SoftwareApplication", name: "Home Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? comparisonFaqFr : comparisonFaqEn, pageUrl),
    ],
  };
}

export function getAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-assistant-alternative/`;

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
            ? "La meilleure alternative à Home Assistant : Gladys Assistant"
            : "The best Home Assistant alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative open source plus simple à Home Assistant : sans YAML, sans cloud, auto-hébergée et stable."
            : "Why Gladys Assistant is a simpler open-source alternative to Home Assistant: no YAML, no cloud, self-hosted and stable.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "SoftwareApplication", name: "Home Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? alternativeFaqFr : alternativeFaqEn, pageUrl),
    ],
  };
}

export function getJeedomComparisonPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/jeedom-vs-gladys-assistant/`;

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
            ? "Gladys vs Jeedom : le comparatif honnête"
            : "Gladys vs Jeedom: an honest comparison",
        description:
          lang === "fr"
            ? "Comparatif honnête entre Gladys Assistant et Jeedom par le créateur de Gladys : installation, simplicité, intégrations, scénarios, communauté et prix."
            : "An honest comparison between Gladys Assistant and Jeedom by Gladys' creator: installation, ease of use, integrations, scenarios, community and pricing.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "SoftwareApplication", name: "Jeedom" },
        ],
      },
      toFaqPage(
        lang === "fr" ? jeedomComparisonFaqFr : jeedomComparisonFaqEn,
        pageUrl
      ),
    ],
  };
}

export function getJeedomAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/jeedom-alternative/`;

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
            ? "La meilleure alternative à Jeedom : Gladys Assistant"
            : "The best Jeedom alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative française à Jeedom, plus simple et avec des intégrations gratuites : sans plugins payants, sans YAML, sans cloud, auto-hébergée et stable."
            : "Why Gladys Assistant is a simpler French Jeedom alternative with free integrations: no paid plugins, no YAML, no cloud, self-hosted and stable.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "SoftwareApplication", name: "Jeedom" },
        ],
      },
      toFaqPage(
        lang === "fr" ? jeedomAlternativeFaqFr : jeedomAlternativeFaqEn,
        pageUrl
      ),
    ],
  };
}

export function getAlexaAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/alexa-alternative/`;

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
            ? "La meilleure alternative à Alexa, respectueuse de la vie privée : Gladys Assistant"
            : "The best privacy-friendly Alexa alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative locale et respectueuse de la vie privée à Alexa : vos données restent chez vous, sans cloud obligatoire, open source et auto-hébergée."
            : "Why Gladys Assistant is a local, privacy-friendly Alexa alternative: your data stays at home, no mandatory cloud, open-source and self-hosted.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "Product", name: "Amazon Alexa" },
        ],
      },
      toFaqPage(
        lang === "fr" ? alexaAlternativeFaqFr : alexaAlternativeFaqEn,
        pageUrl
      ),
    ],
  };
}

export function getGoogleHomeAlternativePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/google-home-alternative/`;

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
            ? "La meilleure alternative à Google Home, respectueuse de la vie privée : Gladys Assistant"
            : "The best privacy-friendly Google Home alternative: Gladys Assistant",
        description:
          lang === "fr"
            ? "Pourquoi Gladys Assistant est une alternative locale et respectueuse de la vie privée à Google Home : vos données restent chez vous, sans cloud obligatoire, open source et auto-hébergée."
            : "Why Gladys Assistant is a local, privacy-friendly Google Home alternative: your data stays at home, no mandatory cloud, open-source and self-hosted.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
          { "@type": "Product", name: "Google Home" },
        ],
      },
      toFaqPage(
        lang === "fr" ? googleHomeAlternativeFaqFr : googleHomeAlternativeFaqEn,
        pageUrl
      ),
    ],
  };
}

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
        pageUrl
      ),
    ],
  };
}

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
            ? "Domotique open source : le guide complet (2026)"
            : "Open-source home automation: the complete guide (2026)",
        description:
          lang === "fr"
            ? "Ce qu'est la domotique open source, pourquoi elle surpasse les écosystèmes cloud fermés, et les meilleurs logiciels domotiques open source (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz)."
            : "What open-source home automation is, why it beats closed cloud ecosystems, and the best open-source smart home platforms (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz).",
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
        pageUrl
      ),
    ],
  };
}

export function getAiSmartHomePageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
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
            : "AI smart home: control your home with AI, privately",
        description:
          lang === "fr"
            ? "Pilotez votre maison en langage naturel, recevez un rapport hebdomadaire par IA, laissez une IA proactive agir pour vous, et connectez Claude, Perplexity ou Mistral via MCP, avec une IA open-weight hébergée en Europe."
            : "Control your smart home in natural language, get a weekly AI report, let a proactive AI agent act for you, and connect Claude, Perplexity or Mistral via MCP, with open-weight AI hosted in Europe.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "AI smart home" },
          { "@type": "Thing", name: "Home automation with artificial intelligence" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? aiSmartHomeFaqFr : aiSmartHomeFaqEn, pageUrl),
    ],
  };
}

export function getProtocolsComparisonPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/zigbee-vs-matter-vs-zwave/`;

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
            ? "Zigbee vs Matter vs Z-Wave : quel protocole domotique choisir ?"
            : "Zigbee vs Matter vs Z-Wave: which smart home protocol to choose?",
        description:
          lang === "fr"
            ? "Comparatif clair et neutre des trois grands standards de la maison connectée : leurs différences, leurs forces et limites, et comment choisir."
            : "A clear, neutral comparison of the three main smart home standards: how they differ, their strengths and limits, and how to choose.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "Zigbee" },
          { "@type": "Thing", name: "Z-Wave" },
          { "@type": "Thing", name: "Matter" },
          { "@type": "Thing", name: "Thread" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? protocolsFaqFr : protocolsFaqEn, pageUrl),
    ],
  };
}

export function getEnergyMonitoringPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/home-energy-monitoring/`;

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
            ? "Suivi de consommation électrique : réduisez votre facture d'électricité"
            : "Home energy monitoring: track your consumption and cut your electricity bill",
        description:
          lang === "fr"
            ? "Suivez la consommation électrique de votre maison en temps réel, au global et appareil par appareil, puis automatisez les économies, en local avec Gladys Assistant. Compatible Linky, Enedis et Tempo."
            : "Monitor your home's electricity consumption in real time, whole-home and per device, then use automations to cut your bill, locally and privately with Gladys Assistant.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "Home energy monitoring" },
          { "@type": "Thing", name: "Electricity bill savings" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? energyFaqFr : energyFaqEn, pageUrl),
    ],
  };
}

export function getAlarmSystemPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/diy-home-alarm-system/`;

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
            ? "Alarme maison DIY : créez la vôtre, locale et privée"
            : "DIY home alarm system: build your own, local and private",
        description:
          lang === "fr"
            ? "Créez une vraie alarme maison DIY avec Gladys : modes armé, partiel et panique, détecteurs de mouvement et d'ouverture, photos de caméra et alertes instantanées, en local sur du matériel qui vous appartient et avec vos données gardées chez vous."
            : "Build a real DIY home alarm system with Gladys: armed, partial and panic modes, motion and door sensors, camera snapshots and instant alerts, all running locally on hardware you own with your data kept at home.",
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "DIY home alarm system" },
          { "@type": "Thing", name: "Local private home security" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? alarmFaqFr : alarmFaqEn, pageUrl),
    ],
  };
}

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

export function getPlusPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/plus/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        // Gladys Plus is a digital subscription, not a shippable retail
        // product. We model it as a Service (with priced Offers) rather than a
        // Product, so Google doesn't treat it as a merchant/shopping listing
        // and require shipping & return-policy fields that don't apply.
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Gladys Plus",
        serviceType:
          lang === "fr"
            ? "Abonnement domotique"
            : "Home automation subscription",
        description:
          lang === "fr"
            ? "Abonnement optionnel pour Gladys Assistant : accès distant chiffré, sauvegardes, IA, Enedis et serveur MCP."
            : "Optional subscription for Gladys Assistant: encrypted remote access, backups, AI, Enedis, and MCP server.",
        image: [
          `${SITE_URL}/img/presentation/gladys-assistant-og-image-2026-${
            lang === "fr" ? "fr" : "en"
          }.jpg`,
        ],
        brand: { "@type": "Brand", name: "Gladys Assistant" },
        provider: { "@id": `${SITE_URL}/#organization` },
        offers: [
          {
            "@type": "Offer",
            name: "Gladys Plus Lite",
            price: "6.99",
            priceCurrency: "EUR",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: pageUrl,
          },
          {
            "@type": "Offer",
            name: "Gladys Plus",
            price: "9.99",
            priceCurrency: "EUR",
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: pageUrl,
          },
        ],
      },
      toFaqPage(lang === "fr" ? plusFaqFr : plusFaqEn, pageUrl),
    ],
  };
}
