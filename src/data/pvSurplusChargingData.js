// Content for the "PV-Überschussladen" page (Germany): charging an EV with
// solar surplus. Facts, checked in November 2026:
// - Minimum charging current 6 A (IEC 61851): about 1.4 kW on one phase,
//   4.1 kW on three phases; 1p/3p switching lets surplus charging start
//   around 1.4 kW (docs.evcc.io, solar charging).
// - HTW Berlin, Bergner 2026 "PV-Überschussladen in der Praxis" (730 homes,
//   Fronius field data): median 53% of EV charging from solar; households
//   charging in the daytime above 60%, evening chargers below 30%; dynamic
//   surplus charging adds about 25 percentage points over charging at full
//   power, a home battery about 9.
// - EEG feed-in tariff for new systems up to 10 kWp with partial feed-in:
//   7.70 ct/kWh for commissioning from Aug 1 to Dec 31, 2026
//   (bundesnetzagentur.de). The rules from 2027 (EEG reform) were still being
//   decided in November 2026: no figure for 2027 on the page.
// - BDEW Strompreisanalyse 10/2026: average household price 37.3 ct/kWh.
// - §14a EnWG: wallboxes above 4.2 kW commissioned since 2024 are
//   controllable devices with reduced network fees; the grid operator may
//   throttle them, never below 4.2 kW.
// - evcc: open source (MIT), surplus charging, dynamic tariffs, 1p/3p
//   switching; many commercial wallboxes need a sponsor token.
// Gladys angle: the evcc integration (modes, limits, "charging finished"
// with solar share), wallbox integrations with a charging-current command
// (go-e, Fronius Wattpilot) and solar modes (Wattpilot Eco, myenergi zappi),
// inverter integrations (grid export), car integrations (battery level).

