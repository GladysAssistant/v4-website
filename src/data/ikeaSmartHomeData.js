// Content for the "IKEA smart home / Dirigera" landing page.
// Targets the on-theme, qualified "dirigera", "ikea smart home", "tradfri
// without hub", "ikea zigbee" search cluster (Search Console: ~33 impressions
// at position ~10). IKEA device owners looking for a local brain are a great
// fit for Gladys. The page explains the two ways to control IKEA devices with
// Gladys (Zigbee2MQTT directly, or Matter through the DIRIGERA hub) and links
// out to the existing integration docs for the how-to.

const ikeaSmartHomeContent = {
  en: {
    meta: {
      title: "IKEA Smart Home: Dirigera, Matter over Thread & Zigbee",
      description:
        "Control your IKEA smart home locally with Gladys Assistant: Tradfri over Zigbee2MQTT, the Dirigera hub over Matter, and the new Matter over Thread range (BILRESA, MYGGSPRAY, ALPSTUGA…), with or without Dirigera.",
    },
    hero: {
      title: "Your IKEA smart home, running locally with Gladys",
      subtitle:
        "Control your IKEA Tradfri and Dirigera devices from one local, open-source dashboard, with real automations and no cloud.",
      intro: [
        "IKEA makes some of the best value smart home hardware out there: Tradfri bulbs, motion and door sensors, smart plugs, remotes and Fyrtur blinds. On their own, they rely on the IKEA app and the Dirigera (or older Tradfri) gateway.",
        "With Gladys Assistant you can bring all of these devices into a single local dashboard, mix them freely with other brands, and build automations that actually react to your home. There are two ways to connect IKEA to Gladys, and you can even skip the IKEA hub entirely.",
      ],
      primaryCta: { label: "Connect Zigbee to Gladys", href: "/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    methods: {
      title: "Two ways to use IKEA devices with Gladys",
      intro:
        "IKEA's Tradfri devices are Zigbee devices, so you have two options depending on whether you want to keep the IKEA hub or not:",
      items: [
        {
          name: "1. Directly over Zigbee2MQTT (no IKEA hub)",
          tag: "Recommended, fully local",
          text: "IKEA Tradfri devices are standard Zigbee, so you can pair them straight to Gladys with a Zigbee USB dongle through Zigbee2MQTT, no Dirigera or Tradfri gateway required. This is the most local option: your bulbs, sensors and remotes talk directly to Gladys, and you can mix them with Philips Hue, Aqara, Sonoff and any other Zigbee brand on the same network.",
          link: { href: "/docs/integrations/zigbee2mqtt/", label: "Set up Zigbee2MQTT →" },
        },
        {
          name: "2. Through the Dirigera hub over Matter",
          tag: "Keep your IKEA gateway",
          text: "The newer IKEA DIRIGERA hub acts as a Matter bridge. If you want to keep managing your devices in the IKEA app, you can expose them to Gladys over Matter: the hub is already on your Wi-Fi or Ethernet, so Gladys can control the connected devices directly, locally, without the IKEA cloud.",
          link: { href: "/docs/integrations/matter/", label: "Read the Matter guide →" },
        },
      ],
      outro:
        "Not sure which to pick? If you want the most local, brand-agnostic setup, go with Zigbee2MQTT and a dongle. If you already own a Dirigera hub and like the IKEA app, the Matter route is the quickest.",
    },
    newRange: {
      title: "IKEA's new Matter over Thread range: do you need DIRIGERA?",
      intro:
        "Since early 2026, IKEA's new smart home products (the BILRESA remotes, the MYGGSPRAY motion sensor, the MYGGBETT door and window sensor, the TIMMERFLOTTE temperature and humidity sensor, the ALPSTUGA air quality monitor, the KLIPPBOK water leak sensor, the GRILLPLATS plug and the KAJPLATS bulbs) use Matter over Thread instead of Zigbee. Here's how they fit with Gladys:",
      points: [
        "You need a Thread border router, but not necessarily DIRIGERA: an Apple TV 4K, a HomePod, a Google Nest Hub (2nd generation) or a recent Amazon Echo does the job too.",
        "The first pairing goes through a full Matter controller (the IKEA, Apple Home, Google Home or Alexa app), because it uses Bluetooth, which Gladys doesn't handle yet. Then generate a new pairing code from that app and add the device to Gladys, which controls it locally.",
        "If you have a DIRIGERA hub, you can also add the hub itself to Gladys as a Matter bridge and get all its devices at once.",
        "Some models can switch to Zigbee: the BILRESA dual-button remote, for example, pairs directly with Zigbee2MQTT after a reset and a button sequence, and is fully supported in Gladys since version 4.72.",
      ],
      outro:
        "Matter over Thread is still young and support varies from one device to another, so check the forum for the model you have in mind before buying.",
    },
    devices: {
      title: "Which IKEA devices work with Gladys",
      intro:
        "Paired over Zigbee2MQTT, the vast majority of the IKEA Tradfri range works with Gladys, including:",
      points: [
        "Tradfri LED bulbs (E27, E14, GU10), white spectrum and colour",
        "Smart plugs (Tradfri control outlet)",
        "Motion sensors and door/window sensors",
        "Tradfri and Styrbar remotes and dimmers",
        "Fyrtur and Kadrilj smart blinds",
        "Vindstyrka and other Zigbee air quality sensors",
      ],
      outro:
        "A Zigbee USB dongle is all you need to pair them. See our guide to picking the right one.",
    },
    gladys: {
      title: "Why run your IKEA devices through Gladys",
      paragraphs: [
        "The IKEA app is fine for basic control, but it keeps your devices in a silo and leans on the cloud. With Gladys, your IKEA lights and sensors live in the same place as every other device in your home, and everything runs locally on your own hardware.",
        "From there you can build real automations: turn on the Tradfri lights when an IKEA motion sensor fires, close the Fyrtur blinds at sunset, or trigger a whole scene from a Styrbar remote, combining IKEA gear with any other brand you own.",
      ],
      link: { label: "Discover local, open-source home automation →", href: "/open-source-home-automation/" },
    },
    related: {
      title: "Go further",
      intro:
        "Connecting your IKEA devices is part of building a local smart home:",
      links: [
        {
          label: "Connect Zigbee devices to Gladys",
          href: "/docs/integrations/zigbee2mqtt/",
          text: "The step-by-step guide to pairing Zigbee devices, including IKEA Tradfri, with Zigbee2MQTT.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy to pair your IKEA and other Zigbee devices locally.",
        },
        {
          label: "Home weather station",
          href: "/home-weather-station/",
          text: "Measure temperature and humidity locally with Zigbee and Matter sensors.",
        },
        {
          label: "Matter in Gladys",
          href: "/docs/integrations/matter/",
          text: "How to use Matter bridges like the IKEA Dirigera hub with Gladys.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters and how to build a home that runs without the cloud.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Bring your IKEA devices home",
      text: "Gladys is free, open-source, and installs in a single Docker command. Pair your Tradfri devices locally and automate your whole home, IKEA and beyond.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Set up Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
    },
  },

  fr: {
    meta: {
      title: "Maison connectée IKEA : Dirigera, Matter over Thread et Zigbee",
      description:
        "Pilotez votre maison connectée IKEA en local avec Gladys Assistant : Tradfri en Zigbee2MQTT, le hub Dirigera en Matter, et la nouvelle gamme Matter over Thread (BILRESA, MYGGSPRAY, ALPSTUGA…), avec ou sans Dirigera.",
    },
    hero: {
      title: "Votre maison connectée IKEA, en local avec Gladys",
      subtitle:
        "Pilotez vos appareils IKEA Tradfri et Dirigera depuis un seul tableau de bord local et open source, avec de vraies automatisations et sans cloud.",
      intro: [
        "IKEA propose parmi le meilleur matériel domotique en rapport qualité/prix : ampoules Tradfri, détecteurs de mouvement et d'ouverture, prises connectées, télécommandes et stores Fyrtur. Seuls, ces appareils dépendent de l'application IKEA et de la passerelle Dirigera (ou de l'ancienne Tradfri).",
        "Avec Gladys Assistant, vous réunissez tous ces appareils dans un seul tableau de bord local, vous les mélangez librement avec d'autres marques, et vous créez des automatisations qui réagissent vraiment à votre maison. Il y a deux façons de connecter IKEA à Gladys, et vous pouvez même vous passer totalement du hub IKEA.",
      ],
      primaryCta: { label: "Connecter le Zigbee à Gladys", href: "/fr/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/fr/docs/",
      },
    },
    methods: {
      title: "Deux façons d'utiliser vos appareils IKEA avec Gladys",
      intro:
        "Les appareils IKEA Tradfri sont des appareils Zigbee : vous avez donc deux options selon que vous souhaitez garder le hub IKEA ou non :",
      items: [
        {
          name: "1. Directement en Zigbee2MQTT (sans hub IKEA)",
          tag: "Recommandé, 100 % local",
          text: "Les appareils IKEA Tradfri sont du Zigbee standard : vous pouvez donc les appairer directement à Gladys avec une clé Zigbee USB via Zigbee2MQTT, sans passerelle Dirigera ni Tradfri. C'est l'option la plus locale : vos ampoules, capteurs et télécommandes dialoguent directement avec Gladys, et vous pouvez les mélanger avec du Philips Hue, de l'Aqara, du Sonoff et n'importe quelle autre marque Zigbee sur le même réseau.",
          link: { href: "/fr/docs/integrations/zigbee2mqtt/", label: "Configurer Zigbee2MQTT →" },
        },
        {
          name: "2. Via le hub Dirigera en Matter",
          tag: "Garder sa passerelle IKEA",
          text: "Le nouveau hub IKEA DIRIGERA agit comme un pont Matter. Si vous voulez continuer à gérer vos appareils dans l'application IKEA, vous pouvez les exposer à Gladys en Matter : le hub est déjà sur votre Wi-Fi ou votre Ethernet, donc Gladys peut piloter les appareils connectés directement, en local, sans le cloud IKEA.",
          link: { href: "/fr/docs/integrations/matter/", label: "Lire le guide Matter →" },
        },
      ],
      outro:
        "Vous hésitez ? Pour l'installation la plus locale et multimarque, choisissez Zigbee2MQTT et une clé. Si vous possédez déjà un hub Dirigera et appréciez l'application IKEA, la voie Matter est la plus rapide.",
    },
    newRange: {
      title: "La nouvelle gamme IKEA Matter over Thread : faut-il un DIRIGERA ?",
      intro:
        "Depuis début 2026, les nouveaux produits connectés IKEA (les télécommandes BILRESA, le détecteur de mouvement MYGGSPRAY, le capteur d'ouverture MYGGBETT, le capteur de température et d'humidité TIMMERFLOTTE, le capteur de qualité de l'air ALPSTUGA, le détecteur de fuite d'eau KLIPPBOK, la prise GRILLPLATS et les ampoules KAJPLATS) utilisent Matter over Thread au lieu du Zigbee. Voici comment ils s'intègrent à Gladys :",
      points: [
        "Il vous faut un routeur de bordure Thread, mais pas forcément un DIRIGERA : une Apple TV 4K, un HomePod, un Google Nest Hub (2e génération) ou un Amazon Echo récent font aussi l'affaire.",
        "Le premier appairage passe par un contrôleur Matter complet (l'application IKEA, Maison d'Apple, Google Home ou Alexa), car il utilise le Bluetooth, que Gladys ne gère pas encore. Générez ensuite un nouveau code d'appairage depuis cette application et ajoutez l'appareil à Gladys, qui le pilote en local.",
        "Si vous avez un hub DIRIGERA, vous pouvez aussi ajouter le hub lui-même à Gladys comme pont Matter et récupérer tous ses appareils d'un coup.",
        "Certains modèles peuvent passer en Zigbee : la télécommande BILRESA à deux boutons, par exemple, s'appaire directement à Zigbee2MQTT après une réinitialisation et une séquence d'appuis, et est entièrement prise en charge dans Gladys depuis la version 4.72.",
      ],
      outro:
        "Matter over Thread est encore jeune et la prise en charge varie d'un appareil à l'autre : consultez le forum pour le modèle qui vous intéresse avant d'acheter.",
    },
    devices: {
      title: "Quels appareils IKEA fonctionnent avec Gladys",
      intro:
        "Appairée en Zigbee2MQTT, la grande majorité de la gamme IKEA Tradfri fonctionne avec Gladys, notamment :",
      points: [
        "Les ampoules LED Tradfri (E27, E14, GU10), spectre blanc et couleur",
        "Les prises connectées (prise Tradfri)",
        "Les détecteurs de mouvement et d'ouverture de porte/fenêtre",
        "Les télécommandes et variateurs Tradfri et Styrbar",
        "Les stores connectés Fyrtur et Kadrilj",
        "Le Vindstyrka et autres capteurs de qualité de l'air Zigbee",
      ],
      outro:
        "Une clé Zigbee USB suffit pour les appairer. Consultez notre guide pour choisir la bonne.",
    },
    gladys: {
      title: "Pourquoi piloter vos appareils IKEA avec Gladys",
      paragraphs: [
        "L'application IKEA convient pour un contrôle basique, mais elle enferme vos appareils dans un silo et s'appuie sur le cloud. Avec Gladys, vos lumières et capteurs IKEA se retrouvent au même endroit que tous les autres appareils de votre maison, et tout fonctionne en local sur votre propre matériel.",
        "À partir de là, vous créez de vraies automatisations : allumer les lumières Tradfri quand un détecteur de mouvement IKEA se déclenche, fermer les stores Fyrtur au coucher du soleil, ou lancer une scène complète depuis une télécommande Styrbar, en combinant le matériel IKEA avec n'importe quelle autre marque.",
      ],
      link: { label: "Découvrir la domotique locale et open source →", href: "/fr/open-source-home-automation/" },
    },
    related: {
      title: "Aller plus loin",
      intro:
        "Connecter vos appareils IKEA fait partie de la construction d'une maison connectée locale :",
      links: [
        {
          label: "Connecter des appareils Zigbee à Gladys",
          href: "/fr/docs/integrations/zigbee2mqtt/",
          text: "Le guide pas à pas pour appairer des appareils Zigbee, dont les IKEA Tradfri, avec Zigbee2MQTT.",
        },
        {
          label: "Quelle clé Zigbee USB choisir",
          href: "/fr/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter pour appairer vos appareils IKEA et autres en local.",
        },
        {
          label: "Station météo maison",
          href: "/fr/home-weather-station/",
          text: "Mesurez température et humidité en local avec des capteurs Zigbee et Matter.",
        },
        {
          label: "Matter dans Gladys",
          href: "/fr/docs/integrations/matter/",
          text: "Comment utiliser les ponts Matter comme le hub IKEA Dirigera avec Gladys.",
        },
        {
          label: "Construire une maison connectée locale",
          href: "/fr/local-smart-home/",
          text: "Pourquoi le local d'abord change tout, et comment bâtir une maison qui tourne sans cloud.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Ramenez vos appareils IKEA à la maison",
      text: "Gladys est gratuit, open source, et s'installe en une seule commande Docker. Appairez vos appareils Tradfri en local et automatisez toute votre maison, IKEA et au-delà.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: {
        label: "Configurer Zigbee2MQTT",
        href: "/fr/docs/integrations/zigbee2mqtt/",
      },
    },
  },

  de: {
    meta: {
      title: "IKEA Smart Home: Dirigera, Matter over Thread & Zigbee",
      description:
        "IKEA Smart Home lokal steuern mit Gladys: Tradfri über Zigbee2MQTT, Dirigera über Matter und die neue Matter-over-Thread-Serie, mit oder ohne Dirigera.",
    },
    hero: {
      title: "Dein IKEA Smart Home, lokal mit Gladys",
      subtitle:
        "Steuere deine IKEA-Geräte von Tradfri und Dirigera über ein einziges lokales Open-Source-Dashboard, mit echten Automatisierungen und ohne Cloud.",
      intro: [
        "IKEA bietet mit die preiswerteste Smart-Home-Hardware überhaupt: Tradfri-Lampen, Bewegungs- und Türsensoren, smarte Steckdosen, Fernbedienungen und Fyrtur-Rollos. Für sich allein sind diese Geräte aber auf die IKEA-App und das Dirigera-Gateway (oder das ältere Tradfri-Gateway) angewiesen.",
        "Mit Gladys Assistant holst du all diese Geräte in ein einziges lokales Dashboard, kombinierst sie frei mit anderen Marken und baust Automatisierungen, die wirklich auf dein Zuhause reagieren. Es gibt zwei Wege, IKEA mit Gladys zu verbinden, und den IKEA-Hub kannst du sogar ganz weglassen.",
      ],
      primaryCta: { label: "Zigbee mit Gladys verbinden", href: "/de/docs/integrations/zigbee2mqtt/" },
      secondaryCta: {
        label: "Mit Gladys loslegen →",
        href: "/de/docs/",
      },
    },
    methods: {
      title: "Zwei Wege, IKEA-Geräte mit Gladys zu nutzen",
      intro:
        "Die Tradfri-Geräte von IKEA sind Zigbee-Geräte. Du hast also zwei Möglichkeiten, je nachdem, ob du den IKEA-Hub behalten willst oder nicht:",
      items: [
        {
          name: "1. Direkt über Zigbee2MQTT (ohne IKEA-Hub)",
          tag: "Empfohlen, komplett lokal",
          text: "IKEA-Tradfri-Geräte sprechen Standard-Zigbee. Du kannst sie also mit einem Zigbee-USB-Stick über Zigbee2MQTT direkt mit Gladys koppeln, ganz ohne Dirigera- oder Tradfri-Gateway. Das ist die lokalste Variante: Deine Lampen, Sensoren und Fernbedienungen sprechen direkt mit Gladys, und du kannst sie im selben Netz mit Philips Hue, Aqara, Sonoff und jeder anderen Zigbee-Marke kombinieren.",
          link: { href: "/de/docs/integrations/zigbee2mqtt/", label: "Zigbee2MQTT einrichten →" },
        },
        {
          name: "2. Über den Dirigera-Hub per Matter",
          tag: "IKEA-Gateway behalten",
          text: "Der neuere IKEA-Hub DIRIGERA arbeitet als Matter-Bridge. Wenn du deine Geräte weiterhin in der IKEA-App verwalten möchtest, kannst du sie per Matter für Gladys freigeben: Der Hub hängt ohnehin in deinem WLAN oder per Ethernet im Netz, sodass Gladys die verbundenen Geräte direkt und lokal steuern kann, ohne IKEA-Cloud.",
          link: { href: "/de/docs/integrations/matter/", label: "Zur Matter-Anleitung →" },
        },
      ],
      outro:
        "Unsicher, was du wählen sollst? Für das lokalste, herstellerunabhängige Setup nimm Zigbee2MQTT mit einem USB-Stick. Wenn du schon einen Dirigera-Hub hast und die IKEA-App magst, ist der Weg über Matter der schnellste.",
    },
    newRange: {
      title: "IKEAs neue Matter-over-Thread-Serie: Brauchst du DIRIGERA?",
      intro:
        "Seit Anfang 2026 setzen IKEAs neue Smart-Home-Produkte (die BILRESA-Fernbedienungen, der Bewegungsmelder MYGGSPRAY, der Tür- und Fenstersensor MYGGBETT, der Temperatur- und Feuchtigkeitssensor TIMMERFLOTTE, der Luftqualitätssensor ALPSTUGA, der Wasserlecksensor KLIPPBOK, die Steckdose GRILLPLATS und die KAJPLATS-Lampen) auf Matter over Thread statt auf Zigbee. So passen sie zu Gladys:",
      points: [
        "Du brauchst einen Thread-Border-Router, aber nicht unbedingt DIRIGERA: Ein Apple TV 4K, ein HomePod, ein Google Nest Hub (2. Generation) oder ein aktueller Amazon Echo erfüllen den Zweck ebenfalls.",
        "Die erste Kopplung läuft über einen vollwertigen Matter-Controller (die IKEA-App, Apple Home, Google Home oder Alexa), weil sie Bluetooth nutzt, das Gladys noch nicht unterstützt. Erzeuge danach in dieser App einen neuen Kopplungscode und füge das Gerät zu Gladys hinzu, das es dann lokal steuert.",
        "Wenn du einen DIRIGERA-Hub hast, kannst du auch den Hub selbst als Matter-Bridge zu Gladys hinzufügen und so alle seine Geräte auf einmal übernehmen.",
        "Manche Modelle lassen sich auf Zigbee umstellen: Die BILRESA-Fernbedienung mit zwei Tasten zum Beispiel koppelt sich nach einem Reset und einer Tastenfolge direkt mit Zigbee2MQTT und wird seit Version 4.72 vollständig von Gladys unterstützt.",
      ],
      outro:
        "Matter over Thread ist noch jung und die Unterstützung schwankt von Gerät zu Gerät. Schau daher vor dem Kauf im Forum nach dem Modell, das dich interessiert.",
    },
    devices: {
      title: "Welche IKEA-Geräte mit Gladys funktionieren",
      intro:
        "Über Zigbee2MQTT gekoppelt funktioniert der Großteil der IKEA-Tradfri-Reihe mit Gladys, unter anderem:",
      points: [
        "Tradfri-LED-Lampen (E27, E14, GU10), White Spectrum und farbig",
        "Smarte Steckdosen (Tradfri-Steckdose)",
        "Bewegungsmelder sowie Tür- und Fenstersensoren",
        "Tradfri- und Styrbar-Fernbedienungen und Dimmer",
        "Smarte Rollos Fyrtur und Kadrilj",
        "Vindstyrka und andere Zigbee-Luftqualitätssensoren",
      ],
      outro:
        "Zum Koppeln brauchst du nur einen Zigbee-USB-Stick. In unserem Ratgeber erfährst du, welcher der richtige ist.",
    },
    gladys: {
      title: "Warum du deine IKEA-Geräte über Gladys steuern solltest",
      paragraphs: [
        "Für die Grundsteuerung reicht die IKEA-App, aber sie sperrt deine Geräte in ein eigenes Ökosystem und setzt auf die Cloud. Mit Gladys landen deine IKEA-Lampen und -Sensoren am selben Ort wie alle anderen Geräte in deinem Zuhause, und alles läuft lokal auf deiner eigenen Hardware.",
        "Darauf aufbauend erstellst du echte Automatisierungen: Tradfri-Licht einschalten, wenn ein IKEA-Bewegungsmelder auslöst, die Fyrtur-Rollos bei Sonnenuntergang schließen oder per Styrbar-Fernbedienung eine ganze Szene starten, und dabei IKEA-Geräte mit jeder anderen Marke kombinieren, die du besitzt.",
      ],
      link: { label: "Lokale Open-Source-Hausautomation entdecken →", href: "/de/open-source-home-automation/" },
    },
    related: {
      title: "Weiterlesen",
      intro:
        "Deine IKEA-Geräte anzubinden ist ein Baustein auf dem Weg zum lokalen Smart Home:",
      links: [
        {
          label: "Zigbee-Geräte mit Gladys verbinden",
          href: "/de/docs/integrations/zigbee2mqtt/",
          text: "Die Schritt-für-Schritt-Anleitung, um Zigbee-Geräte wie IKEA Tradfri mit Zigbee2MQTT zu koppeln.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/de/best-zigbee-dongle/",
          text: "Welchen Zigbee-Koordinator du kaufen solltest, um IKEA- und andere Zigbee-Geräte lokal zu koppeln.",
        },
        {
          label: "Wetterstation fürs Smart Home",
          href: "/de/home-weather-station/",
          text: "Temperatur und Luftfeuchtigkeit lokal messen, mit Zigbee- und Matter-Sensoren.",
        },
        {
          label: "Matter in Gladys",
          href: "/de/docs/integrations/matter/",
          text: "So nutzt du Matter-Bridges wie den IKEA-Hub Dirigera mit Gladys.",
        },
        {
          label: "Ein lokales Smart Home aufbauen",
          href: "/de/local-smart-home/",
          text: "Warum „lokal zuerst“ zählt und wie du ein Zuhause baust, das ohne Cloud läuft.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Hol deine IKEA-Geräte nach Hause",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Kopple deine Tradfri-Geräte lokal und automatisiere dein ganzes Zuhause, mit IKEA und weit darüber hinaus.",
      primary: { label: "Jetzt loslegen", href: "/de/docs/" },
      secondary: {
        label: "Zigbee2MQTT einrichten",
        href: "/de/docs/integrations/zigbee2mqtt/",
      },
    },
  },
};

export const ikeaSmartHomeFaqEn = [
  {
    question: "Can I use IKEA smart home devices without the Dirigera hub?",
    answer:
      "Yes. IKEA Tradfri devices are standard Zigbee, so you can pair them directly to Gladys with a Zigbee USB dongle through Zigbee2MQTT, without any Dirigera or Tradfri gateway. Your bulbs, sensors and remotes then talk straight to Gladys, fully locally.",
  },
  {
    question: "Does Gladys work with the IKEA Dirigera hub?",
    answer:
      "Yes. The Dirigera hub acts as a Matter bridge, so you can expose the devices connected to it to Gladys over Matter. The hub is already on your local network, which lets Gladys control them locally without the IKEA cloud. You can also skip the hub entirely and pair the devices directly over Zigbee2MQTT.",
  },
  {
    question: "Which IKEA devices are compatible with Gladys?",
    answer:
      "Paired over Zigbee2MQTT, most of the IKEA Tradfri range works: LED bulbs (E27, E14, GU10), smart plugs, motion and door sensors, Styrbar and Tradfri remotes, and Fyrtur or Kadrilj blinds. Anything that speaks standard Zigbee can be added.",
  },
  {
    question: "Do I still need the IKEA app?",
    answer:
      "No. If you pair your devices directly over Zigbee2MQTT, you control everything from Gladys and don't need the IKEA app at all. If you keep the Dirigera hub and use Matter, you can still manage devices in the IKEA app while also controlling them in Gladys.",
  },
  {
    question: "Can I mix IKEA devices with other brands?",
    answer:
      "Yes, and that is one of the main reasons to use Gladys. Over Zigbee2MQTT you can freely combine IKEA Tradfri with Philips Hue, Aqara, Sonoff and other Zigbee brands, all on the same network and in the same automations.",
  },
  {
    question: "Do IKEA's new Matter over Thread devices need the DIRIGERA hub?",
    answer:
      "No, but they need a Thread border router. DIRIGERA is one, and so are an Apple TV 4K, a HomePod, a Google Nest Hub (2nd generation) or a recent Amazon Echo. The first pairing goes through the IKEA, Apple Home, Google Home or Alexa app; you then share the device with Gladys using a new Matter pairing code.",
  },
  {
    question: "Can the IKEA BILRESA remote work over Zigbee?",
    answer:
      "Yes. The BILRESA remotes can be switched from Matter over Thread to Zigbee with a reset followed by a button sequence, then paired directly with Zigbee2MQTT. Gladys fully supports the dual-button BILRESA over Zigbee since version 4.72; the scroll-wheel version pairs too, but its wheel isn't handled yet.",
  },
];

export const ikeaSmartHomeFaqFr = [
  {
    question: "Puis-je utiliser des appareils connectés IKEA sans le hub Dirigera ?",
    answer:
      "Oui. Les appareils IKEA Tradfri sont du Zigbee standard : vous pouvez donc les appairer directement à Gladys avec une clé Zigbee USB via Zigbee2MQTT, sans passerelle Dirigera ni Tradfri. Vos ampoules, capteurs et télécommandes dialoguent alors directement avec Gladys, en local.",
  },
  {
    question: "Gladys fonctionne-t-il avec le hub IKEA Dirigera ?",
    answer:
      "Oui. Le hub Dirigera agit comme un pont Matter : vous pouvez donc exposer à Gladys les appareils qui y sont connectés, en Matter. Le hub étant déjà sur votre réseau local, Gladys les pilote en local sans le cloud IKEA. Vous pouvez aussi vous passer totalement du hub et appairer les appareils directement en Zigbee2MQTT.",
  },
  {
    question: "Quels appareils IKEA sont compatibles avec Gladys ?",
    answer:
      "Appairée en Zigbee2MQTT, la plupart de la gamme IKEA Tradfri fonctionne : ampoules LED (E27, E14, GU10), prises connectées, détecteurs de mouvement et d'ouverture, télécommandes Styrbar et Tradfri, et stores Fyrtur ou Kadrilj. Tout ce qui parle Zigbee standard peut être ajouté.",
  },
  {
    question: "Ai-je encore besoin de l'application IKEA ?",
    answer:
      "Non. Si vous appairez vos appareils directement en Zigbee2MQTT, vous pilotez tout depuis Gladys et n'avez pas besoin de l'application IKEA. Si vous gardez le hub Dirigera et utilisez Matter, vous pouvez continuer à gérer vos appareils dans l'application IKEA tout en les pilotant dans Gladys.",
  },
  {
    question: "Puis-je mélanger des appareils IKEA avec d'autres marques ?",
    answer:
      "Oui, et c'est l'une des principales raisons d'utiliser Gladys. En Zigbee2MQTT, vous combinez librement l'IKEA Tradfri avec du Philips Hue, de l'Aqara, du Sonoff et d'autres marques Zigbee, sur le même réseau et dans les mêmes automatisations.",
  },
  {
    question: "Les nouveaux appareils IKEA Matter over Thread ont-ils besoin du hub DIRIGERA ?",
    answer:
      "Non, mais ils ont besoin d'un routeur de bordure Thread. Le DIRIGERA en est un, tout comme une Apple TV 4K, un HomePod, un Google Nest Hub (2e génération) ou un Amazon Echo récent. Le premier appairage passe par l'application IKEA, Maison d'Apple, Google Home ou Alexa ; vous partagez ensuite l'appareil avec Gladys grâce à un nouveau code d'appairage Matter.",
  },
  {
    question: "La télécommande IKEA BILRESA peut-elle fonctionner en Zigbee ?",
    answer:
      "Oui. Les télécommandes BILRESA peuvent passer de Matter over Thread au Zigbee avec une réinitialisation suivie d'une séquence d'appuis, puis s'appairer directement à Zigbee2MQTT. Gladys prend entièrement en charge la BILRESA à deux boutons en Zigbee depuis la version 4.72 ; la version à molette s'appaire aussi, mais sa molette n'est pas encore gérée.",
  },
];

export const ikeaSmartHomeFaqDe = [
  {
    question: "Kann ich IKEA-Smart-Home-Geräte ohne den Dirigera-Hub nutzen?",
    answer:
      "Ja. IKEA-Tradfri-Geräte sprechen Standard-Zigbee. Du kannst sie also mit einem Zigbee-USB-Stick über Zigbee2MQTT direkt mit Gladys koppeln, ganz ohne Dirigera- oder Tradfri-Gateway. Deine Lampen, Sensoren und Fernbedienungen sprechen dann direkt mit Gladys, komplett lokal.",
  },
  {
    question: "Funktioniert Gladys mit dem IKEA-Hub Dirigera?",
    answer:
      "Ja. Der Dirigera-Hub arbeitet als Matter-Bridge, du kannst die damit verbundenen Geräte also per Matter für Gladys freigeben. Da der Hub bereits in deinem lokalen Netz hängt, steuert Gladys sie lokal, ohne IKEA-Cloud. Du kannst den Hub aber auch ganz weglassen und die Geräte direkt über Zigbee2MQTT koppeln.",
  },
  {
    question: "Welche IKEA-Geräte sind mit Gladys kompatibel?",
    answer:
      "Über Zigbee2MQTT gekoppelt funktioniert der Großteil der IKEA-Tradfri-Reihe: LED-Lampen (E27, E14, GU10), smarte Steckdosen, Bewegungsmelder und Türsensoren, Styrbar- und Tradfri-Fernbedienungen sowie die Rollos Fyrtur und Kadrilj. Alles, was Standard-Zigbee spricht, lässt sich hinzufügen.",
  },
  {
    question: "Brauche ich die IKEA-App dann noch?",
    answer:
      "Nein. Wenn du deine Geräte direkt über Zigbee2MQTT koppelst, steuerst du alles über Gladys und brauchst die IKEA-App gar nicht. Behältst du den Dirigera-Hub und nutzt Matter, kannst du deine Geräte weiterhin in der IKEA-App verwalten und gleichzeitig über Gladys steuern.",
  },
  {
    question: "Kann ich IKEA-Geräte mit anderen Marken kombinieren?",
    answer:
      "Ja, und genau das ist einer der Hauptgründe für Gladys. Über Zigbee2MQTT kombinierst du IKEA Tradfri frei mit Philips Hue, Aqara, Sonoff und anderen Zigbee-Marken, im selben Netz und in denselben Automatisierungen.",
  },
  {
    question: "Brauchen IKEAs neue Matter-over-Thread-Geräte den DIRIGERA-Hub?",
    answer:
      "Nein, aber sie brauchen einen Thread-Border-Router. DIRIGERA ist einer, ebenso ein Apple TV 4K, ein HomePod, ein Google Nest Hub (2. Generation) oder ein aktueller Amazon Echo. Die erste Kopplung läuft über die IKEA-App, Apple Home, Google Home oder Alexa; danach teilst du das Gerät mit einem neuen Matter-Kopplungscode mit Gladys.",
  },
  {
    question: "Funktioniert die IKEA-Fernbedienung BILRESA auch über Zigbee?",
    answer:
      "Ja. Die BILRESA-Fernbedienungen lassen sich mit einem Reset und einer anschließenden Tastenfolge von Matter over Thread auf Zigbee umstellen und dann direkt mit Zigbee2MQTT koppeln. Gladys unterstützt die BILRESA mit zwei Tasten seit Version 4.72 vollständig über Zigbee; die Version mit Drehrad lässt sich ebenfalls koppeln, das Rad wird aber noch nicht unterstützt.",
  },
];

export default ikeaSmartHomeContent;
