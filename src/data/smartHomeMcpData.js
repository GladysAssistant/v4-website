// Content for the "Smart home MCP server" landing page.
// Targets the fast-growing "MCP smart home / home automation MCP server /
// control my home with Claude" intent. Gladys ships a built-in MCP server
// (docs/integrations/mcp.md) but until now it was only mentioned in passing
// on the AI page and in the docs. Capabilities listed here must stay in sync
// with that doc page: read sensor states and history, view cameras, lights,
// switches and scenes. Remote clients (Le Chat) need the Gladys Plus Open API.

const smartHomeMcpContent = {
  en: {
    meta: {
      title: "Smart Home MCP Server: Control Your Home with Claude & AI",
      description:
        "Gladys Assistant has a built-in MCP server: connect Claude Desktop, VS Code Copilot, Perplexity or Mistral Le Chat to your smart home to read sensors, view cameras, control lights and launch scenes. Free, local and open source.",
    },
    screenshotCaption:
      "Your devices, sensors, cameras and scenes in Gladys, exposed to your AI agent through MCP.",
    hero: {
      title: "A smart home MCP server: let your AI agent run your home",
      subtitle:
        "Gladys Assistant includes a Model Context Protocol server. Connect Claude, Copilot, Perplexity or Le Chat, and talk to your real home from the AI tools you already use.",
      intro: [
        "The Model Context Protocol (MCP) is the open standard AI agents use to call external tools. An MCP server exposes functions, and any compatible client, like Claude Desktop or VS Code, can use them in a conversation.",
        "Gladys Assistant, the free and open-source smart home platform, ships its own MCP server. Enable it, generate a key, and your AI agent can read every sensor in your home, look through your cameras, switch lights and plugs, and launch your scenes. No cloud account, no third-party bridge: the server runs on your own Gladys, on your local network.",
      ],
      primaryCta: {
        label: "Set up the MCP server",
        href: "/docs/integrations/mcp/",
      },
      secondaryCta: {
        label: "Try the demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Why connect an AI agent to your home?",
      intro:
        "Chatbots are great at reasoning, but they know nothing about your home. With MCP, they get real data and real controls:",
      points: [
        "Ask questions no dashboard answers: \"Which room was the coldest last night, and was a window open?\"",
        "Analyze history: \"Compare this week's electricity use with last week's and tell me what changed.\"",
        "Check on the house: \"Is anyone in the garden? Describe what the camera sees.\"",
        "Act in plain language: \"Turn off everything in the living room and start the movie scene.\"",
        "Mix your home with your other tools: the same agent can read your calendar, your code or your documents through its other MCP servers.",
      ],
      outro:
        "Your agent reasons, Gladys executes. Your automations and devices stay in Gladys, where they keep running with or without the AI.",
    },
    features: {
      title: "What the Gladys MCP server exposes",
      intro:
        "Today, an MCP client connected to Gladys can:",
      cards: [
        {
          icon: "🌡️",
          title: "Read any sensor",
          text: "The latest value or the history of temperature, humidity, energy, CO₂, air quality, motion, contact, leak, smoke, presence and many more.",
        },
        {
          icon: "📷",
          title: "View your cameras",
          text: "Pull a camera image so the agent can describe what it sees, if your client supports images.",
        },
        {
          icon: "💡",
          title: "Control lights",
          text: "Turn lights on and off, room by room or all at once.",
        },
        {
          icon: "🔌",
          title: "Control switches and plugs",
          text: "Switch smart plugs, relays and switches from any brand Gladys supports.",
        },
        {
          icon: "🎬",
          title: "Launch scenes",
          text: "Start any Gladys scene: the agent triggers it, Gladys runs it locally and reliably.",
        },
        {
          icon: "🔑",
          title: "Per-client API keys",
          text: "Each client gets its own key, generated in Gladys and revocable at any time.",
        },
      ],
    },
    comparison: {
      title: "Local MCP vs remote MCP",
      intro:
        "Gladys gives you two ways to reach the MCP server:",
      cols: {
        feature: "",
        gladys: "Local MCP (free)",
        other: "Remote MCP (Gladys Plus)",
      },
      rows: [
        {
          feature: "URL",
          gladys: "http://YOUR_GLADYS_IP/api/v1/service/mcp/proxy",
          other: "https://api.gladysgateway.com/v1/api/mcp/<API key>",
        },
        {
          feature: "Where it works",
          gladys: "On your home network",
          other: "Anywhere, through Gladys Plus",
        },
        {
          feature: "Clients",
          gladys: "Claude Desktop, VS Code Copilot, Perplexity…",
          other: "The same, plus web-only clients like Mistral Le Chat",
        },
        {
          feature: "Price",
          gladys: "Free",
          other: "Included in Gladys Plus",
        },
      ],
      outro:
        "Clients that only speak MCP over stdio, like the free Claude Desktop, connect through the small open-source mcp-proxy bridge. The setup takes a few minutes and is described step by step in the documentation.",
    },
    how: {
      title: "How to connect Claude to your smart home",
      intro: "Four steps, on any Gladys installation:",
      points: [
        "Install Gladys on a mini-PC, a Raspberry Pi or a NAS with Docker, and add your devices.",
        "In Gladys, open Integrations → MCP and generate an API key for your client.",
        "Add the Gladys MCP server to your client: the local URL and the key in the Authorization header (through mcp-proxy for Claude Desktop).",
        "Restart the client and ask: \"What's the temperature in the bedroom?\"",
      ],
      outro:
        "The full configuration for Claude Desktop, Perplexity, VS Code and Le Chat is in the MCP documentation.",
    },
    solution: {
      title: "The AI is swappable, your home stays yours",
      paragraphs: [
        "MCP is an open standard, so you're not locked into one AI vendor: use Claude today, another model tomorrow, or a local model on your own machine with an MCP-capable client such as LM Studio. Gladys stays the source of truth for your devices, and it's open source under Apache 2.0.",
        "Prefer an assistant that works out of the box? Gladys Plus includes a built-in AI assistant, powered by open-weight models hosted in France, that you can talk to from the chat, Telegram or a voice widget.",
      ],
      link: {
        label: "Discover AI in Gladys →",
        href: "/ai-smart-home/",
      },
    },
    related: {
      title: "Go further",
      intro: "More ways to bring AI into your home:",
      links: [
        {
          label: "MCP documentation",
          href: "/docs/integrations/mcp/",
          text: "Step-by-step configuration for Claude Desktop, Perplexity, VS Code and Le Chat.",
        },
        {
          label: "AI smart home",
          href: "/ai-smart-home/",
          text: "Natural-language control, a proactive AI agent and a weekly report, privately.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "The brands and protocols your AI agent can control through Gladys.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Plug your AI agent into your home",
      text: "Gladys is free, open source and installs with a single Docker command. Its MCP server is built in.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "MCP documentation", href: "/docs/integrations/mcp/" },
    },
  },

  fr: {
    meta: {
      title: "Serveur MCP domotique : pilotez votre maison avec Claude et l'IA",
      description:
        "Gladys Assistant intègre un serveur MCP : connectez Claude Desktop, Copilot dans VS Code, Perplexity ou Mistral Le Chat à votre maison pour lire les capteurs, voir les caméras, piloter les lumières et lancer des scènes. Gratuit, local et open source.",
    },
    screenshotCaption:
      "Vos appareils, capteurs, caméras et scènes dans Gladys, exposés à votre agent IA via MCP.",
    hero: {
      title: "Un serveur MCP domotique : confiez votre maison à votre agent IA",
      subtitle:
        "Gladys Assistant intègre un serveur Model Context Protocol. Connectez Claude, Copilot, Perplexity ou Le Chat, et parlez à votre vraie maison depuis les outils d'IA que vous utilisez déjà.",
      intro: [
        "Le Model Context Protocol (MCP) est le standard ouvert qu'utilisent les agents IA pour appeler des outils externes. Un serveur MCP expose des fonctions, et n'importe quel client compatible, comme Claude Desktop ou VS Code, peut les utiliser dans une conversation.",
        "Gladys Assistant, la plateforme domotique gratuite et open source, embarque son propre serveur MCP. Activez-le, générez une clé, et votre agent IA peut lire tous les capteurs de la maison, regarder vos caméras, allumer lumières et prises, et lancer vos scènes. Pas de compte cloud, pas de passerelle tierce : le serveur tourne sur votre Gladys, sur votre réseau local.",
      ],
      primaryCta: {
        label: "Configurer le serveur MCP",
        href: "/docs/integrations/mcp/",
      },
      secondaryCta: {
        label: "Essayer la démo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Pourquoi connecter un agent IA à sa maison ?",
      intro:
        "Les chatbots raisonnent très bien, mais ne savent rien de votre maison. Avec MCP, ils accèdent à de vraies données et de vraies commandes :",
      points: [
        "Posez des questions qu'aucun tableau de bord ne résout : « Quelle pièce était la plus froide cette nuit, et une fenêtre était-elle ouverte ? »",
        "Analysez l'historique : « Compare ma consommation électrique de cette semaine avec la précédente et dis-moi ce qui a changé. »",
        "Surveillez la maison : « Y a-t-il quelqu'un dans le jardin ? Décris ce que voit la caméra. »",
        "Agissez en langage naturel : « Éteins tout dans le salon et lance la scène cinéma. »",
        "Mélangez la maison et vos autres outils : le même agent peut lire votre agenda, votre code ou vos documents via ses autres serveurs MCP.",
      ],
      outro:
        "Votre agent raisonne, Gladys exécute. Vos automatisations et vos appareils restent dans Gladys, où ils continuent de tourner, avec ou sans IA.",
    },
    features: {
      title: "Ce qu'expose le serveur MCP de Gladys",
      intro: "Aujourd'hui, un client MCP connecté à Gladys peut :",
      cards: [
        {
          icon: "🌡️",
          title: "Lire n'importe quel capteur",
          text: "La dernière valeur ou l'historique de température, humidité, énergie, CO₂, qualité de l'air, mouvement, ouverture, fuite, fumée, présence et bien d'autres.",
        },
        {
          icon: "📷",
          title: "Voir vos caméras",
          text: "Récupérer une image de caméra pour que l'agent décrive ce qu'il voit, si votre client gère les images.",
        },
        {
          icon: "💡",
          title: "Piloter les lumières",
          text: "Allumer et éteindre les lumières, pièce par pièce ou toutes d'un coup.",
        },
        {
          icon: "🔌",
          title: "Piloter prises et interrupteurs",
          text: "Commander prises connectées, relais et interrupteurs de toutes les marques prises en charge par Gladys.",
        },
        {
          icon: "🎬",
          title: "Lancer des scènes",
          text: "Démarrer n'importe quelle scène Gladys : l'agent la déclenche, Gladys l'exécute en local, de façon fiable.",
        },
        {
          icon: "🔑",
          title: "Une clé d'API par client",
          text: "Chaque client a sa propre clé, générée dans Gladys et révocable à tout moment.",
        },
      ],
    },
    comparison: {
      title: "MCP local vs MCP à distance",
      intro: "Gladys vous donne deux façons d'accéder au serveur MCP :",
      cols: {
        feature: "",
        gladys: "MCP local (gratuit)",
        other: "MCP à distance (Gladys Plus)",
      },
      rows: [
        {
          feature: "URL",
          gladys: "http://IP_DE_GLADYS/api/v1/service/mcp/proxy",
          other: "https://api.gladysgateway.com/v1/api/mcp/<clé API>",
        },
        {
          feature: "Où ça marche",
          gladys: "Sur votre réseau local",
          other: "Partout, via Gladys Plus",
        },
        {
          feature: "Clients",
          gladys: "Claude Desktop, Copilot dans VS Code, Perplexity…",
          other: "Les mêmes, plus les clients web comme Mistral Le Chat",
        },
        {
          feature: "Prix",
          gladys: "Gratuit",
          other: "Inclus dans Gladys Plus",
        },
      ],
      outro:
        "Les clients qui ne parlent MCP qu'en stdio, comme la version gratuite de Claude Desktop, se connectent via la petite passerelle open source mcp-proxy. La configuration prend quelques minutes et est décrite pas à pas dans la documentation.",
    },
    how: {
      title: "Comment connecter Claude à sa maison",
      intro: "Quatre étapes, sur n'importe quelle installation de Gladys :",
      points: [
        "Installez Gladys sur un mini-PC, un Raspberry Pi ou un NAS avec Docker, et ajoutez vos appareils.",
        "Dans Gladys, ouvrez Intégrations → MCP et générez une clé d'API pour votre client.",
        "Ajoutez le serveur MCP de Gladys à votre client : l'URL locale et la clé dans l'en-tête Authorization (via mcp-proxy pour Claude Desktop).",
        "Redémarrez le client et demandez : « Quelle température fait-il dans la chambre ? »",
      ],
      outro:
        "La configuration complète pour Claude Desktop, Perplexity, VS Code et Le Chat est dans la documentation MCP.",
    },
    solution: {
      title: "L'IA est interchangeable, votre maison reste à vous",
      paragraphs: [
        "MCP est un standard ouvert : vous n'êtes pas enfermé chez un fournisseur d'IA. Utilisez Claude aujourd'hui, un autre modèle demain, ou un modèle local sur votre machine avec un client compatible MCP comme LM Studio. Gladys reste la source de vérité de vos appareils, et elle est open source sous licence Apache 2.0.",
        "Vous préférez un assistant prêt à l'emploi ? Gladys Plus inclut un assistant IA intégré, basé sur des modèles open-weight hébergés en France, à qui vous parlez depuis le chat, Telegram ou un widget vocal.",
      ],
      link: {
        label: "Découvrir l'IA dans Gladys →",
        href: "/ai-smart-home/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres façons d'amener l'IA dans votre maison :",
      links: [
        {
          label: "Documentation MCP",
          href: "/docs/integrations/mcp/",
          text: "La configuration pas à pas pour Claude Desktop, Perplexity, VS Code et Le Chat.",
        },
        {
          label: "La maison connectée avec l'IA",
          href: "/ai-smart-home/",
          text: "Pilotage en langage naturel, IA proactive et rapport hebdomadaire, en toute confidentialité.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/local-smart-home/",
          text: "Pourquoi le local d'abord compte, et comment bâtir une maison qui tourne sans cloud.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Les marques et protocoles que votre agent IA peut piloter via Gladys.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Branchez votre agent IA sur votre maison",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Son serveur MCP est intégré.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Documentation MCP", href: "/docs/integrations/mcp/" },
    },
  },
};

export const smartHomeMcpFaqEn = [
  {
    question: "What is an MCP server for home automation?",
    answer:
      "An MCP (Model Context Protocol) server exposes your smart home as tools an AI agent can call: read a sensor, get its history, switch a light, launch a scene. Gladys Assistant includes one, so any MCP-compatible client can talk to your real devices.",
  },
  {
    question: "Can I control my smart home with Claude?",
    answer:
      "Yes. Enable the MCP integration in Gladys, generate an API key, and add the Gladys MCP server to Claude Desktop (through the open-source mcp-proxy bridge). Claude can then read your sensors, view your cameras, control lights and plugs, and launch scenes.",
  },
  {
    question: "Which AI clients work with the Gladys MCP server?",
    answer:
      "Any MCP-compatible client. The documentation covers Claude Desktop, Perplexity, GitHub Copilot in VS Code and Mistral Le Chat. Clients that only reach MCP servers on the internet, like Le Chat, use the remote URL provided by Gladys Plus.",
  },
  {
    question: "Does it work with ChatGPT?",
    answer:
      "ChatGPT connects to custom MCP servers in its developer mode, on paid plans, and only to remote servers over HTTPS. It therefore needs the remote URL provided by Gladys Plus. The Gladys documentation currently covers Claude Desktop, Perplexity, VS Code and Le Chat step by step.",
  },
  {
    question: "Is the Gladys MCP server free?",
    answer:
      "Yes. The local MCP server is part of Gladys, which is free and open source. Reaching it from outside your home, or from web-only clients, goes through the Gladys Plus Open API.",
  },
  {
    question: "Does my data go to the AI provider?",
    answer:
      "Only what the agent asks for in a conversation, sent to the AI provider you chose. Gladys itself stays on your hardware and each client uses its own revocable key. For maximum privacy, use a local model with an MCP-capable client.",
  },
  {
    question: "Can the AI agent break my automations?",
    answer:
      "The MCP server exposes a limited set of actions: reading states and camera images, switching lights and plugs, and launching existing scenes. Your automations are defined and run by Gladys, which keeps working even if the AI is disconnected.",
  },
];

export const smartHomeMcpFaqFr = [
  {
    question: "Qu'est-ce qu'un serveur MCP pour la domotique ?",
    answer:
      "Un serveur MCP (Model Context Protocol) expose votre maison sous forme d'outils qu'un agent IA peut appeler : lire un capteur, récupérer son historique, allumer une lumière, lancer une scène. Gladys Assistant en intègre un, donc n'importe quel client compatible MCP peut parler à vos vrais appareils.",
  },
  {
    question: "Puis-je piloter ma maison avec Claude ?",
    answer:
      "Oui. Activez l'intégration MCP dans Gladys, générez une clé d'API et ajoutez le serveur MCP de Gladys à Claude Desktop (via la passerelle open source mcp-proxy). Claude peut alors lire vos capteurs, voir vos caméras, piloter lumières et prises, et lancer des scènes.",
  },
  {
    question: "Quels clients IA fonctionnent avec le serveur MCP de Gladys ?",
    answer:
      "Tous les clients compatibles MCP. La documentation couvre Claude Desktop, Perplexity, GitHub Copilot dans VS Code et Mistral Le Chat. Les clients qui ne joignent que des serveurs MCP sur internet, comme Le Chat, utilisent l'URL distante fournie par Gladys Plus.",
  },
  {
    question: "Est-ce que ça marche avec ChatGPT ?",
    answer:
      "ChatGPT se connecte à des serveurs MCP personnalisés dans son mode développeur, sur les offres payantes, et uniquement à des serveurs distants en HTTPS. Il lui faut donc l'URL distante fournie par Gladys Plus. La documentation de Gladys détaille aujourd'hui pas à pas Claude Desktop, Perplexity, VS Code et Le Chat.",
  },
  {
    question: "Le serveur MCP de Gladys est-il gratuit ?",
    answer:
      "Oui. Le serveur MCP local fait partie de Gladys, gratuite et open source. Y accéder depuis l'extérieur de la maison, ou depuis des clients uniquement web, passe par l'Open API de Gladys Plus.",
  },
  {
    question: "Mes données partent-elles chez le fournisseur d'IA ?",
    answer:
      "Seulement ce que l'agent demande pendant une conversation, envoyé au fournisseur d'IA que vous avez choisi. Gladys reste sur votre matériel et chaque client utilise sa propre clé révocable. Pour une confidentialité maximale, utilisez un modèle local avec un client compatible MCP.",
  },
  {
    question: "L'agent IA peut-il casser mes automatisations ?",
    answer:
      "Le serveur MCP expose un nombre limité d'actions : lire des états et des images de caméras, piloter lumières et prises, et lancer des scènes existantes. Vos automatisations sont définies et exécutées par Gladys, qui continue de fonctionner même si l'IA est déconnectée.",
  },
];

export default smartHomeMcpContent;
