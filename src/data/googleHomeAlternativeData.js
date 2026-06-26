// Content for the "Google Home alternative" landing page.
// Search intent: people looking to replace or move away from Google Home /
// Google Assistant, mostly for privacy reasons. Like the Alexa page, Google
// Home is a cloud voice assistant rather than a competing home automation
// platform, so the angle is privacy + local control. We stay honest: Google
// Home is a great voice product, and Gladys can even integrate with it, but for
// privacy and local control Gladys is a stronger foundation.

const alternativeContent = {
  en: {
    meta: {
      title: "The best privacy-friendly Google Home alternative: Gladys Assistant",
      description:
        "Looking for a privacy-friendly Google Home alternative? Gladys Assistant is a local, open-source, self-hosted smart home platform: your data stays at home, no cloud recordings, no ads, no data resale. Free and self-hosted.",
    },
    hero: {
      title: "Looking for a privacy-friendly Google Home alternative?",
      subtitle:
        "Meet Gladys Assistant, the local, open-source smart home platform that keeps your data at home instead of in Google's cloud.",
      intro: [
        "Google Home is convenient, but everything you say is processed in Google's cloud, tied to your Google account, and feeds the same advertising machine that powers the rest of the company. For a lot of people, that's a deal-breaker.",
        "Gladys Assistant takes the opposite approach. It's a free, open-source, self-hosted smart home platform that runs at home, on your own machine. Your devices and automations stay on your local network, with no mandatory cloud, no recordings on someone else's servers, no ads and no data resale.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Discover Gladys' voice assistant →",
        href: "/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "Why look for an alternative to Google Home?",
      intro:
        "Google Home is a polished voice assistant, but its cloud-first, ad-driven model comes with real trade-offs. The most common reasons people start looking for an alternative:",
      points: [
        "Everything you say is sent to Google's cloud, and voice recordings can be stored and reviewed.",
        "Your usage is tied to your Google account and the advertising profile behind it.",
        "It needs a Google account and a constant internet connection; very little works offline.",
        "Google has a long track record of discontinuing products and reshaping its assistant (now moving to Gemini).",
        "It's a voice front-end, not a real automation engine: genuinely local, complex automations are limited.",
      ],
      outro:
        "None of this makes Google Home a bad product, it's great at understanding voice. It's simply a question of priorities, and if privacy and local control matter to you, there's a better foundation for your smart home.",
    },
    reasons: {
      title: "Why Gladys is a great privacy-friendly Google Home alternative",
      cards: [
        {
          icon: "🔒",
          title: "Your data stays at home",
          text: "Gladys runs on your own machine, so your smart home data stays on your local network. No mandatory cloud, no recordings on Google's servers, no tracking.",
        },
        {
          icon: "🌐",
          title: "Works without the cloud",
          text: "Because it runs locally, your home keeps working even if your internet drops or a cloud service is shut down. Your automations don't depend on Google staying online.",
        },
        {
          icon: "🧠",
          title: "Real automation, not just commands",
          text: "Gladys has a full scenes engine with triggers, conditions and actions. You build a home that reacts on its own, not just one that waits for voice commands.",
        },
        {
          icon: "🎙️",
          title: "A voice assistant you control",
          text: "Gladys has its own voice assistant, so you keep hands-free control without handing every sentence you say to a big tech company.",
        },
        {
          icon: "🔌",
          title: "Built on open standards",
          text: "Zigbee, Matter and MQTT are first-class citizens, so you're never locked into one brand's ecosystem or forced to buy compatible accessories.",
        },
        {
          icon: "💚",
          title: "Open-source, no ads, no resale",
          text: "Gladys is 100% free and open-source at its core. There are no ads, no data resale, and an optional Gladys Plus subscription funds the project transparently.",
        },
      ],
    },
    honesty: {
      title: "Being fair: where Google Home has the edge",
      paragraphs: [
        "Let me be transparent. Google Home is excellent at what it does: best-in-class voice recognition, natural conversation, deep answers from Google Search, very cheap speakers, and multi-room audio that just works. Gladys is a home automation platform first, and its voice assistant is newer and something you set up yourself, so Google Home is hard to beat as a pure consumer voice speaker.",
        "The good news is that it doesn't have to be all or nothing. Gladys can integrate with Google Home, so you can keep voice control on your existing Nest speakers while your automations run locally in Gladys. And if privacy is your priority, you can go fully local and drop the cloud assistant entirely. Either way, you stay in control.",
      ],
      compareLink: {
        label: "See how Gladys integrates with Google Home →",
        href: "/docs/integrations/google-home/",
      },
    },
    others: {
      title: "Other privacy-friendly alternatives to Google Home",
      intro:
        "Gladys isn't the only option. To be fair, here are the main alternatives if you want more privacy and local control than Google Home offers:",
      cards: [
        {
          title: "Home Assistant",
          text: "A powerful open-source platform with a local voice option (Assist). Very capable, but with a steep learning curve and some YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "More privacy-conscious than Google Home, but still tied to Apple's ecosystem and cloud, and limited to Apple hardware.",
        },
        {
          title: "OpenVoiceOS / Mycroft",
          text: "Open-source voice assistants focused on privacy. Promising, but more of a tinkerer's project than a polished consumer product.",
        },
        {
          title: "Rhasspy",
          text: "A fully offline voice toolkit that pairs with other platforms. Very private, but technical to set up and maintain.",
        },
      ],
      outro:
        "Among these, Gladys stands out by combining a clean, modern interface, a real local automation engine, and open standards, without the steep learning curve.",
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Try the privacy-friendly Google Home alternative",
      text: "Gladys is free, open-source, and installs in a single Docker command. Local-first, self-hosted, no cloud required, no recordings on someone else's servers.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Discover Gladys Plus",
        href: "/plus/",
      },
    },
  },

  fr: {
    meta: {
      title: "La meilleure alternative à Google Home, respectueuse de la vie privée : Gladys Assistant",
      description:
        "Vous cherchez une alternative à Google Home respectueuse de la vie privée ? Gladys Assistant est une plateforme domotique locale, open source et auto-hébergée : vos données restent chez vous, sans enregistrements dans le cloud, sans publicité, sans revente. Gratuite et auto-hébergée.",
    },
    hero: {
      title: "Vous cherchez une alternative à Google Home respectueuse de votre vie privée ?",
      subtitle:
        "Découvrez Gladys Assistant, la plateforme domotique locale et open source qui garde vos données chez vous plutôt que dans le cloud de Google.",
      intro: [
        "Google Home est pratique, mais tout ce que vous dites est traité dans le cloud de Google, lié à votre compte Google, et alimente la même machine publicitaire que le reste de l'entreprise. Pour beaucoup de gens, c'est rédhibitoire.",
        "Gladys Assistant prend le parti inverse. C'est une plateforme domotique gratuite, open source et auto-hébergée, qui tourne chez vous, sur votre propre machine. Vos appareils et vos automatisations restent sur votre réseau local, sans cloud obligatoire, sans enregistrements sur les serveurs de quelqu'un d'autre, sans publicité et sans revente de données.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Découvrir l'assistant vocal de Gladys →",
        href: "/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "Pourquoi chercher une alternative à Google Home ?",
      intro:
        "Google Home est un assistant vocal abouti, mais son modèle centré sur le cloud et la publicité a un vrai prix. Les raisons les plus fréquentes qui poussent à chercher une alternative :",
      points: [
        "Tout ce que vous dites est envoyé dans le cloud de Google, et les enregistrements vocaux peuvent être stockés et analysés.",
        "Votre usage est lié à votre compte Google et au profil publicitaire qui va avec.",
        "Il faut un compte Google et une connexion internet permanente ; très peu de choses fonctionnent hors ligne.",
        "Google a un long historique d'arrêt de produits et de refontes de son assistant (qui migre désormais vers Gemini).",
        "C'est une interface vocale, pas un vrai moteur d'automatisation : les automatisations locales complexes restent limitées.",
      ],
      outro:
        "Rien de tout cela ne fait de Google Home un mauvais produit : il est excellent pour comprendre la voix. C'est simplement une question de priorités, et si la vie privée et le contrôle local comptent pour vous, il existe une meilleure base pour votre maison connectée.",
    },
    reasons: {
      title: "Pourquoi Gladys est une excellente alternative à Google Home respectueuse de la vie privée",
      cards: [
        {
          icon: "🔒",
          title: "Vos données restent chez vous",
          text: "Gladys tourne sur votre propre machine : vos données domotiques restent sur votre réseau local. Pas de cloud obligatoire, pas d'enregistrements sur les serveurs de Google, pas de tracking.",
        },
        {
          icon: "🌐",
          title: "Fonctionne sans le cloud",
          text: "Comme elle tourne en local, votre maison continue de fonctionner même si votre internet tombe ou si un service cloud ferme. Vos automatisations ne dépendent pas du bon vouloir de Google.",
        },
        {
          icon: "🧠",
          title: "De vraies automatisations, pas juste des commandes",
          text: "Gladys dispose d'un véritable moteur de scènes avec déclencheurs, conditions et actions. Vous construisez une maison qui réagit d'elle-même, pas seulement qui attend des ordres vocaux.",
        },
        {
          icon: "🎙️",
          title: "Un assistant vocal que vous maîtrisez",
          text: "Gladys a son propre assistant vocal : vous gardez le contrôle mains libres sans confier chaque phrase prononcée à un géant de la tech.",
        },
        {
          icon: "🔌",
          title: "Basée sur les standards ouverts",
          text: "Zigbee, Matter et MQTT sont au cœur du projet : vous n'êtes jamais enfermé dans l'écosystème d'une seule marque ni obligé d'acheter des accessoires compatibles.",
        },
        {
          icon: "💚",
          title: "Open source, sans publicité ni revente",
          text: "Gladys est 100 % gratuite et open source dans son cœur. Pas de publicité, pas de revente de données, et un abonnement Gladys Plus optionnel finance le projet en toute transparence.",
        },
      ],
    },
    honesty: {
      title: "En toute honnêteté : là où Google Home garde l'avantage",
      paragraphs: [
        "Soyons transparents. Google Home est excellent dans son domaine : une reconnaissance vocale de premier ordre, une conversation naturelle, des réponses approfondies issues de Google Search, des enceintes très bon marché et un audio multi-pièces qui fonctionne tout seul. Gladys est avant tout une plateforme domotique, et son assistant vocal est plus récent et se configure soi-même : Google Home reste donc difficile à battre comme pure enceinte vocale grand public.",
        "La bonne nouvelle, c'est que ce n'est pas tout ou rien. Gladys peut s'intégrer avec Google Home : vous gardez le contrôle vocal sur vos enceintes Nest existantes pendant que vos automatisations tournent en local dans Gladys. Et si la vie privée est votre priorité, vous pouvez passer en 100 % local et abandonner complètement l'assistant cloud. Dans tous les cas, vous gardez la main.",
      ],
      compareLink: {
        label: "Voir comment Gladys s'intègre avec Google Home →",
        href: "/docs/integrations/google-home/",
      },
    },
    others: {
      title: "Les autres alternatives à Google Home respectueuses de la vie privée",
      intro:
        "Gladys n'est pas la seule option. Pour être juste, voici les principales alternatives si vous voulez plus de vie privée et de contrôle local qu'avec Google Home :",
      cards: [
        {
          title: "Home Assistant",
          text: "Une plateforme open source puissante, avec une option vocale locale (Assist). Très capable, mais avec une courbe d'apprentissage raide et un peu de YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "Plus soucieux de la vie privée que Google Home, mais toujours lié à l'écosystème et au cloud d'Apple, et limité au matériel Apple.",
        },
        {
          title: "OpenVoiceOS / Mycroft",
          text: "Des assistants vocaux open source centrés sur la vie privée. Prometteurs, mais davantage des projets de bidouilleurs que des produits grand public aboutis.",
        },
        {
          title: "Rhasspy",
          text: "Une boîte à outils vocale 100 % hors ligne qui se couple à d'autres plateformes. Très respectueux de la vie privée, mais technique à installer et maintenir.",
        },
      ],
      outro:
        "Parmi elles, Gladys se distingue en combinant une interface moderne et épurée, un vrai moteur d'automatisation local et des standards ouverts, sans la courbe d'apprentissage raide.",
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Essayez l'alternative à Google Home respectueuse de la vie privée",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Locale d'abord, auto-hébergée, sans cloud obligatoire, sans enregistrements sur les serveurs de quelqu'un d'autre.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Découvrir Gladys Plus",
        href: "/plus/",
      },
    },
  },
};

