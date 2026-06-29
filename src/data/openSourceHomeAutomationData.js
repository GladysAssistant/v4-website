// Content for the "open-source home automation" pillar page.
// Targets the broad, high-intent "open source home automation / domotique
// open source / logiciel domotique open source / open source home assistant"
// search cluster, where Gladys appears but ranks poorly and has no dedicated
// landing page. It explains what open-source home automation is, why it
// matters, lists the main open-source platforms honestly, and positions Gladys
// on simplicity, while linking out to the comparison/alternative pages for mesh.

const openSourceHomeAutomationContent = {
  en: {
    meta: {
      title: "Open-source home automation: the complete guide (2026)",
      description:
        "What open-source home automation is, why it beats closed cloud ecosystems, and the best open-source smart home platforms (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz). A practical guide to running your home on free, self-hosted software.",
    },
    hero: {
      title: "Open-source home automation",
      subtitle:
        "Run your smart home on free, self-hosted software you can read, trust and keep, instead of renting it from a closed cloud.",
      intro: [
        "Most smart home products are closed boxes: proprietary software, a mandatory cloud, and a business that can change the rules, add a subscription or shut the service down whenever it wants. You don't own the system, you rent access to it.",
        "Open-source home automation takes the opposite approach. The software that runs your home is free, public and self-hosted, so anyone can inspect it, improve it and keep it running for as long as they like. This guide explains what open-source home automation is, why it matters, the main platforms to know, and how to get started.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Explore the integrations →",
        href: "/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Why open source matters for your home",
      intro:
        "Your home automation runs your lights, locks, heating and alarm. That's not somewhere you want a black box you can't inspect or replace. Open source changes the balance of power:",
      points: [
        "Transparency: the code is public, so anyone can verify what it does with your data, instead of trusting a marketing promise.",
        "Longevity: a community project can't be \"sunset\" by a single company. Even if the original team stops, the code stays and can be forked.",
        "No forced lock-in: open standards and an open codebase mean you're free to mix brands and move your setup, not trapped in one ecosystem.",
        "Privacy: most open-source platforms are self-hosted, so your habits, presence and camera feeds can stay on your own network.",
        "No surprise paywalls: the core software is free, so essential features can't suddenly move behind a new monthly subscription.",
        "Extensibility: a community builds integrations far faster than any single vendor, so more of your existing devices are supported.",
      ],
      outro:
        "Open source doesn't mean complicated or unsupported. The best projects are polished, actively maintained, and backed by large communities.",
    },
    definition: {
      title: "What is open-source home automation?",
      intro:
        "Open-source home automation means the software controlling your smart home is released under an open-source license, free to use, inspect and modify, and usually self-hosted on hardware you own. In practice:",
      points: [
        "The source code is public and licensed openly (for example Gladys Assistant is Apache 2.0), so you, or anyone, can read and audit it.",
        "It's free to run: no per-device fee and no mandatory subscription to keep the core working.",
        "It's self-hosted on your own machine, so your automations and data stay under your control.",
        "It speaks open standards like Zigbee, Matter and MQTT instead of a single brand's proprietary protocol.",
        "A community contributes integrations, fixes and translations out in the open.",
      ],
      outro:
        "Open source and convenience aren't opposites: optional features like remote access or AI can still exist, they just become a choice rather than a requirement.",
    },
    howTo: {
      title: "The main open-source home automation platforms",
      cards: [
        {
          logo: "/img/external/open-source-platforms/gladys-assistant.png",
          logoAlt: "Gladys Assistant logo",
          title: "Gladys Assistant",
          text: "A self-hosted platform (Apache 2.0) focused on simplicity: a clean interface, no configuration files, scenes built by clicking, and a one-command Docker install. Great if you want open source without the steep learning curve.",
        },
        {
          logo: "/img/external/open-source-platforms/home-assistant.png",
          logoAlt: "Home Assistant logo",
          title: "Home Assistant",
          text: "The most feature-rich and popular open-source platform, with a huge integration catalog. Extremely powerful, but configuration can get deep and YAML-heavy for advanced setups.",
        },
        {
          logo: "/img/external/open-source-platforms/openhab.png",
          logoAlt: "openHAB logo",
          title: "openHAB",
          text: "A mature, Java-based platform known for flexibility and vendor neutrality. Powerful rules engine, with a steeper, more technical setup.",
        },
        {
          logo: "/img/external/open-source-platforms/jeedom.png",
          logoAlt: "Jeedom logo",
          title: "Jeedom",
          text: "A French open-source platform with a plugin marketplace (some paid). Popular on local boxes, with a more technical, plugin-driven approach.",
        },
        {
          logo: "/img/external/open-source-platforms/domoticz.png",
          logoAlt: "Domoticz logo",
          title: "Domoticz",
          text: "A lightweight, long-running open-source system that runs well on very low-power hardware, with a more utilitarian interface.",
        },
        {
          logo: "/img/external/open-source-platforms/node-red.png",
          logoAlt: "Node-RED logo",
          title: "Node-RED",
          text: "Not a full platform but an open-source flow-based automation tool, often paired with the others to build advanced logic visually.",
        },
      ],
    },
    gladys: {
      title: "Gladys Assistant: open source, made simple",
      paragraphs: [
        "Gladys Assistant is a free, open-source (Apache 2.0), self-hosted home automation platform. The full source code is on GitHub, it installs in a single Docker command on a Raspberry Pi, mini-PC or NAS, and it runs entirely on your local network.",
        "Where it stands out is simplicity. Everything is configured from a clean interface, with no configuration files and no YAML, and scenes are built by clicking. It's based on open standards (Zigbee, Matter, MQTT) with a full local automation engine, so your everyday scenes run at home. Optional features like voice, AI and remote access rely on a private, secure cloud from the same independent project: no ads, no data resale, and end-to-end encrypted remote access.",
      ],
      link: { label: "Get started with Gladys →", href: "/docs/" },
    },
    related: {
      title: "Go deeper",
      intro:
        "Whether you're comparing platforms or moving off a closed ecosystem, these guides help you choose and make the switch:",
      links: [
        {
          label: "Home Assistant alternative",
          href: "/home-assistant-alternative/",
          text: "A simpler, local, open-source platform, without the YAML and the steep learning curve.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "How the two main open-source, local-first platforms really compare.",
        },
        {
          label: "Jeedom alternative",
          href: "/jeedom-alternative/",
          text: "An open-source alternative to Jeedom, without a paid plugin marketplace.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
        {
          label: "Control your home with AI",
          href: "/ai-smart-home/",
          text: "Keep the convenience of AI and voice control, on a private cloud, not a big-tech assistant.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Start with open-source home automation",
      text: "Gladys is free, open-source (Apache 2.0), and installs in a single Docker command. Self-hosted, local-first, no cloud required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Discover Gladys Plus", href: "/plus/" },
    },
  },

  fr: {
    meta: {
      title: "Domotique open source : le guide complet (2026)",
      description:
        "Ce qu'est la domotique open source, pourquoi elle surpasse les écosystèmes cloud fermés, et les meilleurs logiciels domotiques open source (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz). Un guide pratique pour piloter votre maison avec un logiciel libre et auto-hébergé.",
    },
    hero: {
      title: "La domotique open source",
      subtitle:
        "Pilotez votre maison connectée avec un logiciel libre et auto-hébergé que vous pouvez lire, auditer et garder, au lieu de le louer à un cloud fermé.",
      intro: [
        "La plupart des produits connectés sont des boîtes noires : logiciel propriétaire, cloud obligatoire, et une entreprise qui peut changer les règles, ajouter un abonnement ou couper le service quand elle le veut. Vous ne possédez pas le système, vous louez l'accès.",
        "La domotique open source prend le chemin inverse. Le logiciel qui pilote votre maison est libre, public et auto-hébergé : n'importe qui peut l'inspecter, l'améliorer et le faire tourner aussi longtemps qu'il le souhaite. Ce guide explique ce qu'est la domotique open source, pourquoi c'est important, les principales solutions à connaître, et comment démarrer.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Voir les intégrations →",
        href: "/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Pourquoi l'open source compte pour votre maison",
      intro:
        "Votre domotique pilote vos lumières, vos serrures, votre chauffage et votre alarme. Ce n'est pas l'endroit pour une boîte noire que vous ne pouvez ni inspecter ni remplacer. L'open source rééquilibre les rapports de force :",
      points: [
        "Transparence : le code est public, donc chacun peut vérifier ce qu'il fait de vos données, au lieu de croire une promesse marketing.",
        "Pérennité : un projet communautaire ne peut pas être « arrêté » par une seule entreprise. Même si l'équipe d'origine s'arrête, le code reste et peut être repris (forké).",
        "Pas d'enfermement forcé : standards ouverts et code ouvert vous laissent libre de mélanger les marques et de faire évoluer votre installation, sans être prisonnier d'un écosystème.",
        "Vie privée : la plupart des plateformes open source sont auto-hébergées, donc vos habitudes, votre présence et vos flux de caméra peuvent rester sur votre réseau.",
        "Pas de péage surprise : le logiciel de base est gratuit, donc les fonctions essentielles ne peuvent pas passer du jour au lendemain derrière un nouvel abonnement mensuel.",
        "Extensibilité : une communauté développe des intégrations bien plus vite qu'un fabricant seul, donc davantage de vos appareils existants sont pris en charge.",
      ],
      outro:
        "Open source ne veut pas dire compliqué ni sans support. Les meilleurs projets sont soignés, activement maintenus et portés par de grandes communautés.",
    },
    definition: {
      title: "Qu'est-ce que la domotique open source ?",
      intro:
        "La domotique open source, c'est quand le logiciel qui pilote votre maison connectée est publié sous une licence open source, libre d'utilisation, d'inspection et de modification, et le plus souvent auto-hébergé sur du matériel qui vous appartient. Concrètement :",
      points: [
        "Le code source est public et sous licence ouverte (par exemple Gladys Assistant est en Apache 2.0), donc vous, ou n'importe qui, pouvez le lire et l'auditer.",
        "Il est gratuit à utiliser : pas de frais par appareil ni d'abonnement obligatoire pour faire tourner le cœur du système.",
        "Il est auto-hébergé sur votre propre machine : vos automatisations et vos données restent sous votre contrôle.",
        "Il parle des standards ouverts comme Zigbee, Matter et MQTT plutôt que le protocole propriétaire d'une seule marque.",
        "Une communauté contribue aux intégrations, aux correctifs et aux traductions, au grand jour.",
      ],
      outro:
        "Open source et confort ne s'opposent pas : des fonctions optionnelles comme l'accès distant ou l'IA peuvent exister, elles deviennent simplement un choix plutôt qu'une obligation.",
    },
    howTo: {
      title: "Les principaux logiciels domotiques open source",
      cards: [
        {
          logo: "/img/external/open-source-platforms/gladys-assistant.png",
          logoAlt: "Logo Gladys Assistant",
          title: "Gladys Assistant",
          text: "Une plateforme auto-hébergée (Apache 2.0) axée sur la simplicité : interface épurée, aucun fichier de configuration, scènes créées au clic et installation en une commande Docker. Idéale pour faire de l'open source sans la courbe d'apprentissage raide.",
        },
        {
          logo: "/img/external/open-source-platforms/home-assistant.png",
          logoAlt: "Logo Home Assistant",
          title: "Home Assistant",
          text: "La plateforme open source la plus complète et la plus populaire, avec un immense catalogue d'intégrations. Très puissante, mais la configuration peut devenir profonde et chargée en YAML sur les installations avancées.",
        },
        {
          logo: "/img/external/open-source-platforms/openhab.png",
          logoAlt: "Logo openHAB",
          title: "openHAB",
          text: "Une plateforme mature en Java, réputée pour sa flexibilité et sa neutralité vis-à-vis des marques. Moteur de règles puissant, mais une prise en main plus technique.",
        },
        {
          logo: "/img/external/open-source-platforms/jeedom.png",
          logoAlt: "Logo Jeedom",
          title: "Jeedom",
          text: "Une plateforme open source française avec une marketplace de plugins (certains payants). Populaire sur les box locales, avec une approche plus technique et orientée plugins.",
        },
        {
          logo: "/img/external/open-source-platforms/domoticz.png",
          logoAlt: "Logo Domoticz",
          title: "Domoticz",
          text: "Un système open source léger et ancien, qui tourne très bien sur du matériel peu puissant, avec une interface plus utilitaire.",
        },
        {
          logo: "/img/external/open-source-platforms/node-red.png",
          logoAlt: "Logo Node-RED",
          title: "Node-RED",
          text: "Pas une plateforme complète mais un outil open source d'automatisation par flux, souvent associé aux autres pour bâtir une logique avancée de façon visuelle.",
        },
      ],
    },
    gladys: {
      title: "Gladys Assistant : l'open source, en plus simple",
      paragraphs: [
        "Gladys Assistant est une plateforme domotique gratuite, open source (Apache 2.0) et auto-hébergée. Tout le code source est sur GitHub, elle s'installe en une seule commande Docker sur un Raspberry Pi, un mini-PC ou un NAS, et tourne entièrement sur votre réseau local.",
        "Sa force, c'est la simplicité. Tout se configure depuis une interface épurée, sans fichiers de configuration ni YAML, et les scènes se créent au clic. Elle repose sur des standards ouverts (Zigbee, Matter, MQTT) avec un vrai moteur d'automatisation local : vos scènes du quotidien tournent chez vous. Les fonctions optionnelles comme le vocal, l'IA et l'accès distant reposent sur un cloud souverain hébergé en France, porté par ce même projet indépendant : sans publicité, sans revente de données, et un accès distant chiffré de bout en bout.",
      ],
      link: { label: "Commencer avec Gladys →", href: "/docs/" },
    },
    related: {
      title: "Aller plus loin",
      intro:
        "Que vous compariez les plateformes ou que vous quittiez un écosystème fermé, ces guides vous aident à choisir et à faire le pas :",
      links: [
        {
          label: "Alternative à Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Une plateforme open source locale et plus simple, sans le YAML ni la courbe d'apprentissage raide.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Comment se comparent vraiment les deux principales plateformes open source et locales.",
        },
        {
          label: "Alternative à Jeedom",
          href: "/jeedom-alternative/",
          text: "Une alternative open source à Jeedom, sans marketplace de plugins payants.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord est important et comment bâtir une maison qui tourne sans le cloud.",
        },
        {
          label: "Contrôler sa maison avec l'IA",
          href: "/ai-smart-home/",
          text: "Gardez le confort de l'IA et du contrôle vocal, sur un cloud privé, pas l'assistant d'un géant de la tech.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Lancez-vous dans la domotique open source",
      text: "Gladys est gratuite, open source (Apache 2.0), et s'installe en une seule commande Docker. Auto-hébergée, locale d'abord, sans cloud obligatoire.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Découvrir Gladys Plus", href: "/plus/" },
    },
  },
};

export const openSourceHomeAutomationFaqEn = [
  {
    question: "What is open-source home automation?",
    answer:
      "Open-source home automation means the software that controls your smart home is released under an open-source license, free to use, inspect and modify, and usually self-hosted on hardware you own. The code is public, there's no mandatory subscription for the core, and it typically uses open standards like Zigbee, Matter and MQTT.",
  },
  {
    question: "What is the best open-source home automation software?",
    answer:
      "The main open-source platforms are Gladys Assistant, Home Assistant, openHAB, Jeedom and Domoticz. Home Assistant has the largest integration catalog, while Gladys Assistant focuses on simplicity with a clean interface, no configuration files and a one-command install. The best choice depends on whether you prioritize raw flexibility or ease of use.",
  },
  {
    question: "Is open-source home automation free?",
    answer:
      "Yes, the core software is free. Platforms like Gladys Assistant (Apache 2.0) and Home Assistant cost nothing to download and run on your own hardware. Some projects offer optional paid services (such as remote access or AI), but you're never forced into a subscription to keep your home automation working.",
  },
  {
    question: "Is open-source home automation private and secure?",
    answer:
      "It can be more private than closed cloud products. Because most open-source platforms are self-hosted, your automations and data stay on your own network instead of a manufacturer's servers, and because the code is public, anyone can audit what it does. Security still depends on keeping your system updated, as with any software.",
  },
  {
    question: "Do I need to be a developer to use open-source home automation?",
    answer:
      "No. While some platforms are quite technical, Gladys Assistant is designed for non-developers: it installs in a single Docker command, everything is configured by clicking in the interface with no configuration files, and a starter kit ships with it pre-installed.",
  },
  {
    question: "What license is Gladys Assistant released under?",
    answer:
      "Gladys Assistant is released under the Apache 2.0 license, a permissive open-source license. The full source code is available publicly on GitHub, so anyone can read, audit, contribute to or fork it.",
  },
];

export const openSourceHomeAutomationFaqFr = [
  {
    question: "Qu'est-ce que la domotique open source ?",
    answer:
      "La domotique open source, c'est quand le logiciel qui pilote votre maison connectée est publié sous une licence open source, libre d'utilisation, d'inspection et de modification, et le plus souvent auto-hébergé sur du matériel qui vous appartient. Le code est public, il n'y a pas d'abonnement obligatoire pour le cœur du système, et elle utilise généralement des standards ouverts comme Zigbee, Matter et MQTT.",
  },
  {
    question: "Quel est le meilleur logiciel domotique open source ?",
    answer:
      "Les principales plateformes open source sont Gladys Assistant, Home Assistant, openHAB, Jeedom et Domoticz. Home Assistant possède le plus grand catalogue d'intégrations, tandis que Gladys Assistant mise sur la simplicité avec une interface épurée, sans fichiers de configuration et une installation en une commande. Le meilleur choix dépend de si vous privilégiez la flexibilité maximale ou la facilité d'usage.",
  },
  {
    question: "La domotique open source est-elle gratuite ?",
    answer:
      "Oui, le logiciel de base est gratuit. Des plateformes comme Gladys Assistant (Apache 2.0) et Home Assistant ne coûtent rien à télécharger et à faire tourner sur votre propre matériel. Certains projets proposent des services payants optionnels (comme l'accès distant ou l'IA), mais on ne vous impose jamais un abonnement pour que votre domotique continue de fonctionner.",
  },
  {
    question: "La domotique open source est-elle privée et sécurisée ?",
    answer:
      "Elle peut être plus respectueuse de la vie privée que les produits cloud fermés. Comme la plupart des plateformes open source sont auto-hébergées, vos automatisations et vos données restent sur votre réseau plutôt que sur les serveurs d'un fabricant, et comme le code est public, chacun peut auditer ce qu'il fait. La sécurité dépend tout de même de la mise à jour régulière de votre système, comme pour tout logiciel.",
  },
  {
    question: "Faut-il être développeur pour utiliser la domotique open source ?",
    answer:
      "Non. Si certaines plateformes sont assez techniques, Gladys Assistant est pensée pour les non-développeurs : elle s'installe en une seule commande Docker, tout se configure au clic dans l'interface sans fichiers de configuration, et un kit de démarrage est livré avec Gladys pré-installée.",
  },
  {
    question: "Sous quelle licence Gladys Assistant est-elle publiée ?",
    answer:
      "Gladys Assistant est publiée sous licence Apache 2.0, une licence open source permissive. L'intégralité du code source est disponible publiquement sur GitHub : chacun peut le lire, l'auditer, y contribuer ou le forker.",
  },
];

export default openSourceHomeAutomationContent;
