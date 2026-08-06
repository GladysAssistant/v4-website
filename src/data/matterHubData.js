// Content for the "Matter hub" landing page.
// Targets the "hub matter / matter hub / hub matter thread / hub compatible
// matter / passerelle matter thread / dongle matter" cluster (Search Console
// 12 months: ~6.5k impressions at position ~7, served today only by a forum
// thread). The angle: "hub Matter" actually covers three different jobs, and
// Gladys is the controller you can self-host instead of buying a box.

const matterHubContent = {
  en: {
    meta: {
      title: "Which Matter hub do you need? (2026 guide)",
      description:
        "Matter controller, Thread border router or Matter bridge: the word hub covers three different jobs. Here is which one you actually need, and how to run your Matter controller yourself with Gladys.",
    },
    hero: {
      title: "Which Matter hub do you actually need?",
      subtitle:
        "Controller, Thread border router, bridge: three different jobs hide behind the word hub. Here is how to tell them apart, and how to be your own Matter hub with Gladys.",
      intro: [
        "Matter promised the end of the smart home hub. In practice, shops still sell boxes labelled Matter hub, and every ecosystem wants you to buy its own. The confusion is understandable, because the word covers three jobs that have almost nothing to do with each other.",
        "Once you know which job you need, the answer is usually simpler and cheaper than a new box. And for the one job that really matters, controlling your devices, you can run it yourself, at home, on hardware you already own.",
      ],
      primaryCta: {
        label: "Use Gladys as your Matter controller",
        href: "/docs/integrations/matter/",
      },
      secondaryCta: { label: "Get started with Gladys →", href: "/docs/" },
    },
    jobs: {
      title: "The three things people call a Matter hub",
      intro:
        "Before buying anything, work out which of these three you are missing:",
      items: [
        {
          tag: "The one you need",
          name: "A Matter controller",
          text: "The software that pairs your Matter devices, holds their credentials and sends them commands. Apple Home, Google Home, Alexa and SmartThings are controllers, and so is Gladys, running on your own machine. You need exactly one to get started, and a device can be shared with several.",
        },
        {
          tag: "Only for Thread devices",
          name: "A Thread border router",
          text: "A bridge between the low-power Thread radio network and your home IP network. Only Thread devices need one. Many homes already have one without knowing it, inside an Apple TV, a HomePod, a Nest Hub or an Echo.",
        },
        {
          tag: "For older devices",
          name: "A Matter bridge",
          text: "A box or a piece of software that makes non-Matter devices look like Matter ones: a Philips Hue Bridge exposing its Zigbee bulbs, an IKEA DIRIGERA exposing its own range, or the open-source Matterbridge project exposing almost anything else.",
        },
      ],
      outro:
        "Most people asking for a Matter hub are looking for the first one, a controller, and can skip buying hardware entirely.",
    },
    decision: {
      title: "Do you need to buy a hub at all?",
      intro: "Look at what your devices use to communicate:",
      points: [
        "Matter over Wi-Fi or Ethernet: no hub to buy. The device is already on your network, and Gladys pairs with it directly using its 11-digit code. This covers most Matter plugs, bulbs, and every manufacturer bridge.",
        "Matter over Thread: you need a Thread border router on your network, but probably not a new one. Check the Apple, Google and Amazon devices you already own before buying anything.",
        "Zigbee or Z-Wave devices: Matter is not involved at all. These need their own coordinator, which with Gladys means a USB Zigbee dongle and Zigbee2MQTT, not a Matter hub.",
        "Cloud-only devices, such as Somfy io or many older brands: no hub will make them speak Matter. A bridge such as Matterbridge, or a direct integration, is the way in.",
      ],
      outro:
        "If you own a Matter device today and it is on Wi-Fi or Ethernet, you can add it to Gladys in the next ten minutes without buying anything.",
    },
    comparison: {
      title: "Matter hubs compared",
      intro:
        "What each of the usual options actually gives you, and what it costs you in return:",
      table: {
        headers: ["Hub", "Controller", "Thread router", "Runs locally"],
        rows: [
          [
            "Gladys on your own machine",
            "Yes",
            "No, use an existing one",
            "Yes, entirely",
          ],
          ["Apple TV 4K / HomePod", "Yes", "Yes", "Mostly, Apple account"],
          ["Google Nest Hub / TV Streamer", "Yes", "Yes", "Partly, Google account"],
          ["Amazon Echo (4th gen and later)", "Yes", "Yes", "Partly, Amazon account"],
          ["SmartThings hub", "Yes", "Yes", "Partly, Samsung account"],
          ["Philips Hue Bridge / IKEA DIRIGERA", "No, bridge only", "Varies", "Yes for the bridge"],
        ],
      },
      outro:
        "The commercial hubs are good Thread border routers, and a fine way to get one. What they are not is a neutral place to build your automations: each one keeps your devices inside its own ecosystem and its own account. That is the job Gladys takes over.",
    },
    gladys: {
      title: "Gladys as your Matter hub",
      paragraphs: [
        "Gladys Assistant is a Matter controller that runs on your own hardware: a Raspberry Pi, a mini-PC or a NAS. You enable Matter in the integration settings, enter the 11-digit pairing code of your device, and it appears in Gladys, ready to be placed on a dashboard or used in a scene.",
        "From there, control is local. Commands go from your Gladys to your device on your own network, with no ecosystem account in between and no cloud round trip. Your Matter lights, plugs, shutters, thermostats and sensors sit next to your Zigbee devices and your cameras, in one interface.",
        "Two practical points. Matter runs on IPv6, so IPv6 must be enabled on your machine and your router. And if a device is already paired with another controller, Apple Home for instance, you pair Gladys with a new code generated by that controller rather than the code printed on the box.",
      ],
      link: {
        label: "Read the Matter integration guide →",
        href: "/docs/integrations/matter/",
      },
    },
    related: {
      title: "Go further",
      intro: "Matter is one piece of a local smart home:",
      links: [
        {
          label: "Matter integration guide",
          href: "/docs/integrations/matter/",
          text: "Enable Matter in Gladys, pair a device and use it in your scenes.",
        },
        {
          label: "Matterbridge",
          href: "/docs/integrations/matterbridge/",
          text: "Expose devices that are not Matter compatible as Matter devices.",
        },
        {
          label: "Zigbee vs Matter vs Z-Wave",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Which wireless standard to choose for the devices you buy next.",
        },
        {
          label: "Best Zigbee dongle",
          href: "/best-zigbee-dongle/",
          text: "For your Zigbee devices, the coordinator to plug into your server.",
        },
        {
          label: "IKEA smart home",
          href: "/ikea-smart-home/",
          text: "Use IKEA devices locally, over Zigbee2MQTT or through Matter.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters, and how to build a home that runs without the cloud.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Be your own Matter hub",
      text: "Gladys is free, open-source and self-hosted. Install it on a Raspberry Pi or a mini-PC, enable Matter, and control your devices locally, without an ecosystem account.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Set up Matter", href: "/docs/integrations/matter/" },
    },
  },

  fr: {
    meta: {
      title: "Quel hub Matter choisir ? (guide 2026)",
      description:
        "Contrôleur Matter, routeur de bordure Thread ou pont Matter : le mot hub recouvre trois rôles différents. Voici celui dont vous avez vraiment besoin, et comment héberger votre contrôleur Matter vous-même avec Gladys.",
    },
    hero: {
      title: "Quel hub Matter vous faut-il vraiment ?",
      subtitle:
        "Contrôleur, routeur de bordure Thread, pont : trois rôles différents se cachent derrière le mot hub. Voici comment les distinguer, et comment être votre propre hub Matter avec Gladys.",
      intro: [
        "Matter promettait la fin des box domotiques. Dans les faits, les boutiques vendent toujours des boîtiers étiquetés hub Matter, et chaque écosystème veut vous vendre le sien. La confusion est compréhensible, car le mot recouvre trois rôles qui n'ont presque rien à voir entre eux.",
        "Une fois que vous savez lequel il vous manque, la réponse est en général plus simple et moins chère qu'un nouveau boîtier. Et pour le seul rôle qui compte vraiment, le pilotage de vos appareils, vous pouvez l'héberger vous-même, chez vous, sur du matériel que vous avez déjà.",
      ],
      primaryCta: {
        label: "Utiliser Gladys comme contrôleur Matter",
        href: "/fr/docs/integrations/matter/",
      },
      secondaryCta: { label: "Commencer avec Gladys →", href: "/fr/docs/" },
    },
    jobs: {
      title: "Les trois choses qu'on appelle un hub Matter",
      intro:
        "Avant d'acheter quoi que ce soit, déterminez lequel de ces trois rôles vous manque :",
      items: [
        {
          tag: "Celui dont vous avez besoin",
          name: "Un contrôleur Matter",
          text: "Le logiciel qui appaire vos appareils Matter, conserve leurs identifiants et leur envoie des commandes. Apple Home, Google Home, Alexa et SmartThings sont des contrôleurs, et Gladys aussi, sur votre propre machine. Il en faut exactement un pour démarrer, et un appareil peut être partagé entre plusieurs.",
        },
        {
          tag: "Seulement pour le Thread",
          name: "Un routeur de bordure Thread",
          text: "Une passerelle entre le réseau radio basse consommation Thread et votre réseau IP domestique. Seuls les appareils Thread en ont besoin. Beaucoup de foyers en ont déjà un sans le savoir, dans une Apple TV, un HomePod, un Nest Hub ou une Echo.",
        },
        {
          tag: "Pour les appareils plus anciens",
          name: "Un pont Matter",
          text: "Un boîtier ou un logiciel qui fait passer des appareils non-Matter pour des appareils Matter : un pont Philips Hue qui expose ses ampoules Zigbee, un IKEA DIRIGERA qui expose sa gamme, ou le projet open source Matterbridge qui expose à peu près tout le reste.",
        },
      ],
      outro:
        "La plupart des gens qui cherchent un hub Matter cherchent en fait le premier, un contrôleur, et peuvent se passer complètement d'un achat de matériel.",
    },
    decision: {
      title: "Avez-vous vraiment besoin d'acheter un hub ?",
      intro: "Regardez ce que vos appareils utilisent pour communiquer :",
      points: [
        "Matter en Wi-Fi ou Ethernet : aucun hub à acheter. L'appareil est déjà sur votre réseau, et Gladys s'y appaire directement avec son code à 11 chiffres. C'est le cas de la plupart des prises et ampoules Matter, et de tous les ponts de fabricants.",
        "Matter en Thread : il vous faut un routeur de bordure Thread sur votre réseau, mais probablement pas un neuf. Vérifiez les appareils Apple, Google et Amazon que vous possédez déjà avant d'acheter.",
        "Appareils Zigbee ou Z-Wave : Matter n'entre pas en jeu. Ils ont besoin de leur propre coordinateur, ce qui avec Gladys signifie une clé USB Zigbee et Zigbee2MQTT, pas un hub Matter.",
        "Appareils uniquement cloud, comme le Somfy io ou beaucoup de marques plus anciennes : aucun hub ne les fera parler Matter. Un pont comme Matterbridge, ou une intégration directe, est la bonne porte d'entrée.",
      ],
      outro:
        "Si vous possédez déjà un appareil Matter et qu'il est en Wi-Fi ou en Ethernet, vous pouvez l'ajouter à Gladys dans les dix minutes, sans rien acheter.",
    },
    comparison: {
      title: "Les hubs Matter comparés",
      intro:
        "Ce que chaque option habituelle vous apporte réellement, et ce qu'elle vous coûte en retour :",
      table: {
        headers: ["Hub", "Contrôleur", "Routeur Thread", "Fonctionne en local"],
        rows: [
          [
            "Gladys sur votre machine",
            "Oui",
            "Non, utilisez un routeur existant",
            "Oui, entièrement",
          ],
          ["Apple TV 4K / HomePod", "Oui", "Oui", "En grande partie, compte Apple"],
          [
            "Google Nest Hub / TV Streamer",
            "Oui",
            "Oui",
            "En partie, compte Google",
          ],
          [
            "Amazon Echo (4e génération et plus)",
            "Oui",
            "Oui",
            "En partie, compte Amazon",
          ],
          ["Box SmartThings", "Oui", "Oui", "En partie, compte Samsung"],
          [
            "Pont Philips Hue / IKEA DIRIGERA",
            "Non, pont uniquement",
            "Variable",
            "Oui pour le pont",
          ],
        ],
      },
      outro:
        "Les hubs du commerce sont de bons routeurs de bordure Thread, et une façon tout à fait valable d'en obtenir un. Ce qu'ils ne sont pas, c'est un endroit neutre où bâtir vos automatisations : chacun garde vos appareils dans son écosystème et son compte. C'est ce rôle que Gladys reprend.",
    },
    gladys: {
      title: "Gladys comme hub Matter",
      paragraphs: [
        "Gladys Assistant est un contrôleur Matter qui tourne sur votre propre matériel : un Raspberry Pi, un mini-PC ou un NAS. Vous activez Matter dans les paramètres de l'intégration, vous saisissez le code d'appairage à 11 chiffres de votre appareil, et il apparaît dans Gladys, prêt à être posé sur un tableau de bord ou utilisé dans une scène.",
        "À partir de là, le pilotage est local. Les commandes vont de votre Gladys à votre appareil sur votre propre réseau, sans compte d'écosystème au milieu et sans aller-retour par le cloud. Vos lumières, prises, volets, thermostats et capteurs Matter côtoient vos appareils Zigbee et vos caméras, dans une seule interface.",
        "Deux points pratiques. Matter fonctionne en IPv6 : l'IPv6 doit donc être activé sur votre machine et sur votre box. Et si un appareil est déjà appairé à un autre contrôleur, Apple Home par exemple, vous appairez Gladys avec un nouveau code généré par ce contrôleur, et non avec le code imprimé sur la boîte.",
      ],
      link: {
        label: "Lire le guide de l'intégration Matter →",
        href: "/fr/docs/integrations/matter/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Matter n'est qu'une pièce d'une maison connectée locale :",
      links: [
        {
          label: "Guide de l'intégration Matter",
          href: "/fr/docs/integrations/matter/",
          text: "Activer Matter dans Gladys, appairer un appareil et l'utiliser dans vos scènes.",
        },
        {
          label: "Matterbridge",
          href: "/fr/docs/integrations/matterbridge/",
          text: "Exposer en Matter des appareils qui ne sont pas compatibles Matter.",
        },
        {
          label: "Somfy et Matter",
          href: "/fr/docs/integrations/somfy-tahoma/",
          text: "Piloter vos volets TaHoma, TaHoma Switch et Connexoon dans Gladys.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/fr/best-zigbee-dongle/",
          text: "Pour vos appareils Zigbee, le coordinateur à brancher sur votre serveur.",
        },
        {
          label: "Maison connectée IKEA",
          href: "/fr/ikea-smart-home/",
          text: "Utiliser vos appareils IKEA en local, via Zigbee2MQTT ou via Matter.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/fr/local-smart-home/",
          text: "Pourquoi le local d'abord compte, et comment bâtir une maison sans le cloud.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Devenez votre propre hub Matter",
      text: "Gladys est gratuite, open source et auto-hébergée. Installez-la sur un Raspberry Pi ou un mini-PC, activez Matter, et pilotez vos appareils en local, sans compte d'écosystème.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: {
        label: "Configurer Matter",
        href: "/fr/docs/integrations/matter/",
      },
    },
  },
};

export const matterHubFaqEn = [
  {
    question: "Do I need a Matter hub?",
    answer:
      "You need a Matter controller, which is software, not necessarily a box. Apple Home, Google Home, Alexa and SmartThings are controllers, and so is Gladys running on your own Raspberry Pi, mini-PC or NAS. You only need to buy hardware if your devices use Thread, in which case you need a Thread border router on your network.",
  },
  {
    question: "What is the difference between a Matter hub and a Thread border router?",
    answer:
      "A Matter controller pairs and controls your devices. A Thread border router connects the low-power Thread radio network to your home IP network. Commercial hubs usually do both, which is why the two get confused, but they are separate jobs: Matter devices on Wi-Fi or Ethernet need a controller and no border router at all.",
  },
  {
    question: "Which devices are Thread border routers?",
    answer:
      "Common ones include the Apple TV 4K (Ethernet model) and HomePod, the Google Nest Hub second generation, Nest Hub Max, Nest Wifi Pro and TV Streamer 4K, and the Amazon Echo fourth generation, Echo Hub, Echo Studio and Echo Show. You can also build your own with a USB Thread dongle and OpenThread.",
  },
  {
    question: "Can I use Matter without Apple, Google or Amazon?",
    answer:
      "Yes. Gladys Assistant is a Matter controller you host yourself, so you can pair and control Matter devices with no ecosystem account. You may still need a Thread border router for Thread-only devices, but for Matter over Wi-Fi or Ethernet, Gladys alone is enough.",
  },
  {
    question: "Do I need a Matter dongle?",
    answer:
      "No. Matter travels over your existing Wi-Fi and Ethernet network, so no USB dongle is involved. Dongles marketed as Matter or Thread coordinators contain a Thread radio, which is only useful if you want to build your own Thread border router. For Zigbee devices, you need a Zigbee dongle, which is a different thing entirely.",
  },
  {
    question: "Is the IKEA DIRIGERA a Matter hub?",
    answer:
      "The DIRIGERA acts as a Matter bridge: it exposes the IKEA devices paired to it as Matter devices, so a controller such as Gladys can see and control them over your network. It is not a general purpose controller for other brands, and IKEA devices can also be used directly over Zigbee2MQTT if you prefer to skip the hub.",
  },
  {
    question: "Can Gladys be my Matter hub?",
    answer:
      "Yes. Gladys is a Matter controller: enable Matter in the integration settings, enter the 11-digit pairing code of your device, and control it from your dashboard and your scenes. Matter runs on IPv6, so make sure IPv6 is enabled on your machine and your router. Gladys is not a Thread border router, so Thread-only devices still need one on your network.",
  },
  {
    question: "Can a device be connected to two Matter hubs at once?",
    answer:
      "Yes, that is what Matter calls multi-admin. A device can be shared with several controllers at the same time. To add it to a second one, you ask the controller that already owns it to generate a new pairing code, and use that code rather than the one printed on the device.",
  },
];

export const matterHubFaqFr = [
  {
    question: "Ai-je besoin d'un hub Matter ?",
    answer:
      "Il vous faut un contrôleur Matter, qui est un logiciel, pas nécessairement un boîtier. Apple Home, Google Home, Alexa et SmartThings sont des contrôleurs, et Gladys aussi, sur votre propre Raspberry Pi, mini-PC ou NAS. Vous n'avez besoin d'acheter du matériel que si vos appareils utilisent le Thread : il vous faut alors un routeur de bordure Thread sur votre réseau.",
  },
  {
    question: "Quelle différence entre un hub Matter et un routeur de bordure Thread ?",
    answer:
      "Un contrôleur Matter appaire et pilote vos appareils. Un routeur de bordure Thread relie le réseau radio basse consommation Thread à votre réseau IP domestique. Les hubs du commerce font en général les deux, d'où la confusion, mais ce sont deux rôles distincts : les appareils Matter en Wi-Fi ou Ethernet ont besoin d'un contrôleur et d'aucun routeur de bordure.",
  },
  {
    question: "Quels appareils sont des routeurs de bordure Thread ?",
    answer:
      "Parmi les plus courants : l'Apple TV 4K (modèle Ethernet) et le HomePod, les Google Nest Hub 2e génération, Nest Hub Max, Nest Wifi Pro et TV Streamer 4K, ainsi que les Amazon Echo 4e génération, Echo Hub, Echo Studio et Echo Show. Vous pouvez aussi fabriquer le vôtre avec une clé USB Thread et OpenThread.",
  },
  {
    question: "Peut-on utiliser Matter sans Apple, Google ni Amazon ?",
    answer:
      "Oui. Gladys Assistant est un contrôleur Matter que vous hébergez vous-même : vous pouvez appairer et piloter des appareils Matter sans aucun compte d'écosystème. Un routeur de bordure Thread reste nécessaire pour les appareils uniquement Thread, mais pour du Matter en Wi-Fi ou Ethernet, Gladys seule suffit.",
  },
  {
    question: "Faut-il un dongle Matter ?",
    answer:
      "Non. Matter circule sur votre réseau Wi-Fi et Ethernet existant : aucune clé USB n'entre en jeu. Les dongles vendus comme coordinateurs Matter ou Thread contiennent une radio Thread, utile uniquement si vous voulez fabriquer votre propre routeur de bordure Thread. Pour des appareils Zigbee, il vous faut une clé Zigbee, ce qui est tout autre chose.",
  },
  {
    question: "L'IKEA DIRIGERA est-il un hub Matter ?",
    answer:
      "Le DIRIGERA joue le rôle de pont Matter : il expose en Matter les appareils IKEA qui lui sont appairés, si bien qu'un contrôleur comme Gladys peut les voir et les piloter sur votre réseau. Ce n'est pas un contrôleur généraliste pour les autres marques, et les appareils IKEA peuvent aussi être utilisés directement via Zigbee2MQTT si vous préférez vous passer du hub.",
  },
  {
    question: "Gladys peut-elle être mon hub Matter ?",
    answer:
      "Oui. Gladys est un contrôleur Matter : activez Matter dans les paramètres de l'intégration, saisissez le code d'appairage à 11 chiffres de votre appareil, et pilotez-le depuis votre tableau de bord et vos scènes. Matter fonctionne en IPv6 : vérifiez que l'IPv6 est activé sur votre machine et sur votre box. Gladys n'est pas un routeur de bordure Thread : les appareils uniquement Thread en réclament donc toujours un sur votre réseau.",
  },
  {
    question: "Un appareil peut-il être connecté à deux hubs Matter à la fois ?",
    answer:
      "Oui, c'est ce que Matter appelle le multi-admin. Un appareil peut être partagé entre plusieurs contrôleurs en même temps. Pour l'ajouter à un second, vous demandez au contrôleur qui le possède déjà de générer un nouveau code d'appairage, et vous utilisez ce code plutôt que celui imprimé sur l'appareil.",
  },
];

export default matterHubContent;
