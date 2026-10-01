// Content for the "Domoticz alternative" landing page.
// Domoticz is a long-standing, lightweight open-source home automation system
// (C++, GPLv3), popular in Europe on Raspberry Pi. People looking for an
// alternative usually mention its dated interface and scripting (Lua,
// dzVents, Blockly). We stay fair: Domoticz is light, stable and supports a
// lot of hardware. Same layout as the openHAB alternative page.

const domoticzAlternativeContent = {
  en: {
    meta: {
      title: "Domoticz Alternative: Modern Open-Source Home Automation",
      description:
        "Looking for a Domoticz alternative? Gladys Assistant is free, open-source home automation with a modern mobile interface, visual scenes, managed Zigbee2MQTT, Matter and AI. An honest comparison and a migration path.",
    },
    screenshotCaption:
      "Gladys: a modern, mobile-first dashboard where Domoticz users are used to device lists and scripts.",
    hero: {
      title: "Looking for a Domoticz alternative?",
      subtitle:
        "Domoticz has run countless Raspberry Pi smart homes. If you want the same open-source, local approach with a modern interface and no scripting, Gladys Assistant is a natural next step.",
      intro: [
        "Domoticz earned its reputation by being light, stable and compatible with a huge range of hardware, from RFXCOM and 433 MHz devices to Zigbee and Z-Wave. Many smart homes have run on it for a decade.",
        "But its interface shows its age, and anything beyond simple timers means Lua, dzVents or Blockly scripts. Gladys Assistant shares the same values, open source, local and lightweight, with a mobile-first interface and automations you build visually.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Try the demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Why people look for an alternative to Domoticz",
      intro: "Domoticz users who switch usually mention the same things:",
      points: [
        "The web interface feels dated, especially on a phone.",
        "Automations beyond simple timers require scripting in Lua, dzVents or Blockly.",
        "Dashboards for the rest of the household take work to set up.",
        "Its community and its catalog of integrations are smaller than Home Assistant's.",
      ],
      outro:
        "If Domoticz still does everything you need, keep it. If you want a fresher experience without giving up open source and local control, read on.",
    },
    comparison: {
      title: "Gladys Assistant vs Domoticz",
      intro: "Two lightweight, open-source and local platforms:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Domoticz",
      },
      rows: [
        { feature: "License", gladys: "Apache 2.0", other: "GPL v3" },
        { feature: "Stack", gladys: "Node.js, Docker", other: "C++, native or Docker" },
        {
          feature: "Interface",
          gladys: "Modern, mobile-first dashboards",
          other: "Classic web interface",
        },
        {
          feature: "Automations",
          gladys: "Visual scenes, no code",
          other: "Timers, Blockly, Lua, dzVents and Python scripts",
        },
        {
          feature: "Zigbee",
          gladys: "Zigbee2MQTT, installed and managed by Gladys",
          other: "Through Zigbee2MQTT over MQTT, or plugins",
        },
        {
          feature: "AI",
          gladys: "AI assistant with Gladys Plus, built-in MCP server",
          other: "No built-in AI",
        },
        {
          feature: "Hardware coverage",
          gladys: "Main protocols and popular brands, plus 90+ community integrations",
          other: "Very broad, including legacy 433 MHz and RFXCOM devices",
        },
      ],
      outro:
        "Domoticz, still actively maintained with several releases a year, wins on legacy hardware coverage and a very light footprint. Gladys wins on interface, automations without code, Matter and AI.",
    },
    features: {
      title: "Why Gladys is a good Domoticz alternative",
      intro: "What changes when you move to Gladys:",
      cards: [
        {
          icon: "📱",
          title: "A modern interface",
          text: "Dashboards designed for phones and wall tablets, that the whole household can use.",
        },
        {
          icon: "🧩",
          title: "Scenes instead of scripts",
          text: "Triggers, conditions, if/then/else and delays in a visual editor: no Lua or dzVents to maintain.",
        },
        {
          icon: "🐝",
          title: "Managed Zigbee2MQTT",
          text: "Gladys installs and wires Zigbee2MQTT and its MQTT broker for you.",
        },
        {
          icon: "🔗",
          title: "Matter",
          text: "Gladys is a Matter controller, ready for the new generation of devices.",
        },
        {
          icon: "🤖",
          title: "AI when you want it",
          text: "Talk to your home with Gladys Plus, or connect Claude through the built-in MCP server.",
        },
        {
          icon: "🍓",
          title: "Still lightweight",
          text: "Gladys runs on a Raspberry Pi, a mini-PC or a NAS with Docker.",
        },
      ],
    },
    how: {
      title: "How to move from Domoticz to Gladys",
      intro: "A progressive migration:",
      points: [
        "Install Gladys on the same Raspberry Pi or on another machine, and list your Domoticz devices by hardware.",
        "Zigbee: move your devices to Zigbee2MQTT managed by Gladys (a Zigbee dongle can only be used by one of them at a time).",
        "Z-Wave: run Z-Wave JS UI and connect Gladys to it over MQTT.",
        "433 MHz devices: check the RFLink community integration; MQTT can bridge the rest.",
        "Rebuild your scripts as Gladys scenes, then switch Domoticz off once everything runs in Gladys.",
      ],
      outro:
        "Check the Works with Gladys page first: Domoticz supports some legacy hardware Gladys doesn't.",
    },
    solution: {
      title: "Same values, a fresher experience",
      paragraphs: [
        "Domoticz and Gladys agree on the essentials: open source, local, lightweight. Gladys brings what Domoticz users most often miss: an interface that feels current, automations without scripting, Matter, and optional AI.",
        "Gladys is free. Gladys Plus is an optional subscription for encrypted remote access, backups, Alexa and Google Home, and the AI assistant.",
      ],
      link: {
        label: "Best open-source home automation software →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Go further",
      intro: "Compare Gladys with other platforms:",
      links: [
        {
          label: "openHAB alternative",
          href: "/openhab-alternative/",
          text: "Simpler open-source home automation.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "An honest comparison with the most popular platform.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
        },
        {
          label: "All guides",
          href: "/guides/",
          text: "Every guide, tool and comparison in one place.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Open source, local, and modern",
      text: "Gladys is free and installs with a single Docker command. Try it next to Domoticz and see the difference.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Works with Gladys", href: "/works-with/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative à Domoticz : une domotique open source moderne",
      description:
        "Vous cherchez une alternative à Domoticz ? Gladys Assistant est une domotique gratuite et open source avec une interface moderne pensée pour le mobile, des scènes visuelles, Zigbee2MQTT géré, Matter et l'IA. Un comparatif honnête et un plan de migration.",
    },
    screenshotCaption:
      "Gladys : un tableau de bord moderne, pensé pour le mobile, là où Domoticz propose des listes d'appareils et des scripts.",
    hero: {
      title: "Vous cherchez une alternative à Domoticz ?",
      subtitle:
        "Domoticz a fait tourner d'innombrables maisons sur Raspberry Pi. Si vous voulez la même approche open source et locale avec une interface moderne et sans scripts, Gladys Assistant est une suite naturelle.",
      intro: [
        "Domoticz s'est fait un nom en étant léger, stable et compatible avec énormément de matériel, des appareils RFXCOM et 433 MHz au Zigbee et au Z-Wave. Beaucoup de maisons tournent dessus depuis une décennie.",
        "Mais son interface accuse son âge, et tout ce qui dépasse les simples minuteries demande des scripts Lua, dzVents ou Blockly. Gladys Assistant partage les mêmes valeurs, open source, local et léger, avec une interface pensée pour le mobile et des automatisations qui se construisent visuellement.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Essayer la démo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Pourquoi chercher une alternative à Domoticz",
      intro: "Les utilisateurs de Domoticz qui changent évoquent souvent les mêmes points :",
      points: [
        "L'interface web fait datée, surtout sur téléphone.",
        "Les automatisations au-delà des simples minuteries demandent des scripts Lua, dzVents ou Blockly.",
        "Les tableaux de bord pour le reste de la famille demandent du travail.",
        "Sa communauté et son catalogue d'intégrations sont plus petits que ceux de Home Assistant.",
      ],
      outro:
        "Si Domoticz fait encore tout ce dont vous avez besoin, gardez-le. Si vous voulez une expérience plus actuelle sans renoncer à l'open source et au local, lisez la suite.",
    },
    comparison: {
      title: "Gladys Assistant vs Domoticz",
      intro: "Deux plateformes légères, open source et locales :",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Domoticz",
      },
      rows: [
        { feature: "Licence", gladys: "Apache 2.0", other: "GPL v3" },
        { feature: "Technologie", gladys: "Node.js, Docker", other: "C++, natif ou Docker" },
        {
          feature: "Interface",
          gladys: "Tableaux de bord modernes, pensés pour le mobile",
          other: "Interface web classique",
        },
        {
          feature: "Automatisations",
          gladys: "Scènes visuelles, sans code",
          other: "Minuteries, Blockly, scripts Lua, dzVents et Python",
        },
        {
          feature: "Zigbee",
          gladys: "Zigbee2MQTT, installé et géré par Gladys",
          other: "Via Zigbee2MQTT en MQTT, ou des plugins",
        },
        {
          feature: "IA",
          gladys: "Assistant IA avec Gladys Plus, serveur MCP intégré",
          other: "Pas d'IA intégrée",
        },
        {
          feature: "Couverture matérielle",
          gladys: "Les grands protocoles et marques, plus de 90 intégrations communautaires",
          other: "Très large, y compris les anciens appareils 433 MHz et RFXCOM",
        },
      ],
      outro:
        "Domoticz, toujours activement maintenu avec plusieurs versions par an, l'emporte sur la couverture du matériel ancien et la légèreté. Gladys l'emporte sur l'interface, les automatisations sans code, Matter et l'IA.",
    },
    features: {
      title: "Pourquoi Gladys est une bonne alternative à Domoticz",
      intro: "Ce qui change en passant à Gladys :",
      cards: [
        {
          icon: "📱",
          title: "Une interface moderne",
          text: "Des tableaux de bord pensés pour les téléphones et les tablettes murales, utilisables par toute la famille.",
        },
        {
          icon: "🧩",
          title: "Des scènes plutôt que des scripts",
          text: "Déclencheurs, conditions, si/alors/sinon et délais dans un éditeur visuel : plus de Lua ni de dzVents à maintenir.",
        },
        {
          icon: "🐝",
          title: "Zigbee2MQTT géré",
          text: "Gladys installe et relie Zigbee2MQTT et son broker MQTT pour vous.",
        },
        {
          icon: "🔗",
          title: "Matter",
          text: "Gladys est un contrôleur Matter, prête pour la nouvelle génération d'appareils.",
        },
        {
          icon: "🤖",
          title: "L'IA si vous le voulez",
          text: "Parlez à votre maison avec Gladys Plus, ou connectez Claude via le serveur MCP intégré.",
        },
        {
          icon: "🍓",
          title: "Toujours légère",
          text: "Gladys tourne sur un Raspberry Pi, un mini-PC ou un NAS avec Docker.",
        },
      ],
    },
    how: {
      title: "Comment passer de Domoticz à Gladys",
      intro: "Une migration progressive :",
      points: [
        "Installez Gladys sur le même Raspberry Pi ou une autre machine, et listez vos appareils Domoticz par matériel.",
        "Zigbee : passez vos appareils sur le Zigbee2MQTT géré par Gladys (une clé Zigbee ne peut être utilisée que par l'un des deux à la fois).",
        "Z-Wave : lancez Z-Wave JS UI et connectez-y Gladys via MQTT.",
        "Appareils 433 MHz : regardez l'intégration communautaire RFLink ; MQTT peut faire le pont pour le reste.",
        "Recréez vos scripts en scènes Gladys, puis éteignez Domoticz quand tout tourne dans Gladys.",
      ],
      outro:
        "Vérifiez d'abord la page des appareils compatibles : Domoticz prend en charge du matériel ancien que Gladys ne gère pas.",
    },
    solution: {
      title: "Les mêmes valeurs, une expérience plus actuelle",
      paragraphs: [
        "Domoticz et Gladys sont d'accord sur l'essentiel : open source, local, léger. Gladys apporte ce qui manque le plus souvent aux utilisateurs de Domoticz : une interface actuelle, des automatisations sans script, Matter et une IA en option.",
        "Gladys est gratuite. Gladys Plus est un abonnement optionnel pour l'accès distant chiffré, les sauvegardes, Alexa et Google Home, et l'assistant IA.",
      ],
      link: {
        label: "Les meilleurs logiciels domotiques open source →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Comparez Gladys aux autres plateformes :",
      links: [
        {
          label: "Alternative à Jeedom",
          href: "/jeedom-alternative/",
          text: "Pourquoi on passe de Jeedom à Gladys.",
        },
        {
          label: "Alternative à openHAB",
          href: "/openhab-alternative/",
          text: "Une domotique open source plus simple.",
        },
        {
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Du Zigbee local, installé pour vous, avec des tableaux de bord.",
        },
        {
          label: "Tous les guides",
          href: "/guides/",
          text: "Tous les guides, outils et comparatifs au même endroit.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Open source, local, et moderne",
      text: "Gladys est gratuite et s'installe en une seule commande Docker. Essayez-la à côté de Domoticz et voyez la différence.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Appareils compatibles", href: "/works-with/" },
    },
  },
};

export const domoticzAlternativeFaqEn = [
  {
    question: "What is a good alternative to Domoticz?",
    answer:
      "Gladys Assistant is a free, open-source and local platform with a modern mobile interface and visual scenes instead of scripts. Home Assistant and openHAB are other open-source options, more extensive but also more complex.",
  },
  {
    question: "Is Gladys as lightweight as Domoticz?",
    answer:
      "Gladys runs comfortably on a Raspberry Pi 4 or 5, a mini-PC or a NAS with Docker. Domoticz has an even smaller footprint, but Gladys remains light enough for a small, always-on machine.",
  },
  {
    question: "Do I need to write scripts in Gladys?",
    answer:
      "No. Gladys automations are scenes built in a visual editor, with triggers, conditions, if/then/else and delays. There's no Lua or dzVents to write.",
  },
  {
    question: "Can I keep my Zigbee devices when leaving Domoticz?",
    answer:
      "Yes. Zigbee devices can be paired with the Zigbee2MQTT instance Gladys installs and manages. If you already use Zigbee2MQTT with Domoticz, the devices are the same; only one platform can use the dongle at a time.",
  },
  {
    question: "Does Gladys support 433 MHz devices like Domoticz?",
    answer:
      "Partly, through the RFLink community integration. Domoticz has broader support for legacy 433 MHz and RFXCOM hardware, so check your devices before migrating.",
  },
];

export const domoticzAlternativeFaqFr = [
  {
    question: "Quelle est une bonne alternative à Domoticz ?",
    answer:
      "Gladys Assistant est une plateforme gratuite, open source et locale, avec une interface moderne pensée pour le mobile et des scènes visuelles à la place des scripts. Home Assistant et openHAB sont d'autres options open source, plus vastes mais aussi plus complexes.",
  },
  {
    question: "Gladys est-elle aussi légère que Domoticz ?",
    answer:
      "Gladys tourne sans difficulté sur un Raspberry Pi 4 ou 5, un mini-PC ou un NAS avec Docker. Domoticz est encore plus léger, mais Gladys reste assez légère pour une petite machine allumée en permanence.",
  },
  {
    question: "Faut-il écrire des scripts dans Gladys ?",
    answer:
      "Non. Les automatisations de Gladys sont des scènes construites dans un éditeur visuel, avec déclencheurs, conditions, si/alors/sinon et délais. Pas de Lua ni de dzVents à écrire.",
  },
  {
    question: "Puis-je garder mes appareils Zigbee en quittant Domoticz ?",
    answer:
      "Oui. Les appareils Zigbee s'associent au Zigbee2MQTT que Gladys installe et gère. Si vous utilisez déjà Zigbee2MQTT avec Domoticz, ce sont les mêmes appareils ; une seule plateforme peut utiliser la clé à la fois.",
  },
  {
    question: "Gladys gère-t-elle les appareils 433 MHz comme Domoticz ?",
    answer:
      "En partie, via l'intégration communautaire RFLink. Domoticz prend en charge plus largement le matériel 433 MHz ancien et RFXCOM : vérifiez vos appareils avant de migrer.",
  },
];

export default domoticzAlternativeContent;
