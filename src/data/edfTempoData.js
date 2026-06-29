// Content for the EDF Tempo "couleur du jour" landing page.
// Targets the very high-volume French cluster "couleur du jour tempo / tempo
// couleur du jour / edf tempo couleur du jour / jour tempo" (Search Console:
// 12k+ impressions at position 33-60 with ~0 clicks, only docs ranking).
// The page combines a live widget (today's & tomorrow's Tempo colour, fetched
// from our API) with evergreen explanatory content for SEO, and ties back to
// Gladys' Tempo automation.

export const TEMPO_API_URL =
  "https://edf-tempo-api.gladysassistant.workers.dev/";

const edfTempoContent = {
  en: {
    meta: {
      title: "EDF Tempo: today's colour (and tomorrow's), live",
      description:
        "Is today an EDF Tempo blue, white or red day? See the live Tempo colour of the day and tomorrow's colour, learn what each colour costs, and how to automate Tempo at home with Gladys.",
    },
    hero: {
      title: "EDF Tempo: what's the colour of the day?",
      subtitle:
        "The live Tempo colour for today and tomorrow, plus what each colour means for your electricity bill.",
    },
    widget: {
      todayLabel: "Today",
      tomorrowLabel: "Tomorrow",
      live: "Live",
      loading: "Loading…",
      error: "Tempo data is momentarily unavailable. Please try again later.",
      tomorrowUnknownHint: "Published around 11am",
      source: "Source: EDF, updated automatically",
      colors: {
        blue: { name: "Blue", hint: "Cheapest rate" },
        white: { name: "White", hint: "Intermediate rate" },
        red: { name: "Red", hint: "Most expensive rate" },
        unknown: { name: "Coming soon", hint: "Not published yet" },
      },
    },
    whatIs: {
      title: "What is the EDF Tempo option?",
      paragraphs: [
        "Tempo is a regulated EDF electricity pricing option built around coloured days. Each calendar day is blue, white or red, and the price of your kWh depends on the colour, with cheaper off-peak hours every night (10pm to 6am).",
        "The idea is simple: electricity is much cheaper on the many blue days and more expensive on the rare red days, when the grid is under strain. If you can shift or reduce your usage on white and red days, Tempo can cut your bill significantly, which is exactly where home automation helps.",
      ],
    },
    colorsLegend: {
      title: "The three Tempo colours",
      intro: "Over a year, EDF spreads the days across three colours:",
      cards: [
        {
          key: "blue",
          name: "Blue days",
          days: "~300 days / year",
          text: "The cheapest rate, and the vast majority of the year. Most of your consumption happens on blue days.",
        },
        {
          key: "white",
          name: "White days",
          days: "~43 days / year",
          text: "An intermediate rate. More expensive than blue, but still moderate. Worth easing off on heavy appliances.",
        },
        {
          key: "red",
          name: "Red days",
          days: "~22 days / year",
          text: "The most expensive rate by far, only between 1 November and 31 March, on weekdays. During peak hours (6am-10pm) the kWh can cost several times the blue rate.",
        },
      ],
    },
    redDays: {
      title: "When are the red days?",
      intro:
        "Red days are the ones to anticipate. The rules are fixed:",
      points: [
        "There are a maximum of 22 red days per year.",
        "They can only fall between 1 November and 31 March.",
        "They are weekdays only (never Saturdays, Sundays or public holidays).",
        "Tomorrow's colour is published by EDF around 11am the day before, so you always know a red day is coming in advance.",
      ],
      outro:
        "On a red day, the smart move is to pre-heat earlier, avoid running heavy appliances during peak hours, and lean on any battery or water tank you've already heated on cheaper days.",
    },
    gladys: {
      title: "Automate Tempo with Gladys Assistant",
      paragraphs: [
        "Knowing the colour is one thing; acting on it automatically is where you actually save. Gladys Assistant retrieves the Tempo colour and lets you build scenes around it: lower the heating on red days, delay the water heater and the washing machine to off-peak hours, or get a notification the evening before a red day.",
        "It all runs locally on your own hardware, alongside your other devices. Combined with Enedis consumption tracking, you get a complete, private picture of what you spend and when.",
      ],
      links: [
        { label: "Tempo in Gladys scenes →", href: "/docs/scenes/edf-tempo/" },
        { label: "The Tempo dashboard widget →", href: "/docs/dashboard/edf-tempo/" },
      ],
    },
    related: {
      title: "Go further",
      intro: "Cutting your electricity bill is a whole project:",
      links: [
        {
          label: "Reduce your electricity bill",
          href: "/home-energy-monitoring/",
          text: "Track your consumption with Enedis and act on the data, locally and privately.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
        {
          label: "Open-source home automation",
          href: "/open-source-home-automation/",
          text: "Run your smart home on free, self-hosted software you can trust and keep.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Turn the Tempo colour into automatic savings",
      text: "Gladys is free, open-source, and installs in a single Docker command. Automate your home around Tempo, locally and privately.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Reduce your electricity bill", href: "/home-energy-monitoring/" },
    },
  },

  fr: {
    meta: {
      title: "Tempo EDF : la couleur du jour (et de demain) en direct",
      description:
        "Aujourd'hui, jour Tempo bleu, blanc ou rouge ? Découvrez la couleur du jour EDF Tempo et celle de demain en direct, ce que coûte chaque couleur, et comment automatiser Tempo chez vous avec Gladys.",
    },
    hero: {
      title: "Tempo EDF : quelle est la couleur du jour ?",
      subtitle:
        "La couleur Tempo du jour et de demain en direct, et ce que chaque couleur change sur votre facture d'électricité.",
    },
    widget: {
      todayLabel: "Aujourd'hui",
      tomorrowLabel: "Demain",
      live: "En direct",
      loading: "Chargement…",
      error: "Les données Tempo sont momentanément indisponibles. Réessayez plus tard.",
      tomorrowUnknownHint: "Publiée vers 11h",
      source: "Source : EDF, mis à jour automatiquement",
      colors: {
        blue: { name: "Bleu", hint: "Tarif le plus bas" },
        white: { name: "Blanc", hint: "Tarif intermédiaire" },
        red: { name: "Rouge", hint: "Tarif le plus élevé" },
        unknown: { name: "Bientôt connue", hint: "Pas encore publiée" },
      },
    },
    whatIs: {
      title: "C'est quoi l'option Tempo d'EDF ?",
      paragraphs: [
        "Tempo est une option tarifaire réglementée d'EDF organisée autour de jours de couleur. Chaque jour du calendrier est bleu, blanc ou rouge, et le prix de votre kWh dépend de la couleur, avec en plus des heures creuses moins chères chaque nuit (de 22h à 6h).",
        "Le principe est simple : l'électricité est bien moins chère les nombreux jours bleus, et plus chère les rares jours rouges, quand le réseau est sous tension. Si vous pouvez décaler ou réduire votre consommation les jours blancs et rouges, Tempo peut réduire fortement votre facture, et c'est précisément là que la domotique aide.",
      ],
    },
    colorsLegend: {
      title: "Les trois couleurs Tempo",
      intro: "Sur une année, EDF répartit les jours en trois couleurs :",
      cards: [
        {
          key: "blue",
          name: "Jours bleus",
          days: "~300 jours / an",
          text: "Le tarif le plus bas, et la grande majorité de l'année. L'essentiel de votre consommation tombe les jours bleus.",
        },
        {
          key: "white",
          name: "Jours blancs",
          days: "~43 jours / an",
          text: "Un tarif intermédiaire. Plus cher que le bleu, mais raisonnable. Il vaut le coup de lever le pied sur les gros appareils.",
        },
        {
          key: "red",
          name: "Jours rouges",
          days: "~22 jours / an",
          text: "Le tarif de loin le plus élevé, uniquement du 1er novembre au 31 mars, en jours ouvrés. En heures pleines (6h-22h), le kWh peut coûter plusieurs fois le tarif bleu.",
        },
      ],
    },
    redDays: {
      title: "Quand tombent les jours rouges ?",
      intro:
        "Les jours rouges sont ceux à anticiper. Les règles sont fixes :",
      points: [
        "Il y a au maximum 22 jours rouges par an.",
        "Ils ne peuvent tomber qu'entre le 1er novembre et le 31 mars.",
        "Ce sont uniquement des jours ouvrés (jamais les samedis, dimanches ni jours fériés).",
        "La couleur du lendemain est publiée par EDF vers 11h la veille : vous savez donc toujours à l'avance qu'un jour rouge arrive.",
      ],
      outro:
        "Un jour rouge, le bon réflexe est de préchauffer plus tôt, d'éviter les gros appareils en heures pleines, et de profiter d'un ballon d'eau chaude ou d'une batterie déjà chargés les jours moins chers.",
    },
    gladys: {
      title: "Automatiser Tempo avec Gladys Assistant",
      paragraphs: [
        "Connaître la couleur, c'est une chose ; agir dessus automatiquement, c'est là qu'on économise vraiment. Gladys Assistant récupère la couleur Tempo et vous laisse créer des scènes autour : baisser le chauffage les jours rouges, décaler le chauffe-eau et le lave-linge en heures creuses, ou recevoir une notification la veille d'un jour rouge.",
        "Tout tourne en local, sur votre propre matériel, à côté de vos autres appareils. Combiné au suivi de consommation Enedis, vous obtenez une vision complète et privée de ce que vous dépensez, et quand.",
      ],
      links: [
        { label: "Tempo dans les scènes Gladys →", href: "/fr/docs/scenes/edf-tempo/" },
        { label: "Le widget Tempo du tableau de bord →", href: "/fr/docs/dashboard/edf-tempo/" },
      ],
    },
    related: {
      title: "Aller plus loin",
      intro: "Réduire sa facture d'électricité, c'est tout un projet :",
      links: [
        {
          label: "Réduire sa facture d'électricité",
          href: "/home-energy-monitoring/",
          text: "Suivez votre consommation avec Enedis et agissez sur les données, en local et en privé.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord est important et comment bâtir une maison sans le cloud.",
        },
        {
          label: "La domotique open source",
          href: "/open-source-home-automation/",
          text: "Piloter sa maison avec un logiciel libre et auto-hébergé que vous gardez.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Transformez la couleur Tempo en économies automatiques",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Automatisez votre maison autour de Tempo, en local et en privé.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: { label: "Réduire sa facture d'électricité", href: "/home-energy-monitoring/" },
    },
  },
};

export const edfTempoFaqEn = [
  {
    question: "What is the EDF Tempo colour of the day?",
    answer:
      "Each day under the EDF Tempo option is blue, white or red, and the colour sets the price of your electricity that day. Blue is the cheapest (about 300 days a year), white is intermediate (about 43 days), and red is the most expensive (about 22 days, only in winter). Today's and tomorrow's colours are shown live at the top of this page.",
  },
  {
    question: "What colour is tomorrow on Tempo?",
    answer:
      "Tomorrow's Tempo colour is published by EDF around 11am the day before. Before that, it isn't known yet. The widget at the top of this page shows tomorrow's colour as soon as it's available.",
  },
  {
    question: "When are EDF Tempo red days?",
    answer:
      "There are at most 22 red days per year, and they can only fall between 1 November and 31 March, on weekdays (never weekends or public holidays). On a red day, peak-hour electricity (6am to 10pm) is far more expensive than usual.",
  },
  {
    question: "How many blue, white and red days are there per year?",
    answer:
      "An EDF Tempo year has about 300 blue days, 43 white days and 22 red days, for a total of 365. The vast majority of the year is therefore at the cheapest blue rate.",
  },
  {
    question: "How can I automate EDF Tempo at home?",
    answer:
      "With a home automation platform like Gladys Assistant, you can retrieve the Tempo colour and build automations around it: reduce the heating on red days, shift the water heater and washing machine to off-peak hours, or get notified the evening before a red day. Gladys runs locally and is free and open-source.",
  },
];

export const edfTempoFaqFr = [
  {
    question: "Quelle est la couleur du jour EDF Tempo ?",
    answer:
      "Chaque jour de l'option EDF Tempo est bleu, blanc ou rouge, et la couleur fixe le prix de votre électricité ce jour-là. Le bleu est le moins cher (environ 300 jours par an), le blanc est intermédiaire (environ 43 jours) et le rouge est le plus cher (environ 22 jours, uniquement en hiver). La couleur du jour et de demain est affichée en direct en haut de cette page.",
  },
  {
    question: "Quelle couleur Tempo demain ?",
    answer:
      "La couleur Tempo du lendemain est publiée par EDF vers 11h la veille. Avant cela, elle n'est pas encore connue. Le widget en haut de cette page affiche la couleur de demain dès qu'elle est disponible.",
  },
  {
    question: "Quand sont les jours rouges EDF Tempo ?",
    answer:
      "Il y a au maximum 22 jours rouges par an, et ils ne peuvent tomber qu'entre le 1er novembre et le 31 mars, en jours ouvrés (jamais le week-end ni les jours fériés). Un jour rouge, l'électricité en heures pleines (6h à 22h) est bien plus chère que d'habitude.",
  },
  {
    question: "Combien de jours bleus, blancs et rouges par an ?",
    answer:
      "Une année EDF Tempo compte environ 300 jours bleus, 43 jours blancs et 22 jours rouges, soit 365 au total. La grande majorité de l'année est donc au tarif bleu, le moins cher.",
  },
  {
    question: "Comment automatiser EDF Tempo chez soi ?",
    answer:
      "Avec une plateforme domotique comme Gladys Assistant, vous pouvez récupérer la couleur Tempo et créer des automatisations autour : baisser le chauffage les jours rouges, décaler le chauffe-eau et le lave-linge en heures creuses, ou être notifié la veille d'un jour rouge. Gladys tourne en local et est gratuite et open source.",
  },
];

export default edfTempoContent;