const pvSurplusChargingContent = {
  en: {
    meta: {
      title: "PV Surplus Charging: Charge Your EV with Solar",
      description:
        "Feeding in pays 7.7 ct/kWh, buying costs about 37 ct. How solar surplus charging works, why 1.4 kW matters, and how to set it up with evcc, your wallbox and Gladys.",
    },
    screenshotCaption:
      "Solar production, house consumption and the wallbox in Gladys, with scenes that switch the charging mode on their own.",
    hero: {
      title: "PV surplus charging: charge your car with your own solar power",
      subtitle:
        "With surplus charging (PV-Überschussladen), your wallbox only uses the solar power your home doesn't need. It's the most effective way to raise the share of solar in your car, and it's easy to automate.",
      intro: [
        "A kWh fed into the grid earns a new small system 7.70 ct (for systems commissioned in the second half of 2026), while a kWh bought from the grid costs an average household about 37 ct. Every kWh of surplus that goes into your car instead of the grid is worth the difference.",
        "In practice it works: in a 2026 field study of 730 homes, HTW Berlin found that half of EV charging came from solar (median 53%), and that dynamic surplus charging adds about 25 percentage points compared with charging at full power. A home battery added only about 9.",
      ],
      primaryCta: { label: "Connect evcc to Gladys", href: "/docs/integrations/external/evcc/" },
      secondaryCta: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    problem: {
      title: "How surplus charging works",
      intro: "The principles:",
      points: [
        "A meter measures your solar production and your home's consumption. What's left over, the surplus, goes to the car instead of the grid.",
        "The wallbox adjusts the charging current to the surplus, continuously. A car needs at least 6 A to charge: about 1.4 kW on one phase, 4.1 kW on three phases.",
        "A wallbox that switches between one and three phases can start charging from about 1.4 kW of surplus, on cloudy days and in winter too.",
        "Modes let you choose: solar only, a minimum current plus solar, or fast charging when you need the car.",
        "A wallbox above 4.2 kW installed since 2024 counts as a controllable device under §14a EnWG: reduced network fees in exchange for the grid operator being allowed to throttle it, never below 4.2 kW.",
      ],
      outro:
        "Surplus charging pays off most if the car is parked at home during the day: in the HTW study, households charging in the daytime exceeded 60% solar, those charging in the evening stayed below 30%.",
    },
    comparison: {
      title: "Surplus charging or charging right away?",
      intro: "The two ways to charge at home:",
      cols: { feature: "", gladys: "Surplus charging", other: "Charging at full power" },
      rows: [
        { feature: "Solar share", gladys: "About 25 points higher (HTW Berlin, 2026)", other: "Whatever happens to be produced while charging" },
        { feature: "Charging speed", gladys: "Follows the sun, from about 1.4 kW", other: "Maximum, for example 11 kW" },
        { feature: "What you need", gladys: "A meter that sees the surplus, a controllable wallbox, software like evcc", other: "Just the wallbox" },
        { feature: "Best for", gladys: "A car at home during the day, flexible charging", other: "When you need a full battery quickly" },
      ],
      outro:
        "Most setups combine both: solar mode by default, and fast charging with one tap when you need it.",
    },
    features: {
      title: "What Gladys adds",
      intro: "evcc or your wallbox regulates the current; Gladys orchestrates the rest:",
      cards: [
        {
          icon: "🚗",
          title: "evcc in your smart home",
          text: "Gladys follows evcc live (solar, home, grid, battery, cars), switches the mode (Off, Solar, Min + solar, Fast) and sets charge limits.",
          href: "/docs/integrations/external/evcc/",
        },
        {
          icon: "🔌",
          title: "Your wallbox",
          text: "go-e, Fronius Wattpilot, Easee, KEBA, myenergi zappi and more. On go-e and Wattpilot, a scene can set the charging current from 6 A.",
          href: "/docs/integrations/external/go-e-charger/",
        },
        {
          icon: "☀️",
          title: "Your inverter",
          text: "Fronius, SMA, Kostal, Huawei, SolarEdge and others, mostly on the local network: production, consumption and the power you feed in.",
          href: "/docs/integrations/external/fronius/",
        },
        {
          icon: "🔋",
          title: "Your car's battery",
          text: "Volkswagen ID., BMW and MINI, Škoda: read the battery level and plan the charge around it.",
          href: "/docs/integrations/external/volkswagen-id/",
        },
        {
          icon: "🌤️",
          title: "Forecast and prices",
          text: "With a solar forecast and exchange prices, a scene chooses between solar mode and charging in the cheapest night hours.",
          href: "/docs/integrations/external/open-meteo-forecast-solar/",
        },
        {
          icon: "📊",
          title: "Know your solar share",
          text: "When a charge ends, Gladys gets the energy charged and its solar share from evcc, to send you in a message.",
          href: "/docs/integrations/external/evcc/",
        },
      ],
    },
    how: {
      title: "Getting started",
      intro: "A typical setup:",
      points: [
        "Make sure your inverter or a meter measures your grid exchange: surplus charging needs to know what you feed in.",
        "Set up the regulation: evcc (open source, many wallboxes, some need a sponsor token) or your wallbox's own solar mode.",
        "Connect evcc, your wallbox and your inverter to Gladys, and your car if it's supported.",
        "Create scenes: switch to fast charging when the battery is too low for tomorrow, or to solar mode on sunny days.",
        "Combine with a dynamic tariff: on days without sun, charge in the cheapest hours of the night.",
      ],
      outro: "Gladys is free and open source, and runs on your own hardware.",
    },
    solution: {
      title: "Why a smart home on top of evcc?",
      paragraphs: [
        "evcc and the solar modes of wallboxes do the fine regulation very well. What they don't see is the rest of your home: the heat pump, the dishwasher, the weather forecast, your calendar, the price of electricity tomorrow.",
        "Gladys Assistant brings all of it into one place and runs your scenes locally, on a mini-PC or a Raspberry Pi at home. Most wallbox and inverter integrations talk to your devices on the local network, without a cloud.",
      ],
      link: { label: "Reduce your electricity bill →", href: "/home-energy-monitoring/" },
    },
    related: {
      title: "Go further",
      intro: "More energy guides:",
      links: [
        { label: "Dynamic electricity tariffs in Germany", href: "/dynamischer-stromtarif/", text: "Charge in the cheapest hours when the sun doesn't shine." },
        { label: "Balcony solar (Balkonkraftwerk)", href: "/balkonkraftwerk/", text: "The rules for plug-in solar, and how to use more of it." },
        { label: "Reduce your electricity bill", href: "/home-energy-monitoring/", text: "Track your consumption and act on the data." },
        { label: "All guides", href: "/guides/", text: "Every guide, tool and comparison in one place." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Charge your car with your own solar power",
      text: "Gladys is free, open source and installs on a mini-PC from a USB drive. Connect evcc, your wallbox and your inverter, and let your home decide when to charge.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "evcc integration", href: "/docs/integrations/external/evcc/" },
    },
  },

  de: {
    meta: {
      title: "PV-Überschussladen: E-Auto mit Solarstrom laden",
      description:
        "Einspeisen bringt 7,7 ct/kWh, Netzstrom kostet rund 37 ct. Wie PV-Überschussladen funktioniert, warum 1,4 kW zählen und wie du es mit evcc, Wallbox und Gladys einrichtest.",
    },
    screenshotCaption:
      "Solarerzeugung, Hausverbrauch und Wallbox in Gladys, mit Szenen, die den Lademodus von selbst umschalten.",
    hero: {
      title: "PV-Überschussladen: Lade dein E-Auto mit deinem eigenen Solarstrom",
      subtitle:
        "Beim Überschussladen nutzt deine Wallbox nur den Solarstrom, den dein Haus gerade nicht braucht. So steigerst du den Solaranteil im Auto am wirksamsten, und es lässt sich leicht automatisieren.",
      intro: [
        "Eine eingespeiste kWh bringt einer neuen kleinen Anlage 7,70 ct (bei Inbetriebnahme im zweiten Halbjahr 2026), während eine kWh aus dem Netz einen Durchschnittshaushalt rund 37 ct kostet. Jede kWh Überschuss, die ins Auto statt ins Netz fließt, ist die Differenz wert.",
        "Und es funktioniert in der Praxis: In einer Feldstudie mit 730 Haushalten hat die HTW Berlin 2026 festgestellt, dass die Hälfte des Ladestroms aus der eigenen PV kam (Median 53 %) und dass dynamisches Überschussladen rund 25 Prozentpunkte mehr bringt als Laden mit voller Leistung. Ein Heimspeicher brachte nur etwa 9.",
      ],
      primaryCta: { label: "evcc mit Gladys verbinden", href: "/de/docs/integrations/external/evcc/" },
      secondaryCta: { label: "Stromrechnung senken →", href: "/de/home-energy-monitoring/" },
    },
    problem: {
      title: "So funktioniert Überschussladen",
      intro: "Die Grundlagen:",
      points: [
        "Ein Zähler misst deine Solarerzeugung und den Verbrauch deines Hauses. Was übrig bleibt, der Überschuss, fließt ins Auto statt ins Netz.",
        "Die Wallbox passt den Ladestrom laufend an den Überschuss an. Ein Auto braucht mindestens 6 A zum Laden: etwa 1,4 kW einphasig, 4,1 kW dreiphasig.",
        "Eine Wallbox mit Phasenumschaltung (1p/3p) kann schon ab etwa 1,4 kW Überschuss laden, auch an bewölkten Tagen und im Winter.",
        "Lademodi lassen dich wählen: nur Solar, ein Mindeststrom plus Solar oder Schnellladen, wenn du das Auto brauchst.",
        "Eine Wallbox über 4,2 kW, die seit 2024 installiert wurde, ist eine steuerbare Verbrauchseinrichtung nach §14a EnWG: reduzierte Netzentgelte, dafür darf der Netzbetreiber sie drosseln, aber nie unter 4,2 kW.",
      ],
      outro:
        "Überschussladen lohnt sich vor allem, wenn das Auto tagsüber zu Hause steht: In der HTW-Studie kamen Haushalte, die tagsüber laden, auf über 60 % Solaranteil, Abendlader blieben unter 30 %.",
    },
    comparison: {
      title: "Überschussladen oder sofort laden?",
      intro: "Die zwei Arten, zu Hause zu laden:",
      cols: { feature: "", gladys: "Überschussladen", other: "Laden mit voller Leistung" },
      rows: [
        { feature: "Solaranteil", gladys: "Rund 25 Prozentpunkte höher (HTW Berlin, 2026)", other: "Nur, was zufällig während des Ladens erzeugt wird" },
        { feature: "Ladegeschwindigkeit", gladys: "Folgt der Sonne, ab etwa 1,4 kW", other: "Maximal, zum Beispiel 11 kW" },
        { feature: "Was du brauchst", gladys: "Einen Zähler, der den Überschuss sieht, eine steuerbare Wallbox, Software wie evcc", other: "Nur die Wallbox" },
        { feature: "Ideal für", gladys: "Ein Auto, das tagsüber zu Hause steht, flexibles Laden", other: "Wenn der Akku schnell voll sein muss" },
      ],
      outro:
        "Die meisten Setups kombinieren beides: standardmäßig Solarmodus und Schnellladen mit einem Tipp, wenn es eilt.",
    },
    features: {
      title: "Was Gladys ergänzt",
      intro: "evcc oder deine Wallbox regelt den Strom, Gladys orchestriert den Rest:",
      cards: [
        {
          icon: "🚗",
          title: "evcc im Smart Home",
          text: "Gladys folgt evcc live (Solar, Haus, Netz, Speicher, Fahrzeuge), schaltet den Modus (Aus, Solar, Min + Solar, Schnell) und setzt Ladelimits.",
          href: "/de/docs/integrations/external/evcc/",
        },
        {
          icon: "🔌",
          title: "Deine Wallbox",
          text: "go-e, Fronius Wattpilot, Easee, KEBA, myenergi zappi und mehr. Bei go-e und Wattpilot kann eine Szene den Ladestrom ab 6 A setzen.",
          href: "/de/docs/integrations/external/go-e-charger/",
        },
        {
          icon: "☀️",
          title: "Dein Wechselrichter",
          text: "Fronius, SMA, Kostal, Huawei, SolarEdge und andere, meist im lokalen Netz: Erzeugung, Verbrauch und Einspeisung.",
          href: "/de/docs/integrations/external/fronius/",
        },
        {
          icon: "🔋",
          title: "Der Akku deines Autos",
          text: "Volkswagen ID., BMW und MINI, Škoda: Lies den Ladestand aus und plane das Laden danach.",
          href: "/de/docs/integrations/external/volkswagen-id/",
        },
        {
          icon: "🌤️",
          title: "Prognose und Preise",
          text: "Mit Solarprognose und Börsenstrompreisen entscheidet eine Szene zwischen Solarmodus und Laden in den günstigsten Nachtstunden.",
          href: "/de/docs/integrations/external/open-meteo-forecast-solar/",
        },
        {
          icon: "📊",
          title: "Deinen Solaranteil kennen",
          text: "Wenn ein Ladevorgang endet, bekommt Gladys von evcc die geladene Energie und ihren Solaranteil, zum Beispiel für eine Nachricht.",
          href: "/de/docs/integrations/external/evcc/",
        },
      ],
    },
    how: {
      title: "So legst du los",
      intro: "Ein typisches Setup:",
      points: [
        "Stelle sicher, dass dein Wechselrichter oder ein Zähler deinen Netzbezug und deine Einspeisung misst: Überschussladen muss wissen, was du einspeist.",
        "Richte die Regelung ein: evcc (Open Source, viele Wallboxen, manche brauchen ein Sponsor-Token) oder den Solarmodus deiner Wallbox.",
        "Verbinde evcc, deine Wallbox und deinen Wechselrichter mit Gladys, und dein Auto, wenn es unterstützt wird.",
        "Erstelle Szenen: auf Schnellladen umschalten, wenn der Akku für morgen zu leer ist, oder auf Solarmodus an sonnigen Tagen.",
        "Kombiniere es mit einem dynamischen Stromtarif: An Tagen ohne Sonne lädst du in den günstigsten Nachtstunden.",
      ],
      outro: "Gladys ist kostenlos, Open Source und läuft auf deiner eigenen Hardware.",
    },
    solution: {
      title: "Warum ein Smart Home zusätzlich zu evcc?",
      paragraphs: [
        "evcc und die Solarmodi der Wallboxen übernehmen die Feinregelung sehr gut. Was sie nicht sehen, ist der Rest deines Zuhauses: die Wärmepumpe, die Spülmaschine, die Wetterprognose, dein Kalender, der Strompreis von morgen.",
        "Gladys Assistant bringt all das an einem Ort zusammen und führt deine Szenen lokal aus, auf einem Mini-PC oder Raspberry Pi bei dir zu Hause. Die meisten Wallbox- und Wechselrichter-Integrationen sprechen direkt im lokalen Netz mit deinen Geräten, ohne Cloud.",
      ],
      link: { label: "Stromrechnung senken →", href: "/de/home-energy-monitoring/" },
    },
    related: {
      title: "Weiterlesen",
      intro: "Mehr Ratgeber rund um Energie:",
      links: [
        { label: "Dynamischer Stromtarif", href: "/de/dynamischer-stromtarif/", text: "In den günstigsten Stunden laden, wenn die Sonne nicht scheint." },
        { label: "Balkonkraftwerk", href: "/de/balkonkraftwerk/", text: "Die Regeln für Steckersolargeräte und wie du mehr davon selbst nutzt." },
        { label: "Stromrechnung senken", href: "/de/home-energy-monitoring/", text: "Behalte deinen Verbrauch im Blick und handle auf Basis der Daten." },
        { label: "Alle Ratgeber", href: "/de/guides/", text: "Alle Ratgeber, Tools und Vergleiche an einem Ort." },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Lade dein Auto mit deinem eigenen Solarstrom",
      text: "Gladys ist kostenlos, Open Source und lässt sich von einem USB-Stick auf einem Mini-PC installieren. Verbinde evcc, deine Wallbox und deinen Wechselrichter und lass dein Zuhause entscheiden, wann geladen wird.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "evcc-Integration", href: "/de/docs/integrations/external/evcc/" },
    },
  },
};

export const pvSurplusChargingFaqEn = [
  {
    question: "How much surplus do I need to start charging?",
    answer:
      "A car needs at least 6 A: about 1.4 kW on one phase and 4.1 kW on three phases. A wallbox that switches between one and three phases can start from about 1.4 kW of surplus.",
  },
  {
    question: "Is surplus charging worth it compared with feeding in?",
    answer:
      "Usually yes: a new small system gets 7.70 ct per kWh fed in (commissioning from August to December 2026), while grid electricity costs an average household about 37 ct per kWh. Each kWh of surplus in the car saves the difference.",
  },
  {
    question: "Do I need evcc?",
    answer:
      "No, but it's the most common open-source option: it regulates many wallboxes, switches phases and handles dynamic tariffs. Some wallboxes have their own solar mode (Fronius Wattpilot Eco, myenergi zappi). Some commercial wallboxes need an evcc sponsor token.",
  },
  {
    question: "Does a home battery help more?",
    answer:
      "Less than you'd think for the car: in HTW Berlin's 2026 field study, dynamic surplus charging raised the EV's solar share by about 25 percentage points, a home battery by about 9.",
  },
  {
    question: "What is §14a EnWG for wallboxes?",
    answer:
      "A wallbox above 4.2 kW installed since 2024 is a controllable device: you get reduced network fees, and in exchange the grid operator may throttle it when the grid is overloaded, never below 4.2 kW.",
  },
];

export const pvSurplusChargingFaqDe = [
  {
    question: "Wie viel Überschuss brauche ich, um zu laden?",
    answer:
      "Ein Auto braucht mindestens 6 A: etwa 1,4 kW einphasig und 4,1 kW dreiphasig. Eine Wallbox mit Phasenumschaltung kann schon ab etwa 1,4 kW Überschuss laden.",
  },
  {
    question: "Lohnt sich Überschussladen im Vergleich zur Einspeisung?",
    answer:
      "Meistens ja: Eine neue kleine Anlage bekommt 7,70 ct pro eingespeister kWh (Inbetriebnahme von August bis Dezember 2026), während Netzstrom einen Durchschnittshaushalt rund 37 ct pro kWh kostet. Jede kWh Überschuss im Auto spart die Differenz.",
  },
  {
    question: "Brauche ich evcc?",
    answer:
      "Nein, aber es ist die verbreitetste Open-Source-Lösung: Es regelt viele Wallboxen, schaltet Phasen um und berücksichtigt dynamische Tarife. Manche Wallboxen haben einen eigenen Solarmodus (Fronius Wattpilot Eco, myenergi zappi). Einige kommerzielle Wallboxen brauchen ein evcc-Sponsor-Token.",
  },
  {
    question: "Bringt ein Heimspeicher mehr?",
    answer:
      "Fürs Auto weniger als gedacht: In der Feldstudie der HTW Berlin von 2026 steigerte dynamisches Überschussladen den Solaranteil um rund 25 Prozentpunkte, ein Heimspeicher um etwa 9.",
  },
  {
    question: "Was bedeutet §14a EnWG für Wallboxen?",
    answer:
      "Eine Wallbox über 4,2 kW, die seit 2024 installiert wurde, ist eine steuerbare Verbrauchseinrichtung: Du bekommst reduzierte Netzentgelte, dafür darf der Netzbetreiber sie bei Netzüberlastung drosseln, aber nie unter 4,2 kW.",
  },
];

export default pvSurplusChargingContent;
