// Content for the "Balkonkraftwerk" page (Germany): plug-in balcony solar.
// Facts, checked in November 2026:
// - Solarpaket I (May 16, 2024): 800 VA inverter output per meter, 2,000 W of
//   modules, registration only in the Marktstammdatenregister, an old meter
//   may run backwards until it is replaced (bundesnetzagentur.de, Balkon page).
// - Since October 17, 2024: apartment owners can demand the installation
//   (§20 WEG), the community only decides how; tenants have a claim under
//   §554 BGB, which the landlord can only refuse if it is unreasonable
//   ("unzumutbar"), not for purely visual reasons (dejure.org, verbraucherzentrale.de).
// - DIN VDE V 0126-95 (December 2025): Schuko plug allowed up to 960 Wp of
//   modules (800 W output); 961–2,000 Wp needs a Wieland energy socket.
//   Devices with built-in storage are outside this standard.
// - 0% VAT on modules, inverters and storage (§12 Abs. 3 UStG), no end date.
// - ADAC (Sept 2026) with the HTW Berlin simulator: 2 kWp + 800 W inverter,
//   south, no shade: 1,564 kWh/year, 57% used at home without a battery
//   (4,000 kWh household), €335/year at 35 ct/kWh; 87% and €509 with 2.5 kWh
//   of storage. Verbraucherzentrale: a vertical balcony mount yields much less.
// - Surplus fed into the grid is not paid (unentgeltliche Abnahme).
// - Balcony systems are exempt from the Solarspitzengesetz 60% limit.
// - Storage: the 800 VA limit applies to the output to the house grid; the
//   rules for storage were still moving in 2026 (VDE-AR-N 4105:2026-03, EEG
//   draft): keep the wording general.
// Gladys angle: OpenDTU (Hoymiles, with power limit), APsystems EZ1, Anker
// SOLIX (output power), Zendure, Shelly meters, solar forecasts, scenes.

