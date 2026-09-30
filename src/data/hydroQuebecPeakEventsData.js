// Content for the live "Hydro-Québec peak events today" page.
// The Quebec equivalent of our EDF Tempo page: a live widget (today's and
// tomorrow's residential peak events, fetched client-side from Hydro-Québec's
// open data API, which allows CORS) with evergreen content for SEO. Targets
// the recurring winter queries "événement de pointe hydro-québec aujourd'hui",
// "hydro quebec peak event today", "pointe hydro-québec demain"...
// The dataset is published under CC BY-NC 4.0: keep the attribution visible
// next to the widget. The "last winter" figures below were counted from the
// same dataset (residential offers TPC-DPC = Flex D, CPC-D = Winter Credit,
// Dec 1, 2025 to Mar 31, 2026); update them after each winter.

export const HQ_PEAK_EVENTS_API_URL =
  "https://donnees.hydroquebec.com/api/explore/v2.1/catalog/datasets/evenements-pointe/records";

export const HQ_OPEN_DATA_URL =
  "https://donnees.hydroquebec.com/explore/dataset/evenements-pointe/";

const hydroQuebecPeakEventsContent = {
  en: {
    meta: {
      title: "Hydro-Québec Peak Events Today (Live): Flex D & Winter Credit",
      description:
        "Is there a Hydro-Québec peak event today or tomorrow? Live Rate Flex D and Winter Credit peak events from Hydro-Québec's open data, this winter's history, the rules, and how to automate peaks at home.",
    },
    hero: {
      title: "Is there a Hydro-Québec peak event today?",
      subtitle:
        "Today's and tomorrow's residential peak events, live from Hydro-Québec's open data, for Rate Flex D and the Winter Credit option.",
    },
    widget: {
      todayLabel: "Today",
      tomorrowLabel: "Tomorrow",
      live: "Live",
      loading: "Loading…",
      error:
        "Hydro-Québec's peak event data is momentarily unavailable. Please try again later.",
      noEvent: "No peak event",
      noEventHint: "Nothing announced so far",
      tomorrowNoEventHint: "Events are announced the day before",
      offSeason: "No peak event",
      offSeasonHint: "Off season: events resume December 1",
      event: "Peak event",
      events: "Peak events",
      inProgress: "In progress",
      done: "Over",
      offers: { "TPC-DPC": "Flex D", "CPC-D": "Winter Credit" },
      and: "and",
      seasonTitle: (label) => `Winter ${label}`,
      seasonCurrent: "This winter so far",
      seasonLast: "Last winter",
      flexDStat: (n, h) =>
        `${n} Flex D event${n === 1 ? "" : "s"}, ${h} h out of 120 h max`,
      creditStat: (n) => `${n} Winter Credit event${n === 1 ? "" : "s"}`,
      tableDate: "Date",
      tableTime: "Time",
      tableOffers: "Offers",
      emptySeason: "No peak event has been called yet this winter.",
      source:
        "Source: Hydro-Québec open data (CC BY-NC 4.0), residential offers. Raw data provided without warranty: the official notice Hydro-Québec sends you by email takes precedence.",
      sourceLink: "See the dataset",
    },
    whatIs: {
      title: "What is a Hydro-Québec peak event?",
      paragraphs: [
        "On the coldest winter days, electricity demand in Quebec peaks in the morning, when everyone turns up the heat and gets ready, and at the end of the afternoon. To relieve the grid, Hydro-Québec calls peak demand events and asks customers enrolled in its dynamic offers to use less electricity during those few hours.",
        "For residential customers, two offers are involved: Rate Flex D, where electricity is cheaper most of the time but much more expensive during events, and the Winter Credit option, which pays a credit for the electricity you don't use during events. The events are generally the same for both.",
      ],
    },
    rules: {
      title: "The rules for residential peak events",
      intro: "As published by Hydro-Québec:",
      points: [
        "Peak events only happen during the winter period, from December 1 to March 31.",
        "They last four hours: from 6 to 10 a.m. or from 4 to 8 p.m. Some days have both.",
        "They can fall on any day of the week, weekends included.",
        "Customers enrolled in Rate Flex D or the Winter Credit option are notified the day before, by email or in the Hydro-Québec or Hilo app.",
        "Rate Flex D has at most 30 events per winter, for a maximum of 120 hours. During an event, the kWh costs more than 45¢ (46.46¢ with the rates in effect on April 1, 2026).",
        "The Winter Credit option is no longer available to new customers since March 31, 2026. Contracts already enrolled keep it.",
      ],
    },
    lastWinter: {
      title: "Last winter in numbers (2025–2026)",
      intro:
        "Counted from Hydro-Québec's open data, for residential customers:",
      stats: [
        { value: "19", label: "Rate Flex D events, i.e. 76 hours out of the 120-hour maximum" },
        { value: "20", label: "Winter Credit events" },
        { value: "14 / 5", label: "Morning (6–10 a.m.) vs evening (4–8 p.m.) Flex D events" },
        { value: "5", label: "Of the 14 Flex D event days fell on a weekend" },
      ],
      outro:
        "Most events were called in December and January, during cold snaps. Some days had both a morning and an evening event: when a cold spell hits, expect several events in a row.",
    },
    prepare: {
      title: "How to prepare for a peak event",
      intro:
        "The goal is to use as little electricity as possible during the four hours, without being cold:",
      points: [
        "Pre-heat: raise the thermostats by a degree or two in the hours before the event, so the house stores heat.",
        "During the event: lower the thermostats by a few degrees, then restore them when it ends.",
        "Water heater: cut it during the event with a smart relay. A tank heated beforehand usually covers the four hours.",
        "Heavy appliances: hold the dryer, the dishwasher and the EV charger until the event is over.",
        "Evening before: check this page or your notification, and plan the morning.",
      ],
      outro:
        "Doing all this by hand at 6 a.m. on a cold weekday is exactly what people forget. That's what automation is for.",
    },
    gladys: {
      title: "Automate your peak events with Gladys Assistant",
      paragraphs: [
        "Gladys Assistant is a free, open-source smart home platform that runs on your own mini-PC or Raspberry Pi. Its community Hydro-Québec integration connects to your account and knows when a peak or the pre-heat period before it is in progress, for Flex D and Winter Credit contracts.",
        "From there, your scenes do the work: pre-heat, lower the Zigbee thermostats, cut the water heater, hold the EV charger, and notify you. Everything runs locally, and you see what Flex D saved you compared to the base rate on your dashboard.",
      ],
      links: [
        { label: "Rate Flex D, explained →", href: "/hydro-quebec-flex-d/" },
        {
          label: "The Hydro-Québec integration →",
          href: "/docs/integrations/external/hydro-quebec/",
        },
      ],
    },
    related: {
      title: "Go further",
      intro: "Lowering your winter electricity bill is a whole project:",
      links: [
        {
          label: "Hydro-Québec Rate Flex D",
          href: "/hydro-quebec-flex-d/",
          text: "How Flex D works, whether it's worth it, and the automations that make it pay off.",
        },
        {
          label: "Sinopé Zigbee thermostats",
          href: "/sinope-zigbee/",
          text: "Control Sinopé thermostats locally over Zigbee, without Neviweb.",
        },
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
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Let your home handle the peaks",
      text: "Gladys is free, open-source and runs on your own hardware. Connect your Hydro-Québec account and automate every peak event.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Rate Flex D, explained", href: "/hydro-quebec-flex-d/" },
    },
  },

  fr: {
    meta: {
      title: "Événement de pointe Hydro-Québec aujourd'hui (en direct)",
      description:
        "Y a-t-il un événement de pointe Hydro-Québec aujourd'hui ou demain ? Les pointes du tarif Flex D et du crédit hivernal en direct depuis les données ouvertes d'Hydro-Québec, l'historique de l'hiver, les règles et comment automatiser les pointes.",
    },
    hero: {
      title: "Y a-t-il un événement de pointe Hydro-Québec aujourd'hui ?",
      subtitle:
        "Les événements de pointe résidentiels d'aujourd'hui et de demain, en direct depuis les données ouvertes d'Hydro-Québec, pour le tarif Flex D et l'option de crédit hivernal.",
    },
    widget: {
      todayLabel: "Aujourd'hui",
      tomorrowLabel: "Demain",
      live: "En direct",
      loading: "Chargement…",
      error:
        "Les données d'événements de pointe d'Hydro-Québec sont momentanément indisponibles. Réessayez plus tard.",
      noEvent: "Pas de pointe",
      noEventHint: "Aucun événement annoncé pour l'instant",
      tomorrowNoEventHint: "Les événements sont annoncés la veille",
      offSeason: "Pas de pointe",
      offSeasonHint: "Hors saison : reprise le 1er décembre",
      event: "Événement de pointe",
      events: "Événements de pointe",
      inProgress: "En cours",
      done: "Terminé",
      offers: { "TPC-DPC": "Flex D", "CPC-D": "Crédit hivernal" },
      and: "et",
      seasonTitle: (label) => `Hiver ${label}`,
      seasonCurrent: "Cet hiver jusqu'ici",
      seasonLast: "L'hiver dernier",
      flexDStat: (n, h) =>
        `${n} événement${n > 1 ? "s" : ""} Flex D, ${h} h sur 120 h maximum`,
      creditStat: (n) => `${n} événement${n > 1 ? "s" : ""} crédit hivernal`,
      tableDate: "Date",
      tableTime: "Heure",
      tableOffers: "Offres",
      emptySeason: "Aucun événement de pointe n'a encore été appelé cet hiver.",
      source:
        "Source : données ouvertes d'Hydro-Québec (CC BY-NC 4.0), offres résidentielles. Données brutes fournies sans garantie : l'avis officiel qu'Hydro-Québec vous envoie par courriel a priorité.",
      sourceLink: "Voir le jeu de données",
    },
    whatIs: {
      title: "Qu'est-ce qu'un événement de pointe Hydro-Québec ?",
      paragraphs: [
        "Pendant les journées les plus froides de l'hiver, la demande d'électricité au Québec culmine le matin, quand tout le monde monte le chauffage et se prépare, et en fin d'après-midi. Pour soulager le réseau, Hydro-Québec déclenche des événements de pointe et demande aux clients inscrits à ses offres dynamiques de consommer moins pendant ces quelques heures.",
        "Pour la clientèle résidentielle, deux offres sont concernées : le tarif Flex D, où l'électricité coûte moins cher la plupart du temps mais beaucoup plus cher pendant les événements, et l'option de crédit hivernal, qui verse un crédit pour l'électricité que vous ne consommez pas pendant les événements. Les événements sont généralement les mêmes pour les deux.",
      ],
    },
    rules: {
      title: "Les règles des événements de pointe résidentiels",
      intro: "Telles que publiées par Hydro-Québec :",
      points: [
        "Les événements de pointe n'ont lieu que pendant la période d'hiver, du 1er décembre au 31 mars.",
        "Ils durent quatre heures : de 6 h à 10 h ou de 16 h à 20 h. Certains jours ont les deux.",
        "Ils peuvent tomber n'importe quel jour de la semaine, fins de semaine comprises.",
        "Les clients inscrits au tarif Flex D ou à l'option de crédit hivernal sont prévenus la veille, par courriel ou dans l'application Hydro-Québec ou Hilo.",
        "Le tarif Flex D compte au plus 30 événements par hiver, pour un maximum de 120 heures. Pendant un événement, le kWh coûte plus de 45 ¢ (46,46 ¢ avec les tarifs en vigueur le 1er avril 2026).",
        "L'option de crédit hivernal n'est plus offerte aux nouveaux clients depuis le 31 mars 2026. Les abonnements déjà inscrits la conservent.",
      ],
    },
    lastWinter: {
      title: "L'hiver dernier en chiffres (2025-2026)",
      intro:
        "Compté à partir des données ouvertes d'Hydro-Québec, pour la clientèle résidentielle :",
      stats: [
        { value: "19", label: "événements du tarif Flex D, soit 76 heures sur les 120 heures maximum" },
        { value: "20", label: "événements du crédit hivernal" },
        { value: "14 / 5", label: "événements Flex D du matin (6 h–10 h) contre ceux du soir (16 h–20 h)" },
        { value: "5", label: "des 14 journées d'événements Flex D tombaient une fin de semaine" },
      ],
      outro:
        "La plupart des événements ont été appelés en décembre et en janvier, pendant les vagues de froid. Certains jours ont eu un événement le matin et un autre le soir : quand une vague de froid arrive, attendez-vous à plusieurs événements de suite.",
    },
    prepare: {
      title: "Comment se préparer à un événement de pointe",
      intro:
        "L'objectif : consommer le moins possible pendant les quatre heures, sans avoir froid.",
      points: [
        "Préchauffer : montez les thermostats d'un ou deux degrés dans les heures qui précèdent l'événement, pour que la maison stocke de la chaleur.",
        "Pendant l'événement : baissez les thermostats de quelques degrés, puis rétablissez-les à la fin.",
        "Chauffe-eau : coupez-le pendant l'événement avec un relais connecté. Un réservoir chauffé avant suffit généralement pour les quatre heures.",
        "Gros électroménagers : retardez la sécheuse, le lave-vaisselle et la borne de recharge jusqu'à la fin de l'événement.",
        "La veille au soir : consultez cette page ou votre avis, et planifiez le matin.",
      ],
      outro:
        "Faire tout ça à la main à 6 h un matin de semaine glacial, c'est exactement ce qu'on oublie. C'est précisément à ça que sert l'automatisation.",
    },
    gladys: {
      title: "Automatisez vos pointes avec Gladys Assistant",
      paragraphs: [
        "Gladys Assistant est une plateforme domotique gratuite et open source qui tourne sur votre propre mini-PC ou Raspberry Pi. Son intégration communautaire Hydro-Québec se connecte à votre compte et sait quand une pointe ou la période de préchauffage qui la précède est en cours, pour les abonnements au Flex D et au crédit hivernal.",
        "Ensuite, vos scènes font le travail : préchauffer, baisser les thermostats Zigbee, couper le chauffe-eau, retarder la borne de recharge et vous prévenir. Tout tourne en local, et vous voyez sur votre tableau de bord ce que le Flex D vous a fait économiser par rapport au tarif de base.",
      ],
      links: [
        { label: "Le tarif Flex D expliqué →", href: "/hydro-quebec-flex-d/" },
        {
          label: "L'intégration Hydro-Québec →",
          href: "/docs/integrations/external/hydro-quebec/",
        },
      ],
    },
    related: {
      title: "Aller plus loin",
      intro: "Réduire sa facture d'électricité l'hiver, c'est tout un projet :",
      links: [
        {
          label: "Tarif Flex D d'Hydro-Québec",
          href: "/hydro-quebec-flex-d/",
          text: "Comment fonctionne le Flex D, s'il est avantageux, et les automatisations qui le rentabilisent.",
        },
        {
          label: "Thermostats Sinopé en Zigbee",
          href: "/sinope-zigbee/",
          text: "Pilotez vos thermostats Sinopé en local, en Zigbee, sans Neviweb.",
        },
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
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Laissez votre maison gérer les pointes",
      text: "Gladys est gratuite, open source et tourne sur votre propre matériel. Connectez votre compte Hydro-Québec et automatisez chaque événement de pointe.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Le tarif Flex D expliqué", href: "/hydro-quebec-flex-d/" },
    },
  },
};

