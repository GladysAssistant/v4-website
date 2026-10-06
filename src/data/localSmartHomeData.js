// Content for the "local / private smart home" pillar page.
// Unlike the comparison and alternative pages (which target a specific
// competitor), this is a foundational, evergreen guide targeting the broad
// "local smart home / smart home without cloud / private home automation"
// intent. It explains why local matters, what it means, and how to build one,
// and it links out to the comparison/alternative pages to build internal mesh.

const localSmartHomeContent = {
  en: {
    meta: {
      title: "Local Smart Home Without the Cloud: Setup Guide",
      description:
        "How to build a private smart home that keeps working when the internet goes down: which devices run locally (Zigbee, Matter, MQTT), which hub to use, and how to self-host it with free, open-source software.",
    },
    hero: {
      title: "Build a 100% local, private smart home",
      subtitle:
        "No cloud, no recordings, no data resale: a smart home that runs at home and answers only to you.",
      intro: [
        "Most smart home gadgets send everything they see and hear to a manufacturer's cloud. Your routines, your presence, sometimes your voice and your camera feeds all leave your home, and you have to trust they'll be kept secure and not switched off when the company changes its mind.",
        "A local smart home flips that around. Your devices, your automations and your data stay on your own network. It keeps working without an internet connection, it doesn't depend on a subscription to stay alive, and nobody profiles you from it. This guide explains why it matters, what \"local\" really means, and how to build one.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Explore the integrations →",
        href: "/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Why your smart home shouldn't live in the cloud",
      intro:
        "Cloud-based smart homes are convenient on day one, but you're effectively renting your home automation from a third party. The trade-offs add up:",
      points: [
        "Privacy: your habits, presence, voice and camera data are sent to servers you don't control, and can be stored, analyzed or used for advertising.",
        "Dependence: if your internet drops or the vendor's servers go down, your lights, locks and routines can stop responding.",
        "Discontinuation: cloud devices get bricked when a company shuts down a product line or gets acquired, even if the hardware is perfectly fine.",
        "Latency: a tap or a sensor often has to make a round trip to a distant server before anything happens at home.",
        "Lock-in: each ecosystem pushes you to buy its own accessories and keeps your data inside its app.",
        "Cost: more and more features keep moving behind monthly subscriptions.",
      ],
      outro:
        "None of this means cloud devices are useless, but they shouldn't be the foundation your whole home depends on.",
    },
    definition: {
      title: "What is a local smart home?",
      intro:
        "A local (or self-hosted) smart home runs the brain of your home on hardware you own, on your own network. In practice, that means:",
      points: [
        "Your automations run on a device in your home, not on a remote server.",
        "It keeps working offline: no internet, no problem for your core scenes.",
        "Your data stays on your local network, with no mandatory cloud account.",
        "You control updates, and you can't be cut off because a service was discontinued.",
        "It's built on open standards, so you're free to mix brands and avoid lock-in.",
      ],
      outro:
        "Remote access and AI are still possible, but they become an option you switch on, not a requirement you're forced into.",
    },
    howTo: {
      title: "How to build a local smart home",
      cards: [
        {
          icon: "🧠",
          title: "A local hub",
          text: "Start with a self-hosted controller that runs at home and orchestrates everything. This is the brain of your setup, and it's where Gladys Assistant comes in.",
        },
        {
          icon: "🔌",
          title: "Open standards over cloud gadgets",
          text: "Prefer devices that speak Zigbee, Matter or MQTT instead of Wi-Fi gadgets that only work through a vendor's app and cloud.",
        },
        {
          icon: "🖥️",
          title: "Your own hardware",
          text: "Run it on a Raspberry Pi, a mini-PC or a NAS you already own. A small, low-power machine is plenty for most homes.",
        },
        {
          icon: "⚙️",
          title: "A real automation engine",
          text: "Build scenes with triggers, conditions and actions so your home reacts on its own, all evaluated locally.",
        },
        {
          icon: "🎙️",
          title: "Voice & AI on your terms (optional)",
          text: "Hands-free voice and AI assistance are optional. When you use them, requests go through a private, secure cloud run by an independent project, with no ads and no data resale, never a big-tech assistant that profiles you.",
        },
        {
          icon: "🔐",
          title: "Remote access on your terms",
          text: "When you want to check in from outside, use end-to-end encrypted remote access instead of opening your home to a third party.",
        },
      ],
    },
    gladys: {
      title: "Gladys Assistant: a local-first foundation",
      paragraphs: [
        "Gladys Assistant is a free, open-source, self-hosted smart home platform built exactly on these principles. It installs in a single Docker command on a Raspberry Pi, mini-PC or NAS, and runs entirely on your local network.",
        "Everything is configured from a clean interface, with no configuration files. It's built around open standards (Zigbee, Matter, MQTT) and a full local automation engine, so your everyday scenes run entirely at home. Optional features like voice, AI and remote access do rely on the cloud, but a private, secure one from an independent project: no ads, no data resale, and end-to-end encrypted remote access.",
      ],
      link: { label: "Get started with Gladys →", href: "/docs/" },
    },
    related: {
      title: "Replace the cloud, piece by piece",
      intro:
        "You don't have to switch everything at once. These guides show how to move away from the most common cloud services while keeping the convenience:",
      links: [
        {
          label: "Alexa alternative",
          href: "/alexa-alternative/",
          text: "Keep voice control without sending everything you say to Amazon's cloud.",
        },
        {
          label: "Google Home alternative",
          href: "/google-home-alternative/",
          text: "A private, local alternative to Google Home and Google Assistant.",
        },
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
          label: "Control your home with AI",
          href: "/ai-smart-home/",
          text: "Keep the convenience of AI and voice control, on a private cloud, not a big-tech assistant.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Start building your local smart home",
      text: "Gladys is free, open-source, and installs in a single Docker command. Local-first, self-hosted, no cloud required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Discover Gladys Plus", href: "/plus/" },
    },
  },

  fr: {
    meta: {
      title: "Comment créer une maison connectée 100% locale et privée (sans cloud)",
      description:
        "Le guide complet pour construire une maison connectée locale et privée qui fonctionne sans le cloud : pourquoi c'est important, ce que « local » veut vraiment dire, et comment faire avec des standards ouverts et un logiciel open source auto-hébergé.",
    },
    hero: {
      title: "Créez une maison connectée 100% locale et privée",
      subtitle:
        "Sans cloud, sans enregistrements, sans revente de données : une maison connectée qui tourne chez vous et ne répond qu'à vous.",
      intro: [
        "La plupart des objets connectés envoient tout ce qu'ils voient et entendent vers le cloud d'un fabricant. Vos routines, votre présence, parfois votre voix et vos flux de caméras quittent votre domicile, et vous devez faire confiance au fait que tout sera bien sécurisé et ne sera pas coupé du jour au lendemain.",
        "Une maison connectée locale inverse la logique. Vos appareils, vos automatisations et vos données restent sur votre propre réseau. Elle continue de fonctionner sans connexion internet, ne dépend d'aucun abonnement pour rester en vie, et personne ne vous profile à partir d'elle. Ce guide explique pourquoi c'est important, ce que « local » veut vraiment dire, et comment en construire une.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Voir les intégrations →",
        href: "/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Pourquoi votre maison connectée ne devrait pas vivre dans le cloud",
      intro:
        "Une maison connectée dans le cloud est pratique le premier jour, mais vous louez en fait votre domotique à un tiers. Les compromis s'accumulent :",
      points: [
        "Vie privée : vos habitudes, votre présence, votre voix et vos données de caméra partent vers des serveurs que vous ne contrôlez pas, et peuvent être stockées, analysées ou utilisées à des fins publicitaires.",
        "Dépendance : si votre internet tombe ou si les serveurs du fabricant sont en panne, vos lumières, serrures et routines peuvent cesser de répondre.",
        "Arrêt produit : un appareil cloud devient inutilisable quand une entreprise arrête une gamme ou se fait racheter, même si le matériel fonctionne parfaitement.",
        "Latence : un appui ou un capteur doit souvent faire un aller-retour vers un serveur lointain avant que quoi que ce soit ne se passe chez vous.",
        "Enfermement : chaque écosystème vous pousse à acheter ses propres accessoires et garde vos données dans son application.",
        "Coût : de plus en plus de fonctions passent derrière des abonnements mensuels.",
      ],
      outro:
        "Rien de tout cela ne rend les objets cloud inutiles, mais ils ne devraient pas être la fondation dont dépend toute votre maison.",
    },
    definition: {
      title: "Qu'est-ce qu'une maison connectée locale ?",
      intro:
        "Une maison connectée locale (ou auto-hébergée) fait tourner le cerveau de votre maison sur du matériel qui vous appartient, sur votre propre réseau. Concrètement, cela veut dire :",
      points: [
        "Vos automatisations s'exécutent sur un appareil chez vous, pas sur un serveur distant.",
        "Elle continue de fonctionner hors ligne : pas d'internet, aucun souci pour vos scènes essentielles.",
        "Vos données restent sur votre réseau local, sans compte cloud obligatoire.",
        "Vous maîtrisez les mises à jour, et personne ne peut vous couper l'accès parce qu'un service a été arrêté.",
        "Elle repose sur des standards ouverts : vous êtes libre de mélanger les marques et d'éviter l'enfermement.",
      ],
      outro:
        "L'accès distant et l'IA restent possibles, mais ils deviennent une option que vous activez, pas une obligation qu'on vous impose.",
    },
    howTo: {
      title: "Comment construire une maison connectée locale",
      cards: [
        {
          icon: "🧠",
          title: "Un hub local",
          text: "Commencez par un contrôleur auto-hébergé qui tourne chez vous et orchestre tout. C'est le cerveau de votre installation, et c'est là qu'intervient Gladys Assistant.",
        },
        {
          icon: "🔌",
          title: "Des standards ouverts plutôt que des gadgets cloud",
          text: "Privilégiez les appareils qui parlent Zigbee, Matter ou MQTT plutôt que des gadgets Wi-Fi qui ne fonctionnent qu'à travers l'app et le cloud d'un fabricant.",
        },
        {
          icon: "🖥️",
          title: "Votre propre matériel",
          text: "Faites-la tourner sur un Raspberry Pi, un mini-PC ou un NAS que vous avez déjà. Une petite machine peu gourmande suffit largement pour la plupart des foyers.",
        },
        {
          icon: "⚙️",
          title: "Un vrai moteur d'automatisation",
          text: "Construisez des scènes avec déclencheurs, conditions et actions pour que votre maison réagisse d'elle-même, le tout évalué en local.",
        },
        {
          icon: "🎙️",
          title: "Le vocal et l'IA à vos conditions (optionnel)",
          text: "Le vocal mains libres et l'assistance IA sont optionnels. Quand vous les utilisez, les requêtes passent par un cloud souverain hébergé en France, sans publicité ni revente de données, et jamais par l'assistant d'un géant de la tech qui vous profile.",
        },
        {
          icon: "🔐",
          title: "L'accès distant à vos conditions",
          text: "Quand vous voulez garder un œil depuis l'extérieur, utilisez un accès distant chiffré de bout en bout plutôt que d'ouvrir votre maison à un tiers.",
        },
      ],
    },
    gladys: {
      title: "Gladys Assistant : une fondation locale d'abord",
      paragraphs: [
        "Gladys Assistant est une plateforme domotique gratuite, open source et auto-hébergée, bâtie exactement sur ces principes. Elle s'installe en une seule commande Docker sur un Raspberry Pi, un mini-PC ou un NAS, et tourne entièrement sur votre réseau local.",
        "Tout se configure depuis une interface épurée, sans fichiers de configuration. Elle repose sur des standards ouverts (Zigbee, Matter, MQTT) et un vrai moteur d'automatisation local : vos scènes du quotidien tournent entièrement chez vous. Les fonctions optionnelles comme le vocal, l'IA et l'accès distant reposent, elles, sur le cloud, mais un cloud souverain hébergé en France, porté par un projet indépendant : sans publicité, sans revente de données, et un accès distant chiffré de bout en bout.",
      ],
      link: { label: "Commencer avec Gladys →", href: "/docs/" },
    },
    related: {
      title: "Remplacez le cloud, pièce par pièce",
      intro:
        "Vous n'êtes pas obligé de tout changer d'un coup. Ces guides montrent comment quitter les services cloud les plus courants tout en gardant le confort :",
      links: [
        {
          label: "Alternative à Alexa",
          href: "/alexa-alternative/",
          text: "Gardez le contrôle vocal sans envoyer tout ce que vous dites au cloud d'Amazon.",
        },
        {
          label: "Alternative à Google Home",
          href: "/google-home-alternative/",
          text: "Une alternative locale et privée à Google Home et Google Assistant.",
        },
        {
          label: "Alternative à Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Une plateforme open source locale et plus simple, sans le YAML ni la courbe d'apprentissage raide.",
        },
        {
          label: "Contrôler sa maison avec l'IA",
          href: "/ai-smart-home/",
          text: "Gardez le confort de l'IA et du contrôle vocal, sur un cloud privé, pas l'assistant d'un géant de la tech.",
        },
        {
          label: "Gladys vs Home Assistant",
          href: "/home-assistant-vs-gladys-assistant/",
          text: "Comment se comparent vraiment les deux principales plateformes open source et locales.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Lancez-vous dans votre maison connectée locale",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Locale d'abord, auto-hébergée, sans cloud obligatoire.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Découvrir Gladys Plus", href: "/plus/" },
    },
  },

  de: {
    meta: {
      title: "Smart Home ohne Cloud: lokal & privat einrichten",
      description:
        "So baust du ein privates Smart Home, das auch ohne Internet läuft: lokale Geräte (Zigbee, Matter, MQTT), passende Zentrale, kostenlose Open-Source-Software.",
    },
    hero: {
      title: "Ein 100 % lokales, privates Smart Home bauen",
      subtitle:
        "Keine Cloud, keine Aufzeichnungen, kein Datenverkauf: ein Smart Home, das bei dir zu Hause läuft und nur auf dich hört.",
      intro: [
        "Die meisten Smart-Home-Geräte schicken alles, was sie sehen und hören, in die Cloud des Herstellers. Deine Routinen, deine Anwesenheit, manchmal deine Stimme und deine Kamerabilder verlassen dein Zuhause, und du musst darauf vertrauen, dass sie sicher aufbewahrt werden und der Dienst nicht abgeschaltet wird, wenn das Unternehmen es sich anders überlegt.",
        "Ein lokales Smart Home dreht das um. Deine Geräte, deine Automationen und deine Daten bleiben in deinem eigenen Netzwerk. Es funktioniert auch ohne Internetverbindung, hängt nicht von einem Abo ab, und niemand erstellt daraus ein Profil von dir. Dieser Guide erklärt, warum das wichtig ist, was „lokal“ wirklich bedeutet und wie du dein eigenes lokales Smart Home aufbaust.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/de/docs/" },
      secondaryCta: {
        label: "Integrationen entdecken →",
        href: "/de/docs/integrations/",
      },
    },
    whyCloud: {
      title: "Warum dein Smart Home nicht in der Cloud leben sollte",
      intro:
        "Cloud-basierte Smart Homes sind am ersten Tag bequem, aber im Grunde mietest du deine Hausautomation bei einem Dritten. Die Nachteile summieren sich:",
      points: [
        "Datenschutz: Deine Gewohnheiten, deine Anwesenheit, deine Stimme und deine Kameradaten landen auf Servern, die du nicht kontrollierst, und können gespeichert, ausgewertet oder für Werbung genutzt werden.",
        "Abhängigkeit: Fällt dein Internet oder der Server des Herstellers aus, reagieren Licht, Schlösser und Routinen womöglich nicht mehr.",
        "Produkt-Aus: Cloud-Geräte werden zu Elektroschrott, wenn ein Unternehmen eine Produktlinie einstellt oder übernommen wird, selbst wenn die Hardware einwandfrei ist.",
        "Latenz: Ein Tastendruck oder ein Sensorsignal muss oft erst den Umweg über einen weit entfernten Server nehmen, bevor zu Hause etwas passiert.",
        "Lock-in: Jedes Ökosystem drängt dich, sein eigenes Zubehör zu kaufen, und hält deine Daten in seiner App fest.",
        "Kosten: Immer mehr Funktionen wandern hinter monatliche Abos.",
      ],
      outro:
        "Das heißt nicht, dass Cloud-Geräte nutzlos sind, aber sie sollten nicht das Fundament sein, von dem dein ganzes Zuhause abhängt.",
    },
    definition: {
      title: "Was ist ein lokales Smart Home?",
      intro:
        "Ein lokales (oder selbst gehostetes) Smart Home betreibt das Gehirn deines Zuhauses auf Hardware, die dir gehört, in deinem eigenen Netzwerk. Konkret heißt das:",
      points: [
        "Deine Automationen laufen auf einem Gerät bei dir zu Hause, nicht auf einem entfernten Server.",
        "Es funktioniert offline: Kein Internet ist kein Problem für deine wichtigsten Szenen.",
        "Deine Daten bleiben in deinem lokalen Netzwerk, ohne Pflicht-Konto in der Cloud.",
        "Du bestimmst über Updates, und niemand kann dir den Stecker ziehen, weil ein Dienst eingestellt wurde.",
        "Es basiert auf offenen Standards, sodass du Marken frei kombinieren und Lock-in vermeiden kannst.",
      ],
      outro:
        "Fernzugriff und KI sind trotzdem möglich, aber sie werden zu einer Option, die du einschaltest, statt zu einer Pflicht, die dir aufgezwungen wird.",
    },
    howTo: {
      title: "So baust du ein lokales Smart Home",
      cards: [
        {
          icon: "🧠",
          title: "Eine lokale Zentrale",
          text: "Starte mit einer selbst gehosteten Steuerzentrale, die bei dir zu Hause läuft und alles koordiniert. Sie ist das Gehirn deines Setups, und genau hier kommt Gladys Assistant ins Spiel.",
        },
        {
          icon: "🔌",
          title: "Offene Standards statt Cloud-Gadgets",
          text: "Setze auf Geräte mit Zigbee, Matter oder MQTT statt auf WLAN-Gadgets, die nur über die App und Cloud des Herstellers funktionieren.",
        },
        {
          icon: "🖥️",
          title: "Deine eigene Hardware",
          text: "Betreibe alles auf einem Raspberry Pi, einem Mini-PC oder einem NAS, den du schon hast. Ein kleiner, sparsamer Rechner reicht für die meisten Haushalte völlig aus.",
        },
        {
          icon: "⚙️",
          title: "Eine echte Automations-Engine",
          text: "Baue Szenen mit Auslösern, Bedingungen und Aktionen, damit dein Zuhause selbstständig reagiert, alles lokal ausgewertet.",
        },
        {
          icon: "🎙️",
          title: "Sprache & KI zu deinen Bedingungen (optional)",
          text: "Freihändige Sprachsteuerung und KI-Unterstützung sind optional. Wenn du sie nutzt, laufen Anfragen über eine private, sichere Cloud eines unabhängigen Projekts, ohne Werbung und ohne Datenverkauf, nie über den Assistenten eines Tech-Riesen, der ein Profil von dir anlegt.",
        },
        {
          icon: "🔐",
          title: "Fernzugriff zu deinen Bedingungen",
          text: "Wenn du von unterwegs nach dem Rechten sehen willst, nutze einen Ende-zu-Ende-verschlüsselten Fernzugriff, statt dein Zuhause für einen Dritten zu öffnen.",
        },
      ],
    },
    gladys: {
      title: "Gladys Assistant: ein lokales Fundament",
      paragraphs: [
        "Gladys Assistant ist eine kostenlose, quelloffene und selbst gehostete Smart-Home-Plattform, die genau auf diesen Prinzipien aufbaut. Sie wird mit einem einzigen Docker-Befehl auf einem Raspberry Pi, Mini-PC oder NAS installiert und läuft vollständig in deinem lokalen Netzwerk.",
        "Alles wird über eine aufgeräumte Oberfläche eingerichtet, ohne Konfigurationsdateien. Gladys setzt auf offene Standards (Zigbee, Matter, MQTT) und eine vollwertige lokale Automations-Engine, sodass deine alltäglichen Szenen komplett zu Hause laufen. Optionale Funktionen wie Sprachsteuerung, KI und Fernzugriff nutzen zwar die Cloud, aber eine private, sichere Cloud eines unabhängigen Projekts: keine Werbung, kein Datenverkauf und ein Ende-zu-Ende-verschlüsselter Fernzugriff.",
      ],
      link: { label: "Mit Gladys starten →", href: "/de/docs/" },
    },
    related: {
      title: "Die Cloud Schritt für Schritt ersetzen",
      intro:
        "Du musst nicht alles auf einmal umstellen. Diese Guides zeigen, wie du dich von den gängigsten Cloud-Diensten löst, ohne auf Komfort zu verzichten:",
      links: [
        {
          label: "Alexa Alternative",
          href: "/de/alexa-alternative/",
          text: "Behalte die Sprachsteuerung, ohne alles, was du sagst, in die Cloud von Amazon zu schicken.",
        },
        {
          label: "Google Home Alternative",
          href: "/de/google-home-alternative/",
          text: "Eine private, lokale Alternative zu Google Home und Google Assistant.",
        },
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
          label: "Dein Zuhause mit KI steuern",
          href: "/de/ai-smart-home/",
          text: "Behalte den Komfort von KI und Sprachsteuerung, auf einer privaten Cloud statt beim Assistenten eines Tech-Riesen.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Bau jetzt dein lokales Smart Home",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Lokal zuerst, selbst gehostet, keine Cloud nötig.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Gladys Plus entdecken", href: "/de/plus/" },
    },
  },
};

export const localSmartHomeFaqEn = [
  {
    question: "What is a local smart home?",
    answer:
      "A local smart home runs the brain of your home, the automation engine and your data, on hardware you own, on your own network, instead of in a manufacturer's cloud. It keeps working offline, doesn't depend on a subscription, and your data stays at home.",
  },
  {
    question: "Can a smart home work without internet?",
    answer:
      "Yes. With a local, self-hosted platform like Gladys Assistant, your automations run on a device in your home, so your core scenes keep working even when your internet is down. Only remote access and some cloud features need a connection.",
  },
  {
    question: "Is a local smart home more private?",
    answer:
      "Yes. Because everything runs on your own machine, your habits, presence, voice and camera data stay on your local network instead of being sent to servers you don't control. There are no recordings on a third party's servers and no advertising profiles.",
  },
  {
    question: "What is the best local, open-source smart home software?",
    answer:
      "Popular local, open-source options include Gladys Assistant, Home Assistant, openHAB, Jeedom and Domoticz. Gladys focuses on simplicity and a clean interface with no configuration files, built on open standards like Zigbee, Matter and MQTT.",
  },
  {
    question: "Do I need to be technical to build a local smart home?",
    answer:
      "Less than you might think. Gladys installs in a single Docker command, everything is configured by clicking in the interface. You mainly need a small machine (Raspberry Pi, mini-PC or NAS) and devices that use open standards.",
  },
  {
    question: "Can I still access my smart home remotely if it's local?",
    answer:
      "Yes. A local smart home can still offer remote access, the difference is how. With Gladys Plus, remote access is end-to-end encrypted, so you can check in from anywhere without handing control of your home to a third party.",
  },
];

export const localSmartHomeFaqFr = [
  {
    question: "Qu'est-ce qu'une maison connectée locale ?",
    answer:
      "Une maison connectée locale fait tourner le cerveau de votre maison, le moteur d'automatisation et vos données, sur du matériel qui vous appartient, sur votre propre réseau, plutôt que dans le cloud d'un fabricant. Elle continue de fonctionner hors ligne, ne dépend pas d'un abonnement, et vos données restent chez vous.",
  },
  {
    question: "Une maison connectée peut-elle fonctionner sans internet ?",
    answer:
      "Oui. Avec une plateforme locale et auto-hébergée comme Gladys Assistant, vos automatisations tournent sur un appareil chez vous : vos scènes essentielles continuent de fonctionner même quand votre internet est coupé. Seuls l'accès distant et certaines fonctions cloud nécessitent une connexion.",
  },
  {
    question: "Une maison connectée locale est-elle plus respectueuse de la vie privée ?",
    answer:
      "Oui. Comme tout tourne sur votre propre machine, vos habitudes, votre présence, votre voix et vos données de caméra restent sur votre réseau local au lieu d'être envoyées vers des serveurs que vous ne contrôlez pas. Pas d'enregistrements sur les serveurs d'un tiers, pas de profils publicitaires.",
  },
  {
    question: "Quel est le meilleur logiciel de maison connectée locale et open source ?",
    answer:
      "Parmi les options locales et open source populaires : Gladys Assistant, Home Assistant, openHAB, Jeedom et Domoticz. Gladys mise sur la simplicité et une interface épurée sans fichiers de configuration, bâtie sur des standards ouverts comme Zigbee, Matter et MQTT.",
  },
  {
    question: "Faut-il être technique pour construire une maison connectée locale ?",
    answer:
      "Moins que vous ne le pensez. Gladys s'installe en une seule commande Docker, tout se configure au clic dans l'interface, et un kit de démarrage est livré avec Gladys pré-installée. Il vous faut surtout une petite machine (Raspberry Pi, mini-PC ou NAS) et des appareils utilisant des standards ouverts.",
  },
  {
    question: "Puis-je quand même accéder à ma maison connectée à distance si elle est locale ?",
    answer:
      "Oui. Une maison connectée locale peut tout à fait offrir un accès distant ; la différence, c'est la manière. Avec Gladys Plus, l'accès distant est chiffré de bout en bout : vous gardez un œil depuis n'importe où sans confier le contrôle de votre maison à un tiers.",
  },
];

export const localSmartHomeFaqDe = [
  {
    question: "Was ist ein lokales Smart Home?",
    answer:
      "Ein lokales Smart Home betreibt das Gehirn deines Zuhauses, also die Automations-Engine und deine Daten, auf Hardware, die dir gehört, in deinem eigenen Netzwerk statt in der Cloud eines Herstellers. Es funktioniert offline, hängt von keinem Abo ab, und deine Daten bleiben zu Hause.",
  },
  {
    question: "Funktioniert ein Smart Home auch ohne Internet?",
    answer:
      "Ja. Mit einer lokalen, selbst gehosteten Plattform wie Gladys Assistant laufen deine Automationen auf einem Gerät bei dir zu Hause, sodass deine wichtigsten Szenen auch bei einem Internetausfall weiterlaufen. Nur der Fernzugriff und einige Cloud-Funktionen brauchen eine Verbindung.",
  },
  {
    question: "Ist ein lokales Smart Home datenschutzfreundlicher?",
    answer:
      "Ja. Da alles auf deinem eigenen Rechner läuft, bleiben deine Gewohnheiten, deine Anwesenheit, deine Stimme und deine Kameradaten in deinem lokalen Netzwerk, statt an Server geschickt zu werden, die du nicht kontrollierst. Es gibt keine Aufzeichnungen auf fremden Servern und keine Werbeprofile.",
  },
  {
    question: "Was ist die beste lokale Open-Source-Software für das Smart Home?",
    answer:
      "Beliebte lokale Open-Source-Optionen sind Gladys Assistant, Home Assistant, openHAB, Jeedom und Domoticz. Gladys setzt auf Einfachheit und eine aufgeräumte Oberfläche ohne Konfigurationsdateien und basiert auf offenen Standards wie Zigbee, Matter und MQTT.",
  },
  {
    question: "Muss ich technisch versiert sein, um ein lokales Smart Home zu bauen?",
    answer:
      "Weniger, als du denkst. Gladys wird mit einem einzigen Docker-Befehl installiert, und alles wird per Klick in der Oberfläche eingerichtet. Du brauchst vor allem einen kleinen Rechner (Raspberry Pi, Mini-PC oder NAS) und Geräte, die offene Standards nutzen.",
  },
  {
    question: "Kann ich auf ein lokales Smart Home trotzdem von unterwegs zugreifen?",
    answer:
      "Ja. Auch ein lokales Smart Home kann Fernzugriff bieten, der Unterschied liegt im Wie. Mit Gladys Plus ist der Fernzugriff Ende-zu-Ende-verschlüsselt, sodass du von überall nach dem Rechten sehen kannst, ohne die Kontrolle über dein Zuhause an einen Dritten abzugeben.",
  },
];

export default localSmartHomeContent;
