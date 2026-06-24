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
    sameAs: SAME_AS,
    founder: {
      "@type": "Person",
      name: "Pierre-Gilles Leymarie",
    },
  };
}

export function getHomepageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
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

export function getPlusPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/plus/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Gladys Plus",
        description:
          lang === "fr"
            ? "Abonnement optionnel pour Gladys Assistant : accès distant chiffré, sauvegardes, IA, Enedis et serveur MCP."
            : "Optional subscription for Gladys Assistant: encrypted remote access, backups, AI, Enedis, and MCP server.",
        brand: { "@id": `${SITE_URL}/#organization` },
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
