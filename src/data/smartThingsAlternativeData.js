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

export default smartThingsAlternativeContent;