export const alternativeFaqEn = [
  {
    question: "Is there a privacy-friendly alternative to Google Home?",
    answer:
      "Yes. Gladys Assistant is a local, open-source, self-hosted smart home platform that runs on your own machine, so your data stays on your local network instead of in Google's cloud. There are no recordings on someone else's servers, no ads and no data resale.",
  },
  {
    question: "Does Google Home record everything you say?",
    answer:
      "Google Home processes your voice requests in Google's cloud, and voice recordings can be stored and reviewed to improve its services. Gladys takes the opposite approach: it runs locally, so your smart home data stays at home.",
  },
  {
    question: "Can I replace Google Home with a local, self-hosted system?",
    answer:
      "Yes. Gladys Assistant is fully self-hosted and runs at home. It has its own voice assistant and a real automation engine, so you can move away from a cloud assistant while keeping hands-free control and powerful local automations.",
  },
  {
    question: "Does Gladys work without the cloud or internet?",
    answer:
      "Yes. Gladys' core runs entirely on your local network, so your home keeps working even if your internet drops or a cloud service is shut down. An optional Gladys Plus subscription adds remote access and AI, but the self-hosted core stays local.",
  },
  {
    question: "Does Gladys have a voice assistant like Google Home?",
    answer:
      "Yes, Gladys has its own voice assistant for hands-free control. It's newer than Google Assistant and you set it up yourself, but it lets you keep voice control without sending every sentence you say to a big tech company.",
  },
  {
    question: "Can I keep using Google Home with Gladys?",
    answer:
      "Yes. Gladys can integrate with Google Home, so you can keep voice control on your Nest speakers while your automations run locally in Gladys. If privacy is your priority, you can also go fully local and drop the cloud assistant entirely.",
  },
];

