// Content for the live "Ontario electricity rates now" page.
// Second Canadian live tool after the Hydro-Québec peak events page: the
// current Regulated Price Plan period and price, computed in the browser from
// the published schedule (src/components/ontarioRates.js), no API needed.
// Prices are set by the Ontario Energy Board, usually on November 1 (and
// sometimes May 1): update RATES and RATES_EFFECTIVE when they change.

// ¢/kWh, from the OEB (oeb.ca, "Electricity rates"). The OEB now sets prices
// once a year, for November 1 to October 31, and announces them in mid-October.
// Add the new period here when it's published: the widget picks the period
// that covers today, and warns when today is past the last one.
export const RATE_PERIODS = [
  {
    from: "2025-11-01",
    to: "2026-10-31",
    tou: { off: 9.8, mid: 15.7, on: 20.3 },
    ulo: { ultraLow: 3.9, weekendOff: 9.8, mid: 15.7, on: 39.1 },
    tiered: { tier1: 12.0, tier2: 14.2 },
  },
];

export function ratesFor(dayKey) {
  const match = RATE_PERIODS.find((r) => dayKey >= r.from && dayKey <= r.to);
  const latest = RATE_PERIODS[RATE_PERIODS.length - 1];
  return { rates: match || latest, outdated: !match && dayKey > latest.to };
}

// Used for the static parts of the page (price table, FAQ).
export const RATES = RATE_PERIODS[RATE_PERIODS.length - 1];

export const OEB_RATES_URL =
  "https://www.oeb.ca/consumer-information-and-protection/electricity-rates";

