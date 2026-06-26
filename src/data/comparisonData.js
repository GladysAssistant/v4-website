// Content for the "Home Assistant vs Gladys Assistant" comparison landing page.
// Kept as a locale-keyed data object (like structuredData.js) rather than dozens
// of <Translate> ids, because the page is long-form prose that is easier to
// maintain and keep in sync when both languages live side by side.
//
// The comparison is written in the founder's voice and intentionally honest
// about Gladys' weaknesses — it mirrors the "honest comparison" YouTube video.

// "Home Assistant vs Gladys Assistant" YouTube video. Rendered as an embedded
// video in a dedicated section on the comparison page.
const YOUTUBE_VIDEO_ID = "iVFXXDO798A";

const comparisonContent = {
  en: {
    meta: {
      title: "Home Assistant vs Gladys Assistant: an honest comparison (2026)",
      description:
        "Home Assistant or Gladys Assistant? An honest comparison by Gladys' founder: installation, ease of use, integrations, automations, community and pricing — to pick the right open-source home automation platform.",
    },
    hero: {
      title: "Home Assistant vs Gladys Assistant",
      subtitle: "An honest comparison between two open-source home assistants",
      intro: [
        "Still hesitating between Home Assistant and Gladys Assistant? This comparison will save you hours.",
        "Full transparency: I'm Pierre-Gilles, the creator of Gladys Assistant. My goal here isn't to convince you to use Gladys — it's to promote open-source home automation and help you pick the solution that fits your profile. I'll be 100% honest about the strengths and weaknesses of each.",
        "Both projects started in 2013, right after the first Raspberry Pi came out. They look similar, but they're actually quite different — and that difference is exactly what should guide your choice.",
      ],
    },
    verdict: {
      title: "The short version",
      gladys: {
        title: "Choose Gladys Assistant if…",
        points: [
          "You want something simple, fast to set up, and that just works.",
          "You prefer a clean interface where everything happens with clicks — no configuration files, no YAML.",
          "You value stability: updates are fully automatic and atomic.",
          "You speak French, or want direct support from the founder.",
        ],
      },
      ha: {
        title: "Choose Home Assistant if…",
        points: [
          "You own very specific or niche devices that need a dedicated integration.",
          "You're a power user who loves to tinker and customize to the extreme.",
          "You're comfortable editing YAML and going under the hood.",
          "You want the largest possible catalog of integrations.",
        ],
      },
    },
    tableTitle: "Quick comparison",
    tableCols: { feature: "", gladys: "Gladys Assistant", ha: "Home Assistant" },
    table: [
      { feature: "Created", gladys: "2013", ha: "2013" },
      { feature: "Backend", gladys: "Node.js (JavaScript)", ha: "Python" },
      { feature: "Frontend", gladys: "Preact", ha: "Lit + Web Components" },
      {
        feature: "Installation",
        gladys: "One Docker command, or a French starter kit (mini-PC) pre-installed",
        ha: "Home Assistant OS, the HA Green box, or Docker",
      },
      {
        feature: "Ready-to-flash OS image",
        gladys: "No — bring your own Linux + Docker",
        ha: "Yes (Home Assistant OS)",
      },
      {
        feature: "Configuration files",
        gladys: "None — everything is in the interface",
        ha: "YAML needed for some parts",
      },
      {
        feature: "Native integrations",
        gladys: "~35, focused on open standards (Zigbee, Matter, MQTT)",
        ha: "2000+",
      },
      {
        feature: "Supported devices",
        gladys: "Thousands via Zigbee, Matter and MQTT",
        ha: "The widest catalog available",
      },
      {
        feature: "Automations",
        gladys: "A single \"Scenes\" tab, visual editor, Node-RED",
        ha: "Automations / Scenes / Scripts / Blueprints, visual editor, YAML, Node-RED",
      },
      {
        feature: "Share automations",
        gladys: "No",
        ha: "Yes (YAML blueprints)",
      },
      {
        feature: "Native alarm mode",
        gladys: "Yes",
        ha: "Not native",
      },
      {
        feature: "Native presence",
        gladys: "Yes",
        ha: "Via integrations",
      },
      {
        feature: "Updates",
        gladys: "Fully automatic and atomic",
        ha: "Frequent, can occasionally break things",
      },
      {
        feature: "Community",
        gladys: "Mostly French (FR + EN forum), direct founder support",
        ha: "Huge global community + HACF (French community)",
      },
      {
        feature: "Pricing",
        gladys: "Free & open-source + optional Gladys Plus subscription",
        ha: "Free & open-source + optional Nabu Casa Cloud subscription",
      },
      {
        feature: "Philosophy",
        gladys: "User-first, product-grade simplicity",
        ha: "Developer-first, ultimate flexibility",
      },
    ],
    sections: [
      {
        id: "installation",
        title: "Installation",
        gladys: [
          "Gladys installs with a single Docker command — there's a `docker run` and a `docker-compose` file you can copy, paste and launch. The only requirement is having Docker installed.",
          "There's also an official starter kit: a Beelink mini-PC with Gladys pre-installed. You plug it in, follow the quick-start guide, and you're done. I don't make real margin on it — it just makes Gladys accessible to people who don't want to install it themselves.",
          "The trade-off: there's no ready-to-flash OS image. You bring your own Linux (Ubuntu, Debian, whatever) and run the container. The upside is you stay free to use your mini-PC, NAS or Raspberry Pi for other things too.",
        ],
        ha: [
          "Home Assistant offers Home Assistant OS, which is very polished — you install it like you'd install Ubuntu and you get Home Assistant running. They also sell the Home Assistant Green box with everything pre-installed.",
          "It's relatively easy if you buy their box. But without it, I found it wasn't always obvious which installation method was the simplest — they tend to push Home Assistant OS over the plain Docker route.",
        ],
        takeaway:
          "Both are easy if you buy their hardware. Gladys is simplest if you already know Docker; Home Assistant OS is great if you want a turnkey appliance.",
      },
      {
        id: "interface",
        title: "Interface & ease of use",
        gladys: [
          "Gladys has a clean, intuitive interface. The whole philosophy is to think about the user before the technical implementation: you never have to dig into logs or edit a file on disk. Everything happens with the mouse.",
          "You can build as many dashboards as you want — one per room, or by theme (energy, security…). No configuration files, because there are none.",
          "The honest downside: there are fewer options for power users. Gladys is like a consumer product — you can arrange the widgets you're given, but if a widget is missing, it has to be developed (it's open-source, so you can contribute one).",
        ],
        ha: [
          "Home Assistant has a modern Material Design interface that's very clean and highly customizable. The dashboard is fully editable with tons of cards and options.",
          "But you'll often see, on the forums, that some parts still require editing YAML files — which can be intimidating for a beginner.",
        ],
        takeaway:
          "Gladys wins on simplicity: a beautiful interface with zero configuration. Home Assistant wins on customization if you like to tinker.",
      },
      {
        id: "integrations",
        title: "Integrations & compatibility",
        gladys: [
          "Gladys has a limited, curated set: roughly 35 native integrations, focused on open standards like Zigbee, Matter and MQTT. They're carefully built and tested end-to-end, designed like a consumer product rather than by developers for developers.",
          "35 native integrations doesn't mean 35 compatible devices: through Zigbee alone there are thousands of compatible devices. The bet is that open standards — Matter especially — will dominate, so I invest heavily in those and very little in closed, cloud-only ecosystems.",
          "For devices that aren't Matter yet, projects like Matterbridge can bridge them onto a Matter network — including a Home Assistant plugin.",
        ],
        ha: [
          "Home Assistant has 2000+ integrations — an incredible number, with a very active community constantly adding more. This is where it's genuinely unbeatable.",
          "The flip side is variable quality: some integrations are excellent, others less so, and it's up to you to find and test the ones you need.",
        ],
        takeaway:
          "Home Assistant is unbeatable on sheer numbers. Gladys focuses on the essentials and bets on Matter & Zigbee for the future — the compatibility gap should shrink as everyone adopts Matter.",
      },
      {
        id: "automations",
        title: "Automations & scenes",
        gladys: [
          "Everything lives in a single \"Scenes\" tab. A scene can be a manual sequence of actions you trigger from your dashboard, or a full automation with triggers, conditions and actions.",
          "There's a visual editor similar to Home Assistant's. You start with a trigger (optional), then chain as many conditions and actions as you want, and you can mix them — a condition leading to actions, then more conditions. It's quite powerful.",
          "If Gladys isn't enough, you can offload complex logic to Node-RED and connect it via MQTT or HTTP. The honest downside: there's no built-in way to share a scene with others.",
        ],
        ha: [
          "Home Assistant has a visual editor too, plus shareable YAML blueprints and a Node-RED integration to go further.",
          "It splits things into four tabs — Automations, Scenes, Scripts and Blueprints — which can feel like four versions of the same thing when you're starting out. There's surely a good reason, but it adds a learning curve.",
        ],
        takeaway:
          "Same core concept, two philosophies. Gladys keeps it in one simple place; Home Assistant is more complete with shareable blueprints.",
      },
      {
        id: "community",
        title: "Community & support",
        gladys: [
          "Gladys' community is mostly French, with an English-translated forum and some international users. As a French-born project, that's where it shines for proximity.",
          "You also get direct support from the founder. If you have a question — even a deep one about the code — you can email me, post on the forum, or reach out on social media. I always answer.",
        ],
        ha: [
          "Home Assistant has a massive global community with a huge forum, plus HACF, a French-speaking community where you can get help in French.",
          "It's on another scale entirely — but most of the developer communication happens in English, since it's an American-rooted project.",
        ],
        takeaway:
          "Home Assistant wins on sheer scale. Gladys wins on proximity and French-language support, with direct access to the maker.",
      },
      {
        id: "pricing",
        title: "Pricing & business model",
        gladys: [
          "Gladys is 100% free and open-source at its core, forever. There's an optional Gladys Plus subscription for remote access, encrypted automated backups, voice assistants (Google Home, Alexa), AI and Enedis energy data.",
          "I also sell starter kits, but not to make margin — just to make Gladys more accessible. My business model is really the subscription.",
        ],
        ha: [
          "Home Assistant is also 100% free and open-source at its core, with an optional Nabu Casa Cloud subscription (remote access, voice…) and a growing line of hardware like the HA Green box.",
        ],
        takeaway:
          "Both have a transparent, very similar model: free open-source core + optional subscription. There aren't many viable business models in home automation, and both keep it honest.",
      },
    ],
    whyNotBoth: {
      title: "Why not both?",
      paragraphs: [
        "Here's the part most comparisons miss: you don't have to choose. You can run Gladys Assistant and Home Assistant on the same setup at the same time.",
        "With Zigbee2MQTT, a single Zigbee instance can talk to both Gladys and Home Assistant — the same device shows up in both interfaces. The same goes for Matter: a Matter device paired to a hub (like an Apple TV) can be controlled from both. You can have several controllers at once.",
        "You can even use Matterbridge to expose all your Home Assistant devices onto a Matter network, then pull them into Gladys — effectively using Home Assistant as a backend and Gladys as your frontend. And of course both expose rich APIs, so they can talk over MQTT or HTTP.",
        "So if you love the Gladys interface but need a niche Home Assistant integration, run them side by side. There's really no excuse — everything is possible.",
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Ready to try Gladys Assistant?",
      text: "Gladys is free, open-source, and installs in a single Docker command. Privacy-first, self-hosted, no cloud required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "See the integrations", href: "/docs/integrations/" },
    },
    videoTitle: "Watch the full comparison",
  },

  fr: {
    meta: {
      title: "Home Assistant vs Gladys Assistant : le comparatif honnête (2026)",
      description:
        "Home Assistant ou Gladys Assistant ? Comparatif honnête par le créateur de Gladys : installation, simplicité, intégrations, automatisations, communauté et prix — pour choisir la bonne solution domotique open source.",
    },
    hero: {
      title: "Home Assistant vs Gladys Assistant",
      subtitle: "Un comparatif honnête entre deux assistants domotiques open source",
      intro: [
        "Vous hésitez encore entre Home Assistant et Gladys Assistant ? Ce comparatif va vous faire gagner des heures.",
        "En toute transparence : je suis Pierre-Gilles, le créateur de Gladys Assistant. Mon but ici n'est pas de vous convaincre d'utiliser Gladys, mais de mettre en avant l'open source et de vous aider à choisir la solution la plus adaptée à votre profil. Je serai 100 % honnête sur les forces et les faiblesses de chacune.",
        "Les deux projets sont nés en 2013, juste après la sortie du premier Raspberry Pi. Ils se ressemblent, mais ils sont en réalité très différents — et c'est justement cette différence qui doit guider votre choix.",
      ],
    },
    verdict: {
      title: "En résumé",
      gladys: {
        title: "Choisissez Gladys Assistant si…",
        points: [
          "Vous voulez quelque chose de simple, rapide à prendre en main, et qui fonctionne.",
          "Vous préférez une interface épurée où tout se fait au clic — pas de fichiers de configuration, pas de YAML.",
          "Vous tenez à la stabilité : les mises à jour sont totalement automatiques et atomiques.",
          "Vous parlez français, ou vous voulez le support direct du fondateur.",
        ],
      },
      ha: {
        title: "Choisissez Home Assistant si…",
        points: [
          "Vous avez des équipements très spécifiques qui demandent une intégration dédiée.",
          "Vous êtes un power user qui adore bidouiller et personnaliser à l'extrême.",
          "Vous êtes à l'aise avec le YAML et aller sous le capot.",
          "Vous voulez le plus grand catalogue d'intégrations possible.",
        ],
      },
    },
    tableTitle: "Comparatif express",
    tableCols: { feature: "", gladys: "Gladys Assistant", ha: "Home Assistant" },
    table: [
      { feature: "Création", gladys: "2013", ha: "2013" },
      { feature: "Backend", gladys: "Node.js (JavaScript)", ha: "Python" },
      { feature: "Frontend", gladys: "Preact", ha: "Lit + Web Components" },
      {
        feature: "Installation",
        gladys: "Une commande Docker, ou un kit de démarrage français (mini-PC) pré-installé",
        ha: "Home Assistant OS, la box HA Green, ou Docker",
      },
      {
        feature: "Image OS prête à flasher",
        gladys: "Non — votre Linux + Docker",
        ha: "Oui (Home Assistant OS)",
      },
      {
        feature: "Fichiers de configuration",
        gladys: "Aucun — tout est dans l'interface",
        ha: "YAML nécessaire pour certaines parties",
      },
      {
        feature: "Intégrations natives",
        gladys: "~35, centrées sur les standards ouverts (Zigbee, Matter, MQTT)",
        ha: "2000+",
      },
      {
        feature: "Appareils supportés",
        gladys: "Des milliers via Zigbee, Matter et MQTT",
        ha: "Le catalogue le plus large",
      },
      {
        feature: "Automatisations",
        gladys: "Un seul onglet « Scènes », éditeur visuel, Node-RED",
        ha: "Automatisations / Scènes / Scripts / Blueprints, éditeur visuel, YAML, Node-RED",
      },
      {
        feature: "Partage d'automatisations",
        gladys: "Non",
        ha: "Oui (blueprints YAML)",
      },
      {
        feature: "Mode alarme natif",
        gladys: "Oui",
        ha: "Non natif",
      },
      {
        feature: "Présence native",
        gladys: "Oui",
        ha: "Via des intégrations",
      },
      {
        feature: "Mises à jour",
        gladys: "Totalement automatiques et atomiques",
        ha: "Fréquentes, peuvent parfois casser des choses",
      },
      {
        feature: "Communauté",
        gladys: "Majoritairement française (forum FR + EN), support direct du fondateur",
        ha: "Énorme communauté mondiale + HACF (communauté française)",
      },
      {
        feature: "Modèle économique",
        gladys: "Gratuit & open source + abonnement Gladys Plus optionnel",
        ha: "Gratuit & open source + abonnement Nabu Casa Cloud optionnel",
      },
      {
        feature: "Philosophie",
        gladys: "L'utilisateur d'abord, simplicité « grand public »",
        ha: "Le développeur d'abord, flexibilité maximale",
      },
    ],
    sections: [
      {
        id: "installation",
        title: "Installation",
        gladys: [
          "Gladys s'installe en une seule commande Docker — un `docker run` ou un fichier `docker-compose` que vous copiez, collez et lancez. La seule chose nécessaire, c'est d'avoir Docker installé.",
          "Il existe aussi un kit de démarrage officiel : un mini-PC Beelink avec Gladys déjà installée. Vous le branchez, suivez le guide de démarrage rapide, et c'est prêt. Je ne fais pas vraiment de marge dessus — c'est juste pour rendre Gladys accessible à ceux qui ne veulent pas l'installer eux-mêmes.",
          "Le compromis : pas d'image OS prête à flasher. C'est à vous d'installer un Linux (Ubuntu, Debian, ce que vous voulez) puis de lancer le conteneur. L'avantage, c'est que vous restez libre d'utiliser votre mini-PC, NAS ou Raspberry Pi pour autre chose.",
        ],
        ha: [
          "Home Assistant propose Home Assistant OS, très abouti — vous l'installez comme vous installeriez Ubuntu et vous avez Home Assistant qui tourne. Ils vendent aussi la box Home Assistant Green avec tout pré-installé.",
          "C'est relativement facile si vous achetez leur box. Mais sans elle, j'ai trouvé que ce n'était pas toujours clair quelle était la méthode la plus simple — ils mettent un peu de côté la voie Docker pour pousser Home Assistant OS.",
        ],
        takeaway:
          "Les deux sont faciles si vous achetez leur matériel. Gladys est le plus simple si vous connaissez déjà Docker ; Home Assistant OS est idéal si vous voulez une solution clé en main.",
      },
      {
        id: "interface",
        title: "Interface & prise en main",
        gladys: [
          "Gladys a une interface épurée et intuitive. Toute la philosophie, c'est de penser à l'utilisateur avant la technique : vous n'avez jamais à aller chercher dans les logs ou à éditer un fichier sur le disque. Tout se passe à la souris.",
          "Vous pouvez créer autant de tableaux de bord que vous voulez — un par pièce, ou par thématique (énergie, sécurité…). Pas de fichiers de configuration, parce qu'il n'y en a pas.",
          "Le revers honnête : il y a moins d'options pour les power users. Gladys est comme un produit grand public — vous disposez les widgets fournis comme vous voulez, mais s'il manque un widget, il faut le développer (c'est open source, vous pouvez en proposer un).",
        ],
        ha: [
          "Home Assistant a une interface moderne en Material Design, très propre et hautement personnalisable. Le tableau de bord est entièrement éditable, avec une multitude de cartes et d'options.",
          "Mais on remarque souvent, sur les forums, que certaines parties demandent encore d'éditer des fichiers YAML — ce qui peut être intimidant pour un débutant.",
        ],
        takeaway:
          "Gladys gagne sur la simplicité : une belle interface sans aucune configuration. Home Assistant gagne sur la personnalisation si vous aimez bidouiller.",
      },
      {
        id: "integrations",
        title: "Intégrations & compatibilité",
        gladys: [
          "Gladys a un set limité et soigné : environ 35 intégrations natives, centrées sur les standards ouverts comme Zigbee, Matter et MQTT. Elles sont testées de bout en bout et pensées comme un produit grand public, pas par des développeurs pour des développeurs.",
          "35 intégrations natives ne veut pas dire 35 appareils compatibles : rien qu'en Zigbee, il y a des milliers d'appareils compatibles. Le pari, c'est que les standards ouverts — Matter en particulier — vont dominer ; j'y investis donc beaucoup, et très peu dans les écosystèmes fermés et cloud-only.",
          "Pour les appareils qui ne sont pas encore Matter, des projets comme Matterbridge permettent de les relier à un réseau Matter — y compris via un plugin Home Assistant.",
        ],
        ha: [
          "Home Assistant compte plus de 2000 intégrations — un nombre fou, avec une communauté très active qui en ajoute en permanence. C'est là qu'il est vraiment imbattable.",
          "La contrepartie, c'est une qualité variable : certaines intégrations sont excellentes, d'autres moins, et c'est à vous de découvrir et tester celles dont vous avez besoin.",
        ],
        takeaway:
          "Home Assistant est imbattable en nombre. Gladys se concentre sur l'essentiel et mise sur Matter & Zigbee pour l'avenir — l'écart de compatibilité devrait se réduire à mesure que tout le monde adopte Matter.",
      },
      {
        id: "automatisations",
        title: "Automatisations & scènes",
        gladys: [
          "Tout est dans un seul onglet « Scènes ». Une scène peut être une suite d'actions que vous lancez manuellement depuis votre tableau de bord, ou un scénario complet avec déclencheur, conditions et actions.",
          "Il y a un éditeur visuel proche de celui de Home Assistant. Vous partez d'un déclencheur (optionnel), puis vous enchaînez autant de conditions et d'actions que vous voulez, et vous pouvez les mélanger — une condition menant à des actions, puis d'autres conditions. C'est assez puissant.",
          "Si Gladys ne suffit pas, vous pouvez déporter la logique complexe vers Node-RED et le connecter en MQTT ou HTTP. Le revers honnête : il n'y a pas de moyen natif de partager une scène avec d'autres.",
        ],
        ha: [
          "Home Assistant a aussi un éditeur visuel, des blueprints YAML partageables, et une intégration Node-RED pour aller plus loin.",
          "Il découpe les choses en quatre onglets — Automatisations, Scènes, Scripts et Blueprints — ce qui peut donner l'impression de quatre fois la même chose quand on débute. Il y a sûrement une bonne raison, mais ça ajoute une courbe d'apprentissage.",
        ],
        takeaway:
          "Même concept de base, deux philosophies. Gladys regroupe tout en un seul endroit simple ; Home Assistant est plus complet avec ses blueprints partageables.",
      },
      {
        id: "communaute",
        title: "Communauté & support",
        gladys: [
          "La communauté de Gladys est majoritairement française, avec un forum traduit en anglais et quelques utilisateurs internationaux. En tant que projet né en France, c'est là qu'elle brille pour la proximité.",
          "Vous avez aussi le support direct du fondateur. Si vous avez une question — même très pointue sur le code — vous pouvez m'envoyer un mail, poster sur le forum ou me contacter sur les réseaux. Je réponds toujours.",
        ],
        ha: [
          "Home Assistant a une communauté mondiale énorme avec un forum gigantesque, plus HACF, une communauté francophone où vous pouvez obtenir de l'aide en français.",
          "C'est une tout autre ampleur — mais l'essentiel de la communication développeur se fait en anglais, car c'est un projet d'origine américaine.",
        ],
        takeaway:
          "Home Assistant gagne sur l'ampleur. Gladys gagne sur la proximité et le support en français, avec un accès direct au créateur.",
      },
      {
        id: "prix",
        title: "Prix & modèle économique",
        gladys: [
          "Gladys est 100 % gratuite et open source dans son cœur, pour toujours. Il existe un abonnement optionnel Gladys Plus pour l'accès distant, les sauvegardes automatisées chiffrées, les assistants vocaux (Google Home, Alexa), l'IA et les données d'énergie Enedis.",
          "Je vends aussi des kits de démarrage, mais pas pour faire de la marge — juste pour rendre Gladys plus accessible. Mon modèle économique repose vraiment sur l'abonnement.",
        ],
        ha: [
          "Home Assistant est aussi 100 % gratuit et open source dans son cœur, avec un abonnement optionnel Nabu Casa Cloud (accès distant, vocal…) et une gamme de matériel grandissante comme la box HA Green.",
        ],
        takeaway:
          "Les deux ont un modèle transparent et très similaire : cœur open source gratuit + abonnement optionnel. Il n'y a pas beaucoup de modèles viables en domotique, et les deux restent honnêtes.",
      },
    ],
    whyNotBoth: {
      title: "Et pourquoi pas les deux ?",
      paragraphs: [
        "Voici ce que la plupart des comparatifs oublient : vous n'êtes pas obligé de choisir. Vous pouvez faire tourner Gladys Assistant et Home Assistant en même temps sur la même installation.",
        "Avec Zigbee2MQTT, une seule instance Zigbee peut parler à la fois à Gladys et à Home Assistant — le même appareil apparaît dans les deux interfaces. Même chose avec Matter : un appareil Matter associé à un hub (comme une Apple TV) peut être contrôlé depuis les deux. On peut avoir plusieurs contrôleurs en même temps.",
        "Vous pouvez même utiliser Matterbridge pour exposer tous vos appareils Home Assistant sur un réseau Matter, puis les récupérer dans Gladys — en utilisant Home Assistant comme backend et Gladys comme frontend. Et bien sûr, les deux exposent des API riches, donc ils peuvent communiquer en MQTT ou HTTP.",
        "Donc si vous aimez l'interface de Gladys mais avez besoin d'une intégration spécifique de Home Assistant, faites tourner les deux côte à côte. Il n'y a vraiment pas d'excuse — tout est possible.",
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Prêt à essayer Gladys Assistant ?",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Auto-hébergée, respectueuse de votre vie privée, sans cloud obligatoire.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Voir les intégrations", href: "/docs/integrations/" },
    },
    videoTitle: "Voir le comparatif en vidéo",
  },
};

export const comparisonFaqEn = [
  {
    question: "Is Gladys Assistant a fork of Home Assistant?",
    answer:
      "No. Gladys is an independent project, created in 2013 — the same year as Home Assistant — but with a completely different stack: Node.js and Preact for Gladys, versus Python and Lit for Home Assistant.",
  },
  {
    question: "Which is easier for beginners, Gladys or Home Assistant?",
    answer:
      "Gladys is generally easier for beginners: there are no configuration files and no YAML — everything is configured by clicking in the interface. Home Assistant is more powerful but some parts still require editing YAML.",
  },
  {
    question: "Does Gladys have as many integrations as Home Assistant?",
    answer:
      "No. Gladys has about 35 native integrations focused on open standards (Zigbee, Matter, MQTT), while Home Assistant has 2000+. But 35 native integrations still means thousands of compatible devices through Zigbee and Matter.",
  },
  {
    question: "Can I run Gladys and Home Assistant at the same time?",
    answer:
      "Yes. With Zigbee2MQTT or Matter multi-admin, the same devices can appear in both. You can even use Matterbridge to expose Home Assistant devices to Gladys, or connect the two over MQTT or HTTP.",
  },
  {
    question: "Is Gladys free like Home Assistant?",
    answer:
      "Yes. Both are 100% free and open-source at their core. Each offers an optional paid subscription: Gladys Plus for Gladys, and Nabu Casa Cloud for Home Assistant.",
  },
  {
    question: "Is Home Assistant better than Gladys Assistant?",
    answer:
      "Neither is objectively better — it depends on your profile. Choose Home Assistant if you're a power user who wants maximum integrations and loves to tinker. Choose Gladys if you want a simple, stable, no-configuration experience.",
  },
];

export const comparisonFaqFr = [
  {
    question: "Gladys Assistant est-il un fork de Home Assistant ?",
    answer:
      "Non. Gladys est un projet indépendant, créé en 2013 — la même année que Home Assistant — mais avec une stack complètement différente : Node.js et Preact pour Gladys, contre Python et Lit pour Home Assistant.",
  },
  {
    question: "Lequel est le plus simple pour un débutant, Gladys ou Home Assistant ?",
    answer:
      "Gladys est généralement plus simple pour débuter : pas de fichiers de configuration ni de YAML, tout se configure au clic dans l'interface. Home Assistant est plus puissant mais certaines parties demandent encore d'éditer du YAML.",
  },
  {
    question: "Gladys a-t-il autant d'intégrations que Home Assistant ?",
    answer:
      "Non. Gladys propose environ 35 intégrations natives centrées sur les standards ouverts (Zigbee, Matter, MQTT), là où Home Assistant en a plus de 2000. Mais 35 intégrations natives, cela représente déjà des milliers d'appareils compatibles via Zigbee et Matter.",
  },
  {
    question: "Puis-je faire tourner Gladys et Home Assistant en même temps ?",
    answer:
      "Oui. Avec Zigbee2MQTT ou le multi-admin Matter, les mêmes appareils peuvent apparaître dans les deux. Vous pouvez même utiliser Matterbridge pour exposer les appareils de Home Assistant dans Gladys, ou connecter les deux en MQTT ou HTTP.",
  },
  {
    question: "Gladys est-il gratuit comme Home Assistant ?",
    answer:
      "Oui. Les deux sont 100 % gratuits et open source dans leur cœur. Chacun propose un abonnement optionnel : Gladys Plus pour Gladys, et Nabu Casa Cloud pour Home Assistant.",
  },
  {
    question: "Home Assistant est-il meilleur que Gladys Assistant ?",
    answer:
      "Aucun n'est objectivement meilleur — cela dépend de votre profil. Choisissez Home Assistant si vous êtes un power user qui veut un maximum d'intégrations et aime bidouiller. Choisissez Gladys si vous voulez une expérience simple, stable et sans configuration.",
  },
];

export { YOUTUBE_VIDEO_ID };
export default comparisonContent;
