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
          label: "Ontario electricity rates now",
          href: "/ontario-electricity-rates/",
          text: "The current Time-of-Use and Ultra-Low Overnight price, live.",
        },
        {
          label: "France's new off-peak hours",
          href: "/heures-creuses/",
          text: "What the heures creuses reform changes, and how to adapt.",
        },
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
          label: "Hydro-Québec Rate Flex D (Quebec)",
          href: "/hydro-quebec-flex-d/",
          text: "Automate Flex D peak events and track your savings with the Hydro-Québec integration.",
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
          label: "Heures creuses : ce qui change",
          href: "/heures-creuses/",
          text: "Ce que change la réforme des heures creuses, et comment s'adapter.",
        },
        {
          label: "Tarifs d'électricité en Ontario",
          href: "/ontario-electricity-rates/",
          text: "Le prix en cours selon la grille horaire de l'Ontario, en direct.",
        },
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
          label: "Tarif Flex D d'Hydro-Québec (Québec)",
          href: "/hydro-quebec-flex-d/",
          text: "Automatisez les pointes du Flex D et suivez vos économies avec l'intégration Hydro-Québec.",
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

  de: {
    meta: {
      title: "Stromverbrauch messen & Stromrechnung senken",
      description:
        "Miss den Stromverbrauch deines Zuhauses in Echtzeit, gesamt und pro Gerät, und senke deine Stromrechnung mit Automationen. Lokal, privat und Open Source.",
    },
    hero: {
      title: "Senke deine Stromrechnung mit Energiemonitoring",
      subtitle:
        "Sieh genau, wohin dein Strom fließt, in Echtzeit und pro Gerät, und lass dann die Automation fürs Sparen sorgen, alles lokal.",
      intro: [
        "Deine Stromrechnung ist meist eine Blackbox: eine Zahl pro Monat, ohne zu wissen, was sie in die Höhe treibt. Der erste Schritt zu weniger Kosten ist ganz einfach zu sehen, wohin deine Energie tatsächlich geht.",
        "Gladys Assistant macht dein Zuhause zu einem übersichtlichen Energie-Dashboard in Echtzeit, für das ganze Haus und Gerät für Gerät, und lässt dich das Sparen automatisieren. Alles läuft lokal auf deinem eigenen Rechner, deine Verbrauchsdaten bleiben also privat.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/de/docs/" },
      secondaryCta: {
        label: "Doku zum Energiemonitoring →",
        href: "/de/docs/integrations/energy-monitoring/",
      },
    },
    problem: {
      title: "Warum deine Stromrechnung eine Blackbox ist",
      intro:
        "Die meisten Haushalte haben kaum Einblick in ihren Energieverbrauch, und so ist es fast unmöglich, weniger auszugeben:",
      points: [
        "Du bekommst eine einzige Monatszahl, ohne zu wissen, welche Geräte dafür verantwortlich sind.",
        "Geräte im Standby, echte „Stromfresser“, treiben die Rechnung rund um die Uhr unbemerkt nach oben.",
        "Ein altes oder defektes Gerät kann viel mehr verbrauchen, als du denkst, und zwar ohne jede Warnung.",
        "Ohne Echtzeitdaten kannst du deinen Verbrauch nicht in günstigere Stunden verlagern.",
      ],
      outro: "Was du nicht misst, kannst du nicht senken. Der erste Schritt ist also Transparenz.",
    },
    see: {
      title: "Was du mit Gladys siehst",
      intro: "Gladys liefert dir ein detailliertes Live-Bild vom Energieverbrauch deines Zuhauses:",
      cards: [
        {
          icon: "⚡",
          title: "Verbrauch des ganzen Hauses",
          text: "Verfolge den Verbrauch deines gesamten Zuhauses in kWh, in Echtzeit und im Verlauf, über einen kompatiblen Energiezähler oder Sensor.",
        },
        {
          icon: "🔌",
          title: "Gerät für Gerät",
          text: "Ergänze smarte Steckdosen mit Strommessung (Zigbee, Shelly, Tuya…), um genau zu sehen, wie viel jedes Gerät zieht.",
        },
        {
          icon: "💶",
          title: "Verbrauch und Kosten",
          text: "Rechne kWh in Euro um, damit du die echten Kosten deiner Gewohnheiten siehst, nicht nur abstrakte Zahlen.",
        },
        {
          icon: "📈",
          title: "Echtzeit und Verlauf",
          text: "Live-Werte plus Diagramme über Tage, Wochen und Monate, um Trends und Auffälligkeiten zu erkennen.",
        },
        {
          icon: "🤖",
          title: "Ein wöchentlicher KI-Bericht",
          text: "Die KI von Gladys schickt dir jede Woche eine Zusammenfassung deines Verbrauchs, der Kosten, Trends und praktische Tipps.",
        },
        {
          icon: "🔔",
          title: "Benachrichtigungen",
          text: "Baue Szenen, die dich warnen, wenn der Verbrauch in die Höhe schießt oder ein Gerät versehentlich weiterläuft.",
        },
      ],
    },
    save: {
      title: "Wie Automation die Rechnung wirklich senkt",
      intro: "Transparenz ist Schritt eins. Danach kann dein Zuhause automatisch für dich sparen:",
      points: [
        "Standby-Verluste stoppen: Fernseher, Konsolen und Ladegeräte nachts oder beim Verlassen des Hauses ausschalten.",
        "Große Verbraucher (Waschmaschine, Warmwasserbereiter, E-Auto-Laden) in die Nebenzeiten verlagern.",
        "Clever heizen: die Heizung nach Anwesenheit und Uhrzeit planen, statt ein leeres Haus zu heizen.",
        "Bei ungewöhnlichem Verbrauch gewarnt werden, etwa bei einem vergessenen Heizlüfter oder einer Gefriertruhe, die aus dem Ruder läuft, bevor es teuer wird.",
        "Echte Tarifdaten nutzen, um große Geräte an den günstigsten Tagen laufen zu lassen (siehe unten).",
      ],
      outro: "Einmal eingerichtet, musst du nicht mehr daran denken: Das Sparen passiert von selbst.",
    },
    track: {
      title: "Dein ganzes Zuhause im Blick, lokal und privat",
      paragraphs: [
        "Um dein ganzes Zuhause zu überwachen, brauchst du ein Gerät, das den Verbrauch in kWh meldet. Die Integration Energiemonitoring von Gladys funktioniert mit smarten Steckdosen mit Strommessung und Energiesensoren, und in Frankreich mit dem Linky-Stromzähler über einen Lixee ZLinky (Zigbee), der minütlich präzise Werte liefert.",
        "Wenn du in Frankreich wohnst, holt die Enedis-Integration (über Gladys Plus) zusätzlich deinen offiziellen Linky-Verbrauchsverlauf, und Gladys kann die Tagesfarben von EDF Tempo auslesen, damit deine Automationen große Geräte an den günstigsten Tagen laufen lassen.",
        "In jedem Fall liegen deine Energiedaten auf deinem eigenen Rechner, in deinem lokalen Netzwerk, ohne Cloud-Zwang und ohne Datenverkauf. Der Kern von Gladys ist kostenlos und Open Source; Enedis und die gehostete KI sind optionale Funktionen von Gladys Plus.",
      ],
      link: {
        label: "Zur Integration Energiemonitoring →",
        href: "/de/docs/integrations/energy-monitoring/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Richte es ein oder sieh dir an, wie Energie in ein lokales Smart Home passt:",
      links: [
        {
          label: "Aktuelle Strompreise in Ontario",
          href: "/de/ontario-electricity-rates/",
          text: "Der aktuelle Time-of-Use- und Ultra-Low-Overnight-Preis, live.",
        },
        {
          label: "Neue Nebenzeiten in Frankreich",
          href: "/de/heures-creuses/",
          text: "Was die Reform der „heures creuses“ ändert und wie du dich anpasst.",
        },
        {
          label: "Energiemonitoring in Gladys",
          href: "/de/docs/integrations/energy-monitoring/",
          text: "Verfolge den Verbrauch deines Zuhauses in kWh mit einem kompatiblen Sensor oder einer smarten Steckdose.",
        },
        {
          label: "Enedis & Linky (Frankreich)",
          href: "/de/docs/integrations/enedis/",
          text: "Hol dir deinen offiziellen Linky-Verbrauchsverlauf über Gladys Plus in Gladys.",
        },
        {
          label: "Hydro-Québec-Tarif Flex D (Québec)",
          href: "/de/hydro-quebec-flex-d/",
          text: "Automatisiere Flex-D-Spitzenereignisse und verfolge deine Ersparnisse mit der Hydro-Québec-Integration.",
        },
        {
          label: "Der wöchentliche KI-Bericht",
          href: "/de/ai-smart-home/",
          text: "Erhalte jede Woche eine KI-Zusammenfassung deines Verbrauchs, der Kosten und Trends.",
        },
        {
          label: "Ein lokales Smart Home bauen",
          href: "/de/local-smart-home/",
          text: "Das große Ganze: ein privates, lokales Smart Home auf Basis offener Standards.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Fang an, bei der Stromrechnung zu sparen",
      text: "Gladys ist kostenlos, Open Source und lokal zuerst. Überwache den Energieverbrauch deines Zuhauses, automatisiere das Sparen und behalte deine Daten bei dir.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Gladys Plus entdecken", href: "/de/plus/" },
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

export const energyFaqDe = [
  {
    question: "Wie kann Hausautomation meine Stromrechnung senken?",
    answer:
      "In zwei Schritten. Zuerst Transparenz: Wenn du deinen Verbrauch in Echtzeit und pro Gerät siehst, erkennst du, wohin dein Geld fließt. Dann Automation: Standby-Geräte ausschalten, große Verbraucher in die Nebenzeiten verlagern, die Heizung nach Anwesenheit planen und dich bei ungewöhnlichem Verbrauch warnen. Gladys Assistant erledigt beides, lokal.",
  },
  {
    question: "Kann ich den Stromverbrauch meines Zuhauses in Echtzeit überwachen?",
    answer:
      "Ja. Gladys zeigt den Verbrauch deines gesamten Zuhauses in kWh in Echtzeit an, dazu den Verlauf über Tage, Wochen und Monate. Mit smarten Steckdosen mit Strommessung siehst du außerdem Verbrauch und Kosten jedes einzelnen Geräts.",
  },
  {
    question: "Brauche ich einen speziellen Zähler, um meine Energie zu messen?",
    answer:
      "Du brauchst ein Gerät, das den Verbrauch in kWh meldet: eine smarte Steckdose mit Strommessung, einen Energiesensor oder in Frankreich den Linky-Zähler, ausgelesen über einen Lixee ZLinky (Zigbee). Je mehr Messpunkte du hinzufügst, desto detaillierter wird das Bild.",
  },
  {
    question: "Funktioniert es mit dem französischen Linky-Zähler?",
    answer:
      "Ja. In Frankreich kannst du den Linky über einen Lixee ZLinky (Zigbee, minütliche Werte) in Echtzeit auslesen und deinen offiziellen Verbrauchsverlauf über die Enedis-Integration mit Gladys Plus abrufen. Gladys kann außerdem die Tagesfarben von EDF Tempo in deinen Automationen nutzen.",
  },
  {
    question: "Bleiben meine Energiedaten privat?",
    answer:
      "Ja. Gladys läuft lokal auf deinem eigenen Rechner, deine Verbrauchsdaten bleiben also in deinem lokalen Netzwerk, ohne Cloud-Zwang und ohne Datenverkauf. Der Kern von Gladys ist kostenlos und Open Source.",
  },
  {
    question: "Kann mir Gladys helfen, Nebenzeiten oder günstigere Tarife zu nutzen?",
    answer:
      "Ja. Du kannst Automationen bauen, die große Verbraucher in die Nebenzeiten verlagern, und in Frankreich die Tagesfarben von EDF Tempo nutzen, um sie an den günstigsten Tagen laufen zu lassen, alles lokal entschieden und ausgeführt.",
  },
];

export default energyContent;
