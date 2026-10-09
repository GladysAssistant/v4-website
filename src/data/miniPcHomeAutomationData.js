// Content for the "Best mini-PC for home automation" landing page.
// People shop for hardware before software: "best mini pc for home
// assistant", "mini pc home automation", "raspberry pi vs mini pc". The
// recommendation matches the install guide (docs/installation/1_1_mini-pc.md:
// Beelink Mini S13) and the French starter kit (Beelink T5, Mini S12
// with N95, S13 with N150). Prices and power figures are filled from sources
// checked in October 2026 (see MINI_PC_FACTS comments); keep them generic
// ("about") because street prices move.

const miniPcHomeAutomationContent = {
  en: {
    meta: {
      title: "Best Mini-PC for Home Automation (2026 Guide)",
      description:
        "Which mini-PC to run your smart home: Intel N100/N150 vs Raspberry Pi 5 vs a used business mini-PC, how much RAM and storage you need, power draw, and what we run Gladys Assistant on.",
    },
    screenshotCaption:
      "Gladys running on a small mini-PC: dashboards, scenes and history for the whole home.",
    hero: {
      title: "The best mini-PC for home automation",
      subtitle:
        "A small, quiet, always-on computer is the best home for your smart home software. Here's what to buy, and what you actually need.",
      intro: [
        "Self-hosted smart home platforms, Gladys Assistant, Home Assistant or openHAB, all run on a small computer that stays on 24/7. For years the default was a Raspberry Pi. Today, small Intel mini-PCs are usually the better buy: faster, with real SSD storage and Ethernet, often for a similar total price.",
        "This guide explains what matters, which models to look at, and when a Raspberry Pi or a used office mini-PC is still the right call.",
      ],
      primaryCta: {
        label: "Install Gladys on a mini-PC",
        href: "/docs/installation/mini-pc/",
      },
      secondaryCta: {
        label: "Recommended hardware →",
        href: "/docs/installation/recommended-hardware/",
      },
    },
    problem: {
      title: "What actually matters",
      intro: "For a home automation server, ignore gaming specs. Look at:",
      points: [
        "CPU: a recent low-power Intel chip (N100, N150 or similar) is more than enough for Gladys, Zigbee2MQTT and a few cameras.",
        "RAM: 8 GB is comfortable, 16 GB gives headroom for other self-hosted apps.",
        "Storage: an SSD (256 GB or more), not an SD card. SD cards wear out with a database writing all day.",
        "Ethernet: a wired connection is more reliable than Wi-Fi for a server.",
        "Power draw: it runs 24/7, so a low idle consumption matters more than peak performance.",
        "USB ports: for your Zigbee or Z-Wave dongle, ideally on a short USB 2.0 extension cable.",
      ],
      outro:
        "Any recent entry-level mini-PC ticks every box. The rest is budget and taste.",
    },
    comparison: {
      title: "Mini-PC vs Raspberry Pi 5",
      intro: "The two most common choices, side by side:",
      cols: {
        feature: "",
        gladys: "Intel N100/N150 mini-PC",
        other: "Raspberry Pi 5",
      },
      rows: [
        { feature: "Ready to use", gladys: "Case, power supply and SSD included", other: "Add a case, power supply and storage" },
        { feature: "Storage", gladys: "Internal SSD", other: "SD card by default; an NVMe SSD needs an extra board" },
        { feature: "Performance", gladys: "Higher, x86", other: "Good, ARM" },
        { feature: "Power draw", gladys: "Low", other: "Very low" },
        { feature: "Software compatibility", gladys: "Any x86 Docker image", other: "ARM64 images only (Gladys supports both)" },
        { feature: "Best for", gladys: "A main home server that will grow", other: "A small, frugal setup, or reusing a Pi you already own" },
      ],
      outro:
        "Once you add a case, power supply and SSD to a Raspberry Pi 5, the total price is often close to an entry-level mini-PC that comes complete.",
    },
    features: {
      title: "What we recommend",
      intro: "The machines we use and see working well with Gladys:",
      cards: [
        {
          icon: "🥇",
          title: "Beelink Mini S13 (Intel N150)",
          text: "What we recommend in the install guide: quiet, efficient, and fast enough to run Gladys and more for years.",
        },
        {
          icon: "💰",
          title: "Intel N100 / N95 mini-PCs",
          text: "Slightly older chips, often cheaper, still more than enough for a smart home.",
        },
        {
          icon: "♻️",
          title: "Used business mini-PCs",
          text: "Lenovo ThinkCentre Tiny, Dell OptiPlex Micro or HP EliteDesk Mini: robust, cheap second-hand, a bit less frugal.",
        },
        {
          icon: "🍓",
          title: "Raspberry Pi 5",
          text: "Still a good option for a small setup, ideally with an SSD rather than an SD card.",
        },
        {
          icon: "🗄️",
          title: "Your NAS",
          text: "Already have a Synology or Unraid server running Docker? Gladys runs there too.",
        },
        {
          icon: "💻",
          title: "What you already own",
          text: "An old laptop with a working battery makes a decent server: it even has a built-in UPS.",
        },
      ],
    },
    how: {
      title: "From box to smart home",
      intro: "Once you have the machine:",
      points: [
        "Plug it into your router with an Ethernet cable.",
        "Install Ubuntu Server, with the OpenSSH server option checked.",
        "Install Docker and start Gladys with a single command.",
        "Plug in your Zigbee dongle on a short USB 2.0 extension cable, and enable Zigbee2MQTT in Gladys.",
        "Open Gladys from your phone or computer and add your devices.",
      ],
      outro:
        "The step-by-step installation guide covers each step, with a video.",
    },
    solution: {
      title: "Small hardware, big smart home",
      paragraphs: [
        "A mini-PC that costs about as much as a smart speaker can run your whole home locally: dashboards, automations, history, cameras, energy monitoring, and AI if you want it. It sips power, makes no noise, and doesn't depend on any cloud.",
        "Gladys is free and open source, and runs on any of these machines with Docker.",
      ],
      link: {
        label: "Home Assistant Green alternative →",
        href: "/home-assistant-green-alternative/",
      },
    },
    related: {
      title: "Go further",
      intro: "Complete your setup:",
      links: [
        { label: "Best Zigbee USB dongle", href: "/best-zigbee-dongle/", text: "Which Zigbee coordinator to plug into your mini-PC." },
        { label: "Best smart home hub", href: "/best-smart-home-hub/", text: "Mini-PC, Hubitat, Homey, SmartThings: which hub to choose." },
        { label: "Home Assistant Green alternative", href: "/home-assistant-green-alternative/", text: "Your own local hub on a mini-PC." },
        { label: "All guides", href: "/guides/", text: "Every guide, tool and comparison in one place." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Turn a mini-PC into your smart home hub",
      text: "Gladys is free, open source and installs with a single Docker command on any of these machines.",
      primary: { label: "Install Gladys", href: "/docs/installation/mini-pc/" },
      secondary: { label: "Recommended hardware", href: "/docs/installation/recommended-hardware/" },
    },
  },

  fr: {
    meta: {
      title: "Quel mini-PC pour la domotique ? Le guide 2026",
      description:
        "Quel mini-PC pour faire tourner sa maison connectée : Intel N100/N150, Raspberry Pi 5 ou mini-PC d'occasion, combien de RAM et de stockage, consommation électrique, et sur quoi nous faisons tourner Gladys Assistant.",
    },
    screenshotCaption:
      "Gladys sur un petit mini-PC : tableaux de bord, scènes et historique pour toute la maison.",
    hero: {
      title: "Quel mini-PC pour la domotique ?",
      subtitle:
        "Un petit ordinateur silencieux, allumé en permanence, est le meilleur endroit pour votre logiciel domotique. Voici quoi acheter, et ce dont vous avez vraiment besoin.",
      intro: [
        "Les plateformes domotiques auto-hébergées, Gladys Assistant, Home Assistant ou Jeedom, tournent toutes sur un petit ordinateur allumé 24 h/24. Pendant des années, le choix par défaut était le Raspberry Pi. Aujourd'hui, les petits mini-PC Intel sont généralement un meilleur achat : plus rapides, avec un vrai SSD et l'Ethernet, souvent pour un prix total proche.",
        "Ce guide explique ce qui compte, quels modèles regarder, et quand un Raspberry Pi ou un mini-PC de bureau d'occasion reste le bon choix.",
      ],
      primaryCta: {
        label: "Installer Gladys sur un mini-PC",
        href: "/docs/installation/mini-pc/",
      },
      secondaryCta: {
        label: "Le kit de démarrage prêt à l'emploi →",
        href: "/starter-kit/",
      },
    },
    problem: {
      title: "Ce qui compte vraiment",
      intro: "Pour un serveur domotique, oubliez les fiches techniques de joueurs. Regardez :",
      points: [
        "Le processeur : une puce Intel basse consommation récente (N100, N150 ou équivalent) suffit largement pour Gladys, Zigbee2MQTT et quelques caméras.",
        "La RAM : 8 Go c'est confortable, 16 Go laissent de la marge pour d'autres applications auto-hébergées.",
        "Le stockage : un SSD (256 Go ou plus), pas une carte SD. Les cartes SD s'usent avec une base de données qui écrit toute la journée.",
        "L'Ethernet : une connexion filaire est plus fiable que le Wi-Fi pour un serveur.",
        "La consommation : il tourne 24 h/24, la consommation au repos compte plus que la puissance maximale.",
        "Les ports USB : pour votre clé Zigbee ou Z-Wave, idéalement sur une courte rallonge USB 2.0.",
      ],
      outro:
        "N'importe quel mini-PC d'entrée de gamme récent coche toutes les cases. Le reste, c'est une question de budget et de goût.",
    },
    comparison: {
      title: "Mini-PC vs Raspberry Pi 5",
      intro: "Les deux choix les plus courants, côte à côte :",
      cols: {
        feature: "",
        gladys: "Mini-PC Intel N100/N150",
        other: "Raspberry Pi 5",
      },
      rows: [
        { feature: "Prêt à l'emploi", gladys: "Boîtier, alimentation et SSD inclus", other: "Boîtier, alimentation et stockage à ajouter" },
        { feature: "Stockage", gladys: "SSD interne", other: "Carte SD par défaut ; un SSD NVMe demande une carte d'extension" },
        { feature: "Performances", gladys: "Supérieures, x86", other: "Bonnes, ARM" },
        { feature: "Consommation", gladys: "Faible", other: "Très faible" },
        { feature: "Compatibilité logicielle", gladys: "Toute image Docker x86", other: "Images ARM64 uniquement (Gladys prend en charge les deux)" },
        { feature: "Idéal pour", gladys: "Un serveur principal qui va évoluer", other: "Une petite installation sobre, ou réutiliser un Pi existant" },
      ],
      outro:
        "Une fois le boîtier, l'alimentation et le SSD ajoutés à un Raspberry Pi 5, le prix total est souvent proche d'un mini-PC d'entrée de gamme livré complet.",
    },
    features: {
      title: "Ce que nous recommandons",
      intro: "Les machines que nous utilisons et que nous voyons bien fonctionner avec Gladys :",
      cards: [
        {
          icon: "🥇",
          title: "Beelink Mini S13 (Intel N150)",
          text: "Celui que nous recommandons dans le guide d'installation : silencieux, sobre, et assez rapide pour faire tourner Gladys et plus pendant des années.",
        },
        {
          icon: "💰",
          title: "Mini-PC Intel N100 / N95",
          text: "Des puces un peu plus anciennes, souvent moins chères, toujours largement suffisantes pour une maison connectée.",
        },
        {
          icon: "♻️",
          title: "Mini-PC de bureau d'occasion",
          text: "Lenovo ThinkCentre Tiny, Dell OptiPlex Micro ou HP EliteDesk Mini : robustes, peu chers d'occasion, un peu moins sobres.",
        },
        {
          icon: "🍓",
          title: "Raspberry Pi 5",
          text: "Toujours une bonne option pour une petite installation, idéalement avec un SSD plutôt qu'une carte SD.",
        },
        {
          icon: "🗄️",
          title: "Votre NAS",
          text: "Vous avez déjà un Synology ou un serveur Unraid avec Docker ? Gladys y tourne aussi.",
        },
        {
          icon: "📦",
          title: "Le kit de démarrage officiel",
          text: "Un mini-PC Beelink avec Gladys installée et testée à la main, 6 mois de Gladys Plus, la formation vidéo et mon support : prêt dès la sortie du carton.",
        },
      ],
    },
    how: {
      title: "Du carton à la maison connectée",
      intro: "Une fois la machine en main :",
      points: [
        "Branchez-la à votre box avec un câble Ethernet.",
        "Installez Ubuntu Server, en cochant l'option OpenSSH server.",
        "Installez Docker et lancez Gladys en une seule commande.",
        "Branchez votre clé Zigbee sur une courte rallonge USB 2.0, et activez Zigbee2MQTT dans Gladys.",
        "Ouvrez Gladys depuis votre téléphone ou votre ordinateur et ajoutez vos appareils.",
      ],
      outro:
        "Le guide d'installation pas à pas couvre chaque étape, avec une vidéo. Ou prenez le kit de démarrage : tout est déjà fait.",
    },
    solution: {
      title: "Un petit matériel, une grande maison connectée",
      paragraphs: [
        "Un mini-PC qui coûte à peu près le prix d'une enceinte connectée peut faire tourner toute votre maison en local : tableaux de bord, automatisations, historique, caméras, suivi d'énergie, et IA si vous le souhaitez. Il consomme peu, ne fait pas de bruit et ne dépend d'aucun cloud.",
        "Gladys est gratuite et open source, et tourne sur toutes ces machines avec Docker.",
      ],
      link: {
        label: "Découvrir le kit de démarrage →",
        href: "/starter-kit/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Complétez votre installation :",
      links: [
        { label: "Quelle clé Zigbee choisir", href: "/best-zigbee-dongle/", text: "Quel coordinateur Zigbee brancher sur votre mini-PC." },
        { label: "Quelle box domotique choisir", href: "/best-smart-home-hub/", text: "Mini-PC, Jeedom, Homey, Home Assistant Green : laquelle choisir." },
        { label: "Kit de démarrage", href: "/starter-kit/", text: "Un mini-PC avec Gladys préinstallée, prêt à l'emploi." },
        { label: "Tous les guides", href: "/guides/", text: "Tous les guides, outils et comparatifs au même endroit." },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Transformez un mini-PC en box domotique",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker sur toutes ces machines. Ou prenez le kit de démarrage, prêt à l'emploi.",
      primary: { label: "Installer Gladys", href: "/docs/installation/mini-pc/" },
      secondary: { label: "Kit de démarrage", href: "/starter-kit/" },
    },
  },

  de: {
    meta: {
      title: "Bester Mini-PC für Hausautomation (Ratgeber 2026)",
      description:
        "Welcher Mini-PC fürs Smart Home? Intel N100/N150 vs. Raspberry Pi 5 vs. gebrauchter Business-Mini-PC: RAM, Speicher, Strom – und worauf Gladys läuft.",
    },
    screenshotCaption:
      "Gladys auf einem kleinen Mini-PC: Dashboards, Szenen und Verlauf für das ganze Zuhause.",
    hero: {
      title: "Der beste Mini-PC für Hausautomation",
      subtitle:
        "Ein kleiner, leiser Rechner, der rund um die Uhr läuft, ist das beste Zuhause für deine Smart-Home-Software. Hier erfährst du, was du kaufen solltest – und was du wirklich brauchst.",
      intro: [
        "Selbst gehostete Smart-Home-Plattformen wie Gladys Assistant, Home Assistant oder openHAB laufen alle auf einem kleinen Rechner, der rund um die Uhr eingeschaltet bleibt. Jahrelang war der Raspberry Pi die Standardwahl. Heute sind kleine Intel-Mini-PCs meist der bessere Kauf: schneller, mit echter SSD und Ethernet – und das oft zu einem ähnlichen Gesamtpreis.",
        "Dieser Ratgeber erklärt, worauf es ankommt, welche Modelle du dir ansehen solltest und wann ein Raspberry Pi oder ein gebrauchter Büro-Mini-PC trotzdem die richtige Wahl ist.",
      ],
      primaryCta: {
        label: "Gladys auf einem Mini-PC installieren",
        href: "/de/docs/installation/mini-pc/",
      },
      secondaryCta: {
        label: "Empfohlene Hardware →",
        href: "/de/docs/installation/recommended-hardware/",
      },
    },
    problem: {
      title: "Worauf es wirklich ankommt",
      intro: "Für einen Hausautomations-Server sind Gaming-Specs egal. Achte auf:",
      points: [
        "CPU: Ein aktueller, sparsamer Intel-Chip (N100, N150 o. Ä.) reicht für Gladys, Zigbee2MQTT und ein paar Kameras locker aus.",
        "RAM: 8 GB sind komfortabel, 16 GB bieten Reserven für weitere selbst gehostete Apps.",
        "Speicher: eine SSD (256 GB oder mehr), keine SD-Karte. SD-Karten verschleißen, wenn den ganzen Tag eine Datenbank darauf schreibt.",
        "Ethernet: Für einen Server ist eine Kabelverbindung zuverlässiger als WLAN.",
        "Stromverbrauch: Der Rechner läuft rund um die Uhr, daher zählt ein niedriger Leerlaufverbrauch mehr als Spitzenleistung.",
        "USB-Ports: für deinen Zigbee- oder Z-Wave-Stick, idealerweise an einem kurzen USB-2.0-Verlängerungskabel.",
      ],
      outro:
        "Jeder aktuelle Einsteiger-Mini-PC erfüllt alle Punkte. Der Rest ist eine Frage von Budget und Geschmack.",
    },
    comparison: {
      title: "Mini-PC vs. Raspberry Pi 5",
      intro: "Die zwei häufigsten Optionen im direkten Vergleich:",
      cols: {
        feature: "",
        gladys: "Mini-PC mit Intel N100/N150",
        other: "Raspberry Pi 5",
      },
      rows: [
        { feature: "Sofort einsatzbereit", gladys: "Gehäuse, Netzteil und SSD inklusive", other: "Gehäuse, Netzteil und Speicher kommen dazu" },
        { feature: "Speicher", gladys: "Interne SSD", other: "Standardmäßig SD-Karte; eine NVMe-SSD braucht eine Zusatzplatine" },
        { feature: "Leistung", gladys: "Höher, x86", other: "Gut, ARM" },
        { feature: "Stromverbrauch", gladys: "Niedrig", other: "Sehr niedrig" },
        { feature: "Software-Kompatibilität", gladys: "Jedes x86-Docker-Image", other: "Nur ARM64-Images (Gladys unterstützt beides)" },
        { feature: "Ideal für", gladys: "Einen zentralen Heimserver, der mitwachsen soll", other: "Ein kleines, sparsames Setup oder einen Pi, den du schon hast" },
      ],
      outro:
        "Rechnest du beim Raspberry Pi 5 Gehäuse, Netzteil und SSD dazu, liegt der Gesamtpreis oft nah an einem Einsteiger-Mini-PC, der komplett geliefert wird.",
    },
    features: {
      title: "Unsere Empfehlungen",
      intro: "Die Rechner, die wir selbst nutzen und die mit Gladys gut laufen:",
      cards: [
        {
          icon: "🥇",
          title: "Beelink Mini S13 (Intel N150)",
          text: "Unsere Empfehlung in der Installationsanleitung: leise, effizient und schnell genug, um Gladys und mehr über Jahre zu betreiben.",
        },
        {
          icon: "💰",
          title: "Mini-PCs mit Intel N100 / N95",
          text: "Etwas ältere Chips, oft günstiger und für ein Smart Home immer noch mehr als genug.",
        },
        {
          icon: "♻️",
          title: "Gebrauchte Business-Mini-PCs",
          text: "Lenovo ThinkCentre Tiny, Dell OptiPlex Micro oder HP EliteDesk Mini: robust, gebraucht günstig, nur etwas weniger sparsam.",
        },
        {
          icon: "🍓",
          title: "Raspberry Pi 5",
          text: "Für ein kleines Setup weiterhin eine gute Option, am besten mit SSD statt SD-Karte.",
        },
        {
          icon: "🗄️",
          title: "Dein NAS",
          text: "Du hast schon einen Synology- oder Unraid-Server mit Docker? Dann läuft Gladys auch dort.",
        },
        {
          icon: "💻",
          title: "Was du schon besitzt",
          text: "Ein alter Laptop mit funktionierendem Akku gibt einen ordentlichen Server ab – mit eingebauter USV.",
        },
      ],
    },
    how: {
      title: "Vom Karton zum Smart Home",
      intro: "Sobald du den Rechner hast:",
      points: [
        "Verbinde ihn per Ethernet-Kabel mit deinem Router.",
        "Installiere Ubuntu Server und aktiviere dabei die Option OpenSSH-Server.",
        "Installiere Docker und starte Gladys mit einem einzigen Befehl.",
        "Steck deinen Zigbee-Stick über ein kurzes USB-2.0-Verlängerungskabel ein und aktiviere Zigbee2MQTT in Gladys.",
        "Öffne Gladys auf deinem Smartphone oder Computer und füge deine Geräte hinzu.",
      ],
      outro:
        "Die Schritt-für-Schritt-Installationsanleitung erklärt jeden Schritt – inklusive Video.",
    },
    solution: {
      title: "Kleine Hardware, großes Smart Home",
      paragraphs: [
        "Ein Mini-PC, der etwa so viel kostet wie ein smarter Lautsprecher, kann dein ganzes Zuhause lokal steuern: Dashboards, Automatisierungen, Verlauf, Kameras, Energie-Monitoring und auf Wunsch KI. Er braucht kaum Strom, ist lautlos und hängt von keiner Cloud ab.",
        "Gladys ist kostenlos und Open Source und läuft mit Docker auf jedem dieser Rechner.",
      ],
      link: {
        label: "Alternative zu Home Assistant Green →",
        href: "/de/home-assistant-green-alternative/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Vervollständige dein Setup:",
      links: [
        { label: "Der beste Zigbee-USB-Stick", href: "/de/best-zigbee-dongle/", text: "Welchen Zigbee-Koordinator du an deinen Mini-PC anschließen solltest." },
        { label: "Der beste Smart-Home-Hub", href: "/de/best-smart-home-hub/", text: "Mini-PC, Hubitat, Homey, SmartThings: Welcher Hub passt zu dir?" },
        { label: "Alternative zu Home Assistant Green", href: "/de/home-assistant-green-alternative/", text: "Deine eigene lokale Zentrale auf einem Mini-PC." },
        { label: "Alle Ratgeber", href: "/de/guides/", text: "Alle Ratgeber, Tools und Vergleiche an einem Ort." },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Mach einen Mini-PC zur Zentrale deines Smart Home",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl auf jedem dieser Rechner installiert.",
      primary: { label: "Gladys installieren", href: "/de/docs/installation/mini-pc/" },
      secondary: { label: "Empfohlene Hardware", href: "/de/docs/installation/recommended-hardware/" },
    },
  },
  es: {
    meta: {
      title: "El mejor mini-PC para domótica (guía 2026)",
      description:
        "Qué mini-PC elegir para tu hogar inteligente: Intel N100/N150 frente a Raspberry Pi 5 o un mini-PC profesional de segunda mano, cuánta RAM y almacenamiento necesitas, consumo eléctrico y en qué equipo usamos Gladys Assistant.",
    },
    screenshotCaption:
      "Gladys funcionando en un pequeño mini-PC: paneles, escenas e historial para toda la casa.",
    hero: {
      title: "El mejor mini-PC para domótica",
      subtitle:
        "Un ordenador pequeño, silencioso y siempre encendido es el mejor sitio para tu software domótico. Esto es lo que conviene comprar y lo que realmente necesitas.",
      intro: [
        "Las plataformas domóticas autoalojadas, ya sea Gladys Assistant, Home Assistant u openHAB, funcionan todas en un pequeño ordenador encendido 24/7. Durante años, la opción por defecto fue una Raspberry Pi. Hoy, los pequeños mini-PC con Intel suelen ser mejor compra: más rápidos, con almacenamiento SSD de verdad y Ethernet, y a menudo por un precio total similar.",
        "Esta guía explica qué es lo importante, qué modelos mirar y cuándo una Raspberry Pi o un mini-PC de oficina de segunda mano sigue siendo la mejor elección.",
      ],
      primaryCta: {
        label: "Instalar Gladys en un mini-PC",
        href: "/es/docs/installation/mini-pc/",
      },
      secondaryCta: {
        label: "Hardware recomendado →",
        href: "/es/docs/installation/recommended-hardware/",
      },
    },
    problem: {
      title: "Lo que importa de verdad",
      intro: "Para un servidor domótico, olvídate de las especificaciones gaming. Fíjate en:",
      points: [
        "CPU: un chip Intel reciente de bajo consumo (N100, N150 o similar) es más que suficiente para Gladys, Zigbee2MQTT y algunas cámaras.",
        "RAM: 8 GB es cómodo; 16 GB te da margen para otras aplicaciones autoalojadas.",
        "Almacenamiento: un SSD (256 GB o más), no una tarjeta SD. Las tarjetas SD se desgastan con una base de datos escribiendo todo el día.",
        "Ethernet: para un servidor, una conexión por cable es más fiable que el Wi-Fi.",
        "Consumo: funciona 24/7, así que un bajo consumo en reposo importa más que el rendimiento máximo.",
        "Puertos USB: para tu dongle Zigbee o Z-Wave, idealmente con un cable alargador USB 2.0 corto.",
      ],
      outro:
        "Cualquier mini-PC de gama de entrada reciente cumple todos los requisitos. El resto es cuestión de presupuesto y de gustos.",
    },
    comparison: {
      title: "Mini-PC frente a Raspberry Pi 5",
      intro: "Las dos opciones más habituales, cara a cara:",
      cols: {
        feature: "",
        gladys: "Mini-PC Intel N100/N150",
        other: "Raspberry Pi 5",
      },
      rows: [
        { feature: "Listo para usar", gladys: "Carcasa, fuente de alimentación y SSD incluidos", other: "Hay que añadir carcasa, fuente de alimentación y almacenamiento" },
        { feature: "Almacenamiento", gladys: "SSD interno", other: "Tarjeta SD por defecto; un SSD NVMe requiere una placa adicional" },
        { feature: "Rendimiento", gladys: "Mayor, x86", other: "Bueno, ARM" },
        { feature: "Consumo", gladys: "Bajo", other: "Muy bajo" },
        { feature: "Compatibilidad de software", gladys: "Cualquier imagen Docker x86", other: "Solo imágenes ARM64 (Gladys admite ambas)" },
        { feature: "Ideal para", gladys: "Un servidor doméstico principal que irá creciendo", other: "Una instalación pequeña y austera, o reutilizar una Pi que ya tienes" },
      ],
      outro:
        "Cuando le añades carcasa, fuente de alimentación y SSD a una Raspberry Pi 5, el precio total suele acercarse al de un mini-PC de gama de entrada que viene completo.",
    },
    features: {
      title: "Lo que recomendamos",
      intro: "Los equipos que usamos y que vemos funcionar bien con Gladys:",
      cards: [
        {
          icon: "🥇",
          title: "Beelink Mini S13 (Intel N150)",
          text: "El que recomendamos en la guía de instalación: silencioso, eficiente y lo bastante rápido para ejecutar Gladys y mucho más durante años.",
        },
        {
          icon: "💰",
          title: "Mini-PC Intel N100 / N95",
          text: "Chips algo más antiguos, a menudo más baratos, y aun así más que suficientes para un hogar inteligente.",
        },
        {
          icon: "♻️",
          title: "Mini-PC profesionales de segunda mano",
          text: "Lenovo ThinkCentre Tiny, Dell OptiPlex Micro o HP EliteDesk Mini: robustos, baratos de segunda mano, algo menos eficientes.",
        },
        {
          icon: "🍓",
          title: "Raspberry Pi 5",
          text: "Sigue siendo una buena opción para una instalación pequeña, idealmente con un SSD en lugar de una tarjeta SD.",
        },
        {
          icon: "🗄️",
          title: "Tu NAS",
          text: "¿Ya tienes un servidor Synology o Unraid con Docker? Gladys también funciona ahí.",
        },
        {
          icon: "💻",
          title: "Lo que ya tienes",
          text: "Un portátil antiguo con la batería en buen estado es un servidor más que digno: hasta lleva un SAI integrado.",
        },
      ],
    },
    how: {
      title: "De la caja al hogar inteligente",
      intro: "Una vez que tengas el equipo:",
      points: [
        "Conéctalo a tu router con un cable Ethernet.",
        "Instala Ubuntu Server, marcando la opción del servidor OpenSSH.",
        "Instala Docker e inicia Gladys con un solo comando.",
        "Conecta tu dongle Zigbee con un cable alargador USB 2.0 corto y activa Zigbee2MQTT en Gladys.",
        "Abre Gladys desde tu móvil o tu ordenador y añade tus dispositivos.",
      ],
      outro:
        "La guía de instalación paso a paso cubre cada etapa, con un vídeo.",
    },
    solution: {
      title: "Hardware pequeño, gran hogar inteligente",
      paragraphs: [
        "Un mini-PC que cuesta más o menos lo mismo que un altavoz inteligente puede gestionar toda tu casa en local: paneles, automatizaciones, historial, cámaras, seguimiento del consumo de energía e IA si la quieres. Consume muy poco, no hace ruido y no depende de ninguna nube.",
        "Gladys es gratis y de código abierto, y funciona con Docker en cualquiera de estos equipos.",
      ],
      link: {
        label: "Alternativa a Home Assistant Green →",
        href: "/es/home-assistant-green-alternative/",
      },
    },
    related: {
      title: "Para ir más lejos",
      intro: "Completa tu instalación:",
      links: [
        { label: "El mejor dongle USB Zigbee", href: "/es/best-zigbee-dongle/", text: "Qué coordinador Zigbee conectar a tu mini-PC." },
        { label: "El mejor hub domótico", href: "/es/best-smart-home-hub/", text: "Mini-PC, Hubitat, Homey, SmartThings: qué hub elegir." },
        { label: "Alternativa a Home Assistant Green", href: "/es/home-assistant-green-alternative/", text: "Tu propio hub local en un mini-PC." },
        { label: "Todas las guías", href: "/es/guides/", text: "Todas las guías, herramientas y comparativas en un solo lugar." },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Convierte un mini-PC en el hub de tu hogar inteligente",
      text: "Gladys es gratis, de código abierto y se instala con un solo comando Docker en cualquiera de estos equipos.",
      primary: { label: "Instalar Gladys", href: "/es/docs/installation/mini-pc/" },
      secondary: { label: "Hardware recomendado", href: "/es/docs/installation/recommended-hardware/" },
    },
  },
};

export const miniPcHomeAutomationFaqEn = [
  {
    question: "Raspberry Pi 5 or mini-PC for home automation in 2026?",
    answer:
      "For most people, a mini-PC. Memory costs pushed Raspberry Pi 5 prices up several times: since April 2026 the 8 GB model lists at $175, before a case, power supply and SSD. An Intel N150 mini-PC with 16 GB of RAM and a 500 GB SSD sells for about $190 to $200, complete. A Pi you already own is still perfectly fine.",
  },
  {
    question: "How much power does a home automation mini-PC use?",
    answer:
      "An Intel N100 or N150 mini-PC running Linux typically idles around 6 to 10 W, or roughly 50 to 90 kWh a year. Used office mini-PCs with older Core i5 chips usually idle around 15 to 25 W. A Home Assistant Green-style ARM box idles below 2 W.",
  },
  {
    question: "How much RAM and storage do I need?",
    answer:
      "8 GB of RAM and a 256 GB SSD are plenty for Gladys, Zigbee2MQTT and a few cameras. 16 GB and 500 GB give room for other self-hosted apps. Avoid SD cards for a server that writes to a database all day.",
  },
  {
    question: "Which mini-PC do you recommend for Gladys?",
    answer:
      "We recommend the Beelink Mini S13 (Intel N150) in our installation guide. Any recent Intel N100 or N150 mini-PC with 8 to 16 GB of RAM, an SSD and Ethernet works just as well.",
  },
  {
    question: "Is a used office mini-PC a good idea?",
    answer:
      "Yes, if you find one at a good price: Lenovo ThinkCentre Tiny, Dell OptiPlex Micro and HP EliteDesk Mini are robust and powerful. They draw more power at idle than a new N100/N150 machine, which adds up over years of 24/7 use.",
  },
];

export const miniPcHomeAutomationFaqFr = [
  {
    question: "Raspberry Pi 5 ou mini-PC pour la domotique en 2026 ?",
    answer:
      "Pour la plupart des gens, un mini-PC. Le coût de la mémoire a fait grimper le prix du Raspberry Pi 5 plusieurs fois : depuis avril 2026, le modèle 8 Go est affiché à 175 $ aux États-Unis, sans boîtier, alimentation ni SSD. Aux États-Unis toujours, un mini-PC Intel N150 avec 16 Go de RAM et un SSD de 500 Go se trouve autour de 190 à 200 $, complet. Un Pi que vous avez déjà reste parfaitement utilisable.",
  },
  {
    question: "Combien consomme un mini-PC domotique ?",
    answer:
      "Un mini-PC Intel N100 ou N150 sous Linux consomme généralement autour de 6 à 10 W au repos, soit environ 50 à 90 kWh par an. Les mini-PC de bureau d'occasion avec d'anciens Core i5 tournent plutôt autour de 15 à 25 W. Une box ARM comme le Home Assistant Green descend sous les 2 W.",
  },
  {
    question: "Combien de RAM et de stockage faut-il ?",
    answer:
      "8 Go de RAM et un SSD de 256 Go suffisent largement pour Gladys, Zigbee2MQTT et quelques caméras. 16 Go et 500 Go laissent de la place pour d'autres applications auto-hébergées. Évitez les cartes SD pour un serveur qui écrit dans une base de données toute la journée.",
  },
  {
    question: "Quel mini-PC recommandez-vous pour Gladys ?",
    answer:
      "Nous recommandons le Beelink Mini S13 (Intel N150) dans notre guide d'installation. N'importe quel mini-PC Intel N100 ou N150 récent avec 8 à 16 Go de RAM, un SSD et l'Ethernet fonctionne tout aussi bien. Et si vous ne voulez rien installer, le kit de démarrage est livré avec Gladys prête à l'emploi.",
  },
  {
    question: "Un mini-PC de bureau d'occasion, bonne idée ?",
    answer:
      "Oui, si vous le trouvez à bon prix : les Lenovo ThinkCentre Tiny, Dell OptiPlex Micro et HP EliteDesk Mini sont robustes et puissants. Ils consomment plus au repos qu'un N100/N150 neuf, ce qui finit par compter sur des années de fonctionnement 24 h/24.",
  },
];

export const miniPcHomeAutomationFaqDe = [
  {
    question: "Raspberry Pi 5 oder Mini-PC für die Hausautomation 2026?",
    answer:
      "Für die meisten ein Mini-PC. Gestiegene Speicherkosten haben den Preis des Raspberry Pi 5 mehrfach in die Höhe getrieben: Seit April 2026 kostet das 8-GB-Modell in den USA 175 $ – ohne Gehäuse, Netzteil und SSD. Ebenfalls in den USA bekommst du einen Mini-PC mit Intel N150, 16 GB RAM und 500-GB-SSD für etwa 190 bis 200 $, komplett. Ein Pi, den du schon hast, ist aber weiterhin völlig in Ordnung.",
  },
  {
    question: "Wie viel Strom verbraucht ein Mini-PC für die Hausautomation?",
    answer:
      "Ein Mini-PC mit Intel N100 oder N150 unter Linux braucht im Leerlauf typischerweise etwa 6 bis 10 W, also rund 50 bis 90 kWh im Jahr. Gebrauchte Büro-Mini-PCs mit älteren Core-i5-Chips liegen im Leerlauf meist bei 15 bis 25 W. Eine ARM-Box wie der Home Assistant Green kommt im Leerlauf mit unter 2 W aus.",
  },
  {
    question: "Wie viel RAM und Speicher brauche ich?",
    answer:
      "8 GB RAM und eine 256-GB-SSD reichen für Gladys, Zigbee2MQTT und ein paar Kameras locker aus. Mit 16 GB und 500 GB hast du Platz für weitere selbst gehostete Apps. Verzichte auf SD-Karten bei einem Server, der den ganzen Tag in eine Datenbank schreibt.",
  },
  {
    question: "Welchen Mini-PC empfehlt ihr für Gladys?",
    answer:
      "In unserer Installationsanleitung empfehlen wir den Beelink Mini S13 (Intel N150). Jeder aktuelle Mini-PC mit Intel N100 oder N150, 8 bis 16 GB RAM, SSD und Ethernet funktioniert genauso gut.",
  },
  {
    question: "Ist ein gebrauchter Büro-Mini-PC eine gute Idee?",
    answer:
      "Ja, wenn du einen zu einem guten Preis findest: Lenovo ThinkCentre Tiny, Dell OptiPlex Micro und HP EliteDesk Mini sind robust und leistungsstark. Im Leerlauf verbrauchen sie mehr Strom als ein neuer N100/N150-Rechner, was sich über Jahre im Dauerbetrieb bemerkbar macht.",
  },
];

export const miniPcHomeAutomationFaqEs = [
  {
    question: "¿Raspberry Pi 5 o mini-PC para domótica en 2026?",
    answer:
      "Para la mayoría, un mini-PC. El encarecimiento de la memoria ha subido varias veces el precio de la Raspberry Pi 5: desde abril de 2026, el modelo de 8 GB cuesta 175 $ en Estados Unidos, sin carcasa, fuente de alimentación ni SSD. También en Estados Unidos, un mini-PC con Intel N150, 16 GB de RAM y un SSD de 500 GB se vende por unos 190 a 200 $, completo. Una Pi que ya tengas sigue siendo perfectamente válida.",
  },
  {
    question: "¿Cuánto consume un mini-PC domótico?",
    answer:
      "Un mini-PC con Intel N100 o N150 bajo Linux suele consumir en reposo entre 6 y 10 W, es decir, unos 50 a 90 kWh al año. Los mini-PC de oficina de segunda mano con chips Core i5 más antiguos suelen consumir en reposo entre 15 y 25 W. Una caja ARM como el Home Assistant Green consume menos de 2 W en reposo.",
  },
  {
    question: "¿Cuánta RAM y almacenamiento necesito?",
    answer:
      "8 GB de RAM y un SSD de 256 GB son más que suficientes para Gladys, Zigbee2MQTT y algunas cámaras. Con 16 GB y 500 GB tendrás margen para otras aplicaciones autoalojadas. Evita las tarjetas SD en un servidor que escribe en una base de datos todo el día.",
  },
  {
    question: "¿Qué mini-PC se recomienda para Gladys?",
    answer:
      "En nuestra guía de instalación recomendamos el Beelink Mini S13 (Intel N150). Cualquier mini-PC reciente con Intel N100 o N150, de 8 a 16 GB de RAM, SSD y Ethernet funciona igual de bien.",
  },
  {
    question: "¿Es buena idea un mini-PC de oficina de segunda mano?",
    answer:
      "Sí, si encuentras uno a buen precio: los Lenovo ThinkCentre Tiny, Dell OptiPlex Micro y HP EliteDesk Mini son robustos y potentes. En reposo consumen más que un equipo nuevo con N100/N150, lo que se nota tras años de funcionamiento 24/7.",
  },
];

export default miniPcHomeAutomationContent;
