// Content for the "Hubitat alternative" landing page.
// Hubitat Elevation is the reference local hub in North America: Zigbee,
// Z-Wave and Matter in a box, automations that run locally. People looking for
// an alternative usually want a modern interface, open source, or no yearly
// services. We stay fair: Hubitat is a good local hub, so the angle is "the
// same local-first philosophy, open source and with a modern interface".
// Facts checked on hubitat.com and the Hubitat community in September 2026:
// C-8 Pro is the only hub on sale ($184.95), Remote Admin and Hub Protect are
// $45/year each since May 2025, platform is proprietary (Groovy for custom
// apps and drivers). Update when Hubitat changes its lineup or prices.

const hubitatAlternativeContent = {
  en: {
    meta: {
      title: "Hubitat Alternative: Open-Source, Local Smart Home Hub",
      description:
        "Looking for a Hubitat Elevation alternative? Gladys Assistant is a free, open-source smart home platform that runs locally like Hubitat, with Zigbee, Z-Wave and Matter, a modern interface and no yearly services required.",
    },
    screenshotCaption:
      "A modern, mobile-first dashboard that runs on your own hardware, like Hubitat, but open source.",
    hero: {
      title: "Looking for a Hubitat alternative?",
      subtitle:
        "Keep what you like about Hubitat, local automations and no cloud dependency, and add a modern interface, open source and your own choice of hardware.",
      intro: [
        "Hubitat Elevation earned its place in North American smart homes by doing one thing right: automations run on the hub, in your home, not in someone's cloud. Many SmartThings and Wink refugees landed there for exactly that reason.",
        "Gladys Assistant shares that philosophy, and goes one step further. It's a free, open-source smart home platform that you run on your own mini-PC or Raspberry Pi. Your Zigbee, Z-Wave and Matter devices pair directly with it, your scenes run locally, and the interface was designed from the ground up for the phone in your pocket.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Try the demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Why people look for an alternative to Hubitat",
      intro:
        "Hubitat is a solid local hub, but some trade-offs come up again and again:",
      points: [
        "The interface feels dated, and customizing dashboards often means writing CSS.",
        "Rule Machine is powerful, but many users find it hard to read and maintain.",
        "The platform is proprietary: the built-in drivers are closed, and custom apps and drivers are written in Groovy.",
        "Remote Admin and Hub Protect are paid yearly services ($45/year each since May 2025).",
        "You're tied to Hubitat's hardware: when a radio or a model is discontinued, your options narrow.",
      ],
      outro:
        "None of this makes Hubitat a bad choice. But if you want local control with a modern interface and open source, there is another way.",
    },
    comparison: {
      title: "Gladys Assistant vs Hubitat Elevation",
      intro: "How the two compare on what matters for a local smart home:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Hubitat Elevation",
      },
      rows: [
        {
          feature: "Hardware",
          gladys: "Your own mini-PC, Raspberry Pi or NAS",
          other: "Hubitat's C-8 Pro hub ($184.95)",
        },
        {
          feature: "Automations run locally",
          gladys: "Yes",
          other: "Yes",
        },
        {
          feature: "Zigbee and Z-Wave",
          gladys: "Yes, with USB dongles (Zigbee2MQTT, Z-Wave JS UI)",
          other: "Yes, built-in radios, Z-Wave Long Range",
        },
        {
          feature: "Matter",
          gladys: "Yes, Gladys is a Matter controller",
          other: "Yes",
        },
        {
          feature: "Automations",
          gladys: "Visual scenes, no code",
          other: "Rule Machine, Basic Rules, Groovy apps",
        },
        {
          feature: "Source code",
          gladys: "Open source (Apache 2.0)",
          other: "Proprietary",
        },
        {
          feature: "Remote access",
          gladys: "Optional Gladys Plus ($7.99/month, also includes AI, backups, Alexa and Google)",
          other: "Remote Admin ($45/year), Easy Dashboard cloud links for free",
        },
        {
          feature: "Built-in AI assistant",
          gladys: "Yes, with Gladys Plus, plus a free MCP server for Claude and others",
          other: "No",
        },
      ],
      outro:
        "Hubitat wins on plug-and-play hardware with built-in radios. Gladys wins on interface, openness and freedom of hardware.",
    },
    features: {
      title: "Why Gladys is a good Hubitat alternative",
      intro: "What you get when you move your home to Gladys:",
      cards: [
        {
          icon: "🏠",
          title: "Local first",
          text: "Gladys runs on your own machine. Your devices, scenes and history stay on your network and keep working without the internet.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave and Matter",
          text: "Zigbee through Zigbee2MQTT, Z-Wave through Z-Wave JS UI (US 908 MHz sticks), and Matter, side by side.",
        },
        {
          icon: "📱",
          title: "A modern interface",
          text: "Gladys 5 was designed for phones and wall tablets: dashboards that look good without a line of CSS.",
        },
        {
          icon: "🧠",
          title: "Scenes anyone can read",
          text: "Triggers, conditions, if/then/else and delays in a visual editor that the rest of the household can understand.",
        },
        {
          icon: "🤖",
          title: "AI when you want it",
          text: "Talk to your home in plain language with Gladys Plus, or connect Claude through the built-in MCP server.",
        },
        {
          icon: "💚",
          title: "Open source, no lock-in",
          text: "Apache 2.0, developed in the open since 2013. Your hardware, your data, your choice.",
        },
      ],
    },
    how: {
      title: "How to migrate from Hubitat to Gladys",
      intro: "You can move room by room, keeping Hubitat running in the meantime:",
      points: [
        "Install Gladys on a mini-PC or a Raspberry Pi, and list your Hubitat devices by protocol.",
        "Zigbee devices: add a Zigbee USB dongle, remove each device from Hubitat, and pair it with Zigbee2MQTT in Gladys.",
        "Z-Wave devices: add a US 908 MHz Z-Wave stick, exclude each device from Hubitat, and include it in Z-Wave JS UI.",
        "Matter devices: share them with Gladys as a second controller (Matter supports several), then remove them from Hubitat.",
        "Wi-Fi and cloud devices (Hue, Kasa, Tapo, Shelly, Sonos…): connect them through their Gladys integration.",
        "Rebuild your rules as Gladys scenes, then retire the hub when you're ready.",
      ],
      outro:
        "Tip: start with the devices in one room to get familiar with Gladys before moving the rest.",
    },
    solution: {
      title: "Hubitat's philosophy, without the closed box",
      paragraphs: [
        "If you chose Hubitat to get away from the cloud, you already understand why local matters. Gladys keeps that promise and removes the other constraints: open source code, standard hardware you can upgrade, and an interface you'll actually enjoy using.",
        "Gladys is free. Gladys Plus is an optional subscription for encrypted remote access, backups, Alexa and Google Home, and the AI assistant, with a one-month free trial.",
      ],
      link: {
        label: "See what works with Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Go further",
      intro: "More guides for a local smart home:",
      links: [
        {
          label: "Best smart home hub",
          href: "/best-smart-home-hub/",
          text: "Hubitat, Homey, SmartThings and a mini-PC, compared.",
        },
        {
          label: "SmartThings alternative",
          href: "/smartthings-alternative/",
          text: "A local, private alternative to Samsung SmartThings.",
        },
        {
          label: "Z-Wave JS UI without Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "Run your Z-Wave network locally with a simple interface.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
        },
        {
          label: "Home Assistant Green alternative",
          href: "/home-assistant-green-alternative/",
          text: "Building your own local hub with a mini-PC.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "A local smart home, open source",
      text: "Gladys is free, open source and installs with a single Docker command. Try it next to your Hubitat and move at your own pace.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Works with Gladys", href: "/works-with/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative à Hubitat : domotique locale et open source",
      description:
        "Vous cherchez une alternative à Hubitat Elevation ? Gladys Assistant est une plateforme domotique gratuite et open source qui tourne en local comme Hubitat, avec Zigbee, Z-Wave et Matter, une interface moderne et sans abonnement annuel obligatoire.",
    },
    screenshotCaption:
      "Un tableau de bord moderne, pensé pour le mobile, qui tourne sur votre matériel, comme Hubitat, mais open source.",
    hero: {
      title: "Vous cherchez une alternative à Hubitat ?",
      subtitle:
        "Gardez ce que vous aimez chez Hubitat, les automatisations locales et l'indépendance vis-à-vis du cloud, et ajoutez une interface moderne, l'open source et le libre choix du matériel.",
      intro: [
        "Hubitat Elevation s'est fait une place dans les maisons nord-américaines en faisant une chose bien : les automatisations tournent sur la box, chez vous, pas dans le cloud de quelqu'un d'autre.",
        "Gladys Assistant partage cette philosophie, et va plus loin. C'est une plateforme domotique gratuite et open source que vous faites tourner sur votre propre mini-PC ou Raspberry Pi. Vos appareils Zigbee, Z-Wave et Matter s'y associent directement, vos scènes tournent en local, et l'interface a été pensée dès le départ pour le téléphone.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Essayer la démo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Pourquoi chercher une alternative à Hubitat",
      intro:
        "Hubitat est une bonne box locale, mais certains compromis reviennent souvent :",
      points: [
        "L'interface fait daté, et personnaliser les tableaux de bord demande souvent d'écrire du CSS.",
        "Rule Machine est puissant, mais beaucoup d'utilisateurs le trouvent difficile à lire et à maintenir.",
        "La plateforme est propriétaire : les pilotes intégrés sont fermés, et les applications et pilotes personnalisés s'écrivent en Groovy.",
        "Remote Admin et Hub Protect sont des services payants annuels (45 $ par an chacun depuis mai 2025).",
        "Vous dépendez du matériel Hubitat : quand une radio ou un modèle est abandonné, vos options se réduisent.",
      ],
      outro:
        "Rien de tout ça ne fait de Hubitat un mauvais choix. Mais si vous voulez du local avec une interface moderne et de l'open source, il existe une autre voie.",
    },
    comparison: {
      title: "Gladys Assistant vs Hubitat Elevation",
      intro: "Comment les deux se comparent sur ce qui compte pour une maison locale :",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Hubitat Elevation",
      },
      rows: [
        {
          feature: "Matériel",
          gladys: "Votre mini-PC, Raspberry Pi ou NAS",
          other: "La box C-8 Pro de Hubitat (184,95 $ US)",
        },
        {
          feature: "Automatisations en local",
          gladys: "Oui",
          other: "Oui",
        },
        {
          feature: "Zigbee et Z-Wave",
          gladys: "Oui, avec des clés USB (Zigbee2MQTT, Z-Wave JS UI)",
          other: "Oui, radios intégrées, Z-Wave Long Range",
        },
        {
          feature: "Matter",
          gladys: "Oui, Gladys est un contrôleur Matter",
          other: "Oui",
        },
        {
          feature: "Automatisations",
          gladys: "Scènes visuelles, sans code",
          other: "Rule Machine, Basic Rules, applications Groovy",
        },
        {
          feature: "Code source",
          gladys: "Open source (Apache 2.0)",
          other: "Propriétaire",
        },
        {
          feature: "Accès à distance",
          gladys: "Gladys Plus en option (inclut aussi l'IA, les sauvegardes, Alexa et Google)",
          other: "Remote Admin (45 $ par an), liens cloud Easy Dashboard gratuits",
        },
        {
          feature: "Assistant IA intégré",
          gladys: "Oui, avec Gladys Plus, plus un serveur MCP gratuit pour Claude et d'autres",
          other: "Non",
        },
      ],
      outro:
        "Hubitat l'emporte sur le matériel prêt à l'emploi avec radios intégrées. Gladys l'emporte sur l'interface, l'ouverture et la liberté du matériel.",
    },
    features: {
      title: "Pourquoi Gladys est une bonne alternative à Hubitat",
      intro: "Ce que vous gagnez en passant votre maison sur Gladys :",
      cards: [
        {
          icon: "🏠",
          title: "Local d'abord",
          text: "Gladys tourne sur votre propre machine. Vos appareils, scènes et historiques restent sur votre réseau et fonctionnent sans internet.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave et Matter",
          text: "Le Zigbee via Zigbee2MQTT, le Z-Wave via Z-Wave JS UI, et Matter, côte à côte.",
        },
        {
          icon: "📱",
          title: "Une interface moderne",
          text: "Gladys 5 a été pensée pour les téléphones et les tablettes murales : des tableaux de bord soignés sans une ligne de CSS.",
        },
        {
          icon: "🧠",
          title: "Des scènes lisibles par tous",
          text: "Déclencheurs, conditions, si/alors/sinon et délais dans un éditeur visuel que toute la famille peut comprendre.",
        },
        {
          icon: "🤖",
          title: "L'IA si vous le voulez",
          text: "Parlez à votre maison en langage naturel avec Gladys Plus, ou connectez Claude via le serveur MCP intégré.",
        },
        {
          icon: "💚",
          title: "Open source, sans enfermement",
          text: "Apache 2.0, développée de façon ouverte depuis 2013. Votre matériel, vos données, votre choix.",
        },
      ],
    },
    how: {
      title: "Comment migrer de Hubitat vers Gladys",
      intro: "Vous pouvez migrer pièce par pièce, en gardant Hubitat en attendant :",
      points: [
        "Installez Gladys sur un mini-PC ou un Raspberry Pi, et listez vos appareils Hubitat par protocole.",
        "Appareils Zigbee : ajoutez une clé Zigbee USB, retirez chaque appareil de Hubitat et associez-le à Zigbee2MQTT dans Gladys.",
        "Appareils Z-Wave : ajoutez une clé Z-Wave de la bonne fréquence, excluez chaque appareil de Hubitat et incluez-le dans Z-Wave JS UI.",
        "Appareils Matter : partagez-les avec Gladys comme second contrôleur (Matter en accepte plusieurs), puis retirez-les de Hubitat.",
        "Appareils Wi-Fi et cloud (Hue, Kasa, Tapo, Shelly, Sonos…) : connectez-les via leur intégration Gladys.",
        "Recréez vos règles en scènes Gladys, puis retirez la box quand vous êtes prêt.",
      ],
      outro:
        "Astuce : commencez par les appareils d'une seule pièce pour prendre Gladys en main avant de migrer le reste.",
    },
    solution: {
      title: "La philosophie de Hubitat, sans la boîte fermée",
      paragraphs: [
        "Si vous avez choisi Hubitat pour sortir du cloud, vous savez déjà pourquoi le local compte. Gladys tient cette promesse et lève les autres contraintes : un code open source, du matériel standard que vous pouvez faire évoluer, et une interface que vous aurez plaisir à utiliser.",
        "Gladys est gratuite. Gladys Plus est un abonnement optionnel pour l'accès distant chiffré, les sauvegardes, Alexa et Google Home, et l'assistant IA, avec un mois d'essai gratuit.",
      ],
      link: {
        label: "Voir les appareils compatibles →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres guides pour une maison locale :",
      links: [
        {
          label: "Quelle box domotique choisir",
          href: "/best-smart-home-hub/",
          text: "Jeedom, Homey, Home Assistant Green et un mini-PC, comparés.",
        },
        {
          label: "Alternative à SmartThings",
          href: "/smartthings-alternative/",
          text: "Une alternative locale et privée à Samsung SmartThings.",
        },
        {
          label: "Z-Wave JS UI sans Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "Votre réseau Z-Wave en local avec une interface simple.",
        },
        {
          label: "Alternative à Homey",
          href: "/homey-alternative/",
          text: "Une alternative gratuite et open source à la box Homey Pro.",
        },
        {
          label: "Alternative au Home Assistant Green",
          href: "/home-assistant-green-alternative/",
          text: "Monter sa propre box locale avec un mini-PC.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Une maison locale, en open source",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Essayez-la à côté de votre Hubitat et migrez à votre rythme.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Appareils compatibles", href: "/works-with/" },
    },
  },

  de: {
    meta: {
      title: "Hubitat Alternative: lokale Open-Source-Zentrale",
      description:
        "Suchst du eine Hubitat Elevation Alternative? Gladys Assistant ist kostenlos, Open Source und läuft lokal: Zigbee, Z-Wave, Matter, moderne Oberfläche.",
    },
    screenshotCaption:
      "Ein modernes Dashboard, gemacht fürs Smartphone, das auf deiner eigenen Hardware läuft, wie Hubitat, aber Open Source.",
    hero: {
      title: "Du suchst eine Alternative zu Hubitat?",
      subtitle:
        "Behalte, was du an Hubitat magst, lokale Automationen ohne Cloud-Abhängigkeit, und bekomm dazu eine moderne Oberfläche, Open Source und freie Wahl der Hardware.",
      intro: [
        "Hubitat Elevation hat sich in nordamerikanischen Smart Homes einen Namen gemacht, weil es eine Sache richtig macht: Automationen laufen auf dem Hub, bei dir zu Hause, nicht in irgendeiner Cloud. Viele, die SmartThings oder Wink den Rücken gekehrt haben, sind genau deshalb dort gelandet.",
        "Gladys Assistant teilt diese Philosophie und geht noch einen Schritt weiter. Es ist eine kostenlose Open-Source-Plattform für dein Smart Home, die du auf deinem eigenen Mini-PC oder Raspberry Pi betreibst. Deine Zigbee-, Z-Wave- und Matter-Geräte koppelst du direkt damit, deine Szenen laufen lokal, und die Oberfläche wurde von Grund auf für das Smartphone in deiner Tasche entwickelt.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/docs/" },
      secondaryCta: {
        label: "Demo ausprobieren →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Warum viele eine Alternative zu Hubitat suchen",
      intro:
        "Hubitat ist ein solider lokaler Hub, aber einige Kompromisse tauchen immer wieder auf:",
      points: [
        "Die Oberfläche wirkt altbacken, und eigene Dashboards bedeuten oft, CSS zu schreiben.",
        "Rule Machine ist mächtig, aber viele Nutzer finden die Regeln schwer zu lesen und zu pflegen.",
        "Die Plattform ist proprietär: Die eingebauten Treiber sind geschlossen, und eigene Apps und Treiber werden in Groovy geschrieben.",
        "Remote Admin und Hub Protect sind kostenpflichtige Jahresdienste (seit Mai 2025 je 45 US-$ pro Jahr).",
        "Du bist an die Hardware von Hubitat gebunden: Wird ein Funkmodul oder Modell eingestellt, schrumpfen deine Optionen.",
      ],
      outro:
        "Nichts davon macht Hubitat zu einer schlechten Wahl. Aber wenn du lokale Steuerung mit moderner Oberfläche und Open Source willst, gibt es einen anderen Weg.",
    },
    comparison: {
      title: "Gladys Assistant vs. Hubitat Elevation",
      intro: "So schneiden die beiden bei dem ab, was für ein lokales Smart Home zählt:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Hubitat Elevation",
      },
      rows: [
        {
          feature: "Hardware",
          gladys: "Dein eigener Mini-PC, Raspberry Pi oder NAS",
          other: "Der C-8 Pro Hub von Hubitat (184,95 US-$)",
        },
        {
          feature: "Automationen laufen lokal",
          gladys: "Ja",
          other: "Ja",
        },
        {
          feature: "Zigbee und Z-Wave",
          gladys: "Ja, mit USB-Sticks (Zigbee2MQTT, Z-Wave JS UI)",
          other: "Ja, eingebaute Funkmodule, Z-Wave Long Range",
        },
        {
          feature: "Matter",
          gladys: "Ja, Gladys ist ein Matter-Controller",
          other: "Ja",
        },
        {
          feature: "Automationen",
          gladys: "Visuelle Szenen, ohne Code",
          other: "Rule Machine, Basic Rules, Groovy-Apps",
        },
        {
          feature: "Quellcode",
          gladys: "Open Source (Apache 2.0)",
          other: "Proprietär",
        },
        {
          feature: "Fernzugriff",
          gladys: "Optional mit Gladys Plus (ab 6,99 €/Monat, inklusive KI, Backups, Alexa und Google)",
          other: "Remote Admin (45 US-$ pro Jahr), Cloud-Links für Easy Dashboard kostenlos",
        },
        {
          feature: "Eingebauter KI-Assistent",
          gladys: "Ja, mit Gladys Plus, dazu ein kostenloser MCP-Server für Claude und andere",
          other: "Nein",
        },
      ],
      outro:
        "Hubitat punktet mit Plug-and-play-Hardware samt eingebauten Funkmodulen. Gladys punktet mit Oberfläche, Offenheit und freier Wahl der Hardware.",
    },
    features: {
      title: "Warum Gladys eine gute Hubitat Alternative ist",
      intro: "Das bekommst du, wenn du dein Zuhause auf Gladys umziehst:",
      cards: [
        {
          icon: "🏠",
          title: "Lokal zuerst",
          text: "Gladys läuft auf deinem eigenen Rechner. Geräte, Szenen und Verlauf bleiben in deinem Netzwerk und funktionieren auch ohne Internet.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave und Matter",
          text: "Zigbee über Zigbee2MQTT, Z-Wave über Z-Wave JS UI (mit Stick in der passenden Frequenz) und Matter, Seite an Seite.",
        },
        {
          icon: "📱",
          title: "Eine moderne Oberfläche",
          text: "Gladys 5 wurde für Smartphones und Wand-Tablets entwickelt: Dashboards, die gut aussehen, ohne eine Zeile CSS.",
        },
        {
          icon: "🧠",
          title: "Szenen, die jeder versteht",
          text: "Auslöser, Bedingungen, Wenn/Dann/Sonst und Verzögerungen in einem visuellen Editor, den auch der Rest des Haushalts versteht.",
        },
        {
          icon: "🤖",
          title: "KI, wenn du willst",
          text: "Sprich mit Gladys Plus in normaler Sprache mit deinem Zuhause, oder verbinde Claude über den eingebauten MCP-Server.",
        },
        {
          icon: "💚",
          title: "Open Source, kein Lock-in",
          text: "Apache 2.0, seit 2013 öffentlich entwickelt. Deine Hardware, deine Daten, deine Wahl.",
        },
      ],
    },
    how: {
      title: "So ziehst du von Hubitat zu Gladys um",
      intro: "Du kannst Raum für Raum umziehen und Hubitat so lange weiterlaufen lassen:",
      points: [
        "Installiere Gladys auf einem Mini-PC oder Raspberry Pi und liste deine Hubitat-Geräte nach Protokoll auf.",
        "Zigbee-Geräte: Schließe einen Zigbee-USB-Stick an, entferne jedes Gerät aus Hubitat und kopple es in Gladys mit Zigbee2MQTT.",
        "Z-Wave-Geräte: Schließe einen Z-Wave-Stick in der passenden Frequenz an, exkludiere jedes Gerät aus Hubitat und inkludiere es in Z-Wave JS UI.",
        "Matter-Geräte: Teile sie mit Gladys als zweitem Controller (Matter erlaubt mehrere) und entferne sie dann aus Hubitat.",
        "WLAN- und Cloud-Geräte (Hue, Kasa, Tapo, Shelly, Sonos…): Verbinde sie über ihre Gladys-Integration.",
        "Baue deine Regeln als Gladys-Szenen nach und schick den Hub in Rente, sobald du so weit bist.",
      ],
      outro:
        "Tipp: Fang mit den Geräten eines einzigen Raums an, um Gladys kennenzulernen, bevor du den Rest umziehst.",
    },
    solution: {
      title: "Die Philosophie von Hubitat, ohne die geschlossene Box",
      paragraphs: [
        "Wenn du Hubitat gewählt hast, um von der Cloud wegzukommen, weißt du schon, warum lokal wichtig ist. Gladys hält dieses Versprechen und räumt die übrigen Einschränkungen aus dem Weg: Open-Source-Code, Standardhardware, die du aufrüsten kannst, und eine Oberfläche, die du wirklich gern benutzt.",
        "Gladys ist kostenlos. Gladys Plus ist ein optionales Abo für verschlüsselten Fernzugriff, Backups, Alexa und Google Home sowie den KI-Assistenten, mit einem Monat kostenlosem Test.",
      ],
      link: {
        label: "Sieh dir an, was mit Gladys funktioniert →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Weitere Ratgeber für ein lokales Smart Home:",
      links: [
        {
          label: "Die beste Smart Home Zentrale",
          href: "/best-smart-home-hub/",
          text: "Hubitat, Homey, SmartThings und ein Mini-PC im Vergleich.",
        },
        {
          label: "SmartThings Alternative",
          href: "/smartthings-alternative/",
          text: "Eine lokale, private Alternative zu Samsung SmartThings.",
        },
        {
          label: "Z-Wave JS UI ohne Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "Betreibe dein Z-Wave-Netz lokal mit einer einfachen Oberfläche.",
        },
        {
          label: "Zigbee2MQTT ohne Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Lokales Zigbee mit verwalteter Einrichtung und Dashboards.",
        },
        {
          label: "Home Assistant Green Alternative",
          href: "/home-assistant-green-alternative/",
          text: "Deine eigene lokale Zentrale mit einem Mini-PC bauen.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Ein lokales Smart Home, Open Source",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Probier es neben deinem Hubitat aus und zieh in deinem Tempo um.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Funktioniert mit Gladys", href: "/works-with/" },
    },
  },
};

export const hubitatAlternativeFaqEn = [
  {
    question: "What is the best Hubitat alternative?",
    answer:
      "If you want to stay local, the main options are Home Assistant, Gladys Assistant and openHAB, all open source and self-hosted. Gladys is the simplest of the three: a modern interface, visual scenes and a managed Zigbee2MQTT setup, running on a mini-PC or a Raspberry Pi.",
  },
  {
    question: "Can I move my Zigbee and Z-Wave devices from Hubitat to Gladys?",
    answer:
      "Yes. Zigbee and Z-Wave are standard protocols: remove or exclude each device from Hubitat, then pair it with Zigbee2MQTT or include it in Z-Wave JS UI with a USB dongle. Matter devices can be shared with Gladys as a second controller.",
  },
  {
    question: "Does Gladys need a subscription like Hubitat's Remote Admin?",
    answer:
      "No. Gladys is free and works fully on your local network. Gladys Plus is optional ($7.99/month in the US and Canada, with a one-month free trial) and bundles encrypted remote access, backups, Alexa and Google Home, and the AI assistant.",
  },
  {
    question: "Is Hubitat open source?",
    answer:
      "No. The Hubitat platform and its built-in drivers are proprietary; Hubitat publishes some example apps and drivers, and the community writes custom ones in Groovy. Gladys Assistant is fully open source under Apache 2.0.",
  },
  {
    question: "Which hardware do I need to replace a Hubitat hub?",
    answer:
      "A mini-PC or a Raspberry Pi running Docker, plus a Zigbee USB dongle and a US 908 MHz Z-Wave stick if you use those protocols. Matter and Wi-Fi devices don't need any extra radio.",
  },
];

export const hubitatAlternativeFaqFr = [
  {
    question: "Quelle est la meilleure alternative à Hubitat ?",
    answer:
      "Si vous voulez rester en local, les principales options sont Home Assistant, Gladys Assistant et openHAB, toutes open source et auto-hébergées. Gladys est la plus simple des trois : une interface moderne, des scènes visuelles et un Zigbee2MQTT géré pour vous, sur un mini-PC ou un Raspberry Pi.",
  },
  {
    question: "Puis-je migrer mes appareils Zigbee et Z-Wave de Hubitat vers Gladys ?",
    answer:
      "Oui. Le Zigbee et le Z-Wave sont des protocoles standards : retirez ou excluez chaque appareil de Hubitat, puis associez-le à Zigbee2MQTT ou incluez-le dans Z-Wave JS UI avec une clé USB. Les appareils Matter peuvent être partagés avec Gladys comme second contrôleur.",
  },
  {
    question: "Gladys demande-t-elle un abonnement comme le Remote Admin de Hubitat ?",
    answer:
      "Non. Gladys est gratuite et fonctionne entièrement sur votre réseau local. Gladys Plus est optionnel (à partir de 6,99 €/mois, avec un mois d'essai gratuit) et regroupe l'accès distant chiffré, les sauvegardes, Alexa et Google Home, et l'assistant IA.",
  },
  {
    question: "Hubitat est-il open source ?",
    answer:
      "Non. La plateforme Hubitat et ses pilotes intégrés sont propriétaires ; Hubitat publie quelques exemples d'applications et de pilotes, et la communauté écrit les siens en Groovy. Gladys Assistant est entièrement open source sous licence Apache 2.0.",
  },
  {
    question: "Quel matériel pour remplacer une box Hubitat ?",
    answer:
      "Un mini-PC ou un Raspberry Pi avec Docker, plus une clé Zigbee USB et une clé Z-Wave de la bonne fréquence si vous utilisez ces protocoles. Les appareils Matter et Wi-Fi n'ont besoin d'aucune radio supplémentaire.",
  },
];

export const hubitatAlternativeFaqDe = [
  {
    question: "Was ist die beste Hubitat Alternative?",
    answer:
      "Wenn du lokal bleiben willst, sind Home Assistant, Gladys Assistant und openHAB die wichtigsten Optionen, alle Open Source und selbst gehostet. Gladys ist die einfachste der drei: eine moderne Oberfläche, visuelle Szenen und ein fertig verwaltetes Zigbee2MQTT, auf einem Mini-PC oder Raspberry Pi.",
  },
  {
    question: "Kann ich meine Zigbee- und Z-Wave-Geräte von Hubitat zu Gladys umziehen?",
    answer:
      "Ja. Zigbee und Z-Wave sind Standardprotokolle: Entferne oder exkludiere jedes Gerät aus Hubitat und kopple es dann mit einem USB-Stick in Zigbee2MQTT oder inkludiere es in Z-Wave JS UI. Matter-Geräte kannst du mit Gladys als zweitem Controller teilen.",
  },
  {
    question: "Braucht Gladys ein Abo wie Remote Admin bei Hubitat?",
    answer:
      "Nein. Gladys ist kostenlos und funktioniert vollständig in deinem lokalen Netzwerk. Gladys Plus ist optional (ab 6,99 €/Monat, mit einem Monat kostenlosem Test) und bündelt verschlüsselten Fernzugriff, Backups, Alexa und Google Home sowie den KI-Assistenten.",
  },
  {
    question: "Ist Hubitat Open Source?",
    answer:
      "Nein. Die Hubitat-Plattform und ihre eingebauten Treiber sind proprietär; Hubitat veröffentlicht einige Beispiel-Apps und -Treiber, und die Community schreibt eigene in Groovy. Gladys Assistant ist komplett Open Source unter der Apache-2.0-Lizenz.",
  },
  {
    question: "Welche Hardware brauche ich, um einen Hubitat Hub zu ersetzen?",
    answer:
      "Einen Mini-PC oder Raspberry Pi mit Docker, dazu einen Zigbee-USB-Stick und einen Z-Wave-Stick in der passenden Frequenz, falls du diese Protokolle nutzt. Matter- und WLAN-Geräte brauchen kein zusätzliches Funkmodul.",
  },
];

export default hubitatAlternativeContent;
