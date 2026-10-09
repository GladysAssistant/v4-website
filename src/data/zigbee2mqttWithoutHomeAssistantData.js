// Content for the "Zigbee2MQTT without Home Assistant" landing page.
// Targets people who know the Home Assistant ecosystem (Zigbee2MQTT is often
// discovered through it) but want something simpler: "zigbee2mqtt without
// home assistant", "zigbee2mqtt standalone", "zigbee2mqtt alternative to home
// assistant", "zigbee2mqtt gui". Claims must match docs/integrations/
// zigbee2mqtt.md: Gladys installs and manages the Zigbee2MQTT and MQTT broker
// containers itself, and pairing happens from the Gladys interface.

const zigbee2mqttWithoutHomeAssistantContent = {
  en: {
    meta: {
      title: "Zigbee2MQTT Without Home Assistant: The Simple Setup",
      description:
        "Use Zigbee2MQTT without Home Assistant: Gladys Assistant installs and manages Zigbee2MQTT and the MQTT broker for you, then lets you pair devices, build dashboards and automate, locally. Free and open source.",
    },
    screenshotCaption:
      "Your Zigbee devices, paired through Zigbee2MQTT, on a Gladys dashboard.",
    hero: {
      title: "Zigbee2MQTT without Home Assistant",
      subtitle:
        "Zigbee2MQTT is the best way to run Zigbee locally. You don't need Home Assistant to use it: Gladys Assistant sets it up for you and gives you the dashboards and automations.",
      intro: [
        "Zigbee2MQTT is an open-source bridge that supports more than 5,000 Zigbee devices from nearly 600 brands through a simple USB coordinator, with no vendor hub and no cloud. On its own, it only publishes MQTT messages: you still need a platform to see your devices, build a dashboard and automate.",
        "Many people end up installing Home Assistant for that, then spend their evenings in YAML and add-ons. Gladys Assistant is a free, open-source alternative designed to be simple: plug in your dongle, click Enable, and Gladys installs Zigbee2MQTT and its MQTT broker, then lets you pair and use your devices from its own interface.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT setup guide",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Running Zigbee2MQTT on its own is only half the job",
      intro: "If you've tried Zigbee2MQTT standalone, you know the drill:",
      points: [
        "You need an MQTT broker (Mosquitto) next to it, with matching credentials and topics.",
        "The Zigbee2MQTT frontend is great for pairing and debugging, but it isn't a dashboard for the family, and it doesn't do automations.",
        "Node-RED or scripts can fill the gap, but now you maintain three or four moving parts.",
        "Home Assistant solves it, at the cost of a large platform to learn, YAML, and frequent breaking changes.",
      ],
      outro:
        "What most people want is simpler: Zigbee2MQTT's device support, with a clean dashboard and easy automations on top.",
    },
    comparison: {
      title: "Zigbee2MQTT with Gladys vs standalone vs Home Assistant",
      intro: "Three ways to use the same Zigbee2MQTT:",
      cols: {
        feature: "",
        gladys: "With Gladys",
        other: "Standalone or with Home Assistant",
      },
      rows: [
        {
          feature: "Installing Zigbee2MQTT and MQTT",
          gladys: "Automatic: Gladys creates both containers",
          other: "By hand (Docker, add-ons) and configuration files",
        },
        {
          feature: "Pairing devices",
          gladys: "From the Gladys interface",
          other: "Zigbee2MQTT frontend, then import into the platform",
        },
        {
          feature: "Dashboards",
          gladys: "Built in, mobile-friendly",
          other: "None standalone; very flexible but complex in Home Assistant",
        },
        {
          feature: "Automations",
          gladys: "Visual scenes, no code",
          other: "None standalone; automations, YAML or Node-RED in Home Assistant",
        },
        {
          feature: "Learning curve",
          gladys: "One interface to learn",
          other: "Several tools and concepts (broker, YAML, add-ons)",
        },
      ],
      outro:
        "Home Assistant is more extensive and has a larger community; Gladys is built for people who want the essentials to just work.",
    },
    features: {
      title: "What you get with Zigbee2MQTT in Gladys",
      intro: "Every device Zigbee2MQTT supports becomes a Gladys device:",
      cards: [
        {
          icon: "⚙️",
          title: "Managed setup",
          text: "Pick your coordinator and its model; Gladys installs and wires Zigbee2MQTT and the MQTT broker for you.",
        },
        {
          icon: "🔗",
          title: "Pair from Gladys",
          text: "Permit joining, and new devices show up with their detected features, ready to name and assign to a room.",
        },
        {
          icon: "📊",
          title: "Dashboards and history",
          text: "Sensors, lights, plugs, thermostats and covers on a dashboard, with charts of every value over time.",
        },
        {
          icon: "🎬",
          title: "Scenes",
          text: "Trigger on any Zigbee event, add conditions, act on any device: without code.",
        },
        {
          icon: "📡",
          title: "Mix with other protocols",
          text: "Zigbee alongside Matter, Z-Wave, Wi-Fi and cloud integrations in one interface.",
        },
        {
          icon: "🤖",
          title: "AI and MCP",
          text: "Talk to your Zigbee devices in plain language, or expose them to Claude through the MCP server.",
        },
      ],
    },
    how: {
      title: "Set up Zigbee2MQTT without Home Assistant, step by step",
      intro: "On a mini-PC, a Raspberry Pi or a NAS running Docker:",
      points: [
        "Install Gladys with a single Docker command.",
        "Plug a USB Zigbee coordinator (Sonoff ZBDongle-E or -P…) into the machine, or connect a network coordinator like the SMLIGHT SLZB-06 to your network.",
        "In Gladys, open Integrations → Zigbee2MQTT and select your coordinator and its model.",
        "Click Enable Zigbee2MQTT: Gladys starts the containers and shows their status.",
        "Permit joining, pair your devices, and add them to your dashboard.",
      ],
      outro:
        "Troubleshooting for the classic Zigbee2MQTT errors (zigbee-herdsman, adapter ping, EZSP version) is in the setup guide.",
    },
    solution: {
      title: "The same Zigbee2MQTT, without the complexity",
      paragraphs: [
        "Gladys doesn't replace Zigbee2MQTT, it uses it: you get the same device compatibility and the same local, cloud-free Zigbee network. What changes is everything around it: no broker to configure, no YAML, a dashboard your family can use, and scenes you build in a few clicks.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "Gladys vs Home Assistant, the honest comparison →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Go further",
      intro: "Everything you need for a local Zigbee network:",
      links: [
        {
          label: "Philips Hue without the bridge",
          href: "/philips-hue-without-bridge/",
          text: "Pair Hue bulbs directly with your Zigbee dongle.",
        },
        {
          label: "Aqara sensors without the hub",
          href: "/aqara-without-hub/",
          text: "Aqara Zigbee sensors, locally, without the Aqara app.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which coordinator to buy for Zigbee2MQTT, USB or network.",
        },
        {
          label: "Zigbee vs Z-Wave vs Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Which protocol to choose, and how they can live together.",
        },
        {
          label: "Z-Wave JS UI without Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "The same approach for your Z-Wave network.",
        },
        {
          label: "Home Assistant alternative",
          href: "/home-assistant-alternative/",
          text: "Why people choose Gladys when Home Assistant feels like too much.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Get Zigbee2MQTT running tonight",
      text: "Gladys is free, open source and installs with a single Docker command. Plug in your dongle and pair your first devices.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT guide", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  fr: {
    meta: {
      title: "Zigbee2MQTT sans Home Assistant : l'installation simple",
      description:
        "Utilisez Zigbee2MQTT sans Home Assistant : Gladys Assistant installe et gère Zigbee2MQTT et le broker MQTT pour vous, puis vous permet d'associer vos appareils, créer des tableaux de bord et automatiser, en local. Gratuit et open source.",
    },
    screenshotCaption:
      "Vos appareils Zigbee, associés via Zigbee2MQTT, sur un tableau de bord Gladys.",
    hero: {
      title: "Zigbee2MQTT sans Home Assistant",
      subtitle:
        "Zigbee2MQTT est la meilleure façon de faire du Zigbee en local. Pas besoin de Home Assistant pour l'utiliser : Gladys Assistant l'installe pour vous et apporte les tableaux de bord et les automatisations.",
      intro: [
        "Zigbee2MQTT est une passerelle open source qui prend en charge plus de 5 000 appareils Zigbee de près de 600 marques via un simple coordinateur USB, sans box constructeur et sans cloud. Seul, il ne fait que publier des messages MQTT : il vous faut encore une plateforme pour voir vos appareils, créer un tableau de bord et automatiser.",
        "Beaucoup finissent par installer Home Assistant pour ça, et passent leurs soirées dans le YAML et les modules complémentaires. Gladys Assistant est une alternative gratuite et open source pensée pour être simple : branchez votre clé, cliquez sur Activer, et Gladys installe Zigbee2MQTT et son broker MQTT, puis vous permet d'associer et d'utiliser vos appareils depuis sa propre interface.",
      ],
      primaryCta: {
        label: "Guide d'installation Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Zigbee2MQTT seul, c'est la moitié du travail",
      intro: "Si vous avez essayé Zigbee2MQTT en autonome, vous connaissez la chanson :",
      points: [
        "Il faut un broker MQTT (Mosquitto) à côté, avec les bons identifiants et les bons topics.",
        "L'interface web de Zigbee2MQTT est excellente pour associer et déboguer, mais ce n'est pas un tableau de bord pour la famille, et elle ne fait pas d'automatisations.",
        "Node-RED ou des scripts peuvent combler le manque, mais vous maintenez alors trois ou quatre briques.",
        "Home Assistant résout le problème, au prix d'une grosse plateforme à apprendre, du YAML et de changements cassants fréquents.",
      ],
      outro:
        "Ce que la plupart des gens veulent est plus simple : la compatibilité de Zigbee2MQTT, avec un tableau de bord propre et des automatisations faciles par-dessus.",
    },
    comparison: {
      title: "Zigbee2MQTT avec Gladys vs seul vs avec Home Assistant",
      intro: "Trois façons d'utiliser le même Zigbee2MQTT :",
      cols: {
        feature: "",
        gladys: "Avec Gladys",
        other: "Seul ou avec Home Assistant",
      },
      rows: [
        {
          feature: "Installer Zigbee2MQTT et MQTT",
          gladys: "Automatique : Gladys crée les deux conteneurs",
          other: "À la main (Docker, modules) et fichiers de configuration",
        },
        {
          feature: "Associer des appareils",
          gladys: "Depuis l'interface de Gladys",
          other: "Interface de Zigbee2MQTT, puis import dans la plateforme",
        },
        {
          feature: "Tableaux de bord",
          gladys: "Intégrés, adaptés au mobile",
          other: "Aucun en autonome ; très flexibles mais complexes dans Home Assistant",
        },
        {
          feature: "Automatisations",
          gladys: "Scènes visuelles, sans code",
          other: "Aucune en autonome ; automatisations, YAML ou Node-RED dans Home Assistant",
        },
        {
          feature: "Prise en main",
          gladys: "Une seule interface à apprendre",
          other: "Plusieurs outils et concepts (broker, YAML, modules)",
        },
      ],
      outro:
        "Home Assistant est plus vaste et a une plus grande communauté ; Gladys est faite pour ceux qui veulent que l'essentiel marche, simplement.",
    },
    features: {
      title: "Ce que vous obtenez avec Zigbee2MQTT dans Gladys",
      intro: "Chaque appareil pris en charge par Zigbee2MQTT devient un appareil Gladys :",
      cards: [
        {
          icon: "⚙️",
          title: "Installation gérée",
          text: "Choisissez votre coordinateur et son modèle ; Gladys installe et relie Zigbee2MQTT et le broker MQTT pour vous.",
        },
        {
          icon: "🔗",
          title: "Association depuis Gladys",
          text: "Autorisez l'association, et les nouveaux appareils apparaissent avec leurs fonctionnalités détectées, prêts à être nommés et rangés dans une pièce.",
        },
        {
          icon: "📊",
          title: "Tableaux de bord et historique",
          text: "Capteurs, lumières, prises, thermostats et volets sur un tableau de bord, avec les courbes de chaque valeur dans le temps.",
        },
        {
          icon: "🎬",
          title: "Scènes",
          text: "Déclenchez sur n'importe quel événement Zigbee, ajoutez des conditions, agissez sur n'importe quel appareil : sans code.",
        },
        {
          icon: "📡",
          title: "Avec d'autres protocoles",
          text: "Le Zigbee aux côtés de Matter, Z-Wave, du Wi-Fi et des intégrations cloud, dans une seule interface.",
        },
        {
          icon: "🤖",
          title: "IA et MCP",
          text: "Parlez à vos appareils Zigbee en langage naturel, ou exposez-les à Claude via le serveur MCP.",
        },
      ],
    },
    how: {
      title: "Installer Zigbee2MQTT sans Home Assistant, pas à pas",
      intro: "Sur un mini-PC, un Raspberry Pi ou un NAS avec Docker :",
      points: [
        "Installez Gladys en une seule commande Docker.",
        "Branchez une clé Zigbee USB (Sonoff ZBDongle-E ou -P…) sur la machine, ou connectez un coordinateur réseau comme le SMLIGHT SLZB-06 à votre réseau.",
        "Dans Gladys, ouvrez Intégrations → Zigbee2MQTT et sélectionnez votre coordinateur et son modèle.",
        "Cliquez sur Activer Zigbee2MQTT : Gladys démarre les conteneurs et affiche leur état.",
        "Autorisez l'association, appairez vos appareils et ajoutez-les à votre tableau de bord.",
      ],
      outro:
        "Les solutions aux erreurs classiques de Zigbee2MQTT (zigbee-herdsman, ping de l'adaptateur, version EZSP) sont dans le guide d'installation.",
    },
    solution: {
      title: "Le même Zigbee2MQTT, sans la complexité",
      paragraphs: [
        "Gladys ne remplace pas Zigbee2MQTT, elle l'utilise : vous gardez la même compatibilité et le même réseau Zigbee local, sans cloud. Ce qui change, c'est tout le reste : pas de broker à configurer, pas de YAML, un tableau de bord utilisable par toute la famille, et des scènes créées en quelques clics.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Gladys vs Home Assistant, le comparatif honnête →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Tout ce qu'il faut pour un réseau Zigbee local :",
      links: [
        {
          label: "Philips Hue sans le pont",
          href: "/philips-hue-without-bridge/",
          text: "Associez vos ampoules Hue directement à votre clé Zigbee.",
        },
        {
          label: "Capteurs Aqara sans hub",
          href: "/aqara-without-hub/",
          text: "Les capteurs Aqara Zigbee en local, sans l'application Aqara.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Quel coordinateur acheter pour Zigbee2MQTT, USB ou réseau.",
        },
        {
          label: "Zigbee vs Z-Wave vs Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Quel protocole choisir, et comment les faire cohabiter.",
        },
        {
          label: "Z-Wave JS UI sans Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "La même approche pour votre réseau Z-Wave.",
        },
        {
          label: "Alternative à Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Pourquoi on choisit Gladys quand Home Assistant semble trop lourd.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Zigbee2MQTT opérationnel dès ce soir",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Branchez votre clé et associez vos premiers appareils.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  de: {
    meta: {
      title: "Zigbee2MQTT ohne Home Assistant: einfach eingerichtet",
      description:
        "Zigbee2MQTT ohne Home Assistant: Gladys installiert Zigbee2MQTT und den MQTT-Broker für dich. Geräte koppeln, Dashboards, Automationen, lokal. Kostenlos.",
    },
    screenshotCaption:
      "Deine Zigbee-Geräte, über Zigbee2MQTT gekoppelt, auf einem Gladys-Dashboard.",
    hero: {
      title: "Zigbee2MQTT ohne Home Assistant",
      subtitle:
        "Zigbee2MQTT ist der beste Weg, Zigbee lokal zu betreiben. Dafür brauchst du kein Home Assistant: Gladys Assistant richtet es für dich ein und liefert Dashboards und Automationen gleich mit.",
      intro: [
        "Zigbee2MQTT ist eine Open-Source-Bridge, die über einen einfachen USB-Koordinator mehr als 5.000 Zigbee-Geräte von fast 600 Marken unterstützt, ganz ohne Hersteller-Hub und ohne Cloud. Allein veröffentlicht es aber nur MQTT-Nachrichten: Du brauchst trotzdem noch eine Plattform, um deine Geräte zu sehen, ein Dashboard zu bauen und zu automatisieren.",
        "Viele installieren dafür am Ende Home Assistant und verbringen ihre Abende mit YAML und Add-ons. Gladys Assistant ist eine kostenlose Open-Source-Alternative, die auf Einfachheit ausgelegt ist: Stick einstecken, auf Aktivieren klicken, und Gladys installiert Zigbee2MQTT samt MQTT-Broker. Danach koppelst und nutzt du deine Geräte direkt in der Gladys-Oberfläche.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT-Einrichtungsanleitung",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Mit Gladys loslegen →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Zigbee2MQTT allein ist nur die halbe Miete",
      intro: "Wenn du Zigbee2MQTT schon mal standalone ausprobiert hast, kennst du das:",
      points: [
        "Du brauchst daneben einen MQTT-Broker (Mosquitto) mit passenden Zugangsdaten und Topics.",
        "Das Zigbee2MQTT-Frontend ist super zum Koppeln und Debuggen, aber kein Dashboard für die Familie, und Automationen kann es auch nicht.",
        "Node-RED oder Skripte können die Lücke füllen, aber dann pflegst du drei oder vier Bausteine.",
        "Home Assistant löst das Problem, allerdings um den Preis einer großen Plattform, die du erst lernen musst, mit YAML und häufigen Breaking Changes.",
      ],
      outro:
        "Was die meisten eigentlich wollen, ist einfacher: die Geräteunterstützung von Zigbee2MQTT, mit einem aufgeräumten Dashboard und einfachen Automationen obendrauf.",
    },
    comparison: {
      title: "Zigbee2MQTT mit Gladys vs. standalone vs. Home Assistant",
      intro: "Drei Wege, dasselbe Zigbee2MQTT zu nutzen:",
      cols: {
        feature: "",
        gladys: "Mit Gladys",
        other: "Standalone oder mit Home Assistant",
      },
      rows: [
        {
          feature: "Zigbee2MQTT und MQTT installieren",
          gladys: "Automatisch: Gladys erstellt beide Container",
          other: "Von Hand (Docker, Add-ons) plus Konfigurationsdateien",
        },
        {
          feature: "Geräte koppeln",
          gladys: "Direkt in der Gladys-Oberfläche",
          other: "Im Zigbee2MQTT-Frontend, danach Import in die Plattform",
        },
        {
          feature: "Dashboards",
          gladys: "Integriert, mobilfreundlich",
          other: "Standalone keine; in Home Assistant sehr flexibel, aber komplex",
        },
        {
          feature: "Automationen",
          gladys: "Visuelle Szenen, ohne Code",
          other: "Standalone keine; in Home Assistant Automationen, YAML oder Node-RED",
        },
        {
          feature: "Einarbeitung",
          gladys: "Nur eine Oberfläche zu lernen",
          other: "Mehrere Tools und Konzepte (Broker, YAML, Add-ons)",
        },
      ],
      outro:
        "Home Assistant ist umfangreicher und hat eine größere Community; Gladys ist für alle gemacht, bei denen das Wesentliche einfach funktionieren soll.",
    },
    features: {
      title: "Was du mit Zigbee2MQTT in Gladys bekommst",
      intro: "Jedes Gerät, das Zigbee2MQTT unterstützt, wird zu einem Gladys-Gerät:",
      cards: [
        {
          icon: "⚙️",
          title: "Verwaltete Einrichtung",
          text: "Wähle deinen Koordinator und sein Modell; Gladys installiert und verbindet Zigbee2MQTT und den MQTT-Broker für dich.",
        },
        {
          icon: "🔗",
          title: "Koppeln in Gladys",
          text: "Kopplung erlauben, und neue Geräte erscheinen mit ihren erkannten Funktionen, bereit zum Benennen und Zuordnen zu einem Raum.",
        },
        {
          icon: "📊",
          title: "Dashboards und Verlauf",
          text: "Sensoren, Lampen, Steckdosen, Thermostate und Rollläden auf einem Dashboard, mit Diagrammen für jeden Wert im zeitlichen Verlauf.",
        },
        {
          icon: "🎬",
          title: "Szenen",
          text: "Auf jedes Zigbee-Ereignis reagieren, Bedingungen hinzufügen, beliebige Geräte steuern: ohne Code.",
        },
        {
          icon: "📡",
          title: "Mit anderen Protokollen kombinieren",
          text: "Zigbee neben Matter, Z-Wave, WLAN und Cloud-Integrationen in einer einzigen Oberfläche.",
        },
        {
          icon: "🤖",
          title: "KI und MCP",
          text: "Sprich in natürlicher Sprache mit deinen Zigbee-Geräten oder stelle sie Claude über den MCP-Server zur Verfügung.",
        },
      ],
    },
    how: {
      title: "Zigbee2MQTT ohne Home Assistant einrichten, Schritt für Schritt",
      intro: "Auf einem Mini-PC, einem Raspberry Pi oder einem NAS mit Docker:",
      points: [
        "Installiere Gladys mit einem einzigen Docker-Befehl.",
        "Steck einen USB-Zigbee-Koordinator (Sonoff ZBDongle-E oder -P…) in den Rechner oder verbinde einen Netzwerk-Koordinator wie den SMLIGHT SLZB-06 mit deinem Netzwerk.",
        "Öffne in Gladys Integrationen → Zigbee2MQTT und wähle deinen Koordinator und sein Modell.",
        "Klick auf Zigbee2MQTT aktivieren: Gladys startet die Container und zeigt ihren Status an.",
        "Kopplung erlauben, Geräte koppeln und zu deinem Dashboard hinzufügen.",
      ],
      outro:
        "Lösungen für die klassischen Zigbee2MQTT-Fehler (zigbee-herdsman, Adapter-Ping, EZSP-Version) findest du in der Einrichtungsanleitung.",
    },
    solution: {
      title: "Dasselbe Zigbee2MQTT, ohne die Komplexität",
      paragraphs: [
        "Gladys ersetzt Zigbee2MQTT nicht, sondern nutzt es: Du bekommst dieselbe Gerätekompatibilität und dasselbe lokale Zigbee-Netz ohne Cloud. Anders ist alles drumherum: kein Broker zu konfigurieren, kein YAML, ein Dashboard, das die ganze Familie bedienen kann, und Szenen, die du mit wenigen Klicks baust.",
        "Gladys ist kostenlos und Open Source, wird seit 2013 entwickelt und läuft komplett auf deiner eigenen Hardware.",
      ],
      link: {
        label: "Gladys vs. Home Assistant, der ehrliche Vergleich →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Alles, was du für ein lokales Zigbee-Netz brauchst:",
      links: [
        {
          label: "Philips Hue ohne Bridge",
          href: "/philips-hue-without-bridge/",
          text: "Hue-Lampen direkt mit deinem Zigbee-Stick koppeln.",
        },
        {
          label: "Aqara-Sensoren ohne Hub",
          href: "/aqara-without-hub/",
          text: "Aqara-Zigbee-Sensoren lokal nutzen, ohne die Aqara-App.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/best-zigbee-dongle/",
          text: "Welchen Koordinator du für Zigbee2MQTT kaufen solltest, USB oder Netzwerk.",
        },
        {
          label: "Zigbee vs. Z-Wave vs. Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Welches Protokoll du wählen solltest und wie sie zusammenspielen.",
        },
        {
          label: "Z-Wave JS UI ohne Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "Derselbe Ansatz für dein Z-Wave-Netz.",
        },
        {
          label: "Home Assistant Alternative",
          href: "/home-assistant-alternative/",
          text: "Warum Leute zu Gladys wechseln, wenn ihnen Home Assistant zu viel wird.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Zigbee2MQTT noch heute Abend am Laufen",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Stick einstecken und die ersten Geräte koppeln.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT-Anleitung", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
  es: {
    meta: {
      title: "Zigbee2MQTT sin Home Assistant: la configuración sencilla",
      description:
        "Usa Zigbee2MQTT sin Home Assistant: Gladys Assistant instala y gestiona Zigbee2MQTT y el broker MQTT por ti, y luego te permite emparejar dispositivos, crear paneles y automatizar, en local. Gratis y de código abierto.",
    },
    screenshotCaption:
      "Tus dispositivos Zigbee, emparejados con Zigbee2MQTT, en un panel de Gladys.",
    hero: {
      title: "Zigbee2MQTT sin Home Assistant",
      subtitle:
        "Zigbee2MQTT es la mejor forma de usar Zigbee en local. No necesitas Home Assistant para aprovecharlo: Gladys Assistant lo configura por ti y te ofrece los paneles y las automatizaciones.",
      intro: [
        "Zigbee2MQTT es un puente de código abierto compatible con más de 5000 dispositivos Zigbee de casi 600 marcas a través de un simple coordinador USB, sin hub del fabricante y sin nube. Por sí solo, solo publica mensajes MQTT: sigues necesitando una plataforma para ver tus dispositivos, crear un panel y automatizar.",
        "Muchos acaban instalando Home Assistant para eso y luego pasan las tardes entre YAML y complementos. Gladys Assistant es una alternativa gratuita y de código abierto pensada para ser sencilla: conecta tu dongle, haz clic en Activar y Gladys instala Zigbee2MQTT y su broker MQTT, y después te permite emparejar y usar tus dispositivos desde su propia interfaz.",
      ],
      primaryCta: {
        label: "Guía de configuración de Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Empezar con Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Usar Zigbee2MQTT por sí solo es solo la mitad del trabajo",
      intro: "Si has probado Zigbee2MQTT en modo independiente, ya sabes cómo va:",
      points: [
        "Necesitas un broker MQTT (Mosquitto) a su lado, con credenciales y topics que coincidan.",
        "La interfaz web de Zigbee2MQTT es estupenda para emparejar y depurar, pero no es un panel para toda la familia y no hace automatizaciones.",
        "Node-RED o algunos scripts pueden cubrir el hueco, pero entonces tienes que mantener tres o cuatro piezas distintas.",
        "Home Assistant lo resuelve, a cambio de una plataforma enorme que aprender, YAML y cambios incompatibles frecuentes.",
      ],
      outro:
        "Lo que la mayoría quiere es más sencillo: la compatibilidad de dispositivos de Zigbee2MQTT, con un panel claro y automatizaciones fáciles por encima.",
    },
    comparison: {
      title: "Zigbee2MQTT con Gladys, en modo independiente o con Home Assistant",
      intro: "Tres formas de usar el mismo Zigbee2MQTT:",
      cols: {
        feature: "",
        gladys: "Con Gladys",
        other: "Independiente o con Home Assistant",
      },
      rows: [
        {
          feature: "Instalación de Zigbee2MQTT y MQTT",
          gladys: "Automática: Gladys crea los dos contenedores",
          other: "A mano (Docker, complementos) y archivos de configuración",
        },
        {
          feature: "Emparejamiento de dispositivos",
          gladys: "Desde la interfaz de Gladys",
          other: "Interfaz de Zigbee2MQTT y después importación en la plataforma",
        },
        {
          feature: "Paneles",
          gladys: "Integrados, adaptados al móvil",
          other: "Ninguno en modo independiente; muy flexibles pero complejos en Home Assistant",
        },
        {
          feature: "Automatizaciones",
          gladys: "Escenas visuales, sin código",
          other: "Ninguna en modo independiente; automatizaciones, YAML o Node-RED en Home Assistant",
        },
        {
          feature: "Curva de aprendizaje",
          gladys: "Una sola interfaz que aprender",
          other: "Varias herramientas y conceptos (broker, YAML, complementos)",
        },
      ],
      outro:
        "Home Assistant es más completo y tiene una comunidad más grande; Gladys está pensado para quienes quieren que lo esencial simplemente funcione.",
    },
    features: {
      title: "Lo que obtienes con Zigbee2MQTT en Gladys",
      intro: "Cada dispositivo compatible con Zigbee2MQTT se convierte en un dispositivo de Gladys:",
      cards: [
        {
          icon: "⚙️",
          title: "Instalación gestionada",
          text: "Elige tu coordinador y su modelo; Gladys instala y conecta Zigbee2MQTT y el broker MQTT por ti.",
        },
        {
          icon: "🔗",
          title: "Empareja desde Gladys",
          text: "Permite el emparejamiento y los nuevos dispositivos aparecen con sus funciones detectadas, listos para darles un nombre y asignarlos a una habitación.",
        },
        {
          icon: "📊",
          title: "Paneles e historial",
          text: "Sensores, luces, enchufes, termostatos y persianas en un panel, con gráficos de cada valor a lo largo del tiempo.",
        },
        {
          icon: "🎬",
          title: "Escenas",
          text: "Dispara una escena con cualquier evento Zigbee, añade condiciones y actúa sobre cualquier dispositivo: sin código.",
        },
        {
          icon: "📡",
          title: "Combina con otros protocolos",
          text: "Zigbee junto a Matter, Z-Wave, Wi-Fi e integraciones en la nube en una sola interfaz.",
        },
        {
          icon: "🤖",
          title: "IA y MCP",
          text: "Habla con tus dispositivos Zigbee en lenguaje natural o ponlos a disposición de Claude a través del servidor MCP.",
        },
      ],
    },
    how: {
      title: "Configura Zigbee2MQTT sin Home Assistant, paso a paso",
      intro: "En un mini-PC, una Raspberry Pi o un NAS con Docker:",
      points: [
        "Instala Gladys con un solo comando Docker.",
        "Conecta un coordinador Zigbee USB (Sonoff ZBDongle-E o -P…) al equipo, o conecta a tu red un coordinador de red como el SMLIGHT SLZB-06.",
        "En Gladys, abre Integraciones → Zigbee2MQTT y selecciona tu coordinador y su modelo.",
        "Haz clic en Activar Zigbee2MQTT: Gladys inicia los contenedores y muestra su estado.",
        "Permite el emparejamiento, empareja tus dispositivos y añádelos a tu panel.",
      ],
      outro:
        "La solución a los errores clásicos de Zigbee2MQTT (zigbee-herdsman, ping del adaptador, versión EZSP) está en la guía de configuración.",
    },
    solution: {
      title: "El mismo Zigbee2MQTT, sin la complejidad",
      paragraphs: [
        "Gladys no sustituye a Zigbee2MQTT, lo utiliza: obtienes la misma compatibilidad de dispositivos y la misma red Zigbee local y sin nube. Lo que cambia es todo lo que lo rodea: ningún broker que configurar, nada de YAML, un panel que tu familia puede usar y escenas que creas en unos pocos clics.",
        "Gladys es gratis y de código abierto, se desarrolla desde 2013 y funciona íntegramente en tu propio hardware.",
      ],
      link: {
        label: "Gladys frente a Home Assistant, la comparación honesta →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Para ir más lejos",
      intro: "Todo lo que necesitas para una red Zigbee local:",
      links: [
        {
          label: "Philips Hue sin el puente",
          href: "/philips-hue-without-bridge/",
          text: "Empareja las bombillas Hue directamente con tu dongle Zigbee.",
        },
        {
          label: "Sensores Aqara sin el hub",
          href: "/aqara-without-hub/",
          text: "Sensores Zigbee de Aqara, en local, sin la app de Aqara.",
        },
        {
          label: "El mejor dongle USB Zigbee",
          href: "/best-zigbee-dongle/",
          text: "Qué coordinador comprar para Zigbee2MQTT, USB o de red.",
        },
        {
          label: "Zigbee vs Z-Wave vs Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Qué protocolo elegir y cómo pueden convivir.",
        },
        {
          label: "Z-Wave JS UI sin Home Assistant",
          href: "/z-wave-js-ui-without-home-assistant/",
          text: "El mismo enfoque para tu red Z-Wave.",
        },
        {
          label: "Alternativa a Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Por qué la gente elige Gladys cuando Home Assistant se le hace demasiado.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Pon Zigbee2MQTT en marcha esta misma noche",
      text: "Gladys es gratis, de código abierto y se instala con un solo comando Docker. Conecta tu dongle y empareja tus primeros dispositivos.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Guía de Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
};

export const zigbee2mqttWithoutHomeAssistantFaqEn = [
  {
    question: "Can I use Zigbee2MQTT without Home Assistant?",
    answer:
      "Yes. Zigbee2MQTT is an independent open-source project: it only needs a Zigbee coordinator and an MQTT broker. Home Assistant is one platform that can use it, but not the only one. Gladys Assistant installs and manages Zigbee2MQTT and the MQTT broker for you, and adds dashboards and automations on top.",
  },
  {
    question: "Does Zigbee2MQTT need an MQTT broker?",
    answer:
      "Yes, Zigbee2MQTT publishes every device state over MQTT, so it needs a broker like Mosquitto. With Gladys, you don't have to set it up: Gladys creates the broker and the Zigbee2MQTT containers with matching credentials when you enable the integration.",
  },
  {
    question: "Which Zigbee devices work with Gladys?",
    answer:
      "Every device supported by Zigbee2MQTT, more than 5,000 devices from nearly 600 brands: IKEA, Philips Hue bulbs, Aqara, Sonoff, Tuya, Schneider, Legrand, Sinopé and many more. The full list is on the Zigbee2MQTT website.",
  },
  {
    question: "Which Zigbee dongle should I use?",
    answer:
      "Any coordinator supported by Zigbee2MQTT. Popular choices are the Sonoff ZBDongle-E and ZBDongle-P over USB, or a network coordinator like the SMLIGHT SLZB-06 if you want to place it away from interference. Our Zigbee dongle guide compares them.",
  },
  {
    question: "Can I still use the Zigbee2MQTT web interface?",
    answer:
      "For everyday use you won't need it: pairing, renaming and using devices happen in Gladys. Zigbee2MQTT remains the standard project underneath, so its documentation and device list apply as is.",
  },
  {
    question: "Is Gladys a good Home Assistant alternative for Zigbee?",
    answer:
      "If you want local Zigbee with a simple interface, yes: Gladys uses the same Zigbee2MQTT, without YAML or add-ons. Home Assistant has a broader ecosystem and more integrations; Gladys focuses on simplicity and stability.",
  },
];

export const zigbee2mqttWithoutHomeAssistantFaqFr = [
  {
    question: "Peut-on utiliser Zigbee2MQTT sans Home Assistant ?",
    answer:
      "Oui. Zigbee2MQTT est un projet open source indépendant : il lui faut seulement un coordinateur Zigbee et un broker MQTT. Home Assistant est une plateforme qui peut l'utiliser, mais pas la seule. Gladys Assistant installe et gère Zigbee2MQTT et le broker MQTT pour vous, et ajoute tableaux de bord et automatisations par-dessus.",
  },
  {
    question: "Zigbee2MQTT a-t-il besoin d'un broker MQTT ?",
    answer:
      "Oui, Zigbee2MQTT publie l'état de chaque appareil en MQTT, il lui faut donc un broker comme Mosquitto. Avec Gladys, vous n'avez rien à configurer : Gladys crée le broker et le conteneur Zigbee2MQTT avec les bons identifiants quand vous activez l'intégration.",
  },
  {
    question: "Quels appareils Zigbee fonctionnent avec Gladys ?",
    answer:
      "Tous les appareils pris en charge par Zigbee2MQTT, soit plus de 5 000 appareils de près de 600 marques : IKEA, ampoules Philips Hue, Aqara, Sonoff, Tuya, Schneider, Legrand, Sinopé et bien d'autres. La liste complète est sur le site de Zigbee2MQTT.",
  },
  {
    question: "Quelle clé Zigbee utiliser ?",
    answer:
      "N'importe quel coordinateur pris en charge par Zigbee2MQTT. Les choix courants sont les Sonoff ZBDongle-E et ZBDongle-P en USB, ou un coordinateur réseau comme le SMLIGHT SLZB-06 pour le placer loin des interférences. Notre guide des clés Zigbee les compare.",
  },
  {
    question: "Puis-je encore utiliser l'interface web de Zigbee2MQTT ?",
    answer:
      "Au quotidien, vous n'en aurez pas besoin : l'association, le renommage et l'usage des appareils se font dans Gladys. Zigbee2MQTT reste le projet standard en dessous, donc sa documentation et sa liste d'appareils s'appliquent telles quelles.",
  },
  {
    question: "Gladys est-elle une bonne alternative à Home Assistant pour le Zigbee ?",
    answer:
      "Si vous voulez du Zigbee local avec une interface simple, oui : Gladys utilise le même Zigbee2MQTT, sans YAML ni modules. Home Assistant a un écosystème plus large et plus d'intégrations ; Gladys mise sur la simplicité et la stabilité.",
  },
];

export const zigbee2mqttWithoutHomeAssistantFaqDe = [
  {
    question: "Kann ich Zigbee2MQTT ohne Home Assistant nutzen?",
    answer:
      "Ja. Zigbee2MQTT ist ein unabhängiges Open-Source-Projekt: Es braucht nur einen Zigbee-Koordinator und einen MQTT-Broker. Home Assistant ist eine Plattform, die es nutzen kann, aber nicht die einzige. Gladys Assistant installiert und verwaltet Zigbee2MQTT und den MQTT-Broker für dich und bringt Dashboards und Automationen obendrauf mit.",
  },
  {
    question: "Braucht Zigbee2MQTT einen MQTT-Broker?",
    answer:
      "Ja, Zigbee2MQTT veröffentlicht jeden Gerätezustand über MQTT und braucht deshalb einen Broker wie Mosquitto. Mit Gladys musst du ihn nicht selbst einrichten: Gladys erstellt den Broker und die Zigbee2MQTT-Container mit passenden Zugangsdaten, sobald du die Integration aktivierst.",
  },
  {
    question: "Welche Zigbee-Geräte funktionieren mit Gladys?",
    answer:
      "Jedes Gerät, das Zigbee2MQTT unterstützt, also mehr als 5.000 Geräte von fast 600 Marken: IKEA, Philips-Hue-Lampen, Aqara, Sonoff, Tuya, Schneider, Legrand, Sinopé und viele mehr. Die vollständige Liste findest du auf der Website von Zigbee2MQTT.",
  },
  {
    question: "Welchen Zigbee-Stick sollte ich verwenden?",
    answer:
      "Jeden Koordinator, den Zigbee2MQTT unterstützt. Beliebt sind der Sonoff ZBDongle-E und der ZBDongle-P per USB oder ein Netzwerk-Koordinator wie der SMLIGHT SLZB-06, wenn du ihn abseits von Störquellen platzieren willst. Unser Zigbee-Stick-Ratgeber vergleicht sie.",
  },
  {
    question: "Kann ich die Weboberfläche von Zigbee2MQTT weiterhin nutzen?",
    answer:
      "Im Alltag wirst du sie nicht brauchen: Koppeln, Umbenennen und Bedienen der Geräte passiert in Gladys. Zigbee2MQTT bleibt darunter das Standardprojekt, seine Dokumentation und Geräteliste gelten also unverändert.",
  },
  {
    question: "Ist Gladys eine gute Home Assistant Alternative für Zigbee?",
    answer:
      "Wenn du lokales Zigbee mit einer einfachen Oberfläche willst, ja: Gladys nutzt dasselbe Zigbee2MQTT, ohne YAML und ohne Add-ons. Home Assistant hat ein breiteres Ökosystem und mehr Integrationen; Gladys setzt auf Einfachheit und Stabilität.",
  },
];

export const zigbee2mqttWithoutHomeAssistantFaqEs = [
  {
    question: "¿Puedo usar Zigbee2MQTT sin Home Assistant?",
    answer:
      "Sí. Zigbee2MQTT es un proyecto de código abierto independiente: solo necesita un coordinador Zigbee y un broker MQTT. Home Assistant es una de las plataformas que pueden usarlo, pero no la única. Gladys Assistant instala y gestiona Zigbee2MQTT y el broker MQTT por ti, y añade paneles y automatizaciones por encima.",
  },
  {
    question: "¿Zigbee2MQTT necesita un broker MQTT?",
    answer:
      "Sí, Zigbee2MQTT publica el estado de cada dispositivo por MQTT, así que necesita un broker como Mosquitto. Con Gladys no tienes que configurarlo: Gladys crea el broker y los contenedores de Zigbee2MQTT con credenciales coincidentes cuando activas la integración.",
  },
  {
    question: "¿Qué dispositivos Zigbee funcionan con Gladys?",
    answer:
      "Todos los dispositivos compatibles con Zigbee2MQTT, más de 5000 dispositivos de casi 600 marcas: IKEA, bombillas Philips Hue, Aqara, Sonoff, Tuya, Schneider, Legrand, Sinopé y muchas más. La lista completa está en la web de Zigbee2MQTT.",
  },
  {
    question: "¿Qué dongle Zigbee debo usar?",
    answer:
      "Cualquier coordinador compatible con Zigbee2MQTT. Las opciones más populares son el Sonoff ZBDongle-E y el ZBDongle-P por USB, o un coordinador de red como el SMLIGHT SLZB-06 si quieres colocarlo lejos de las interferencias. Nuestra guía de dongles Zigbee los compara.",
  },
  {
    question: "¿Puedo seguir usando la interfaz web de Zigbee2MQTT?",
    answer:
      "Para el uso diario no la necesitarás: emparejar, renombrar y usar los dispositivos se hace en Gladys. Zigbee2MQTT sigue siendo el proyecto estándar que funciona por debajo, así que su documentación y su lista de dispositivos se aplican tal cual.",
  },
  {
    question: "¿Es Gladys una buena alternativa a Home Assistant para Zigbee?",
    answer:
      "Si quieres Zigbee en local con una interfaz sencilla, sí: Gladys usa el mismo Zigbee2MQTT, sin YAML ni complementos. Home Assistant tiene un ecosistema más amplio y más integraciones; Gladys apuesta por la sencillez y la estabilidad.",
  },
];

export default zigbee2mqttWithoutHomeAssistantContent;
