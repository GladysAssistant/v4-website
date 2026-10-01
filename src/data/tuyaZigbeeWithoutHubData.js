// Content for the "Tuya Zigbee without the Tuya hub" landing page.
// Tuya's platform powers thousands of cheap Zigbee devices sold under many
// brands (Moes, Zemismart, Avatto, Lidl Silvercrest...). Zigbee2MQTT supports
// a large share of them (about 1,600 entries counting rebrands, checked in
// zigbee-herdsman-converters 26.114.0, October 2026). Targets "tuya zigbee
// without hub", "tuya zigbee2mqtt", "tuya local control". We are clear about
// the classic caveat: identical model numbers with different firmware.

const tuyaZigbeeWithoutHubContent = {
  en: {
    meta: {
      title: "Tuya Zigbee Without the Tuya Hub or App: Local Control",
      description:
        "Control Tuya Zigbee devices without the Tuya gateway, the Smart Life app or the cloud: pair them with Zigbee2MQTT and automate them locally with Gladys Assistant. What works, what to check before buying.",
    },
    screenshotCaption:
      "Tuya Zigbee plugs, switches and sensors, paired directly over Zigbee, on a Gladys dashboard.",
    hero: {
      title: "Tuya Zigbee devices without the Tuya app",
      subtitle:
        "Cheap Tuya Zigbee plugs, switches, sensors and valves don't need the Tuya gateway or the cloud. Pair them with Zigbee2MQTT and Gladys Assistant, and control them locally.",
      intro: [
        "Tuya is the platform behind a huge number of affordable smart home devices, sold under dozens of brand names. Normally, the Zigbee ones go through a Tuya gateway and the Tuya or Smart Life app, which means Tuya's cloud for almost everything.",
        "But they are Zigbee devices, and Zigbee2MQTT supports well over a thousand Tuya-based models. With Gladys Assistant, a free and open-source smart home platform that installs Zigbee2MQTT for you, you pair them with a Zigbee USB dongle and control them locally: no gateway, no app, no cloud.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT setup guide",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Tuya Wi-Fi devices →",
        href: "/docs/integrations/external/tuya/",
      },
    },
    problem: {
      title: "Why get Tuya devices off the cloud",
      intro: "With the Tuya gateway and app:",
      points: [
        "Control and automations largely go through Tuya's cloud servers.",
        "If the internet or the cloud is down, your devices become hard to control.",
        "Your device data and usage live on Tuya's servers.",
        "Each rebranded app looks different, but they're all tied to the same cloud account system.",
      ],
      outro:
        "Paired with a local Zigbee coordinator, the same inexpensive devices work entirely at home.",
    },
    features: {
      title: "Tuya Zigbee devices that work well in Gladys",
      intro: "Once paired, Tuya devices become regular Gladys devices:",
      cards: [
        {
          icon: "🔌",
          title: "Smart plugs with energy metering",
          text: "On/off control plus power and energy readings, for appliances and the energy dashboard.",
        },
        {
          icon: "💡",
          title: "Switches, dimmers and relays",
          text: "In-wall switches and relay modules to automate existing lights and loads.",
        },
        {
          icon: "🌡️",
          title: "Sensors",
          text: "Temperature and humidity, door and window, motion, leak and smoke sensors.",
        },
        {
          icon: "🪟",
          title: "Covers and valves",
          text: "Roller shutter modules and water valve controllers.",
        },
        {
          icon: "🎬",
          title: "Local scenes",
          text: "Mix Tuya devices with any other brand in scenes that run on your own hardware.",
        },
        {
          icon: "🕸️",
          title: "A stronger mesh",
          text: "Mains-powered Tuya plugs and switches route Zigbee traffic for your battery sensors.",
        },
      ],
    },
    how: {
      title: "How to pair Tuya Zigbee devices without the hub",
      intro: "On a mini-PC or a Raspberry Pi running Gladys:",
      points: [
        "Plug a Zigbee coordinator into the machine and enable Zigbee2MQTT in Gladys.",
        "Remove the device from the Tuya or Smart Life app if it was paired with a Tuya gateway.",
        "In Gladys, open Zigbee2MQTT → Discover and permit joining.",
        "Put the device in pairing mode, usually by holding its button for about five seconds until it blinks.",
        "Check that it appears with the expected features, then add it to a room and your scenes.",
      ],
      outro:
        "Tuya Wi-Fi devices are not Zigbee: for those, Gladys has a separate Tuya integration.",
    },
    solution: {
      title: "Check before you buy",
      paragraphs: [
        "Many Tuya devices share the same model number (TS0601, TS011F…) but run different firmware. Zigbee2MQTT identifies them by their manufacturer name, like _TZ3000_ or _TZE200_ followed by a code. Before buying, search the Zigbee2MQTT supported devices list for the exact product, and prefer listings that mention Zigbee2MQTT compatibility. A brand-new variant may need an external converter until it's added.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "Zigbee2MQTT without Home Assistant →",
        href: "/zigbee2mqtt-without-home-assistant/",
      },
    },
    related: {
      title: "Go further",
      intro: "More devices without their hub:",
      links: [
        {
          label: "Aqara sensors without the hub",
          href: "/aqara-without-hub/",
          text: "Aqara Zigbee sensors, locally, without the Aqara app.",
        },
        {
          label: "Philips Hue without the bridge",
          href: "/philips-hue-without-bridge/",
          text: "Pair Hue bulbs directly with your Zigbee dongle.",
        },
        {
          label: "Water leak detection",
          href: "/water-leak-detection/",
          text: "Tuya leak sensors and valves, shutting the water off automatically.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Take your Tuya devices off the cloud",
      text: "Gladys is free, open source and installs with a single Docker command. Plug in a Zigbee dongle and pair your first Tuya device.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT guide", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  fr: {
    meta: {
      title: "Tuya Zigbee sans passerelle Tuya : contrôle en local",
      description:
        "Pilotez vos appareils Tuya Zigbee sans passerelle Tuya, sans l'application Smart Life et sans cloud : associez-les à Zigbee2MQTT et automatisez-les en local avec Gladys Assistant. Ce qui marche, et ce qu'il faut vérifier avant d'acheter.",
    },
    screenshotCaption:
      "Prises, interrupteurs et capteurs Tuya Zigbee, associés directement en Zigbee, sur un tableau de bord Gladys.",
    hero: {
      title: "Appareils Tuya Zigbee sans l'application Tuya",
      subtitle:
        "Les prises, interrupteurs, capteurs et vannes Tuya Zigbee bon marché n'ont besoin ni de la passerelle Tuya ni du cloud. Associez-les à Zigbee2MQTT et à Gladys Assistant, et pilotez-les en local.",
      intro: [
        "Tuya est la plateforme derrière un nombre énorme d'appareils domotiques abordables, vendus sous des dizaines de marques. Normalement, les modèles Zigbee passent par une passerelle Tuya et l'application Tuya ou Smart Life, donc par le cloud de Tuya pour presque tout.",
        "Mais ce sont des appareils Zigbee, et Zigbee2MQTT prend en charge bien plus d'un millier de modèles basés sur Tuya. Avec Gladys Assistant, une plateforme domotique gratuite et open source qui installe Zigbee2MQTT pour vous, vous les associez à une clé Zigbee USB et les pilotez en local : pas de passerelle, pas d'application, pas de cloud.",
      ],
      primaryCta: {
        label: "Guide d'installation Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Appareils Tuya Wi-Fi →",
        href: "/docs/integrations/external/tuya/",
      },
    },
    problem: {
      title: "Pourquoi sortir ses appareils Tuya du cloud",
      intro: "Avec la passerelle et l'application Tuya :",
      points: [
        "Le pilotage et les automatisations passent en grande partie par les serveurs cloud de Tuya.",
        "Si internet ou le cloud tombe, vos appareils deviennent difficiles à piloter.",
        "Les données et l'usage de vos appareils vivent sur les serveurs de Tuya.",
        "Chaque application de marque a un look différent, mais toutes reposent sur le même système de comptes cloud.",
      ],
      outro:
        "Associés à un coordinateur Zigbee local, les mêmes appareils bon marché fonctionnent entièrement à la maison.",
    },
    features: {
      title: "Les appareils Tuya Zigbee qui fonctionnent bien dans Gladys",
      intro: "Une fois associés, les appareils Tuya deviennent des appareils Gladys comme les autres :",
      cards: [
        {
          icon: "🔌",
          title: "Prises avec mesure d'énergie",
          text: "Marche/arrêt plus puissance et énergie, pour les appareils et le tableau de bord énergie.",
        },
        {
          icon: "💡",
          title: "Interrupteurs, variateurs et relais",
          text: "Interrupteurs muraux et modules relais pour automatiser les lumières et charges existantes.",
        },
        {
          icon: "🌡️",
          title: "Capteurs",
          text: "Température et humidité, ouverture, mouvement, fuite et fumée.",
        },
        {
          icon: "🪟",
          title: "Volets et vannes",
          text: "Modules de volets roulants et contrôleurs de vanne d'eau.",
        },
        {
          icon: "🎬",
          title: "Des scènes locales",
          text: "Mélangez les appareils Tuya avec n'importe quelle autre marque dans des scènes qui tournent sur votre matériel.",
        },
        {
          icon: "🕸️",
          title: "Un maillage plus solide",
          text: "Les prises et interrupteurs Tuya alimentés en permanence relaient le trafic Zigbee de vos capteurs sur pile.",
        },
      ],
    },
    how: {
      title: "Comment associer des appareils Tuya Zigbee sans la passerelle",
      intro: "Sur un mini-PC ou un Raspberry Pi qui fait tourner Gladys :",
      points: [
        "Branchez un coordinateur Zigbee sur la machine et activez Zigbee2MQTT dans Gladys.",
        "Retirez l'appareil de l'application Tuya ou Smart Life s'il était associé à une passerelle Tuya.",
        "Dans Gladys, ouvrez Zigbee2MQTT → Découverte et autorisez l'association.",
        "Mettez l'appareil en mode d'association, généralement en maintenant son bouton environ cinq secondes jusqu'à ce qu'il clignote.",
        "Vérifiez qu'il apparaît avec les fonctionnalités attendues, puis ajoutez-le à une pièce et à vos scènes.",
      ],
      outro:
        "Les appareils Tuya Wi-Fi ne sont pas en Zigbee : pour ceux-là, Gladys a une intégration Tuya séparée.",
    },
    solution: {
      title: "À vérifier avant d'acheter",
      paragraphs: [
        "Beaucoup d'appareils Tuya partagent le même numéro de modèle (TS0601, TS011F…) mais embarquent des firmwares différents. Zigbee2MQTT les identifie par leur nom de fabricant, comme _TZ3000_ ou _TZE200_ suivi d'un code. Avant d'acheter, cherchez le produit exact dans la liste des appareils de Zigbee2MQTT, et privilégiez les annonces qui mentionnent la compatibilité Zigbee2MQTT. Une variante toute récente peut demander un convertisseur externe en attendant d'être ajoutée.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Zigbee2MQTT sans Home Assistant →",
        href: "/zigbee2mqtt-without-home-assistant/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres appareils sans leur box :",
      links: [
        {
          label: "Capteurs Aqara sans hub",
          href: "/aqara-without-hub/",
          text: "Les capteurs Aqara Zigbee en local, sans l'application Aqara.",
        },
        {
          label: "Philips Hue sans le pont",
          href: "/philips-hue-without-bridge/",
          text: "Associez vos ampoules Hue directement à votre clé Zigbee.",
        },
        {
          label: "Détection de fuite d'eau",
          href: "/water-leak-detection/",
          text: "Détecteurs et vannes Tuya pour couper l'eau automatiquement.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Sortez vos appareils Tuya du cloud",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Branchez une clé Zigbee et associez votre premier appareil Tuya.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
};

export const tuyaZigbeeWithoutHubFaqEn = [
  {
    question: "Can Tuya Zigbee devices work without the Tuya hub?",
    answer:
      "Yes. Tuya Zigbee devices are Zigbee devices, and Zigbee2MQTT supports well over a thousand Tuya-based models. Paired with a Zigbee USB dongle and Gladys Assistant, they work locally without the Tuya gateway, the Smart Life app or the cloud.",
  },
  {
    question: "Why isn't my Tuya device recognized by Zigbee2MQTT?",
    answer:
      "Tuya often reuses the same model number for devices with different firmware. Zigbee2MQTT identifies them by manufacturer name (such as _TZ3000_ or _TZE200_ codes), so a new variant may not be supported yet. Check the supported devices list for your exact product; Zigbee2MQTT documents how to add support with an external converter.",
  },
  {
    question: "What about Tuya Wi-Fi devices?",
    answer:
      "Tuya Wi-Fi devices don't use Zigbee, so Zigbee2MQTT can't control them. Gladys has a separate Tuya integration for them.",
  },
  {
    question: "Which Tuya brands does this cover?",
    answer:
      "Many brands sell Tuya-based Zigbee devices, such as Moes, Zemismart, Avatto and others, often under their own names. What matters is the device's Zigbee identity, which you can check on the Zigbee2MQTT supported devices list.",
  },
];

export const tuyaZigbeeWithoutHubFaqFr = [
  {
    question: "Les appareils Tuya Zigbee fonctionnent-ils sans la passerelle Tuya ?",
    answer:
      "Oui. Les appareils Tuya Zigbee sont des appareils Zigbee, et Zigbee2MQTT prend en charge bien plus d'un millier de modèles basés sur Tuya. Associés à une clé Zigbee USB et à Gladys Assistant, ils fonctionnent en local, sans passerelle Tuya, sans l'application Smart Life et sans cloud.",
  },
  {
    question: "Pourquoi mon appareil Tuya n'est-il pas reconnu par Zigbee2MQTT ?",
    answer:
      "Tuya réutilise souvent le même numéro de modèle pour des appareils aux firmwares différents. Zigbee2MQTT les identifie par leur nom de fabricant (codes _TZ3000_ ou _TZE200_ par exemple) : une nouvelle variante peut ne pas être encore prise en charge. Cherchez votre produit exact dans la liste des appareils ; Zigbee2MQTT documente comment ajouter la prise en charge avec un convertisseur externe.",
  },
  {
    question: "Et les appareils Tuya Wi-Fi ?",
    answer:
      "Les appareils Tuya Wi-Fi n'utilisent pas le Zigbee : Zigbee2MQTT ne peut pas les piloter. Gladys a une intégration Tuya séparée pour eux.",
  },
  {
    question: "Quelles marques sont concernées ?",
    answer:
      "Beaucoup de marques vendent des appareils Zigbee basés sur Tuya, comme Moes, Zemismart, Avatto et d'autres, souvent sous leur propre nom. Ce qui compte, c'est l'identité Zigbee de l'appareil, à vérifier dans la liste des appareils de Zigbee2MQTT.",
  },
];

export default tuyaZigbeeWithoutHubContent;
