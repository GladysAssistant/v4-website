// Content for the "Best mini-PC for home automation" landing page.
// People shop for hardware before software: "best mini pc for home
// assistant", "mini pc home automation", "raspberry pi vs mini pc". The
// recommendation matches the install guide (docs/installation/1_1_mini-pc.md:
// Beelink Mini S13) and the French starter kit (Beelink T5, Mini S12
// with N95, S13 with N150). Prices and power figures are filled from sources
// checked in October 2026 (see MINI_PC_FACTS comments); keep them generic
// ("about") because street prices move.

const miniPcHomeAutomationContent = {
  en: {
    meta: {
      title: "Best Mini-PC for Home Automation (2026 Guide)",
      description:
        "Which mini-PC to run your smart home: Intel N100/N150 vs Raspberry Pi 5 vs a used business mini-PC, how much RAM and storage you need, power draw, and what we run Gladys Assistant on.",
    },
    screenshotCaption:
      "Gladys running on a small mini-PC: dashboards, scenes and history for the whole home.",
    hero: {
      title: "The best mini-PC for home automation",
      subtitle:
        "A small, quiet, always-on computer is the best home for your smart home software. Here's what to buy, and what you actually need.",
      intro: [
        "Self-hosted smart home platforms, Gladys Assistant, Home Assistant or openHAB, all run on a small computer that stays on 24/7. For years the default was a Raspberry Pi. Today, small Intel mini-PCs are usually the better buy: faster, with real SSD storage and Ethernet, often for a similar total price.",
        "This guide explains what matters, which models to look at, and when a Raspberry Pi or a used office mini-PC is still the right call.",
      ],
      primaryCta: {
        label: "Install Gladys on a mini-PC",
        href: "/docs/installation/mini-pc/",
      },
      secondaryCta: {
        label: "Recommended hardware →",
        href: "/docs/installation/recommended-hardware/",
      },
    },
    problem: {
      title: "What actually matters",
      intro: "For a home automation server, ignore gaming specs. Look at:",
      points: [
        "CPU: a recent low-power Intel chip (N100, N150 or similar) is more than enough for Gladys, Zigbee2MQTT and a few cameras.",
        "RAM: 8 GB is comfortable, 16 GB gives headroom for other self-hosted apps.",
        "Storage: an SSD (256 GB or more), not an SD card. SD cards wear out with a database writing all day.",
        "Ethernet: a wired connection is more reliable than Wi-Fi for a server.",
        "Power draw: it runs 24/7, so a low idle consumption matters more than peak performance.",
        "USB ports: for your Zigbee or Z-Wave dongle, ideally on a short USB 2.0 extension cable.",
      ],
      outro:
        "Any recent entry-level mini-PC ticks every box. The rest is budget and taste.",
    },
    comparison: {
      title: "Mini-PC vs Raspberry Pi 5",
      intro: "The two most common choices, side by side:",
      cols: {
        feature: "",
        gladys: "Intel N100/N150 mini-PC",
        other: "Raspberry Pi 5",
      },
      rows: [
        { feature: "Ready to use", gladys: "Case, power supply and SSD included", other: "Add a case, power supply and storage" },
        { feature: "Storage", gladys: "Internal SSD", other: "SD card by default; an NVMe SSD needs an extra board" },
        { feature: "Performance", gladys: "Higher, x86", other: "Good, ARM" },
        { feature: "Power draw", gladys: "Low", other: "Very low" },
        { feature: "Software compatibility", gladys: "Any x86 Docker image", other: "ARM64 images only (Gladys supports both)" },
        { feature: "Best for", gladys: "A main home server that will grow", other: "A small, frugal setup, or reusing a Pi you already own" },
      ],
      outro:
        "Once you add a case, power supply and SSD to a Raspberry Pi 5, the total price is often close to an entry-level mini-PC that comes complete.",
    },
    features: {
      title: "What we recommend",
      intro: "The machines we use and see working well with Gladys:",
      cards: [
        {
          icon: "🥇",
          title: "Beelink Mini S13 (Intel N150)",
          text: "What we recommend in the install guide: quiet, efficient, and fast enough to run Gladys and more for years.",
        },
        {
          icon: "💰",
          title: "Intel N100 / N95 mini-PCs",
          text: "Slightly older chips, often cheaper, still more than enough for a smart home.",
        },
        {
          icon: "♻️",
          title: "Used business mini-PCs",
          text: "Lenovo ThinkCentre Tiny, Dell OptiPlex Micro or HP EliteDesk Mini: robust, cheap second-hand, a bit less frugal.",
        },
        {
          icon: "🍓",
          title: "Raspberry Pi 5",
          text: "Still a good option for a small setup, ideally with an SSD rather than an SD card.",
        },
        {
          icon: "🗄️",
          title: "Your NAS",
          text: "Already have a Synology or Unraid server running Docker? Gladys runs there too.",
        },
        {
          icon: "💻",
          title: "What you already own",
          text: "An old laptop with a working battery makes a decent server: it even has a built-in UPS.",
        },
      ],
    },
    how: {
      title: "From box to smart home",
      intro: "Once you have the machine:",
      points: [
        "Plug it into your router with an Ethernet cable.",
        "Install Ubuntu Server, with the OpenSSH server option checked.",
        "Install Docker and start Gladys with a single command.",
        "Plug in your Zigbee dongle on a short USB 2.0 extension cable, and enable Zigbee2MQTT in Gladys.",
        "Open Gladys from your phone or computer and add your devices.",
      ],
      outro:
        "The step-by-step installation guide covers each step, with a video.",
    },
    solution: {
      title: "Small hardware, big smart home",
      paragraphs: [
        "A mini-PC that costs about as much as a smart speaker can run your whole home locally: dashboards, automations, history, cameras, energy monitoring, and AI if you want it. It sips power, makes no noise, and doesn't depend on any cloud.",
        "Gladys is free and open source, and runs on any of these machines with Docker.",
      ],
      link: {
        label: "Home Assistant Green alternative →",
        href: "/home-assistant-green-alternative/",
      },
    },
    related: {
      title: "Go further",
      intro: "Complete your setup:",
      links: [
        { label: "Best Zigbee USB dongle", href: "/best-zigbee-dongle/", text: "Which Zigbee coordinator to plug into your mini-PC." },
        { label: "Best smart home hub", href: "/best-smart-home-hub/", text: "Mini-PC, Hubitat, Homey, SmartThings: which hub to choose." },
        { label: "Home Assistant Green alternative", href: "/home-assistant-green-alternative/", text: "Your own local hub on a mini-PC." },
        { label: "All guides", href: "/guides/", text: "Every guide, tool and comparison in one place." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Turn a mini-PC into your smart home hub",
      text: "Gladys is free, open source and installs with a single Docker command on any of these machines.",
      primary: { label: "Install Gladys", href: "/docs/installation/mini-pc/" },
      secondary: { label: "Recommended hardware", href: "/docs/installation/recommended-hardware/" },
    },
  },

  fr: {
    meta: {
      title: "Quel mini-PC pour la domotique ? Le guide 2026",
      description:
        "Quel mini-PC pour faire tourner sa maison connectée : Intel N100/N150, Raspberry Pi 5 ou mini-PC d'occasion, combien de RAM et de stockage, consommation électrique, et sur quoi nous faisons tourner Gladys Assistant.",
    },
    screenshotCaption:
      "Gladys sur un petit mini-PC : tableaux de bord, scènes et historique pour toute la maison.",
    hero: {
      title: "Quel mini-PC pour la domotique ?",
      subtitle:
        "Un petit ordinateur silencieux, allumé en permanence, est le meilleur endroit pour votre logiciel domotique. Voici quoi acheter, et ce dont vous avez vraiment besoin.",
      intro: [
        "Les plateformes domotiques auto-hébergées, Gladys Assistant, Home Assistant ou Jeedom, tournent toutes sur un petit ordinateur allumé 24 h/24. Pendant des années, le choix par défaut était le Raspberry Pi. Aujourd'hui, les petits mini-PC Intel sont généralement un meilleur achat : plus rapides, avec un vrai SSD et l'Ethernet, souvent pour un prix total proche.",
        "Ce guide explique ce qui compte, quels modèles regarder, et quand un Raspberry Pi ou un mini-PC de bureau d'occasion reste le bon choix.",
      ],
      primaryCta: {
        label: "Installer Gladys sur un mini-PC",
        href: "/docs/installation/mini-pc/",
      },
      secondaryCta: {
        label: "Le kit de démarrage prêt à l'emploi →",
        href: "/starter-kit/",
      },
    },
    problem: {
      title: "Ce qui compte vraiment",
      intro: "Pour un serveur domotique, oubliez les fiches techniques de joueurs. Regardez :",
      points: [
        "Le processeur : une puce Intel basse consommation récente (N100, N150 ou équivalent) suffit largement pour Gladys, Zigbee2MQTT et quelques caméras.",
        "La RAM : 8 Go c'est confortable, 16 Go laissent de la marge pour d'autres applications auto-hébergées.",
        "Le stockage : un SSD (256 Go ou plus), pas une carte SD. Les cartes SD s'usent avec une base de données qui écrit toute la journée.",
        "L'Ethernet : une connexion filaire est plus fiable que le Wi-Fi pour un serveur.",
        "La consommation : il tourne 24 h/24, la consommation au repos compte plus que la puissance maximale.",
        "Les ports USB : pour votre clé Zigbee ou Z-Wave, idéalement sur une courte rallonge USB 2.0.",
      ],
      outro:
        "N'importe quel mini-PC d'entrée de gamme récent coche toutes les cases. Le reste, c'est une question de budget et de goût.",
    },
    comparison: {
      title: "Mini-PC vs Raspberry Pi 5",
      intro: "Les deux choix les plus courants, côte à côte :",
      cols: {
        feature: "",
        gladys: "Mini-PC Intel N100/N150",
        other: "Raspberry Pi 5",
      },
      rows: [
        { feature: "Prêt à l'emploi", gladys: "Boîtier, alimentation et SSD inclus", other: "Boîtier, alimentation et stockage à ajouter" },
        { feature: "Stockage", gladys: "SSD interne", other: "Carte SD par défaut ; un SSD NVMe demande une carte d'extension" },
        { feature: "Performances", gladys: "Supérieures, x86", other: "Bonnes, ARM" },
        { feature: "Consommation", gladys: "Faible", other: "Très faible" },
        { feature: "Compatibilité logicielle", gladys: "Toute image Docker x86", other: "Images ARM64 uniquement (Gladys prend en charge les deux)" },
        { feature: "Idéal pour", gladys: "Un serveur principal qui va évoluer", other: "Une petite installation sobre, ou réutiliser un Pi existant" },
      ],
      outro:
        "Une fois le boîtier, l'alimentation et le SSD ajoutés à un Raspberry Pi 5, le prix total est souvent proche d'un mini-PC d'entrée de gamme livré complet.",
    },
    features: {
      title: "Ce que nous recommandons",
      intro: "Les machines que nous utilisons et que nous voyons bien fonctionner avec Gladys :",
      cards: [
        {
          icon: "🥇",
          title: "Beelink Mini S13 (Intel N150)",
          text: "Celui que nous recommandons dans le guide d'installation : silencieux, sobre, et assez rapide pour faire tourner Gladys et plus pendant des années.",
        },
        {
          icon: "💰",
          title: "Mini-PC Intel N100 / N95",
          text: "Des puces un peu plus anciennes, souvent moins chères, toujours largement suffisantes pour une maison connectée.",
        },
        {
          icon: "♻️",
          title: "Mini-PC de bureau d'occasion",
          text: "Lenovo ThinkCentre Tiny, Dell OptiPlex Micro ou HP EliteDesk Mini : robustes, peu chers d'occasion, un peu moins sobres.",
        },
        {
          icon: "🍓",
          title: "Raspberry Pi 5",
          text: "Toujours une bonne option pour une petite installation, idéalement avec un SSD plutôt qu'une carte SD.",
        },
        {
          icon: "🗄️",
          title: "Votre NAS",
          text: "Vous avez déjà un Synology ou un serveur Unraid avec Docker ? Gladys y tourne aussi.",
        },
        {
          icon: "📦",
          title: "Le kit de démarrage officiel",
          text: "Un mini-PC Beelink avec Gladys installée et testée à la main, 6 mois de Gladys Plus, la formation vidéo et mon support : prêt dès la sortie du carton.",
        },
      ],
    },
    how: {
      title: "Du carton à la maison connectée",
      intro: "Une fois la machine en main :",
      points: [
        "Branchez-la à votre box avec un câble Ethernet.",
        "Installez Ubuntu Server, en cochant l'option OpenSSH server.",
        "Installez Docker et lancez Gladys en une seule commande.",
        "Branchez votre clé Zigbee sur une courte rallonge USB 2.0, et activez Zigbee2MQTT dans Gladys.",
        "Ouvrez Gladys depuis votre téléphone ou votre ordinateur et ajoutez vos appareils.",
      ],
      outro:
        "Le guide d'installation pas à pas couvre chaque étape, avec une vidéo. Ou prenez le kit de démarrage : tout est déjà fait.",
    },
    solution: {
      title: "Un petit matériel, une grande maison connectée",
      paragraphs: [
        "Un mini-PC qui coûte à peu près le prix d'une enceinte connectée peut faire tourner toute votre maison en local : tableaux de bord, automatisations, historique, caméras, suivi d'énergie, et IA si vous le souhaitez. Il consomme peu, ne fait pas de bruit et ne dépend d'aucun cloud.",
        "Gladys est gratuite et open source, et tourne sur toutes ces machines avec Docker.",
      ],
      link: {
        label: "Découvrir le kit de démarrage →",
        href: "/starter-kit/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Complétez votre installation :",
      links: [
        { label: "Quelle clé Zigbee choisir", href: "/best-zigbee-dongle/", text: "Quel coordinateur Zigbee brancher sur votre mini-PC." },
        { label: "Quelle box domotique choisir", href: "/best-smart-home-hub/", text: "Mini-PC, Jeedom, Homey, Home Assistant Green : laquelle choisir." },
        { label: "Kit de démarrage", href: "/starter-kit/", text: "Un mini-PC avec Gladys préinstallée, prêt à l'emploi." },
        { label: "Tous les guides", href: "/guides/", text: "Tous les guides, outils et comparatifs au même endroit." },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Transformez un mini-PC en box domotique",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker sur toutes ces machines. Ou prenez le kit de démarrage, prêt à l'emploi.",
      primary: { label: "Installer Gladys", href: "/docs/installation/mini-pc/" },
      secondary: { label: "Kit de démarrage", href: "/starter-kit/" },
    },
  },
};

export const miniPcHomeAutomationFaqEn = [];
export const miniPcHomeAutomationFaqFr = [];

export default miniPcHomeAutomationContent;
