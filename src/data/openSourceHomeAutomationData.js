// Content for the "open-source home automation" pillar page.
// Targets the broad, high-intent "open source home automation / domotique
// open source / logiciel domotique open source / open source home assistant"
// search cluster, where Gladys appears but ranks poorly and has no dedicated
// landing page. It explains what open-source home automation is, why it
// matters, lists the main open-source platforms honestly, and positions Gladys
// on simplicity, while linking out to the comparison/alternative pages for mesh.

const openSourceHomeAutomationContent = {
  en: {
    meta: {
      title: "Best Open-Source Home Automation Software (2026)",
      description:
        "The 6 best open-source home automation platforms compared: Gladys Assistant, Home Assistant, openHAB, Domoticz, Jeedom and Node-RED. Ease of use, devices, license: pick the right free, self-hosted smart home software.",
    },
    hero: {
      title: "Open-source home automation",
      subtitle:
        "Run your smart home on free, self-hosted software you can read, trust and keep, instead of renting it from a closed cloud.",
      intro: [
        "Most smart home products are closed boxes: proprietary software, a mandatory cloud, and a business that can change the rules, add a subscription or shut the service down whenever it wants. You don't own the system, you rent access to it.",
        "Open-source home automation takes the opposite approach. The software that runs your home is free, public and self-hosted, so anyone can inspect it, improve it and keep it running for as long as they like. This guide explains what open-source home automation is, why it matters, the main platforms to know, and how to get started.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Explore the integrations →",
        href: "/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Why open source matters for your home",
      intro:
        "Your home automation runs your lights, locks, heating and alarm. That's not somewhere you want a black box you can't inspect or replace. Open source changes the balance of power:",
      points: [
        "Transparency: the code is public, so anyone can verify what it does with your data, instead of trusting a marketing promise.",
        "Longevity: a community project can't be \"sunset\" by a single company. Even if the original team stops, the code stays and can be forked.",
        "No forced lock-in: open standards and an open codebase mean you're free to mix brands and move your setup, not trapped in one ecosystem.",
        "Privacy: most open-source platforms are self-hosted, so your habits, presence and camera feeds can stay on your own network.",
        "No surprise paywalls: the core software is free, so essential features can't suddenly move behind a new monthly subscription.",
        "Extensibility: a community builds integrations far faster than any single vendor, so more of your existing devices are supported.",
      ],
      outro:
        "Open source doesn't mean complicated or unsupported. The best projects are polished, actively maintained, and backed by large communities.",
    },
    definition: {
      title: "What is open-source home automation?",
      intro:
        "Open-source home automation means the software controlling your smart home is released under an open-source license, free to use, inspect and modify, and usually self-hosted on hardware you own. In practice:",
      points: [
        "The source code is public and licensed openly (for example Gladys Assistant is Apache 2.0), so you, or anyone, can read and audit it.",
        "It's free to run: no per-device fee and no mandatory subscription to keep the core working.",
        "It's self-hosted on your own machine, so your automations and data stay under your control.",
        "It speaks open standards like Zigbee, Matter and MQTT instead of a single brand's proprietary protocol.",
        "A community contributes integrations, fixes and translations out in the open.",
      ],
      outro:
        "Open source and convenience aren't opposites: optional features like remote access or AI can still exist, they just become a choice rather than a requirement.",
    },
    howTo: {
      title: "The best open-source home automation software compared",
      intro:
        "Several mature open-source platforms can run your smart home. Here is how the main ones compare, from the easiest to the most flexible:",
      table: {
        headers: ["Platform", "Interface & setup", "Ease of use", "License", "Best for"],
        rows: [
          ["Gladys Assistant", "Clean UI, no config files", "Very easy", "Apache 2.0", "Open source without the learning curve"],
          ["Home Assistant", "UI, YAML for advanced setups", "Moderate to advanced", "Apache 2.0", "The largest integration catalog"],
          ["openHAB", "Text config and UI", "Advanced", "EPL 2.0", "Vendor-neutral, powerful rules"],
          ["Jeedom", "UI with plugin marketplace", "Moderate", "GPL (core)", "Local boxes and a plugin ecosystem"],
          ["Domoticz", "Lightweight, utilitarian UI", "Moderate", "GPLv3", "Very low-power hardware"],
          ["Node-RED", "Visual flow editor", "Moderate", "Apache 2.0", "Building advanced automation logic"],
        ],
      },
      cards: [
        {
          logo: "/img/external/open-source-platforms/gladys-assistant.png",
          logoAlt: "Gladys Assistant logo",
          title: "Gladys Assistant",
          text: "A self-hosted platform (Apache 2.0) focused on simplicity: a clean interface, no configuration files, scenes built by clicking, and a one-command Docker install. Its external integrations let anyone publish an integration on GitHub, installable in one click and sandboxed. Great if you want open source without the steep learning curve.",
        },
        {
          logo: "/img/external/open-source-platforms/home-assistant.png",
          logoAlt: "Home Assistant logo",
          title: "Home Assistant",
          text: "The most feature-rich and popular open-source platform, with a huge integration catalog. Extremely powerful, but configuration can get deep and YAML-heavy for advanced setups.",
        },
        {
          logo: "/img/external/open-source-platforms/openhab.png",
          logoAlt: "openHAB logo",
          title: "openHAB",
          text: "A mature, Java-based platform known for flexibility and vendor neutrality. Powerful rules engine, with a steeper, more technical setup.",
        },
        {
          logo: "/img/external/open-source-platforms/jeedom.png",
          logoAlt: "Jeedom logo",
          title: "Jeedom",
          text: "A French open-source platform with a plugin marketplace (some paid). Popular on local boxes, with a more technical, plugin-driven approach.",
        },
        {
          logo: "/img/external/open-source-platforms/domoticz.png",
          logoAlt: "Domoticz logo",
          title: "Domoticz",
          text: "A lightweight, long-running open-source system that runs well on very low-power hardware, with a more utilitarian interface.",
        },
        {
          logo: "/img/external/open-source-platforms/node-red.png",
          logoAlt: "Node-RED logo",
          title: "Node-RED",
          text: "Not a full platform but an open-source flow-based automation tool, often paired with the others to build advanced logic visually.",
        },
      ],
    },
    hardware: {
      title: "Do you need a special hub or hardware?",
      intro:
        "One of the big advantages of open-source home automation is that you are not tied to a proprietary hub. The software runs on hardware you already own or can buy cheaply:",
      points: [
        "A small computer to host it: a Raspberry Pi, a mini-PC or a NAS is enough to run the platform 24/7 on your own network.",
        "USB radio dongles for wireless devices: add a Zigbee or Z-Wave USB stick to talk to hundreds of sensors and switches locally, with no vendor bridge required.",
        "Matter and Thread for newer gear: Matter devices on Wi-Fi or Ethernet join your network directly, while Thread devices need a Thread Border Router to reach it. That border router can be a device you already own (some speakers, TV boxes and hubs act as one) or an open-source setup on your own host with an 802.15.4 radio, so it still doesn't lock you into a brand.",
        "Your existing Wi-Fi and IP devices: many cameras, plugs and TVs connect directly over your local network.",
      ],
      outro:
        "So there is no mandatory, proprietary box to buy: a cheap mini-computer plus a USB radio dongle is all most setups need.",
      link: {
        label: "See the best Zigbee dongle to pick →",
        href: "/best-zigbee-dongle/",
      },
    },
    gladys: {
      title: "Gladys Assistant: open source, made simple",
      paragraphs: [
        "Gladys Assistant is a free, open-source (Apache 2.0), self-hosted home automation platform. The full source code is on GitHub, it installs in a single Docker command on a Raspberry Pi, mini-PC or NAS, and it runs entirely on your local network.",
        "Where it stands out is simplicity. Everything is configured from a clean interface, with no configuration files and no YAML, and scenes are built by clicking. It's based on open standards (Zigbee, Matter, MQTT) with a full local automation engine, so your everyday scenes run at home. Optional features like voice, AI and remote access rely on a private, secure cloud from the same independent project: no ads, no data resale, and end-to-end encrypted remote access.",
      ],
      link: { label: "Get started with Gladys →", href: "/docs/" },
    },
    related: {
      title: "Go deeper",
      intro:
        "Whether you're comparing platforms or moving off a closed ecosystem, these guides help you choose and make the switch:",
      links: [
        {
          label: "Home Assistant alternative",
          href: "/home-assistant-alternative/",
          text: "A simpler, local, open-source platform, without the YAML and the steep learning curve.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "How the two main open-source, local-first platforms really compare.",
        },
        {
          label: "Jeedom alternative",
          href: "/jeedom-alternative/",
          text: "An open-source alternative to Jeedom, without a paid plugin marketplace.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
        {
          label: "Control your home with AI",
          href: "/ai-smart-home/",
          text: "Keep the convenience of AI and voice control, on a private cloud, not a big-tech assistant.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Start with open-source home automation",
      text: "Gladys is free, open-source (Apache 2.0), and installs in a single Docker command. Self-hosted, local-first, no cloud required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Discover Gladys Plus", href: "/plus/" },
    },
  },

  fr: {
    meta: {
      title: "Meilleurs logiciels domotiques open source : 6 comparés (2026)",
      description:
        "Comparez les meilleures plateformes domotiques open source (Gladys Assistant, Home Assistant, openHAB, Jeedom, Domoticz, Node-RED) : interface, facilité et licence, pour choisir le bon logiciel domotique libre et auto-hébergé.",
    },
    hero: {
      title: "La domotique open source",
      subtitle:
        "Pilotez votre maison connectée avec un logiciel libre et auto-hébergé que vous pouvez lire, auditer et garder, au lieu de le louer à un cloud fermé.",
      intro: [
        "La plupart des produits connectés sont des boîtes noires : logiciel propriétaire, cloud obligatoire, et une entreprise qui peut changer les règles, ajouter un abonnement ou couper le service quand elle le veut. Vous ne possédez pas le système, vous louez l'accès.",
        "La domotique open source prend le chemin inverse. Le logiciel qui pilote votre maison est libre, public et auto-hébergé : n'importe qui peut l'inspecter, l'améliorer et le faire tourner aussi longtemps qu'il le souhaite. Ce guide explique ce qu'est la domotique open source, pourquoi c'est important, les principales solutions à connaître, et comment démarrer.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Voir les intégrations →",
        href: "/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Pourquoi l'open source compte pour votre maison",
      intro:
        "Votre domotique pilote vos lumières, vos serrures, votre chauffage et votre alarme. Ce n'est pas l'endroit pour une boîte noire que vous ne pouvez ni inspecter ni remplacer. L'open source rééquilibre les rapports de force :",
      points: [
        "Transparence : le code est public, donc chacun peut vérifier ce qu'il fait de vos données, au lieu de croire une promesse marketing.",
        "Pérennité : un projet communautaire ne peut pas être « arrêté » par une seule entreprise. Même si l'équipe d'origine s'arrête, le code reste et peut être repris (forké).",
        "Pas d'enfermement forcé : standards ouverts et code ouvert vous laissent libre de mélanger les marques et de faire évoluer votre installation, sans être prisonnier d'un écosystème.",
        "Vie privée : la plupart des plateformes open source sont auto-hébergées, donc vos habitudes, votre présence et vos flux de caméra peuvent rester sur votre réseau.",
        "Pas de péage surprise : le logiciel de base est gratuit, donc les fonctions essentielles ne peuvent pas passer du jour au lendemain derrière un nouvel abonnement mensuel.",
        "Extensibilité : une communauté développe des intégrations bien plus vite qu'un fabricant seul, donc davantage de vos appareils existants sont pris en charge.",
      ],
      outro:
        "Open source ne veut pas dire compliqué ni sans support. Les meilleurs projets sont soignés, activement maintenus et portés par de grandes communautés.",
    },
    definition: {
      title: "Qu'est-ce que la domotique open source ?",
      intro:
        "La domotique open source, c'est quand le logiciel qui pilote votre maison connectée est publié sous une licence open source, libre d'utilisation, d'inspection et de modification, et le plus souvent auto-hébergé sur du matériel qui vous appartient. Concrètement :",
      points: [
        "Le code source est public et sous licence ouverte (par exemple Gladys Assistant est en Apache 2.0), donc vous, ou n'importe qui, pouvez le lire et l'auditer.",
        "Il est gratuit à utiliser : pas de frais par appareil ni d'abonnement obligatoire pour faire tourner le cœur du système.",
        "Il est auto-hébergé sur votre propre machine : vos automatisations et vos données restent sous votre contrôle.",
        "Il parle des standards ouverts comme Zigbee, Matter et MQTT plutôt que le protocole propriétaire d'une seule marque.",
        "Une communauté contribue aux intégrations, aux correctifs et aux traductions, au grand jour.",
      ],
      outro:
        "Open source et confort ne s'opposent pas : des fonctions optionnelles comme l'accès distant ou l'IA peuvent exister, elles deviennent simplement un choix plutôt qu'une obligation.",
    },
    howTo: {
      title: "Les meilleurs logiciels domotiques open source comparés",
      intro:
        "Plusieurs plateformes open source matures peuvent piloter votre maison. Voici comment se comparent les principales, de la plus simple à la plus flexible :",
      table: {
        headers: ["Plateforme", "Interface & prise en main", "Facilité", "Licence", "Idéal pour"],
        rows: [
          ["Gladys Assistant", "Interface épurée, sans fichiers de config", "Très facile", "Apache 2.0", "L'open source sans la courbe d'apprentissage"],
          ["Home Assistant", "Interface, YAML pour les cas avancés", "Modérée à avancée", "Apache 2.0", "Le plus grand catalogue d'intégrations"],
          ["openHAB", "Config texte et interface", "Avancée", "EPL 2.0", "Neutralité et moteur de règles puissant"],
          ["Jeedom", "Interface avec marketplace de plugins", "Modérée", "GPL (cœur)", "Box locales et écosystème de plugins"],
          ["Domoticz", "Interface légère et utilitaire", "Modérée", "GPLv3", "Matériel très peu puissant"],
          ["Node-RED", "Éditeur de flux visuel", "Modérée", "Apache 2.0", "Bâtir une logique d'automatisation avancée"],
        ],
      },
      cards: [
        {
          logo: "/img/external/open-source-platforms/gladys-assistant.png",
          logoAlt: "Logo Gladys Assistant",
          title: "Gladys Assistant",
          text: "Une plateforme auto-hébergée (Apache 2.0) axée sur la simplicité : interface épurée, aucun fichier de configuration, scènes créées au clic et installation en une commande Docker. Ses intégrations externes permettent à n'importe qui de publier une intégration sur GitHub, installable en un clic et isolée dans son bac à sable. Idéale pour faire de l'open source sans la courbe d'apprentissage raide.",
        },
        {
          logo: "/img/external/open-source-platforms/home-assistant.png",
          logoAlt: "Logo Home Assistant",
          title: "Home Assistant",
          text: "La plateforme open source la plus complète et la plus populaire, avec un immense catalogue d'intégrations. Très puissante, mais la configuration peut devenir profonde et chargée en YAML sur les installations avancées.",
        },
        {
          logo: "/img/external/open-source-platforms/openhab.png",
          logoAlt: "Logo openHAB",
          title: "openHAB",
          text: "Une plateforme mature en Java, réputée pour sa flexibilité et sa neutralité vis-à-vis des marques. Moteur de règles puissant, mais une prise en main plus technique.",
        },
        {
          logo: "/img/external/open-source-platforms/jeedom.png",
          logoAlt: "Logo Jeedom",
          title: "Jeedom",
          text: "Une plateforme open source française avec une marketplace de plugins (certains payants). Populaire sur les box locales, avec une approche plus technique et orientée plugins.",
        },
        {
          logo: "/img/external/open-source-platforms/domoticz.png",
          logoAlt: "Logo Domoticz",
          title: "Domoticz",
          text: "Un système open source léger et ancien, qui tourne très bien sur du matériel peu puissant, avec une interface plus utilitaire.",
        },
        {
          logo: "/img/external/open-source-platforms/node-red.png",
          logoAlt: "Logo Node-RED",
          title: "Node-RED",
          text: "Pas une plateforme complète mais un outil open source d'automatisation par flux, souvent associé aux autres pour bâtir une logique avancée de façon visuelle.",
        },
      ],
    },
    hardware: {
      title: "Faut-il un hub ou du matériel particulier ?",
      intro:
        "L'un des grands avantages de la domotique open source, c'est que vous n'êtes pas lié à un hub propriétaire. Le logiciel tourne sur du matériel que vous possédez déjà ou que vous pouvez acheter à bas prix :",
      points: [
        "Un petit ordinateur pour l'héberger : un Raspberry Pi, un mini-PC ou un NAS suffit à faire tourner la plateforme 24h/24 sur votre réseau.",
        "Des clés radio USB pour les appareils sans fil : ajoutez une clé Zigbee ou Z-Wave pour dialoguer en local avec des centaines de capteurs et d'interrupteurs, sans passerelle de marque.",
        "Matter et Thread pour le matériel récent : les appareils Matter en Wi-Fi ou Ethernet rejoignent directement votre réseau, tandis que les appareils Thread ont besoin d'un routeur de bordure Thread (Thread Border Router) pour y accéder. Ce routeur de bordure peut être un appareil que vous possédez déjà (certaines enceintes, box TV et hubs en font office) ou une installation open source sur votre propre machine avec une radio 802.15.4 : vous n'êtes donc toujours pas enfermé dans une marque.",
        "Vos appareils Wi-Fi et IP existants : de nombreuses caméras, prises et TV se connectent directement sur votre réseau local.",
      ],
      outro:
        "Il n'y a donc aucune box propriétaire obligatoire à acheter : un mini-ordinateur bon marché et une clé radio USB suffisent à la plupart des installations.",
      link: {
        label: "Voir la meilleure clé Zigbee à choisir →",
        href: "/best-zigbee-dongle/",
      },
    },
    gladys: {
      title: "Gladys Assistant : l'open source, en plus simple",
      paragraphs: [
        "Gladys Assistant est une plateforme domotique gratuite, open source (Apache 2.0) et auto-hébergée. Tout le code source est sur GitHub, elle s'installe en une seule commande Docker sur un Raspberry Pi, un mini-PC ou un NAS, et tourne entièrement sur votre réseau local.",
        "Sa force, c'est la simplicité. Tout se configure depuis une interface épurée, sans fichiers de configuration ni YAML, et les scènes se créent au clic. Elle repose sur des standards ouverts (Zigbee, Matter, MQTT) avec un vrai moteur d'automatisation local : vos scènes du quotidien tournent chez vous. Les fonctions optionnelles comme le vocal, l'IA et l'accès distant reposent sur un cloud souverain hébergé en France, porté par ce même projet indépendant : sans publicité, sans revente de données, et un accès distant chiffré de bout en bout.",
      ],
      link: { label: "Commencer avec Gladys →", href: "/docs/" },
    },
    related: {
      title: "Aller plus loin",
      intro:
        "Que vous compariez les plateformes ou que vous quittiez un écosystème fermé, ces guides vous aident à choisir et à faire le pas :",
      links: [
        {
          label: "Alternative à Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Une plateforme open source locale et plus simple, sans le YAML ni la courbe d'apprentissage raide.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Comment se comparent vraiment les deux principales plateformes open source et locales.",
        },
        {
          label: "Alternative à Jeedom",
          href: "/jeedom-alternative/",
          text: "Une alternative open source à Jeedom, sans marketplace de plugins payants.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord est important et comment bâtir une maison qui tourne sans le cloud.",
        },
        {
          label: "Contrôler sa maison avec l'IA",
          href: "/ai-smart-home/",
          text: "Gardez le confort de l'IA et du contrôle vocal, sur un cloud privé, pas l'assistant d'un géant de la tech.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Lancez-vous dans la domotique open source",
      text: "Gladys est gratuite, open source (Apache 2.0), et s'installe en une seule commande Docker. Auto-hébergée, locale d'abord, sans cloud obligatoire.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Découvrir Gladys Plus", href: "/plus/" },
    },
  },

  de: {
    meta: {
      title: "Open Source Hausautomation: 6 Systeme im Vergleich (2026)",
      description:
        "Die 6 besten Open-Source-Smart-Home-Systeme im Vergleich: Gladys Assistant, Home Assistant, openHAB, Domoticz, Jeedom und Node-RED. Finde dein System.",
    },
    hero: {
      title: "Open-Source-Hausautomation",
      subtitle:
        "Steuere dein Smart Home mit freier, selbst gehosteter Software, die du lesen, prüfen und behalten kannst, statt sie bei einer geschlossenen Cloud zu mieten.",
      intro: [
        "Die meisten Smart-Home-Produkte sind Blackboxen: proprietäre Software, Cloud-Zwang und ein Unternehmen, das jederzeit die Regeln ändern, ein Abo einführen oder den Dienst abschalten kann. Das System gehört nicht dir, du mietest nur den Zugang.",
        "Open-Source-Hausautomation geht den umgekehrten Weg. Die Software, die dein Zuhause steuert, ist frei, öffentlich und selbst gehostet: Jeder kann sie einsehen, verbessern und so lange betreiben, wie er möchte. Dieser Guide erklärt, was Open-Source-Hausautomation ist, warum sie wichtig ist, welche Plattformen du kennen solltest und wie du loslegst.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/de/docs/" },
      secondaryCta: {
        label: "Integrationen entdecken →",
        href: "/de/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Warum Open Source für dein Zuhause wichtig ist",
      intro:
        "Deine Hausautomation steuert Licht, Türschlösser, Heizung und Alarmanlage. Genau dort willst du keine Blackbox, die du weder prüfen noch ersetzen kannst. Open Source verschiebt die Machtverhältnisse:",
      points: [
        "Transparenz: Der Code ist öffentlich, also kann jeder nachprüfen, was mit deinen Daten passiert, statt einem Marketingversprechen glauben zu müssen.",
        "Langlebigkeit: Ein Community-Projekt kann nicht von einem einzelnen Unternehmen „eingestellt“ werden. Selbst wenn das ursprüngliche Team aufhört, bleibt der Code erhalten und kann geforkt werden.",
        "Kein Lock-in: Offene Standards und offener Code bedeuten, dass du Marken frei kombinieren und dein Setup mitnehmen kannst, statt in einem Ökosystem gefangen zu sein.",
        "Datenschutz: Die meisten Open-Source-Plattformen sind selbst gehostet, sodass deine Gewohnheiten, deine Anwesenheit und deine Kamerabilder in deinem eigenen Netzwerk bleiben können.",
        "Keine überraschenden Bezahlschranken: Die Kernsoftware ist kostenlos, wichtige Funktionen können also nicht plötzlich hinter einem neuen Monatsabo verschwinden.",
        "Erweiterbarkeit: Eine Community entwickelt Integrationen viel schneller als ein einzelner Hersteller, sodass mehr deiner vorhandenen Geräte unterstützt werden.",
      ],
      outro:
        "Open Source heißt nicht kompliziert oder ohne Support. Die besten Projekte sind ausgereift, werden aktiv gepflegt und von großen Communitys getragen.",
    },
    definition: {
      title: "Was ist Open-Source-Hausautomation?",
      intro:
        "Open-Source-Hausautomation bedeutet, dass die Software, die dein Smart Home steuert, unter einer Open-Source-Lizenz veröffentlicht wird: frei nutzbar, einsehbar und veränderbar, und meist selbst gehostet auf Hardware, die dir gehört. Konkret heißt das:",
      points: [
        "Der Quellcode ist öffentlich und offen lizenziert (Gladys Assistant zum Beispiel unter Apache 2.0), sodass du oder jeder andere ihn lesen und prüfen kann.",
        "Der Betrieb ist kostenlos: keine Gebühr pro Gerät und kein Pflicht-Abo, damit das System funktioniert.",
        "Sie läuft selbst gehostet auf deinem eigenen Rechner, deine Automationen und Daten bleiben also unter deiner Kontrolle.",
        "Sie spricht offene Standards wie Zigbee, Matter und MQTT statt des proprietären Protokolls einer einzelnen Marke.",
        "Eine Community entwickelt Integrationen, Fehlerbehebungen und Übersetzungen ganz offen.",
      ],
      outro:
        "Open Source und Komfort schließen sich nicht aus: Optionale Funktionen wie Fernzugriff oder KI kann es trotzdem geben, sie sind nur eine Wahl statt einer Pflicht.",
    },
    howTo: {
      title: "Die beste Open-Source-Software für Hausautomation im Vergleich",
      intro:
        "Mehrere ausgereifte Open-Source-Plattformen können dein Smart Home steuern. So schneiden die wichtigsten ab, von der einfachsten bis zur flexibelsten:",
      table: {
        headers: ["Plattform", "Oberfläche & Einrichtung", "Bedienbarkeit", "Lizenz", "Ideal für"],
        rows: [
          ["Gladys Assistant", "Aufgeräumte Oberfläche, keine Konfigurationsdateien", "Sehr einfach", "Apache 2.0", "Open Source ohne Lernkurve"],
          ["Home Assistant", "Oberfläche, YAML für fortgeschrittene Setups", "Mittel bis fortgeschritten", "Apache 2.0", "Den größten Integrationskatalog"],
          ["openHAB", "Textkonfiguration und Oberfläche", "Fortgeschritten", "EPL 2.0", "Herstellerneutralität, mächtige Regeln"],
          ["Jeedom", "Oberfläche mit Plugin-Marktplatz", "Mittel", "GPL (Kern)", "Lokale Boxen und ein Plugin-Ökosystem"],
          ["Domoticz", "Schlanke, nüchterne Oberfläche", "Mittel", "GPLv3", "Sehr sparsame Hardware"],
          ["Node-RED", "Visueller Flow-Editor", "Mittel", "Apache 2.0", "Komplexe Automationslogik bauen"],
        ],
      },
      cards: [
        {
          logo: "/img/external/open-source-platforms/gladys-assistant.png",
          logoAlt: "Logo von Gladys Assistant",
          title: "Gladys Assistant",
          text: "Eine selbst gehostete Plattform (Apache 2.0) mit Fokus auf Einfachheit: aufgeräumte Oberfläche, keine Konfigurationsdateien, Szenen per Klick und Installation mit einem einzigen Docker-Befehl. Über externe Integrationen kann jeder eine Integration auf GitHub veröffentlichen, die sich mit einem Klick installieren lässt und isoliert in einer Sandbox läuft. Ideal, wenn du Open Source ohne steile Lernkurve willst.",
        },
        {
          logo: "/img/external/open-source-platforms/home-assistant.png",
          logoAlt: "Logo von Home Assistant",
          title: "Home Assistant",
          text: "Die funktionsreichste und beliebteste Open-Source-Plattform mit einem riesigen Integrationskatalog. Extrem leistungsfähig, aber die Konfiguration kann bei fortgeschrittenen Setups tief gehen und viel YAML erfordern.",
        },
        {
          logo: "/img/external/open-source-platforms/openhab.png",
          logoAlt: "Logo von openHAB",
          title: "openHAB",
          text: "Eine ausgereifte, Java-basierte Plattform, bekannt für Flexibilität und Herstellerneutralität. Mächtige Regel-Engine, aber eine steilere, technischere Einrichtung.",
        },
        {
          logo: "/img/external/open-source-platforms/jeedom.png",
          logoAlt: "Logo von Jeedom",
          title: "Jeedom",
          text: "Eine französische Open-Source-Plattform mit Plugin-Marktplatz (teils kostenpflichtig). Beliebt auf lokalen Boxen, mit einem technischeren, Plugin-zentrierten Ansatz.",
        },
        {
          logo: "/img/external/open-source-platforms/domoticz.png",
          logoAlt: "Logo von Domoticz",
          title: "Domoticz",
          text: "Ein schlankes, seit Langem etabliertes Open-Source-System, das auch auf sehr sparsamer Hardware gut läuft, mit einer eher nüchternen Oberfläche.",
        },
        {
          logo: "/img/external/open-source-platforms/node-red.png",
          logoAlt: "Logo von Node-RED",
          title: "Node-RED",
          text: "Keine vollständige Plattform, sondern ein Open-Source-Tool für flussbasierte Automation, das oft mit den anderen kombiniert wird, um komplexe Logik visuell zu bauen.",
        },
      ],
    },
    hardware: {
      title: "Brauchst du einen speziellen Hub oder besondere Hardware?",
      intro:
        "Ein großer Vorteil von Open-Source-Hausautomation: Du bist an keinen proprietären Hub gebunden. Die Software läuft auf Hardware, die du schon hast oder günstig kaufen kannst:",
      points: [
        "Ein kleiner Rechner als Host: Ein Raspberry Pi, ein Mini-PC oder ein NAS reicht, um die Plattform rund um die Uhr in deinem eigenen Netzwerk zu betreiben.",
        "USB-Funksticks für drahtlose Geräte: Mit einem Zigbee- oder Z-Wave-USB-Stick sprichst du lokal mit Hunderten von Sensoren und Schaltern, ganz ohne Hersteller-Bridge.",
        "Matter und Thread für neuere Geräte: Matter-Geräte per WLAN oder Ethernet treten deinem Netzwerk direkt bei, Thread-Geräte brauchen dafür einen Thread Border Router. Das kann ein Gerät sein, das du schon besitzt (manche Lautsprecher, TV-Boxen und Hubs übernehmen diese Rolle), oder ein Open-Source-Setup auf deinem eigenen Host mit einem 802.15.4-Funkmodul. So bist du auch hier an keine Marke gebunden.",
        "Deine vorhandenen WLAN- und IP-Geräte: Viele Kameras, Steckdosen und Fernseher verbinden sich direkt über dein lokales Netzwerk.",
      ],
      outro:
        "Du musst also keine proprietäre Box kaufen: Ein günstiger Mini-Computer plus ein USB-Funkstick reichen für die meisten Setups.",
      link: {
        label: "Den besten Zigbee-Stick finden →",
        href: "/de/best-zigbee-dongle/",
      },
    },
    gladys: {
      title: "Gladys Assistant: Open Source, ganz einfach",
      paragraphs: [
        "Gladys Assistant ist eine kostenlose, quelloffene (Apache 2.0) und selbst gehostete Plattform für Hausautomation. Der komplette Quellcode liegt auf GitHub, die Installation erfolgt mit einem einzigen Docker-Befehl auf einem Raspberry Pi, Mini-PC oder NAS, und alles läuft vollständig in deinem lokalen Netzwerk.",
        "Ihre Stärke ist die Einfachheit. Alles wird über eine aufgeräumte Oberfläche eingerichtet, ohne Konfigurationsdateien und ohne YAML, und Szenen erstellst du per Klick. Gladys setzt auf offene Standards (Zigbee, Matter, MQTT) und bringt eine vollwertige lokale Automations-Engine mit, sodass deine alltäglichen Szenen zu Hause laufen. Optionale Funktionen wie Sprachsteuerung, KI und Fernzugriff nutzen eine private, sichere Cloud desselben unabhängigen Projekts: keine Werbung, kein Datenverkauf und ein Ende-zu-Ende-verschlüsselter Fernzugriff.",
      ],
      link: { label: "Mit Gladys starten →", href: "/de/docs/" },
    },
    related: {
      title: "Weiterlesen",
      intro:
        "Ob du Plattformen vergleichst oder ein geschlossenes Ökosystem verlassen willst: Diese Guides helfen dir bei der Wahl und beim Umstieg:",
      links: [
        {
          label: "Home Assistant Alternative",
          href: "/de/home-assistant-alternative/",
          text: "Eine einfachere, lokale Open-Source-Plattform, ohne YAML und ohne steile Lernkurve.",
        },
        {
          label: "Gladys vs. Home Assistant",
          href: "/de/home-assistant-vs-gladys-assistant/",
          text: "Wie sich die beiden wichtigsten lokalen Open-Source-Plattformen wirklich unterscheiden.",
        },
        {
          label: "Jeedom Alternative",
          href: "/de/jeedom-alternative/",
          text: "Eine Open-Source-Alternative zu Jeedom, ohne kostenpflichtigen Plugin-Marktplatz.",
        },
        {
          label: "Ein lokales Smart Home bauen",
          href: "/de/local-smart-home/",
          text: "Warum „lokal zuerst“ wichtig ist und wie du ein Zuhause baust, das ohne Cloud funktioniert.",
        },
        {
          label: "Dein Zuhause mit KI steuern",
          href: "/de/ai-smart-home/",
          text: "Behalte den Komfort von KI und Sprachsteuerung, auf einer privaten Cloud statt beim Assistenten eines Tech-Riesen.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Starte mit Open-Source-Hausautomation",
      text: "Gladys ist kostenlos, Open Source (Apache 2.0) und mit einem einzigen Docker-Befehl installiert. Selbst gehostet, lokal zuerst, keine Cloud nötig.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Gladys Plus entdecken", href: "/de/plus/" },
    },
  },
  es: {
    meta: {
      title: "El mejor software de domótica de código abierto (2026)",
      description:
        "Comparamos las 6 mejores plataformas de domótica de código abierto: Gladys Assistant, Home Assistant, openHAB, Domoticz, Jeedom y Node-RED. Facilidad de uso, dispositivos, licencia: elige el software de hogar inteligente gratuito y autoalojado adecuado.",
    },
    hero: {
      title: "Domótica de código abierto",
      subtitle:
        "Haz funcionar tu hogar inteligente con software gratuito y autoalojado que puedes leer, en el que puedes confiar y que puedes conservar, en lugar de alquilarlo a una nube cerrada.",
      intro: [
        "La mayoría de los productos para el hogar inteligente son cajas cerradas: software propietario, una nube obligatoria y una empresa que puede cambiar las reglas, añadir una suscripción o cerrar el servicio cuando quiera. No eres dueño del sistema, alquilas el acceso a él.",
        "La domótica de código abierto adopta el enfoque contrario. El software que hace funcionar tu casa es gratuito, público y autoalojado, así que cualquiera puede inspeccionarlo, mejorarlo y mantenerlo en marcha todo el tiempo que quiera. Esta guía explica qué es la domótica de código abierto, por qué importa, cuáles son las principales plataformas que conviene conocer y cómo empezar.",
      ],
      primaryCta: { label: "Empieza gratis", href: "/es/docs/" },
      secondaryCta: {
        label: "Explora las integraciones →",
        href: "/es/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Por qué el código abierto importa para tu casa",
      intro:
        "Tu domótica controla tus luces, cerraduras, calefacción y alarma. No es lugar para una caja negra que no puedes inspeccionar ni sustituir. El código abierto cambia el equilibrio de poder:",
      points: [
        "Transparencia: el código es público, así que cualquiera puede verificar qué hace con tus datos, en lugar de fiarse de una promesa de marketing.",
        "Longevidad: una sola empresa no puede \"jubilar\" un proyecto comunitario. Incluso si el equipo original lo deja, el código sigue ahí y se puede bifurcar.",
        "Sin dependencia forzada: los estándares abiertos y un código abierto te dejan libre para mezclar marcas y trasladar tu instalación, sin quedar atrapado en un ecosistema.",
        "Privacidad: la mayoría de las plataformas de código abierto son autoalojadas, así que tus hábitos, tu presencia y las imágenes de tus cámaras pueden quedarse en tu propia red.",
        "Sin muros de pago sorpresa: el software principal es gratuito, así que las funciones esenciales no pueden pasar de repente a una nueva suscripción mensual.",
        "Extensibilidad: una comunidad crea integraciones mucho más rápido que cualquier fabricante por sí solo, así que más dispositivos que ya tienes son compatibles.",
      ],
      outro:
        "Código abierto no significa complicado ni sin soporte. Los mejores proyectos están pulidos, se mantienen activamente y cuentan con el respaldo de grandes comunidades.",
    },
    definition: {
      title: "¿Qué es la domótica de código abierto?",
      intro:
        "La domótica de código abierto significa que el software que controla tu hogar inteligente se publica bajo una licencia de código abierto, que se puede usar, inspeccionar y modificar libremente, y que normalmente se autoaloja en hardware que te pertenece. En la práctica:",
      points: [
        "El código fuente es público y tiene una licencia abierta (por ejemplo, Gladys Assistant usa Apache 2.0), así que tú, o cualquier persona, puedes leerlo y auditarlo.",
        "Usarlo es gratis: sin cuota por dispositivo ni suscripción obligatoria para que el núcleo siga funcionando.",
        "Se autoaloja en tu propio equipo, así que tus automatizaciones y tus datos siguen bajo tu control.",
        "Habla estándares abiertos como Zigbee, Matter y MQTT en lugar del protocolo propietario de una sola marca.",
        "Una comunidad aporta integraciones, correcciones y traducciones de forma abierta.",
      ],
      outro:
        "Código abierto y comodidad no son opuestos: las funciones opcionales como el acceso remoto o la IA pueden seguir existiendo, solo que pasan a ser una elección y no una obligación.",
    },
    howTo: {
      title: "Comparativa del mejor software de domótica de código abierto",
      intro:
        "Varias plataformas de código abierto maduras pueden hacer funcionar tu hogar inteligente. Así se comparan las principales, de la más sencilla a la más flexible:",
      table: {
        headers: ["Plataforma", "Interfaz y configuración", "Facilidad de uso", "Licencia", "Ideal para"],
        rows: [
          ["Gladys Assistant", "Interfaz limpia, sin archivos de configuración", "Muy fácil", "Apache 2.0", "Código abierto sin curva de aprendizaje"],
          ["Home Assistant", "Interfaz, YAML para configuraciones avanzadas", "Media a avanzada", "Apache 2.0", "El mayor catálogo de integraciones"],
          ["openHAB", "Configuración en texto e interfaz", "Avanzada", "EPL 2.0", "Neutralidad frente a fabricantes, reglas potentes"],
          ["Jeedom", "Interfaz con tienda de plugins", "Media", "GPL (núcleo)", "Equipos locales y un ecosistema de plugins"],
          ["Domoticz", "Interfaz ligera y funcional", "Media", "GPLv3", "Hardware de muy bajo consumo"],
          ["Node-RED", "Editor visual de flujos", "Media", "Apache 2.0", "Crear lógica de automatización avanzada"],
        ],
      },
      cards: [
        {
          logo: "/img/external/open-source-platforms/gladys-assistant.png",
          logoAlt: "Logo de Gladys Assistant",
          title: "Gladys Assistant",
          text: "Una plataforma autoalojada (Apache 2.0) centrada en la sencillez: una interfaz limpia, sin archivos de configuración, escenas creadas con unos clics y una instalación con un solo comando Docker. Sus integraciones externas permiten a cualquiera publicar una integración en GitHub, que se instala con un clic y se ejecuta de forma aislada. Ideal si quieres código abierto sin una curva de aprendizaje empinada.",
        },
        {
          logo: "/img/external/open-source-platforms/home-assistant.png",
          logoAlt: "Logo de Home Assistant",
          title: "Home Assistant",
          text: "La plataforma de código abierto más completa y popular, con un enorme catálogo de integraciones. Extremadamente potente, pero la configuración puede volverse compleja y depender mucho de YAML en las instalaciones avanzadas.",
        },
        {
          logo: "/img/external/open-source-platforms/openhab.png",
          logoAlt: "Logo de openHAB",
          title: "openHAB",
          text: "Una plataforma madura basada en Java, conocida por su flexibilidad y su neutralidad frente a los fabricantes. Motor de reglas potente, con una configuración más técnica y exigente.",
        },
        {
          logo: "/img/external/open-source-platforms/jeedom.png",
          logoAlt: "Logo de Jeedom",
          title: "Jeedom",
          text: "Una plataforma francesa de código abierto con una tienda de plugins (algunos de pago). Popular en equipos locales, con un enfoque más técnico basado en plugins.",
        },
        {
          logo: "/img/external/open-source-platforms/domoticz.png",
          logoAlt: "Logo de Domoticz",
          title: "Domoticz",
          text: "Un sistema de código abierto ligero y veterano que funciona bien en hardware de muy bajo consumo, con una interfaz más funcional.",
        },
        {
          logo: "/img/external/open-source-platforms/node-red.png",
          logoAlt: "Logo de Node-RED",
          title: "Node-RED",
          text: "No es una plataforma completa, sino una herramienta de automatización de código abierto basada en flujos, que a menudo se combina con las demás para crear lógica avanzada de forma visual.",
        },
      ],
    },
    hardware: {
      title: "¿Necesitas un hub o un hardware especial?",
      intro:
        "Una de las grandes ventajas de la domótica de código abierto es que no dependes de un hub propietario. El software funciona en hardware que ya tienes o que puedes comprar a bajo precio:",
      points: [
        "Un pequeño ordenador para alojarlo: una Raspberry Pi, un mini-PC o un NAS bastan para hacer funcionar la plataforma 24/7 en tu propia red.",
        "Dongles USB de radio para los dispositivos inalámbricos: añade un dongle USB Zigbee o Z-Wave para comunicarte en local con cientos de sensores e interruptores, sin necesidad de un puente del fabricante.",
        "Matter y Thread para los equipos más recientes: los dispositivos Matter por Wi-Fi o Ethernet se unen directamente a tu red, mientras que los dispositivos Thread necesitan un Thread Border Router para llegar a ella. Ese border router puede ser un dispositivo que ya tienes (algunos altavoces, decodificadores de TV y hubs hacen esa función) o una configuración de código abierto en tu propio equipo con una radio 802.15.4, así que tampoco te ata a una marca.",
        "Tu Wi-Fi y tus dispositivos IP actuales: muchas cámaras, enchufes y televisores se conectan directamente a través de tu red local.",
      ],
      outro:
        "Así que no hay ninguna caja propietaria obligatoria que comprar: un mini-ordenador barato y un dongle USB de radio es todo lo que necesitan la mayoría de las instalaciones.",
      link: {
        label: "Descubre qué dongle Zigbee elegir →",
        href: "/es/best-zigbee-dongle/",
      },
    },
    gladys: {
      title: "Gladys Assistant: código abierto, hecho sencillo",
      paragraphs: [
        "Gladys Assistant es una plataforma de domótica gratuita, de código abierto (Apache 2.0) y autoalojada. Todo el código fuente está en GitHub, se instala con un solo comando Docker en una Raspberry Pi, un mini-PC o un NAS, y funciona por completo en tu red local.",
        "Donde destaca es en la sencillez. Todo se configura desde una interfaz limpia, sin archivos de configuración ni YAML, y las escenas se crean con unos clics. Se basa en estándares abiertos (Zigbee, Matter, MQTT) con un motor de automatización totalmente local, así que tus escenas del día a día se ejecutan en casa. Las funciones opcionales como la voz, la IA y el acceso remoto se apoyan en una nube privada y segura del mismo proyecto independiente: sin anuncios, sin reventa de datos y con acceso remoto cifrado de extremo a extremo.",
      ],
      link: { label: "Empieza con Gladys →", href: "/es/docs/" },
    },
    related: {
      title: "Profundiza",
      intro:
        "Tanto si estás comparando plataformas como si quieres salir de un ecosistema cerrado, estas guías te ayudan a elegir y a dar el paso:",
      links: [
        {
          label: "Alternativa a Home Assistant",
          href: "/es/home-assistant-alternative/",
          text: "Una plataforma más sencilla, local y de código abierto, sin YAML ni una curva de aprendizaje empinada.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/es/home-assistant-vs-gladys-assistant/",
          text: "Cómo se comparan de verdad las dos principales plataformas de código abierto y local por defecto.",
        },
        {
          label: "Alternativa a Jeedom",
          href: "/es/jeedom-alternative/",
          text: "Una alternativa de código abierto a Jeedom, sin tienda de plugins de pago.",
        },
        {
          label: "Crea un hogar inteligente local",
          href: "/es/local-smart-home/",
          text: "Por qué importa lo local y cómo crear una casa que funcione sin la nube.",
        },
        {
          label: "Controla tu casa con IA",
          href: "/es/ai-smart-home/",
          text: "Conserva la comodidad de la IA y del control por voz, en una nube privada y no en un asistente de una gran tecnológica.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Empieza con la domótica de código abierto",
      text: "Gladys es gratuito, de código abierto (Apache 2.0) y se instala con un solo comando Docker. Autoalojado, local por defecto, sin necesidad de nube.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: { label: "Descubre Gladys Plus", href: "/es/plus/" },
    },
  },
};

export const openSourceHomeAutomationFaqEn = [
  {
    question: "What is open-source home automation?",
    answer:
      "Open-source home automation means the software that controls your smart home is released under an open-source license, free to use, inspect and modify, and usually self-hosted on hardware you own. The code is public, there's no mandatory subscription for the core, and it typically uses open standards like Zigbee, Matter and MQTT.",
  },
  {
    question: "What is the best open-source home automation software?",
    answer:
      "The main open-source platforms are Gladys Assistant, Home Assistant, openHAB, Jeedom and Domoticz. Home Assistant has the largest integration catalog, while Gladys Assistant focuses on simplicity with a clean interface, no configuration files and a one-command install, plus external integrations that anyone can publish and that install in one click. The best choice depends on whether you prioritize raw flexibility or ease of use.",
  },
  {
    question: "Do you need a hub for open-source home automation?",
    answer:
      "No proprietary hub is required. An open-source platform runs on a small computer you own, such as a Raspberry Pi, a mini-PC or a NAS. To control wireless devices you simply add a USB radio dongle (Zigbee or Z-Wave). Newer gear connects through the open Matter and Thread standards: Matter devices on Wi-Fi or Ethernet join your network directly, while Thread devices also need a Thread Border Router, which can be a device you already own or an open-source setup on your own host with an 802.15.4 radio. Either way, there is no brand-specific box to buy.",
  },
  {
    question: "Is open-source home automation free?",
    answer:
      "Yes, the core software is free. Platforms like Gladys Assistant (Apache 2.0) and Home Assistant cost nothing to download and run on your own hardware. Some projects offer optional paid services (such as remote access or AI), but you're never forced into a subscription to keep your home automation working.",
  },
  {
    question: "Is open-source home automation private and secure?",
    answer:
      "It can be more private than closed cloud products. Because most open-source platforms are self-hosted, your automations and data stay on your own network instead of a manufacturer's servers, and because the code is public, anyone can audit what it does. Security still depends on keeping your system updated, as with any software.",
  },
  {
    question: "Do I need to be a developer to use open-source home automation?",
    answer:
      "No. While some platforms are quite technical, Gladys Assistant is designed for non-developers: it installs in a single Docker command, everything is configured by clicking in the interface with no configuration files.",
  },
  {
    question: "What license is Gladys Assistant released under?",
    answer:
      "Gladys Assistant is released under the Apache 2.0 license, a permissive open-source license. The full source code is available publicly on GitHub, so anyone can read, audit, contribute to or fork it.",
  },
];

export const openSourceHomeAutomationFaqFr = [
  {
    question: "Qu'est-ce que la domotique open source ?",
    answer:
      "La domotique open source, c'est quand le logiciel qui pilote votre maison connectée est publié sous une licence open source, libre d'utilisation, d'inspection et de modification, et le plus souvent auto-hébergé sur du matériel qui vous appartient. Le code est public, il n'y a pas d'abonnement obligatoire pour le cœur du système, et elle utilise généralement des standards ouverts comme Zigbee, Matter et MQTT.",
  },
  {
    question: "Quel est le meilleur logiciel domotique open source ?",
    answer:
      "Les principales plateformes open source sont Gladys Assistant, Home Assistant, openHAB, Jeedom et Domoticz. Home Assistant possède le plus grand catalogue d'intégrations, tandis que Gladys Assistant mise sur la simplicité avec une interface épurée, sans fichiers de configuration, une installation en une commande, et des intégrations externes que n'importe qui peut publier et qui s'installent en un clic. Le meilleur choix dépend de si vous privilégiez la flexibilité maximale ou la facilité d'usage.",
  },
  {
    question: "Faut-il un hub pour la domotique open source ?",
    answer:
      "Aucun hub propriétaire n'est nécessaire. Une plateforme open source tourne sur un petit ordinateur qui vous appartient, comme un Raspberry Pi, un mini-PC ou un NAS. Pour piloter les appareils sans fil, il suffit d'ajouter une clé radio USB (Zigbee ou Z-Wave). Le matériel récent se connecte via les standards ouverts Matter et Thread : les appareils Matter en Wi-Fi ou Ethernet rejoignent directement votre réseau, tandis que les appareils Thread nécessitent en plus un routeur de bordure Thread, qui peut être un appareil que vous possédez déjà ou une installation open source sur votre propre machine avec une radio 802.15.4. Dans tous les cas, il n'y a aucune box de marque à acheter.",
  },
  {
    question: "La domotique open source est-elle gratuite ?",
    answer:
      "Oui, le logiciel de base est gratuit. Des plateformes comme Gladys Assistant (Apache 2.0) et Home Assistant ne coûtent rien à télécharger et à faire tourner sur votre propre matériel. Certains projets proposent des services payants optionnels (comme l'accès distant ou l'IA), mais on ne vous impose jamais un abonnement pour que votre domotique continue de fonctionner.",
  },
  {
    question: "La domotique open source est-elle privée et sécurisée ?",
    answer:
      "Elle peut être plus respectueuse de la vie privée que les produits cloud fermés. Comme la plupart des plateformes open source sont auto-hébergées, vos automatisations et vos données restent sur votre réseau plutôt que sur les serveurs d'un fabricant, et comme le code est public, chacun peut auditer ce qu'il fait. La sécurité dépend tout de même de la mise à jour régulière de votre système, comme pour tout logiciel.",
  },
  {
    question: "Faut-il être développeur pour utiliser la domotique open source ?",
    answer:
      "Non. Si certaines plateformes sont assez techniques, Gladys Assistant est pensée pour les non-développeurs : elle s'installe en une seule commande Docker, tout se configure au clic dans l'interface sans fichiers de configuration, et un kit de démarrage est livré avec Gladys pré-installée.",
  },
  {
    question: "Sous quelle licence Gladys Assistant est-elle publiée ?",
    answer:
      "Gladys Assistant est publiée sous licence Apache 2.0, une licence open source permissive. L'intégralité du code source est disponible publiquement sur GitHub : chacun peut le lire, l'auditer, y contribuer ou le forker.",
  },
];

export const openSourceHomeAutomationFaqDe = [
  {
    question: "Was ist Open-Source-Hausautomation?",
    answer:
      "Open-Source-Hausautomation bedeutet, dass die Software, die dein Smart Home steuert, unter einer Open-Source-Lizenz veröffentlicht wird: frei nutzbar, einsehbar und veränderbar, und meist selbst gehostet auf Hardware, die dir gehört. Der Code ist öffentlich, für den Kern gibt es kein Pflicht-Abo, und in der Regel werden offene Standards wie Zigbee, Matter und MQTT genutzt.",
  },
  {
    question: "Was ist die beste Open-Source-Software für Hausautomation?",
    answer:
      "Die wichtigsten Open-Source-Plattformen sind Gladys Assistant, Home Assistant, openHAB, Jeedom und Domoticz. Home Assistant hat den größten Integrationskatalog, während Gladys Assistant auf Einfachheit setzt: aufgeräumte Oberfläche, keine Konfigurationsdateien, Installation mit einem Befehl und externe Integrationen, die jeder veröffentlichen kann und die sich mit einem Klick installieren lassen. Die beste Wahl hängt davon ab, ob dir maximale Flexibilität oder einfache Bedienung wichtiger ist.",
  },
  {
    question: "Brauche ich für Open-Source-Hausautomation einen Hub?",
    answer:
      "Ein proprietärer Hub ist nicht nötig. Eine Open-Source-Plattform läuft auf einem kleinen Rechner, der dir gehört, etwa einem Raspberry Pi, einem Mini-PC oder einem NAS. Für drahtlose Geräte steckst du einfach einen USB-Funkstick (Zigbee oder Z-Wave) dazu. Neuere Geräte verbinden sich über die offenen Standards Matter und Thread: Matter-Geräte per WLAN oder Ethernet treten deinem Netzwerk direkt bei, Thread-Geräte brauchen zusätzlich einen Thread Border Router. Das kann ein Gerät sein, das du schon besitzt, oder ein Open-Source-Setup auf deinem eigenen Host mit einem 802.15.4-Funkmodul. So oder so musst du keine markengebundene Box kaufen.",
  },
  {
    question: "Ist Open-Source-Hausautomation kostenlos?",
    answer:
      "Ja, die Kernsoftware ist kostenlos. Plattformen wie Gladys Assistant (Apache 2.0) und Home Assistant kosten nichts, weder beim Download noch im Betrieb auf deiner eigenen Hardware. Manche Projekte bieten optionale kostenpflichtige Dienste an (etwa Fernzugriff oder KI), aber du wirst nie zu einem Abo gezwungen, damit deine Hausautomation weiter funktioniert.",
  },
  {
    question: "Ist Open-Source-Hausautomation privat und sicher?",
    answer:
      "Sie kann deutlich datenschutzfreundlicher sein als geschlossene Cloud-Produkte. Da die meisten Open-Source-Plattformen selbst gehostet sind, bleiben deine Automationen und Daten in deinem eigenen Netzwerk statt auf den Servern eines Herstellers, und weil der Code öffentlich ist, kann jeder prüfen, was er tut. Die Sicherheit hängt aber wie bei jeder Software davon ab, dass du dein System aktuell hältst.",
  },
  {
    question: "Muss ich Entwickler sein, um Open-Source-Hausautomation zu nutzen?",
    answer:
      "Nein. Manche Plattformen sind recht technisch, aber Gladys Assistant ist für Nicht-Entwickler gemacht: Die Installation erfolgt mit einem einzigen Docker-Befehl, und alles wird per Klick in der Oberfläche eingerichtet, ganz ohne Konfigurationsdateien.",
  },
  {
    question: "Unter welcher Lizenz steht Gladys Assistant?",
    answer:
      "Gladys Assistant wird unter der Apache-2.0-Lizenz veröffentlicht, einer permissiven Open-Source-Lizenz. Der komplette Quellcode ist öffentlich auf GitHub verfügbar, sodass jeder ihn lesen, prüfen, verbessern oder forken kann.",
  },
];

export const openSourceHomeAutomationFaqEs = [
  {
    question: "¿Qué es la domótica de código abierto?",
    answer:
      "La domótica de código abierto significa que el software que controla tu hogar inteligente se publica bajo una licencia de código abierto, que se puede usar, inspeccionar y modificar libremente, y que normalmente se autoaloja en hardware que te pertenece. El código es público, no hay suscripción obligatoria para el núcleo y suele usar estándares abiertos como Zigbee, Matter y MQTT.",
  },
  {
    question: "¿Cuál es el mejor software de domótica de código abierto?",
    answer:
      "Las principales plataformas de código abierto son Gladys Assistant, Home Assistant, openHAB, Jeedom y Domoticz. Home Assistant tiene el mayor catálogo de integraciones, mientras que Gladys Assistant apuesta por la sencillez con una interfaz limpia, sin archivos de configuración y con una instalación de un solo comando, además de integraciones externas que cualquiera puede publicar y que se instalan con un clic. La mejor opción depende de si priorizas la flexibilidad pura o la facilidad de uso.",
  },
  {
    question: "¿Se necesita un hub para la domótica de código abierto?",
    answer:
      "No hace falta ningún hub propietario. Una plataforma de código abierto funciona en un pequeño ordenador que te pertenece, como una Raspberry Pi, un mini-PC o un NAS. Para controlar dispositivos inalámbricos, basta con añadir un dongle USB de radio (Zigbee o Z-Wave). Los equipos más recientes se conectan mediante los estándares abiertos Matter y Thread: los dispositivos Matter por Wi-Fi o Ethernet se unen directamente a tu red, mientras que los dispositivos Thread también necesitan un Thread Border Router, que puede ser un dispositivo que ya tienes o una configuración de código abierto en tu propio equipo con una radio 802.15.4. En cualquier caso, no hay que comprar ninguna caja de una marca concreta.",
  },
  {
    question: "¿La domótica de código abierto es gratuita?",
    answer:
      "Sí, el software principal es gratuito. Plataformas como Gladys Assistant (Apache 2.0) y Home Assistant no cuestan nada de descargar ni de usar en tu propio hardware. Algunos proyectos ofrecen servicios opcionales de pago (como el acceso remoto o la IA), pero nunca te obligan a suscribirte para que tu domótica siga funcionando.",
  },
  {
    question: "¿La domótica de código abierto es privada y segura?",
    answer:
      "Puede ser más privada que los productos cerrados en la nube. Como la mayoría de las plataformas de código abierto son autoalojadas, tus automatizaciones y tus datos se quedan en tu propia red en lugar de en los servidores de un fabricante, y como el código es público, cualquiera puede auditar lo que hace. La seguridad sigue dependiendo de mantener tu sistema actualizado, como con cualquier software.",
  },
  {
    question: "¿Hay que ser desarrollador para usar la domótica de código abierto?",
    answer:
      "No. Aunque algunas plataformas son bastante técnicas, Gladys Assistant está pensado para quienes no son desarrolladores: se instala con un solo comando Docker y todo se configura con unos clics en la interfaz, sin archivos de configuración.",
  },
  {
    question: "¿Bajo qué licencia se publica Gladys Assistant?",
    answer:
      "Gladys Assistant se publica bajo la licencia Apache 2.0, una licencia de código abierto permisiva. Todo el código fuente está disponible públicamente en GitHub, así que cualquiera puede leerlo, auditarlo, contribuir o bifurcarlo.",
  },
];

export default openSourceHomeAutomationContent;