export const hydroQuebecPeakEventsFaqEn = [
  {
    question: "Is there a Hydro-Québec peak event today?",
    answer:
      "The widget at the top of this page shows today's and tomorrow's residential peak events, live from Hydro-Québec's open data. Peak events only happen between December 1 and March 31, from 6 to 10 a.m. or from 4 to 8 p.m. Customers enrolled in Rate Flex D or the Winter Credit option are also notified the day before by email or in the Hydro-Québec or Hilo app.",
  },
  {
    question: "When are Hydro-Québec peak events announced?",
    answer:
      "The day before. Hydro-Québec notifies enrolled customers by email or in its app, and publishes the events in its open data, which this page reads. In case of a discrepancy, the official email notice takes precedence.",
  },
  {
    question: "What time are Hydro-Québec peak events?",
    answer:
      "Residential peak events last four hours, from 6 to 10 a.m. or from 4 to 8 p.m. Some cold days have both a morning and an evening event.",
  },
  {
    question: "How many peak events are there per winter?",
    answer:
      "Rate Flex D has at most 30 events per winter, for a maximum of 120 hours. Last winter (2025–2026), Hydro-Québec called 19 Flex D events (76 hours) and 20 Winter Credit events, mostly in December and January.",
  },
  {
    question: "Can there be a peak event on a weekend?",
    answer:
      "Yes. Peak events can fall on any day of the week. Last winter, 5 of the 14 Flex D event days were on a Saturday or a Sunday.",
  },
  {
    question: "What's the difference between Flex D and Winter Credit peak events?",
    answer:
      "They are generally called on the same days and hours. With Rate Flex D, the price rises to more than 45¢/kWh during the event; with the Winter Credit option, you earn a credit for the electricity you don't use. The Winter Credit option is no longer available to new customers since March 31, 2026.",
  },
  {
    question: "How can I automate Hydro-Québec peak events?",
    answer:
      "With a smart home platform like Gladys Assistant, free and open source. Its Hydro-Québec integration knows when a peak or a pre-heat period is in progress, and your scenes can pre-heat, lower the thermostats, cut the water heater and notify you, locally.",
  },
];

