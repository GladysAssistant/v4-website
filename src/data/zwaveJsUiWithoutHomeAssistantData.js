// Content for the "Z-Wave JS UI without Home Assistant" landing page.
// Z-Wave is much more common in North America than in Europe, and most Z-Wave
// users meet Z-Wave JS UI through Home Assistant. Targets "zwave js ui without
// home assistant", "zwave js ui standalone", "z-wave without home assistant".
// Claims must match docs/integrations/zwavejs-ui.md: Z-Wave JS UI drives the
// stick and publishes to an MQTT broker; Gladys subscribes to that broker.

const zwaveJsUiWithoutHomeAssistantContent = {
  en: {
    meta: {
      title: "Z-Wave JS UI Without Home Assistant: Local Z-Wave Setup",
      description:
        "Run Z-Wave JS UI without Home Assistant: keep Z-Wave JS UI for your network, and use Gladys Assistant over MQTT for dashboards, scenes and AI. Local, free, open source, with US 908 MHz sticks.",
    },
    screenshotCaption:
      "Your Z-Wave devices, managed by Z-Wave JS UI, on a Gladys dashboard.",
    hero: {
      title: "Z-Wave JS UI without Home Assistant",
      subtitle:
        "Z-Wave JS UI is the best way to run a Z-Wave network. Pair it with Gladys Assistant over MQTT and you get dashboards, scenes and AI, without Home Assistant.",
      intro: [
        "Z-Wave JS UI is an open-source application that drives your Z-Wave USB stick and manages your network: inclusion, exclusion, healing, firmware updates. It runs perfectly on its own in Docker, and it can publish every device to an MQTT broker.",
        "That's exactly how Gladys Assistant connects to it. Z-Wave JS UI keeps doing what it does best, and Gladys, a free and open-source smart home platform, turns each node into a device you can put on a dashboard, use in scenes and control from your phone. Everything stays local, on your own hardware.",
      ],
      primaryCta: {
        label: "Z-Wave JS UI setup guide",
        href: "/docs/integrations/zwavejs-ui/",
      },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Why people look for Z-Wave without Home Assistant",
      intro: "Z-Wave users usually want one thing: a reliable network that just works.",
      points: [
        "Z-Wave JS UI's interface is excellent for managing the network, but it isn't a dashboard for the family, and it doesn't do everyday automations.",
        "Home Assistant brings those, along with a large platform to learn, YAML, add-ons and frequent updates to keep up with.",
        "Leaving an old hub (SmartThings, Wink, Vera, Hubitat) is a good moment to choose something simpler, as long as it stays local.",
      ],
      outro:
        "Z-Wave JS UI for the network plus a simple platform on top is a clean, robust split.",
    },
    comparison: {
      title: "Z-Wave JS UI with Gladys vs with Home Assistant",
      intro: "The same Z-Wave JS UI, two ways to use it:",
      cols: {
        feature: "",
        gladys: "With Gladys",
        other: "With Home Assistant",
      },
      rows: [
        {
          feature: "Connection",
          gladys: "MQTT: Z-Wave JS UI publishes, Gladys subscribes",
          other: "WebSocket to the Z-Wave JS server",
        },
        {
          feature: "Network management",
          gladys: "In Z-Wave JS UI",
          other: "In Z-Wave JS UI or the Home Assistant interface",
        },
        {
          feature: "Adding devices",
          gladys: "One click from the Discovered tab",
          other: "Automatic entity discovery",
        },
        {
          feature: "Automations",
          gladys: "Visual scenes, no code",
          other: "Automations, YAML, Node-RED",
        },
        {
          feature: "Runs locally",
          gladys: "Yes",
          other: "Yes",
        },
      ],
      outro:
        "Home Assistant exposes more Z-Wave device types today. Gladys covers the essentials (sensors, switches, dimmers, shutters, energy metering) and is simpler to live with.",
    },
    features: {
      title: "What you get with Z-Wave JS UI in Gladys",
      intro: "Once your Z-Wave nodes are in Gladys:",
      cards: [
        {
          icon: "🚪",
          title: "Sensors",
          text: "Door and window contacts, temperature, luminosity, alarm and binary sensors, with history.",
        },
        {
          icon: "💡",
          title: "Switches and dimmers",
          text: "Plugs, in-wall switches and dimmers, such as Fibaro and Qubino modules.",
        },
        {
          icon: "🪟",
          title: "Shutters and blinds",
          text: "Open, close and set the position of roller shutters and blinds.",
        },
        {
          icon: "⚡",
          title: "Energy metering",
          text: "Track the power and consumption of metering plugs and modules.",
        },
        {
          icon: "🎬",
          title: "Scenes",
          text: "Trigger on any Z-Wave event and act on any device, Z-Wave or not, without code.",
        },
        {
          icon: "📡",
          title: "All your protocols",
          text: "Z-Wave next to Zigbee, Matter and Wi-Fi devices in the same interface.",
        },
      ],
    },
    how: {
      title: "Set up Z-Wave JS UI without Home Assistant",
      intro: "On a mini-PC, a Raspberry Pi or a NAS running Docker:",
      points: [
        "Plug in a Z-Wave USB stick for your region: 908.42 MHz in the US and Canada (Zooz ZST10 700 / ZST39, Aeotec Z-Stick 7 US), 868.42 MHz in Europe.",
        "Run Z-Wave JS UI in Docker and include your devices.",
        "In Z-Wave JS UI, enable the MQTT gateway with the settings from the Gladys guide (named topics, entire value object).",
        "Install Gladys, open the Z-Wave JS UI integration and enter your MQTT broker.",
        "Open the Discovered tab and add your devices in one click.",
      ],
      outro:
        "Need an MQTT broker? Gladys's MQTT integration can start one for you in Docker.",
    },
    solution: {
      title: "Keep Z-Wave JS UI, drop the complexity",
      paragraphs: [
        "Gladys doesn't replace Z-Wave JS UI: your network, your inclusions and your firmware updates stay where they are. Gladys adds the part your household actually sees: dashboards, notifications, scenes, AI and remote access with Gladys Plus.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "Gladys vs Home Assistant, the honest comparison →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Go further",
      intro: "More on local protocols:",
      links: [
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "The same approach for your Zigbee devices.",
        },
        {
          label: "Zigbee vs Z-Wave vs Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Which protocol to choose, and how they can live together.",
        },
        {
          label: "Hubitat alternative",
          href: "/hubitat-alternative/",
          text: "Moving a Z-Wave and Zigbee setup off a Hubitat hub.",
        },
        {
          label: "SmartThings alternative",
          href: "/smartthings-alternative/",
          text: "A local, private alternative to Samsung SmartThings.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Give your Z-Wave network a simple home",
      text: "Gladys is free, open source and installs with a single Docker command. Connect Z-Wave JS UI over MQTT and start automating.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Z-Wave JS UI guide", href: "/docs/integrations/zwavejs-ui/" },
    },
  },

  fr: {
    meta: {
      title: "Z-Wave JS UI sans Home Assistant : le Z-Wave en local",
      description:
        "Utilisez Z-Wave JS UI sans Home Assistant : gardez Z-Wave JS UI pour votre réseau, et Gladys Assistant via MQTT pour les tableaux de bord, les scènes et l'IA. Local, gratuit et open source.",
    },
    screenshotCaption:
      "Vos appareils Z-Wave, gérés par Z-Wave JS UI, sur un tableau de bord Gladys.",
    hero: {
      title: "Z-Wave JS UI sans Home Assistant",
      subtitle:
        "Z-Wave JS UI est la meilleure façon de gérer un réseau Z-Wave. Associez-le à Gladys Assistant via MQTT et vous avez tableaux de bord, scènes et IA, sans Home Assistant.",
      intro: [
        "Z-Wave JS UI est une application open source qui pilote votre clé USB Z-Wave et gère votre réseau : inclusion, exclusion, réparation, mises à jour de firmware. Elle tourne parfaitement seule dans Docker, et peut publier chaque appareil sur un broker MQTT.",
        "C'est exactement ainsi que Gladys Assistant s'y connecte. Z-Wave JS UI continue de faire ce qu'il fait de mieux, et Gladys, une plateforme domotique gratuite et open source, transforme chaque nœud en appareil à mettre sur un tableau de bord, à utiliser dans des scènes et à piloter depuis votre téléphone. Tout reste en local, sur votre matériel.",
      ],
      primaryCta: {
        label: "Guide Z-Wave JS UI",
        href: "/docs/integrations/zwavejs-ui/",
      },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Pourquoi chercher du Z-Wave sans Home Assistant",
      intro: "Les utilisateurs de Z-Wave veulent généralement une chose : un réseau fiable qui marche.",
      points: [
        "L'interface de Z-Wave JS UI est excellente pour gérer le réseau, mais ce n'est pas un tableau de bord pour la famille, et elle ne fait pas les automatisations du quotidien.",
        "Home Assistant les apporte, avec une grosse plateforme à apprendre, du YAML, des modules et des mises à jour fréquentes à suivre.",
        "Quitter une ancienne box (Fibaro, Zipato, Vera, SmartThings…) est le bon moment pour choisir plus simple, tant que ça reste local.",
      ],
      outro:
        "Z-Wave JS UI pour le réseau et une plateforme simple par-dessus : une répartition propre et robuste.",
    },
    comparison: {
      title: "Z-Wave JS UI avec Gladys vs avec Home Assistant",
      intro: "Le même Z-Wave JS UI, deux façons de l'utiliser :",
      cols: {
        feature: "",
        gladys: "Avec Gladys",
        other: "Avec Home Assistant",
      },
      rows: [
        {
          feature: "Connexion",
          gladys: "MQTT : Z-Wave JS UI publie, Gladys s'abonne",
          other: "WebSocket vers le serveur Z-Wave JS",
        },
        {
          feature: "Gestion du réseau",
          gladys: "Dans Z-Wave JS UI",
          other: "Dans Z-Wave JS UI ou l'interface de Home Assistant",
        },
        {
          feature: "Ajout des appareils",
          gladys: "En un clic depuis l'onglet Découverte",
          other: "Découverte automatique des entités",
        },
        {
          feature: "Automatisations",
          gladys: "Scènes visuelles, sans code",
          other: "Automatisations, YAML, Node-RED",
        },
        {
          feature: "Fonctionne en local",
          gladys: "Oui",
          other: "Oui",
        },
      ],
      outro:
        "Home Assistant gère aujourd'hui plus de types d'appareils Z-Wave. Gladys couvre l'essentiel (capteurs, interrupteurs, variateurs, volets, mesure d'énergie) et est plus simple à vivre au quotidien.",
    },
    features: {
      title: "Ce que vous obtenez avec Z-Wave JS UI dans Gladys",
      intro: "Une fois vos nœuds Z-Wave dans Gladys :",
      cards: [
        {
          icon: "🚪",
          title: "Capteurs",
          text: "Ouverture de portes et fenêtres, température, luminosité, alarmes et capteurs binaires, avec historique.",
        },
        {
          icon: "💡",
          title: "Interrupteurs et variateurs",
          text: "Prises, modules encastrés et variateurs, comme les modules Fibaro et Qubino.",
        },
        {
          icon: "🪟",
          title: "Volets et stores",
          text: "Ouvrir, fermer et régler la position des volets roulants et des stores.",
        },
        {
          icon: "⚡",
          title: "Mesure d'énergie",
          text: "Suivez la puissance et la consommation des prises et modules avec mesure.",
        },
        {
          icon: "🎬",
          title: "Scènes",
          text: "Déclenchez sur n'importe quel événement Z-Wave et agissez sur n'importe quel appareil, Z-Wave ou non, sans code.",
        },
        {
          icon: "📡",
          title: "Tous vos protocoles",
          text: "Le Z-Wave à côté des appareils Zigbee, Matter et Wi-Fi, dans la même interface.",
        },
      ],
    },
    how: {
      title: "Installer Z-Wave JS UI sans Home Assistant",
      intro: "Sur un mini-PC, un Raspberry Pi ou un NAS avec Docker :",
      points: [
        "Branchez une clé USB Z-Wave adaptée à votre région : 868,42 MHz en Europe, 908,42 MHz aux États-Unis et au Canada.",
        "Lancez Z-Wave JS UI dans Docker et incluez vos appareils.",
        "Dans Z-Wave JS UI, activez la passerelle MQTT avec les réglages du guide Gladys (topics nommés, objet de valeur complet).",
        "Installez Gladys, ouvrez l'intégration Z-Wave JS UI et renseignez votre broker MQTT.",
        "Ouvrez l'onglet Découverte et ajoutez vos appareils en un clic.",
      ],
      outro:
        "Besoin d'un broker MQTT ? L'intégration MQTT de Gladys peut en lancer un pour vous dans Docker.",
    },
    solution: {
      title: "Gardez Z-Wave JS UI, laissez tomber la complexité",
      paragraphs: [
        "Gladys ne remplace pas Z-Wave JS UI : votre réseau, vos inclusions et vos mises à jour de firmware restent où ils sont. Gladys ajoute ce que votre foyer voit vraiment : tableaux de bord, notifications, scènes, IA et accès à distance avec Gladys Plus.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Gladys vs Home Assistant, le comparatif honnête →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Plus sur les protocoles locaux :",
      links: [
        {
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "La même approche pour vos appareils Zigbee.",
        },
        {
          label: "Zigbee vs Z-Wave vs Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Quel protocole choisir, et comment les faire cohabiter.",
        },
        {
          label: "Alternative à Homey",
          href: "/homey-alternative/",
          text: "Une alternative gratuite et open source à la box Homey Pro.",
        },
        {
          label: "Alternative à Jeedom",
          href: "/jeedom-alternative/",
          text: "Pourquoi on passe de Jeedom à Gladys.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Offrez à votre réseau Z-Wave une maison simple",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Connectez Z-Wave JS UI via MQTT et commencez à automatiser.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Z-Wave JS UI", href: "/docs/integrations/zwavejs-ui/" },
    },
  },
};

export const zwaveJsUiWithoutHomeAssistantFaqEn = [
  {
    question: "Can Z-Wave JS UI run without Home Assistant?",
    answer:
      "Yes. Z-Wave JS UI is a standalone application, usually run with Docker. It manages the Z-Wave stick and the network on its own, and can publish devices to an MQTT broker. Gladys Assistant connects to that broker to add dashboards, scenes and AI.",
  },
  {
    question: "How does Gladys connect to Z-Wave JS UI?",
    answer:
      "Over MQTT. Z-Wave JS UI publishes device states to an MQTT broker with named topics, and Gladys subscribes to the broker to read states and send commands in real time. The exact settings are in the Gladys Z-Wave JS UI guide.",
  },
  {
    question: "Which Z-Wave stick should I buy in the US or Canada?",
    answer:
      "One built for the North American 908.42 MHz frequency, such as the Zooz ZST10 700 / ZST39 or the Aeotec Z-Stick 7 (US version). A European 868.42 MHz stick won't talk to North American devices.",
  },
  {
    question: "Which Z-Wave devices does Gladys support?",
    answer:
      "Door and window sensors, binary switches and plugs, dimmers, roller shutters, temperature, luminosity and alarm sensors, and energy metering. If a device isn't supported yet, the forum is the place to ask.",
  },
  {
    question: "Does Z-Wave with Gladys work without the internet?",
    answer:
      "Yes. Z-Wave JS UI, the MQTT broker and Gladys all run on your own hardware, so your Z-Wave devices and scenes keep working with no internet connection and no manufacturer cloud.",
  },
];

export const zwaveJsUiWithoutHomeAssistantFaqFr = [
  {
    question: "Z-Wave JS UI peut-il tourner sans Home Assistant ?",
    answer:
      "Oui. Z-Wave JS UI est une application autonome, généralement lancée avec Docker. Elle gère seule la clé Z-Wave et le réseau, et peut publier les appareils sur un broker MQTT. Gladys Assistant se connecte à ce broker pour ajouter tableaux de bord, scènes et IA.",
  },
  {
    question: "Comment Gladys se connecte-t-elle à Z-Wave JS UI ?",
    answer:
      "Via MQTT. Z-Wave JS UI publie l'état des appareils sur un broker MQTT avec des topics nommés, et Gladys s'abonne au broker pour lire les états et envoyer des commandes en temps réel. Les réglages exacts sont dans le guide Z-Wave JS UI de Gladys.",
  },
  {
    question: "Quelle clé Z-Wave acheter ?",
    answer:
      "Une clé adaptée à la fréquence de votre région : 868,42 MHz en Europe, 908,42 MHz aux États-Unis et au Canada. Une clé d'une autre région ne communiquera pas avec vos appareils.",
  },
  {
    question: "Quels appareils Z-Wave Gladys prend-elle en charge ?",
    answer:
      "Capteurs d'ouverture, interrupteurs et prises, variateurs, volets roulants, capteurs de température, de luminosité et d'alarme, et mesure d'énergie. Si un appareil n'est pas encore pris en charge, demandez sur le forum.",
  },
  {
    question: "Le Z-Wave avec Gladys fonctionne-t-il sans internet ?",
    answer:
      "Oui. Z-Wave JS UI, le broker MQTT et Gladys tournent tous sur votre propre matériel : vos appareils Z-Wave et vos scènes continuent de fonctionner sans connexion internet et sans cloud constructeur.",
  },
];

export default zwaveJsUiWithoutHomeAssistantContent;
