// Content for the "openHAB alternative" landing page.
// openHAB is the other historic open-source home automation platform (Java,
// EPL-2.0). People looking for an alternative usually find its model (things,
// channels, items, bindings) and its configuration heavy. We stay fair:
// openHAB is mature, vendor-neutral and has far more add-ons than Gladys.
// Facts checked on openhab.org in September 2026: current stable is 5.2.1
// (5.2 released July 5, 2026, with an LLM chat and a built-in MCP server),
// 500+ add-ons, rules in DSL, Blockly, JavaScript, Python, Ruby, Groovy.

const openhabAlternativeContent = {
  en: {
    meta: {
      title: "openHAB Alternative: Simpler Open-Source Home Automation",
      description:
        "Looking for an openHAB alternative? Gladys Assistant is free, open-source home automation that's simpler to set up: a modern interface, visual scenes, managed Zigbee2MQTT, Matter and AI. An honest comparison.",
    },
    screenshotCaption:
      "Gladys: a modern dashboard and visual scenes, with no items, channels or sitemaps to configure.",
    hero: {
      title: "Looking for an openHAB alternative?",
      subtitle:
        "openHAB is powerful and vendor-neutral. If you want the same open-source, local approach with far less configuration, Gladys Assistant is worth a look.",
      intro: [
        "openHAB has been one of the pillars of open-source home automation for more than a decade. It connects to almost everything, its rules engine is serious, and it runs entirely at home. It also asks a lot of you: things, channels, items, bindings, persistence services, sitemaps or UI pages, and rules in one of several languages.",
        "Gladys Assistant shares openHAB's values, open source, local and private, but makes the opposite trade-off on complexity. You add a device, it shows up with its features, you put it on a dashboard and use it in a visual scene. That's it.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Try the demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Why people look for an alternative to openHAB",
      intro: "openHAB users who switch usually mention the same things:",
      points: [
        "The Thing / Channel / Item model is powerful, but takes time to learn before your first device is useful.",
        "Configuration is split between the UI and text files, and many guides still assume text files.",
        "Rules can be written in DSL, Blockly, JavaScript, Python, Ruby or Groovy: flexible, but hard for the rest of the household to read.",
        "Building a family-friendly interface means designing pages or sitemaps yourself.",
      ],
      outro:
        "If you love tinkering, openHAB is great. If you want your home to just work, a simpler platform may suit you better.",
    },
    comparison: {
      title: "Gladys Assistant vs openHAB",
      intro: "Two open-source, local platforms with different philosophies:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "openHAB",
      },
      rows: [
        {
          feature: "License",
          gladys: "Apache 2.0",
          other: "EPL 2.0",
        },
        {
          feature: "Stack",
          gladys: "Node.js, Docker",
          other: "Java 21, openHABian or Docker",
        },
        {
          feature: "Adding a device",
          gladys: "Discover it, add it, done",
          other: "Thing, then channels linked to items",
        },
        {
          feature: "Automations",
          gladys: "Visual scenes",
          other: "Rules DSL, Blockly, JavaScript, Python, Ruby, Groovy",
        },
        {
          feature: "Dashboards",
          gladys: "Built in, mobile-first",
          other: "Main UI pages or sitemaps to design",
        },
        {
          feature: "Integrations",
          gladys: "Native integrations plus 90+ community integrations",
          other: "500+ add-ons",
        },
        {
          feature: "AI",
          gladys: "AI assistant with Gladys Plus, built-in MCP server",
          other: "LLM chat and built-in MCP server since 5.2",
        },
        {
          feature: "Remote access",
          gladys: "Optional Gladys Plus, encrypted",
          other: "myopenHAB cloud connector",
        },
      ],
      outro:
        "openHAB wins on breadth of integrations and flexibility. Gladys wins on simplicity, time to first automation and everyday interface.",
    },
    features: {
      title: "Why Gladys is a good openHAB alternative",
      intro: "What changes when you move to Gladys:",
      cards: [
        {
          icon: "⚡",
          title: "Minutes to the first device",
          text: "Install with one Docker command, add a device, see it on your dashboard.",
        },
        {
          icon: "🐝",
          title: "Managed Zigbee2MQTT",
          text: "Gladys installs and wires Zigbee2MQTT and its MQTT broker for you, no configuration files.",
        },
        {
          icon: "🧩",
          title: "Scenes the whole family understands",
          text: "Triggers, conditions, if/then/else and delays in a visual editor, no scripting language to pick.",
        },
        {
          icon: "📱",
          title: "A modern interface",
          text: "Gladys 5 was designed for phones and wall tablets out of the box.",
        },
        {
          icon: "🧱",
          title: "Integrations in any language",
          text: "Community integrations are Docker images, written in any language and installed in one click, sandboxed from the core.",
        },
        {
          icon: "💚",
          title: "Open source since 2013",
          text: "Apache 2.0, developed in the open, with a friendly bilingual community.",
        },
      ],
    },
    how: {
      title: "How to move from openHAB to Gladys",
      intro: "A progressive migration:",
      points: [
        "Install Gladys on the same machine or another one, and list your openHAB things by binding.",
        "Zigbee and Z-Wave: move your devices to Zigbee2MQTT and Z-Wave JS UI (if you already run Z-Wave JS UI with its MQTT gateway, Gladys can connect to it as is).",
        "Matter devices: share them with Gladys as a second controller.",
        "Brands (Hue, Sonos, Netatmo, Shelly, Tapo…): connect them through their Gladys integration.",
        "Rewrite your key rules as Gladys scenes, then switch off openHAB once everything runs in Gladys.",
      ],
      outro:
        "Check the Works with Gladys page first: openHAB covers more bindings, so make sure your devices are supported.",
    },
    solution: {
      title: "The same values, less configuration",
      paragraphs: [
        "openHAB and Gladys agree on the essentials: your home should run locally, on open-source software you control. Where they differ is who they're built for. openHAB gives power users every knob; Gladys gives households a smart home that's easy to set up and easy to live with.",
        "Gladys is free. Gladys Plus is an optional subscription for encrypted remote access, backups, Alexa and Google Home, and the AI assistant.",
      ],
      link: {
        label: "Best open-source home automation software →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Go further",
      intro: "Compare Gladys with other platforms:",
      links: [
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "An honest comparison with the most popular open-source platform.",
        },
        {
          label: "Open-source home automation",
          href: "/open-source-home-automation/",
          text: "The main open-source platforms, compared.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
        },
        {
          label: "Smart home MCP server",
          href: "/smart-home-mcp-server/",
          text: "Connect Claude and other AI agents to your home.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Open source, local, and simple",
      text: "Gladys is free and installs with a single Docker command. Try it next to openHAB and see the difference.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Works with Gladys", href: "/works-with/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative à openHAB : une domotique open source plus simple",
      description:
        "Vous cherchez une alternative à openHAB ? Gladys Assistant est une domotique gratuite et open source plus simple à mettre en place : interface moderne, scènes visuelles, Zigbee2MQTT géré, Matter et IA. Un comparatif honnête.",
    },
    screenshotCaption:
      "Gladys : un tableau de bord moderne et des scènes visuelles, sans items, channels ni sitemaps à configurer.",
    hero: {
      title: "Vous cherchez une alternative à openHAB ?",
      subtitle:
        "openHAB est puissant et indépendant des fabricants. Si vous voulez la même approche open source et locale avec beaucoup moins de configuration, Gladys Assistant mérite un coup d'œil.",
      intro: [
        "openHAB est l'un des piliers de la domotique open source depuis plus de dix ans. Il se connecte à presque tout, son moteur de règles est sérieux, et il tourne entièrement à la maison. Il demande aussi beaucoup : things, channels, items, bindings, services de persistance, sitemaps ou pages d'interface, et des règles dans l'un des nombreux langages disponibles.",
        "Gladys Assistant partage les valeurs d'openHAB, open source, local et privé, mais fait le choix inverse sur la complexité. Vous ajoutez un appareil, il apparaît avec ses fonctionnalités, vous le mettez sur un tableau de bord et l'utilisez dans une scène visuelle. C'est tout.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Essayer la démo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Pourquoi chercher une alternative à openHAB",
      intro: "Les utilisateurs d'openHAB qui changent évoquent souvent les mêmes points :",
      points: [
        "Le modèle Thing / Channel / Item est puissant, mais demande du temps avant que le premier appareil soit utile.",
        "La configuration est partagée entre l'interface et des fichiers texte, et beaucoup de guides supposent encore les fichiers texte.",
        "Les règles s'écrivent en DSL, Blockly, JavaScript, Python, Ruby ou Groovy : flexible, mais difficile à lire pour le reste de la famille.",
        "Construire une interface pour toute la famille demande de concevoir soi-même pages ou sitemaps.",
      ],
      outro:
        "Si vous aimez bricoler, openHAB est excellent. Si vous voulez une maison qui marche, une plateforme plus simple vous conviendra peut-être mieux.",
    },
    comparison: {
      title: "Gladys Assistant vs openHAB",
      intro: "Deux plateformes open source et locales, deux philosophies :",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "openHAB",
      },
      rows: [
        {
          feature: "Licence",
          gladys: "Apache 2.0",
          other: "EPL 2.0",
        },
        {
          feature: "Technologie",
          gladys: "Node.js, Docker",
          other: "Java 21, openHABian ou Docker",
        },
        {
          feature: "Ajouter un appareil",
          gladys: "Le découvrir, l'ajouter, terminé",
          other: "Un thing, puis des channels liés à des items",
        },
        {
          feature: "Automatisations",
          gladys: "Scènes visuelles",
          other: "Rules DSL, Blockly, JavaScript, Python, Ruby, Groovy",
        },
        {
          feature: "Tableaux de bord",
          gladys: "Intégrés, pensés pour le mobile",
          other: "Pages de la Main UI ou sitemaps à concevoir",
        },
        {
          feature: "Intégrations",
          gladys: "Intégrations natives plus de 90 intégrations communautaires",
          other: "Plus de 500 add-ons",
        },
        {
          feature: "IA",
          gladys: "Assistant IA avec Gladys Plus, serveur MCP intégré",
          other: "Chat LLM et serveur MCP intégré depuis la 5.2",
        },
        {
          feature: "Accès à distance",
          gladys: "Gladys Plus en option, chiffré",
          other: "Connecteur cloud myopenHAB",
        },
      ],
      outro:
        "openHAB l'emporte sur l'étendue des intégrations et la flexibilité. Gladys l'emporte sur la simplicité, le temps jusqu'à la première automatisation et l'interface au quotidien.",
    },
    features: {
      title: "Pourquoi Gladys est une bonne alternative à openHAB",
      intro: "Ce qui change en passant à Gladys :",
      cards: [
        {
          icon: "⚡",
          title: "Quelques minutes jusqu'au premier appareil",
          text: "Installez en une commande Docker, ajoutez un appareil, voyez-le sur votre tableau de bord.",
        },
        {
          icon: "🐝",
          title: "Zigbee2MQTT géré",
          text: "Gladys installe et relie Zigbee2MQTT et son broker MQTT pour vous, sans fichier de configuration.",
        },
        {
          icon: "🧩",
          title: "Des scènes compréhensibles par toute la famille",
          text: "Déclencheurs, conditions, si/alors/sinon et délais dans un éditeur visuel, sans langage de script à choisir.",
        },
        {
          icon: "📱",
          title: "Une interface moderne",
          text: "Gladys 5 a été pensée pour les téléphones et les tablettes murales dès le départ.",
        },
        {
          icon: "🧱",
          title: "Des intégrations dans n'importe quel langage",
          text: "Les intégrations communautaires sont des images Docker, écrites dans n'importe quel langage et installées en un clic, isolées du cœur.",
        },
        {
          icon: "💚",
          title: "Open source depuis 2013",
          text: "Apache 2.0, développée de façon ouverte, avec une communauté bilingue et bienveillante.",
        },
      ],
    },
    how: {
      title: "Comment passer d'openHAB à Gladys",
      intro: "Une migration progressive :",
      points: [
        "Installez Gladys sur la même machine ou une autre, et listez vos things openHAB par binding.",
        "Zigbee et Z-Wave : passez vos appareils sur Zigbee2MQTT et Z-Wave JS UI (si vous utilisez déjà Z-Wave JS UI avec sa passerelle MQTT, Gladys peut s'y connecter tel quel).",
        "Appareils Matter : partagez-les avec Gladys comme second contrôleur.",
        "Marques (Hue, Sonos, Netatmo, Shelly, Tapo…) : connectez-les via leur intégration Gladys.",
        "Réécrivez vos règles principales en scènes Gladys, puis éteignez openHAB quand tout tourne dans Gladys.",
      ],
      outro:
        "Vérifiez d'abord la page des appareils compatibles : openHAB couvre plus de bindings, assurez-vous que vos appareils sont pris en charge.",
    },
    solution: {
      title: "Les mêmes valeurs, moins de configuration",
      paragraphs: [
        "openHAB et Gladys sont d'accord sur l'essentiel : votre maison doit tourner en local, sur un logiciel open source que vous maîtrisez. Ils diffèrent sur leur public. openHAB donne tous les réglages aux utilisateurs avancés ; Gladys donne aux foyers une maison connectée facile à installer et facile à vivre.",
        "Gladys est gratuite. Gladys Plus est un abonnement optionnel pour l'accès distant chiffré, les sauvegardes, Alexa et Google Home, et l'assistant IA.",
      ],
      link: {
        label: "Les meilleurs logiciels domotiques open source →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Comparez Gladys aux autres plateformes :",
      links: [
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Un comparatif honnête avec la plateforme open source la plus populaire.",
        },
        {
          label: "Gladys vs Jeedom",
          href: "/jeedom-vs-gladys-assistant/",
          text: "Un comparatif honnête avec la box domotique française.",
        },
        {
          label: "La domotique open source",
          href: "/open-source-home-automation/",
          text: "Les principales plateformes open source, comparées.",
        },
        {
          label: "Serveur MCP domotique",
          href: "/smart-home-mcp-server/",
          text: "Connectez Claude et d'autres agents IA à votre maison.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Open source, local, et simple",
      text: "Gladys est gratuite et s'installe en une seule commande Docker. Essayez-la à côté d'openHAB et voyez la différence.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Appareils compatibles", href: "/works-with/" },
    },
  },

  de: {
    meta: {
      title: "openHAB Alternative: einfachere Open-Source-Hausautomation",
      description:
        "Suchst du eine openHAB Alternative? Gladys Assistant ist kostenlose Open-Source-Hausautomation, viel einfacher: visuelle Szenen, Zigbee2MQTT, Matter, KI.",
    },
    screenshotCaption:
      "Gladys: ein modernes Dashboard und visuelle Szenen, ganz ohne Items, Channels oder Sitemaps zum Konfigurieren.",
    hero: {
      title: "Du suchst eine Alternative zu openHAB?",
      subtitle:
        "openHAB ist mächtig und herstellerunabhängig. Wenn du denselben lokalen Open-Source-Ansatz mit viel weniger Konfiguration willst, lohnt sich ein Blick auf Gladys Assistant.",
      intro: [
        "openHAB ist seit mehr als zehn Jahren eine der Säulen der Open-Source-Hausautomation. Es verbindet sich mit fast allem, die Regel-Engine ist ernst zu nehmen, und alles läuft komplett bei dir zu Hause. Es verlangt dir aber auch einiges ab: Things, Channels, Items, Bindings, Persistence-Dienste, Sitemaps oder UI-Seiten und Regeln in einer von mehreren Sprachen.",
        "Gladys Assistant teilt die Werte von openHAB, Open Source, lokal und privat, geht bei der Komplexität aber genau den umgekehrten Weg. Du fügst ein Gerät hinzu, es erscheint mit seinen Funktionen, du legst es auf ein Dashboard und nutzt es in einer visuellen Szene. Fertig.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/docs/" },
      secondaryCta: {
        label: "Demo ausprobieren →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Warum viele eine Alternative zu openHAB suchen",
      intro: "openHAB-Nutzer, die wechseln, nennen meist dieselben Gründe:",
      points: [
        "Das Modell aus Thing, Channel und Item ist mächtig, aber du musst es erst lernen, bevor dein erstes Gerät etwas Nützliches tut.",
        "Die Konfiguration ist zwischen Oberfläche und Textdateien aufgeteilt, und viele Anleitungen setzen immer noch Textdateien voraus.",
        "Regeln lassen sich in DSL, Blockly, JavaScript, Python, Ruby oder Groovy schreiben: flexibel, aber für den Rest des Haushalts schwer zu lesen.",
        "Für eine familientaugliche Oberfläche musst du Seiten oder Sitemaps selbst gestalten.",
      ],
      outro:
        "Wenn du gern bastelst, ist openHAB großartig. Wenn dein Zuhause einfach funktionieren soll, passt eine einfachere Plattform vielleicht besser zu dir.",
    },
    comparison: {
      title: "Gladys Assistant vs. openHAB",
      intro: "Zwei lokale Open-Source-Plattformen mit unterschiedlicher Philosophie:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "openHAB",
      },
      rows: [
        {
          feature: "Lizenz",
          gladys: "Apache 2.0",
          other: "EPL 2.0",
        },
        {
          feature: "Technik",
          gladys: "Node.js, Docker",
          other: "Java 21, openHABian oder Docker",
        },
        {
          feature: "Gerät hinzufügen",
          gladys: "Erkennen, hinzufügen, fertig",
          other: "Thing anlegen, dann Channels mit Items verknüpfen",
        },
        {
          feature: "Automationen",
          gladys: "Visuelle Szenen",
          other: "Rules DSL, Blockly, JavaScript, Python, Ruby, Groovy",
        },
        {
          feature: "Dashboards",
          gladys: "Eingebaut, fürs Smartphone gemacht",
          other: "Main-UI-Seiten oder Sitemaps zum Selbstgestalten",
        },
        {
          feature: "Integrationen",
          gladys: "Native Integrationen plus über 90 Community-Integrationen",
          other: "Über 500 Add-ons",
        },
        {
          feature: "KI",
          gladys: "KI-Assistent mit Gladys Plus, eingebauter MCP-Server",
          other: "LLM-Chat und eingebauter MCP-Server seit 5.2",
        },
        {
          feature: "Fernzugriff",
          gladys: "Optional mit Gladys Plus, verschlüsselt",
          other: "myopenHAB Cloud Connector",
        },
      ],
      outro:
        "openHAB punktet mit der Breite an Integrationen und Flexibilität. Gladys punktet mit Einfachheit, schnellem Weg zur ersten Automation und einer alltagstauglichen Oberfläche.",
    },
    features: {
      title: "Warum Gladys eine gute openHAB Alternative ist",
      intro: "Das ändert sich, wenn du zu Gladys wechselst:",
      cards: [
        {
          icon: "⚡",
          title: "In Minuten zum ersten Gerät",
          text: "Mit einem Docker-Befehl installieren, ein Gerät hinzufügen, es auf deinem Dashboard sehen.",
        },
        {
          icon: "🐝",
          title: "Verwaltetes Zigbee2MQTT",
          text: "Gladys installiert und verbindet Zigbee2MQTT samt MQTT-Broker für dich, ohne Konfigurationsdateien.",
        },
        {
          icon: "🧩",
          title: "Szenen, die die ganze Familie versteht",
          text: "Auslöser, Bedingungen, Wenn/Dann/Sonst und Verzögerungen in einem visuellen Editor, ohne dass du eine Skriptsprache wählen musst.",
        },
        {
          icon: "📱",
          title: "Eine moderne Oberfläche",
          text: "Gladys 5 wurde von Anfang an für Smartphones und Wand-Tablets entwickelt.",
        },
        {
          icon: "🧱",
          title: "Integrationen in jeder Sprache",
          text: "Community-Integrationen sind Docker-Images, in beliebiger Sprache geschrieben, mit einem Klick installiert und vom Kern abgeschottet.",
        },
        {
          icon: "💚",
          title: "Open Source seit 2013",
          text: "Apache 2.0, öffentlich entwickelt, mit einer freundlichen, zweisprachigen Community.",
        },
      ],
    },
    how: {
      title: "So wechselst du von openHAB zu Gladys",
      intro: "Eine schrittweise Migration:",
      points: [
        "Installiere Gladys auf demselben oder einem anderen Rechner und liste deine openHAB-Things nach Binding auf.",
        "Zigbee und Z-Wave: Zieh deine Geräte zu Zigbee2MQTT und Z-Wave JS UI um (wenn du Z-Wave JS UI schon mit seinem MQTT-Gateway betreibst, kann sich Gladys direkt damit verbinden).",
        "Matter-Geräte: Teile sie mit Gladys als zweitem Controller.",
        "Marken (Hue, Sonos, Netatmo, Shelly, Tapo…): Verbinde sie über ihre Gladys-Integration.",
        "Schreib deine wichtigsten Regeln als Gladys-Szenen neu und schalte openHAB ab, sobald alles in Gladys läuft.",
      ],
      outro:
        "Wirf vorher einen Blick auf die Seite „Funktioniert mit Gladys“: openHAB deckt mehr Bindings ab, stell also sicher, dass deine Geräte unterstützt werden.",
    },
    solution: {
      title: "Dieselben Werte, weniger Konfiguration",
      paragraphs: [
        "openHAB und Gladys sind sich beim Wesentlichen einig: Dein Zuhause sollte lokal laufen, mit Open-Source-Software, die du kontrollierst. Der Unterschied liegt darin, für wen sie gemacht sind. openHAB gibt Power-Usern jede Stellschraube; Gladys gibt Haushalten ein Smart Home, das sich leicht einrichten lässt und mit dem man gut lebt.",
        "Gladys ist kostenlos. Gladys Plus ist ein optionales Abo für verschlüsselten Fernzugriff, Backups, Alexa und Google Home sowie den KI-Assistenten.",
      ],
      link: {
        label: "Die beste Open-Source-Software für Hausautomation →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Vergleiche Gladys mit anderen Plattformen:",
      links: [
        {
          label: "Gladys vs. Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Ein ehrlicher Vergleich mit der beliebtesten Open-Source-Plattform.",
        },
        {
          label: "Open-Source-Hausautomation",
          href: "/open-source-home-automation/",
          text: "Die wichtigsten Open-Source-Plattformen im Vergleich.",
        },
        {
          label: "Zigbee2MQTT ohne Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Lokales Zigbee mit verwalteter Einrichtung und Dashboards.",
        },
        {
          label: "MCP-Server fürs Smart Home",
          href: "/smart-home-mcp-server/",
          text: "Verbinde Claude und andere KI-Agenten mit deinem Zuhause.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Open Source, lokal und einfach",
      text: "Gladys ist kostenlos und mit einem einzigen Docker-Befehl installiert. Probier es neben openHAB aus und sieh selbst den Unterschied.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Funktioniert mit Gladys", href: "/works-with/" },
    },
  },
  es: {
    meta: {
      title: "Alternativa a openHAB: domótica de código abierto más sencilla",
      description:
        "¿Buscas una alternativa a openHAB? Gladys Assistant es un software de domótica gratuito y de código abierto, más sencillo de configurar: interfaz moderna, escenas visuales, Zigbee2MQTT gestionado, Matter e IA. Una comparación honesta.",
    },
    screenshotCaption:
      "Gladys: un panel moderno y escenas visuales, sin items, channels ni sitemaps que configurar.",
    hero: {
      title: "¿Buscas una alternativa a openHAB?",
      subtitle:
        "openHAB es potente e independiente de cualquier fabricante. Si quieres el mismo enfoque local y de código abierto con mucha menos configuración, vale la pena echar un vistazo a Gladys Assistant.",
      intro: [
        "openHAB es uno de los pilares de la domótica de código abierto desde hace más de una década. Se conecta con casi todo, su motor de reglas es serio y funciona íntegramente en casa. Pero también te exige mucho: things, channels, items, bindings, servicios de persistencia, sitemaps o páginas de interfaz, y reglas en uno de varios lenguajes.",
        "Gladys Assistant comparte los valores de openHAB (código abierto, local y privado), pero hace la apuesta contraria en cuanto a complejidad. Añades un dispositivo, aparece con sus funciones, lo colocas en un panel y lo usas en una escena visual. Y ya está.",
      ],
      primaryCta: { label: "Empieza gratis", href: "/docs/" },
      secondaryCta: {
        label: "Prueba la demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Por qué la gente busca una alternativa a openHAB",
      intro: "Los usuarios de openHAB que se cambian suelen mencionar lo mismo:",
      points: [
        "El modelo Thing / Channel / Item es potente, pero lleva tiempo aprenderlo antes de que tu primer dispositivo sea útil.",
        "La configuración está repartida entre la interfaz y archivos de texto, y muchas guías siguen dando por hecho que usas archivos de texto.",
        "Las reglas se pueden escribir en DSL, Blockly, JavaScript, Python, Ruby o Groovy: es flexible, pero difícil de leer para el resto de la familia.",
        "Crear una interfaz apta para toda la familia implica diseñar tú mismo las páginas o los sitemaps.",
      ],
      outro:
        "Si te encanta trastear, openHAB es genial. Si quieres que tu casa simplemente funcione, puede que una plataforma más sencilla te encaje mejor.",
    },
    comparison: {
      title: "Gladys Assistant vs openHAB",
      intro: "Dos plataformas locales y de código abierto con filosofías distintas:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "openHAB",
      },
      rows: [
        {
          feature: "Licencia",
          gladys: "Apache 2.0",
          other: "EPL 2.0",
        },
        {
          feature: "Stack",
          gladys: "Node.js, Docker",
          other: "Java 21, openHABian o Docker",
        },
        {
          feature: "Añadir un dispositivo",
          gladys: "Lo detectas, lo añades y listo",
          other: "Un thing y luego channels vinculados a items",
        },
        {
          feature: "Automatizaciones",
          gladys: "Escenas visuales",
          other: "Rules DSL, Blockly, JavaScript, Python, Ruby, Groovy",
        },
        {
          feature: "Paneles",
          gladys: "Integrados, pensados para el móvil",
          other: "Páginas de Main UI o sitemaps que diseñar",
        },
        {
          feature: "Integraciones",
          gladys: "Integraciones nativas y más de 90 integraciones de la comunidad",
          other: "Más de 500 add-ons",
        },
        {
          feature: "IA",
          gladys: "Asistente de IA con Gladys Plus, servidor MCP integrado",
          other: "Chat con LLM y servidor MCP integrado desde la 5.2",
        },
        {
          feature: "Acceso remoto",
          gladys: "Gladys Plus opcional, cifrado",
          other: "Conector en la nube myopenHAB",
        },
      ],
      outro:
        "openHAB gana en variedad de integraciones y en flexibilidad. Gladys gana en sencillez, en el tiempo que tardas en tener tu primera automatización y en la interfaz del día a día.",
    },
    features: {
      title: "Por qué Gladys es una buena alternativa a openHAB",
      intro: "Lo que cambia cuando te pasas a Gladys:",
      cards: [
        {
          icon: "⚡",
          title: "Tu primer dispositivo en minutos",
          text: "Instálalo con un solo comando Docker, añade un dispositivo y míralo en tu panel.",
        },
        {
          icon: "🐝",
          title: "Zigbee2MQTT gestionado",
          text: "Gladys instala y conecta por ti Zigbee2MQTT y su broker MQTT, sin archivos de configuración.",
        },
        {
          icon: "🧩",
          title: "Escenas que entiende toda la familia",
          text: "Disparadores, condiciones, si/entonces/si no y esperas en un editor visual, sin tener que elegir un lenguaje de scripts.",
        },
        {
          icon: "📱",
          title: "Una interfaz moderna",
          text: "Gladys 5 se diseñó desde el principio para móviles y tablets de pared.",
        },
        {
          icon: "🧱",
          title: "Integraciones en cualquier lenguaje",
          text: "Las integraciones de la comunidad son imágenes Docker, escritas en cualquier lenguaje e instaladas con un clic, aisladas del núcleo.",
        },
        {
          icon: "💚",
          title: "Código abierto desde 2013",
          text: "Apache 2.0, desarrollado de forma abierta, con una comunidad bilingüe y cercana.",
        },
      ],
    },
    how: {
      title: "Cómo pasar de openHAB a Gladys",
      intro: "Una migración progresiva:",
      points: [
        "Instala Gladys en la misma máquina o en otra, y haz una lista de tus things de openHAB por binding.",
        "Zigbee y Z-Wave: pasa tus dispositivos a Zigbee2MQTT y Z-Wave JS UI (si ya usas Z-Wave JS UI con su pasarela MQTT, Gladys puede conectarse a él tal cual).",
        "Dispositivos Matter: compártelos con Gladys como segundo controlador.",
        "Marcas (Hue, Sonos, Netatmo, Shelly, Tapo…): conéctalas mediante su integración de Gladys.",
        "Reescribe tus reglas clave como escenas de Gladys y apaga openHAB cuando todo funcione en Gladys.",
      ],
      outro:
        "Consulta antes la página Compatible con Gladys: openHAB cubre más bindings, así que asegúrate de que tus dispositivos son compatibles.",
    },
    solution: {
      title: "Los mismos valores, menos configuración",
      paragraphs: [
        "openHAB y Gladys coinciden en lo esencial: tu casa debería funcionar en local, con software de código abierto que tú controlas. En lo que se diferencian es en el público al que se dirigen. openHAB da a los usuarios avanzados todos los ajustes posibles; Gladys da a los hogares una casa inteligente fácil de configurar y fácil de vivir.",
        "Gladys es gratuito. Gladys Plus es una suscripción opcional para el acceso remoto cifrado, las copias de seguridad, Alexa y Google Home, y el asistente de IA.",
      ],
      link: {
        label: "El mejor software de domótica de código abierto →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Ir más allá",
      intro: "Compara Gladys con otras plataformas:",
      links: [
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Una comparación honesta con la plataforma de código abierto más popular.",
        },
        {
          label: "Domótica de código abierto",
          href: "/open-source-home-automation/",
          text: "Las principales plataformas de código abierto, comparadas.",
        },
        {
          label: "Zigbee2MQTT sin Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Zigbee en local, con una configuración gestionada y paneles.",
        },
        {
          label: "Servidor MCP para el hogar inteligente",
          href: "/smart-home-mcp-server/",
          text: "Conecta Claude y otros agentes de IA a tu casa.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Código abierto, local y sencillo",
      text: "Gladys es gratuito y se instala con un solo comando Docker. Pruébalo junto a openHAB y comprueba la diferencia.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Compatible con Gladys", href: "/works-with/" },
    },
  },
};

export const openhabAlternativeFaqEn = [
  {
    question: "What is a simpler alternative to openHAB?",
    answer:
      "Gladys Assistant is a free, open-source and local platform designed to be simple: devices are discovered and added in a few clicks, dashboards are built in, and automations are visual scenes. Home Assistant is another option, more extensive but also more complex.",
  },
  {
    question: "Is Gladys open source like openHAB?",
    answer:
      "Yes. Gladys Assistant is open source under the Apache 2.0 license and has been developed in the open since 2013. openHAB is open source under the Eclipse Public License 2.0.",
  },
  {
    question: "Does Gladys have as many integrations as openHAB?",
    answer:
      "No. openHAB has more than 500 add-ons, while Gladys has its native integrations plus more than 90 community integrations. Gladys covers the major protocols (Zigbee, Z-Wave, Matter, MQTT) and popular brands, so check the Works with Gladys page for your devices.",
  },
  {
    question: "Can Gladys run on the same Raspberry Pi as openHAB?",
    answer:
      "Gladys runs in Docker, so it can run next to openHAB during a migration if the machine has enough resources. A Raspberry Pi 4 or 5, or a mini-PC, is recommended. Only one of them can use a given USB Zigbee or Z-Wave dongle at a time.",
  },
  {
    question: "Does openHAB have AI features?",
    answer:
      "Yes, openHAB 5.2 (July 2026) added an LLM chat interface and a built-in MCP server. Gladys also has a built-in MCP server, and its Gladys Plus subscription includes an AI assistant powered by open-weight models hosted in France.",
  },
];

export const openhabAlternativeFaqFr = [
  {
    question: "Quelle alternative plus simple à openHAB ?",
    answer:
      "Gladys Assistant est une plateforme gratuite, open source et locale pensée pour être simple : les appareils sont découverts et ajoutés en quelques clics, les tableaux de bord sont intégrés et les automatisations sont des scènes visuelles. Home Assistant est une autre option, plus vaste mais aussi plus complexe.",
  },
  {
    question: "Gladys est-elle open source comme openHAB ?",
    answer:
      "Oui. Gladys Assistant est open source sous licence Apache 2.0 et développée de façon ouverte depuis 2013. openHAB est open source sous Eclipse Public License 2.0.",
  },
  {
    question: "Gladys a-t-elle autant d'intégrations qu'openHAB ?",
    answer:
      "Non. openHAB compte plus de 500 add-ons, Gladys a ses intégrations natives plus de 90 intégrations communautaires. Gladys couvre les grands protocoles (Zigbee, Z-Wave, Matter, MQTT) et les marques populaires : vérifiez vos appareils sur la page des appareils compatibles.",
  },
  {
    question: "Gladys peut-elle tourner sur le même Raspberry Pi qu'openHAB ?",
    answer:
      "Gladys tourne dans Docker, elle peut donc cohabiter avec openHAB pendant une migration si la machine a assez de ressources. Un Raspberry Pi 4 ou 5, ou un mini-PC, est recommandé. Une clé USB Zigbee ou Z-Wave ne peut être utilisée que par l'un des deux à la fois.",
  },
  {
    question: "openHAB a-t-il des fonctionnalités d'IA ?",
    answer:
      "Oui, openHAB 5.2 (juillet 2026) a ajouté une interface de chat LLM et un serveur MCP intégré. Gladys a aussi un serveur MCP intégré, et son abonnement Gladys Plus inclut un assistant IA basé sur des modèles open-weight hébergés en France.",
  },
];

export const openhabAlternativeFaqDe = [
  {
    question: "Was ist eine einfachere Alternative zu openHAB?",
    answer:
      "Gladys Assistant ist eine kostenlose, lokale Open-Source-Plattform, die auf Einfachheit ausgelegt ist: Geräte werden in wenigen Klicks erkannt und hinzugefügt, Dashboards sind eingebaut, und Automationen sind visuelle Szenen. Home Assistant ist eine weitere Option, umfangreicher, aber auch komplexer.",
  },
  {
    question: "Ist Gladys Open Source wie openHAB?",
    answer:
      "Ja. Gladys Assistant ist Open Source unter der Apache-2.0-Lizenz und wird seit 2013 öffentlich entwickelt. openHAB ist Open Source unter der Eclipse Public License 2.0.",
  },
  {
    question: "Hat Gladys so viele Integrationen wie openHAB?",
    answer:
      "Nein. openHAB hat mehr als 500 Add-ons, Gladys hat seine nativen Integrationen plus über 90 Community-Integrationen. Gladys deckt die wichtigen Protokolle (Zigbee, Z-Wave, Matter, MQTT) und beliebte Marken ab, prüf deine Geräte also auf der Seite „Funktioniert mit Gladys“.",
  },
  {
    question: "Kann Gladys auf demselben Raspberry Pi wie openHAB laufen?",
    answer:
      "Gladys läuft in Docker und kann deshalb während einer Migration neben openHAB laufen, wenn der Rechner genug Ressourcen hat. Empfohlen sind ein Raspberry Pi 4 oder 5 oder ein Mini-PC. Einen bestimmten Zigbee- oder Z-Wave-USB-Stick kann immer nur einer von beiden gleichzeitig nutzen.",
  },
  {
    question: "Hat openHAB KI-Funktionen?",
    answer:
      "Ja, openHAB 5.2 (Juli 2026) hat eine LLM-Chat-Oberfläche und einen eingebauten MCP-Server eingeführt. Gladys hat ebenfalls einen eingebauten MCP-Server, und das Gladys Plus Abo enthält einen KI-Assistenten auf Basis von Open-Weight-Modellen, die in Frankreich gehostet werden.",
  },
];

export const openhabAlternativeFaqEs = [
  {
    question: "¿Cuál es una alternativa más sencilla a openHAB?",
    answer:
      "Gladys Assistant es una plataforma gratuita, de código abierto y local, diseñada para ser sencilla: los dispositivos se detectan y se añaden en pocos clics, los paneles vienen integrados y las automatizaciones son escenas visuales. Home Assistant es otra opción, más completa pero también más compleja.",
  },
  {
    question: "¿Gladys es de código abierto como openHAB?",
    answer:
      "Sí. Gladys Assistant es de código abierto bajo la licencia Apache 2.0 y se desarrolla de forma abierta desde 2013. openHAB es de código abierto bajo la Eclipse Public License 2.0.",
  },
  {
    question: "¿Gladys tiene tantas integraciones como openHAB?",
    answer:
      "No. openHAB tiene más de 500 add-ons, mientras que Gladys tiene sus integraciones nativas y más de 90 integraciones de la comunidad. Gladys cubre los principales protocolos (Zigbee, Z-Wave, Matter, MQTT) y las marcas más populares, así que consulta la página Compatible con Gladys para ver tus dispositivos.",
  },
  {
    question: "¿Gladys puede funcionar en la misma Raspberry Pi que openHAB?",
    answer:
      "Gladys funciona en Docker, así que puede ejecutarse junto a openHAB durante una migración si la máquina tiene recursos suficientes. Se recomienda una Raspberry Pi 4 o 5, o un mini-PC. Solo uno de los dos puede usar a la vez un mismo dongle USB Zigbee o Z-Wave.",
  },
  {
    question: "¿openHAB tiene funciones de IA?",
    answer:
      "Sí, openHAB 5.2 (julio de 2026) añadió una interfaz de chat con LLM y un servidor MCP integrado. Gladys también tiene un servidor MCP integrado, y su suscripción Gladys Plus incluye un asistente de IA basado en modelos de pesos abiertos alojados en Francia.",
  },
];

export default openhabAlternativeContent;
