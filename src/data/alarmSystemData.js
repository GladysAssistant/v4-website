// Content for the "DIY home alarm system" use-case page.
// Problem-led intent ("build your own home alarm", "DIY alarm system").
// Leans on Gladys' native alarm mode (armed / partial / panic), arming delay and
// code, and scene-based intrusion strategies. Angle: ownership, privacy and
// flexibility, you own a local system that behaves exactly how you design it.

const alarmContent = {
  en: {
    meta: {
      title: "DIY Self-Monitored Home Alarm System, No Contract",
      description:
        "Build a self-monitored DIY home alarm with no monitoring contract: you own the hardware, it runs locally, with armed, partial and panic modes, affordable sensors and instant alerts on your phone. A local alternative to ADT.",
    },
    screenshotCaption:
      "Arm, disarm and monitor your home from Gladys, locally and on your own terms.",
    hero: {
      title: "Build your own home alarm system, local and private",
      subtitle:
        "A real DIY alarm with motion sensors, door contacts, cameras and instant alerts, running locally on hardware you own and control.",
      intro: [
        "Traditional alarm systems lock you into proprietary hardware, a company's cloud, and rules you can't change. Your home security shouldn't be a black box you rent from someone else.",
        "With Gladys Assistant you build a real alarm system from affordable, off-the-shelf sensors. It runs locally on your own machine, alerts you instantly, and behaves exactly the way you decide.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Alarm setup guide →",
        href: "/docs/dashboard/alarm/",
      },
    },
    problem: {
      title: "The problem with traditional monitored alarms",
      intro: "Off-the-shelf monitored alarms (Verisure, ADT, Ring Alarm and the like) are convenient, but the trade-offs are steep:",
      points: [
        "Proprietary hardware and sensors locked to a single vendor.",
        "Your security data and camera feeds routed through a company's cloud.",
        "Rigid scenarios: you get their rules, not yours.",
        "If the company changes its terms or shuts down, your system can be left useless.",
        "You never really own the system, you rent it.",
      ],
      outro:
        "A self-hosted alarm flips all of that: your rules, your hardware, your data, kept at home.",
    },
    comparison: {
      title: "Gladys DIY alarm vs a monitored subscription alarm",
      intro:
        "How a self-hosted Gladys alarm compares to a traditional monitored alarm (Verisure, ADT, Ring Alarm and similar):",
      cols: {
        feature: "",
        gladys: "Gladys DIY alarm",
        other: "Monitored subscription alarm",
      },
      rows: [
        {
          feature: "Ownership",
          gladys: "You own the hardware and your installation",
          other: "You rent the whole system",
        },
        {
          feature: "Your data",
          gladys: "Stays on your local network",
          other: "Routed through their cloud",
        },
        {
          feature: "Works offline",
          gladys: "Yes, fully local",
          other: "Limited without their service",
        },
        {
          feature: "Sensors & hardware",
          gladys: "Any Zigbee or Matter sensor, your choice",
          other: "Proprietary, locked to them",
        },
        {
          feature: "Rules & automations",
          gladys: "Your own, fully customizable",
          other: "Theirs, fixed scenarios",
        },
        {
          feature: "Subscription",
          gladys: "Optional Gladys Plus for remote access, backups and camera streaming",
          other: "Mandatory, the system is the subscription",
        },
        {
          feature: "If the company shuts down",
          gladys: "Keeps working, it's yours",
          other: "Can be left useless",
        },
      ],
      outro:
        "Both can involve a subscription. The difference is what you get for it: with Gladys you own your hardware and your installation, everything runs locally, and your data stays home, instead of renting a system you never control.",
    },
    features: {
      title: "What your Gladys alarm can do",
      intro: "You get a real alarm system, assembled from simple, affordable parts:",
      cards: [
        {
          icon: "🛡️",
          title: "Armed, partial & panic modes",
          text: "Arm the whole house when you leave, use partial mode at night to watch only the outside, or trigger a panic alarm instantly.",
        },
        {
          icon: "🚪",
          title: "Motion & door sensors",
          text: "Use affordable Zigbee motion detectors and door/window contacts as triggers, mix and match any brand.",
        },
        {
          icon: "📷",
          title: "Camera snapshots",
          text: "On intrusion, have Gladys send you a camera snapshot so you can instantly see what's happening.",
        },
        {
          icon: "📲",
          title: "Instant alerts",
          text: "Get notified on Telegram, SMS or other channels the moment something trips while the alarm is armed.",
        },
        {
          icon: "🔢",
          title: "Keypad & arming delay",
          text: "Disarm from a wall tablet with a numeric code, and set an arming delay so you can leave before it activates.",
        },
        {
          icon: "🔔",
          title: "Sirens & deterrents",
          text: "Sound a siren, flash the lights, or run any scene you like, the response is entirely yours to design.",
        },
      ],
    },
    how: {
      title: "How a Gladys alarm works",
      intro: "You assemble it from simple building blocks, no installer required:",
      points: [
        "Add the Alarm widget to your dashboard, with four modes: armed, disarmed, partial and panic.",
        "Set an alarm code and an arming delay in your house settings.",
        "Create a scene for arming (notify yourself, flash the lights), and the key one for intrusion.",
        "The intrusion scene triggers on motion or a door opening, with a condition that the alarm is armed, then sends alerts, a camera snapshot, and sounds a siren.",
        "Everything runs locally and reacts in real time, even if your internet is down.",
      ],
      outro: "Affordable sensors, your own rules, and a system you fully own.",
    },
    solution: {
      title: "Local, private, and truly yours",
      paragraphs: [
        "Because Gladys runs on your own machine, your alarm keeps working without the internet, and your sensor data and camera feeds stay on your local network, not on a security company's servers.",
        "The Gladys core is free and open-source, so you own your whole setup. If you want to check in from afar, optional Gladys Plus adds encrypted remote access and camera streaming, on your terms, without ever handing your data to a third party.",
      ],
      link: {
        label: "Read the full alarm setup guide →",
        href: "/docs/dashboard/alarm/",
      },
    },
    related: {
      title: "Go further",
      intro: "Set it up, or combine it with the rest of your local smart home:",
      links: [
        {
          label: "Water leak detection",
          href: "/water-leak-detection/",
          text: "Detect leaks and shut the water off automatically.",
        },
        {
          label: "The alarm setup guide",
          href: "/docs/dashboard/alarm/",
          text: "Step by step: modes, arming delay, code and intrusion scenes.",
        },
        {
          label: "Presence simulation",
          href: "/presence-simulation/",
          text: "Make your home look occupied while you're away, a perfect companion to your alarm.",
        },
        {
          label: "Control your home with AI",
          href: "/ai-smart-home/",
          text: "Let AI check a camera on intrusion and decide whether to alert you.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "The bigger picture: a private, local smart home built on open standards.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Build a home alarm you actually own",
      text: "Gladys is free, open-source and local-first. Build a real alarm from affordable sensors, running on your own hardware with your data kept at home.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "See the alarm guide", href: "/docs/dashboard/alarm/" },
    },
  },

  fr: {
    meta: {
      title: "Alarme maison locale : l'alternative à Homiris et Verisure",
      description:
        "Créez une vraie alarme maison DIY avec Gladys Assistant, l'alternative locale aux alarmes télésurveillées type Homiris ou Verisure : vous restez propriétaire de votre matériel et de votre installation, tout tourne en local, avec des capteurs abordables et des alertes instantanées.",
    },
    screenshotCaption:
      "Armez, désarmez et surveillez votre maison depuis Gladys, en local et selon vos règles.",
    hero: {
      title: "Créez votre propre alarme maison, locale et privée",
      subtitle:
        "Une vraie alarme DIY avec détecteurs de mouvement, contacts d'ouverture, caméras et alertes instantanées, qui tourne en local sur du matériel qui vous appartient et que vous contrôlez de bout en bout.",
      intro: [
        "Les systèmes d'alarme classiques vous enferment dans du matériel propriétaire, le cloud d'une entreprise, et des règles que vous ne pouvez pas changer. La sécurité de votre maison ne devrait pas être une boîte noire que vous louez à quelqu'un d'autre.",
        "Avec Gladys Assistant, vous construisez une vraie alarme à partir de capteurs abordables du commerce. Elle tourne en local sur votre propre machine, vous alerte instantanément, et se comporte exactement comme vous l'avez décidé.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Guide de configuration de l'alarme →",
        href: "/docs/dashboard/alarm/",
      },
    },
    problem: {
      title: "Le problème des alarmes télésurveillées classiques",
      intro:
        "Les alarmes télésurveillées classiques (Homiris, Verisure et compagnie) sont pratiques, mais les compromis sont lourds :",
      points: [
        "Du matériel et des capteurs propriétaires, verrouillés sur un seul fournisseur.",
        "Vos données de sécurité et vos flux de caméra qui transitent par le cloud d'une entreprise.",
        "Des scénarios rigides : vous avez leurs règles, pas les vôtres.",
        "Si l'entreprise change ses conditions ou ferme, votre système peut devenir inutilisable.",
        "Vous ne possédez jamais vraiment le système : vous le louez.",
      ],
      outro:
        "Une alarme auto-hébergée inverse tout cela : vos règles, votre matériel, vos données, gardées chez vous.",
    },
    comparison: {
      title: "Alarme DIY Gladys vs alarme télésurveillée sur abonnement",
      intro:
        "Comment une alarme Gladys auto-hébergée se compare à une alarme télésurveillée classique (Homiris, Verisure et similaires) :",
      cols: {
        feature: "",
        gladys: "Alarme DIY Gladys",
        other: "Alarme télésurveillée sur abonnement",
      },
      rows: [
        {
          feature: "Propriété",
          gladys: "Vous possédez le matériel et votre installation",
          other: "Vous louez tout le système",
        },
        {
          feature: "Vos données",
          gladys: "Restent sur votre réseau local",
          other: "Transitent par leur cloud",
        },
        {
          feature: "Fonctionne hors ligne",
          gladys: "Oui, 100 % local",
          other: "Limité sans leur service",
        },
        {
          feature: "Capteurs & matériel",
          gladys: "N'importe quel capteur Zigbee ou Matter, à votre choix",
          other: "Propriétaire, verrouillé chez eux",
        },
        {
          feature: "Règles & automatisations",
          gladys: "Les vôtres, entièrement personnalisables",
          other: "Les leurs, scénarios figés",
        },
        {
          feature: "Abonnement",
          gladys: "Gladys Plus en option pour l'accès distant, les sauvegardes et le streaming caméra",
          other: "Obligatoire, le système est l'abonnement",
        },
        {
          feature: "Si l'entreprise ferme",
          gladys: "Continue de fonctionner, il est à vous",
          other: "Peut devenir inutilisable",
        },
      ],
      outro:
        "Les deux peuvent impliquer un abonnement. La différence, c'est ce qu'il recouvre : avec Gladys, vous possédez votre matériel et votre installation, tout tourne en local et vos données restent chez vous, au lieu de louer un système que vous ne contrôlez jamais.",
    },
    features: {
      title: "Ce que votre alarme Gladys peut faire",
      intro: "Vous obtenez une vraie alarme, assemblée à partir de pièces simples et abordables :",
      cards: [
        {
          icon: "🛡️",
          title: "Modes armé, partiel & panique",
          text: "Armez toute la maison en partant, utilisez le mode partiel la nuit pour ne surveiller que l'extérieur, ou déclenchez une alarme panique instantanément.",
        },
        {
          icon: "🚪",
          title: "Détecteurs de mouvement & d'ouverture",
          text: "Utilisez des détecteurs de mouvement et des contacts de porte/fenêtre Zigbee abordables comme déclencheurs, toutes marques confondues.",
        },
        {
          icon: "📷",
          title: "Photos de caméra",
          text: "En cas d'intrusion, faites en sorte que Gladys vous envoie une photo de la caméra pour voir immédiatement ce qui se passe.",
        },
        {
          icon: "📲",
          title: "Alertes instantanées",
          text: "Soyez prévenu sur Telegram, par SMS ou d'autres canaux dès que quelque chose se déclenche quand l'alarme est armée.",
        },
        {
          icon: "🔢",
          title: "Clavier & délai d'armement",
          text: "Désarmez depuis une tablette murale avec un code numérique, et réglez un délai d'armement pour avoir le temps de sortir.",
        },
        {
          icon: "🔔",
          title: "Sirènes & dissuasion",
          text: "Déclenchez une sirène, faites clignoter les lumières, ou lancez n'importe quelle scène : la réponse, c'est vous qui la concevez.",
        },
      ],
    },
    how: {
      title: "Comment fonctionne une alarme Gladys",
      intro: "Vous l'assemblez à partir de briques simples, sans installateur :",
      points: [
        "Ajoutez le widget Alarme à votre tableau de bord, avec quatre modes : armé, désarmé, partiel et panique.",
        "Définissez un code d'alarme et un délai d'armement dans les paramètres de votre maison.",
        "Créez une scène pour l'armement (vous prévenir, faire clignoter les lumières), et la scène clé : l'intrusion.",
        "La scène d'intrusion se déclenche sur un mouvement ou une ouverture de porte, avec une condition « alarme armée », puis envoie des alertes, une photo de caméra, et déclenche une sirène.",
        "Tout tourne en local et réagit en temps réel, même si votre internet est coupé.",
      ],
      outro: "Des capteurs abordables, vos propres règles, et un système qui vous appartient entièrement.",
    },
    solution: {
      title: "Locale, privée, et vraiment à vous",
      paragraphs: [
        "Comme Gladys tourne sur votre propre machine, votre alarme continue de fonctionner sans internet, et vos données de capteurs et flux de caméra restent sur votre réseau local, pas sur les serveurs d'une société de sécurité.",
        "Le cœur de Gladys est gratuit et open source : vous possédez l'ensemble de votre installation. Si vous voulez garder un œil à distance, l'option Gladys Plus ajoute l'accès distant chiffré et le streaming caméra, à vos conditions, sans jamais confier vos données à un tiers.",
      ],
      link: {
        label: "Lire le guide complet de configuration de l'alarme →",
        href: "/docs/dashboard/alarm/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Mettez-la en place, ou combinez-la avec le reste de votre maison connectée locale :",
      links: [
        {
          label: "Détection de fuite d'eau",
          href: "/water-leak-detection/",
          text: "Détectez les fuites et coupez l'eau automatiquement.",
        },
        {
          label: "Le guide de configuration de l'alarme",
          href: "/docs/dashboard/alarm/",
          text: "Pas à pas : modes, délai d'armement, code et scènes d'intrusion.",
        },
        {
          label: "La simulation de présence",
          href: "/presence-simulation/",
          text: "Faites croire que votre maison est occupée pendant votre absence, le compagnon idéal de votre alarme.",
        },
        {
          label: "Contrôler sa maison avec l'IA",
          href: "/ai-smart-home/",
          text: "Laissez l'IA vérifier une caméra en cas d'intrusion et décider de vous alerter ou non.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "La vue d'ensemble : une maison connectée locale et privée bâtie sur des standards ouverts.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Créez une alarme maison qui vous appartient vraiment",
      text: "Gladys est gratuite, open source et locale d'abord. Construisez une vraie alarme à partir de capteurs abordables, sur votre propre matériel et avec vos données gardées chez vous.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Voir le guide de l'alarme", href: "/docs/dashboard/alarm/" },
    },
  },

  de: {
    meta: {
      title: "Alarmanlage selber bauen: lokal und ohne Vertrag",
      description:
        "Bau dir eine DIY-Alarmanlage ohne Überwachungsvertrag: eigene Hardware, lokal, mit Scharf-, Teil- und Panikmodus und Sofortalarm aufs Handy.",
    },
    screenshotCaption:
      "Schalte dein Zuhause in Gladys scharf oder unscharf und behalte es im Blick, lokal und nach deinen Regeln.",
    hero: {
      title: "Bau dir deine eigene Alarmanlage, lokal und privat",
      subtitle:
        "Eine echte DIY-Alarmanlage mit Bewegungsmeldern, Türkontakten, Kameras und Sofortbenachrichtigungen, die lokal auf Hardware läuft, die dir gehört und die du kontrollierst.",
      intro: [
        "Klassische Alarmanlagen binden dich an proprietäre Hardware, die Cloud eines Unternehmens und Regeln, die du nicht ändern kannst. Die Sicherheit deines Zuhauses sollte keine Blackbox sein, die du von jemand anderem mietest.",
        "Mit Gladys Assistant baust du aus günstigen Sensoren von der Stange eine echte Alarmanlage. Sie läuft lokal auf deinem eigenen Rechner, alarmiert dich sofort und verhält sich genau so, wie du es festlegst.",
      ],
      primaryCta: { label: "Kostenlos loslegen", href: "/de/docs/" },
      secondaryCta: {
        label: "Anleitung zur Alarmanlage →",
        href: "/de/docs/dashboard/alarm/",
      },
    },
    problem: {
      title: "Das Problem mit klassischen Alarmanlagen mit Überwachungsdienst",
      intro: "Fertige Alarmanlagen mit Überwachungsdienst (Verisure, Ring Alarm und Co.) sind bequem, aber die Kompromisse sind groß:",
      points: [
        "Proprietäre Hardware und Sensoren, die an einen einzigen Anbieter gebunden sind.",
        "Deine Sicherheitsdaten und Kamerabilder laufen über die Cloud eines Unternehmens.",
        "Starre Szenarien: Es gelten ihre Regeln, nicht deine.",
        "Ändert das Unternehmen seine Bedingungen oder stellt den Betrieb ein, kann dein System nutzlos werden.",
        "Das System gehört dir nie wirklich, du mietest es nur.",
      ],
      outro:
        "Eine selbst gehostete Alarmanlage dreht das alles um: deine Regeln, deine Hardware, deine Daten, und alles bleibt bei dir zu Hause.",
    },
    comparison: {
      title: "Gladys-DIY-Alarmanlage vs. Alarmanlage im Überwachungsabo",
      intro:
        "So schlägt sich eine selbst gehostete Gladys-Alarmanlage im Vergleich zu einer klassischen Alarmanlage mit Überwachungsdienst (Verisure, Ring Alarm und ähnliche):",
      cols: {
        feature: "",
        gladys: "Gladys-DIY-Alarmanlage",
        other: "Alarmanlage im Überwachungsabo",
      },
      rows: [
        {
          feature: "Eigentum",
          gladys: "Hardware und Installation gehören dir",
          other: "Du mietest das ganze System",
        },
        {
          feature: "Deine Daten",
          gladys: "Bleiben in deinem lokalen Netzwerk",
          other: "Laufen über ihre Cloud",
        },
        {
          feature: "Funktioniert offline",
          gladys: "Ja, komplett lokal",
          other: "Eingeschränkt ohne ihren Dienst",
        },
        {
          feature: "Sensoren & Hardware",
          gladys: "Jeder Zigbee- oder Matter-Sensor, ganz nach deiner Wahl",
          other: "Proprietär, an den Anbieter gebunden",
        },
        {
          feature: "Regeln & Automatisierungen",
          gladys: "Deine eigenen, frei anpassbar",
          other: "Die des Anbieters, feste Szenarien",
        },
        {
          feature: "Abo",
          gladys: "Optional Gladys Plus für Fernzugriff, Backups und Kamera-Streaming",
          other: "Pflicht, das System ist das Abo",
        },
        {
          feature: "Wenn der Anbieter aufgibt",
          gladys: "Läuft weiter, es gehört dir",
          other: "Kann nutzlos werden",
        },
      ],
      outro:
        "Bei beiden kann ein Abo dazugehören. Der Unterschied liegt darin, was du dafür bekommst: Mit Gladys gehören dir Hardware und Installation, alles läuft lokal und deine Daten bleiben zu Hause, statt ein System zu mieten, über das du nie die Kontrolle hast.",
    },
    features: {
      title: "Was deine Gladys-Alarmanlage kann",
      intro: "Du bekommst eine echte Alarmanlage, zusammengesetzt aus einfachen, günstigen Komponenten:",
      cards: [
        {
          icon: "🛡️",
          title: "Scharf-, Teil- & Panikmodus",
          text: "Schalte das ganze Haus scharf, wenn du gehst, nutze nachts den Teilmodus, um nur die Außenhaut zu überwachen, oder löse sofort einen Panikalarm aus.",
        },
        {
          icon: "🚪",
          title: "Bewegungsmelder & Türsensoren",
          text: "Nutze günstige Zigbee-Bewegungsmelder und Tür-/Fensterkontakte als Auslöser, Marken beliebig kombinierbar.",
        },
        {
          icon: "📷",
          title: "Kamera-Schnappschüsse",
          text: "Bei einem Einbruch schickt dir Gladys einen Kamera-Schnappschuss, damit du sofort siehst, was los ist.",
        },
        {
          icon: "📲",
          title: "Sofortbenachrichtigungen",
          text: "Lass dich per Telegram, SMS oder über andere Kanäle benachrichtigen, sobald bei scharfer Anlage etwas auslöst.",
        },
        {
          icon: "🔢",
          title: "Codeeingabe & Aktivierungsverzögerung",
          text: "Entschärfe die Anlage per Zahlencode über ein Wandtablet und stell eine Aktivierungsverzögerung ein, damit du das Haus verlassen kannst, bevor sie scharf wird.",
        },
        {
          icon: "🔔",
          title: "Sirenen & Abschreckung",
          text: "Lass eine Sirene heulen, die Lichter blinken oder starte eine beliebige Szene: Wie die Anlage reagiert, legst du ganz allein fest.",
        },
      ],
    },
    how: {
      title: "So funktioniert eine Gladys-Alarmanlage",
      intro: "Du baust sie aus einfachen Bausteinen zusammen, ganz ohne Installateur:",
      points: [
        "Füge deinem Dashboard das Alarm-Widget hinzu, mit vier Modi: scharf, unscharf, teilweise scharf und Panik.",
        "Leg in den Einstellungen deines Hauses einen Alarmcode und eine Aktivierungsverzögerung fest.",
        "Erstelle eine Szene fürs Scharfschalten (dich benachrichtigen, Lichter blinken lassen) und die wichtigste Szene: die für den Einbruch.",
        "Die Einbruchsszene wird durch eine Bewegung oder eine geöffnete Tür ausgelöst, mit der Bedingung, dass die Anlage scharf ist. Dann verschickt sie Benachrichtigungen und einen Kamera-Schnappschuss und lässt eine Sirene heulen.",
        "Alles läuft lokal und reagiert in Echtzeit, selbst wenn dein Internet ausfällt.",
      ],
      outro: "Günstige Sensoren, deine eigenen Regeln und ein System, das dir komplett gehört.",
    },
    solution: {
      title: "Lokal, privat und wirklich deins",
      paragraphs: [
        "Da Gladys auf deinem eigenen Rechner läuft, funktioniert deine Alarmanlage auch ohne Internet, und deine Sensordaten und Kamerabilder bleiben in deinem lokalen Netzwerk statt auf den Servern eines Sicherheitsunternehmens.",
        "Der Kern von Gladys ist kostenlos und Open Source, dein gesamtes Setup gehört also dir. Wenn du von unterwegs nach dem Rechten sehen willst, ergänzt das optionale Gladys Plus einen verschlüsselten Fernzugriff und Kamera-Streaming, zu deinen Bedingungen und ohne deine Daten je an Dritte weiterzugeben.",
      ],
      link: {
        label: "Zur vollständigen Anleitung für die Alarmanlage →",
        href: "/de/docs/dashboard/alarm/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Richte sie ein oder kombiniere sie mit dem Rest deines lokalen Smart Homes:",
      links: [
        {
          label: "Wasserlecks erkennen",
          href: "/de/water-leak-detection/",
          text: "Lecks erkennen und das Wasser automatisch absperren.",
        },
        {
          label: "Die Anleitung zur Alarmanlage",
          href: "/de/docs/dashboard/alarm/",
          text: "Schritt für Schritt: Modi, Aktivierungsverzögerung, Code und Einbruchsszenen.",
        },
        {
          label: "Anwesenheitssimulation",
          href: "/de/presence-simulation/",
          text: "Lass dein Zuhause bewohnt wirken, während du weg bist: die perfekte Ergänzung zu deiner Alarmanlage.",
        },
        {
          label: "Dein Zuhause mit KI steuern",
          href: "/de/ai-smart-home/",
          text: "Lass die KI bei einem Einbruch eine Kamera prüfen und entscheiden, ob du alarmiert wirst.",
        },
        {
          label: "Ein lokales Smart Home aufbauen",
          href: "/de/local-smart-home/",
          text: "Das große Ganze: ein privates, lokales Smart Home auf Basis offener Standards.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Bau dir eine Alarmanlage, die dir wirklich gehört",
      text: "Gladys ist kostenlos, Open Source und setzt auf lokal zuerst. Bau dir aus günstigen Sensoren eine echte Alarmanlage, die auf deiner eigenen Hardware läuft und deine Daten zu Hause behält.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: { label: "Zur Anleitung", href: "/de/docs/dashboard/alarm/" },
    },
  },
};

export const alarmFaqEn = [
  {
    question: "Can I build my own home alarm system?",
    answer:
      "Yes. With Gladys Assistant you build a real alarm system, with armed, partial and panic modes, from off-the-shelf sensors. It runs locally on your own machine, on hardware you own, with no proprietary lock-in.",
  },
  {
    question: "What hardware do I need for a DIY alarm?",
    answer:
      "Affordable Zigbee motion detectors and door/window contacts as triggers, optionally a camera and a siren. You can mix and match brands, there's no proprietary kit to buy.",
  },
  {
    question: "Does the alarm work without internet?",
    answer:
      "Yes. Gladys runs locally, so the alarm detects intrusions and reacts in real time even if your internet is down. Only remote notifications and remote access need a connection.",
  },
  {
    question: "How does Gladys alert me of an intrusion?",
    answer:
      "Through scenes. When a sensor trips while the alarm is armed, Gladys can send you a Telegram or SMS alert and a camera snapshot, sound a siren, flash the lights, or run any other action you design.",
  },
  {
    question: "Is a DIY alarm as good as a professional one?",
    answer:
      "A Gladys alarm is very capable and flexible, but it's a system you build and maintain yourself. For many people a well-built local alarm is plenty; if you want professional monitoring too, you can combine both.",
  },
  {
    question: "Is Gladys an alternative to a subscription alarm like Verisure?",
    answer:
      "Yes, but in a different way. With Gladys you own your hardware and your installation, and your alarm runs locally on your own machine, with your data kept at home. Gladys offers an optional subscription, Gladys Plus, for encrypted remote access and camera streaming, so it isn't about avoiding a subscription altogether, it's that you stay the owner of your system and your data instead of renting a monitored service you never control.",
  },
  {
    question: "Is my security data private?",
    answer:
      "Yes. Gladys is self-hosted, so your sensor data and camera feeds stay on your local network, with no mandatory cloud and no data resale.",
  },
];

export const alarmFaqFr = [
  {
    question: "Puis-je créer ma propre alarme maison ?",
    answer:
      "Oui. Avec Gladys Assistant, vous construisez une vraie alarme, avec des modes armé, partiel et panique, à partir de capteurs du commerce. Elle tourne en local sur votre propre machine, sur du matériel qui vous appartient, sans verrouillage propriétaire.",
  },
  {
    question: "Quel matériel faut-il pour une alarme DIY ?",
    answer:
      "Des détecteurs de mouvement et des contacts de porte/fenêtre Zigbee abordables comme déclencheurs, et en option une caméra et une sirène. Vous pouvez mélanger les marques : aucun kit propriétaire à acheter.",
  },
  {
    question: "L'alarme fonctionne-t-elle sans internet ?",
    answer:
      "Oui. Gladys tourne en local : l'alarme détecte les intrusions et réagit en temps réel même si votre internet est coupé. Seules les notifications et l'accès à distance nécessitent une connexion.",
  },
  {
    question: "Comment Gladys m'alerte-t-elle d'une intrusion ?",
    answer:
      "Via des scènes. Quand un capteur se déclenche alors que l'alarme est armée, Gladys peut vous envoyer une alerte Telegram ou SMS et une photo de caméra, déclencher une sirène, faire clignoter les lumières, ou lancer n'importe quelle autre action que vous concevez.",
  },
  {
    question: "Une alarme DIY vaut-elle une alarme professionnelle ?",
    answer:
      "Une alarme Gladys est très capable et flexible, mais c'est un système que vous construisez et maintenez vous-même. Pour beaucoup de gens, une bonne alarme locale suffit largement ; si vous voulez aussi une télésurveillance professionnelle, vous pouvez combiner les deux.",
  },
  {
    question: "Gladys est-il une alternative à Homiris ou Verisure ?",
    answer:
      "Oui, mais autrement. Avec Gladys, vous possédez votre matériel et votre installation, et votre alarme tourne en local sur votre propre machine, avec vos données gardées chez vous. Gladys propose un abonnement optionnel, Gladys Plus, pour l'accès distant chiffré et le streaming caméra : il ne s'agit donc pas d'éviter tout abonnement, mais de rester propriétaire de votre système et de vos données, au lieu de louer un service télésurveillé que vous ne contrôlez jamais.",
  },
  {
    question: "Mes données de sécurité sont-elles privées ?",
    answer:
      "Oui. Gladys est auto-hébergée : vos données de capteurs et vos flux de caméra restent sur votre réseau local, sans cloud obligatoire et sans revente de données.",
  },
];

export const alarmFaqDe = [
  {
    question: "Kann ich meine eigene Alarmanlage bauen?",
    answer:
      "Ja. Mit Gladys Assistant baust du aus handelsüblichen Sensoren eine echte Alarmanlage mit Scharf-, Teil- und Panikmodus. Sie läuft lokal auf deinem eigenen Rechner, auf Hardware, die dir gehört, ohne Bindung an einen Hersteller.",
  },
  {
    question: "Welche Hardware brauche ich für eine DIY-Alarmanlage?",
    answer:
      "Günstige Zigbee-Bewegungsmelder und Tür-/Fensterkontakte als Auslöser, optional eine Kamera und eine Sirene. Du kannst Marken frei kombinieren, ein proprietäres Set musst du nicht kaufen.",
  },
  {
    question: "Funktioniert die Alarmanlage auch ohne Internet?",
    answer:
      "Ja. Gladys läuft lokal, die Alarmanlage erkennt Einbrüche also auch dann und reagiert in Echtzeit, wenn dein Internet ausfällt. Nur Benachrichtigungen aufs Handy und der Fernzugriff brauchen eine Verbindung.",
  },
  {
    question: "Wie alarmiert mich Gladys bei einem Einbruch?",
    answer:
      "Über Szenen. Löst ein Sensor aus, während die Anlage scharf ist, kann Gladys dir eine Benachrichtigung per Telegram oder SMS samt Kamera-Schnappschuss schicken, eine Sirene auslösen, die Lichter blinken lassen oder jede andere Aktion ausführen, die du festlegst.",
  },
  {
    question: "Ist eine DIY-Alarmanlage so gut wie eine professionelle?",
    answer:
      "Eine Gladys-Alarmanlage ist sehr leistungsfähig und flexibel, aber du baust und wartest sie selbst. Für viele reicht eine gut aufgebaute lokale Alarmanlage völlig aus; wenn du zusätzlich eine professionelle Überwachung möchtest, kannst du beides kombinieren.",
  },
  {
    question: "Ist Gladys eine Alternative zu einer Abo-Alarmanlage wie Verisure?",
    answer:
      "Ja, aber auf andere Art. Mit Gladys gehören dir Hardware und Installation, und deine Alarmanlage läuft lokal auf deinem eigenen Rechner, deine Daten bleiben zu Hause. Gladys bietet mit Gladys Plus ein optionales Abo für verschlüsselten Fernzugriff und Kamera-Streaming. Es geht also nicht darum, jedes Abo zu vermeiden, sondern darum, dass du Eigentümer deines Systems und deiner Daten bleibst, statt einen Überwachungsdienst zu mieten, den du nie kontrollierst.",
  },
  {
    question: "Bleiben meine Sicherheitsdaten privat?",
    answer:
      "Ja. Gladys ist selbst gehostet, deine Sensordaten und Kamerabilder bleiben also in deinem lokalen Netzwerk, ohne Cloud-Zwang und ohne Weiterverkauf deiner Daten.",
  },
];

export default alarmContent;
