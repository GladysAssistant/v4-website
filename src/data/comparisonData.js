// Content for the "Home Assistant vs Gladys Assistant" comparison landing page.
// Kept as a locale-keyed data object (like structuredData.js) rather than dozens
// of <Translate> ids, because the page is long-form prose that is easier to
// maintain and keep in sync when both languages live side by side.
//
// Tone: this lives on Gladys' own site, so the comparison is fair and honest
// but allowed to lean slightly in Gladys' favor.

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
      showdown: {
        alt: "The Gladys Assistant 5 dashboard next to the Home Assistant demo dashboard",
        gladysLabel: "Gladys Assistant 5",
        haLabel: "Home Assistant",
        caption:
          "Same screen, same day, no retouching: on the left the Gladys Assistant 5 dashboard, on the right the official Home Assistant demo.",
      },
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
          "Since version 5, Gladys ships a brand new interface called Horizon: frosted glass surfaces over a living gradient, real depth, and every control redrawn one by one. It was designed mobile-first, so controls grow to thumb size on a phone and shrink back on a desktop, and the dashboard switcher sits at the bottom of the screen, where your hand actually is.",
          "The whole philosophy is to think about the user before the technical implementation: you never have to dig into logs or edit a file on disk. Everything happens with the mouse, or with your thumb.",
          "You can build as many dashboards as you want, one per room or by theme (energy, security, and so on), with no configuration files because there simply aren't any.",
          "Gladys deliberately keeps things focused: you arrange the widgets you actually need instead of wading through endless options. And since it's open-source, anything missing can be added by the community.",
        ],
        ha: [
          "Home Assistant has a modern Material Design interface that's clean and highly customizable. The dashboard is fully editable with tons of cards and options.",
          "But you'll often see, on the forums, that some parts still require editing YAML files, which can be intimidating for a beginner.",
        ],
        takeaway:
          "This is where Gladys is clearly ahead, and since version 5 it is not close. Home Assistant hands you a box of cards and lets you assemble your own dashboard; Gladys hands you one that already looks finished, on your phone as much as on your laptop, with nothing to configure. If you are going to open an app several times a day for years, that difference matters more than any feature list.",
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
          "The usual objection is the integration count, and that argument is running out of road: the community catalog went from 20 to 67 integrations in a little over two weeks, written by people who had never opened the Gladys codebase before, and it is still accelerating. Home Assistant has the larger catalog today, and if you own very niche hardware there's a good chance it's already covered. But Gladys is no longer limited to what I have time to build, and between Matter on one side and a catalog anyone can extend on the other, we are closing that gap on purpose, and fast.",
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
      showdown: {
        alt: "Le tableau de bord de Gladys Assistant 5 face au tableau de bord de démonstration de Home Assistant",
        gladysLabel: "Gladys Assistant 5",
        haLabel: "Home Assistant",
        caption:
          "Même écran, le même jour, sans retouche : à gauche le tableau de bord de Gladys Assistant 5, à droite la démo officielle de Home Assistant.",
      },
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
          "Depuis la version 5, Gladys embarque une interface entièrement nouvelle, appelée Horizon : des surfaces de verre dépoli posées sur un dégradé vivant, de la vraie profondeur, et chaque contrôle redessiné un par un. Elle a été pensée pour le mobile d'abord, donc les contrôles atteignent la taille d'un pouce sur un téléphone et se resserrent sur un ordinateur, et le sélecteur de tableaux de bord est en bas de l'écran, là où se trouve votre main.",
          "Toute la philosophie, c'est de penser à l'utilisateur avant la technique : vous n'avez jamais à aller chercher dans les logs ou à éditer un fichier sur le disque. Tout se passe à la souris, ou au pouce.",
          "Vous pouvez créer autant de tableaux de bord que vous voulez, un par pièce ou par thématique (énergie, sécurité…), sans fichiers de configuration puisqu'il n'y en a pas.",
          "Gladys reste volontairement concentrée : vous disposez les widgets dont vous avez réellement besoin, sans vous noyer dans des options à n'en plus finir. Et comme c'est open source, ce qui manque peut être ajouté par la communauté.",
        ],
        ha: [
          "Home Assistant a une interface moderne en Material Design, propre et hautement personnalisable. Le tableau de bord est entièrement éditable, avec une multitude de cartes et d'options.",
          "Mais on remarque souvent, sur les forums, que certaines parties demandent encore d'éditer des fichiers YAML, ce qui peut être intimidant pour un débutant.",
        ],
        takeaway:
          "C'est là que Gladys est clairement devant, et depuis la version 5 ce n'est même plus serré. Home Assistant vous tend une boîte de cartes et vous laisse assembler votre tableau de bord ; Gladys vous en donne un qui a déjà l'air fini, sur votre téléphone autant que sur votre ordinateur, sans rien à configurer. Quand on ouvre une application plusieurs fois par jour pendant des années, cette différence compte plus que n'importe quelle liste de fonctionnalités.",
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
          "L'objection habituelle, c'est le nombre d'intégrations, et cet argument est en train de s'épuiser : le catalogue communautaire est passé de 20 à 67 intégrations en un peu plus de deux semaines, écrites par des gens qui n'avaient jamais ouvert le code de Gladys, et ça accélère encore. Home Assistant a le catalogue le plus large aujourd'hui, et si vous avez du matériel très spécifique il y a de bonnes chances qu'il soit déjà couvert. Mais Gladys n'est plus limitée à ce que j'ai le temps de développer, et entre Matter d'un côté et un catalogue que n'importe qui peut enrichir de l'autre, on va chercher cet écart, volontairement, et vite.",
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
  },

  de: {
    meta: {
      title: "Home Assistant vs. Gladys Assistant: Vergleich 2026",
      description:
        "Home Assistant oder Gladys Assistant? Ein fairer Vergleich vom Gladys-Gründer: Installation, Bedienung, Integrationen, Automationen, Community und Preis.",
    },
    hero: {
      title: "Home Assistant vs. Gladys Assistant",
      subtitle: "Ein ehrlicher Vergleich zweier Open-Source-Smart-Home-Zentralen",
      intro: [
        "Du schwankst noch zwischen Home Assistant und Gladys Assistant? Dieser Vergleich spart dir Stunden.",
        "Volle Transparenz: Ich bin Pierre-Gilles, der Entwickler von Gladys Assistant, also natürlich voreingenommen. Trotzdem werde ich beiden Projekten gerecht. Hier siehst du, wie sie sich wirklich unterscheiden – und warum ich glaube, dass Gladys für die meisten, die einfach ein funktionierendes Smart Home wollen, die bessere Wahl ist.",
        "Beide Projekte sind 2013 gestartet, kurz nachdem der erste Raspberry Pi erschienen war. Auf den ersten Blick sehen sie sich ähnlich, doch sie beruhen auf sehr unterschiedlichen Philosophien – und genau dieser Unterschied sollte deine Entscheidung leiten.",
      ],
      showdown: {
        alt: "Das Dashboard von Gladys Assistant 5 neben dem Demo-Dashboard von Home Assistant",
        gladysLabel: "Gladys Assistant 5",
        haLabel: "Home Assistant",
        caption:
          "Gleicher Bildschirm, gleicher Tag, keine Retusche: links das Dashboard von Gladys Assistant 5, rechts die offizielle Demo von Home Assistant.",
      },
    },
    verdict: {
      title: "Die Kurzfassung",
      gladys: {
        title: "Wähle Gladys Assistant, wenn …",
        points: [
          "du etwas Einfaches willst, das schnell eingerichtet ist und einfach funktioniert.",
          "du eine aufgeräumte Oberfläche bevorzugst, in der alles per Klick geht – ohne Konfigurationsdateien und ohne YAML.",
          "dir Stabilität wichtig ist: Updates laufen vollautomatisch und atomar.",
          "du ein reaktionsschnelles Projekt willst, bei dem dein Feedback das Produkt wirklich prägt.",
          "du jedes beliebige Gerät einbinden können willst: Jeder kann eine externe Integration veröffentlichen, und du installierst sie mit einem Klick.",
        ],
      },
      ha: {
        title: "Wähle Home Assistant, wenn …",
        points: [
          "du sehr exotische Geräte besitzt, für die noch niemand eine Gladys-Integration gebaut hat.",
          "du Power-User bist und es liebst, bis ins Extreme zu basteln und anzupassen.",
          "du kein Problem damit hast, YAML zu bearbeiten und unter die Haube zu schauen.",
          "du den größtmöglichen Katalog an Integrationen willst, auch wenn die Qualität schwankt.",
        ],
      },
    },
    tableTitle: "Der schnelle Vergleich",
    tableCols: { feature: "", gladys: "Gladys Assistant", ha: "Home Assistant" },
    table: [
      { feature: "Gestartet", gladys: "2013", ha: "2013" },
      { feature: "Backend", gladys: "Node.js (JavaScript)", ha: "Python" },
      { feature: "Frontend", gladys: "Preact", ha: "Lit + Web Components" },
      {
        feature: "Installation",
        gladys: "Ein Docker-Befehl, ausführliche Doku und Videos",
        ha: "Home Assistant OS, die HA-Green-Box oder Docker",
      },
      {
        feature: "Einstiegshürde",
        gladys: "Einsteigerfreundlich, Schritt für Schritt geführt",
        ha: "Steilere Lernkurve",
      },
      {
        feature: "Konfigurationsdateien",
        gladys: "Keine: alles passiert in der Oberfläche",
        ha: "YAML für manche Bereiche nötig",
      },
      {
        feature: "Integrationen",
        gladys:
          "Native Integrationen rund um offene Standards (Zigbee, Matter, MQTT) plus externe Community-Integrationen, mit einem Klick installiert",
        ha: "Riesiger Katalog, von der Community gebaut, schwankende Qualität",
      },
      {
        feature: "Unterstützte Geräte",
        gladys: "Tausende über Zigbee, Matter und MQTT plus der Katalog externer Integrationen",
        ha: "Der größte verfügbare Katalog",
      },
      {
        feature: "Fehlende Integration ergänzen",
        gladys: "Jeder kann eine veröffentlichen: Vorlage klonen, auf GitHub pushen – ohne Pull Request und ohne Review",
        ha: "Eine Custom Component in Python schreiben oder eine aus der Community über HACS installieren",
      },
      {
        feature: "Automationen",
        gladys: "Ein einfacher Tab „Szenen“, visueller Editor, Node-RED",
        ha: "Automationen / Szenen / Skripte / Blueprints, visueller Editor, YAML, Node-RED",
      },
      {
        feature: "Integrierter Alarmmodus",
        gladys: "Ja",
        ha: "Nicht nativ",
      },
      {
        feature: "Integrierte Anwesenheitserkennung",
        gladys: "Ja",
        ha: "Über Integrationen",
      },
      {
        feature: "Updates",
        gladys: "Vollautomatisch und atomar",
        ha: "Häufig, können gelegentlich etwas kaputt machen",
      },
      {
        feature: "Support",
        gladys: "Direkte Antworten vom Entwickler, aktive Community",
        ha: "Große Community, Support durch die Community",
      },
      {
        feature: "Preis",
        gladys: "Kostenlos & Open Source + optionales Abo Gladys Plus",
        ha: "Kostenlos & Open Source + optionales Abo Nabu Casa Cloud",
      },
      {
        feature: "Philosophie",
        gladys: "Nutzer zuerst, Einfachheit auf Produktniveau",
        ha: "Entwickler zuerst, maximale Flexibilität",
      },
    ],
    sections: [
      {
        id: "installation",
        title: "Installation",
        gladys: [
          "Gladys ist wirklich einfach zu installieren. Es läuft mit einem einzigen Docker-Befehl (eine `docker run`-Zeile oder eine `docker-compose`-Datei, die du kopierst, einfügst und startest), und die Dokumentation begleitet dich bei jedem Schritt mit Screenshots und Installationsvideos.",
          "Und weil Gladys nur ein Container ist, kannst du deinen Mini-PC, dein NAS oder deinen Raspberry Pi weiterhin auch für andere Dinge nutzen.",
        ],
        ha: [
          "Home Assistant bietet Home Assistant OS, das ausgereift ist, und die Box Home Assistant Green kommt einsatzbereit an.",
          "Mit ihrer Box ist das unkompliziert. Ohne sie ist aber nicht immer klar, welche Installationsmethode die einfachste ist, da eher Home Assistant OS als der reine Docker-Weg empfohlen wird.",
        ],
        takeaway:
          "Beide sind einsteigerfreundlich, wenn du ihre Hardware kaufst. Gladys lässt sich aber besonders leicht selbst installieren – dank Docker-Setup in einer Zeile, ausführlicher Dokumentation und Schritt-für-Schritt-Videos.",
      },
      {
        id: "interface",
        title: "Oberfläche & Bedienung",
        gladys: [
          "Seit Version 5 bringt Gladys eine komplett neue Oberfläche namens Horizon mit: Milchglasflächen über einem lebendigen Farbverlauf, echte Tiefe und jedes Bedienelement einzeln neu gezeichnet. Sie wurde Mobile-first entworfen: Auf dem Handy wachsen die Bedienelemente auf Daumengröße, am Desktop schrumpfen sie wieder, und der Dashboard-Umschalter sitzt unten am Bildschirm, genau da, wo deine Hand ist.",
          "Die ganze Philosophie lautet: zuerst an die Nutzer denken, dann an die technische Umsetzung. Du musst nie in Logs wühlen oder eine Datei auf der Festplatte bearbeiten. Alles geht mit der Maus – oder mit dem Daumen.",
          "Du kannst so viele Dashboards anlegen, wie du willst, eines pro Raum oder nach Thema (Energie, Sicherheit usw.), ganz ohne Konfigurationsdateien, weil es schlicht keine gibt.",
          "Gladys bleibt bewusst fokussiert: Du ordnest die Widgets an, die du wirklich brauchst, statt dich durch endlose Optionen zu kämpfen. Und da es Open Source ist, kann die Community alles Fehlende ergänzen.",
        ],
        ha: [
          "Home Assistant hat eine moderne Material-Design-Oberfläche, die aufgeräumt und stark anpassbar ist. Das Dashboard lässt sich mit unzähligen Karten und Optionen komplett bearbeiten.",
          "In den Foren liest man aber oft, dass manche Bereiche noch das Bearbeiten von YAML-Dateien erfordern – was Einsteiger abschrecken kann.",
        ],
        takeaway:
          "Hier liegt Gladys klar vorn, und seit Version 5 ist es nicht einmal knapp. Home Assistant drückt dir einen Kasten voller Karten in die Hand und lässt dich dein Dashboard selbst zusammenbauen; Gladys gibt dir eines, das schon fertig aussieht – auf dem Handy genauso wie auf dem Laptop, ohne etwas zu konfigurieren. Wenn du eine App jahrelang mehrmals am Tag öffnest, zählt dieser Unterschied mehr als jede Funktionsliste.",
      },
      {
        id: "integrations",
        title: "Integrationen & Kompatibilität",
        gladys: [
          "Die nativen Integrationen von Gladys konzentrieren sich auf das Wesentliche: offene Standards wie Zigbee, Matter und MQTT, jede sorgfältig gebaut und durchgängig getestet, gestaltet wie ein ausgereiftes Endkundenprodukt statt von Entwicklern für Entwickler.",
          "Allein über Zigbee und Matter sind das schon Tausende kompatible Geräte. Die Wette: Offene Standards, allen voran Matter, werden sich durchsetzen. Deshalb investiert Gladys massiv dort, wohin sich der Markt bewegt, und nicht in geschlossene Cloud-Ökosysteme, die dich einsperren.",
          "Und für alles andere gibt es externe Integrationen. Das ist die größte Veränderung in der Geschichte des Projekts: Jeder kann jetzt eine Gladys-Integration schreiben und auf GitHub veröffentlichen, ohne Pull Request, ohne Review und ohne meine Freigabe. Sie erscheinen im Katalog jeder Gladys-Instanz neben den nativen Integrationen, und die Community hat in wenigen Tagen mehr davon veröffentlicht, als wir in sechs Jahren in den Kern eingebaut hatten.",
          "Für dich als Nutzer ändert sich nichts: Du stöberst im Katalog in Gladys, klickst auf Installieren, und Gladys lädt die Integration, startet sie und erzeugt ihre komplette Oberfläche (Geräteliste, Erkennung, Konfigurationsformular). Danach startest, stoppst und aktualisierst du sie oder liest ihre Logs an derselben Stelle. Keine Kommandozeile, kein YAML, keine technischen Kenntnisse nötig.",
          "Freiheit auf der einen Seite, die Sorgfalt von Gladys auf der anderen: Jede externe Integration läuft in einer isolierten Sandbox (begrenzter RAM und CPU, schreibgeschütztes Dateisystem, isoliertes Netzwerk). Stürzt eine ab, stürzt sie allein ab und kann deine Instanz nie mitreißen. Genau deshalb ist es sicher, die Tür für alle zu öffnen.",
          "Und wenn die Integration, die du brauchst, noch nicht existiert, musst du auf niemanden mehr warten: Du klonst die offizielle Vorlage, passt sie an dein Gerät an, veröffentlichst sie, und innerhalb einer Stunde landet sie im Katalog jeder Gladys-Instanz.",
        ],
        ha: [
          "Home Assistant hat einen riesigen Katalog mit Tausenden Community-Integrationen, sodass selbst exotische Geräte oft direkt unterstützt werden.",
          "Die Kehrseite ist die schwankende Qualität: Manche Integrationen sind hervorragend, andere weniger, und es liegt an dir, die richtige zu finden und zu testen, ob sie funktioniert. Über HACS installierte Custom Components laufen zudem innerhalb von Home Assistant selbst, eine fehlerhafte kann also die ganze Instanz beeinträchtigen.",
        ],
        takeaway:
          "Der übliche Einwand ist die Zahl der Integrationen, und dieses Argument verliert an Boden: Der Community-Katalog ist in gut zwei Wochen von 20 auf 67 Integrationen gewachsen, geschrieben von Leuten, die den Code von Gladys vorher nie geöffnet hatten, und das Tempo nimmt weiter zu. Home Assistant hat heute den größeren Katalog, und wenn du sehr exotische Hardware besitzt, stehen die Chancen gut, dass sie dort schon abgedeckt ist. Aber Gladys ist nicht mehr auf das beschränkt, wofür ich Zeit habe, und zwischen Matter auf der einen und einem Katalog, den jeder erweitern kann, auf der anderen Seite schließen wir diese Lücke ganz bewusst – und schnell.",
      },
      {
        id: "automations",
        title: "Automationen & Szenen",
        gladys: [
          "Alles lebt in einem einzigen Tab „Szenen“. Eine Szene kann eine manuelle Abfolge von Aktionen sein, die du vom Dashboard aus startest, oder eine vollwertige Automation mit Auslösern, Bedingungen und Aktionen.",
          "Der visuelle Editor ist intuitiv: Du beginnst (optional) mit einem Auslöser und hängst dann beliebig viele Bedingungen und Aktionen an, die du frei mischen kannst – eine Bedingung führt zu Aktionen, danach folgen weitere Bedingungen. Erstaunlich mächtig und trotzdem gut lesbar.",
          "Und falls du einmal weiter gehen musst, kannst du komplexe Logik in Node-RED auslagern und über MQTT oder HTTP mit Gladys verbinden.",
        ],
        ha: [
          "Home Assistant hat ebenfalls einen visuellen Editor, dazu teilbare YAML-Blueprints und eine Node-RED-Integration für Fortgeschrittenes.",
          "Allerdings verteilt es alles auf vier Tabs (Automationen, Szenen, Skripte und Blueprints), was sich am Anfang wie vier Varianten derselben Sache anfühlen kann und die Lernkurve zusätzlich steiler macht.",
        ],
        takeaway:
          "Gladys bündelt alles an einem einfachen, leistungsstarken Ort, während Home Assistant es auf vier Tabs verteilt. Für die meisten ist der eine Szenen-Tab von Gladys schneller gelernt und für alltägliche Automationen genauso leistungsfähig.",
      },
      {
        id: "community",
        title: "Community & Support",
        gladys: [
          "Gladys ist ein Projekt, das wirklich zuhört. Es gibt eine aktive Community im Forum und eine Roadmap, die von echtem Nutzerfeedback geprägt wird statt davon, was am einfachsten zu bauen ist.",
          "Das Beste: Du bekommst direkten Support vom Gründer. Wenn du eine Frage hast, selbst eine tiefgehende zum Code, kannst du mir eine E-Mail schreiben, im Forum posten oder mich in den sozialen Netzwerken kontaktieren – und du bekommst eine persönliche Antwort. So einen direkten Draht gibt es selten.",
        ],
        ha: [
          "Home Assistant hat eine riesige weltweite Community und ein gewaltiges Forum, du findest also meist jemanden, der dein Problem schon gelöst hat.",
          "Bei dieser Größe läuft der Support allerdings über die Community statt persönlich, und der Großteil der Kommunikation der Entwickler findet auf Englisch statt.",
        ],
        takeaway:
          "Bei der schieren Größe gewinnt Home Assistant. Gladys bietet dafür etwas Selteneres: ein reaktionsschnelles Projekt, bei dem der Entwickler zuhört und dir persönlich antwortet.",
      },
      {
        id: "pricing",
        title: "Preis & Geschäftsmodell",
        gladys: [
          "Der Kern von Gladys ist zu 100 % kostenlos und Open Source, und das für immer. Optional gibt es das Abo Gladys Plus für Fernzugriff, verschlüsselte automatische Backups, Sprachassistenten (Google Home, Alexa), KI und Energiedaten von Enedis.",
          "Das Geschäftsmodell ist tatsächlich das Abo – ohne Investoren, ohne Werbung und ohne Datenverkauf.",
        ],
        ha: [
          "Auch der Kern von Home Assistant ist zu 100 % kostenlos und Open Source, mit einem optionalen Abo Nabu Casa Cloud (Fernzugriff, Sprache) und einer wachsenden Hardware-Reihe wie der HA-Green-Box.",
        ],
        takeaway:
          "Beide haben ein transparentes, sehr ähnliches Modell: einen kostenlosen Open-Source-Kern plus ein optionales Abo. So oder so unterstützt du ein unabhängiges Projekt statt eines datenhungrigen Tech-Riesen.",
      },
    ],
    whyNotBoth: {
      title: "Warum nicht beides?",
      paragraphs: [
        "Das übersehen die meisten Vergleiche: Du musst dich nicht entscheiden. Du kannst Gladys Assistant und Home Assistant gleichzeitig im selben Setup betreiben.",
        "Mit Zigbee2MQTT kann eine einzige Zigbee-Instanz sowohl mit Gladys als auch mit Home Assistant sprechen, sodass dasselbe Gerät in beiden Oberflächen auftaucht. Dasselbe gilt für Matter: Ein Gerät, das mit einem Hub (etwa einem Apple TV) gekoppelt ist, lässt sich von beiden steuern. Du kannst mehrere Controller gleichzeitig nutzen.",
        "Beide bieten außerdem umfangreiche APIs und können über MQTT oder HTTP miteinander kommunizieren – das eine als Backend, das andere als deine Oberfläche.",
        "Wenn du also die Oberfläche von Gladys liebst, aber eine exotische Integration von Home Assistant brauchst, betreib beide parallel – oder mach selbst eine externe Gladys-Integration daraus und teile sie mit allen. Es gibt wirklich keine Ausrede: Alles ist möglich.",
      ],
    },
    faqTitle: "Häufig gestellte Fragen",
    cta: {
      title: "Bereit, Gladys Assistant auszuprobieren?",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Datenschutz zuerst, selbst gehostet, keine Cloud nötig.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: { label: "Zu den Integrationen", href: "/de/docs/integrations/" },
    },
  },
  es: {
    meta: {
      title: "Home Assistant vs Gladys Assistant: una comparativa honesta (2026)",
      description:
        "¿Home Assistant o Gladys Assistant? Una comparativa justa escrita por el fundador de Gladys: instalación, facilidad de uso, integraciones, automatizaciones, comunidad y precio, para elegir la plataforma de domótica de código abierto adecuada.",
    },
    hero: {
      title: "Home Assistant vs Gladys Assistant",
      subtitle: "Una comparativa honesta entre dos asistentes domóticos de código abierto",
      intro: [
        "¿Todavía dudas entre Home Assistant y Gladys Assistant? Esta comparativa te ahorrará horas.",
        "Total transparencia: soy Pierre-Gilles, el creador de Gladys Assistant, así que evidentemente no soy imparcial. Pero voy a ser justo con ambos proyectos. Así es como se comparan de verdad, y por qué creo que Gladys es la mejor opción para la mayoría de las personas que quieren un hogar inteligente que simplemente funcione.",
        "Ambos proyectos nacieron en 2013, justo después de la salida de la primera Raspberry Pi. A primera vista se parecen, pero se basan en filosofías muy distintas, y esa diferencia es precisamente la que debería guiar tu elección.",
      ],
      showdown: {
        alt: "El panel de Gladys Assistant 5 junto al panel de demostración de Home Assistant",
        gladysLabel: "Gladys Assistant 5",
        haLabel: "Home Assistant",
        caption:
          "Misma pantalla, mismo día, sin retoques: a la izquierda el panel de Gladys Assistant 5, a la derecha la demo oficial de Home Assistant.",
      },
    },
    verdict: {
      title: "En resumen",
      gladys: {
        title: "Elige Gladys Assistant si…",
        points: [
          "Quieres algo sencillo, rápido de configurar y que simplemente funcione.",
          "Prefieres una interfaz limpia en la que todo se hace con clics, sin archivos de configuración y sin YAML.",
          "Valoras la estabilidad: las actualizaciones son totalmente automáticas y atómicas.",
          "Quieres un proyecto receptivo en el que tus comentarios influyan de verdad en el producto.",
          "Quieres poder añadir cualquier dispositivo: cualquiera puede publicar una integración externa, y tú la instalas en un clic.",
        ],
      },
      ha: {
        title: "Elige Home Assistant si…",
        points: [
          "Tienes dispositivos muy de nicho para los que nadie ha creado todavía una integración de Gladys.",
          "Eres un usuario avanzado al que le encanta trastear y personalizarlo todo al extremo.",
          "Te sientes cómodo editando YAML y metiéndote en las tripas del sistema.",
          "Quieres el catálogo de integraciones más grande posible, aunque la calidad sea desigual.",
        ],
      },
    },
    tableTitle: "Comparativa rápida",
    tableCols: { feature: "", gladys: "Gladys Assistant", ha: "Home Assistant" },
    table: [
      { feature: "Creación", gladys: "2013", ha: "2013" },
      { feature: "Backend", gladys: "Node.js (JavaScript)", ha: "Python" },
      { feature: "Frontend", gladys: "Preact", ha: "Lit + Web Components" },
      {
        feature: "Instalación",
        gladys: "Un solo comando Docker, documentación completa y vídeos",
        ha: "Home Assistant OS, la caja HA Green o Docker",
      },
      {
        feature: "Dificultad de configuración",
        gladys: "Apta para principiantes, guiada paso a paso",
        ha: "Curva de aprendizaje más pronunciada",
      },
      {
        feature: "Archivos de configuración",
        gladys: "Ninguno: todo está en la interfaz",
        ha: "YAML necesario para algunas partes",
      },
      {
        feature: "Integraciones",
        gladys:
          "Integraciones nativas basadas en estándares abiertos (Zigbee, Matter, MQTT), más integraciones externas de la comunidad que se instalan en un clic",
        ha: "Catálogo enorme, creado por la comunidad, calidad desigual",
      },
      {
        feature: "Dispositivos compatibles",
        gladys: "Miles gracias a Zigbee, Matter y MQTT, más el catálogo de integraciones externas",
        ha: "El catálogo más amplio disponible",
      },
      {
        feature: "Añadir una integración que falta",
        gladys: "Cualquiera puede publicar una: clonas la plantilla, la subes a GitHub, sin pull request y sin revisión",
        ha: "Escribir un componente personalizado en Python, o instalar uno de la comunidad con HACS",
      },
      {
        feature: "Automatizaciones",
        gladys: "Una sola pestaña \"Escenas\", editor visual, Node-RED",
        ha: "Automatizaciones / Escenas / Scripts / Blueprints, editor visual, YAML, Node-RED",
      },
      {
        feature: "Modo alarma nativo",
        gladys: "Sí",
        ha: "No nativo",
      },
      {
        feature: "Presencia nativa",
        gladys: "Sí",
        ha: "Mediante integraciones",
      },
      {
        feature: "Actualizaciones",
        gladys: "Totalmente automáticas y atómicas",
        ha: "Frecuentes, a veces pueden romper cosas",
      },
      {
        feature: "Soporte",
        gladys: "Respuestas directas del creador, comunidad activa",
        ha: "Gran comunidad, soporte a cargo de la comunidad",
      },
      {
        feature: "Precio",
        gladys: "Gratis y de código abierto + suscripción opcional Gladys Plus",
        ha: "Gratis y de código abierto + suscripción opcional Nabu Casa Cloud",
      },
      {
        feature: "Filosofía",
        gladys: "El usuario primero, sencillez de producto acabado",
        ha: "El desarrollador primero, flexibilidad máxima",
      },
    ],
    sections: [
      {
        id: "installation",
        title: "Instalación",
        gladys: [
          "Gladys es realmente fácil de instalar. Funciona con un solo comando Docker (una línea `docker run` o un archivo `docker-compose` que copias, pegas y lanzas), y la documentación te acompaña en cada paso con capturas de pantalla y vídeos de instalación.",
          "Y como Gladys es simplemente un contenedor, sigues siendo libre de usar tu mini-PC, tu NAS o tu Raspberry Pi para otras cosas.",
        ],
        ha: [
          "Home Assistant ofrece Home Assistant OS, que está muy pulido, y la caja Home Assistant Green llega lista para usar.",
          "Es sencillo si compras su caja. Sin ella, en cambio, no siempre está claro qué método de instalación es el más simple, ya que tienden a promover Home Assistant OS antes que la vía Docker clásica.",
        ],
        takeaway:
          "Ambos son aptos para principiantes si compras su hardware. Pero Gladys es especialmente fácil de instalar por tu cuenta, gracias a una instalación Docker de una sola línea, una documentación completa y vídeos paso a paso.",
      },
      {
        id: "interface",
        title: "Interfaz y facilidad de uso",
        gladys: [
          "Desde la versión 5, Gladys incluye una interfaz totalmente nueva llamada Horizon: superficies de vidrio esmerilado sobre un degradado vivo, profundidad real y cada control redibujado uno a uno. Se diseñó pensando primero en el móvil, así que los controles crecen hasta el tamaño del pulgar en un teléfono y se reducen en un ordenador, y el selector de paneles está en la parte inferior de la pantalla, justo donde tienes la mano.",
          "Toda la filosofía consiste en pensar en el usuario antes que en la implementación técnica: nunca tienes que bucear en los logs ni editar un archivo en el disco. Todo se hace con el ratón, o con el pulgar.",
          "Puedes crear tantos paneles como quieras, uno por habitación o por tema (energía, seguridad, etc.), sin archivos de configuración, porque sencillamente no existen.",
          "Gladys se mantiene centrado a propósito: colocas los widgets que realmente necesitas en lugar de perderte entre opciones infinitas. Y como es de código abierto, la comunidad puede añadir cualquier cosa que falte.",
        ],
        ha: [
          "Home Assistant tiene una interfaz moderna de estilo Material Design, limpia y muy personalizable. El panel se puede editar por completo con montones de tarjetas y opciones.",
          "Pero en los foros verás a menudo que algunas partes todavía requieren editar archivos YAML, algo que puede intimidar a un principiante.",
        ],
        takeaway:
          "Aquí es donde Gladys va claramente por delante, y desde la versión 5 la diferencia es enorme. Home Assistant te da una caja de tarjetas y te deja montar tu propio panel; Gladys te da uno que ya parece terminado, tanto en el móvil como en el portátil, sin nada que configurar. Si vas a abrir una app varias veces al día durante años, esa diferencia importa más que cualquier lista de funciones.",
      },
      {
        id: "integrations",
        title: "Integraciones y compatibilidad",
        gladys: [
          "Las integraciones nativas de Gladys se centran en lo importante: estándares abiertos como Zigbee, Matter y MQTT, cada uno construido con cuidado y probado de principio a fin, diseñados como un producto de consumo pulido y no por desarrolladores para desarrolladores.",
          "Solo con Zigbee y Matter, eso ya supone miles de dispositivos compatibles. La apuesta es que los estándares abiertos, y Matter en particular, acabarán dominando, así que Gladys invierte con fuerza hacia donde va el mercado, y no en ecosistemas cerrados que dependen de la nube y te atan a ellos.",
          "Y para todo lo demás, están las integraciones externas. Es el mayor cambio de la historia del proyecto: ahora cualquiera puede escribir y publicar una integración de Gladys en GitHub, sin pull request, sin revisión y sin mi aprobación. Aparecen en el catálogo de cada instancia de Gladys, junto a las nativas, y la comunidad publicó más en unos pocos días de las que habíamos creado en el núcleo en seis años.",
          "Para ti como usuario, nada cambia: exploras el catálogo en Gladys, haces clic en Instalar, y Gladys descarga la integración, la inicia y genera toda su interfaz (lista de dispositivos, descubrimiento, formulario de configuración). Después la inicias, la detienes, la actualizas o lees sus logs desde el mismo lugar. Sin línea de comandos, sin YAML y sin conocimientos técnicos.",
          "Libertad por un lado, rigor de Gladys por el otro: cada integración externa se ejecuta en un entorno aislado (RAM y CPU limitadas, sistema de archivos de solo lectura, red aislada). Si una falla, falla sola, y nunca puede arrastrar tu instancia con ella. Eso es exactamente lo que permite abrir la puerta a todo el mundo con total seguridad.",
          "Y si la integración que necesitas todavía no existe, ya no tienes que esperar a nadie: clonas la plantilla oficial, la adaptas a tu dispositivo, la publicas, y llega al catálogo de todas las instancias de Gladys en menos de una hora.",
        ],
        ha: [
          "Home Assistant tiene un catálogo enorme con miles de integraciones de la comunidad, así que incluso los dispositivos más de nicho suelen ser compatibles de entrada.",
          "La otra cara de la moneda es una calidad desigual: algunas integraciones son excelentes, otras no tanto, y te toca a ti encontrar la adecuada y comprobar que funciona. Los componentes personalizados instalados con HACS también se ejecutan dentro del propio Home Assistant, así que uno que se comporte mal puede afectar a toda la instancia.",
        ],
        takeaway:
          "La objeción habitual es el número de integraciones, y ese argumento se está quedando sin recorrido: el catálogo de la comunidad pasó de 20 a 67 integraciones en algo más de dos semanas, escritas por personas que nunca antes habían abierto el código de Gladys, y sigue acelerándose. Hoy Home Assistant tiene el catálogo más grande, y si tienes hardware muy de nicho es muy probable que ya esté cubierto. Pero Gladys ya no está limitado a lo que yo tenga tiempo de construir, y entre Matter por un lado y un catálogo que cualquiera puede ampliar por el otro, estamos cerrando esa brecha a propósito, y rápido.",
      },
      {
        id: "automations",
        title: "Automatizaciones y escenas",
        gladys: [
          "Todo está en una única pestaña \"Escenas\". Una escena puede ser una secuencia manual de acciones que lanzas desde tu panel, o una automatización completa con disparadores, condiciones y acciones.",
          "El editor visual es intuitivo: empiezas con un disparador (opcional) y luego encadenas tantas condiciones y acciones como quieras, mezclándolas libremente, con una condición que lleva a acciones y después más condiciones. Es sorprendentemente potente sin dejar de ser fácil de leer.",
          "Y si alguna vez necesitas ir más allá, puedes delegar la lógica compleja a Node-RED y conectarlo a Gladys por MQTT o HTTP.",
        ],
        ha: [
          "Home Assistant también tiene un editor visual, además de blueprints YAML que se pueden compartir y una integración con Node-RED para ir más lejos.",
          "Lo reparte todo en cuatro pestañas (Automatizaciones, Escenas, Scripts y Blueprints), que al principio pueden parecer cuatro versiones de lo mismo y hacen más empinada la curva de aprendizaje.",
        ],
        takeaway:
          "Gladys lo reúne todo en un solo lugar, sencillo y potente, mientras que Home Assistant lo reparte en cuatro pestañas. Para la mayoría de la gente, la pestaña única de Escenas de Gladys se aprende más rápido y es igual de capaz para las automatizaciones del día a día.",
      },
      {
        id: "community",
        title: "Comunidad y soporte",
        gladys: [
          "Gladys es un proyecto que escucha de verdad. Hay una comunidad activa en el foro y una hoja de ruta guiada por los comentarios reales de los usuarios, y no por lo que resulta más fácil de construir.",
          "Y lo mejor de todo: tienes soporte directo del fundador. Si tienes una pregunta, aunque sea muy técnica sobre el código, puedes escribirme un correo, publicar en el foro o contactarme en redes sociales, y recibirás una respuesta personal. Ese tipo de acceso es poco común.",
        ],
        ha: [
          "Home Assistant tiene una comunidad mundial enorme y un foro gigantesco, así que normalmente encontrarás a alguien que ya ha resuelto tu problema.",
          "Con ese tamaño, sin embargo, el soporte lo da la comunidad y no es personal, y la mayor parte de la comunicación de los desarrolladores se hace en inglés.",
        ],
        takeaway:
          "Home Assistant gana por puro tamaño. Pero Gladys ofrece algo más raro: un proyecto receptivo en el que el creador escucha y te responde personalmente.",
      },
      {
        id: "pricing",
        title: "Precio y modelo de negocio",
        gladys: [
          "El núcleo de Gladys es 100 % gratuito y de código abierto, para siempre. Existe una suscripción opcional, Gladys Plus, para el acceso remoto, las copias de seguridad automáticas cifradas, los asistentes de voz (Google Home, Alexa), la IA y los datos de energía de Enedis.",
          "El modelo de negocio es realmente la suscripción, sin inversores, sin publicidad y sin reventa de datos.",
        ],
        ha: [
          "Home Assistant también es 100 % gratuito y de código abierto en su núcleo, con una suscripción opcional, Nabu Casa Cloud (acceso remoto, voz), y una gama creciente de hardware como la caja HA Green.",
        ],
        takeaway:
          "Ambos tienen un modelo transparente y muy parecido: un núcleo gratuito y de código abierto más una suscripción opcional. En cualquier caso, financias un proyecto independiente y no a un gigante tecnológico ávido de datos.",
      },
    ],
    whyNotBoth: {
      title: "¿Y por qué no los dos?",
      paragraphs: [
        "Esto es lo que la mayoría de las comparativas pasan por alto: no tienes por qué elegir. Puedes ejecutar Gladys Assistant y Home Assistant en la misma instalación y al mismo tiempo.",
        "Con Zigbee2MQTT, una sola instancia Zigbee puede comunicarse a la vez con Gladys y con Home Assistant, así que el mismo dispositivo aparece en ambas interfaces. Lo mismo ocurre con Matter: un dispositivo emparejado a un hub (como un Apple TV) puede controlarse desde los dos. Puedes tener varios controladores a la vez.",
        "Ambos exponen además API completas, así que pueden comunicarse entre sí por MQTT o HTTP, con uno haciendo de backend y el otro de interfaz.",
        "Así que si te encanta la interfaz de Gladys pero necesitas una integración de nicho de Home Assistant, ejecútalos uno al lado del otro, o conviértela tú mismo en una integración externa de Gladys y compártela con todo el mundo. De verdad, no hay excusa: todo es posible.",
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "¿Listo para probar Gladys Assistant?",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Privacidad ante todo, autoalojado, sin necesidad de nube.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: { label: "Ver las integraciones", href: "/es/docs/integrations/" },
    },
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

export const comparisonFaqDe = [
  {
    question: "Ist Gladys Assistant ein Fork von Home Assistant?",
    answer:
      "Nein. Gladys ist ein unabhängiges Projekt, 2013 gestartet – im selben Jahr wie Home Assistant –, aber mit einem komplett anderen Stack: Node.js und Preact bei Gladys, Python und Lit bei Home Assistant.",
  },
  {
    question: "Was ist einfacher für Einsteiger: Gladys oder Home Assistant?",
    answer:
      "Für Einsteiger ist Gladys die einfachere Wahl: keine Konfigurationsdateien und kein YAML, alles wird per Klick in der Oberfläche eingerichtet, und die Dokumentation führt dich mit Videos durch. Home Assistant ist mächtiger, hat aber eine steilere Lernkurve.",
  },
  {
    question: "Funktioniert Gladys mit meinen Geräten?",
    answer:
      "Sehr wahrscheinlich. Gladys unterstützt Tausende Geräte über offene Standards wie Zigbee, Matter und MQTT sowie eigene Integrationen für beliebte Marken. Alles andere deckt meist eine externe Integration ab, eine Community-Integration, die du mit einem Klick aus dem Katalog in Gladys installierst. Und wenn noch niemand die passende gebaut hat, kannst du sie mit der offiziellen Vorlage selbst erstellen.",
  },
  {
    question: "Was, wenn es keine Gladys-Integration für mein Gerät gibt?",
    answer:
      "Seit Version 4.84 kann jeder eine erstellen. Du klonst die offizielle Vorlage, passt sie an dein Gerät an, veröffentlichst sie in einem öffentlichen GitHub-Repository, und innerhalb einer Stunde steht sie im Katalog jeder Gladys-Instanz. Kein Pull Request, kein Review, keine Freigabe, auf die du warten musst. Jede externe Integration läuft in einer isolierten Sandbox und kann dein Gladys daher nie aus dem Gleichgewicht bringen.",
  },
  {
    question: "Machen externe Integrationen Gladys so kompliziert wie Home Assistant?",
    answer:
      "Nein. Die Installation ist ein einziger Klick im Katalog in Gladys: keine Kommandozeile, kein YAML, keine Konfigurationsdatei. Gladys erzeugt die komplette Oberfläche der Integration, und du startest, stoppst und aktualisierst sie oder liest ihre Logs auf demselben Bildschirm wie bei jeder nativen Integration.",
  },
  {
    question: "Kann ich Gladys und Home Assistant gleichzeitig betreiben?",
    answer:
      "Ja. Mit Zigbee2MQTT oder Matter Multi-Admin können dieselben Geräte in beiden Systemen erscheinen. Du kannst die beiden auch über MQTT oder HTTP verbinden, da beide umfangreiche APIs bieten.",
  },
  {
    question: "Ist Gladys kostenlos wie Home Assistant?",
    answer:
      "Ja. Der Kern beider Projekte ist zu 100 % kostenlos und Open Source. Beide bieten ein optionales kostenpflichtiges Abo: Gladys Plus für Gladys und Nabu Casa Cloud für Home Assistant.",
  },
  {
    question: "Soll ich Gladys oder Home Assistant wählen?",
    answer:
      "Wenn du ein einfaches, stabiles Smart Home willst, das einfach funktioniert – ohne YAML und ohne Konfigurationsdateien –, ist Gladys für die meisten die bessere Wahl. Nimm Home Assistant, wenn du Power-User bist, den größtmöglichen Katalog an Integrationen willst und gerne bastelst.",
  },
];

export const comparisonFaqEs = [
  {
    question: "¿Gladys Assistant es un fork de Home Assistant?",
    answer:
      "No. Gladys es un proyecto independiente, creado en 2013, el mismo año que Home Assistant, pero con un stack completamente distinto: Node.js y Preact para Gladys, frente a Python y Lit para Home Assistant.",
  },
  {
    question: "¿Qué es más fácil para principiantes, Gladys o Home Assistant?",
    answer:
      "Gladys es la opción más sencilla para principiantes: no hay archivos de configuración ni YAML, todo se configura haciendo clic en la interfaz, y la documentación te guía con vídeos. Home Assistant es más potente, pero tiene una curva de aprendizaje más pronunciada.",
  },
  {
    question: "¿Funcionará Gladys con mis dispositivos?",
    answer:
      "Muy probablemente. Gladys es compatible con miles de dispositivos gracias a estándares abiertos como Zigbee, Matter y MQTT, además de integraciones dedicadas para las marcas más populares. Casi todo lo demás suele estar cubierto por una integración externa, una integración de la comunidad que instalas en un clic desde el catálogo dentro de Gladys. Y si nadie ha creado todavía la que necesitas, puedes crearla tú mismo a partir de la plantilla oficial.",
  },
  {
    question: "¿Y si no existe una integración de Gladys para mi dispositivo?",
    answer:
      "Desde la versión 4.84, cualquiera puede crear una. Clonas la plantilla oficial, la adaptas a tu dispositivo, la publicas en un repositorio público de GitHub, y aparece en menos de una hora en el catálogo de todas las instancias de Gladys. No hay pull request, ni revisión, ni aprobación que esperar. Cada integración externa se ejecuta en un entorno aislado, así que nunca puede desestabilizar tu Gladys.",
  },
  {
    question: "¿Las integraciones externas hacen que Gladys sea tan complicado como Home Assistant?",
    answer:
      "No. Instalar una se hace con un solo clic desde el catálogo dentro de Gladys: sin línea de comandos, sin YAML y sin archivo de configuración. Gladys genera toda la interfaz de la integración, y la inicias, la detienes, la actualizas o lees sus logs desde la misma pantalla que cualquier integración nativa.",
  },
  {
    question: "¿Puedo usar Gladys y Home Assistant al mismo tiempo?",
    answer:
      "Sí. Con Zigbee2MQTT o el multiadministrador de Matter, los mismos dispositivos pueden aparecer en ambos. También puedes conectar los dos por MQTT o HTTP, ya que ambos exponen API completas.",
  },
  {
    question: "¿Gladys es gratuito como Home Assistant?",
    answer:
      "Sí. Ambos son 100 % gratuitos y de código abierto en su núcleo. Cada uno ofrece una suscripción de pago opcional: Gladys Plus para Gladys, y Nabu Casa Cloud para Home Assistant.",
  },
  {
    question: "¿Debería elegir Gladys o Home Assistant?",
    answer:
      "Si quieres un hogar inteligente sencillo y estable que simplemente funcione, sin YAML y sin archivos de configuración, Gladys es la mejor opción para la mayoría de la gente. Elige Home Assistant si eres un usuario avanzado que quiere el catálogo de integraciones más grande posible y al que le encanta trastear.",
  },
];

export default comparisonContent;