const balkonkraftwerkContent = {
  en: {
    meta: {
      title: "Balcony Solar in Germany (Balkonkraftwerk): Rules & Tips",
      description:
        "800 W, 2,000 Wp, Schuko plug, tenants' rights: the German rules for plug-in solar in 2026, and how to use more of your own power instead of giving it to the grid.",
    },
    screenshotCaption:
      "Your balcony solar production in Gladys, next to your home's consumption, with scenes that run appliances when the sun is out.",
    hero: {
      title: "Balcony solar in Germany: the rules, and how to get the most out of it",
      subtitle:
        "A Balkonkraftwerk only saves money on the electricity you use yourself: what you feed into the grid isn't paid. Here are the 2026 rules, and how to shift your consumption to sunny hours, automatically.",
      intro: [
        "Plug-in solar devices (Balkonkraftwerke or Steckersolargeräte) have become very simple in Germany: since 2024, up to 800 W of inverter output and 2,000 W of modules, a single registration in the Marktstammdatenregister, and no VAT on the hardware.",
        "The catch: surplus electricity fed into the grid isn't paid. Without a battery, a typical household uses a bit more than half of its balcony solar power (57% in an ADAC simulation with HTW Berlin's tool). Every kWh you move to the sunny hours is a kWh you no longer buy at full price.",
      ],
      primaryCta: { label: "See your production in Gladys", href: "/docs/integrations/external/hoymiles-opendtu/" },
      secondaryCta: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    problem: {
      title: "The rules in 2026",
      intro: "What applies to plug-in solar in Germany:",
      points: [
        "Up to 800 VA of inverter output per meter and up to 2,000 W of module power (Solarpaket I, since May 2024).",
        "You only register it in the Marktstammdatenregister: no separate notification to the grid operator. An old meter may run backwards until it's replaced.",
        "Since December 2025, the VDE product standard allows the normal Schuko plug up to 960 W of modules. Above that, up to 2,000 W, you need a special energy socket.",
        "Tenants and apartment owners have a right to install one since October 2024. A landlord can only refuse if it's unreasonable, not for looks alone.",
        "No VAT on modules, inverters and storage. Surplus fed into the grid isn't paid, and balcony systems are exempt from the Solarspitzengesetz feed-in limits.",
      ],
      outro:
        "With a battery, the 800 VA limit still applies to what goes into your home's grid, and the rules for storage were still evolving in 2026: check the manufacturer's notes and the Verbraucherzentrale.",
    },
    comparison: {
      title: "What a balcony system yields",
      intro: "Figures for a 2,000 Wp / 800 W system facing south without shade, in a 4,000 kWh household (ADAC, September 2026, HTW Berlin simulator):",
      cols: { feature: "", gladys: "Without battery", other: "With a 2.5 kWh battery" },
      rows: [
        { feature: "Yearly production", gladys: "About 1,560 kWh", other: "About 1,560 kWh" },
        { feature: "Used at home", gladys: "57%", other: "87%" },
        { feature: "Savings per year (35 ct/kWh)", gladys: "About €335", other: "About €509" },
      ],
      outro:
        "A vertical mount on a balcony railing produces much less. And every kWh you use instead of feeding it in raises the savings, battery or not: that's where automation helps.",
    },
    features: {
      title: "Use more of your own solar power",
      intro: "With Gladys, your appliances follow the sun:",
      cards: [
        {
          icon: "☀️",
          title: "See your production",
          text: "Hoymiles through OpenDTU, APsystems EZ1, Anker SOLIX or Zendure: your balcony production live and in your energy history.",
          href: "/docs/integrations/external/hoymiles-opendtu/",
        },
        {
          icon: "⚡",
          title: "Know when you feed in",
          text: "A Shelly energy meter measures what your home takes from and returns to the grid, so a scene knows when there's surplus.",
          href: "/docs/integrations/external/shelly/",
        },
        {
          icon: "🧺",
          title: "Run appliances in the sun",
          text: "Start the dishwasher or the washing machine on a smart plug when production is high, instead of in the evening.",
        },
        {
          icon: "🌤️",
          title: "Plan with the forecast",
          text: "A free solar forecast tells you how much you'll produce today and tomorrow, and triggers a scene when the estimated power crosses a threshold.",
          href: "/docs/integrations/external/open-meteo-forecast-solar/",
        },
        {
          icon: "🔋",
          title: "Drive your battery",
          text: "With an Anker SOLIX Solarbank 2 or 3, Gladys can change the usage mode and the output power to your home.",
          href: "/docs/integrations/external/anker-solix/",
        },
        {
          icon: "🎚️",
          title: "Set the power limit",
          text: "With OpenDTU, a scene can change your Hoymiles inverter's power limit, in watts or percent.",
          href: "/docs/integrations/external/hoymiles-opendtu/",
        },
      ],
    },
    how: {
      title: "Getting started",
      intro: "In a few steps:",
      points: [
        "Register your system in the Marktstammdatenregister once it's running.",
        "Connect your inverter or battery to Gladys (OpenDTU, APsystems, Anker SOLIX, Zendure…) to see your production.",
        "Add a meter that sees your grid exchange (for example a Shelly Pro 3EM), so Gladys knows when you have surplus.",
        "Put your flexible appliances on smart plugs, and create a scene that starts them when production is high.",
        "Add a solar forecast to plan the day: wash today or tomorrow?",
      ],
      outro: "Gladys is free and open source, and runs on your own hardware.",
    },
    solution: {
      title: "Why automate it",
      paragraphs: [
        "A balcony system produces most around midday, when many households are out. Without a battery, that power goes to the grid for free. Automation shifts what can wait (dishwasher, washing machine, water heater, charging) to those hours without you thinking about it.",
        "Gladys Assistant runs these scenes locally, on a mini-PC or a Raspberry Pi at home. Most solar integrations talk to your devices on your local network, without a cloud.",
      ],
      link: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    related: {
      title: "Go further",
      intro: "More energy guides:",
      links: [
        { label: "Dynamic electricity tariffs in Germany", href: "/dynamischer-stromtarif/", text: "Combine your solar power with cheap exchange-price hours." },
        { label: "Charge your EV with solar surplus", href: "/pv-ueberschussladen/", text: "When the balcony isn't enough: surplus charging with a rooftop system." },
        { label: "Reduce your electricity bill", href: "/home-energy-monitoring/", text: "Track your consumption and act on the data." },
        { label: "All guides", href: "/guides/", text: "Every guide, tool and comparison in one place." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Get more out of your balcony solar",
      text: "Gladys is free, open source and installs on a mini-PC from a USB drive. See your production and run your appliances when the sun is out.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Energy monitoring", href: "/home-energy-monitoring/" },
    },
  },

  de: {
    meta: {
      title: "Balkonkraftwerk 2026: Regeln, Ertrag & Eigenverbrauch",
      description:
        "800 Watt, 2.000 Wp, Schuko-Stecker, Recht für Mieter: die Regeln für Balkonkraftwerke 2026 und wie du mehr von deinem Solarstrom selbst nutzt, statt ihn zu verschenken.",
    },
    screenshotCaption:
      "Die Erzeugung deines Balkonkraftwerks in Gladys neben dem Verbrauch deines Zuhauses, mit Szenen, die Geräte bei Sonne starten.",
    hero: {
      title: "Balkonkraftwerk: die Regeln, und wie du das Beste herausholst",
      subtitle:
        "Ein Balkonkraftwerk spart nur bei dem Strom, den du selbst verbrauchst: Was ins Netz fließt, wird nicht vergütet. Hier sind die Regeln für 2026 und wie du deinen Verbrauch automatisch in die Sonnenstunden legst.",
      intro: [
        "Steckersolargeräte sind in Deutschland sehr einfach geworden: Seit 2024 sind bis zu 800 W Wechselrichterleistung und 2.000 W Modulleistung erlaubt, die Anmeldung erfolgt nur noch im Marktstammdatenregister, und auf die Hardware fällt keine Mehrwertsteuer an.",
        "Der Haken: Überschüssiger Strom, der ins Netz fließt, wird nicht bezahlt. Ohne Speicher nutzt ein typischer Haushalt nur gut die Hälfte seines Balkonstroms selbst (57 % in einer Simulation des ADAC mit dem Rechner der HTW Berlin). Jede kWh, die du in die Sonnenstunden verschiebst, musst du nicht mehr zum vollen Preis kaufen.",
      ],
      primaryCta: { label: "Erzeugung in Gladys sehen", href: "/de/docs/integrations/external/hoymiles-opendtu/" },
      secondaryCta: { label: "Stromrechnung senken →", href: "/de/home-energy-monitoring/" },
    },
    problem: {
      title: "Die Regeln 2026",
      intro: "Das gilt für Steckersolargeräte in Deutschland:",
      points: [
        "Bis zu 800 VA Wechselrichterleistung pro Zähler und bis zu 2.000 W Modulleistung (Solarpaket I, seit Mai 2024).",
        "Du meldest die Anlage nur im Marktstammdatenregister an, eine separate Anmeldung beim Netzbetreiber entfällt. Ein alter Zähler darf rückwärts laufen, bis er getauscht wird.",
        "Seit Dezember 2025 erlaubt die VDE-Produktnorm den normalen Schuko-Stecker bis 960 W Modulleistung. Darüber, bis 2.000 W, brauchst du eine Energiesteckdose.",
        "Mieter und Wohnungseigentümer haben seit Oktober 2024 einen Anspruch auf ein Balkonkraftwerk. Vermieter dürfen nur ablehnen, wenn es unzumutbar ist, nicht allein aus optischen Gründen.",
        "Keine Mehrwertsteuer auf Module, Wechselrichter und Speicher. Eingespeister Überschuss wird nicht vergütet, und Balkonkraftwerke sind von den Einspeisegrenzen des Solarspitzengesetzes ausgenommen.",
      ],
      outro:
        "Mit Speicher gilt die 800-VA-Grenze weiterhin für das, was in dein Hausnetz fließt, und die Regeln für Speicher waren 2026 noch in Bewegung: Prüfe die Hinweise des Herstellers und der Verbraucherzentrale.",
    },
    comparison: {
      title: "Was ein Balkonkraftwerk bringt",
      intro: "Werte für eine Anlage mit 2.000 Wp und 800 W, nach Süden und ohne Verschattung, in einem Haushalt mit 4.000 kWh (ADAC, September 2026, Simulator der HTW Berlin):",
      cols: { feature: "", gladys: "Ohne Speicher", other: "Mit 2,5-kWh-Speicher" },
      rows: [
        { feature: "Jahresertrag", gladys: "Rund 1.560 kWh", other: "Rund 1.560 kWh" },
        { feature: "Selbst genutzt", gladys: "57 %", other: "87 %" },
        { feature: "Ersparnis pro Jahr (35 ct/kWh)", gladys: "Rund 335 €", other: "Rund 509 €" },
      ],
      outro:
        "Senkrecht am Balkongeländer montiert, erzeugt eine Anlage deutlich weniger. Und jede kWh, die du selbst nutzt statt einzuspeisen, erhöht die Ersparnis, mit oder ohne Speicher: Genau da hilft Automatisierung.",
    },
    features: {
      title: "Nutze mehr von deinem eigenen Solarstrom",
      intro: "Mit Gladys folgen deine Geräte der Sonne:",
      cards: [
        {
          icon: "☀️",
          title: "Erzeugung im Blick",
          text: "Hoymiles über OpenDTU, APsystems EZ1, Anker SOLIX oder Zendure: deine Balkonerzeugung live und im Energieverlauf.",
          href: "/de/docs/integrations/external/hoymiles-opendtu/",
        },
        {
          icon: "⚡",
          title: "Wissen, wann du einspeist",
          text: "Ein Shelly-Energiemessgerät misst, was dein Zuhause aus dem Netz bezieht und zurückspeist, damit eine Szene den Überschuss erkennt.",
          href: "/de/docs/integrations/external/shelly/",
        },
        {
          icon: "🧺",
          title: "Geräte bei Sonne starten",
          text: "Starte Spülmaschine oder Waschmaschine über eine smarte Steckdose, wenn die Erzeugung hoch ist, statt am Abend.",
        },
        {
          icon: "🌤️",
          title: "Mit der Prognose planen",
          text: "Eine kostenlose Solarprognose zeigt, wie viel du heute und morgen erzeugst, und startet eine Szene, wenn die geschätzte Leistung eine Schwelle überschreitet.",
          href: "/de/docs/integrations/external/open-meteo-forecast-solar/",
        },
        {
          icon: "🔋",
          title: "Den Speicher steuern",
          text: "Mit einer Anker SOLIX Solarbank 2 oder 3 kann Gladys den Betriebsmodus und die Ausgangsleistung ins Hausnetz ändern.",
          href: "/de/docs/integrations/external/anker-solix/",
        },
        {
          icon: "🎚️",
          title: "Das Leistungslimit setzen",
          text: "Mit OpenDTU kann eine Szene das Leistungslimit deines Hoymiles-Wechselrichters in Watt oder Prozent ändern.",
          href: "/de/docs/integrations/external/hoymiles-opendtu/",
        },
      ],
    },
    how: {
      title: "So legst du los",
      intro: "In wenigen Schritten:",
      points: [
        "Melde deine Anlage nach der Inbetriebnahme im Marktstammdatenregister an.",
        "Verbinde deinen Wechselrichter oder Speicher mit Gladys (OpenDTU, APsystems, Anker SOLIX, Zendure …), um deine Erzeugung zu sehen.",
        "Ergänze ein Messgerät, das deinen Netzbezug sieht (zum Beispiel einen Shelly Pro 3EM), damit Gladys weiß, wann du Überschuss hast.",
        "Schließe flexible Geräte an smarte Steckdosen an und erstelle eine Szene, die sie bei hoher Erzeugung startet.",
        "Füge eine Solarprognose hinzu, um den Tag zu planen: heute waschen oder morgen?",
      ],
      outro: "Gladys ist kostenlos, Open Source und läuft auf deiner eigenen Hardware.",
    },
    solution: {
      title: "Warum automatisieren?",
      paragraphs: [
        "Ein Balkonkraftwerk erzeugt am meisten um die Mittagszeit, wenn viele Haushalte außer Haus sind. Ohne Speicher geht dieser Strom kostenlos ins Netz. Automatisierung verschiebt, was warten kann (Spülmaschine, Waschmaschine, Warmwasser, Laden), in diese Stunden, ohne dass du daran denken musst.",
        "Gladys Assistant führt diese Szenen lokal aus, auf einem Mini-PC oder Raspberry Pi bei dir zu Hause. Die meisten Solar-Integrationen sprechen direkt in deinem Netzwerk mit deinen Geräten, ohne Cloud.",
      ],
      link: { label: "Stromrechnung senken →", href: "/de/home-energy-monitoring/" },
    },
    related: {
      title: "Weiterlesen",
      intro: "Mehr Ratgeber rund um Energie:",
      links: [
        { label: "Dynamischer Stromtarif", href: "/de/dynamischer-stromtarif/", text: "Solarstrom mit günstigen Börsenstunden kombinieren." },
        { label: "PV-Überschussladen", href: "/de/pv-ueberschussladen/", text: "Wenn der Balkon nicht reicht: Überschussladen mit einer Dachanlage." },
        { label: "Stromrechnung senken", href: "/de/home-energy-monitoring/", text: "Behalte deinen Verbrauch im Blick und handle auf Basis der Daten." },
        { label: "Alle Ratgeber", href: "/de/guides/", text: "Alle Ratgeber, Tools und Vergleiche an einem Ort." },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Hol mehr aus deinem Balkonkraftwerk heraus",
      text: "Gladys ist kostenlos, Open Source und lässt sich von einem USB-Stick auf einem Mini-PC installieren. Sieh deine Erzeugung und lass deine Geräte laufen, wenn die Sonne scheint.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Energiemonitoring", href: "/de/home-energy-monitoring/" },
    },
  },
};

export const balkonkraftwerkFaqEn = [
  {
    question: "How much power can a balcony system have in Germany?",
    answer:
      "Up to 800 VA of inverter output per meter and up to 2,000 W of module power, since Solarpaket I came into force in May 2024.",
  },
  {
    question: "Can I use a normal Schuko plug?",
    answer:
      "Yes, up to 960 W of module power, according to the VDE product standard in force since December 2025. Between 961 and 2,000 W, you need a special energy socket (Wieland type).",
  },
  {
    question: "Can my landlord refuse a balcony system?",
    answer:
      "Since October 2024, tenants have a legal claim to install one (§554 BGB). The landlord can only refuse if it's unreasonable after weighing both sides' interests, not just for looks. Apartment owners can demand it too; the owners' community only decides how it's installed.",
  },
  {
    question: "Do I get paid for the electricity I feed in?",
    answer:
      "Usually not: surplus from a balcony system is taken by the grid without payment. That's why using as much as possible yourself, with automation or a battery, is what makes it pay off.",
  },
  {
    question: "Do I need to register it?",
    answer:
      "Yes, in the Marktstammdatenregister of the Bundesnetzagentur. Since 2024, a separate notification to the grid operator is no longer required.",
  },
];

export const balkonkraftwerkFaqDe = [
  {
    question: "Wie viel Leistung darf ein Balkonkraftwerk haben?",
    answer:
      "Bis zu 800 VA Wechselrichterleistung pro Zähler und bis zu 2.000 W Modulleistung, seit das Solarpaket I im Mai 2024 in Kraft getreten ist.",
  },
  {
    question: "Darf ich einen normalen Schuko-Stecker verwenden?",
    answer:
      "Ja, bis 960 W Modulleistung, laut der VDE-Produktnorm, die seit Dezember 2025 gilt. Zwischen 961 und 2.000 W brauchst du eine Energiesteckdose (Typ Wieland).",
  },
  {
    question: "Darf mein Vermieter ein Balkonkraftwerk ablehnen?",
    answer:
      "Seit Oktober 2024 haben Mieter einen gesetzlichen Anspruch (§554 BGB). Der Vermieter darf nur ablehnen, wenn es nach Abwägung der Interessen unzumutbar ist, nicht allein aus optischen Gründen. Wohnungseigentümer können es ebenfalls verlangen; die Gemeinschaft entscheidet nur über das Wie.",
  },
  {
    question: "Bekomme ich Geld für eingespeisten Strom?",
    answer:
      "In der Regel nicht: Überschuss aus einem Balkonkraftwerk wird ohne Vergütung abgenommen. Deshalb lohnt es sich, möglichst viel selbst zu nutzen, mit Automatisierung oder einem Speicher.",
  },
  {
    question: "Muss ich mein Balkonkraftwerk anmelden?",
    answer:
      "Ja, im Marktstammdatenregister der Bundesnetzagentur. Seit 2024 ist eine separate Anmeldung beim Netzbetreiber nicht mehr nötig.",
  },
];

export default balkonkraftwerkContent;
