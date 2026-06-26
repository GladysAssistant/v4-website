// Content for the "Jeedom alternative" landing page.
// Different search intent from the head-to-head comparison page: people here
// are actively looking to replace or avoid Jeedom. So this page is more
// Gladys-forward and persuasive, briefly covers other open-source alternatives
// (for trust + intent coverage), stays honest about Gladys' trade-offs, and
// links to the full comparison page rather than duplicating it.

const alternativeContent = {
  en: {
    meta: {
      title: "The best Jeedom alternative: Gladys Assistant",
      description:
        "Looking for a Jeedom alternative? Gladys Assistant is a French, privacy-first, open-source home automation platform with a modern interface and free integrations: no paid plugins, no YAML, no cloud. Free and self-hosted.",
    },
    hero: {
      title: "Looking for a Jeedom alternative?",
      subtitle:
        "Meet Gladys Assistant, the French, privacy-first, open-source home automation platform with a modern interface and free integrations.",
      intro: [
        "Jeedom is a solid, mature project, but it isn't for everyone. Between paid plugins, an interface that feels dated, and manual updates, many people look for something simpler and more predictable, without giving up open-source and local control.",
        "That's exactly what Gladys Assistant offers. Like Jeedom, it's a French, free, open-source, self-hosted home automation platform, but built around one idea: think about the user first. A clean modern interface, no configuration files, no cloud required, and every integration free and open.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Gladys vs Jeedom →",
        href: "/jeedom-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Why look for an alternative to Jeedom?",
      intro:
        "Jeedom is powerful and flexible, but that comes with trade-offs. The most common reasons people start searching for an alternative:",
      points: [
        "Many of the best plugins are paid, so the real cost of a setup is hard to predict.",
        "The interface feels dated and exposes a lot of technical options at once.",
        "Core and plugins are updated manually, which can break a working setup.",
        "Building scenarios can feel more technical than it needs to be.",
        "You want a clean, stable experience that just works, without tinkering.",
      ],
      outro:
        "None of this makes Jeedom a bad project, it's excellent if you love its plugin ecosystem and flexibility. It's simply a question of fit, and for many people who just want a smart home that works, there's a simpler way.",
    },
    reasons: {
      title: "Why Gladys is a great Jeedom alternative",
      cards: [
        {
          icon: "💚",
          title: "Free integrations, no paid plugins",
          text: "Every Gladys integration is free and open-source. There's no plugin marketplace where the best features sit behind a paywall.",
        },
        {
          icon: "🖱️",
          title: "A modern, clean interface",
          text: "Everything is configured by clicking, in an interface designed like a consumer product, not a technical control panel.",
        },
        {
          icon: "🛡️",
          title: "Rock-solid stability",
          text: "Updates are fully automatic and atomic: Gladys can never end up in a half-broken state between two versions.",
        },
        {
          icon: "🔒",
          title: "Privacy-first & self-hosted",
          text: "Like Jeedom, Gladys runs at home, on your machine. Your data stays on your local network, with no mandatory cloud and no data selling.",
        },
        {
          icon: "🔌",
          title: "Built on open standards",
          text: "Zigbee, Matter and MQTT are first-class citizens, so thousands of devices are supported through these open protocols.",
        },
        {
          icon: "💬",
          title: "Direct support, in French",
          text: "Gladys is a French project too: ask a question and the founder answers personally. Your feedback genuinely shapes the roadmap.",
        },
      ],
    },
    honesty: {
      title: "Being fair: where Jeedom has the edge",
      paragraphs: [
        "I'm the creator of Gladys, so let me be transparent. Jeedom has a larger catalog through its plugin marketplace, with particularly deep Z-Wave support, so if you rely heavily on Z-Wave or own very niche devices, Jeedom may cover them when Gladys doesn't yet. Its scenario engine is also extremely flexible for power users, and its all-in-one boxes are a convenient plug-and-play option.",
        "But Gladys already supports thousands of devices through Zigbee and Matter, the open standards the whole industry is moving toward, and every integration is free. For anything else, Matterbridge can bridge devices, and you can even run Gladys and Jeedom side by side, using one as a backend and the other as your interface. In other words, choosing Gladys rarely means giving anything up.",
      ],
      compareLink: {
        label: "See the full Gladys vs Jeedom comparison →",
        href: "/jeedom-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Other open-source Jeedom alternatives",
      intro:
        "Gladys isn't the only option. To be fair, here are the main open-source alternatives to Jeedom:",
      cards: [
        {
          title: "Home Assistant",
          text: "The most popular open-source platform, with a huge catalog. Extremely powerful, but with a steep learning curve and some YAML.",
        },
        {
          title: "openHAB",
          text: "Java-based, very powerful and rules-driven. Highly flexible, but with a learning curve comparable to Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Lightweight and runs on modest hardware. Mature and stable, but the interface feels dated.",
        },
        {
          title: "Homey Pro",
          text: "A polished experience, but it relies on proprietary paid hardware rather than being fully open and self-hosted.",
        },
      ],
      outro:
        "Among these, Gladys stands out for its simplicity, its modern product experience, and the fact that every integration is free, with no plugin paywall.",
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Try the simple Jeedom alternative",
      text: "Gladys is free, open-source, and installs in a single Docker command. Privacy-first, self-hosted, no cloud required, and every integration is free.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Compare with Jeedom",
        href: "/jeedom-vs-gladys-assistant/",
      },
    },
  },

  fr: {
    meta: {
      title: "La meilleure alternative à Jeedom : Gladys Assistant",
      description:
        "Vous cherchez une alternative à Jeedom ? Gladys Assistant est une solution domotique française, open source et respectueuse de la vie privée, avec une interface moderne et des intégrations gratuites : sans plugins payants, sans YAML, sans cloud. Gratuite et auto-hébergée.",
    },
    hero: {
      title: "Vous cherchez une alternative à Jeedom ?",
      subtitle:
        "Découvrez Gladys Assistant, la solution domotique française, open source et respectueuse de votre vie privée, avec une interface moderne et des intégrations gratuites.",
      intro: [
        "Jeedom est un projet solide et mature, mais il ne convient pas à tout le monde. Entre les plugins payants, une interface qui a vieilli et des mises à jour manuelles, beaucoup cherchent quelque chose de plus simple et plus prévisible, sans renoncer à l'open source et au contrôle local.",
        "C'est exactement ce que propose Gladys Assistant. Comme Jeedom, c'est une solution domotique française, gratuite, open source et auto-hébergée, mais construite autour d'une idée : penser d'abord à l'utilisateur. Une interface moderne et épurée, pas de fichiers de configuration, pas de cloud obligatoire, et chaque intégration gratuite et ouverte.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Gladys vs Jeedom →",
        href: "/jeedom-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Pourquoi chercher une alternative à Jeedom ?",
      intro:
        "Jeedom est puissant et flexible, mais cela s'accompagne de compromis. Les raisons les plus fréquentes qui poussent à chercher une alternative :",
      points: [
        "Beaucoup des meilleurs plugins sont payants, donc le coût réel d'une installation est difficile à prévoir.",
        "L'interface a vieilli et expose beaucoup d'options techniques d'un coup.",
        "Le cœur et les plugins se mettent à jour manuellement, ce qui peut casser une installation qui marchait.",
        "Construire des scénarios peut sembler plus technique que nécessaire.",
        "Vous voulez une expérience propre et stable qui fonctionne, sans bidouiller.",
      ],
      outro:
        "Rien de tout cela ne fait de Jeedom un mauvais projet : il est excellent si vous aimez son écosystème de plugins et sa flexibilité. C'est simplement une question d'adéquation, et pour beaucoup de gens qui veulent juste une maison connectée qui fonctionne, il existe une voie plus simple.",
    },
    reasons: {
      title: "Pourquoi Gladys est une excellente alternative à Jeedom",
      cards: [
        {
          icon: "💚",
          title: "Des intégrations gratuites, sans plugins payants",
          text: "Chaque intégration Gladys est gratuite et open source. Il n'y a pas de marché de plugins où les meilleures fonctions sont derrière un paywall.",
        },
        {
          icon: "🖱️",
          title: "Une interface moderne et épurée",
          text: "Tout se configure au clic, dans une interface pensée comme un produit grand public, pas comme un panneau de contrôle technique.",
        },
        {
          icon: "🛡️",
          title: "Une stabilité à toute épreuve",
          text: "Les mises à jour sont totalement automatiques et atomiques : Gladys ne peut jamais se retrouver dans un état bâtard entre deux versions.",
        },
        {
          icon: "🔒",
          title: "Vie privée & auto-hébergement",
          text: "Comme Jeedom, Gladys tourne chez vous, sur votre machine. Vos données restent sur votre réseau local, sans cloud obligatoire et sans revente.",
        },
        {
          icon: "🔌",
          title: "Basée sur les standards ouverts",
          text: "Zigbee, Matter et MQTT sont au cœur du projet, donc des milliers d'appareils sont supportés via ces protocoles ouverts.",
        },
        {
          icon: "💬",
          title: "Un support direct, en français",
          text: "Gladys est un projet français aussi : posez une question et le fondateur répond personnellement. Vos retours façonnent vraiment la feuille de route.",
        },
      ],
    },
    honesty: {
      title: "En toute honnêteté : là où Jeedom garde l'avantage",
      paragraphs: [
        "Je suis le créateur de Gladys, alors soyons transparents. Jeedom dispose d'un catalogue plus large via son marché de plugins, avec un support Z-Wave particulièrement approfondi : si vous comptez beaucoup sur le Z-Wave ou possédez des appareils très spécifiques, Jeedom peut les couvrir là où Gladys ne le fait pas encore. Son moteur de scénarios est aussi extrêmement flexible pour les power users, et ses box tout-en-un sont une option clé en main pratique.",
        "Mais Gladys supporte déjà des milliers d'appareils via Zigbee et Matter, les standards ouverts vers lesquels toute l'industrie se dirige, et chaque intégration est gratuite. Pour le reste, Matterbridge permet de relier des appareils, et vous pouvez même faire tourner Gladys et Jeedom côte à côte, l'un servant de backend et l'autre d'interface. Autrement dit, choisir Gladys ne veut presque jamais dire renoncer à quoi que ce soit.",
      ],
      compareLink: {
        label: "Voir le comparatif complet Gladys vs Jeedom →",
        href: "/jeedom-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Les autres alternatives open source à Jeedom",
      intro:
        "Gladys n'est pas la seule option. Pour être juste, voici les principales alternatives open source à Jeedom :",
      cards: [
        {
          title: "Home Assistant",
          text: "La plateforme open source la plus populaire, avec un catalogue immense. Très puissante, mais avec une courbe d'apprentissage raide et un peu de YAML.",
        },
        {
          title: "openHAB",
          text: "Basé sur Java, très puissant et orienté règles. Très flexible, mais avec une courbe d'apprentissage comparable à Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Léger et tourne sur du matériel modeste. Mature et stable, mais l'interface est datée.",
        },
        {
          title: "Homey Pro",
          text: "Une expérience soignée, mais qui repose sur du matériel propriétaire payant plutôt que sur un vrai auto-hébergement ouvert.",
        },
      ],
      outro:
        "Parmi elles, Gladys se distingue par sa simplicité, sa vraie expérience produit moderne, et le fait que chaque intégration soit gratuite, sans paywall sur les plugins.",
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Essayez l'alternative simple à Jeedom",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Auto-hébergée, respectueuse de votre vie privée, sans cloud obligatoire, et toutes les intégrations sont gratuites.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Comparer avec Jeedom",
        href: "/jeedom-vs-gladys-assistant/",
      },
    },
  },
};

export const alternativeFaqEn = [
  {
    question: "What is the best alternative to Jeedom?",
    answer:
      "It depends on your profile. If you want a French open-source platform with a modern interface and free integrations, Gladys Assistant is a great choice. Other open-source alternatives include Home Assistant, openHAB and Domoticz, each with its own trade-offs.",
  },
  {
    question: "Is there a Jeedom alternative without paid plugins?",
    answer:
      "Yes. Gladys Assistant has no plugin marketplace and no paywall on integrations: every integration is free and open-source. The only optional cost is the Gladys Plus subscription for remote access, AI and backups.",
  },
  {
    question: "Is there a simpler Jeedom alternative for beginners?",
    answer:
      "Gladys Assistant is designed for simplicity: a clean modern interface, no configuration files, automatic atomic updates, rich documentation with videos, and a starter kit with everything pre-installed. It's one of the easiest open-source options to get started with.",
  },
  {
    question: "Can I migrate from Jeedom to Gladys?",
    answer:
      "You don't have to migrate everything at once. Using Zigbee2MQTT or Matter, the same devices can appear in both at the same time, so you can run them side by side and switch over gradually. They can also talk over MQTT or HTTP.",
  },
  {
    question: "Is Gladys also a French open-source project like Jeedom?",
    answer:
      "Yes. Like Jeedom, Gladys Assistant is a French, open-source, self-hosted project with an active French-speaking community and support in French. The main difference is Gladys' focus on a polished interface and free, open-standard integrations.",
  },
  {
    question: "Is Gladys a good Jeedom alternative for privacy?",
    answer:
      "Yes. Like Jeedom, Gladys is self-hosted and runs on your own machine, so your smart home data stays on your local network. There is no mandatory cloud, no tracking and no data selling.",
  },
];

export const alternativeFaqFr = [
  {
    question: "Quelle est la meilleure alternative à Jeedom ?",
    answer:
      "Cela dépend de votre profil. Si vous voulez une plateforme française open source avec une interface moderne et des intégrations gratuites, Gladys Assistant est un excellent choix. Parmi les autres alternatives open source : Home Assistant, openHAB et Domoticz, chacune avec ses compromis.",
  },
  {
    question: "Existe-t-il une alternative à Jeedom sans plugins payants ?",
    answer:
      "Oui. Gladys Assistant n'a pas de marché de plugins ni de paywall sur les intégrations : chaque intégration est gratuite et open source. Le seul coût optionnel est l'abonnement Gladys Plus pour l'accès distant, l'IA et les sauvegardes.",
  },
  {
    question: "Existe-t-il une alternative à Jeedom plus simple pour les débutants ?",
    answer:
      "Gladys Assistant est pensée pour la simplicité : interface moderne et épurée, aucun fichier de configuration, mises à jour automatiques et atomiques, documentation riche avec vidéos, et un kit de démarrage avec tout pré-installé. C'est l'une des options open source les plus faciles pour démarrer.",
  },
  {
    question: "Puis-je migrer de Jeedom vers Gladys ?",
    answer:
      "Vous n'êtes pas obligé de tout migrer d'un coup. Avec Zigbee2MQTT ou Matter, les mêmes appareils peuvent apparaître dans les deux en même temps : vous pouvez donc les faire tourner côte à côte et basculer progressivement. Ils peuvent aussi communiquer en MQTT ou HTTP.",
  },
  {
    question: "Gladys est-il aussi un projet open source français comme Jeedom ?",
    answer:
      "Oui. Comme Jeedom, Gladys Assistant est un projet français, open source et auto-hébergé, avec une communauté francophone active et un support en français. La principale différence est l'accent mis par Gladys sur une interface soignée et des intégrations gratuites basées sur des standards ouverts.",
  },
  {
    question: "Gladys est-elle une bonne alternative à Jeedom pour la vie privée ?",
    answer:
      "Oui. Comme Jeedom, Gladys est auto-hébergée et tourne sur votre propre machine : vos données domotiques restent sur votre réseau local. Pas de cloud obligatoire, pas de tracking, pas de revente de données.",
  },
];

export default alternativeContent;
