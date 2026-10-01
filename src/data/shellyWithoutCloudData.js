// Content for the "Shelly without the cloud" landing page.
// Shelly relays, plugs and energy meters are popular in Europe and North
// America, and many people want them fully local. The Gladys Shelly community
// integration (docs/integrations/external/shelly.mdx) talks to devices on the
// local network (Gen2+ RPC with real-time push, Gen1 polled locally or real
// time over MQTT), with optional MQTT and Shelly Cloud fallbacks. Supported:
// switch (relays, plugs, with power metering), em/emdata (three-phase meters),
// pm1 (PM Mini), temperature, battery. Not supported yet: covers, dimmers,
// inputs. Keep this page in sync with that doc.

const shellyWithoutCloudContent = {
  en: {
    meta: {
      title: "Shelly Without the Cloud: Local Control of Relays and Meters",
      description:
        "Control Shelly relays, plugs and energy meters locally, without the Shelly Cloud: real-time updates for Gen2+ devices, Gen1 support, energy dashboards and scenes in Gladys Assistant. Free and open source.",
    },
    screenshotCaption:
      "Shelly relays and energy meters, controlled locally and in real time from Gladys.",
    hero: {
      title: "Shelly without the cloud",
      subtitle:
        "Shelly devices already have a great local API. Gladys Assistant uses it: control your relays and plugs and read your energy meters in real time, without the Shelly Cloud.",
      intro: [
        "Shelly makes some of the most popular Wi-Fi relays, plugs and energy meters, the kind you hide behind a wall switch or in the electrical panel. Unlike many Wi-Fi devices, they expose a documented local API, so they don't need a cloud to work.",
        "Gladys Assistant, a free and open-source smart home platform, has a Shelly integration that talks directly to your devices on your network. Gen2 and newer devices push their changes in real time, so a relay flipped on the wall shows up in Gladys in about a second. A fully local setup works with an empty configuration form.",
      ],
      primaryCta: {
        label: "The Shelly integration",
        href: "/docs/integrations/external/shelly/",
      },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Why keep Shelly devices local",
      intro: "The Shelly app and cloud are convenient, but:",
      points: [
        "Remote control and cloud automations depend on the internet and Shelly's servers.",
        "Energy data from your meters is most useful next to the rest of your home, not in a separate app.",
        "Scenes that mix Shelly relays with Zigbee sensors or Matter devices need a platform that speaks all of them.",
        "Local control is faster and keeps working when the internet doesn't.",
      ],
      outro:
        "Shelly designed its devices for local use. Gladys simply takes advantage of it.",
    },
    features: {
      title: "What the Gladys Shelly integration supports",
      intro: "Today, the integration covers relays, plugs and meters:",
      cards: [
        {
          icon: "🔌",
          title: "Relays and plugs",
          text: "On/off control with power, voltage, current and total energy for metering models like the Pro 1PM.",
        },
        {
          icon: "⚡",
          title: "Energy meters",
          text: "Three-phase meters like the Pro 3EM, per phase and in total, plus standalone meters like the PM Mini.",
        },
        {
          icon: "⏱️",
          title: "Real time",
          text: "Gen2 and newer devices push their changes locally; Gen1 devices are polled, or real time over MQTT.",
        },
        {
          icon: "🧬",
          title: "Every generation",
          text: "Gen1, Plus, Pro, Mini, Gen3 and Gen4 devices are normalized into the same features in Gladys.",
        },
        {
          icon: "🔁",
          title: "Optional fallbacks",
          text: "MQTT for large fleets, and the Shelly Cloud as a last resort if a device can't be reached locally. Both are optional.",
        },
        {
          icon: "📊",
          title: "Energy dashboards",
          text: "Feed your meters into Gladys' energy monitoring to track consumption and cost over time.",
        },
      ],
    },
    how: {
      title: "How to set it up",
      intro: "Gladys 4.83 or newer, Shelly devices already on your Wi-Fi:",
      points: [
        "In Gladys, open Integrations and install the Shelly integration from the catalog.",
        "Leave the configuration empty for a fully local setup, or add your MQTT broker if you have many devices.",
        "Open the Discovery tab and click Scan: your Shelly devices appear with their features.",
        "Add them to rooms and to your dashboard, then use them in scenes.",
        "Give your Shelly devices a DHCP reservation on your router so their IP address stays stable.",
      ],
      outro:
        "Not supported yet: roller shutter mode, dimmers and inputs. Check the integration's roadmap if you need them.",
    },
    solution: {
      title: "Local devices, one place for everything",
      paragraphs: [
        "With Gladys, your Shelly relays sit next to your Zigbee sensors, Matter devices and cameras: a motion sensor can switch a Shelly relay, and a meter reading can trigger a notification, all locally.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "Reduce your electricity bill →",
        href: "/home-energy-monitoring/",
      },
    },
    related: {
      title: "Go further",
      intro: "More local control guides:",
      links: [
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
        {
          label: "Reduce your electricity bill",
          href: "/home-energy-monitoring/",
          text: "Track your consumption and act on the data.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "Every brand and protocol Gladys supports.",
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
      title: "Run your Shelly devices locally",
      text: "Gladys is free, open source and installs with a single Docker command. Install the Shelly integration and scan your network.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Shelly integration", href: "/docs/integrations/external/shelly/" },
    },
  },

  fr: {
    meta: {
      title: "Shelly sans le cloud : relais et compteurs en local",
      description:
        "Pilotez vos relais, prises et compteurs d'énergie Shelly en local, sans le Shelly Cloud : mises à jour en temps réel pour les appareils Gen2+, prise en charge des Gen1, tableaux de bord énergie et scènes dans Gladys Assistant. Gratuit et open source.",
    },
    screenshotCaption:
      "Relais et compteurs d'énergie Shelly, pilotés en local et en temps réel depuis Gladys.",
    hero: {
      title: "Shelly sans le cloud",
      subtitle:
        "Les appareils Shelly ont déjà une excellente API locale. Gladys Assistant l'utilise : pilotez vos relais et prises et lisez vos compteurs d'énergie en temps réel, sans le Shelly Cloud.",
      intro: [
        "Shelly fabrique certains des relais, prises et compteurs d'énergie Wi-Fi les plus populaires, ceux qu'on cache derrière un interrupteur ou dans le tableau électrique. Contrairement à beaucoup d'appareils Wi-Fi, ils exposent une API locale documentée : ils n'ont pas besoin du cloud pour fonctionner.",
        "Gladys Assistant, une plateforme domotique gratuite et open source, a une intégration Shelly qui parle directement à vos appareils sur votre réseau. Les appareils Gen2 et plus récents envoient leurs changements en temps réel : un relais basculé au mur apparaît dans Gladys en une seconde environ. Une installation entièrement locale fonctionne avec un formulaire de configuration vide.",
      ],
      primaryCta: {
        label: "L'intégration Shelly",
        href: "/docs/integrations/external/shelly/",
      },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Pourquoi garder ses Shelly en local",
      intro: "L'application et le cloud Shelly sont pratiques, mais :",
      points: [
        "Le contrôle à distance et les automatisations cloud dépendent d'internet et des serveurs de Shelly.",
        "Les données d'énergie de vos compteurs sont plus utiles à côté du reste de la maison que dans une application à part.",
        "Les scènes qui mêlent relais Shelly, capteurs Zigbee ou appareils Matter demandent une plateforme qui parle tous ces langages.",
        "Le contrôle local est plus rapide et continue de fonctionner quand internet tombe.",
      ],
      outro:
        "Shelly a conçu ses appareils pour un usage local. Gladys en tire simplement parti.",
    },
    features: {
      title: "Ce que prend en charge l'intégration Shelly de Gladys",
      intro: "Aujourd'hui, l'intégration couvre les relais, les prises et les compteurs :",
      cards: [
        {
          icon: "🔌",
          title: "Relais et prises",
          text: "Marche/arrêt avec puissance, tension, courant et énergie totale pour les modèles avec mesure comme le Pro 1PM.",
        },
        {
          icon: "⚡",
          title: "Compteurs d'énergie",
          text: "Les compteurs triphasés comme le Pro 3EM, phase par phase et au total, et les compteurs autonomes comme le PM Mini.",
        },
        {
          icon: "⏱️",
          title: "Temps réel",
          text: "Les appareils Gen2 et plus récents envoient leurs changements en local ; les Gen1 sont interrogés, ou en temps réel via MQTT.",
        },
        {
          icon: "🧬",
          title: "Toutes les générations",
          text: "Les appareils Gen1, Plus, Pro, Mini, Gen3 et Gen4 sont harmonisés en fonctionnalités identiques dans Gladys.",
        },
        {
          icon: "🔁",
          title: "Des solutions de repli optionnelles",
          text: "MQTT pour les grands parcs, et le Shelly Cloud en dernier recours si un appareil n'est pas joignable en local. Les deux sont optionnels.",
        },
        {
          icon: "📊",
          title: "Tableaux de bord énergie",
          text: "Branchez vos compteurs sur le suivi d'énergie de Gladys pour suivre consommation et coût dans le temps.",
        },
      ],
    },
    how: {
      title: "Comment l'installer",
      intro: "Gladys 4.83 ou plus récent, appareils Shelly déjà connectés à votre Wi-Fi :",
      points: [
        "Dans Gladys, ouvrez Intégrations et installez l'intégration Shelly depuis le catalogue.",
        "Laissez la configuration vide pour une installation entièrement locale, ou ajoutez votre broker MQTT si vous avez beaucoup d'appareils.",
        "Ouvrez l'onglet Découverte et cliquez sur Scanner : vos appareils Shelly apparaissent avec leurs fonctionnalités.",
        "Ajoutez-les à des pièces et à votre tableau de bord, puis utilisez-les dans des scènes.",
        "Donnez à vos Shelly une réservation DHCP sur votre box pour que leur adresse IP reste stable.",
      ],
      outro:
        "Pas encore pris en charge : le mode volet roulant, les variateurs et les entrées. Consultez la feuille de route de l'intégration si vous en avez besoin.",
    },
    solution: {
      title: "Des appareils locaux, un seul endroit pour tout",
      paragraphs: [
        "Avec Gladys, vos relais Shelly côtoient vos capteurs Zigbee, vos appareils Matter et vos caméras : un détecteur de mouvement peut basculer un relais Shelly, et une mesure de compteur peut déclencher une notification, le tout en local.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Réduire sa facture d'électricité →",
        href: "/home-energy-monitoring/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres guides sur le contrôle local :",
      links: [
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord compte, et comment bâtir une maison qui tourne sans cloud.",
        },
        {
          label: "Réduire sa facture d'électricité",
          href: "/home-energy-monitoring/",
          text: "Suivez votre consommation et agissez sur les données.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Toutes les marques et protocoles pris en charge par Gladys.",
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
      title: "Faites tourner vos Shelly en local",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Installez l'intégration Shelly et scannez votre réseau.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Intégration Shelly", href: "/docs/integrations/external/shelly/" },
    },
  },
};

export const shellyWithoutCloudFaqEn = [
  {
    question: "Can Shelly devices work without the cloud?",
    answer:
      "Yes. Shelly devices expose a local API, and the Gladys Shelly integration uses it directly on your network. A fully local setup works with an empty configuration; MQTT and the Shelly Cloud are optional fallbacks.",
  },
  {
    question: "Which Shelly devices does Gladys support?",
    answer:
      "Relays and plugs (with power metering when the device has it), three-phase energy meters like the Pro 3EM, the PM Mini, temperature and battery readings, across Gen1, Plus, Pro, Mini, Gen3 and Gen4 devices. Roller shutter mode, dimmers and inputs are not supported yet.",
  },
  {
    question: "Are Shelly updates real time in Gladys?",
    answer:
      "For Gen2 and newer devices, yes: they push their changes locally, about a second after a relay is flipped. Gen1 devices are polled at the refresh interval locally, or in real time over MQTT.",
  },
  {
    question: "Do I need MQTT for Shelly?",
    answer:
      "No, but it's recommended for large fleets or devices on another VLAN. Without MQTT, Gladys discovers and controls devices directly on your local network.",
  },
];

export const shellyWithoutCloudFaqFr = [
  {
    question: "Les appareils Shelly fonctionnent-ils sans le cloud ?",
    answer:
      "Oui. Les appareils Shelly exposent une API locale, et l'intégration Shelly de Gladys l'utilise directement sur votre réseau. Une installation entièrement locale fonctionne avec une configuration vide ; MQTT et le Shelly Cloud sont des solutions de repli optionnelles.",
  },
  {
    question: "Quels appareils Shelly Gladys prend-elle en charge ?",
    answer:
      "Les relais et prises (avec mesure de puissance quand l'appareil la propose), les compteurs triphasés comme le Pro 3EM, le PM Mini, les mesures de température et de batterie, sur les gammes Gen1, Plus, Pro, Mini, Gen3 et Gen4. Le mode volet roulant, les variateurs et les entrées ne sont pas encore pris en charge.",
  },
  {
    question: "Les mises à jour Shelly sont-elles en temps réel dans Gladys ?",
    answer:
      "Pour les appareils Gen2 et plus récents, oui : ils envoient leurs changements en local, environ une seconde après le basculement d'un relais. Les Gen1 sont interrogés à intervalle régulier en local, ou en temps réel via MQTT.",
  },
  {
    question: "Faut-il MQTT pour les Shelly ?",
    answer:
      "Non, mais c'est recommandé pour les grands parcs ou les appareils sur un autre VLAN. Sans MQTT, Gladys découvre et pilote les appareils directement sur votre réseau local.",
  },
];

export default shellyWithoutCloudContent;
