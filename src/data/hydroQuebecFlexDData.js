// Content for the "Hydro-Québec Rate Flex D" landing page.
// The Quebec equivalent of our EDF Tempo page: a dynamic winter rate with a
// limited number of expensive peak events announced the day before, which is
// exactly what home automation is good at. Search Console shows Canadian
// queries like "hydro quebec flex d", "rate flex d" and "hydro quebec home
// assistant", and Gladys already has a community Hydro-Québec integration.
// Figures come from Hydro-Québec's own pages (rates in effect April 1, 2026);
// keep them in sync when the rates change on April 1 each year.

const hydroQuebecFlexDContent = {
  en: {
    meta: {
      title: "Hydro-Québec Rate Flex D: Automate Peak Events",
      description:
        "How Hydro-Québec's Rate Flex D works (peak events, hours, prices) and how to automate it at home with Gladys Assistant: pre-heat before a peak, cut consumption during it, and track your savings. Free and local.",
    },
    screenshotCaption:
      "Your Hydro-Québec consumption, peak events and savings next to the rest of your home, in Gladys.",
    hero: {
      title: "Hydro-Québec Rate Flex D: automate your peak events",
      subtitle:
        "Rate Flex D rewards you for using less electricity during a few winter peaks. Gladys Assistant knows when they're coming and adjusts your home for you.",
      intro: [
        "With Rate Flex D, electricity is cheaper than the base rate about 95% of the time, and much more expensive during a limited number of peak demand events in winter. Hydro-Québec says customers can save up to 20% on their bill, as long as they reduce their consumption during those peaks.",
        "Reducing consumption at 6 a.m. on a cold weekday is exactly the kind of thing people forget. Gladys Assistant, a free and open-source smart home platform, connects to your Hydro-Québec account, knows when a peak or a pre-heat period is in progress, and runs the scenes you choose: pre-heat, lower the thermostats, delay the water heater, and notify you.",
      ],
      primaryCta: {
        label: "The Hydro-Québec integration",
        href: "/docs/integrations/external/hydro-quebec/",
      },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "How Rate Flex D works",
      intro: "The rules, as published by Hydro-Québec:",
      points: [
        "The winter period runs from December 1 to March 31. There are no peak events the rest of the year.",
        "Outside peak events, energy is billed in two tiers at prices lower than Rate D.",
        "Peak demand events can happen any day of the week, from 6 to 10 a.m. or from 4 to 8 p.m.",
        "There are at most 30 events per winter, for a maximum of 120 hours in total.",
        "During an event, the price rises to more than 45¢ per kWh (46.46¢ with the rates in effect on April 1, 2026), several times the base rate.",
        "You're notified the day before an event, by email or in the Hydro-Québec or Hilo app.",
        "During your first winter, if your bill ends up higher than it would have been at the base rate, Hydro-Québec reimburses the difference.",
      ],
      outro:
        "In other words: the whole game is to consume as little as possible during those few hours, without being cold. That's what automation is for.",
    },
    comparison: {
      title: "Rate Flex D vs Rate D",
      intro: "The two residential rates side by side, in winter:",
      cols: {
        feature: "",
        gladys: "Rate Flex D",
        other: "Rate D (base rate)",
      },
      rows: [
        {
          feature: "Price outside peak events",
          gladys: "Lower than Rate D",
          other: "Standard two-tier price",
        },
        {
          feature: "Price during peak events",
          gladys: "More than 45¢/kWh",
          other: "No peak events",
        },
        {
          feature: "When peaks can happen",
          gladys: "Dec. 1 to Mar. 31, 6–10 a.m. or 4–8 p.m.",
          other: "Not applicable",
        },
        {
          feature: "How many",
          gladys: "Up to 30 events, 120 hours per winter",
          other: "Not applicable",
        },
        {
          feature: "Notice",
          gladys: "The day before",
          other: "Not applicable",
        },
        {
          feature: "Risk",
          gladys: "First winter protected: refund if Flex D costs more",
          other: "None, but no savings either",
        },
      ],
      outro:
        "Flex D pays off when you can shift your consumption out of peak hours. The Winter Credit option, which rewarded reductions without a price increase, is no longer open to new customers since March 31, 2026; contracts already enrolled keep it.",
    },
    features: {
      title: "What Gladys does with your Hydro-Québec account",
      intro:
        "The Hydro-Québec integration creates one device per contract on your account, with:",
      cards: [
        {
          icon: "⚠️",
          title: "Peak and pre-heat status",
          text: "Whether a critical peak is in progress, and whether you're in the pre-heat window before it, ready to trigger your scenes.",
        },
        {
          icon: "📊",
          title: "Daily consumption and cost",
          text: "Your daily consumption in kWh and the average daily cost of the current billing period.",
        },
        {
          icon: "💰",
          title: "Savings vs the base rate",
          text: "The critical hours called so far this winter, and what Flex D saved (or cost) you compared to Rate D.",
        },
        {
          icon: "🌡️",
          title: "Outdoor temperature",
          text: "The average outdoor temperature published by Hydro-Québec, to put your consumption in context.",
        },
        {
          icon: "🔌",
          title: "Power outage alert",
          text: "Whether an outage is in progress at your address, so a scene can warn you.",
        },
        {
          icon: "🏡",
          title: "Several contracts",
          text: "A primary residence, a rental and a cottage on the same account each get their own device.",
        },
      ],
    },
    how: {
      title: "Automations that make Flex D pay off",
      intro: "A few scenes that are easy to build in Gladys:",
      points: [
        "Pre-heat: when the pre-heat period starts, raise the thermostats by a degree or two so the house stores heat before the peak.",
        "During the peak: lower the thermostats, then restore them when the event ends.",
        "Water heater and appliances: cut the water heater with a smart relay and hold the dryer or the EV charger until the peak is over.",
        "Heads-up: get a notification on your phone the evening before and when the peak starts.",
        "End of the month: check what Flex D saved you compared to the base rate, directly on your dashboard.",
      ],
      outro:
        "Zigbee thermostats, like the Sinopé models common in Quebec, pair directly with Gladys through Zigbee2MQTT and are controlled locally.",
    },
    solution: {
      title: "Local, private, and with the devices you choose",
      paragraphs: [
        "Gladys runs on your own machine, a mini-PC or a Raspberry Pi. Your automations run locally, keep working if the internet drops, and work with the thermostats, relays and appliances you choose, from any brand.",
        "The Hydro-Québec integration is a free, open-source community integration, installable in one click. It isn't affiliated with or supported by Hydro-Québec. Its peak-event figures are recent: if you're on Flex D, your feedback on the forum is very welcome.",
      ],
      link: {
        label: "Set up the Hydro-Québec integration →",
        href: "/docs/integrations/external/hydro-quebec/",
      },
    },
    related: {
      title: "Go further",
      intro: "Lowering your electricity bill is a whole project:",
      links: [
        {
          label: "Reduce your electricity bill",
          href: "/home-energy-monitoring/",
          text: "Track your consumption and act on the data, locally and privately.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "Thermostats, relays, plugs and appliances you can control from Gladys.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "The Zigbee coordinator to pair your Zigbee thermostats locally.",
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
      title: "Make Rate Flex D work for you",
      text: "Gladys is free, open-source and runs on your own hardware. Connect your Hydro-Québec account and let your home handle the peaks.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Hydro-Québec integration",
        href: "/docs/integrations/external/hydro-quebec/",
      },
    },
  },

  fr: {
    meta: {
      title: "Tarif Flex D d'Hydro-Québec : automatiser les pointes",
      description:
        "Comment fonctionne le tarif Flex D d'Hydro-Québec (événements de pointe, plages horaires, prix) et comment l'automatiser chez vous avec Gladys Assistant : préchauffer avant une pointe, réduire la consommation pendant, suivre vos économies. Gratuit et local.",
    },
    screenshotCaption:
      "Votre consommation Hydro-Québec, vos événements de pointe et vos économies à côté du reste de la maison, dans Gladys.",
    hero: {
      title: "Tarif Flex D d'Hydro-Québec : automatisez vos pointes",
      subtitle:
        "Le tarif Flex D vous récompense quand vous consommez moins pendant quelques pointes hivernales. Gladys Assistant sait quand elles arrivent et adapte la maison pour vous.",
      intro: [
        "Avec le tarif Flex D, l'électricité coûte moins cher que le tarif de base environ 95 % du temps, et beaucoup plus cher pendant un nombre limité d'événements de pointe en hiver. Selon Hydro-Québec, vous pouvez économiser jusqu'à 20 % sur votre facture, à condition de réduire votre consommation pendant ces pointes.",
        "Réduire sa consommation à 6 h un matin de semaine glacial, c'est exactement le genre de chose qu'on oublie. Gladys Assistant, une plateforme domotique gratuite et open source, se connecte à votre compte Hydro-Québec, sait quand une pointe ou une période de préchauffage est en cours, et lance les scènes que vous choisissez : préchauffer, baisser les thermostats, décaler le chauffe-eau et vous prévenir.",
      ],
      primaryCta: {
        label: "L'intégration Hydro-Québec",
        href: "/docs/integrations/external/hydro-quebec/",
      },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Comment fonctionne le tarif Flex D",
      intro: "Les règles, telles que publiées par Hydro-Québec :",
      points: [
        "La période d'hiver va du 1er décembre au 31 mars. Il n'y a pas d'événement de pointe le reste de l'année.",
        "En dehors des événements de pointe, l'énergie est facturée en deux paliers, à des prix plus bas que le tarif D.",
        "Les événements de pointe peuvent avoir lieu n'importe quel jour de la semaine, de 6 h à 10 h ou de 16 h à 20 h.",
        "Il y a au plus 30 événements par hiver, pour un maximum de 120 heures au total.",
        "Pendant un événement, le prix monte à plus de 45 ¢ le kWh (46,46 ¢ avec les tarifs en vigueur le 1er avril 2026), plusieurs fois le tarif de base.",
        "Vous êtes prévenu la veille d'un événement, par courriel ou dans l'application Hydro-Québec ou Hilo.",
        "Pendant votre premier hiver, si votre facture dépasse ce qu'elle aurait été au tarif de base, Hydro-Québec vous rembourse la différence.",
      ],
      outro:
        "Autrement dit : tout l'enjeu est de consommer le moins possible pendant ces quelques heures, sans avoir froid. C'est précisément à ça que sert l'automatisation.",
    },
    comparison: {
      title: "Tarif Flex D vs tarif D",
      intro: "Les deux tarifs résidentiels côte à côte, en hiver :",
      cols: {
        feature: "",
        gladys: "Tarif Flex D",
        other: "Tarif D (tarif de base)",
      },
      rows: [
        {
          feature: "Prix hors événements de pointe",
          gladys: "Plus bas que le tarif D",
          other: "Prix standard à deux paliers",
        },
        {
          feature: "Prix pendant les événements de pointe",
          gladys: "Plus de 45 ¢/kWh",
          other: "Pas d'événements de pointe",
        },
        {
          feature: "Quand ont lieu les pointes",
          gladys: "Du 1er déc. au 31 mars, 6 h–10 h ou 16 h–20 h",
          other: "Sans objet",
        },
        {
          feature: "Combien",
          gladys: "Jusqu'à 30 événements, 120 heures par hiver",
          other: "Sans objet",
        },
        {
          feature: "Préavis",
          gladys: "La veille",
          other: "Sans objet",
        },
        {
          feature: "Risque",
          gladys: "Premier hiver protégé : remboursement si le Flex D coûte plus cher",
          other: "Aucun, mais aucune économie non plus",
        },
      ],
      outro:
        "Le Flex D est rentable quand vous pouvez déplacer votre consommation hors des heures de pointe. L'option de crédit hivernal, qui récompensait les réductions sans hausse de prix, n'est plus offerte aux nouveaux clients depuis le 31 mars 2026 ; les abonnements déjà inscrits la conservent.",
    },
    features: {
      title: "Ce que Gladys fait avec votre compte Hydro-Québec",
      intro:
        "L'intégration Hydro-Québec crée un appareil par abonnement de votre compte, avec :",
      cards: [
        {
          icon: "⚠️",
          title: "État de pointe et de préchauffage",
          text: "Si une pointe critique est en cours, et si vous êtes dans la fenêtre de préchauffage qui la précède, prêt à déclencher vos scènes.",
        },
        {
          icon: "📊",
          title: "Consommation et coût quotidiens",
          text: "Votre consommation quotidienne en kWh et le coût moyen par jour de la période de facturation en cours.",
        },
        {
          icon: "💰",
          title: "Économies vs le tarif de base",
          text: "Les heures critiques appelées depuis le début de l'hiver, et ce que le Flex D vous a fait économiser (ou coûté) par rapport au tarif D.",
        },
        {
          icon: "🌡️",
          title: "Température extérieure",
          text: "La température extérieure moyenne publiée par Hydro-Québec, pour mettre votre consommation en perspective.",
        },
        {
          icon: "🔌",
          title: "Alerte de panne",
          text: "Si une panne est en cours à votre adresse, pour qu'une scène vous prévienne.",
        },
        {
          icon: "🏡",
          title: "Plusieurs abonnements",
          text: "Résidence principale, logement locatif et chalet sur le même compte ont chacun leur appareil.",
        },
      ],
    },
    how: {
      title: "Des automatisations qui rentabilisent le Flex D",
      intro: "Quelques scènes faciles à créer dans Gladys :",
      points: [
        "Préchauffage : quand la période de préchauffage commence, montez les thermostats d'un ou deux degrés pour que la maison stocke de la chaleur avant la pointe.",
        "Pendant la pointe : baissez les thermostats, puis rétablissez-les à la fin de l'événement.",
        "Chauffe-eau et électroménager : coupez le chauffe-eau avec un relais connecté et retardez la sécheuse ou la borne de recharge jusqu'à la fin de la pointe.",
        "Alerte : recevez une notification la veille au soir et au début de la pointe.",
        "Fin du mois : regardez ce que le Flex D vous a fait économiser par rapport au tarif de base, directement sur votre tableau de bord.",
      ],
      outro:
        "Les thermostats Zigbee, comme les modèles Sinopé très répandus au Québec, s'associent directement à Gladys via Zigbee2MQTT et se pilotent en local.",
    },
    solution: {
      title: "Local, privé, avec les appareils de votre choix",
      paragraphs: [
        "Gladys tourne sur votre propre machine, un mini-PC ou un Raspberry Pi. Vos automatisations tournent en local, continuent de fonctionner si internet tombe, et marchent avec les thermostats, relais et appareils que vous choisissez, de n'importe quelle marque.",
        "L'intégration Hydro-Québec est une intégration communautaire gratuite et open source, installable en un clic. Elle n'est ni affiliée à Hydro-Québec ni prise en charge par elle. Ses données d'événements de pointe sont récentes : si vous êtes au Flex D, vos retours sur le forum sont les bienvenus.",
      ],
      link: {
        label: "Configurer l'intégration Hydro-Québec →",
        href: "/docs/integrations/external/hydro-quebec/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Réduire sa facture d'électricité, c'est tout un projet :",
      links: [
        {
          label: "Réduire sa facture d'électricité",
          href: "/home-energy-monitoring/",
          text: "Suivez votre consommation et agissez sur les données, en local et en toute confidentialité.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Thermostats, relais, prises et électroménager que vous pouvez piloter depuis Gladys.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Le coordinateur Zigbee pour associer vos thermostats Zigbee en local.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord compte, et comment bâtir une maison qui tourne sans cloud.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Faites travailler le tarif Flex D pour vous",
      text: "Gladys est gratuite, open source et tourne sur votre propre matériel. Connectez votre compte Hydro-Québec et laissez votre maison gérer les pointes.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Intégration Hydro-Québec",
        href: "/docs/integrations/external/hydro-quebec/",
      },
    },
  },
};

export const hydroQuebecFlexDFaqEn = [
  {
    question: "What is Hydro-Québec's Rate Flex D?",
    answer:
      "Rate Flex D is a dynamic residential rate. In winter (December 1 to March 31), electricity is cheaper than the base Rate D outside peak demand events, and much more expensive during them (more than 45¢/kWh). There are at most 30 events per winter, for a maximum of 120 hours, between 6 and 10 a.m. or 4 and 8 p.m.",
  },
  {
    question: "How do I know when a Flex D peak event is coming?",
    answer:
      "Hydro-Québec notifies you the day before, by email or in the Hydro-Québec or Hilo app. With the Gladys Hydro-Québec integration, your home also knows when a peak or the pre-heat period before it is in progress, and can run your scenes automatically.",
  },
  {
    question: "Is Rate Flex D worth it?",
    answer:
      "It pays off if you can reduce your consumption during the peak hours, for example by pre-heating before the event and lowering the heating during it. Hydro-Québec says customers can save up to 20%, and during your first winter it reimburses the difference if Flex D ends up costing more than the base rate.",
  },
  {
    question: "Can I still sign up for the Winter Credit option?",
    answer:
      "No. The Winter Credit option is no longer available to new customers since March 31, 2026. Contracts that were already enrolled on that date keep it under an acquired right. Rate Flex D remains open to eligible Rate D customers.",
  },
  {
    question: "Does Gladys work with Hydro-Québec?",
    answer:
      "Yes, through the free Hydro-Québec community integration. It reports daily consumption, average daily cost, outdoor temperature, account balance and outages for each contract, plus the peak, pre-heat and savings data for Flex D and Winter Credit contracts. It is not affiliated with Hydro-Québec.",
  },
  {
    question: "Is there a Home Assistant-like tool for Hydro-Québec?",
    answer:
      "Yes. Gladys Assistant is a free, open-source smart home platform that runs locally on a mini-PC or a Raspberry Pi, like Home Assistant, but designed to be simpler. It connects to your Hydro-Québec account and to your thermostats, relays and appliances to automate Flex D peaks.",
  },
];

export const hydroQuebecFlexDFaqFr = [
  {
    question: "Qu'est-ce que le tarif Flex D d'Hydro-Québec ?",
    answer:
      "Le tarif Flex D est un tarif résidentiel dynamique. En hiver (du 1er décembre au 31 mars), l'électricité coûte moins cher que le tarif D de base en dehors des événements de pointe, et beaucoup plus cher pendant ceux-ci (plus de 45 ¢/kWh). Il y a au plus 30 événements par hiver, pour un maximum de 120 heures, de 6 h à 10 h ou de 16 h à 20 h.",
  },
  {
    question: "Comment savoir qu'un événement de pointe Flex D arrive ?",
    answer:
      "Hydro-Québec vous prévient la veille, par courriel ou dans l'application Hydro-Québec ou Hilo. Avec l'intégration Hydro-Québec de Gladys, votre maison sait aussi quand une pointe ou la période de préchauffage qui la précède est en cours, et peut lancer vos scènes automatiquement.",
  },
  {
    question: "Le tarif Flex D est-il avantageux ?",
    answer:
      "Il est rentable si vous pouvez réduire votre consommation pendant les heures de pointe, par exemple en préchauffant avant l'événement et en baissant le chauffage pendant. Selon Hydro-Québec, les clients peuvent économiser jusqu'à 20 %, et pendant votre premier hiver, la différence vous est remboursée si le Flex D coûte plus cher que le tarif de base.",
  },
  {
    question: "Puis-je encore adhérer à l'option de crédit hivernal ?",
    answer:
      "Non. L'option de crédit hivernal n'est plus offerte aux nouveaux clients depuis le 31 mars 2026. Les abonnements déjà inscrits à cette date la conservent en vertu d'un droit acquis. Le tarif Flex D reste ouvert aux clients admissibles au tarif D.",
  },
  {
    question: "Gladys fonctionne-t-elle avec Hydro-Québec ?",
    answer:
      "Oui, grâce à l'intégration communautaire gratuite Hydro-Québec. Elle remonte pour chaque abonnement la consommation quotidienne, le coût moyen par jour, la température extérieure, le solde du compte et les pannes, ainsi que les données de pointe, de préchauffage et d'économies pour les abonnements au Flex D et au crédit hivernal. Elle n'est pas affiliée à Hydro-Québec.",
  },
  {
    question: "Existe-t-il un outil comme Home Assistant pour Hydro-Québec ?",
    answer:
      "Oui. Gladys Assistant est une plateforme domotique gratuite et open source qui tourne en local sur un mini-PC ou un Raspberry Pi, comme Home Assistant, mais pensée pour être plus simple. Elle se connecte à votre compte Hydro-Québec et à vos thermostats, relais et appareils pour automatiser les pointes du Flex D.",
  },
];

export default hydroQuebecFlexDContent;
