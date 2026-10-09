// Content for the "Nest thermostat alternative" landing page.
// Google ended support for the Nest Learning Thermostat 1st and 2nd gen (and
// the 2014 European 2nd gen) on October 25, 2025: they were removed from the
// Nest and Home apps, but keep working on the device itself. Facts checked on
// support.google.com/googlenest/answer/16233096 and press coverage (October
// 2026). Gladys controls thermostats over Matter (target temperature, see
// docs/integrations/matter.md) and Zigbee2MQTT (occupied_heating_setpoint).
// Netatmo works too but through Netatmo's cloud, so it isn't presented as a
// local alternative. We don't claim support for specific Z-Wave
// thermostats, which the Gladys Z-Wave JS UI doc doesn't list.

const nestThermostatAlternativeContent = {
  en: {
    meta: {
      title: "Nest Thermostat Alternative After the End of Support",
      description:
        "Google ended support for older Nest Learning Thermostats on October 25, 2025. What still works, what doesn't, and how to control your heating locally with Matter or Zigbee thermostats and Gladys Assistant, free and open source.",
    },
    screenshotCaption:
      "Thermostats, room temperatures and heating scenes in Gladys, running on your own hardware.",
    hero: {
      title: "Looking for a Nest thermostat alternative?",
      subtitle:
        "Older Nest Learning Thermostats lost their app on October 25, 2025. Here's what still works, and how to get remote control and smart schedules back without depending on a cloud again.",
      intro: [
        "On October 25, 2025, Google ended support for the 1st and 2nd generation Nest Learning Thermostats (and the 2014 European 2nd generation model). They were removed from the Nest and Home apps: no more remote control, no more Home/Away Assist, no more voice control or updates.",
        "The thermostat still heats your home and follows the schedule stored on the device. But if you want remote control and smart automations back, you have a choice: buy into another cloud, or run your heating from a platform you own. Gladys Assistant is a free, open-source smart home platform that runs at home and controls Matter and Zigbee thermostats locally.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Matter thermostats in Gladys →",
        href: "/docs/integrations/matter/",
      },
    },
    problem: {
      title: "What changed for older Nest thermostats",
      intro: "According to Google, since October 25, 2025, on 1st and 2nd gen Nest Learning Thermostats:",
      points: [
        "The thermostat is unpaired and removed from the Nest app and the Google Home app.",
        "Remote control, notifications and changing settings from your phone are gone.",
        "Home/Away Assist, voice assistants and the link with Nest Protect no longer work.",
        "There are no more software or security updates.",
        "What still works: manual control on the device, mode changes, and the schedule already stored on it.",
      ],
      outro:
        "The hardware is fine. What disappeared is the cloud it depended on, which is exactly the risk of a cloud-only thermostat.",
    },
    comparison: {
      title: "Your options after the end of support",
      intro: "Three ways forward, depending on what you want:",
      cols: {
        feature: "",
        gladys: "Local thermostat + Gladys",
        other: "New cloud thermostat",
      },
      rows: [
        {
          feature: "Remote control",
          gladys: "Yes, from Gladys (remotely with Gladys Plus)",
          other: "Yes, from the vendor's app",
        },
        {
          feature: "Works without the internet",
          gladys: "Yes, schedules and scenes run locally",
          other: "Partly, the app and automations need the cloud",
        },
        {
          feature: "Can be switched off by the vendor",
          gladys: "No, Gladys is open source and runs at home",
          other: "Yes, as happened to the old Nests",
        },
        {
          feature: "Presence-based heating",
          gladys: "Yes, with phone or Bluetooth presence in scenes",
          other: "Depends on the vendor",
        },
        {
          feature: "Mix with other devices",
          gladys: "Window sensors, energy prices, any brand",
          other: "Mostly within the vendor's ecosystem",
        },
      ],
      outro:
        "Keeping the old Nest as a plain programmable thermostat is a valid third option: it still works, just without the app.",
    },
    features: {
      title: "Thermostats you can control locally with Gladys",
      intro: "Choose hardware that speaks an open protocol:",
      cards: [
        {
          icon: "🔗",
          title: "Matter thermostats",
          text: "Gladys is a Matter controller and sets the target temperature of Matter thermostats. Even the Nest Learning Thermostat 4th gen supports Matter.",
        },
        {
          icon: "🐝",
          title: "Zigbee thermostats",
          text: "Through Zigbee2MQTT: baseboard thermostats like Sinopé in Canada, or Zigbee radiator valves in Europe.",
        },
        {
          icon: "📅",
          title: "Schedules you own",
          text: "Your heating schedule lives in Gladys scenes on your own machine, not in a vendor's app.",
        },
        {
          icon: "🏠",
          title: "Presence-based heating",
          text: "Lower the heat when everyone has left, warm up when the first person heads home: Home/Away, without Google.",
        },
        {
          icon: "🪟",
          title: "Window open, heat off",
          text: "A door or window sensor can switch heating off while it's open, room by room.",
        },
        {
          icon: "⚡",
          title: "Energy-aware heating",
          text: "Follow time-of-use prices or peak events, and track what your heating costs.",
        },
      ],
    },
    how: {
      title: "How to move your heating to Gladys",
      intro: "A simple path:",
      points: [
        "Install Gladys on a mini-PC or a Raspberry Pi.",
        "Choose a replacement that fits your heating system and speaks Matter or Zigbee, and have it wired if needed.",
        "Pair it: Matter devices directly in Gladys, Zigbee devices through Zigbee2MQTT with a USB dongle.",
        "Rebuild your schedule as Gladys scenes, and add presence and window-open rules.",
        "Add the thermostat to your dashboard, and use Gladys Plus if you want to control it from outside the home.",
      ],
      outro:
        "Check compatibility with your heating system (forced air, heat pump, boiler, baseboards) before buying any thermostat.",
    },
    solution: {
      title: "Never lose your thermostat to a shutdown again",
      paragraphs: [
        "The lesson from the Nest end of support is simple: if a device only works through someone else's cloud, its features last as long as that company wants. With open protocols like Matter and Zigbee and a local platform, your heating keeps working on your terms.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "Build a local smart home →",
        href: "/local-smart-home/",
      },
    },
    related: {
      title: "Go further",
      intro: "More on local heating and energy:",
      links: [
        {
          label: "Google Home alternative",
          href: "/google-home-alternative/",
          text: "A private, self-hosted alternative to Google Home.",
        },
        {
          label: "Sinopé Zigbee thermostats",
          href: "/sinope-zigbee/",
          text: "Baseboard thermostats controlled locally, without Neviweb.",
        },
        {
          label: "Do you need a Matter hub?",
          href: "/matter-hub/",
          text: "Controllers, Thread border routers and bridges explained.",
        },
        {
          label: "Reduce your electricity bill",
          href: "/home-energy-monitoring/",
          text: "Track your consumption and act on the data.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Take back control of your heating",
      text: "Gladys is free, open source and installs with a single Docker command. Pair a Matter or Zigbee thermostat and run your heating at home.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Build a local smart home", href: "/local-smart-home/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative au thermostat Nest après la fin du support",
      description:
        "Google a arrêté le support des anciens Nest Learning Thermostat le 25 octobre 2025. Ce qui marche encore, ce qui ne marche plus, et comment piloter son chauffage en local avec des thermostats Matter ou Zigbee et Gladys Assistant, gratuit et open source.",
    },
    screenshotCaption:
      "Thermostats, températures des pièces et scènes de chauffage dans Gladys, sur votre propre matériel.",
    hero: {
      title: "Vous cherchez une alternative au thermostat Nest ?",
      subtitle:
        "Les anciens Nest Learning Thermostat ont perdu leur application le 25 octobre 2025. Voici ce qui marche encore, et comment retrouver le contrôle à distance et des programmations intelligentes sans dépendre à nouveau d'un cloud.",
      intro: [
        "Le 25 octobre 2025, Google a arrêté le support des Nest Learning Thermostat de 1re et 2e génération (et du modèle européen de 2e génération de 2014). Ils ont été retirés des applications Nest et Google Home : plus de contrôle à distance, plus de Home/Away Assist, plus de commande vocale ni de mises à jour.",
        "Le thermostat chauffe toujours et suit la programmation enregistrée dans l'appareil. Mais si vous voulez retrouver le contrôle à distance et des automatisations intelligentes, vous avez le choix : repartir sur un autre cloud, ou piloter votre chauffage depuis une plateforme qui vous appartient. Gladys Assistant est une plateforme domotique gratuite et open source qui tourne chez vous et pilote les thermostats Matter et Zigbee en local.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Thermostats Matter dans Gladys →",
        href: "/docs/integrations/matter/",
      },
    },
    problem: {
      title: "Ce qui a changé pour les anciens Nest",
      intro: "Selon Google, depuis le 25 octobre 2025, sur les Nest Learning Thermostat de 1re et 2e génération :",
      points: [
        "Le thermostat est dissocié et retiré de l'application Nest et de Google Home.",
        "Le contrôle à distance, les notifications et les réglages depuis le téléphone ont disparu.",
        "Home/Away Assist, les assistants vocaux et le lien avec Nest Protect ne fonctionnent plus.",
        "Il n'y a plus de mises à jour logicielles ni de sécurité.",
        "Ce qui marche encore : le réglage manuel sur l'appareil, les changements de mode, et la programmation déjà enregistrée.",
      ],
      outro:
        "Le matériel va bien. Ce qui a disparu, c'est le cloud dont il dépendait : c'est exactement le risque d'un thermostat 100 % cloud.",
    },
    comparison: {
      title: "Vos options après la fin du support",
      intro: "Trois voies possibles, selon ce que vous voulez :",
      cols: {
        feature: "",
        gladys: "Thermostat local + Gladys",
        other: "Nouveau thermostat cloud",
      },
      rows: [
        {
          feature: "Contrôle à distance",
          gladys: "Oui, depuis Gladys (à distance avec Gladys Plus)",
          other: "Oui, depuis l'application du fabricant",
        },
        {
          feature: "Fonctionne sans internet",
          gladys: "Oui, programmations et scènes tournent en local",
          other: "En partie, l'application et les automatisations ont besoin du cloud",
        },
        {
          feature: "Peut être coupé par le fabricant",
          gladys: "Non, Gladys est open source et tourne chez vous",
          other: "Oui, comme pour les anciens Nest",
        },
        {
          feature: "Chauffage selon la présence",
          gladys: "Oui, avec la présence du téléphone ou en Bluetooth dans les scènes",
          other: "Selon le fabricant",
        },
        {
          feature: "Avec d'autres appareils",
          gladys: "Capteurs d'ouverture, prix de l'énergie, toutes marques",
          other: "Surtout dans l'écosystème du fabricant",
        },
      ],
      outro:
        "Garder l'ancien Nest comme simple thermostat programmable est une troisième option valable : il fonctionne toujours, juste sans application.",
    },
    features: {
      title: "Des thermostats que Gladys pilote en local",
      intro: "Choisissez du matériel qui parle un protocole ouvert :",
      cards: [
        {
          icon: "🔗",
          title: "Thermostats Matter",
          text: "Gladys est un contrôleur Matter et règle la consigne des thermostats Matter. Même le Nest Learning Thermostat de 4e génération est compatible Matter.",
        },
        {
          icon: "🐝",
          title: "Thermostats Zigbee",
          text: "Via Zigbee2MQTT : têtes thermostatiques Zigbee pour radiateurs, ou thermostats de plinthes comme Sinopé au Canada.",
        },
        {
          icon: "📅",
          title: "Des programmations à vous",
          text: "Votre programmation de chauffage vit dans des scènes Gladys sur votre propre machine, pas dans l'application d'un fabricant.",
        },
        {
          icon: "🏠",
          title: "Chauffage selon la présence",
          text: "Baissez le chauffage quand tout le monde est parti, relancez-le quand le premier rentre : un Home/Away, sans Google.",
        },
        {
          icon: "🪟",
          title: "Fenêtre ouverte, chauffage coupé",
          text: "Un capteur d'ouverture peut couper le chauffage tant qu'une fenêtre est ouverte, pièce par pièce.",
        },
        {
          icon: "⚡",
          title: "Un chauffage attentif à l'énergie",
          text: "Suivez les tarifs heures creuses ou Tempo, et voyez ce que coûte votre chauffage.",
        },
      ],
    },
    how: {
      title: "Comment passer votre chauffage sur Gladys",
      intro: "Un chemin simple :",
      points: [
        "Installez Gladys sur un mini-PC ou un Raspberry Pi.",
        "Choisissez un remplaçant adapté à votre installation de chauffage et qui parle Matter ou Zigbee, et faites-le câbler si besoin.",
        "Associez-le : les appareils Matter directement dans Gladys, les appareils Zigbee via Zigbee2MQTT avec une clé USB.",
        "Recréez votre programmation en scènes Gladys, et ajoutez des règles de présence et de fenêtre ouverte.",
        "Ajoutez le thermostat à votre tableau de bord, et utilisez Gladys Plus pour le piloter depuis l'extérieur.",
      ],
      outro:
        "Vérifiez la compatibilité avec votre système de chauffage (chaudière, pompe à chaleur, radiateurs, plinthes) avant d'acheter un thermostat.",
    },
    solution: {
      title: "Ne perdez plus jamais votre thermostat à cause d'un arrêt de service",
      paragraphs: [
        "La leçon de la fin du support Nest est simple : si un appareil ne fonctionne qu'à travers le cloud de quelqu'un d'autre, ses fonctions durent tant que cette entreprise le veut bien. Avec des protocoles ouverts comme Matter et Zigbee et une plateforme locale, votre chauffage continue de fonctionner selon vos règles.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Créer une maison connectée locale →",
        href: "/local-smart-home/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Plus sur le chauffage local et l'énergie :",
      links: [
        {
          label: "Alternative à Google Home",
          href: "/google-home-alternative/",
          text: "Une alternative privée et auto-hébergée à Google Home.",
        },
        {
          label: "Tempo EDF : couleur du jour",
          href: "/edf-tempo/",
          text: "Adaptez le chauffage aux jours rouges, automatiquement.",
        },
        {
          label: "Faut-il un hub Matter ?",
          href: "/matter-hub/",
          text: "Contrôleurs, routeurs de bordure Thread et ponts expliqués.",
        },
        {
          label: "Réduire sa facture d'électricité",
          href: "/home-energy-monitoring/",
          text: "Suivez votre consommation et agissez sur les données.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Reprenez le contrôle de votre chauffage",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Associez un thermostat Matter ou Zigbee et pilotez votre chauffage à la maison.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Créer une maison locale", href: "/local-smart-home/" },
    },
  },

  de: {
    meta: {
      title: "Nest Thermostat Alternative nach dem Support-Ende",
      description:
        "Google hat den Support für ältere Nest Learning Thermostate beendet. Was noch geht und wie du die Heizung mit Matter oder Zigbee und Gladys lokal steuerst.",
    },
    screenshotCaption:
      "Thermostate, Raumtemperaturen und Heizungsszenen in Gladys, auf deiner eigenen Hardware.",
    hero: {
      title: "Du suchst eine Alternative zum Nest Thermostat?",
      subtitle:
        "Ältere Nest Learning Thermostate haben am 25. Oktober 2025 ihre App verloren. Hier erfährst du, was noch funktioniert und wie du Fernsteuerung und smarte Zeitpläne zurückbekommst, ohne wieder von einer Cloud abhängig zu sein.",
      intro: [
        "Am 25. Oktober 2025 hat Google den Support für die Nest Learning Thermostate der 1. und 2. Generation beendet (einschließlich des europäischen Modells der 2. Generation von 2014). Sie wurden aus der Nest-App und der Google Home App entfernt: keine Fernsteuerung mehr, kein Home/Away Assist, keine Sprachsteuerung und keine Updates.",
        "Das Thermostat heizt dein Zuhause weiterhin und folgt dem auf dem Gerät gespeicherten Zeitplan. Wenn du aber Fernsteuerung und smarte Automationen zurückhaben willst, hast du die Wahl: dich auf die nächste Cloud einlassen oder deine Heizung über eine Plattform steuern, die dir gehört. Gladys Assistant ist eine kostenlose Open-Source-Plattform für dein Smart Home, die bei dir zu Hause läuft und Matter- und Zigbee-Thermostate lokal steuert.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/docs/" },
      secondaryCta: {
        label: "Matter-Thermostate in Gladys →",
        href: "/docs/integrations/matter/",
      },
    },
    problem: {
      title: "Was sich für ältere Nest Thermostate geändert hat",
      intro: "Laut Google gilt seit dem 25. Oktober 2025 für Nest Learning Thermostate der 1. und 2. Generation:",
      points: [
        "Das Thermostat wird entkoppelt und aus der Nest-App und der Google Home App entfernt.",
        "Fernsteuerung, Benachrichtigungen und das Ändern von Einstellungen per Smartphone sind weg.",
        "Home/Away Assist, Sprachassistenten und die Verbindung mit Nest Protect funktionieren nicht mehr.",
        "Es gibt keine Software- oder Sicherheitsupdates mehr.",
        "Was weiterhin funktioniert: die manuelle Bedienung am Gerät, der Moduswechsel und der bereits gespeicherte Zeitplan.",
      ],
      outro:
        "Die Hardware ist in Ordnung. Verschwunden ist die Cloud, von der sie abhing, und genau das ist das Risiko eines reinen Cloud-Thermostats.",
    },
    comparison: {
      title: "Deine Optionen nach dem Support-Ende",
      intro: "Drei Wege nach vorn, je nachdem, was du willst:",
      cols: {
        feature: "",
        gladys: "Lokales Thermostat + Gladys",
        other: "Neues Cloud-Thermostat",
      },
      rows: [
        {
          feature: "Fernsteuerung",
          gladys: "Ja, über Gladys (von unterwegs mit Gladys Plus)",
          other: "Ja, über die App des Herstellers",
        },
        {
          feature: "Funktioniert ohne Internet",
          gladys: "Ja, Zeitpläne und Szenen laufen lokal",
          other: "Teilweise, App und Automationen brauchen die Cloud",
        },
        {
          feature: "Kann vom Hersteller abgeschaltet werden",
          gladys: "Nein, Gladys ist Open Source und läuft bei dir zu Hause",
          other: "Ja, wie bei den alten Nests geschehen",
        },
        {
          feature: "Heizen nach Anwesenheit",
          gladys: "Ja, mit Anwesenheit per Smartphone oder Bluetooth in Szenen",
          other: "Abhängig vom Hersteller",
        },
        {
          feature: "Kombination mit anderen Geräten",
          gladys: "Fenstersensoren, Strompreise, jede Marke",
          other: "Meist nur innerhalb des Hersteller-Ökosystems",
        },
      ],
      outro:
        "Das alte Nest als einfaches programmierbares Thermostat weiterzunutzen, ist eine legitime dritte Option: Es funktioniert weiterhin, nur eben ohne App.",
    },
    features: {
      title: "Thermostate, die du mit Gladys lokal steuern kannst",
      intro: "Wähle Hardware, die ein offenes Protokoll spricht:",
      cards: [
        {
          icon: "🔗",
          title: "Matter-Thermostate",
          text: "Gladys ist ein Matter-Controller und stellt die Zieltemperatur von Matter-Thermostaten ein. Sogar das Nest Learning Thermostat der 4. Generation unterstützt Matter.",
        },
        {
          icon: "🐝",
          title: "Zigbee-Thermostate",
          text: "Über Zigbee2MQTT: Zigbee-Heizkörperthermostate in Europa oder Thermostate für Sockelleistenheizungen wie Sinopé in Kanada.",
        },
        {
          icon: "📅",
          title: "Zeitpläne, die dir gehören",
          text: "Dein Heizplan lebt in Gladys-Szenen auf deinem eigenen Rechner, nicht in der App eines Herstellers.",
        },
        {
          icon: "🏠",
          title: "Heizen nach Anwesenheit",
          text: "Heizung runter, wenn alle aus dem Haus sind, wieder hoch, wenn sich der Erste auf den Heimweg macht: Home/Away, ganz ohne Google.",
        },
        {
          icon: "🪟",
          title: "Fenster auf, Heizung aus",
          text: "Ein Tür- oder Fenstersensor kann die Heizung abschalten, solange geöffnet ist, Raum für Raum.",
        },
        {
          icon: "⚡",
          title: "Energiebewusst heizen",
          text: "Richte dich nach zeitabhängigen Stromtarifen oder Lastspitzen und behalte im Blick, was deine Heizung kostet.",
        },
      ],
    },
    how: {
      title: "So stellst du deine Heizung auf Gladys um",
      intro: "Ein einfacher Weg:",
      points: [
        "Installiere Gladys auf einem Mini-PC oder Raspberry Pi.",
        "Wähle einen Ersatz, der zu deiner Heizungsanlage passt und Matter oder Zigbee spricht, und lass ihn bei Bedarf anschließen.",
        "Kopple ihn: Matter-Geräte direkt in Gladys, Zigbee-Geräte über Zigbee2MQTT mit einem USB-Stick.",
        "Bau deinen Zeitplan als Gladys-Szenen nach und ergänze Regeln für Anwesenheit und offene Fenster.",
        "Füge das Thermostat deinem Dashboard hinzu und nutze Gladys Plus, wenn du es auch von unterwegs steuern willst.",
      ],
      outro:
        "Prüfe vor dem Kauf eines Thermostats, ob es zu deiner Heizungsanlage passt (Heizkessel, Wärmepumpe, Heizkörper, Warmluft- oder Sockelleistenheizung).",
    },
    solution: {
      title: "Nie wieder ein Thermostat durch eine Abschaltung verlieren",
      paragraphs: [
        "Die Lehre aus dem Nest-Support-Ende ist einfach: Wenn ein Gerät nur über die Cloud eines anderen funktioniert, bleiben seine Funktionen nur so lange erhalten, wie dieses Unternehmen es will. Mit offenen Protokollen wie Matter und Zigbee und einer lokalen Plattform funktioniert deine Heizung nach deinen Regeln weiter.",
        "Gladys ist kostenlos und Open Source, wird seit 2013 entwickelt und läuft komplett auf deiner eigenen Hardware.",
      ],
      link: {
        label: "Ein lokales Smart Home aufbauen →",
        href: "/local-smart-home/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Mehr zu lokaler Heizungssteuerung und Energie:",
      links: [
        {
          label: "Google Home Alternative",
          href: "/google-home-alternative/",
          text: "Eine private, selbst gehostete Alternative zu Google Home.",
        },
        {
          label: "Sinopé Zigbee-Thermostate",
          href: "/sinope-zigbee/",
          text: "Thermostate für Sockelleistenheizungen, lokal gesteuert, ohne Neviweb.",
        },
        {
          label: "Brauchst du einen Matter-Hub?",
          href: "/matter-hub/",
          text: "Controller, Thread-Border-Router und Bridges erklärt.",
        },
        {
          label: "Stromrechnung senken",
          href: "/home-energy-monitoring/",
          text: "Behalte deinen Verbrauch im Blick und handle auf Basis der Daten.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Hol dir die Kontrolle über deine Heizung zurück",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Kopple ein Matter- oder Zigbee-Thermostat und steuere deine Heizung bei dir zu Hause.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Ein lokales Smart Home aufbauen", href: "/local-smart-home/" },
    },
  },
  es: {
    meta: {
      title: "Alternativa al termostato Nest tras el fin del soporte",
      description:
        "Google puso fin al soporte de los antiguos Nest Learning Thermostat el 25 de octubre de 2025. Qué sigue funcionando, qué no, y cómo controlar tu calefacción en local con termostatos Matter o Zigbee y Gladys Assistant, gratuito y de código abierto.",
    },
    screenshotCaption:
      "Termostatos, temperaturas de las habitaciones y escenas de calefacción en Gladys, funcionando en tu propio hardware.",
    hero: {
      title: "¿Buscas una alternativa al termostato Nest?",
      subtitle:
        "Los antiguos Nest Learning Thermostat se quedaron sin app el 25 de octubre de 2025. Te contamos qué sigue funcionando y cómo recuperar el control remoto y las programaciones inteligentes sin volver a depender de una nube.",
      intro: [
        "El 25 de octubre de 2025, Google puso fin al soporte de los Nest Learning Thermostat de 1.ª y 2.ª generación (y del modelo europeo de 2.ª generación de 2014). Se eliminaron de las apps Nest y Google Home: ya no hay control remoto, ni Home/Away Assist, ni control por voz, ni actualizaciones.",
        "El termostato sigue calentando tu casa y siguiendo la programación guardada en el dispositivo. Pero si quieres recuperar el control remoto y las automatizaciones inteligentes, tienes una elección: apostar por otra nube o gestionar tu calefacción desde una plataforma que es tuya. Gladys Assistant es una plataforma de hogar inteligente gratuita y de código abierto que funciona en casa y controla en local termostatos Matter y Zigbee.",
      ],
      primaryCta: { label: "Empieza gratis", href: "/docs/" },
      secondaryCta: {
        label: "Termostatos Matter en Gladys →",
        href: "/docs/integrations/matter/",
      },
    },
    problem: {
      title: "Qué ha cambiado para los antiguos termostatos Nest",
      intro: "Según Google, desde el 25 de octubre de 2025, en los Nest Learning Thermostat de 1.ª y 2.ª generación:",
      points: [
        "El termostato se desvincula y se elimina de la app Nest y de la app Google Home.",
        "Se acabaron el control remoto, las notificaciones y el cambio de ajustes desde el móvil.",
        "Home/Away Assist, los asistentes de voz y la conexión con Nest Protect ya no funcionan.",
        "Ya no hay actualizaciones de software ni de seguridad.",
        "Lo que sigue funcionando: el control manual en el dispositivo, el cambio de modo y la programación ya guardada en él.",
      ],
      outro:
        "El hardware está bien. Lo que ha desaparecido es la nube de la que dependía, que es justo el riesgo de un termostato que solo funciona con la nube.",
    },
    comparison: {
      title: "Tus opciones tras el fin del soporte",
      intro: "Tres caminos posibles, según lo que quieras:",
      cols: {
        feature: "",
        gladys: "Termostato local + Gladys",
        other: "Nuevo termostato en la nube",
      },
      rows: [
        {
          feature: "Control remoto",
          gladys: "Sí, desde Gladys (a distancia con Gladys Plus)",
          other: "Sí, desde la app del fabricante",
        },
        {
          feature: "Funciona sin internet",
          gladys: "Sí, las programaciones y escenas funcionan en local",
          other: "En parte, la app y las automatizaciones necesitan la nube",
        },
        {
          feature: "El fabricante puede desactivarlo",
          gladys: "No, Gladys es de código abierto y funciona en casa",
          other: "Sí, como les pasó a los antiguos Nest",
        },
        {
          feature: "Calefacción según la presencia",
          gladys: "Sí, con la presencia del móvil o por Bluetooth en las escenas",
          other: "Depende del fabricante",
        },
        {
          feature: "Combinación con otros dispositivos",
          gladys: "Sensores de ventana, precios de la energía, cualquier marca",
          other: "Sobre todo dentro del ecosistema del fabricante",
        },
      ],
      outro:
        "Conservar el antiguo Nest como un simple termostato programable es una tercera opción válida: sigue funcionando, solo que sin la app.",
    },
    features: {
      title: "Termostatos que puedes controlar en local con Gladys",
      intro: "Elige un hardware que hable un protocolo abierto:",
      cards: [
        {
          icon: "🔗",
          title: "Termostatos Matter",
          text: "Gladys es un controlador Matter y ajusta la temperatura objetivo de los termostatos Matter. Incluso el Nest Learning Thermostat de 4.ª generación es compatible con Matter.",
        },
        {
          icon: "🐝",
          title: "Termostatos Zigbee",
          text: "A través de Zigbee2MQTT: válvulas termostáticas Zigbee para radiadores en Europa, o termostatos para calefactores de zócalo como Sinopé en Canadá.",
        },
        {
          icon: "📅",
          title: "Programaciones que son tuyas",
          text: "La programación de tu calefacción vive en escenas de Gladys en tu propio equipo, no en la app de un fabricante.",
        },
        {
          icon: "🏠",
          title: "Calefacción según la presencia",
          text: "Baja la calefacción cuando todos se han ido y caliéntala cuando el primero vuelve a casa: Home/Away, sin Google.",
        },
        {
          icon: "🪟",
          title: "Ventana abierta, calefacción apagada",
          text: "Un sensor de puerta o ventana puede apagar la calefacción mientras esté abierta, habitación por habitación.",
        },
        {
          icon: "⚡",
          title: "Calefacción consciente de la energía",
          text: "Adáptate a las tarifas por franjas horarias o a los picos de demanda, y controla lo que te cuesta la calefacción.",
        },
      ],
    },
    how: {
      title: "Cómo pasar tu calefacción a Gladys",
      intro: "Un camino sencillo:",
      points: [
        "Instala Gladys en un mini-PC o una Raspberry Pi.",
        "Elige un sustituto que se adapte a tu sistema de calefacción y hable Matter o Zigbee, y haz que lo instalen si hace falta.",
        "Vincúlalo: los dispositivos Matter directamente en Gladys, los dispositivos Zigbee a través de Zigbee2MQTT con un dongle USB.",
        "Rehaz tu programación como escenas de Gladys y añade reglas de presencia y de ventana abierta.",
        "Añade el termostato a tu panel y usa Gladys Plus si quieres controlarlo desde fuera de casa.",
      ],
      outro:
        "Antes de comprar cualquier termostato, comprueba que es compatible con tu sistema de calefacción (caldera, bomba de calor, radiadores, aire caliente o calefactores de zócalo).",
    },
    solution: {
      title: "No vuelvas a perder tu termostato por un cierre de servicio",
      paragraphs: [
        "La lección del fin del soporte de Nest es sencilla: si un dispositivo solo funciona a través de la nube de otro, sus funciones duran lo que esa empresa quiera. Con protocolos abiertos como Matter y Zigbee y una plataforma local, tu calefacción sigue funcionando según tus condiciones.",
        "Gladys es gratuito y de código abierto, se desarrolla desde 2013 y funciona íntegramente en tu propio hardware.",
      ],
      link: {
        label: "Crea un hogar inteligente local →",
        href: "/local-smart-home/",
      },
    },
    related: {
      title: "Ir más allá",
      intro: "Más sobre calefacción y energía en local:",
      links: [
        {
          label: "Alternativa a Google Home",
          href: "/google-home-alternative/",
          text: "Una alternativa privada y autoalojada a Google Home.",
        },
        {
          label: "Termostatos Zigbee Sinopé",
          href: "/sinope-zigbee/",
          text: "Termostatos para calefactores de zócalo controlados en local, sin Neviweb.",
        },
        {
          label: "¿Necesitas un hub Matter?",
          href: "/matter-hub/",
          text: "Controladores, border routers Thread y puentes, explicados.",
        },
        {
          label: "Reduce tu factura de la luz",
          href: "/home-energy-monitoring/",
          text: "Controla tu consumo y actúa a partir de los datos.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Recupera el control de tu calefacción",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Vincula un termostato Matter o Zigbee y gestiona tu calefacción desde casa.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Crea un hogar inteligente local", href: "/local-smart-home/" },
    },
  },
};

export const nestThermostatAlternativeFaqEn = [
  {
    question: "Which Nest thermostats lost support?",
    answer:
      "The Nest Learning Thermostat 1st generation (2011), 2nd generation (2012) and the 2nd generation European model (2014). Google ended their support on October 25, 2025. The 3rd and 4th generations are not affected.",
  },
  {
    question: "Does my old Nest thermostat still work?",
    answer:
      "Yes, as a regular thermostat. You can still change the temperature and mode on the device, and it keeps following its stored schedule. What's gone is everything that relied on Google's cloud: app control, remote access, Home/Away Assist, voice assistants and updates.",
  },
  {
    question: "Can Gladys control my old Nest thermostat?",
    answer:
      "No. Older Nest thermostats were only reachable through Google's cloud, which they're no longer connected to. Gladys can control a Nest Learning Thermostat 4th generation over Matter (target temperature), and Matter or Zigbee thermostats from other brands.",
  },
  {
    question: "What is a good local alternative to Nest?",
    answer:
      "A thermostat that speaks an open protocol, Matter or Zigbee, controlled by a local platform like Gladys Assistant. Your schedules, presence rules and remote access then don't depend on a vendor's cloud staying online.",
  },
  {
    question: "Do I need a subscription?",
    answer:
      "No. Gladys is free and open source and controls your thermostat on your local network. Gladys Plus is optional, for encrypted remote access from outside the home, backups and the AI assistant.",
  },
];

export const nestThermostatAlternativeFaqFr = [
  {
    question: "Quels thermostats Nest ont perdu leur support ?",
    answer:
      "Les Nest Learning Thermostat de 1re génération (2011), de 2e génération (2012) et le modèle européen de 2e génération (2014). Google a arrêté leur support le 25 octobre 2025. Les 3e et 4e générations ne sont pas concernées.",
  },
  {
    question: "Mon ancien thermostat Nest fonctionne-t-il encore ?",
    answer:
      "Oui, comme un thermostat classique. Vous pouvez toujours changer la température et le mode sur l'appareil, et il suit sa programmation enregistrée. Ce qui a disparu, c'est tout ce qui dépendait du cloud de Google : l'application, l'accès à distance, Home/Away Assist, les assistants vocaux et les mises à jour.",
  },
  {
    question: "Gladys peut-elle piloter mon ancien thermostat Nest ?",
    answer:
      "Non. Les anciens Nest n'étaient joignables que via le cloud de Google, auquel ils ne sont plus connectés. Gladys peut piloter un Nest Learning Thermostat de 4e génération via Matter (consigne de température), ainsi que les thermostats Matter ou Zigbee d'autres marques.",
  },
  {
    question: "Quelle alternative locale au Nest ?",
    answer:
      "Un thermostat qui parle un protocole ouvert, Matter ou Zigbee, piloté par une plateforme locale comme Gladys Assistant. Vos programmations, règles de présence et l'accès à distance ne dépendent alors plus du maintien en ligne du cloud d'un fabricant.",
  },
  {
    question: "Faut-il un abonnement ?",
    answer:
      "Non. Gladys est gratuite et open source et pilote votre thermostat sur votre réseau local. Gladys Plus est optionnel, pour l'accès distant chiffré depuis l'extérieur, les sauvegardes et l'assistant IA.",
  },
];

export const nestThermostatAlternativeFaqDe = [
  {
    question: "Welche Nest Thermostate haben den Support verloren?",
    answer:
      "Das Nest Learning Thermostat der 1. Generation (2011), der 2. Generation (2012) und das europäische Modell der 2. Generation (2014). Google hat ihren Support am 25. Oktober 2025 beendet. Die 3. und 4. Generation sind nicht betroffen.",
  },
  {
    question: "Funktioniert mein altes Nest Thermostat noch?",
    answer:
      "Ja, als normales Thermostat. Du kannst Temperatur und Modus weiterhin am Gerät ändern, und es folgt seinem gespeicherten Zeitplan. Weg ist alles, was auf der Google-Cloud beruhte: Steuerung per App, Fernzugriff, Home/Away Assist, Sprachassistenten und Updates.",
  },
  {
    question: "Kann Gladys mein altes Nest Thermostat steuern?",
    answer:
      "Nein. Ältere Nest Thermostate waren nur über die Google-Cloud erreichbar, mit der sie nicht mehr verbunden sind. Gladys kann ein Nest Learning Thermostat der 4. Generation über Matter steuern (Zieltemperatur), ebenso Matter- oder Zigbee-Thermostate anderer Marken.",
  },
  {
    question: "Was ist eine gute lokale Alternative zu Nest?",
    answer:
      "Ein Thermostat, das ein offenes Protokoll spricht, Matter oder Zigbee, gesteuert von einer lokalen Plattform wie Gladys Assistant. Deine Zeitpläne, Anwesenheitsregeln und der Fernzugriff hängen dann nicht mehr davon ab, dass die Cloud eines Herstellers online bleibt.",
  },
  {
    question: "Brauche ich ein Abo?",
    answer:
      "Nein. Gladys ist kostenlos und Open Source und steuert dein Thermostat in deinem lokalen Netzwerk. Gladys Plus ist optional, für verschlüsselten Fernzugriff von unterwegs, Backups und den KI-Assistenten.",
  },
];

export const nestThermostatAlternativeFaqEs = [
  {
    question: "¿Qué termostatos Nest se han quedado sin soporte?",
    answer:
      "El Nest Learning Thermostat de 1.ª generación (2011), el de 2.ª generación (2012) y el modelo europeo de 2.ª generación (2014). Google puso fin a su soporte el 25 de octubre de 2025. La 3.ª y la 4.ª generación no están afectadas.",
  },
  {
    question: "¿Mi antiguo termostato Nest sigue funcionando?",
    answer:
      "Sí, como un termostato normal. Puedes seguir cambiando la temperatura y el modo en el dispositivo, y sigue la programación que tiene guardada. Lo que ha desaparecido es todo lo que dependía de la nube de Google: el control desde la app, el acceso remoto, Home/Away Assist, los asistentes de voz y las actualizaciones.",
  },
  {
    question: "¿Gladys puede controlar mi antiguo termostato Nest?",
    answer:
      "No. Los antiguos termostatos Nest solo eran accesibles a través de la nube de Google, a la que ya no están conectados. Gladys puede controlar un Nest Learning Thermostat de 4.ª generación mediante Matter (temperatura objetivo), así como termostatos Matter o Zigbee de otras marcas.",
  },
  {
    question: "¿Cuál es una buena alternativa local a Nest?",
    answer:
      "Un termostato que hable un protocolo abierto, Matter o Zigbee, controlado por una plataforma local como Gladys Assistant. Así, tus programaciones, tus reglas de presencia y el acceso remoto ya no dependen de que la nube de un fabricante siga en línea.",
  },
  {
    question: "¿Necesito una suscripción?",
    answer:
      "No. Gladys es gratuito y de código abierto, y controla tu termostato en tu red local. Gladys Plus es opcional, para el acceso remoto cifrado desde fuera de casa, las copias de seguridad y el asistente de IA.",
  },
];

export default nestThermostatAlternativeContent;
