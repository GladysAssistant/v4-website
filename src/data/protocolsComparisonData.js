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
        zwave: "Narrower and pricier",
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
        feature: "Licensing",
        zigbee: "Open, very open via Zigbee2MQTT",
        zwave: "Proprietary for years, opened ~2020",
        matter: "Open standard with a public SDK",
      },
      {
        feature: "Maturity",
        zigbee: "Mature",
        zwave: "Mature but aging",
        matter: "New (since 2022), maturing",
      },
      {
        feature: "Outlook",
        zigbee: "Thriving",
        zwave: "Declining for new devices",
        matter: "Fastest-growing",
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
          "Zigbee is a low-power wireless mesh protocol on the 2.4 GHz band. Mains-powered devices relay messages for battery ones, so the network gets stronger as you add devices. It powers a huge, affordable ecosystem (Aqara, IKEA, Sonoff, Philips Hue and many more), and it's still thriving. Along with Matter-over-Thread, it's one of the two protocols worth betting on today.",
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
        tagline: "The aging, certified veteran",
        intro:
          "Z-Wave is the veteran of the three: a low-power wireless mesh protocol on sub-GHz frequencies (868 MHz in Europe, 908 MHz in the US). Strict certification earned it a reputation for reliable cross-brand behavior, and it has a large installed base. But it's also the aging option, it was proprietary for most of its life and only opened up as a ratified standard around 2020, its devices are pricier, and many manufacturers are now shifting new products to Matter and Thread.",
        strengths: [
          "Strict certification gives reliable cross-brand behavior.",
          "Sub-GHz radio means less Wi-Fi interference and good wall penetration.",
          "A large installed base, especially in professionally installed systems.",
        ],
        limits: [
          "Fewer devices and noticeably pricier than Zigbee, with a new-device catalog that's shrinking as makers move to Matter and Thread, especially in Europe.",
          "Proprietary for most of its history; it only opened up as a ratified standard around 2020.",
          "Region-locked frequencies (EU and US devices aren't interchangeable), a classic network caps at ~232 devices, and it has a reputation for being fiddly to integrate.",
        ],
      },
      {
        id: "matter",
        name: "Matter & Thread",
        tagline: "The interoperability standard",
        intro:
          "Matter is the newest of the three, and it's different: it isn't a radio protocol, but an application standard that runs over Wi-Fi or over Thread, a low-power mesh radio comparable to Zigbee and Z-Wave. Backed by Apple, Google, Amazon and Samsung, its goal is for one device to work across every major ecosystem. Together with Zigbee, Matter-over-Thread is widely seen as the future of the smart home.",
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
        "For a brand-new smart home today, the two to bet on are Zigbee and Matter-over-Thread. Here's the quick guidance:",
      cards: [
        {
          icon: "🟢",
          title: "Choose Zigbee if…",
          text: "You want the widest, cheapest choice of devices and a big local mesh right now. It's the safe, proven pick today, ideally with an open hub for the best interoperability.",
        },
        {
          icon: "🟣",
          title: "Choose Matter / Thread if…",
          text: "You want future-proof, cross-ecosystem devices and care about backing the standard the whole industry is rallying behind. It's where the market is heading.",
        },
        {
          icon: "🔵",
          title: "Choose Z-Wave if…",
          text: "You already have a Z-Wave setup, or specifically need its certified sub-GHz devices, knowing it's the legacy option, with a pricier and shrinking catalog.",
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
        zwave: "Plus restreint et plus cher",
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
        feature: "Licence",
        zigbee: "Ouvert, très ouvert via Zigbee2MQTT",
        zwave: "Propriétaire pendant des années, ouvert vers 2020",
        matter: "Standard ouvert avec un SDK public",
      },
      {
        feature: "Maturité",
        zigbee: "Mature",
        zwave: "Mature mais vieillissant",
        matter: "Récent (depuis 2022), en maturation",
      },
      {
        feature: "Perspectives",
        zigbee: "En plein essor",
        zwave: "En recul pour les nouveaux appareils",
        matter: "Croissance la plus rapide",
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
          "Zigbee est un protocole sans fil maillé et basse consommation, sur la bande 2,4 GHz. Les appareils sur secteur relaient les messages de ceux sur pile, donc le réseau se renforce à mesure que vous ajoutez des appareils. Il alimente un écosystème immense et abordable (Aqara, IKEA, Sonoff, Philips Hue et bien d'autres), et il est toujours en plein essor. Avec le Matter-over-Thread, c'est l'un des deux protocoles sur lesquels miser aujourd'hui.",
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
        tagline: "Le vétéran certifié, mais vieillissant",
        intro:
          "Z-Wave est le vétéran des trois : un protocole sans fil maillé et basse consommation, sur des fréquences sous-GHz (868 MHz en Europe, 908 MHz aux États-Unis). Sa certification stricte lui a valu une réputation de fiabilité inter-marques, et il dispose d'une large base installée. Mais c'est aussi l'option vieillissante : il a été propriétaire pendant la majeure partie de sa vie et ne s'est ouvert comme standard ratifié que vers 2020, ses appareils sont plus chers, et beaucoup de fabricants basculent désormais leurs nouveaux produits vers Matter et Thread.",
        strengths: [
          "Une certification stricte qui assure une fiabilité inter-marques.",
          "Une radio sous-GHz, donc moins d'interférences Wi-Fi et une bonne pénétration des murs.",
          "Une large base installée, surtout dans les systèmes installés par des professionnels.",
        ],
        limits: [
          "Moins d'appareils et nettement plus chers que le Zigbee, avec un catalogue de nouveaux appareils qui se réduit à mesure que les fabricants passent à Matter et Thread, surtout en Europe.",
          "Propriétaire durant la majeure partie de son histoire ; il ne s'est ouvert comme standard ratifié que vers 2020.",
          "Des fréquences verrouillées par région (les appareils UE et US ne sont pas interchangeables), un réseau classique plafonne à ~232 appareils, et il a la réputation d'être pénible à intégrer.",
        ],
      },
      {
        id: "matter",
        name: "Matter & Thread",
        tagline: "Le standard d'interopérabilité",
        intro:
          "Matter est le plus récent des trois, et il est différent : ce n'est pas un protocole radio, mais un standard applicatif qui fonctionne sur le Wi-Fi ou sur Thread, une radio maillée basse consommation comparable à Zigbee et Z-Wave. Porté par Apple, Google, Amazon et Samsung, son but est qu'un même appareil fonctionne dans tous les grands écosystèmes. Avec le Zigbee, le Matter-over-Thread est largement vu comme l'avenir de la maison connectée.",
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
        "Pour une maison connectée toute neuve aujourd'hui, les deux sur lesquels miser sont le Zigbee et le Matter-over-Thread. Voici le guide express :",
      cards: [
        {
          icon: "🟢",
          title: "Choisissez Zigbee si…",
          text: "Vous voulez dès maintenant le choix d'appareils le plus large et le moins cher, et un grand maillage local. C'est le choix sûr et éprouvé aujourd'hui, idéalement avec un hub ouvert pour la meilleure interopérabilité.",
        },
        {
          icon: "🟣",
          title: "Choisissez Matter / Thread si…",
          text: "Vous voulez des appareils pérennes et multi-écosystèmes, et tenez à miser sur le standard derrière lequel toute l'industrie se rassemble. C'est là que va le marché.",
        },
        {
          icon: "🔵",
          title: "Choisissez Z-Wave si…",
          text: "Vous avez déjà une installation Z-Wave, ou avez spécifiquement besoin de ses appareils certifiés sous-GHz, en sachant que c'est l'option legacy, au catalogue plus cher et en recul.",
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
      "For a new setup, Zigbee usually makes more sense today: a far larger, cheaper and still-growing catalog on the 2.4 GHz band. Z-Wave remains reliable on sub-GHz frequencies with less Wi-Fi interference and strict certification, but its devices are pricier and its new-device range is shrinking as makers shift to Matter and Thread. Both are local, mesh-based protocols.",
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
      "Pour une nouvelle installation, le Zigbee a généralement plus de sens aujourd'hui : un catalogue bien plus large, moins cher et encore en croissance, sur la bande 2,4 GHz. Le Z-Wave reste fiable sur des fréquences sous-GHz, avec moins d'interférences Wi-Fi et une certification stricte, mais ses appareils sont plus chers et sa gamme de nouveaux appareils se réduit à mesure que les fabricants passent à Matter et Thread. Les deux sont des protocoles locaux et maillés.",
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
