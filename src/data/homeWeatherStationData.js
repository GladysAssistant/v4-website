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
          docHref: "/docs/integrations/netatmo/",
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
          href: "/docs/integrations/netatmo/",
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
          docHref: "/fr/docs/integrations/netatmo/",
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
          href: "/fr/docs/integrations/netatmo/",
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

export default homeWeatherStationContent;
