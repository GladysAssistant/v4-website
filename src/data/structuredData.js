import ogImages from "./ogImages.json";

// Shared JSON-LD builders. Page-specific schemas live in ./schemas/, one file
// per page, so a page only bundles its own content: importing every page's
// FAQ from here used to add ~850 KB of JavaScript to each landing page.

export const SITE_URL = "https://gladysassistant.com";

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
      "It takes some technical steps, but documentation guides you through each one with screenshots and videos. You need a Linux machine and Docker.",
  },
  {
    question: "Is my data really private?",
    answer:
      "Yes, by design. Gladys runs at home on your machine. Smart home data stays on your local network. No mandatory cloud, no tracking, no data selling. Optional Gladys Plus adds remote access and AI without changing the self-hosted core.",
  },
  {
    question: "Does Gladys work with my devices?",
    answer:
      "Very likely. Gladys supports thousands of devices through Zigbee (Zigbee2MQTT), Z-Wave, Matter, MQTT, and integrations for popular brands: Philips Hue, SmartThings, TP-Link Kasa and Tapo, Shelly, Sonos, Reolink cameras, LG ThinQ and many more. Anything else is covered by external integrations, community-built integrations installable in one click, and anyone can create one.",
  },
  {
    question: "How much does Gladys Plus cost?",
    answer:
      "Gladys itself is free, forever. Gladys Plus is an optional subscription that adds encrypted remote access, Google Home and Alexa, backups, and AI. It starts at $7.99/month in the US and Canada (€6.99/month in Europe), with a 1-month free trial, no credit card required, and you can cancel anytime.",
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
      "Très probablement. Gladys supporte des milliers d'appareils via Zigbee (Zigbee2MQTT), Matter, MQTT et des intégrations natives (Sonos, caméras RTSP). Tout le reste est couvert par les intégrations externes, des intégrations communautaires installables en un clic, et n'importe qui peut en créer une.",
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
      "Lite covers encrypted remote access, an email alert when your Gladys goes offline, Google Home/Alexa, open REST API, and family accounts. Plus adds daily encrypted backups, remote camera streaming, Open-Weight AI models, Enedis integration, and an MCP server. See the pricing section for current rates in your region.",
  },
  {
    question: "How do I activate Gladys Plus on my existing Gladys instance?",
    answer:
      "After subscribing, you receive an email with your activation link. Open your local Gladys instance, go to Settings → Gladys Plus, sign in with your email and password. No reset, no configuration lost.",
  },
  {
    question: "Can Gladys Plus warn me if my Gladys goes down?",
    answer:
      "Yes. Gladys Plus sees your instance connect and disconnect. If it stays unreachable (power cut, internet box down, dead SD card) for longer than the delay you choose, from 10 minutes to 24 hours, Gladys Plus emails the admins of your account, then emails them again once it is back online. Available on both plans.",
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
      "Lite couvre l'accès distant chiffré, l'alerte email quand votre Gladys est hors ligne, Google Home/Alexa, l'API REST ouverte et les comptes famille. Plus ajoute les sauvegardes chiffrées, le streaming caméra, l'IA Open-Weight, Enedis et le serveur MCP. Voir la section tarifs pour les prix actuels dans votre région.",
  },
  {
    question:
      "Comment activer Gladys Plus depuis mon instance Gladys existante ?",
    answer:
      "Après abonnement, vous recevez un email avec le lien d'activation. Connectez-vous à votre instance locale, allez dans Paramètres → Gladys Plus, connectez-vous avec email/mot de passe. Aucun reset, aucune perte de configuration.",
  },
  {
    question: "Gladys Plus peut-il me prévenir si ma Gladys tombe en panne ?",
    answer:
      "Oui. Gladys Plus voit votre instance se connecter et se déconnecter. Si elle reste injoignable (coupure de courant, box internet plantée, carte SD morte) plus longtemps que le délai choisi, de 10 minutes à 24 heures, Gladys Plus envoie un email aux administrateurs du compte, puis un second quand elle revient en ligne. Disponible dans les deux formules.",
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
    question:
      "Que se passe-t-il à la fin des 6 mois offerts du kit de démarrage ?",
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

export function toFaqPage(faqs, pageUrl) {
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

export function getOrganizationNode() {
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

export function getWebSiteNode(lang) {
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
        softwareVersion: "5",
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
            ? "Abonnement optionnel pour Gladys Assistant : accès distant chiffré, alerte email si Gladys est hors ligne, sauvegardes, IA, Enedis et serveur MCP."
            : "Optional subscription for Gladys Assistant: encrypted remote access, email alert when Gladys goes offline, backups, AI, Enedis, and MCP server.",
        image: [
          `${SITE_URL}/img/presentation/gladys-assistant-og-image-v5-${
            lang === "fr" ? "fr" : "en"
          }.jpg`,
        ],
        brand: { "@type": "Brand", name: "Gladys Assistant" },
        provider: { "@id": `${SITE_URL}/#organization` },
        // Prices are only advertised in the schema for the French locale, where
        // the page always shows EUR. The English page is multi-currency (USD for
        // US/Canada, EUR elsewhere, resolved client-side), so a fixed EUR Offer
        // would conflict with the price a US visitor actually sees and is billed.
        ...(lang === "fr"
          ? {
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
            }
          : {}),
      },
      toFaqPage(lang === "fr" ? plusFaqFr : plusFaqEn, pageUrl),
    ],
  };
}

