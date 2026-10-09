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
      title: "Private, Open-Source Google Home Alternative",
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
  de: {
    meta: {
      title: "Google Home Alternative: privat & Open Source",
      description:
        "Google Home Alternative mit Datenschutz: Gladys Assistant ist lokal, Open Source und selbst gehostet. Deine Daten bleiben zu Hause, keine Werbung. Kostenlos.",
    },
    hero: {
      title: "Du suchst eine Google Home Alternative mit Datenschutz?",
      subtitle:
        "Lerne Gladys Assistant kennen: die lokale Open-Source-Plattform für dein Smart Home, die deine Daten zu Hause behält statt in Googles Cloud.",
      intro: [
        "Google Home ist bequem, aber alles, was du sagst, wird in Googles Cloud verarbeitet, mit deinem Google-Konto verknüpft und füttert dieselbe Werbemaschine, die den Rest des Konzerns antreibt. Für viele ist das ein K.-o.-Kriterium.",
        "Gladys Assistant geht den umgekehrten Weg. Es ist eine kostenlose, quelloffene und selbst gehostete Smart-Home-Plattform, die bei dir zu Hause auf deinem eigenen Rechner läuft. Deine Geräte und Automationen bleiben in deinem lokalen Netzwerk – ohne Cloud-Pflicht, ohne Aufnahmen auf fremden Servern, ohne Werbung und ohne Datenverkauf.",
      ],
      primaryCta: { label: "Kostenlos loslegen", href: "/de/docs/" },
      secondaryCta: {
        label: "Den Sprachassistenten von Gladys entdecken →",
        href: "/de/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "Warum nach einer Alternative zu Google Home suchen?",
      intro:
        "Google Home ist ein ausgereifter Sprachassistent, aber das Cloud-first- und Werbemodell dahinter hat echte Nachteile. Die häufigsten Gründe, warum Leute nach einer Alternative suchen:",
      points: [
        "Alles, was du sagst, wird an Googles Cloud geschickt, und Sprachaufnahmen können gespeichert und ausgewertet werden.",
        "Deine Nutzung ist mit deinem Google-Konto und dem Werbeprofil dahinter verknüpft.",
        "Du brauchst ein Google-Konto und eine ständige Internetverbindung; offline funktioniert kaum etwas.",
        "Google hat eine lange Geschichte eingestellter Produkte und baut seinen Assistenten immer wieder um (aktuell der Umstieg auf Gemini).",
        "Google Home ist eine Sprachsteuerung, keine echte Automatisierungs-Engine: Wirklich lokale, komplexe Automationen sind begrenzt.",
      ],
      outro:
        "Nichts davon macht Google Home zu einem schlechten Produkt – Sprache versteht es hervorragend. Es ist schlicht eine Frage der Prioritäten: Wenn dir Datenschutz und lokale Kontrolle wichtig sind, gibt es ein besseres Fundament für dein Smart Home.",
    },
    reasons: {
      title: "Warum Gladys eine starke Google Home Alternative mit Datenschutz ist",
      cards: [
        {
          icon: "🔒",
          title: "Deine Daten bleiben zu Hause",
          text: "Gladys läuft auf deinem eigenen Rechner, deine Smart-Home-Daten bleiben also in deinem lokalen Netzwerk. Keine Cloud-Pflicht, keine Aufnahmen auf Googles Servern, kein Tracking.",
        },
        {
          icon: "🌐",
          title: "Funktioniert ohne Cloud",
          text: "Weil Gladys lokal läuft, funktioniert dein Zuhause weiter, auch wenn das Internet ausfällt oder ein Cloud-Dienst abgeschaltet wird. Deine Automationen hängen nicht davon ab, dass Google online bleibt.",
        },
        {
          icon: "🧠",
          title: "Echte Automation, nicht nur Befehle",
          text: "Gladys hat eine vollwertige Szenen-Engine mit Auslösern, Bedingungen und Aktionen. So baust du ein Zuhause, das von selbst reagiert, statt nur auf Sprachbefehle zu warten.",
        },
        {
          icon: "🎙️",
          title: "Ein Sprachassistent unter deiner Kontrolle",
          text: "Gladys hat einen eigenen Sprachassistenten: Du steuerst weiter freihändig, ohne jeden Satz, den du sagst, einem Tech-Konzern zu überlassen.",
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
      title: "Fairerweise: Wo Google Home die Nase vorn hat",
      paragraphs: [
        "Ich will ehrlich sein: Google Home ist richtig gut in dem, was es tut. Erstklassige Spracherkennung, natürliche Gespräche, fundierte Antworten aus der Google-Suche, sehr günstige Lautsprecher und Multiroom-Audio, das einfach funktioniert. Gladys ist in erster Linie eine Plattform für Hausautomation, und sein Sprachassistent ist neuer und wird von dir selbst eingerichtet. Als reiner Sprachlautsprecher für Endkunden ist Google Home daher schwer zu schlagen.",
        "Die gute Nachricht: Es muss nicht alles oder nichts sein. Gladys lässt sich mit Google Home verbinden, du kannst also die Sprachsteuerung auf deinen vorhandenen Nest-Lautsprechern behalten, während deine Automationen lokal in Gladys laufen. Und wenn dir Datenschutz am wichtigsten ist, kannst du komplett lokal werden und den Cloud-Assistenten ganz weglassen. So oder so behältst du die Kontrolle.",
      ],
      compareLink: {
        label: "So verbindest du Gladys mit Google Home →",
        href: "/de/docs/integrations/google-home/",
      },
    },
    others: {
      title: "Weitere datenschutzfreundliche Alternativen zu Google Home",
      intro:
        "Gladys ist nicht die einzige Option. Der Fairness halber hier die wichtigsten Alternativen, wenn du mehr Datenschutz und lokale Kontrolle willst, als Google Home bietet:",
      cards: [
        {
          title: "Home Assistant",
          text: "Eine leistungsstarke Open-Source-Plattform mit lokaler Sprachoption (Assist). Sehr fähig, aber mit steiler Lernkurve und etwas YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "Datenschutzbewusster als Google Home, aber weiterhin an Apples Ökosystem und Cloud gebunden und auf Apple-Hardware beschränkt.",
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
      title: "Teste die Google Home Alternative mit Datenschutz",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Lokal, selbst gehostet, keine Cloud nötig und keine Aufnahmen auf fremden Servern.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: {
        label: "Gladys Plus entdecken",
        href: "/de/plus/",
      },
    },
  },
  es: {
    meta: {
      title: "Alternativa a Google Home privada y de código abierto",
      description:
        "¿Buscas una alternativa a Google Home que respete tu privacidad? Gladys Assistant es una plataforma domótica local, de código abierto y autoalojada: tus datos se quedan en casa, sin grabaciones en la nube, sin publicidad y sin reventa de datos. Gratuita y autoalojada.",
    },
    hero: {
      title: "¿Buscas una alternativa a Google Home que respete tu privacidad?",
      subtitle:
        "Te presentamos Gladys Assistant, la plataforma domótica local y de código abierto que guarda tus datos en casa en lugar de en la nube de Google.",
      intro: [
        "Google Home es práctico, pero todo lo que dices se procesa en la nube de Google, se vincula a tu cuenta de Google y alimenta la misma maquinaria publicitaria que impulsa al resto de la empresa. Para mucha gente, eso es motivo suficiente para descartarlo.",
        "Gladys Assistant adopta el enfoque contrario. Es una plataforma domótica gratuita, de código abierto y autoalojada que funciona en casa, en tu propio equipo. Tus dispositivos y automatizaciones se quedan en tu red local, sin nube obligatoria, sin grabaciones en servidores ajenos, sin publicidad y sin reventa de datos.",
      ],
      primaryCta: { label: "Empezar gratis", href: "/es/docs/" },
      secondaryCta: {
        label: "Descubre el asistente de voz de Gladys →",
        href: "/es/docs/dashboard/voice-assistant/",
      },
    },
    whyLooking: {
      title: "¿Por qué buscar una alternativa a Google Home?",
      intro:
        "Google Home es un asistente de voz muy pulido, pero su modelo centrado en la nube y financiado por la publicidad tiene contrapartidas reales. Estos son los motivos más habituales por los que la gente empieza a buscar una alternativa:",
      points: [
        "Todo lo que dices se envía a la nube de Google, y las grabaciones de voz pueden almacenarse y revisarse.",
        "Tu uso queda vinculado a tu cuenta de Google y al perfil publicitario que hay detrás.",
        "Necesita una cuenta de Google y una conexión a internet permanente; muy pocas cosas funcionan sin conexión.",
        "Google tiene un largo historial de productos abandonados y de cambios en su asistente (que ahora pasa a Gemini).",
        "Es una interfaz de voz, no un verdadero motor de automatización: las automatizaciones complejas y realmente locales son limitadas.",
      ],
      outro:
        "Nada de esto convierte a Google Home en un mal producto: entiende la voz de maravilla. Es simplemente una cuestión de prioridades, y si la privacidad y el control local te importan, hay una base mejor para tu hogar inteligente.",
    },
    reasons: {
      title: "Por qué Gladys es una gran alternativa a Google Home que respeta tu privacidad",
      cards: [
        {
          icon: "🔒",
          title: "Tus datos se quedan en casa",
          text: "Gladys funciona en tu propio equipo, así que los datos de tu hogar inteligente se quedan en tu red local. Sin nube obligatoria, sin grabaciones en los servidores de Google, sin rastreo.",
        },
        {
          icon: "🌐",
          title: "Funciona sin la nube",
          text: "Como funciona en local, tu casa sigue funcionando aunque se caiga internet o se cierre un servicio en la nube. Tus automatizaciones no dependen de que Google siga en línea.",
        },
        {
          icon: "🧠",
          title: "Automatización de verdad, no solo órdenes",
          text: "Gladys tiene un motor de escenas completo con disparadores, condiciones y acciones. Construyes una casa que reacciona por sí sola, y no una que solo espera órdenes de voz.",
        },
        {
          icon: "🎙️",
          title: "Un asistente de voz que controlas tú",
          text: "Gladys tiene su propio asistente de voz, así que mantienes el control manos libres sin entregar cada frase que dices a una gran empresa tecnológica.",
        },
        {
          icon: "🔌",
          title: "Basado en estándares abiertos",
          text: "Zigbee, Matter y MQTT son ciudadanos de primera, así que nunca quedas atrapado en el ecosistema de una sola marca ni obligado a comprar accesorios compatibles.",
        },
        {
          icon: "💚",
          title: "Código abierto, sin publicidad, sin reventa",
          text: "El núcleo de Gladys es 100 % gratuito y de código abierto. No hay publicidad ni reventa de datos, y una suscripción opcional a Gladys Plus financia el proyecto de forma transparente.",
        },
      ],
    },
    honesty: {
      title: "Seamos justos: en qué gana Google Home",
      paragraphs: [
        "Voy a ser transparente. Google Home es excelente en lo que hace: un reconocimiento de voz de primer nivel, conversaciones naturales, respuestas completas gracias a la Búsqueda de Google, altavoces muy baratos y un audio multihabitación que simplemente funciona. Gladys es ante todo una plataforma domótica, y su asistente de voz es más reciente y lo configuras tú mismo, así que como altavoz de voz para el gran público, Google Home es difícil de superar.",
        "La buena noticia es que no tiene por qué ser todo o nada. Gladys puede integrarse con Google Home, así que puedes mantener el control por voz en tus altavoces Nest mientras tus automatizaciones se ejecutan en local en Gladys. Y si tu prioridad es la privacidad, puedes pasarte a lo totalmente local y prescindir por completo del asistente en la nube. En cualquier caso, mantienes el control.",
      ],
      compareLink: {
        label: "Mira cómo se integra Gladys con Google Home →",
        href: "/es/docs/integrations/google-home/",
      },
    },
    others: {
      title: "Otras alternativas a Google Home que respetan tu privacidad",
      intro:
        "Gladys no es la única opción. Para ser justos, estas son las principales alternativas si quieres más privacidad y control local del que ofrece Google Home:",
      cards: [
        {
          title: "Home Assistant",
          text: "Una plataforma de código abierto potente con una opción de voz local (Assist). Muy capaz, pero con una curva de aprendizaje pronunciada y algo de YAML.",
        },
        {
          title: "Apple HomeKit / Siri",
          text: "Más respetuoso con la privacidad que Google Home, pero sigue atado al ecosistema y a la nube de Apple, y limitado al hardware de Apple.",
        },
        {
          title: "OpenVoiceOS / Mycroft",
          text: "Asistentes de voz de código abierto centrados en la privacidad. Prometedores, pero más un proyecto para aficionados al cacharreo que un producto de consumo pulido.",
        },
        {
          title: "Rhasspy",
          text: "Un kit de herramientas de voz totalmente offline que se combina con otras plataformas. Muy privado, pero técnico de instalar y de mantener.",
        },
      ],
      outro:
        "Entre todas ellas, Gladys destaca por combinar una interfaz limpia y moderna, un verdadero motor de automatización local y estándares abiertos, sin una curva de aprendizaje empinada.",
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Prueba la alternativa a Google Home que respeta tu privacidad",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Local ante todo, autoalojado, sin necesidad de nube y sin grabaciones en servidores ajenos.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: {
        label: "Descubrir Gladys Plus",
        href: "/es/plus/",
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

export const alternativeFaqDe = [
  {
    question: "Gibt es eine datenschutzfreundliche Alternative zu Google Home?",
    answer:
      "Ja. Gladys Assistant ist eine lokale, quelloffene und selbst gehostete Smart-Home-Plattform, die auf deinem eigenen Rechner läuft. Deine Daten bleiben in deinem lokalen Netzwerk statt in Googles Cloud. Keine Aufnahmen auf fremden Servern, keine Werbung und kein Datenverkauf.",
  },
  {
    question: "Nimmt Google Home alles auf, was du sagst?",
    answer:
      "Google Home verarbeitet deine Sprachanfragen in Googles Cloud, und Sprachaufnahmen können gespeichert und ausgewertet werden, um die Dienste zu verbessern. Gladys geht den umgekehrten Weg: Es läuft lokal, deine Smart-Home-Daten bleiben also zu Hause.",
  },
  {
    question: "Kann ich Google Home durch ein lokales, selbst gehostetes System ersetzen?",
    answer:
      "Ja. Gladys Assistant ist komplett selbst gehostet und läuft bei dir zu Hause. Es hat einen eigenen Sprachassistenten und eine echte Automatisierungs-Engine: So kannst du dich von einem Cloud-Assistenten lösen und behältst trotzdem freihändige Steuerung und leistungsstarke lokale Automationen.",
  },
  {
    question: "Funktioniert Gladys ohne Cloud oder Internet?",
    answer:
      "Ja. Der Kern von Gladys läuft vollständig in deinem lokalen Netzwerk, dein Zuhause funktioniert also weiter, auch wenn das Internet ausfällt oder ein Cloud-Dienst abgeschaltet wird. Das optionale Abo Gladys Plus ergänzt Fernzugriff und KI, aber der selbst gehostete Kern bleibt lokal.",
  },
  {
    question: "Hat Gladys einen Sprachassistenten wie Google Home?",
    answer:
      "Ja, Gladys hat einen eigenen Sprachassistenten für die freihändige Steuerung. Er ist neuer als der Google Assistant und wird von dir selbst eingerichtet, aber du behältst die Sprachsteuerung, ohne jeden Satz, den du sagst, an einen Tech-Konzern zu schicken.",
  },
  {
    question: "Kann ich Google Home zusammen mit Gladys weiter nutzen?",
    answer:
      "Ja. Gladys lässt sich mit Google Home verbinden, du kannst also die Sprachsteuerung auf deinen Nest-Lautsprechern behalten, während deine Automationen lokal in Gladys laufen. Wenn dir Datenschutz am wichtigsten ist, kannst du auch komplett lokal werden und den Cloud-Assistenten ganz weglassen.",
  },
];

export const alternativeFaqEs = [
  {
    question: "¿Existe una alternativa a Google Home que respete la privacidad?",
    answer:
      "Sí. Gladys Assistant es una plataforma domótica local, de código abierto y autoalojada que funciona en tu propio equipo, así que tus datos se quedan en tu red local en lugar de en la nube de Google. No hay grabaciones en servidores ajenos, ni publicidad, ni reventa de datos.",
  },
  {
    question: "¿Google Home graba todo lo que dices?",
    answer:
      "Google Home procesa tus peticiones de voz en la nube de Google, y las grabaciones de voz pueden almacenarse y revisarse para mejorar sus servicios. Gladys adopta el enfoque contrario: funciona en local, así que los datos de tu hogar inteligente se quedan en casa.",
  },
  {
    question: "¿Puedo sustituir Google Home por un sistema local y autoalojado?",
    answer:
      "Sí. Gladys Assistant es totalmente autoalojado y funciona en casa. Tiene su propio asistente de voz y un verdadero motor de automatización, así que puedes dejar atrás un asistente en la nube sin renunciar al control manos libres ni a automatizaciones locales potentes.",
  },
  {
    question: "¿Gladys funciona sin la nube o sin internet?",
    answer:
      "Sí. El núcleo de Gladys funciona íntegramente en tu red local, así que tu casa sigue funcionando aunque se caiga internet o se cierre un servicio en la nube. Una suscripción opcional a Gladys Plus añade el acceso remoto y la IA, pero el núcleo autoalojado sigue siendo local.",
  },
  {
    question: "¿Gladys tiene un asistente de voz como Google Home?",
    answer:
      "Sí, Gladys tiene su propio asistente de voz para el control manos libres. Es más reciente que el Asistente de Google y lo configuras tú mismo, pero te permite mantener el control por voz sin enviar cada frase que dices a una gran empresa tecnológica.",
  },
  {
    question: "¿Puedo seguir usando Google Home con Gladys?",
    answer:
      "Sí. Gladys puede integrarse con Google Home, así que puedes mantener el control por voz en tus altavoces Nest mientras tus automatizaciones se ejecutan en local en Gladys. Si tu prioridad es la privacidad, también puedes pasarte a lo totalmente local y prescindir por completo del asistente en la nube.",
  },
];

export default alternativeContent;
