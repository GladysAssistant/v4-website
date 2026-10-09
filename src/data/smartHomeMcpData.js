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

  de: {
    meta: {
      title: "MCP-Server fürs Smart Home: mit Claude & KI steuern",
      description:
        "Gladys Assistant hat einen MCP-Server: Verbinde Claude Desktop, VS Code Copilot, Perplexity oder Le Chat mit deinem Smart Home. Gratis & lokal.",
    },
    screenshotCaption:
      "Deine Geräte, Sensoren, Kameras und Szenen in Gladys, per MCP für deinen KI-Agenten verfügbar.",
    hero: {
      title: "Ein MCP-Server fürs Smart Home: Lass deinen KI-Agenten dein Zuhause steuern",
      subtitle:
        "Gladys Assistant enthält einen Model-Context-Protocol-Server. Verbinde Claude, Copilot, Perplexity oder Le Chat und sprich mit deinem echten Zuhause aus den KI-Tools, die du ohnehin nutzt.",
      intro: [
        "Das Model Context Protocol (MCP) ist der offene Standard, über den KI-Agenten externe Tools aufrufen. Ein MCP-Server stellt Funktionen bereit, und jeder kompatible Client wie Claude Desktop oder VS Code kann sie im Gespräch nutzen.",
        "Gladys Assistant, die kostenlose Open-Source-Plattform fürs Smart Home, bringt einen eigenen MCP-Server mit. Aktiviere ihn, erzeuge einen Schlüssel, und dein KI-Agent kann jeden Sensor in deinem Zuhause auslesen, durch deine Kameras schauen, Lichter und Steckdosen schalten und deine Szenen starten. Kein Cloud-Konto, keine Bridge eines Drittanbieters: Der Server läuft auf deiner eigenen Gladys-Instanz, in deinem lokalen Netzwerk.",
      ],
      primaryCta: {
        label: "MCP-Server einrichten",
        href: "/de/docs/integrations/mcp/",
      },
      secondaryCta: {
        label: "Demo ausprobieren →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "Warum einen KI-Agenten mit deinem Zuhause verbinden?",
      intro:
        "Chatbots können hervorragend schlussfolgern, aber sie wissen nichts über dein Zuhause. Mit MCP bekommen sie echte Daten und echte Steuerungsmöglichkeiten:",
      points: [
        "Stell Fragen, die kein Dashboard beantwortet: „Welcher Raum war letzte Nacht am kältesten, und stand dort ein Fenster offen?“",
        "Analysiere Verläufe: „Vergleiche den Stromverbrauch dieser Woche mit der letzten und sag mir, was sich geändert hat.“",
        "Sieh nach dem Rechten: „Ist jemand im Garten? Beschreib, was die Kamera sieht.“",
        "Handle in normaler Sprache: „Schalte im Wohnzimmer alles aus und starte die Kino-Szene.“",
        "Verbinde dein Zuhause mit deinen anderen Tools: Derselbe Agent kann über seine anderen MCP-Server deinen Kalender, deinen Code oder deine Dokumente lesen.",
      ],
      outro:
        "Dein Agent denkt nach, Gladys führt aus. Deine Automationen und Geräte bleiben in Gladys und laufen weiter, mit oder ohne KI.",
    },
    features: {
      title: "Was der MCP-Server von Gladys bereitstellt",
      intro:
        "Ein mit Gladys verbundener MCP-Client kann heute:",
      cards: [
        {
          icon: "🌡️",
          title: "Jeden Sensor auslesen",
          text: "Den aktuellen Wert oder den Verlauf von Temperatur, Luftfeuchtigkeit, Energie, CO₂, Luftqualität, Bewegung, Tür-/Fensterkontakt, Wasserlecks, Rauch, Anwesenheit und vielem mehr.",
        },
        {
          icon: "📷",
          title: "Deine Kameras ansehen",
          text: "Ein Kamerabild abrufen, damit der Agent beschreiben kann, was er sieht, sofern dein Client Bilder unterstützt.",
        },
        {
          icon: "💡",
          title: "Lichter steuern",
          text: "Lichter ein- und ausschalten, Raum für Raum oder alle auf einmal.",
        },
        {
          icon: "🔌",
          title: "Schalter und Steckdosen steuern",
          text: "Smarte Steckdosen, Relais und Schalter aller Marken schalten, die Gladys unterstützt.",
        },
        {
          icon: "🎬",
          title: "Szenen starten",
          text: "Jede Gladys-Szene starten: Der Agent löst sie aus, Gladys führt sie lokal und zuverlässig aus.",
        },
        {
          icon: "🔑",
          title: "API-Schlüssel pro Client",
          text: "Jeder Client bekommt seinen eigenen Schlüssel, in Gladys erzeugt und jederzeit widerrufbar.",
        },
      ],
    },
    comparison: {
      title: "Lokales MCP vs. Remote-MCP",
      intro:
        "Gladys bietet dir zwei Wege, den MCP-Server zu erreichen:",
      cols: {
        feature: "",
        gladys: "Lokales MCP (kostenlos)",
        other: "Remote-MCP (Gladys Plus)",
      },
      rows: [
        {
          feature: "URL",
          gladys: "http://IP_DEINER_GLADYS/api/v1/service/mcp/proxy",
          other: "https://api.gladysgateway.com/v1/api/mcp/<API-Schlüssel>",
        },
        {
          feature: "Wo es funktioniert",
          gladys: "In deinem Heimnetzwerk",
          other: "Überall, über Gladys Plus",
        },
        {
          feature: "Clients",
          gladys: "Claude Desktop, VS Code Copilot, Perplexity…",
          other: "Dieselben, plus reine Web-Clients wie Mistral Le Chat",
        },
        {
          feature: "Preis",
          gladys: "Kostenlos",
          other: "In Gladys Plus enthalten",
        },
      ],
      outro:
        "Clients, die MCP nur über stdio sprechen, wie das kostenlose Claude Desktop, verbinden sich über die kleine Open-Source-Bridge mcp-proxy. Die Einrichtung dauert nur ein paar Minuten und wird in der Dokumentation Schritt für Schritt erklärt.",
    },
    how: {
      title: "So verbindest du Claude mit deinem Smart Home",
      intro: "Vier Schritte, auf jeder Gladys-Installation:",
      points: [
        "Installiere Gladys mit Docker auf einem Mini-PC, einem Raspberry Pi oder einem NAS und füge deine Geräte hinzu.",
        "Öffne in Gladys Integrationen → MCP und erzeuge einen API-Schlüssel für deinen Client.",
        "Füge den MCP-Server von Gladys in deinem Client hinzu: die lokale URL und den Schlüssel im Authorization-Header (über mcp-proxy für Claude Desktop).",
        "Starte den Client neu und frag: „Wie warm ist es im Schlafzimmer?“",
      ],
      outro:
        "Die vollständige Konfiguration für Claude Desktop, Perplexity, VS Code und Le Chat findest du in der MCP-Dokumentation.",
    },
    solution: {
      title: "Die KI ist austauschbar, dein Zuhause bleibt deins",
      paragraphs: [
        "MCP ist ein offener Standard, du bist also an keinen KI-Anbieter gebunden: Nutze heute Claude, morgen ein anderes Modell oder ein lokales Modell auf deinem eigenen Rechner mit einem MCP-fähigen Client wie LM Studio. Gladys bleibt die zentrale Quelle für deine Geräte, und sie ist Open Source unter Apache 2.0.",
        "Lieber ein Assistent, der sofort funktioniert? Gladys Plus enthält einen integrierten KI-Assistenten, betrieben mit Open-Weight-Modellen, die in Frankreich gehostet werden, mit dem du über den Chat, Telegram oder ein Sprach-Widget sprechen kannst.",
      ],
      link: {
        label: "KI in Gladys entdecken →",
        href: "/de/ai-smart-home/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Weitere Wege, KI in dein Zuhause zu bringen:",
      links: [
        {
          label: "MCP-Dokumentation",
          href: "/de/docs/integrations/mcp/",
          text: "Schritt-für-Schritt-Konfiguration für Claude Desktop, Perplexity, VS Code und Le Chat.",
        },
        {
          label: "KI im Smart Home",
          href: "/de/ai-smart-home/",
          text: "Steuerung in natürlicher Sprache, ein proaktiver KI-Agent und ein Wochenbericht, alles privat.",
        },
        {
          label: "Ein lokales Smart Home bauen",
          href: "/de/local-smart-home/",
          text: "Warum „lokal zuerst“ wichtig ist und wie du ein Zuhause baust, das ohne Cloud funktioniert.",
        },
        {
          label: "Kompatibel mit Gladys",
          href: "/de/works-with/",
          text: "Die Marken und Protokolle, die dein KI-Agent über Gladys steuern kann.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Verbinde deinen KI-Agenten mit deinem Zuhause",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Der MCP-Server ist bereits integriert.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "MCP-Dokumentation", href: "/de/docs/integrations/mcp/" },
    },
  },

  es: {
    meta: {
      title: "Servidor MCP para el hogar inteligente: controla tu casa con Claude e IA",
      description:
        "Gladys Assistant incluye un servidor MCP: conecta Claude Desktop, VS Code Copilot, Perplexity o Mistral Le Chat a tu hogar inteligente para leer sensores, ver cámaras, controlar luces y lanzar escenas. Gratis, local y de código abierto.",
    },
    screenshotCaption:
      "Tus dispositivos, sensores, cámaras y escenas en Gladys, expuestos a tu agente de IA a través de MCP.",
    hero: {
      title: "Un servidor MCP para tu hogar inteligente: deja que tu agente de IA gestione tu casa",
      subtitle:
        "Gladys Assistant incluye un servidor Model Context Protocol. Conecta Claude, Copilot, Perplexity o Le Chat y habla con tu casa real desde las herramientas de IA que ya usas.",
      intro: [
        "El Model Context Protocol (MCP) es el estándar abierto que usan los agentes de IA para llamar a herramientas externas. Un servidor MCP expone funciones, y cualquier cliente compatible, como Claude Desktop o VS Code, puede usarlas en una conversación.",
        "Gladys Assistant, la plataforma de domótica gratuita y de código abierto, incluye su propio servidor MCP. Actívalo, genera una clave y tu agente de IA podrá leer todos los sensores de tu casa, mirar a través de tus cámaras, encender y apagar luces y enchufes, y lanzar tus escenas. Sin cuenta en la nube ni puente de terceros: el servidor funciona en tu propio Gladys, en tu red local.",
      ],
      primaryCta: {
        label: "Configura el servidor MCP",
        href: "/es/docs/integrations/mcp/",
      },
      secondaryCta: {
        label: "Prueba la demo →",
        href: "https://demo.gladysassistant.com/dashboard",
      },
    },
    problem: {
      title: "¿Por qué conectar un agente de IA a tu casa?",
      intro:
        "Los chatbots razonan muy bien, pero no saben nada de tu casa. Con MCP, obtienen datos reales y controles reales:",
      points: [
        "Haz preguntas que ningún panel responde: \"¿Qué habitación fue la más fría anoche y había alguna ventana abierta?\"",
        "Analiza el historial: \"Compara el consumo eléctrico de esta semana con el de la anterior y dime qué ha cambiado.\"",
        "Echa un vistazo a la casa: \"¿Hay alguien en el jardín? Describe lo que ve la cámara.\"",
        "Actúa en lenguaje natural: \"Apaga todo en el salón y lanza la escena de cine.\"",
        "Combina tu casa con tus otras herramientas: el mismo agente puede leer tu calendario, tu código o tus documentos a través de sus otros servidores MCP.",
      ],
      outro:
        "Tu agente razona, Gladys ejecuta. Tus automatizaciones y dispositivos se quedan en Gladys, donde siguen funcionando con o sin la IA.",
    },
    features: {
      title: "Qué expone el servidor MCP de Gladys",
      intro:
        "Hoy, un cliente MCP conectado a Gladys puede:",
      cards: [
        {
          icon: "🌡️",
          title: "Leer cualquier sensor",
          text: "El último valor o el historial de temperatura, humedad, energía, CO₂, calidad del aire, movimiento, apertura, fugas de agua, humo, presencia y mucho más.",
        },
        {
          icon: "📷",
          title: "Ver tus cámaras",
          text: "Obtener una imagen de una cámara para que el agente describa lo que ve, si tu cliente admite imágenes.",
        },
        {
          icon: "💡",
          title: "Controlar las luces",
          text: "Encender y apagar las luces, habitación por habitación o todas a la vez.",
        },
        {
          icon: "🔌",
          title: "Controlar interruptores y enchufes",
          text: "Accionar enchufes inteligentes, relés e interruptores de cualquier marca compatible con Gladys.",
        },
        {
          icon: "🎬",
          title: "Lanzar escenas",
          text: "Iniciar cualquier escena de Gladys: el agente la activa y Gladys la ejecuta en local y de forma fiable.",
        },
        {
          icon: "🔑",
          title: "Claves API por cliente",
          text: "Cada cliente tiene su propia clave, generada en Gladys y revocable en cualquier momento.",
        },
      ],
    },
    comparison: {
      title: "MCP local vs MCP remoto",
      intro:
        "Gladys te ofrece dos formas de acceder al servidor MCP:",
      cols: {
        feature: "",
        gladys: "MCP local (gratis)",
        other: "MCP remoto (Gladys Plus)",
      },
      rows: [
        {
          feature: "URL",
          gladys: "http://IP_DE_TU_GLADYS/api/v1/service/mcp/proxy",
          other: "https://api.gladysgateway.com/v1/api/mcp/<clave API>",
        },
        {
          feature: "Dónde funciona",
          gladys: "En tu red doméstica",
          other: "En cualquier lugar, a través de Gladys Plus",
        },
        {
          feature: "Clientes",
          gladys: "Claude Desktop, VS Code Copilot, Perplexity…",
          other: "Los mismos, más clientes solo web como Mistral Le Chat",
        },
        {
          feature: "Precio",
          gladys: "Gratis",
          other: "Incluido en Gladys Plus",
        },
      ],
      outro:
        "Los clientes que solo hablan MCP por stdio, como la versión gratuita de Claude Desktop, se conectan a través del pequeño puente de código abierto mcp-proxy. La configuración lleva unos minutos y se explica paso a paso en la documentación.",
    },
    how: {
      title: "Cómo conectar Claude a tu hogar inteligente",
      intro: "Cuatro pasos, en cualquier instalación de Gladys:",
      points: [
        "Instala Gladys con Docker en un mini-PC, una Raspberry Pi o un NAS, y añade tus dispositivos.",
        "En Gladys, abre Integraciones → MCP y genera una clave API para tu cliente.",
        "Añade el servidor MCP de Gladys a tu cliente: la URL local y la clave en la cabecera Authorization (a través de mcp-proxy para Claude Desktop).",
        "Reinicia el cliente y pregunta: \"¿Qué temperatura hace en el dormitorio?\"",
      ],
      outro:
        "La configuración completa para Claude Desktop, Perplexity, VS Code y Le Chat está en la documentación de MCP.",
    },
    solution: {
      title: "La IA es intercambiable, tu casa sigue siendo tuya",
      paragraphs: [
        "MCP es un estándar abierto, así que no quedas atado a un único proveedor de IA: usa Claude hoy, otro modelo mañana o un modelo local en tu propio equipo con un cliente compatible con MCP como LM Studio. Gladys sigue siendo la fuente de verdad de tus dispositivos, y es de código abierto bajo licencia Apache 2.0.",
        "¿Prefieres un asistente que funcione nada más instalarlo? Gladys Plus incluye un asistente de IA integrado, basado en modelos de pesos abiertos alojados en Francia, con el que puedes hablar desde el chat, Telegram o un widget de voz.",
      ],
      link: {
        label: "Descubre la IA en Gladys →",
        href: "/es/ai-smart-home/",
      },
    },
    related: {
      title: "Para ir más lejos",
      intro: "Más formas de llevar la IA a tu casa:",
      links: [
        {
          label: "Documentación de MCP",
          href: "/es/docs/integrations/mcp/",
          text: "Configuración paso a paso para Claude Desktop, Perplexity, VS Code y Le Chat.",
        },
        {
          label: "Hogar inteligente con IA",
          href: "/es/ai-smart-home/",
          text: "Control en lenguaje natural, un agente de IA proactivo y un informe semanal, con total privacidad.",
        },
        {
          label: "Crea un hogar inteligente local",
          href: "/es/local-smart-home/",
          text: "Por qué importa lo local primero y cómo construir una casa que funcione sin la nube.",
        },
        {
          label: "Compatible con Gladys",
          href: "/es/works-with/",
          text: "Las marcas y protocolos que tu agente de IA puede controlar a través de Gladys.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Conecta tu agente de IA a tu casa",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Su servidor MCP viene integrado.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: { label: "Documentación de MCP", href: "/es/docs/integrations/mcp/" },
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

export const smartHomeMcpFaqDe = [
  {
    question: "Was ist ein MCP-Server für die Hausautomation?",
    answer:
      "Ein MCP-Server (Model Context Protocol) stellt dein Smart Home als Tools bereit, die ein KI-Agent aufrufen kann: einen Sensor auslesen, seinen Verlauf abrufen, ein Licht schalten, eine Szene starten. Gladys Assistant bringt einen mit, sodass jeder MCP-kompatible Client mit deinen echten Geräten sprechen kann.",
  },
  {
    question: "Kann ich mein Smart Home mit Claude steuern?",
    answer:
      "Ja. Aktiviere die MCP-Integration in Gladys, erzeuge einen API-Schlüssel und füge den MCP-Server von Gladys in Claude Desktop hinzu (über die Open-Source-Bridge mcp-proxy). Claude kann dann deine Sensoren auslesen, deine Kameras ansehen, Lichter und Steckdosen steuern und Szenen starten.",
  },
  {
    question: "Welche KI-Clients funktionieren mit dem MCP-Server von Gladys?",
    answer:
      "Jeder MCP-kompatible Client. Die Dokumentation behandelt Claude Desktop, Perplexity, GitHub Copilot in VS Code und Mistral Le Chat. Clients, die MCP-Server nur über das Internet erreichen, wie Le Chat, nutzen die Remote-URL von Gladys Plus.",
  },
  {
    question: "Funktioniert es mit ChatGPT?",
    answer:
      "ChatGPT verbindet sich in seinem Entwicklermodus mit eigenen MCP-Servern, nur in den kostenpflichtigen Tarifen und nur mit Remote-Servern über HTTPS. Es braucht daher die Remote-URL von Gladys Plus. Die Gladys-Dokumentation erklärt derzeit Claude Desktop, Perplexity, VS Code und Le Chat Schritt für Schritt.",
  },
  {
    question: "Ist der MCP-Server von Gladys kostenlos?",
    answer:
      "Ja. Der lokale MCP-Server ist Teil von Gladys, das kostenlos und Open Source ist. Der Zugriff von außerhalb deines Zuhauses oder über reine Web-Clients läuft über die Open API von Gladys Plus.",
  },
  {
    question: "Gehen meine Daten an den KI-Anbieter?",
    answer:
      "Nur das, was der Agent in einem Gespräch abfragt, und zwar an den KI-Anbieter, den du gewählt hast. Gladys selbst bleibt auf deiner Hardware, und jeder Client nutzt seinen eigenen widerrufbaren Schlüssel. Für maximale Privatsphäre nutzt du ein lokales Modell mit einem MCP-fähigen Client.",
  },
  {
    question: "Kann der KI-Agent meine Automationen kaputt machen?",
    answer:
      "Der MCP-Server stellt nur eine begrenzte Auswahl an Aktionen bereit: Zustände und Kamerabilder auslesen, Lichter und Steckdosen schalten und bestehende Szenen starten. Deine Automationen werden von Gladys definiert und ausgeführt, und Gladys läuft weiter, auch wenn die KI getrennt ist.",
  },
];

export const smartHomeMcpFaqEs = [
  {
    question: "¿Qué es un servidor MCP para domótica?",
    answer:
      "Un servidor MCP (Model Context Protocol) expone tu hogar inteligente como herramientas que un agente de IA puede llamar: leer un sensor, obtener su historial, encender una luz, lanzar una escena. Gladys Assistant incluye uno, así que cualquier cliente compatible con MCP puede hablar con tus dispositivos reales.",
  },
  {
    question: "¿Puedo controlar mi hogar inteligente con Claude?",
    answer:
      "Sí. Activa la integración MCP en Gladys, genera una clave API y añade el servidor MCP de Gladys a Claude Desktop (a través del puente de código abierto mcp-proxy). Claude podrá entonces leer tus sensores, ver tus cámaras, controlar luces y enchufes, y lanzar escenas.",
  },
  {
    question: "¿Qué clientes de IA funcionan con el servidor MCP de Gladys?",
    answer:
      "Cualquier cliente compatible con MCP. La documentación cubre Claude Desktop, Perplexity, GitHub Copilot en VS Code y Mistral Le Chat. Los clientes que solo acceden a servidores MCP en internet, como Le Chat, usan la URL remota que proporciona Gladys Plus.",
  },
  {
    question: "¿Funciona con ChatGPT?",
    answer:
      "ChatGPT se conecta a servidores MCP personalizados en su modo desarrollador, en los planes de pago, y solo a servidores remotos por HTTPS. Por lo tanto, necesita la URL remota que proporciona Gladys Plus. La documentación de Gladys explica por ahora paso a paso Claude Desktop, Perplexity, VS Code y Le Chat.",
  },
  {
    question: "¿El servidor MCP de Gladys es gratuito?",
    answer:
      "Sí. El servidor MCP local forma parte de Gladys, que es gratuito y de código abierto. Para acceder a él desde fuera de casa, o desde clientes solo web, se pasa por la Open API de Gladys Plus.",
  },
  {
    question: "¿Mis datos van al proveedor de IA?",
    answer:
      "Solo lo que el agente pide durante una conversación, enviado al proveedor de IA que hayas elegido. Gladys se queda en tu hardware y cada cliente usa su propia clave revocable. Para una privacidad máxima, usa un modelo local con un cliente compatible con MCP.",
  },
  {
    question: "¿Puede el agente de IA estropear mis automatizaciones?",
    answer:
      "El servidor MCP expone un conjunto limitado de acciones: leer estados e imágenes de cámaras, encender y apagar luces y enchufes, y lanzar escenas existentes. Tus automatizaciones las define y ejecuta Gladys, que sigue funcionando aunque la IA esté desconectada.",
  },
];

export default smartHomeMcpContent;
