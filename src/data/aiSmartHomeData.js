// Content for the "AI smart home" pillar page.
// Foundational, evergreen guide targeting the broad "AI smart home / control
// your home with AI / AI home automation" intent, and Gladys' single biggest
// differentiator. It pulls together the AI capabilities documented across the
// site and blog (natural-language control, AI agent, proactive AI, weekly
// report, MCP server) into one citable page, with a strong
// privacy angle (open-weight models hosted in Europe, optional local LLM).

const aiSmartHomeContent = {
  en: {
    meta: {
      title: "AI smart home: control your home with AI, privately",
      description:
        "Control your smart home in natural language, get a weekly AI report, let a proactive AI agent act for you, and connect Claude, Perplexity or Mistral via MCP, with open-weight AI hosted in Europe. Private by design.",
    },
    hero: {
      title: "Control your smart home with AI",
      subtitle:
        "Talk to your home in plain language, let a proactive AI agent act for you, and keep it all private, with open-weight AI hosted in Europe.",
      intro: [
        "Most \"AI\" in the smart home world is just a voice assistant that turns your words into a fixed set of commands, while sending everything to a big tech cloud. Gladys takes AI much further, and keeps it private.",
        "With Gladys, you talk to your home in your own words and a real AI agent figures out what to do: it reads your sensors, controls your devices, analyzes your camera images, writes automations for you, and even sends you a weekly report on your home. And because it runs on open-weight models hosted in Europe, your home doesn't become fuel for someone's advertising machine.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "See the AI integration →",
        href: "/docs/integrations/openai/",
      },
    },
    capabilities: {
      title: "What AI can do in your home",
      intro:
        "AI in Gladys isn't a gimmick bolted on top. It runs through the whole platform, from everyday control to proactive decisions.",
      cards: [
        {
          icon: "💬",
          title: "Natural-language control",
          text: "Talk to your home from the chat, Telegram or a voice widget. There's no fixed list of commands: ask in your own words and the AI figures out what to do.",
        },
        {
          icon: "🧠",
          title: "An AI agent that acts",
          text: "Gladys reasons before answering and chains several actions to reach a goal: read a sensor, control devices, pull up your energy history, or build a scene, all from a single request.",
        },
        {
          icon: "🔮",
          title: "Proactive AI",
          text: "Give Gladys an instruction in plain language and let it decide. For example: when there's motion in the garage, check the camera and only alert you if the car isn't yours.",
        },
        {
          icon: "📊",
          title: "A weekly AI report",
          text: "Every week, Gladys sends a personalized summary of your home: comfort, energy use and cost, silent or disconnected sensors, trends and practical advice.",
        },
        {
          icon: "🔌",
          title: "Connect your own AI agent (MCP)",
          text: "Gladys includes an MCP server, so you can connect Claude Desktop, Perplexity or Mistral Le Chat to your home to read sensors, view cameras and control devices.",
        },
      ],
    },
    privacy: {
      title: "Private by design",
      paragraphs: [
        "This is where Gladys is different. Cloud voice assistants send everything you say to servers abroad, tie it to your account, and use it to profile you. Gladys' built-in AI runs on open-weight models hosted in France (Scaleway), so your requests are processed in Europe, under GDPR, never sold or mined for ads.",
        "And if you want to go even further, AI in the smart home doesn't have to mean the cloud at all: you can connect your own local LLM, so your home's intelligence runs entirely on hardware you own. Either way, you stay in control of where your data goes.",
      ],
      link: { label: "How AI works in Gladys →", href: "/docs/integrations/openai/" },
    },
    howTo: {
      title: "Getting started with AI in Gladys",
      intro: "There are two complementary ways to bring AI into your Gladys home:",
      points: [
        "Gladys' built-in AI assistant is included in Gladys Plus. Once your instance is connected, talk to your home from the Chat tab, Telegram, or the voice assistant widget.",
        "To use your own AI agent, enable the MCP server and connect a client like Claude Desktop, Perplexity or Mistral Le Chat. It works locally on your network, and remotely through the Gladys Plus Open API.",
        "The more devices you have in Gladys, the more the AI can see and do for you.",
      ],
      outro: "From there, you just talk to your home, and it does the rest.",
    },
    related: {
      title: "Go further with AI in Gladys",
      intro:
        "Want to dig in? These guides cover each piece of Gladys' AI, and how it stays private:",
      links: [
        {
          label: "Smart home MCP server",
          href: "/smart-home-mcp-server/",
          text: "What your AI agent can do in your home through MCP, local or remote.",
        },
        {
          label: "Control your home in natural language",
          href: "/docs/integrations/openai/",
          text: "The AI integration: talk to Gladys from the chat, Telegram or the voice assistant.",
        },
        {
          label: "Connect Claude, Perplexity or Mistral (MCP)",
          href: "/docs/integrations/mcp/",
          text: "Plug your favorite AI agent into your smart home through the Gladys MCP server.",
        },
        {
          label: "Gladys Plus",
          href: "/plus/",
          text: "The optional subscription that unlocks the built-in AI, hosted in Europe.",
        },
        {
          label: "Alexa alternative",
          href: "/alexa-alternative/",
          text: "A private, local alternative to cloud voice assistants like Alexa.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "The bigger picture: how AI fits into a fully local, private smart home.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Bring AI into your smart home",
      text: "Gladys is free and open-source, and its AI runs on open-weight models hosted in Europe. Private by design, self-hosted, no data resale.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Discover Gladys Plus", href: "/plus/" },
    },
  },

  fr: {
    meta: {
      title: "Maison connectée et IA : contrôlez votre maison avec l'intelligence artificielle",
      description:
        "Pilotez votre maison en langage naturel, recevez un rapport hebdomadaire par IA, laissez une IA proactive agir pour vous, et connectez Claude, Perplexity ou Mistral via MCP, avec une IA open-weight hébergée en Europe. Respectueuse de la vie privée.",
    },
    hero: {
      title: "Contrôlez votre maison connectée avec l'IA",
      subtitle:
        "Parlez à votre maison en langage naturel, laissez une IA proactive agir pour vous, et gardez tout privé, avec une IA open-weight hébergée en Europe.",
      intro: [
        "La plupart des « IA » de la maison connectée ne sont qu'un assistant vocal qui transforme vos mots en une liste figée de commandes, tout en envoyant tout vers le cloud d'un géant de la tech. Gladys va beaucoup plus loin, et garde tout privé.",
        "Avec Gladys, vous parlez à votre maison avec vos propres mots et une véritable IA agent comprend quoi faire : elle lit vos capteurs, pilote vos appareils, analyse les images de vos caméras, écrit des automatisations pour vous, et vous envoie même un rapport hebdomadaire sur votre maison. Et comme elle tourne sur des modèles open-weight hébergés en Europe, votre maison ne devient pas le carburant de la machine publicitaire d'un autre.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Voir l'intégration IA →",
        href: "/docs/integrations/openai/",
      },
    },
    capabilities: {
      title: "Ce que l'IA peut faire chez vous",
      intro:
        "L'IA dans Gladys n'est pas un gadget posé par-dessus. Elle traverse toute la plateforme, du contrôle quotidien aux décisions proactives.",
      cards: [
        {
          icon: "💬",
          title: "Contrôle en langage naturel",
          text: "Parlez à votre maison depuis le chat, Telegram ou un widget vocal. Pas de liste figée de commandes : demandez avec vos propres mots et l'IA comprend quoi faire.",
        },
        {
          icon: "🧠",
          title: "Une IA agent qui agit",
          text: "Gladys réfléchit avant de répondre et enchaîne plusieurs actions pour atteindre un but : lire un capteur, piloter des appareils, sortir votre historique d'énergie ou créer une scène, le tout depuis une seule demande.",
        },
        {
          icon: "🔮",
          title: "Une IA proactive",
          text: "Donnez à Gladys une instruction en langage naturel et laissez-la décider. Par exemple : quand il y a du mouvement dans le garage, vérifier la caméra et ne vous alerter que si la voiture n'est pas la vôtre.",
        },
        {
          icon: "📊",
          title: "Un rapport hebdomadaire par IA",
          text: "Chaque semaine, Gladys vous envoie un résumé personnalisé de votre maison : confort, consommation et coût d'énergie, capteurs silencieux ou déconnectés, tendances et conseils pratiques.",
        },
        {
          icon: "🔌",
          title: "Branchez votre propre IA (MCP)",
          text: "Gladys intègre un serveur MCP : vous pouvez connecter Claude Desktop, Perplexity ou Mistral Le Chat à votre maison pour lire vos capteurs, voir vos caméras et piloter vos appareils.",
        },
      ],
    },
    privacy: {
      title: "Respectueuse de la vie privée par conception",
      paragraphs: [
        "C'est là que Gladys fait la différence. Les assistants vocaux cloud envoient tout ce que vous dites vers des serveurs à l'étranger, le lient à votre compte et s'en servent pour vous profiler. L'IA intégrée à Gladys tourne sur des modèles open-weight hébergés en France (Scaleway) : vos requêtes sont traitées en Europe, sous le RGPD, jamais revendues ni exploitées pour la publicité.",
        "Et si vous voulez aller encore plus loin, l'IA dans la maison connectée n'a pas à passer par le cloud du tout : vous pouvez connecter votre propre LLM local, pour que l'intelligence de votre maison tourne entièrement sur du matériel qui vous appartient. Dans tous les cas, vous gardez la main sur l'endroit où vont vos données.",
      ],
      link: { label: "Comment l'IA fonctionne dans Gladys →", href: "/docs/integrations/openai/" },
    },
    howTo: {
      title: "Bien démarrer avec l'IA dans Gladys",
      intro: "Il y a deux façons complémentaires d'amener l'IA dans votre maison Gladys :",
      points: [
        "L'assistant IA intégré de Gladys est inclus dans Gladys Plus. Une fois votre instance connectée, parlez à votre maison depuis l'onglet Chat, Telegram ou le widget assistant vocal.",
        "Pour utiliser votre propre IA agent, activez le serveur MCP et connectez un client comme Claude Desktop, Perplexity ou Mistral Le Chat. Il fonctionne en local sur votre réseau, et à distance via l'Open API de Gladys Plus.",
        "Plus vous avez d'appareils dans Gladys, plus l'IA voit de choses et peut en faire pour vous.",
      ],
      outro: "À partir de là, vous n'avez plus qu'à parler à votre maison, elle s'occupe du reste.",
    },
    related: {
      title: "Aller plus loin avec l'IA dans Gladys",
      intro:
        "Envie de creuser ? Ces guides détaillent chaque brique de l'IA de Gladys, et comment elle reste privée :",
      links: [
        {
          label: "Serveur MCP domotique",
          href: "/smart-home-mcp-server/",
          text: "Ce que votre agent IA peut faire dans votre maison via MCP, en local ou à distance.",
        },
        {
          label: "Contrôler sa maison en langage naturel",
          href: "/docs/integrations/openai/",
          text: "L'intégration IA : parlez à Gladys depuis le chat, Telegram ou l'assistant vocal.",
        },
        {
          label: "Connecter Claude, Perplexity ou Mistral (MCP)",
          href: "/docs/integrations/mcp/",
          text: "Branchez votre IA agent préférée à votre maison via le serveur MCP de Gladys.",
        },
        {
          label: "Gladys Plus",
          href: "/plus/",
          text: "L'abonnement optionnel qui débloque l'IA intégrée, hébergée en Europe.",
        },
        {
          label: "Alternative à Alexa",
          href: "/alexa-alternative/",
          text: "Une alternative locale et privée aux assistants vocaux cloud comme Alexa.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "La vue d'ensemble : comment l'IA s'intègre dans une maison connectée 100% locale et privée.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Amenez l'IA dans votre maison connectée",
      text: "Gladys est gratuite et open source, et son IA tourne sur des modèles open-weight hébergés en Europe. Respectueuse de la vie privée par conception, auto-hébergée, sans revente de données.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Découvrir Gladys Plus", href: "/plus/" },
    },
  },

  de: {
    meta: {
      title: "KI im Smart Home: dein Zuhause privat mit KI steuern",
      description:
        "Steuere dein Smart Home in natürlicher Sprache, mit KI-Wochenbericht, proaktivem KI-Agenten und MCP für Claude, Perplexity oder Mistral. KI aus Europa.",
    },
    hero: {
      title: "Steuere dein Smart Home mit KI",
      subtitle:
        "Sprich mit deinem Zuhause in normaler Sprache, lass einen proaktiven KI-Agenten für dich handeln und behalte dabei deine Privatsphäre, mit Open-Weight-KI gehostet in Europa.",
      intro: [
        "Die meiste „KI“ im Smart Home ist nur ein Sprachassistent, der deine Worte in eine feste Liste von Befehlen übersetzt und dabei alles in die Cloud eines Tech-Konzerns schickt. Gladys geht mit KI viel weiter und hält sie privat.",
        "Mit Gladys sprichst du mit deinem Zuhause in deinen eigenen Worten, und ein echter KI-Agent findet heraus, was zu tun ist: Er liest deine Sensoren, steuert deine Geräte, analysiert deine Kamerabilder, schreibt Automationen für dich und schickt dir sogar einen Wochenbericht über dein Zuhause. Und weil er auf Open-Weight-Modellen läuft, die in Europa gehostet werden, wird dein Zuhause nicht zum Futter für die Werbemaschine eines anderen.",
      ],
      primaryCta: { label: "Kostenlos starten", href: "/de/docs/" },
      secondaryCta: {
        label: "Zur KI-Integration →",
        href: "/de/docs/integrations/openai/",
      },
    },
    capabilities: {
      title: "Was KI in deinem Zuhause leisten kann",
      intro:
        "KI ist bei Gladys kein aufgesetztes Gimmick. Sie zieht sich durch die ganze Plattform, von der alltäglichen Steuerung bis zu proaktiven Entscheidungen.",
      cards: [
        {
          icon: "💬",
          title: "Steuerung in natürlicher Sprache",
          text: "Sprich mit deinem Zuhause über den Chat, Telegram oder ein Sprach-Widget. Es gibt keine feste Befehlsliste: Frag in deinen eigenen Worten, und die KI findet heraus, was zu tun ist.",
        },
        {
          icon: "🧠",
          title: "Ein KI-Agent, der handelt",
          text: "Gladys denkt nach, bevor sie antwortet, und verkettet mehrere Aktionen, um ein Ziel zu erreichen: einen Sensor auslesen, Geräte steuern, deinen Energieverlauf abrufen oder eine Szene bauen, alles mit einer einzigen Anfrage.",
        },
        {
          icon: "🔮",
          title: "Proaktive KI",
          text: "Gib Gladys eine Anweisung in normaler Sprache und lass sie entscheiden. Zum Beispiel: Wenn sich in der Garage etwas bewegt, prüfe die Kamera und alarmiere mich nur, wenn es nicht mein Auto ist.",
        },
        {
          icon: "📊",
          title: "Ein wöchentlicher KI-Bericht",
          text: "Jede Woche schickt dir Gladys eine persönliche Zusammenfassung deines Zuhauses: Komfort, Energieverbrauch und -kosten, stumme oder getrennte Sensoren, Trends und praktische Tipps.",
        },
        {
          icon: "🔌",
          title: "Deinen eigenen KI-Agenten verbinden (MCP)",
          text: "Gladys bringt einen MCP-Server mit, sodass du Claude Desktop, Perplexity oder Mistral Le Chat mit deinem Zuhause verbinden kannst, um Sensoren auszulesen, Kameras anzusehen und Geräte zu steuern.",
        },
      ],
    },
    privacy: {
      title: "Privatsphäre von Grund auf",
      paragraphs: [
        "Hier unterscheidet sich Gladys. Cloud-Sprachassistenten schicken alles, was du sagst, an Server im Ausland, verknüpfen es mit deinem Konto und erstellen damit ein Profil von dir. Die integrierte KI von Gladys läuft auf Open-Weight-Modellen, die in Frankreich gehostet werden (Scaleway). Deine Anfragen werden also in Europa verarbeitet, nach DSGVO, und weder verkauft noch für Werbung ausgewertet.",
        "Und wenn du noch weiter gehen willst: KI im Smart Home muss überhaupt nicht Cloud bedeuten. Du kannst dein eigenes lokales LLM anbinden, sodass die Intelligenz deines Zuhauses komplett auf Hardware läuft, die dir gehört. So oder so behältst du die Kontrolle darüber, wohin deine Daten gehen.",
      ],
      link: { label: "So funktioniert KI in Gladys →", href: "/de/docs/integrations/openai/" },
    },
    howTo: {
      title: "Erste Schritte mit KI in Gladys",
      intro: "Es gibt zwei Wege, die sich ergänzen, um KI in dein Gladys-Zuhause zu bringen:",
      points: [
        "Der integrierte KI-Assistent von Gladys ist in Gladys Plus enthalten. Sobald deine Instanz verbunden ist, sprichst du mit deinem Zuhause über den Chat-Tab, Telegram oder das Sprachassistent-Widget.",
        "Um deinen eigenen KI-Agenten zu nutzen, aktivierst du den MCP-Server und verbindest einen Client wie Claude Desktop, Perplexity oder Mistral Le Chat. Das funktioniert lokal in deinem Netzwerk und aus der Ferne über die Open API von Gladys Plus.",
        "Je mehr Geräte du in Gladys hast, desto mehr kann die KI sehen und für dich erledigen.",
      ],
      outro: "Ab da sprichst du einfach mit deinem Zuhause, und es erledigt den Rest.",
    },
    related: {
      title: "Mehr über KI in Gladys",
      intro:
        "Du willst tiefer einsteigen? Diese Guides behandeln jeden Baustein der KI in Gladys und zeigen, wie sie privat bleibt:",
      links: [
        {
          label: "MCP-Server fürs Smart Home",
          href: "/de/smart-home-mcp-server/",
          text: "Was dein KI-Agent per MCP in deinem Zuhause tun kann, lokal oder aus der Ferne.",
        },
        {
          label: "Dein Zuhause in natürlicher Sprache steuern",
          href: "/de/docs/integrations/openai/",
          text: "Die KI-Integration: Sprich mit Gladys über den Chat, Telegram oder den Sprachassistenten.",
        },
        {
          label: "Claude, Perplexity oder Mistral verbinden (MCP)",
          href: "/de/docs/integrations/mcp/",
          text: "Verbinde deinen Lieblings-KI-Agenten über den MCP-Server von Gladys mit deinem Smart Home.",
        },
        {
          label: "Gladys Plus",
          href: "/de/plus/",
          text: "Das optionale Abo, das die integrierte, in Europa gehostete KI freischaltet.",
        },
        {
          label: "Alexa Alternative",
          href: "/de/alexa-alternative/",
          text: "Eine private, lokale Alternative zu Cloud-Sprachassistenten wie Alexa.",
        },
        {
          label: "Ein lokales Smart Home bauen",
          href: "/de/local-smart-home/",
          text: "Das große Ganze: wie KI in ein vollständig lokales, privates Smart Home passt.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Bring KI in dein Smart Home",
      text: "Gladys ist kostenlos und Open Source, und ihre KI läuft auf Open-Weight-Modellen, die in Europa gehostet werden. Privat von Grund auf, selbst gehostet, kein Datenverkauf.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Gladys Plus entdecken", href: "/de/plus/" },
    },
  },
};

export const aiSmartHomeFaqEn = [
  {
    question: "Can I control my smart home with AI?",
    answer:
      "Yes. With Gladys Assistant you control your home in natural language, with no fixed list of commands. You can talk to it from a chat, Telegram or a voice widget, and a real AI agent reads your sensors, controls your devices, analyzes camera images and even creates automations for you.",
  },
  {
    question: "Is there a privacy-friendly AI for the smart home?",
    answer:
      "Yes. Gladys' built-in AI runs on open-weight models hosted in France (Scaleway), so your requests are processed in Europe under GDPR, never sold or used for advertising. You can also connect your own local LLM so the AI runs entirely on hardware you own.",
  },
  {
    question: "Which AI model does Gladys use?",
    answer:
      "Gladys' built-in AI uses open-weight large language models hosted in Europe (Scaleway, France) through Gladys Plus. You can also connect your own AI agent, such as Claude Desktop, Perplexity or Mistral Le Chat, via the Gladys MCP server.",
  },
  {
    question: "Can AI create automations for me?",
    answer:
      "Yes. Gladys' AI agent can reason and chain several actions: read sensors, control devices, show your energy history, and create scenes from a single natural-language request, like \"create a scene that turns off all the lights at 11 p.m.\".",
  },
  {
    question: "Can I connect Claude, ChatGPT or Mistral to my smart home?",
    answer:
      "Yes. Gladys includes an MCP server (Model Context Protocol) that lets compatible AI agents such as Claude Desktop, Perplexity or Mistral Le Chat read your device states, view your cameras, control lights and switches, and launch scenes. It works on your local network, and remotely with the Gladys Plus Open API.",
  },
  {
    question: "Does AI in Gladys cost extra?",
    answer:
      "Gladys' built-in AI assistant is part of the Gladys Plus subscription (Plus plan). Connecting your own AI agent through the local MCP server works with your own client and runs on your network. Gladys itself stays free and open-source at its core.",
  },
];

export const aiSmartHomeFaqFr = [
  {
    question: "Puis-je contrôler ma maison connectée avec l'IA ?",
    answer:
      "Oui. Avec Gladys Assistant, vous pilotez votre maison en langage naturel, sans liste figée de commandes. Vous pouvez lui parler depuis un chat, Telegram ou un widget vocal, et une véritable IA agent lit vos capteurs, pilote vos appareils, analyse les images de caméra et crée même des automatisations pour vous.",
  },
  {
    question: "Existe-t-il une IA respectueuse de la vie privée pour la maison connectée ?",
    answer:
      "Oui. L'IA intégrée de Gladys tourne sur des modèles open-weight hébergés en France (Scaleway) : vos requêtes sont traitées en Europe sous le RGPD, jamais revendues ni utilisées pour la publicité. Vous pouvez aussi connecter votre propre LLM local pour que l'IA tourne entièrement sur votre matériel.",
  },
  {
    question: "Quel modèle d'IA utilise Gladys ?",
    answer:
      "L'IA intégrée de Gladys utilise des grands modèles de langage open-weight hébergés en Europe (Scaleway, France) via Gladys Plus. Vous pouvez aussi connecter votre propre IA agent, comme Claude Desktop, Perplexity ou Mistral Le Chat, via le serveur MCP de Gladys.",
  },
  {
    question: "L'IA peut-elle créer des automatisations pour moi ?",
    answer:
      "Oui. L'IA agent de Gladys peut raisonner et enchaîner plusieurs actions : lire des capteurs, piloter des appareils, afficher votre historique d'énergie et créer des scènes à partir d'une simple demande en langage naturel, comme « crée une scène qui éteint toutes les lumières à 23 h ».",
  },
  {
    question: "Puis-je connecter Claude, ChatGPT ou Mistral à ma maison connectée ?",
    answer:
      "Oui. Gladys intègre un serveur MCP (Model Context Protocol) qui permet à des IA agents compatibles comme Claude Desktop, Perplexity ou Mistral Le Chat de lire l'état de vos appareils, voir vos caméras, piloter lumières et prises, et lancer des scènes. Il fonctionne sur votre réseau local, et à distance avec l'Open API de Gladys Plus.",
  },
  {
    question: "L'IA dans Gladys est-elle payante ?",
    answer:
      "L'assistant IA intégré de Gladys fait partie de l'abonnement Gladys Plus (formule Plus). Connecter votre propre IA agent via le serveur MCP local fonctionne avec votre propre client et tourne sur votre réseau. Gladys elle-même reste gratuite et open source dans son cœur.",
  },
];

export const aiSmartHomeFaqDe = [
  {
    question: "Kann ich mein Smart Home mit KI steuern?",
    answer:
      "Ja. Mit Gladys Assistant steuerst du dein Zuhause in natürlicher Sprache, ohne feste Befehlsliste. Du kannst über einen Chat, Telegram oder ein Sprach-Widget mit ihr sprechen, und ein echter KI-Agent liest deine Sensoren, steuert deine Geräte, analysiert Kamerabilder und erstellt sogar Automationen für dich.",
  },
  {
    question: "Gibt es eine datenschutzfreundliche KI für das Smart Home?",
    answer:
      "Ja. Die integrierte KI von Gladys läuft auf Open-Weight-Modellen, die in Frankreich gehostet werden (Scaleway). Deine Anfragen werden also in Europa nach DSGVO verarbeitet und weder verkauft noch für Werbung genutzt. Du kannst auch dein eigenes lokales LLM anbinden, sodass die KI komplett auf Hardware läuft, die dir gehört.",
  },
  {
    question: "Welches KI-Modell nutzt Gladys?",
    answer:
      "Die integrierte KI von Gladys nutzt große Open-Weight-Sprachmodelle, die über Gladys Plus in Europa gehostet werden (Scaleway, Frankreich). Du kannst auch deinen eigenen KI-Agenten wie Claude Desktop, Perplexity oder Mistral Le Chat über den MCP-Server von Gladys anbinden.",
  },
  {
    question: "Kann die KI Automationen für mich erstellen?",
    answer:
      "Ja. Der KI-Agent von Gladys kann nachdenken und mehrere Aktionen verketten: Sensoren auslesen, Geräte steuern, deinen Energieverlauf anzeigen und Szenen aus einer einzigen Anfrage in natürlicher Sprache erstellen, etwa „Erstelle eine Szene, die um 23 Uhr alle Lichter ausschaltet“.",
  },
  {
    question: "Kann ich Claude, ChatGPT oder Mistral mit meinem Smart Home verbinden?",
    answer:
      "Ja. Gladys enthält einen MCP-Server (Model Context Protocol), über den kompatible KI-Agenten wie Claude Desktop, Perplexity oder Mistral Le Chat deine Gerätezustände auslesen, deine Kameras ansehen, Lichter und Schalter steuern und Szenen starten können. Das funktioniert in deinem lokalen Netzwerk und aus der Ferne mit der Open API von Gladys Plus.",
  },
  {
    question: "Kostet die KI in Gladys extra?",
    answer:
      "Der integrierte KI-Assistent von Gladys ist Teil des Gladys-Plus-Abos (Plus-Tarif). Deinen eigenen KI-Agenten über den lokalen MCP-Server anzubinden, funktioniert mit deinem eigenen Client und läuft in deinem Netzwerk. Gladys selbst bleibt im Kern kostenlos und Open Source.",
  },
];

export default aiSmartHomeContent;
