// Content for the "home energy monitoring / cut your electricity bill" use-case
// page. Unlike the comparison/alternative and concept-pillar pages, this targets
// a problem-led intent ("reduce electricity bill", "monitor home energy
// consumption"), and leans on a genuine Gladys strength: energy monitoring +
// Enedis + EDF Tempo. The EN version stays fairly general (any kWh-reporting
// device), while the FR version leans hard into Linky / Enedis / Tempo, which
// is France-specific and Gladys' core market.

const energyContent = {
  en: {
    meta: {
      title: "Home energy monitoring: track your consumption and cut your electricity bill",
      description:
        "Monitor your home's electricity consumption in real time, whole-home and per device, then use automations to cut your bill, locally and privately with Gladys Assistant. Free and open-source.",
    },
    hero: {
      title: "Cut your electricity bill with home energy monitoring",
      subtitle:
        "See exactly where your electricity goes, in real time and per device, then let automation do the saving, all locally.",
      intro: [
        "Your electricity bill is mostly a black box: one number a month, with no idea what's driving it. The first step to spending less is simply seeing where your energy actually goes.",
        "Gladys Assistant turns your home into a clear, real-time energy dashboard, whole-home and device by device, and lets you automate the savings. It runs locally on your own machine, so your consumption data stays private.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Energy monitoring docs →",
        href: "/docs/integrations/energy-monitoring/",
      },
    },
    problem: {
      title: "Why your electricity bill is a black box",
      intro:
        "Most homes have almost no visibility into their energy use, which makes it nearly impossible to spend less:",
      points: [
        "You get a single monthly figure, with no idea which appliances are responsible.",
        "Standby and \"vampire\" devices quietly run up the bill 24/7.",
        "An old or faulty appliance can consume far more than you think, with no warning.",
        "Without real-time data, you can't shift usage to cheaper hours.",
      ],
      outro: "You can't reduce what you can't measure, so the first move is visibility.",
    },
    see: {
      title: "What you can see with Gladys",
      intro: "Gladys gives you a live, detailed picture of your home's energy use:",
      cards: [
        {
          icon: "⚡",
          title: "Whole-home consumption",
          text: "Track your entire home's consumption in kWh, in real time and over history, from a compatible energy meter or sensor.",
        },
        {
          icon: "🔌",
          title: "Device by device",
          text: "Add metering smart plugs (Zigbee, Shelly, Tuya…) to see exactly how much each appliance draws.",
        },
        {
          icon: "💶",
          title: "Consumption and cost",
          text: "Turn kWh into your currency, so you see the real cost of your habits, not just abstract numbers.",
        },
        {
          icon: "📈",
          title: "Real-time and history",
          text: "Live readings plus charts over days, weeks and months to spot trends and anomalies.",
        },
        {
          icon: "🤖",
          title: "A weekly AI report",
          text: "Gladys' AI sends you a weekly summary of your consumption, cost, trends and practical advice.",
        },
        {
          icon: "🔔",
          title: "Alerts",
          text: "Build scenes that warn you when consumption spikes or an appliance is left running.",
        },
      ],
    },
    save: {
      title: "How automation actually cuts the bill",
      intro: "Visibility is step one. Then your home can start saving for you, automatically:",
      points: [
        "Kill standby waste: switch off TVs, consoles and chargers at night or when you leave.",
        "Shift heavy loads (washing machine, water heater, EV charging) to off-peak hours.",
        "Heat smart: schedule heating around presence and time, instead of heating an empty home.",
        "Get alerted to abnormal use, a heater left on, a freezer drifting, before it costs you.",
        "Use real tariff data to run the big appliances on the cheapest days (see below).",
      ],
      outro: "Once it's set up, you don't have to think about it, the savings just happen.",
    },
    track: {
      title: "Track your whole home, locally and privately",
      paragraphs: [
        "To monitor your whole home, you need a device that reports consumption in kWh. Gladys' Energy Monitoring integration works with metering smart plugs and energy sensors, and in France with the Linky smart meter through a Lixee ZLinky (Zigbee), which gives precise readings every minute.",
        "If you're in France, the Enedis integration (via Gladys Plus) also pulls in your official Linky consumption history, and Gladys can read the EDF Tempo day colors, so your automations run heavy appliances on the cheapest days.",
        "Either way, your energy data lives on your own machine, on your local network, with no mandatory cloud and no data resale. The Gladys core is free and open-source; Enedis and the hosted AI are optional Gladys Plus features.",
      ],
      link: {
        label: "See the Energy Monitoring integration →",
        href: "/docs/integrations/energy-monitoring/",
      },
    },
    related: {
      title: "Go further",
      intro: "Set it up, or see how energy fits into a wider local smart home:",
      links: [
        {
          label: "Energy Monitoring in Gladys",
          href: "/docs/integrations/energy-monitoring/",
          text: "Track your home's consumption in kWh with a compatible sensor or smart plug.",
        },
        {
          label: "Enedis & Linky (France)",
          href: "/docs/integrations/enedis/",
          text: "Pull your official Linky consumption history into Gladys via Gladys Plus.",
        },
        {
          label: "The AI weekly home report",
          href: "/ai-smart-home/",
          text: "Get a weekly AI summary of your consumption, cost and trends.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "The bigger picture: a private, local smart home built on open standards.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Start saving on your electricity bill",
      text: "Gladys is free, open-source and local-first. Monitor your home's energy, automate the savings, and keep your data at home.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Discover Gladys Plus", href: "/plus/" },
    },
  },

  fr: {
    meta: {
      title: "Suivi de consommation électrique : réduisez votre facture d'électricité",
      description:
        "Suivez la consommation électrique de votre maison en temps réel, au global et appareil par appareil, puis automatisez les économies, en local et en privé avec Gladys Assistant. Compatible Linky, Enedis et Tempo. Gratuit et open source.",
    },
    hero: {
      title: "Réduisez votre facture d'électricité grâce au suivi de consommation",
      subtitle:
        "Voyez exactement où part votre électricité, en temps réel et appareil par appareil, puis laissez l'automatisation faire les économies, le tout en local.",
      intro: [
        "Votre facture d'électricité est surtout une boîte noire : un chiffre par mois, sans savoir ce qui le fait grimper. La première étape pour dépenser moins, c'est simplement de voir où part vraiment votre énergie.",
        "Gladys Assistant transforme votre maison en un tableau de bord énergétique clair et en temps réel, au global et appareil par appareil, et vous permet d'automatiser les économies. Tout tourne en local sur votre propre machine : vos données de consommation restent privées.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Doc suivi de consommation →",
        href: "/docs/integrations/energy-monitoring/",
      },
    },
    problem: {
      title: "Pourquoi votre facture d'électricité est une boîte noire",
      intro:
        "La plupart des foyers n'ont quasiment aucune visibilité sur leur consommation, ce qui rend presque impossible de dépenser moins :",
      points: [
        "Vous recevez un seul chiffre mensuel, sans savoir quels appareils en sont responsables.",
        "Les appareils en veille et « vampires » font grimper la facture 24h/24.",
        "Un appareil ancien ou défaillant peut consommer bien plus que vous ne le pensez, sans aucune alerte.",
        "Sans données en temps réel, impossible de décaler vos usages vers les heures les moins chères.",
      ],
      outro: "On ne peut pas réduire ce qu'on ne mesure pas : la première étape, c'est la visibilité.",
    },
    see: {
      title: "Ce que vous pouvez voir avec Gladys",
      intro: "Gladys vous donne une vision détaillée et en temps réel de votre consommation :",
      cards: [
        {
          icon: "⚡",
          title: "Consommation de toute la maison",
          text: "Suivez la consommation de toute votre maison en kWh, en temps réel et sur l'historique, depuis un Linky (via ZLinky) ou un capteur compatible.",
        },
        {
          icon: "🔌",
          title: "Appareil par appareil",
          text: "Ajoutez des prises connectées avec mesure (Zigbee, Shelly, Tuya…) pour voir exactement ce que consomme chaque appareil.",
        },
        {
          icon: "💶",
          title: "Consommation et coût",
          text: "Transformez les kWh en euros, pour voir le coût réel de vos habitudes, pas juste des chiffres abstraits.",
        },
        {
          icon: "📈",
          title: "Temps réel et historique",
          text: "Des relevés en direct et des graphiques sur les jours, semaines et mois pour repérer tendances et anomalies.",
        },
        {
          icon: "🤖",
          title: "Un rapport hebdomadaire par IA",
          text: "L'IA de Gladys vous envoie chaque semaine un résumé de votre consommation, de son coût, des tendances et des conseils.",
        },
        {
          icon: "🔔",
          title: "Des alertes",
          text: "Créez des scènes qui vous préviennent en cas de pic de consommation ou d'appareil resté allumé.",
        },
      ],
    },
    save: {
      title: "Comment l'automatisation réduit vraiment la facture",
      intro: "La visibilité, c'est l'étape 1. Ensuite, votre maison peut faire les économies pour vous, automatiquement :",
      points: [
        "Supprimer les veilles : éteindre TV, consoles et chargeurs la nuit ou quand vous partez.",
        "Décaler les gros usages (lave-linge, chauffe-eau, recharge de voiture) vers les heures creuses.",
        "Chauffer intelligemment : programmer le chauffage selon la présence et l'heure, plutôt que de chauffer une maison vide.",
        "Être alerté en cas de consommation anormale (un radiateur resté allumé, un congélateur qui dérive) avant que ça ne coûte.",
        "Utiliser les tarifs réels pour lancer les gros appareils les jours les moins chers, comme avec EDF Tempo.",
      ],
      outro: "Une fois configuré, vous n'y pensez plus : les économies se font toutes seules.",
    },
    track: {
      title: "Suivez toute votre maison, en local et en privé",
      paragraphs: [
        "Pour suivre toute votre maison, il faut un appareil qui remonte la consommation en kWh. En France, la meilleure solution est le compteur Linky lu via un Lixee ZLinky (Zigbee, environ 49 €), qui donne des relevés précis chaque minute. L'intégration Suivi de consommation fonctionne aussi avec des prises à mesure et des capteurs d'énergie.",
        "Toujours en France, l'intégration Enedis (via Gladys Plus) récupère en plus l'historique officiel de consommation de votre Linky, et Gladys peut lire les couleurs des jours EDF Tempo : vos automatisations lancent alors les gros appareils les jours les moins chers.",
        "Dans tous les cas, vos données d'énergie restent sur votre propre machine, sur votre réseau local, sans cloud obligatoire et sans revente de données. Le cœur de Gladys est gratuit et open source ; Enedis et l'IA hébergée sont des options de Gladys Plus.",
      ],
      link: {
        label: "Voir l'intégration Suivi de consommation →",
        href: "/docs/integrations/energy-monitoring/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Mettez-le en place, ou voyez comment l'énergie s'intègre dans une maison connectée locale :",
      links: [
        {
          label: "Le suivi de consommation dans Gladys",
          href: "/docs/integrations/energy-monitoring/",
          text: "Suivez la consommation de votre maison en kWh avec un Linky ou un capteur compatible.",
        },
        {
          label: "Enedis & Linky",
          href: "/docs/integrations/enedis/",
          text: "Récupérez l'historique officiel de votre Linky dans Gladys via Gladys Plus.",
        },
        {
          label: "Le rapport hebdomadaire par IA",
          href: "/ai-smart-home/",
          text: "Recevez chaque semaine un résumé IA de votre consommation, de son coût et des tendances.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "La vue d'ensemble : une maison connectée locale et privée bâtie sur des standards ouverts.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Commencez à réduire votre facture d'électricité",
      text: "Gladys est gratuite, open source et locale d'abord. Suivez l'énergie de votre maison, automatisez les économies, et gardez vos données chez vous.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Découvrir Gladys Plus", href: "/plus/" },
    },
  },
};

export const energyFaqEn = [
  {
    question: "How can home automation reduce my electricity bill?",
    answer:
      "In two steps. First, visibility: seeing your consumption in real time and per device shows you where money is going. Then automation: switching off standby devices, shifting heavy loads to off-peak hours, scheduling heating around presence, and alerting you to abnormal use. Gladys Assistant does both, locally.",
  },
  {
    question: "Can I monitor my home's electricity consumption in real time?",
    answer:
      "Yes. Gladys shows your whole-home consumption in kWh in real time, plus history over days, weeks and months. With metering smart plugs you can also see the consumption and cost of each individual appliance.",
  },
  {
    question: "Do I need a special meter to track my energy?",
    answer:
      "You need a device that reports consumption in kWh: a metering smart plug, an energy sensor, or, in France, the Linky meter read through a Lixee ZLinky (Zigbee). The more metering points you add, the more detailed the picture.",
  },
  {
    question: "Does it work with the French Linky meter?",
    answer:
      "Yes. In France you can read the Linky in real time through a Lixee ZLinky (Zigbee, per-minute readings), and pull your official consumption history through the Enedis integration via Gladys Plus. Gladys can also use EDF Tempo day colors in your automations.",
  },
  {
    question: "Is my energy data private?",
    answer:
      "Yes. Gladys runs locally on your own machine, so your consumption data stays on your local network, with no mandatory cloud and no data resale. The Gladys core is free and open-source.",
  },
  {
    question: "Can Gladys help me use off-peak or cheaper tariffs?",
    answer:
      "Yes. You can build automations that shift heavy appliances to off-peak hours, and in France use EDF Tempo day colors to run them on the cheapest days, all decided and executed locally.",
  },
];

export const energyFaqFr = [
  {
    question: "Comment la domotique peut-elle réduire ma facture d'électricité ?",
    answer:
      "En deux temps. D'abord la visibilité : voir sa consommation en temps réel et appareil par appareil montre où part l'argent. Ensuite l'automatisation : couper les veilles, décaler les gros usages vers les heures creuses, programmer le chauffage selon la présence, et alerter en cas de consommation anormale. Gladys Assistant fait les deux, en local.",
  },
  {
    question: "Puis-je suivre ma consommation électrique en temps réel ?",
    answer:
      "Oui. Gladys affiche la consommation de toute votre maison en kWh en temps réel, ainsi que l'historique sur les jours, semaines et mois. Avec des prises à mesure, vous voyez aussi la consommation et le coût de chaque appareil.",
  },
  {
    question: "Faut-il un compteur spécial pour suivre sa consommation ?",
    answer:
      "Il faut un appareil qui remonte la consommation en kWh : une prise connectée à mesure, un capteur d'énergie, ou, en France, le compteur Linky lu via un Lixee ZLinky (Zigbee). Plus vous ajoutez de points de mesure, plus la vision est détaillée.",
  },
  {
    question: "Est-ce compatible avec le compteur Linky ?",
    answer:
      "Oui. En France, vous pouvez lire le Linky en temps réel via un Lixee ZLinky (Zigbee, relevés à la minute), et récupérer l'historique officiel de consommation via l'intégration Enedis (Gladys Plus). Gladys peut aussi utiliser les couleurs des jours EDF Tempo dans vos automatisations.",
  },
  {
    question: "Mes données de consommation sont-elles privées ?",
    answer:
      "Oui. Gladys tourne en local sur votre propre machine : vos données de consommation restent sur votre réseau local, sans cloud obligatoire et sans revente de données. Le cœur de Gladys est gratuit et open source.",
  },
  {
    question: "Gladys peut-elle m'aider à profiter des heures creuses ou de Tempo ?",
    answer:
      "Oui. Vous pouvez créer des automatisations qui décalent les gros appareils vers les heures creuses, et en France utiliser les couleurs des jours EDF Tempo pour les lancer les jours les moins chers, le tout décidé et exécuté en local.",
  },
];

export default energyContent;