export const alternativeFaqFr = [
  {
    question: "Existe-t-il une alternative à Google Home respectueuse de la vie privée ?",
    answer:
      "Oui. Gladys Assistant est une plateforme domotique locale, open source et auto-hébergée, qui tourne sur votre propre machine : vos données restent sur votre réseau local plutôt que dans le cloud de Google. Pas d'enregistrements sur les serveurs de quelqu'un d'autre, pas de publicité, pas de revente de données.",
  },
  {
    question: "Google Home enregistre-t-il tout ce que vous dites ?",
    answer:
      "Google Home traite vos requêtes vocales dans le cloud de Google, et les enregistrements vocaux peuvent être stockés et analysés pour améliorer ses services. Gladys prend le parti inverse : elle tourne en local, donc vos données domotiques restent chez vous.",
  },
  {
    question: "Puis-je remplacer Google Home par un système local et auto-hébergé ?",
    answer:
      "Oui. Gladys Assistant est entièrement auto-hébergée et tourne chez vous. Elle dispose de son propre assistant vocal et d'un vrai moteur d'automatisation : vous pouvez quitter un assistant cloud tout en gardant le contrôle mains libres et des automatisations locales puissantes.",
  },
  {
    question: "Gladys fonctionne-t-elle sans cloud ni internet ?",
    answer:
      "Oui. Le cœur de Gladys tourne entièrement sur votre réseau local : votre maison continue de fonctionner même si votre internet tombe ou si un service cloud ferme. L'abonnement optionnel Gladys Plus ajoute l'accès distant et l'IA, mais le cœur auto-hébergé reste local.",
  },
  {
    question: "Gladys a-t-elle un assistant vocal comme Google Home ?",
    answer:
      "Oui, Gladys a son propre assistant vocal pour le contrôle mains libres. Il est plus récent que Google Assistant et se configure soi-même, mais il vous permet de garder le contrôle vocal sans envoyer chaque phrase prononcée à un géant de la tech.",
  },
  {
    question: "Puis-je continuer à utiliser Google Home avec Gladys ?",
    answer:
      "Oui. Gladys peut s'intégrer avec Google Home : vous gardez le contrôle vocal sur vos enceintes Nest pendant que vos automatisations tournent en local dans Gladys. Et si la vie privée est votre priorité, vous pouvez aussi passer en 100 % local et abandonner complètement l'assistant cloud.",
  },
];

export default alternativeContent;