export const hydroQuebecPeakEventsFaqFr = [
  {
    question: "Y a-t-il un événement de pointe Hydro-Québec aujourd'hui ?",
    answer:
      "Le module en haut de cette page affiche les événements de pointe résidentiels d'aujourd'hui et de demain, en direct depuis les données ouvertes d'Hydro-Québec. Les événements de pointe n'ont lieu qu'entre le 1er décembre et le 31 mars, de 6 h à 10 h ou de 16 h à 20 h. Les clients inscrits au tarif Flex D ou à l'option de crédit hivernal sont aussi prévenus la veille par courriel ou dans l'application Hydro-Québec ou Hilo.",
  },
  {
    question: "Quand les événements de pointe Hydro-Québec sont-ils annoncés ?",
    answer:
      "La veille. Hydro-Québec prévient les clients inscrits par courriel ou dans son application, et publie les événements dans ses données ouvertes, que cette page consulte. En cas de différence, l'avis officiel envoyé par courriel a priorité.",
  },
  {
    question: "À quelle heure sont les événements de pointe Hydro-Québec ?",
    answer:
      "Les événements de pointe résidentiels durent quatre heures, de 6 h à 10 h ou de 16 h à 20 h. Certains jours de grand froid ont un événement le matin et un autre le soir.",
  },
  {
    question: "Combien y a-t-il d'événements de pointe par hiver ?",
    answer:
      "Le tarif Flex D compte au plus 30 événements par hiver, pour un maximum de 120 heures. L'hiver dernier (2025-2026), Hydro-Québec a appelé 19 événements Flex D (76 heures) et 20 événements du crédit hivernal, surtout en décembre et en janvier.",
  },
  {
    question: "Peut-il y avoir un événement de pointe la fin de semaine ?",
    answer:
      "Oui. Les événements de pointe peuvent tomber n'importe quel jour de la semaine. L'hiver dernier, 5 des 14 journées d'événements Flex D tombaient un samedi ou un dimanche.",
  },
  {
    question: "Quelle différence entre les pointes du Flex D et du crédit hivernal ?",
    answer:
      "Elles sont généralement appelées les mêmes jours et aux mêmes heures. Avec le tarif Flex D, le prix monte à plus de 45 ¢/kWh pendant l'événement ; avec l'option de crédit hivernal, vous obtenez un crédit pour l'électricité que vous ne consommez pas. L'option de crédit hivernal n'est plus offerte aux nouveaux clients depuis le 31 mars 2026.",
  },
  {
    question: "Comment automatiser les événements de pointe Hydro-Québec ?",
    answer:
      "Avec une plateforme domotique comme Gladys Assistant, gratuite et open source. Son intégration Hydro-Québec sait quand une pointe ou une période de préchauffage est en cours, et vos scènes peuvent préchauffer, baisser les thermostats, couper le chauffe-eau et vous prévenir, en local.",
  },
];

export default hydroQuebecPeakEventsContent;
