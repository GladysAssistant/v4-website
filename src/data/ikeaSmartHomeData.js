// Content for the "IKEA smart home / Dirigera" landing page.
// Targets the on-theme, qualified "dirigera", "ikea smart home", "tradfri
// without hub", "ikea zigbee" search cluster (Search Console: ~33 impressions
// at position ~10). IKEA device owners looking for a local brain are a great
// fit for Gladys. The page explains the two ways to control IKEA devices with
// Gladys (Zigbee2MQTT directly, or Matter through the DIRIGERA hub) and links
// out to the existing integration docs for the how-to.

const ikeaSmartHomeContent = {
  en: {
    meta: {
      title: "IKEA smart home with Gladys: Dirigera, Tradfri and Matter",
      description:
        "Control your IKEA smart home devices (Tradfri bulbs, sensors, blinds) locally with Gladys Assistant, with or without the Dirigera hub, over Zigbee2MQTT or Matter.",
    },
    hero: {
      title: "Your IKEA smart home, running locally with Gladys",
      subtitle:
        "Control your IKEA Tradfri and Dirigera devices from one local, open-source dashboard, with real automations and no cloud.",
      intro: [
        "IKEA makes some of the best value smart home hardware out there: Tradfri bulbs, motion and door sensors, smart plugs, remotes and Fyrtur blinds. On their own, they rely on the IKEA app and the Dirigera (or older Tradfri) gateway.",
        "With Gladys Assistant you can bring all of these devices into a single local dashboard, mix them freely with other brands, and build automations that actually react to your home. There are two ways to connect IKEA to Gladys, and you can even skip the IKEA hub entirely.",
      ],
      primaryCta: { label: "Connect Zigbee to Gladys", href: "/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    methods: {
      title: "Two ways to use IKEA devices with Gladys",
      intro:
        "IKEA smart devices are Zigbee devices, so you have two options depending on whether you want to keep the IKEA hub or not:",
      items: [
        {
          name: "1. Directly over Zigbee2MQTT (no IKEA hub)",
          tag: "Recommended, fully local",
          text: "IKEA Tradfri devices are standard Zigbee, so you can pair them straight to Gladys with a Zigbee USB dongle through Zigbee2MQTT, no Dirigera or Tradfri gateway required. This is the most local option: your bulbs, sensors and remotes talk directly to Gladys, and you can mix them with Philips Hue, Aqara, Sonoff and any other Zigbee brand on the same network.",
          link: { href: "/docs/integrations/zigbee2mqtt/", label: "Set up Zigbee2MQTT →" },
        },
        {
          name: "2. Through the Dirigera hub over Matter",
          tag: "Keep your IKEA gateway",
          text: "The newer IKEA DIRIGERA hub acts as a Matter bridge. If you want to keep managing your devices in the IKEA app, you can expose them to Gladys over Matter: the hub is already on your Wi-Fi or Ethernet, so Gladys can control the connected devices directly, locally, without the IKEA cloud.",
          link: { href: "/docs/integrations/matter/", label: "Read the Matter guide →" },
        },
      ],
      outro:
        "Not sure which to pick? If you want the most local, brand-agnostic setup, go with Zigbee2MQTT and a dongle. If you already own a Dirigera hub and like the IKEA app, the Matter route is the quickest.",
    },
    devices: {
      title: "Which IKEA devices work with Gladys",
      intro:
        "Paired over Zigbee2MQTT, the vast majority of the IKEA Tradfri range works with Gladys, including:",
      points: [
        "Tradfri LED bulbs (E27, E14, GU10), white spectrum and colour",
        "Smart plugs (Tradfri control outlet)",
        "Motion sensors and door/window sensors",
        "Tradfri and Styrbar remotes and dimmers",
        "Fyrtur and Kadrilj smart blinds",
        "Vindstyrka and other Zigbee air quality sensors",
      ],
      outro:
        "A Zigbee USB dongle is all you need to pair them. See our guide to picking the right one.",
    },
    gladys: {
      title: "Why run your IKEA devices through Gladys",
      paragraphs: [
        "The IKEA app is fine for basic control, but it keeps your devices in a silo and leans on the cloud. With Gladys, your IKEA lights and sensors live in the same place as every other device in your home, and everything runs locally on your own hardware.",
        "From there you can build real automations: turn on the Tradfri lights when an IKEA motion sensor fires, close the Fyrtur blinds at sunset, or trigger a whole scene from a Styrbar remote, combining IKEA gear with any other brand you own.",
      ],
      link: { label: "Discover local, open-source home automation →", href: "/open-source-home-automation/" },
    },
    related: {
      title: "Go further",
      intro:
        "Connecting your IKEA devices is part of building a local smart home:",
      links: [
        {
          label: "Connect Zigbee devices to Gladys",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "The step-by-step guide to pairing Zigbee devices, including IKEA Tradfri, with Zigbee2MQTT.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy to pair your IKEA and other Zigbee devices locally.",
        },
        {
          label: "Home weather station",
          href: "/home-weather-station/",
          text: "Measure temperature and humidity locally with Zigbee and Matter sensors.",
        },
        {
          label: "Matter in Gladys",
          href: "/docs/integrations/matter/",
          text: "How to use Matter bridges like the IKEA Dirigera hub with Gladys.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Bring your IKEA devices home",
      text: "Gladys is free, open-source, and installs in a single Docker command. Pair your Tradfri devices locally and automate your whole home, IKEA and beyond.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Set up Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
    },
  },

  fr: {
    meta: {
      title: "Maison connectée IKEA avec Gladys : Dirigera, Tradfri et Matter",
      description:
        "Pilotez vos appareils connectés IKEA (ampoules Tradfri, capteurs, stores) en local avec Gladys Assistant, avec ou sans le hub Dirigera, via Zigbee2MQTT ou Matter.",
    },
    hero: {
      title: "Votre maison connectée IKEA, en local avec Gladys",
      subtitle:
        "Pilotez vos appareils IKEA Tradfri et Dirigera depuis un seul tableau de bord local et open source, avec de vraies automatisations et sans cloud.",
      intro: [
        "IKEA propose parmi le meilleur matériel domotique en rapport qualité/prix : ampoules Tradfri, détecteurs de mouvement et d'ouverture, prises connectées, télécommandes et stores Fyrtur. Seuls, ces appareils dépendent de l'application IKEA et de la passerelle Dirigera (ou de l'ancienne Tradfri).",
        "Avec Gladys Assistant, vous réunissez tous ces appareils dans un seul tableau de bord local, vous les mélangez librement avec d'autres marques, et vous créez des automatisations qui réagissent vraiment à votre maison. Il y a deux façons de connecter IKEA à Gladys, et vous pouvez même vous passer totalement du hub IKEA.",
      ],
      primaryCta: { label: "Connecter le Zigbee à Gladys", href: "/fr/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/fr/docs/",
      },
    },
    methods: {
      title: "Deux façons d'utiliser vos appareils IKEA avec Gladys",
      intro:
        "Les appareils connectés IKEA sont des appareils Zigbee : vous avez donc deux options selon que vous souhaitez garder le hub IKEA ou non :",
      items: [
        {
          name: "1. Directement en Zigbee2MQTT (sans hub IKEA)",
          tag: "Recommandé, 100 % local",
          text: "Les appareils IKEA Tradfri sont du Zigbee standard : vous pouvez donc les appairer directement à Gladys avec une clé Zigbee USB via Zigbee2MQTT, sans passerelle Dirigera ni Tradfri. C'est l'option la plus locale : vos ampoules, capteurs et télécommandes dialoguent directement avec Gladys, et vous pouvez les mélanger avec du Philips Hue, de l'Aqara, du Sonoff et n'importe quelle autre marque Zigbee sur le même réseau.",
          link: { href: "/fr/docs/integrations/zigbee2mqtt/", label: "Configurer Zigbee2MQTT →" },
        },
        {
          name: "2. Via le hub Dirigera en Matter",
          tag: "Garder sa passerelle IKEA",
          text: "Le nouveau hub IKEA DIRIGERA agit comme un pont Matter. Si vous voulez continuer à gérer vos appareils dans l'application IKEA, vous pouvez les exposer à Gladys en Matter : le hub est déjà sur votre Wi-Fi ou votre Ethernet, donc Gladys peut piloter les appareils connectés directement, en local, sans le cloud IKEA.",
          link: { href: "/fr/docs/integrations/matter/", label: "Lire le guide Matter →" },
        },
      ],
      outro:
        "Vous hésitez ? Pour l'installation la plus locale et multimarque, choisissez Zigbee2MQTT et une clé. Si vous possédez déjà un hub Dirigera et appréciez l'application IKEA, la voie Matter est la plus rapide.",
    },
    devices: {
      title: "Quels appareils IKEA fonctionnent avec Gladys",
      intro:
        "Appairée en Zigbee2MQTT, la grande majorité de la gamme IKEA Tradfri fonctionne avec Gladys, notamment :",
      points: [
        "Les ampoules LED Tradfri (E27, E14, GU10), spectre blanc et couleur",
        "Les prises connectées (prise Tradfri)",
        "Les détecteurs de mouvement et d'ouverture de porte/fenêtre",
        "Les télécommandes et variateurs Tradfri et Styrbar",
        "Les stores connectés Fyrtur et Kadrilj",
        "Le Vindstyrka et autres capteurs de qualité de l'air Zigbee",
      ],
      outro:
        "Une clé Zigbee USB suffit pour les appairer. Consultez notre guide pour choisir la bonne.",
    },
    gladys: {
      title: "Pourquoi piloter vos appareils IKEA avec Gladys",
      paragraphs: [
        "L'application IKEA convient pour un contrôle basique, mais elle enferme vos appareils dans un silo et s'appuie sur le cloud. Avec Gladys, vos lumières et capteurs IKEA se retrouvent au même endroit que tous les autres appareils de votre maison, et tout fonctionne en local sur votre propre matériel.",
        "À partir de là, vous créez de vraies automatisations : allumer les lumières Tradfri quand un détecteur de mouvement IKEA se déclenche, fermer les stores Fyrtur au coucher du soleil, ou lancer une scène complète depuis une télécommande Styrbar, en combinant le matériel IKEA avec n'importe quelle autre marque.",
      ],
      link: { label: "Découvrir la domotique locale et open source →", href: "/fr/open-source-home-automation/" },
    },
    related: {
      title: "Aller plus loin",
      intro:
        "Connecter vos appareils IKEA fait partie de la construction d'une maison connectée locale :",
      links: [
        {
          label: "Connecter des appareils Zigbee à Gladys",
          href: "/fr/docs/integrations/zigbee2mqtt/",
          text: "Le guide pas à pas pour appairer des appareils Zigbee, dont les IKEA Tradfri, avec Zigbee2MQTT.",
        },
        {
          label: "Quelle clé Zigbee USB choisir",
          href: "/fr/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter pour appairer vos appareils IKEA et autres en local.",
        },
        {
          label: "Station météo maison",
          href: "/fr/home-weather-station/",
          text: "Mesurez température et humidité en local avec des capteurs Zigbee et Matter.",
        },
        {
          label: "Matter dans Gladys",
          href: "/fr/docs/integrations/matter/",
          text: "Comment utiliser les ponts Matter comme le hub IKEA Dirigera avec Gladys.",
        },
        {
          label: "Construire une maison connectée locale",
          href: "/fr/local-smart-home/",
          text: "Pourquoi le local d'abord change tout, et comment bâtir une maison qui tourne sans cloud.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Ramenez vos appareils IKEA à la maison",
      text: "Gladys est gratuit, open source, et s'installe en une seule commande Docker. Appairez vos appareils Tradfri en local et automatisez toute votre maison, IKEA et au-delà.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: {
        label: "Configurer Zigbee2MQTT",
        href: "/fr/docs/integrations/zigbee2mqtt/",
      },
    },
  },
};

export const ikeaSmartHomeFaqEn = [
  {
    question: "Can I use IKEA smart home devices without the Dirigera hub?",
    answer:
      "Yes. IKEA Tradfri devices are standard Zigbee, so you can pair them directly to Gladys with a Zigbee USB dongle through Zigbee2MQTT, without any Dirigera or Tradfri gateway. Your bulbs, sensors and remotes then talk straight to Gladys, fully locally.",
  },
  {
    question: "Does Gladys work with the IKEA Dirigera hub?",
    answer:
      "Yes. The Dirigera hub acts as a Matter bridge, so you can expose the devices connected to it to Gladys over Matter. The hub is already on your local network, which lets Gladys control them locally without the IKEA cloud. You can also skip the hub entirely and pair the devices directly over Zigbee2MQTT.",
  },
  {
    question: "Which IKEA devices are compatible with Gladys?",
    answer:
      "Paired over Zigbee2MQTT, most of the IKEA Tradfri range works: LED bulbs (E27, E14, GU10), smart plugs, motion and door sensors, Styrbar and Tradfri remotes, and Fyrtur or Kadrilj blinds. Anything that speaks standard Zigbee can be added.",
  },
  {
    question: "Do I still need the IKEA app?",
    answer:
      "No. If you pair your devices directly over Zigbee2MQTT, you control everything from Gladys and don't need the IKEA app at all. If you keep the Dirigera hub and use Matter, you can still manage devices in the IKEA app while also controlling them in Gladys.",
  },
  {
    question: "Can I mix IKEA devices with other brands?",
    answer:
      "Yes, and that is one of the main reasons to use Gladys. Over Zigbee2MQTT you can freely combine IKEA Tradfri with Philips Hue, Aqara, Sonoff and other Zigbee brands, all on the same network and in the same automations.",
  },
];

export const ikeaSmartHomeFaqFr = [
  {
    question: "Puis-je utiliser des appareils connectés IKEA sans le hub Dirigera ?",
    answer:
      "Oui. Les appareils IKEA Tradfri sont du Zigbee standard : vous pouvez donc les appairer directement à Gladys avec une clé Zigbee USB via Zigbee2MQTT, sans passerelle Dirigera ni Tradfri. Vos ampoules, capteurs et télécommandes dialoguent alors directement avec Gladys, en local.",
  },
  {
    question: "Gladys fonctionne-t-il avec le hub IKEA Dirigera ?",
    answer:
      "Oui. Le hub Dirigera agit comme un pont Matter : vous pouvez donc exposer à Gladys les appareils qui y sont connectés, en Matter. Le hub étant déjà sur votre réseau local, Gladys les pilote en local sans le cloud IKEA. Vous pouvez aussi vous passer totalement du hub et appairer les appareils directement en Zigbee2MQTT.",
  },
  {
    question: "Quels appareils IKEA sont compatibles avec Gladys ?",
    answer:
      "Appairée en Zigbee2MQTT, la plupart de la gamme IKEA Tradfri fonctionne : ampoules LED (E27, E14, GU10), prises connectées, détecteurs de mouvement et d'ouverture, télécommandes Styrbar et Tradfri, et stores Fyrtur ou Kadrilj. Tout ce qui parle Zigbee standard peut être ajouté.",
  },
  {
    question: "Ai-je encore besoin de l'application IKEA ?",
    answer:
      "Non. Si vous appairez vos appareils directement en Zigbee2MQTT, vous pilotez tout depuis Gladys et n'avez pas besoin de l'application IKEA. Si vous gardez le hub Dirigera et utilisez Matter, vous pouvez continuer à gérer vos appareils dans l'application IKEA tout en les pilotant dans Gladys.",
  },
  {
    question: "Puis-je mélanger des appareils IKEA avec d'autres marques ?",
    answer:
      "Oui, et c'est l'une des principales raisons d'utiliser Gladys. En Zigbee2MQTT, vous combinez librement l'IKEA Tradfri avec du Philips Hue, de l'Aqara, du Sonoff et d'autres marques Zigbee, sur le même réseau et dans les mêmes automatisations.",
  },
];

export default ikeaSmartHomeContent;
