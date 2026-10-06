// Content for the "Best smart home hub" buyer's guide.
// The English version targets the US market ("best smart home hub 2026"),
// the French version the French "box domotique" market ("quelle box
// domotique choisir", "meilleure box domotique 2026") and is the one page that
// can sell the French starter kit. Prices and facts were checked in October
// 2026 (see the comments next to each row); street prices move, so keep the
// wording "about" / "from" and update them when they change.

const bestSmartHomeHubContent = {
  en: {
    meta: {
      title: "Best Smart Home Hub in 2026: Honest Comparison",
      description:
        "SmartThings, Hubitat, Homey Pro, Home Assistant Green, Aqara M3, Apple and Google hubs, or a mini-PC running Gladys: prices, protocols, local control and subscriptions, compared honestly.",
    },
    hero: {
      title: "The best smart home hub in 2026",
      subtitle:
        "A hub is the brain of your smart home. Here's how the main options compare on price, protocols, local control and lock-in, with no affiliate rankings.",
      intro: [
        "\"Smart home hub\" covers very different things: a cloud-first box tied to one ecosystem, a dedicated local hub, a streaming device that doubles as a Matter controller, or open-source software running on a small computer you own.",
        "We make Gladys Assistant, one of the options below, so we've kept this comparison factual: prices and features come from each vendor's own pages, checked in October 2026.",
      ],
    },
    picks: {
      title: "Quick picks",
      intro: "If you only read one section:",
      cards: [
        {
          tag: "Local, no lock-in",
          name: "Gladys Assistant on a mini-PC",
          text: "Free, open-source software on hardware you choose. Zigbee, Z-Wave, Matter and many brands, a modern interface, no mandatory subscription. Our own product, so judge with that in mind.",
          link: { label: "Best mini-PC for home automation →", href: "/mini-pc-home-automation/" },
        },
        {
          tag: "Plug-and-play local hub",
          name: "Hubitat Elevation C-8 Pro",
          text: "Zigbee and Z-Wave Long Range built in, automations that run on the hub. Proprietary, with a dated interface.",
          link: { label: "Gladys vs Hubitat →", href: "/hubitat-alternative/" },
        },
        {
          tag: "Polished all-in-one",
          name: "Homey Pro",
          text: "Every radio in one beautiful box, easy Flows. The most expensive option here.",
          link: { label: "Gladys vs Homey →", href: "/homey-alternative/" },
        },
        {
          tag: "Home Assistant users",
          name: "Home Assistant Green",
          text: "The easiest way into Home Assistant. Add Connect dongles for Zigbee, Thread or Z-Wave.",
          link: { label: "Home Assistant Green alternative →", href: "/home-assistant-green-alternative/" },
        },
      ],
    },
    table: {
      title: "Smart home hubs compared",
      intro: "The main options at a glance:",
      columns: ["Hub", "Price", "Zigbee / Z-Wave", "Matter / Thread", "Runs locally", "Subscription", "Open source"],
      rows: [
        // Gladys: free software; mini-PC prices from Beelink EQ14 / GMKtec G3 Plus reviews (Aug 2026).
        {
          name: "Gladys on a mini-PC",
          highlight: true,
          cells: ["Free software + mini-PC (about $190–270) + Zigbee dongle", "Yes, with USB dongles", "Matter controller; Thread devices shared from an Apple, Google or Amazon hub", "Yes", "Optional (Gladys Plus from $7.99/mo)", "Yes (Apache 2.0)"],
        },
        // home-assistant.io/green, nabucasa.com/pricing, ZBT-2 and ZWA-2 product pages.
        {
          name: "Home Assistant Green",
          cells: ["$199 (+ $49 ZBT-2, $69 ZWA-2)", "With the Connect ZBT-2 / ZWA-2 dongles", "Matter; Thread with the ZBT-2", "Yes", "Optional (Home Assistant Cloud $6.50/mo)", "Yes (Apache 2.0)"],
        },
        // hubitat.com/products, docs2.hubitat.com services.
        {
          name: "Hubitat Elevation C-8 Pro",
          cells: ["$184.95", "Both built in, Z-Wave Long Range", "Matter; Thread only on a special edition without Zigbee", "Yes", "Optional (Remote Admin, Hub Protect: $45/yr each)", "No"],
        },
        // homey.app/en-us/homey-pro (prices since June 1, 2026).
        {
          name: "Homey Pro",
          cells: ["$449 (Pro mini $249)", "Both built in (mini: Zigbee only)", "Matter and Thread border router", "Yes", "Optional (cloud backup $10/yr)", "No"],
        },
        // samsung.com Aeotec Smart Home Hub 2; SmartThings API plan from October 2026.
        {
          name: "SmartThings (Aeotec Smart Home Hub 2)",
          cells: ["$119.99", "Zigbee only, no Z-Wave", "Matter and Thread border router", "Partly: local drivers and automations, app through the cloud", "No for the app; API access $4.99/mo since Oct 2026", "No"],
        },
        // us.aqara.com/products/hub-m3.
        {
          name: "Aqara Hub M3",
          cells: ["$159.99", "Zigbee only", "Matter controller and bridge, Thread border router", "Yes, local automations", "None for hub features", "No"],
        },
        // aboutamazon.com fall 2025 lineup.
        {
          name: "Amazon Echo (Dot Max, Show 8)",
          cells: ["From $99.99", "Zigbee only", "Matter and Thread", "Mostly cloud (Alexa)", "No", "No"],
        },
        // macrumors.com roundups (prices since June 2026).
        {
          name: "Apple TV 4K / HomePod mini",
          cells: ["$249 (Ethernet, Thread) / $129", "No", "Matter and Thread border router", "Yes for Matter and HomeKit devices", "No", "No"],
        },
      ],
      outro:
        "Prices are list prices in USD, before tax, as of October 2026.",
    },
    criteria: {
      title: "How to choose",
      intro: "Five questions matter more than the spec sheet:",
      points: [
        "Which radios do your devices use? Zigbee and Z-Wave need a hub with those radios (or a USB dongle); Matter over Thread needs a Thread border router.",
        "Does it keep working without the internet? Local automations survive outages and vendor shutdowns; cloud ones don't.",
        "Is there a subscription, and what does it unlock? Remote access, backups and AI are often the paid parts.",
        "Who controls the roadmap? A proprietary hub can lose features or support; open-source software can be forked and kept alive.",
        "How much do you want to tinker? Some platforms reward hours of configuration; others aim to work out of the box.",
      ],
    },
    gladys: {
      title: "Our option: Gladys on a mini-PC",
      paragraphs: [
        "Gladys Assistant is free, open-source home automation that runs on your own mini-PC, Raspberry Pi or NAS. Add a Zigbee dongle and you get local control of Zigbee, Z-Wave (through Z-Wave JS UI), Matter, MQTT and many brands, with a modern interface and visual scenes.",
        "Gladys Plus is optional: encrypted remote access, backups, Alexa and Google Home, and an AI assistant, from $7.99/month in the US and Canada with a one-month free trial.",
      ],
      links: [
        { label: "Best mini-PC for home automation →", href: "/mini-pc-home-automation/" },
        { label: "Works with Gladys →", href: "/works-with/" },
      ],
    },
    related: {
      title: "Go further",
      intro: "Detailed comparisons:",
      links: [
        { label: "Hubitat alternative", href: "/hubitat-alternative/", text: "Gladys vs Hubitat Elevation in detail." },
        { label: "Homey alternative", href: "/homey-alternative/", text: "Gladys vs Homey Pro and Self-Hosted Server." },
        { label: "SmartThings alternative", href: "/smartthings-alternative/", text: "Moving from SmartThings to a local platform." },
        { label: "Home Assistant Green alternative", href: "/home-assistant-green-alternative/", text: "A local hub on your own mini-PC." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Build your hub on hardware you own",
      text: "Gladys is free, open source and installs with a single Docker command on a mini-PC or a Raspberry Pi.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Best mini-PC", href: "/mini-pc-home-automation/" },
    },
  },

  fr: {
    meta: {
      title: "Quelle box domotique choisir en 2026 ? Le comparatif honnête",
      description:
        "Jeedom, Homey Pro, Home Assistant Green, Somfy TaHoma, Aqara M3 ou un mini-PC avec Gladys : prix, protocoles, fonctionnement en local et abonnements, comparés honnêtement.",
    },
    hero: {
      title: "Quelle box domotique choisir en 2026 ?",
      subtitle:
        "La box est le cerveau de votre maison connectée. Voici comment se comparent les principales options sur le prix, les protocoles, le fonctionnement en local et la dépendance à un fabricant.",
      intro: [
        "« Box domotique » recouvre des choses très différentes : une box liée à un écosystème, une box locale dédiée, ou un logiciel open source qui tourne sur un petit ordinateur qui vous appartient.",
        "Nous développons Gladys Assistant, l'une des options ci-dessous : nous avons donc gardé ce comparatif factuel. Les prix et fonctionnalités viennent des pages de chaque fabricant, vérifiées en octobre 2026.",
      ],
    },
    picks: {
      title: "En bref",
      intro: "Si vous ne lisez qu'une section :",
      cards: [
        {
          tag: "Prêt à l'emploi",
          name: "Le kit de démarrage Gladys",
          text: "Un mini-PC Beelink avec Gladys installée et testée à la main, 6 mois de Gladys Plus, une formation vidéo et mon support direct. Notre propre produit : jugez en connaissance de cause.",
          link: { label: "Découvrir le kit →", href: "/starter-kit/" },
        },
        {
          tag: "Local, sans enfermement",
          name: "Gladys sur votre mini-PC",
          text: "Logiciel gratuit et open source sur le matériel de votre choix : Zigbee, Z-Wave, Matter et de nombreuses marques, sans abonnement obligatoire.",
          link: { label: "Quel mini-PC choisir →", href: "/mini-pc-home-automation/" },
        },
        {
          tag: "Box française historique",
          name: "Jeedom Luna ou Atlas",
          text: "Un écosystème de plugins très vaste, dont une partie payante. Riche, mais demande du temps.",
          link: { label: "Gladys vs Jeedom →", href: "/jeedom-vs-gladys-assistant/" },
        },
        {
          tag: "Tout-en-un soigné",
          name: "Homey Pro",
          text: "Toutes les radios dans un beau boîtier, des Flows faciles. L'option la plus chère.",
          link: { label: "Gladys vs Homey →", href: "/homey-alternative/" },
        },
      ],
    },
    table: {
      title: "Les box domotiques comparées",
      intro: "Les principales options en un coup d'œil :",
      columns: ["Box", "Prix", "Zigbee / Z-Wave", "Matter / Thread", "Fonctionne en local", "Abonnement", "Open source"],
      rows: [
        // Prix du kit affiché sur /starter-kit/, selon le modèle de mini-PC.
        {
          name: "Kit de démarrage Gladys",
          highlight: true,
          cells: ["Selon le mini-PC choisi, voir la page du kit", "Avec une clé USB (Zigbee via Zigbee2MQTT, Z-Wave via Z-Wave JS UI)", "Contrôleur Matter ; appareils Thread partagés depuis un hub Apple, Google ou Amazon", "Oui", "6 mois de Gladys Plus inclus, puis optionnel", "Oui (Apache 2.0)"],
        },
        {
          name: "Gladys sur votre mini-PC",
          highlight: true,
          cells: ["Logiciel gratuit + mini-PC + clé Zigbee", "Avec des clés USB", "Contrôleur Matter ; appareils Thread partagés depuis un hub Apple, Google ou Amazon", "Oui", "Optionnel (Gladys Plus dès 6,99 €/mois)", "Oui (Apache 2.0)"],
        },
        // Prix Domadoo (distributeur), octobre 2026 ; promotions fréquentes sur la Luna.
        {
          name: "Jeedom Luna / Atlas",
          cells: ["Luna 199 €, Atlas 249 €", "Luna : Zigbee et Z-Wave intégrés ; Atlas : selon la version", "Selon la box et les plugins", "Oui", "Service Pack Power inclus ; plugins payants à l'unité", "Cœur open source"],
        },
        // homey.app/fr-fr (prix depuis le 1er juin 2026).
        {
          name: "Homey Pro",
          cells: ["449 € (Pro mini 279 €)", "Intégrés (mini : Zigbee seulement)", "Matter et routeur de bordure Thread", "Oui", "Optionnel (sauvegarde cloud)", "Non"],
        },
        // home-assistant.io/green, nabucasa.com/pricing.
        {
          name: "Home Assistant Green",
          cells: ["179 € (+ 45 € ZBT-2, 59 € ZWA-2)", "Avec les clés Connect ZBT-2 / ZWA-2", "Matter ; Thread avec la ZBT-2", "Oui", "Optionnel (Home Assistant Cloud 7,50 €/mois)", "Oui (Apache 2.0)"],
        },
        // somfy.fr (prix conseillé 2026).
        {
          name: "Somfy TaHoma Switch",
          cells: ["149 €", "Zigbee 3.0 (plus io-homecontrol et RTS), pas de Z-Wave", "Pas de Matter natif", "Scénarios programmés oui ; pilotage à distance via le cloud", "Non", "Non"],
        },
        // shop.eedomus.com.
        {
          name: "eedomus+",
          cells: ["199 €", "Z-Wave+", "Non", "En partie, l'interface passe par les serveurs eedomus", "2 ans de service Basic inclus, Premium optionnel", "Non"],
        },
        // eu.aqara.com hub M3.
        {
          name: "Aqara Hub M3",
          cells: ["159,99 €", "Zigbee seulement", "Contrôleur et pont Matter, routeur de bordure Thread", "Oui, automatisations locales", "Aucun pour les fonctions du hub", "Non"],
        },
      ],
      outro:
        "Prix publics TTC en euros, constatés en octobre 2026.",
    },
    criteria: {
      title: "Comment choisir",
      intro: "Cinq questions comptent plus que la fiche technique :",
      points: [
        "Quels protocoles utilisent vos appareils ? Le Zigbee et le Z-Wave demandent une box avec ces radios (ou une clé USB) ; le Matter over Thread demande un routeur de bordure Thread.",
        "Est-ce que ça marche sans internet ? Les automatisations locales survivent aux coupures et aux arrêts de service ; celles dans le cloud, non.",
        "Y a-t-il un abonnement, et que débloque-t-il ? L'accès à distance, les sauvegardes et l'IA sont souvent les parties payantes.",
        "Qui décide de l'avenir du produit ? Une box propriétaire peut perdre des fonctions ou son support ; un logiciel open source peut être repris et maintenu.",
        "Combien de temps voulez-vous y passer ? Certaines plateformes récompensent des heures de configuration, d'autres visent à marcher tout de suite.",
      ],
    },
    gladys: {
      title: "Notre option : Gladys sur un mini-PC, ou le kit prêt à l'emploi",
      paragraphs: [
        "Gladys Assistant est une domotique gratuite et open source qui tourne sur votre mini-PC, Raspberry Pi ou NAS. Ajoutez une clé Zigbee et vous pilotez en local le Zigbee, le Z-Wave (via Z-Wave JS UI), Matter, MQTT et de nombreuses marques, avec une interface moderne et des scènes visuelles.",
        "Vous ne voulez rien installer ? Le kit de démarrage officiel est un mini-PC Beelink avec Gladys installée et testée à la main, 6 mois de Gladys Plus, une formation vidéo et mon support direct : il marche dès la sortie du carton. Gladys Plus (accès distant chiffré, sauvegardes, Alexa et Google Home, IA) est ensuite optionnel, à partir de 6,99 €/mois.",
      ],
      links: [
        { label: "Découvrir le kit de démarrage →", href: "/starter-kit/" },
        { label: "Quel mini-PC pour la domotique →", href: "/mini-pc-home-automation/" },
      ],
    },
    related: {
      title: "Aller plus loin",
      intro: "Les comparatifs détaillés :",
      links: [
        { label: "Gladys vs Jeedom", href: "/jeedom-vs-gladys-assistant/", text: "Un comparatif honnête avec la box domotique française." },
        { label: "Alternative à Homey", href: "/homey-alternative/", text: "Gladys face au Homey Pro et à Homey Self-Hosted Server." },
        { label: "Alternative au Home Assistant Green", href: "/home-assistant-green-alternative/", text: "Une box locale sur votre propre mini-PC." },
        { label: "Gladys vs Home Assistant", href: "/home-assistant-vs-gladys-assistant/", text: "Le comparatif fonction par fonction." },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Une box domotique qui vous appartient",
      text: "Gladys est gratuite, open source et s'installe en une commande Docker. Ou prenez le kit de démarrage, prêt à l'emploi.",
      primary: { label: "Le kit de démarrage", href: "/starter-kit/" },
      secondary: { label: "Installer Gladys", href: "/docs/" },
    },
  },

  de: {
    meta: {
      title: "Bester Smart-Home-Hub 2026: Der ehrliche Vergleich",
      description:
        "SmartThings, Hubitat, Homey Pro, Home Assistant Green, Aqara M3 oder Mini-PC mit Gladys: Preise, Protokolle, lokale Steuerung und Abos im Vergleich.",
    },
    hero: {
      title: "Der beste Smart-Home-Hub 2026",
      subtitle:
        "Der Hub ist das Gehirn deines Smart Home. So schneiden die wichtigsten Optionen bei Preis, Protokollen, lokaler Steuerung und Herstellerbindung ab – ohne Affiliate-Rankings.",
      intro: [
        "„Smart-Home-Hub“ kann sehr Unterschiedliches bedeuten: eine Cloud-Box, die an ein Ökosystem gebunden ist, eine dedizierte lokale Zentrale, ein Streaming-Gerät, das nebenbei als Matter-Controller dient, oder Open-Source-Software auf einem kleinen Rechner, der dir gehört.",
        "Wir entwickeln Gladys Assistant, eine der Optionen unten – deshalb haben wir diesen Vergleich bewusst sachlich gehalten: Preise und Funktionen stammen von den Seiten der jeweiligen Hersteller, geprüft im Oktober 2026.",
      ],
    },
    picks: {
      title: "Die Kurzempfehlungen",
      intro: "Falls du nur einen Abschnitt liest:",
      cards: [
        {
          tag: "Lokal, ohne Lock-in",
          name: "Gladys Assistant auf einem Mini-PC",
          text: "Kostenlose Open-Source-Software auf Hardware deiner Wahl. Zigbee, Z-Wave, Matter und viele Marken, eine moderne Oberfläche, kein Pflicht-Abo. Unser eigenes Produkt – berücksichtige das bei deinem Urteil.",
          link: { label: "Der beste Mini-PC für Hausautomation →", href: "/de/mini-pc-home-automation/" },
        },
        {
          tag: "Lokaler Hub für Plug-and-Play",
          name: "Hubitat Elevation C-8 Pro",
          text: "Zigbee und Z-Wave Long Range eingebaut, Automatisierungen laufen direkt auf dem Hub. Proprietär, mit veralteter Oberfläche.",
          link: { label: "Gladys vs. Hubitat →", href: "/de/hubitat-alternative/" },
        },
        {
          tag: "Ausgereifter Alleskönner",
          name: "Homey Pro",
          text: "Alle Funkstandards in einer schönen Box, einfache Flows. Die teuerste Option in diesem Vergleich.",
          link: { label: "Gladys vs. Homey →", href: "/de/homey-alternative/" },
        },
        {
          tag: "Für Home-Assistant-Nutzer",
          name: "Home Assistant Green",
          text: "Der einfachste Einstieg in Home Assistant. Mit den Connect-Sticks kommen Zigbee, Thread oder Z-Wave dazu.",
          link: { label: "Alternative zu Home Assistant Green →", href: "/de/home-assistant-green-alternative/" },
        },
      ],
    },
    table: {
      title: "Smart-Home-Hubs im Vergleich",
      intro: "Die wichtigsten Optionen auf einen Blick:",
      columns: ["Hub", "Preis", "Zigbee / Z-Wave", "Matter / Thread", "Läuft lokal", "Abo", "Open Source"],
      rows: [
        // Gladys: free software; mini-PC prices from Beelink EQ14 / GMKtec G3 Plus reviews (Aug 2026, USD);
        // Gladys Plus EU price as on the other German/French pages.
        {
          name: "Gladys auf einem Mini-PC",
          highlight: true,
          cells: ["Kostenlose Software + Mini-PC (ca. 190–270 $) + Zigbee-Stick", "Ja, mit USB-Sticks", "Matter-Controller; Thread-Geräte werden von einem Apple-, Google- oder Amazon-Hub geteilt", "Ja", "Optional (Gladys Plus ab 6,99 €/Monat)", "Ja (Apache 2.0)"],
        },
        // EU prices as checked for the French page (home-assistant.io/green, nabucasa.com/pricing).
        {
          name: "Home Assistant Green",
          cells: ["179 € (+ 45 € ZBT-2, 59 € ZWA-2)", "Mit den Connect-Sticks ZBT-2 / ZWA-2", "Matter; Thread mit dem ZBT-2", "Ja", "Optional (Home Assistant Cloud 7,50 €/Monat)", "Ja (Apache 2.0)"],
        },
        // hubitat.com/products, docs2.hubitat.com services (US prices).
        {
          name: "Hubitat Elevation C-8 Pro",
          cells: ["184,95 $", "Beides eingebaut, Z-Wave Long Range", "Matter; Thread nur in einer Sonderedition ohne Zigbee", "Ja", "Optional (Remote Admin, Hub Protect: je 45 $/Jahr)", "Nein"],
        },
        // homey.app (EU prices since June 1, 2026, as on the French page).
        {
          name: "Homey Pro",
          cells: ["449 € (Pro mini 279 €)", "Beides eingebaut (mini: nur Zigbee)", "Matter und Thread-Border-Router", "Ja", "Optional (Cloud-Backup)", "Nein"],
        },
        // samsung.com Aeotec Smart Home Hub 2; SmartThings API plan from October 2026 (US prices).
        {
          name: "SmartThings (Aeotec Smart Home Hub 2)",
          cells: ["119,99 $", "Nur Zigbee, kein Z-Wave", "Matter und Thread-Border-Router", "Teilweise: lokale Treiber und Automatisierungen, App über die Cloud", "Nein für die App; API-Zugang 4,99 $/Monat seit Okt. 2026", "Nein"],
        },
        // eu.aqara.com hub M3.
        {
          name: "Aqara Hub M3",
          cells: ["159,99 €", "Nur Zigbee", "Matter-Controller und -Bridge, Thread-Border-Router", "Ja, lokale Automatisierungen", "Keins für die Hub-Funktionen", "Nein"],
        },
        // aboutamazon.com fall 2025 lineup (US prices).
        {
          name: "Amazon Echo (Dot Max, Show 8)",
          cells: ["Ab 99,99 $", "Nur Zigbee", "Matter und Thread", "Überwiegend Cloud (Alexa)", "Nein", "Nein"],
        },
        // macrumors.com roundups (US prices since June 2026).
        {
          name: "Apple TV 4K / HomePod mini",
          cells: ["249 $ (Ethernet, Thread) / 129 $", "Nein", "Matter und Thread-Border-Router", "Ja, für Matter- und HomeKit-Geräte", "Nein", "Nein"],
        },
      ],
      outro:
        "Preise in Euro: Listenpreise inkl. MwSt. laut europäischen Herstellerseiten; Preise in Dollar: US-Listenpreise vor Steuern. Stand: Oktober 2026.",
    },
    criteria: {
      title: "So triffst du die richtige Wahl",
      intro: "Fünf Fragen zählen mehr als das Datenblatt:",
      points: [
        "Welche Funkstandards nutzen deine Geräte? Zigbee und Z-Wave brauchen einen Hub mit diesen Funkmodulen (oder einen USB-Stick); Matter over Thread braucht einen Thread-Border-Router.",
        "Funktioniert es auch ohne Internet? Lokale Automatisierungen überstehen Ausfälle und das Aus eines Herstellers, Cloud-Automatisierungen nicht.",
        "Gibt es ein Abo, und was schaltet es frei? Fernzugriff, Backups und KI sind oft die kostenpflichtigen Teile.",
        "Wer bestimmt über die Zukunft des Produkts? Ein proprietärer Hub kann Funktionen oder Support verlieren; Open-Source-Software kann geforkt und weitergepflegt werden.",
        "Wie viel willst du tüfteln? Manche Plattformen belohnen stundenlanges Konfigurieren, andere sollen sofort funktionieren.",
      ],
    },
    gladys: {
      title: "Unsere Option: Gladys auf einem Mini-PC",
      paragraphs: [
        "Gladys Assistant ist eine kostenlose Open-Source-Hausautomation, die auf deinem eigenen Mini-PC, Raspberry Pi oder NAS läuft. Mit einem Zigbee-Stick steuerst du Zigbee, Z-Wave (über Z-Wave JS UI), Matter, MQTT und viele Marken lokal – mit moderner Oberfläche und visuellen Szenen.",
        "Gladys Plus ist optional: verschlüsselter Fernzugriff, Backups, Alexa und Google Home sowie ein KI-Assistent, ab 6,99 €/Monat in Europa, mit einem kostenlosen Probemonat.",
      ],
      links: [
        { label: "Der beste Mini-PC für Hausautomation →", href: "/de/mini-pc-home-automation/" },
        { label: "Funktioniert mit Gladys →", href: "/de/works-with/" },
      ],
    },
    related: {
      title: "Weiterlesen",
      intro: "Ausführliche Vergleiche:",
      links: [
        { label: "Hubitat-Alternative", href: "/de/hubitat-alternative/", text: "Gladys vs. Hubitat Elevation im Detail." },
        { label: "Homey-Alternative", href: "/de/homey-alternative/", text: "Gladys vs. Homey Pro und Self-Hosted Server." },
        { label: "SmartThings-Alternative", href: "/de/smartthings-alternative/", text: "Der Umstieg von SmartThings auf eine lokale Plattform." },
        { label: "Alternative zu Home Assistant Green", href: "/de/home-assistant-green-alternative/", text: "Eine lokale Zentrale auf deinem eigenen Mini-PC." },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Bau deinen Hub auf Hardware, die dir gehört",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl auf einem Mini-PC oder Raspberry Pi installiert.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Der beste Mini-PC", href: "/de/mini-pc-home-automation/" },
    },
  },
};

export const bestSmartHomeHubFaqEn = [
  {
    question: "What is the best smart home hub in 2026?",
    answer:
      "It depends on what you value. For local control without lock-in, open-source software like Gladys Assistant or Home Assistant on a small computer. For a plug-and-play local box with Z-Wave, Hubitat. For an all-in-one polished experience, Homey Pro. For the cheapest entry into an ecosystem, SmartThings or an Echo, at the cost of more cloud dependence.",
  },
  {
    question: "Do I need a hub for Matter?",
    answer:
      "You need a Matter controller, and for Matter over Thread devices, a Thread border router. Many devices you may already own act as both, such as an Apple TV 4K (Ethernet model), a HomePod mini, a Google TV Streamer, recent Echo devices, the Aqara M3 or the SmartThings Hub 2. Gladys is a Matter controller and uses an existing Thread border router.",
  },
  {
    question: "Which smart home hubs support Z-Wave?",
    answer:
      "Hubitat and Homey Pro have Z-Wave built in, and Home Assistant Green and Gladys support it with a USB stick. The current SmartThings hub (Aeotec Smart Home Hub 2) and Amazon Echo devices don't have Z-Wave.",
  },
  {
    question: "Is there a smart home hub without a subscription?",
    answer:
      "Yes, most hubs work without one; subscriptions usually add remote access, backups or extras. Gladys, Home Assistant, Hubitat, Homey and Aqara all work locally for free, with optional paid services. SmartThings' app and hub stay free; since October 2026, only API access for third-party integrations requires a $4.99/month personal plan.",
  },
  {
    question: "Can a mini-PC replace a smart home hub?",
    answer:
      "Yes. A small Intel mini-PC running Gladys Assistant or Home Assistant, plus a Zigbee or Z-Wave USB dongle, does everything a dedicated hub does, usually with more power and storage, and you choose the hardware.",
  },
];

export const bestSmartHomeHubFaqFr = [
  {
    question: "Quelle est la meilleure box domotique en 2026 ?",
    answer:
      "Tout dépend de ce qui compte pour vous. Pour le contrôle local sans enfermement, un logiciel open source comme Gladys Assistant ou Home Assistant sur un petit ordinateur, ou le kit de démarrage Gladys prêt à l'emploi. Pour un écosystème de plugins très vaste, Jeedom. Pour un tout-en-un soigné, Homey Pro. Pour les volets Somfy, la TaHoma Switch.",
  },
  {
    question: "Jeedom ou Gladys ?",
    answer:
      "Les deux sont open source et fonctionnent en local. Jeedom mise sur un très grand catalogue de plugins, dont une partie payante ; Gladys mise sur la simplicité, une interface moderne et des intégrations toutes gratuites. Notre comparatif détaillé Gladys vs Jeedom entre dans le détail.",
  },
  {
    question: "Faut-il une box compatible Matter ?",
    answer:
      "Il faut un contrôleur Matter, et pour les appareils Matter over Thread, un routeur de bordure Thread. Beaucoup d'appareils que vous avez peut-être déjà jouent ce rôle (Apple TV, HomePod mini, Google TV Streamer, enceintes Echo récentes, Aqara M3). Gladys est un contrôleur Matter et s'appuie sur un routeur de bordure Thread existant.",
  },
  {
    question: "Existe-t-il une box domotique sans abonnement ?",
    answer:
      "Oui, la plupart fonctionnent sans abonnement ; les abonnements ajoutent en général l'accès à distance, les sauvegardes ou des services. Gladys, Home Assistant, Homey, Jeedom et la TaHoma Switch fonctionnent sans abonnement obligatoire.",
  },
  {
    question: "Existe-t-il une box domotique prête à l'emploi avec Gladys ?",
    answer:
      "Oui : le kit de démarrage officiel est un mini-PC Beelink avec Gladys installée et testée à la main, 6 mois de Gladys Plus, une formation vidéo et un support direct. Il fonctionne dès la sortie du carton.",
  },
];

export const bestSmartHomeHubFaqDe = [
  {
    question: "Welcher ist der beste Smart-Home-Hub 2026?",
    answer:
      "Das hängt davon ab, was dir wichtig ist. Für lokale Steuerung ohne Lock-in: Open-Source-Software wie Gladys Assistant oder Home Assistant auf einem kleinen Rechner. Für eine lokale Plug-and-Play-Box mit Z-Wave: Hubitat. Für einen ausgereiften Alleskönner: Homey Pro. Für den günstigsten Einstieg in ein Ökosystem: SmartThings oder ein Echo – dafür mit mehr Cloud-Abhängigkeit.",
  },
  {
    question: "Brauche ich einen Hub für Matter?",
    answer:
      "Du brauchst einen Matter-Controller und für Matter-over-Thread-Geräte einen Thread-Border-Router. Viele Geräte, die du vielleicht schon hast, übernehmen beides, etwa ein Apple TV 4K (Ethernet-Modell), ein HomePod mini, ein Google TV Streamer, aktuelle Echo-Geräte, der Aqara M3 oder der SmartThings Hub 2. Gladys ist ein Matter-Controller und nutzt einen vorhandenen Thread-Border-Router.",
  },
  {
    question: "Welche Smart-Home-Hubs unterstützen Z-Wave?",
    answer:
      "Hubitat und Homey Pro haben Z-Wave eingebaut, Home Assistant Green und Gladys unterstützen es mit einem USB-Stick. Der aktuelle SmartThings-Hub (Aeotec Smart Home Hub 2) und Amazon-Echo-Geräte haben kein Z-Wave.",
  },
  {
    question: "Gibt es einen Smart-Home-Hub ohne Abo?",
    answer:
      "Ja, die meisten Hubs funktionieren ohne; Abos bringen meist Fernzugriff, Backups oder Extras. Gladys, Home Assistant, Hubitat, Homey und Aqara laufen alle kostenlos lokal, mit optionalen kostenpflichtigen Diensten. App und Hub von SmartThings bleiben kostenlos; seit Oktober 2026 erfordert nur der API-Zugang für Drittanbieter-Integrationen einen persönlichen Tarif für 4,99 $/Monat.",
  },
  {
    question: "Kann ein Mini-PC einen Smart-Home-Hub ersetzen?",
    answer:
      "Ja. Ein kleiner Intel-Mini-PC mit Gladys Assistant oder Home Assistant und einem Zigbee- oder Z-Wave-USB-Stick kann alles, was ein dedizierter Hub kann – meist mit mehr Leistung und Speicher, und du wählst die Hardware selbst.",
  },
];

export default bestSmartHomeHubContent;