export function getStarterKitPageSchema(lang) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}/starter-kit/`;

  // The two kit prices are fetched at runtime from a Cloudflare worker and are
  // not available at build time. Rather than hardcode (and risk shipping a
  // stale/invented price), we expose the Product with priced-less Offers:
  // availability + URL only. No price means no shopping rich result, which is
  // the intended, honest tradeoff.
  const offer = (name) => ({
    "@type": "Offer",
    name,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    priceCurrency: "EUR",
    url: pageUrl,
    seller: { "@id": `${SITE_URL}/#organization` },
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "Kit de démarrage Gladys",
        description:
          lang === "fr"
            ? "Box domotique clé en main : un mini-PC Beelink avec Gladys installée, configurée et testée, 6 mois de Gladys Plus inclus, formation vidéo et support direct. Aucune installation ni compétence technique requise."
            : "Turnkey home automation box: a Beelink mini-PC with Gladys installed, configured and tested, 6 months of Gladys Plus included, video training and direct support. No installation or technical skills required.",
        image: [`${SITE_URL}/img/starter-kit/beelink_s13_spec.jpg`],
        brand: { "@type": "Brand", name: "Gladys Assistant" },
        category: lang === "fr" ? "Box domotique" : "Home automation kit",
        url: pageUrl,
        offers: [
          offer("Kit de démarrage Gladys - Beelink mini S12"),
          offer("Kit de démarrage Gladys - Beelink S13"),
        ],
      },
    ],
  };
}

// The page's own Open Graph image (scripts/generate_og_images.js), as the same
// absolute URL as its og:image, or undefined (dropped from the JSON) when the
// page has none.
export function getOgImageUrl(pageUrl, lang) {
  const slug = pageUrl
    .replace(SITE_URL, "")
    .replace(/^\/fr\//, "/")
    .replace(/^\/|\/$/g, "");
  return ogImages.includes(slug)
    ? `${SITE_URL}/img/og/${slug}-${lang === "fr" ? "fr" : "en"}.jpg`
    : undefined;
}

// Shared builder for the guide / use-case pages whose headline and description
// are the page's own meta title and description.
export function getGuidePageSchema(
  lang,
  { path, content, faqEn, faqFr, about },
) {
  const prefix = lang === "fr" ? "/fr" : "";
  const pageUrl = `${SITE_URL}${prefix}${path}`;
  const meta = content[lang === "fr" ? "fr" : "en"].meta;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: meta.title,
        description: meta.description,
        image: getOgImageUrl(pageUrl, lang),
        url: pageUrl,
        inLanguage: lang === "fr" ? "fr" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about,
      },
      toFaqPage(lang === "fr" ? faqFr : faqEn, pageUrl),
    ],
  };
}
