// Content for the "best Zigbee dongle" buyer's-guide landing page.
// Targets the high-volume "best zigbee dongle / zigbee usb dongle / raspberry
// pi zigbee dongle / clé zigbee / dongle zigbee" search cluster (Search
// Console: ~10k impressions at position 10-30), which the existing
// zigbee2mqtt how-to doc doesn't serve well. This page is a purchase-intent
// guide that recommends real, Zigbee2MQTT-compatible coordinators and links
// out to the integration doc for the how-to.

// Amazon affiliate links (Gladys is an Amazon Associate).
// Tags: gladproj-20 on amazon.com (EN), gladproj-21 on amazon.fr (FR).
// We use the exact product link where we have a verified ASIN (the Sonoff
// ZBDongle-E on amazon.fr), and affiliate-tagged search links keyed to the
// precise product name otherwise, so every link is valid, lands on the right
// marketplace and carries the affiliate tag.
const amazonUS = (query) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=gladproj-20`;
const amazonFR = (query) =>
  `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=gladproj-21`;

// Verified product ASIN (Sonoff ZBDongle-E) on amazon.fr.
const SONOFF_E_FR = "https://www.amazon.fr/dp/B0B6P22YJC?tag=gladproj-21";

const bestZigbeeDongleContent = {
  en: {
    meta: {
      title: "Best Zigbee USB dongle for Raspberry Pi & Zigbee2MQTT (2026)",
      description:
        "Which Zigbee USB dongle should you buy? A practical 2026 buyer's guide to the best Zigbee coordinators for Raspberry Pi, Zigbee2MQTT and Gladys Assistant: Sonoff, SMLIGHT, ConBee and more.",
    },
    hero: {
      title: "The best Zigbee USB dongle for your smart home",
      subtitle:
        "Which Zigbee coordinator to buy for a Raspberry Pi, NAS or mini-PC, to run a local, brand-agnostic Zigbee network with Zigbee2MQTT and Gladys.",
      intro: [
        "A Zigbee USB dongle (also called a Zigbee coordinator) is the piece of hardware that lets your computer talk to Zigbee devices: motion sensors, door/window contacts, smart plugs, bulbs and more. Plug it into your Raspberry Pi and, with Zigbee2MQTT, you control hundreds of devices locally, without any manufacturer hub or cloud.",
        "But not all dongles are equal: the chipset, the antenna and how you connect it make a real difference in range and reliability. This guide explains what to look for and recommends the coordinators that work best with Zigbee2MQTT and Gladys Assistant in 2026.",
      ],
      primaryCta: { label: "How to connect Zigbee to Gladys", href: "/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    criteria: {
      title: "What to look for when choosing a Zigbee dongle",
      intro:
        "Before you buy, a few things matter far more than the price tag:",
      points: [
        "Chipset: prefer a modern coordinator based on Texas Instruments (CC2652) or Silicon Labs (EFR32 / EmberZNet). Both are first-class citizens in Zigbee2MQTT. Avoid old CC2531 sticks, which are underpowered for today's networks.",
        "External antenna: a dongle with an external antenna noticeably improves range and the stability of your mesh.",
        "USB vs network: a USB stick is the simplest option, but a network coordinator (Ethernet or PoE) lets you place it anywhere in the home, away from interference, which often matters more than the model itself.",
        "Always use a USB extension cable: plug the dongle on a short extension (around 1 m) and keep it away from your Raspberry Pi, SSDs and USB 3.0 ports, which cause 2.4 GHz interference. This is the single most common fix for an unreliable Zigbee network.",
        "Zigbee 3.0 and updatable firmware: make sure the coordinator supports Zigbee 3.0 and that you can flash its firmware for the best long-term support.",
      ],
      outro:
        "The good news: Gladys lets you pick your exact coordinator model in the interface, so any of the dongles below will work out of the box.",
    },
    dongles: {
      title: "Our recommended Zigbee dongles",
      intro:
        "All of these are supported by Zigbee2MQTT and selectable as a coordinator in Gladys:",
      items: [
        {
          name: "Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)",
          tag: "Best value",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-e.png",
          imageAlt: "Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E",
          text: "The affordable dongle we tested with Gladys, based on a Silicon Labs EFR32MG21 (EmberZNet) chip, with an external antenna. Tip: update its EmberZNet firmware for the best stability.",
          href: amazonUS("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E"),
          linkLabel: "View on Amazon →",
        },
        {
          name: "Sonoff ZBDongle-P",
          tag: "Most proven",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-p.jpeg",
          imageAlt: "Sonoff ZBDongle-P Zigbee USB dongle",
          text: "The Texas Instruments CC2652P version, trusted for years in the Zigbee2MQTT community. Rock-solid, well-documented and budget-friendly.",
          href: amazonUS("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P CC2652P"),
          linkLabel: "View on Amazon →",
        },
        {
          name: "SMLIGHT SLZB-06",
          tag: "Best range & placement",
          image: "/img/external/zigbee-dongles/smlight-slzb-06.jpg",
          imageAlt: "SMLIGHT SLZB-06 Ethernet Zigbee coordinator",
          text: "A network coordinator that connects over Ethernet or PoE instead of USB, so you can place it centrally in your home for the best Zigbee range, far from interference. Supported by Gladys since 4.81.",
          href: amazonUS("SMLIGHT SLZB-06 Zigbee coordinator"),
          linkLabel: "View on Amazon →",
        },
        {
          name: "ConBee II (Dresden Elektronik)",
          tag: "Premium USB",
          image: "/img/external/zigbee-dongles/conbee-ii.jpg",
          imageAlt: "ConBee II Zigbee USB stick by Dresden Elektronik",
          text: "A premium, widely-supported USB coordinator with strong range and a long track record. A great choice if you want a polished, well-supported stick.",
          href: amazonUS("ConBee II Zigbee USB stick"),
          linkLabel: "View on Amazon →",
        },
        {
          name: "Home Assistant Connect ZBT-1",
          tag: "Multiprotocol hardware",
          image: "/img/external/zigbee-dongles/connect-zbt-1.jpg",
          imageAlt: "Home Assistant Connect ZBT-1 Zigbee USB dongle",
          text: "Nabu Casa's Silicon Labs-based coordinator (formerly SkyConnect). It works great with Zigbee2MQTT and is a supported coordinator type in Gladys.",
          href: amazonUS("Home Assistant Connect ZBT-1"),
          linkLabel: "View on Amazon →",
        },
      ],
      outro:
        "The full, always up-to-date list of compatible coordinators is on the Zigbee2MQTT supported adapters page.",
    },
    gladys: {
      title: "How it works with Gladys Assistant",
      paragraphs: [
        "With Gladys, you don't need a proprietary Zigbee hub. Plug your dongle into your Raspberry Pi, NAS or mini-PC, open the Zigbee2MQTT integration, and select your coordinator model from the list.",
        "Gladys then automatically installs and configures the MQTT and Zigbee2MQTT containers for you, no manual setup, no third-party bridge. From there you pair your Zigbee devices and control them entirely locally, mixing brands freely.",
      ],
      link: { label: "Read the Zigbee2MQTT setup guide →", href: "/docs/integrations/zigbee2mqtt/" },
    },
    related: {
      title: "Go further",
      intro:
        "Setting up your local Zigbee network is part of a bigger picture:",
      links: [
        {
          label: "Connect Zigbee devices to Gladys",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "The step-by-step guide to setting up your dongle with Zigbee2MQTT.",
        },
        {
          label: "Zigbee vs Matter vs Z-Wave",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Which wireless standard to choose for your smart home devices.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
        {
          label: "Open-source home automation",
          href: "/open-source-home-automation/",
          text: "Run your smart home on free, self-hosted software you can trust and keep.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Build your local Zigbee network",
      text: "Gladys is free, open-source, and installs in a single Docker command. Plug in a dongle and control your Zigbee devices locally, no hub required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Set up Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
    },
  },

  fr: {
    meta: {
      title: "Quelle clé Zigbee USB choisir pour le Raspberry Pi et Zigbee2MQTT (2026)",
      description:
        "Quelle clé Zigbee USB acheter ? Un guide d'achat 2026 des meilleurs coordinateurs Zigbee pour Raspberry Pi, Zigbee2MQTT et Gladys Assistant : Sonoff, SMLIGHT, ConBee et plus.",
    },
    hero: {
      title: "Quelle clé Zigbee USB choisir ?",
      subtitle:
        "Quel coordinateur Zigbee acheter pour un Raspberry Pi, un NAS ou un mini-PC, afin de monter un réseau Zigbee local et multimarque avec Zigbee2MQTT et Gladys.",
      intro: [
        "Une clé Zigbee USB (aussi appelée coordinateur Zigbee, ou dongle) est le matériel qui permet à votre ordinateur de dialoguer avec vos appareils Zigbee : détecteurs de mouvement, contacts de porte/fenêtre, prises connectées, ampoules, etc. Branchez-la sur votre Raspberry Pi et, avec Zigbee2MQTT, vous pilotez des centaines d'appareils en local, sans aucune box de fabricant ni cloud.",
        "Mais toutes les clés ne se valent pas : la puce, l'antenne et la façon de la brancher changent vraiment la portée et la fiabilité. Ce guide explique ce qu'il faut regarder et recommande les coordinateurs qui fonctionnent le mieux avec Zigbee2MQTT et Gladys Assistant en 2026.",
      ],
      primaryCta: { label: "Connecter le Zigbee à Gladys", href: "/fr/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/fr/docs/",
      },
    },
    criteria: {
      title: "Ce qu'il faut regarder pour choisir une clé Zigbee",
      intro:
        "Avant d'acheter, quelques points comptent bien plus que le prix :",
      points: [
        "La puce : privilégiez un coordinateur moderne à base de Texas Instruments (CC2652) ou Silicon Labs (EFR32 / EmberZNet). Les deux sont parfaitement pris en charge par Zigbee2MQTT. Évitez les vieilles clés CC2531, sous-dimensionnées pour les réseaux d'aujourd'hui.",
        "L'antenne externe : une clé avec antenne externe améliore nettement la portée et la stabilité de votre maillage.",
        "USB ou réseau : une clé USB est l'option la plus simple, mais un coordinateur réseau (Ethernet ou PoE) permet de le placer n'importe où dans la maison, loin des interférences, ce qui compte souvent plus que le modèle lui-même.",
        "Utilisez toujours une rallonge USB : branchez la clé sur une courte rallonge (environ 1 m) et éloignez-la de votre Raspberry Pi, de vos SSD et des ports USB 3.0, qui provoquent des interférences à 2,4 GHz. C'est de loin le correctif le plus fréquent d'un réseau Zigbee instable.",
        "Zigbee 3.0 et firmware à jour : assurez-vous que le coordinateur supporte le Zigbee 3.0 et que vous pouvez flasher son firmware pour le meilleur suivi dans le temps.",
      ],
      outro:
        "Bonne nouvelle : Gladys vous laisse choisir le modèle exact de votre coordinateur dans l'interface, donc n'importe laquelle des clés ci-dessous fonctionne directement.",
    },
    dongles: {
      title: "Nos clés Zigbee recommandées",
      intro:
        "Toutes sont prises en charge par Zigbee2MQTT et sélectionnables comme coordinateur dans Gladys :",
      items: [
        {
          name: "Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)",
          tag: "Meilleur rapport qualité/prix",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-e.png",
          imageAlt: "Clé Zigbee Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E",
          text: "La clé abordable que nous avons testée avec Gladys, basée sur une puce Silicon Labs EFR32MG21 (EmberZNet), avec antenne externe. Conseil : mettez à jour son firmware EmberZNet pour une stabilité optimale.",
          href: SONOFF_E_FR,
          linkLabel: "Voir sur Amazon →",
        },
        {
          name: "Sonoff ZBDongle-P",
          tag: "La plus éprouvée",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-p.jpeg",
          imageAlt: "Clé Zigbee Sonoff ZBDongle-P",
          text: "La version Texas Instruments CC2652P, plébiscitée depuis des années par la communauté Zigbee2MQTT. Fiable, bien documentée et économique.",
          href: amazonFR("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P CC2652P"),
          linkLabel: "Voir sur Amazon →",
        },
        {
          name: "SMLIGHT SLZB-06",
          tag: "Meilleure portée & placement",
          image: "/img/external/zigbee-dongles/smlight-slzb-06.jpg",
          imageAlt: "Coordinateur Zigbee Ethernet SMLIGHT SLZB-06",
          text: "Un coordinateur réseau qui se connecte en Ethernet ou PoE plutôt qu'en USB : vous pouvez le placer au centre de la maison pour une portée Zigbee optimale, loin des interférences. Pris en charge par Gladys depuis la 4.81.",
          href: amazonFR("SMLIGHT SLZB-06 coordinateur Zigbee"),
          linkLabel: "Voir sur Amazon →",
        },
        {
          name: "ConBee II (Dresden Elektronik)",
          tag: "USB premium",
          image: "/img/external/zigbee-dongles/conbee-ii.jpg",
          imageAlt: "Clé USB Zigbee ConBee II de Dresden Elektronik",
          text: "Un coordinateur USB premium très bien pris en charge, avec une bonne portée et une longue réputation. Un excellent choix pour une clé soignée et bien suivie.",
          href: amazonFR("ConBee II clé USB Zigbee"),
          linkLabel: "Voir sur Amazon →",
        },
        {
          name: "Home Assistant Connect ZBT-1",
          tag: "Matériel multiprotocole",
          image: "/img/external/zigbee-dongles/connect-zbt-1.jpg",
          imageAlt: "Clé Zigbee Home Assistant Connect ZBT-1",
          text: "Le coordinateur de Nabu Casa à base Silicon Labs (anciennement SkyConnect). Il fonctionne très bien avec Zigbee2MQTT et fait partie des coordinateurs pris en charge par Gladys.",
          href: amazonFR("Home Assistant Connect ZBT-1"),
          linkLabel: "Voir sur Amazon →",
        },
      ],
      outro:
        "La liste complète et toujours à jour des coordinateurs compatibles se trouve sur la page des adaptateurs pris en charge par Zigbee2MQTT.",
    },
    gladys: {
      title: "Comment ça marche avec Gladys Assistant",
      paragraphs: [
        "Avec Gladys, pas besoin de box Zigbee propriétaire. Branchez votre clé sur votre Raspberry Pi, votre NAS ou votre mini-PC, ouvrez l'intégration Zigbee2MQTT, et sélectionnez le modèle de votre coordinateur dans la liste.",
        "Gladys installe et configure alors automatiquement les conteneurs MQTT et Zigbee2MQTT à votre place : aucune configuration manuelle, aucun pont tiers. Vous appairez ensuite vos appareils Zigbee et les pilotez entièrement en local, en mélangeant les marques librement.",
      ],
      link: { label: "Lire le guide d'installation Zigbee2MQTT →", href: "/fr/docs/integrations/zigbee2mqtt/" },
    },
    related: {
      title: "Aller plus loin",
      intro:
        "Monter votre réseau Zigbee local s'inscrit dans un tableau plus large :",
      links: [
        {
          label: "Connecter des appareils Zigbee à Gladys",
          href: "/fr/docs/integrations/zigbee2mqtt/",
          text: "Le guide pas à pas pour configurer votre clé avec Zigbee2MQTT.",
        },
        {
          label: "Zigbee vs Matter vs Z-Wave",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Quel standard sans fil choisir pour les appareils de votre maison connectée.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord est important et comment bâtir une maison sans le cloud.",
        },
        {
          label: "La domotique open source",
          href: "/open-source-home-automation/",
          text: "Piloter sa maison avec un logiciel libre et auto-hébergé que vous gardez.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Montez votre réseau Zigbee local",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Branchez une clé et pilotez vos appareils Zigbee en local, sans box.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: { label: "Découvrir le kit de démarrage", href: "/fr/starter-kit/" },
    },
  },
};

export const bestZigbeeDongleFaqEn = [
  {
    question: "Which Zigbee dongle works best with Gladys and Zigbee2MQTT?",
    answer:
      "Any modern Zigbee 3.0 coordinator based on a Texas Instruments (CC2652) or Silicon Labs (EFR32 / EmberZNet) chip works well. Popular choices are the Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E and ZBDongle-P), the SMLIGHT SLZB-06, the ConBee II and the Home Assistant Connect ZBT-1. Gladys lets you select your exact model in the Zigbee2MQTT integration.",
  },
  {
    question: "What is the best Zigbee dongle for a Raspberry Pi?",
    answer:
      "The Sonoff Zigbee 3.0 USB Dongle Plus is an excellent, affordable choice for a Raspberry Pi and is the one we tested with Gladys. Whatever you pick, always connect it with a short USB extension cable to keep it away from the Pi and its USB 3.0 ports, which cause 2.4 GHz interference.",
  },
  {
    question: "What's the difference between the Sonoff ZBDongle-E and ZBDongle-P?",
    answer:
      "The ZBDongle-P uses a Texas Instruments CC2652P chip and has been the long-trusted choice in the Zigbee2MQTT community. The ZBDongle-E uses a Silicon Labs EFR32MG21 (EmberZNet) chip and is newer, with hardware that can also target Matter and Thread ecosystems. Both work well with Zigbee2MQTT and Gladys.",
  },
  {
    question: "Do I really need a USB extension cable?",
    answer:
      "Yes, it's strongly recommended. Plugging the dongle directly into a Raspberry Pi or near SSDs and USB 3.0 ports is the most common cause of dropped Zigbee devices and poor range. A short (around 1 m) USB extension cable that moves the dongle away from those sources is the single most effective fix.",
  },
  {
    question: "Can I use a Zigbee coordinator over Ethernet instead of USB?",
    answer:
      "Yes. Network coordinators such as the SMLIGHT SLZB-06 connect over Ethernet or PoE instead of USB. This lets you place the coordinator centrally in your home, away from interference, which often improves range and reliability more than changing the dongle model.",
  },
  {
    question: "Do I need a Zigbee hub or bridge with Gladys?",
    answer:
      "No. A USB Zigbee dongle plus Zigbee2MQTT replaces any proprietary hub. Gladys installs and configures Zigbee2MQTT for you, so your Zigbee devices are controlled directly and entirely locally, with no manufacturer bridge or cloud account.",
  },
];

export const bestZigbeeDongleFaqFr = [
  {
    question: "Quelle clé Zigbee fonctionne le mieux avec Gladys et Zigbee2MQTT ?",
    answer:
      "N'importe quel coordinateur Zigbee 3.0 moderne basé sur une puce Texas Instruments (CC2652) ou Silicon Labs (EFR32 / EmberZNet) fonctionne bien. Les choix populaires sont la Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E et ZBDongle-P), la SMLIGHT SLZB-06, la ConBee II et la Home Assistant Connect ZBT-1. Gladys vous laisse sélectionner votre modèle exact dans l'intégration Zigbee2MQTT.",
  },
  {
    question: "Quelle est la meilleure clé Zigbee pour un Raspberry Pi ?",
    answer:
      "La Sonoff Zigbee 3.0 USB Dongle Plus est un excellent choix abordable pour un Raspberry Pi, et c'est celle que nous avons testée avec Gladys. Quel que soit votre choix, branchez-la toujours via une courte rallonge USB pour l'éloigner du Pi et de ses ports USB 3.0, qui provoquent des interférences à 2,4 GHz.",
  },
  {
    question: "Quelle différence entre la Sonoff ZBDongle-E et la ZBDongle-P ?",
    answer:
      "La ZBDongle-P utilise une puce Texas Instruments CC2652P et reste le choix éprouvé de longue date dans la communauté Zigbee2MQTT. La ZBDongle-E utilise une puce Silicon Labs EFR32MG21 (EmberZNet), plus récente, dont le matériel peut aussi viser les écosystèmes Matter et Thread. Les deux fonctionnent bien avec Zigbee2MQTT et Gladys.",
  },
  {
    question: "Ai-je vraiment besoin d'une rallonge USB ?",
    answer:
      "Oui, c'est fortement recommandé. Brancher la clé directement sur un Raspberry Pi ou près de SSD et de ports USB 3.0 est la cause la plus fréquente d'appareils Zigbee qui décrochent et d'une mauvaise portée. Une courte rallonge USB (environ 1 m) qui éloigne la clé de ces sources est le correctif le plus efficace.",
  },
  {
    question: "Puis-je utiliser un coordinateur Zigbee en Ethernet plutôt qu'en USB ?",
    answer:
      "Oui. Des coordinateurs réseau comme la SMLIGHT SLZB-06 se connectent en Ethernet ou PoE plutôt qu'en USB. Cela permet de placer le coordinateur au centre de la maison, loin des interférences, ce qui améliore souvent la portée et la fiabilité davantage que de changer de modèle de clé.",
  },
  {
    question: "Faut-il une box ou un pont Zigbee avec Gladys ?",
    answer:
      "Non. Une clé Zigbee USB associée à Zigbee2MQTT remplace toute box propriétaire. Gladys installe et configure Zigbee2MQTT à votre place : vos appareils Zigbee sont pilotés directement et entièrement en local, sans pont de fabricant ni compte cloud.",
  },
];

export default bestZigbeeDongleContent;
