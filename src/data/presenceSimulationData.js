// Content for the "presence simulation" use-case page.
// Problem-led intent ("presence simulation", "make my house look occupied").
// Honest framing: Gladys has no single "presence simulation" button, you build
// it from scenes (random lights, shutters, scheduled triggers). Pairs naturally
// with the DIY alarm page. Local, private, free and open-source.

const presenceContent = {
  en: {
    meta: {
      title: "Presence simulation: make your home look occupied while away",
      description:
        "Set up presence simulation with Gladys Assistant: randomly turn lights, shutters and TV on and off while you're away to deter burglars, all built from local scenes, free, open-source and private.",
    },
    screenshotCaption:
      "Build presence simulation from scenes in Gladys, running locally on your own machine.",
    hero: {
      title: "Presence simulation: make your home look lived-in",
      subtitle:
        "Randomly switch lights, shutters and devices while you're away, so an empty house looks occupied, all from local scenes you fully control.",
      intro: [
        "An empty home is an easy target. The single most effective, low-cost deterrent against burglary is making the house look occupied while you're away.",
        "With Gladys Assistant you build presence simulation from scenes: lights and shutters that turn on and off at believable times, even at random, running locally on your own machine, free and open-source.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Learn about scenes →",
        href: "/docs/scenes/intro/",
      },
    },
    problem: {
      title: "Why an empty home is a target",
      intro: "Burglars look for homes that are clearly unoccupied. The classic tells are easy to spot:",
      points: [
        "Lights that stay off every single evening while you're on holiday.",
        "Shutters or blinds that never move for days on end.",
        "No sign of life: no TV glow, no changing patterns, nothing.",
        "A predictable, dark, static house, exactly what an opportunist is hoping for.",
      ],
      outro:
        "Presence simulation removes those tells by recreating the small, irregular signs that someone is home.",
    },
    features: {
      title: "What presence simulation can do",
      intro: "You decide how lived-in your home should look, with simple scenes you fully control:",
      cards: [
        {
          icon: "💡",
          title: "Random light cycles",
          text: "Turn lights on and off in different rooms at varying, believable times in the evening, not on an obvious fixed schedule.",
        },
        {
          icon: "🪟",
          title: "Shutters & blinds",
          text: "Open and close motorized shutters in the morning and evening so the outside of the house behaves as if someone's there.",
        },
        {
          icon: "🌅",
          title: "Sunset-aware timing",
          text: "Trigger scenes relative to local sunset and sunrise, so the simulation tracks the seasons automatically.",
        },
        {
          icon: "📺",
          title: "TV & ambient devices",
          text: "Switch on a TV, a smart speaker or a lamp behind the curtains to add a convincing glow and sound of life.",
        },
        {
          icon: "🎲",
          title: "Randomized patterns",
          text: "Add randomness to timing and which rooms light up, so the pattern never looks automated from the street.",
        },
        {
          icon: "🗓️",
          title: "Only when you're away",
          text: "Tie the whole thing to a 'house empty' state, so simulation runs only when nobody is actually home.",
        },
      ],
    },
    how: {
      title: "How to build presence simulation in Gladys",
      intro: "There's no single button for it, you assemble it from scenes, which is exactly what makes it flexible:",
      points: [
        "Create a 'house empty' condition based on presence (phones off the network, or a manual 'away' switch).",
        "Build a scene that turns a light on, waits a random delay, then turns it off, and repeats across a few rooms.",
        "Schedule scenes to run in the evening, relative to sunset, only while the house is empty.",
        "Add shutters opening in the morning and closing at night to complete the illusion.",
        "Everything runs locally on your machine and keeps working even if your internet drops.",
      ],
      outro: "Your rules, your timing, your home, with no schedule living in someone else's cloud.",
    },
    solution: {
      title: "Local, private, and free to run",
      paragraphs: [
        "Because Gladys runs on your own machine, your presence simulation keeps working without the internet, and nobody outside your home knows your schedule or when you're away.",
        "The Gladys core is free and open-source, so presence simulation costs nothing beyond the devices you already own. It pairs perfectly with a DIY alarm: simulation deters, the alarm reacts.",
      ],
      link: {
        label: "Learn how scenes work →",
        href: "/docs/scenes/intro/",
      },
    },
    related: {
      title: "Go further",
      intro: "Combine presence simulation with the rest of your local smart home:",
      links: [
        {
          label: "DIY home alarm system",
          href: "/diy-home-alarm-system/",
          text: "The natural companion: simulation deters, a local alarm detects and alerts.",
        },
        {
          label: "How scenes work",
          href: "/docs/scenes/intro/",
          text: "The building blocks: triggers, conditions, actions and randomness.",
        },
        {
          label: "Control your home with AI",
          href: "/ai-smart-home/",
          text: "Let AI make your automations smarter and more natural over time.",
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
      title: "Make your home look lived-in while you're away",
      text: "Gladys is free, open-source and local-first. Build presence simulation from scenes, free and open-source, with your schedule kept private.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Learn about scenes", href: "/docs/scenes/intro/" },
    },
  },

  fr: {
    meta: {
      title: "Simulation de présence : faites croire que votre maison est occupée",
      description:
        "Mettez en place une simulation de présence avec Gladys Assistant : allumez et éteignez aléatoirement lumières, volets et TV pendant votre absence pour dissuader les cambrioleurs, le tout avec des scènes locales, gratuites, open source et privées.",
    },
    screenshotCaption:
      "Construisez la simulation de présence à partir de scènes dans Gladys, en local sur votre propre machine.",
    hero: {
      title: "Simulation de présence : donnez l'impression d'une maison habitée",
      subtitle:
        "Allumez et éteignez aléatoirement lumières, volets et appareils pendant votre absence, pour qu'une maison vide paraisse occupée, le tout avec des scènes locales que vous maîtrisez entièrement.",
      intro: [
        "Une maison vide est une cible facile. Le moyen de dissuasion le plus efficace et le moins coûteux contre les cambriolages, c'est de faire croire que la maison est occupée pendant votre absence.",
        "Avec Gladys Assistant, vous construisez la simulation de présence à partir de scènes : des lumières et des volets qui s'allument et s'éteignent à des heures crédibles, voire aléatoires, en local sur votre propre machine, gratuitement et en open source.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Découvrir les scènes →",
        href: "/docs/scenes/intro/",
      },
    },
    problem: {
      title: "Pourquoi une maison vide est une cible",
      intro:
        "Les cambrioleurs repèrent les maisons clairement inoccupées. Les signes classiques sont faciles à repérer :",
      points: [
        "Des lumières qui restent éteintes tous les soirs pendant vos vacances.",
        "Des volets ou des stores qui ne bougent pas pendant des jours.",
        "Aucun signe de vie : pas de lueur de télé, aucun changement, rien.",
        "Une maison prévisible, sombre et figée : exactement ce qu'un opportuniste espère.",
      ],
      outro:
        "La simulation de présence supprime ces signes en recréant les petits indices irréguliers qui montrent que quelqu'un est là.",
    },
    features: {
      title: "Ce que la simulation de présence peut faire",
      intro: "Vous décidez à quel point votre maison doit paraître habitée, avec des scènes simples que vous maîtrisez totalement :",
      cards: [
        {
          icon: "💡",
          title: "Cycles de lumière aléatoires",
          text: "Allumez et éteignez les lumières de différentes pièces à des heures variables et crédibles le soir, pas selon un horaire fixe évident.",
        },
        {
          icon: "🪟",
          title: "Volets & stores",
          text: "Ouvrez et fermez les volets motorisés le matin et le soir pour que l'extérieur de la maison se comporte comme si quelqu'un était là.",
        },
        {
          icon: "🌅",
          title: "Horaires liés au coucher du soleil",
          text: "Déclenchez les scènes par rapport au lever et au coucher du soleil locaux, pour que la simulation suive automatiquement les saisons.",
        },
        {
          icon: "📺",
          title: "TV & appareils d'ambiance",
          text: "Allumez une télé, une enceinte connectée ou une lampe derrière les rideaux pour ajouter une lueur et des sons de vie convaincants.",
        },
        {
          icon: "🎲",
          title: "Schémas aléatoires",
          text: "Ajoutez de l'aléatoire dans les horaires et les pièces allumées, pour que le schéma ne paraisse jamais automatisé depuis la rue.",
        },
        {
          icon: "🗓️",
          title: "Uniquement en votre absence",
          text: "Reliez le tout à un état « maison vide », pour que la simulation ne tourne que lorsque personne n'est réellement là.",
        },
      ],
    },
    how: {
      title: "Comment construire une simulation de présence dans Gladys",
      intro: "Il n'y a pas de bouton unique : vous l'assemblez à partir de scènes, et c'est justement ce qui la rend flexible :",
      points: [
        "Créez une condition « maison vide » basée sur la présence (téléphones absents du réseau, ou un interrupteur « absent » manuel).",
        "Construisez une scène qui allume une lumière, attend un délai aléatoire, puis l'éteint, et répétez sur plusieurs pièces.",
        "Programmez les scènes pour qu'elles tournent le soir, par rapport au coucher du soleil, uniquement quand la maison est vide.",
        "Ajoutez l'ouverture des volets le matin et leur fermeture le soir pour compléter l'illusion.",
        "Tout tourne en local sur votre machine et continue de fonctionner même si votre internet est coupé.",
      ],
      outro: "Vos règles, vos horaires, votre maison : sans planning hébergé dans le cloud de quelqu'un d'autre.",
    },
    solution: {
      title: "Locale, privée, et gratuite à faire tourner",
      paragraphs: [
        "Comme Gladys tourne sur votre propre machine, votre simulation de présence continue de fonctionner sans internet, et personne en dehors de chez vous ne connaît votre planning ni vos moments d'absence.",
        "Le cœur de Gladys est gratuit et open source : la simulation de présence ne coûte rien au-delà des appareils que vous possédez déjà. Elle se marie parfaitement avec une alarme DIY : la simulation dissuade, l'alarme réagit.",
      ],
      link: {
        label: "Comprendre le fonctionnement des scènes →",
        href: "/docs/scenes/intro/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Combinez la simulation de présence avec le reste de votre maison connectée locale :",
      links: [
        {
          label: "Alarme maison DIY",
          href: "/diy-home-alarm-system/",
          text: "Le compagnon naturel : la simulation dissuade, l'alarme locale détecte et alerte.",
        },
        {
          label: "Comment fonctionnent les scènes",
          href: "/docs/scenes/intro/",
          text: "Les briques de base : déclencheurs, conditions, actions et aléatoire.",
        },
        {
          label: "Contrôler sa maison avec l'IA",
          href: "/ai-smart-home/",
          text: "Laissez l'IA rendre vos automatisations plus intelligentes et naturelles au fil du temps.",
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
      title: "Faites croire que votre maison est habitée pendant votre absence",
      text: "Gladys est gratuite, open source et locale d'abord. Construisez une simulation de présence à partir de scènes, gratuitement et en open source, avec votre planning gardé privé.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Découvrir les scènes", href: "/docs/scenes/intro/" },
    },
  },
};

export const presenceFaqEn = [
  {
    question: "What is presence simulation?",
    answer:
      "Presence simulation makes an empty home look occupied by automatically turning lights, shutters and other devices on and off at believable times. It's one of the cheapest, most effective deterrents against burglary while you're away.",
  },
  {
    question: "Does Gladys have a presence simulation feature?",
    answer:
      "Gladys doesn't have a single dedicated button, you build presence simulation from scenes. That's what makes it powerful: you control exactly which devices act, when, and how randomly, instead of a fixed canned mode.",
  },
  {
    question: "How do I make the simulation look realistic?",
    answer:
      "Use random delays and vary which rooms light up, trigger scenes relative to sunset, and move shutters in the morning and evening. Irregular, sunset-aware patterns look far more convincing than a fixed daily schedule.",
  },
  {
    question: "Does presence simulation work without internet?",
    answer:
      "Yes. Gladys runs locally, so your scenes keep firing even if your internet connection drops, and your schedule never leaves your home.",
  },
  {
    question: "Can I run simulation only when I'm away?",
    answer:
      "Yes. Tie your scenes to a 'house empty' state, based on phone presence on the network or a manual 'away' switch, so the simulation runs only when nobody is actually home.",
  },
  {
    question: "Does it cost anything?",
    answer:
      "No. The Gladys core is free and open-source, and presence simulation uses devices you already own, so there's nothing extra to pay.",
  },
];

export const presenceFaqFr = [
  {
    question: "Qu'est-ce que la simulation de présence ?",
    answer:
      "La simulation de présence fait paraître une maison vide occupée en allumant et éteignant automatiquement lumières, volets et autres appareils à des heures crédibles. C'est l'un des moyens de dissuasion les plus économiques et efficaces contre les cambriolages pendant votre absence.",
  },
  {
    question: "Gladys a-t-elle une fonction de simulation de présence ?",
    answer:
      "Gladys n'a pas de bouton dédié unique : vous construisez la simulation de présence à partir de scènes. C'est ce qui la rend puissante : vous contrôlez exactement quels appareils agissent, quand, et avec quelle part d'aléatoire, au lieu d'un mode figé.",
  },
  {
    question: "Comment rendre la simulation réaliste ?",
    answer:
      "Utilisez des délais aléatoires et variez les pièces allumées, déclenchez les scènes par rapport au coucher du soleil, et bougez les volets le matin et le soir. Des schémas irréguliers et calés sur le soleil paraissent bien plus convaincants qu'un horaire quotidien fixe.",
  },
  {
    question: "La simulation de présence fonctionne-t-elle sans internet ?",
    answer:
      "Oui. Gladys tourne en local : vos scènes continuent de se déclencher même si votre connexion internet est coupée, et votre planning ne quitte jamais votre domicile.",
  },
  {
    question: "Puis-je lancer la simulation uniquement quand je suis absent ?",
    answer:
      "Oui. Reliez vos scènes à un état « maison vide », basé sur la présence des téléphones sur le réseau ou un interrupteur « absent » manuel, pour que la simulation ne tourne que lorsque personne n'est réellement là.",
  },
  {
    question: "Est-ce que ça coûte quelque chose ?",
    answer:
      "Non. Le cœur de Gladys est gratuit et open source, et la simulation de présence utilise des appareils que vous possédez déjà : rien de plus à payer.",
  },
];

export default presenceContent;
