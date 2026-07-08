// Content for the "Gladys vs Jeedom" comparison landing page.
// Same structure as comparisonData.js (the Home Assistant comparison), kept as a
// locale-keyed data object rather than dozens of <Translate> ids, because the
// page is long-form prose that is easier to maintain and keep in sync when both
// languages live side by side.
//
// Tone: this lives on Gladys' own site, so the comparison is fair and honest
// but allowed to lean slightly in Gladys' favor. Both projects are French and
// open-source, so we stay especially careful to credit Jeedom's real strengths
// (huge plugin ecosystem, Z-Wave, flexible scenarios) rather than caricaturing it.

// No dedicated "Gladys vs Jeedom" video yet, so the video section is disabled.
// Leaving the constant in place keeps this file symmetrical with comparisonData.js;
// set it to a YouTube id to enable the embedded video section.
const YOUTUBE_VIDEO_ID = "";

const comparisonContent = {
  en: {
    meta: {
      title: "Gladys vs Jeedom: an honest comparison (2026)",
      description:
        "Gladys Assistant or Jeedom? A fair comparison by Gladys' founder: installation, ease of use, integrations, scenarios, community and pricing, to pick the right open-source home automation platform.",
    },
    hero: {
      title: "Gladys Assistant vs Jeedom",
      subtitle: "An honest comparison between two French open-source home assistants",
      intro: [
        "Hesitating between Gladys Assistant and Jeedom? Both are open-source and both let you build a smart home that runs at home rather than in someone else's cloud. This comparison will save you hours.",
        "Full transparency: I'm Pierre-Gilles, the creator of Gladys Assistant, so I'm obviously biased. But I'll be fair about both projects. Jeedom is a serious, mature platform with a huge plugin ecosystem, and I'll credit it where it deserves it.",
        "The real difference isn't \"open-source vs proprietary\" or \"local vs cloud\", because they're alike on those. It's about philosophy: Jeedom is built around a vast, flexible plugin marketplace, while Gladys is built around a polished, curated, product-grade experience. That difference is exactly what should guide your choice.",
      ],
    },
    verdict: {
      title: "The short version",
      gladys: {
        title: "Choose Gladys Assistant if…",
        points: [
          "You want a clean, modern interface and something that simply works out of the box.",
          "You'd rather every integration be free and open, with no per-plugin fees.",
          "You value stability: updates are fully automatic and atomic.",
          "You like betting on open standards (Zigbee, Matter, MQTT) over a sprawling plugin catalog.",
        ],
      },
      ha: {
        title: "Choose Jeedom if…",
        points: [
          "You want the largest possible plugin marketplace, including very niche devices.",
          "You rely on Z-Wave and want deep, mature support for it.",
          "You like an all-in-one French box (Atlas, Luna, Smart) with everything built in.",
          "You enjoy a powerful, highly flexible scenario engine and don't mind paying for some plugins.",
        ],
      },
    },
    tableTitle: "Quick comparison",
    tableCols: { feature: "", gladys: "Gladys Assistant", ha: "Jeedom" },
    table: [
      { feature: "Created", gladys: "2013", ha: "2014" },
      { feature: "Origin", gladys: "France", ha: "France" },
      { feature: "Backend", gladys: "Node.js (JavaScript)", ha: "PHP" },
      { feature: "Frontend", gladys: "Preact", ha: "jQuery / traditional web UI" },
      {
        feature: "Installation",
        gladys: "One Docker command, rich docs and videos",
        ha: "Debian image, Raspberry Pi, or a Jeedom box (Atlas, Luna, Smart)",
      },
      {
        feature: "Setup difficulty",
        gladys: "Beginner-friendly, guided step by step",
        ha: "Approachable, but more technical once you dig in",
      },
      {
        feature: "Configuration files",
        gladys: "None: everything is in the interface",
        ha: "None: everything is in the interface too",
      },
      {
        feature: "Integrations",
        gladys: "Curated and polished, built around open standards (Zigbee, Matter, MQTT)",
        ha: "Huge plugin marketplace, broad protocol coverage including Z-Wave",
      },
      {
        feature: "Integration pricing",
        gladys: "All integrations are free and open-source",
        ha: "Freemium: many plugins are excellent but paid",
      },
      {
        feature: "Automations",
        gladys: "One simple \"Scenes\" tab, visual editor, Node-RED",
        ha: "Powerful scenario engine, Blockly visual editor, very flexible",
      },
      {
        feature: "Native alarm mode",
        gladys: "Yes",
        ha: "Via a plugin",
      },
      {
        feature: "Updates",
        gladys: "Fully automatic and atomic",
        ha: "Manual core and per-plugin updates",
      },
      {
        feature: "Support",
        gladys: "Direct answers from the maker, active French community",
        ha: "Large, very active French community + Market support",
      },
      {
        feature: "Pricing",
        gladys: "Free & open-source + optional Gladys Plus subscription",
        ha: "Free & open-source core + paid plugins + paid remote access (Market)",
      },
      {
        feature: "Philosophy",
        gladys: "User-first, product-grade simplicity",
        ha: "Flexibility through a vast plugin ecosystem",
      },
    ],
    sections: [
      {
        id: "installation",
        title: "Installation",
        gladys: [
          "Gladys runs with a single Docker command (a `docker run` line or a `docker-compose` file you copy, paste and launch), and the documentation walks you through every step with screenshots and installation videos.",
          "And because Gladys is just a container, you stay free to use your mini-PC, NAS or Raspberry Pi for other things too.",
        ],
        ha: [
          "Jeedom offers a ready-to-flash Debian image for Raspberry Pi, and a polished range of all-in-one boxes (Atlas, Luna, Smart) that arrive ready to use, often with Zigbee and Z-Wave already built in.",
          "That hardware route is genuinely convenient: buy the box, plug it in, done. Installing the core yourself on your own machine is also possible, though the Docker story is less central than it is with Gladys.",
        ],
        takeaway:
          "Both are easy if you buy their hardware. Gladys is especially simple to install yourself thanks to a one-line Docker setup, while Jeedom's boxes are a strong plug-and-play option with radios already inside.",
      },
      {
        id: "interface",
        title: "Interface & ease of use",
        gladys: [
          "Gladys has a clean, intuitive interface. The whole philosophy is to think about the user before the technical implementation: you never have to dig into logs or edit a file on disk. Everything happens with the mouse.",
          "You can build as many dashboards as you want, one per room or by theme (energy, security, and so on). The interface is deliberately focused: you arrange the widgets you actually need instead of wading through endless options.",
          "It feels like a modern consumer product, which is exactly the point.",
        ],
        ha: [
          "Jeedom is also configured entirely from a web interface, with no YAML to edit, and it's extremely customizable: you can shape dashboards and objects in fine detail.",
          "The flip side is that the interface shows its age and exposes a lot of options at once. It's powerful, but it can feel more technical and less polished, especially for a newcomer who just wants a clean result quickly.",
        ],
        takeaway:
          "Both avoid configuration files. Gladys leans toward a modern, focused, product-grade experience; Jeedom gives you more knobs and depth if you enjoy fine-tuning every detail.",
      },
      {
        id: "integrations",
        title: "Integrations & plugins",
        gladys: [
          "Gladys focuses on what matters: a curated set of integrations built around open standards like Zigbee, Matter and MQTT. Each one is carefully built and tested end to end, and they're all free and open-source, with no per-plugin fees.",
          "Through Zigbee and Matter alone, that already means thousands of compatible devices. The bet is that open standards, Matter especially, will dominate, so Gladys invests heavily where the market is heading.",
          "For anything not natively supported yet, Matterbridge can bridge devices onto a Matter network, including a Jeedom or Home Assistant plugin.",
        ],
        ha: [
          "This is where Jeedom shines: a huge plugin marketplace covering an enormous range of protocols and brands, including deep, mature Z-Wave support. If a device exists, there's often a Jeedom plugin for it.",
          "The trade-off is the freemium model: many of the best plugins are paid, so the real cost of your setup depends on which plugins you need. Quality also varies between official and community plugins.",
        ],
        takeaway:
          "If you want the widest catalog and strong Z-Wave, Jeedom's marketplace is hard to beat, as long as you're comfortable paying for some plugins. If you prefer free, open, curated integrations centered on Zigbee and Matter, Gladys is the cleaner choice.",
      },
      {
        id: "automations",
        title: "Automations & scenarios",
        gladys: [
          "Everything lives in a single \"Scenes\" tab. A scene can be a manual sequence of actions you trigger from your dashboard, or a full automation with triggers, conditions and actions.",
          "The visual editor is intuitive: you start with a trigger (optional), then chain as many conditions and actions as you want, mixing them freely. It's surprisingly powerful while staying easy to read.",
          "And if you ever need to go further, you can offload complex logic to Node-RED and connect it to Gladys over MQTT or HTTP.",
        ],
        ha: [
          "Jeedom's scenario engine is one of its strongest features: very flexible, with a Blockly visual editor and the ability to drop into more advanced logic when you need it.",
          "That power is great for tinkerers building intricate automations, but it also means more concepts to learn, and simple automations can take a few more steps to set up than they do in Gladys.",
        ],
        takeaway:
          "Jeedom offers a deeper, more flexible scenario engine for power users. Gladys keeps everything in one simple, readable place that's faster to learn and more than capable for everyday automations.",
      },
      {
        id: "community",
        title: "Community & support",
        gladys: [
          "Gladys is fully available in English: the interface, the documentation and the community all work in English, so you're never stuck translating a French-only tutorial just to get something done.",
          "You also get direct support from the founder. If you have a question, even a deep one about the code, you can email me, post on the forum, or reach out on social media, and you'll get a personal answer. The roadmap is shaped by real user feedback rather than by what's easiest to build.",
        ],
        ha: [
          "Jeedom has a large and very active community with a busy forum and plenty of tutorials, so someone has usually already solved your problem, as long as you read French.",
          "That's the catch for an English-speaking audience: Jeedom is essentially a French-only project. Its interface, documentation and community are overwhelmingly in French, which can be a real barrier if you don't speak it. Paid support is also available through the Market, but day-to-day help is community-driven rather than a direct line to the creators.",
        ],
        takeaway:
          "For an English speaker this matters a lot: Jeedom is essentially French-only, while Gladys is fully available in English, with personal, founder-led support on top.",
      },
      {
        id: "pricing",
        title: "Pricing & business model",
        gladys: [
          "Gladys is 100% free and open-source at its core, forever, and every integration is free too. There's an optional Gladys Plus subscription for remote access, encrypted automated backups, voice assistants (Google Home, Alexa), AI and Enedis energy data.",
          "The business model is really the subscription, with no investors, no ads and no data resale.",
        ],
        ha: [
          "Jeedom's core is also open-source, and it earns money differently: through hardware sales (its boxes), paid plugins on the Market, and a paid remote-access service.",
          "It's a transparent model too, but the total cost of a Jeedom setup is less predictable up front, because it depends on which paid plugins and services you end up needing.",
        ],
        takeaway:
          "Both fund independent projects rather than data-hungry giants. With Gladys, integrations are free and the cost is a single optional subscription; with Jeedom, the core is free but a full setup often involves paid plugins and services.",
      },
    ],
    whyNotBoth: {
      title: "Why not both?",
      paragraphs: [
        "Here's the part most comparisons miss: you don't have to choose. You can run Gladys Assistant and Jeedom on the same setup at the same time.",
        "With Zigbee2MQTT, a single Zigbee instance can talk to both Gladys and Jeedom, so the same device shows up in both interfaces. The same goes for Matter: a device paired to a hub can be controlled from several controllers at once.",
        "You can also bridge devices between them with Matterbridge, or simply have them talk over MQTT or HTTP, since both expose APIs. So if you love the Gladys interface but need a specific Jeedom plugin, run them side by side.",
        "There's really no excuse: everything is possible, and it's a great way to migrate gradually rather than all at once.",
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Ready to try Gladys Assistant?",
      text: "Gladys is free, open-source, and installs in a single Docker command. Privacy-first, self-hosted, no cloud required, and every integration is free.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "See the integrations", href: "/docs/integrations/" },
    },
    videoTitle: "Watch the full comparison",
  },

  fr: {
    meta: {
      title: "Gladys vs Jeedom : le comparatif honnête (2026)",
      description:
        "Gladys Assistant ou Jeedom ? Comparatif honnête par le créateur de Gladys : installation, simplicité, intégrations, scénarios, communauté et prix, pour choisir la bonne solution domotique open source française.",
    },
    hero: {
      title: "Gladys Assistant vs Jeedom",
      subtitle: "Un comparatif honnête entre deux assistants domotiques open source français",
      intro: [
        "Vous hésitez entre Gladys Assistant et Jeedom ? Les deux sont français, les deux sont open source, et les deux vous permettent de construire une maison connectée qui tourne chez vous plutôt que dans le cloud de quelqu'un d'autre. Ce comparatif va vous faire gagner des heures.",
        "En toute transparence : je suis Pierre-Gilles, le créateur de Gladys Assistant, donc je suis forcément un peu partial. Mais je serai juste envers les deux projets. Jeedom est une plateforme sérieuse et mature, avec un écosystème de plugins immense, et je le reconnaîtrai là où il le mérite.",
        "La vraie différence, ce n'est pas « open source ou propriétaire » ni « local ou cloud », car ils se ressemblent sur ces points. C'est une question de philosophie : Jeedom est construit autour d'un vaste marché de plugins très flexible, là où Gladys est construit autour d'une expérience soignée, aboutie, pensée comme un produit. C'est justement cette différence qui doit guider votre choix.",
      ],
    },
    verdict: {
      title: "En résumé",
      gladys: {
        title: "Choisissez Gladys Assistant si…",
        points: [
          "Vous voulez une interface moderne et épurée, et quelque chose qui fonctionne dès le départ.",
          "Vous préférez que chaque intégration soit gratuite et ouverte, sans frais par plugin.",
          "Vous tenez à la stabilité : les mises à jour sont totalement automatiques et atomiques.",
          "Vous aimez miser sur les standards ouverts (Zigbee, Matter, MQTT) plutôt que sur un catalogue de plugins tentaculaire.",
        ],
      },
      ha: {
        title: "Choisissez Jeedom si…",
        points: [
          "Vous voulez le plus grand marché de plugins possible, y compris pour des appareils très spécifiques.",
          "Vous comptez sur le Z-Wave et voulez un support mature et approfondi.",
          "Vous aimez une box française tout-en-un (Atlas, Luna, Smart) avec tout déjà intégré.",
          "Vous appréciez un moteur de scénarios puissant et très flexible, et accepter de payer certains plugins ne vous dérange pas.",
        ],
      },
    },
    tableTitle: "Comparatif express",
    tableCols: { feature: "", gladys: "Gladys Assistant", ha: "Jeedom" },
    table: [
      { feature: "Création", gladys: "2013", ha: "2014" },
      { feature: "Origine", gladys: "France", ha: "France" },
      { feature: "Backend", gladys: "Node.js (JavaScript)", ha: "PHP" },
      { feature: "Frontend", gladys: "Preact", ha: "jQuery / interface web classique" },
      {
        feature: "Installation",
        gladys: "Une commande Docker, doc et vidéos riches, ou un kit de démarrage pré-installé",
        ha: "Image Debian, Raspberry Pi, ou une box Jeedom (Atlas, Luna, Smart)",
      },
      {
        feature: "Difficulté de prise en main",
        gladys: "Accessible aux débutants, guidée pas à pas",
        ha: "Abordable, mais plus technique dès qu'on creuse",
      },
      {
        feature: "Fichiers de configuration",
        gladys: "Aucun : tout est dans l'interface",
        ha: "Aucun : tout est dans l'interface également",
      },
      {
        feature: "Intégrations",
        gladys: "Soignées et abouties, centrées sur les standards ouverts (Zigbee, Matter, MQTT)",
        ha: "Marché de plugins immense, large couverture de protocoles dont le Z-Wave",
      },
      {
        feature: "Prix des intégrations",
        gladys: "Toutes les intégrations sont gratuites et open source",
        ha: "Freemium : beaucoup de plugins sont excellents mais payants",
      },
      {
        feature: "Automatisations",
        gladys: "Un seul onglet « Scènes », éditeur visuel, Node-RED",
        ha: "Moteur de scénarios puissant, éditeur visuel Blockly, très flexible",
      },
      {
        feature: "Mode alarme natif",
        gladys: "Oui",
        ha: "Via un plugin",
      },
      {
        feature: "Mises à jour",
        gladys: "Totalement automatiques et atomiques",
        ha: "Mises à jour manuelles du cœur et de chaque plugin",
      },
      {
        feature: "Support",
        gladys: "Réponses directes du créateur, communauté française active",
        ha: "Grande communauté française très active + support via le Market",
      },
      {
        feature: "Modèle économique",
        gladys: "Gratuit & open source + abonnement Gladys Plus optionnel",
        ha: "Cœur gratuit & open source + plugins payants + accès distant payant (Market)",
      },
      {
        feature: "Philosophie",
        gladys: "L'utilisateur d'abord, simplicité « grand public »",
        ha: "La flexibilité par un vaste écosystème de plugins",
      },
    ],
    sections: [
      {
        id: "installation",
        title: "Installation",
        gladys: [
          "Gladys se lance en une seule commande Docker (une ligne `docker run` ou un fichier `docker-compose` que vous copiez, collez et lancez), et la documentation vous guide à chaque étape avec des captures d'écran et des vidéos d'installation.",
          "Et si vous préférez éviter toute installation, le kit de démarrage officiel est un mini-PC Beelink qui arrive avec Gladys déjà installée et configurée. Vous le branchez, suivez le guide de démarrage rapide, et c'est opérationnel en quelques minutes.",
          "Comme Gladys n'est qu'un conteneur, vous restez libre d'utiliser votre mini-PC, NAS ou Raspberry Pi pour autre chose en parallèle.",
        ],
        ha: [
          "Jeedom propose une image Debian prête à flasher pour Raspberry Pi, et une gamme aboutie de box tout-en-un (Atlas, Luna, Smart) qui arrivent prêtes à l'emploi, souvent avec le Zigbee et le Z-Wave déjà intégrés.",
          "Cette voie matérielle est vraiment pratique : vous achetez la box, vous la branchez, c'est fait. Installer le cœur soi-même sur sa propre machine est aussi possible, même si la voie Docker y est moins centrale que chez Gladys.",
        ],
        takeaway:
          "Les deux sont faciles si vous achetez leur matériel. Gladys est particulièrement simple à installer soi-même grâce à une commande Docker unique, là où les box Jeedom sont une excellente option clé en main avec les radios déjà à l'intérieur.",
      },
      {
        id: "interface",
        title: "Interface & prise en main",
        gladys: [
          "Gladys a une interface épurée et intuitive. Toute la philosophie, c'est de penser à l'utilisateur avant la technique : vous n'avez jamais à aller chercher dans les logs ou à éditer un fichier sur le disque. Tout se passe à la souris.",
          "Vous pouvez créer autant de tableaux de bord que vous voulez, un par pièce ou par thématique (énergie, sécurité…). L'interface est volontairement concentrée : vous disposez les widgets dont vous avez réellement besoin, sans vous noyer dans des options à n'en plus finir.",
          "On a vraiment l'impression d'un produit grand public moderne, et c'est exactement le but.",
        ],
        ha: [
          "Jeedom se configure aussi entièrement depuis une interface web, sans YAML à éditer, et il est extrêmement personnalisable : vous pouvez façonner vos tableaux de bord et vos objets dans le moindre détail.",
          "La contrepartie, c'est une interface qui a pris de l'âge et qui expose beaucoup d'options d'un coup. C'est puissant, mais cela peut sembler plus technique et moins abouti, surtout pour un débutant qui veut juste un beau résultat rapidement.",
        ],
        takeaway:
          "Les deux évitent les fichiers de configuration. Gladys penche vers une expérience moderne, concentrée et « produit » ; Jeedom vous donne plus de réglages et de profondeur si vous aimez peaufiner chaque détail.",
      },
      {
        id: "integrations",
        title: "Intégrations & plugins",
        gladys: [
          "Gladys se concentre sur l'essentiel : un ensemble d'intégrations soignées, construites autour des standards ouverts comme Zigbee, Matter et MQTT. Chacune est testée de bout en bout, et elles sont toutes gratuites et open source, sans frais par plugin.",
          "Rien qu'avec Zigbee et Matter, cela représente déjà des milliers d'appareils compatibles. Le pari, c'est que les standards ouverts, Matter en particulier, vont dominer ; Gladys investit donc là où va le marché.",
          "Pour tout ce qui n'est pas encore supporté nativement, Matterbridge permet de relier des appareils à un réseau Matter, y compris via un plugin Jeedom ou Home Assistant.",
        ],
        ha: [
          "C'est là que Jeedom brille : un marché de plugins immense couvrant un éventail énorme de protocoles et de marques, avec notamment un support Z-Wave mature et approfondi. Si un appareil existe, il y a souvent un plugin Jeedom pour lui.",
          "La contrepartie, c'est le modèle freemium : beaucoup des meilleurs plugins sont payants, donc le coût réel de votre installation dépend des plugins dont vous avez besoin. La qualité varie aussi entre plugins officiels et communautaires.",
        ],
        takeaway:
          "Si vous voulez le catalogue le plus large et un Z-Wave solide, le marché de Jeedom est difficile à battre, à condition d'accepter de payer certains plugins. Si vous préférez des intégrations gratuites, ouvertes et soignées centrées sur Zigbee et Matter, Gladys est le choix le plus net.",
      },
      {
        id: "scenarios",
        title: "Automatisations & scénarios",
        gladys: [
          "Tout est dans un seul onglet « Scènes ». Une scène peut être une suite d'actions que vous lancez manuellement depuis votre tableau de bord, ou un scénario complet avec déclencheur, conditions et actions.",
          "L'éditeur visuel est intuitif : vous partez d'un déclencheur (optionnel), puis vous enchaînez autant de conditions et d'actions que vous voulez, en les mélangeant librement. C'est étonnamment puissant tout en restant facile à lire.",
          "Et si vous avez besoin d'aller plus loin, vous pouvez déporter la logique complexe vers Node-RED et le connecter à Gladys en MQTT ou HTTP.",
        ],
        ha: [
          "Le moteur de scénarios de Jeedom est l'une de ses plus grandes forces : très flexible, avec un éditeur visuel Blockly et la possibilité de basculer vers une logique plus avancée quand vous en avez besoin.",
          "Cette puissance est idéale pour les bidouilleurs qui construisent des automatisations complexes, mais elle implique aussi plus de concepts à apprendre, et une automatisation simple peut demander quelques étapes de plus que dans Gladys.",
        ],
        takeaway:
          "Jeedom offre un moteur de scénarios plus profond et plus flexible pour les power users. Gladys regroupe tout en un seul endroit simple et lisible, plus rapide à apprendre et largement suffisant pour les automatisations du quotidien.",
      },
      {
        id: "communaute",
        title: "Communauté & support",
        gladys: [
          "Les deux projets sont français, donc des deux côtés vous trouverez une communauté francophone accueillante et un support en français, ce qui est un vrai avantage face à beaucoup de projets uniquement anglophones.",
          "Ce qui est plus spécifique à Gladys, c'est le support direct du fondateur. Pour toute question, même très pointue sur le code, vous pouvez m'envoyer un mail, poster sur le forum ou me contacter sur les réseaux, et vous aurez une réponse personnelle. La feuille de route est façonnée par les retours réels des utilisateurs.",
        ],
        ha: [
          "Jeedom a une communauté française grande et très active, un forum animé et de nombreux tutoriels, donc vous trouverez généralement quelqu'un qui a déjà résolu votre problème.",
          "Un support payant est aussi disponible via le Market. Avec cette ampleur, le support au quotidien reste surtout communautaire plutôt qu'une ligne directe avec les créateurs.",
        ],
        takeaway:
          "Les deux offrent quelque chose de rare : une communauté francophone solide et un support en français. Jeedom gagne sur la taille de la communauté et le volume de contenu ; Gladys offre une relation plus personnelle, portée par son fondateur.",
      },
      {
        id: "prix",
        title: "Prix & modèle économique",
        gladys: [
          "Gladys est 100 % gratuite et open source dans son cœur, pour toujours, et chaque intégration est gratuite elle aussi. Il existe un abonnement optionnel Gladys Plus pour l'accès distant, les sauvegardes automatisées chiffrées, les assistants vocaux (Google Home, Alexa), l'IA et les données d'énergie Enedis.",
          "Je vends aussi des kits de démarrage, non pas pour faire de la marge mais pour rendre Gladys plus accessible. Le modèle économique repose vraiment sur l'abonnement, sans investisseurs, sans publicité et sans revente de données.",
        ],
        ha: [
          "Le cœur de Jeedom est aussi open source, et le projet se finance autrement : par la vente de matériel (ses box), par les plugins payants du Market, et par un service d'accès distant payant.",
          "C'est un modèle transparent lui aussi, mais le coût total d'une installation Jeedom est moins prévisible au départ, car il dépend des plugins et services payants dont vous finirez par avoir besoin.",
        ],
        takeaway:
          "Les deux financent des projets indépendants plutôt que des géants avides de données. Avec Gladys, les intégrations sont gratuites et le coût se résume à un seul abonnement optionnel ; avec Jeedom, le cœur est gratuit mais une installation complète passe souvent par des plugins et services payants.",
      },
    ],
    whyNotBoth: {
      title: "Et pourquoi pas les deux ?",
      paragraphs: [
        "Voici ce que la plupart des comparatifs oublient : vous n'êtes pas obligé de choisir. Vous pouvez faire tourner Gladys Assistant et Jeedom en même temps sur la même installation.",
        "Avec Zigbee2MQTT, une seule instance Zigbee peut parler à la fois à Gladys et à Jeedom, donc le même appareil apparaît dans les deux interfaces. Même chose avec Matter : un appareil associé à un hub peut être contrôlé depuis plusieurs contrôleurs en même temps.",
        "Vous pouvez aussi faire le pont entre les deux avec Matterbridge, ou simplement les faire communiquer en MQTT ou HTTP, puisque les deux exposent des API. Donc si vous aimez l'interface de Gladys mais avez besoin d'un plugin Jeedom précis, faites tourner les deux côte à côte.",
        "Il n'y a vraiment pas d'excuse : tout est possible, et c'est une excellente façon de migrer progressivement plutôt que d'un seul coup.",
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Prêt à essayer Gladys Assistant ?",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Auto-hébergée, respectueuse de votre vie privée, sans cloud obligatoire, et toutes les intégrations sont gratuites.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Voir les intégrations", href: "/docs/integrations/" },
    },
    videoTitle: "Voir le comparatif en vidéo",
  },
};

export const comparisonFaqEn = [
  {
    question: "Is Jeedom available in English?",
    answer:
      "Jeedom is essentially a French-only project: its interface, documentation and community are overwhelmingly in French, which can be a real barrier if you don't speak it. Gladys Assistant, by contrast, is fully available in English, interface, documentation and community alike.",
  },
  {
    question: "Which is easier for beginners, Gladys or Jeedom?",
    answer:
      "Gladys is generally easier for beginners thanks to its modern, focused interface and fully automatic updates. Neither requires editing YAML, but Jeedom exposes more options at once and feels more technical, while Gladys aims for a clean product-grade experience.",
  },
  {
    question: "Are Jeedom plugins free?",
    answer:
      "Jeedom's core is free and open-source, but it uses a freemium model: many of the best plugins are paid. With Gladys, every integration is free and open-source, so the cost is simply the optional Gladys Plus subscription if you want it.",
  },
  {
    question: "Does Gladys support Z-Wave like Jeedom?",
    answer:
      "Jeedom has particularly deep, mature Z-Wave support, which is one of its strengths. Gladys focuses on open standards like Zigbee, Matter and MQTT, which already cover thousands of devices, and Matterbridge can bridge other devices onto a Matter network.",
  },
  {
    question: "Can I run Gladys and Jeedom at the same time?",
    answer:
      "Yes. With Zigbee2MQTT or Matter multi-admin, the same devices can appear in both at once. They can also talk over MQTT or HTTP, so you can run them side by side and migrate gradually rather than all at once.",
  },
  {
    question: "Should I choose Gladys or Jeedom?",
    answer:
      "Choose Gladys if you want a simple, modern, stable smart home where every integration is free and built on open standards. Choose Jeedom if you want the largest plugin marketplace, strong Z-Wave support and a flexible scenario engine, and don't mind paying for some plugins.",
  },
];

export const comparisonFaqFr = [
  {
    question: "Gladys et Jeedom sont-ils tous les deux des projets open source français ?",
    answer:
      "Oui. Gladys Assistant et Jeedom sont deux solutions domotiques françaises, open source et auto-hébergées, avec des communautés francophones actives. Ils diffèrent surtout par la philosophie : Gladys mise sur une expérience soignée et sélective, là où Jeedom est construit autour d'un grand marché de plugins.",
  },
  {
    question: "Lequel est le plus simple pour un débutant, Gladys ou Jeedom ?",
    answer:
      "Gladys est généralement plus simple pour débuter, grâce à son interface moderne et concentrée et à ses mises à jour totalement automatiques. Aucun des deux ne demande d'éditer du YAML, mais Jeedom expose plus d'options d'un coup et paraît plus technique, là où Gladys vise une expérience « produit » épurée.",
  },
  {
    question: "Les plugins Jeedom sont-ils gratuits ?",
    answer:
      "Le cœur de Jeedom est gratuit et open source, mais il fonctionne en freemium : beaucoup des meilleurs plugins sont payants. Avec Gladys, chaque intégration est gratuite et open source ; le seul coût éventuel est l'abonnement optionnel Gladys Plus, si vous le souhaitez.",
  },
  {
    question: "Gladys supporte-t-il le Z-Wave comme Jeedom ?",
    answer:
      "Jeedom dispose d'un support Z-Wave particulièrement mature et approfondi, c'est l'une de ses forces. Gladys mise sur les standards ouverts comme Zigbee, Matter et MQTT, qui couvrent déjà des milliers d'appareils, et Matterbridge permet de relier d'autres appareils à un réseau Matter.",
  },
  {
    question: "Puis-je faire tourner Gladys et Jeedom en même temps ?",
    answer:
      "Oui. Avec Zigbee2MQTT ou le multi-admin Matter, les mêmes appareils peuvent apparaître dans les deux en même temps. Ils peuvent aussi communiquer en MQTT ou HTTP, donc vous pouvez les faire tourner côte à côte et migrer progressivement plutôt que d'un seul coup.",
  },
  {
    question: "Faut-il choisir Gladys ou Jeedom ?",
    answer:
      "Choisissez Gladys si vous voulez une maison connectée simple, moderne et stable, où chaque intégration est gratuite et bâtie sur des standards ouverts. Choisissez Jeedom si vous voulez le plus grand marché de plugins, un support Z-Wave solide et un moteur de scénarios flexible, et que payer certains plugins ne vous dérange pas.",
  },
];

export { YOUTUBE_VIDEO_ID };
export default comparisonContent;
