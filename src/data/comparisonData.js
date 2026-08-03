// Content for the "Home Assistant vs Gladys Assistant" comparison landing page.
// Kept as a locale-keyed data object (like structuredData.js) rather than dozens
// of <Translate> ids, because the page is long-form prose that is easier to
// maintain and keep in sync when both languages live side by side.
//
// Tone: this lives on Gladys' own site, so the comparison is fair and honest
// but allowed to lean slightly in Gladys' favor (unlike the deliberately
// neutral YouTube video it's based on).

// "Home Assistant vs Gladys Assistant" YouTube video. Rendered as an embedded
// video in a dedicated section on the comparison page.
const YOUTUBE_VIDEO_ID = "iVFXXDO798A";

const comparisonContent = {
  en: {
    meta: {
      title: "Home Assistant vs Gladys Assistant: an honest comparison (2026)",
      description:
        "Home Assistant or Gladys Assistant? A fair comparison by Gladys' founder: installation, ease of use, integrations, automations, community and pricing, to pick the right open-source home automation platform.",
    },
    hero: {
      title: "Home Assistant vs Gladys Assistant",
      subtitle: "An honest comparison between two open-source home assistants",
      intro: [
        "Still hesitating between Home Assistant and Gladys Assistant? This comparison will save you hours.",
        "Full transparency: I'm Pierre-Gilles, the creator of Gladys Assistant, so I'm obviously biased. But I'll be fair about both projects. Here's how they really compare, and why I believe Gladys is the better fit for most people who want a smart home that simply works.",
        "Both projects started in 2013, right after the first Raspberry Pi came out. They look similar at first glance, but they're built on very different philosophies, and that difference is exactly what should guide your choice.",
      ],
    },
    verdict: {
      title: "The short version",
      gladys: {
        title: "Choose Gladys Assistant if…",
        points: [
          "You want something simple, fast to set up, and that just works.",
          "You prefer a clean interface where everything happens with clicks, with no configuration files and no YAML.",
          "You value stability: updates are fully automatic and atomic.",
          "You want a responsive project where your feedback actually shapes the product.",
          "You want to be able to add any device: anyone can publish an external integration, and you install it in one click.",
        ],
      },
      ha: {
        title: "Choose Home Assistant if…",
        points: [
          "You own very niche devices nobody has built a Gladys integration for yet.",
          "You're a power user who loves to tinker and customize to the extreme.",
          "You're comfortable editing YAML and going under the hood.",
          "You want the largest possible catalog of integrations, even if quality varies.",
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
        gladys: "One Docker command, rich docs and videos",
        ha: "Home Assistant OS, the HA Green box, or Docker",
      },
      {
        feature: "Setup difficulty",
        gladys: "Beginner-friendly, guided step by step",
        ha: "Steeper learning curve",
      },
      {
        feature: "Configuration files",
        gladys: "None: everything is in the interface",
        ha: "YAML needed for some parts",
      },
      {
        feature: "Integrations",
        gladys:
          "Native ones built around open standards (Zigbee, Matter, MQTT), plus community external integrations installed in one click",
        ha: "Huge catalog, community-built, quality varies",
      },
      {
        feature: "Supported devices",
        gladys: "Thousands via Zigbee, Matter and MQTT, plus the external integrations catalog",
        ha: "The widest catalog available",
      },
      {
        feature: "Adding a missing integration",
        gladys: "Anyone can publish one: clone the template, push to GitHub, no pull request and no review",
        ha: "Write a custom component in Python, or install a community one via HACS",
      },
      {
        feature: "Automations",
        gladys: "One simple \"Scenes\" tab, visual editor, Node-RED",
        ha: "Automations / Scenes / Scripts / Blueprints, visual editor, YAML, Node-RED",
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
        feature: "Support",
        gladys: "Direct answers from the maker, active community",
        ha: "Large community, community-driven support",
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
          "Gladys is genuinely simple to install. It runs with a single Docker command (a `docker run` line or a `docker-compose` file you copy, paste and launch), and the documentation walks you through every step with screenshots and installation videos.",
          "And because Gladys is just a container, you stay free to use your mini-PC, NAS or Raspberry Pi for other things too.",
        ],
        ha: [
          "Home Assistant offers Home Assistant OS, which is polished, and the Home Assistant Green box arrives ready to use.",
          "It's straightforward if you buy their box. Without it, though, it's not always obvious which installation method is the simplest, since they tend to push Home Assistant OS over the plain Docker route.",
        ],
        takeaway:
          "Both are beginner-friendly if you buy their hardware. But Gladys is especially easy to install yourself, thanks to a one-line Docker setup, rich documentation and step-by-step videos.",
      },
      {
        id: "interface",
        title: "Interface & ease of use",
        gladys: [
          "Gladys has a clean, intuitive interface. The whole philosophy is to think about the user before the technical implementation: you never have to dig into logs or edit a file on disk. Everything happens with the mouse.",
          "You can build as many dashboards as you want, one per room or by theme (energy, security, and so on), with no configuration files because there simply aren't any.",
          "Gladys deliberately keeps things focused: you arrange the widgets you actually need instead of wading through endless options. And since it's open-source, anything missing can be added by the community.",
        ],
        ha: [
          "Home Assistant has a modern Material Design interface that's clean and highly customizable. The dashboard is fully editable with tons of cards and options.",
          "But you'll often see, on the forums, that some parts still require editing YAML files, which can be intimidating for a beginner.",
        ],
        takeaway:
          "For a beautiful experience that works out of the box, Gladys is hard to beat. Home Assistant gives you more knobs if you enjoy customizing every last detail.",
      },
      {
        id: "integrations",
        title: "Integrations & compatibility",
        gladys: [
          "Gladys' native integrations focus on what matters: open standards like Zigbee, Matter and MQTT, each one carefully built and tested end to end, designed like a polished consumer product rather than by developers for developers.",
          "Through Zigbee and Matter alone, that already means thousands of compatible devices. The bet is that open standards, Matter especially, will dominate, so Gladys invests heavily where the market is heading, not in closed, cloud-only ecosystems that lock you in.",
          "And for everything else, there are external integrations. This is the biggest change in the project's history: anyone can now write and publish a Gladys integration on GitHub, without a pull request, a review, or my approval. They appear in the catalog inside every Gladys instance, next to the native ones, and the community published more of them in a few days than we had built in the core in six years.",
          "For you as a user, nothing changes: you browse the catalog in Gladys, you click Install, and Gladys pulls the integration, starts it and generates its whole interface (device list, discovery, configuration form). Then you start, stop, update it or read its logs from the same place. No command line, no YAML, no technical skills required.",
          "Freedom on one side, Gladys' rigor on the other: each external integration runs in an isolated sandbox (limited RAM and CPU, read-only filesystem, isolated network). If one crashes, it crashes alone, and it can never take your instance down with it. That's exactly what makes it safe to open the door to everyone.",
          "And if the integration you need doesn't exist yet, you no longer have to wait for anyone: you clone the official template, adapt it to your device, publish it, and it lands in the catalog of every Gladys instance within the hour.",
        ],
        ha: [
          "Home Assistant has a massive catalog with thousands of community integrations, so even niche devices are often supported out of the box.",
          "The flip side is variable quality: some integrations are excellent, others less so, and it's up to you to find the right one and test that it works. Custom components installed through HACS also run inside Home Assistant itself, so a badly behaved one can affect the whole instance.",
        ],
        takeaway:
          "Home Assistant still has the larger catalog today, and if you own very niche hardware there's a good chance it's already covered. But Gladys is no longer limited to what I have time to build: native integrations for open standards, plus an open catalog of community external integrations that anyone can extend, installed in one click and sandboxed by design. Between Matter on one side and external integrations on the other, the gap is closing fast.",
      },
      {
        id: "automations",
        title: "Automations & scenes",
        gladys: [
          "Everything lives in a single \"Scenes\" tab. A scene can be a manual sequence of actions you trigger from your dashboard, or a full automation with triggers, conditions and actions.",
          "The visual editor is intuitive: you start with a trigger (optional), then chain as many conditions and actions as you want, and you can mix them freely, with a condition leading to actions, then more conditions. It's surprisingly powerful while staying easy to read.",
          "And if you ever need to go further, you can offload complex logic to Node-RED and connect it to Gladys over MQTT or HTTP.",
        ],
        ha: [
          "Home Assistant has a visual editor too, plus shareable YAML blueprints and a Node-RED integration to go further.",
          "It splits things into four tabs (Automations, Scenes, Scripts and Blueprints), which can feel like four versions of the same thing when you're starting out and adds to the learning curve.",
        ],
        takeaway:
          "Gladys keeps everything in one simple, powerful place, while Home Assistant spreads it across four tabs. For most people, Gladys' single Scenes tab is faster to learn and just as capable for everyday automations.",
      },
      {
        id: "community",
        title: "Community & support",
        gladys: [
          "Gladys is a project that genuinely listens. There's an active community on the forum, and a roadmap shaped by real user feedback rather than by what's easiest to build.",
          "Best of all, you get direct support from the founder. If you have a question, even a deep one about the code, you can email me, post on the forum, or reach out on social media, and you'll get a personal answer. That kind of access is rare.",
        ],
        ha: [
          "Home Assistant has a huge global community and a massive forum, so you'll usually find someone who has already solved your problem.",
          "With that scale, though, support is community-driven rather than personal, and most of the developer communication happens in English.",
        ],
        takeaway:
          "Home Assistant wins on sheer size. But Gladys offers something rarer: a responsive project where the maker listens and answers you personally.",
      },
      {
        id: "pricing",
        title: "Pricing & business model",
        gladys: [
          "Gladys is 100% free and open-source at its core, forever. There's an optional Gladys Plus subscription for remote access, encrypted automated backups, voice assistants (Google Home, Alexa), AI and Enedis energy data.",
          "The business model is really the subscription, with no investors, no ads and no data resale.",
        ],
        ha: [
          "Home Assistant is also 100% free and open-source at its core, with an optional Nabu Casa Cloud subscription (remote access, voice) and a growing line of hardware like the HA Green box.",
        ],
        takeaway:
          "Both have a transparent, very similar model: a free open-source core plus an optional subscription. Either way, you're funding an independent project rather than a data-hungry tech giant.",
      },
    ],
    whyNotBoth: {
      title: "Why not both?",
      paragraphs: [
        "Here's the part most comparisons miss: you don't have to choose. You can run Gladys Assistant and Home Assistant on the same setup at the same time.",
        "With Zigbee2MQTT, a single Zigbee instance can talk to both Gladys and Home Assistant, so the same device shows up in both interfaces. The same goes for Matter: a device paired to a hub (like an Apple TV) can be controlled from both. You can have several controllers at once.",
        "Both also expose rich APIs, so they can talk to each other over MQTT or HTTP, with one acting as a backend and the other as your interface.",
        "So if you love the Gladys interface but need a niche Home Assistant integration, run them side by side, or turn it into a Gladys external integration yourself and share it with everyone. There's really no excuse: everything is possible.",
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
        "Home Assistant ou Gladys Assistant ? Comparatif honnête par le créateur de Gladys : installation, simplicité, intégrations, automatisations, communauté et prix, pour choisir la bonne solution domotique open source.",
    },
    hero: {
      title: "Home Assistant vs Gladys Assistant",
      subtitle: "Un comparatif honnête entre deux assistants domotiques open source",
      intro: [
        "Vous hésitez encore entre Home Assistant et Gladys Assistant ? Ce comparatif va vous faire gagner des heures.",
        "En toute transparence : je suis Pierre-Gilles, le créateur de Gladys Assistant, donc je suis forcément un peu partial. Mais je serai juste envers les deux projets. Voici comment ils se comparent vraiment, et pourquoi je pense que Gladys est le meilleur choix pour la plupart des gens qui veulent une maison connectée qui fonctionne, tout simplement.",
        "Les deux projets sont nés en 2013, juste après la sortie du premier Raspberry Pi. Ils se ressemblent au premier abord, mais ils reposent sur des philosophies très différentes, et c'est justement cette différence qui doit guider votre choix.",
      ],
    },
    verdict: {
      title: "En résumé",
      gladys: {
        title: "Choisissez Gladys Assistant si…",
        points: [
          "Vous voulez quelque chose de simple, rapide à prendre en main, et qui fonctionne.",
          "Vous préférez une interface épurée où tout se fait au clic, sans fichiers de configuration ni YAML.",
          "Vous tenez à la stabilité : les mises à jour sont totalement automatiques et atomiques.",
          "Vous voulez un projet à l'écoute, où vos retours façonnent vraiment le produit.",
          "Vous voulez pouvoir ajouter n'importe quel appareil : n'importe qui peut publier une intégration externe, et vous l'installez en un clic.",
        ],
      },
      ha: {
        title: "Choisissez Home Assistant si…",
        points: [
          "Vous avez des équipements très spécifiques pour lesquels personne n'a encore créé d'intégration Gladys.",
          "Vous êtes un power user qui adore bidouiller et personnaliser à l'extrême.",
          "Vous êtes à l'aise avec le YAML et aller sous le capot.",
          "Vous voulez le plus grand catalogue d'intégrations possible, même si la qualité est variable.",
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
        gladys: "Une commande Docker, doc et vidéos riches, ou un kit de démarrage pré-installé",
        ha: "Home Assistant OS, la box HA Green, ou Docker",
      },
      {
        feature: "Difficulté de prise en main",
        gladys: "Accessible aux débutants, guidée pas à pas",
        ha: "Courbe d'apprentissage plus raide",
      },
      {
        feature: "Fichiers de configuration",
        gladys: "Aucun : tout est dans l'interface",
        ha: "YAML nécessaire pour certaines parties",
      },
      {
        feature: "Intégrations",
        gladys:
          "Natives et centrées sur les standards ouverts (Zigbee, Matter, MQTT), plus les intégrations externes de la communauté, installées en un clic",
        ha: "Catalogue immense, communautaire, qualité variable",
      },
      {
        feature: "Appareils supportés",
        gladys: "Des milliers via Zigbee, Matter et MQTT, plus le catalogue d'intégrations externes",
        ha: "Le catalogue le plus large",
      },
      {
        feature: "Ajouter une intégration manquante",
        gladys: "N'importe qui peut en publier une : on clone le template, on pousse sur GitHub, sans pull request ni validation",
        ha: "Écrire un custom component en Python, ou en installer un communautaire via HACS",
      },
      {
        feature: "Automatisations",
        gladys: "Un seul onglet « Scènes », éditeur visuel, Node-RED",
        ha: "Automatisations / Scènes / Scripts / Blueprints, éditeur visuel, YAML, Node-RED",
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
        feature: "Support",
        gladys: "Réponses directes du créateur, communauté active",
        ha: "Grande communauté, support communautaire",
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
          "Gladys est vraiment simple à installer. Elle se lance en une seule commande Docker (une ligne `docker run` ou un fichier `docker-compose` que vous copiez, collez et lancez), et la documentation vous guide à chaque étape avec des captures d'écran et des vidéos d'installation.",
          "Et si vous préférez éviter toute installation, le kit de démarrage officiel est un mini-PC Beelink qui arrive avec Gladys déjà installée et configurée. Vous le branchez, suivez le guide de démarrage rapide, et c'est opérationnel en quelques minutes.",
          "Comme Gladys n'est qu'un conteneur, vous restez libre d'utiliser votre mini-PC, NAS ou Raspberry Pi pour autre chose en parallèle.",
        ],
        ha: [
          "Home Assistant propose Home Assistant OS, très abouti, et la box Home Assistant Green qui arrive prête à l'emploi.",
          "C'est simple si vous achetez leur box. Sans elle, en revanche, ce n'est pas toujours clair quelle est la méthode la plus simple, car ils mettent un peu de côté la voie Docker pour pousser Home Assistant OS.",
        ],
        takeaway:
          "Les deux sont accessibles si vous achetez leur matériel. Mais Gladys est particulièrement facile à installer soi-même, grâce à une commande Docker unique, une documentation riche et des vidéos pas à pas.",
      },
      {
        id: "interface",
        title: "Interface & prise en main",
        gladys: [
          "Gladys a une interface épurée et intuitive. Toute la philosophie, c'est de penser à l'utilisateur avant la technique : vous n'avez jamais à aller chercher dans les logs ou à éditer un fichier sur le disque. Tout se passe à la souris.",
          "Vous pouvez créer autant de tableaux de bord que vous voulez, un par pièce ou par thématique (énergie, sécurité…), sans fichiers de configuration puisqu'il n'y en a pas.",
          "Gladys reste volontairement concentrée : vous disposez les widgets dont vous avez réellement besoin, sans vous noyer dans des options à n'en plus finir. Et comme c'est open source, ce qui manque peut être ajouté par la communauté.",
        ],
        ha: [
          "Home Assistant a une interface moderne en Material Design, propre et hautement personnalisable. Le tableau de bord est entièrement éditable, avec une multitude de cartes et d'options.",
          "Mais on remarque souvent, sur les forums, que certaines parties demandent encore d'éditer des fichiers YAML, ce qui peut être intimidant pour un débutant.",
        ],
        takeaway:
          "Pour une belle expérience qui fonctionne dès le départ, Gladys est difficile à battre. Home Assistant offre plus de réglages si vous aimez tout personnaliser dans les moindres détails.",
      },
      {
        id: "integrations",
        title: "Intégrations & compatibilité",
        gladys: [
          "Les intégrations natives de Gladys se concentrent sur l'essentiel : les standards ouverts comme Zigbee, Matter et MQTT. Chacune est testée de bout en bout et pensée comme un produit grand public abouti, pas par des développeurs pour des développeurs.",
          "Rien qu'avec Zigbee et Matter, cela représente déjà des milliers d'appareils compatibles. Le pari, c'est que les standards ouverts, Matter en particulier, vont dominer ; Gladys investit donc là où va le marché, et non dans les écosystèmes fermés et cloud-only qui vous enferment.",
          "Et pour tout le reste, il y a les intégrations externes. C'est le plus grand changement de l'histoire du projet : n'importe qui peut désormais écrire et publier une intégration Gladys sur GitHub, sans pull request, sans revue et sans mon autorisation. Elles apparaissent dans le catalogue de chaque instance Gladys, à côté des intégrations natives, et la communauté en a publié en quelques jours plus que ce que nous avions construit dans le cœur en six ans.",
          "Pour vous, utilisateur, rien ne change : vous parcourez le catalogue dans Gladys, vous cliquez sur Installer, et Gladys télécharge l'intégration, la démarre et génère toute son interface (liste des appareils, découverte, formulaire de configuration). Ensuite vous la démarrez, l'arrêtez, la mettez à jour ou consultez ses logs au même endroit. Pas de ligne de commande, pas de YAML, aucune compétence technique requise.",
          "La liberté d'un côté, la rigueur de Gladys de l'autre : chaque intégration externe tourne dans un bac à sable isolé (RAM et CPU limités, système de fichiers en lecture seule, réseau isolé). Si l'une plante, elle plante toute seule et ne peut jamais emporter votre instance avec elle. C'est précisément ce qui permet d'ouvrir la porte à tout le monde sans risque.",
          "Et si l'intégration dont vous avez besoin n'existe pas encore, vous n'avez plus à attendre après qui que ce soit : vous clonez le template officiel, vous l'adaptez à votre appareil, vous le publiez, et il arrive dans l'heure dans le catalogue de toutes les instances Gladys.",
        ],
        ha: [
          "Home Assistant dispose d'un catalogue immense, avec des milliers d'intégrations communautaires, si bien que même les appareils de niche sont souvent supportés directement.",
          "La contrepartie, c'est une qualité variable : certaines intégrations sont excellentes, d'autres moins, et c'est à vous de trouver la bonne et de vérifier qu'elle fonctionne. Les custom components installés via HACS tournent en plus à l'intérieur de Home Assistant lui-même : un module mal écrit peut donc affecter toute l'instance.",
        ],
        takeaway:
          "Home Assistant garde aujourd'hui le catalogue le plus large, et si vous avez du matériel très spécifique il y a de bonnes chances qu'il soit déjà couvert. Mais Gladys n'est plus limitée à ce que j'ai le temps de développer : des intégrations natives pour les standards ouverts, plus un catalogue ouvert d'intégrations externes que n'importe qui peut enrichir, installables en un clic et isolées par conception. Entre Matter d'un côté et les intégrations externes de l'autre, l'écart se réduit vite.",
      },
      {
        id: "automatisations",
        title: "Automatisations & scènes",
        gladys: [
          "Tout est dans un seul onglet « Scènes ». Une scène peut être une suite d'actions que vous lancez manuellement depuis votre tableau de bord, ou un scénario complet avec déclencheur, conditions et actions.",
          "L'éditeur visuel est intuitif : vous partez d'un déclencheur (optionnel), puis vous enchaînez autant de conditions et d'actions que vous voulez, et vous pouvez les mélanger librement, avec une condition menant à des actions, puis d'autres conditions. C'est étonnamment puissant tout en restant facile à lire.",
          "Et si vous avez besoin d'aller plus loin, vous pouvez déporter la logique complexe vers Node-RED et le connecter à Gladys en MQTT ou HTTP.",
        ],
        ha: [
          "Home Assistant a aussi un éditeur visuel, des blueprints YAML partageables, et une intégration Node-RED pour aller plus loin.",
          "Il découpe les choses en quatre onglets (Automatisations, Scènes, Scripts et Blueprints), ce qui peut donner l'impression de quatre fois la même chose quand on débute et alourdit la courbe d'apprentissage.",
        ],
        takeaway:
          "Gladys regroupe tout en un seul endroit simple et puissant, là où Home Assistant l'éparpille sur quatre onglets. Pour la plupart des gens, l'onglet Scènes unique de Gladys s'apprend plus vite et fait tout aussi bien le travail au quotidien.",
      },
      {
        id: "communaute",
        title: "Communauté & support",
        gladys: [
          "Gladys est un projet qui est vraiment à l'écoute. Le forum est animé par une communauté active, et la feuille de route est façonnée par les retours réels des utilisateurs plutôt que par ce qui est le plus facile à développer.",
          "Comme c'est un projet né en France, vous y trouvez une communauté francophone soudée et un support en français. Et surtout, vous avez le support direct du fondateur : pour toute question, même très pointue sur le code, vous pouvez m'envoyer un mail, poster sur le forum ou me contacter sur les réseaux, et vous aurez une réponse personnelle. Cet accès est rare.",
        ],
        ha: [
          "Home Assistant a une communauté mondiale énorme et un forum gigantesque, donc vous trouverez généralement quelqu'un qui a déjà résolu votre problème.",
          "Avec cette ampleur, le support reste cependant communautaire plutôt que personnel, et l'essentiel de la communication développeur se fait en anglais.",
        ],
        takeaway:
          "Home Assistant gagne sur l'ampleur. Mais Gladys offre quelque chose de plus rare : un projet réactif, à l'écoute, où le créateur vous répond personnellement, en français.",
      },
      {
        id: "prix",
        title: "Prix & modèle économique",
        gladys: [
          "Gladys est 100 % gratuite et open source dans son cœur, pour toujours. Il existe un abonnement optionnel Gladys Plus pour l'accès distant, les sauvegardes automatisées chiffrées, les assistants vocaux (Google Home, Alexa), l'IA et les données d'énergie Enedis.",
          "Je vends aussi des kits de démarrage, non pas pour faire de la marge mais pour rendre Gladys plus accessible. Le modèle économique repose vraiment sur l'abonnement, sans investisseurs, sans publicité et sans revente de données.",
        ],
        ha: [
          "Home Assistant est aussi 100 % gratuit et open source dans son cœur, avec un abonnement optionnel Nabu Casa Cloud (accès distant, vocal) et une gamme de matériel grandissante comme la box HA Green.",
        ],
        takeaway:
          "Les deux ont un modèle transparent et très similaire : un cœur open source gratuit plus un abonnement optionnel. Dans les deux cas, vous financez un projet indépendant plutôt qu'un géant de la tech avide de données.",
      },
    ],
    whyNotBoth: {
      title: "Et pourquoi pas les deux ?",
      paragraphs: [
        "Voici ce que la plupart des comparatifs oublient : vous n'êtes pas obligé de choisir. Vous pouvez faire tourner Gladys Assistant et Home Assistant en même temps sur la même installation.",
        "Avec Zigbee2MQTT, une seule instance Zigbee peut parler à la fois à Gladys et à Home Assistant, donc le même appareil apparaît dans les deux interfaces. Même chose avec Matter : un appareil associé à un hub (comme une Apple TV) peut être contrôlé depuis les deux. On peut avoir plusieurs contrôleurs en même temps.",
        "Les deux exposent aussi des API riches : ils peuvent donc communiquer en MQTT ou HTTP, l'un servant de backend et l'autre d'interface.",
        "Donc si vous aimez l'interface de Gladys mais avez besoin d'une intégration spécifique de Home Assistant, faites tourner les deux côte à côte, ou transformez-la vous-même en intégration externe Gladys et partagez-la avec tout le monde. Il n'y a vraiment pas d'excuse : tout est possible.",
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
      "No. Gladys is an independent project, created in 2013, the same year as Home Assistant, but with a completely different stack: Node.js and Preact for Gladys, versus Python and Lit for Home Assistant.",
  },
  {
    question: "Which is easier for beginners, Gladys or Home Assistant?",
    answer:
      "Gladys is the easier choice for beginners: there are no configuration files and no YAML, everything is configured by clicking in the interface, and the documentation guides you with videos. Home Assistant is more powerful but has a steeper learning curve.",
  },
  {
    question: "Will Gladys work with my devices?",
    answer:
      "Very likely. Gladys supports thousands of devices through open standards like Zigbee, Matter and MQTT, plus dedicated integrations for popular brands. Anything else is usually covered by an external integration, a community integration you install in one click from the catalog inside Gladys. And if nobody has built the one you need yet, you can create it yourself from the official template.",
  },
  {
    question: "What if there is no Gladys integration for my device?",
    answer:
      "Since version 4.84, anyone can create one. You clone the official template, adapt it to your device, publish it on a public GitHub repository, and it is listed within the hour in the catalog of every Gladys instance. There is no pull request, no review and no approval to wait for. Each external integration runs in an isolated sandbox, so it can never destabilize your Gladys.",
  },
  {
    question: "Do external integrations make Gladys as complicated as Home Assistant?",
    answer:
      "No. Installing one is a single click from the catalog inside Gladys: no command line, no YAML, no configuration file. Gladys generates the whole interface for the integration, and you start, stop, update it or read its logs from the same screen as any native integration.",
  },
  {
    question: "Can I run Gladys and Home Assistant at the same time?",
    answer:
      "Yes. With Zigbee2MQTT or Matter multi-admin, the same devices can appear in both. You can also connect the two over MQTT or HTTP, since both expose rich APIs.",
  },
  {
    question: "Is Gladys free like Home Assistant?",
    answer:
      "Yes. Both are 100% free and open-source at their core. Each offers an optional paid subscription: Gladys Plus for Gladys, and Nabu Casa Cloud for Home Assistant.",
  },
  {
    question: "Should I choose Gladys or Home Assistant?",
    answer:
      "If you want a simple, stable smart home that just works, with no YAML and no configuration files, Gladys is the better fit for most people. Choose Home Assistant if you're a power user who wants the largest possible catalog of integrations and loves to tinker.",
  },
];

export const comparisonFaqFr = [
  {
    question: "Gladys Assistant est-il un fork de Home Assistant ?",
    answer:
      "Non. Gladys est un projet indépendant, créé en 2013, la même année que Home Assistant, mais avec une stack complètement différente : Node.js et Preact pour Gladys, contre Python et Lit pour Home Assistant.",
  },
  {
    question: "Lequel est le plus simple pour un débutant, Gladys ou Home Assistant ?",
    answer:
      "Gladys est le choix le plus simple pour débuter : pas de fichiers de configuration ni de YAML, tout se configure au clic dans l'interface, et la documentation vous guide avec des vidéos. Home Assistant est plus puissant mais a une courbe d'apprentissage plus raide.",
  },
  {
    question: "Gladys fonctionnera-t-il avec mes appareils ?",
    answer:
      "Très probablement. Gladys supporte des milliers d'appareils via les standards ouverts comme Zigbee, Matter et MQTT, ainsi que des intégrations dédiées pour les marques populaires. Le reste est généralement couvert par une intégration externe, une intégration communautaire que vous installez en un clic depuis le catalogue intégré à Gladys. Et si personne n'a encore créé celle dont vous avez besoin, vous pouvez la créer vous-même à partir du template officiel.",
  },
  {
    question: "Et s'il n'existe pas d'intégration Gladys pour mon appareil ?",
    answer:
      "Depuis la version 4.84, n'importe qui peut en créer une. Vous clonez le template officiel, vous l'adaptez à votre appareil, vous le publiez sur un dépôt GitHub public, et elle est référencée dans l'heure dans le catalogue de toutes les instances Gladys. Pas de pull request, pas de revue, aucune validation à attendre. Chaque intégration externe tourne dans un bac à sable isolé : elle ne peut donc jamais déstabiliser votre Gladys.",
  },
  {
    question: "Les intégrations externes rendent-elles Gladys aussi compliquée que Home Assistant ?",
    answer:
      "Non. L'installation se fait en un clic depuis le catalogue intégré à Gladys : pas de ligne de commande, pas de YAML, aucun fichier de configuration. Gladys génère toute l'interface de l'intégration, et vous la démarrez, l'arrêtez, la mettez à jour ou consultez ses logs depuis le même écran que n'importe quelle intégration native.",
  },
  {
    question: "Puis-je faire tourner Gladys et Home Assistant en même temps ?",
    answer:
      "Oui. Avec Zigbee2MQTT ou le multi-admin Matter, les mêmes appareils peuvent apparaître dans les deux. Vous pouvez aussi connecter les deux en MQTT ou HTTP, puisqu'ils exposent chacun des API riches.",
  },
  {
    question: "Gladys est-il gratuit comme Home Assistant ?",
    answer:
      "Oui. Les deux sont 100 % gratuits et open source dans leur cœur. Chacun propose un abonnement optionnel : Gladys Plus pour Gladys, et Nabu Casa Cloud pour Home Assistant.",
  },
  {
    question: "Faut-il choisir Gladys ou Home Assistant ?",
    answer:
      "Si vous voulez une maison connectée simple et stable qui fonctionne, sans YAML ni fichiers de configuration, Gladys est le meilleur choix pour la plupart des gens. Choisissez Home Assistant si vous êtes un power user qui veut le plus grand catalogue d'intégrations possible et aime bidouiller.",
  },
];

export { YOUTUBE_VIDEO_ID };
export default comparisonContent;
