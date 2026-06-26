// Content for the "Zigbee vs Matter vs Z-Wave" explainer page.
// A neutral, educational comparison of the three smart home wireless standards.
// This intent is broad and very often surfaced/cited by AI assistants, so the
// page is written to be accurate and genuinely useful first, with only a light,
// honest Gladys angle at the end (Gladys supports all three, so no lock-in).
//
// Accuracy note worth keeping: Zigbee and Z-Wave are wireless radio protocols,
// while Matter is NOT a radio protocol but an application/interoperability
// standard that runs over Wi-Fi or over Thread (Thread being the low-power mesh
// radio comparable to Zigbee/Z-Wave). The page makes that distinction explicit.

const protocolsContent = {
  en: {
    meta: {
      title: "Zigbee vs Matter vs Z-Wave: which smart home protocol to choose? (2026)",
      description:
        "Zigbee, Matter or Z-Wave? A clear, neutral comparison of the three smart home standards: how they differ, their strengths and limits, and how to choose, plus why you don't actually have to pick just one.",
    },
    hero: {
      title: "Zigbee vs Matter vs Z-Wave",
      subtitle:
        "A clear, neutral guide to the three main smart home standards, and how to choose between them.",
      intro: [
        "If you're building a smart home, you'll quickly run into three names: Zigbee, Z-Wave and Matter. They're often presented as rivals, but they don't all play the same role, and that's the first thing to get straight.",
        "This guide explains what each one really is, how they compare, and which to choose, in plain language and without taking sides.",
      ],
      primaryCta: { label: "Get started with Gladys", href: "/docs/" },
      secondaryCta: {
        label: "Build a local smart home →",
        href: "/local-smart-home/",
      },
    },
    keyPoint: {
      title: "First, the key thing most articles get wrong",
      paragraphs: [
        "Zigbee and Z-Wave are wireless protocols: they define the radio that carries the signal between your devices. Matter is different. It is not a radio protocol, but an interoperability standard that runs on top of other networks, either Wi-Fi or Thread.",
        "Thread is the part that's actually comparable to Zigbee and Z-Wave: it's a low-power wireless mesh radio. So the real-world picture is \"Zigbee vs Z-Wave vs Thread\" at the radio level, with Matter sitting on top to make devices from different brands and ecosystems talk to each other.",
        "Keep that in mind as you read: when people say \"Matter device\", they usually mean a Matter-over-Thread or Matter-over-Wi-Fi device.",
      ],
    },
    tableTitle: "Quick comparison",
    tableCols: {
      feature: "",
      zigbee: "Zigbee",
      zwave: "Z-Wave",
      matter: "Matter",
    },
    table: [
      {
        feature: "What it is",
        zigbee: "Wireless protocol (mesh)",
        zwave: "Wireless protocol (mesh)",
        matter: "Interoperability standard over Wi-Fi & Thread",
      },
      {
        feature: "Radio frequency",
        zigbee: "2.4 GHz",
        zwave: "Sub-GHz (868 MHz EU / 908 MHz US)",
        matter: "Wi-Fi (2.4/5 GHz) or Thread (2.4 GHz)",
      },
      {
        feature: "Network topology",
        zigbee: "Mesh",
        zwave: "Mesh",
        matter: "Mesh (over Thread) or star (over Wi-Fi)",
      },
      {
        feature: "Interoperability",
        zigbee: "Good, best through open hubs",
        zwave: "Strong, thanks to strict certification",
        matter: "Cross-ecosystem by design",
      },
      {
        feature: "Device choice",
        zigbee: "Huge and very affordable",
        zwave: "Wide, often pricier",
        matter: "Growing fast, newer",
      },
      {
        feature: "Local control",
        zigbee: "Yes",
        zwave: "Yes",
        matter: "Yes, local by design",
      },
      {
        feature: "Wi-Fi interference",
        zigbee: "Possible (shares 2.4 GHz)",
        zwave: "Low (sub-GHz)",
        matter: "Thread shares 2.4 GHz; Wi-Fi uses Wi-Fi",
      },
      {
        feature: "Backed by",
        zigbee: "Connectivity Standards Alliance",
        zwave: "Z-Wave Alliance / Silicon Labs",
        matter: "CSA (Apple, Google, Amazon, Samsung…)",
      },
      {
        feature: "Maturity",
        zigbee: "Mature",
        zwave: "Mature",
        matter: "New (since 2022), maturing",
      },
      {
        feature: "Needs",
        zigbee: "A USB coordinator",
        zwave: "A USB controller",
        matter: "A Thread border router and/or Matter controller",
      },
    ],
    protocols: [
      {
        id: "zigbee",
        name: "Zigbee",
        tagline: "The popular, affordable mesh",
        intro:
          "Zigbee is a low-power wireless mesh protocol on the 2.4 GHz band. Mains-powered devices relay messages for battery ones, so the network gets stronger as you add devices. It powers a huge, affordable ecosystem (Aqara, IKEA, Sonoff, Philips Hue and many more).",
        strengths: [
          "A massive choice of inexpensive devices.",
          "Self-healing mesh that extends as you add mains-powered devices.",
          "Fully local, and very open through projects like Zigbee2MQTT.",
        ],
        limits: [
          "2.4 GHz can clash with Wi-Fi and other wireless gear.",
          "Cross-brand behavior can be hit-or-miss on closed hubs (open hubs solve most of it).",
          "You need a coordinator (a USB dongle).",
        ],
      },
      {
        id: "zwave",
        name: "Z-Wave",
        tagline: "The reliable, certified mesh",
        intro:
          "Z-Wave is a low-power wireless mesh protocol on sub-GHz frequencies (868 MHz in Europe, 908 MHz in the US). Its strict certification means devices from different brands tend to work together reliably, which made it a favorite for serious home automation.",
        strengths: [
          "Excellent cross-brand interoperability thanks to strict certification.",
          "Sub-GHz radio means less Wi-Fi interference and good wall penetration.",
          "Fully local, popular for locks and sensors.",
        ],
        limits: [
          "Fewer devices, usually more expensive than Zigbee.",
          "Frequencies are region-locked: EU and US devices aren't interchangeable.",
          "A classic network is limited to around 232 devices (plenty for a home, but worth knowing).",
        ],
      },
      {
        id: "matter",
        name: "Matter & Thread",
        tagline: "The interoperability standard",
        intro:
          "Matter is the newest of the three, and it's different: it isn't a radio protocol, but an application standard that runs over Wi-Fi or over Thread, a low-power mesh radio comparable to Zigbee and Z-Wave. Backed by Apple, Google, Amazon and Samsung, its goal is for one device to work across every major ecosystem.",
        strengths: [
          "Cross-ecosystem by design: one device can work with Apple Home, Google Home, Alexa and more.",
          "Local control is part of the standard.",
          "Strong industry backing, so it's where the market is heading.",
        ],
        limits: [
          "Still young (launched late 2022): features and device support are maturing.",
          "Matter-over-Thread needs a Thread border router; setups can be confusing at first.",
          "Some early devices and bridges expose only basic features.",
        ],
      },
    ],
    choose: {
      title: "So which one should you choose?",
      intro:
        "There's no single winner, the right answer depends on your devices and priorities:",
      cards: [
        {
          icon: "🟢",
          title: "Choose Zigbee if…",
          text: "You want the widest, cheapest choice of devices and a big local mesh, and you're happy using an open hub to get the best interoperability.",
        },
        {
          icon: "🔵",
          title: "Choose Z-Wave if…",
          text: "You value rock-solid cross-brand reliability and less Wi-Fi interference, and you don't mind paying a bit more for fewer options.",
        },
        {
          icon: "🟣",
          title: "Choose Matter / Thread if…",
          text: "You want future-proof, cross-ecosystem devices and care about backing the standard the whole industry is rallying behind.",
        },
      ],
    },
    gladys: {
      title: "Good news: with Gladys, you don't have to choose",
      paragraphs: [
        "These standards aren't mutually exclusive. A good local hub speaks several of them at once, so you can pick the best device for each need instead of betting everything on a single technology.",
        "Gladys Assistant supports Zigbee (through Zigbee2MQTT), Matter and Thread, and Z-Wave (through Z-Wave JS), plus MQTT for everything else. They all live side by side in one clean interface, fully local, with no lock-in.",
      ],
      link: { label: "See Gladys' integrations →", href: "/docs/integrations/" },
    },
    related: {
      title: "Go further",
      intro: "Set up each standard in Gladys, or step back and see the bigger picture:",
      links: [
        {
          label: "Zigbee with Gladys (Zigbee2MQTT)",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "Add Zigbee devices to Gladys through Zigbee2MQTT.",
        },
        {
          label: "Matter with Gladys",
          href: "/docs/integrations/matter/",
          text: "Pair Matter and Thread devices directly in Gladys.",
        },
        {
          label: "Z-Wave with Gladys",
          href: "/docs/integrations/zwavejs-ui/",
          text: "Bring your Z-Wave network into Gladys through Z-Wave JS.",
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
      title: "Build your smart home on open standards",
      text: "Gladys is free, open-source and local-first, and it speaks Zigbee, Matter, Thread and Z-Wave, so you're never locked into one technology.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "See the integrations", href: "/docs/integrations/" },
    },
  },

  fr: {
    meta: {
      title: "Zigbee vs Matter vs Z-Wave : quel protocole domotique choisir ? (2026)",
      description:
        "Zigbee, Matter ou Z-Wave ? Un comparatif clair et neutre des trois standards de la maison connectée : leurs différences, leurs forces et limites, et comment choisir, sans oublier qu'on n'est pas obligé d'en choisir un seul.",
    },
    hero: {
      title: "Zigbee vs Matter vs Z-Wave",
      subtitle:
        "Un guide clair et neutre des trois grands standards de la maison connectée, et comment choisir entre eux.",
      intro: [
        "Quand on se lance dans la maison connectée, on tombe vite sur trois noms : Zigbee, Z-Wave et Matter. On les présente souvent comme des rivaux, mais ils ne jouent pas tous le même rôle, et c'est la première chose à comprendre.",
        "Ce guide explique ce que chacun est vraiment, comment ils se comparent, et lequel choisir, en langage clair et sans parti pris.",
      ],
      primaryCta: { label: "Démarrer avec Gladys", href: "/docs/" },
      secondaryCta: {
        label: "Créer une maison connectée locale →",
        href: "/local-smart-home/",
      },
    },
    keyPoint: {
      title: "D'abord, ce que la plupart des articles se trompent",
      paragraphs: [
        "Zigbee et Z-Wave sont des protocoles sans fil : ils définissent la radio qui transporte le signal entre vos appareils. Matter, lui, est différent. Ce n'est pas un protocole radio, mais un standard d'interopérabilité qui fonctionne au-dessus d'autres réseaux : le Wi-Fi ou Thread.",
        "Thread, c'est la partie réellement comparable à Zigbee et Z-Wave : une radio maillée basse consommation. En réalité, la vraie comparaison au niveau radio, c'est « Zigbee vs Z-Wave vs Thread », avec Matter par-dessus pour faire dialoguer des appareils de marques et d'écosystèmes différents.",
        "Gardez-le en tête en lisant : quand on parle d'un « appareil Matter », il s'agit généralement d'un appareil Matter-over-Thread ou Matter-over-Wi-Fi.",
      ],
    },
    tableTitle: "Comparatif express",
    tableCols: {
      feature: "",
      zigbee: "Zigbee",
      zwave: "Z-Wave",
      matter: "Matter",
    },
    table: [
      {
        feature: "Ce que c'est",
        zigbee: "Protocole sans fil (maillé)",
        zwave: "Protocole sans fil (maillé)",
        matter: "Standard d'interopérabilité sur Wi-Fi & Thread",
      },
      {
        feature: "Fréquence radio",
        zigbee: "2,4 GHz",
        zwave: "Sous-GHz (868 MHz UE / 908 MHz US)",
        matter: "Wi-Fi (2,4/5 GHz) ou Thread (2,4 GHz)",
      },
      {
        feature: "Topologie réseau",
        zigbee: "Maillée",
        zwave: "Maillée",
        matter: "Maillée (via Thread) ou étoile (via Wi-Fi)",
      },
      {
        feature: "Interopérabilité",
        zigbee: "Bonne, optimale via des hubs ouverts",
        zwave: "Forte, grâce à une certification stricte",
        matter: "Multi-écosystème par conception",
      },
      {
        feature: "Choix d'appareils",
        zigbee: "Immense et très abordable",
        zwave: "Large, souvent plus cher",
        matter: "En forte croissance, plus récent",
      },
      {
        feature: "Contrôle local",
        zigbee: "Oui",
        zwave: "Oui",
        matter: "Oui, local par conception",
      },
      {
        feature: "Interférences Wi-Fi",
        zigbee: "Possibles (partage le 2,4 GHz)",
        zwave: "Faibles (sous-GHz)",
        matter: "Thread partage le 2,4 GHz ; le Wi-Fi utilise le Wi-Fi",
      },
      {
        feature: "Porté par",
        zigbee: "Connectivity Standards Alliance",
        zwave: "Z-Wave Alliance / Silicon Labs",
        matter: "CSA (Apple, Google, Amazon, Samsung…)",
      },
      {
        feature: "Maturité",
        zigbee: "Mature",
        zwave: "Mature",
        matter: "Récent (depuis 2022), en maturation",
      },
      {
        feature: "Nécessite",
        zigbee: "Un coordinateur USB",
        zwave: "Un contrôleur USB",
        matter: "Un routeur de bordure Thread et/ou un contrôleur Matter",
      },
    ],
    protocols: [
      {
        id: "zigbee",
        name: "Zigbee",
        tagline: "Le maillé populaire et abordable",
        intro:
          "Zigbee est un protocole sans fil maillé et basse consommation, sur la bande 2,4 GHz. Les appareils sur secteur relaient les messages de ceux sur pile, donc le réseau se renforce à mesure que vous ajoutez des appareils. Il alimente un écosystème immense et abordable (Aqara, IKEA, Sonoff, Philips Hue et bien d'autres).",
        strengths: [
          "Un choix énorme d'appareils peu coûteux.",
          "Un maillage auto-réparateur qui s'étend avec les appareils sur secteur.",
          "100 % local, et très ouvert grâce à des projets comme Zigbee2MQTT.",
        ],
        limits: [
          "Le 2,4 GHz peut entrer en conflit avec le Wi-Fi et d'autres équipements sans fil.",
          "Le comportement inter-marques peut être inégal sur les hubs fermés (les hubs ouverts règlent l'essentiel).",
          "Il faut un coordinateur (une clé USB).",
        ],
      },
      {
        id: "zwave",
        name: "Z-Wave",
        tagline: "Le maillé fiable et certifié",
        intro:
          "Z-Wave est un protocole sans fil maillé et basse consommation, sur des fréquences sous-GHz (868 MHz en Europe, 908 MHz aux États-Unis). Sa certification stricte fait que des appareils de marques différentes fonctionnent généralement bien ensemble, ce qui en a fait un favori pour la domotique sérieuse.",
        strengths: [
          "Une excellente interopérabilité inter-marques grâce à une certification stricte.",
          "Une radio sous-GHz, donc moins d'interférences Wi-Fi et une bonne pénétration des murs.",
          "100 % local, populaire pour les serrures et les capteurs.",
        ],
        limits: [
          "Moins d'appareils, en général plus chers que le Zigbee.",
          "Des fréquences verrouillées par région : les appareils UE et US ne sont pas interchangeables.",
          "Un réseau classique est limité à environ 232 appareils (largement suffisant pour une maison, mais bon à savoir).",
        ],
      },
      {
        id: "matter",
        name: "Matter & Thread",
        tagline: "Le standard d'interopérabilité",
        intro:
          "Matter est le plus récent des trois, et il est différent : ce n'est pas un protocole radio, mais un standard applicatif qui fonctionne sur le Wi-Fi ou sur Thread, une radio maillée basse consommation comparable à Zigbee et Z-Wave. Porté par Apple, Google, Amazon et Samsung, son but est qu'un même appareil fonctionne dans tous les grands écosystèmes.",
        strengths: [
          "Multi-écosystème par conception : un appareil peut fonctionner avec Apple Home, Google Home, Alexa et plus.",
          "Le contrôle local fait partie du standard.",
          "Un fort soutien de l'industrie : c'est là que va le marché.",
        ],
        limits: [
          "Encore jeune (lancé fin 2022) : les fonctions et le support d'appareils mûrissent.",
          "Le Matter-over-Thread nécessite un routeur de bordure Thread ; la configuration peut dérouter au début.",
          "Certains premiers appareils et bridges n'exposent que des fonctions basiques.",
        ],
      },
    ],
    choose: {
      title: "Alors, lequel choisir ?",
      intro:
        "Il n'y a pas de vainqueur unique : la bonne réponse dépend de vos appareils et de vos priorités :",
      cards: [
        {
          icon: "🟢",
          title: "Choisissez Zigbee si…",
          text: "Vous voulez le choix d'appareils le plus large et le moins cher, et un grand maillage local, en utilisant un hub ouvert pour la meilleure interopérabilité.",
        },
        {
          icon: "🔵",
          title: "Choisissez Z-Wave si…",
          text: "Vous tenez à une fiabilité inter-marques à toute épreuve et à moins d'interférences Wi-Fi, et payer un peu plus pour moins d'options ne vous dérange pas.",
        },
        {
          icon: "🟣",
          title: "Choisissez Matter / Thread si…",
          text: "Vous voulez des appareils pérennes et multi-écosystèmes, et tenez à miser sur le standard derrière lequel toute l'industrie se rassemble.",
        },
      ],
    },
    gladys: {
      title: "Bonne nouvelle : avec Gladys, vous n'avez pas à choisir",
      paragraphs: [
        "Ces standards ne sont pas exclusifs. Un bon hub local en parle plusieurs à la fois : vous choisissez le meilleur appareil pour chaque besoin au lieu de tout miser sur une seule technologie.",
        "Gladys Assistant supporte le Zigbee (via Zigbee2MQTT), le Matter et Thread, et le Z-Wave (via Z-Wave JS), plus le MQTT pour tout le reste. Tout cohabite dans une seule interface épurée, 100 % locale, sans lock-in.",
      ],
      link: { label: "Voir les intégrations de Gladys →", href: "/docs/integrations/" },
    },
    related: {
      title: "Aller plus loin",
      intro: "Configurez chaque standard dans Gladys, ou prenez du recul sur l'ensemble :",
      links: [
        {
          label: "Le Zigbee avec Gladys (Zigbee2MQTT)",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "Ajoutez vos appareils Zigbee à Gladys via Zigbee2MQTT.",
        },
        {
          label: "Le Matter avec Gladys",
          href: "/docs/integrations/matter/",
          text: "Associez vos appareils Matter et Thread directement dans Gladys.",
        },
        {
          label: "Le Z-Wave avec Gladys",
          href: "/docs/integrations/zwavejs-ui/",
          text: "Intégrez votre réseau Z-Wave dans Gladys via Z-Wave JS.",
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
      title: "Construisez votre maison sur des standards ouverts",
      text: "Gladys est gratuite, open source et locale d'abord, et elle parle Zigbee, Matter, Thread et Z-Wave : vous n'êtes jamais enfermé dans une seule technologie.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Voir les intégrations", href: "/docs/integrations/" },
    },
  },
};

export const protocolsFaqEn = [
  {
    question: "Is Matter a replacement for Zigbee and Z-Wave?",
    answer:
      "Not exactly. Matter is an interoperability standard, not a radio protocol. It runs over Wi-Fi or over Thread, a low-power mesh radio comparable to Zigbee and Z-Wave. Matter aims to unify ecosystems, but Zigbee and Z-Wave remain widely used and supported, and many hubs run all of them side by side.",
  },
  {
    question: "What's the difference between Matter and Thread?",
    answer:
      "Thread is the low-power wireless mesh radio (like Zigbee or Z-Wave). Matter is the application layer that defines how devices talk, and it can run on top of Thread or Wi-Fi. \"Matter over Thread\" simply means Thread carries the signal while Matter defines the language.",
  },
  {
    question: "Zigbee vs Z-Wave: which is better?",
    answer:
      "It depends. Zigbee has far more devices, usually cheaper, on the 2.4 GHz band. Z-Wave has fewer, pricier devices on sub-GHz frequencies, with strict certification for reliable interoperability and less Wi-Fi interference. Both are local, mesh-based protocols.",
  },
  {
    question: "Do Zigbee, Z-Wave and Matter work without the cloud?",
    answer:
      "Yes, all three support local control. With a local hub like Gladys Assistant, your devices run on your own network and keep working without depending on a manufacturer's cloud.",
  },
  {
    question: "Which protocol has the most devices?",
    answer:
      "Zigbee has the largest and most affordable catalog today. Matter's catalog is growing quickly thanks to strong industry backing, while Z-Wave's is smaller but strong on reliability.",
  },
  {
    question: "Can I mix Zigbee, Z-Wave and Matter in one smart home?",
    answer:
      "Yes. A hub like Gladys Assistant supports Zigbee, Matter, Thread and Z-Wave at the same time, so you can mix devices from all of them freely in a single, local interface.",
  },
];

export const protocolsFaqFr = [
  {
    question: "Matter remplace-t-il Zigbee et Z-Wave ?",
    answer:
      "Pas exactement. Matter est un standard d'interopérabilité, pas un protocole radio. Il fonctionne sur le Wi-Fi ou sur Thread, une radio maillée basse consommation comparable à Zigbee et Z-Wave. Matter vise à unifier les écosystèmes, mais Zigbee et Z-Wave restent très utilisés et supportés, et beaucoup de hubs les font cohabiter.",
  },
  {
    question: "Quelle est la différence entre Matter et Thread ?",
    answer:
      "Thread est la radio maillée sans fil basse consommation (comme Zigbee ou Z-Wave). Matter est la couche applicative qui définit comment les appareils dialoguent, et il peut fonctionner sur Thread ou sur Wi-Fi. « Matter over Thread » signifie simplement que Thread transporte le signal pendant que Matter définit le langage.",
  },
  {
    question: "Zigbee vs Z-Wave : lequel est le meilleur ?",
    answer:
      "Cela dépend. Zigbee a beaucoup plus d'appareils, généralement moins chers, sur la bande 2,4 GHz. Z-Wave a moins d'appareils, plus chers, sur des fréquences sous-GHz, avec une certification stricte pour une interopérabilité fiable et moins d'interférences Wi-Fi. Les deux sont des protocoles locaux et maillés.",
  },
  {
    question: "Zigbee, Z-Wave et Matter fonctionnent-ils sans le cloud ?",
    answer:
      "Oui, les trois supportent le contrôle local. Avec un hub local comme Gladys Assistant, vos appareils tournent sur votre propre réseau et continuent de fonctionner sans dépendre du cloud d'un fabricant.",
  },
  {
    question: "Quel protocole a le plus d'appareils ?",
    answer:
      "Zigbee a aujourd'hui le catalogue le plus large et le plus abordable. Celui de Matter grandit vite grâce au fort soutien de l'industrie, tandis que celui de Z-Wave est plus restreint mais solide sur la fiabilité.",
  },
  {
    question: "Puis-je mélanger Zigbee, Z-Wave et Matter dans une même maison ?",
    answer:
      "Oui. Un hub comme Gladys Assistant supporte le Zigbee, le Matter, Thread et le Z-Wave en même temps : vous pouvez mélanger librement des appareils de chacun dans une seule interface, locale.",
  },
];

export default protocolsContent;
