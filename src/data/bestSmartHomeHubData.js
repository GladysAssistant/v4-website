// Content for the "Best smart home hub" buyer's guide.
// The English version targets the US market ("best smart home hub 2026"),
// the French version the French "box domotique" market ("quelle box
// domotique choisir", "meilleure box domotique 2026") and is the one page that
// can sell the French starter kit. Prices and facts were checked in October
// 2026 (see the comments next to each row); street prices move, so keep the
// wording "about" / "from" and update them when they change.

const bestSmartHomeHubContent = {
  en: {
    meta: {
      title: "Best Smart Home Hub in 2026: Honest Comparison",
      description:
        "SmartThings, Hubitat, Homey Pro, Home Assistant Green, Aqara M3, Apple and Google hubs, or a mini-PC running Gladys: prices, protocols, local control and subscriptions, compared honestly.",
    },
    hero: {
      title: "The best smart home hub in 2026",
      subtitle:
        "A hub is the brain of your smart home. Here's how the main options compare on price, protocols, local control and lock-in, with no affiliate rankings.",
      intro: [
        "\"Smart home hub\" covers very different things: a cloud-first box tied to one ecosystem, a dedicated local hub, a streaming device that doubles as a Matter controller, or open-source software running on a small computer you own.",
        "We make Gladys Assistant, one of the options below, so we've kept this comparison factual: prices and features come from each vendor's own pages, checked in October 2026.",
      ],
    },
    picks: {
      title: "Quick picks",
      intro: "If you only read one section:",
      cards: [],
    },
    table: {
      title: "Smart home hubs compared",
      intro: "The main options at a glance:",
      columns: ["Hub", "Price", "Zigbee / Z-Wave", "Matter / Thread", "Runs locally", "Subscription", "Open source"],
      rows: [],
      outro:
        "Prices are list prices in USD, before tax, as of October 2026.",
    },
    criteria: {
      title: "How to choose",
      intro: "Five questions matter more than the spec sheet:",
      points: [
        "Which radios do your devices use? Zigbee and Z-Wave need a hub with those radios (or a USB dongle); Matter over Thread needs a Thread border router.",
        "Does it keep working without the internet? Local automations survive outages and vendor shutdowns; cloud ones don't.",
        "Is there a subscription, and what does it unlock? Remote access, backups and AI are often the paid parts.",
        "Who controls the roadmap? A proprietary hub can lose features or support; open-source software can be forked and kept alive.",
        "How much do you want to tinker? Some platforms reward hours of configuration; others aim to work out of the box.",
      ],
    },
    gladys: {
      title: "Our option: Gladys on a mini-PC",
      paragraphs: [
        "Gladys Assistant is free, open-source home automation that runs on your own mini-PC, Raspberry Pi or NAS. Add a Zigbee dongle and you get local control of Zigbee, Z-Wave (through Z-Wave JS UI), Matter, MQTT and many brands, with a modern interface and visual scenes.",
        "Gladys Plus is optional: encrypted remote access, backups, Alexa and Google Home, and an AI assistant, from $7.99/month in the US and Canada with a one-month free trial.",
      ],
      links: [
        { label: "Best mini-PC for home automation →", href: "/mini-pc-home-automation/" },
        { label: "Works with Gladys →", href: "/works-with/" },
      ],
    },
    related: {
      title: "Go further",
      intro: "Detailed comparisons:",
      links: [
        { label: "Hubitat alternative", href: "/hubitat-alternative/", text: "Gladys vs Hubitat Elevation in detail." },
        { label: "Homey alternative", href: "/homey-alternative/", text: "Gladys vs Homey Pro and Self-Hosted Server." },
        { label: "SmartThings alternative", href: "/smartthings-alternative/", text: "Moving from SmartThings to a local platform." },
        { label: "Home Assistant Green alternative", href: "/home-assistant-green-alternative/", text: "A local hub on your own mini-PC." },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Build your hub on hardware you own",
      text: "Gladys is free, open source and installs with a single Docker command on a mini-PC or a Raspberry Pi.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Best mini-PC", href: "/mini-pc-home-automation/" },
    },
  },

  fr: {
    meta: {
      title: "Quelle box domotique choisir en 2026 ? Le comparatif honnête",
      description:
        "Jeedom, Homey Pro, Home Assistant Green, Somfy TaHoma, Aqara M3 ou un mini-PC avec Gladys : prix, protocoles, fonctionnement en local et abonnements, comparés honnêtement.",
    },
    hero: {
      title: "Quelle box domotique choisir en 2026 ?",
      subtitle:
        "La box est le cerveau de votre maison connectée. Voici comment se comparent les principales options sur le prix, les protocoles, le fonctionnement en local et la dépendance à un fabricant.",
      intro: [
        "« Box domotique » recouvre des choses très différentes : une box liée à un écosystème, une box locale dédiée, ou un logiciel open source qui tourne sur un petit ordinateur qui vous appartient.",
        "Nous développons Gladys Assistant, l'une des options ci-dessous : nous avons donc gardé ce comparatif factuel. Les prix et fonctionnalités viennent des pages de chaque fabricant, vérifiées en octobre 2026.",
      ],
    },
    picks: {
      title: "En bref",
      intro: "Si vous ne lisez qu'une section :",
      cards: [],
    },
    table: {
      title: "Les box domotiques comparées",
      intro: "Les principales options en un coup d'œil :",
      columns: ["Box", "Prix", "Zigbee / Z-Wave", "Matter / Thread", "Fonctionne en local", "Abonnement", "Open source"],
      rows: [],
      outro:
        "Prix publics TTC en euros, constatés en octobre 2026.",
    },
    criteria: {
      title: "Comment choisir",
      intro: "Cinq questions comptent plus que la fiche technique :",
      points: [
        "Quels protocoles utilisent vos appareils ? Le Zigbee et le Z-Wave demandent une box avec ces radios (ou une clé USB) ; le Matter over Thread demande un routeur de bordure Thread.",
        "Est-ce que ça marche sans internet ? Les automatisations locales survivent aux coupures et aux arrêts de service ; celles dans le cloud, non.",
        "Y a-t-il un abonnement, et que débloque-t-il ? L'accès à distance, les sauvegardes et l'IA sont souvent les parties payantes.",
        "Qui décide de l'avenir du produit ? Une box propriétaire peut perdre des fonctions ou son support ; un logiciel open source peut être repris et maintenu.",
        "Combien de temps voulez-vous y passer ? Certaines plateformes récompensent des heures de configuration, d'autres visent à marcher tout de suite.",
      ],
    },
    gladys: {
      title: "Notre option : Gladys sur un mini-PC, ou le kit prêt à l'emploi",
      paragraphs: [
        "Gladys Assistant est une domotique gratuite et open source qui tourne sur votre mini-PC, Raspberry Pi ou NAS. Ajoutez une clé Zigbee et vous pilotez en local le Zigbee, le Z-Wave (via Z-Wave JS UI), Matter, MQTT et de nombreuses marques, avec une interface moderne et des scènes visuelles.",
        "Vous ne voulez rien installer ? Le kit de démarrage officiel est un mini-PC Beelink avec Gladys installée et testée à la main, 6 mois de Gladys Plus, une formation vidéo et mon support direct : il marche dès la sortie du carton. Gladys Plus (accès distant chiffré, sauvegardes, Alexa et Google Home, IA) est ensuite optionnel, à partir de 6,99 €/mois.",
      ],
      links: [
        { label: "Découvrir le kit de démarrage →", href: "/starter-kit/" },
        { label: "Quel mini-PC pour la domotique →", href: "/mini-pc-home-automation/" },
      ],
    },
    related: {
      title: "Aller plus loin",
      intro: "Les comparatifs détaillés :",
      links: [
        { label: "Gladys vs Jeedom", href: "/jeedom-vs-gladys-assistant/", text: "Un comparatif honnête avec la box domotique française." },
        { label: "Alternative à Homey", href: "/homey-alternative/", text: "Gladys face au Homey Pro et à Homey Self-Hosted Server." },
        { label: "Alternative au Home Assistant Green", href: "/home-assistant-green-alternative/", text: "Une box locale sur votre propre mini-PC." },
        { label: "Gladys vs Home Assistant", href: "/home-assistant-vs-gladys-assistant/", text: "Le comparatif fonction par fonction." },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Une box domotique qui vous appartient",
      text: "Gladys est gratuite, open source et s'installe en une commande Docker. Ou prenez le kit de démarrage, prêt à l'emploi.",
      primary: { label: "Le kit de démarrage", href: "/starter-kit/" },
      secondary: { label: "Installer Gladys", href: "/docs/" },
    },
  },
};

export const bestSmartHomeHubFaqEn = [];
export const bestSmartHomeHubFaqFr = [];

export default bestSmartHomeHubContent;
