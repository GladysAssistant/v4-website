// Content for the "Home Assistant Green / Yellow alternative" landing page.
// Search Console shows US queries like "alternative to home assistant green"
// and "alternative to home assistant yellow" with no dedicated page. People
// typing these want a ready-to-run smart home box. The honest answer: the
// Green is a nice plug-and-play box, the Yellow is discontinued (October
// 2025), and a small mini-PC running Gladys (or a Raspberry Pi with the Gladys
// image) is a more powerful and more flexible alternative. We don't sell a
// box outside France, so the page points to hardware people can buy anywhere.

const homeAssistantGreenAlternativeContent = {
  en: {
    meta: {
      title: "Home Assistant Green & Yellow Alternative (2026)",
      description:
        "Looking for an alternative to the Home Assistant Green, or a replacement for the discontinued Yellow? Run Gladys Assistant on a mini-PC or a Raspberry Pi: more power, a simpler interface, free and open-source.",
    },
    screenshotCaption:
      "Gladys Assistant running on a small mini-PC: the same always-on smart home box, with more headroom.",
    hero: {
      title: "An alternative to the Home Assistant Green and Yellow",
      subtitle:
        "Want a small, always-on box to run your smart home? A mini-PC or a Raspberry Pi running Gladys Assistant gives you more power and a simpler interface, for a similar budget.",
      intro: [
        "The Home Assistant Green is a neat plug-and-play box, and the Yellow, its Raspberry Pi based sibling, stopped production in October 2025. If you're shopping for one of them, you're really looking for two things: a small computer that runs 24/7, and smart home software that's pleasant to live with.",
        "You don't need a dedicated box for that. A compact mini-PC, like the ones built around Intel's N100 and N150 chips, or a Raspberry Pi 5, runs Gladys Assistant perfectly. Gladys is free, open-source, runs everything locally, and is designed to be set up without YAML or configuration files.",
      ],
      primaryCta: { label: "Install on a mini-PC", href: "/docs/installation/mini-pc/" },
      secondaryCta: {
        label: "Install on a Raspberry Pi →",
        href: "/docs/installation/raspberry-pi/",
      },
    },
    problem: {
      title: "What to know before buying a Home Assistant Green",
      intro:
        "The Green is a good product for what it is, but its fixed hardware has limits worth knowing:",
      points: [
        "It comes with 4 GB of RAM and 32 GB of eMMC storage that you can't upgrade: history, camera snapshots and add-ons all share that space.",
        "It has no built-in Zigbee, Thread or Z-Wave radio: you add a USB dongle anyway, just as you would with any other computer.",
        "It runs Home Assistant only, with its learning curve: integrations, YAML for advanced setups, and frequent breaking changes to follow.",
        "The Yellow, the other official box, has been discontinued, which is a reminder that dedicated hardware comes and goes.",
      ],
      outro:
        "A general-purpose mini-PC avoids most of these limits, and you choose the software that runs on it.",
    },
    comparison: {
      title: "Gladys on a mini-PC vs a Home Assistant Green",
      intro: "A typical Intel N100/N150 mini-PC running Gladys, compared to the Green:",
      cols: {
        feature: "",
        gladys: "Mini-PC + Gladys Assistant",
        other: "Home Assistant Green",
      },
      rows: [
        {
          feature: "Processor",
          gladys: "Intel N100/N150 class x86 CPU",
          other: "Rockchip RK3566 (ARM)",
        },
        {
          feature: "Memory",
          gladys: "Usually 8 to 16 GB",
          other: "4 GB",
        },
        {
          feature: "Storage",
          gladys: "SSD, usually 256 GB to 1 TB, replaceable",
          other: "32 GB eMMC, not upgradable",
        },
        {
          feature: "Zigbee / Thread / Z-Wave radio",
          gladys: "Add a USB dongle",
          other: "Add a USB dongle",
        },
        {
          feature: "Software",
          gladys: "Gladys Assistant, free and open-source, no YAML",
          other: "Home Assistant OS",
        },
        {
          feature: "Can run other services",
          gladys: "Yes: Docker, Plex, backups, a local AI model…",
          other: "Only as Home Assistant add-ons",
        },
      ],
      outro:
        "The Green's advantage is that it's ready out of the box. A mini-PC asks for a little setup (installing Linux, then Gladys), and our step-by-step guide walks you through it.",
    },
    features: {
      title: "Why run Gladys on your own box",
      intro: "What you get with a mini-PC or a Raspberry Pi running Gladys:",
      cards: [
        {
          icon: "⚡",
          title: "More headroom",
          text: "More memory and storage than any fixed smart home box, for years of history, camera snapshots and new features.",
        },
        {
          icon: "🧩",
          title: "Simple by design",
          text: "Everything is configured from the interface: devices, dashboards and scenes, no configuration files to edit.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave and Matter",
          text: "Plug in a Zigbee or Z-Wave USB dongle, or use Matter, and pair your devices directly, locally.",
        },
        {
          icon: "🏠",
          title: "Local and private",
          text: "Everything runs on your machine and keeps working when the internet goes down. Your data stays at home.",
        },
        {
          icon: "📱",
          title: "Built for your phone",
          text: "Gladys 5 has a modern interface designed for the phone in your pocket and the tablet on your wall.",
        },
        {
          icon: "💚",
          title: "Free and open-source",
          text: "No license, no mandatory subscription. Optional Gladys Plus adds encrypted remote access, backups and AI.",
        },
      ],
    },
    how: {
      title: "What to buy instead",
      intro: "Three good options, depending on your budget and what you already own:",
      points: [
        "A mini-PC (recommended): an Intel N100 or N150 model, like the Beelink Mini S13 I recommend, is fast, silent, sips power and costs about the same as a dedicated smart home box.",
        "A Raspberry Pi 5: the Gladys image is available directly in Raspberry Pi Imager. Boot from an SSD rather than a microSD card for reliability.",
        "A machine you already own: Gladys runs anywhere Docker runs, so a Synology NAS, an Unraid server or an old laptop works too.",
        "Add a Zigbee USB dongle (and a Z-Wave stick if you need one), then follow the installation guide.",
      ],
      outro:
        "Already running Home Assistant on a Green? You can install Gladys on another machine and try it side by side before deciding.",
    },
    solution: {
      title: "A smart home box that's really yours",
      paragraphs: [
        "A dedicated box is convenient until its hardware is discontinued or runs out of room. A standard mini-PC is easy to replace, easy to upgrade, and can run other services next to your smart home.",
        "Gladys has been developed in the open since 2013. It's free and open-source, focused on simplicity, and runs everything locally, on the hardware of your choice.",
      ],
      link: {
        label: "How Gladys compares to Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Go further",
      intro: "Pick your hardware and get started:",
      links: [
        {
          label: "Best mini-PC for home automation",
          href: "/mini-pc-home-automation/",
          text: "Which mini-PC to buy, and what you actually need.",
        },
        {
          label: "Best smart home hub",
          href: "/best-smart-home-hub/",
          text: "Every hub compared: price, protocols, local control.",
        },
        {
          label: "Install Gladys on a mini-PC",
          href: "/docs/installation/mini-pc/",
          text: "The recommended setup, step by step.",
        },
        {
          label: "Home Assistant alternative",
          href: "/home-assistant-alternative/",
          text: "Why people switch from Home Assistant to Gladys.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "The Zigbee coordinator to plug into your new box.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "The brands and protocols supported by Gladys.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Build your own smart home box",
      text: "Gladys is free, open-source and installs in a single Docker command, on a mini-PC, a Raspberry Pi or the machine you already own.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Install on a mini-PC", href: "/docs/installation/mini-pc/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative au Home Assistant Green et Yellow (2026)",
      description:
        "Vous cherchez une alternative au Home Assistant Green, ou un remplaçant au Yellow arrêté ? Installez Gladys Assistant sur un mini-PC ou un Raspberry Pi : plus de puissance, une interface plus simple, gratuite et open source.",
    },
    screenshotCaption:
      "Gladys Assistant sur un petit mini-PC : la même box domotique allumée en permanence, avec plus de marge.",
    hero: {
      title: "Une alternative au Home Assistant Green et Yellow",
      subtitle:
        "Vous voulez une petite box allumée en permanence pour votre maison connectée ? Un mini-PC ou un Raspberry Pi avec Gladys Assistant vous donne plus de puissance et une interface plus simple, pour un budget comparable.",
      intro: [
        "Le Home Assistant Green est une jolie box prête à l'emploi, et le Yellow, son grand frère basé sur Raspberry Pi, n'est plus produit depuis octobre 2025. Si vous regardez l'un des deux, vous cherchez en réalité deux choses : un petit ordinateur qui tourne 24h/24, et un logiciel domotique agréable à vivre.",
        "Pas besoin d'une box dédiée pour ça. Un mini-PC compact, comme ceux construits autour des puces Intel N100 et N150, ou un Raspberry Pi 5, fait parfaitement tourner Gladys Assistant. Gladys est gratuite, open source, tourne entièrement en local et se configure sans YAML ni fichier de configuration.",
      ],
      primaryCta: { label: "Installer sur un mini-PC", href: "/docs/installation/mini-pc/" },
      secondaryCta: {
        label: "Installer sur un Raspberry Pi →",
        href: "/docs/installation/raspberry-pi/",
      },
    },
    problem: {
      title: "Ce qu'il faut savoir avant d'acheter un Home Assistant Green",
      intro:
        "Le Green est un bon produit pour ce qu'il est, mais son matériel figé a des limites à connaître :",
      points: [
        "Il a 4 Go de RAM et 32 Go de stockage eMMC non extensibles : historiques, captures de caméras et modules complémentaires se partagent cet espace.",
        "Il n'a pas de radio Zigbee, Thread ou Z-Wave intégrée : vous ajoutez de toute façon un dongle USB, comme avec n'importe quel autre ordinateur.",
        "Il ne fait tourner que Home Assistant, avec sa courbe d'apprentissage : intégrations, YAML pour les réglages avancés et changements cassants fréquents à suivre.",
        "Le Yellow, l'autre box officielle, a été arrêté : une piqûre de rappel que le matériel dédié va et vient.",
      ],
      outro:
        "Un mini-PC standard évite la plupart de ces limites, et c'est vous qui choisissez le logiciel qui tourne dessus.",
    },
    comparison: {
      title: "Gladys sur un mini-PC vs un Home Assistant Green",
      intro: "Un mini-PC Intel N100/N150 typique avec Gladys, comparé au Green :",
      cols: {
        feature: "",
        gladys: "Mini-PC + Gladys Assistant",
        other: "Home Assistant Green",
      },
      rows: [
        {
          feature: "Processeur",
          gladys: "Processeur x86 de classe Intel N100/N150",
          other: "Rockchip RK3566 (ARM)",
        },
        {
          feature: "Mémoire",
          gladys: "En général 8 à 16 Go",
          other: "4 Go",
        },
        {
          feature: "Stockage",
          gladys: "SSD, en général de 256 Go à 1 To, remplaçable",
          other: "32 Go eMMC, non extensible",
        },
        {
          feature: "Radio Zigbee / Thread / Z-Wave",
          gladys: "Ajouter un dongle USB",
          other: "Ajouter un dongle USB",
        },
        {
          feature: "Logiciel",
          gladys: "Gladys Assistant, gratuite et open source, sans YAML",
          other: "Home Assistant OS",
        },
        {
          feature: "Peut faire tourner d'autres services",
          gladys: "Oui : Docker, Plex, sauvegardes, un modèle d'IA local…",
          other: "Uniquement sous forme de modules Home Assistant",
        },
      ],
      outro:
        "L'avantage du Green, c'est d'être prêt à l'emploi. Un mini-PC demande un peu d'installation (Linux, puis Gladys), et notre guide pas à pas vous accompagne.",
    },
    features: {
      title: "Pourquoi faire tourner Gladys sur votre propre box",
      intro: "Ce que vous obtenez avec un mini-PC ou un Raspberry Pi sous Gladys :",
      cards: [
        {
          icon: "⚡",
          title: "Plus de marge",
          text: "Plus de mémoire et de stockage qu'une box domotique figée, pour des années d'historique, de captures de caméras et de nouvelles fonctions.",
        },
        {
          icon: "🧩",
          title: "Simple par conception",
          text: "Tout se configure depuis l'interface : appareils, tableaux de bord et scènes, sans fichier de configuration à modifier.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave et Matter",
          text: "Branchez un dongle USB Zigbee ou Z-Wave, ou utilisez Matter, et associez vos appareils directement, en local.",
        },
        {
          icon: "🏠",
          title: "Local et privé",
          text: "Tout tourne sur votre machine et continue de fonctionner sans internet. Vos données restent chez vous.",
        },
        {
          icon: "📱",
          title: "Pensée pour votre téléphone",
          text: "Gladys 5 a une interface moderne, conçue pour le téléphone dans votre poche et la tablette sur votre mur.",
        },
        {
          icon: "💚",
          title: "Gratuite et open source",
          text: "Pas de licence, pas d'abonnement obligatoire. Gladys Plus, en option, ajoute l'accès distant chiffré, les sauvegardes et l'IA.",
        },
      ],
    },
    how: {
      title: "Quoi acheter à la place",
      intro: "Trois bonnes options, selon votre budget et ce que vous avez déjà :",
      points: [
        "Un mini-PC (recommandé) : un modèle Intel N100 ou N150, comme le Beelink Mini S13 que je recommande, est rapide, silencieux, consomme peu et coûte à peu près le prix d'une box domotique dédiée.",
        "Un Raspberry Pi 5 : l'image Gladys est disponible directement dans Raspberry Pi Imager. Démarrez sur un SSD plutôt qu'une carte microSD pour la fiabilité.",
        "Une machine que vous avez déjà : Gladys tourne partout où Docker tourne, donc un NAS Synology, un serveur Unraid ou un vieux portable font aussi l'affaire.",
        "Ajoutez un dongle USB Zigbee (et une clé Z-Wave si besoin), puis suivez le guide d'installation.",
      ],
      outro:
        "Vous utilisez déjà Home Assistant sur un Green ? Installez Gladys sur une autre machine et essayez-la en parallèle avant de décider.",
    },
    solution: {
      title: "Une box domotique qui vous appartient vraiment",
      paragraphs: [
        "Une box dédiée est pratique jusqu'au jour où son matériel est arrêté ou manque de place. Un mini-PC standard est facile à remplacer, facile à faire évoluer, et peut faire tourner d'autres services à côté de votre domotique.",
        "Gladys est développée publiquement depuis 2013. Elle est gratuite et open source, centrée sur la simplicité, et fait tout tourner en local, sur le matériel de votre choix.",
      ],
      link: {
        label: "Comment Gladys se compare à Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Choisissez votre matériel et lancez-vous :",
      links: [
        {
          label: "Quel mini-PC pour la domotique",
          href: "/mini-pc-home-automation/",
          text: "Quel mini-PC acheter, et ce dont vous avez vraiment besoin.",
        },
        {
          label: "Quelle box domotique choisir",
          href: "/best-smart-home-hub/",
          text: "Toutes les box comparées : prix, protocoles, contrôle local.",
        },
        {
          label: "Installer Gladys sur un mini-PC",
          href: "/docs/installation/mini-pc/",
          text: "L'installation recommandée, pas à pas.",
        },
        {
          label: "Alternative à Home Assistant",
          href: "/home-assistant-alternative/",
          text: "Pourquoi des utilisateurs passent de Home Assistant à Gladys.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Le coordinateur Zigbee à brancher sur votre nouvelle box.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Les marques et protocoles pris en charge par Gladys.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Construisez votre propre box domotique",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker, sur un mini-PC, un Raspberry Pi ou la machine que vous avez déjà.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Installer sur un mini-PC", href: "/docs/installation/mini-pc/" },
    },
  },

  de: {
    meta: {
      title: "Home Assistant Green & Yellow Alternative (2026)",
      description:
        "Alternative zum Home Assistant Green oder Ersatz für den eingestellten Yellow? Gladys auf Mini-PC oder Raspberry Pi: mehr Leistung, einfacher, kostenlos.",
    },
    screenshotCaption:
      "Gladys Assistant auf einem kleinen Mini-PC: dieselbe Smart-Home-Box im Dauerbetrieb, nur mit mehr Reserven.",
    hero: {
      title: "Eine Alternative zum Home Assistant Green und Yellow",
      subtitle:
        "Du willst eine kleine Box, die rund um die Uhr dein Smart Home steuert? Ein Mini-PC oder ein Raspberry Pi mit Gladys Assistant bietet dir mehr Leistung und eine einfachere Oberfläche – bei ähnlichem Budget.",
      intro: [
        "Der Home Assistant Green ist eine praktische Plug-and-play-Box, und die Produktion des Yellow, seines auf dem Raspberry Pi basierenden Geschwisters, wurde im Oktober 2025 eingestellt. Wenn du dir eines davon zulegen willst, suchst du eigentlich zwei Dinge: einen kleinen Computer, der 24/7 läuft, und Smart-Home-Software, mit der man gerne lebt.",
        "Dafür brauchst du keine spezielle Box. Ein kompakter Mini-PC, etwa mit Intels N100- oder N150-Chip, oder ein Raspberry Pi 5 betreibt Gladys Assistant problemlos. Gladys ist kostenlos, Open Source, läuft komplett lokal und lässt sich ohne YAML oder Konfigurationsdateien einrichten.",
      ],
      primaryCta: { label: "Auf einem Mini-PC installieren", href: "/de/docs/installation/mini-pc/" },
      secondaryCta: {
        label: "Auf einem Raspberry Pi installieren →",
        href: "/de/docs/installation/raspberry-pi/",
      },
    },
    problem: {
      title: "Was du vor dem Kauf eines Home Assistant Green wissen solltest",
      intro:
        "Der Green ist ein gutes Produkt für das, was er ist, doch seine fest verbaute Hardware hat Grenzen, die du kennen solltest:",
      points: [
        "Er hat 4 GB RAM und 32 GB eMMC-Speicher, die sich nicht aufrüsten lassen: Verlauf, Kamera-Snapshots und Add-ons teilen sich diesen Platz.",
        "Er hat kein eingebautes Zigbee-, Thread- oder Z-Wave-Funkmodul: Du steckst ohnehin einen USB-Stick an, genau wie bei jedem anderen Computer.",
        "Er läuft nur mit Home Assistant und dessen Lernkurve: Integrationen, YAML für fortgeschrittene Setups und häufige Breaking Changes, die du im Blick behalten musst.",
        "Der Yellow, die andere offizielle Box, wurde eingestellt – eine Erinnerung daran, dass spezielle Hardware kommt und geht.",
      ],
      outro:
        "Ein Allzweck-Mini-PC umgeht die meisten dieser Grenzen, und du entscheidest selbst, welche Software darauf läuft.",
    },
    comparison: {
      title: "Gladys auf einem Mini-PC vs. Home Assistant Green",
      intro: "Ein typischer Mini-PC mit Intel N100/N150 und Gladys im Vergleich zum Green:",
      cols: {
        feature: "",
        gladys: "Mini-PC + Gladys Assistant",
        other: "Home Assistant Green",
      },
      rows: [
        {
          feature: "Prozessor",
          gladys: "x86-CPU der Klasse Intel N100/N150",
          other: "Rockchip RK3566 (ARM)",
        },
        {
          feature: "Arbeitsspeicher",
          gladys: "Meist 8 bis 16 GB",
          other: "4 GB",
        },
        {
          feature: "Speicher",
          gladys: "SSD, meist 256 GB bis 1 TB, austauschbar",
          other: "32 GB eMMC, nicht aufrüstbar",
        },
        {
          feature: "Zigbee-/Thread-/Z-Wave-Funk",
          gladys: "USB-Stick anstecken",
          other: "USB-Stick anstecken",
        },
        {
          feature: "Software",
          gladys: "Gladys Assistant, kostenlos und Open Source, ohne YAML",
          other: "Home Assistant OS",
        },
        {
          feature: "Weitere Dienste möglich",
          gladys: "Ja: Docker, Plex, Backups, ein lokales KI-Modell …",
          other: "Nur als Home-Assistant-Add-ons",
        },
      ],
      outro:
        "Der Vorteil des Green: Er ist sofort startklar. Ein Mini-PC braucht etwas Einrichtung (Linux installieren, dann Gladys), und unsere Schritt-für-Schritt-Anleitung führt dich durch alles.",
    },
    features: {
      title: "Warum Gladys auf deiner eigenen Box laufen lassen",
      intro: "Das bekommst du mit einem Mini-PC oder Raspberry Pi und Gladys:",
      cards: [
        {
          icon: "⚡",
          title: "Mehr Reserven",
          text: "Mehr Arbeitsspeicher und Speicherplatz als jede fest verbaute Smart-Home-Box – für jahrelangen Verlauf, Kamera-Snapshots und neue Funktionen.",
        },
        {
          icon: "🧩",
          title: "Einfach von Grund auf",
          text: "Alles wird über die Oberfläche eingerichtet: Geräte, Dashboards und Szenen, ohne Konfigurationsdateien.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave und Matter",
          text: "Steck einen Zigbee- oder Z-Wave-USB-Stick an oder nutze Matter und kopple deine Geräte direkt und lokal.",
        },
        {
          icon: "🏠",
          title: "Lokal und privat",
          text: "Alles läuft auf deinem Rechner und funktioniert weiter, wenn das Internet ausfällt. Deine Daten bleiben zu Hause.",
        },
        {
          icon: "📱",
          title: "Fürs Handy gemacht",
          text: "Gladys 5 hat eine moderne Oberfläche, gestaltet für das Handy in deiner Tasche und das Tablet an deiner Wand.",
        },
        {
          icon: "💚",
          title: "Kostenlos und Open Source",
          text: "Keine Lizenz, kein Pflicht-Abo. Das optionale Gladys Plus ergänzt verschlüsselten Fernzugriff, Backups und KI.",
        },
      ],
    },
    how: {
      title: "Was du stattdessen kaufen kannst",
      intro: "Drei gute Optionen, je nach Budget und dem, was du schon hast:",
      points: [
        "Ein Mini-PC (empfohlen): Ein Modell mit Intel N100 oder N150, wie der von mir empfohlene Beelink Mini S13, ist schnell, leise, sparsam und kostet etwa so viel wie eine spezielle Smart-Home-Box.",
        "Ein Raspberry Pi 5: Das Gladys-Image gibt es direkt im Raspberry Pi Imager. Boote für mehr Zuverlässigkeit von einer SSD statt von einer microSD-Karte.",
        "Ein Rechner, den du schon hast: Gladys läuft überall, wo Docker läuft – ein Synology-NAS, ein Unraid-Server oder ein alter Laptop tun es also auch.",
        "Steck einen Zigbee-USB-Stick an (und bei Bedarf einen Z-Wave-Stick) und folge dann der Installationsanleitung.",
      ],
      outro:
        "Du nutzt Home Assistant schon auf einem Green? Installier Gladys auf einem anderen Rechner und teste beide parallel, bevor du dich entscheidest.",
    },
    solution: {
      title: "Eine Smart-Home-Box, die wirklich dir gehört",
      paragraphs: [
        "Eine spezielle Box ist bequem – bis ihre Hardware eingestellt wird oder der Platz ausgeht. Ein Standard-Mini-PC lässt sich leicht ersetzen und aufrüsten und kann neben deinem Smart Home noch andere Dienste betreiben.",
        "Gladys wird seit 2013 offen entwickelt. Es ist kostenlos und Open Source, setzt auf Einfachheit und läuft komplett lokal auf der Hardware deiner Wahl.",
      ],
      link: {
        label: "So schlägt sich Gladys im Vergleich zu Home Assistant →",
        href: "/de/home-assistant-vs-gladys-assistant/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Wähle deine Hardware und leg los:",
      links: [
        {
          label: "Der beste Mini-PC für Hausautomation",
          href: "/de/mini-pc-home-automation/",
          text: "Welcher Mini-PC sich lohnt und was du wirklich brauchst.",
        },
        {
          label: "Die beste Smart-Home-Zentrale",
          href: "/de/best-smart-home-hub/",
          text: "Alle Zentralen im Vergleich: Preis, Protokolle, lokale Steuerung.",
        },
        {
          label: "Gladys auf einem Mini-PC installieren",
          href: "/de/docs/installation/mini-pc/",
          text: "Das empfohlene Setup, Schritt für Schritt.",
        },
        {
          label: "Home Assistant Alternative",
          href: "/de/home-assistant-alternative/",
          text: "Warum Leute von Home Assistant zu Gladys wechseln.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/de/best-zigbee-dongle/",
          text: "Der Zigbee-Koordinator für deine neue Box.",
        },
        {
          label: "Funktioniert mit Gladys",
          href: "/de/works-with/",
          text: "Die von Gladys unterstützten Marken und Protokolle.",
        },
      ],
    },
    faqTitle: "Häufig gestellte Fragen",
    cta: {
      title: "Bau dir deine eigene Smart-Home-Box",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert – auf einem Mini-PC, einem Raspberry Pi oder dem Rechner, den du schon hast.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: { label: "Auf einem Mini-PC installieren", href: "/de/docs/installation/mini-pc/" },
    },
  },
};

export const homeAssistantGreenAlternativeFaqEn = [
  {
    question: "What is a good alternative to the Home Assistant Green?",
    answer:
      "A small Intel N100 or N150 mini-PC running Gladys Assistant. For a similar budget you usually get 8 to 16 GB of RAM and a replaceable SSD, versus 4 GB of RAM and 32 GB of eMMC on the Green. A Raspberry Pi 5 with the Gladys image is another option.",
  },
  {
    question: "Is the Home Assistant Yellow discontinued?",
    answer:
      "Yes. Nabu Casa ended production of the Home Assistant Yellow in October 2025, citing the availability and price of the Raspberry Pi Compute Module 4 it is built on. Units already sold keep working, and the Green remains the official plug-and-play box.",
  },
  {
    question: "Can I use a mini-PC instead of a Home Assistant box?",
    answer:
      "Yes. Any small x86 computer that stays on 24/7 works well, and it can run Gladys Assistant or Home Assistant. A mini-PC is usually more powerful and more upgradable than a dedicated box, and it can run other services next to your smart home.",
  },
  {
    question: "Do I need a Zigbee dongle with Gladys?",
    answer:
      "Only for Zigbee devices, just like with the Home Assistant Green, which has no built-in radio either. Plug a Zigbee USB dongle into your mini-PC or Raspberry Pi and pair your devices with Zigbee2MQTT. Matter over Wi-Fi devices need no dongle.",
  },
  {
    question: "Is Gladys easier than Home Assistant?",
    answer:
      "Gladys is designed to be simpler: everything is configured from the interface, with no YAML, and it focuses on the features most homes actually use. Home Assistant supports more integrations and is more customizable, at the cost of a steeper learning curve.",
  },
  {
    question: "Is Gladys free?",
    answer:
      "Yes. Gladys is free and open-source, forever. An optional Gladys Plus subscription adds encrypted remote access, Alexa and Google Home, backups and AI, starting at $7.99/month in the US and Canada, with a 1-month free trial.",
  },
];

export const homeAssistantGreenAlternativeFaqFr = [
  {
    question: "Quelle est une bonne alternative au Home Assistant Green ?",
    answer:
      "Un petit mini-PC Intel N100 ou N150 avec Gladys Assistant. Pour un budget comparable, vous avez en général 8 à 16 Go de RAM et un SSD remplaçable, contre 4 Go de RAM et 32 Go d'eMMC sur le Green. Un Raspberry Pi 5 avec l'image Gladys est une autre option.",
  },
  {
    question: "Le Home Assistant Yellow est-il arrêté ?",
    answer:
      "Oui. Nabu Casa a arrêté la production du Home Assistant Yellow en octobre 2025, en invoquant la disponibilité et le prix du Raspberry Pi Compute Module 4 sur lequel il repose. Les exemplaires déjà vendus continuent de fonctionner, et le Green reste la box officielle prête à l'emploi.",
  },
  {
    question: "Puis-je utiliser un mini-PC plutôt qu'une box Home Assistant ?",
    answer:
      "Oui. N'importe quel petit ordinateur x86 allumé en permanence convient, et il peut faire tourner Gladys Assistant ou Home Assistant. Un mini-PC est en général plus puissant et plus évolutif qu'une box dédiée, et peut faire tourner d'autres services à côté de votre domotique.",
  },
  {
    question: "Ai-je besoin d'un dongle Zigbee avec Gladys ?",
    answer:
      "Seulement pour les appareils Zigbee, exactement comme avec le Home Assistant Green, qui n'a pas non plus de radio intégrée. Branchez un dongle USB Zigbee sur votre mini-PC ou Raspberry Pi et associez vos appareils avec Zigbee2MQTT. Les appareils Matter en Wi-Fi n'ont besoin d'aucun dongle.",
  },
  {
    question: "Gladys est-elle plus simple que Home Assistant ?",
    answer:
      "Gladys est conçue pour être plus simple : tout se configure depuis l'interface, sans YAML, et elle se concentre sur les fonctions que la plupart des maisons utilisent vraiment. Home Assistant prend en charge plus d'intégrations et se personnalise davantage, au prix d'une courbe d'apprentissage plus raide.",
  },
  {
    question: "Gladys est-elle gratuite ?",
    answer:
      "Oui. Gladys est gratuite et open source, pour toujours. Un abonnement Gladys Plus optionnel ajoute l'accès distant chiffré, Alexa et Google Home, les sauvegardes et l'IA, à partir de 6,99 €/mois en Europe, avec un mois d'essai gratuit.",
  },
];

export const homeAssistantGreenAlternativeFaqDe = [
  {
    question: "Was ist eine gute Alternative zum Home Assistant Green?",
    answer:
      "Ein kleiner Mini-PC mit Intel N100 oder N150, auf dem Gladys Assistant läuft. Bei ähnlichem Budget bekommst du meist 8 bis 16 GB RAM und eine austauschbare SSD, statt 4 GB RAM und 32 GB eMMC beim Green. Ein Raspberry Pi 5 mit dem Gladys-Image ist eine weitere Option.",
  },
  {
    question: "Wurde der Home Assistant Yellow eingestellt?",
    answer:
      "Ja. Nabu Casa hat die Produktion des Home Assistant Yellow im Oktober 2025 beendet und dabei auf Verfügbarkeit und Preis des Raspberry Pi Compute Module 4 verwiesen, auf dem er basiert. Bereits verkaufte Geräte funktionieren weiter, und der Green bleibt die offizielle Plug-and-play-Box.",
  },
  {
    question: "Kann ich einen Mini-PC statt einer Home-Assistant-Box nutzen?",
    answer:
      "Ja. Jeder kleine x86-Rechner, der rund um die Uhr läuft, eignet sich gut und kann Gladys Assistant oder Home Assistant betreiben. Ein Mini-PC ist meist leistungsstärker und besser aufrüstbar als eine spezielle Box und kann neben deinem Smart Home noch andere Dienste betreiben.",
  },
  {
    question: "Brauche ich mit Gladys einen Zigbee-Stick?",
    answer:
      "Nur für Zigbee-Geräte – genau wie beim Home Assistant Green, der ebenfalls kein eingebautes Funkmodul hat. Steck einen Zigbee-USB-Stick an deinen Mini-PC oder Raspberry Pi und kopple deine Geräte mit Zigbee2MQTT. Matter-Geräte über WLAN brauchen keinen Stick.",
  },
  {
    question: "Ist Gladys einfacher als Home Assistant?",
    answer:
      "Gladys ist auf Einfachheit ausgelegt: Alles wird über die Oberfläche eingerichtet, ohne YAML, und der Fokus liegt auf den Funktionen, die die meisten Haushalte wirklich nutzen. Home Assistant unterstützt mehr Integrationen und ist anpassbarer, dafür ist die Lernkurve steiler.",
  },
  {
    question: "Ist Gladys kostenlos?",
    answer:
      "Ja. Gladys ist kostenlos und Open Source, für immer. Das optionale Abo Gladys Plus ergänzt verschlüsselten Fernzugriff, Alexa und Google Home, Backups und KI, ab 6,99 €/Monat in Europa, mit einem Monat kostenlosem Test.",
  },
];

export default homeAssistantGreenAlternativeContent;
