// Content for the "Alexa alternative" landing page.
// Search intent: people looking to replace or move away from Amazon Alexa,
// mostly for privacy reasons. Unlike the Home Assistant / Jeedom pages, Alexa
// isn't a competing home automation platform but a cloud voice assistant, so
// the angle is privacy + local control rather than a feature-for-feature duel.
// We stay honest: Alexa is a great voice product, and Gladys can even integrate
// with it, but for privacy and local control Gladys is a stronger foundation.

const alternativeContent = {
  en: {
    meta: {
      title: "Private, Open-Source Alexa Alternative (Self-Hosted)",
      description:
        "Replace Alexa with a private, self-hosted smart home: automations run on your own hardware, a voice assistant and AI that aren't run by Amazon, no ads, no data resale. Free and open-source.",
    },
    hero: {
      title: "Looking for a privacy-friendly Alexa alternative?",
      subtitle:
        "Meet Gladys Assistant, the local, open-source smart home platform that keeps your data at home instead of in Amazon's cloud.",
      intro: [
        "Amazon Alexa is convenient, but everything you say is processed in Amazon's cloud, tied to your account, and can be used to build a profile of you. Since March 2025, Amazon no longer even offers the option to keep voice requests on the device: they all go to its cloud. For a lot of people, that's a deal-breaker.",
        "Gladys Assistant takes the opposite approach. It's a free, open-source, self-hosted smart home platform that runs at home, on your own machine. Your devices and automations stay on your local network, with no mandatory cloud, no recordings on someone else's servers, no ads and no data resale.",
      ],
      primaryCta: { label: "Get started free", href: "/docs/" },
      secondaryCta: {
        label: "Discover Gladys' voice assistant →",
        href: "/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "Why look for an alternative to Alexa?",
      intro:
        "Alexa is a polished voice assistant, but its cloud-first, ad-driven model comes with real trade-offs. The most common reasons people start looking for an alternative:",
      points: [
        "Everything you say is sent to Amazon's cloud, and voice recordings can be stored on its servers.",
        "Your usage feeds personalization and advertising profiles across Amazon's services.",
        "It needs an Amazon account and a constant internet connection; very little works offline.",
        "Amazon can discontinue devices, change features, or update its privacy terms at any time.",
        "It's a voice front-end, not a real automation engine: genuinely local, complex automations are limited.",
      ],
      outro:
        "None of this makes Alexa a bad product, it's great at understanding voice. It's simply a question of priorities, and if privacy and local control matter to you, there's a better foundation for your smart home.",
    },
    reasons: {
      title: "Why Gladys is a great privacy-friendly Alexa alternative",
      cards: [
        {
          icon: "🔒",
          title: "Your data stays at home",
          text: "Gladys runs on your own machine, so your smart home data stays on your local network. No mandatory cloud, no recordings on Amazon's servers, no tracking.",
        },
        {
          icon: "🌐",
          title: "Works without the cloud",
          text: "Because it runs locally, your home keeps working even if your internet drops or a cloud service is shut down. Your automations don't depend on Amazon staying online.",
        },
        {
          icon: "🧠",
          title: "Real automation, not just commands",
          text: "Gladys has a full scenes engine with triggers, conditions and actions. You build a home that reacts on its own, not just one that waits for voice commands.",
        },
        {
          icon: "🎙️",
          title: "A voice assistant you control",
          text: "Gladys has its own voice assistant: talk naturally from your dashboard, a wall tablet or your phone. It runs on open-weight AI models hosted in France, not on Amazon's servers, and nothing you say is used for ads.",
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
      title: "Being fair: where Alexa has the edge",
      paragraphs: [
        "Let me be transparent. Alexa is excellent at what it does: best-in-class voice recognition, natural conversation, a huge ecosystem of skills, very cheap speakers, and multi-room audio that just works. Gladys is a home automation platform first, and its voice assistant is newer and something you set up yourself, so Alexa is hard to beat as a pure consumer voice speaker.",
        "The good news is that it doesn't have to be all or nothing. Gladys can integrate with Alexa, so you can keep voice control on your existing Echo devices while your automations run locally in Gladys. And if privacy is your priority, you can go fully local and drop the cloud assistant entirely. Either way, you stay in control.",
      ],
      compareLink: {
        label: "See how Gladys integrates with Alexa →",
        href: "/docs/integrations/alexa/",
      },
    },
    others: {
      title: "Other privacy-friendly alternatives to Alexa",
      intro:
        "Gladys isn't the only option. To be fair, here are the main alternatives if you want more privacy and local control than Alexa offers:",
      cards: [
        {
          title: "Home Assistant",
          text: "A powerful open-source platform with a local voice option (Assist). Very capable, but with a steep learning curve and some YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "More privacy-conscious than Alexa, but still tied to Apple's ecosystem and cloud, and limited to Apple hardware.",
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
      title: "Try the privacy-friendly Alexa alternative",
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
      title: "La meilleure alternative à Alexa, respectueuse de la vie privée : Gladys Assistant",
      description:
        "Vous cherchez une alternative à Alexa respectueuse de la vie privée ? Gladys Assistant est une plateforme domotique locale, open source et auto-hébergée : vos données restent chez vous, sans enregistrements dans le cloud, sans publicité, sans revente. Gratuite et auto-hébergée.",
    },
    hero: {
      title: "Vous cherchez une alternative à Alexa respectueuse de votre vie privée ?",
      subtitle:
        "Découvrez Gladys Assistant, la plateforme domotique locale et open source qui garde vos données chez vous plutôt que dans le cloud d'Amazon.",
      intro: [
        "Amazon Alexa est pratique, mais tout ce que vous dites est traité dans le cloud d'Amazon, lié à votre compte, et peut servir à dresser un profil de vous. Pour beaucoup de gens, c'est rédhibitoire.",
        "Gladys Assistant prend le parti inverse. C'est une plateforme domotique gratuite, open source et auto-hébergée, qui tourne chez vous, sur votre propre machine. Vos appareils et vos automatisations restent sur votre réseau local, sans cloud obligatoire, sans enregistrements sur les serveurs de quelqu'un d'autre, sans publicité et sans revente de données.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: "/docs/" },
      secondaryCta: {
        label: "Découvrir l'assistant vocal de Gladys →",
        href: "/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "Pourquoi chercher une alternative à Alexa ?",
      intro:
        "Alexa est un assistant vocal abouti, mais son modèle centré sur le cloud et la publicité a un vrai prix. Les raisons les plus fréquentes qui poussent à chercher une alternative :",
      points: [
        "Tout ce que vous dites est envoyé dans le cloud d'Amazon, et les enregistrements vocaux peuvent être stockés sur ses serveurs.",
        "Votre usage alimente des profils de personnalisation et de publicité à travers les services d'Amazon.",
        "Il faut un compte Amazon et une connexion internet permanente ; très peu de choses fonctionnent hors ligne.",
        "Amazon peut arrêter des appareils, modifier des fonctions ou changer ses conditions de confidentialité à tout moment.",
        "C'est une interface vocale, pas un vrai moteur d'automatisation : les automatisations locales complexes restent limitées.",
      ],
      outro:
        "Rien de tout cela ne fait d'Alexa un mauvais produit : il est excellent pour comprendre la voix. C'est simplement une question de priorités, et si la vie privée et le contrôle local comptent pour vous, il existe une meilleure base pour votre maison connectée.",
    },
    reasons: {
      title: "Pourquoi Gladys est une excellente alternative à Alexa respectueuse de la vie privée",
      cards: [
        {
          icon: "🔒",
          title: "Vos données restent chez vous",
          text: "Gladys tourne sur votre propre machine : vos données domotiques restent sur votre réseau local. Pas de cloud obligatoire, pas d'enregistrements sur les serveurs d'Amazon, pas de tracking.",
        },
        {
          icon: "🌐",
          title: "Fonctionne sans le cloud",
          text: "Comme elle tourne en local, votre maison continue de fonctionner même si votre internet tombe ou si un service cloud ferme. Vos automatisations ne dépendent pas du bon vouloir d'Amazon.",
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
      title: "En toute honnêteté : là où Alexa garde l'avantage",
      paragraphs: [
        "Soyons transparents. Alexa est excellent dans son domaine : une reconnaissance vocale de premier ordre, une conversation naturelle, un immense écosystème de skills, des enceintes très bon marché et un audio multi-pièces qui fonctionne tout seul. Gladys est avant tout une plateforme domotique, et son assistant vocal est plus récent et se configure soi-même : Alexa reste donc difficile à battre comme pure enceinte vocale grand public.",
        "La bonne nouvelle, c'est que ce n'est pas tout ou rien. Gladys peut s'intégrer avec Alexa : vous gardez le contrôle vocal sur vos enceintes Echo existantes pendant que vos automatisations tournent en local dans Gladys. Et si la vie privée est votre priorité, vous pouvez passer en 100 % local et abandonner complètement l'assistant cloud. Dans tous les cas, vous gardez la main.",
      ],
      compareLink: {
        label: "Voir comment Gladys s'intègre avec Alexa →",
        href: "/docs/integrations/alexa/",
      },
    },
    others: {
      title: "Les autres alternatives à Alexa respectueuses de la vie privée",
      intro:
        "Gladys n'est pas la seule option. Pour être juste, voici les principales alternatives si vous voulez plus de vie privée et de contrôle local qu'avec Alexa :",
      cards: [
        {
          title: "Home Assistant",
          text: "Une plateforme open source puissante, avec une option vocale locale (Assist). Très capable, mais avec une courbe d'apprentissage raide et un peu de YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "Plus soucieux de la vie privée qu'Alexa, mais toujours lié à l'écosystème et au cloud d'Apple, et limité au matériel Apple.",
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
      title: "Essayez l'alternative à Alexa respectueuse de la vie privée",
      text: "Gladys est gratuite, open source, et s'installe en une seule commande Docker. Locale d'abord, auto-hébergée, sans cloud obligatoire, sans enregistrements sur les serveurs de quelqu'un d'autre.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Découvrir Gladys Plus",
        href: "/plus/",
      },
    },
  },
  de: {
    meta: {
      title: "Alexa Alternative: privat, Open Source & lokal",
      description:
        "Ersetze Alexa durch ein privates, selbst gehostetes Smart Home: Automationen auf deiner Hardware, Sprachassistent ohne Amazon, keine Werbung. Kostenlos.",
    },
    hero: {
      title: "Du suchst eine Alexa Alternative mit Datenschutz?",
      subtitle:
        "Lerne Gladys Assistant kennen: die lokale Open-Source-Plattform für dein Smart Home, die deine Daten zu Hause behält statt in Amazons Cloud.",
      intro: [
        "Amazon Alexa ist bequem, aber alles, was du sagst, wird in Amazons Cloud verarbeitet, mit deinem Konto verknüpft und kann genutzt werden, um ein Profil von dir zu erstellen. Seit März 2025 bietet Amazon nicht einmal mehr die Option an, Sprachanfragen auf dem Gerät zu behalten: Alles geht in die Cloud. Für viele ist das ein K.-o.-Kriterium.",
        "Gladys Assistant geht den umgekehrten Weg. Es ist eine kostenlose, quelloffene und selbst gehostete Smart-Home-Plattform, die bei dir zu Hause auf deinem eigenen Rechner läuft. Deine Geräte und Automationen bleiben in deinem lokalen Netzwerk – ohne Cloud-Pflicht, ohne Aufnahmen auf fremden Servern, ohne Werbung und ohne Datenverkauf.",
      ],
      primaryCta: { label: "Kostenlos loslegen", href: "/de/docs/" },
      secondaryCta: {
        label: "Den Sprachassistenten von Gladys entdecken →",
        href: "/de/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "Warum nach einer Alternative zu Alexa suchen?",
      intro:
        "Alexa ist ein ausgereifter Sprachassistent, aber das Cloud-first- und Werbemodell dahinter hat echte Nachteile. Die häufigsten Gründe, warum Leute nach einer Alternative suchen:",
      points: [
        "Alles, was du sagst, wird an Amazons Cloud geschickt, und Sprachaufnahmen können auf deren Servern gespeichert werden.",
        "Deine Nutzung fließt in Personalisierungs- und Werbeprofile über alle Amazon-Dienste hinweg.",
        "Du brauchst ein Amazon-Konto und eine ständige Internetverbindung; offline funktioniert kaum etwas.",
        "Amazon kann jederzeit Geräte einstellen, Funktionen ändern oder seine Datenschutzbestimmungen anpassen.",
        "Alexa ist eine Sprachsteuerung, keine echte Automatisierungs-Engine: Wirklich lokale, komplexe Automationen sind begrenzt.",
      ],
      outro:
        "Nichts davon macht Alexa zu einem schlechten Produkt – Sprache versteht es hervorragend. Es ist schlicht eine Frage der Prioritäten: Wenn dir Datenschutz und lokale Kontrolle wichtig sind, gibt es ein besseres Fundament für dein Smart Home.",
    },
    reasons: {
      title: "Warum Gladys eine starke Alexa Alternative mit Datenschutz ist",
      cards: [
        {
          icon: "🔒",
          title: "Deine Daten bleiben zu Hause",
          text: "Gladys läuft auf deinem eigenen Rechner, deine Smart-Home-Daten bleiben also in deinem lokalen Netzwerk. Keine Cloud-Pflicht, keine Aufnahmen auf Amazons Servern, kein Tracking.",
        },
        {
          icon: "🌐",
          title: "Funktioniert ohne Cloud",
          text: "Weil Gladys lokal läuft, funktioniert dein Zuhause weiter, auch wenn das Internet ausfällt oder ein Cloud-Dienst abgeschaltet wird. Deine Automationen hängen nicht davon ab, dass Amazon online bleibt.",
        },
        {
          icon: "🧠",
          title: "Echte Automation, nicht nur Befehle",
          text: "Gladys hat eine vollwertige Szenen-Engine mit Auslösern, Bedingungen und Aktionen. So baust du ein Zuhause, das von selbst reagiert, statt nur auf Sprachbefehle zu warten.",
        },
        {
          icon: "🎙️",
          title: "Ein Sprachassistent unter deiner Kontrolle",
          text: "Gladys hat einen eigenen Sprachassistenten: Sprich ganz natürlich über dein Dashboard, ein Wandtablet oder dein Handy. Er läuft mit Open-Weight-KI-Modellen, die in Frankreich gehostet werden, nicht auf Amazons Servern, und nichts, was du sagst, wird für Werbung genutzt.",
        },
        {
          icon: "🔌",
          title: "Auf offenen Standards gebaut",
          text: "Zigbee, Matter und MQTT werden vollwertig unterstützt – du bist also nie im Ökosystem einer einzelnen Marke gefangen oder gezwungen, „kompatibles“ Zubehör zu kaufen.",
        },
        {
          icon: "💚",
          title: "Open Source, keine Werbung, kein Datenverkauf",
          text: "Der Kern von Gladys ist zu 100 % kostenlos und Open Source. Es gibt keine Werbung und keinen Datenverkauf; das optionale Abo Gladys Plus finanziert das Projekt transparent.",
        },
      ],
    },
    honesty: {
      title: "Fairerweise: Wo Alexa die Nase vorn hat",
      paragraphs: [
        "Ich will ehrlich sein: Alexa ist richtig gut in dem, was es tut. Erstklassige Spracherkennung, natürliche Gespräche, ein riesiges Ökosystem an Skills, sehr günstige Lautsprecher und Multiroom-Audio, das einfach funktioniert. Gladys ist in erster Linie eine Plattform für Hausautomation, und sein Sprachassistent ist neuer und wird von dir selbst eingerichtet. Als reiner Sprachlautsprecher für Endkunden ist Alexa daher schwer zu schlagen.",
        "Die gute Nachricht: Es muss nicht alles oder nichts sein. Gladys lässt sich mit Alexa verbinden, du kannst also die Sprachsteuerung auf deinen vorhandenen Echo-Geräten behalten, während deine Automationen lokal in Gladys laufen. Und wenn dir Datenschutz am wichtigsten ist, kannst du komplett lokal werden und den Cloud-Assistenten ganz weglassen. So oder so behältst du die Kontrolle.",
      ],
      compareLink: {
        label: "So verbindest du Gladys mit Alexa →",
        href: "/de/docs/integrations/alexa/",
      },
    },
    others: {
      title: "Weitere datenschutzfreundliche Alternativen zu Alexa",
      intro:
        "Gladys ist nicht die einzige Option. Der Fairness halber hier die wichtigsten Alternativen, wenn du mehr Datenschutz und lokale Kontrolle willst, als Alexa bietet:",
      cards: [
        {
          title: "Home Assistant",
          text: "Eine leistungsstarke Open-Source-Plattform mit lokaler Sprachoption (Assist). Sehr fähig, aber mit steiler Lernkurve und etwas YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "Datenschutzbewusster als Alexa, aber weiterhin an Apples Ökosystem und Cloud gebunden und auf Apple-Hardware beschränkt.",
        },
        {
          title: "OpenVoiceOS / Mycroft",
          text: "Open-Source-Sprachassistenten mit Fokus auf Datenschutz. Vielversprechend, aber eher ein Bastelprojekt als ein ausgereiftes Endkundenprodukt.",
        },
        {
          title: "Rhasspy",
          text: "Ein komplett offline arbeitendes Sprach-Toolkit, das sich mit anderen Plattformen kombinieren lässt. Sehr privat, aber technisch in Einrichtung und Wartung.",
        },
      ],
      outro:
        "Unter diesen Optionen sticht Gladys hervor, weil es eine aufgeräumte, moderne Oberfläche, eine echte lokale Automatisierungs-Engine und offene Standards vereint – ohne steile Lernkurve.",
    },
    faqTitle: "Häufig gestellte Fragen",
    cta: {
      title: "Teste die Alexa Alternative mit Datenschutz",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Lokal, selbst gehostet, keine Cloud nötig und keine Aufnahmen auf fremden Servern.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: {
        label: "Gladys Plus entdecken",
        href: "/de/plus/",
      },
    },
  },
};

export const alternativeFaqEn = [
  {
    question: "Is there a privacy-friendly alternative to Alexa?",
    answer:
      "Yes. Gladys Assistant is a local, open-source, self-hosted smart home platform that runs on your own machine, so your data stays on your local network instead of in Amazon's cloud. There are no recordings on someone else's servers, no ads and no data resale.",
  },
  {
    question: "Does Alexa record everything you say?",
    answer:
      "Alexa processes your voice requests in Amazon's cloud, and voice recordings can be stored on its servers and used to personalize services. Gladys takes the opposite approach: it runs locally, so your smart home data stays at home.",
  },
  {
    question: "Can I replace Alexa with a local, self-hosted system?",
    answer:
      "Yes. Gladys Assistant is fully self-hosted and runs at home, with a real automation engine, so your scenes keep running locally. It also has its own voice assistant (with Gladys Plus), so you can move away from Amazon while keeping hands-free control.",
  },
  {
    question: "Does Gladys work without the cloud or internet?",
    answer:
      "Yes. Gladys' core runs entirely on your local network, so your home keeps working even if your internet drops or a cloud service is shut down. An optional Gladys Plus subscription adds remote access and AI, but the self-hosted core stays local.",
  },
  {
    question: "Does Gladys have a voice assistant like Alexa?",
    answer:
      "Yes. Gladys has a voice assistant widget for your dashboard, wall tablet or phone: you speak naturally, and it controls devices, reads sensors, runs scenes and answers questions. It is part of Gladys Plus and runs on open-weight AI models hosted in France (Scaleway), not on Amazon's or Google's servers, with no ads and no data resale. It's newer than Alexa, and there's no dedicated speaker yet.",
  },
  {
    question: "Does Alexa still process voice requests locally?",
    answer:
      'No. In March 2025, Amazon removed the "Do Not Send Voice Recordings" setting from the few Echo devices that supported it, so every Alexa voice request is now sent to Amazon\'s cloud. With Gladys, your devices and automations run on your own hardware, at home.',
  },
  {
    question: "Is there an open-source, self-hosted Alexa alternative?",
    answer:
      "Yes. Gladys Assistant is free, open-source (Apache 2.0) and self-hosted: it runs on a mini-PC, a Raspberry Pi or a NAS at home, and works with Zigbee, Matter, Philips Hue, SmartThings, Sonos and many other devices. Other open-source options include Home Assistant (Assist), OpenVoiceOS and Rhasspy.",
  },
  {
    question: "Can I keep using Alexa with Gladys?",
    answer:
      "Yes. Gladys can integrate with Alexa, so you can keep voice control on your Echo devices while your automations run locally in Gladys. If privacy is your priority, you can also go fully local and drop the cloud assistant entirely.",
  },
];

export const alternativeFaqFr = [
  {
    question: "Existe-t-il une alternative à Alexa respectueuse de la vie privée ?",
    answer:
      "Oui. Gladys Assistant est une plateforme domotique locale, open source et auto-hébergée, qui tourne sur votre propre machine : vos données restent sur votre réseau local plutôt que dans le cloud d'Amazon. Pas d'enregistrements sur les serveurs de quelqu'un d'autre, pas de publicité, pas de revente de données.",
  },
  {
    question: "Alexa enregistre-t-il tout ce que vous dites ?",
    answer:
      "Alexa traite vos requêtes vocales dans le cloud d'Amazon, et les enregistrements vocaux peuvent être stockés sur ses serveurs et utilisés pour personnaliser les services. Gladys prend le parti inverse : elle tourne en local, donc vos données domotiques restent chez vous.",
  },
  {
    question: "Puis-je remplacer Alexa par un système local et auto-hébergé ?",
    answer:
      "Oui. Gladys Assistant est entièrement auto-hébergée et tourne chez vous. Elle dispose de son propre assistant vocal et d'un vrai moteur d'automatisation : vous pouvez quitter un assistant cloud tout en gardant le contrôle mains libres et des automatisations locales puissantes.",
  },
  {
    question: "Gladys fonctionne-t-elle sans cloud ni internet ?",
    answer:
      "Oui. Le cœur de Gladys tourne entièrement sur votre réseau local : votre maison continue de fonctionner même si votre internet tombe ou si un service cloud ferme. L'abonnement optionnel Gladys Plus ajoute l'accès distant et l'IA, mais le cœur auto-hébergé reste local.",
  },
  {
    question: "Gladys a-t-elle un assistant vocal comme Alexa ?",
    answer:
      "Oui, Gladys a son propre assistant vocal pour le contrôle mains libres. Il est plus récent qu'Alexa et se configure soi-même, mais il vous permet de garder le contrôle vocal sans envoyer chaque phrase prononcée à un géant de la tech.",
  },
  {
    question: "Puis-je continuer à utiliser Alexa avec Gladys ?",
    answer:
      "Oui. Gladys peut s'intégrer avec Alexa : vous gardez le contrôle vocal sur vos enceintes Echo pendant que vos automatisations tournent en local dans Gladys. Et si la vie privée est votre priorité, vous pouvez aussi passer en 100 % local et abandonner complètement l'assistant cloud.",
  },
];

export const alternativeFaqDe = [
  {
    question: "Gibt es eine datenschutzfreundliche Alternative zu Alexa?",
    answer:
      "Ja. Gladys Assistant ist eine lokale, quelloffene und selbst gehostete Smart-Home-Plattform, die auf deinem eigenen Rechner läuft. Deine Daten bleiben in deinem lokalen Netzwerk statt in Amazons Cloud. Keine Aufnahmen auf fremden Servern, keine Werbung und kein Datenverkauf.",
  },
  {
    question: "Nimmt Alexa alles auf, was du sagst?",
    answer:
      "Alexa verarbeitet deine Sprachanfragen in Amazons Cloud, und Sprachaufnahmen können auf deren Servern gespeichert und zur Personalisierung von Diensten genutzt werden. Gladys geht den umgekehrten Weg: Es läuft lokal, deine Smart-Home-Daten bleiben also zu Hause.",
  },
  {
    question: "Kann ich Alexa durch ein lokales, selbst gehostetes System ersetzen?",
    answer:
      "Ja. Gladys Assistant ist komplett selbst gehostet, läuft bei dir zu Hause und hat eine echte Automatisierungs-Engine, sodass deine Szenen lokal weiterlaufen. Außerdem hat es einen eigenen Sprachassistenten (mit Gladys Plus): So kannst du dich von Amazon lösen und trotzdem freihändig steuern.",
  },
  {
    question: "Funktioniert Gladys ohne Cloud oder Internet?",
    answer:
      "Ja. Der Kern von Gladys läuft vollständig in deinem lokalen Netzwerk, dein Zuhause funktioniert also weiter, auch wenn das Internet ausfällt oder ein Cloud-Dienst abgeschaltet wird. Das optionale Abo Gladys Plus ergänzt Fernzugriff und KI, aber der selbst gehostete Kern bleibt lokal.",
  },
  {
    question: "Hat Gladys einen Sprachassistenten wie Alexa?",
    answer:
      "Ja. Gladys hat ein Sprachassistenten-Widget für dein Dashboard, dein Wandtablet oder dein Handy: Du sprichst ganz natürlich, und es steuert Geräte, liest Sensoren aus, startet Szenen und beantwortet Fragen. Es ist Teil von Gladys Plus und läuft mit Open-Weight-KI-Modellen, die in Frankreich (Scaleway) gehostet werden, nicht auf den Servern von Amazon oder Google, ohne Werbung und ohne Datenverkauf. Es ist neuer als Alexa, und einen eigenen Lautsprecher gibt es noch nicht.",
  },
  {
    question: "Verarbeitet Alexa Sprachanfragen noch lokal?",
    answer:
      "Nein. Im März 2025 hat Amazon die Einstellung „Keine Sprachaufnahmen senden“ von den wenigen Echo-Geräten entfernt, die sie unterstützten. Seitdem wird jede Alexa-Sprachanfrage an Amazons Cloud geschickt. Mit Gladys laufen deine Geräte und Automationen auf deiner eigenen Hardware, bei dir zu Hause.",
  },
  {
    question: "Gibt es eine selbst gehostete Open-Source-Alternative zu Alexa?",
    answer:
      "Ja. Gladys Assistant ist kostenlos, Open Source (Apache 2.0) und selbst gehostet: Es läuft auf einem Mini-PC, einem Raspberry Pi oder einem NAS bei dir zu Hause und funktioniert mit Zigbee, Matter, Philips Hue, SmartThings, Sonos und vielen weiteren Geräten. Weitere Open-Source-Optionen sind Home Assistant (Assist), OpenVoiceOS und Rhasspy.",
  },
  {
    question: "Kann ich Alexa zusammen mit Gladys weiter nutzen?",
    answer:
      "Ja. Gladys lässt sich mit Alexa verbinden, du kannst also die Sprachsteuerung auf deinen Echo-Geräten behalten, während deine Automationen lokal in Gladys laufen. Wenn dir Datenschutz am wichtigsten ist, kannst du auch komplett lokal werden und den Cloud-Assistenten ganz weglassen.",
  },
];

export default alternativeContent;
