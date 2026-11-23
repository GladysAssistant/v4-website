// Content for the "dynamischer Stromtarif" page (Germany).
// Germany has no page like /edf-tempo/ or /heures-creuses/ yet, while German
// Search Console traffic leans on energy integrations (EPEX Spot, Tibber,
// Zendure, Anker Solix, Fronius...). Facts, checked in November 2026:
// - §41a Abs. 2 EnWG: suppliers with more than 100,000 customers had to offer a
//   dynamic tariff from 2022; since January 1, 2025 every supplier must offer
//   one to customers with a smart meter (intelligentes Messsystem). It is a
//   duty to offer, not to accept every customer. (dejure.org, bundesnetzagentur.de)
// - Day-ahead auction (EPEX Spot, zone DE-LU): order book closes at 12:00 CET,
//   results from about 12:45–13:00. 15-minute products since delivery day
//   October 1, 2025. Tibber, Rabot, Octopus (dynamicOctopus) and 1KOMMA5°
//   price per quarter-hour; Ostrom SimplyDynamic still prices hourly.
// - BDEW Strompreisanalyse 10/2026: average household price 37.3 ct/kWh,
//   procurement and sales 15.41 ct (41%), network fees 24.8%, taxes and levies
//   33.8%. Not the exchange price alone.
// - Negative prices: 573 hours in 2025, 457 in 2024 (BNetzA / SMARD).
// - MsbG: installation on request possible since 2025, one-off fee at most
//   100 EUR; annual costs capped by law. Mandatory above 6,000 kWh/year, PV
//   above 7 kW and §14a devices. A "Smart-Meter-Light" reform was discussed in
//   2026: keep the wording general.
// - §14a EnWG: heat pumps, wallboxes, storage above 4.2 kW get reduced network
//   fees; module 3 (time-variable network fees) since April 2025.
// Gladys angle: the EPEX Spot and Tibber external integrations (cheapest-hours
// scene triggers, dynamic contract templates), and evcc for EV charging.
// Primarily a German page; the English version serves English speakers in
// Germany.

