// Content for the "Works with" (compatible brands and devices) page.
// First question of a newcomer, especially in North America where few people
// know Gladys yet: "will it work with my stuff?". The page lists the popular
// brands Gladys already supports, each card linking to its integration doc,
// and is honest about which integrations run locally and which go through the
// manufacturer's cloud. Uses the shared UseCasePage layout.

const worksWithContent = {
  en: {
    meta: {
      title: "Works With Gladys: Hue, SmartThings, Kasa, Matter & More",
      description:
        "Which devices work with Gladys Assistant? Zigbee, Z-Wave, Matter and MQTT, plus Philips Hue, SmartThings, TP-Link Kasa and Tapo, Shelly, Sonos, Reolink, LG, Samsung and many more brands.",
    },
    screenshotCaption:
      "Every brand in one local dashboard: lights, plugs, sensors, cameras and appliances side by side.",
    hero: {
      title: "Works with Gladys: the devices and brands you already own",
      subtitle:
        "Gladys speaks the open smart home standards and dozens of popular brands, so you can bring the devices you already have into one local, private dashboard.",
      intro: [
        "Before switching smart home platforms, everyone asks the same question: will it work with my devices? With Gladys Assistant, the answer is very likely yes.",
        "Gladys supports the open standards (Zigbee, Z-Wave, Matter, MQTT), which alone cover thousands of devices from hundreds of manufacturers, plus integrations for the brands people actually buy: Philips Hue, SmartThings, TP-Link Kasa and Tapo, Shelly, Sonos, Reolink, LG, Samsung and more. Here is the full picture, with a link to the setup guide for each one.",
      ],
      primaryCta: { label: "Browse all integrations", href: "/docs/integrations/" },
      secondaryCta: {
        label: "Community integrations →",
        href: "/docs/integrations/external/",
      },
    },
    problem: {
      title: "Why one app per brand doesn't scale",
      intro:
        "Most smart home devices ship with their own app and their own cloud. It works for the first two or three devices, then it becomes a problem:",
      points: [
        "Your lights, plugs, cameras and sensors live in separate apps that don't talk to each other.",
        "Automations can't mix brands: the motion sensor from one vendor can't turn on the lights of another.",
        "Each app depends on its manufacturer's cloud, so your home stops responding when the internet or their servers go down.",
        "Every vendor collects its own share of data about your household.",
      ],
      outro:
        "Gladys brings every device into one place, with one automation engine, running on your own hardware.",
    },
    comparison: {
      title: "How Gladys talks to your devices",
      intro:
        "Not every integration works the same way. Here is where each kind of device is handled, and what keeps working without the internet:",
      cols: {
        feature: "Device family",
        gladys: "How Gladys connects",
        other: "Works without the internet?",
      },
      rows: [
        {
          feature: "Zigbee (Hue bulbs, Aqara, IKEA, Sonoff…)",
          gladys: "Directly, with a Zigbee USB dongle and Zigbee2MQTT",
          other: "Yes, fully local",
        },
        {
          feature: "Z-Wave (locks, switches, sensors)",
          gladys: "Directly, with a Z-Wave stick and Z-Wave JS UI",
          other: "Yes, fully local",
        },
        {
          feature: "Matter over Wi-Fi or Ethernet",
          gladys: "Gladys is your Matter controller, no hub needed",
          other: "Yes, fully local",
        },
        {
          feature: "Matter over Thread (Eve, Nanoleaf, IKEA…)",
          gladys: "Through a Thread border router (Apple TV, HomePod, Nest Hub…)",
          other: "Yes, local",
        },
        {
          feature: "Philips Hue bridge, Kasa, Sonos, Shelly, ESPHome, Reolink",
          gladys: "Over your local network",
          other: "Yes",
        },
        {
          feature: "SmartThings, LG ThinQ, SolarEdge, Daikin…",
          gladys: "Through the manufacturer's official cloud API",
          other: "No, they need the vendor's cloud",
        },
      ],
      outro:
        "Whenever a device offers a local option, that's the one Gladys uses. Cloud integrations are there so you can still bring everything into one dashboard.",
    },
    features: {
      title: "Popular brands that work with Gladys",
      intro:
        "A selection of the brands supported today. Click a card to open its setup guide:",
      cards: [
        {
          icon: "💡",
          title: "Philips Hue",
          text: "Control your Hue lights locally through the Hue bridge, or pair the bulbs directly over Zigbee, no bridge needed.",
          href: "/docs/integrations/external/philips-hue/",
        },
        {
          icon: "🏠",
          title: "Samsung SmartThings",
          text: "Bring the switches, lights, locks, shades, thermostats and sensors of your SmartThings account into Gladys.",
          href: "/docs/integrations/external/smartthings/",
        },
        {
          icon: "🔌",
          title: "TP-Link Kasa",
          text: "Smart plugs, switches and bulbs, controlled over your local network.",
          href: "/docs/integrations/external/tp-link-kasa/",
        },
        {
          icon: "📷",
          title: "TP-Link Tapo cameras",
          text: "Images, doorbell presses and motion from your Tapo cameras and doorbells. Images stay on your network.",
          href: "/docs/integrations/external/tapo/",
        },
        {
          icon: "⚡",
          title: "Shelly",
          text: "Relays, plugs and energy meters, locally over MQTT or HTTP, with the Shelly cloud only as a fallback.",
          href: "/docs/integrations/external/shelly/",
        },
        {
          icon: "🎥",
          title: "Reolink",
          text: "Images, detections, spotlight, siren and PTZ presets. No Reolink account, nothing goes through the cloud.",
          href: "/docs/integrations/external/reolink/",
        },
        {
          icon: "🔊",
          title: "Sonos",
          text: "Control your Sonos speakers from the dashboard music widget and from your scenes, locally.",
          href: "/docs/integrations/sonos/",
        },
        {
          icon: "🧺",
          title: "LG ThinQ",
          text: "Washers, dryers, fridges and air conditioners of your ThinQ account, through LG's official API.",
          href: "/docs/integrations/external/lg-thinq/",
        },
        {
          icon: "📺",
          title: "LG and Samsung TVs",
          text: "Power, volume, mute and input source of your LG webOS and Samsung Tizen TVs, over the local network.",
          href: "/docs/integrations/external/lg-webos/",
        },
        {
          icon: "🍽️",
          title: "Home Connect (Bosch, Siemens)",
          text: "Monitor and control your Bosch, Siemens, Neff and Gaggenau appliances.",
          href: "/docs/integrations/external/home-connect/",
        },
        {
          icon: "☀️",
          title: "Enphase, SolarEdge, EcoFlow",
          text: "Solar production, home consumption and battery storage, next to the rest of your energy data.",
          href: "/docs/integrations/external/enphase-iq-gateway/",
        },
        {
          icon: "🧹",
          title: "Roborock",
          text: "State, start/stop, fan power, dock and routines of the robot vacuums paired in the Roborock app.",
          href: "/docs/integrations/external/roborock/",
        },
        {
          icon: "🍎",
          title: "Apple HomeKit & Siri",
          text: "Expose your Gladys devices to the Apple Home app and control them with Siri.",
          href: "/docs/integrations/homekit/",
        },
        {
          icon: "🗣️",
          title: "Alexa & Google Home",
          text: "Keep voice control on your Echo and Nest speakers while your automations run in Gladys (with Gladys Plus).",
          href: "/docs/integrations/google-home/",
        },
        {
          icon: "🛠️",
          title: "ESPHome & Tasmota",
          text: "Your DIY and reflashed ESP32/ESP8266 devices, controlled locally.",
          href: "/docs/integrations/external/esphome/",
        },
      ],
    },
    how: {
      title: "Don't see your device?",
      intro: "The list above is only a selection. Before giving up, check these:",
      points: [
        "Is it Zigbee, Z-Wave or Matter? Then it very likely works, whatever the brand: these standards cover thousands of devices.",
        "Look at the external integrations catalog: community integrations installable in one click, with new ones published every week.",
        "Ask on the community forum: someone may already have connected the same device, often through MQTT, Node-RED or Matterbridge.",
        "Build the integration yourself: external integrations are Docker containers written in the language of your choice, published on GitHub, with no pull request or review needed.",
      ],
      outro:
        "Gladys is open-source, and the catalog grows with every new user. If your favorite brand is missing, you can be the one who adds it.",
    },
    solution: {
      title: "One dashboard and one automation engine for every brand",
      paragraphs: [
        "Once your devices are in Gladys, brands stop mattering. An Aqara motion sensor can turn on Hue lights, a Shelly energy meter can pause a LG washer, and a Reolink camera can send you a snapshot when a Z-Wave lock opens.",
        "Gladys runs on your own machine (a mini-PC, a Raspberry Pi or a NAS), is free and open-source, and keeps working when the internet goes down for every device that has a local option.",
      ],
      link: {
        label: "See all native integrations →",
        href: "/docs/integrations/",
      },
    },
    related: {
      title: "Go further",
      intro: "Choose the right hardware and protocols for your home:",
      links: [
        {
          label: "Zigbee vs Z-Wave vs Matter vs Thread",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Which smart home protocol to choose, and why you don't have to pick just one.",
        },
        {
          label: "Do you need a Matter hub?",
          href: "/matter-hub/",
          text: "Matter controllers, Thread border routers and bridges, explained.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "The Zigbee coordinator to buy to pair your Zigbee devices locally.",
        },
        {
          label: "Build an external integration",
          href: "/docs/dev/external-integrations/",
          text: "Add support for a new brand, in any language, without a pull request.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Bring all your devices into one place",
      text: "Gladys is free, open-source and runs on your own hardware. Connect the devices you already own, whatever the brand.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Browse integrations", href: "/docs/integrations/" },
    },
  },

  fr: {
    meta: {
      title: "Appareils et marques compatibles avec Gladys Assistant",
      description:
        "Quels appareils fonctionnent avec Gladys Assistant ? Zigbee, Z-Wave, Matter et MQTT, plus Philips Hue, SmartThings, TP-Link Kasa et Tapo, Shelly, Sonos, Reolink, LG, Samsung et bien d'autres marques.",
    },
    screenshotCaption:
      "Toutes les marques dans un seul tableau de bord local : lumières, prises, capteurs, caméras et électroménager côte à côte.",
    hero: {
      title: "Compatible Gladys : les appareils et marques que vous avez déjà",
      subtitle:
        "Gladys parle les standards ouverts de la domotique et des dizaines de marques populaires : vous réunissez vos appareils existants dans un seul tableau de bord local et privé.",
      intro: [
        "Avant de changer de solution domotique, tout le monde se pose la même question : est-ce que ça marchera avec mes appareils ? Avec Gladys Assistant, la réponse est très probablement oui.",
        "Gladys prend en charge les standards ouverts (Zigbee, Z-Wave, Matter, MQTT), qui couvrent à eux seuls des milliers d'appareils de centaines de fabricants, plus des intégrations pour les marques que l'on achète vraiment : Philips Hue, SmartThings, TP-Link Kasa et Tapo, Shelly, Sonos, Reolink, LG, Samsung et d'autres. Voici la vue d'ensemble, avec le lien vers le guide de chacune.",
      ],
      primaryCta: { label: "Voir toutes les intégrations", href: "/docs/integrations/" },
      secondaryCta: {
        label: "Intégrations communautaires →",
        href: "/docs/integrations/external/",
      },
    },
    problem: {
      title: "Pourquoi une application par marque ne tient pas la route",
      intro:
        "La plupart des objets connectés arrivent avec leur propre application et leur propre cloud. Ça marche pour les deux ou trois premiers, puis ça devient un problème :",
      points: [
        "Vos lumières, prises, caméras et capteurs vivent dans des applications séparées qui ne se parlent pas.",
        "Les automatisations ne mélangent pas les marques : le détecteur d'un fabricant ne peut pas allumer les lumières d'un autre.",
        "Chaque application dépend du cloud de son fabricant : votre maison ne répond plus quand internet ou leurs serveurs tombent.",
        "Chaque fabricant collecte sa part de données sur votre foyer.",
      ],
      outro:
        "Gladys réunit tous vos appareils au même endroit, avec un seul moteur d'automatisation, sur votre propre matériel.",
    },
    comparison: {
      title: "Comment Gladys communique avec vos appareils",
      intro:
        "Toutes les intégrations ne fonctionnent pas de la même manière. Voici par où passe chaque famille d'appareils, et ce qui continue de marcher sans internet :",
      cols: {
        feature: "Famille d'appareils",
        gladys: "Comment Gladys s'y connecte",
        other: "Fonctionne sans internet ?",
      },
      rows: [
        {
          feature: "Zigbee (ampoules Hue, Aqara, IKEA, Sonoff…)",
          gladys: "En direct, avec un dongle USB Zigbee et Zigbee2MQTT",
          other: "Oui, 100 % local",
        },
        {
          feature: "Z-Wave (serrures, interrupteurs, capteurs)",
          gladys: "En direct, avec une clé Z-Wave et Z-Wave JS UI",
          other: "Oui, 100 % local",
        },
        {
          feature: "Matter en Wi-Fi ou Ethernet",
          gladys: "Gladys est votre contrôleur Matter, sans hub",
          other: "Oui, 100 % local",
        },
        {
          feature: "Matter over Thread (Eve, Nanoleaf, IKEA…)",
          gladys: "Via un routeur de bordure Thread (Apple TV, HomePod, Nest Hub…)",
          other: "Oui, en local",
        },
        {
          feature: "Pont Philips Hue, Kasa, Sonos, Shelly, ESPHome, Reolink",
          gladys: "Sur votre réseau local",
          other: "Oui",
        },
        {
          feature: "SmartThings, LG ThinQ, SolarEdge, Daikin…",
          gladys: "Via l'API cloud officielle du fabricant",
          other: "Non, elles passent par le cloud du fabricant",
        },
      ],
      outro:
        "Dès qu'un appareil propose une option locale, c'est celle que Gladys utilise. Les intégrations cloud sont là pour que vous puissiez quand même tout réunir dans un seul tableau de bord.",
    },
    features: {
      title: "Des marques populaires compatibles avec Gladys",
      intro:
        "Une sélection des marques prises en charge aujourd'hui. Cliquez sur une carte pour ouvrir son guide :",
      cards: [
        {
          icon: "💡",
          title: "Philips Hue",
          text: "Pilotez vos lumières Hue en local via le pont Hue, ou associez directement les ampoules en Zigbee, sans pont.",
          href: "/docs/integrations/external/philips-hue/",
        },
        {
          icon: "🏠",
          title: "Samsung SmartThings",
          text: "Retrouvez dans Gladys les interrupteurs, lumières, serrures, volets, thermostats et capteurs de votre compte SmartThings.",
          href: "/docs/integrations/external/smartthings/",
        },
        {
          icon: "🔌",
          title: "TP-Link Kasa",
          text: "Prises, interrupteurs et ampoules connectés, pilotés sur votre réseau local.",
          href: "/docs/integrations/external/tp-link-kasa/",
        },
        {
          icon: "📷",
          title: "Caméras TP-Link Tapo",
          text: "Images, appuis sur la sonnette et mouvements de vos caméras et sonnettes Tapo. Les images restent chez vous.",
          href: "/docs/integrations/external/tapo/",
        },
        {
          icon: "⚡",
          title: "Shelly",
          text: "Relais, prises et compteurs d'énergie, en local via MQTT ou HTTP, avec le cloud Shelly en simple secours.",
          href: "/docs/integrations/external/shelly/",
        },
        {
          icon: "🎥",
          title: "Reolink",
          text: "Images, détections, projecteur, sirène et positions PTZ. Pas de compte Reolink, rien ne passe par le cloud.",
          href: "/docs/integrations/external/reolink/",
        },
        {
          icon: "🔊",
          title: "Sonos",
          text: "Pilotez vos enceintes Sonos depuis le widget musique du tableau de bord et depuis vos scènes, en local.",
          href: "/docs/integrations/sonos/",
        },
        {
          icon: "🧺",
          title: "LG ThinQ",
          text: "Lave-linge, sèche-linge, réfrigérateurs et climatiseurs de votre compte ThinQ, via l'API officielle de LG.",
          href: "/docs/integrations/external/lg-thinq/",
        },
        {
          icon: "📺",
          title: "Téléviseurs LG et Samsung",
          text: "Allumage, volume, sourdine et source de vos TV LG webOS et Samsung Tizen, sur le réseau local.",
          href: "/docs/integrations/external/lg-webos/",
        },
        {
          icon: "🍽️",
          title: "Home Connect (Bosch, Siemens)",
          text: "Surveillez et pilotez vos appareils Bosch, Siemens, Neff et Gaggenau.",
          href: "/docs/integrations/external/home-connect/",
        },
        {
          icon: "☀️",
          title: "Enphase, SolarEdge, EcoFlow",
          text: "Production solaire, consommation de la maison et stockage batterie, à côté du reste de vos données d'énergie.",
          href: "/docs/integrations/external/enphase-iq-gateway/",
        },
        {
          icon: "🧹",
          title: "Roborock",
          text: "État, marche/arrêt, puissance d'aspiration, station et routines des robots aspirateurs associés à l'application Roborock.",
          href: "/docs/integrations/external/roborock/",
        },
        {
          icon: "🍎",
          title: "Apple HomeKit et Siri",
          text: "Exposez vos appareils Gladys dans l'application Maison d'Apple et pilotez-les avec Siri.",
          href: "/docs/integrations/homekit/",
        },
        {
          icon: "🗣️",
          title: "Alexa et Google Home",
          text: "Gardez la commande vocale sur vos enceintes Echo et Nest pendant que vos automatisations tournent dans Gladys (avec Gladys Plus).",
          href: "/docs/integrations/google-home/",
        },
        {
          icon: "🛠️",
          title: "ESPHome et Tasmota",
          text: "Vos montages DIY et appareils ESP32/ESP8266 reflashés, pilotés en local.",
          href: "/docs/integrations/external/esphome/",
        },
      ],
    },
    how: {
      title: "Votre appareil n'est pas dans la liste ?",
      intro: "La liste ci-dessus n'est qu'une sélection. Avant d'abandonner, vérifiez ceci :",
      points: [
        "Est-il Zigbee, Z-Wave ou Matter ? Alors il fonctionne très probablement, quelle que soit la marque : ces standards couvrent des milliers d'appareils.",
        "Parcourez le catalogue des intégrations externes : des intégrations communautaires installables en un clic, avec de nouvelles publiées chaque semaine.",
        "Demandez sur le forum : quelqu'un a peut-être déjà connecté le même appareil, souvent via MQTT, Node-RED ou Matterbridge.",
        "Créez l'intégration vous-même : les intégrations externes sont des conteneurs Docker écrits dans le langage de votre choix, publiés sur GitHub, sans pull request ni relecture.",
      ],
      outro:
        "Gladys est open source, et le catalogue grandit avec chaque nouvel utilisateur. Si votre marque préférée manque, vous pouvez être celui ou celle qui l'ajoute.",
    },
    solution: {
      title: "Un seul tableau de bord et un seul moteur d'automatisation pour toutes les marques",
      paragraphs: [
        "Une fois vos appareils dans Gladys, les marques ne comptent plus. Un détecteur Aqara peut allumer des lumières Hue, un compteur Shelly peut mettre en pause un lave-linge LG, et une caméra Reolink peut vous envoyer une photo quand une serrure Z-Wave s'ouvre.",
        "Gladys tourne sur votre propre machine (mini-PC, Raspberry Pi ou NAS), est gratuite et open source, et continue de fonctionner sans internet pour tous les appareils qui ont une option locale.",
      ],
      link: {
        label: "Voir toutes les intégrations natives →",
        href: "/docs/integrations/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Choisissez le bon matériel et les bons protocoles pour votre maison :",
      links: [
        {
          label: "Zigbee vs Z-Wave vs Matter vs Thread",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Quel protocole domotique choisir, et pourquoi vous n'êtes pas obligé d'en choisir un seul.",
        },
        {
          label: "Quel hub Matter choisir ?",
          href: "/matter-hub/",
          text: "Contrôleurs Matter, routeurs de bordure Thread et ponts, expliqués simplement.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Le coordinateur Zigbee à acheter pour associer vos appareils Zigbee en local.",
        },
        {
          label: "Créer une intégration externe",
          href: "/docs/dev/external-integrations/",
          text: "Ajoutez une nouvelle marque, dans n'importe quel langage, sans pull request.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Réunissez tous vos appareils au même endroit",
      text: "Gladys est gratuite, open source et tourne sur votre propre matériel. Connectez les appareils que vous avez déjà, quelle que soit la marque.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Voir les intégrations", href: "/docs/integrations/" },
    },
  },

  de: {
    meta: {
      title: "Kompatibel mit Gladys: Hue, SmartThings, Matter & mehr",
      description:
        "Welche Geräte funktionieren mit Gladys? Zigbee, Z-Wave, Matter, MQTT sowie Philips Hue, SmartThings, Shelly, Sonos, Reolink, Bosch, Siemens und viele mehr.",
    },
    screenshotCaption:
      "Alle Marken in einem lokalen Dashboard: Licht, Steckdosen, Sensoren, Kameras und Haushaltsgeräte nebeneinander.",
    hero: {
      title: "Kompatibel mit Gladys: die Geräte und Marken, die du schon hast",
      subtitle:
        "Gladys spricht die offenen Smart-Home-Standards und Dutzende beliebte Marken. So holst du deine vorhandenen Geräte in ein einziges lokales, privates Dashboard.",
      intro: [
        "Bevor man die Smart-Home-Plattform wechselt, stellt sich jeder dieselbe Frage: Funktioniert das mit meinen Geräten? Bei Gladys Assistant lautet die Antwort sehr wahrscheinlich: ja.",
        "Gladys unterstützt die offenen Standards (Zigbee, Z-Wave, Matter, MQTT), die allein schon Tausende Geräte von Hunderten Herstellern abdecken, dazu Integrationen für die Marken, die man tatsächlich kauft: Philips Hue, SmartThings, TP-Link Kasa und Tapo, Shelly, Sonos, Reolink, LG, Samsung und mehr. Hier ist der komplette Überblick, mit dem Link zur Einrichtungsanleitung für jede Marke.",
      ],
      primaryCta: { label: "Alle Integrationen ansehen", href: "/docs/integrations/" },
      secondaryCta: {
        label: "Community-Integrationen →",
        href: "/docs/integrations/external/",
      },
    },
    problem: {
      title: "Warum eine App pro Marke nicht skaliert",
      intro:
        "Die meisten Smart-Home-Geräte kommen mit eigener App und eigener Cloud. Bei den ersten zwei, drei Geräten klappt das noch, danach wird es zum Problem:",
      points: [
        "Deine Lampen, Steckdosen, Kameras und Sensoren stecken in getrennten Apps, die nicht miteinander reden.",
        "Automationen können keine Marken mischen: Der Bewegungsmelder des einen Herstellers kann nicht das Licht eines anderen einschalten.",
        "Jede App hängt an der Cloud ihres Herstellers. Fällt das Internet oder deren Server aus, reagiert dein Zuhause nicht mehr.",
        "Jeder Hersteller sammelt seinen eigenen Teil an Daten über deinen Haushalt.",
      ],
      outro:
        "Gladys bringt alle Geräte an einen Ort, mit einer einzigen Automations-Engine, auf deiner eigenen Hardware.",
    },
    comparison: {
      title: "Wie Gladys mit deinen Geräten spricht",
      intro:
        "Nicht jede Integration funktioniert gleich. Hier siehst du, wie jede Geräteart angebunden wird und was auch ohne Internet weiterläuft:",
      cols: {
        feature: "Geräteart",
        gladys: "Wie Gladys sich verbindet",
        other: "Funktioniert ohne Internet?",
      },
      rows: [
        {
          feature: "Zigbee (Hue-Lampen, Aqara, IKEA, Sonoff…)",
          gladys: "Direkt, mit einem Zigbee-USB-Stick und Zigbee2MQTT",
          other: "Ja, komplett lokal",
        },
        {
          feature: "Z-Wave (Schlösser, Schalter, Sensoren)",
          gladys: "Direkt, mit einem Z-Wave-Stick und Z-Wave JS UI",
          other: "Ja, komplett lokal",
        },
        {
          feature: "Matter über WLAN oder Ethernet",
          gladys: "Gladys ist dein Matter-Controller, kein Hub nötig",
          other: "Ja, komplett lokal",
        },
        {
          feature: "Matter over Thread (Eve, Nanoleaf, IKEA…)",
          gladys: "Über einen Thread-Border-Router (Apple TV, HomePod, Nest Hub…)",
          other: "Ja, lokal",
        },
        {
          feature: "Philips Hue Bridge, Kasa, Sonos, Shelly, ESPHome, Reolink",
          gladys: "Über dein lokales Netzwerk",
          other: "Ja",
        },
        {
          feature: "SmartThings, LG ThinQ, SolarEdge, Daikin…",
          gladys: "Über die offizielle Cloud-API des Herstellers",
          other: "Nein, sie brauchen die Cloud des Herstellers",
        },
      ],
      outro:
        "Sobald ein Gerät eine lokale Option bietet, nutzt Gladys genau diese. Cloud-Integrationen gibt es, damit du trotzdem alles in einem Dashboard zusammenführen kannst.",
    },
    features: {
      title: "Beliebte Marken, die mit Gladys funktionieren",
      intro:
        "Eine Auswahl der Marken, die heute unterstützt werden. Klick auf eine Karte, um die Einrichtungsanleitung zu öffnen:",
      cards: [
        {
          icon: "💡",
          title: "Philips Hue",
          text: "Steuere deine Hue-Lampen lokal über die Hue Bridge oder koppel sie direkt per Zigbee, ganz ohne Bridge.",
          href: "/docs/integrations/external/philips-hue/",
        },
        {
          icon: "🏠",
          title: "Samsung SmartThings",
          text: "Hol dir Schalter, Lampen, Schlösser, Rollläden, Thermostate und Sensoren deines SmartThings-Kontos in Gladys.",
          href: "/docs/integrations/external/smartthings/",
        },
        {
          icon: "🔌",
          title: "TP-Link Kasa",
          text: "Smarte Steckdosen, Schalter und Lampen, gesteuert über dein lokales Netzwerk.",
          href: "/docs/integrations/external/tp-link-kasa/",
        },
        {
          icon: "📷",
          title: "TP-Link-Tapo-Kameras",
          text: "Bilder, Klingeln und Bewegungen deiner Tapo-Kameras und -Türklingeln. Die Bilder bleiben in deinem Netzwerk.",
          href: "/docs/integrations/external/tapo/",
        },
        {
          icon: "⚡",
          title: "Shelly",
          text: "Relais, Steckdosen und Energiemessgeräte, lokal über MQTT oder HTTP, mit der Shelly Cloud nur als Rückfallebene.",
          href: "/docs/integrations/external/shelly/",
        },
        {
          icon: "🎥",
          title: "Reolink",
          text: "Bilder, Erkennungen, Scheinwerfer, Sirene und PTZ-Positionen. Kein Reolink-Konto, nichts läuft über die Cloud.",
          href: "/docs/integrations/external/reolink/",
        },
        {
          icon: "🔊",
          title: "Sonos",
          text: "Steuere deine Sonos-Lautsprecher lokal über das Musik-Widget im Dashboard und aus deinen Szenen.",
          href: "/docs/integrations/sonos/",
        },
        {
          icon: "🧺",
          title: "LG ThinQ",
          text: "Waschmaschinen, Trockner, Kühlschränke und Klimageräte deines ThinQ-Kontos, über die offizielle API von LG.",
          href: "/docs/integrations/external/lg-thinq/",
        },
        {
          icon: "📺",
          title: "LG- und Samsung-Fernseher",
          text: "Ein/Aus, Lautstärke, Stummschaltung und Eingangsquelle deiner LG-webOS- und Samsung-Tizen-TVs, über das lokale Netzwerk.",
          href: "/docs/integrations/external/lg-webos/",
        },
        {
          icon: "🍽️",
          title: "Home Connect (Bosch, Siemens)",
          text: "Überwache und steuere deine Geräte von Bosch, Siemens, Neff und Gaggenau.",
          href: "/docs/integrations/external/home-connect/",
        },
        {
          icon: "☀️",
          title: "Enphase, SolarEdge, EcoFlow",
          text: "Solarertrag, Hausverbrauch und Batteriespeicher, direkt neben deinen übrigen Energiedaten.",
          href: "/docs/integrations/external/enphase-iq-gateway/",
        },
        {
          icon: "🧹",
          title: "Roborock",
          text: "Status, Start/Stopp, Saugstärke, Station und Routinen der Saugroboter, die in der Roborock-App gekoppelt sind.",
          href: "/docs/integrations/external/roborock/",
        },
        {
          icon: "🍎",
          title: "Apple HomeKit & Siri",
          text: "Mach deine Gladys-Geräte in der Apple-Home-App verfügbar und steuere sie mit Siri.",
          href: "/docs/integrations/homekit/",
        },
        {
          icon: "🗣️",
          title: "Alexa & Google Home",
          text: "Behalte die Sprachsteuerung auf deinen Echo- und Nest-Lautsprechern, während deine Automationen in Gladys laufen (mit Gladys Plus).",
          href: "/docs/integrations/google-home/",
        },
        {
          icon: "🛠️",
          title: "ESPHome & Tasmota",
          text: "Deine DIY-Projekte und umgeflashten ESP32/ESP8266-Geräte, lokal gesteuert.",
          href: "/docs/integrations/external/esphome/",
        },
      ],
    },
    how: {
      title: "Dein Gerät ist nicht dabei?",
      intro: "Die Liste oben ist nur eine Auswahl. Bevor du aufgibst, prüf Folgendes:",
      points: [
        "Ist es Zigbee, Z-Wave oder Matter? Dann funktioniert es sehr wahrscheinlich, egal welche Marke: Diese Standards decken Tausende Geräte ab.",
        "Schau in den Katalog der externen Integrationen: Community-Integrationen, mit einem Klick installiert, und jede Woche kommen neue dazu.",
        "Frag im Community-Forum: Vielleicht hat schon jemand dasselbe Gerät angebunden, oft über MQTT, Node-RED oder Matterbridge.",
        "Bau die Integration selbst: Externe Integrationen sind Docker-Container in der Sprache deiner Wahl, veröffentlicht auf GitHub, ganz ohne Pull Request oder Review.",
      ],
      outro:
        "Gladys ist Open Source, und der Katalog wächst mit jedem neuen Nutzer. Fehlt deine Lieblingsmarke, kannst du derjenige sein, der sie hinzufügt.",
    },
    solution: {
      title: "Ein Dashboard und eine Automations-Engine für alle Marken",
      paragraphs: [
        "Sind deine Geräte erst in Gladys, spielt die Marke keine Rolle mehr. Ein Aqara-Bewegungsmelder schaltet Hue-Lampen ein, ein Shelly-Energiemessgerät pausiert eine LG-Waschmaschine, und eine Reolink-Kamera schickt dir ein Foto, wenn sich ein Z-Wave-Schloss öffnet.",
        "Gladys läuft auf deinem eigenen Rechner (Mini-PC, Raspberry Pi oder NAS), ist kostenlos und Open Source und funktioniert bei Internetausfall weiter, für jedes Gerät mit lokaler Option.",
      ],
      link: {
        label: "Alle nativen Integrationen ansehen →",
        href: "/docs/integrations/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Wähle die passende Hardware und die richtigen Protokolle für dein Zuhause:",
      links: [
        {
          label: "Zigbee vs. Z-Wave vs. Matter vs. Thread",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Welches Smart-Home-Protokoll du wählen solltest und warum du dich nicht auf eines festlegen musst.",
        },
        {
          label: "Brauchst du einen Matter-Hub?",
          href: "/matter-hub/",
          text: "Matter-Controller, Thread-Border-Router und Bridges einfach erklärt.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/best-zigbee-dongle/",
          text: "Der Zigbee-Koordinator, mit dem du deine Zigbee-Geräte lokal koppelst.",
        },
        {
          label: "Eine externe Integration bauen",
          href: "/docs/dev/external-integrations/",
          text: "Füge eine neue Marke hinzu, in jeder Sprache, ohne Pull Request.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Hol alle deine Geräte an einen Ort",
      text: "Gladys ist kostenlos, Open Source und läuft auf deiner eigenen Hardware. Verbinde die Geräte, die du schon hast, egal von welcher Marke.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Integrationen ansehen", href: "/docs/integrations/" },
    },
  },
};

export const worksWithFaqEn = [
  {
    question: "Does Gladys Assistant work with Philips Hue?",
    answer:
      "Yes, in two ways. The Philips Hue integration controls your lights locally through the Hue bridge (on/off, brightness, color, white temperature). You can also pair Hue bulbs directly to Gladys over Zigbee with a Zigbee USB dongle and Zigbee2MQTT, without any bridge.",
  },
  {
    question: "Does Gladys work with SmartThings?",
    answer:
      "Yes. The SmartThings integration brings the switches, plugs, lights, locks, shades, thermostats and sensors of your SmartThings account into Gladys, through Samsung's official cloud API. Your Zigbee, Z-Wave and Matter devices can also be moved off the SmartThings hub and paired directly to Gladys to run locally.",
  },
  {
    question: "Does Gladys work with Matter devices?",
    answer:
      "Yes. Gladys is a Matter controller running on your own machine: Matter devices on Wi-Fi or Ethernet need no hub at all. Matter over Thread devices need a Thread border router on your network, such as an Apple TV 4K, a HomePod or a Google Nest Hub.",
  },
  {
    question: "Does Gladys work with Z-Wave?",
    answer:
      "Yes, through the Z-Wave JS UI integration and a Z-Wave USB stick. Your Z-Wave locks, switches and sensors are controlled locally, without a cloud.",
  },
  {
    question: "Which devices work without the internet?",
    answer:
      "Everything paired over Zigbee, Z-Wave or Matter, plus the integrations that talk to your devices on the local network (Philips Hue bridge, TP-Link Kasa, Sonos, Shelly, Reolink, ESPHome, LG and Samsung TVs…). Integrations built on a manufacturer's cloud API, like SmartThings or LG ThinQ, need the internet.",
  },
  {
    question: "My brand isn't supported, what can I do?",
    answer:
      "Check whether the device speaks Zigbee, Z-Wave or Matter, look at the external integrations catalog, and ask on the community forum. If it's still missing, anyone can build an external integration in the language of their choice and publish it on GitHub, without a pull request or review.",
  },
];

export const worksWithFaqFr = [
  {
    question: "Gladys Assistant est-elle compatible avec Philips Hue ?",
    answer:
      "Oui, de deux façons. L'intégration Philips Hue pilote vos lumières en local via le pont Hue (allumage, luminosité, couleur, température de blanc). Vous pouvez aussi associer les ampoules Hue directement à Gladys en Zigbee, avec un dongle USB Zigbee et Zigbee2MQTT, sans aucun pont.",
  },
  {
    question: "Gladys fonctionne-t-elle avec SmartThings ?",
    answer:
      "Oui. L'intégration SmartThings ramène dans Gladys les interrupteurs, prises, lumières, serrures, volets, thermostats et capteurs de votre compte SmartThings, via l'API cloud officielle de Samsung. Vos appareils Zigbee, Z-Wave et Matter peuvent aussi quitter le hub SmartThings et être associés directement à Gladys pour tourner en local.",
  },
  {
    question: "Gladys fonctionne-t-elle avec les appareils Matter ?",
    answer:
      "Oui. Gladys est un contrôleur Matter qui tourne sur votre propre machine : les appareils Matter en Wi-Fi ou en Ethernet n'ont besoin d'aucun hub. Les appareils Matter over Thread ont besoin d'un routeur de bordure Thread sur votre réseau, comme une Apple TV 4K, un HomePod ou un Google Nest Hub.",
  },
  {
    question: "Gladys fonctionne-t-elle avec le Z-Wave ?",
    answer:
      "Oui, via l'intégration Z-Wave JS UI et une clé USB Z-Wave. Vos serrures, interrupteurs et capteurs Z-Wave sont pilotés en local, sans cloud.",
  },
  {
    question: "Quels appareils fonctionnent sans internet ?",
    answer:
      "Tout ce qui est associé en Zigbee, Z-Wave ou Matter, plus les intégrations qui parlent à vos appareils sur le réseau local (pont Philips Hue, TP-Link Kasa, Sonos, Shelly, Reolink, ESPHome, TV LG et Samsung…). Les intégrations construites sur l'API cloud d'un fabricant, comme SmartThings ou LG ThinQ, ont besoin d'internet.",
  },
  {
    question: "Ma marque n'est pas prise en charge, que faire ?",
    answer:
      "Vérifiez si l'appareil parle Zigbee, Z-Wave ou Matter, parcourez le catalogue des intégrations externes et demandez sur le forum. S'il manque toujours, n'importe qui peut créer une intégration externe dans le langage de son choix et la publier sur GitHub, sans pull request ni relecture.",
  },
];

export const worksWithFaqDe = [
  {
    question: "Funktioniert Gladys Assistant mit Philips Hue?",
    answer:
      "Ja, auf zwei Arten. Die Philips-Hue-Integration steuert deine Lampen lokal über die Hue Bridge (Ein/Aus, Helligkeit, Farbe, Weißton). Du kannst Hue-Lampen aber auch direkt per Zigbee mit Gladys koppeln, mit einem Zigbee-USB-Stick und Zigbee2MQTT, ganz ohne Bridge.",
  },
  {
    question: "Funktioniert Gladys mit SmartThings?",
    answer:
      "Ja. Die SmartThings-Integration holt Schalter, Steckdosen, Lampen, Schlösser, Rollläden, Thermostate und Sensoren deines SmartThings-Kontos in Gladys, über die offizielle Cloud-API von Samsung. Deine Zigbee-, Z-Wave- und Matter-Geräte kannst du außerdem vom SmartThings-Hub lösen und direkt mit Gladys koppeln, damit sie lokal laufen.",
  },
  {
    question: "Funktioniert Gladys mit Matter-Geräten?",
    answer:
      "Ja. Gladys ist ein Matter-Controller, der auf deinem eigenen Rechner läuft: Matter-Geräte im WLAN oder per Ethernet brauchen überhaupt keinen Hub. Matter-over-Thread-Geräte brauchen einen Thread-Border-Router in deinem Netzwerk, etwa ein Apple TV 4K, einen HomePod oder einen Google Nest Hub.",
  },
  {
    question: "Funktioniert Gladys mit Z-Wave?",
    answer:
      "Ja, über die Integration Z-Wave JS UI und einen Z-Wave-USB-Stick. Deine Z-Wave-Schlösser, -Schalter und -Sensoren werden lokal gesteuert, ohne Cloud.",
  },
  {
    question: "Welche Geräte funktionieren ohne Internet?",
    answer:
      "Alles, was per Zigbee, Z-Wave oder Matter gekoppelt ist, dazu die Integrationen, die im lokalen Netzwerk mit deinen Geräten sprechen (Philips Hue Bridge, TP-Link Kasa, Sonos, Shelly, Reolink, ESPHome, LG- und Samsung-TVs…). Integrationen, die auf der Cloud-API eines Herstellers basieren, wie SmartThings oder LG ThinQ, brauchen Internet.",
  },
  {
    question: "Meine Marke wird nicht unterstützt, was kann ich tun?",
    answer:
      "Prüf, ob das Gerät Zigbee, Z-Wave oder Matter spricht, schau in den Katalog der externen Integrationen und frag im Community-Forum. Fehlt es dann immer noch, kann jeder eine externe Integration in der Sprache seiner Wahl bauen und auf GitHub veröffentlichen, ohne Pull Request oder Review.",
  },
];

export default worksWithContent;
