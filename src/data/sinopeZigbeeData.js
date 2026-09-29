// Content for the "Sinopé Zigbee without Neviweb" landing page.
// Sinopé (Quebec) thermostats are everywhere in Quebec homes, and the Zigbee
// models (ZB suffix) are standard Zigbee devices supported by Zigbee2MQTT, so
// they pair directly with Gladys without the GT130 gateway and the Neviweb
// app. Ties into our Hydro-Québec Flex D and peak events pages.
// Facts checked in September 2026: Zigbee2MQTT device list (sinope.ts in
// zigbee-herdsman-converters), sinopetech.com (GT130 at $109.99 CAD, Hilo
// bonus requires the GT130 and the Hilo hub). Gladys maps
// occupied_heating_setpoint to a thermostat target temperature and
// local_temperature to a temperature sensor (server/services/zigbee2mqtt).

const sinopeZigbeeContent = {
  en: {
    meta: {
      title: "Sinopé Zigbee Thermostats Without Neviweb: Local Control",
      description:
        "Control Sinopé Zigbee thermostats, load controllers and switches locally, without the GT130 gateway or the Neviweb app: pair them with Zigbee2MQTT and automate Hydro-Québec peaks with Gladys Assistant. Free and open source.",
    },
    screenshotCaption:
      "Your Sinopé thermostats next to the rest of the house, controlled locally from Gladys.",
    hero: {
      title: "Sinopé Zigbee thermostats, without Neviweb",
      subtitle:
        "Sinopé's Zigbee devices are standard Zigbee. Pair them with Zigbee2MQTT and control your heating locally, with Gladys Assistant, and automate Hydro-Québec peaks.",
      intro: [
        "Sinopé thermostats heat a large share of Quebec homes. The Zigbee models (the ones ending in ZB, like the TH1123ZB) normally go through Sinopé's GT130 gateway and the Neviweb app. But they speak standard Zigbee, and Zigbee2MQTT supports them.",
        "That means you can pair them directly with Gladys Assistant, a free and open-source smart home platform that runs on a mini-PC or a Raspberry Pi. Set the temperature, read the room temperature and power use, and build scenes that lower the heat during Hydro-Québec peak events, all locally.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT setup guide",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Hydro-Québec peak events, live →",
        href: "/hydro-quebec-peak-events/",
      },
    },
    problem: {
      title: "Why control Sinopé devices locally",
      intro: "The GT130 and Neviweb work, but they come with limits:",
      points: [
        "The Neviweb app is a cloud service: remote control and many features depend on Sinopé's servers and your internet connection.",
        "Automations stay inside the Sinopé world, so it's hard to combine your thermostats with sensors, lights or appliances from other brands.",
        "Your heating data, one of the biggest parts of a Quebec electricity bill, lives in someone else's app.",
        "With Rate Flex D, lowering the heat at the right time, every time, is where the savings are.",
      ],
      outro:
        "Pairing your Sinopé Zigbee devices with a local platform keeps the hardware you already have, and gives you full control over it.",
    },
    comparison: {
      title: "Gladys + Zigbee2MQTT vs GT130 + Neviweb",
      intro: "The same Sinopé devices, two ways to run them:",
      cols: {
        feature: "",
        gladys: "Gladys + Zigbee2MQTT",
        other: "GT130 + Neviweb",
      },
      rows: [
        {
          feature: "Gateway",
          gladys: "A Zigbee USB dongle on your mini-PC or Raspberry Pi",
          other: "Sinopé GT130 ($109.99 CAD)",
        },
        {
          feature: "App",
          gladys: "Gladys, running at home",
          other: "Neviweb, a cloud service",
        },
        {
          feature: "Other brands",
          gladys: "Any Zigbee, Z-Wave, Matter or Wi-Fi device Gladys supports",
          other: "Mostly Sinopé devices",
        },
        {
          feature: "Hydro-Québec peaks",
          gladys: "Scenes driven by the Hydro-Québec integration",
          other: "Through Hilo, with the Hilo hub",
        },
        {
          feature: "Hilo bonus program",
          gladys: "Not eligible",
          other: "Eligible with the GT130 and the Hilo hub",
        },
        {
          feature: "Source code",
          gladys: "Open source",
          other: "Proprietary",
        },
      ],
      outro:
        "A Zigbee device can only be paired with one gateway at a time: moving a device to Gladys removes it from Neviweb.",
    },
    features: {
      title: "Sinopé Zigbee devices supported by Zigbee2MQTT",
      intro:
        "These Sinopé models are listed as supported by Zigbee2MQTT. Gladys exposes their main features: setpoint, temperature, on/off, power and energy.",
      cards: [
        {
          icon: "🌡️",
          title: "Baseboard thermostats",
          text: "TH1123ZB and TH1124ZB (and their G2 versions), the classic line-voltage thermostats for electric baseboards.",
        },
        {
          icon: "🦶",
          title: "Floor and low-voltage",
          text: "TH1300ZB for floor heating, TH1400ZB for low-voltage systems and TH1500ZB dual-pole.",
        },
        {
          icon: "🚿",
          title: "Water heater and load controllers",
          text: "RM3250ZB 50 A load controller and RM3500ZB Calypso water heater controller: ideal to cut the water heater during a peak.",
        },
        {
          icon: "💡",
          title: "Switches, dimmers and plugs",
          text: "SW2500ZB switch, DM2500ZB and DM2550ZB dimmers, SP2600ZB and SP2610ZB smart plugs.",
        },
        {
          icon: "💧",
          title: "Leak sensors and valves",
          text: "WL4200 leak sensors and Sedna valves (VA4200WZ, VA4220ZB) to shut the water off automatically.",
        },
        {
          icon: "❄️",
          title: "Heat pump interface",
          text: "HP6000ZB interface for mini-split heat pumps.",
        },
      ],
    },
    how: {
      title: "How to pair Sinopé thermostats with Gladys",
      intro: "On a mini-PC or a Raspberry Pi running Gladys:",
      points: [
        "Plug a Zigbee coordinator (Sonoff ZBDongle-E or -P…) into the machine and enable Zigbee2MQTT in Gladys.",
        "Remove the device from the GT130 in Neviweb, or reset it following Sinopé's instructions, so it leaves the old network.",
        "In Gladys, open Zigbee2MQTT → Discover and permit joining.",
        "Put the thermostat in pairing mode as described in its manual: it appears in Gladys with its features.",
        "Add it to a room and to your dashboard, then build your scenes.",
      ],
      outro:
        "Only Zigbee models (ZB) work this way. Sinopé's Wi-Fi models (TH1123WF, TH1124WF…) are not Zigbee and stay on Neviweb.",
    },
    solution: {
      title: "Automate Hydro-Québec peaks with your Sinopé thermostats",
      paragraphs: [
        "This is where local control pays off. Gladys's Hydro-Québec integration knows when a Flex D or Winter Credit peak event, or the pre-heat period before it, is in progress. Your scenes can raise your Sinopé thermostats by a degree or two before the peak, lower them during it, cut the water heater with an RM3250ZB or RM3500ZB, and restore everything afterwards.",
        "Everything runs on your own hardware, and Gladys is free and open source.",
      ],
      link: {
        label: "Automate Rate Flex D →",
        href: "/hydro-quebec-flex-d/",
      },
    },
    related: {
      title: "Go further",
      intro: "Lower your winter bill in Quebec:",
      links: [
        {
          label: "Hydro-Québec peak events, live",
          href: "/hydro-quebec-peak-events/",
          text: "Is there a peak event today or tomorrow? Live from Hydro-Québec's open data.",
        },
        {
          label: "Hydro-Québec Rate Flex D",
          href: "/hydro-quebec-flex-d/",
          text: "How Flex D works and the automations that make it pay off.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy for Zigbee2MQTT.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Take back control of your heating",
      text: "Gladys is free, open source and installs with a single Docker command. Pair your Sinopé thermostats and automate the peaks.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT guide", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  fr: {
    meta: {
      title: "Thermostats Sinopé Zigbee sans Neviweb : contrôle local",
      description:
        "Pilotez vos thermostats, contrôleurs de charge et interrupteurs Sinopé Zigbee en local, sans passerelle GT130 ni application Neviweb : associez-les à Zigbee2MQTT et automatisez les pointes d'Hydro-Québec avec Gladys Assistant. Gratuit et open source.",
    },
    screenshotCaption:
      "Vos thermostats Sinopé à côté du reste de la maison, pilotés en local depuis Gladys.",
    hero: {
      title: "Thermostats Sinopé Zigbee, sans Neviweb",
      subtitle:
        "Les appareils Zigbee de Sinopé sont du Zigbee standard. Associez-les à Zigbee2MQTT, pilotez votre chauffage en local avec Gladys Assistant, et automatisez les pointes d'Hydro-Québec.",
      intro: [
        "Les thermostats Sinopé chauffent une grande partie des maisons du Québec. Les modèles Zigbee (ceux qui finissent par ZB, comme le TH1123ZB) passent normalement par la passerelle GT130 et l'application Neviweb. Mais ils parlent un Zigbee standard, et Zigbee2MQTT les prend en charge.",
        "Vous pouvez donc les associer directement à Gladys Assistant, une plateforme domotique gratuite et open source qui tourne sur un mini-PC ou un Raspberry Pi. Réglez la consigne, lisez la température de la pièce et la consommation, et créez des scènes qui baissent le chauffage pendant les événements de pointe d'Hydro-Québec, le tout en local.",
      ],
      primaryCta: {
        label: "Guide d'installation Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Pointes Hydro-Québec en direct →",
        href: "/hydro-quebec-peak-events/",
      },
    },
    problem: {
      title: "Pourquoi piloter ses appareils Sinopé en local",
      intro: "La GT130 et Neviweb fonctionnent, mais avec des limites :",
      points: [
        "L'application Neviweb est un service cloud : le contrôle à distance et de nombreuses fonctions dépendent des serveurs de Sinopé et de votre connexion internet.",
        "Les automatisations restent dans l'univers Sinopé : difficile de combiner vos thermostats avec des capteurs, des lumières ou des appareils d'autres marques.",
        "Vos données de chauffage, l'un des plus gros postes d'une facture d'électricité au Québec, vivent dans l'application de quelqu'un d'autre.",
        "Avec le tarif Flex D, baisser le chauffage au bon moment, à chaque fois, c'est là que se font les économies.",
      ],
      outro:
        "Associer vos appareils Sinopé Zigbee à une plateforme locale garde le matériel que vous avez déjà, et vous en donne le plein contrôle.",
    },
    comparison: {
      title: "Gladys + Zigbee2MQTT vs GT130 + Neviweb",
      intro: "Les mêmes appareils Sinopé, deux façons de les faire fonctionner :",
      cols: {
        feature: "",
        gladys: "Gladys + Zigbee2MQTT",
        other: "GT130 + Neviweb",
      },
      rows: [
        {
          feature: "Passerelle",
          gladys: "Une clé Zigbee USB sur votre mini-PC ou Raspberry Pi",
          other: "GT130 de Sinopé (109,99 $ CA)",
        },
        {
          feature: "Application",
          gladys: "Gladys, qui tourne chez vous",
          other: "Neviweb, un service cloud",
        },
        {
          feature: "Autres marques",
          gladys: "Tout appareil Zigbee, Z-Wave, Matter ou Wi-Fi pris en charge par Gladys",
          other: "Surtout les appareils Sinopé",
        },
        {
          feature: "Pointes d'Hydro-Québec",
          gladys: "Scènes pilotées par l'intégration Hydro-Québec",
          other: "Via Hilo, avec le hub Hilo",
        },
        {
          feature: "Programme de bonis Hilo",
          gladys: "Non admissible",
          other: "Admissible avec la GT130 et le hub Hilo",
        },
        {
          feature: "Code source",
          gladys: "Open source",
          other: "Propriétaire",
        },
      ],
      outro:
        "Un appareil Zigbee ne peut être associé qu'à une seule passerelle à la fois : passer un appareil sur Gladys le retire de Neviweb.",
    },
    features: {
      title: "Les appareils Sinopé Zigbee pris en charge par Zigbee2MQTT",
      intro:
        "Ces modèles Sinopé figurent dans la liste des appareils pris en charge par Zigbee2MQTT. Gladys expose leurs fonctions principales : consigne, température, marche/arrêt, puissance et énergie.",
      cards: [
        {
          icon: "🌡️",
          title: "Thermostats de plinthes",
          text: "TH1123ZB et TH1124ZB (et leurs versions G2), les thermostats électroniques classiques pour plinthes électriques.",
        },
        {
          icon: "🦶",
          title: "Plancher et basse tension",
          text: "TH1300ZB pour le plancher chauffant, TH1400ZB pour les systèmes basse tension et TH1500ZB bipolaire.",
        },
        {
          icon: "🚿",
          title: "Chauffe-eau et contrôleurs de charge",
          text: "Contrôleur de charge RM3250ZB 50 A et contrôleur de chauffe-eau Calypso RM3500ZB : idéals pour couper le chauffe-eau pendant une pointe.",
        },
        {
          icon: "💡",
          title: "Interrupteurs, gradateurs et prises",
          text: "Interrupteur SW2500ZB, gradateurs DM2500ZB et DM2550ZB, prises intelligentes SP2600ZB et SP2610ZB.",
        },
        {
          icon: "💧",
          title: "Détecteurs de fuite et valves",
          text: "Détecteurs de fuite WL4200 et valves Sedna (VA4200WZ, VA4220ZB) pour couper l'eau automatiquement.",
        },
        {
          icon: "❄️",
          title: "Interface de thermopompe",
          text: "Interface HP6000ZB pour thermopompes murales (mini-split).",
        },
      ],
    },
    how: {
      title: "Comment associer ses thermostats Sinopé à Gladys",
      intro: "Sur un mini-PC ou un Raspberry Pi qui fait tourner Gladys :",
      points: [
        "Branchez un coordinateur Zigbee (Sonoff ZBDongle-E ou -P…) sur la machine et activez Zigbee2MQTT dans Gladys.",
        "Retirez l'appareil de la GT130 dans Neviweb, ou réinitialisez-le selon les instructions de Sinopé, pour qu'il quitte l'ancien réseau.",
        "Dans Gladys, ouvrez Zigbee2MQTT → Découverte et autorisez l'association.",
        "Mettez le thermostat en mode d'association comme indiqué dans son manuel : il apparaît dans Gladys avec ses fonctionnalités.",
        "Ajoutez-le à une pièce et à votre tableau de bord, puis créez vos scènes.",
      ],
      outro:
        "Seuls les modèles Zigbee (ZB) fonctionnent ainsi. Les modèles Wi-Fi de Sinopé (TH1123WF, TH1124WF…) ne sont pas en Zigbee et restent sur Neviweb.",
    },
    solution: {
      title: "Automatisez les pointes d'Hydro-Québec avec vos thermostats Sinopé",
      paragraphs: [
        "C'est là que le contrôle local est rentable. L'intégration Hydro-Québec de Gladys sait quand un événement de pointe Flex D ou crédit hivernal, ou la période de préchauffage qui le précède, est en cours. Vos scènes peuvent monter vos thermostats Sinopé d'un ou deux degrés avant la pointe, les baisser pendant, couper le chauffe-eau avec un RM3250ZB ou un RM3500ZB, et tout rétablir ensuite.",
        "Tout tourne sur votre propre matériel, et Gladys est gratuite et open source.",
      ],
      link: {
        label: "Automatiser le tarif Flex D →",
        href: "/hydro-quebec-flex-d/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Réduire sa facture d'hiver au Québec :",
      links: [
        {
          label: "Pointes Hydro-Québec en direct",
          href: "/hydro-quebec-peak-events/",
          text: "Y a-t-il une pointe aujourd'hui ou demain ? En direct depuis les données ouvertes d'Hydro-Québec.",
        },
        {
          label: "Tarif Flex D d'Hydro-Québec",
          href: "/hydro-quebec-flex-d/",
          text: "Comment fonctionne le Flex D et les automatisations qui le rentabilisent.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter pour Zigbee2MQTT.",
        },
        {
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Du Zigbee local, installé pour vous, avec des tableaux de bord.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Reprenez le contrôle de votre chauffage",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Associez vos thermostats Sinopé et automatisez les pointes.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
};

export const sinopeZigbeeFaqEn = [
  {
    question: "Can I use Sinopé thermostats without Neviweb?",
    answer:
      "Yes, the Zigbee models. Sinopé's ZB thermostats and devices are standard Zigbee devices supported by Zigbee2MQTT, so you can pair them with a Zigbee USB dongle and control them locally from a platform like Gladys Assistant, without the GT130 gateway or the Neviweb app.",
  },
  {
    question: "Which Sinopé devices work with Zigbee2MQTT?",
    answer:
      "Zigbee2MQTT lists the TH1123ZB, TH1124ZB (and G2 versions), TH1300ZB, TH1400ZB and TH1500ZB thermostats, the RM3250ZB and RM3500ZB load controllers, the SW2500ZB, DM2500ZB and DM2550ZB switches and dimmers, the SP2600ZB and SP2610ZB plugs, WL4200 leak sensors, Sedna valves and the HP6000ZB heat pump interface.",
  },
  {
    question: "Do Sinopé Wi-Fi thermostats work with Zigbee2MQTT?",
    answer:
      "No. The Wi-Fi models, such as the TH1123WF and TH1124WF, connect to Neviweb over Wi-Fi and are not Zigbee devices. Only the models ending in ZB can be paired with a Zigbee coordinator.",
  },
  {
    question: "Will I lose the Hilo bonus if I leave the GT130?",
    answer:
      "Yes. Sinopé devices earn Hilo bonuses when they are connected through both the GT130 gateway and the Hilo hub. A Zigbee device can only belong to one network, so a device paired with Gladys is no longer seen by Neviweb or Hilo. With Rate Flex D, your own automations can still cut consumption during peaks.",
  },
  {
    question: "Can Gladys lower my Sinopé thermostats during a Hydro-Québec peak?",
    answer:
      "Yes. The Hydro-Québec integration tells Gladys when a peak or pre-heat period is in progress, and a scene can change the setpoint of your Sinopé thermostats, cut the water heater through an RM3250ZB or RM3500ZB, and restore everything when the peak ends.",
  },
];

export const sinopeZigbeeFaqFr = [
  {
    question: "Peut-on utiliser des thermostats Sinopé sans Neviweb ?",
    answer:
      "Oui, les modèles Zigbee. Les thermostats et appareils ZB de Sinopé sont des appareils Zigbee standards pris en charge par Zigbee2MQTT : vous pouvez les associer à une clé Zigbee USB et les piloter en local depuis une plateforme comme Gladys Assistant, sans passerelle GT130 ni application Neviweb.",
  },
  {
    question: "Quels appareils Sinopé fonctionnent avec Zigbee2MQTT ?",
    answer:
      "Zigbee2MQTT liste les thermostats TH1123ZB, TH1124ZB (et versions G2), TH1300ZB, TH1400ZB et TH1500ZB, les contrôleurs de charge RM3250ZB et RM3500ZB, l'interrupteur SW2500ZB et les gradateurs DM2500ZB et DM2550ZB, les prises SP2600ZB et SP2610ZB, les détecteurs de fuite WL4200, les valves Sedna et l'interface de thermopompe HP6000ZB.",
  },
  {
    question: "Les thermostats Sinopé Wi-Fi fonctionnent-ils avec Zigbee2MQTT ?",
    answer:
      "Non. Les modèles Wi-Fi, comme le TH1123WF et le TH1124WF, se connectent à Neviweb en Wi-Fi et ne sont pas des appareils Zigbee. Seuls les modèles qui finissent par ZB peuvent être associés à un coordinateur Zigbee.",
  },
  {
    question: "Vais-je perdre les bonis Hilo si je quitte la GT130 ?",
    answer:
      "Oui. Les appareils Sinopé donnent droit aux bonis Hilo lorsqu'ils sont connectés à la fois via la passerelle GT130 et le hub Hilo. Un appareil Zigbee ne peut appartenir qu'à un seul réseau : un appareil associé à Gladys n'est plus vu par Neviweb ni par Hilo. Avec le tarif Flex D, vos propres automatisations peuvent toujours réduire la consommation pendant les pointes.",
  },
  {
    question: "Gladys peut-elle baisser mes thermostats Sinopé pendant une pointe d'Hydro-Québec ?",
    answer:
      "Oui. L'intégration Hydro-Québec indique à Gladys quand une pointe ou une période de préchauffage est en cours, et une scène peut changer la consigne de vos thermostats Sinopé, couper le chauffe-eau via un RM3250ZB ou un RM3500ZB, et tout rétablir à la fin de la pointe.",
  },
];

export default sinopeZigbeeContent;
