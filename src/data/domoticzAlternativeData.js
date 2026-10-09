// Content for the "Domoticz alternative" landing page.
// Domoticz is a long-standing, lightweight open-source home automation system
// (C++, GPLv3), popular in Europe on Raspberry Pi. People looking for an
// alternative usually mention its dated interface and scripting (Lua,
// dzVents, Blockly). We stay fair: Domoticz is light, stable and supports a
// lot of hardware. Same layout as the openHAB alternative page.

const domoticzAlternativeContent = {
  en: {
    meta: {
      title: "Domoticz Alternative: Modern Open-Source Home Automation",
      description:
        "Looking for a Domoticz alternative? Gladys Assistant is free, open-source home automation with a modern mobile interface, visual scenes, managed Zigbee2MQTT, Matter and AI. An honest comparison and a migration path.",
    },
    screenshotCaption:
      "Gladys: a modern, mobile-first dashboard where Domoticz users are used to device lists and scripts.",
    hero: {
      title: "Looking for a Domoticz alternative?",
      subtitle:
        "Domoticz has run countless Raspberry Pi smart homes. If you want the same open-source, local approach with a modern interface and no scripting, Gladys Assistant is a natural next step.",
      intro: [
        "Domoticz earned its reputation by being light, stable and compatible with a huge range of hardware, from RFXCOM and 433 MHz devices to Zigbee and Z-Wave. Many smart homes have run on it for a decade.",
        "But its interface shows its age, and anything beyond simple timers means Lua, dzVents or Blockly scripts. Gladys Assistant shares the same values, open source, local and lightweight, with a mobile-first interface and automations you build visually.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Try the demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Why people look for an alternative to Domoticz",
      intro: "Domoticz users who switch usually mention the same things:",
      points: [
        "The web interface feels dated, especially on a phone.",
        "Automations beyond simple timers require scripting in Lua, dzVents or Blockly.",
        "Dashboards for the rest of the household take work to set up.",
        "Its community and its catalog of integrations are smaller than Home Assistant's.",
      ],
      outro:
        "If Domoticz still does everything you need, keep it. If you want a fresher experience without giving up open source and local control, read on.",
    },
    comparison: {
      title: "Gladys Assistant vs Domoticz",
      intro: "Two lightweight, open-source and local platforms:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Domoticz",
      },
      rows: [
        { feature: "License", gladys: "Apache 2.0", other: "GPL v3" },
        { feature: "Stack", gladys: "Node.js, Docker", other: "C++, native or Docker" },
        {
          feature: "Interface",
          gladys: "Modern, mobile-first dashboards",
          other: "Classic web interface",
        },
        {
          feature: "Automations",
          gladys: "Visual scenes, no code",
          other: "Timers, Blockly, Lua, dzVents and Python scripts",
        },
        {
          feature: "Zigbee",
          gladys: "Zigbee2MQTT, installed and managed by Gladys",
          other: "Through Zigbee2MQTT over MQTT, or plugins",
        },
        {
          feature: "AI",
          gladys: "AI assistant with Gladys Plus, built-in MCP server",
          other: "No built-in AI",
        },
        {
          feature: "Hardware coverage",
          gladys: "Main protocols and popular brands, plus 90+ community integrations",
          other: "Very broad, including legacy 433 MHz and RFXCOM devices",
        },
      ],
      outro:
        "Domoticz, still actively maintained with several releases a year, wins on legacy hardware coverage and a very light footprint. Gladys wins on interface, automations without code, Matter and AI.",
    },
    features: {
      title: "Why Gladys is a good Domoticz alternative",
      intro: "What changes when you move to Gladys:",
      cards: [
        {
          icon: "📱",
          title: "A modern interface",
          text: "Dashboards designed for phones and wall tablets, that the whole household can use.",
        },
        {
          icon: "🧩",
          title: "Scenes instead of scripts",
          text: "Triggers, conditions, if/then/else and delays in a visual editor: no Lua or dzVents to maintain.",
        },
        {
          icon: "🐝",
          title: "Managed Zigbee2MQTT",
          text: "Gladys installs and wires Zigbee2MQTT and its MQTT broker for you.",
        },
        {
          icon: "🔗",
          title: "Matter",
          text: "Gladys is a Matter controller, ready for the new generation of devices.",
        },
        {
          icon: "🤖",
          title: "AI when you want it",
          text: "Talk to your home with Gladys Plus, or connect Claude through the built-in MCP server.",
        },
        {
          icon: "🍓",
          title: "Still lightweight",
          text: "Gladys runs on a Raspberry Pi, a mini-PC or a NAS with Docker.",
        },
      ],
    },
    how: {
      title: "How to move from Domoticz to Gladys",
      intro: "A progressive migration:",
      points: [
        "Install Gladys on the same Raspberry Pi or on another machine, and list your Domoticz devices by hardware.",
        "Zigbee: move your devices to Zigbee2MQTT managed by Gladys (a Zigbee dongle can only be used by one of them at a time).",
        "Z-Wave: run Z-Wave JS UI and connect Gladys to it over MQTT.",
        "433 MHz devices: check the RFLink community integration; MQTT can bridge the rest.",
        "Rebuild your scripts as Gladys scenes, then switch Domoticz off once everything runs in Gladys.",
      ],
      outro:
        "Check the Works with Gladys page first: Domoticz supports some legacy hardware Gladys doesn't.",
    },
    solution: {
      title: "Same values, a fresher experience",
      paragraphs: [
        "Domoticz and Gladys agree on the essentials: open source, local, lightweight. Gladys brings what Domoticz users most often miss: an interface that feels current, automations without scripting, Matter, and optional AI.",
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
          label: "openHAB alternative",
          href: "/openhab-alternative/",
          text: "Simpler open-source home automation.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "An honest comparison with the most popular platform.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
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
      title: "Open source, local, and modern",
      text: "Gladys is free and installs with a single Docker command. Try it next to Domoticz and see the difference.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Works with Gladys", href: "/works-with/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative à Domoticz : une domotique open source moderne",
      description:
        "Vous cherchez une alternative à Domoticz ? Gladys Assistant est une domotique gratuite et open source avec une interface moderne pensée pour le mobile, des scènes visuelles, Zigbee2MQTT géré, Matter et l'IA. Un comparatif honnête et un plan de migration.",
    },
    screenshotCaption:
      "Gladys : un tableau de bord moderne, pensé pour le mobile, là où Domoticz propose des listes d'appareils et des scripts.",
    hero: {
      title: "Vous cherchez une alternative à Domoticz ?",
      subtitle:
        "Domoticz a fait tourner d'innombrables maisons sur Raspberry Pi. Si vous voulez la même approche open source et locale avec une interface moderne et sans scripts, Gladys Assistant est une suite naturelle.",
      intro: [
        "Domoticz s'est fait un nom en étant léger, stable et compatible avec énormément de matériel, des appareils RFXCOM et 433 MHz au Zigbee et au Z-Wave. Beaucoup de maisons tournent dessus depuis une décennie.",
        "Mais son interface accuse son âge, et tout ce qui dépasse les simples minuteries demande des scripts Lua, dzVents ou Blockly. Gladys Assistant partage les mêmes valeurs, open source, local et léger, avec une interface pensée pour le mobile et des automatisations qui se construisent visuellement.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Essayer la démo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Pourquoi chercher une alternative à Domoticz",
      intro: "Les utilisateurs de Domoticz qui changent évoquent souvent les mêmes points :",
      points: [
        "L'interface web fait datée, surtout sur téléphone.",
        "Les automatisations au-delà des simples minuteries demandent des scripts Lua, dzVents ou Blockly.",
        "Les tableaux de bord pour le reste de la famille demandent du travail.",
        "Sa communauté et son catalogue d'intégrations sont plus petits que ceux de Home Assistant.",
      ],
      outro:
        "Si Domoticz fait encore tout ce dont vous avez besoin, gardez-le. Si vous voulez une expérience plus actuelle sans renoncer à l'open source et au local, lisez la suite.",
    },
    comparison: {
      title: "Gladys Assistant vs Domoticz",
      intro: "Deux plateformes légères, open source et locales :",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Domoticz",
      },
      rows: [
        { feature: "Licence", gladys: "Apache 2.0", other: "GPL v3" },
        { feature: "Technologie", gladys: "Node.js, Docker", other: "C++, natif ou Docker" },
        {
          feature: "Interface",
          gladys: "Tableaux de bord modernes, pensés pour le mobile",
          other: "Interface web classique",
        },
        {
          feature: "Automatisations",
          gladys: "Scènes visuelles, sans code",
          other: "Minuteries, Blockly, scripts Lua, dzVents et Python",
        },
        {
          feature: "Zigbee",
          gladys: "Zigbee2MQTT, installé et géré par Gladys",
          other: "Via Zigbee2MQTT en MQTT, ou des plugins",
        },
        {
          feature: "IA",
          gladys: "Assistant IA avec Gladys Plus, serveur MCP intégré",
          other: "Pas d'IA intégrée",
        },
        {
          feature: "Couverture matérielle",
          gladys: "Les grands protocoles et marques, plus de 90 intégrations communautaires",
          other: "Très large, y compris les anciens appareils 433 MHz et RFXCOM",
        },
      ],
      outro:
        "Domoticz, toujours activement maintenu avec plusieurs versions par an, l'emporte sur la couverture du matériel ancien et la légèreté. Gladys l'emporte sur l'interface, les automatisations sans code, Matter et l'IA.",
    },
    features: {
      title: "Pourquoi Gladys est une bonne alternative à Domoticz",
      intro: "Ce qui change en passant à Gladys :",
      cards: [
        {
          icon: "📱",
          title: "Une interface moderne",
          text: "Des tableaux de bord pensés pour les téléphones et les tablettes murales, utilisables par toute la famille.",
        },
        {
          icon: "🧩",
          title: "Des scènes plutôt que des scripts",
          text: "Déclencheurs, conditions, si/alors/sinon et délais dans un éditeur visuel : plus de Lua ni de dzVents à maintenir.",
        },
        {
          icon: "🐝",
          title: "Zigbee2MQTT géré",
          text: "Gladys installe et relie Zigbee2MQTT et son broker MQTT pour vous.",
        },
        {
          icon: "🔗",
          title: "Matter",
          text: "Gladys est un contrôleur Matter, prête pour la nouvelle génération d'appareils.",
        },
        {
          icon: "🤖",
          title: "L'IA si vous le voulez",
          text: "Parlez à votre maison avec Gladys Plus, ou connectez Claude via le serveur MCP intégré.",
        },
        {
          icon: "🍓",
          title: "Toujours légère",
          text: "Gladys tourne sur un Raspberry Pi, un mini-PC ou un NAS avec Docker.",
        },
      ],
    },
    how: {
      title: "Comment passer de Domoticz à Gladys",
      intro: "Une migration progressive :",
      points: [
        "Installez Gladys sur le même Raspberry Pi ou une autre machine, et listez vos appareils Domoticz par matériel.",
        "Zigbee : passez vos appareils sur le Zigbee2MQTT géré par Gladys (une clé Zigbee ne peut être utilisée que par l'un des deux à la fois).",
        "Z-Wave : lancez Z-Wave JS UI et connectez-y Gladys via MQTT.",
        "Appareils 433 MHz : regardez l'intégration communautaire RFLink ; MQTT peut faire le pont pour le reste.",
        "Recréez vos scripts en scènes Gladys, puis éteignez Domoticz quand tout tourne dans Gladys.",
      ],
      outro:
        "Vérifiez d'abord la page des appareils compatibles : Domoticz prend en charge du matériel ancien que Gladys ne gère pas.",
    },
    solution: {
      title: "Les mêmes valeurs, une expérience plus actuelle",
      paragraphs: [
        "Domoticz et Gladys sont d'accord sur l'essentiel : open source, local, léger. Gladys apporte ce qui manque le plus souvent aux utilisateurs de Domoticz : une interface actuelle, des automatisations sans script, Matter et une IA en option.",
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
          label: "Alternative à Jeedom",
          href: "/jeedom-alternative/",
          text: "Pourquoi on passe de Jeedom à Gladys.",
        },
        {
          label: "Alternative à openHAB",
          href: "/openhab-alternative/",
          text: "Une domotique open source plus simple.",
        },
        {
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Du Zigbee local, installé pour vous, avec des tableaux de bord.",
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
      title: "Open source, local, et moderne",
      text: "Gladys est gratuite et s'installe en une seule commande Docker. Essayez-la à côté de Domoticz et voyez la différence.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Appareils compatibles", href: "/works-with/" },
    },
  },

  de: {
    meta: {
      title: "Domoticz Alternative: moderne Open-Source-Hausautomation",
      description:
        "Suchst du eine Domoticz Alternative? Gladys Assistant ist kostenlose Open-Source-Hausautomation mit moderner App, visuellen Szenen, Zigbee2MQTT, Matter, KI.",
    },
    screenshotCaption:
      "Gladys: ein modernes Dashboard, gemacht fürs Smartphone, wo Domoticz-Nutzer Gerätelisten und Skripte gewohnt sind.",
    hero: {
      title: "Du suchst eine Alternative zu Domoticz?",
      subtitle:
        "Domoticz hat unzählige Smart Homes auf dem Raspberry Pi angetrieben. Wenn du denselben lokalen Open-Source-Ansatz mit moderner Oberfläche und ohne Skripte willst, ist Gladys Assistant der logische nächste Schritt.",
      intro: [
        "Domoticz hat sich seinen Ruf verdient, weil es schlank, stabil und mit einer riesigen Bandbreite an Hardware kompatibel ist, von RFXCOM- und 433-MHz-Geräten bis zu Zigbee und Z-Wave. Viele Smart Homes laufen seit zehn Jahren damit.",
        "Doch die Oberfläche ist in die Jahre gekommen, und alles jenseits einfacher Timer bedeutet Skripte in Lua, dzVents oder Blockly. Gladys Assistant teilt dieselben Werte, Open Source, lokal und schlank, mit einer Oberfläche, die fürs Smartphone gemacht ist, und Automationen, die du visuell baust.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/docs/" },
      secondaryCta: {
        label: "Demo ausprobieren →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Warum viele eine Alternative zu Domoticz suchen",
      intro: "Domoticz-Nutzer, die wechseln, nennen meist dieselben Gründe:",
      points: [
        "Die Weboberfläche wirkt altbacken, vor allem auf dem Smartphone.",
        "Automationen jenseits einfacher Timer erfordern Skripte in Lua, dzVents oder Blockly.",
        "Dashboards für den Rest des Haushalts einzurichten, macht Arbeit.",
        "Community und Integrationskatalog sind kleiner als bei Home Assistant.",
      ],
      outro:
        "Wenn Domoticz noch alles kann, was du brauchst, behalte es. Wenn du ein frischeres Erlebnis willst, ohne auf Open Source und lokale Steuerung zu verzichten, lies weiter.",
    },
    comparison: {
      title: "Gladys Assistant vs. Domoticz",
      intro: "Zwei schlanke, lokale Open-Source-Plattformen:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Domoticz",
      },
      rows: [
        { feature: "Lizenz", gladys: "Apache 2.0", other: "GPL v3" },
        { feature: "Technik", gladys: "Node.js, Docker", other: "C++, nativ oder Docker" },
        {
          feature: "Oberfläche",
          gladys: "Moderne Dashboards, fürs Smartphone gemacht",
          other: "Klassische Weboberfläche",
        },
        {
          feature: "Automationen",
          gladys: "Visuelle Szenen, ohne Code",
          other: "Timer, Blockly, Lua-, dzVents- und Python-Skripte",
        },
        {
          feature: "Zigbee",
          gladys: "Zigbee2MQTT, von Gladys installiert und verwaltet",
          other: "Über Zigbee2MQTT per MQTT oder über Plugins",
        },
        {
          feature: "KI",
          gladys: "KI-Assistent mit Gladys Plus, eingebauter MCP-Server",
          other: "Keine eingebaute KI",
        },
        {
          feature: "Hardware-Abdeckung",
          gladys: "Wichtige Protokolle und beliebte Marken, plus über 90 Community-Integrationen",
          other: "Sehr breit, auch ältere 433-MHz- und RFXCOM-Geräte",
        },
      ],
      outro:
        "Domoticz, das mit mehreren Releases pro Jahr weiterhin aktiv gepflegt wird, punktet mit der Unterstützung älterer Hardware und sehr geringem Ressourcenbedarf. Gladys punktet mit Oberfläche, Automationen ohne Code, Matter und KI.",
    },
    features: {
      title: "Warum Gladys eine gute Domoticz Alternative ist",
      intro: "Das ändert sich, wenn du zu Gladys wechselst:",
      cards: [
        {
          icon: "📱",
          title: "Eine moderne Oberfläche",
          text: "Dashboards für Smartphones und Wand-Tablets, die der ganze Haushalt nutzen kann.",
        },
        {
          icon: "🧩",
          title: "Szenen statt Skripte",
          text: "Auslöser, Bedingungen, Wenn/Dann/Sonst und Verzögerungen in einem visuellen Editor: kein Lua oder dzVents mehr zu pflegen.",
        },
        {
          icon: "🐝",
          title: "Verwaltetes Zigbee2MQTT",
          text: "Gladys installiert und verbindet Zigbee2MQTT samt MQTT-Broker für dich.",
        },
        {
          icon: "🔗",
          title: "Matter",
          text: "Gladys ist ein Matter-Controller, bereit für die neue Gerätegeneration.",
        },
        {
          icon: "🤖",
          title: "KI, wenn du willst",
          text: "Sprich mit Gladys Plus mit deinem Zuhause, oder verbinde Claude über den eingebauten MCP-Server.",
        },
        {
          icon: "🍓",
          title: "Weiterhin schlank",
          text: "Gladys läuft auf einem Raspberry Pi, einem Mini-PC oder einem NAS mit Docker.",
        },
      ],
    },
    how: {
      title: "So wechselst du von Domoticz zu Gladys",
      intro: "Eine schrittweise Migration:",
      points: [
        "Installiere Gladys auf demselben Raspberry Pi oder einem anderen Rechner und liste deine Domoticz-Geräte nach Hardware auf.",
        "Zigbee: Zieh deine Geräte zu dem von Gladys verwalteten Zigbee2MQTT um (ein Zigbee-Stick kann immer nur von einer der beiden Plattformen genutzt werden).",
        "Z-Wave: Betreibe Z-Wave JS UI und verbinde Gladys per MQTT damit.",
        "433-MHz-Geräte: Schau dir die RFLink-Community-Integration an; den Rest kann MQTT überbrücken.",
        "Baue deine Skripte als Gladys-Szenen nach und schalte Domoticz ab, sobald alles in Gladys läuft.",
      ],
      outro:
        "Wirf vorher einen Blick auf die Seite „Funktioniert mit Gladys“: Domoticz unterstützt manche ältere Hardware, die Gladys nicht unterstützt.",
    },
    solution: {
      title: "Dieselben Werte, ein frischeres Erlebnis",
      paragraphs: [
        "Domoticz und Gladys sind sich beim Wesentlichen einig: Open Source, lokal, schlank. Gladys bringt mit, was Domoticz-Nutzer am häufigsten vermissen: eine zeitgemäße Oberfläche, Automationen ohne Skripte, Matter und optionale KI.",
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
          label: "openHAB Alternative",
          href: "/openhab-alternative/",
          text: "Einfachere Open-Source-Hausautomation.",
        },
        {
          label: "Gladys vs. Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Ein ehrlicher Vergleich mit der beliebtesten Plattform.",
        },
        {
          label: "Zigbee2MQTT ohne Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Lokales Zigbee mit verwalteter Einrichtung und Dashboards.",
        },
        {
          label: "Alle Ratgeber",
          href: "/guides/",
          text: "Alle Ratgeber, Tools und Vergleiche an einem Ort.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Open Source, lokal und modern",
      text: "Gladys ist kostenlos und mit einem einzigen Docker-Befehl installiert. Probier es neben Domoticz aus und sieh selbst den Unterschied.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Funktioniert mit Gladys", href: "/works-with/" },
    },
  },

  es: {
    meta: {
      title: "Alternativa a Domoticz: domótica moderna de código abierto",
      description:
        "¿Buscas una alternativa a Domoticz? Gladys Assistant es domótica gratuita y de código abierto con app moderna, escenas visuales, Zigbee2MQTT, Matter e IA.",
    },
    screenshotCaption:
      "Gladys: un panel de control moderno, pensado para el móvil, donde los usuarios de Domoticz están acostumbrados a listas de dispositivos y scripts.",
    hero: {
      title: "¿Buscas una alternativa a Domoticz?",
      subtitle:
        "Domoticz ha hecho funcionar innumerables casas inteligentes en Raspberry Pi. Si quieres el mismo enfoque local y de código abierto, con una interfaz moderna y sin scripts, Gladys Assistant es el siguiente paso natural.",
      intro: [
        "Domoticz se ganó su reputación por ser ligero, estable y compatible con una enorme variedad de hardware, desde dispositivos RFXCOM y de 433 MHz hasta Zigbee y Z-Wave. Muchas casas inteligentes llevan una década funcionando con él.",
        "Pero su interfaz acusa el paso de los años, y cualquier cosa más allá de simples temporizadores implica scripts en Lua, dzVents o Blockly. Gladys Assistant comparte los mismos valores, código abierto, local y ligero, con una interfaz pensada para el móvil y automatizaciones que creas de forma visual.",
      ],
      primaryCta: { label: "Empieza gratis", href: "/docs/" },
      secondaryCta: {
        label: "Prueba la demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Por qué muchos buscan una alternativa a Domoticz",
      intro: "Los usuarios de Domoticz que cambian suelen mencionar las mismas cosas:",
      points: [
        "La interfaz web se ve anticuada, sobre todo en el móvil.",
        "Las automatizaciones más allá de simples temporizadores exigen scripts en Lua, dzVents o Blockly.",
        "Configurar paneles para el resto de la familia lleva trabajo.",
        "Su comunidad y su catálogo de integraciones son más pequeños que los de Home Assistant.",
      ],
      outro:
        "Si Domoticz sigue haciendo todo lo que necesitas, quédatelo. Si quieres una experiencia más actual sin renunciar al código abierto ni al control local, sigue leyendo.",
    },
    comparison: {
      title: "Gladys Assistant vs. Domoticz",
      intro: "Dos plataformas ligeras, locales y de código abierto:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Domoticz",
      },
      rows: [
        { feature: "Licencia", gladys: "Apache 2.0", other: "GPL v3" },
        { feature: "Tecnología", gladys: "Node.js, Docker", other: "C++, nativo o Docker" },
        {
          feature: "Interfaz",
          gladys: "Paneles modernos, pensados para el móvil",
          other: "Interfaz web clásica",
        },
        {
          feature: "Automatizaciones",
          gladys: "Escenas visuales, sin código",
          other: "Temporizadores, Blockly, scripts en Lua, dzVents y Python",
        },
        {
          feature: "Zigbee",
          gladys: "Zigbee2MQTT, instalado y gestionado por Gladys",
          other: "Con Zigbee2MQTT vía MQTT, o con plugins",
        },
        {
          feature: "IA",
          gladys: "Asistente de IA con Gladys Plus, servidor MCP integrado",
          other: "Sin IA integrada",
        },
        {
          feature: "Compatibilidad de hardware",
          gladys: "Los principales protocolos y marcas populares, más de 90 integraciones de la comunidad",
          other: "Muy amplia, incluidos dispositivos antiguos de 433 MHz y RFXCOM",
        },
      ],
      outro:
        "Domoticz, que sigue activamente mantenido con varias versiones al año, gana en compatibilidad con hardware antiguo y en consumo mínimo de recursos. Gladys gana en interfaz, automatizaciones sin código, Matter e IA.",
    },
    features: {
      title: "Por qué Gladys es una buena alternativa a Domoticz",
      intro: "Lo que cambia al pasarte a Gladys:",
      cards: [
        {
          icon: "📱",
          title: "Una interfaz moderna",
          text: "Paneles diseñados para móviles y tablets de pared, que toda la familia puede usar.",
        },
        {
          icon: "🧩",
          title: "Escenas en lugar de scripts",
          text: "Disparadores, condiciones, si/entonces/si no y retardos en un editor visual: nada de Lua ni dzVents que mantener.",
        },
        {
          icon: "🐝",
          title: "Zigbee2MQTT gestionado",
          text: "Gladys instala y conecta Zigbee2MQTT y su broker MQTT por ti.",
        },
        {
          icon: "🔗",
          title: "Matter",
          text: "Gladys es un controlador Matter, listo para la nueva generación de dispositivos.",
        },
        {
          icon: "🤖",
          title: "IA cuando la quieras",
          text: "Habla con tu casa con Gladys Plus, o conecta Claude a través del servidor MCP integrado.",
        },
        {
          icon: "🍓",
          title: "Igual de ligero",
          text: "Gladys funciona en una Raspberry Pi, un mini-PC o un NAS con Docker.",
        },
      ],
    },
    how: {
      title: "Cómo pasar de Domoticz a Gladys",
      intro: "Una migración progresiva:",
      points: [
        "Instala Gladys en la misma Raspberry Pi o en otra máquina y haz una lista de tus dispositivos Domoticz por hardware.",
        "Zigbee: pasa tus dispositivos al Zigbee2MQTT gestionado por Gladys (un dongle Zigbee solo puede usarlo una de las dos plataformas a la vez).",
        "Z-Wave: ejecuta Z-Wave JS UI y conecta Gladys a él por MQTT.",
        "Dispositivos de 433 MHz: echa un vistazo a la integración comunitaria RFLink; MQTT puede hacer de puente para el resto.",
        "Reconstruye tus scripts como escenas de Gladys y apaga Domoticz cuando todo funcione en Gladys.",
      ],
      outro:
        "Consulta antes la página \"Funciona con Gladys\": Domoticz es compatible con algunos equipos antiguos que Gladys no admite.",
    },
    solution: {
      title: "Los mismos valores, una experiencia más actual",
      paragraphs: [
        "Domoticz y Gladys coinciden en lo esencial: código abierto, local, ligero. Gladys aporta lo que los usuarios de Domoticz echan de menos con más frecuencia: una interfaz actual, automatizaciones sin scripts, Matter e IA opcional.",
        "Gladys es gratis. Gladys Plus es una suscripción opcional para el acceso remoto cifrado, las copias de seguridad, Alexa y Google Home y el asistente de IA.",
      ],
      link: {
        label: "El mejor software de domótica de código abierto →",
        href: "/open-source-home-automation/",
      },
    },
    related: {
      title: "Para ir más lejos",
      intro: "Compara Gladys con otras plataformas:",
      links: [
        {
          label: "Alternativa a openHAB",
          href: "/openhab-alternative/",
          text: "Domótica de código abierto más sencilla.",
        },
        {
          label: "Gladys vs. Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Una comparación honesta con la plataforma más popular.",
        },
        {
          label: "Zigbee2MQTT sin Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Zigbee local con una instalación gestionada y paneles.",
        },
        {
          label: "Todas las guías",
          href: "/guides/",
          text: "Todas las guías, herramientas y comparativas en un solo lugar.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Código abierto, local y moderno",
      text: "Gladys es gratis y se instala con un solo comando de Docker. Pruébalo junto a Domoticz y comprueba la diferencia.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Funciona con Gladys", href: "/works-with/" },
    },
  },
};

export const domoticzAlternativeFaqEn = [
  {
    question: "What is a good alternative to Domoticz?",
    answer:
      "Gladys Assistant is a free, open-source and local platform with a modern mobile interface and visual scenes instead of scripts. Home Assistant and openHAB are other open-source options, more extensive but also more complex.",
  },
  {
    question: "Is Gladys as lightweight as Domoticz?",
    answer:
      "Gladys runs comfortably on a Raspberry Pi 4 or 5, a mini-PC or a NAS with Docker. Domoticz has an even smaller footprint, but Gladys remains light enough for a small, always-on machine.",
  },
  {
    question: "Do I need to write scripts in Gladys?",
    answer:
      "No. Gladys automations are scenes built in a visual editor, with triggers, conditions, if/then/else and delays. There's no Lua or dzVents to write.",
  },
  {
    question: "Can I keep my Zigbee devices when leaving Domoticz?",
    answer:
      "Yes. Zigbee devices can be paired with the Zigbee2MQTT instance Gladys installs and manages. If you already use Zigbee2MQTT with Domoticz, the devices are the same; only one platform can use the dongle at a time.",
  },
  {
    question: "Does Gladys support 433 MHz devices like Domoticz?",
    answer:
      "Partly, through the RFLink community integration. Domoticz has broader support for legacy 433 MHz and RFXCOM hardware, so check your devices before migrating.",
  },
];

export const domoticzAlternativeFaqFr = [
  {
    question: "Quelle est une bonne alternative à Domoticz ?",
    answer:
      "Gladys Assistant est une plateforme gratuite, open source et locale, avec une interface moderne pensée pour le mobile et des scènes visuelles à la place des scripts. Home Assistant et openHAB sont d'autres options open source, plus vastes mais aussi plus complexes.",
  },
  {
    question: "Gladys est-elle aussi légère que Domoticz ?",
    answer:
      "Gladys tourne sans difficulté sur un Raspberry Pi 4 ou 5, un mini-PC ou un NAS avec Docker. Domoticz est encore plus léger, mais Gladys reste assez légère pour une petite machine allumée en permanence.",
  },
  {
    question: "Faut-il écrire des scripts dans Gladys ?",
    answer:
      "Non. Les automatisations de Gladys sont des scènes construites dans un éditeur visuel, avec déclencheurs, conditions, si/alors/sinon et délais. Pas de Lua ni de dzVents à écrire.",
  },
  {
    question: "Puis-je garder mes appareils Zigbee en quittant Domoticz ?",
    answer:
      "Oui. Les appareils Zigbee s'associent au Zigbee2MQTT que Gladys installe et gère. Si vous utilisez déjà Zigbee2MQTT avec Domoticz, ce sont les mêmes appareils ; une seule plateforme peut utiliser la clé à la fois.",
  },
  {
    question: "Gladys gère-t-elle les appareils 433 MHz comme Domoticz ?",
    answer:
      "En partie, via l'intégration communautaire RFLink. Domoticz prend en charge plus largement le matériel 433 MHz ancien et RFXCOM : vérifiez vos appareils avant de migrer.",
  },
];

export const domoticzAlternativeFaqDe = [
  {
    question: "Was ist eine gute Alternative zu Domoticz?",
    answer:
      "Gladys Assistant ist eine kostenlose, lokale Open-Source-Plattform mit moderner mobiler Oberfläche und visuellen Szenen statt Skripten. Home Assistant und openHAB sind weitere Open-Source-Optionen, umfangreicher, aber auch komplexer.",
  },
  {
    question: "Ist Gladys so schlank wie Domoticz?",
    answer:
      "Gladys läuft problemlos auf einem Raspberry Pi 4 oder 5, einem Mini-PC oder einem NAS mit Docker. Domoticz braucht noch weniger Ressourcen, aber Gladys bleibt schlank genug für einen kleinen, dauerhaft laufenden Rechner.",
  },
  {
    question: "Muss ich in Gladys Skripte schreiben?",
    answer:
      "Nein. Automationen in Gladys sind Szenen, die du in einem visuellen Editor baust, mit Auslösern, Bedingungen, Wenn/Dann/Sonst und Verzögerungen. Kein Lua, kein dzVents.",
  },
  {
    question: "Kann ich meine Zigbee-Geräte behalten, wenn ich Domoticz verlasse?",
    answer:
      "Ja. Zigbee-Geräte lassen sich mit der Zigbee2MQTT-Instanz koppeln, die Gladys installiert und verwaltet. Wenn du Zigbee2MQTT schon mit Domoticz nutzt, bleiben die Geräte dieselben; nur kann immer nur eine Plattform den Stick nutzen.",
  },
  {
    question: "Unterstützt Gladys 433-MHz-Geräte wie Domoticz?",
    answer:
      "Teilweise, über die RFLink-Community-Integration. Domoticz unterstützt ältere 433-MHz- und RFXCOM-Hardware breiter, prüfe deine Geräte also vor dem Umzug.",
  },
];

export const domoticzAlternativeFaqEs = [
  {
    question: "¿Cuál es una buena alternativa a Domoticz?",
    answer:
      "Gladys Assistant es una plataforma gratuita, local y de código abierto, con una interfaz moderna pensada para el móvil y escenas visuales en lugar de scripts. Home Assistant y openHAB son otras opciones de código abierto, más completas pero también más complejas.",
  },
  {
    question: "¿Gladys es tan ligero como Domoticz?",
    answer:
      "Gladys funciona sin problemas en una Raspberry Pi 4 o 5, un mini-PC o un NAS con Docker. Domoticz consume todavía menos recursos, pero Gladys sigue siendo lo bastante ligero para una pequeña máquina siempre encendida.",
  },
  {
    question: "¿Tengo que escribir scripts en Gladys?",
    answer:
      "No. Las automatizaciones de Gladys son escenas que creas en un editor visual, con disparadores, condiciones, si/entonces/si no y retardos. No hay que escribir Lua ni dzVents.",
  },
  {
    question: "¿Puedo conservar mis dispositivos Zigbee si dejo Domoticz?",
    answer:
      "Sí. Los dispositivos Zigbee se pueden emparejar con la instancia de Zigbee2MQTT que Gladys instala y gestiona. Si ya usas Zigbee2MQTT con Domoticz, los dispositivos son los mismos; solo una plataforma puede usar el dongle a la vez.",
  },
  {
    question: "¿Gladys es compatible con dispositivos de 433 MHz como Domoticz?",
    answer:
      "En parte, a través de la integración comunitaria RFLink. Domoticz ofrece una compatibilidad más amplia con hardware antiguo de 433 MHz y RFXCOM, así que comprueba tus dispositivos antes de migrar.",
  },
];

export default domoticzAlternativeContent;