const ontarioElectricityRatesContent = {
  en: {
    meta: {
      title: "Ontario Electricity Rates Now: TOU & Ultra-Low Overnight",
      description:
        "What does electricity cost in Ontario right now? The current Time-of-Use and Ultra-Low Overnight period and price, today's schedule, all OEB rates, and how to shift your consumption automatically.",
    },
    hero: {
      title: "Ontario electricity rates right now",
      subtitle:
        "The current Time-of-Use and Ultra-Low Overnight price period, live in Ontario time, with today's schedule and every Regulated Price Plan rate.",
    },
    widget: {
      plans: { tou: "Time-of-Use", ulo: "Ultra-Low Overnight" },
      now: "Right now",
      until: (time) => `until ${time}`,
      next: (name) => `then ${name}`,
      today: "Today",
      periods: {
        off: "Off-peak",
        mid: "Mid-peak",
        on: "On-peak",
        ultraLow: "Ultra-low overnight",
        weekendOff: "Weekend off-peak",
      },
      unit: "¢/kWh",
      holiday: "Holiday: off-peak rules apply all day",
      weekend: "Weekend: off-peak rules apply all day",
      source: (from, to) =>
        `Ontario Energy Board Regulated Price Plan prices for ${from} to ${to}, before delivery, regulatory charges, HST and the Ontario Electricity Rebate. Check your bill for your exact plan.`,
      outdated:
        "New Ontario Energy Board prices took effect on November 1: the prices shown may be out of date until this page is updated.",
      sourceLink: "OEB electricity rates",
    },
    pricesTitle: "All Regulated Price Plan rates",
    pricesIntro:
      "Most Ontario homes are billed on one of three plans. You can switch between them through your utility.",
    table: {
      plan: "Plan",
      period: "Period",
      when: "When",
      price: "Price",
      rows: [
        ["tou", "off", "Weekdays 7 p.m.–7 a.m., weekends and holidays all day"],
        ["tou", "mid", "Weekdays 11 a.m.–5 p.m. in winter, 7–11 a.m. and 5–7 p.m. in summer"],
        ["tou", "on", "Weekdays 7–11 a.m. and 5–7 p.m. in winter, 11 a.m.–5 p.m. in summer"],
        ["ulo", "ultraLow", "Every day, 11 p.m.–7 a.m."],
        ["ulo", "weekendOff", "Weekends and holidays, 7 a.m.–11 p.m."],
        ["ulo", "mid", "Weekdays 7 a.m.–4 p.m. and 9–11 p.m."],
        ["ulo", "on", "Weekdays 4–9 p.m."],
        ["tiered", "tier1", "Up to the monthly threshold (1,000 kWh in winter, 600 kWh in summer)"],
        ["tiered", "tier2", "Above the threshold"],
      ],
      planNames: { tou: "Time-of-Use", ulo: "Ultra-Low Overnight", tiered: "Tiered" },
      tierNames: { tier1: "Tier 1", tier2: "Tier 2" },
    },
    tips: {
      title: "How to pay less on Ontario's time-based rates",
      intro: "The price changes several times a day, so timing is everything:",
      points: [
        "On Ultra-Low Overnight, charging an electric vehicle or heating a water tank between 11 p.m. and 7 a.m. costs a fraction of the on-peak price.",
        "Avoid running the dryer, the dishwasher and the oven during on-peak hours on weekdays.",
        "Weekends and statutory holidays are billed at the cheapest daytime rate on both plans.",
        "Pre-heat or pre-cool the house before on-peak hours, then let the temperature drift a little.",
        "Compare plans with your real consumption: ULO pays off if you can move a big load overnight; Time-of-Use is safer if you can't avoid the 4–9 p.m. window.",
      ],
    },
    gladys: {
      title: "Let your home follow the rates automatically",
      paragraphs: [
        "Gladys Assistant is a free, open-source smart home platform that runs on your own mini-PC or Raspberry Pi. Its scheduled scenes can start the EV charger at 11 p.m., hold the dryer until off-peak, and lower the heat a degree during on-peak hours, every weekday, without you thinking about it.",
        "With energy monitoring on smart plugs and meters, you also see what each appliance consumes and when.",
      ],
      links: [
        { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
        { label: "Scheduled scenes →", href: "/docs/scenes/scheduled-trigger/" },
      ],
    },
    related: {
      title: "Go further",
      intro: "More energy tools and guides:",
      links: [
        {
          label: "Reduce your electricity bill",
          href: "/home-energy-monitoring/",
          text: "Track your consumption and act on the data, locally and privately.",
        },
        {
          label: "Hydro-Québec peak events, live",
          href: "/hydro-quebec-peak-events/",
          text: "The same kind of live tool, for Quebec's peak events.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "Plugs, relays, thermostats and chargers you can control from Gladys.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Make time-of-use pricing work for you",
      text: "Gladys is free, open source and runs on your own hardware. Schedule your heavy loads around Ontario's rates and track what you save.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Energy monitoring", href: "/home-energy-monitoring/" },
    },
  },

  fr: {
    meta: {
      title: "Tarifs d'électricité en Ontario en ce moment",
      description:
        "Combien coûte l'électricité en Ontario en ce moment ? La période et le prix en cours pour les tarifs selon l'heure de consommation et ultra-bas de nuit, la grille du jour, tous les tarifs de la CEO, et comment décaler sa consommation automatiquement.",
    },
    hero: {
      title: "Les tarifs d'électricité en Ontario, en ce moment",
      subtitle:
        "La période et le prix en cours pour les tarifs selon l'heure de consommation et ultra-bas de nuit, en direct à l'heure de l'Ontario, avec la grille du jour et tous les tarifs réglementés.",
    },
    widget: {
      plans: { tou: "Selon l'heure", ulo: "Ultra-bas de nuit" },
      now: "En ce moment",
      until: (time) => `jusqu'à ${time}`,
      next: (name) => `puis ${name}`,
      today: "Aujourd'hui",
      periods: {
        off: "Heures creuses",
        mid: "Heures intermédiaires",
        on: "Heures de pointe",
        ultraLow: "Ultra-bas de nuit",
        weekendOff: "Creuses de fin de semaine",
      },
      unit: "¢/kWh",
      holiday: "Jour férié : tarif creux toute la journée",
      weekend: "Fin de semaine : tarif creux toute la journée",
      source: (from, to) =>
        `Prix de la grille tarifaire réglementée de la Commission de l'énergie de l'Ontario du ${from} au ${to}, hors livraison, frais de réglementation, TVH et remise de l'Ontario pour l'électricité. Vérifiez votre facture pour connaître votre grille exacte.`,
      outdated:
        "De nouveaux prix de la Commission de l'énergie de l'Ontario sont entrés en vigueur le 1er novembre : les prix affichés peuvent être dépassés jusqu'à la mise à jour de cette page.",
      sourceLink: "Tarifs de la CEO",
    },
    pricesTitle: "Tous les tarifs de la grille réglementée",
    pricesIntro:
      "La plupart des foyers ontariens sont facturés selon l'une de ces trois grilles. Vous pouvez en changer auprès de votre distributeur.",
    table: {
      plan: "Grille",
      period: "Période",
      when: "Quand",
      price: "Prix",
      rows: [
        ["tou", "off", "En semaine de 19 h à 7 h, fins de semaine et jours fériés toute la journée"],
        ["tou", "mid", "En semaine de 11 h à 17 h l'hiver, de 7 h à 11 h et de 17 h à 19 h l'été"],
        ["tou", "on", "En semaine de 7 h à 11 h et de 17 h à 19 h l'hiver, de 11 h à 17 h l'été"],
        ["ulo", "ultraLow", "Tous les jours, de 23 h à 7 h"],
        ["ulo", "weekendOff", "Fins de semaine et jours fériés, de 7 h à 23 h"],
        ["ulo", "mid", "En semaine de 7 h à 16 h et de 21 h à 23 h"],
        ["ulo", "on", "En semaine de 16 h à 21 h"],
        ["tiered", "tier1", "Jusqu'au seuil mensuel (1 000 kWh l'hiver, 600 kWh l'été)"],
        ["tiered", "tier2", "Au-delà du seuil"],
      ],
      planNames: { tou: "Selon l'heure", ulo: "Ultra-bas de nuit", tiered: "Par paliers" },
      tierNames: { tier1: "Palier 1", tier2: "Palier 2" },
    },
    tips: {
      title: "Comment payer moins avec les tarifs horaires de l'Ontario",
      intro: "Le prix change plusieurs fois par jour : tout est une question de moment.",
      points: [
        "Avec le tarif ultra-bas de nuit, recharger une voiture électrique ou chauffer un réservoir d'eau entre 23 h et 7 h coûte une fraction du prix de pointe.",
        "Évitez la sécheuse, le lave-vaisselle et le four pendant les heures de pointe en semaine.",
        "Les fins de semaine et jours fériés sont facturés au tarif de jour le plus bas, sur les deux grilles.",
        "Préchauffez ou rafraîchissez la maison avant les heures de pointe, puis laissez la température dériver un peu.",
        "Comparez les grilles avec votre vraie consommation : l'ultra-bas de nuit est rentable si vous pouvez déplacer une grosse charge la nuit ; la grille selon l'heure est plus sûre si vous ne pouvez pas éviter la plage 16 h–21 h.",
      ],
    },
    gladys: {
      title: "Laissez votre maison suivre les tarifs automatiquement",
      paragraphs: [
        "Gladys Assistant est une plateforme domotique gratuite et open source qui tourne sur votre mini-PC ou Raspberry Pi. Ses scènes planifiées peuvent lancer la borne de recharge à 23 h, retarder la sécheuse jusqu'aux heures creuses et baisser le chauffage d'un degré pendant la pointe, chaque jour de semaine, sans que vous y pensiez.",
        "Avec le suivi d'énergie des prises et compteurs connectés, vous voyez aussi ce que consomme chaque appareil, et quand.",
      ],
      links: [
        { label: "Réduire sa facture d'électricité →", href: "/home-energy-monitoring/" },
        { label: "Scènes planifiées →", href: "/docs/scenes/scheduled-trigger/" },
      ],
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres outils et guides sur l'énergie :",
      links: [
        {
          label: "Réduire sa facture d'électricité",
          href: "/home-energy-monitoring/",
          text: "Suivez votre consommation et agissez sur les données, en local et en toute confidentialité.",
        },
        {
          label: "Pointes Hydro-Québec en direct",
          href: "/hydro-quebec-peak-events/",
          text: "Le même type d'outil, pour les pointes au Québec.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Prises, relais, thermostats et bornes que vous pouvez piloter depuis Gladys.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Faites travailler les tarifs horaires pour vous",
      text: "Gladys est gratuite, open source et tourne sur votre propre matériel. Planifiez vos gros consommateurs selon les tarifs de l'Ontario et suivez vos économies.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Suivi d'énergie", href: "/home-energy-monitoring/" },
    },
  },
};

export const ontarioElectricityRatesFaqEn = [
  {
    question: "What is the electricity rate in Ontario right now?",
    answer:
      "It depends on your plan and the time. On Time-of-Use, prices from November 1, 2025 to October 31, 2026 are 9.8¢/kWh off-peak, 15.7¢ mid-peak and 20.3¢ on-peak. On Ultra-Low Overnight, they are 3.9¢ overnight, 9.8¢ weekend off-peak, 15.7¢ mid-peak and 39.1¢ on-peak. The widget at the top of this page shows the current period in Ontario time.",
  },
  {
    question: "What are the Time-of-Use hours in Ontario?",
    answer:
      "On weekdays in winter (November 1 to April 30), on-peak is 7–11 a.m. and 5–7 p.m., mid-peak 11 a.m.–5 p.m. In summer (May 1 to October 31), on-peak is 11 a.m.–5 p.m. and mid-peak 7–11 a.m. and 5–7 p.m. Off-peak is 7 p.m.–7 a.m. on weekdays, and all day on weekends and holidays.",
  },
  {
    question: "What are the Ultra-Low Overnight hours?",
    answer:
      "The same all year: ultra-low overnight from 11 p.m. to 7 a.m. every day, weekend off-peak from 7 a.m. to 11 p.m. on weekends and holidays, on-peak from 4 to 9 p.m. on weekdays, and mid-peak the rest of weekdays (7 a.m.–4 p.m. and 9–11 p.m.).",
  },
  {
    question: "Which holidays are off-peak in Ontario?",
    answer:
      "New Year's Day, Family Day, Good Friday, Victoria Day, Canada Day, Civic Holiday, Labour Day, Thanksgiving, Christmas Day and Boxing Day. If a holiday falls on a weekend, the next weekday that isn't also a holiday gets holiday prices all day.",
  },
  {
    question: "When do Ontario electricity prices change?",
    answer:
      "The Ontario Energy Board sets Regulated Price Plan prices once a year, effective November 1, and usually announces them in mid-October. The Ontario Electricity Rebate (23.5% of the bill subtotal since November 1, 2025) is then applied on your bill.",
  },
  {
    question: "Is Ultra-Low Overnight worth it?",
    answer:
      "It pays off if you can move a large load, like charging an electric vehicle or heating water, to 11 p.m.–7 a.m., and avoid the weekday 4–9 p.m. window, when the price is the highest of any plan. Automating those loads with scheduled scenes makes it much easier.",
  },
];

export const ontarioElectricityRatesFaqFr = [
  {
    question: "Quel est le tarif d'électricité en Ontario en ce moment ?",
    answer:
      "Cela dépend de votre grille et de l'heure. Avec la grille selon l'heure de consommation, les prix du 1er novembre 2025 au 31 octobre 2026 sont de 9,8 ¢/kWh en heures creuses, 15,7 ¢ en heures intermédiaires et 20,3 ¢ en heures de pointe. Avec la grille ultra-basse de nuit : 3,9 ¢ la nuit, 9,8 ¢ en creuses de fin de semaine, 15,7 ¢ en intermédiaires et 39,1 ¢ en pointe. Le module en haut de cette page affiche la période en cours, à l'heure de l'Ontario.",
  },
  {
    question: "Quelles sont les heures de la grille selon l'heure de consommation ?",
    answer:
      "En semaine l'hiver (du 1er novembre au 30 avril), la pointe va de 7 h à 11 h et de 17 h à 19 h, les heures intermédiaires de 11 h à 17 h. L'été (du 1er mai au 31 octobre), la pointe va de 11 h à 17 h, les intermédiaires de 7 h à 11 h et de 17 h à 19 h. Les heures creuses vont de 19 h à 7 h en semaine, et toute la journée les fins de semaine et jours fériés.",
  },
  {
    question: "Quelles sont les heures de la grille ultra-basse de nuit ?",
    answer:
      "Les mêmes toute l'année : ultra-bas de 23 h à 7 h tous les jours, creuses de fin de semaine de 7 h à 23 h les fins de semaine et jours fériés, pointe de 16 h à 21 h en semaine, et intermédiaires le reste de la semaine (7 h–16 h et 21 h–23 h).",
  },
  {
    question: "Quels jours fériés sont au tarif creux en Ontario ?",
    answer:
      "Le jour de l'An, le jour de la Famille, le Vendredi saint, la fête de la Reine, la fête du Canada, le congé civique, la fête du Travail, l'Action de grâce, Noël et le lendemain de Noël. Si un jour férié tombe une fin de semaine, le jour de semaine suivant qui n'est pas férié a le tarif des jours fériés toute la journée.",
  },
  {
    question: "Quand les prix de l'électricité changent-ils en Ontario ?",
    answer:
      "La Commission de l'énergie de l'Ontario fixe les prix de la grille réglementée une fois par an, en vigueur le 1er novembre, et les annonce généralement mi-octobre. La remise de l'Ontario pour l'électricité (23,5 % du sous-total de la facture depuis le 1er novembre 2025) s'applique ensuite sur votre facture.",
  },
  {
    question: "La grille ultra-basse de nuit vaut-elle le coup ?",
    answer:
      "Elle est rentable si vous pouvez déplacer une grosse charge, comme la recharge d'une voiture électrique ou le chauffage de l'eau, entre 23 h et 7 h, et éviter la plage 16 h–21 h en semaine, où le prix est le plus élevé de toutes les grilles. Automatiser ces charges avec des scènes planifiées rend la chose bien plus simple.",
  },
];

export default ontarioElectricityRatesContent;
