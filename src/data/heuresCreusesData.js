// Content for the "heures creuses" reform page (France).
// The CRE's TURPE 7 network tariff (deliberation 2025-78, amended by
// 2026-33 on February 4, 2026) moves part of the off-peak hours to the
// middle of the day. Phase 1 (November 2025 to mid-2026) concerned about
// 1.7 million customers; phase 2 (December 2026 to October 2027, from
// November 2026 at EDF) concerns about 9.3 million, with summer and winter
// schedules. Sources: cre.fr deliberations, enedis.fr, Selectra (checked
// October 2026). Gladys angle: Lixee ZLinky exposes the current tariff index
// (NTARF) to scenes, and the energy monitoring contract must list the new
// off-peak hours for costs to stay right (docs/integrations/energy-monitoring).
// Primarily a French page; the English version serves English speakers in
// France.

const heuresCreusesContent = {
  en: {
    meta: {
      title: "France's New Off-Peak Hours (Heures Creuses): What Changes",
      description:
        "France is moving part of its heures creuses (off-peak hours) to the middle of the day between 2025 and 2027. The new rules, the timeline, how you're told, and how to adapt your water heater and appliances automatically.",
    },
    screenshotCaption:
      "Your consumption, off-peak periods and costs in Gladys, with scenes that follow your new schedule.",
    hero: {
      title: "France's off-peak hours are changing: what it means for you",
      subtitle:
        "Between 2025 and 2027, millions of French households see part of their heures creuses move from the evening to the middle of the day. Here are the rules, the timeline and how to adapt automatically.",
      intro: [
        "If you have a peak/off-peak (heures pleines / heures creuses) electricity contract in France, your off-peak hours are set by the grid operator. With the TURPE 7 network tariff, the energy regulator (CRE) decided to move part of them to the middle of the day, when solar production is abundant.",
        "You still get 8 off-peak hours a day, but not necessarily at the same times. Appliances you used to start in the evening, and timers you set years ago, may now run at full price.",
      ],
      primaryCta: { label: "Track your consumption with Gladys", href: "/home-energy-monitoring/" },
      secondaryCta: { label: "EDF Tempo colour of the day →", href: "/edf-tempo/" },
    },
    problem: {
      title: "The new rules",
      intro: "According to the CRE's decisions:",
      points: [
        "You keep 8 off-peak hours per day.",
        "At least 5 of them are consecutive, at night, between 11 p.m. and 7 a.m.",
        "At most 3 can be placed in the afternoon, between 11 a.m. and 5 p.m.",
        "The 7–11 a.m. and 5–11 p.m. slots are no longer guaranteed to be off-peak.",
        "In the second phase, the schedule can differ between summer and winter, with afternoon off-peak hours mostly in summer.",
      ],
      outro:
        "Your supplier tells you about a month before your hours change, and the new hours appear on your bill and in your customer account.",
    },
    comparison: {
      title: "Timeline",
      intro: "The change is rolled out in phases:",
      cols: { feature: "", gladys: "Who", other: "When" },
      rows: [
        { feature: "Phase 1", gladys: "About 1.7 million customers, same schedule all year", other: "From November 2025 to mid-2026" },
        { feature: "Phase 2", gladys: "About 9.3 million customers, summer and winter schedules", other: "From December 2026 to October 2027 (from November 2026 at EDF)" },
        { feature: "Businesses", gladys: "Professional customers", other: "Second half of 2027" },
      ],
      outro:
        "Not everyone is affected: it depends on where your current off-peak hours are. Check the letter from your supplier and your customer account.",
    },
    features: {
      title: "How to adapt without thinking about it",
      intro: "A smart home turns a new schedule into a settings change, not a new habit:",
      cards: [
        {
          icon: "🚿",
          title: "Water heater",
          text: "A water heater wired to the meter's off-peak contact follows the new hours by itself. On a smart relay, a Gladys scene follows your new schedule.",
        },
        {
          icon: "🧺",
          title: "Washing machine and dishwasher",
          text: "Start them with a smart plug at the right time, including the new midday off-peak slot.",
        },
        {
          icon: "🚗",
          title: "Electric vehicle",
          text: "Schedule charging in your off-peak hours, at night or at midday in summer.",
        },
        {
          icon: "📟",
          title: "Follow the Linky live",
          text: "With a Lixee ZLinky, Gladys reads the current tariff index from the Linky, so a scene can react the moment off-peak starts.",
        },
        {
          icon: "💶",
          title: "Costs that stay right",
          text: "Update your off-peak hours in Gladys' energy settings, and your daily costs keep matching your bill.",
        },
        {
          icon: "📊",
          title: "See the effect",
          text: "Compare your consumption before and after the change, appliance by appliance.",
        },
      ],
    },
    how: {
      title: "What to do when your hours change",
      intro: "Five minutes, once:",
      points: [
        "Check your new off-peak hours on your bill or in your supplier's customer account.",
        "Update the timers of appliances that aren't automated (old programmers, wall timers).",
        "In Gladys, update your contract's off-peak periods in the energy monitoring settings.",
        "Adjust the scenes that start your appliances, or base them on the Linky's tariff index with a ZLinky.",
        "Use the midday slot in summer for the dishwasher, the washing machine or the EV.",
      ],
      outro:
        "Gladys is free and open source, and runs on your own hardware.",
    },
    solution: {
      title: "Let your home follow the grid",
      paragraphs: [
        "Off-peak hours, Tempo days, solar production: electricity prices increasingly depend on when you consume. Doing it by hand doesn't scale; a local automation platform does.",
        "Gladys Assistant reads your Linky, controls your plugs, relays and water heater, and runs scenes locally. The Enedis integration, through Gladys Plus, adds your official consumption history.",
      ],
      link: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    related: {
      title: "Go further",
      intro: "More energy tools and guides:",
      links: [
        { label: "EDF Tempo colour of the day", href: "/edf-tempo/", text: "Today's and tomorrow's Tempo colour, live." },
        { label: "Reduce your electricity bill", href: "/home-energy-monitoring/", text: "Track your consumption and act on the data." },
        { label: "All guides", href: "/guides/", text: "Every guide, tool and comparison in one place." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Adapt to the new off-peak hours automatically",
      text: "Gladys is free, open source and installs with a single Docker command. Read your Linky and schedule your appliances around your new hours.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Energy monitoring", href: "/home-energy-monitoring/" },
    },
  },

  fr: {
    meta: {
      title: "Heures creuses 2026 : ce qui change et comment s'adapter",
      description:
        "Une partie des heures creuses passe en milieu de journée entre 2025 et 2027. Les nouvelles règles, le calendrier, comment vous êtes prévenu, et comment adapter chauffe-eau et électroménager automatiquement.",
    },
    screenshotCaption:
      "Votre consommation, vos heures creuses et vos coûts dans Gladys, avec des scènes qui suivent vos nouveaux horaires.",
    hero: {
      title: "Heures creuses : ce qui change, et comment s'adapter",
      subtitle:
        "Entre 2025 et 2027, des millions de foyers voient une partie de leurs heures creuses passer du soir au milieu de la journée. Les règles, le calendrier, et comment s'adapter automatiquement.",
      intro: [
        "Si vous avez un contrat heures pleines / heures creuses, vos heures creuses sont fixées par le gestionnaire du réseau. Avec le tarif de réseau TURPE 7, la Commission de régulation de l'énergie (CRE) a décidé d'en déplacer une partie en milieu de journée, quand la production solaire est abondante.",
        "Vous gardez 8 heures creuses par jour, mais pas forcément aux mêmes horaires. Les appareils que vous lanciez le soir, et les programmateurs réglés il y a des années, peuvent désormais tourner au prix fort.",
      ],
      primaryCta: { label: "Suivre sa consommation avec Gladys", href: "/home-energy-monitoring/" },
      secondaryCta: { label: "Tempo EDF : couleur du jour →", href: "/edf-tempo/" },
    },
    problem: {
      title: "Les nouvelles règles",
      intro: "D'après les délibérations de la CRE :",
      points: [
        "Vous gardez 8 heures creuses par jour.",
        "Au moins 5 d'entre elles sont consécutives, la nuit, entre 23 h et 7 h.",
        "Au plus 3 peuvent être placées l'après-midi, entre 11 h et 17 h.",
        "Les plages 7 h–11 h et 17 h–23 h ne sont plus garanties en heures creuses.",
        "Dans la seconde phase, les horaires peuvent différer entre l'été et l'hiver, avec des heures creuses d'après-midi surtout l'été.",
      ],
      outro:
        "Votre fournisseur vous prévient environ un mois avant le changement, et vos nouveaux horaires apparaissent sur votre facture et dans votre espace client.",
    },
    comparison: {
      title: "Le calendrier",
      intro: "Le changement se fait par étapes :",
      cols: { feature: "", gladys: "Qui", other: "Quand" },
      rows: [
        { feature: "Phase 1", gladys: "Environ 1,7 million de clients, mêmes horaires toute l'année", other: "De novembre 2025 à mi-2026" },
        { feature: "Phase 2", gladys: "Environ 9,3 millions de clients, horaires été et hiver", other: "De décembre 2026 à octobre 2027 (dès novembre 2026 chez EDF)" },
        { feature: "Professionnels", gladys: "Clients professionnels", other: "Second semestre 2027" },
      ],
      outro:
        "Tout le monde n'est pas concerné : cela dépend de la position de vos heures creuses actuelles. Vérifiez le courrier de votre fournisseur et votre espace client.",
    },
    features: {
      title: "Comment s'adapter sans y penser",
      intro: "Avec une maison connectée, de nouveaux horaires deviennent un réglage, pas une nouvelle habitude :",
      cards: [
        {
          icon: "🚿",
          title: "Chauffe-eau",
          text: "Un chauffe-eau branché sur le contact heures creuses du compteur suit les nouveaux horaires tout seul. Sur un relais connecté, une scène Gladys suit vos nouveaux horaires.",
        },
        {
          icon: "🧺",
          title: "Lave-linge et lave-vaisselle",
          text: "Lancez-les avec une prise connectée au bon moment, y compris sur le nouveau créneau de midi.",
        },
        {
          icon: "🚗",
          title: "Voiture électrique",
          text: "Programmez la recharge sur vos heures creuses, la nuit ou à midi l'été.",
        },
        {
          icon: "📟",
          title: "Suivre le Linky en direct",
          text: "Avec un Lixee ZLinky, Gladys lit l'index tarifaire en cours du Linky : une scène peut réagir dès le début des heures creuses.",
        },
        {
          icon: "💶",
          title: "Des coûts toujours justes",
          text: "Mettez à jour vos heures creuses dans les réglages énergie de Gladys, et vos coûts quotidiens continuent de coller à votre facture.",
        },
        {
          icon: "📊",
          title: "Voir l'effet",
          text: "Comparez votre consommation avant et après le changement, appareil par appareil.",
        },
      ],
    },
    how: {
      title: "Que faire quand vos horaires changent",
      intro: "Cinq minutes, une fois :",
      points: [
        "Vérifiez vos nouvelles heures creuses sur votre facture ou dans l'espace client de votre fournisseur.",
        "Réglez les programmateurs des appareils non automatisés (anciens programmateurs, minuteries murales).",
        "Dans Gladys, mettez à jour les plages d'heures creuses de votre contrat dans les réglages du suivi d'énergie.",
        "Ajustez les scènes qui lancent vos appareils, ou basez-les sur l'index tarifaire du Linky avec un ZLinky.",
        "Profitez du créneau de midi l'été pour le lave-vaisselle, le lave-linge ou la voiture.",
      ],
      outro: "Gladys est gratuite, open source, et tourne sur votre propre matériel.",
    },
    solution: {
      title: "Laissez votre maison suivre le réseau",
      paragraphs: [
        "Heures creuses, jours Tempo, production solaire : le prix de l'électricité dépend de plus en plus du moment où l'on consomme. À la main, ça ne tient pas ; avec une domotique locale, si.",
        "Gladys Assistant lit votre Linky, pilote vos prises, relais et chauffe-eau, et exécute les scènes en local. L'intégration Enedis, via Gladys Plus, ajoute l'historique officiel de votre consommation.",
      ],
      link: { label: "Réduire sa facture d'électricité →", href: "/home-energy-monitoring/" },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres outils et guides sur l'énergie :",
      links: [
        { label: "Tempo EDF : couleur du jour", href: "/edf-tempo/", text: "La couleur Tempo du jour et de demain, en direct." },
        { label: "Réduire sa facture d'électricité", href: "/home-energy-monitoring/", text: "Suivez votre consommation et agissez sur les données." },
        { label: "Tous les guides", href: "/guides/", text: "Tous les guides, outils et comparatifs au même endroit." },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Adaptez-vous aux nouvelles heures creuses automatiquement",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Lisez votre Linky et programmez vos appareils selon vos nouveaux horaires.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Suivi d'énergie", href: "/home-energy-monitoring/" },
    },
  },
};

export const heuresCreusesFaqEn = [
  {
    question: "Why are off-peak hours changing in France?",
    answer:
      "Electricity is now abundant in the middle of the day thanks to solar production, while evening demand stays high. The energy regulator (CRE) therefore decided, in the TURPE 7 network tariff, to move part of the off-peak hours to between 11 a.m. and 5 p.m.",
  },
  {
    question: "Do I still get 8 off-peak hours?",
    answer:
      "Yes. You keep 8 off-peak hours per day, with at least 5 consecutive night hours between 11 p.m. and 7 a.m. and at most 3 hours between 11 a.m. and 5 p.m.",
  },
  {
    question: "How do I know if my off-peak hours change?",
    answer:
      "Your supplier informs you about a month before the change, and the new hours appear on your bill and in your customer account. The rollout runs from November 2025 to 2027, in phases.",
  },
  {
    question: "Does my water heater follow the new hours automatically?",
    answer:
      "If it's wired to the meter's off-peak contact, yes, the meter switches it at the new times. If it's driven by a timer or a smart relay, you need to update the schedule, or let a Gladys scene follow the Linky's tariff index through a ZLinky.",
  },
];

export const heuresCreusesFaqFr = [
  {
    question: "Pourquoi les heures creuses changent-elles ?",
    answer:
      "L'électricité est désormais abondante en milieu de journée grâce au solaire, alors que la demande du soir reste forte. La Commission de régulation de l'énergie a donc décidé, dans le tarif de réseau TURPE 7, de déplacer une partie des heures creuses entre 11 h et 17 h.",
  },
  {
    question: "Est-ce que je garde 8 heures creuses ?",
    answer:
      "Oui. Vous gardez 8 heures creuses par jour, dont au moins 5 consécutives la nuit entre 23 h et 7 h, et au plus 3 entre 11 h et 17 h.",
  },
  {
    question: "Comment savoir si mes heures creuses changent ?",
    answer:
      "Votre fournisseur vous prévient environ un mois avant le changement, et les nouveaux horaires apparaissent sur votre facture et dans votre espace client. Le déploiement se fait par étapes, de novembre 2025 à 2027.",
  },
  {
    question: "Mon chauffe-eau suit-il les nouveaux horaires tout seul ?",
    answer:
      "S'il est branché sur le contact heures creuses du compteur, oui : le compteur le commute aux nouveaux horaires. S'il est piloté par un programmateur ou un relais connecté, il faut mettre à jour les horaires, ou laisser une scène Gladys suivre l'index tarifaire du Linky via un ZLinky.",
  },
  {
    question: "L'option Tempo est-elle concernée ?",
    answer:
      "Les heures creuses de l'option Tempo (22 h–6 h) ne seraient pas concernées par cette réforme, d'après les informations publiées par les comparateurs. Vérifiez auprès de votre fournisseur ; la couleur Tempo du jour, elle, est toujours disponible sur notre page Tempo.",
  },
];

export default heuresCreusesContent;