const dynamicTariffContent = {
  en: {
    meta: {
      title: "Dynamic Electricity Tariffs in Germany, Explained",
      description:
        "Every German supplier must now offer a dynamic tariff. How exchange prices work, who it pays off for, and how to run your appliances in the cheapest hours automatically.",
    },
    screenshotCaption:
      "Today's and tomorrow's exchange prices in Gladys, with scenes that start your appliances in the cheapest hours.",
    hero: {
      title: "Dynamic electricity tariffs in Germany: how they work, and how to make them pay",
      subtitle:
        "With a dynamic tariff, the price of your electricity follows the exchange, quarter-hour by quarter-hour. It only pays off if your home shifts its consumption to the cheap hours, ideally on its own.",
      intro: [
        "Since January 1, 2025, every electricity supplier in Germany has to offer a dynamic tariff to customers who have a smart meter (§41a EnWG). Instead of a fixed price per kWh, you pay a price based on the day-ahead exchange price, which changes through the day.",
        "Electricity is often cheap at midday when the sun shines, at night and on windy days, and expensive in the evening. In 2025, the German exchange price was even negative for 573 hours. The trick is to use as much electricity as possible when it's cheap, without spending your day watching a price chart.",
      ],
      primaryCta: { label: "Get exchange prices in Gladys", href: "/docs/integrations/external/epex-spot/" },
      secondaryCta: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    problem: {
      title: "How a dynamic tariff works",
      intro: "The key points:",
      points: [
        "Your energy price follows the day-ahead auction of the EPEX Spot exchange for the Germany/Luxembourg zone. Most dynamic tariffs (Tibber, Rabot, Octopus…) now price per quarter-hour; some still price per hour.",
        "Tomorrow's prices are known the day before, from about 1 p.m. That's when you can plan when to run your appliances.",
        "The exchange price is only part of what you pay: network fees, taxes and levies are added. In 2026, procurement and sales account for about 41% of an average household's price (BDEW), so a cheap hour doesn't mean free electricity.",
        "You need a smart meter (intelligentes Messsystem). Since 2025 you can ask your metering operator for one; the one-off fee is capped at €100 and the yearly cost is capped by law.",
        "Heat pumps and wallboxes registered under §14a EnWG can also get reduced, sometimes time-variable network fees: a second lever on top of the dynamic tariff.",
      ],
      outro:
        "Suppliers include Tibber, Rabot Energy, Ostrom, Octopus Energy and 1KOMMA5°. Compare the monthly fee and the markup per kWh: they matter as much as the exchange price.",
    },
    comparison: {
      title: "Dynamic or fixed tariff?",
      intro: "The two models side by side:",
      cols: { feature: "", gladys: "Dynamic tariff", other: "Fixed-price tariff" },
      rows: [
        { feature: "Energy price", gladys: "Follows the exchange, per quarter-hour or per hour", other: "The same price at any time" },
        { feature: "Smart meter", gladys: "Required", other: "Not required" },
        { feature: "Best for", gladys: "Homes that can shift consumption: EV, heat pump, battery, water heater, appliances", other: "Homes that use electricity mostly in the evening and can't shift it" },
        { feature: "Risk", gladys: "Price spikes, for example on windless winter evenings", other: "None during the price guarantee" },
        { feature: "What you need to do", gladys: "Run the big consumers in cheap hours, ideally automatically", other: "Nothing" },
      ],
      outro:
        "Rule of thumb: the more consumption you can move, the more a dynamic tariff pays off. Without flexible consumers, a good fixed-price tariff is often just as good.",
    },
    features: {
      title: "Let your home follow the price",
      intro: "With Gladys, cheap hours become scenes that run on their own:",
      cards: [
        {
          icon: "📈",
          title: "Exchange prices live",
          text: "The EPEX Spot integration brings in the price of every quarter-hour, for today and tomorrow, with no account and no API key.",
          href: "/docs/integrations/external/epex-spot/",
        },
        {
          icon: "⏱️",
          title: "Cheapest hours",
          text: "A scene starts when the cheapest 1, 2, 3, 4 or 6-hour window of the day begins: dishwasher, washing machine, water heater.",
          href: "/docs/integrations/external/epex-spot/",
        },
        {
          icon: "🔌",
          title: "Tibber customers",
          text: "The Tibber integration reads your prices, Tibber's price level and, with a Pulse, your live consumption.",
          href: "/docs/integrations/external/tibber/",
        },
        {
          icon: "🚗",
          title: "Charge the car when it's cheap",
          text: "Gladys follows evcc, which plans EV charging around dynamic tariffs and solar surplus, and runs scenes when a charge finishes.",
          href: "/docs/integrations/external/evcc/",
        },
        {
          icon: "🔔",
          title: "Know tomorrow's prices",
          text: "Once tomorrow's prices are published, get a message with the cheapest window, or a warning when prices go negative.",
        },
        {
          icon: "💶",
          title: "The real cost",
          text: "Describe your tariff in Gladys' energy contracts (exchange price, markup, network fees, monthly fee) and see what each day really cost.",
          href: "/docs/integrations/energy-monitoring/",
        },
      ],
    },
    how: {
      title: "Getting started",
      intro: "Once, then it runs by itself:",
      points: [
        "Check you have a smart meter, or ask your metering operator (Messstellenbetreiber) for one.",
        "Compare dynamic tariffs: monthly fee, markup per kWh, quarter-hourly or hourly prices, notice period.",
        "In Gladys, install the EPEX Spot integration (or Tibber if you're a Tibber customer) and pick the DE-LU zone.",
        "Put your big flexible consumers on smart plugs or relays, or connect them through their integration.",
        "Create a scene on \"cheapest hours started\", and one that warns you when tomorrow's prices are published.",
      ],
      outro: "Gladys is free and open source, and runs on your own hardware.",
    },
    solution: {
      title: "Why automate it",
      paragraphs: [
        "A dynamic tariff rewards flexibility, but nobody wants to check the price before every wash. Automation turns the price curve into a background task: the dishwasher waits for the cheap window, the car charges at the right time, and you get a message when something unusual happens.",
        "Gladys Assistant runs these scenes locally, on a mini-PC or a Raspberry Pi at home. Only the price download needs the Internet; your devices and your consumption data stay with you.",
      ],
      link: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    related: {
      title: "Go further",
      intro: "More energy guides and integrations:",
      links: [
        { label: "EPEX Spot integration", href: "/docs/integrations/external/epex-spot/", text: "Quarter-hourly exchange prices, cheapest hours and dynamic contracts in Gladys." },
        { label: "Charge your EV with solar surplus", href: "/pv-ueberschussladen/", text: "Combine solar surplus and cheap hours to charge your car." },
        { label: "Balcony solar (Balkonkraftwerk)", href: "/balkonkraftwerk/", text: "Use more of your own solar power." },
        { label: "Reduce your electricity bill", href: "/home-energy-monitoring/", text: "Track your consumption and act on the data." },
        { label: "All guides", href: "/guides/", text: "Every guide, tool and comparison in one place." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Make your dynamic tariff pay off automatically",
      text: "Gladys is free, open source and installs on a mini-PC from a USB drive. Bring in exchange prices and run your appliances in the cheapest hours.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "EPEX Spot integration", href: "/docs/integrations/external/epex-spot/" },
    },
  },

  de: {
    meta: {
      title: "Dynamischer Stromtarif: So funktioniert er (2026)",
      description:
        "Seit 2025 muss jeder Stromanbieter einen dynamischen Tarif anbieten. Wie Börsenstrompreise funktionieren, für wen es sich lohnt und wie du Geräte automatisch günstig laufen lässt.",
    },
    screenshotCaption:
      "Die Börsenstrompreise von heute und morgen in Gladys, mit Szenen, die deine Geräte in den günstigsten Stunden starten.",
    hero: {
      title: "Dynamischer Stromtarif: So funktioniert er, und so lohnt er sich",
      subtitle:
        "Mit einem dynamischen Stromtarif folgt dein Strompreis der Börse, Viertelstunde für Viertelstunde. Er lohnt sich nur, wenn dein Zuhause den Verbrauch in die günstigen Stunden verlegt – am besten von selbst.",
      intro: [
        "Seit dem 1. Januar 2025 muss jeder Stromanbieter in Deutschland Kundinnen und Kunden mit intelligentem Messsystem einen dynamischen Stromtarif anbieten (§41a EnWG). Statt eines festen Preises pro kWh zahlst du einen Preis, der sich am Day-Ahead-Börsenpreis orientiert und sich im Laufe des Tages ändert.",
        "Strom ist oft mittags bei Sonnenschein, nachts und an windigen Tagen günstig, abends dagegen teuer. 2025 war der Börsenstrompreis in Deutschland sogar in 573 Stunden negativ. Der Trick: möglichst viel Strom dann verbrauchen, wenn er günstig ist – ohne den ganzen Tag auf eine Preiskurve zu schauen.",
      ],
      primaryCta: { label: "Börsenstrompreise in Gladys", href: "/de/docs/integrations/external/epex-spot/" },
      secondaryCta: { label: "Stromrechnung senken →", href: "/de/home-energy-monitoring/" },
    },
    problem: {
      title: "So funktioniert ein dynamischer Stromtarif",
      intro: "Das Wichtigste in Kürze:",
      points: [
        "Dein Energiepreis folgt der Day-Ahead-Auktion der Strombörse EPEX Spot für die Preiszone Deutschland/Luxemburg. Die meisten dynamischen Tarife (Tibber, Rabot, Octopus …) rechnen inzwischen viertelstündlich ab, manche noch stündlich.",
        "Die Preise für morgen stehen am Vortag fest, ab etwa 13 Uhr. Dann kannst du planen, wann deine Geräte laufen.",
        "Der Börsenpreis ist nur ein Teil deines Strompreises: Netzentgelte, Steuern und Umlagen kommen dazu. 2026 machen Beschaffung und Vertrieb rund 41 % des durchschnittlichen Haushaltsstrompreises aus (BDEW). Eine günstige Stunde heißt also nicht kostenloser Strom.",
        "Du brauchst ein intelligentes Messsystem (Smart Meter). Seit 2025 kannst du den Einbau bei deinem Messstellenbetreiber beantragen; das einmalige Entgelt ist auf 100 € begrenzt, die jährlichen Kosten sind gesetzlich gedeckelt.",
        "Wärmepumpen und Wallboxen nach §14a EnWG können zusätzlich reduzierte, teils zeitvariable Netzentgelte bekommen – ein zweiter Hebel neben dem dynamischen Tarif.",
      ],
      outro:
        "Anbieter sind zum Beispiel Tibber, Rabot Energy, Ostrom, Octopus Energy und 1KOMMA5°. Vergleiche Grundgebühr und Aufschlag pro kWh: Sie sind genauso wichtig wie der Börsenpreis.",
    },
    comparison: {
      title: "Dynamischer Tarif oder Festpreis?",
      intro: "Die beiden Modelle im Vergleich:",
      cols: { feature: "", gladys: "Dynamischer Tarif", other: "Festpreistarif" },
      rows: [
        { feature: "Energiepreis", gladys: "Folgt der Börse, pro Viertelstunde oder pro Stunde", other: "Zu jeder Uhrzeit gleich" },
        { feature: "Smart Meter", gladys: "Erforderlich", other: "Nicht erforderlich" },
        { feature: "Ideal für", gladys: "Haushalte, die Verbrauch verschieben können: E-Auto, Wärmepumpe, Speicher, Warmwasser, Haushaltsgeräte", other: "Haushalte, die vor allem abends Strom brauchen und das nicht ändern können" },
        { feature: "Risiko", gladys: "Preisspitzen, etwa an windstillen Winterabenden", other: "Keines während der Preisgarantie" },
        { feature: "Dein Aufwand", gladys: "Große Verbraucher in günstige Stunden legen, am besten automatisch", other: "Keiner" },
      ],
      outro:
        "Faustregel: Je mehr Verbrauch du verschieben kannst, desto eher lohnt sich ein dynamischer Tarif. Ohne flexible Verbraucher ist ein guter Festpreistarif oft genauso günstig.",
    },
    features: {
      title: "Lass dein Zuhause dem Strompreis folgen",
      intro: "Mit Gladys werden günstige Stunden zu Szenen, die von selbst laufen:",
      cards: [
        {
          icon: "📈",
          title: "Börsenstrompreise live",
          text: "Die EPEX-Spot-Integration holt den Preis jeder Viertelstunde für heute und morgen – ohne Konto und ohne API-Schlüssel.",
          href: "/de/docs/integrations/external/epex-spot/",
        },
        {
          icon: "⏱️",
          title: "Die günstigsten Stunden",
          text: "Eine Szene startet, wenn das günstigste 1-, 2-, 3-, 4- oder 6-Stunden-Fenster des Tages beginnt: Spülmaschine, Waschmaschine, Warmwasser.",
          href: "/de/docs/integrations/external/epex-spot/",
        },
        {
          icon: "🔌",
          title: "Für Tibber-Kunden",
          text: "Die Tibber-Integration liest deine Preise, Tibbers Preisniveau und mit einem Pulse deinen Live-Verbrauch.",
          href: "/de/docs/integrations/external/tibber/",
        },
        {
          icon: "🚗",
          title: "Das E-Auto günstig laden",
          text: "Gladys folgt evcc, das das Laden nach dynamischem Tarif und PV-Überschuss plant, und startet Szenen, wenn ein Ladevorgang endet.",
          href: "/de/docs/integrations/external/evcc/",
        },
        {
          icon: "🔔",
          title: "Die Preise von morgen kennen",
          text: "Sobald die Preise für morgen veröffentlicht sind, bekommst du eine Nachricht mit dem günstigsten Zeitfenster oder eine Warnung bei negativen Preisen.",
        },
        {
          icon: "💶",
          title: "Die echten Kosten",
          text: "Bilde deinen Tarif in den Energieverträgen von Gladys ab (Börsenpreis, Aufschlag, Netzentgelte, Grundgebühr) und sieh, was jeder Tag wirklich gekostet hat.",
          href: "/de/docs/integrations/energy-monitoring/",
        },
      ],
    },
    how: {
      title: "So legst du los",
      intro: "Einmal einrichten, dann läuft es von selbst:",
      points: [
        "Prüfe, ob du ein intelligentes Messsystem hast, oder beantrage eines bei deinem Messstellenbetreiber.",
        "Vergleiche dynamische Tarife: Grundgebühr, Aufschlag pro kWh, viertelstündliche oder stündliche Preise, Kündigungsfrist.",
        "Installiere in Gladys die EPEX-Spot-Integration (oder Tibber, wenn du Tibber-Kunde bist) und wähle die Zone DE-LU.",
        "Schließe deine großen flexiblen Verbraucher an smarte Steckdosen oder Relais an oder binde sie über ihre Integration ein.",
        "Erstelle eine Szene auf „Günstigste Stunden gestartet“ und eine, die dich informiert, sobald die Preise für morgen veröffentlicht sind.",
      ],
      outro: "Gladys ist kostenlos, Open Source und läuft auf deiner eigenen Hardware.",
    },
    solution: {
      title: "Warum automatisieren?",
      paragraphs: [
        "Ein dynamischer Tarif belohnt Flexibilität, aber niemand will vor jeder Wäsche den Strompreis prüfen. Automatisierung macht aus der Preiskurve eine Hintergrundaufgabe: Die Spülmaschine wartet auf das günstige Zeitfenster, das Auto lädt zur richtigen Zeit, und du bekommst eine Nachricht, wenn etwas Ungewöhnliches passiert.",
        "Gladys Assistant führt diese Szenen lokal aus, auf einem Mini-PC oder Raspberry Pi bei dir zu Hause. Nur das Herunterladen der Preise braucht Internet; deine Geräte und Verbrauchsdaten bleiben bei dir.",
      ],
      link: { label: "Stromrechnung senken →", href: "/de/home-energy-monitoring/" },
    },
    related: {
      title: "Weiterlesen",
      intro: "Mehr Ratgeber und Integrationen rund um Energie:",
      links: [
        { label: "EPEX-Spot-Integration", href: "/de/docs/integrations/external/epex-spot/", text: "Viertelstündliche Börsenpreise, günstigste Stunden und dynamische Verträge in Gladys." },
        { label: "PV-Überschussladen", href: "/de/pv-ueberschussladen/", text: "Solarüberschuss und günstige Stunden kombinieren, um dein E-Auto zu laden." },
        { label: "Balkonkraftwerk", href: "/de/balkonkraftwerk/", text: "Mehr vom eigenen Solarstrom selbst nutzen." },
        { label: "Stromrechnung senken", href: "/de/home-energy-monitoring/", text: "Behalte deinen Verbrauch im Blick und handle auf Basis der Daten." },
        { label: "Der beste Mini-PC für die Hausautomation", href: "/de/mini-pc-home-automation/", text: "Die Hardware, auf der Gladys rund um die Uhr läuft." },
        { label: "Alle Ratgeber", href: "/de/guides/", text: "Alle Ratgeber, Tools und Vergleiche an einem Ort." },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Lass deinen dynamischen Tarif automatisch sparen",
      text: "Gladys ist kostenlos, Open Source und lässt sich von einem USB-Stick auf einem Mini-PC installieren. Hol dir die Börsenstrompreise und lass deine Geräte in den günstigsten Stunden laufen.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "EPEX-Spot-Integration", href: "/de/docs/integrations/external/epex-spot/" },
    },
  },
};

export const dynamicTariffFaqEn = [
  {
    question: "Does every supplier have to offer a dynamic tariff?",
    answer:
      "Yes. Since January 1, 2025, §41a EnWG requires every electricity supplier in Germany to offer a dynamic tariff to customers with a smart meter. Before that, only suppliers with more than 100,000 customers had to.",
  },
  {
    question: "When are tomorrow's prices known?",
    answer:
      "The day-ahead auction closes at noon, and the results are published from about 1 p.m. (CET). From then on, Gladys knows the cheapest hours of the next day.",
  },
  {
    question: "Who does a dynamic tariff pay off for?",
    answer:
      "Mainly for homes that can shift a large part of their consumption: an electric car, a heat pump, a battery, a water heater. If you mostly use electricity in the evening and can't change that, the savings are often small.",
  },
  {
    question: "Do I need a smart meter?",
    answer:
      "Yes, a dynamic tariff needs an intelligent metering system (intelligentes Messsystem). Since 2025 you can ask your metering operator to install one; the one-off fee is capped at €100.",
  },
  {
    question: "Can the price be negative?",
    answer:
      "The exchange price can: in 2025 it was negative for 573 hours in Germany. Because network fees, taxes and levies are added, the price you pay usually stays positive, but these hours are the cheapest of the year.",
  },
];

export const dynamicTariffFaqDe = [
  {
    question: "Muss jeder Stromanbieter einen dynamischen Tarif anbieten?",
    answer:
      "Ja. Seit dem 1. Januar 2025 verpflichtet §41a EnWG jeden Stromanbieter in Deutschland, Kundinnen und Kunden mit intelligentem Messsystem einen dynamischen Stromtarif anzubieten. Vorher galt das nur für Anbieter mit mehr als 100.000 Kunden.",
  },
  {
    question: "Wann stehen die Strompreise für morgen fest?",
    answer:
      "Die Day-Ahead-Auktion schließt um 12 Uhr, die Ergebnisse werden ab etwa 13 Uhr veröffentlicht. Ab dann kennt Gladys die günstigsten Stunden des nächsten Tages.",
  },
  {
    question: "Für wen lohnt sich ein dynamischer Stromtarif?",
    answer:
      "Vor allem für Haushalte, die einen großen Teil ihres Verbrauchs verschieben können: E-Auto, Wärmepumpe, Batteriespeicher, Warmwasserbereitung. Wer Strom vor allem abends braucht und das nicht ändern kann, spart oft wenig.",
  },
  {
    question: "Brauche ich ein Smart Meter?",
    answer:
      "Ja, ein dynamischer Tarif setzt ein intelligentes Messsystem voraus. Seit 2025 kannst du den Einbau bei deinem Messstellenbetreiber beantragen; das einmalige Entgelt ist auf 100 € begrenzt.",
  },
  {
    question: "Kann der Strompreis negativ werden?",
    answer:
      "Der Börsenpreis schon: 2025 war er in Deutschland in 573 Stunden negativ. Da Netzentgelte, Steuern und Umlagen dazukommen, bleibt dein Endpreis meist positiv, aber diese Stunden sind die günstigsten des Jahres.",
  },
];

export default dynamicTariffContent;
