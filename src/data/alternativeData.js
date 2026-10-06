// Content for the "Home Assistant alternative" landing page.
// Different search intent from the head-to-head comparison page: people here
// are actively looking to replace or avoid Home Assistant. So this page is
// more Gladys-forward and persuasive, briefly covers other open-source
// alternatives (for trust + intent coverage), stays honest about Gladys'
// trade-offs, and links to the full comparison page rather than duplicating it.

const alternativeContent = {
  en: {
    meta: {
      title: "The best Home Assistant alternative: Gladys Assistant",
      description:
        "Looking for a Home Assistant alternative? Gladys Assistant is a simpler, privacy-first, open-source home automation platform: no YAML, no cloud, stable automatic updates. Free and self-hosted.",
    },
    hero: {
      title: "Looking for a Home Assistant alternative?",
      subtitle:
        "Meet Gladys Assistant, the simpler, privacy-first, open-source home automation platform.",
      intro: [
        "Home Assistant is a fantastic project, but it isn't for everyone. Between YAML files, a steep learning curve and frequent updates, many people look for something simpler, without giving up open-source and local control.",
        "That's exactly why Gladys Assistant exists. It's a free, open-source, self-hosted home automation platform built around one idea: think about the user first. No configuration files, no cloud required, everything happens with a few clicks.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Gladys vs Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Why look for an alternative to Home Assistant?",
      intro:
        "Home Assistant is incredibly powerful, but that power comes at a cost. The most common reasons people start searching for an alternative:",
      points: [
        "You have to edit YAML configuration files for some setups.",
        "The learning curve is steep, and the interface can feel overwhelming for a beginner.",
        "Frequent updates sometimes break a setup that was working fine.",
        "It often feels \"made by developers, for developers\".",
        "You want a clean, stable experience that just works, without tinkering.",
      ],
      outro:
        "None of this makes Home Assistant a bad project. It's excellent if you love to tinker. It's simply a question of fit, and for most people who just want a smart home that works, there's a simpler way.",
    },
    reasons: {
      title: "Why Gladys is a great Home Assistant alternative",
      cards: [
        {
          icon: "☀️",
          title: "An interface you don't have to build",
          text: "Version 5 ships Horizon, a brand new design built mobile-first: frosted glass, real depth, and controls sized for a thumb. You get a dashboard that already looks finished, on your phone as much as on your laptop, with no cards to assemble and nothing to configure.",
        },
        {
          icon: "🖱️",
          title: "No YAML, ever",
          text: "Everything is configured by clicking in the interface. There are no configuration files to edit, because there are none.",
        },
        {
          icon: "🛡️",
          title: "Rock-solid stability",
          text: "Updates are fully automatic and atomic: Gladys can never end up in a half-broken state between two versions.",
        },
        {
          icon: "🔒",
          title: "Privacy-first & self-hosted",
          text: "Gladys runs at home, on your machine. Your data stays on your local network, with no mandatory cloud, no tracking and no data selling.",
        },
        {
          icon: "🔌",
          title: "Built on open standards",
          text: "Zigbee, Matter and MQTT are first-class citizens, so thousands of devices are supported through these open protocols.",
        },
        {
          icon: "🧩",
          title: "External integrations",
          text: "Anyone can publish a Gladys integration on GitHub, with no pull request and no review. You install it in one click from the catalog inside Gladys, and it runs in an isolated sandbox so it can never break your instance.",
        },
        {
          icon: "💬",
          title: "A project that listens",
          text: "Ask a question by email, on the forum or on social media, and the founder answers personally. Your feedback genuinely shapes the roadmap.",
        },
        {
          icon: "💚",
          title: "Free & open-source forever",
          text: "The Gladys core is 100% free and open-source. An optional Gladys Plus subscription adds remote access, AI and backups.",
        },
      ],
    },
    honesty: {
      title: "Being fair: where Home Assistant has the edge",
      paragraphs: [
        "I'm the creator of Gladys, so let me be transparent. Home Assistant still has a larger catalog of integrations, so if you own very niche or cloud-only devices, it may support them out of the box when Gladys doesn't yet. It also lets you share automations as YAML blueprints and gives power users more knobs to turn.",
        "But that gap is closing fast, and on purpose. The community catalog went from 20 to 67 external integrations in a little over two weeks, written by people who had never opened the Gladys codebase before. Anyone can package an integration, publish it on GitHub without asking anyone's permission, and it shows up in the catalog of every Gladys instance. You install it in one click, with no command line and no YAML, and it runs sandboxed so it can't destabilize your setup. Add Zigbee and Matter, the open standards the whole industry is moving toward, and the one thing Home Assistant is supposed to win on is also the thing changing fastest.",
        "And if the integration you need doesn't exist yet, you can build it from the official template instead of waiting for it. You can also run Gladys and Home Assistant side by side, using one as a backend and the other as your interface. In other words, choosing Gladys rarely means giving anything up, and since version 5 the interface is a reason to switch rather than a compromise.",
      ],
      compareLink: {
        label: "See the full Gladys vs Home Assistant comparison →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Other open-source Home Assistant alternatives",
      intro:
        "Gladys isn't the only option. To be fair, here are the main open-source alternatives to Home Assistant:",
      cards: [
        {
          title: "openHAB",
          text: "Java-based, very powerful and rules-driven. Highly flexible, but with a learning curve comparable to Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Lightweight and runs on modest hardware. Mature and stable, but the interface feels dated.",
        },
        {
          title: "Jeedom",
          text: "A French project with a plugin-based, freemium model. Flexible, but many plugins are paid.",
        },
        {
          title: "Homey Pro",
          text: "A polished experience, but it relies on proprietary paid hardware rather than being fully open and self-hosted.",
        },
      ],
      outro:
        "Among these, Gladys stands out for its simplicity and true product experience: a clean interface, no configuration files, and a focus on open standards.",
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Try the simple Home Assistant alternative",
      text: "Gladys is free, open-source, and installs in a single Docker command. Privacy-first, self-hosted, no cloud required.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Compare with Home Assistant",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
  },

  fr: {
    meta: {
      title: "La meilleure alternative à Home Assistant : Gladys Assistant",
      description:
        "Vous cherchez une alternative à Home Assistant ? Gladys Assistant est une solution domotique open source, plus simple et respectueuse de la vie privée : sans YAML, sans cloud, avec des mises à jour automatiques et stables. Gratuite et auto-hébergée.",
    },
    hero: {
      title: "Vous cherchez une alternative à Home Assistant ?",
      subtitle:
        "Découvrez Gladys Assistant, la solution domotique open source plus simple et respectueuse de votre vie privée.",
      intro: [
        "Home Assistant est un projet formidable, mais il ne convient pas à tout le monde. Entre les fichiers YAML, une courbe d'apprentissage raide et des mises à jour fréquentes, beaucoup cherchent quelque chose de plus simple, sans renoncer à l'open source et au contrôle local.",
        "C'est exactement pour ça que Gladys Assistant existe. C'est une solution domotique gratuite, open source et auto-hébergée, construite autour d'une idée : penser d'abord à l'utilisateur. Pas de fichiers de configuration, pas de cloud obligatoire, tout se fait en quelques clics.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Gladys vs Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Pourquoi chercher une alternative à Home Assistant ?",
      intro:
        "Home Assistant est incroyablement puissant, mais cette puissance a un prix. Les raisons les plus fréquentes qui poussent à chercher une alternative :",
      points: [
        "Il faut éditer des fichiers de configuration YAML pour certains réglages.",
        "La courbe d'apprentissage est raide, et l'interface peut sembler intimidante pour un débutant.",
        "Les mises à jour fréquentes cassent parfois une installation qui fonctionnait bien.",
        "On a souvent l'impression que c'est « fait par des développeurs, pour des développeurs ».",
        "Vous voulez une expérience propre et stable qui fonctionne, sans bidouiller.",
      ],
      outro:
        "Rien de tout cela ne fait de Home Assistant un mauvais projet. Il est excellent si vous aimez bidouiller. C'est simplement une question d'adéquation, et pour la plupart des gens qui veulent juste une maison connectée qui fonctionne, il existe une voie plus simple.",
    },
    reasons: {
      title: "Pourquoi Gladys est une excellente alternative à Home Assistant",
      cards: [
        {
          icon: "☀️",
          title: "Une interface que vous n'avez pas à construire",
          text: "La version 5 apporte Horizon, un design entièrement nouveau pensé pour le mobile d'abord : du verre dépoli, de la vraie profondeur, des contrôles à taille de pouce. Vous obtenez un tableau de bord qui a déjà l'air fini, sur votre téléphone autant que sur votre ordinateur, sans cartes à assembler ni rien à configurer.",
        },
        {
          icon: "🖱️",
          title: "Jamais de YAML",
          text: "Tout se configure au clic dans l'interface. Aucun fichier de configuration à éditer, parce qu'il n'y en a pas.",
        },
        {
          icon: "🛡️",
          title: "Une stabilité à toute épreuve",
          text: "Les mises à jour sont totalement automatiques et atomiques : Gladys ne peut jamais se retrouver dans un état bâtard entre deux versions.",
        },
        {
          icon: "🔒",
          title: "Vie privée & auto-hébergement",
          text: "Gladys tourne chez vous, sur votre machine. Vos données restent sur votre réseau local, sans cloud obligatoire, sans tracking et sans revente.",
        },
        {
          icon: "🔌",
          title: "Basée sur les standards ouverts",
          text: "Zigbee, Matter et MQTT sont au cœur du projet, donc des milliers d'appareils sont supportés via ces protocoles ouverts.",
        },
        {
          icon: "🧩",
          title: "Les intégrations externes",
          text: "N'importe qui peut publier une intégration Gladys sur GitHub, sans pull request ni validation. Vous l'installez en un clic depuis le catalogue intégré à Gladys, et elle tourne dans un bac à sable isolé : elle ne peut jamais casser votre instance.",
        },
        {
          icon: "💬",
          title: "Un projet à l'écoute",
          text: "Posez une question par mail, sur le forum ou les réseaux sociaux, et le fondateur répond personnellement, en français. Vos retours façonnent vraiment la feuille de route.",
        },
        {
          icon: "💚",
          title: "Gratuite & open source pour toujours",
          text: "Le cœur de Gladys est 100 % gratuit et open source. L'abonnement optionnel Gladys Plus ajoute l'accès distant, l'IA et les sauvegardes.",
        },
      ],
    },
    honesty: {
      title: "En toute honnêteté : là où Home Assistant garde l'avantage",
      paragraphs: [
        "Je suis le créateur de Gladys, alors soyons transparents. Home Assistant dispose encore d'un catalogue d'intégrations plus large : si vous avez des appareils très spécifiques ou cloud-only, il a plus de chances de les supporter directement, là où Gladys ne le fait pas encore. Il permet aussi de partager des automatisations via des blueprints YAML et offre plus de réglages aux power users.",
        "Mais cet écart se réduit vite, et volontairement. Le catalogue communautaire est passé de 20 à 67 intégrations externes en un peu plus de deux semaines, écrites par des gens qui n'avaient jamais ouvert le code de Gladys. N'importe qui peut empaqueter une intégration, la publier sur GitHub sans demander la permission à personne, et elle apparaît dans le catalogue de toutes les instances Gladys. Vous l'installez en un clic, sans ligne de commande ni YAML, et elle tourne isolée dans son bac à sable, sans pouvoir déstabiliser votre installation. Ajoutez Zigbee et Matter, les standards ouverts vers lesquels toute l'industrie se dirige, et le seul terrain sur lequel Home Assistant est censé gagner est aussi celui qui bouge le plus vite.",
        "Et si l'intégration dont vous avez besoin n'existe pas encore, vous pouvez la créer à partir du template officiel plutôt que de l'attendre. Vous pouvez aussi faire tourner Gladys et Home Assistant côte à côte, l'un servant de backend et l'autre d'interface. Autrement dit, choisir Gladys ne veut presque jamais dire renoncer à quoi que ce soit, et depuis la version 5 l'interface est une raison de basculer, plus un compromis.",
      ],
      compareLink: {
        label: "Voir le comparatif complet Gladys vs Home Assistant →",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Les autres alternatives open source à Home Assistant",
      intro:
        "Gladys n'est pas la seule option. Pour être juste, voici les principales alternatives open source à Home Assistant :",
      cards: [
        {
          title: "openHAB",
          text: "Basé sur Java, très puissant et orienté règles. Très flexible, mais avec une courbe d'apprentissage comparable à Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Léger et tourne sur du matériel modeste. Mature et stable, mais l'interface est datée.",
        },
        {
          title: "Jeedom",
          text: "Un projet français au modèle freemium basé sur des plugins. Flexible, mais beaucoup de plugins sont payants.",
        },
        {
          title: "Homey Pro",
          text: "Une expérience soignée, mais qui repose sur du matériel propriétaire payant plutôt que sur un vrai auto-hébergement ouvert.",
        },
      ],
      outro:
        "Parmi elles, Gladys se distingue par sa simplicité et sa vraie expérience produit : une interface épurée, aucun fichier de configuration, et un focus sur les standards ouverts.",
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Essayez l'alternative simple à Home Assistant",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Auto-hébergée, respectueuse de votre vie privée, sans cloud obligatoire.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Comparer avec Home Assistant",
        href: "/home-assistant-vs-gladys-assistant/",
      },
    },
  },
  de: {
    meta: {
      title: "Home Assistant Alternative: Gladys Assistant",
      description:
        "Suchst du eine Home Assistant Alternative? Gladys Assistant ist einfacher, Open Source und selbst gehostet: ohne YAML, ohne Cloud, mit stabilen Updates.",
    },
    hero: {
      title: "Du suchst eine Alternative zu Home Assistant?",
      subtitle:
        "Lerne Gladys Assistant kennen: die einfachere Open-Source-Plattform für Hausautomation, bei der Datenschutz an erster Stelle steht.",
      intro: [
        "Home Assistant ist ein großartiges Projekt, aber nicht für jeden gemacht. YAML-Dateien, eine steile Lernkurve und häufige Updates: Viele suchen etwas Einfacheres, ohne auf Open Source und lokale Kontrolle zu verzichten.",
        "Genau dafür gibt es Gladys Assistant. Eine kostenlose, quelloffene und selbst gehostete Hausautomation, die auf einer Idee aufbaut: zuerst an die Nutzer denken. Keine Konfigurationsdateien, keine Cloud nötig, alles geht mit ein paar Klicks.",
      ],
      primaryCta: { label: "Kostenlos loslegen", href: "/de/docs/" },
      secondaryCta: {
        label: "Gladys vs. Home Assistant →",
        href: "/de/home-assistant-vs-gladys-assistant/",
      },
    },
    whyLooking: {
      title: "Warum nach einer Alternative zu Home Assistant suchen?",
      intro:
        "Home Assistant ist unglaublich mächtig, doch diese Macht hat ihren Preis. Die häufigsten Gründe, warum Leute nach einer Alternative suchen:",
      points: [
        "Für manche Setups musst du YAML-Konfigurationsdateien bearbeiten.",
        "Die Lernkurve ist steil, und die Oberfläche kann Einsteiger schnell überfordern.",
        "Häufige Updates machen manchmal ein Setup kaputt, das vorher einwandfrei lief.",
        "Es fühlt sich oft an wie „von Entwicklern, für Entwickler“.",
        "Du willst ein aufgeräumtes, stabiles Erlebnis, das einfach funktioniert – ohne Basteln.",
      ],
      outro:
        "Nichts davon macht Home Assistant zu einem schlechten Projekt. Wenn du gerne bastelst, ist es hervorragend. Es ist schlicht eine Frage der Passung – und für alle, die einfach ein Smart Home wollen, das funktioniert, gibt es einen einfacheren Weg.",
    },
    reasons: {
      title: "Warum Gladys eine starke Home Assistant Alternative ist",
      cards: [
        {
          icon: "☀️",
          title: "Eine Oberfläche, die du nicht selbst bauen musst",
          text: "Version 5 bringt Horizon mit, ein komplett neues, Mobile-first gestaltetes Design: Milchglas-Optik, echte Tiefe und Bedienelemente in Daumengröße. Du bekommst ein Dashboard, das schon fertig aussieht – auf dem Handy genauso wie auf dem Laptop, ohne Karten zusammenzustecken und ohne etwas zu konfigurieren.",
        },
        {
          icon: "🖱️",
          title: "Niemals YAML",
          text: "Alles wird per Klick in der Oberfläche eingerichtet. Es gibt keine Konfigurationsdateien zu bearbeiten, weil es schlicht keine gibt.",
        },
        {
          icon: "🛡️",
          title: "Grundsolide Stabilität",
          text: "Updates laufen vollautomatisch und atomar ab: Gladys kann nie in einem halb kaputten Zustand zwischen zwei Versionen hängen bleiben.",
        },
        {
          icon: "🔒",
          title: "Datenschutz zuerst & selbst gehostet",
          text: "Gladys läuft bei dir zu Hause, auf deinem eigenen Rechner. Deine Daten bleiben in deinem lokalen Netzwerk – ohne Cloud-Pflicht, ohne Tracking und ohne Datenverkauf.",
        },
        {
          icon: "🔌",
          title: "Auf offenen Standards gebaut",
          text: "Zigbee, Matter und MQTT werden vollwertig unterstützt – damit funktionieren Tausende Geräte über diese offenen Protokolle.",
        },
        {
          icon: "🧩",
          title: "Externe Integrationen",
          text: "Jeder kann eine Gladys-Integration auf GitHub veröffentlichen, ohne Pull Request und ohne Review. Du installierst sie mit einem Klick aus dem Katalog in Gladys, und sie läuft in einer isolierten Sandbox, sodass sie deine Instanz nie beschädigen kann.",
        },
        {
          icon: "💬",
          title: "Ein Projekt, das zuhört",
          text: "Stell deine Frage per E-Mail, im Forum oder in den sozialen Netzwerken – der Gründer antwortet persönlich. Dein Feedback prägt die Roadmap ganz konkret.",
        },
        {
          icon: "💚",
          title: "Für immer kostenlos & Open Source",
          text: "Der Kern von Gladys ist zu 100 % kostenlos und Open Source. Das optionale Abo Gladys Plus ergänzt Fernzugriff, KI und Backups.",
        },
      ],
    },
    honesty: {
      title: "Fairerweise: Wo Home Assistant die Nase vorn hat",
      paragraphs: [
        "Ich bin der Entwickler von Gladys, also bin ich lieber transparent. Home Assistant hat nach wie vor den größeren Katalog an Integrationen. Wenn du sehr exotische oder reine Cloud-Geräte besitzt, werden sie dort vielleicht direkt unterstützt, während Gladys sie noch nicht kann. Außerdem lassen sich Automatisierungen als YAML-Blueprints teilen, und Power-User haben mehr Stellschrauben.",
        "Aber dieser Abstand schrumpft schnell, und zwar mit Absicht. Der Community-Katalog ist in gut zwei Wochen von 20 auf 67 externe Integrationen gewachsen, geschrieben von Leuten, die den Code von Gladys vorher nie geöffnet hatten. Jeder kann eine Integration paketieren und auf GitHub veröffentlichen, ohne irgendwen um Erlaubnis zu fragen, und sie taucht im Katalog jeder Gladys-Instanz auf. Du installierst sie mit einem Klick, ohne Kommandozeile und ohne YAML, und sie läuft in einer Sandbox, sodass sie dein Setup nicht aus dem Gleichgewicht bringen kann. Dazu kommen Zigbee und Matter, die offenen Standards, auf die sich die ganze Branche zubewegt: Ausgerechnet der Punkt, bei dem Home Assistant angeblich gewinnt, verändert sich am schnellsten.",
        "Und wenn die Integration, die du brauchst, noch nicht existiert, kannst du sie mit der offiziellen Vorlage selbst bauen, statt darauf zu warten. Du kannst Gladys und Home Assistant auch parallel betreiben und das eine als Backend, das andere als Oberfläche nutzen. Kurz gesagt: Wer Gladys wählt, verzichtet selten auf etwas – und seit Version 5 ist die Oberfläche ein Grund zum Wechseln statt ein Kompromiss.",
      ],
      compareLink: {
        label: "Zum ausführlichen Vergleich Gladys vs. Home Assistant →",
        href: "/de/home-assistant-vs-gladys-assistant/",
      },
    },
    others: {
      title: "Weitere Open-Source-Alternativen zu Home Assistant",
      intro:
        "Gladys ist nicht die einzige Option. Der Fairness halber hier die wichtigsten Open-Source-Alternativen zu Home Assistant:",
      cards: [
        {
          title: "openHAB",
          text: "Basiert auf Java, sehr mächtig und regelbasiert. Äußerst flexibel, aber mit einer Lernkurve ähnlich wie bei Home Assistant.",
        },
        {
          title: "Domoticz",
          text: "Schlank und läuft auf bescheidener Hardware. Ausgereift und stabil, aber die Oberfläche wirkt altbacken.",
        },
        {
          title: "Jeedom",
          text: "Ein französisches Projekt mit Plugin-basiertem Freemium-Modell. Flexibel, aber viele Plugins kosten Geld.",
        },
        {
          title: "Homey Pro",
          text: "Ein ausgefeiltes Erlebnis, setzt aber auf proprietäre, kostenpflichtige Hardware statt komplett offen und selbst gehostet zu sein.",
        },
      ],
      outro:
        "Unter diesen Optionen sticht Gladys durch seine Einfachheit und ein echtes Produkterlebnis hervor: eine aufgeräumte Oberfläche, keine Konfigurationsdateien und ein klarer Fokus auf offene Standards.",
    },
    faqTitle: "Häufig gestellte Fragen",
    cta: {
      title: "Teste die einfache Home Assistant Alternative",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Datenschutz zuerst, selbst gehostet, keine Cloud nötig.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: {
        label: "Mit Home Assistant vergleichen",
        href: "/de/home-assistant-vs-gladys-assistant/",
      },
    },
  },
};

export const alternativeFaqEn = [
  {
    question: "What is the best alternative to Home Assistant?",
    answer:
      "It depends on your profile. If you want simplicity and a clean experience without YAML, Gladys Assistant is a great choice. Other open-source alternatives include openHAB, Domoticz and Jeedom, each with its own trade-offs.",
  },
  {
    question: "Is there a Home Assistant alternative without YAML?",
    answer:
      "Yes. Gladys Assistant requires no YAML and no configuration files at all. Everything is configured by clicking in the interface, which makes it much friendlier for beginners.",
  },
  {
    question: "Is there a simpler Home Assistant alternative for beginners?",
    answer:
      "Gladys Assistant is designed for simplicity: a clean interface, no configuration files, automatic atomic updates, rich documentation with videos. It's one of the easiest open-source options to get started with.",
  },
  {
    question: "Does Gladys have as many integrations as Home Assistant?",
    answer:
      "Home Assistant still has the bigger catalog, but Gladys is no longer limited to its built-in integrations. Beyond Zigbee, Matter and MQTT, external integrations let anyone publish a Gladys integration on GitHub, with no pull request and no review, and every Gladys instance lists them in its catalog. You install one in a click, and it runs in an isolated sandbox so it can't affect the rest of your instance.",
  },
  {
    question: "Can I migrate from Home Assistant to Gladys?",
    answer:
      "You don't have to migrate everything at once. Using Zigbee2MQTT or Matter, the same devices can appear in both at the same time, so you can run them side by side. For anything Gladys doesn't cover yet, an external integration can usually fill the gap, and both platforms can also talk over MQTT or HTTP.",
  },
  {
    question: "Are there free alternatives to Home Assistant?",
    answer:
      "Yes. Gladys Assistant, openHAB and Domoticz are free and open-source. Jeedom is free but uses a freemium plugin model. Gladys is 100% free and open-source at its core, with an optional paid subscription.",
  },
  {
    question: "Is Gladys a good Home Assistant alternative for privacy?",
    answer:
      "Yes. Gladys is self-hosted and runs on your own machine, so your smart home data stays on your local network. There is no mandatory cloud, no tracking and no data selling.",
  },
];

export const alternativeFaqFr = [
  {
    question: "Quelle est la meilleure alternative à Home Assistant ?",
    answer:
      "Cela dépend de votre profil. Si vous voulez de la simplicité et une expérience propre sans YAML, Gladys Assistant est un excellent choix. Parmi les autres alternatives open source : openHAB, Domoticz et Jeedom, chacune avec ses compromis.",
  },
  {
    question: "Existe-t-il une alternative à Home Assistant sans YAML ?",
    answer:
      "Oui. Gladys Assistant ne nécessite aucun YAML ni fichier de configuration. Tout se configure au clic dans l'interface, ce qui la rend bien plus accessible aux débutants.",
  },
  {
    question: "Existe-t-il une alternative à Home Assistant plus simple pour les débutants ?",
    answer:
      "Gladys Assistant est pensée pour la simplicité : interface épurée, aucun fichier de configuration, mises à jour automatiques et atomiques, documentation riche avec vidéos, et un kit de démarrage avec tout pré-installé. C'est l'une des options open source les plus faciles pour démarrer.",
  },
  {
    question: "Gladys a-t-elle autant d'intégrations que Home Assistant ?",
    answer:
      "Home Assistant garde le catalogue le plus large, mais Gladys n'est plus limitée à ses intégrations intégrées. Au-delà de Zigbee, Matter et MQTT, les intégrations externes permettent à n'importe qui de publier une intégration Gladys sur GitHub, sans pull request ni validation, et chaque instance Gladys les liste dans son catalogue. Vous en installez une en un clic, et elle tourne dans un bac à sable isolé, sans pouvoir affecter le reste de votre instance.",
  },
  {
    question: "Puis-je migrer de Home Assistant vers Gladys ?",
    answer:
      "Vous n'êtes pas obligé de tout migrer d'un coup. Avec Zigbee2MQTT ou Matter, les mêmes appareils peuvent apparaître dans les deux en même temps : vous pouvez donc les faire tourner côte à côte. Pour ce que Gladys ne couvre pas encore, une intégration externe comble généralement le manque, et les deux plateformes peuvent aussi communiquer en MQTT ou HTTP.",
  },
  {
    question: "Existe-t-il des alternatives gratuites à Home Assistant ?",
    answer:
      "Oui. Gladys Assistant, openHAB et Domoticz sont gratuits et open source. Jeedom est gratuit mais utilise un modèle freemium à base de plugins. Le cœur de Gladys est 100 % gratuit et open source, avec un abonnement payant optionnel.",
  },
  {
    question: "Gladys est-elle une bonne alternative à Home Assistant pour la vie privée ?",
    answer:
      "Oui. Gladys est auto-hébergée et tourne sur votre propre machine : vos données domotiques restent sur votre réseau local. Pas de cloud obligatoire, pas de tracking, pas de revente de données.",
  },
];

export const alternativeFaqDe = [
  {
    question: "Was ist die beste Alternative zu Home Assistant?",
    answer:
      "Das hängt von deinem Profil ab. Wenn du Einfachheit und ein aufgeräumtes Erlebnis ohne YAML willst, ist Gladys Assistant eine sehr gute Wahl. Weitere Open-Source-Alternativen sind openHAB, Domoticz und Jeedom, jeweils mit eigenen Vor- und Nachteilen.",
  },
  {
    question: "Gibt es eine Home Assistant Alternative ohne YAML?",
    answer:
      "Ja. Gladys Assistant braucht weder YAML noch sonst irgendwelche Konfigurationsdateien. Alles wird per Klick in der Oberfläche eingerichtet, was den Einstieg deutlich einfacher macht.",
  },
  {
    question: "Gibt es eine einfachere Home Assistant Alternative für Einsteiger?",
    answer:
      "Gladys Assistant ist auf Einfachheit ausgelegt: eine aufgeräumte Oberfläche, keine Konfigurationsdateien, automatische atomare Updates und eine ausführliche Dokumentation mit Videos. Damit gehört es zu den Open-Source-Lösungen, mit denen der Einstieg am leichtesten fällt.",
  },
  {
    question: "Hat Gladys so viele Integrationen wie Home Assistant?",
    answer:
      "Home Assistant hat weiterhin den größeren Katalog, aber Gladys ist nicht mehr auf seine eingebauten Integrationen beschränkt. Neben Zigbee, Matter und MQTT kann dank externer Integrationen jeder eine Gladys-Integration auf GitHub veröffentlichen, ohne Pull Request und ohne Review, und jede Gladys-Instanz listet sie in ihrem Katalog. Du installierst sie mit einem Klick, und sie läuft in einer isolierten Sandbox, sodass sie den Rest deiner Instanz nicht beeinträchtigen kann.",
  },
  {
    question: "Kann ich von Home Assistant zu Gladys wechseln?",
    answer:
      "Du musst nicht alles auf einmal umziehen. Mit Zigbee2MQTT oder Matter können dieselben Geräte gleichzeitig in beiden Systemen erscheinen, sodass du beide parallel betreiben kannst. Für alles, was Gladys noch nicht abdeckt, schließt meist eine externe Integration die Lücke, und beide Plattformen können außerdem über MQTT oder HTTP miteinander kommunizieren.",
  },
  {
    question: "Gibt es kostenlose Alternativen zu Home Assistant?",
    answer:
      "Ja. Gladys Assistant, openHAB und Domoticz sind kostenlos und Open Source. Jeedom ist kostenlos, setzt aber auf ein Freemium-Modell bei den Plugins. Der Kern von Gladys ist zu 100 % kostenlos und Open Source, mit einem optionalen kostenpflichtigen Abo.",
  },
  {
    question: "Ist Gladys eine gute Home Assistant Alternative in Sachen Datenschutz?",
    answer:
      "Ja. Gladys wird selbst gehostet und läuft auf deinem eigenen Rechner, deine Smart-Home-Daten bleiben also in deinem lokalen Netzwerk. Es gibt keine Cloud-Pflicht, kein Tracking und keinen Datenverkauf.",
  },
];

export default alternativeContent;
