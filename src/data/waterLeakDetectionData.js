// Content for the "Water leak detection and automatic shutoff" landing page.
// Targets "smart water shutoff valve", "water leak detector with automatic
// shutoff", "zigbee water leak sensor". Gladys-side facts checked in the Gladys
// source (server/services/zigbee2mqtt/exposes): water_leak is mapped to a leak
// sensor, a valve's "state" to a switch Gladys can turn off, so a scene can
// close the valve when any leak sensor triggers. Devices named here are listed
// as supported on zigbee2mqtt.io.

const waterLeakDetectionContent = {
  en: {
    meta: {
      title: "Water Leak Detection with Automatic Shutoff, Locally",
      description:
        "Build a water leak detection system that shuts the water off automatically: Zigbee leak sensors, a motorized valve and a local Gladys Assistant scene. No subscription, works without the internet.",
    },
    screenshotCaption:
      "Leak sensors, the water valve and the alert scene, side by side in Gladys.",
    hero: {
      title: "Water leak detection that shuts the water off for you",
      subtitle:
        "A few Zigbee leak sensors, a motorized valve on the main water line, and one local scene: the water is off seconds after a leak, even if nobody is home.",
      intro: [
        "Water damage and freezing are among the most common home insurance claims in the US, with an average claim of about $15,400 according to the Insurance Information Institute. A leaking water heater or a burst washing machine hose does most of its damage in the hours nobody notices, and a leak sensor that only beeps doesn't help much when you're at work or on vacation.",
        "With Gladys Assistant, a free and open-source smart home platform that runs at home, any leak sensor can close a motorized valve on your main water supply, send you an alert on your phone, and switch off the appliances involved. It runs locally, so it reacts even when the internet is down, and there's no monthly fee.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Zigbee2MQTT setup →",
        href: "/docs/integrations/zigbee2mqtt/",
      },
    },
    problem: {
      title: "Why a beeping sensor isn't enough",
      intro: "Most leak detectors on the market have the same limits:",
      points: [
        "They alert you, but nothing stops the water until someone comes home.",
        "Smart shutoff systems often require their own hub, app and sometimes a subscription.",
        "Cloud-based systems depend on the internet and the vendor's servers to react.",
        "Each brand works in its own app, so the sensor under the sink can't talk to the valve from another brand.",
      ],
      outro:
        "What you really want: any sensor, any valve, one rule that always runs. That's a job for local home automation.",
    },
    features: {
      title: "What you can build with Gladys",
      intro: "Leak sensors and valves become regular Gladys devices:",
      cards: [
        {
          icon: "💧",
          title: "Leak sensors anywhere",
          text: "Under sinks, behind the washing machine, next to the water heater and the boiler: Zigbee leak sensors are small, cheap and run for years on a battery.",
        },
        {
          icon: "🚰",
          title: "Automatic shutoff",
          text: "A motorized valve on the main line closes as soon as any sensor detects water, without waiting for you.",
        },
        {
          icon: "📱",
          title: "Instant alerts",
          text: "A Telegram message, an SMS or another notification channel tells you which sensor triggered.",
        },
        {
          icon: "🔌",
          title: "Cut the appliances",
          text: "Turn off the smart plug of the washing machine or the dishwasher involved, in the same scene.",
        },
        {
          icon: "🔋",
          title: "Battery checks",
          text: "Battery levels are tracked like any other value: a scene can warn you when one runs low, and the weekly AI report (Gladys Plus) flags sensors that went silent.",
        },
        {
          icon: "🏠",
          title: "Works without the internet",
          text: "Sensors, valve and scene all run on your local network: the shutoff happens even if the internet is down.",
        },
      ],
    },
    how: {
      title: "How to set it up",
      intro: "On a mini-PC or a Raspberry Pi running Gladys:",
      points: [
        "Add a Zigbee coordinator and enable Zigbee2MQTT in Gladys.",
        "Pair Zigbee leak sensors (Aqara, Third Reality, Sinopé WL4200, Tuya and many others are supported by Zigbee2MQTT) and place them where leaks happen.",
        "Install a motorized valve on the main water line, such as a Sinopé Sedna valve, the Aqara Valve Controller T1 or another Zigbee valve controller supported by Zigbee2MQTT, and pair it.",
        "Create a scene: when any leak sensor detects water, close the valve, send a notification and turn off the related appliances.",
        "Test it with a damp cloth on a sensor, and check that the valve closes.",
      ],
      outro:
        "Have a plumber install the valve on the main line if you're not comfortable doing it yourself.",
    },
    solution: {
      title: "Any sensor, any valve, one local rule",
      paragraphs: [
        "Because Gladys talks to Zigbee, Z-Wave, Matter and Wi-Fi devices, you're not tied to one brand's kit: mix the sensors and the valve that suit your home and budget.",
        "Gladys is free and open source. Gladys Plus, optional, adds encrypted remote access and backups, but the shutoff itself never depends on it.",
      ],
      link: {
        label: "Build a DIY home alarm system too →",
        href: "/diy-home-alarm-system/",
      },
    },
    related: {
      title: "Go further",
      intro: "Protect your home with local automations:",
      links: [
        {
          label: "DIY home alarm system",
          href: "/diy-home-alarm-system/",
          text: "A self-monitored alarm that runs locally, with no contract.",
        },
        {
          label: "Zigbee2MQTT without Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Local Zigbee with a managed setup and dashboards.",
        },
        {
          label: "Aqara sensors without the hub",
          href: "/aqara-without-hub/",
          text: "Use Aqara leak and door sensors locally.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Stop leaks before they become floods",
      text: "Gladys is free, open source and installs with a single Docker command. Pair your sensors and your valve, and let the scene watch your home.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT guide", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  fr: {
    meta: {
      title: "Détection de fuite d'eau avec coupure automatique, en local",
      description:
        "Créez un système de détection de fuite d'eau qui coupe l'arrivée d'eau automatiquement : détecteurs de fuite Zigbee, vanne motorisée et scène locale dans Gladys Assistant. Sans abonnement, fonctionne sans internet.",
    },
    screenshotCaption:
      "Détecteurs de fuite, vanne d'arrivée d'eau et scène d'alerte, côte à côte dans Gladys.",
    hero: {
      title: "Une détection de fuite d'eau qui coupe l'eau pour vous",
      subtitle:
        "Quelques détecteurs de fuite Zigbee, une vanne motorisée sur l'arrivée d'eau, et une scène locale : l'eau est coupée quelques secondes après une fuite, même si personne n'est là.",
      intro: [
        "Un chauffe-eau qui fuit, un tuyau de lave-linge qui éclate ou une canalisation gelée peuvent faire plus de dégâts en quelques heures que la plupart des cambriolages. Un détecteur qui se contente de biper n'aide pas beaucoup quand vous êtes au travail ou en vacances.",
        "Avec Gladys Assistant, une plateforme domotique gratuite et open source qui tourne chez vous, n'importe quel détecteur de fuite peut fermer une vanne motorisée sur l'arrivée d'eau, vous envoyer une alerte et couper les appareils concernés. Tout tourne en local : la coupure fonctionne même sans internet, et sans abonnement.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Installer Zigbee2MQTT →",
        href: "/docs/integrations/zigbee2mqtt/",
      },
    },
    problem: {
      title: "Pourquoi un détecteur qui bipe ne suffit pas",
      intro: "La plupart des détecteurs de fuite du marché ont les mêmes limites :",
      points: [
        "Ils vous préviennent, mais rien n'arrête l'eau tant que personne ne rentre.",
        "Les systèmes de coupure connectés demandent souvent leur propre box, leur application, parfois un abonnement.",
        "Les systèmes dans le cloud dépendent d'internet et des serveurs du fabricant pour réagir.",
        "Chaque marque vit dans son application : le détecteur sous l'évier ne parle pas à la vanne d'une autre marque.",
      ],
      outro:
        "Ce qu'on veut vraiment : n'importe quel détecteur, n'importe quelle vanne, une règle qui tourne toujours. C'est le travail d'une domotique locale.",
    },
    features: {
      title: "Ce que vous pouvez construire avec Gladys",
      intro: "Détecteurs et vannes deviennent des appareils Gladys comme les autres :",
      cards: [
        {
          icon: "💧",
          title: "Des détecteurs partout",
          text: "Sous les éviers, derrière le lave-linge, à côté du chauffe-eau et de la chaudière : les détecteurs de fuite Zigbee sont petits, peu chers et tiennent des années sur pile.",
        },
        {
          icon: "🚰",
          title: "Coupure automatique",
          text: "Une vanne motorisée sur l'arrivée d'eau se ferme dès qu'un détecteur voit de l'eau, sans vous attendre.",
        },
        {
          icon: "📱",
          title: "Alertes immédiates",
          text: "Un message Telegram, un SMS ou un autre canal vous indique quel détecteur s'est déclenché.",
        },
        {
          icon: "🔌",
          title: "Couper les appareils",
          text: "Éteignez la prise connectée du lave-linge ou du lave-vaisselle concerné, dans la même scène.",
        },
        {
          icon: "🔋",
          title: "Piles surveillées",
          text: "Le niveau de pile est suivi comme n'importe quelle valeur : une scène peut vous prévenir quand il baisse, et le rapport IA hebdomadaire (Gladys Plus) signale les capteurs devenus silencieux.",
        },
        {
          icon: "🏠",
          title: "Fonctionne sans internet",
          text: "Détecteurs, vanne et scène tournent sur votre réseau local : la coupure a lieu même si internet est coupé.",
        },
      ],
    },
    how: {
      title: "Comment le mettre en place",
      intro: "Sur un mini-PC ou un Raspberry Pi qui fait tourner Gladys :",
      points: [
        "Ajoutez un coordinateur Zigbee et activez Zigbee2MQTT dans Gladys.",
        "Associez des détecteurs de fuite Zigbee (Aqara, Third Reality, Sinopé WL4200, Tuya et beaucoup d'autres sont pris en charge par Zigbee2MQTT) et placez-les là où les fuites arrivent.",
        "Installez une vanne motorisée sur l'arrivée d'eau, comme une vanne Sinopé Sedna, le contrôleur de vanne Aqara T1 ou un autre contrôleur de vanne Zigbee pris en charge par Zigbee2MQTT, et associez-la.",
        "Créez une scène : quand un détecteur voit de l'eau, fermer la vanne, envoyer une notification et couper les appareils concernés.",
        "Testez avec un chiffon humide sur un détecteur, et vérifiez que la vanne se ferme.",
      ],
      outro:
        "Faites installer la vanne sur l'arrivée générale par un plombier si vous n'êtes pas à l'aise.",
    },
    solution: {
      title: "N'importe quel détecteur, n'importe quelle vanne, une règle locale",
      paragraphs: [
        "Comme Gladys parle Zigbee, Z-Wave, Matter et Wi-Fi, vous n'êtes pas lié au kit d'une marque : combinez les détecteurs et la vanne adaptés à votre logement et à votre budget.",
        "Gladys est gratuite et open source. Gladys Plus, en option, ajoute l'accès distant chiffré et les sauvegardes, mais la coupure elle-même n'en dépend jamais.",
      ],
      link: {
        label: "Créer aussi une alarme maison DIY →",
        href: "/diy-home-alarm-system/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Protégez votre maison avec des automatisations locales :",
      links: [
        {
          label: "Alarme maison DIY",
          href: "/diy-home-alarm-system/",
          text: "Une alarme autonome qui tourne en local, sans abonnement.",
        },
        {
          label: "Zigbee2MQTT sans Home Assistant",
          href: "/zigbee2mqtt-without-home-assistant/",
          text: "Du Zigbee local, installé pour vous, avec des tableaux de bord.",
        },
        {
          label: "Capteurs Aqara sans hub",
          href: "/aqara-without-hub/",
          text: "Utilisez vos détecteurs de fuite et d'ouverture Aqara en local.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Arrêtez les fuites avant l'inondation",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Associez vos détecteurs et votre vanne, et laissez la scène veiller sur la maison.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
};

export const waterLeakDetectionFaqEn = [
  {
    question: "Can a smart leak sensor shut off the water automatically?",
    answer:
      "Yes, if it's paired with a motorized valve on the main water line. With Gladys Assistant, any supported leak sensor can trigger a scene that closes the valve, sends you an alert and turns off appliances, locally and without a subscription.",
  },
  {
    question: "Does automatic water shutoff work without the internet?",
    answer:
      "With Gladys, yes. The Zigbee sensors, the valve and the scene all run on your local network, so the water is shut off even if your internet connection is down. Only the remote notification needs the internet.",
  },
  {
    question: "Which leak sensors and valves work with Gladys?",
    answer:
      "Any Zigbee leak sensor or valve controller supported by Zigbee2MQTT, such as Aqara, Third Reality and Tuya leak sensors, Sinopé WL4200 sensors, Sinopé Sedna valves and the Aqara Valve Controller T1. Matter and Z-Wave devices can be used too, depending on their features.",
  },
  {
    question: "Where should I put water leak sensors?",
    answer:
      "Wherever water can leak: under kitchen and bathroom sinks, behind the washing machine and the dishwasher, next to the water heater, the boiler and the water softener, and near the main water inlet.",
  },
  {
    question: "Is there a monthly fee?",
    answer:
      "No. Gladys is free and open source, and the sensors and valve are one-time purchases. Gladys Plus is optional, for encrypted remote access and backups.",
  },
];

export const waterLeakDetectionFaqFr = [
  {
    question: "Un détecteur de fuite connecté peut-il couper l'eau automatiquement ?",
    answer:
      "Oui, s'il est associé à une vanne motorisée sur l'arrivée d'eau. Avec Gladys Assistant, n'importe quel détecteur pris en charge peut déclencher une scène qui ferme la vanne, vous envoie une alerte et coupe des appareils, en local et sans abonnement.",
  },
  {
    question: "La coupure automatique fonctionne-t-elle sans internet ?",
    answer:
      "Avec Gladys, oui. Les détecteurs Zigbee, la vanne et la scène tournent sur votre réseau local : l'eau est coupée même si votre connexion internet est coupée. Seule la notification à distance a besoin d'internet.",
  },
  {
    question: "Quels détecteurs et vannes fonctionnent avec Gladys ?",
    answer:
      "Tous les détecteurs de fuite et contrôleurs de vanne Zigbee pris en charge par Zigbee2MQTT, comme les détecteurs Aqara, Third Reality et Tuya, les détecteurs Sinopé WL4200, les vannes Sinopé Sedna et le contrôleur de vanne Aqara T1. Des appareils Matter et Z-Wave peuvent aussi être utilisés, selon leurs fonctionnalités.",
  },
  {
    question: "Où placer des détecteurs de fuite d'eau ?",
    answer:
      "Partout où l'eau peut fuir : sous les éviers de la cuisine et de la salle de bain, derrière le lave-linge et le lave-vaisselle, à côté du chauffe-eau, de la chaudière et de l'adoucisseur, et près de l'arrivée d'eau générale.",
  },
  {
    question: "Y a-t-il un abonnement ?",
    answer:
      "Non. Gladys est gratuite et open source, et détecteurs comme vanne s'achètent une seule fois. Gladys Plus est optionnel, pour l'accès distant chiffré et les sauvegardes.",
  },
];

export default waterLeakDetectionContent;
