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

export const miniPcHomeAutomationFaqEn = [
  {
    question: "Raspberry Pi 5 or mini-PC for home automation in 2026?",
    answer:
      "For most people, a mini-PC. Memory costs pushed Raspberry Pi 5 prices up several times: since April 2026 the 8 GB model lists at $175, before a case, power supply and SSD. An Intel N150 mini-PC with 16 GB of RAM and a 500 GB SSD sells for about $190 to $200, complete. A Pi you already own is still perfectly fine.",
  },
  {
    question: "How much power does a home automation mini-PC use?",
    answer:
      "An Intel N100 or N150 mini-PC running Linux typically idles around 6 to 10 W, or roughly 50 to 90 kWh a year. Used office mini-PCs with older Core i5 chips usually idle around 15 to 25 W. A Home Assistant Green-style ARM box idles below 2 W.",
  },
  {
    question: "How much RAM and storage do I need?",
    answer:
      "8 GB of RAM and a 256 GB SSD are plenty for Gladys, Zigbee2MQTT and a few cameras. 16 GB and 500 GB give room for other self-hosted apps. Avoid SD cards for a server that writes to a database all day.",
  },
  {
    question: "Which mini-PC do you recommend for Gladys?",
    answer:
      "We recommend the Beelink Mini S13 (Intel N150) in our installation guide. Any recent Intel N100 or N150 mini-PC with 8 to 16 GB of RAM, an SSD and Ethernet works just as well.",
  },
  {
    question: "Is a used office mini-PC a good idea?",
    answer:
      "Yes, if you find one at a good price: Lenovo ThinkCentre Tiny, Dell OptiPlex Micro and HP EliteDesk Mini are robust and powerful. They draw more power at idle than a new N100/N150 machine, which adds up over years of 24/7 use.",
  },
];

export const miniPcHomeAutomationFaqFr = [
  {
    question: "Raspberry Pi 5 ou mini-PC pour la domotique en 2026 ?",
    answer:
      "Pour la plupart des gens, un mini-PC. Le coût de la mémoire a fait grimper le prix du Raspberry Pi 5 plusieurs fois : depuis avril 2026, le modèle 8 Go est affiché à 175 $ aux États-Unis, sans boîtier, alimentation ni SSD. Aux États-Unis toujours, un mini-PC Intel N150 avec 16 Go de RAM et un SSD de 500 Go se trouve autour de 190 à 200 $, complet. Un Pi que vous avez déjà reste parfaitement utilisable.",
  },
  {
    question: "Combien consomme un mini-PC domotique ?",
    answer:
      "Un mini-PC Intel N100 ou N150 sous Linux consomme généralement autour de 6 à 10 W au repos, soit environ 50 à 90 kWh par an. Les mini-PC de bureau d'occasion avec d'anciens Core i5 tournent plutôt autour de 15 à 25 W. Une box ARM comme le Home Assistant Green descend sous les 2 W.",
  },
  {
    question: "Combien de RAM et de stockage faut-il ?",
    answer:
      "8 Go de RAM et un SSD de 256 Go suffisent largement pour Gladys, Zigbee2MQTT et quelques caméras. 16 Go et 500 Go laissent de la place pour d'autres applications auto-hébergées. Évitez les cartes SD pour un serveur qui écrit dans une base de données toute la journée.",
  },
  {
    question: "Quel mini-PC recommandez-vous pour Gladys ?",
    answer:
      "Nous recommandons le Beelink Mini S13 (Intel N150) dans notre guide d'installation. N'importe quel mini-PC Intel N100 ou N150 récent avec 8 à 16 Go de RAM, un SSD et l'Ethernet fonctionne tout aussi bien. Et si vous ne voulez rien installer, le kit de démarrage est livré avec Gladys prête à l'emploi.",
  },
  {
    question: "Un mini-PC de bureau d'occasion, bonne idée ?",
    answer:
      "Oui, si vous le trouvez à bon prix : les Lenovo ThinkCentre Tiny, Dell OptiPlex Micro et HP EliteDesk Mini sont robustes et puissants. Ils consomment plus au repos qu'un N100/N150 neuf, ce qui finit par compter sur des années de fonctionnement 24 h/24.",
  },
];

export default miniPcHomeAutomationContent;
