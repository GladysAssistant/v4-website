// Content for the "SmartThings alternative" landing page.
// SmartThings is one of the most common smart home platforms in North America.
// People looking for an alternative usually want local control, less
// dependence on Samsung's cloud and account, or more freedom after the
// platform changes of the past years. We stay fair: SmartThings is a solid,
// free, easy platform, and Gladys even integrates with it, so the angle is
// "keep your devices, run them locally" with a concrete migration path.

const smartThingsAlternativeContent = {
  en: {
    meta: {
      title: "SmartThings Alternative: Local, Private and Open-Source",
      description:
        "Looking for a SmartThings alternative? Gladys Assistant runs on your own hardware, keeps your Zigbee, Z-Wave and Matter devices local, and even connects to SmartThings while you migrate. Free and open-source.",
    },
    screenshotCaption:
      "Your former SmartThings devices, controlled from a local dashboard that runs on your own machine.",
    hero: {
      title: "Looking for a SmartThings alternative?",
      subtitle:
        "Keep your devices, lose the dependency: Gladys Assistant runs your smart home locally, on hardware you own, with no Samsung account required.",
      intro: [
        "Samsung SmartThings made smart homes accessible to millions of people. But everything revolves around a Samsung account, the SmartThings cloud and Samsung's product decisions, and many users have seen their setups broken by platform changes over the years.",
        "Gladys Assistant takes a different path. It's a free, open-source smart home platform that runs at home, on a mini-PC or a Raspberry Pi. Your Zigbee, Z-Wave and Matter devices pair directly with it, your automations run locally, and your data stays on your network. And because Gladys also integrates with SmartThings, you can migrate at your own pace.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "The SmartThings integration →",
        href: "/docs/integrations/external/smartthings/",
      },
    },
    problem: {
      title: "Why people look for an alternative to SmartThings",
      intro:
        "SmartThings is free and easy to start with, but the trade-offs show up over time:",
      points: [
        "Everything is tied to a Samsung account and the SmartThings cloud, including the app you use to control your home.",
        "When the internet or Samsung's servers are down, anything that depends on the cloud, from the app to cloud-connected devices, stops responding.",
        "The platform changes on Samsung's schedule: older hubs lost support and the end of Groovy custom code forced many users to rebuild their setups.",
        "Developer access keeps getting tighter: since late 2024, new personal access tokens expire after 24 hours.",
        "Your usage data lives on Samsung's servers, next to the rest of your Samsung account.",
      ],
      outro:
        "None of this makes SmartThings a bad product. But if you want a home that belongs to you, the foundation matters.",
    },
    comparison: {
      title: "Gladys Assistant vs SmartThings",
      intro: "How the two platforms compare on what matters for a long-lived smart home:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Samsung SmartThings",
      },
      rows: [
        {
          feature: "Where it runs",
          gladys: "On your own mini-PC, Raspberry Pi or NAS",
          other: "Samsung's cloud, plus a SmartThings hub or compatible Samsung device",
        },
        {
          feature: "Account required",
          gladys: "No, local accounts on your machine",
          other: "Yes, a Samsung account",
        },
        {
          feature: "Works without the internet",
          gladys: "Yes, the core runs locally",
          other: "Partly, the app and cloud features need the internet",
        },
        {
          feature: "Zigbee, Z-Wave, Matter",
          gladys: "Yes, with a USB dongle or through Matter",
          other: "Yes, through the SmartThings hub",
        },
        {
          feature: "Source code",
          gladys: "Open-source (Apache 2.0)",
          other: "Proprietary",
        },
        {
          feature: "Your data",
          gladys: "Stays on your network",
          other: "Stored on Samsung's servers",
        },
        {
          feature: "Price",
          gladys: "Free, optional Gladys Plus for remote access, backups and AI",
          other: "Free app, hub sold separately",
        },
      ],
      outro:
        "SmartThings wins on out-of-the-box convenience and on the number of certified devices. Gladys wins on ownership, privacy and local control.",
    },
    features: {
      title: "Why Gladys is a good SmartThings alternative",
      intro: "What you get when you move your home to Gladys:",
      cards: [
        {
          icon: "🏠",
          title: "Runs at home",
          text: "Gladys runs on your own machine. Your devices, automations and history stay on your local network.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave and Matter",
          text: "Pair your devices directly with a USB dongle or through Matter, no proprietary hub in the middle.",
        },
        {
          icon: "🧠",
          title: "A real automation engine",
          text: "Scenes with triggers, conditions, if/then/else and delays, built from a visual editor, no code.",
        },
        {
          icon: "🔗",
          title: "Keeps talking to SmartThings",
          text: "The SmartThings integration brings the devices of your account into Gladys while you migrate.",
        },
        {
          icon: "📱",
          title: "A modern mobile interface",
          text: "Gladys 5 was designed for the phone in your pocket and the tablet on your wall.",
        },
        {
          icon: "💚",
          title: "Open-source, no lock-in",
          text: "Free and open-source at its core. If you ever leave, your devices are standard and your data is yours.",
        },
      ],
    },
    how: {
      title: "How to migrate from SmartThings to Gladys",
      intro: "You don't have to switch everything in one weekend. A smooth path:",
      points: [
        "Install Gladys on a mini-PC or a Raspberry Pi, and list your SmartThings devices by protocol: Zigbee, Z-Wave, Matter or Wi-Fi.",
        "Connect the SmartThings integration to see your current devices in Gladys right away (keep in mind that SmartThings personal access tokens now expire after 24 hours, so this is a transition tool rather than a permanent setup).",
        "Zigbee devices: add a Zigbee USB dongle, remove each device from SmartThings, and pair it with Zigbee2MQTT.",
        "Z-Wave devices: add a Z-Wave USB stick, exclude each device from SmartThings, and include it in Z-Wave JS UI.",
        "Matter devices: generate a new pairing code from the SmartThings app (Matter lets a device have several controllers) and add it to Gladys, which then controls it locally.",
        "Wi-Fi devices (Kasa, Shelly, Hue bridge, Sonos…): connect them through their own Gladys integration, most of them locally.",
        "Rebuild your routines as Gladys scenes, then unplug the SmartThings hub when you're ready.",
      ],
      outro:
        "Most people move room by room. The forum is there if a device gives you trouble.",
    },
    solution: {
      title: "Your devices, your hardware, your rules",
      paragraphs: [
        "The Zigbee, Z-Wave and Matter devices you bought for SmartThings are standard devices. They don't belong to Samsung, and they work just as well with a platform that runs in your home.",
        "Gladys is free and open-source, and has been developed in the open since 2013. An optional Gladys Plus subscription adds encrypted remote access, Alexa and Google Home, backups and AI, but the core stays local and yours.",
      ],
      link: {
        label: "See every brand that works with Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Go further",
      intro: "Everything you need to plan the move:",
      links: [
        {
          label: "Best smart home hub",
          href: "/best-smart-home-hub/",
          text: "SmartThings, Hubitat, Homey and a mini-PC, compared.",
        },
        {
          label: "Hubitat alternative",
          href: "/hubitat-alternative/",
          text: "Another local hub, and how Gladys compares to it.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "The brands and protocols supported by Gladys, with a setup guide for each.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "The coordinator to buy to take your Zigbee devices off the SmartThings hub.",
        },
        {
          label: "Do you need a Matter hub?",
          href: "/matter-hub/",
          text: "Matter controllers, Thread border routers and bridges, explained.",
        },
        {
          label: "Home Assistant alternative",
          href: "/home-assistant-alternative/",
          text: "Also considering Home Assistant? Here's how Gladys compares.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Move your smart home back home",
      text: "Gladys is free, open-source and installs in a single Docker command. Keep your devices, run them locally, and stay in control.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Works with Gladys", href: "/works-with/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative à SmartThings : domotique locale et open source",
      description:
        "Vous cherchez une alternative à SmartThings ? Gladys Assistant tourne sur votre propre matériel, garde vos appareils Zigbee, Z-Wave et Matter en local, et se connecte même à SmartThings pendant la migration. Gratuite et open source.",
    },
    screenshotCaption:
      "Vos anciens appareils SmartThings, pilotés depuis un tableau de bord local qui tourne sur votre propre machine.",
    hero: {
      title: "Vous cherchez une alternative à SmartThings ?",
      subtitle:
        "Gardez vos appareils, pas la dépendance : Gladys Assistant fait tourner votre maison en local, sur du matériel qui vous appartient, sans compte Samsung.",
      intro: [
        "Samsung SmartThings a rendu la maison connectée accessible à des millions de personnes. Mais tout tourne autour d'un compte Samsung, du cloud SmartThings et des choix produit de Samsung, et beaucoup d'utilisateurs ont vu leur installation cassée par des changements de plateforme au fil des années.",
        "Gladys Assistant prend un autre chemin. C'est une plateforme domotique gratuite et open source qui tourne chez vous, sur un mini-PC ou un Raspberry Pi. Vos appareils Zigbee, Z-Wave et Matter s'y associent directement, vos automatisations tournent en local et vos données restent sur votre réseau. Et comme Gladys s'intègre aussi à SmartThings, vous migrez à votre rythme.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "L'intégration SmartThings →",
        href: "/docs/integrations/external/smartthings/",
      },
    },
    problem: {
      title: "Pourquoi chercher une alternative à SmartThings",
      intro:
        "SmartThings est gratuit et simple pour démarrer, mais les compromis apparaissent avec le temps :",
      points: [
        "Tout est lié à un compte Samsung et au cloud SmartThings, y compris l'application qui pilote votre maison.",
        "Quand internet ou les serveurs de Samsung tombent, tout ce qui dépend du cloud, de l'application aux appareils connectés au cloud, ne répond plus.",
        "La plateforme évolue au rythme de Samsung : d'anciens hubs ont perdu leur support et la fin du code personnalisé Groovy a obligé beaucoup d'utilisateurs à tout reconstruire.",
        "L'accès développeur se resserre : depuis fin 2024, les nouveaux jetons d'accès personnels expirent au bout de 24 heures.",
        "Vos données d'usage sont stockées chez Samsung, à côté du reste de votre compte.",
      ],
      outro:
        "Rien de tout cela ne fait de SmartThings un mauvais produit. Mais si vous voulez une maison qui vous appartient, la fondation compte.",
    },
    comparison: {
      title: "Gladys Assistant vs SmartThings",
      intro: "Comment les deux plateformes se comparent sur ce qui compte pour une maison connectée durable :",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Samsung SmartThings",
      },
      rows: [
        {
          feature: "Où ça tourne",
          gladys: "Sur votre propre mini-PC, Raspberry Pi ou NAS",
          other: "Dans le cloud de Samsung, plus un hub SmartThings ou un appareil Samsung compatible",
        },
        {
          feature: "Compte obligatoire",
          gladys: "Non, des comptes locaux sur votre machine",
          other: "Oui, un compte Samsung",
        },
        {
          feature: "Fonctionne sans internet",
          gladys: "Oui, le cœur tourne en local",
          other: "En partie, l'application et les fonctions cloud ont besoin d'internet",
        },
        {
          feature: "Zigbee, Z-Wave, Matter",
          gladys: "Oui, avec un dongle USB ou via Matter",
          other: "Oui, via le hub SmartThings",
        },
        {
          feature: "Code source",
          gladys: "Open source (Apache 2.0)",
          other: "Propriétaire",
        },
        {
          feature: "Vos données",
          gladys: "Restent sur votre réseau",
          other: "Stockées sur les serveurs de Samsung",
        },
        {
          feature: "Prix",
          gladys: "Gratuit, Gladys Plus en option pour l'accès distant, les sauvegardes et l'IA",
          other: "Application gratuite, hub vendu séparément",
        },
      ],
      outro:
        "SmartThings gagne sur la simplicité immédiate et le nombre d'appareils certifiés. Gladys gagne sur la propriété, la vie privée et le contrôle local.",
    },
    features: {
      title: "Pourquoi Gladys est une bonne alternative à SmartThings",
      intro: "Ce que vous gagnez en passant votre maison sur Gladys :",
      cards: [
        {
          icon: "🏠",
          title: "Tourne chez vous",
          text: "Gladys tourne sur votre propre machine. Vos appareils, automatisations et historiques restent sur votre réseau local.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave et Matter",
          text: "Associez vos appareils directement avec un dongle USB ou via Matter, sans hub propriétaire au milieu.",
        },
        {
          icon: "🧠",
          title: "Un vrai moteur d'automatisation",
          text: "Des scènes avec déclencheurs, conditions, si/alors/sinon et délais, depuis un éditeur visuel, sans code.",
        },
        {
          icon: "🔗",
          title: "Continue de parler à SmartThings",
          text: "L'intégration SmartThings ramène les appareils de votre compte dans Gladys pendant la migration.",
        },
        {
          icon: "📱",
          title: "Une interface mobile moderne",
          text: "Gladys 5 a été pensée pour le téléphone dans votre poche et la tablette sur votre mur.",
        },
        {
          icon: "💚",
          title: "Open source, sans enfermement",
          text: "Gratuite et open source dans son cœur. Si vous partez un jour, vos appareils sont standards et vos données sont à vous.",
        },
      ],
    },
    how: {
      title: "Comment migrer de SmartThings vers Gladys",
      intro: "Pas besoin de tout basculer en un week-end. Un chemin en douceur :",
      points: [
        "Installez Gladys sur un mini-PC ou un Raspberry Pi, et listez vos appareils SmartThings par protocole : Zigbee, Z-Wave, Matter ou Wi-Fi.",
        "Connectez l'intégration SmartThings pour voir tout de suite vos appareils actuels dans Gladys (attention, les jetons d'accès personnels SmartThings expirent désormais au bout de 24 heures : c'est un outil de transition, pas une installation définitive).",
        "Appareils Zigbee : ajoutez un dongle USB Zigbee, retirez chaque appareil de SmartThings et associez-le à Zigbee2MQTT.",
        "Appareils Z-Wave : ajoutez une clé USB Z-Wave, excluez chaque appareil de SmartThings et incluez-le dans Z-Wave JS UI.",
        "Appareils Matter : générez un nouveau code d'association depuis l'application SmartThings (Matter permet à un appareil d'avoir plusieurs contrôleurs) et ajoutez-le à Gladys, qui le pilote ensuite en local.",
        "Appareils Wi-Fi (Kasa, Shelly, pont Hue, Sonos…) : connectez-les via leur propre intégration Gladys, le plus souvent en local.",
        "Recréez vos routines sous forme de scènes Gladys, puis débranchez le hub SmartThings quand vous êtes prêt.",
      ],
      outro:
        "La plupart des gens migrent pièce par pièce. Le forum est là si un appareil vous résiste.",
    },
    solution: {
      title: "Vos appareils, votre matériel, vos règles",
      paragraphs: [
        "Les appareils Zigbee, Z-Wave et Matter achetés pour SmartThings sont des appareils standards. Ils n'appartiennent pas à Samsung, et ils fonctionnent tout aussi bien avec une plateforme qui tourne chez vous.",
        "Gladys est gratuite et open source, et développée publiquement depuis 2013. Un abonnement Gladys Plus optionnel ajoute l'accès distant chiffré, Alexa et Google Home, les sauvegardes et l'IA, mais le cœur reste local et à vous.",
      ],
      link: {
        label: "Voir toutes les marques compatibles avec Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Tout ce qu'il faut pour préparer la migration :",
      links: [
        {
          label: "Quelle box domotique choisir",
          href: "/best-smart-home-hub/",
          text: "Jeedom, Homey, Home Assistant Green et un mini-PC, comparés.",
        },
        {
          label: "Alternative à Hubitat",
          href: "/hubitat-alternative/",
          text: "Une autre box locale, et comment Gladys s'y compare.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Les marques et protocoles pris en charge par Gladys, avec un guide pour chacun.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Le coordinateur à acheter pour sortir vos appareils Zigbee du hub SmartThings.",
        },
        {
          label: "Quel hub Matter choisir ?",
          href: "/matter-hub/",
          text: "Contrôleurs Matter, routeurs de bordure Thread et ponts, expliqués simplement.",
        },
        {
          label: "Alternative à Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Vous regardez aussi Home Assistant ? Voici comment Gladys se compare.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Ramenez votre maison connectée à la maison",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Gardez vos appareils, faites-les tourner en local, et restez maître de votre installation.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Compatible Gladys", href: "/works-with/" },
    },
  },

  de: {
    meta: {
      title: "SmartThings Alternative: lokal, privat und Open Source",
      description:
        "SmartThings Alternative gesucht? Gladys Assistant läuft auf deiner Hardware, steuert Zigbee, Z-Wave und Matter lokal und bindet SmartThings beim Umzug ein.",
    },
    screenshotCaption:
      "Deine bisherigen SmartThings-Geräte, gesteuert über ein lokales Dashboard, das auf deinem eigenen Rechner läuft.",
    hero: {
      title: "Du suchst eine Alternative zu SmartThings?",
      subtitle:
        "Behalte deine Geräte, nicht die Abhängigkeit: Gladys Assistant steuert dein Smart Home lokal, auf Hardware, die dir gehört, ganz ohne Samsung-Konto.",
      intro: [
        "Samsung SmartThings hat das Smart Home für Millionen Menschen zugänglich gemacht. Doch alles dreht sich um ein Samsung-Konto, die SmartThings-Cloud und die Produktentscheidungen von Samsung, und viele Nutzer haben über die Jahre erlebt, wie Plattformänderungen ihr Setup lahmgelegt haben.",
        "Gladys Assistant geht einen anderen Weg. Es ist eine kostenlose Open-Source-Plattform für dein Smart Home, die bei dir zu Hause läuft, auf einem Mini-PC oder einem Raspberry Pi. Deine Zigbee-, Z-Wave- und Matter-Geräte koppelst du direkt damit, deine Automationen laufen lokal und deine Daten bleiben in deinem Netzwerk. Und weil Gladys auch eine SmartThings-Integration hat, kannst du in deinem eigenen Tempo umziehen.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/docs/" },
      secondaryCta: {
        label: "Die SmartThings-Integration →",
        href: "/docs/integrations/external/smartthings/",
      },
    },
    problem: {
      title: "Warum viele eine Alternative zu SmartThings suchen",
      intro:
        "SmartThings ist kostenlos und einfach für den Einstieg, aber die Kompromisse zeigen sich mit der Zeit:",
      points: [
        "Alles hängt an einem Samsung-Konto und der SmartThings-Cloud, auch die App, mit der du dein Zuhause steuerst.",
        "Fällt das Internet oder fallen die Samsung-Server aus, reagiert alles nicht mehr, was von der Cloud abhängt, von der App bis zu Cloud-Geräten.",
        "Die Plattform ändert sich nach Samsungs Zeitplan: Ältere Hubs haben ihren Support verloren, und das Aus für eigenen Groovy-Code hat viele Nutzer gezwungen, ihr Setup neu aufzubauen.",
        "Der Zugang für Entwickler wird immer enger: Seit Ende 2024 laufen neue persönliche Zugriffstoken nach 24 Stunden ab.",
        "Deine Nutzungsdaten liegen auf Samsungs Servern, gleich neben dem Rest deines Samsung-Kontos.",
      ],
      outro:
        "Nichts davon macht SmartThings zu einem schlechten Produkt. Aber wenn du ein Zuhause willst, das wirklich dir gehört, kommt es auf das Fundament an.",
    },
    comparison: {
      title: "Gladys Assistant vs. SmartThings",
      intro: "So schneiden die beiden Plattformen bei dem ab, was für ein langlebiges Smart Home zählt:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Samsung SmartThings",
      },
      rows: [
        {
          feature: "Wo es läuft",
          gladys: "Auf deinem eigenen Mini-PC, Raspberry Pi oder NAS",
          other: "In der Samsung-Cloud, plus SmartThings-Hub oder kompatibles Samsung-Gerät",
        },
        {
          feature: "Konto erforderlich",
          gladys: "Nein, lokale Konten auf deinem Rechner",
          other: "Ja, ein Samsung-Konto",
        },
        {
          feature: "Funktioniert ohne Internet",
          gladys: "Ja, der Kern läuft lokal",
          other: "Teilweise, App und Cloud-Funktionen brauchen Internet",
        },
        {
          feature: "Zigbee, Z-Wave, Matter",
          gladys: "Ja, mit USB-Stick oder über Matter",
          other: "Ja, über den SmartThings-Hub",
        },
        {
          feature: "Quellcode",
          gladys: "Open Source (Apache 2.0)",
          other: "Proprietär",
        },
        {
          feature: "Deine Daten",
          gladys: "Bleiben in deinem Netzwerk",
          other: "Gespeichert auf Samsungs Servern",
        },
        {
          feature: "Preis",
          gladys: "Kostenlos, optional Gladys Plus für Fernzugriff, Backups und KI",
          other: "App kostenlos, Hub separat erhältlich",
        },
      ],
      outro:
        "SmartThings punktet mit Komfort direkt nach dem Auspacken und der Zahl zertifizierter Geräte. Gladys punktet mit Eigentum, Datenschutz und lokaler Steuerung.",
    },
    features: {
      title: "Warum Gladys eine gute SmartThings Alternative ist",
      intro: "Das bekommst du, wenn du dein Zuhause auf Gladys umziehst:",
      cards: [
        {
          icon: "🏠",
          title: "Läuft bei dir zu Hause",
          text: "Gladys läuft auf deinem eigenen Rechner. Geräte, Automationen und Verlauf bleiben in deinem lokalen Netzwerk.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave und Matter",
          text: "Kopple deine Geräte direkt per USB-Stick oder über Matter, ohne proprietären Hub dazwischen.",
        },
        {
          icon: "🧠",
          title: "Eine echte Automations-Engine",
          text: "Szenen mit Auslösern, Bedingungen, Wenn/Dann/Sonst und Verzögerungen, erstellt im visuellen Editor, ganz ohne Code.",
        },
        {
          icon: "🔗",
          title: "Spricht weiter mit SmartThings",
          text: "Die SmartThings-Integration holt die Geräte deines Kontos während des Umzugs in Gladys.",
        },
        {
          icon: "📱",
          title: "Eine moderne mobile Oberfläche",
          text: "Gladys 5 wurde für das Smartphone in deiner Tasche und das Tablet an deiner Wand entwickelt.",
        },
        {
          icon: "💚",
          title: "Open Source, kein Lock-in",
          text: "Im Kern kostenlos und Open Source. Falls du jemals wechselst, sind deine Geräte Standard und deine Daten gehören dir.",
        },
      ],
    },
    how: {
      title: "So ziehst du von SmartThings zu Gladys um",
      intro: "Du musst nicht alles an einem Wochenende umstellen. Ein entspannter Weg:",
      points: [
        "Installiere Gladys auf einem Mini-PC oder Raspberry Pi und liste deine SmartThings-Geräte nach Protokoll auf: Zigbee, Z-Wave, Matter oder WLAN.",
        "Verbinde die SmartThings-Integration, um deine aktuellen Geräte sofort in Gladys zu sehen (beachte, dass persönliche SmartThings-Zugriffstoken inzwischen nach 24 Stunden ablaufen: Das ist ein Werkzeug für den Übergang, keine Dauerlösung).",
        "Zigbee-Geräte: Schließe einen Zigbee-USB-Stick an, entferne jedes Gerät aus SmartThings und kopple es mit Zigbee2MQTT.",
        "Z-Wave-Geräte: Schließe einen Z-Wave-USB-Stick an, exkludiere jedes Gerät aus SmartThings und inkludiere es in Z-Wave JS UI.",
        "Matter-Geräte: Erzeuge in der SmartThings-App einen neuen Kopplungscode (mit Matter kann ein Gerät mehrere Controller haben) und füge es zu Gladys hinzu, das es dann lokal steuert.",
        "WLAN-Geräte (Kasa, Shelly, Hue Bridge, Sonos…): Verbinde sie über ihre eigene Gladys-Integration, meist lokal.",
        "Baue deine Routinen als Gladys-Szenen nach und zieh den Stecker des SmartThings-Hubs, sobald du so weit bist.",
      ],
      outro:
        "Die meisten ziehen Raum für Raum um. Und wenn ein Gerät Ärger macht, hilft dir das Forum weiter.",
    },
    solution: {
      title: "Deine Geräte, deine Hardware, deine Regeln",
      paragraphs: [
        "Die Zigbee-, Z-Wave- und Matter-Geräte, die du für SmartThings gekauft hast, sind Standardgeräte. Sie gehören nicht Samsung, und sie funktionieren genauso gut mit einer Plattform, die bei dir zu Hause läuft.",
        "Gladys ist kostenlos und Open Source und wird seit 2013 öffentlich entwickelt. Ein optionales Gladys Plus Abo ergänzt verschlüsselten Fernzugriff, Alexa und Google Home, Backups und KI, doch der Kern bleibt lokal und gehört dir.",
      ],
      link: {
        label: "Alle Marken ansehen, die mit Gladys funktionieren →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Alles, was du für die Planung des Umzugs brauchst:",
      links: [
        {
          label: "Die beste Smart Home Zentrale",
          href: "/best-smart-home-hub/",
          text: "SmartThings, Hubitat, Homey und ein Mini-PC im Vergleich.",
        },
        {
          label: "Hubitat Alternative",
          href: "/hubitat-alternative/",
          text: "Ein weiterer lokaler Hub, und wie Gladys im Vergleich abschneidet.",
        },
        {
          label: "Funktioniert mit Gladys",
          href: "/works-with/",
          text: "Die von Gladys unterstützten Marken und Protokolle, jeweils mit Einrichtungsanleitung.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/best-zigbee-dongle/",
          text: "Der Koordinator, mit dem du deine Zigbee-Geräte vom SmartThings-Hub löst.",
        },
        {
          label: "Brauchst du einen Matter-Hub?",
          href: "/matter-hub/",
          text: "Matter-Controller, Thread-Border-Router und Bridges einfach erklärt.",
        },
        {
          label: "Home Assistant Alternative",
          href: "/home-assistant-alternative/",
          text: "Du schaust dir auch Home Assistant an? So schneidet Gladys im Vergleich ab.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Hol dein Smart Home zurück nach Hause",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Behalte deine Geräte, steuere sie lokal und behalte die Kontrolle.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Funktioniert mit Gladys", href: "/works-with/" },
    },
  },
  es: {
    meta: {
      title: "Alternativa a SmartThings: local, privada y de código abierto",
      description:
        "¿Buscas una alternativa a SmartThings? Gladys Assistant funciona en tu propio hardware, mantiene en local tus dispositivos Zigbee, Z-Wave y Matter e incluso se conecta a SmartThings mientras migras. Gratis y de código abierto.",
    },
    screenshotCaption:
      "Tus antiguos dispositivos SmartThings, controlados desde un panel local que funciona en tu propia máquina.",
    hero: {
      title: "¿Buscas una alternativa a SmartThings?",
      subtitle:
        "Conserva tus dispositivos y olvídate de la dependencia: Gladys Assistant gestiona tu hogar inteligente en local, en un hardware que es tuyo, sin necesidad de cuenta Samsung.",
      intro: [
        "Samsung SmartThings acercó la domótica a millones de personas. Pero todo gira en torno a una cuenta Samsung, la nube de SmartThings y las decisiones de producto de Samsung, y muchos usuarios han visto cómo los cambios de la plataforma rompían su instalación con los años.",
        "Gladys Assistant toma otro camino. Es una plataforma domótica gratuita y de código abierto que funciona en casa, en un mini-PC o una Raspberry Pi. Tus dispositivos Zigbee, Z-Wave y Matter se emparejan directamente con ella, tus automatizaciones se ejecutan en local y tus datos se quedan en tu red. Y como Gladys también se integra con SmartThings, puedes migrar a tu ritmo.",
      ],
      primaryCta: { label: "Empieza gratis", href: "/docs/" },
      secondaryCta: {
        label: "La integración SmartThings →",
        href: "/docs/integrations/external/smartthings/",
      },
    },
    problem: {
      title: "Por qué la gente busca una alternativa a SmartThings",
      intro:
        "SmartThings es gratuito y fácil para empezar, pero con el tiempo aparecen las contrapartidas:",
      points: [
        "Todo está ligado a una cuenta Samsung y a la nube de SmartThings, incluida la app con la que controlas tu casa.",
        "Cuando falla internet o los servidores de Samsung, todo lo que depende de la nube, desde la app hasta los dispositivos conectados a la nube, deja de responder.",
        "La plataforma cambia al ritmo que marca Samsung: los hubs antiguos perdieron el soporte y el fin del código personalizado Groovy obligó a muchos usuarios a rehacer su instalación.",
        "El acceso para desarrolladores es cada vez más restrictivo: desde finales de 2024, los nuevos tokens de acceso personal caducan a las 24 horas.",
        "Tus datos de uso se guardan en los servidores de Samsung, junto al resto de tu cuenta Samsung.",
      ],
      outro:
        "Nada de esto convierte a SmartThings en un mal producto. Pero si quieres una casa que te pertenezca, los cimientos importan.",
    },
    comparison: {
      title: "Gladys Assistant vs SmartThings",
      intro: "Así se comparan las dos plataformas en lo que importa para un hogar inteligente duradero:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Samsung SmartThings",
      },
      rows: [
        {
          feature: "Dónde funciona",
          gladys: "En tu propio mini-PC, Raspberry Pi o NAS",
          other: "En la nube de Samsung, más un hub SmartThings o un dispositivo Samsung compatible",
        },
        {
          feature: "Cuenta obligatoria",
          gladys: "No, cuentas locales en tu máquina",
          other: "Sí, una cuenta Samsung",
        },
        {
          feature: "Funciona sin internet",
          gladys: "Sí, el núcleo funciona en local",
          other: "En parte, la app y las funciones en la nube necesitan internet",
        },
        {
          feature: "Zigbee, Z-Wave, Matter",
          gladys: "Sí, con un dongle USB o a través de Matter",
          other: "Sí, a través del hub SmartThings",
        },
        {
          feature: "Código fuente",
          gladys: "Código abierto (Apache 2.0)",
          other: "Propietario",
        },
        {
          feature: "Tus datos",
          gladys: "Se quedan en tu red",
          other: "Almacenados en los servidores de Samsung",
        },
        {
          feature: "Precio",
          gladys: "Gratis, Gladys Plus opcional para acceso remoto, copias de seguridad e IA",
          other: "App gratuita, hub vendido por separado",
        },
      ],
      outro:
        "SmartThings gana en comodidad desde el primer momento y en número de dispositivos certificados. Gladys gana en propiedad, privacidad y control local.",
    },
    features: {
      title: "Por qué Gladys es una buena alternativa a SmartThings",
      intro: "Lo que obtienes al pasar tu casa a Gladys:",
      cards: [
        {
          icon: "🏠",
          title: "Funciona en casa",
          text: "Gladys funciona en tu propia máquina. Tus dispositivos, automatizaciones e historial se quedan en tu red local.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave y Matter",
          text: "Empareja tus dispositivos directamente con un dongle USB o a través de Matter, sin un hub propietario de por medio.",
        },
        {
          icon: "🧠",
          title: "Un verdadero motor de automatización",
          text: "Escenas con disparadores, condiciones, si/entonces/si no y esperas, creadas desde un editor visual, sin código.",
        },
        {
          icon: "🔗",
          title: "Sigue hablando con SmartThings",
          text: "La integración SmartThings trae a Gladys los dispositivos de tu cuenta mientras migras.",
        },
        {
          icon: "📱",
          title: "Una interfaz móvil moderna",
          text: "Gladys 5 se diseñó para el móvil que llevas en el bolsillo y la tablet de tu pared.",
        },
        {
          icon: "💚",
          title: "Código abierto, sin ataduras",
          text: "Gratis y de código abierto en su núcleo. Si algún día te vas, tus dispositivos son estándar y tus datos son tuyos.",
        },
      ],
    },
    how: {
      title: "Cómo migrar de SmartThings a Gladys",
      intro: "No tienes que cambiarlo todo en un fin de semana. Un camino tranquilo:",
      points: [
        "Instala Gladys en un mini-PC o una Raspberry Pi y haz una lista de tus dispositivos SmartThings por protocolo: Zigbee, Z-Wave, Matter o Wi-Fi.",
        "Conecta la integración SmartThings para ver tus dispositivos actuales en Gladys de inmediato (ten en cuenta que los tokens de acceso personal de SmartThings ahora caducan a las 24 horas, así que es una herramienta de transición más que una solución permanente).",
        "Dispositivos Zigbee: añade un dongle USB Zigbee, elimina cada dispositivo de SmartThings y emparéjalo con Zigbee2MQTT.",
        "Dispositivos Z-Wave: añade un stick USB Z-Wave, excluye cada dispositivo de SmartThings e inclúyelo en Z-Wave JS UI.",
        "Dispositivos Matter: genera un nuevo código de emparejamiento desde la app SmartThings (Matter permite que un dispositivo tenga varios controladores) y añádelo a Gladys, que lo controlará en local.",
        "Dispositivos Wi-Fi (Kasa, Shelly, bridge Hue, Sonos…): conéctalos mediante su propia integración de Gladys, la mayoría en local.",
        "Recrea tus rutinas como escenas de Gladys y desenchufa el hub SmartThings cuando estés listo.",
      ],
      outro:
        "La mayoría de la gente migra habitación por habitación. El foro está ahí si algún dispositivo te da problemas.",
    },
    solution: {
      title: "Tus dispositivos, tu hardware, tus reglas",
      paragraphs: [
        "Los dispositivos Zigbee, Z-Wave y Matter que compraste para SmartThings son dispositivos estándar. No pertenecen a Samsung y funcionan igual de bien con una plataforma que se ejecuta en tu casa.",
        "Gladys es gratuito y de código abierto, y se desarrolla de forma abierta desde 2013. Una suscripción opcional a Gladys Plus añade acceso remoto cifrado, Alexa y Google Home, copias de seguridad e IA, pero el núcleo sigue siendo local y tuyo.",
      ],
      link: {
        label: "Mira todas las marcas compatibles con Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Para ir más allá",
      intro: "Todo lo que necesitas para planificar el cambio:",
      links: [
        {
          label: "El mejor hub domótico",
          href: "/best-smart-home-hub/",
          text: "SmartThings, Hubitat, Homey y un mini-PC, comparados.",
        },
        {
          label: "Alternativa a Hubitat",
          href: "/hubitat-alternative/",
          text: "Otro hub local, y cómo se compara Gladys con él.",
        },
        {
          label: "Compatible con Gladys",
          href: "/works-with/",
          text: "Las marcas y protocolos compatibles con Gladys, con una guía de configuración para cada uno.",
        },
        {
          label: "El mejor dongle USB Zigbee",
          href: "/best-zigbee-dongle/",
          text: "El coordinador que debes comprar para sacar tus dispositivos Zigbee del hub SmartThings.",
        },
        {
          label: "¿Necesitas un hub Matter?",
          href: "/matter-hub/",
          text: "Controladores Matter, border routers Thread y puentes, explicados.",
        },
        {
          label: "Alternativa a Home Assistant",
          href: "/home-assistant-alternative/",
          text: "¿También estás pensando en Home Assistant? Así se compara Gladys.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Devuelve tu hogar inteligente a casa",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Conserva tus dispositivos, contrólalos en local y mantén el control.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Compatible con Gladys", href: "/works-with/" },
    },
  },
};

export const smartThingsAlternativeFaqEn = [
  {
    question: "What is the best local alternative to SmartThings?",
    answer:
      "Gladys Assistant is a free, open-source smart home platform that runs on your own hardware (a mini-PC, a Raspberry Pi or a NAS). It supports Zigbee, Z-Wave and Matter devices directly, runs your automations locally and doesn't require a Samsung or any other cloud account. Home Assistant, Hubitat and openHAB are other local options.",
  },
  {
    question: "Can I reuse my SmartThings devices with Gladys?",
    answer:
      "Yes. Zigbee devices pair with Gladys through a Zigbee USB dongle and Zigbee2MQTT, Z-Wave devices through a Z-Wave stick and Z-Wave JS UI, and Matter devices directly, since Gladys is a Matter controller. Wi-Fi devices connect through their own integrations (Kasa, Shelly, Philips Hue, Sonos…).",
  },
  {
    question: "Does Gladys integrate with SmartThings?",
    answer:
      "Yes. The SmartThings integration brings the switches, lights, locks, shades, thermostats and sensors of your SmartThings account into Gladys, through Samsung's cloud API. Since late 2024, SmartThings personal access tokens expire after 24 hours, so it works best as a bridge while you move your devices to Gladys.",
  },
  {
    question: "Does Gladys work without the internet?",
    answer:
      "Yes. Gladys runs on your local network, so devices paired over Zigbee, Z-Wave or Matter and your scenes keep working when the internet is down. Only cloud-based integrations and optional Gladys Plus features like remote access need a connection.",
  },
  {
    question: "What hardware do I need to replace the SmartThings hub?",
    answer:
      "A small always-on computer to run Gladys, such as an Intel N100 mini-PC or a Raspberry Pi, plus a Zigbee USB dongle for Zigbee devices and a Z-Wave USB stick if you have Z-Wave devices. Matter over Wi-Fi devices need nothing else; Matter over Thread devices need a Thread border router.",
  },
  {
    question: "Is Gladys free?",
    answer:
      "Yes. Gladys is free and open-source, forever. An optional Gladys Plus subscription adds encrypted remote access, Alexa and Google Home, backups and AI, starting at $7.99/month in the US and Canada, with a 1-month free trial.",
  },
];

export const smartThingsAlternativeFaqFr = [
  {
    question: "Quelle est la meilleure alternative locale à SmartThings ?",
    answer:
      "Gladys Assistant est une plateforme domotique gratuite et open source qui tourne sur votre propre matériel (mini-PC, Raspberry Pi ou NAS). Elle prend en charge directement les appareils Zigbee, Z-Wave et Matter, fait tourner vos automatisations en local et ne demande aucun compte Samsung ni aucun autre compte cloud. Home Assistant, Hubitat et openHAB sont d'autres options locales.",
  },
  {
    question: "Puis-je réutiliser mes appareils SmartThings avec Gladys ?",
    answer:
      "Oui. Les appareils Zigbee s'associent à Gladys via un dongle USB Zigbee et Zigbee2MQTT, les appareils Z-Wave via une clé Z-Wave et Z-Wave JS UI, et les appareils Matter directement, puisque Gladys est un contrôleur Matter. Les appareils Wi-Fi se connectent via leurs propres intégrations (Kasa, Shelly, Philips Hue, Sonos…).",
  },
  {
    question: "Gladys s'intègre-t-elle à SmartThings ?",
    answer:
      "Oui. L'intégration SmartThings ramène dans Gladys les interrupteurs, lumières, serrures, volets, thermostats et capteurs de votre compte SmartThings, via l'API cloud de Samsung. Depuis fin 2024, les jetons d'accès personnels SmartThings expirent au bout de 24 heures : elle sert donc surtout de passerelle pendant que vous migrez vos appareils vers Gladys.",
  },
  {
    question: "Gladys fonctionne-t-elle sans internet ?",
    answer:
      "Oui. Gladys tourne sur votre réseau local : les appareils associés en Zigbee, Z-Wave ou Matter et vos scènes continuent de fonctionner quand internet est coupé. Seules les intégrations cloud et les fonctions optionnelles de Gladys Plus, comme l'accès distant, ont besoin d'une connexion.",
  },
  {
    question: "De quel matériel ai-je besoin pour remplacer le hub SmartThings ?",
    answer:
      "Un petit ordinateur allumé en permanence pour faire tourner Gladys, comme un mini-PC Intel N100 ou un Raspberry Pi, plus un dongle USB Zigbee pour les appareils Zigbee et une clé USB Z-Wave si vous avez des appareils Z-Wave. Les appareils Matter en Wi-Fi n'ont besoin de rien d'autre ; les appareils Matter over Thread ont besoin d'un routeur de bordure Thread.",
  },
  {
    question: "Gladys est-elle gratuite ?",
    answer:
      "Oui. Gladys est gratuite et open source, pour toujours. Un abonnement Gladys Plus optionnel ajoute l'accès distant chiffré, Alexa et Google Home, les sauvegardes et l'IA, à partir de 6,99 €/mois en Europe, avec un mois d'essai gratuit.",
  },
];

export const smartThingsAlternativeFaqDe = [
  {
    question: "Was ist die beste lokale Alternative zu SmartThings?",
    answer:
      "Gladys Assistant ist eine kostenlose Open-Source-Plattform für dein Smart Home, die auf deiner eigenen Hardware läuft (Mini-PC, Raspberry Pi oder NAS). Sie unterstützt Zigbee-, Z-Wave- und Matter-Geräte direkt, führt deine Automationen lokal aus und braucht weder ein Samsung-Konto noch ein anderes Cloud-Konto. Home Assistant, Hubitat und openHAB sind weitere lokale Optionen.",
  },
  {
    question: "Kann ich meine SmartThings-Geräte mit Gladys weiterverwenden?",
    answer:
      "Ja. Zigbee-Geräte koppelst du über einen Zigbee-USB-Stick und Zigbee2MQTT mit Gladys, Z-Wave-Geräte über einen Z-Wave-Stick und Z-Wave JS UI, und Matter-Geräte direkt, denn Gladys ist ein Matter-Controller. WLAN-Geräte verbindest du über ihre eigenen Integrationen (Kasa, Shelly, Philips Hue, Sonos…).",
  },
  {
    question: "Lässt sich Gladys mit SmartThings verbinden?",
    answer:
      "Ja. Die SmartThings-Integration holt Schalter, Lampen, Schlösser, Rollläden, Thermostate und Sensoren deines SmartThings-Kontos über die Cloud-API von Samsung in Gladys. Seit Ende 2024 laufen persönliche SmartThings-Zugriffstoken nach 24 Stunden ab, deshalb eignet sie sich vor allem als Brücke, während du deine Geräte zu Gladys umziehst.",
  },
  {
    question: "Funktioniert Gladys ohne Internet?",
    answer:
      "Ja. Gladys läuft in deinem lokalen Netzwerk, daher funktionieren per Zigbee, Z-Wave oder Matter gekoppelte Geräte und deine Szenen auch dann weiter, wenn das Internet ausfällt. Nur Cloud-Integrationen und optionale Gladys Plus Funktionen wie der Fernzugriff brauchen eine Verbindung.",
  },
  {
    question: "Welche Hardware brauche ich, um den SmartThings-Hub zu ersetzen?",
    answer:
      "Einen kleinen, dauerhaft laufenden Rechner für Gladys, etwa einen Mini-PC mit Intel N100 oder einen Raspberry Pi, dazu einen Zigbee-USB-Stick für Zigbee-Geräte und einen Z-Wave-USB-Stick, falls du Z-Wave-Geräte hast. Matter-Geräte im WLAN brauchen nichts weiter; Matter-over-Thread-Geräte brauchen einen Thread-Border-Router.",
  },
  {
    question: "Ist Gladys kostenlos?",
    answer:
      "Ja. Gladys ist kostenlos und Open Source, für immer. Ein optionales Gladys Plus Abo ergänzt verschlüsselten Fernzugriff, Alexa und Google Home, Backups und KI, ab 6,99 €/Monat in Europa, mit einem Monat kostenlosem Test.",
  },
];

export const smartThingsAlternativeFaqEs = [
  {
    question: "¿Cuál es la mejor alternativa local a SmartThings?",
    answer:
      "Gladys Assistant es una plataforma domótica gratuita y de código abierto que funciona en tu propio hardware (un mini-PC, una Raspberry Pi o un NAS). Es compatible directamente con dispositivos Zigbee, Z-Wave y Matter, ejecuta tus automatizaciones en local y no necesita una cuenta Samsung ni ninguna otra cuenta en la nube. Home Assistant, Hubitat y openHAB son otras opciones locales.",
  },
  {
    question: "¿Puedo reutilizar mis dispositivos SmartThings con Gladys?",
    answer:
      "Sí. Los dispositivos Zigbee se emparejan con Gladys mediante un dongle USB Zigbee y Zigbee2MQTT, los dispositivos Z-Wave mediante un stick Z-Wave y Z-Wave JS UI, y los dispositivos Matter directamente, ya que Gladys es un controlador Matter. Los dispositivos Wi-Fi se conectan mediante sus propias integraciones (Kasa, Shelly, Philips Hue, Sonos…).",
  },
  {
    question: "¿Gladys se integra con SmartThings?",
    answer:
      "Sí. La integración SmartThings trae a Gladys los interruptores, luces, cerraduras, persianas, termostatos y sensores de tu cuenta SmartThings, a través de la API en la nube de Samsung. Desde finales de 2024, los tokens de acceso personal de SmartThings caducan a las 24 horas, así que funciona mejor como puente mientras trasladas tus dispositivos a Gladys.",
  },
  {
    question: "¿Gladys funciona sin internet?",
    answer:
      "Sí. Gladys funciona en tu red local, así que los dispositivos emparejados por Zigbee, Z-Wave o Matter y tus escenas siguen funcionando cuando se cae internet. Solo las integraciones basadas en la nube y las funciones opcionales de Gladys Plus, como el acceso remoto, necesitan conexión.",
  },
  {
    question: "¿Qué hardware necesito para sustituir el hub SmartThings?",
    answer:
      "Un pequeño ordenador siempre encendido para ejecutar Gladys, como un mini-PC Intel N100 o una Raspberry Pi, más un dongle USB Zigbee para los dispositivos Zigbee y un stick USB Z-Wave si tienes dispositivos Z-Wave. Los dispositivos Matter sobre Wi-Fi no necesitan nada más; los dispositivos Matter sobre Thread necesitan un border router Thread.",
  },
  {
    question: "¿Gladys es gratuito?",
    answer:
      "Sí. Gladys es gratuito y de código abierto, para siempre. Una suscripción opcional a Gladys Plus añade acceso remoto cifrado, Alexa y Google Home, copias de seguridad e IA, desde 6,99 €/mes en Europa, con un mes de prueba gratis.",
  },
];

export default smartThingsAlternativeContent;
