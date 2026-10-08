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

  de: {
    meta: {
      title: "Z-Wave JS UI ohne Home Assistant: Z-Wave lokal",
      description:
        "Z-Wave JS UI ohne Home Assistant: Z-Wave JS UI fürs Netz, Gladys Assistant per MQTT für Dashboards, Szenen und KI. Lokal, kostenlos, Open Source.",
    },
    screenshotCaption:
      "Deine Z-Wave-Geräte, verwaltet von Z-Wave JS UI, auf einem Gladys-Dashboard.",
    hero: {
      title: "Z-Wave JS UI ohne Home Assistant",
      subtitle:
        "Z-Wave JS UI ist der beste Weg, ein Z-Wave-Netz zu betreiben. Kombiniere es per MQTT mit Gladys Assistant und du bekommst Dashboards, Szenen und KI, ganz ohne Home Assistant.",
      intro: [
        "Z-Wave JS UI ist eine Open-Source-Anwendung, die deinen Z-Wave-USB-Stick ansteuert und dein Netz verwaltet: Inklusion, Exklusion, Netzwerkreparatur, Firmware-Updates. Sie läuft problemlos eigenständig in Docker und kann jedes Gerät an einen MQTT-Broker veröffentlichen.",
        "Genau so verbindet sich Gladys Assistant damit. Z-Wave JS UI macht weiter, was es am besten kann, und Gladys, eine kostenlose Open-Source-Plattform für dein Smart Home, macht aus jedem Knoten ein Gerät, das du aufs Dashboard legen, in Szenen nutzen und vom Smartphone aus steuern kannst. Alles bleibt lokal, auf deiner eigenen Hardware.",
      ],
      primaryCta: {
        label: "Z-Wave JS UI-Anleitung",
        href: "/docs/integrations/zwavejs-ui/",
      },
      secondaryCta: {
        label: "Mit Gladys loslegen →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Warum viele Z-Wave ohne Home Assistant suchen",
      intro: "Z-Wave-Nutzer wollen meist vor allem eins: ein zuverlässiges Netz, das einfach funktioniert.",
      points: [
        "Die Oberfläche von Z-Wave JS UI ist hervorragend für die Netzverwaltung, aber kein Dashboard für die Familie, und Automationen für den Alltag kann sie nicht.",
        "Home Assistant bringt das mit, dazu aber eine große Plattform, die du lernen musst, YAML, Add-ons und häufige Updates, mit denen du Schritt halten musst.",
        "Der Abschied von einer alten Zentrale (Fibaro, Vera, SmartThings…) ist ein guter Moment, sich für etwas Einfacheres zu entscheiden, solange es lokal bleibt.",
      ],
      outro:
        "Z-Wave JS UI fürs Netz und eine einfache Plattform obendrauf: eine saubere, robuste Aufgabenteilung.",
    },
    comparison: {
      title: "Z-Wave JS UI mit Gladys vs. mit Home Assistant",
      intro: "Dasselbe Z-Wave JS UI, zwei Arten, es zu nutzen:",
      cols: {
        feature: "",
        gladys: "Mit Gladys",
        other: "Mit Home Assistant",
      },
      rows: [
        {
          feature: "Verbindung",
          gladys: "MQTT: Z-Wave JS UI veröffentlicht, Gladys abonniert",
          other: "WebSocket zum Z-Wave JS Server",
        },
        {
          feature: "Netzverwaltung",
          gladys: "In Z-Wave JS UI",
          other: "In Z-Wave JS UI oder der Home-Assistant-Oberfläche",
        },
        {
          feature: "Geräte hinzufügen",
          gladys: "Ein Klick im Tab „Erkannt“",
          other: "Automatische Erkennung von Entitäten",
        },
        {
          feature: "Automationen",
          gladys: "Visuelle Szenen, ohne Code",
          other: "Automationen, YAML, Node-RED",
        },
        {
          feature: "Läuft lokal",
          gladys: "Ja",
          other: "Ja",
        },
      ],
      outro:
        "Home Assistant unterstützt heute mehr Z-Wave-Gerätetypen. Gladys deckt das Wesentliche ab (Sensoren, Schalter, Dimmer, Rollläden, Energiemessung) und ist im Alltag einfacher.",
    },
    features: {
      title: "Was du mit Z-Wave JS UI in Gladys bekommst",
      intro: "Sobald deine Z-Wave-Knoten in Gladys sind:",
      cards: [
        {
          icon: "🚪",
          title: "Sensoren",
          text: "Tür- und Fensterkontakte, Temperatur, Helligkeit, Alarm- und Binärsensoren, mit Verlauf.",
        },
        {
          icon: "💡",
          title: "Schalter und Dimmer",
          text: "Steckdosen, Unterputzschalter und Dimmer, etwa Module von Fibaro und Qubino.",
        },
        {
          icon: "🪟",
          title: "Rollläden und Jalousien",
          text: "Rollläden und Jalousien öffnen, schließen und auf eine bestimmte Position fahren.",
        },
        {
          icon: "⚡",
          title: "Energiemessung",
          text: "Leistung und Verbrauch von Messsteckdosen und -modulen im Blick behalten.",
        },
        {
          icon: "🎬",
          title: "Szenen",
          text: "Auf jedes Z-Wave-Ereignis reagieren und beliebige Geräte steuern, ob Z-Wave oder nicht, ohne Code.",
        },
        {
          icon: "📡",
          title: "Alle deine Protokolle",
          text: "Z-Wave neben Zigbee-, Matter- und WLAN-Geräten in derselben Oberfläche.",
        },
      ],
    },
    how: {
      title: "Z-Wave JS UI ohne Home Assistant einrichten",
      intro: "Auf einem Mini-PC, einem Raspberry Pi oder einem NAS mit Docker:",
      points: [
        "Steck einen Z-Wave-USB-Stick für deine Region ein: 868,42 MHz in Europa, 908,42 MHz in den USA und Kanada.",
        "Starte Z-Wave JS UI in Docker und binde deine Geräte ein.",
        "Aktiviere in Z-Wave JS UI das MQTT-Gateway mit den Einstellungen aus der Gladys-Anleitung (benannte Topics, vollständiges Value-Objekt).",
        "Installiere Gladys, öffne die Integration Z-Wave JS UI und trage deinen MQTT-Broker ein.",
        "Öffne den Tab „Erkannt“ und füge deine Geräte mit einem Klick hinzu.",
      ],
      outro:
        "Du brauchst einen MQTT-Broker? Die MQTT-Integration von Gladys kann dir einen in Docker starten.",
    },
    solution: {
      title: "Behalte Z-Wave JS UI, lass die Komplexität weg",
      paragraphs: [
        "Gladys ersetzt Z-Wave JS UI nicht: Dein Netz, deine Inklusionen und deine Firmware-Updates bleiben, wo sie sind. Gladys ergänzt den Teil, den dein Haushalt tatsächlich sieht: Dashboards, Benachrichtigungen, Szenen, KI und Fernzugriff mit Gladys Plus.",
        "Gladys ist kostenlos und Open Source, wird seit 2013 entwickelt und läuft komplett auf deiner eigenen Hardware.",
      ],
      link: {
        label: "Gladys vs. Home Assistant, der ehrliche Vergleich →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Mehr zu lokalen Protokollen:",
      links: [
        {
          label: "Zigbee2MQTT ohne Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Derselbe Ansatz für deine Zigbee-Geräte.",
        },
        {
          label: "Zigbee vs. Z-Wave vs. Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Welches Protokoll du wählen solltest und wie sie zusammenspielen.",
        },
        {
          label: "Homey Alternative",
          href: "/homey-alternative/",
          text: "Eine kostenlose Open-Source-Alternative zum Homey Pro.",
        },
        {
          label: "SmartThings Alternative",
          href: "/smartthings-alternative/",
          text: "Eine lokale, datenschutzfreundliche Alternative zu Samsung SmartThings.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Gib deinem Z-Wave-Netz ein einfaches Zuhause",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Verbinde Z-Wave JS UI per MQTT und leg mit dem Automatisieren los.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Z-Wave JS UI-Anleitung", href: "/docs/integrations/zwavejs-ui/" },
    },
  },
  es: {
    meta: {
      title: "Z-Wave JS UI sin Home Assistant: Z-Wave en local",
      description:
        "Usa Z-Wave JS UI sin Home Assistant: Z-Wave JS UI para tu red y Gladys Assistant por MQTT para paneles, escenas e IA. En local, gratis y de código abierto.",
    },
    screenshotCaption:
      "Tus dispositivos Z-Wave, gestionados por Z-Wave JS UI, en un panel de Gladys.",
    hero: {
      title: "Z-Wave JS UI sin Home Assistant",
      subtitle:
        "Z-Wave JS UI es la mejor forma de gestionar una red Z-Wave. Combínalo con Gladys Assistant por MQTT y tendrás paneles, escenas e IA, sin Home Assistant.",
      intro: [
        "Z-Wave JS UI es una aplicación de código abierto que controla tu stick USB Z-Wave y gestiona tu red: inclusión, exclusión, reparación de la red, actualizaciones de firmware. Funciona perfectamente por sí sola en Docker y puede publicar cada dispositivo en un broker MQTT.",
        "Así es exactamente como se conecta Gladys Assistant. Z-Wave JS UI sigue haciendo lo que mejor sabe hacer, y Gladys, una plataforma domótica gratuita y de código abierto, convierte cada nodo en un dispositivo que puedes poner en un panel, usar en escenas y controlar desde tu móvil. Todo se queda en local, en tu propio hardware.",
      ],
      primaryCta: {
        label: "Guía de configuración de Z-Wave JS UI",
        href: "/docs/integrations/zwavejs-ui/",
      },
      secondaryCta: {
        label: "Empezar con Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Por qué la gente busca Z-Wave sin Home Assistant",
      intro: "Quien usa Z-Wave suele querer una sola cosa: una red fiable que simplemente funcione.",
      points: [
        "La interfaz de Z-Wave JS UI es excelente para gestionar la red, pero no es un panel para toda la familia y no hace las automatizaciones del día a día.",
        "Home Assistant las aporta, junto con una plataforma enorme que aprender, YAML, complementos y actualizaciones frecuentes que seguir.",
        "Dejar atrás un hub antiguo (Fibaro, Vera, SmartThings, Hubitat…) es un buen momento para elegir algo más sencillo, siempre que siga siendo local.",
      ],
      outro:
        "Z-Wave JS UI para la red y una plataforma sencilla por encima: un reparto de tareas limpio y robusto.",
    },
    comparison: {
      title: "Z-Wave JS UI con Gladys frente a con Home Assistant",
      intro: "El mismo Z-Wave JS UI, dos formas de usarlo:",
      cols: {
        feature: "",
        gladys: "Con Gladys",
        other: "Con Home Assistant",
      },
      rows: [
        {
          feature: "Conexión",
          gladys: "MQTT: Z-Wave JS UI publica, Gladys se suscribe",
          other: "WebSocket al servidor Z-Wave JS",
        },
        {
          feature: "Gestión de la red",
          gladys: "En Z-Wave JS UI",
          other: "En Z-Wave JS UI o en la interfaz de Home Assistant",
        },
        {
          feature: "Añadir dispositivos",
          gladys: "Un clic desde la pestaña Descubiertos",
          other: "Descubrimiento automático de entidades",
        },
        {
          feature: "Automatizaciones",
          gladys: "Escenas visuales, sin código",
          other: "Automatizaciones, YAML, Node-RED",
        },
        {
          feature: "Funciona en local",
          gladys: "Sí",
          other: "Sí",
        },
      ],
      outro:
        "Hoy en día, Home Assistant admite más tipos de dispositivos Z-Wave. Gladys cubre lo esencial (sensores, interruptores, reguladores, persianas, medición de energía) y es más sencillo en el día a día.",
    },
    features: {
      title: "Lo que obtienes con Z-Wave JS UI en Gladys",
      intro: "Una vez que tus nodos Z-Wave están en Gladys:",
      cards: [
        {
          icon: "🚪",
          title: "Sensores",
          text: "Sensores de apertura de puertas y ventanas, temperatura, luminosidad, alarma y sensores binarios, con historial.",
        },
        {
          icon: "💡",
          title: "Interruptores y reguladores",
          text: "Enchufes, interruptores empotrados y reguladores de intensidad, como los módulos Fibaro y Qubino.",
        },
        {
          icon: "🪟",
          title: "Persianas y estores",
          text: "Abre, cierra y ajusta la posición de persianas enrollables y estores.",
        },
        {
          icon: "⚡",
          title: "Medición de energía",
          text: "Sigue la potencia y el consumo de los enchufes y módulos con medición.",
        },
        {
          icon: "🎬",
          title: "Escenas",
          text: "Dispara una escena con cualquier evento Z-Wave y actúa sobre cualquier dispositivo, sea Z-Wave o no, sin código.",
        },
        {
          icon: "📡",
          title: "Todos tus protocolos",
          text: "Z-Wave junto a dispositivos Zigbee, Matter y Wi-Fi en la misma interfaz.",
        },
      ],
    },
    how: {
      title: "Configura Z-Wave JS UI sin Home Assistant",
      intro: "En un mini-PC, una Raspberry Pi o un NAS con Docker:",
      points: [
        "Conecta un stick USB Z-Wave para tu región: 868,42 MHz en Europa, 908,42 MHz en Estados Unidos y Canadá. En Latinoamérica, la frecuencia depende del país: compruébala antes de comprar.",
        "Ejecuta Z-Wave JS UI en Docker e incluye tus dispositivos.",
        "En Z-Wave JS UI, activa la pasarela MQTT con los ajustes de la guía de Gladys (topics con nombre, objeto de valor completo).",
        "Instala Gladys, abre la integración Z-Wave JS UI e introduce los datos de tu broker MQTT.",
        "Abre la pestaña Descubiertos y añade tus dispositivos con un clic.",
      ],
      outro:
        "¿Necesitas un broker MQTT? La integración MQTT de Gladys puede iniciar uno por ti en Docker.",
    },
    solution: {
      title: "Conserva Z-Wave JS UI, olvídate de la complejidad",
      paragraphs: [
        "Gladys no sustituye a Z-Wave JS UI: tu red, tus inclusiones y tus actualizaciones de firmware se quedan donde están. Gladys añade la parte que tu familia ve de verdad: paneles, notificaciones, escenas, IA y acceso remoto con Gladys Plus.",
        "Gladys es gratis y de código abierto, se desarrolla desde 2013 y funciona íntegramente en tu propio hardware.",
      ],
      link: {
        label: "Gladys frente a Home Assistant, la comparación honesta →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Para ir más lejos",
      intro: "Más sobre los protocolos locales:",
      links: [
        {
          label: "Zigbee2MQTT sin Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "El mismo enfoque para tus dispositivos Zigbee.",
        },
        {
          label: "Zigbee vs Z-Wave vs Matter",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Qué protocolo elegir y cómo pueden convivir.",
        },
        {
          label: "Alternativa a Homey",
          href: "/homey-alternative/",
          text: "Una alternativa gratuita y de código abierto al Homey Pro.",
        },
        {
          label: "Alternativa a SmartThings",
          href: "/smartthings-alternative/",
          text: "Una alternativa local y privada a Samsung SmartThings.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Dale a tu red Z-Wave un hogar sencillo",
      text: "Gladys es gratis, de código abierto y se instala con un solo comando Docker. Conecta Z-Wave JS UI por MQTT y empieza a automatizar.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Guía de Z-Wave JS UI", href: "/docs/integrations/zwavejs-ui/" },
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

export const zwaveJsUiWithoutHomeAssistantFaqDe = [
  {
    question: "Läuft Z-Wave JS UI ohne Home Assistant?",
    answer:
      "Ja. Z-Wave JS UI ist eine eigenständige Anwendung, die meist mit Docker läuft. Sie verwaltet den Z-Wave-Stick und das Netz selbstständig und kann Geräte an einen MQTT-Broker veröffentlichen. Gladys Assistant verbindet sich mit diesem Broker und ergänzt Dashboards, Szenen und KI.",
  },
  {
    question: "Wie verbindet sich Gladys mit Z-Wave JS UI?",
    answer:
      "Über MQTT. Z-Wave JS UI veröffentlicht die Gerätezustände mit benannten Topics an einen MQTT-Broker, und Gladys abonniert diesen Broker, um Zustände in Echtzeit zu lesen und Befehle zu senden. Die genauen Einstellungen stehen in der Gladys-Anleitung zu Z-Wave JS UI.",
  },
  {
    question: "Welchen Z-Wave-Stick sollte ich kaufen?",
    answer:
      "Einen, der zur Frequenz deiner Region passt: 868,42 MHz in Europa, 908,42 MHz in den USA und Kanada. Ein Stick aus einer anderen Region kommuniziert nicht mit deinen Geräten.",
  },
  {
    question: "Welche Z-Wave-Geräte unterstützt Gladys?",
    answer:
      "Tür- und Fenstersensoren, Schalter und Steckdosen, Dimmer, Rollläden, Temperatur-, Helligkeits- und Alarmsensoren sowie Energiemessung. Wenn ein Gerät noch nicht unterstützt wird, frag am besten im Forum nach.",
  },
  {
    question: "Funktioniert Z-Wave mit Gladys ohne Internet?",
    answer:
      "Ja. Z-Wave JS UI, der MQTT-Broker und Gladys laufen alle auf deiner eigenen Hardware, deine Z-Wave-Geräte und Szenen funktionieren also auch ohne Internetverbindung und ohne Hersteller-Cloud weiter.",
  },
];

export const zwaveJsUiWithoutHomeAssistantFaqEs = [
  {
    question: "¿Z-Wave JS UI puede funcionar sin Home Assistant?",
    answer:
      "Sí. Z-Wave JS UI es una aplicación independiente que normalmente se ejecuta con Docker. Gestiona por sí sola el stick Z-Wave y la red, y puede publicar los dispositivos en un broker MQTT. Gladys Assistant se conecta a ese broker para añadir paneles, escenas e IA.",
  },
  {
    question: "¿Cómo se conecta Gladys a Z-Wave JS UI?",
    answer:
      "Por MQTT. Z-Wave JS UI publica el estado de los dispositivos en un broker MQTT con topics con nombre, y Gladys se suscribe al broker para leer los estados y enviar órdenes en tiempo real. Los ajustes exactos están en la guía de Z-Wave JS UI de Gladys.",
  },
  {
    question: "¿Qué stick Z-Wave debo comprar?",
    answer:
      "Uno que corresponda a la frecuencia de tu región: 868,42 MHz en Europa, 908,42 MHz en Estados Unidos y Canadá. En Latinoamérica, la frecuencia depende del país. Un stick de otra región no se comunicará con tus dispositivos.",
  },
  {
    question: "¿Qué dispositivos Z-Wave admite Gladys?",
    answer:
      "Sensores de puertas y ventanas, interruptores y enchufes, reguladores de intensidad, persianas enrollables, sensores de temperatura, luminosidad y alarma, y medición de energía. Si un dispositivo todavía no es compatible, el foro es el lugar para preguntar.",
  },
  {
    question: "¿Z-Wave con Gladys funciona sin internet?",
    answer:
      "Sí. Z-Wave JS UI, el broker MQTT y Gladys funcionan en tu propio hardware, así que tus dispositivos Z-Wave y tus escenas siguen funcionando sin conexión a internet y sin la nube del fabricante.",
  },
];

export default zwaveJsUiWithoutHomeAssistantContent;
