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
// German locale: plain amazon.de search links (no amazon.de affiliate tag
// configured yet; add `&tag=...` here once one exists).
const amazonDE = (query) =>
  `https://www.amazon.de/s?k=${encodeURIComponent(query)}`;
// Spanish locale: plain amazon.es search links (no amazon.es affiliate tag
// configured yet; add `&tag=...` here once one exists).
const amazonES = (query) =>
  `https://www.amazon.es/s?k=${encodeURIComponent(query)}`;

// Verified product ASIN (Sonoff ZBDongle-E) on amazon.fr.
const SONOFF_E_FR = "https://www.amazon.fr/dp/B0B6P22YJC?tag=gladproj-21";

const bestZigbeeDongleContent = {
  en: {
    meta: {
      title: "Best Zigbee USB Dongle & Coordinator (2026 Guide)",
      description:
        "Which Zigbee USB dongle should you buy? The best Zigbee coordinators of 2026 for a Raspberry Pi, NAS or mini-PC running Zigbee2MQTT: Sonoff, SMLIGHT, ConBee and more, compared.",
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
          tag: "Best placement options",
          image: "/img/external/zigbee-dongles/smlight-slzb-06.jpg",
          imageAlt: "SMLIGHT SLZB-06 Ethernet Zigbee coordinator",
          text: "A coordinator with USB-C, Ethernet and PoE, so you can either plug it into your server or place it centrally in your home. Since Gladys 5, you can also use it as a network coordinator over Ethernet, placed away from your server and from interference.",
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
    multiprotocol: {
      title: "What about Matter and Thread dongles?",
      paragraphs: [
        "A growing family of coordinators carries two radios: one for Zigbee, one for Thread. The SMLIGHT SLZB-MR1 is the best known, with a Zigbee radio and a Thread radio side by side, plus USB-C, Ethernet and PoE. On paper it runs your Zigbee network and acts as a Thread border router at the same time.",
        "Two things are worth knowing before you buy one for that reason. First, running both radios at once is still experimental territory, whatever the software you use. Second, and more importantly, a Thread radio will not get you Matter over Thread in Gladys today: a border router only carries the traffic, while the first pairing of a Matter over Thread device goes over Bluetooth, which Gladys does not handle yet. That step still needs a full Matter controller such as an Apple TV, a Matter compatible Echo or a Google Nest device, which then shares the device with Gladys.",
        "None of that applies to Matter over Wi-Fi and Ethernet, which needs no dongle at all: those devices are already on your network and pair with Gladys directly.",
        "So buy a multiprotocol coordinator if you want one box for both networks and you enjoy tinkering. Buy a plain, proven Zigbee coordinator if what you want is a Zigbee network that just works.",
      ],
      link: {
        label: "Which Matter hub do you actually need? →",
        href: "/matter-hub/",
      },
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
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Let Gladys install and manage Zigbee2MQTT and its MQTT broker for you.",
        },
        {
          label: "Connect Zigbee devices to Gladys",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "The step-by-step guide to setting up your dongle with Zigbee2MQTT.",
        },
        {
          label: "IKEA smart home with Gladys",
          href: "/ikea-smart-home/",
          text: "Use your IKEA Tradfri and Dirigera devices locally, over Zigbee2MQTT or Matter.",
        },
        {
          label: "Home weather station",
          href: "/home-weather-station/",
          text: "Build a local weather station from Zigbee and Matter sensors Gladys reads directly.",
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
          tag: "Le plus polyvalent",
          image: "/img/external/zigbee-dongles/smlight-slzb-06.jpg",
          imageAlt: "Coordinateur Zigbee Ethernet SMLIGHT SLZB-06",
          text: "Un coordinateur avec USB-C, Ethernet et PoE : vous pouvez le brancher sur votre serveur ou le placer au centre de la maison. Depuis Gladys 5, vous pouvez aussi l'utiliser comme coordinateur réseau en Ethernet, placé loin de votre serveur et des interférences.",
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
    multiprotocol: {
      title: "Et les dongles Matter et Thread ?",
      paragraphs: [
        "Une famille grandissante de coordinateurs embarque deux radios : une pour le Zigbee, une pour le Thread. Le SMLIGHT SLZB-MR1 est le plus connu, avec une radio Zigbee et une radio Thread côte à côte, plus l'USB-C, l'Ethernet et le PoE. Sur le papier, il fait tourner votre réseau Zigbee et sert de routeur de bordure Thread en même temps.",
        "Deux points méritent d'être connus avant d'en acheter un pour cette raison. D'abord, faire tourner les deux radios simultanément reste un terrain expérimental, quel que soit le logiciel utilisé. Ensuite, et surtout, une radio Thread ne vous donnera pas le Matter over Thread dans Gladys aujourd'hui : un routeur de bordure ne fait que transporter le trafic, alors que le premier appairage d'un appareil Matter over Thread passe par le Bluetooth, que Gladys ne gère pas encore. Cette étape réclame toujours un contrôleur Matter complet, comme une Apple TV, une Echo compatible Matter ou un appareil Google Nest, qui partage ensuite l'appareil avec Gladys.",
        "Rien de tout cela ne concerne le Matter en Wi-Fi et en Ethernet, qui ne demande aucun dongle : ces appareils sont déjà sur votre réseau et s'appairent directement avec Gladys.",
        "Achetez donc un coordinateur multiprotocole si vous voulez un seul boîtier pour les deux réseaux et que vous aimez bricoler. Achetez un coordinateur Zigbee simple et éprouvé si ce que vous voulez, c'est un réseau Zigbee qui fonctionne.",
      ],
      link: {
        label: "De quel hub Matter avez-vous vraiment besoin ? →",
        href: "/fr/matter-hub/",
      },
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
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Laissez Gladys installer et gérer Zigbee2MQTT et son broker MQTT pour vous.",
        },
        {
          label: "Connecter des appareils Zigbee à Gladys",
          href: "/fr/docs/integrations/zigbee2mqtt/",
          text: "Le guide pas à pas pour configurer votre clé avec Zigbee2MQTT.",
        },
        {
          label: "Maison connectée IKEA avec Gladys",
          href: "/fr/ikea-smart-home/",
          text: "Utilisez vos appareils IKEA Tradfri et Dirigera en local, via Zigbee2MQTT ou Matter.",
        },
        {
          label: "Station météo maison",
          href: "/fr/home-weather-station/",
          text: "Montez une station météo locale avec des capteurs Zigbee et Matter lus par Gladys.",
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

  de: {
    meta: {
      title: "Bester Zigbee-USB-Stick & Koordinator (Ratgeber 2026)",
      description:
        "Welchen Zigbee-Stick kaufen? Die besten Zigbee-Koordinatoren 2026 für Raspberry Pi, NAS oder Mini-PC mit Zigbee2MQTT: Sonoff, SMLIGHT, ConBee im Vergleich.",
    },
    hero: {
      title: "Der beste Zigbee-USB-Stick für dein Smart Home",
      subtitle:
        "Welchen Zigbee-Koordinator du für Raspberry Pi, NAS oder Mini-PC kaufen solltest, um mit Zigbee2MQTT und Gladys ein lokales, herstellerunabhängiges Zigbee-Netz zu betreiben.",
      intro: [
        "Ein Zigbee-USB-Stick (auch Zigbee-Koordinator genannt) ist die Hardware, mit der dein Rechner mit Zigbee-Geräten spricht: Bewegungsmelder, Tür-/Fensterkontakte, smarte Steckdosen, Lampen und vieles mehr. Steck ihn in deinen Raspberry Pi, und mit Zigbee2MQTT steuerst du Hunderte Geräte lokal – ganz ohne Hersteller-Hub oder Cloud.",
        "Doch Stick ist nicht gleich Stick: Chipsatz, Antenne und die Art des Anschlusses machen bei Reichweite und Zuverlässigkeit einen echten Unterschied. Dieser Ratgeber erklärt, worauf du achten solltest, und empfiehlt die Koordinatoren, die 2026 am besten mit Zigbee2MQTT und Gladys Assistant funktionieren.",
      ],
      primaryCta: { label: "So verbindest du Zigbee mit Gladys", href: "/de/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Mit Gladys starten →",
        href: "/de/docs/",
      },
    },
    criteria: {
      title: "Worauf du bei der Wahl eines Zigbee-Sticks achten solltest",
      intro:
        "Vor dem Kauf zählen ein paar Punkte deutlich mehr als der Preis:",
      points: [
        "Chipsatz: Setz auf einen modernen Koordinator mit Chip von Texas Instruments (CC2652) oder Silicon Labs (EFR32 / EmberZNet). Beide werden von Zigbee2MQTT erstklassig unterstützt. Finger weg von alten CC2531-Sticks – die sind für heutige Netze zu schwach.",
        "Externe Antenne: Ein Stick mit externer Antenne verbessert Reichweite und Stabilität deines Mesh-Netzes spürbar.",
        "USB oder Netzwerk: Ein USB-Stick ist die einfachste Lösung. Ein Netzwerk-Koordinator (Ethernet oder PoE) lässt sich dagegen überall im Haus platzieren, weg von Störquellen – und das ist oft wichtiger als das Modell selbst.",
        "Immer ein USB-Verlängerungskabel nutzen: Schließ den Stick über eine kurze Verlängerung (ca. 1 m) an und halte ihn fern von Raspberry Pi, SSDs und USB-3.0-Ports, die Störungen im 2,4-GHz-Band verursachen. Das ist die häufigste Lösung für ein unzuverlässiges Zigbee-Netz.",
        "Zigbee 3.0 und aktualisierbare Firmware: Achte darauf, dass der Koordinator Zigbee 3.0 unterstützt und du seine Firmware flashen kannst – für die beste Unterstützung auf lange Sicht.",
      ],
      outro:
        "Die gute Nachricht: In Gladys wählst du dein genaues Koordinator-Modell direkt in der Oberfläche aus – jeder der folgenden Sticks funktioniert also sofort.",
    },
    dongles: {
      title: "Unsere empfohlenen Zigbee-Sticks",
      intro:
        "Alle werden von Zigbee2MQTT unterstützt und lassen sich in Gladys als Koordinator auswählen:",
      items: [
        {
          name: "Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)",
          tag: "Bestes Preis-Leistungs-Verhältnis",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-e.png",
          imageAlt: "Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E",
          text: "Der günstige Stick, den wir mit Gladys getestet haben – mit Silicon-Labs-Chip EFR32MG21 (EmberZNet) und externer Antenne. Tipp: Aktualisiere seine EmberZNet-Firmware für die beste Stabilität.",
          href: amazonDE("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E"),
          linkLabel: "Bei Amazon ansehen →",
        },
        {
          name: "Sonoff ZBDongle-P",
          tag: "Am bewährtesten",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-p.jpeg",
          imageAlt: "Sonoff ZBDongle-P Zigbee-USB-Stick",
          text: "Die Version mit Texas-Instruments-Chip CC2652P, seit Jahren bewährt in der Zigbee2MQTT-Community. Grundsolide, gut dokumentiert und preiswert.",
          href: amazonDE("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P CC2652P"),
          linkLabel: "Bei Amazon ansehen →",
        },
        {
          name: "SMLIGHT SLZB-06",
          tag: "Flexibelste Platzierung",
          image: "/img/external/zigbee-dongles/smlight-slzb-06.jpg",
          imageAlt: "SMLIGHT SLZB-06 Ethernet-Zigbee-Koordinator",
          text: "Ein Koordinator mit USB-C, Ethernet und PoE: Du kannst ihn direkt an deinen Server anschließen oder zentral im Haus platzieren. Seit Gladys 5 kannst du ihn außerdem als Netzwerk-Koordinator über Ethernet nutzen – entfernt von deinem Server und von Störquellen.",
          href: amazonDE("SMLIGHT SLZB-06 Zigbee Koordinator"),
          linkLabel: "Bei Amazon ansehen →",
        },
        {
          name: "ConBee II (Dresden Elektronik)",
          tag: "Premium-USB",
          image: "/img/external/zigbee-dongles/conbee-ii.jpg",
          imageAlt: "ConBee II Zigbee-USB-Stick von Dresden Elektronik",
          text: "Ein hochwertiger, breit unterstützter USB-Koordinator mit starker Reichweite und langer Erfolgsgeschichte. Eine gute Wahl, wenn du einen ausgereiften, gut unterstützten Stick willst.",
          href: amazonDE("ConBee II Zigbee USB Stick"),
          linkLabel: "Bei Amazon ansehen →",
        },
        {
          name: "Home Assistant Connect ZBT-1",
          tag: "Multiprotokoll-Hardware",
          image: "/img/external/zigbee-dongles/connect-zbt-1.jpg",
          imageAlt: "Home Assistant Connect ZBT-1 Zigbee-USB-Stick",
          text: "Der Koordinator von Nabu Casa mit Silicon-Labs-Chip (früher SkyConnect). Er funktioniert hervorragend mit Zigbee2MQTT und ist in Gladys als Koordinatortyp auswählbar.",
          href: amazonDE("Home Assistant Connect ZBT-1"),
          linkLabel: "Bei Amazon ansehen →",
        },
      ],
      outro:
        "Die vollständige, stets aktuelle Liste kompatibler Koordinatoren findest du auf der Seite „Supported Adapters“ von Zigbee2MQTT.",
    },
    multiprotocol: {
      title: "Und was ist mit Matter- und Thread-Sticks?",
      paragraphs: [
        "Immer mehr Koordinatoren haben zwei Funkmodule an Bord: eins für Zigbee, eins für Thread. Der bekannteste ist der SMLIGHT SLZB-MR1 mit Zigbee- und Thread-Funk nebeneinander, dazu USB-C, Ethernet und PoE. Auf dem Papier betreibt er dein Zigbee-Netz und arbeitet gleichzeitig als Thread-Border-Router.",
        "Bevor du ihn aus diesem Grund kaufst, solltest du zwei Dinge wissen. Erstens ist der gleichzeitige Betrieb beider Funkmodule noch experimentell – egal mit welcher Software. Zweitens, und das ist wichtiger: Ein Thread-Funkmodul bringt dir in Gladys derzeit kein Matter over Thread. Ein Border-Router leitet nur den Datenverkehr weiter, während die erste Kopplung eines Matter-over-Thread-Geräts über Bluetooth läuft – und das unterstützt Gladys noch nicht. Für diesen Schritt brauchst du weiterhin einen vollwertigen Matter-Controller wie ein Apple TV, einen Matter-fähigen Echo oder ein Google-Nest-Gerät, der das Gerät dann mit Gladys teilt.",
        "Für Matter over WLAN und Ethernet gilt das alles nicht – dafür brauchst du überhaupt keinen Stick: Diese Geräte sind bereits in deinem Netzwerk und werden direkt mit Gladys gekoppelt.",
        "Kauf also einen Multiprotokoll-Koordinator, wenn du eine Box für beide Netze willst und gerne tüftelst. Kauf einen einfachen, bewährten Zigbee-Koordinator, wenn du ein Zigbee-Netz willst, das einfach funktioniert.",
      ],
      link: {
        label: "Welchen Matter-Hub brauchst du wirklich? →",
        href: "/de/matter-hub/",
      },
    },
    gladys: {
      title: "So funktioniert es mit Gladys Assistant",
      paragraphs: [
        "Mit Gladys brauchst du keinen proprietären Zigbee-Hub. Steck deinen Stick in deinen Raspberry Pi, dein NAS oder deinen Mini-PC, öffne die Zigbee2MQTT-Integration und wähle dein Koordinator-Modell aus der Liste.",
        "Gladys installiert und konfiguriert anschließend automatisch die MQTT- und Zigbee2MQTT-Container für dich – ohne manuelle Einrichtung, ohne Bridge von Drittanbietern. Danach koppelst du deine Zigbee-Geräte und steuerst sie komplett lokal, mit Geräten beliebiger Marken.",
      ],
      link: { label: "Zur Zigbee2MQTT-Anleitung →", href: "/de/docs/integrations/zigbee2mqtt/" },
    },
    related: {
      title: "Weiterlesen",
      intro:
        "Dein lokales Zigbee-Netz ist Teil eines größeren Ganzen:",
      links: [
        {
          label: "Zigbee2MQTT ohne Home Assistant",
          href: "/de/zigbee2mqtt-without-home-assistant/",
          text: "Lass Gladys Zigbee2MQTT und den MQTT-Broker für dich installieren und verwalten.",
        },
        {
          label: "Zigbee-Geräte mit Gladys verbinden",
          href: "/de/docs/integrations/zigbee2mqtt/",
          text: "Die Schritt-für-Schritt-Anleitung zur Einrichtung deines Sticks mit Zigbee2MQTT.",
        },
        {
          label: "IKEA Smart Home mit Gladys",
          href: "/de/ikea-smart-home/",
          text: "Nutze deine IKEA-Tradfri- und Dirigera-Geräte lokal, über Zigbee2MQTT oder Matter.",
        },
        {
          label: "Wetterstation für zu Hause",
          href: "/de/home-weather-station/",
          text: "Bau dir eine lokale Wetterstation aus Zigbee- und Matter-Sensoren, die Gladys direkt ausliest.",
        },
        {
          label: "Zigbee vs. Matter vs. Z-Wave",
          href: "/de/zigbee-vs-matter-vs-zwave/",
          text: "Welchen Funkstandard du für deine Smart-Home-Geräte wählen solltest.",
        },
        {
          label: "Ein lokales Smart Home aufbauen",
          href: "/de/local-smart-home/",
          text: "Warum „lokal zuerst“ wichtig ist und wie du ein Zuhause baust, das ohne Cloud funktioniert.",
        },
        {
          label: "Open-Source-Hausautomation",
          href: "/de/open-source-home-automation/",
          text: "Betreibe dein Smart Home mit kostenloser, selbst gehosteter Software, der du vertrauen kannst.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Bau dein lokales Zigbee-Netz auf",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Steck einen Stick ein und steuere deine Zigbee-Geräte lokal – ganz ohne Hub.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: {
        label: "Zigbee2MQTT einrichten",
        href: "/de/docs/integrations/zigbee2mqtt/",
      },
    },
  },
  es: {
    meta: {
      title: "El mejor dongle USB Zigbee y coordinador (guía 2026)",
      description:
        "¿Qué dongle USB Zigbee comprar? Los mejores coordinadores Zigbee de 2026 para una Raspberry Pi, un NAS o un mini-PC con Zigbee2MQTT: Sonoff, SMLIGHT, ConBee y más, comparados.",
    },
    hero: {
      title: "El mejor dongle USB Zigbee para tu hogar inteligente",
      subtitle:
        "Qué coordinador Zigbee comprar para una Raspberry Pi, un NAS o un mini-PC, y montar una red Zigbee local y multimarca con Zigbee2MQTT y Gladys.",
      intro: [
        "Un dongle USB Zigbee (también llamado coordinador Zigbee) es el hardware que permite a tu ordenador comunicarse con dispositivos Zigbee: sensores de movimiento, sensores de apertura de puertas y ventanas, enchufes inteligentes, bombillas y mucho más. Conéctalo a tu Raspberry Pi y, con Zigbee2MQTT, controlarás cientos de dispositivos en local, sin hub del fabricante ni nube.",
        "Pero no todos los dongles son iguales: el chipset, la antena y la forma de conectarlo marcan una diferencia real en alcance y fiabilidad. Esta guía explica en qué fijarte y recomienda los coordinadores que mejor funcionan con Zigbee2MQTT y Gladys Assistant en 2026.",
      ],
      primaryCta: { label: "Cómo conectar Zigbee a Gladys", href: "/es/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Empieza con Gladys →",
        href: "/es/docs/",
      },
    },
    criteria: {
      title: "En qué fijarte al elegir un dongle Zigbee",
      intro:
        "Antes de comprar, hay varios aspectos que importan mucho más que el precio:",
      points: [
        "Chipset: elige un coordinador moderno basado en Texas Instruments (CC2652) o Silicon Labs (EFR32 / EmberZNet). Ambos están perfectamente soportados en Zigbee2MQTT. Evita los antiguos sticks CC2531, que se quedan cortos para las redes actuales.",
        "Antena externa: un dongle con antena externa mejora notablemente el alcance y la estabilidad de tu red mallada.",
        "USB o red: un stick USB es la opción más sencilla, pero un coordinador de red (Ethernet o PoE) te permite colocarlo en cualquier lugar de la casa, lejos de las interferencias, lo que a menudo importa más que el propio modelo.",
        "Usa siempre un cable alargador USB: conecta el dongle con un alargador corto (de aproximadamente 1 m) y mantenlo alejado de tu Raspberry Pi, de los SSD y de los puertos USB 3.0, que provocan interferencias en la banda de 2,4 GHz. Es la solución más habitual para una red Zigbee poco fiable.",
        "Zigbee 3.0 y firmware actualizable: asegúrate de que el coordinador es compatible con Zigbee 3.0 y de que puedes actualizar su firmware para tener el mejor soporte a largo plazo.",
      ],
      outro:
        "La buena noticia: Gladys te permite elegir el modelo exacto de tu coordinador en la interfaz, así que cualquiera de los dongles siguientes funcionará desde el primer momento.",
    },
    dongles: {
      title: "Los dongles Zigbee que recomendamos",
      intro:
        "Todos son compatibles con Zigbee2MQTT y se pueden seleccionar como coordinador en Gladys:",
      items: [
        {
          name: "Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)",
          tag: "Mejor relación calidad-precio",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-e.png",
          imageAlt: "Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E",
          text: "El dongle asequible que probamos con Gladys, basado en un chip Silicon Labs EFR32MG21 (EmberZNet), con antena externa. Consejo: actualiza su firmware EmberZNet para obtener la mejor estabilidad.",
          href: amazonES("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E"),
          linkLabel: "Ver en Amazon →",
        },
        {
          name: "Sonoff ZBDongle-P",
          tag: "El más probado",
          image: "/img/external/zigbee-dongles/sonoff-zbdongle-p.jpeg",
          imageAlt: "Dongle USB Zigbee Sonoff ZBDongle-P",
          text: "La versión con Texas Instruments CC2652P, de confianza desde hace años en la comunidad Zigbee2MQTT. Muy sólido, bien documentado y económico.",
          href: amazonES("Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P CC2652P"),
          linkLabel: "Ver en Amazon →",
        },
        {
          name: "SMLIGHT SLZB-06",
          tag: "Más opciones de ubicación",
          image: "/img/external/zigbee-dongles/smlight-slzb-06.jpg",
          imageAlt: "Coordinador Zigbee Ethernet SMLIGHT SLZB-06",
          text: "Un coordinador con USB-C, Ethernet y PoE, para conectarlo a tu servidor o colocarlo en un punto central de tu casa. Desde Gladys 5, también puedes usarlo como coordinador de red por Ethernet, lejos de tu servidor y de las interferencias.",
          href: amazonES("SMLIGHT SLZB-06 coordinador Zigbee"),
          linkLabel: "Ver en Amazon →",
        },
        {
          name: "ConBee II (Dresden Elektronik)",
          tag: "USB premium",
          image: "/img/external/zigbee-dongles/conbee-ii.jpg",
          imageAlt: "Stick USB Zigbee ConBee II de Dresden Elektronik",
          text: "Un coordinador USB premium y ampliamente soportado, con buen alcance y una larga trayectoria. Una gran opción si quieres un stick pulido y bien soportado.",
          href: amazonES("ConBee II Zigbee USB stick"),
          linkLabel: "Ver en Amazon →",
        },
        {
          name: "Home Assistant Connect ZBT-1",
          tag: "Hardware multiprotocolo",
          image: "/img/external/zigbee-dongles/connect-zbt-1.jpg",
          imageAlt: "Dongle USB Zigbee Home Assistant Connect ZBT-1",
          text: "El coordinador de Nabu Casa basado en Silicon Labs (antes SkyConnect). Funciona muy bien con Zigbee2MQTT y es un tipo de coordinador soportado en Gladys.",
          href: amazonES("Home Assistant Connect ZBT-1"),
          linkLabel: "Ver en Amazon →",
        },
      ],
      outro:
        "La lista completa y siempre actualizada de coordinadores compatibles está en la página de adaptadores soportados de Zigbee2MQTT.",
    },
    multiprotocol: {
      title: "¿Y los dongles Matter y Thread?",
      paragraphs: [
        "Cada vez más coordinadores incorporan dos radios: una para Zigbee y otra para Thread. El SMLIGHT SLZB-MR1 es el más conocido, con una radio Zigbee y una radio Thread una al lado de la otra, además de USB-C, Ethernet y PoE. Sobre el papel, gestiona tu red Zigbee y actúa a la vez como border router Thread.",
        "Conviene saber dos cosas antes de comprarlo por ese motivo. Primero, usar las dos radios a la vez sigue siendo terreno experimental, sea cual sea el software que uses. Segundo, y más importante, una radio Thread no te dará Matter sobre Thread en Gladys hoy en día: un border router solo transporta el tráfico, mientras que el primer emparejamiento de un dispositivo Matter sobre Thread se hace por Bluetooth, algo que Gladys todavía no gestiona. Ese paso sigue necesitando un controlador Matter completo, como un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest, que luego comparte el dispositivo con Gladys.",
        "Nada de esto se aplica a Matter sobre Wi-Fi y Ethernet, que no necesita ningún dongle: esos dispositivos ya están en tu red y se emparejan directamente con Gladys.",
        "Así que compra un coordinador multiprotocolo si quieres una sola caja para las dos redes y te gusta trastear. Compra un coordinador Zigbee sencillo y probado si lo que quieres es una red Zigbee que simplemente funcione.",
      ],
      link: {
        label: "¿Qué hub Matter necesitas realmente? →",
        href: "/es/matter-hub/",
      },
    },
    gladys: {
      title: "Cómo funciona con Gladys Assistant",
      paragraphs: [
        "Con Gladys no necesitas un hub Zigbee propietario. Conecta tu dongle a tu Raspberry Pi, NAS o mini-PC, abre la integración Zigbee2MQTT y selecciona el modelo de tu coordinador en la lista.",
        "Gladys instala y configura automáticamente los contenedores MQTT y Zigbee2MQTT por ti, sin configuración manual ni puente de terceros. A partir de ahí, emparejas tus dispositivos Zigbee y los controlas completamente en local, mezclando marcas libremente.",
      ],
      link: { label: "Lee la guía de configuración de Zigbee2MQTT →", href: "/es/docs/integrations/zigbee2mqtt/" },
    },
    related: {
      title: "Para ir más allá",
      intro:
        "Montar tu red Zigbee local forma parte de un proyecto más amplio:",
      links: [
        {
          label: "Zigbee2MQTT sin Home Assistant",
          href: "/es/zigbee2mqtt-without-home-assistant/",
          text: "Deja que Gladys instale y gestione por ti Zigbee2MQTT y su broker MQTT.",
        },
        {
          label: "Conecta dispositivos Zigbee a Gladys",
          href: "/es/docs/integrations/zigbee2mqtt/",
          text: "La guía paso a paso para configurar tu dongle con Zigbee2MQTT.",
        },
        {
          label: "Domótica IKEA con Gladys",
          href: "/es/ikea-smart-home/",
          text: "Usa tus dispositivos IKEA Tradfri y Dirigera en local, con Zigbee2MQTT o Matter.",
        },
        {
          label: "Estación meteorológica casera",
          href: "/es/home-weather-station/",
          text: "Monta una estación meteorológica local con sensores Zigbee y Matter que Gladys lee directamente.",
        },
        {
          label: "Zigbee vs Matter vs Z-Wave",
          href: "/es/zigbee-vs-matter-vs-zwave/",
          text: "Qué estándar inalámbrico elegir para los dispositivos de tu hogar inteligente.",
        },
        {
          label: "Crea un hogar inteligente local",
          href: "/es/local-smart-home/",
          text: "Por qué lo local es lo primero y cómo crear una casa que funcione sin la nube.",
        },
        {
          label: "Domótica de código abierto",
          href: "/es/open-source-home-automation/",
          text: "Gestiona tu hogar inteligente con software libre y autoalojado en el que puedes confiar y que puedes conservar.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Crea tu red Zigbee local",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Conecta un dongle y controla tus dispositivos Zigbee en local, sin necesidad de hub.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: {
        label: "Configurar Zigbee2MQTT",
        href: "/es/docs/integrations/zigbee2mqtt/",
      },
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
    question: "Is the SMLIGHT SLZB-MR1 a good choice?",
    answer:
      "The SLZB-MR1 is a dual-radio coordinator: one Zigbee radio and one Thread radio, with USB-C, Ethernet and PoE. It works as a Zigbee coordinator with Zigbee2MQTT and its type is selectable in Gladys, connected over USB. Running Zigbee and Thread simultaneously is still experimental, and its Thread radio will not let Gladys pair Matter over Thread devices on its own: that first pairing goes over Bluetooth, through a full Matter controller such as an Apple TV, a Matter compatible Echo or a Google Nest device. Buy it for the Zigbee side and the flexibility, not as a way into Matter.",
  },
  {
    question: "Do I need a Matter or Thread dongle for Gladys?",
    answer:
      "No, and a Thread dongle would not help anyway. Matter devices on Wi-Fi or Ethernet are already on your network and pair with Gladys directly, with no dongle at all. Thread devices do need a Thread border router, but a bare border router is not enough with Gladys today: the initial pairing of a Matter over Thread device goes over Bluetooth, which Gladys does not handle yet, so it has to be done on a full Matter controller such as an Apple TV, a Matter compatible Echo or a Google Nest device, and the device is then shared with Gladys. A Zigbee dongle is for Zigbee devices, which are a separate, still very large ecosystem.",
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
    question: "Le SMLIGHT SLZB-MR1 est-il un bon choix ?",
    answer:
      "Le SLZB-MR1 est un coordinateur à deux radios : une radio Zigbee et une radio Thread, avec USB-C, Ethernet et PoE. Il fonctionne comme coordinateur Zigbee avec Zigbee2MQTT et son type est sélectionnable dans Gladys, en le branchant en USB. Faire tourner le Zigbee et le Thread en même temps reste expérimental, et sa radio Thread ne permettra pas à Gladys d'appairer seule des appareils Matter over Thread : ce premier appairage passe par le Bluetooth, via un contrôleur Matter complet comme une Apple TV, une Echo compatible Matter ou un appareil Google Nest. Achetez-le pour la partie Zigbee et la polyvalence, pas comme porte d'entrée vers Matter.",
  },
  {
    question: "Faut-il un dongle Matter ou Thread pour Gladys ?",
    answer:
      "Non, et un dongle Thread ne vous aiderait de toute façon pas. Les appareils Matter en Wi-Fi ou Ethernet sont déjà sur votre réseau et s'appairent directement avec Gladys, sans aucun dongle. Les appareils Thread, eux, ont bien besoin d'un routeur de bordure Thread, mais un simple routeur de bordure ne suffit pas avec Gladys aujourd'hui : le premier appairage d'un appareil Matter over Thread passe par le Bluetooth, que Gladys ne gère pas encore, il doit donc se faire sur un contrôleur Matter complet comme une Apple TV, une Echo compatible Matter ou un appareil Google Nest, l'appareil étant ensuite partagé avec Gladys. Une clé Zigbee sert aux appareils Zigbee, qui forment un écosystème distinct et toujours très large.",
  },
  {
    question: "Faut-il une box ou un pont Zigbee avec Gladys ?",
    answer:
      "Non. Une clé Zigbee USB associée à Zigbee2MQTT remplace toute box propriétaire. Gladys installe et configure Zigbee2MQTT à votre place : vos appareils Zigbee sont pilotés directement et entièrement en local, sans pont de fabricant ni compte cloud.",
  },
];

export const bestZigbeeDongleFaqDe = [
  {
    question: "Welcher Zigbee-Stick funktioniert am besten mit Gladys und Zigbee2MQTT?",
    answer:
      "Jeder moderne Zigbee-3.0-Koordinator mit Chip von Texas Instruments (CC2652) oder Silicon Labs (EFR32 / EmberZNet) funktioniert gut. Beliebt sind der Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E und ZBDongle-P), der SMLIGHT SLZB-06, der ConBee II und der Home Assistant Connect ZBT-1. In der Zigbee2MQTT-Integration von Gladys wählst du dein genaues Modell aus.",
  },
  {
    question: "Welcher Zigbee-Stick ist der beste für einen Raspberry Pi?",
    answer:
      "Der Sonoff Zigbee 3.0 USB Dongle Plus ist eine hervorragende, günstige Wahl für den Raspberry Pi – und genau der Stick, den wir mit Gladys getestet haben. Egal, wofür du dich entscheidest: Schließ ihn immer über ein kurzes USB-Verlängerungskabel an, damit er Abstand zum Pi und seinen USB-3.0-Ports hat, die Störungen im 2,4-GHz-Band verursachen.",
  },
  {
    question: "Was ist der Unterschied zwischen Sonoff ZBDongle-E und ZBDongle-P?",
    answer:
      "Der ZBDongle-P nutzt einen Texas-Instruments-Chip CC2652P und gilt in der Zigbee2MQTT-Community seit Langem als bewährte Wahl. Der ZBDongle-E nutzt einen Silicon-Labs-Chip EFR32MG21 (EmberZNet), ist neuer und seine Hardware kann auch Matter- und Thread-Ökosysteme ansprechen. Beide funktionieren gut mit Zigbee2MQTT und Gladys.",
  },
  {
    question: "Brauche ich wirklich ein USB-Verlängerungskabel?",
    answer:
      "Ja, das ist dringend zu empfehlen. Steckt der Stick direkt im Raspberry Pi oder in der Nähe von SSDs und USB-3.0-Ports, ist das die häufigste Ursache für abspringende Zigbee-Geräte und schlechte Reichweite. Ein kurzes USB-Verlängerungskabel (ca. 1 m), das den Stick von diesen Störquellen fernhält, ist die wirksamste Lösung.",
  },
  {
    question: "Kann ich einen Zigbee-Koordinator über Ethernet statt USB nutzen?",
    answer:
      "Ja. Netzwerk-Koordinatoren wie der SMLIGHT SLZB-06 werden über Ethernet oder PoE statt über USB angeschlossen. So kannst du den Koordinator zentral im Haus platzieren, weg von Störquellen – das verbessert Reichweite und Zuverlässigkeit oft mehr als ein anderes Stick-Modell.",
  },
  {
    question: "Ist der SMLIGHT SLZB-MR1 eine gute Wahl?",
    answer:
      "Der SLZB-MR1 ist ein Koordinator mit zwei Funkmodulen: einem für Zigbee und einem für Thread, dazu USB-C, Ethernet und PoE. Er funktioniert als Zigbee-Koordinator mit Zigbee2MQTT, und sein Typ lässt sich in Gladys auswählen, wenn er per USB angeschlossen ist. Zigbee und Thread gleichzeitig zu betreiben, ist noch experimentell, und mit seinem Thread-Funk kann Gladys Matter-over-Thread-Geräte nicht allein koppeln: Diese erste Kopplung läuft über Bluetooth, über einen vollwertigen Matter-Controller wie ein Apple TV, einen Matter-fähigen Echo oder ein Google-Nest-Gerät. Kauf ihn für die Zigbee-Seite und die Flexibilität, nicht als Einstieg in Matter.",
  },
  {
    question: "Brauche ich für Gladys einen Matter- oder Thread-Stick?",
    answer:
      "Nein – und ein Thread-Stick würde ohnehin nicht helfen. Matter-Geräte mit WLAN oder Ethernet sind bereits in deinem Netzwerk und werden direkt mit Gladys gekoppelt, ganz ohne Stick. Thread-Geräte brauchen zwar einen Thread-Border-Router, aber ein reiner Border-Router reicht mit Gladys derzeit nicht: Die erste Kopplung eines Matter-over-Thread-Geräts läuft über Bluetooth, was Gladys noch nicht unterstützt. Sie muss also auf einem vollwertigen Matter-Controller wie einem Apple TV, einem Matter-fähigen Echo oder einem Google-Nest-Gerät erfolgen, der das Gerät anschließend mit Gladys teilt. Ein Zigbee-Stick ist für Zigbee-Geräte gedacht – ein eigenes, nach wie vor sehr großes Ökosystem.",
  },
  {
    question: "Brauche ich mit Gladys einen Zigbee-Hub oder eine Bridge?",
    answer:
      "Nein. Ein Zigbee-USB-Stick plus Zigbee2MQTT ersetzt jeden proprietären Hub. Gladys installiert und konfiguriert Zigbee2MQTT für dich, sodass deine Zigbee-Geräte direkt und komplett lokal gesteuert werden – ohne Hersteller-Bridge und ohne Cloud-Konto.",
  },
];

export const bestZigbeeDongleFaqEs = [
  {
    question: "¿Qué dongle Zigbee funciona mejor con Gladys y Zigbee2MQTT?",
    answer:
      "Cualquier coordinador Zigbee 3.0 moderno basado en un chip Texas Instruments (CC2652) o Silicon Labs (EFR32 / EmberZNet) funciona bien. Las opciones más populares son el Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E y ZBDongle-P), el SMLIGHT SLZB-06, el ConBee II y el Home Assistant Connect ZBT-1. Gladys te permite seleccionar tu modelo exacto en la integración Zigbee2MQTT.",
  },
  {
    question: "¿Cuál es el mejor dongle Zigbee para una Raspberry Pi?",
    answer:
      "El Sonoff Zigbee 3.0 USB Dongle Plus es una opción excelente y asequible para una Raspberry Pi, y es el que probamos con Gladys. Elijas el que elijas, conéctalo siempre con un cable alargador USB corto para mantenerlo alejado de la Pi y de sus puertos USB 3.0, que provocan interferencias en la banda de 2,4 GHz.",
  },
  {
    question: "¿Qué diferencia hay entre el Sonoff ZBDongle-E y el ZBDongle-P?",
    answer:
      "El ZBDongle-P usa un chip Texas Instruments CC2652P y es desde hace tiempo la opción de confianza en la comunidad Zigbee2MQTT. El ZBDongle-E usa un chip Silicon Labs EFR32MG21 (EmberZNet) y es más reciente, con un hardware que también puede orientarse a los ecosistemas Matter y Thread. Ambos funcionan bien con Zigbee2MQTT y Gladys.",
  },
  {
    question: "¿De verdad necesito un cable alargador USB?",
    answer:
      "Sí, es muy recomendable. Conectar el dongle directamente a una Raspberry Pi o cerca de SSD y puertos USB 3.0 es la causa más habitual de dispositivos Zigbee que se desconectan y de un mal alcance. Un alargador USB corto (de aproximadamente 1 m) que aleje el dongle de esas fuentes es la solución más eficaz.",
  },
  {
    question: "¿Puedo usar un coordinador Zigbee por Ethernet en lugar de USB?",
    answer:
      "Sí. Los coordinadores de red como el SMLIGHT SLZB-06 se conectan por Ethernet o PoE en lugar de USB. Así puedes colocar el coordinador en un punto central de tu casa, lejos de las interferencias, lo que a menudo mejora el alcance y la fiabilidad más que cambiar de modelo de dongle.",
  },
  {
    question: "¿El SMLIGHT SLZB-MR1 es una buena opción?",
    answer:
      "El SLZB-MR1 es un coordinador de doble radio: una radio Zigbee y una radio Thread, con USB-C, Ethernet y PoE. Funciona como coordinador Zigbee con Zigbee2MQTT y su tipo se puede seleccionar en Gladys, conectado por USB. Usar Zigbee y Thread a la vez sigue siendo experimental, y su radio Thread no permitirá a Gladys emparejar por sí solo dispositivos Matter sobre Thread: ese primer emparejamiento se hace por Bluetooth, a través de un controlador Matter completo como un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest. Cómpralo por la parte Zigbee y la flexibilidad, no como puerta de entrada a Matter.",
  },
  {
    question: "¿Necesito un dongle Matter o Thread para Gladys?",
    answer:
      "No, y un dongle Thread tampoco ayudaría. Los dispositivos Matter por Wi-Fi o Ethernet ya están en tu red y se emparejan directamente con Gladys, sin ningún dongle. Los dispositivos Thread sí necesitan un border router Thread, pero un border router por sí solo no basta con Gladys hoy en día: el emparejamiento inicial de un dispositivo Matter sobre Thread se hace por Bluetooth, algo que Gladys todavía no gestiona, así que hay que hacerlo en un controlador Matter completo como un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest, que luego comparte el dispositivo con Gladys. Un dongle Zigbee sirve para los dispositivos Zigbee, que forman un ecosistema aparte y todavía muy amplio.",
  },
  {
    question: "¿Necesito un hub o un puente Zigbee con Gladys?",
    answer:
      "No. Un dongle USB Zigbee junto con Zigbee2MQTT sustituye a cualquier hub propietario. Gladys instala y configura Zigbee2MQTT por ti, así que tus dispositivos Zigbee se controlan directamente y completamente en local, sin puente del fabricante ni cuenta en la nube.",
  },
];

export default bestZigbeeDongleContent;
