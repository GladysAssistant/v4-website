// Content for the "Home Assistant alternative" landing page.
// Different search intent from the head-to-head comparison page: people here
// are actively looking to replace or avoid Home Assistant. So this page is
// more Gladys-forward and persuasive, briefly covers other open-source
// alternatives (for trust + intent coverage), stays honest about Gladys'
// trade-offs, and links to the full comparison page rather than duplicating it.

const alternativeContent = {
  en: {
    meta: {
      title: "The best Home Assistant alternative: Gladys Assistant",
      description:
        "Looking for a Home Assistant alternative? Gladys Assistant is a simpler, privacy-first, open-source home automation platform — no YAML, no cloud, stable automatic updates. Free and self-hosted.",
    },
    hero: {
      title: "Looking for a Home Assistant alternative?",
      subtitle:
        "Meet Gladys Assistant — the simpler, privacy-first, open-source home automation platform.",
      intro: [
        "Home Assistant is a fantastic project. But it's not for everyone: between YAML files, a steep learning curve and frequent updates, many people look for something simpler — without giving up open-source and local control.",
        "That's exactly why Gladys Assistant exists. It's a free, open-source, self-hosted home automation platform built around one idea: think about the user first. No configuration files, no cloud required — everything happens with a few clicks.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Gladys vs Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Why look for an alternative to Home Assistant?",
      intro:
        "Home Assistant is incredibly powerful — but that power comes at a cost. The most common reasons people start searching for an alternative:",
      points: [
        "You have to edit YAML configuration files for some setups.",
        "The learning curve is steep, and the interface can feel overwhelming for a beginner.",
        "Frequent updates sometimes break a setup that was working fine.",
        "It often feels \"made by developers, for developers\".",
        "You want a clean, stable experience that just works, without tinkering.",
      ],
      outro:
        "None of this makes Home Assistant a bad project — it's excellent if you love to tinker. It's simply a question of fit.",
    },
    reasons: {
      title: "Why Gladys is a great Home Assistant alternative",
      cards: [
        {
          icon: "🖱️",
          title: "No YAML, ever",
          text: "Everything is configured by clicking in the interface. There are no configuration files to edit — because there are none.",
        },
        {
          icon: "🛡️",
          title: "Rock-solid stability",
          text: "Updates are fully automatic and atomic: Gladys can never end up in a half-broken state between two versions.",
        },
        {
          icon: "🔒",
          title: "Privacy-first & self-hosted",
          text: "Gladys runs at home, on your machine. Your data stays on your local network — no mandatory cloud, no tracking, no data selling.",
        },
        {
          icon: "🔌",
          title: "Built on open standards",
          text: "Zigbee, Matter and MQTT are first-class citizens. Thousands of devices are supported through these open protocols.",
        },
        {
          icon: "💬",
          title: "Direct support from the maker",
          text: "Ask a question by email, on the forum or on social media — the founder answers personally, in French or English.",
        },
        {
          icon: "💚",
          title: "Free & open-source forever",
          text: "The Gladys core is 100% free and open-source. An optional Gladys Plus subscription adds remote access, AI and backups.",
        },
      ],
    },
    honesty: {
      title: "Being honest: where Home Assistant still wins",
      paragraphs: [
        "I'm the creator of Gladys, so let me be transparent. Home Assistant has 2000+ integrations versus around 35 native ones in Gladys. If you own very niche or cloud-only devices, Home Assistant is more likely to support them out of the box. It also lets you share automations as YAML blueprints and offers far more knobs for power users.",
        "But 35 native integrations still means thousands of compatible devices through Zigbee and Matter. For the rest, Matterbridge can bridge non-Matter devices onto a Matter network — and you can even run Gladys and Home Assistant side by side, using one as a backend and the other as your interface.",
      ],
      compareLink: {
        label: "See the full Gladys vs Home Assistant comparison →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Other open-source Home Assistant alternatives",
      intro:
        "Gladys isn't the only option. To be fair, here are the main open-source alternatives to Home Assistant:",
      cards: [
        {
          title: "openHAB",
          text: "Java-based, very powerful and rules-driven. Highly flexible, but with a learning curve comparable to Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Lightweight and runs on modest hardware. Mature and stable, but the interface feels dated.",
        },
        {
          title: "Jeedom",
          text: "A French project with a plugin-based, freemium model. Flexible, but many plugins are paid.",
        },
        {
          title: "Homey Pro",
          text: "A polished experience, but it relies on proprietary paid hardware rather than being fully open and self-hosted.",
        },
      ],
      outro:
        "Among these, Gladys stands out for its simplicity and true product experience: a clean interface, no configuration files, and a focus on open standards.",
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Try the simple Home Assistant alternative",
      text: "Gladys is free, open-source, and installs in a single Docker command. Privacy-first, self-hosted, no cloud required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Compare with Home Assistant",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
  },

  fr: {
    meta: {
      title: "La meilleure alternative à Home Assistant : Gladys Assistant",
      description:
        "Vous cherchez une alternative à Home Assistant ? Gladys Assistant est une solution domotique open source, plus simple et respectueuse de la vie privée — sans YAML, sans cloud, avec des mises à jour automatiques et stables. Gratuite et auto-hébergée.",
    },
    hero: {
      title: "Vous cherchez une alternative à Home Assistant ?",
      subtitle:
        "Découvrez Gladys Assistant — la solution domotique open source plus simple et respectueuse de votre vie privée.",
      intro: [
        "Home Assistant est un projet formidable. Mais il ne convient pas à tout le monde : entre les fichiers YAML, une courbe d'apprentissage raide et des mises à jour fréquentes, beaucoup cherchent quelque chose de plus simple — sans renoncer à l'open source et au contrôle local.",
        "C'est exactement pour ça que Gladys Assistant existe. C'est une solution domotique gratuite, open source et auto-hébergée, construite autour d'une idée : penser d'abord à l'utilisateur. Pas de fichiers de configuration, pas de cloud obligatoire — tout se fait en quelques clics.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Gladys vs Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Pourquoi chercher une alternative à Home Assistant ?",
      intro:
        "Home Assistant est incroyablement puissant — mais cette puissance a un prix. Les raisons les plus fréquentes qui poussent à chercher une alternative :",
      points: [
        "Il faut éditer des fichiers de configuration YAML pour certains réglages.",
        "La courbe d'apprentissage est raide, et l'interface peut sembler intimidante pour un débutant.",
        "Les mises à jour fréquentes cassent parfois une installation qui fonctionnait bien.",
        "On a souvent l'impression que c'est « fait par des développeurs, pour des développeurs ».",
        "Vous voulez une expérience propre et stable qui fonctionne, sans bidouiller.",
      ],
      outro:
        "Rien de tout cela ne fait de Home Assistant un mauvais projet — il est excellent si vous aimez bidouiller. C'est simplement une question d'adéquation à votre profil.",
    },
    reasons: {
      title: "Pourquoi Gladys est une excellente alternative à Home Assistant",
      cards: [
        {
          icon: "🖱️",
          title: "Jamais de YAML",
          text: "Tout se configure au clic dans l'interface. Aucun fichier de configuration à éditer — parce qu'il n'y en a pas.",
        },
        {
          icon: "🛡️",
          title: "Une stabilité à toute épreuve",
          text: "Les mises à jour sont totalement automatiques et atomiques : Gladys ne peut jamais se retrouver dans un état bâtard entre deux versions.",
        },
        {
          icon: "🔒",
          title: "Vie privée & auto-hébergement",
          text: "Gladys tourne chez vous, sur votre machine. Vos données restent sur votre réseau local — pas de cloud obligatoire, pas de tracking, pas de revente.",
        },
        {
          icon: "🔌",
          title: "Basée sur les standards ouverts",
          text: "Zigbee, Matter et MQTT sont au cœur du projet. Des milliers d'appareils sont supportés via ces protocoles ouverts.",
        },
        {
          icon: "💬",
          title: "Support direct du créateur",
          text: "Posez une question par mail, sur le forum ou les réseaux sociaux — le fondateur répond personnellement, en français ou en anglais.",
        },
        {
          icon: "💚",
          title: "Gratuite & open source pour toujours",
          text: "Le cœur de Gladys est 100 % gratuit et open source. L'abonnement optionnel Gladys Plus ajoute l'accès distant, l'IA et les sauvegardes.",
        },
      ],
    },
    honesty: {
      title: "En toute honnêteté : là où Home Assistant garde l'avantage",
      paragraphs: [
        "Je suis le créateur de Gladys, alors soyons transparents. Home Assistant a plus de 2000 intégrations, contre une trentaine de natives dans Gladys. Si vous avez des appareils très spécifiques ou cloud-only, Home Assistant a plus de chances de les supporter directement. Il permet aussi de partager des automatisations via des blueprints YAML et offre bien plus d'options pour les power users.",
        "Mais une trentaine d'intégrations natives, cela représente déjà des milliers d'appareils compatibles via Zigbee et Matter. Pour le reste, Matterbridge permet de relier des appareils non-Matter à un réseau Matter — et vous pouvez même faire tourner Gladys et Home Assistant côte à côte, l'un servant de backend et l'autre d'interface.",
      ],
      compareLink: {
        label: "Voir le comparatif complet Gladys vs Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Les autres alternatives open source à Home Assistant",
      intro:
        "Gladys n'est pas la seule option. Pour être juste, voici les principales alternatives open source à Home Assistant :",
      cards: [
        {
          title: "openHAB",
          text: "Basé sur Java, très puissant et orienté règles. Très flexible, mais avec une courbe d'apprentissage comparable à Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Léger et tourne sur du matériel modeste. Mature et stable, mais l'interface est datée.",
        },
        {
          title: "Jeedom",
          text: "Un projet français au modèle freemium basé sur des plugins. Flexible, mais beaucoup de plugins sont payants.",
        },
        {
          title: "Homey Pro",
          text: "Une expérience soignée, mais qui repose sur du matériel propriétaire payant plutôt que sur un vrai auto-hébergement ouvert.",
        },
      ],
      outro:
        "Parmi elles, Gladys se distingue par sa simplicité et sa vraie expérience produit : une interface épurée, aucun fichier de configuration, et un focus sur les standards ouverts.",
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Essayez l'alternative simple à Home Assistant",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Auto-hébergée, respectueuse de votre vie privée, sans cloud obligatoire.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Comparer avec Home Assistant",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
  },
};

export const alternativeFaqEn = [
  {
    question: "What is the best alternative to Home Assistant?",
    answer:
      "It depends on your profile. If you want simplicity and a clean experience without YAML, Gladys Assistant is a great choice. Other open-source alternatives include openHAB, Domoticz and Jeedom, each with its own trade-offs.",
  },
  {
    question: "Is there a Home Assistant alternative without YAML?",
    answer:
      "Yes. Gladys Assistant requires no YAML and no configuration files at all — everything is configured by clicking in the interface, which makes it much friendlier for beginners.",
  },
  {
    question: "Is there a simpler Home Assistant alternative for beginners?",
    answer:
      "Gladys Assistant is designed for simplicity: a clean interface, no configuration files, automatic atomic updates and a starter kit with everything pre-installed. It's one of the easiest open-source options to get started with.",
  },
  {
    question: "Can I migrate from Home Assistant to Gladys?",
    answer:
      "You don't have to migrate everything at once. Using Zigbee2MQTT or Matter, the same devices can appear in both at the same time, so you can run them side by side. Matterbridge can even expose your Home Assistant devices to Gladys.",
  },
  {
    question: "Are there free alternatives to Home Assistant?",
    answer:
      "Yes. Gladys Assistant, openHAB and Domoticz are free and open-source. Jeedom is free but uses a freemium plugin model. Gladys is 100% free and open-source at its core, with an optional paid subscription.",
  },
  {
    question: "Is Gladys a good Home Assistant alternative for privacy?",
    answer:
      "Yes. Gladys is self-hosted and runs on your own machine, so your smart home data stays on your local network. There is no mandatory cloud, no tracking and no data selling.",
  },
];

export const alternativeFaqFr = [
  {
    question: "Quelle est la meilleure alternative à Home Assistant ?",
    answer:
      "Cela dépend de votre profil. Si vous voulez de la simplicité et une expérience propre sans YAML, Gladys Assistant est un excellent choix. Parmi les autres alternatives open source : openHAB, Domoticz et Jeedom, chacune avec ses compromis.",
  },
  {
    question: "Existe-t-il une alternative à Home Assistant sans YAML ?",
    answer:
      "Oui. Gladys Assistant ne nécessite aucun YAML ni fichier de configuration — tout se configure au clic dans l'interface, ce qui la rend bien plus accessible aux débutants.",
  },
  {
    question: "Existe-t-il une alternative à Home Assistant plus simple pour les débutants ?",
    answer:
      "Gladys Assistant est pensée pour la simplicité : interface épurée, aucun fichier de configuration, mises à jour automatiques et atomiques, et un kit de démarrage avec tout pré-installé. C'est l'une des options open source les plus faciles pour démarrer.",
  },
  {
    question: "Puis-je migrer de Home Assistant vers Gladys ?",
    answer:
      "Vous n'êtes pas obligé de tout migrer d'un coup. Avec Zigbee2MQTT ou Matter, les mêmes appareils peuvent apparaître dans les deux en même temps : vous pouvez donc les faire tourner côte à côte. Matterbridge peut même exposer vos appareils Home Assistant dans Gladys.",
  },
  {
    question: "Existe-t-il des alternatives gratuites à Home Assistant ?",
    answer:
      "Oui. Gladys Assistant, openHAB et Domoticz sont gratuits et open source. Jeedom est gratuit mais utilise un modèle freemium à base de plugins. Le cœur de Gladys est 100 % gratuit et open source, avec un abonnement payant optionnel.",
  },
  {
    question: "Gladys est-elle une bonne alternative à Home Assistant pour la vie privée ?",
    answer:
      "Oui. Gladys est auto-hébergée et tourne sur votre propre machine : vos données domotiques restent sur votre réseau local. Pas de cloud obligatoire, pas de tracking, pas de revente de données.",
  },
];

export default alternativeContent;
