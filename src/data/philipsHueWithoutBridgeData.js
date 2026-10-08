// Content for the "Philips Hue without the bridge" landing page.
// Hue bulbs are standard Zigbee lights, so they can be paired directly with a
// Zigbee coordinator through Zigbee2MQTT, no Hue Bridge needed. Targets "hue
// bulbs without bridge", "philips hue without hub", "hue zigbee2mqtt".
// Gladys maps on/off, brightness, color (color_xy) and color temperature
// (server/services/zigbee2mqtt/exposes). We stay fair about what you lose
// (Hue app, Hue Sync / Entertainment, Hue cloud features).

const philipsHueWithoutBridgeContent = {
  en: {
    meta: {
      title: "Philips Hue Without the Bridge: Pair Hue Bulbs via Zigbee",
      description:
        "Use Philips Hue bulbs without a Hue Bridge: pair them directly with a Zigbee USB dongle through Zigbee2MQTT and control them locally with Gladys Assistant. What works, what you lose, and how to reset a Hue bulb.",
    },
    screenshotCaption:
      "Hue bulbs paired directly over Zigbee, next to the rest of your devices in Gladys.",
    hero: {
      title: "Philips Hue without the bridge",
      subtitle:
        "Hue bulbs speak standard Zigbee. Pair them with a Zigbee USB dongle and Gladys Assistant, and control them locally, alongside every other brand.",
      intro: [
        "The Hue Bridge is a Zigbee hub. Every Hue bulb, plug and switch talks to it over Zigbee, the same open protocol used by IKEA, Aqara and hundreds of other brands. That means you don't actually need the bridge: any Zigbee coordinator can drive Hue lights.",
        "Gladys Assistant, a free and open-source smart home platform, installs Zigbee2MQTT for you. Pair your Hue bulbs with a Zigbee USB dongle, and you control on/off, brightness, color and white temperature locally, in the same scenes as your sensors and devices from other brands.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT setup guide",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Keep the bridge instead →",
        href: "/docs/integrations/external/philips-hue/",
      },
    },
    problem: {
      title: "Why skip the Hue Bridge",
      intro: "The bridge works well, but it isn't always the best option:",
      points: [
        "It's one more box to buy and to power, for a single brand.",
        "The Hue app and its features revolve around the bridge (or the newer Bridge Pro, about $99), and Hue's cloud for remote access.",
        "Your Hue lights live in their own app, separate from your sensors, thermostats and other Zigbee devices.",
        "Every Zigbee hub runs its own network: Hue bulbs paired with your main coordinator also act as Zigbee routers and strengthen your whole mesh.",
      ],
      outro:
        "If you already run Zigbee at home, putting your Hue bulbs on the same network is simpler and makes the network stronger.",
    },
    comparison: {
      title: "Hue with Gladys and Zigbee2MQTT vs with the Hue Bridge",
      intro: "Both are local. The difference is what you get around the lights:",
      cols: {
        feature: "",
        gladys: "Gladys + Zigbee2MQTT",
        other: "Hue Bridge + Hue app",
      },
      rows: [
        { feature: "On/off, brightness, color, white temperature", gladys: "Yes", other: "Yes" },
        { feature: "Works without the internet", gladys: "Yes", other: "Yes, locally" },
        {
          feature: "Other brands in the same scenes",
          gladys: "Any Zigbee, Z-Wave, Matter or Wi-Fi device",
          other: "Hue devices and Works with Hue partners",
        },
        { feature: "Hue Sync / Entertainment areas", gladys: "No", other: "Yes" },
        { feature: "Hue app scenes and effects", gladys: "No, Gladys scenes instead", other: "Yes" },
        { feature: "Firmware updates", gladys: "Yes, through Zigbee2MQTT (OTA)", other: "Yes, through the Hue app" },
        { feature: "Extra hardware", gladys: "A Zigbee USB dongle", other: "The Hue Bridge" },
      ],
      outro:
        "Want Hue Sync with your TV or the Hue app's effects? Keep the bridge: Gladys can control your Hue lights through it with the Philips Hue integration. Want one Zigbee network for everything? Pair them directly.",
    },
    features: {
      title: "What you get with Hue bulbs in Gladys",
      intro: "Once paired, each Hue light becomes a Gladys device:",
      cards: [
        {
          icon: "💡",
          title: "Full light control",
          text: "On/off, brightness, color and white color temperature, from the dashboard or a scene.",
        },
        {
          icon: "🎬",
          title: "Scenes with everything",
          text: "Turn the hallway lights on when an Aqara motion sensor triggers, or dim the living room when the TV turns on.",
        },
        {
          icon: "🕸️",
          title: "A stronger Zigbee mesh",
          text: "Mains-powered Hue bulbs route Zigbee traffic for your battery sensors.",
        },
        {
          icon: "🏠",
          title: "Local and private",
          text: "No cloud: commands go from Gladys to the bulb over your own Zigbee network.",
        },
        {
          icon: "🌅",
          title: "Sunrise and sunset",
          text: "Schedule lights around sunset and sunrise, with an offset, for your location.",
        },
        {
          icon: "🤖",
          title: "Voice and AI",
          text: "Control lights in plain language with Gladys Plus, or from Claude through the MCP server.",
        },
      ],
    },
    how: {
      title: "How to pair Hue bulbs without the bridge",
      intro: "On a mini-PC or a Raspberry Pi running Gladys:",
      points: [
        "Plug a Zigbee coordinator into the machine and enable Zigbee2MQTT in Gladys.",
        "If the bulb was paired with a Hue Bridge, delete it from the Hue app first, or factory reset it.",
        "Reset options: a Touchlink reset from the Zigbee2MQTT interface with the bulb within a few centimeters of the coordinator; a factory reset from the Hue app for Bluetooth Hue bulbs; or a Hue dimmer switch held close to the bulb with the On and Off buttons pressed for about 10 seconds.",
        "In Gladys, open Zigbee2MQTT → Discover, permit joining, and power the bulb on: it shows up with its features.",
        "Add it to a room and to your dashboard, then use it in your scenes.",
      ],
      outro:
        "Hue dimmer switches and motion sensors can be paired the same way, and then trigger any Gladys scene.",
    },
    solution: {
      title: "Hue quality, one open Zigbee network",
      paragraphs: [
        "Hue makes excellent bulbs. Pairing them directly with your Zigbee coordinator keeps that quality while removing a proprietary hub and a separate app from your setup.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "See every brand that works with Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Go further",
      intro: "More devices without their hub:",
      links: [
        {
          label: "Aqara sensors without the hub",
          href: "/aqara-without-hub/",
          text: "Aqara Zigbee sensors, locally, without the Aqara app.",
        },
        {
          label: "IKEA smart home",
          href: "/ikea-smart-home/",
          text: "Tradfri over Zigbee, DIRIGERA over Matter.",
        },
        {
          label: "Best Zigbee USB dongle",
          href: "/best-zigbee-dongle/",
          text: "Which Zigbee coordinator to buy.",
        },
        {
          label: "All guides",
          href: "/guides/",
          text: "Every guide, tool and comparison in one place.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Put your Hue bulbs on one open network",
      text: "Gladys is free, open source and installs with a single Docker command. Plug in a Zigbee dongle and pair your first Hue bulb.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT guide", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  fr: {
    meta: {
      title: "Philips Hue sans le pont : associer ses ampoules Hue en Zigbee",
      description:
        "Utilisez vos ampoules Philips Hue sans pont Hue : associez-les directement à une clé Zigbee USB via Zigbee2MQTT et pilotez-les en local avec Gladys Assistant. Ce qui marche, ce que vous perdez, et comment réinitialiser une ampoule Hue.",
    },
    screenshotCaption:
      "Des ampoules Hue associées directement en Zigbee, à côté de vos autres appareils dans Gladys.",
    hero: {
      title: "Philips Hue sans le pont",
      subtitle:
        "Les ampoules Hue parlent un Zigbee standard. Associez-les à une clé Zigbee USB et à Gladys Assistant, et pilotez-les en local, avec toutes vos autres marques.",
      intro: [
        "Le pont Hue est un hub Zigbee. Chaque ampoule, prise et interrupteur Hue lui parle en Zigbee, le même protocole ouvert qu'utilisent IKEA, Aqara et des centaines d'autres marques. Le pont n'est donc pas indispensable : n'importe quel coordinateur Zigbee peut piloter des lumières Hue.",
        "Gladys Assistant, une plateforme domotique gratuite et open source, installe Zigbee2MQTT pour vous. Associez vos ampoules Hue à une clé Zigbee USB, et pilotez en local l'allumage, la luminosité, la couleur et la température de blanc, dans les mêmes scènes que vos capteurs et vos appareils d'autres marques.",
      ],
      primaryCta: {
        label: "Guide d'installation Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Ou garder le pont →",
        href: "/docs/integrations/external/philips-hue/",
      },
    },
    problem: {
      title: "Pourquoi se passer du pont Hue",
      intro: "Le pont fonctionne bien, mais ce n'est pas toujours la meilleure option :",
      points: [
        "C'est un boîtier de plus à acheter et à alimenter, pour une seule marque.",
        "L'application Hue et ses fonctions tournent autour du pont (ou du récent Bridge Pro) et du cloud Hue pour l'accès à distance.",
        "Vos lumières Hue vivent dans leur propre application, à part de vos capteurs, thermostats et autres appareils Zigbee.",
        "Chaque hub Zigbee crée son propre réseau : des ampoules Hue associées à votre coordinateur principal servent aussi de routeurs et renforcent tout votre maillage.",
      ],
      outro:
        "Si vous avez déjà du Zigbee à la maison, mettre vos ampoules Hue sur le même réseau est plus simple et renforce le réseau.",
    },
    comparison: {
      title: "Hue avec Gladys et Zigbee2MQTT vs avec le pont Hue",
      intro: "Les deux sont locaux. La différence, c'est ce que vous avez autour des lumières :",
      cols: {
        feature: "",
        gladys: "Gladys + Zigbee2MQTT",
        other: "Pont Hue + application Hue",
      },
      rows: [
        { feature: "Allumage, luminosité, couleur, température de blanc", gladys: "Oui", other: "Oui" },
        { feature: "Fonctionne sans internet", gladys: "Oui", other: "Oui, en local" },
        {
          feature: "Autres marques dans les mêmes scènes",
          gladys: "Tout appareil Zigbee, Z-Wave, Matter ou Wi-Fi",
          other: "Appareils Hue et partenaires Works with Hue",
        },
        { feature: "Hue Sync / zones de divertissement", gladys: "Non", other: "Oui" },
        { feature: "Scènes et effets de l'application Hue", gladys: "Non, les scènes Gladys à la place", other: "Oui" },
        { feature: "Mises à jour du firmware", gladys: "Oui, via Zigbee2MQTT (OTA)", other: "Oui, via l'application Hue" },
        { feature: "Matériel en plus", gladys: "Une clé Zigbee USB", other: "Le pont Hue" },
      ],
      outro:
        "Vous voulez Hue Sync avec votre télé ou les effets de l'application Hue ? Gardez le pont : Gladys peut piloter vos lumières Hue à travers lui avec l'intégration Philips Hue. Vous voulez un seul réseau Zigbee pour tout ? Associez-les directement.",
    },
    features: {
      title: "Ce que vous obtenez avec vos ampoules Hue dans Gladys",
      intro: "Une fois associée, chaque lumière Hue devient un appareil Gladys :",
      cards: [
        {
          icon: "💡",
          title: "Contrôle complet",
          text: "Allumage, luminosité, couleur et température de blanc, depuis le tableau de bord ou une scène.",
        },
        {
          icon: "🎬",
          title: "Des scènes avec tout",
          text: "Allumez le couloir quand un détecteur de mouvement Aqara se déclenche, ou tamisez le salon quand la télé s'allume.",
        },
        {
          icon: "🕸️",
          title: "Un maillage Zigbee plus solide",
          text: "Les ampoules Hue, alimentées en permanence, relaient le trafic Zigbee de vos capteurs sur pile.",
        },
        {
          icon: "🏠",
          title: "Local et privé",
          text: "Pas de cloud : les commandes vont de Gladys à l'ampoule sur votre propre réseau Zigbee.",
        },
        {
          icon: "🌅",
          title: "Lever et coucher du soleil",
          text: "Programmez les lumières selon le lever et le coucher du soleil chez vous, avec un décalage.",
        },
        {
          icon: "🤖",
          title: "Voix et IA",
          text: "Pilotez les lumières en langage naturel avec Gladys Plus, ou depuis Claude via le serveur MCP.",
        },
      ],
    },
    how: {
      title: "Comment associer des ampoules Hue sans le pont",
      intro: "Sur un mini-PC ou un Raspberry Pi qui fait tourner Gladys :",
      points: [
        "Branchez un coordinateur Zigbee sur la machine et activez Zigbee2MQTT dans Gladys.",
        "Si l'ampoule était associée à un pont Hue, supprimez-la d'abord de l'application Hue, ou réinitialisez-la.",
        "Pour la réinitialiser : un reset Touchlink depuis l'interface de Zigbee2MQTT, ampoule à quelques centimètres du coordinateur ; une réinitialisation depuis l'application Hue pour les ampoules Hue Bluetooth ; ou une télécommande Hue tenue près de l'ampoule, boutons On et Off enfoncés une dizaine de secondes.",
        "Dans Gladys, ouvrez Zigbee2MQTT → Découverte, autorisez l'association et allumez l'ampoule : elle apparaît avec ses fonctionnalités.",
        "Ajoutez-la à une pièce et à votre tableau de bord, puis utilisez-la dans vos scènes.",
      ],
      outro:
        "Les télécommandes et détecteurs de mouvement Hue s'associent de la même façon, et peuvent ensuite déclencher n'importe quelle scène Gladys.",
    },
    solution: {
      title: "La qualité Hue, un seul réseau Zigbee ouvert",
      paragraphs: [
        "Hue fait d'excellentes ampoules. Les associer directement à votre coordinateur Zigbee garde cette qualité tout en retirant un hub propriétaire et une application à part.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Voir toutes les marques compatibles →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres appareils sans leur box :",
      links: [
        {
          label: "Capteurs Aqara sans hub",
          href: "/aqara-without-hub/",
          text: "Les capteurs Aqara Zigbee en local, sans l'application Aqara.",
        },
        {
          label: "Maison connectée IKEA",
          href: "/ikea-smart-home/",
          text: "Tradfri en Zigbee, DIRIGERA en Matter.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/best-zigbee-dongle/",
          text: "Quel coordinateur Zigbee acheter.",
        },
        {
          label: "Tous les guides",
          href: "/guides/",
          text: "Tous les guides, outils et comparatifs au même endroit.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Mettez vos ampoules Hue sur un réseau ouvert",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Branchez une clé Zigbee et associez votre première ampoule Hue.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  de: {
    meta: {
      title: "Philips Hue ohne Bridge: Hue-Lampen per Zigbee koppeln",
      description:
        "Philips Hue ohne Bridge: Hue-Lampen per Zigbee2MQTT direkt mit einem Zigbee-Stick koppeln und lokal mit Gladys steuern. Was geht, was fehlt, wie du resettest.",
    },
    screenshotCaption:
      "Hue-Lampen, direkt per Zigbee gekoppelt, neben deinen übrigen Geräten in Gladys.",
    hero: {
      title: "Philips Hue ohne Bridge",
      subtitle:
        "Hue-Lampen sprechen Standard-Zigbee. Kopple sie mit einem Zigbee-USB-Stick und Gladys Assistant und steuere sie lokal, zusammen mit allen anderen Marken.",
      intro: [
        "Die Hue Bridge ist ein Zigbee-Hub. Jede Hue-Lampe, -Steckdose und jeder Hue-Schalter spricht mit ihr über Zigbee, dasselbe offene Protokoll, das auch IKEA, Aqara und Hunderte andere Marken nutzen. Die Bridge brauchst du also eigentlich gar nicht: Jeder Zigbee-Koordinator kann Hue-Lampen steuern.",
        "Gladys Assistant, eine kostenlose Open-Source-Plattform für dein Smart Home, installiert Zigbee2MQTT für dich. Kopple deine Hue-Lampen mit einem Zigbee-USB-Stick und steuere Ein/Aus, Helligkeit, Farbe und Weißtemperatur lokal, in denselben Szenen wie deine Sensoren und Geräte anderer Marken.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT-Einrichtungsanleitung",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Lieber die Bridge behalten →",
        href: "/docs/integrations/external/philips-hue/",
      },
    },
    problem: {
      title: "Warum auf die Hue Bridge verzichten",
      intro: "Die Bridge funktioniert gut, ist aber nicht immer die beste Wahl:",
      points: [
        "Sie ist eine weitere Box, die du kaufen und mit Strom versorgen musst, nur für eine einzige Marke.",
        "Die Hue-App und ihre Funktionen drehen sich um die Bridge (oder die neuere Bridge Pro) und um die Hue-Cloud für den Fernzugriff.",
        "Deine Hue-Lampen leben in ihrer eigenen App, getrennt von deinen Sensoren, Thermostaten und anderen Zigbee-Geräten.",
        "Jeder Zigbee-Hub betreibt sein eigenes Netz: Hue-Lampen, die mit deinem Hauptkoordinator gekoppelt sind, arbeiten zusätzlich als Zigbee-Router und stärken dein gesamtes Mesh.",
      ],
      outro:
        "Wenn du zu Hause schon Zigbee nutzt, ist es einfacher, deine Hue-Lampen ins selbe Netz zu holen, und das Netz wird dadurch stabiler.",
    },
    comparison: {
      title: "Hue mit Gladys und Zigbee2MQTT vs. mit der Hue Bridge",
      intro: "Beides läuft lokal. Der Unterschied liegt darin, was du rund um die Lampen bekommst:",
      cols: {
        feature: "",
        gladys: "Gladys + Zigbee2MQTT",
        other: "Hue Bridge + Hue-App",
      },
      rows: [
        { feature: "Ein/Aus, Helligkeit, Farbe, Weißtemperatur", gladys: "Ja", other: "Ja" },
        { feature: "Funktioniert ohne Internet", gladys: "Ja", other: "Ja, lokal" },
        {
          feature: "Andere Marken in denselben Szenen",
          gladys: "Jedes Zigbee-, Z-Wave-, Matter- oder WLAN-Gerät",
          other: "Hue-Geräte und Works-with-Hue-Partner",
        },
        { feature: "Hue Sync / Entertainment-Bereiche", gladys: "Nein", other: "Ja" },
        { feature: "Szenen und Effekte der Hue-App", gladys: "Nein, stattdessen Gladys-Szenen", other: "Ja" },
        { feature: "Firmware-Updates", gladys: "Ja, über Zigbee2MQTT (OTA)", other: "Ja, über die Hue-App" },
        { feature: "Zusätzliche Hardware", gladys: "Ein Zigbee-USB-Stick", other: "Die Hue Bridge" },
      ],
      outro:
        "Du willst Hue Sync mit deinem Fernseher oder die Effekte der Hue-App? Dann behalte die Bridge: Gladys kann deine Hue-Lampen über die Philips-Hue-Integration auch darüber steuern. Du willst ein einziges Zigbee-Netz für alles? Dann kopple sie direkt.",
    },
    features: {
      title: "Was du mit Hue-Lampen in Gladys bekommst",
      intro: "Einmal gekoppelt, wird jede Hue-Lampe zu einem Gladys-Gerät:",
      cards: [
        {
          icon: "💡",
          title: "Volle Lichtsteuerung",
          text: "Ein/Aus, Helligkeit, Farbe und Weißtemperatur, über das Dashboard oder eine Szene.",
        },
        {
          icon: "🎬",
          title: "Szenen mit allem",
          text: "Das Flurlicht einschalten, wenn ein Aqara-Bewegungsmelder auslöst, oder das Wohnzimmer dimmen, sobald der Fernseher angeht.",
        },
        {
          icon: "🕸️",
          title: "Ein stärkeres Zigbee-Mesh",
          text: "Netzbetriebene Hue-Lampen leiten den Zigbee-Verkehr deiner batteriebetriebenen Sensoren weiter.",
        },
        {
          icon: "🏠",
          title: "Lokal und privat",
          text: "Keine Cloud: Befehle gehen von Gladys über dein eigenes Zigbee-Netz direkt an die Lampe.",
        },
        {
          icon: "🌅",
          title: "Sonnenauf- und -untergang",
          text: "Licht passend zu Sonnenuntergang und Sonnenaufgang an deinem Standort planen, mit Zeitversatz.",
        },
        {
          icon: "🤖",
          title: "Sprache und KI",
          text: "Licht in natürlicher Sprache mit Gladys Plus steuern oder über den MCP-Server aus Claude heraus.",
        },
      ],
    },
    how: {
      title: "So koppelst du Hue-Lampen ohne Bridge",
      intro: "Auf einem Mini-PC oder einem Raspberry Pi mit Gladys:",
      points: [
        "Steck einen Zigbee-Koordinator in den Rechner und aktiviere Zigbee2MQTT in Gladys.",
        "War die Lampe mit einer Hue Bridge gekoppelt, lösche sie zuerst in der Hue-App oder setze sie auf Werkseinstellungen zurück.",
        "Möglichkeiten zum Zurücksetzen: ein Touchlink-Reset über die Zigbee2MQTT-Oberfläche, wobei die Lampe nur wenige Zentimeter vom Koordinator entfernt ist; ein Werksreset über die Hue-App bei Hue-Lampen mit Bluetooth; oder ein Hue Dimmschalter dicht an der Lampe, bei dem du die Ein- und Aus-Taste etwa 10 Sekunden gedrückt hältst.",
        "Öffne in Gladys Zigbee2MQTT → Erkennen, erlaube den Beitritt und schalte die Lampe ein: Sie erscheint mit ihren Funktionen.",
        "Ordne sie einem Raum zu, füge sie deinem Dashboard hinzu und nutze sie in deinen Szenen.",
      ],
      outro:
        "Hue Dimmschalter und Bewegungsmelder lassen sich genauso koppeln und können dann jede Gladys-Szene auslösen.",
    },
    solution: {
      title: "Hue-Qualität in einem offenen Zigbee-Netz",
      paragraphs: [
        "Hue baut hervorragende Lampen. Wenn du sie direkt mit deinem Zigbee-Koordinator koppelst, behältst du diese Qualität und sparst dir einen proprietären Hub und eine separate App.",
        "Gladys ist kostenlos und Open Source, wird seit 2013 entwickelt und läuft komplett auf deiner eigenen Hardware.",
      ],
      link: {
        label: "Alle Marken, die mit Gladys funktionieren →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Weitere Geräte ohne ihren Hub:",
      links: [
        {
          label: "Aqara-Sensoren ohne Hub",
          href: "/aqara-without-hub/",
          text: "Aqara-Zigbee-Sensoren lokal nutzen, ohne die Aqara-App.",
        },
        {
          label: "IKEA Smart Home",
          href: "/ikea-smart-home/",
          text: "Tradfri über Zigbee, DIRIGERA über Matter.",
        },
        {
          label: "Der beste Zigbee-USB-Stick",
          href: "/best-zigbee-dongle/",
          text: "Welchen Zigbee-Koordinator du kaufen solltest.",
        },
        {
          label: "Alle Ratgeber",
          href: "/guides/",
          text: "Alle Ratgeber, Tools und Vergleiche an einem Ort.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Hol deine Hue-Lampen in ein offenes Netz",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Zigbee-Stick einstecken und die erste Hue-Lampe koppeln.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT-Anleitung", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
  es: {
    meta: {
      title: "Philips Hue sin bridge: empareja bombillas Hue por Zigbee",
      description:
        "Usa bombillas Philips Hue sin el Hue Bridge: emparéjalas directamente con un dongle USB Zigbee mediante Zigbee2MQTT y contrólalas en local con Gladys Assistant. Qué funciona, qué pierdes y cómo resetear una bombilla Hue.",
    },
    screenshotCaption:
      "Bombillas Hue emparejadas directamente por Zigbee, junto al resto de tus dispositivos en Gladys.",
    hero: {
      title: "Philips Hue sin el bridge",
      subtitle:
        "Las bombillas Hue hablan Zigbee estándar. Emparéjalas con un dongle USB Zigbee y Gladys Assistant, y contrólalas en local, junto a cualquier otra marca.",
      intro: [
        "El Hue Bridge es un hub Zigbee. Cada bombilla, enchufe e interruptor Hue se comunica con él por Zigbee, el mismo protocolo abierto que usan IKEA, Aqara y cientos de marcas más. Eso significa que en realidad no necesitas el bridge: cualquier coordinador Zigbee puede controlar las luces Hue.",
        "Gladys Assistant, una plataforma domótica gratuita y de código abierto, instala Zigbee2MQTT por ti. Empareja tus bombillas Hue con un dongle USB Zigbee y controla en local el encendido/apagado, el brillo, el color y la temperatura del blanco, en las mismas escenas que tus sensores y dispositivos de otras marcas.",
      ],
      primaryCta: {
        label: "Guía de configuración de Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Prefiero conservar el bridge →",
        href: "/docs/integrations/external/philips-hue/",
      },
    },
    problem: {
      title: "Por qué prescindir del Hue Bridge",
      intro: "El bridge funciona bien, pero no siempre es la mejor opción:",
      points: [
        "Es una caja más que comprar y enchufar, para una sola marca.",
        "La app Hue y sus funciones giran en torno al bridge (o al más reciente Bridge Pro) y a la nube de Hue para el acceso remoto.",
        "Tus luces Hue viven en su propia app, separadas de tus sensores, termostatos y otros dispositivos Zigbee.",
        "Cada hub Zigbee gestiona su propia red: las bombillas Hue emparejadas con tu coordinador principal también actúan como routers Zigbee y refuerzan toda tu red mallada.",
      ],
      outro:
        "Si ya usas Zigbee en casa, poner tus bombillas Hue en la misma red es más sencillo y hace la red más robusta.",
    },
    comparison: {
      title: "Hue con Gladys y Zigbee2MQTT vs con el Hue Bridge",
      intro: "Ambas opciones son locales. La diferencia está en lo que obtienes alrededor de las luces:",
      cols: {
        feature: "",
        gladys: "Gladys + Zigbee2MQTT",
        other: "Hue Bridge + app Hue",
      },
      rows: [
        { feature: "Encendido/apagado, brillo, color, temperatura del blanco", gladys: "Sí", other: "Sí" },
        { feature: "Funciona sin internet", gladys: "Sí", other: "Sí, en local" },
        {
          feature: "Otras marcas en las mismas escenas",
          gladys: "Cualquier dispositivo Zigbee, Z-Wave, Matter o Wi-Fi",
          other: "Dispositivos Hue y socios Works with Hue",
        },
        { feature: "Hue Sync / áreas de entretenimiento", gladys: "No", other: "Sí" },
        { feature: "Escenas y efectos de la app Hue", gladys: "No, en su lugar escenas de Gladys", other: "Sí" },
        { feature: "Actualizaciones de firmware", gladys: "Sí, mediante Zigbee2MQTT (OTA)", other: "Sí, mediante la app Hue" },
        { feature: "Hardware adicional", gladys: "Un dongle USB Zigbee", other: "El Hue Bridge" },
      ],
      outro:
        "¿Quieres Hue Sync con tu televisor o los efectos de la app Hue? Conserva el bridge: Gladys puede controlar tus luces Hue a través de él con la integración Philips Hue. ¿Quieres una sola red Zigbee para todo? Emparéjalas directamente.",
    },
    features: {
      title: "Lo que obtienes con las bombillas Hue en Gladys",
      intro: "Una vez emparejada, cada luz Hue se convierte en un dispositivo de Gladys:",
      cards: [
        {
          icon: "💡",
          title: "Control total de la luz",
          text: "Encendido/apagado, brillo, color y temperatura de color del blanco, desde el panel o desde una escena.",
        },
        {
          icon: "🎬",
          title: "Escenas con todo",
          text: "Enciende las luces del pasillo cuando se activa un sensor de movimiento Aqara, o atenúa el salón cuando se enciende la tele.",
        },
        {
          icon: "🕸️",
          title: "Una red Zigbee más robusta",
          text: "Las bombillas Hue conectadas a la corriente enrutan el tráfico Zigbee de tus sensores a pilas.",
        },
        {
          icon: "🏠",
          title: "Local y privado",
          text: "Sin nube: los comandos van de Gladys a la bombilla por tu propia red Zigbee.",
        },
        {
          icon: "🌅",
          title: "Amanecer y atardecer",
          text: "Programa las luces según la puesta y la salida del sol, con un desfase, para tu ubicación.",
        },
        {
          icon: "🤖",
          title: "Voz e IA",
          text: "Controla las luces en lenguaje natural con Gladys Plus, o desde Claude mediante el servidor MCP.",
        },
      ],
    },
    how: {
      title: "Cómo emparejar bombillas Hue sin el bridge",
      intro: "En un mini-PC o una Raspberry Pi con Gladys:",
      points: [
        "Conecta un coordinador Zigbee a la máquina y activa Zigbee2MQTT en Gladys.",
        "Si la bombilla estaba emparejada con un Hue Bridge, elimínala primero de la app Hue o restablécela de fábrica.",
        "Opciones de reseteo: un reseteo Touchlink desde la interfaz de Zigbee2MQTT con la bombilla a pocos centímetros del coordinador; un restablecimiento de fábrica desde la app Hue para las bombillas Hue con Bluetooth; o un interruptor regulador Hue cerca de la bombilla, manteniendo pulsados los botones On y Off durante unos 10 segundos.",
        "En Gladys, abre Zigbee2MQTT → Descubrir, permite el emparejamiento y enciende la bombilla: aparecerá con sus funciones.",
        "Añádela a una habitación y a tu panel, y úsala en tus escenas.",
      ],
      outro:
        "Los interruptores reguladores y los sensores de movimiento Hue se emparejan de la misma forma y pueden activar cualquier escena de Gladys.",
    },
    solution: {
      title: "La calidad de Hue, una única red Zigbee abierta",
      paragraphs: [
        "Hue fabrica bombillas excelentes. Emparejarlas directamente con tu coordinador Zigbee mantiene esa calidad y elimina de tu instalación un hub propietario y una app aparte.",
        "Gladys es gratuito y de código abierto, se desarrolla desde 2013 y funciona íntegramente en tu propio hardware.",
      ],
      link: {
        label: "Mira todas las marcas compatibles con Gladys →",
        href: "/works-with/",
      },
    },
    related: {
      title: "Para ir más allá",
      intro: "Más dispositivos sin su hub:",
      links: [
        {
          label: "Sensores Aqara sin el hub",
          href: "/aqara-without-hub/",
          text: "Sensores Zigbee Aqara, en local, sin la app Aqara.",
        },
        {
          label: "Domótica IKEA",
          href: "/ikea-smart-home/",
          text: "Tradfri por Zigbee, DIRIGERA por Matter.",
        },
        {
          label: "El mejor dongle USB Zigbee",
          href: "/best-zigbee-dongle/",
          text: "Qué coordinador Zigbee comprar.",
        },
        {
          label: "Todas las guías",
          href: "/guides/",
          text: "Todas las guías, herramientas y comparativas en un solo lugar.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Pon tus bombillas Hue en una única red abierta",
      text: "Gladys es gratuito, de código abierto y se instala con un solo comando Docker. Conecta un dongle Zigbee y empareja tu primera bombilla Hue.",
      primary: { label: "Empezar", href: "/docs/" },
      secondary: { label: "Guía de Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
};

export const philipsHueWithoutBridgeFaqEn = [
  {
    question: "Can Philips Hue bulbs work without the bridge?",
    answer:
      "Yes. Hue bulbs are standard Zigbee lights, so any Zigbee coordinator can control them. With Gladys Assistant and a Zigbee USB dongle, Zigbee2MQTT pairs them directly and you control them locally, without a Hue Bridge.",
  },
  {
    question: "What do I lose without the Hue Bridge?",
    answer:
      "The Hue app and its scenes and effects, Hue Sync and Entertainment areas, and Hue's own remote and voice features. Basic control (on/off, brightness, color, white temperature) works fully, and Gladys replaces the app's automations with its own scenes.",
  },
  {
    question: "How do I reset a Hue bulb to pair it with Zigbee2MQTT?",
    answer:
      "Delete it from the Hue app if it was paired with a bridge. Then either run a Touchlink reset from the Zigbee2MQTT interface with the bulb close to the coordinator, or, for Bluetooth Hue bulbs, factory reset it from the Hue app. The bulb then joins when pairing is allowed.",
  },
  {
    question: "Can I keep the Hue Bridge and still use Gladys?",
    answer:
      "Yes. The Philips Hue integration connects Gladys to your bridge, so you keep the Hue app and Hue Sync while using your lights in Gladys scenes.",
  },
  {
    question: "Do Hue switches and motion sensors work without the bridge?",
    answer:
      "Yes, Hue dimmer switches and motion sensors are Zigbee devices supported by Zigbee2MQTT. Once paired, their buttons and motion events can trigger any Gladys scene.",
  },
];

export const philipsHueWithoutBridgeFaqFr = [
  {
    question: "Les ampoules Philips Hue fonctionnent-elles sans le pont ?",
    answer:
      "Oui. Les ampoules Hue sont des lumières Zigbee standards : n'importe quel coordinateur Zigbee peut les piloter. Avec Gladys Assistant et une clé Zigbee USB, Zigbee2MQTT les associe directement et vous les pilotez en local, sans pont Hue.",
  },
  {
    question: "Que perd-on sans le pont Hue ?",
    answer:
      "L'application Hue avec ses scènes et effets, Hue Sync et les zones de divertissement, et les fonctions à distance et vocales propres à Hue. Le contrôle de base (allumage, luminosité, couleur, température de blanc) fonctionne entièrement, et Gladys remplace les automatisations de l'application par ses propres scènes.",
  },
  {
    question: "Comment réinitialiser une ampoule Hue pour l'associer à Zigbee2MQTT ?",
    answer:
      "Supprimez-la de l'application Hue si elle était associée à un pont. Puis faites un reset Touchlink depuis l'interface de Zigbee2MQTT, ampoule près du coordinateur, ou, pour les ampoules Hue Bluetooth, réinitialisez-la depuis l'application Hue. L'ampoule rejoint ensuite le réseau quand l'association est autorisée.",
  },
  {
    question: "Puis-je garder le pont Hue et utiliser Gladys ?",
    answer:
      "Oui. L'intégration Philips Hue connecte Gladys à votre pont : vous gardez l'application Hue et Hue Sync tout en utilisant vos lumières dans les scènes Gladys.",
  },
  {
    question: "Les télécommandes et détecteurs Hue fonctionnent-ils sans le pont ?",
    answer:
      "Oui, les télécommandes Hue et les détecteurs de mouvement Hue sont des appareils Zigbee pris en charge par Zigbee2MQTT. Une fois associés, leurs boutons et détections peuvent déclencher n'importe quelle scène Gladys.",
  },
];

export const philipsHueWithoutBridgeFaqDe = [
  {
    question: "Funktionieren Philips-Hue-Lampen ohne Bridge?",
    answer:
      "Ja. Hue-Lampen sind Standard-Zigbee-Leuchten, jeder Zigbee-Koordinator kann sie also steuern. Mit Gladys Assistant und einem Zigbee-USB-Stick koppelt Zigbee2MQTT sie direkt, und du steuerst sie lokal, ohne Hue Bridge.",
  },
  {
    question: "Worauf verzichte ich ohne Hue Bridge?",
    answer:
      "Auf die Hue-App mit ihren Szenen und Effekten, auf Hue Sync und Entertainment-Bereiche sowie auf Hues eigene Fernzugriffs- und Sprachfunktionen. Die Grundsteuerung (Ein/Aus, Helligkeit, Farbe, Weißtemperatur) funktioniert vollständig, und Gladys ersetzt die Automationen der App durch eigene Szenen.",
  },
  {
    question: "Wie setze ich eine Hue-Lampe zurück, um sie mit Zigbee2MQTT zu koppeln?",
    answer:
      "Lösche sie in der Hue-App, falls sie mit einer Bridge gekoppelt war. Führe dann entweder einen Touchlink-Reset über die Zigbee2MQTT-Oberfläche aus, mit der Lampe nah am Koordinator, oder setze sie bei Hue-Lampen mit Bluetooth über die Hue-App auf Werkseinstellungen zurück. Die Lampe tritt dann bei, sobald die Kopplung erlaubt ist.",
  },
  {
    question: "Kann ich die Hue Bridge behalten und trotzdem Gladys nutzen?",
    answer:
      "Ja. Die Philips-Hue-Integration verbindet Gladys mit deiner Bridge, sodass du die Hue-App und Hue Sync behältst und deine Lampen trotzdem in Gladys-Szenen nutzt.",
  },
  {
    question: "Funktionieren Hue-Schalter und -Bewegungsmelder ohne Bridge?",
    answer:
      "Ja, Hue Dimmschalter und Bewegungsmelder sind Zigbee-Geräte, die Zigbee2MQTT unterstützt. Einmal gekoppelt, können ihre Tasten und Bewegungsereignisse jede Gladys-Szene auslösen.",
  },
];

export const philipsHueWithoutBridgeFaqEs = [
  {
    question: "¿Pueden funcionar las bombillas Philips Hue sin el bridge?",
    answer:
      "Sí. Las bombillas Hue son luces Zigbee estándar, así que cualquier coordinador Zigbee puede controlarlas. Con Gladys Assistant y un dongle USB Zigbee, Zigbee2MQTT las empareja directamente y las controlas en local, sin Hue Bridge.",
  },
  {
    question: "¿Qué pierdo sin el Hue Bridge?",
    answer:
      "La app Hue con sus escenas y efectos, Hue Sync y las áreas de entretenimiento, y las funciones de acceso remoto y de voz propias de Hue. El control básico (encendido/apagado, brillo, color, temperatura del blanco) funciona por completo, y Gladys sustituye las automatizaciones de la app por sus propias escenas.",
  },
  {
    question: "¿Cómo reseteo una bombilla Hue para emparejarla con Zigbee2MQTT?",
    answer:
      "Elimínala de la app Hue si estaba emparejada con un bridge. Después, haz un reseteo Touchlink desde la interfaz de Zigbee2MQTT con la bombilla cerca del coordinador o, en el caso de las bombillas Hue con Bluetooth, restablécela de fábrica desde la app Hue. La bombilla se unirá en cuanto se permita el emparejamiento.",
  },
  {
    question: "¿Puedo conservar el Hue Bridge y usar Gladys igualmente?",
    answer:
      "Sí. La integración Philips Hue conecta Gladys a tu bridge, así que conservas la app Hue y Hue Sync mientras usas tus luces en las escenas de Gladys.",
  },
  {
    question: "¿Funcionan los interruptores y sensores de movimiento Hue sin el bridge?",
    answer:
      "Sí, los interruptores reguladores y los sensores de movimiento Hue son dispositivos Zigbee compatibles con Zigbee2MQTT. Una vez emparejados, sus botones y eventos de movimiento pueden activar cualquier escena de Gladys.",
  },
];

export default philipsHueWithoutBridgeContent;
