// Content for the "Homey alternative" landing page.
// Homey (Athom, 80% owned by LG since July 2024) is a popular all-in-one hub in
// Europe and increasingly in North America. People looking for an alternative
// usually balk at the hardware price, or want open source and no dependency on
// a company's roadmap. We stay fair: Homey is polished and supports many
// radios. Facts checked on homey.app in September 2026: Homey Pro $449/€449 and
// Homey Pro mini $249/€279 since June 1, 2026; Homey Self-Hosted Server
// (December 2025) $4.99/€4.99 per month or $149/€149 lifetime, Zigbee and
// Z-Wave through a Homey Bridge. Update when Homey changes its prices.

const homeyAlternativeContent = {
  en: {
    meta: {
      title: "Homey Pro Alternative: Free, Open-Source Smart Home Hub",
      description:
        "Looking for a Homey Pro alternative? Gladys Assistant is a free, open-source smart home platform that runs on your own mini-PC or Raspberry Pi, with Zigbee, Z-Wave, Matter, visual scenes and optional AI.",
    },
    screenshotCaption:
      "A clean dashboard, visual scenes and local control, on hardware you already own or choose yourself.",
    hero: {
      title: "Looking for a Homey alternative?",
      subtitle:
        "Homey made the smart home friendly. Gladys Assistant keeps it friendly, and makes it free, open source and yours, on the hardware you choose.",
      intro: [
        "Homey is one of the nicest smart home hubs out there: a polished app, easy Flows and lots of radios in one box. It also comes with a price tag (the Homey Pro is now $449), a proprietary platform, and a company that has been owned by LG since 2024.",
        "Gladys Assistant is a free and open-source alternative with the same focus on simplicity. It runs on your own mini-PC or Raspberry Pi, pairs your Zigbee, Z-Wave and Matter devices directly, and lets you build scenes in a visual editor. No hub to buy, no mandatory subscription.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Try the demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Why people look for an alternative to Homey",
      intro: "Homey is well made, but a few things make people look elsewhere:",
      points: [
        "The hardware is expensive: $449 for the Homey Pro and $249 for the Homey Pro mini since June 2026.",
        "The platform is proprietary. Apps can be open source, but Homey itself is not.",
        "Homey is 80% owned by LG since July 2024: the product's direction now depends on a large electronics group's strategy.",
        "Homey Self-Hosted Server runs on your own machine, but it's a paid license and Zigbee or Z-Wave need a Homey Bridge.",
      ],
      outro:
        "If you like Homey's simplicity but want to own your platform, there is a free way to get there.",
    },
    comparison: {
      title: "Gladys Assistant vs Homey",
      intro: "How the two compare:",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Homey Pro / Self-Hosted Server",
      },
      rows: [
        {
          feature: "Hardware",
          gladys: "Your own mini-PC, Raspberry Pi or NAS",
          other: "Homey Pro ($449), Pro mini ($249), or your server with Self-Hosted Server",
        },
        {
          feature: "Software price",
          gladys: "Free",
          other: "Included with the hub; Self-Hosted Server $4.99/month or $149 lifetime",
        },
        {
          feature: "Zigbee and Z-Wave",
          gladys: "USB dongles (Zigbee2MQTT, Z-Wave JS UI)",
          other: "Built into Homey Pro; Homey Bridge needed for Self-Hosted Server",
        },
        {
          feature: "Matter",
          gladys: "Yes, as a Matter controller",
          other: "Yes, and Homey Pro is also a Thread border router",
        },
        {
          feature: "Infrared and 433 MHz",
          gladys: "Through Broadlink and RFLink",
          other: "Built into Homey Pro (433 MHz outside North America)",
        },
        {
          feature: "Source code",
          gladys: "Open source (Apache 2.0)",
          other: "Proprietary",
        },
        {
          feature: "AI",
          gladys: "AI assistant with Gladys Plus, free MCP server",
          other: "Depends on the plan and apps",
        },
      ],
      outro:
        "Homey wins on the all-in-one box with every radio built in. Gladys wins on price, openness and hardware freedom.",
    },
    features: {
      title: "Why Gladys is a good Homey alternative",
      intro: "What you get with Gladys:",
      cards: [
        {
          icon: "💸",
          title: "Free, on hardware you choose",
          text: "An old laptop, a mini-PC, a Raspberry Pi or your NAS: Gladys runs anywhere Docker does.",
        },
        {
          icon: "🎨",
          title: "Simple by design",
          text: "Like Homey, Gladys is built for people who want a smart home that works, not a hobby that eats their weekends.",
        },
        {
          icon: "🧩",
          title: "Visual scenes",
          text: "Triggers, conditions, if/then/else and delays, in an editor as friendly as Homey Flows.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave, Matter and more",
          text: "Plus Philips Hue, Tapo, Shelly, Sonos, Tuya, Netatmo and a growing catalog of community integrations.",
        },
        {
          icon: "🤖",
          title: "AI built in",
          text: "Talk to your home in plain language with Gladys Plus, or connect Claude through the MCP server.",
        },
        {
          icon: "💚",
          title: "Open source since 2013",
          text: "Apache 2.0 and developed in the open: no acquisition can take your platform away.",
        },
      ],
    },
    how: {
      title: "How to move from Homey to Gladys",
      intro: "Move at your own pace, room by room:",
      points: [
        "Install Gladys on a mini-PC or a Raspberry Pi, and list your Homey devices by protocol.",
        "Zigbee devices: add a Zigbee USB dongle, remove each device from Homey and pair it with Zigbee2MQTT.",
        "Z-Wave devices: add a Z-Wave USB stick, exclude each device from Homey and include it in Z-Wave JS UI.",
        "Matter devices: share them with Gladys as a second controller, then remove them from Homey.",
        "Wi-Fi and cloud devices: connect them through their Gladys integration.",
        "Rebuild your Flows as Gladys scenes, then sell or retire the hub.",
      ],
      outro:
        "Thread devices need a Thread border router, which Gladys is not: keep one in the home (Apple TV, HomePod, Nest Hub…) for those.",
    },
    solution: {
      title: "Homey's simplicity, without the price tag",
      paragraphs: [
        "Gladys shares Homey's belief that a smart home should be easy. The difference is ownership: Gladys is free, open source and runs on hardware you choose, so your home doesn't depend on a product line's prices or a company's strategy.",
        "Gladys Plus is an optional subscription for encrypted remote access, backups, Alexa and Google Home, and the AI assistant, with a one-month free trial.",
      ],
      link: {
        label: "See what works with Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Go further",
      intro: "More ways to build a local smart home:",
      links: [
        {
          label: "Best smart home hub",
          href: "/best-smart-home-hub/",
          text: "Homey, Hubitat, SmartThings and a mini-PC, compared.",
        },
        {
          label: "Home Assistant Green alternative",
          href: "/home-assistant-green-alternative/",
          text: "Building your own local hub with a mini-PC.",
        },
        {
          label: "Hubitat alternative",
          href: "/hubitat-alternative/",
          text: "Another local hub, and why people move away from it.",
        },
        {
          label: "Which Matter hub to choose",
          href: "/matter-hub/",
          text: "Controller, Thread border router, bridge: what you really need.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "A friendly smart home, free and open source",
      text: "Gladys installs with a single Docker command on the hardware you choose. Try it next to your Homey and move at your own pace.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Works with Gladys", href: "/works-with/" },
    },
  },

  fr: {
    meta: {
      title: "Alternative à Homey Pro : domotique gratuite et open source",
      description:
        "Vous cherchez une alternative à Homey Pro ? Gladys Assistant est une plateforme domotique gratuite et open source qui tourne sur votre mini-PC ou Raspberry Pi, avec Zigbee, Z-Wave, Matter, des scènes visuelles et de l'IA en option.",
    },
    screenshotCaption:
      "Un tableau de bord clair, des scènes visuelles et un contrôle local, sur le matériel que vous avez déjà ou que vous choisissez.",
    hero: {
      title: "Vous cherchez une alternative à Homey ?",
      subtitle:
        "Homey a rendu la domotique conviviale. Gladys Assistant la garde conviviale, et la rend gratuite, open source et à vous, sur le matériel de votre choix.",
      intro: [
        "Homey est l'une des box domotiques les plus agréables : une application soignée, des Flows faciles et beaucoup de radios dans un seul boîtier. Elle a aussi un prix (le Homey Pro est désormais à 449 €), une plateforme propriétaire, et une entreprise détenue par LG depuis 2024.",
        "Gladys Assistant est une alternative gratuite et open source qui partage le même souci de simplicité. Elle tourne sur votre propre mini-PC ou Raspberry Pi, associe directement vos appareils Zigbee, Z-Wave et Matter, et vous permet de créer des scènes dans un éditeur visuel. Pas de box à acheter, pas d'abonnement obligatoire.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Essayer la démo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Pourquoi chercher une alternative à Homey",
      intro: "Homey est bien conçue, mais quelques points poussent à regarder ailleurs :",
      points: [
        "Le matériel est cher : 449 € pour le Homey Pro et 279 € pour le Homey Pro mini depuis juin 2026.",
        "La plateforme est propriétaire. Les applications peuvent être open source, mais pas Homey elle-même.",
        "Homey est détenue à 80 % par LG depuis juillet 2024 : l'avenir du produit dépend désormais de la stratégie d'un grand groupe d'électronique.",
        "Homey Self-Hosted Server tourne sur votre machine, mais c'est une licence payante, et le Zigbee ou le Z-Wave demandent un Homey Bridge.",
      ],
      outro:
        "Si vous aimez la simplicité de Homey mais voulez posséder votre plateforme, il existe une voie gratuite.",
    },
    comparison: {
      title: "Gladys Assistant vs Homey",
      intro: "Comment les deux se comparent :",
      cols: {
        feature: "",
        gladys: "Gladys Assistant",
        other: "Homey Pro / Self-Hosted Server",
      },
      rows: [
        {
          feature: "Matériel",
          gladys: "Votre mini-PC, Raspberry Pi ou NAS",
          other: "Homey Pro (449 €), Pro mini (279 €), ou votre serveur avec Self-Hosted Server",
        },
        {
          feature: "Prix du logiciel",
          gladys: "Gratuit",
          other: "Inclus avec la box ; Self-Hosted Server 4,99 €/mois ou 149 € à vie",
        },
        {
          feature: "Zigbee et Z-Wave",
          gladys: "Clés USB (Zigbee2MQTT, Z-Wave JS UI)",
          other: "Intégrés au Homey Pro ; Homey Bridge nécessaire pour Self-Hosted Server",
        },
        {
          feature: "Matter",
          gladys: "Oui, comme contrôleur Matter",
          other: "Oui, et le Homey Pro est aussi routeur de bordure Thread",
        },
        {
          feature: "Infrarouge et 433 MHz",
          gladys: "Via Broadlink et RFLink",
          other: "Intégrés au Homey Pro",
        },
        {
          feature: "Code source",
          gladys: "Open source (Apache 2.0)",
          other: "Propriétaire",
        },
        {
          feature: "IA",
          gladys: "Assistant IA avec Gladys Plus, serveur MCP gratuit",
          other: "Selon l'offre et les applications",
        },
      ],
      outro:
        "Homey l'emporte sur la box tout-en-un avec toutes les radios intégrées. Gladys l'emporte sur le prix, l'ouverture et la liberté du matériel.",
    },
    features: {
      title: "Pourquoi Gladys est une bonne alternative à Homey",
      intro: "Ce que vous obtenez avec Gladys :",
      cards: [
        {
          icon: "💸",
          title: "Gratuite, sur le matériel de votre choix",
          text: "Un vieux portable, un mini-PC, un Raspberry Pi ou votre NAS : Gladys tourne partout où Docker tourne.",
        },
        {
          icon: "🎨",
          title: "Simple par conception",
          text: "Comme Homey, Gladys est faite pour ceux qui veulent une maison qui marche, pas un hobby qui mange leurs week-ends.",
        },
        {
          icon: "🧩",
          title: "Des scènes visuelles",
          text: "Déclencheurs, conditions, si/alors/sinon et délais, dans un éditeur aussi convivial que les Flows de Homey.",
        },
        {
          icon: "📡",
          title: "Zigbee, Z-Wave, Matter et plus",
          text: "Plus Philips Hue, Tapo, Shelly, Sonos, Tuya, Netatmo et un catalogue croissant d'intégrations communautaires.",
        },
        {
          icon: "🤖",
          title: "L'IA intégrée",
          text: "Parlez à votre maison en langage naturel avec Gladys Plus, ou connectez Claude via le serveur MCP.",
        },
        {
          icon: "💚",
          title: "Open source depuis 2013",
          text: "Apache 2.0 et développée de façon ouverte : aucun rachat ne peut vous retirer votre plateforme.",
        },
      ],
    },
    how: {
      title: "Comment passer de Homey à Gladys",
      intro: "Migrez à votre rythme, pièce par pièce :",
      points: [
        "Installez Gladys sur un mini-PC ou un Raspberry Pi, et listez vos appareils Homey par protocole.",
        "Appareils Zigbee : ajoutez une clé Zigbee USB, retirez chaque appareil de Homey et associez-le à Zigbee2MQTT.",
        "Appareils Z-Wave : ajoutez une clé Z-Wave USB, excluez chaque appareil de Homey et incluez-le dans Z-Wave JS UI.",
        "Appareils Matter : partagez-les avec Gladys comme second contrôleur, puis retirez-les de Homey.",
        "Appareils Wi-Fi et cloud : connectez-les via leur intégration Gladys.",
        "Recréez vos Flows en scènes Gladys, puis revendez ou retirez la box.",
      ],
      outro:
        "Les appareils Thread ont besoin d'un routeur de bordure Thread, ce que Gladys n'est pas : gardez-en un à la maison (Apple TV, HomePod, Nest Hub…) pour ceux-là.",
    },
    solution: {
      title: "La simplicité de Homey, sans le prix",
      paragraphs: [
        "Gladys partage la conviction de Homey : une maison connectée doit être facile. La différence, c'est la propriété : Gladys est gratuite, open source et tourne sur le matériel de votre choix, votre maison ne dépend donc ni des prix d'une gamme ni de la stratégie d'une entreprise.",
        "Gladys Plus est un abonnement optionnel pour l'accès distant chiffré, les sauvegardes, Alexa et Google Home, et l'assistant IA, avec un mois d'essai gratuit.",
      ],
      link: {
        label: "Voir les appareils compatibles →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres façons de construire une maison locale :",
      links: [
        {
          label: "Quelle box domotique choisir",
          href: "/best-smart-home-hub/",
          text: "Homey, Jeedom, Home Assistant Green et un mini-PC, comparés.",
        },
        {
          label: "Alternative à Jeedom",
          href: "/jeedom-alternative/",
          text: "Pourquoi on passe de Jeedom à Gladys.",
        },
        {
          label: "Alternative au Home Assistant Green",
          href: "/home-assistant-green-alternative/",
          text: "Monter sa propre box locale avec un mini-PC.",
        },
        {
          label: "Quel hub Matter choisir",
          href: "/matter-hub/",
          text: "Contrôleur, routeur de bordure Thread, pont : ce dont vous avez vraiment besoin.",
        },
        {
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Du Zigbee local, installé pour vous, avec des tableaux de bord.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Une maison conviviale, gratuite et open source",
      text: "Gladys s'installe en une seule commande Docker sur le matériel de votre choix. Essayez-la à côté de votre Homey et migrez à votre rythme.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Appareils compatibles", href: "/works-with/" },
    },
  },
};

export const homeyAlternativeFaqEn = [
  {
    question: "Is there a free alternative to Homey Pro?",
    answer:
      "Yes. Gladys Assistant is free and open source, and runs on your own mini-PC, Raspberry Pi or NAS. Add a Zigbee dongle and a Z-Wave stick if you use those protocols, and you get local control, dashboards and visual scenes without buying a hub.",
  },
  {
    question: "How much does Homey cost in 2026?",
    answer:
      "Since June 1, 2026, the Homey Pro costs $449 (€449) and the Homey Pro mini $249 (€279). Homey Self-Hosted Server costs $4.99 per month or $149 for a lifetime license, with a Homey Bridge needed for Zigbee and Z-Wave.",
  },
  {
    question: "Is Homey open source?",
    answer:
      "No. Homey's platform is proprietary; developers can choose to publish their Homey apps as open source. Gladys Assistant is fully open source under Apache 2.0.",
  },
  {
    question: "Who owns Homey?",
    answer:
      "LG Electronics acquired 80% of Athom, the company behind Homey, in July 2024, with a plan to acquire the rest later. The Homey brand and team stayed in place.",
  },
  {
    question: "Can Gladys replace Homey's infrared and 433 MHz radios?",
    answer:
      "Partly. Gladys controls infrared devices through Broadlink blasters and 433 MHz devices through RFLink. Homey Pro has more radios built into one box, so check your devices on the Works with Gladys page first.",
  },
];

export const homeyAlternativeFaqFr = [
  {
    question: "Existe-t-il une alternative gratuite au Homey Pro ?",
    answer:
      "Oui. Gladys Assistant est gratuite et open source, et tourne sur votre mini-PC, Raspberry Pi ou NAS. Ajoutez une clé Zigbee et une clé Z-Wave si vous utilisez ces protocoles, et vous avez le contrôle local, les tableaux de bord et les scènes visuelles sans acheter de box.",
  },
  {
    question: "Combien coûte Homey en 2026 ?",
    answer:
      "Depuis le 1er juin 2026, le Homey Pro coûte 449 € et le Homey Pro mini 279 €. Homey Self-Hosted Server coûte 4,99 € par mois ou 149 € pour une licence à vie, avec un Homey Bridge nécessaire pour le Zigbee et le Z-Wave.",
  },
  {
    question: "Homey est-elle open source ?",
    answer:
      "Non. La plateforme Homey est propriétaire ; les développeurs peuvent choisir de publier leurs applications Homey en open source. Gladys Assistant est entièrement open source sous licence Apache 2.0.",
  },
  {
    question: "À qui appartient Homey ?",
    answer:
      "LG Electronics a acquis 80 % d'Athom, l'entreprise derrière Homey, en juillet 2024, avec l'intention d'acquérir le reste plus tard. La marque et l'équipe Homey sont restées en place.",
  },
  {
    question: "Gladys peut-elle remplacer l'infrarouge et le 433 MHz de Homey ?",
    answer:
      "En partie. Gladys pilote les appareils infrarouges via les émetteurs Broadlink et les appareils 433 MHz via RFLink. Le Homey Pro regroupe plus de radios dans un seul boîtier : vérifiez d'abord vos appareils sur la page des appareils compatibles.",
  },
];

export default homeyAlternativeContent;
