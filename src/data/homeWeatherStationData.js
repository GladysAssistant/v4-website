// Content for the "home weather station" buyer's-guide landing page.
// Targets the on-theme "home weather station / wireless weather station /
// station météo connectée" cluster (Search Console: e.g. "top rated wireless
// weather stations for home in france", position ~8). The angle is balanced:
// we recommend the local-first route (Zigbee & Matter sensors that Gladys
// controls locally) but also cover the connected-station route (Netatmo via
// its integration, plus OpenWeather for forecast data with no hardware).

// Amazon affiliate links (Gladys is an Amazon Associate).
// Tags: gladproj-20 on amazon.com (EN), gladproj-21 on amazon.fr (FR).
// Affiliate-tagged search links keyed to the exact product name, so every link
// is valid, lands on the right marketplace and carries the affiliate tag.
const amazonUS = (query) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=gladproj-20`;
const amazonFR = (query) =>
  `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=gladproj-21`;

const homeWeatherStationContent = {
  en: {
    meta: {
      title: "Best home weather station for a smart home (Zigbee, Matter, Netatmo)",
      description:
        "Which weather station works with a local smart home? A practical guide to wireless weather sensors for Gladys Assistant: local Zigbee and Matter sensors, the Netatmo station, and OpenWeather for forecast data.",
    },
    hero: {
      title: "The best home weather station for your smart home",
      subtitle:
        "How to measure temperature, humidity and more at home, in a way that actually works with Gladys, either fully local with Zigbee and Matter sensors, or with a connected station.",
      intro: [
        "A weather station tells you what is happening at home and outside: temperature, humidity, atmospheric pressure, and sometimes wind and rain. But most consumer weather stations lock their data inside a manufacturer app and cloud, which is a poor fit for a local smart home.",
        "With Gladys Assistant you have two good options. The most local one is to build your own station from Zigbee and Matter sensors that Gladys reads directly on your network. If you want a ready-made station with a wind and rain gauge, the Netatmo Weather Station connects through its integration. This guide covers both.",
      ],
      primaryCta: { label: "See local sensors", href: "#local" },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    criteria: {
      title: "What to look for in a smart weather station",
      intro:
        "Before buying, a few things matter more than the number of features on the box:",
      points: [
        "Local vs cloud: can you read the data on your own network, or does it only live in the manufacturer's app? A local sensor keeps working even without internet and never depends on a cloud that could shut down.",
        "Indoor and outdoor coverage: for a real weather picture you usually want at least one indoor and one outdoor sensor (temperature and humidity, ideally atmospheric pressure too).",
        "Protocol: for a local setup, prefer Zigbee (via Zigbee2MQTT) or Matter. Both are open and let Gladys read the values directly.",
        "Extras: only a few products measure wind and rain. If you need those, a connected station like Netatmo is the realistic option today.",
        "Battery life and range: outdoor sensors run on batteries and sit far from the house, so good battery life and range matter for reliability.",
      ],
      outro:
        "The good news: whichever route you pick below, Gladys brings the readings into one dashboard and lets you automate on them.",
    },
    local: {
      title: "The local route: Zigbee and Matter sensors",
      intro:
        "This is the most local option: compose your own weather station from sensors Gladys reads directly, with no manufacturer cloud. These are supported through Zigbee2MQTT or Matter:",
      items: [
        {
          name: "Aqara Temperature and Humidity Sensor",
          tag: "Best indoor, Zigbee",
          text: "A tiny, affordable Zigbee sensor that reports temperature, humidity and atmospheric pressure. One of the devices we already recommend for Gladys. Pairs through Zigbee2MQTT.",
          buyHref: amazonUS("Aqara Temperature and Humidity Sensor"),
          buyLabel: "View on Amazon →",
          docHref: "/docs/integrations/zigbee2mqtt/",
          docLabel: "How to pair Zigbee",
        },
        {
          name: "SONOFF SNZB-02D",
          tag: "Indoor with display, Zigbee",
          text: "A Zigbee temperature and humidity sensor with an e-ink screen, so you also get a readout on the wall. Reliable and cheap, pairs through Zigbee2MQTT.",
          buyHref: amazonUS("SONOFF SNZB-02D Zigbee temperature humidity sensor"),
          buyLabel: "View on Amazon →",
        },
        {
          name: "OWON THS-317-ET",
          tag: "Outdoor probe, Zigbee",
          text: "A Zigbee temperature sensor with a waterproof external probe, ideal for measuring outdoor or fridge/freezer temperature. Listed in the Gladys Zigbee catalogue.",
          buyHref: amazonUS("OWON THS-317-ET Zigbee temperature sensor"),
          buyLabel: "View on Amazon →",
        },
        {
          name: "Eve Weather",
          tag: "Matter over Thread",
          text: "A weatherproof outdoor sensor measuring temperature, humidity and barometric pressure. It speaks Thread and Matter, so Gladys can read it locally through the Matter integration.",
          buyHref: amazonUS("Eve Weather Matter Thread"),
          buyLabel: "View on Amazon →",
          docHref: "/docs/integrations/matter/",
          docLabel: "How Matter works",
        },
      ],
      outro:
        "To pair the Zigbee sensors you just need a Zigbee dongle. See our guide to picking the right one.",
    },
    cloud: {
      title: "The connected-station route: Netatmo and OpenWeather",
      intro:
        "Want a ready-made station with a wind and rain gauge, or weather data with no hardware at all? These connect to Gladys too:",
      items: [
        {
          name: "Netatmo Weather Station",
          tag: "Full station, wind and rain",
          text: "A complete connected weather station: indoor and outdoor modules, with optional wind and rain gauges. It runs through Netatmo's cloud, and Gladys reads its values through the Netatmo integration. The realistic choice if you want wind and rain today.",
          buyHref: amazonUS("Netatmo Weather Station"),
          buyLabel: "View on Amazon →",
          docHref: "/docs/integrations/external/netatmo/",
          docLabel: "Netatmo integration",
        },
        {
          name: "OpenWeather (no hardware)",
          tag: "Free forecast data",
          text: "If you just want current conditions and forecasts for your location, the OpenWeather integration brings weather data into Gladys for free, without buying any sensor. Great to complement your own sensors.",
          docHref: "/docs/integrations/openweather/",
          docLabel: "Set up OpenWeather →",
        },
      ],
      outro:
        "Cloud stations are convenient and feature-rich, but remember they depend on the manufacturer's servers. For anything you want to keep working offline, prefer the local sensors above.",
    },
    gladys: {
      title: "Why bring your weather station into Gladys",
      paragraphs: [
        "On their own, each sensor or station lives in its own app. With Gladys, all your indoor and outdoor readings sit in one local dashboard, next to every other device in your home, and the historical data stays on your own hardware.",
        "From there you can automate on the weather: close the blinds when it gets too hot, boost the heating when the outdoor temperature drops, send a frost alert before a cold night, or turn on a fan when indoor humidity climbs.",
      ],
      link: { label: "Discover local, open-source home automation →", href: "/open-source-home-automation/" },
    },
    related: {
      title: "Go further",
      intro:
        "Adding weather sensors is part of building a local smart home:",
      links: [
        {
          label: "Connect Zigbee devices to Gladys",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "The step-by-step guide to pairing Zigbee sensors with Zigbee2MQTT.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy to pair your weather sensors locally.",
        },
        {
          label: "IKEA smart home with Gladys",
          href: "/ikea-smart-home/",
          text: "Control your IKEA Tradfri and Dirigera devices locally, over Zigbee2MQTT or Matter.",
        },
        {
          label: "Netatmo in Gladys",
          href: "/docs/integrations/external/netatmo/",
          text: "Connect a Netatmo Weather Station and read its modules in Gladys.",
        },
        {
          label: "Recommended hardware",
          href: "/docs/installation/recommended-hardware/",
          text: "The full list of Zigbee devices we recommend for a reliable Gladys home.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Build your local weather station",
      text: "Gladys is free, open-source, and installs in a single Docker command. Pair a few sensors and read your home's climate locally, with automations that react to it.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Set up Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
    },
  },

  fr: {
    meta: {
      title: "Quelle station météo connectée pour une maison connectée (Zigbee, Matter, Netatmo)",
      description:
        "Quelle station météo fonctionne avec une maison connectée locale ? Guide des capteurs météo sans fil pour Gladys Assistant : capteurs Zigbee et Matter locaux, station Netatmo, et OpenWeather pour les prévisions.",
    },
    hero: {
      title: "La meilleure station météo pour votre maison connectée",
      subtitle:
        "Comment mesurer température, humidité et plus chez vous, d'une façon qui fonctionne vraiment avec Gladys : soit 100 % local avec des capteurs Zigbee et Matter, soit avec une station connectée.",
      intro: [
        "Une station météo vous indique ce qui se passe chez vous et dehors : température, humidité, pression atmosphérique, parfois vent et pluie. Mais la plupart des stations grand public enferment leurs données dans une application et un cloud de fabricant, ce qui colle mal à une maison connectée locale.",
        "Avec Gladys Assistant, vous avez deux bonnes options. La plus locale : composer votre propre station avec des capteurs Zigbee et Matter que Gladys lit directement sur votre réseau. Si vous voulez une station toute prête avec anémomètre et pluviomètre, la station Netatmo se connecte via son intégration. Ce guide couvre les deux.",
      ],
      primaryCta: { label: "Voir les capteurs locaux", href: "#local" },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/fr/docs/",
      },
    },
    criteria: {
      title: "Ce qu'il faut regarder dans une station météo connectée",
      intro:
        "Avant d'acheter, quelques points comptent plus que le nombre de fonctions sur la boîte :",
      points: [
        "Local ou cloud : pouvez-vous lire les données sur votre propre réseau, ou ne vivent-elles que dans l'application du fabricant ? Un capteur local continue de fonctionner même sans internet et ne dépend pas d'un cloud qui pourrait fermer.",
        "Intérieur et extérieur : pour une vraie vision météo, il faut en général au moins un capteur intérieur et un extérieur (température et humidité, idéalement la pression atmosphérique aussi).",
        "Le protocole : pour une installation locale, privilégiez le Zigbee (via Zigbee2MQTT) ou le Matter. Les deux sont ouverts et permettent à Gladys de lire les valeurs directement.",
        "Les extras : peu de produits mesurent le vent et la pluie. Si vous en avez besoin, une station connectée comme Netatmo est l'option réaliste aujourd'hui.",
        "Autonomie et portée : les capteurs extérieurs fonctionnent sur pile et sont loin de la maison, donc une bonne autonomie et une bonne portée comptent pour la fiabilité.",
      ],
      outro:
        "Bonne nouvelle : quelle que soit la voie choisie ci-dessous, Gladys réunit les mesures dans un seul tableau de bord et vous laisse les automatiser.",
    },
    local: {
      title: "La voie locale : capteurs Zigbee et Matter",
      intro:
        "C'est l'option la plus locale : composez votre station météo avec des capteurs que Gladys lit directement, sans cloud de fabricant. Ceux-ci sont pris en charge via Zigbee2MQTT ou Matter :",
      items: [
        {
          name: "Capteur de température et d'humidité Aqara",
          tag: "Meilleur intérieur, Zigbee",
          text: "Un petit capteur Zigbee abordable qui remonte température, humidité et pression atmosphérique. L'un des appareils que nous recommandons déjà pour Gladys. S'appaire via Zigbee2MQTT.",
          buyHref: amazonFR("Aqara capteur température humidité"),
          buyLabel: "Voir sur Amazon →",
          docHref: "/fr/docs/integrations/zigbee2mqtt/",
          docLabel: "Appairer du Zigbee",
        },
        {
          name: "SONOFF SNZB-02D",
          tag: "Intérieur avec écran, Zigbee",
          text: "Un capteur Zigbee de température et d'humidité avec écran e-ink, pour avoir aussi l'affichage au mur. Fiable et peu cher, s'appaire via Zigbee2MQTT.",
          buyHref: amazonFR("SONOFF SNZB-02D capteur Zigbee température humidité"),
          buyLabel: "Voir sur Amazon →",
        },
        {
          name: "OWON THS-317-ET",
          tag: "Sonde extérieure, Zigbee",
          text: "Un capteur de température Zigbee avec sonde externe étanche, idéal pour mesurer la température extérieure ou d'un frigo/congélateur. Présent dans le catalogue Zigbee de Gladys.",
          buyHref: amazonFR("OWON THS-317-ET capteur Zigbee température"),
          buyLabel: "Voir sur Amazon →",
        },
        {
          name: "Eve Weather",
          tag: "Matter via Thread",
          text: "Un capteur extérieur étanche qui mesure température, humidité et pression barométrique. Il parle Thread et Matter, donc Gladys peut le lire en local via l'intégration Matter.",
          buyHref: amazonFR("Eve Weather Matter Thread"),
          buyLabel: "Voir sur Amazon →",
          docHref: "/fr/docs/integrations/matter/",
          docLabel: "Comment marche Matter",
        },
      ],
      outro:
        "Pour appairer les capteurs Zigbee, il vous suffit d'une clé Zigbee. Voir notre guide pour choisir la bonne.",
    },
    cloud: {
      title: "La voie station connectée : Netatmo et OpenWeather",
      intro:
        "Vous voulez une station toute prête avec anémomètre et pluviomètre, ou des données météo sans aucun matériel ? Elles se connectent aussi à Gladys :",
      items: [
        {
          name: "Station météo Netatmo",
          tag: "Station complète, vent et pluie",
          text: "Une station météo connectée complète : modules intérieur et extérieur, avec anémomètre et pluviomètre en option. Elle passe par le cloud Netatmo, et Gladys lit ses valeurs via l'intégration Netatmo. Le choix réaliste si vous voulez le vent et la pluie aujourd'hui.",
          buyHref: amazonFR("Station météo Netatmo"),
          buyLabel: "Voir sur Amazon →",
          docHref: "/fr/docs/integrations/external/netatmo/",
          docLabel: "Intégration Netatmo",
        },
        {
          name: "OpenWeather (sans matériel)",
          tag: "Prévisions gratuites",
          text: "Si vous voulez simplement les conditions actuelles et les prévisions pour votre localité, l'intégration OpenWeather ramène les données météo dans Gladys gratuitement, sans acheter de capteur. Parfait en complément de vos propres capteurs.",
          docHref: "/fr/docs/integrations/openweather/",
          docLabel: "Configurer OpenWeather →",
        },
      ],
      outro:
        "Les stations cloud sont pratiques et complètes, mais rappelez-vous qu'elles dépendent des serveurs du fabricant. Pour tout ce que vous voulez garder fonctionnel hors ligne, privilégiez les capteurs locaux ci-dessus.",
    },
    gladys: {
      title: "Pourquoi intégrer votre station météo à Gladys",
      paragraphs: [
        "Seuls, chaque capteur ou station vit dans sa propre application. Avec Gladys, toutes vos mesures intérieures et extérieures se retrouvent dans un seul tableau de bord local, à côté de tous les autres appareils de la maison, et l'historique reste sur votre propre matériel.",
        "À partir de là, vous automatisez selon la météo : fermer les stores quand il fait trop chaud, monter le chauffage quand la température extérieure baisse, envoyer une alerte gel avant une nuit froide, ou lancer un ventilateur quand l'humidité intérieure grimpe.",
      ],
      link: { label: "Découvrir la domotique locale et open source →", href: "/fr/open-source-home-automation/" },
    },
    related: {
      title: "Aller plus loin",
      intro:
        "Ajouter des capteurs météo fait partie de la construction d'une maison connectée locale :",
      links: [
        {
          label: "Connecter des appareils Zigbee à Gladys",
          href: "/fr/docs/integrations/zigbee2mqtt/",
          text: "Le guide pas à pas pour appairer des capteurs Zigbee avec Zigbee2MQTT.",
        },
        {
          label: "Quelle clé Zigbee USB choisir",
          href: "/fr/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter pour appairer vos capteurs météo en local.",
        },
        {
          label: "Maison connectée IKEA avec Gladys",
          href: "/fr/ikea-smart-home/",
          text: "Pilotez vos appareils IKEA Tradfri et Dirigera en local, via Zigbee2MQTT ou Matter.",
        },
        {
          label: "Netatmo dans Gladys",
          href: "/fr/docs/integrations/external/netatmo/",
          text: "Connecter une station météo Netatmo et lire ses modules dans Gladys.",
        },
        {
          label: "Matériel recommandé",
          href: "/fr/docs/installation/recommended-hardware/",
          text: "La liste complète des appareils Zigbee que nous recommandons pour une maison Gladys fiable.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Montez votre station météo locale",
      text: "Gladys est gratuit, open source, et s'installe en une seule commande Docker. Appairez quelques capteurs et lisez le climat de votre maison en local, avec des automatisations qui y réagissent.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: {
        label: "Configurer Zigbee2MQTT",
        href: "/fr/docs/integrations/zigbee2mqtt/",
      },
    },
  },

  // German: no amazon.de affiliate tag is configured yet, so the product links
  // reuse the English (amazon.com) affiliate search links.
  de: {
    meta: {
      title: "Wetterstation fürs Smart Home (Zigbee, Matter, Netatmo)",
      description:
        "Welche Wetterstation passt zum lokalen Smart Home? Ratgeber für Wettersensoren mit Gladys: Zigbee- und Matter-Sensoren, Netatmo und OpenWeather.",
    },
    hero: {
      title: "Die beste Wetterstation für dein Smart Home",
      subtitle:
        "So misst du Temperatur, Luftfeuchtigkeit und mehr zu Hause, und zwar so, dass es wirklich mit Gladys funktioniert: komplett lokal mit Zigbee- und Matter-Sensoren oder mit einer vernetzten Wetterstation.",
      intro: [
        "Eine Wetterstation zeigt dir, was drinnen und draußen los ist: Temperatur, Luftfeuchtigkeit, Luftdruck und manchmal auch Wind und Regen. Die meisten handelsüblichen Wetterstationen sperren ihre Daten aber in die App und Cloud des Herstellers, und das passt schlecht zu einem lokalen Smart Home.",
        "Mit Gladys Assistant hast du zwei gute Möglichkeiten. Die lokalste: Du baust deine eigene Station aus Zigbee- und Matter-Sensoren, die Gladys direkt in deinem Netzwerk ausliest. Wenn du eine fertige Station mit Wind- und Regenmesser willst, bindest du die Netatmo Wetterstation über ihre Integration an. Dieser Ratgeber deckt beides ab.",
      ],
      primaryCta: { label: "Lokale Sensoren ansehen", href: "#local" },
      secondaryCta: {
        label: "Mit Gladys loslegen →",
        href: "/de/docs/",
      },
    },
    criteria: {
      title: "Worauf du bei einer smarten Wetterstation achten solltest",
      intro:
        "Vor dem Kauf sind ein paar Punkte wichtiger als die Anzahl der Funktionen auf der Verpackung:",
      points: [
        "Lokal oder Cloud: Kannst du die Daten in deinem eigenen Netzwerk auslesen, oder existieren sie nur in der App des Herstellers? Ein lokaler Sensor funktioniert auch ohne Internet weiter und hängt nie von einer Cloud ab, die abgeschaltet werden könnte.",
        "Innen und außen: Für ein echtes Wetterbild brauchst du meist mindestens einen Innen- und einen Außensensor (Temperatur und Luftfeuchtigkeit, idealerweise auch Luftdruck).",
        "Protokoll: Für ein lokales Setup setzt du am besten auf Zigbee (über Zigbee2MQTT) oder Matter. Beide sind offen und erlauben Gladys, die Werte direkt auszulesen.",
        "Extras: Nur wenige Produkte messen Wind und Regen. Wenn du das brauchst, ist eine vernetzte Station wie Netatmo heute die realistische Wahl.",
        "Akkulaufzeit und Reichweite: Außensensoren laufen mit Batterie und stehen weit vom Haus entfernt. Eine gute Batterielaufzeit und Reichweite sind daher entscheidend für die Zuverlässigkeit.",
      ],
      outro:
        "Die gute Nachricht: Egal, welchen Weg du unten wählst, Gladys bringt alle Messwerte in ein Dashboard und lässt dich darauf basierend automatisieren.",
    },
    local: {
      title: "Der lokale Weg: Zigbee- und Matter-Sensoren",
      intro:
        "Das ist die lokalste Variante: Stell dir deine eigene Wetterstation aus Sensoren zusammen, die Gladys direkt ausliest, ganz ohne Hersteller-Cloud. Diese Modelle werden über Zigbee2MQTT oder Matter unterstützt:",
      items: [
        {
          name: "Aqara Temperatur- und Feuchtigkeitssensor",
          tag: "Bester Innensensor, Zigbee",
          text: "Ein winziger, günstiger Zigbee-Sensor, der Temperatur, Luftfeuchtigkeit und Luftdruck meldet. Eines der Geräte, die wir für Gladys ohnehin empfehlen. Wird über Zigbee2MQTT gekoppelt.",
          buyHref: amazonUS("Aqara Temperature and Humidity Sensor"),
          buyLabel: "Bei Amazon ansehen →",
          docHref: "/de/docs/integrations/zigbee2mqtt/",
          docLabel: "Zigbee-Geräte koppeln",
        },
        {
          name: "SONOFF SNZB-02D",
          tag: "Innen mit Display, Zigbee",
          text: "Ein Zigbee-Temperatur- und Feuchtigkeitssensor mit E-Ink-Display, sodass du die Werte auch direkt an der Wand ablesen kannst. Zuverlässig und günstig, wird über Zigbee2MQTT gekoppelt.",
          buyHref: amazonUS("SONOFF SNZB-02D Zigbee temperature humidity sensor"),
          buyLabel: "Bei Amazon ansehen →",
        },
        {
          name: "OWON THS-317-ET",
          tag: "Außenfühler, Zigbee",
          text: "Ein Zigbee-Temperatursensor mit wasserdichtem externem Fühler, ideal, um die Außentemperatur oder die Temperatur in Kühl- und Gefrierschrank zu messen. Im Zigbee-Katalog von Gladys gelistet.",
          buyHref: amazonUS("OWON THS-317-ET Zigbee temperature sensor"),
          buyLabel: "Bei Amazon ansehen →",
        },
        {
          name: "Eve Weather",
          tag: "Matter over Thread",
          text: "Ein wetterfester Außensensor, der Temperatur, Luftfeuchtigkeit und Luftdruck misst. Er spricht Thread und Matter, sodass Gladys ihn über die Matter-Integration lokal auslesen kann.",
          buyHref: amazonUS("Eve Weather Matter Thread"),
          buyLabel: "Bei Amazon ansehen →",
          docHref: "/de/docs/integrations/matter/",
          docLabel: "So funktioniert Matter",
        },
      ],
      outro:
        "Zum Koppeln der Zigbee-Sensoren brauchst du nur einen Zigbee-Stick. In unserem Ratgeber erfährst du, welcher der richtige ist.",
    },
    cloud: {
      title: "Der Weg über vernetzte Stationen: Netatmo und OpenWeather",
      intro:
        "Du willst eine fertige Station mit Wind- und Regenmesser oder Wetterdaten ganz ohne Hardware? Auch diese Lösungen lassen sich mit Gladys verbinden:",
      items: [
        {
          name: "Netatmo Wetterstation",
          tag: "Komplettstation, Wind und Regen",
          text: "Eine vollständige vernetzte Wetterstation: Innen- und Außenmodul, optional mit Wind- und Regenmesser. Sie läuft über die Netatmo-Cloud, und Gladys liest ihre Werte über die Netatmo-Integration aus. Die realistische Wahl, wenn du heute Wind und Regen messen willst.",
          buyHref: amazonUS("Netatmo Weather Station"),
          buyLabel: "Bei Amazon ansehen →",
          docHref: "/de/docs/integrations/external/netatmo/",
          docLabel: "Netatmo-Integration",
        },
        {
          name: "OpenWeather (ohne Hardware)",
          tag: "Kostenlose Wettervorhersage",
          text: "Wenn du einfach nur die aktuellen Bedingungen und die Vorhersage für deinen Standort möchtest, holt die OpenWeather-Integration die Wetterdaten kostenlos in Gladys, ganz ohne Sensorkauf. Ideal als Ergänzung zu deinen eigenen Sensoren.",
          docHref: "/de/docs/integrations/openweather/",
          docLabel: "OpenWeather einrichten →",
        },
      ],
      outro:
        "Cloud-Stationen sind bequem und haben viele Funktionen, hängen aber von den Servern des Herstellers ab. Für alles, was auch offline weiterlaufen soll, sind die lokalen Sensoren oben die bessere Wahl.",
    },
    gladys: {
      title: "Warum du deine Wetterstation in Gladys einbinden solltest",
      paragraphs: [
        "Für sich allein lebt jeder Sensor und jede Station in einer eigenen App. Mit Gladys landen alle Innen- und Außenwerte in einem lokalen Dashboard, direkt neben allen anderen Geräten in deinem Zuhause, und der Verlauf bleibt auf deiner eigenen Hardware.",
        "Darauf aufbauend automatisierst du nach dem Wetter: Rollos schließen, wenn es zu heiß wird, die Heizung hochdrehen, wenn die Außentemperatur fällt, vor einer kalten Nacht eine Frostwarnung schicken oder einen Ventilator einschalten, wenn die Luftfeuchtigkeit drinnen steigt.",
      ],
      link: { label: "Lokale Open-Source-Hausautomation entdecken →", href: "/de/open-source-home-automation/" },
    },
    related: {
      title: "Weiterlesen",
      intro:
        "Wettersensoren hinzuzufügen ist ein Baustein auf dem Weg zum lokalen Smart Home:",
      links: [
        {
          label: "Zigbee-Geräte mit Gladys verbinden",
          href: "/de/docs/integrations/zigbee2mqtt/",
          text: "Die Schritt-für-Schritt-Anleitung, um Zigbee-Sensoren mit Zigbee2MQTT zu koppeln.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/de/best-zigbee-dongle/",
          text: "Welchen Zigbee-Koordinator du kaufen solltest, um deine Wettersensoren lokal zu koppeln.",
        },
        {
          label: "IKEA Smart Home mit Gladys",
          href: "/de/ikea-smart-home/",
          text: "Steuere deine IKEA-Geräte von Tradfri und Dirigera lokal, über Zigbee2MQTT oder Matter.",
        },
        {
          label: "Netatmo in Gladys",
          href: "/de/docs/integrations/external/netatmo/",
          text: "Verbinde eine Netatmo Wetterstation und lies ihre Module in Gladys aus.",
        },
        {
          label: "Empfohlene Hardware",
          href: "/de/docs/installation/recommended-hardware/",
          text: "Die vollständige Liste der Zigbee-Geräte, die wir für ein zuverlässiges Gladys-Zuhause empfehlen.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Bau deine lokale Wetterstation",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Kopple ein paar Sensoren, lies das Raumklima deines Zuhauses lokal aus und lass Automatisierungen darauf reagieren.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: {
        label: "Zigbee2MQTT einrichten",
        href: "/de/docs/integrations/zigbee2mqtt/",
      },
    },
  },
  // Spanish: no amazon.es affiliate tag is configured yet, so the product links
  // reuse the English (amazon.com) affiliate search links, like the German ones.
  es: {
    meta: {
      title: "La mejor estación meteorológica para un hogar inteligente (Zigbee, Matter, Netatmo)",
      description:
        "¿Qué estación meteorológica funciona con un hogar inteligente local? Una guía práctica de sensores meteorológicos inalámbricos para Gladys Assistant: sensores Zigbee y Matter locales, la estación Netatmo y OpenWeather para los datos de previsión.",
    },
    hero: {
      title: "La mejor estación meteorológica para tu hogar inteligente",
      subtitle:
        "Cómo medir la temperatura, la humedad y mucho más en casa, de una forma que funcione de verdad con Gladys: totalmente en local con sensores Zigbee y Matter, o con una estación conectada.",
      intro: [
        "Una estación meteorológica te dice lo que pasa dentro y fuera de casa: temperatura, humedad, presión atmosférica y, a veces, viento y lluvia. Pero la mayoría de las estaciones meteorológicas de consumo encierran sus datos en la aplicación y la nube del fabricante, algo poco compatible con un hogar inteligente local.",
        "Con Gladys Assistant tienes dos buenas opciones. La más local es montar tu propia estación con sensores Zigbee y Matter que Gladys lee directamente en tu red. Si prefieres una estación lista para usar con anemómetro y pluviómetro, la estación meteorológica Netatmo se conecta a través de su integración. Esta guía cubre ambas.",
      ],
      primaryCta: { label: "Ver los sensores locales", href: "#local" },
      secondaryCta: {
        label: "Empieza con Gladys →",
        href: "/es/docs/",
      },
    },
    criteria: {
      title: "Qué tener en cuenta en una estación meteorológica inteligente",
      intro:
        "Antes de comprar, hay algunas cosas que importan más que el número de funciones que aparecen en la caja:",
      points: [
        "Local o nube: ¿puedes leer los datos en tu propia red o solo existen en la aplicación del fabricante? Un sensor local sigue funcionando incluso sin internet y nunca depende de una nube que podría desaparecer.",
        "Cobertura interior y exterior: para tener una visión real del tiempo, normalmente necesitas al menos un sensor interior y otro exterior (temperatura y humedad, idealmente también presión atmosférica).",
        "Protocolo: para una instalación local, elige Zigbee (vía Zigbee2MQTT) o Matter. Ambos son abiertos y permiten que Gladys lea los valores directamente.",
        "Extras: pocos productos miden el viento y la lluvia. Si los necesitas, una estación conectada como Netatmo es hoy la opción realista.",
        "Autonomía y alcance: los sensores exteriores funcionan con pilas y están lejos de la casa, así que una buena autonomía y un buen alcance son clave para la fiabilidad.",
      ],
      outro:
        "La buena noticia: elijas la opción que elijas a continuación, Gladys reúne las mediciones en un solo panel y te permite crear automatizaciones a partir de ellas.",
    },
    local: {
      title: "La opción local: sensores Zigbee y Matter",
      intro:
        "Es la opción más local: compón tu propia estación meteorológica con sensores que Gladys lee directamente, sin nube del fabricante. Son compatibles a través de Zigbee2MQTT o Matter:",
      items: [
        {
          name: "Aqara Temperature and Humidity Sensor",
          tag: "El mejor para interior, Zigbee",
          text: "Un sensor Zigbee diminuto y asequible que mide temperatura, humedad y presión atmosférica. Es uno de los dispositivos que ya recomendamos para Gladys. Se empareja a través de Zigbee2MQTT.",
          buyHref: amazonUS("Aqara Temperature and Humidity Sensor"),
          buyLabel: "Ver en Amazon →",
          docHref: "/es/docs/integrations/zigbee2mqtt/",
          docLabel: "Cómo emparejar dispositivos Zigbee",
        },
        {
          name: "SONOFF SNZB-02D",
          tag: "Interior con pantalla, Zigbee",
          text: "Un sensor Zigbee de temperatura y humedad con pantalla de tinta electrónica, para tener también la lectura en la pared. Fiable y barato, se empareja a través de Zigbee2MQTT.",
          buyHref: amazonUS("SONOFF SNZB-02D Zigbee temperature humidity sensor"),
          buyLabel: "Ver en Amazon →",
        },
        {
          name: "OWON THS-317-ET",
          tag: "Sonda exterior, Zigbee",
          text: "Un sensor Zigbee de temperatura con sonda externa impermeable, ideal para medir la temperatura exterior o la de un frigorífico o congelador. Figura en el catálogo Zigbee de Gladys.",
          buyHref: amazonUS("OWON THS-317-ET Zigbee temperature sensor"),
          buyLabel: "Ver en Amazon →",
        },
        {
          name: "Eve Weather",
          tag: "Matter sobre Thread",
          text: "Un sensor exterior resistente a la intemperie que mide temperatura, humedad y presión barométrica. Funciona con Thread y Matter, así que Gladys puede leerlo en local a través de la integración Matter.",
          buyHref: amazonUS("Eve Weather Matter Thread"),
          buyLabel: "Ver en Amazon →",
          docHref: "/es/docs/integrations/matter/",
          docLabel: "Cómo funciona Matter",
        },
      ],
      outro:
        "Para emparejar los sensores Zigbee solo necesitas un dongle Zigbee. Consulta nuestra guía para elegir el adecuado.",
    },
    cloud: {
      title: "La opción de estación conectada: Netatmo y OpenWeather",
      intro:
        "¿Quieres una estación lista para usar con anemómetro y pluviómetro, o datos meteorológicos sin ningún hardware? También se conectan a Gladys:",
      items: [
        {
          name: "Estación meteorológica Netatmo",
          tag: "Estación completa, viento y lluvia",
          text: "Una estación meteorológica conectada completa: módulos interior y exterior, con anemómetro y pluviómetro opcionales. Funciona a través de la nube de Netatmo, y Gladys lee sus valores mediante la integración Netatmo. La opción realista si hoy quieres medir viento y lluvia.",
          buyHref: amazonUS("Netatmo Weather Station"),
          buyLabel: "Ver en Amazon →",
          docHref: "/es/docs/integrations/external/netatmo/",
          docLabel: "Integración Netatmo",
        },
        {
          name: "OpenWeather (sin hardware)",
          tag: "Datos de previsión gratuitos",
          text: "Si solo quieres las condiciones actuales y las previsiones de tu ubicación, la integración OpenWeather lleva los datos meteorológicos a Gladys de forma gratuita, sin comprar ningún sensor. Ideal para complementar tus propios sensores.",
          docHref: "/es/docs/integrations/openweather/",
          docLabel: "Configurar OpenWeather →",
        },
      ],
      outro:
        "Las estaciones en la nube son cómodas y completas, pero recuerda que dependen de los servidores del fabricante. Para todo lo que quieras que siga funcionando sin conexión, elige los sensores locales de arriba.",
    },
    gladys: {
      title: "Por qué integrar tu estación meteorológica en Gladys",
      paragraphs: [
        "Por separado, cada sensor o estación vive en su propia aplicación. Con Gladys, todas tus mediciones interiores y exteriores están en un único panel local, junto a todos los demás dispositivos de tu casa, y el historial de datos se queda en tu propio hardware.",
        "A partir de ahí puedes automatizar según el tiempo: bajar las persianas cuando hace demasiado calor, subir la calefacción cuando baja la temperatura exterior, enviar una alerta de helada antes de una noche fría o encender un ventilador cuando sube la humedad interior.",
      ],
      link: { label: "Descubre la domótica local y de código abierto →", href: "/es/open-source-home-automation/" },
    },
    related: {
      title: "Ve más allá",
      intro:
        "Añadir sensores meteorológicos forma parte de la creación de un hogar inteligente local:",
      links: [
        {
          label: "Conecta dispositivos Zigbee a Gladys",
          href: "/es/docs/integrations/zigbee2mqtt/",
          text: "La guía paso a paso para emparejar sensores Zigbee con Zigbee2MQTT.",
        },
        {
          label: "El mejor dongle USB Zigbee",
          href: "/es/best-zigbee-dongle/",
          text: "Qué coordinador Zigbee comprar para emparejar tus sensores meteorológicos en local.",
        },
        {
          label: "Hogar inteligente IKEA con Gladys",
          href: "/es/ikea-smart-home/",
          text: "Controla tus dispositivos IKEA Tradfri y Dirigera en local, mediante Zigbee2MQTT o Matter.",
        },
        {
          label: "Netatmo en Gladys",
          href: "/es/docs/integrations/external/netatmo/",
          text: "Conecta una estación meteorológica Netatmo y lee sus módulos en Gladys.",
        },
        {
          label: "Hardware recomendado",
          href: "/es/docs/installation/recommended-hardware/",
          text: "La lista completa de dispositivos Zigbee que recomendamos para una casa con Gladys fiable.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Crea tu estación meteorológica local",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Empareja unos cuantos sensores y consulta el clima de tu casa en local, con automatizaciones que reaccionan a él.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: {
        label: "Configurar Zigbee2MQTT",
        href: "/es/docs/integrations/zigbee2mqtt/",
      },
    },
  },
};

export const homeWeatherStationFaqEn = [
  {
    question: "Can I use a weather station locally with Gladys, without the cloud?",
    answer:
      "Yes. The most local option is to build your own station from Zigbee or Matter sensors. Zigbee sensors like the Aqara Temperature and Humidity Sensor or the Sonoff SNZB-02D pair through Zigbee2MQTT, and a Matter sensor like the Eve Weather is read over your network. Gladys reads these directly, with no manufacturer cloud, so they keep working offline.",
  },
  {
    question: "Which weather sensors work with Gladys?",
    answer:
      "Any Zigbee temperature, humidity or pressure sensor supported by Zigbee2MQTT works, including Aqara, Sonoff and OWON models, as does any Matter temperature or humidity sensor such as the Eve Weather. For a full station with wind and rain, the Netatmo Weather Station connects through its integration.",
  },
  {
    question: "Does Gladys work with the Netatmo Weather Station?",
    answer:
      "Yes. Gladys has a Netatmo integration that reads your indoor and outdoor modules, including the optional wind and rain gauges. Note that Netatmo relies on its cloud, so unlike local Zigbee or Matter sensors it needs an internet connection to work.",
  },
  {
    question: "Can I get weather data in Gladys without buying a sensor?",
    answer:
      "Yes. The OpenWeather integration brings current conditions and forecasts for your location into Gladys for free, with no hardware. It is a great complement to your own indoor and outdoor sensors.",
  },
  {
    question: "Can I automate my home based on the weather?",
    answer:
      "Yes, that is the main reason to bring weather data into Gladys. You can close the blinds when it gets too hot, boost the heating when the outdoor temperature drops, send a frost alert before a cold night, or start a fan when indoor humidity rises.",
  },
];

export const homeWeatherStationFaqFr = [
  {
    question: "Puis-je utiliser une station météo en local avec Gladys, sans le cloud ?",
    answer:
      "Oui. L'option la plus locale est de composer votre propre station avec des capteurs Zigbee ou Matter. Des capteurs Zigbee comme le capteur de température et d'humidité Aqara ou le Sonoff SNZB-02D s'appairent via Zigbee2MQTT, et un capteur Matter comme l'Eve Weather est lu sur votre réseau. Gladys les lit directement, sans cloud de fabricant, donc ils continuent de fonctionner hors ligne.",
  },
  {
    question: "Quels capteurs météo fonctionnent avec Gladys ?",
    answer:
      "Tout capteur Zigbee de température, d'humidité ou de pression pris en charge par Zigbee2MQTT fonctionne, dont les modèles Aqara, Sonoff et OWON, tout comme n'importe quel capteur Matter de température ou d'humidité comme l'Eve Weather. Pour une station complète avec vent et pluie, la station Netatmo se connecte via son intégration.",
  },
  {
    question: "Gladys fonctionne-t-il avec la station météo Netatmo ?",
    answer:
      "Oui. Gladys dispose d'une intégration Netatmo qui lit vos modules intérieur et extérieur, y compris l'anémomètre et le pluviomètre en option. Notez que Netatmo dépend de son cloud : contrairement aux capteurs Zigbee ou Matter locaux, il lui faut une connexion internet pour fonctionner.",
  },
  {
    question: "Puis-je avoir des données météo dans Gladys sans acheter de capteur ?",
    answer:
      "Oui. L'intégration OpenWeather ramène gratuitement les conditions actuelles et les prévisions de votre localité dans Gladys, sans matériel. C'est un excellent complément à vos propres capteurs intérieurs et extérieurs.",
  },
  {
    question: "Puis-je automatiser ma maison en fonction de la météo ?",
    answer:
      "Oui, c'est la principale raison d'intégrer les données météo à Gladys. Vous pouvez fermer les stores quand il fait trop chaud, monter le chauffage quand la température extérieure baisse, envoyer une alerte gel avant une nuit froide, ou lancer un ventilateur quand l'humidité intérieure grimpe.",
  },
];

export const homeWeatherStationFaqDe = [
  {
    question: "Kann ich eine Wetterstation mit Gladys lokal nutzen, ohne Cloud?",
    answer:
      "Ja. Die lokalste Variante ist, dir deine eigene Station aus Zigbee- oder Matter-Sensoren zu bauen. Zigbee-Sensoren wie der Aqara Temperatur- und Feuchtigkeitssensor oder der Sonoff SNZB-02D werden über Zigbee2MQTT gekoppelt, und ein Matter-Sensor wie der Eve Weather wird über dein Netzwerk ausgelesen. Gladys liest sie direkt aus, ohne Hersteller-Cloud, sodass sie auch offline weiterlaufen.",
  },
  {
    question: "Welche Wettersensoren funktionieren mit Gladys?",
    answer:
      "Jeder Zigbee-Sensor für Temperatur, Luftfeuchtigkeit oder Luftdruck, den Zigbee2MQTT unterstützt, funktioniert, darunter Modelle von Aqara, Sonoff und OWON. Ebenso jeder Matter-Sensor für Temperatur oder Luftfeuchtigkeit wie der Eve Weather. Für eine Komplettstation mit Wind und Regen wird die Netatmo Wetterstation über ihre Integration angebunden.",
  },
  {
    question: "Funktioniert Gladys mit der Netatmo Wetterstation?",
    answer:
      "Ja. Gladys hat eine Netatmo-Integration, die dein Innen- und Außenmodul ausliest, einschließlich des optionalen Wind- und Regenmessers. Beachte, dass Netatmo auf seine Cloud angewiesen ist: Anders als lokale Zigbee- oder Matter-Sensoren braucht die Station eine Internetverbindung.",
  },
  {
    question: "Kann ich in Gladys Wetterdaten bekommen, ohne einen Sensor zu kaufen?",
    answer:
      "Ja. Die OpenWeather-Integration holt die aktuellen Bedingungen und die Vorhersage für deinen Standort kostenlos und ohne Hardware in Gladys. Eine ideale Ergänzung zu deinen eigenen Innen- und Außensensoren.",
  },
  {
    question: "Kann ich mein Zuhause wetterabhängig automatisieren?",
    answer:
      "Ja, genau dafür holst du die Wetterdaten in Gladys. Du kannst die Rollos schließen, wenn es zu heiß wird, die Heizung hochdrehen, wenn die Außentemperatur fällt, vor einer kalten Nacht eine Frostwarnung schicken oder einen Ventilator starten, wenn die Luftfeuchtigkeit drinnen steigt.",
  },
];

export const homeWeatherStationFaqEs = [
  {
    question: "¿Puedo usar una estación meteorológica en local con Gladys, sin la nube?",
    answer:
      "Sí. La opción más local es montar tu propia estación con sensores Zigbee o Matter. Los sensores Zigbee como el Aqara Temperature and Humidity Sensor o el Sonoff SNZB-02D se emparejan a través de Zigbee2MQTT, y un sensor Matter como el Eve Weather se lee a través de tu red. Gladys los lee directamente, sin nube del fabricante, así que siguen funcionando sin conexión.",
  },
  {
    question: "¿Qué sensores meteorológicos funcionan con Gladys?",
    answer:
      "Funciona cualquier sensor Zigbee de temperatura, humedad o presión compatible con Zigbee2MQTT, incluidos los modelos de Aqara, Sonoff y OWON, así como cualquier sensor Matter de temperatura o humedad, como el Eve Weather. Para una estación completa con viento y lluvia, la estación meteorológica Netatmo se conecta a través de su integración.",
  },
  {
    question: "¿Gladys funciona con la estación meteorológica Netatmo?",
    answer:
      "Sí. Gladys tiene una integración Netatmo que lee tus módulos interiores y exteriores, incluidos el anemómetro y el pluviómetro opcionales. Ten en cuenta que Netatmo depende de su nube, así que, a diferencia de los sensores Zigbee o Matter locales, necesita conexión a internet para funcionar.",
  },
  {
    question: "¿Puedo tener datos meteorológicos en Gladys sin comprar ningún sensor?",
    answer:
      "Sí. La integración OpenWeather lleva a Gladys las condiciones actuales y las previsiones de tu ubicación de forma gratuita, sin ningún hardware. Es un gran complemento para tus propios sensores interiores y exteriores.",
  },
  {
    question: "¿Puedo automatizar mi casa en función del tiempo?",
    answer:
      "Sí, es la principal razón para llevar los datos meteorológicos a Gladys. Puedes bajar las persianas cuando hace demasiado calor, subir la calefacción cuando baja la temperatura exterior, enviar una alerta de helada antes de una noche fría o encender un ventilador cuando sube la humedad interior.",
  },
];

export default homeWeatherStationContent;
