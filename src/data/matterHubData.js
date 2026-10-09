// Content for the "Matter hub" landing page.
// Targets the "hub matter / matter hub / hub matter thread / hub compatible
// matter / passerelle matter thread / dongle matter" cluster (Search Console
// 12 months: ~6.5k impressions at position ~7, served today only by a forum
// thread). The angle: "hub Matter" actually covers three different jobs, and
// Gladys is the controller you can self-host instead of buying a box.

const matterHubContent = {
  en: {
    meta: {
      title: "Do You Need a Matter Hub? Controllers & Bridges (2026)",
      description:
        "Matter controller, Thread border router or Matter bridge: the word hub covers three different jobs. Here is which one you actually need, and how to run your Matter controller yourself with Gladys.",
    },
    hero: {
      title: "Which Matter hub do you actually need?",
      subtitle:
        "Controller, Thread border router, bridge: three different jobs hide behind the word hub. Here is how to tell them apart, and how to be your own Matter hub with Gladys.",
      intro: [
        "Matter promised the end of the smart home hub. In practice, shops still sell boxes labelled Matter hub, and every ecosystem wants you to buy its own. The confusion is understandable, because the word covers three jobs that have almost nothing to do with each other.",
        "Once you know which job you need, the answer is usually simpler and cheaper than a new box. And for the one job that really matters, controlling your devices, you can run it yourself, at home, on hardware you already own.",
      ],
      primaryCta: {
        label: "Use Gladys as your Matter controller",
        href: "/docs/integrations/matter/",
      },
      secondaryCta: { label: "Get started with Gladys →", href: "/docs/" },
    },
    jobs: {
      title: "The three things people call a Matter hub",
      intro:
        "Before buying anything, work out which of these three you are missing:",
      items: [
        {
          tag: "The one you need",
          name: "A Matter controller",
          text: "The software that pairs your Matter devices, holds their credentials and sends them commands. Apple Home, Google Home, Alexa and SmartThings are controllers, and so is Gladys, running on your own machine. You need exactly one to get started, and a device can be shared with several.",
        },
        {
          tag: "Required for Thread devices",
          name: "A Thread border router",
          text: "A bridge between the low-power Thread radio network and your home IP network. Only Thread devices need one, and Gladys is not one. Many homes already have one without knowing it, inside an Apple TV, a HomePod, a Nest Hub or an Echo. With Gladys today, that box also has to be a full Matter controller, because the first pairing of a Matter over Thread device happens over Bluetooth, which Gladys does not handle yet.",
        },
        {
          tag: "For older devices",
          name: "A Matter bridge",
          text: "A box or a piece of software that makes non-Matter devices look like Matter ones: a Philips Hue Bridge exposing its Zigbee bulbs, an IKEA DIRIGERA exposing its own range, or the open-source Matterbridge project exposing almost anything else.",
        },
      ],
      outro:
        "Most people asking for a Matter hub are looking for the first one, a controller. If their devices are on Wi-Fi or Ethernet, they can skip buying hardware entirely. Thread is the one case where a box is still required.",
    },
    decision: {
      title: "Do you need to buy a hub at all?",
      intro: "Look at what your devices use to communicate:",
      points: [
        "Matter over Wi-Fi or Ethernet: no hub to buy. The device is already on your network, and Gladys pairs with it directly using its 11-digit code. This covers most Matter plugs, bulbs, and every manufacturer bridge.",
        "Matter over Thread: you need a Thread border router on your network, and with Gladys today it has to be a full Matter controller such as an Apple TV, a Matter compatible Echo or a Google Nest device. The first pairing of a Thread device goes over Bluetooth, which Gladys does not handle yet: you pair the device there, then share it with Gladys with a new pairing code. Check the Apple, Google and Amazon devices you already own before buying anything.",
        "Zigbee or Z-Wave devices: Matter is not involved at all. These need their own coordinator, which with Gladys means a USB Zigbee dongle and Zigbee2MQTT, not a Matter hub.",
        "Cloud-only devices, such as Somfy io or many older brands: no hub will make them speak Matter. An integration talking to their cloud is the way in, and Gladys often has one: Somfy TaHoma, TaHoma Switch and Connexoon go through the Overkiz external integration, for instance.",
      ],
      outro:
        "If you own a Matter device today and it is on Wi-Fi or Ethernet, you can add it to Gladys in the next ten minutes without buying anything.",
    },
    comparison: {
      title: "Matter hubs compared",
      intro:
        "What each of the usual options actually gives you, and what it costs you in return:",
      table: {
        headers: ["Hub", "Controller", "Thread router", "Runs locally"],
        rows: [
          [
            "Gladys on your own machine",
            "Yes",
            "No, Thread needs another controller",
            "Yes, entirely",
          ],
          ["Apple TV 4K / HomePod", "Yes", "Yes", "Mostly, Apple account"],
          ["Google Nest Hub / TV Streamer", "Yes", "Yes", "Partly, Google account"],
          ["Amazon Echo (4th gen and later)", "Yes", "Yes", "Partly, Amazon account"],
          ["SmartThings hub", "Yes", "Yes", "Partly, Samsung account"],
          ["Philips Hue Bridge / IKEA DIRIGERA", "No, bridge only", "Varies", "Yes for the bridge"],
        ],
      },
      outro:
        "The commercial hubs are good Thread border routers, and today they are also how a Thread device gets paired in the first place, since Gladys is not a border router and does not yet do the Bluetooth pairing that Matter over Thread requires. What they are not is a neutral place to build your automations: each one keeps your devices inside its own ecosystem and its own account. That is the job Gladys takes over, and thanks to multi-admin you can leave a Thread device paired to the box and still drive it entirely from Gladys.",
    },
    gladys: {
      title: "Gladys as your Matter hub",
      paragraphs: [
        "Gladys Assistant is a Matter controller that runs on your own hardware: a Raspberry Pi, a mini-PC or a NAS. You enable Matter in the integration settings, enter the 11-digit pairing code of your device, and it appears in Gladys, ready to be placed on a dashboard or used in a scene.",
        "From there, control is local. Commands go from your Gladys to your device on your own network, with no ecosystem account in between and no cloud round trip. Your Matter lights, plugs, shutters, thermostats and sensors sit next to your Zigbee devices and your cameras, in one interface.",
        "Two practical points. Matter runs on IPv6, so IPv6 must be enabled on your machine and your router. And if a device is already paired with another controller, Apple Home for instance, you pair Gladys with a new code generated by that controller rather than the code printed on the box.",
        "One limit worth stating plainly: Gladys is not a Thread border router, and it does not yet handle the Bluetooth pairing a Matter over Thread device needs. Those devices are still added through a full Matter controller, an Apple TV, a Matter compatible Echo or a Google Nest device, and then shared with Gladys. Everything else, Matter over Wi-Fi, Matter over Ethernet and manufacturer bridges, works with Gladys alone.",
      ],
      link: {
        label: "Read the Matter integration guide →",
        href: "/docs/integrations/matter/",
      },
    },
    related: {
      title: "Go further",
      intro: "Matter is one piece of a local smart home:",
      links: [
        {
          label: "Matter integration guide",
          href: "/docs/integrations/matter/",
          text: "Enable Matter in Gladys, pair a device and use it in your scenes.",
        },
        {
          label: "Matterbridge",
          href: "/docs/integrations/matterbridge/",
          text: "Expose devices that are not Matter compatible as Matter devices.",
        },
        {
          label: "Zigbee vs Matter vs Z-Wave",
          href: "/zigbee-vs-matter-vs-zwave/",
          text: "Which wireless standard to choose for the devices you buy next.",
        },
        {
          label: "Best Zigbee dongle",
          href: "/best-zigbee-dongle/",
          text: "For your Zigbee devices, the coordinator to plug into your server.",
        },
        {
          label: "IKEA smart home",
          href: "/ikea-smart-home/",
          text: "Use IKEA devices locally, over Zigbee2MQTT or through Matter.",
        },
        {
          label: "Build a local smart home",
          href: "/local-smart-home/",
          text: "Why local-first matters, and how to build a home that runs without the cloud.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Be your own Matter hub",
      text: "Gladys is free, open-source and self-hosted. Install it on a Raspberry Pi or a mini-PC, enable Matter, and control your devices locally, without an ecosystem account.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Set up Matter", href: "/docs/integrations/matter/" },
    },
  },

  fr: {
    meta: {
      title: "Quel hub Matter choisir ? (guide 2026)",
      description:
        "Contrôleur Matter, routeur de bordure Thread ou pont Matter : le mot hub recouvre trois rôles différents. Voici celui dont vous avez vraiment besoin, et comment héberger votre contrôleur Matter vous-même avec Gladys.",
    },
    hero: {
      title: "Quel hub Matter vous faut-il vraiment ?",
      subtitle:
        "Contrôleur, routeur de bordure Thread, pont : trois rôles différents se cachent derrière le mot hub. Voici comment les distinguer, et comment être votre propre hub Matter avec Gladys.",
      intro: [
        "Matter promettait la fin des box domotiques. Dans les faits, les boutiques vendent toujours des boîtiers étiquetés hub Matter, et chaque écosystème veut vous vendre le sien. La confusion est compréhensible, car le mot recouvre trois rôles qui n'ont presque rien à voir entre eux.",
        "Une fois que vous savez lequel il vous manque, la réponse est en général plus simple et moins chère qu'un nouveau boîtier. Et pour le seul rôle qui compte vraiment, le pilotage de vos appareils, vous pouvez l'héberger vous-même, chez vous, sur du matériel que vous avez déjà.",
      ],
      primaryCta: {
        label: "Utiliser Gladys comme contrôleur Matter",
        href: "/fr/docs/integrations/matter/",
      },
      secondaryCta: { label: "Commencer avec Gladys →", href: "/fr/docs/" },
    },
    jobs: {
      title: "Les trois choses qu'on appelle un hub Matter",
      intro:
        "Avant d'acheter quoi que ce soit, déterminez lequel de ces trois rôles vous manque :",
      items: [
        {
          tag: "Celui dont vous avez besoin",
          name: "Un contrôleur Matter",
          text: "Le logiciel qui appaire vos appareils Matter, conserve leurs identifiants et leur envoie des commandes. Apple Home, Google Home, Alexa et SmartThings sont des contrôleurs, et Gladys aussi, sur votre propre machine. Il en faut exactement un pour démarrer, et un appareil peut être partagé entre plusieurs.",
        },
        {
          tag: "Indispensable pour le Thread",
          name: "Un routeur de bordure Thread",
          text: "Une passerelle entre le réseau radio basse consommation Thread et votre réseau IP domestique. Seuls les appareils Thread en ont besoin, et Gladys n'en est pas un. Beaucoup de foyers en ont déjà un sans le savoir, dans une Apple TV, un HomePod, un Nest Hub ou une Echo. Avec Gladys aujourd'hui, ce boîtier doit aussi être un contrôleur Matter complet : le premier appairage d'un appareil Matter over Thread passe par le Bluetooth, que Gladys ne gère pas encore.",
        },
        {
          tag: "Pour les appareils plus anciens",
          name: "Un pont Matter",
          text: "Un boîtier ou un logiciel qui fait passer des appareils non-Matter pour des appareils Matter : un pont Philips Hue qui expose ses ampoules Zigbee, un IKEA DIRIGERA qui expose sa gamme, ou le projet open source Matterbridge qui expose à peu près tout le reste.",
        },
      ],
      outro:
        "La plupart des gens qui cherchent un hub Matter cherchent en fait le premier, un contrôleur. Si leurs appareils sont en Wi-Fi ou en Ethernet, ils peuvent se passer complètement d'un achat de matériel. Le Thread est le seul cas où un boîtier reste nécessaire.",
    },
    decision: {
      title: "Avez-vous vraiment besoin d'acheter un hub ?",
      intro: "Regardez ce que vos appareils utilisent pour communiquer :",
      points: [
        "Matter en Wi-Fi ou Ethernet : aucun hub à acheter. L'appareil est déjà sur votre réseau, et Gladys s'y appaire directement avec son code à 11 chiffres. C'est le cas de la plupart des prises et ampoules Matter, et de tous les ponts de fabricants.",
        "Matter en Thread : il vous faut un routeur de bordure Thread sur votre réseau, et avec Gladys aujourd'hui ce doit être un contrôleur Matter complet, comme une Apple TV, une Echo compatible Matter ou un appareil Google Nest. Le premier appairage d'un appareil Thread passe par le Bluetooth, que Gladys ne gère pas encore : vous appairez l'appareil sur ce contrôleur, puis vous le partagez avec Gladys grâce à un nouveau code d'appairage. Vérifiez les appareils Apple, Google et Amazon que vous possédez déjà avant d'acheter.",
        "Appareils Zigbee ou Z-Wave : Matter n'entre pas en jeu. Ils ont besoin de leur propre coordinateur, ce qui avec Gladys signifie une clé USB Zigbee et Zigbee2MQTT, pas un hub Matter.",
        "Appareils uniquement cloud, comme le Somfy io ou beaucoup de marques plus anciennes : aucun hub ne les fera parler Matter. C'est une intégration qui parle à leur cloud qui vous ouvre la porte, et Gladys en a souvent une : les box Somfy TaHoma, TaHoma Switch et Connexoon passent par exemple par l'intégration externe Overkiz.",
      ],
      outro:
        "Si vous possédez déjà un appareil Matter et qu'il est en Wi-Fi ou en Ethernet, vous pouvez l'ajouter à Gladys dans les dix minutes, sans rien acheter.",
    },
    comparison: {
      title: "Les hubs Matter comparés",
      intro:
        "Ce que chaque option habituelle vous apporte réellement, et ce qu'elle vous coûte en retour :",
      table: {
        headers: ["Hub", "Contrôleur", "Routeur Thread", "Fonctionne en local"],
        rows: [
          [
            "Gladys sur votre machine",
            "Oui",
            "Non, le Thread passe par un autre contrôleur",
            "Oui, entièrement",
          ],
          ["Apple TV 4K / HomePod", "Oui", "Oui", "En grande partie, compte Apple"],
          [
            "Google Nest Hub / TV Streamer",
            "Oui",
            "Oui",
            "En partie, compte Google",
          ],
          [
            "Amazon Echo (4e génération et plus)",
            "Oui",
            "Oui",
            "En partie, compte Amazon",
          ],
          ["Box SmartThings", "Oui", "Oui", "En partie, compte Samsung"],
          [
            "Pont Philips Hue / IKEA DIRIGERA",
            "Non, pont uniquement",
            "Variable",
            "Oui pour le pont",
          ],
        ],
      },
      outro:
        "Les hubs du commerce sont de bons routeurs de bordure Thread, et c'est aussi par eux qu'un appareil Thread se fait appairer aujourd'hui, puisque Gladys n'est pas un routeur de bordure et ne gère pas encore l'appairage Bluetooth qu'exige le Matter over Thread. Ce qu'ils ne sont pas, c'est un endroit neutre où bâtir vos automatisations : chacun garde vos appareils dans son écosystème et son compte. C'est ce rôle que Gladys reprend, et grâce au multi-admin vous pouvez laisser l'appareil Thread appairé au boîtier tout en le pilotant entièrement depuis Gladys.",
    },
    gladys: {
      title: "Gladys comme hub Matter",
      paragraphs: [
        "Gladys Assistant est un contrôleur Matter qui tourne sur votre propre matériel : un Raspberry Pi, un mini-PC ou un NAS. Vous activez Matter dans les paramètres de l'intégration, vous saisissez le code d'appairage à 11 chiffres de votre appareil, et il apparaît dans Gladys, prêt à être posé sur un tableau de bord ou utilisé dans une scène.",
        "À partir de là, le pilotage est local. Les commandes vont de votre Gladys à votre appareil sur votre propre réseau, sans compte d'écosystème au milieu et sans aller-retour par le cloud. Vos lumières, prises, volets, thermostats et capteurs Matter côtoient vos appareils Zigbee et vos caméras, dans une seule interface.",
        "Deux points pratiques. Matter fonctionne en IPv6 : l'IPv6 doit donc être activé sur votre machine et sur votre box. Et si un appareil est déjà appairé à un autre contrôleur, Apple Home par exemple, vous appairez Gladys avec un nouveau code généré par ce contrôleur, et non avec le code imprimé sur la boîte.",
        "Une limite qu'il vaut mieux dire clairement : Gladys n'est pas un routeur de bordure Thread, et elle ne gère pas encore l'appairage Bluetooth dont a besoin un appareil Matter over Thread. Ces appareils passent donc toujours par un contrôleur Matter complet, une Apple TV, une Echo compatible Matter ou un appareil Google Nest, avant d'être partagés avec Gladys. Tout le reste, le Matter en Wi-Fi, en Ethernet et les ponts de fabricants, fonctionne avec Gladys seule.",
      ],
      link: {
        label: "Lire le guide de l'intégration Matter →",
        href: "/fr/docs/integrations/matter/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Matter n'est qu'une pièce d'une maison connectée locale :",
      links: [
        {
          label: "Guide de l'intégration Matter",
          href: "/fr/docs/integrations/matter/",
          text: "Activer Matter dans Gladys, appairer un appareil et l'utiliser dans vos scènes.",
        },
        {
          label: "Matterbridge",
          href: "/fr/docs/integrations/matterbridge/",
          text: "Exposer en Matter des appareils qui ne sont pas compatibles Matter.",
        },
        {
          label: "Intégration Overkiz",
          href: "/fr/docs/integrations/external/overkiz/",
          text: "Piloter vos volets TaHoma, TaHoma Switch et Connexoon dans Gladys.",
        },
        {
          label: "Quelle clé Zigbee choisir",
          href: "/fr/best-zigbee-dongle/",
          text: "Pour vos appareils Zigbee, le coordinateur à brancher sur votre serveur.",
        },
        {
          label: "Maison connectée IKEA",
          href: "/fr/ikea-smart-home/",
          text: "Utiliser vos appareils IKEA en local, via Zigbee2MQTT ou via Matter.",
        },
        {
          label: "Créer une maison connectée locale",
          href: "/fr/local-smart-home/",
          text: "Pourquoi le local d'abord compte, et comment bâtir une maison sans le cloud.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Devenez votre propre hub Matter",
      text: "Gladys est gratuite, open source et auto-hébergée. Installez-la sur un Raspberry Pi ou un mini-PC, activez Matter, et pilotez vos appareils en local, sans compte d'écosystème.",
      primary: { label: "Commencer", href: "/fr/docs/" },
      secondary: {
        label: "Configurer Matter",
        href: "/fr/docs/integrations/matter/",
      },
    },
  },

  de: {
    meta: {
      title: "Matter-Hub: Brauchst du einen? Controller & Bridges (2026)",
      description:
        "Matter-Controller, Thread-Border-Router oder Matter-Bridge: Welchen Matter-Hub du wirklich brauchst – und wie du ihn mit Gladys selbst betreibst.",
    },
    hero: {
      title: "Welchen Matter-Hub brauchst du wirklich?",
      subtitle:
        "Controller, Thread-Border-Router, Bridge: Hinter dem Wort „Hub“ verstecken sich drei verschiedene Aufgaben. So unterscheidest du sie – und so wirst du mit Gladys dein eigener Matter-Hub.",
      intro: [
        "Matter sollte das Ende des Smart-Home-Hubs einläuten. In der Praxis verkaufen Händler weiterhin Boxen mit der Aufschrift „Matter-Hub“, und jedes Ökosystem will, dass du seine eigene kaufst. Die Verwirrung ist verständlich, denn der Begriff steht für drei Aufgaben, die fast nichts miteinander zu tun haben.",
        "Sobald du weißt, welche davon du brauchst, ist die Lösung meist einfacher und günstiger als eine neue Box. Und die eine Aufgabe, auf die es wirklich ankommt – deine Geräte zu steuern –, kannst du selbst übernehmen: bei dir zu Hause, auf Hardware, die du schon besitzt.",
      ],
      primaryCta: {
        label: "Gladys als Matter-Controller nutzen",
        href: "/de/docs/integrations/matter/",
      },
      secondaryCta: { label: "Mit Gladys starten →", href: "/de/docs/" },
    },
    jobs: {
      title: "Die drei Dinge, die man „Matter-Hub“ nennt",
      intro:
        "Bevor du etwas kaufst, finde heraus, welches dieser drei dir fehlt:",
      items: [
        {
          tag: "Den brauchst du",
          name: "Ein Matter-Controller",
          text: "Die Software, die deine Matter-Geräte koppelt, ihre Zugangsdaten verwaltet und ihnen Befehle schickt. Apple Home, Google Home, Alexa und SmartThings sind Controller – und Gladys auf deinem eigenen Rechner ebenfalls. Für den Einstieg brauchst du genau einen, und ein Gerät lässt sich mit mehreren teilen.",
        },
        {
          tag: "Pflicht für Thread-Geräte",
          name: "Ein Thread-Border-Router",
          text: "Eine Brücke zwischen dem stromsparenden Thread-Funknetz und deinem IP-Heimnetz. Nur Thread-Geräte brauchen einen, und Gladys ist keiner. Viele Haushalte haben bereits einen, ohne es zu wissen – in einem Apple TV, einem HomePod, einem Nest Hub oder einem Echo. Mit Gladys muss diese Box derzeit außerdem ein vollwertiger Matter-Controller sein, denn die erste Kopplung eines Matter-over-Thread-Geräts läuft über Bluetooth, und das unterstützt Gladys noch nicht.",
        },
        {
          tag: "Für ältere Geräte",
          name: "Eine Matter-Bridge",
          text: "Eine Box oder Software, die Nicht-Matter-Geräte wie Matter-Geräte aussehen lässt: eine Philips Hue Bridge, die ihre Zigbee-Lampen bereitstellt, ein IKEA DIRIGERA für das eigene Sortiment oder das Open-Source-Projekt Matterbridge für fast alles andere.",
        },
      ],
      outro:
        "Die meisten, die nach einem Matter-Hub suchen, meinen eigentlich das Erste: einen Controller. Sind ihre Geräte per WLAN oder Ethernet verbunden, müssen sie gar keine Hardware kaufen. Thread ist der einzige Fall, in dem noch eine Box nötig ist.",
    },
    decision: {
      title: "Musst du überhaupt einen Hub kaufen?",
      intro: "Schau dir an, worüber deine Geräte kommunizieren:",
      points: [
        "Matter over WLAN oder Ethernet: kein Hub nötig. Das Gerät ist bereits in deinem Netzwerk, und Gladys koppelt es direkt mit seinem 11-stelligen Code. Das betrifft die meisten Matter-Steckdosen und -Lampen sowie alle Hersteller-Bridges.",
        "Matter over Thread: Du brauchst einen Thread-Border-Router in deinem Netzwerk, und mit Gladys muss das derzeit ein vollwertiger Matter-Controller sein, etwa ein Apple TV, ein Matter-fähiger Echo oder ein Google-Nest-Gerät. Die erste Kopplung eines Thread-Geräts läuft über Bluetooth, was Gladys noch nicht unterstützt: Du koppelst das Gerät dort und teilst es dann mit einem neuen Kopplungscode mit Gladys. Prüf erst die Apple-, Google- und Amazon-Geräte, die du schon hast, bevor du etwas kaufst.",
        "Zigbee- oder Z-Wave-Geräte: Matter spielt hier keine Rolle. Sie brauchen ihren eigenen Koordinator – mit Gladys also einen Zigbee-USB-Stick und Zigbee2MQTT, keinen Matter-Hub.",
        "Reine Cloud-Geräte wie Somfy io oder viele ältere Marken: Kein Hub bringt sie dazu, Matter zu sprechen. Der Weg führt über eine Integration, die mit ihrer Cloud kommuniziert, und Gladys hat oft eine: Somfy TaHoma, TaHoma Switch und Connexoon laufen zum Beispiel über die externe Overkiz-Integration.",
      ],
      outro:
        "Wenn du heute ein Matter-Gerät mit WLAN oder Ethernet hast, kannst du es in den nächsten zehn Minuten zu Gladys hinzufügen – ganz ohne neue Hardware.",
    },
    comparison: {
      title: "Matter-Hubs im Vergleich",
      intro:
        "Was die üblichen Optionen dir tatsächlich bieten – und was sie dich im Gegenzug kosten:",
      table: {
        headers: ["Hub", "Controller", "Thread-Router", "Läuft lokal"],
        rows: [
          [
            "Gladys auf deinem eigenen Rechner",
            "Ja",
            "Nein, Thread braucht einen weiteren Controller",
            "Ja, vollständig",
          ],
          ["Apple TV 4K / HomePod", "Ja", "Ja", "Größtenteils, Apple-Konto"],
          ["Google Nest Hub / TV Streamer", "Ja", "Ja", "Teilweise, Google-Konto"],
          ["Amazon Echo (ab 4. Generation)", "Ja", "Ja", "Teilweise, Amazon-Konto"],
          ["SmartThings Hub", "Ja", "Ja", "Teilweise, Samsung-Konto"],
          ["Philips Hue Bridge / IKEA DIRIGERA", "Nein, nur Bridge", "Je nach Modell", "Ja, für die Bridge"],
        ],
      },
      outro:
        "Die kommerziellen Hubs sind gute Thread-Border-Router, und über sie wird ein Thread-Gerät derzeit auch erstmals gekoppelt – denn Gladys ist kein Border-Router und beherrscht die Bluetooth-Kopplung, die Matter over Thread voraussetzt, noch nicht. Was sie nicht sind: ein neutraler Ort für deine Automatisierungen. Jeder hält deine Geräte in seinem eigenen Ökosystem und hinter seinem eigenen Konto. Genau diese Aufgabe übernimmt Gladys – und dank Multi-Admin kannst du ein Thread-Gerät mit der Box gekoppelt lassen und es trotzdem komplett über Gladys steuern.",
    },
    gladys: {
      title: "Gladys als dein Matter-Hub",
      paragraphs: [
        "Gladys Assistant ist ein Matter-Controller, der auf deiner eigenen Hardware läuft: einem Raspberry Pi, einem Mini-PC oder einem NAS. Du aktivierst Matter in den Einstellungen der Integration, gibst den 11-stelligen Kopplungscode deines Geräts ein, und schon erscheint es in Gladys – bereit für dein Dashboard oder eine Szene.",
        "Ab dann läuft die Steuerung lokal. Befehle gehen direkt von deinem Gladys an dein Gerät in deinem eigenen Netzwerk, ohne Ökosystem-Konto dazwischen und ohne Umweg über die Cloud. Deine Matter-Lampen, -Steckdosen, -Rollläden, -Thermostate und -Sensoren stehen neben deinen Zigbee-Geräten und Kameras in einer einzigen Oberfläche.",
        "Zwei praktische Hinweise: Matter läuft über IPv6, also muss IPv6 auf deinem Rechner und deinem Router aktiviert sein. Und wenn ein Gerät bereits mit einem anderen Controller gekoppelt ist, etwa Apple Home, koppelst du Gladys mit einem neuen Code, den dieser Controller erzeugt – nicht mit dem Code auf der Verpackung.",
        "Eine Einschränkung, die wir klar benennen: Gladys ist kein Thread-Border-Router und beherrscht die Bluetooth-Kopplung, die ein Matter-over-Thread-Gerät braucht, noch nicht. Solche Geräte fügst du weiterhin über einen vollwertigen Matter-Controller hinzu – ein Apple TV, einen Matter-fähigen Echo oder ein Google-Nest-Gerät – und teilst sie dann mit Gladys. Alles andere, also Matter over WLAN, Matter over Ethernet und Hersteller-Bridges, funktioniert mit Gladys allein.",
      ],
      link: {
        label: "Zur Anleitung für die Matter-Integration →",
        href: "/de/docs/integrations/matter/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Matter ist ein Baustein eines lokalen Smart Home:",
      links: [
        {
          label: "Anleitung zur Matter-Integration",
          href: "/de/docs/integrations/matter/",
          text: "Matter in Gladys aktivieren, ein Gerät koppeln und es in deinen Szenen nutzen.",
        },
        {
          label: "Matterbridge",
          href: "/de/docs/integrations/matterbridge/",
          text: "Geräte ohne Matter-Unterstützung als Matter-Geräte bereitstellen.",
        },
        {
          label: "Zigbee vs. Matter vs. Z-Wave",
          href: "/de/zigbee-vs-matter-vs-zwave/",
          text: "Welchen Funkstandard du für deine nächsten Geräte wählen solltest.",
        },
        {
          label: "Der beste Zigbee-Stick",
          href: "/de/best-zigbee-dongle/",
          text: "Für deine Zigbee-Geräte: der passende Koordinator für deinen Server.",
        },
        {
          label: "IKEA Smart Home",
          href: "/de/ikea-smart-home/",
          text: "IKEA-Geräte lokal nutzen, über Zigbee2MQTT oder über Matter.",
        },
        {
          label: "Ein lokales Smart Home aufbauen",
          href: "/de/local-smart-home/",
          text: "Warum „lokal zuerst“ wichtig ist und wie du ein Zuhause baust, das ohne Cloud funktioniert.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Werde dein eigener Matter-Hub",
      text: "Gladys ist kostenlos, Open Source und selbst gehostet. Installiere es auf einem Raspberry Pi oder Mini-PC, aktiviere Matter und steuere deine Geräte lokal – ohne Ökosystem-Konto.",
      primary: { label: "Jetzt starten", href: "/de/docs/" },
      secondary: { label: "Matter einrichten", href: "/de/docs/integrations/matter/" },
    },
  },

  es: {
    meta: {
      title: "¿Necesitas un hub Matter? Controladores y puentes (2026)",
      description:
        "Controlador Matter, router de borde Thread o puente Matter: la palabra hub abarca tres funciones distintas. Descubre cuál necesitas de verdad y cómo gestionar tú mismo tu controlador Matter con Gladys.",
    },
    hero: {
      title: "¿Qué hub Matter necesitas de verdad?",
      subtitle:
        "Controlador, router de borde Thread, puente: detrás de la palabra \"hub\" se esconden tres funciones distintas. Así puedes distinguirlas y convertirte en tu propio hub Matter con Gladys.",
      intro: [
        "Matter prometía el fin de los hubs domóticos. En la práctica, las tiendas siguen vendiendo cajas con la etiqueta \"hub Matter\", y cada ecosistema quiere que compres la suya. La confusión es comprensible, porque la palabra abarca tres funciones que no tienen casi nada que ver entre sí.",
        "Una vez que sabes qué función necesitas, la respuesta suele ser más sencilla y más barata que una caja nueva. Y la única función que de verdad importa, controlar tus dispositivos, puedes asumirla tú mismo, en casa, con un hardware que ya tienes.",
      ],
      primaryCta: {
        label: "Usa Gladys como controlador Matter",
        href: "/es/docs/integrations/matter/",
      },
      secondaryCta: { label: "Empieza con Gladys →", href: "/es/docs/" },
    },
    jobs: {
      title: "Las tres cosas a las que se llama hub Matter",
      intro:
        "Antes de comprar nada, averigua cuál de estas tres te falta:",
      items: [
        {
          tag: "El que necesitas",
          name: "Un controlador Matter",
          text: "El software que empareja tus dispositivos Matter, guarda sus credenciales y les envía órdenes. Apple Home, Google Home, Alexa y SmartThings son controladores, y Gladys también, funcionando en tu propio equipo. Para empezar necesitas exactamente uno, y un dispositivo puede compartirse con varios.",
        },
        {
          tag: "Imprescindible para dispositivos Thread",
          name: "Un router de borde Thread",
          text: "Un puente entre la red de radio Thread de bajo consumo y la red IP de tu casa. Solo los dispositivos Thread lo necesitan, y Gladys no lo es. Muchos hogares ya tienen uno sin saberlo, dentro de un Apple TV, un HomePod, un Nest Hub o un Echo. Hoy en día, con Gladys, esa caja también tiene que ser un controlador Matter completo, porque el primer emparejamiento de un dispositivo Matter over Thread se hace por Bluetooth, algo que Gladys todavía no gestiona.",
        },
        {
          tag: "Para dispositivos más antiguos",
          name: "Un puente Matter",
          text: "Una caja o un software que hace que dispositivos no Matter parezcan dispositivos Matter: un Philips Hue Bridge que expone sus bombillas Zigbee, un IKEA DIRIGERA que expone su propia gama o el proyecto de código abierto Matterbridge, que expone casi todo lo demás.",
        },
      ],
      outro:
        "La mayoría de quienes buscan un hub Matter buscan en realidad lo primero, un controlador. Si sus dispositivos van por Wi-Fi o Ethernet, pueden ahorrarse por completo la compra de hardware. Thread es el único caso en el que todavía hace falta una caja.",
    },
    decision: {
      title: "¿De verdad necesitas comprar un hub?",
      intro: "Fíjate en cómo se comunican tus dispositivos:",
      points: [
        "Matter over Wi-Fi o Ethernet: no hay que comprar ningún hub. El dispositivo ya está en tu red y Gladys lo empareja directamente con su código de 11 dígitos. Esto incluye la mayoría de enchufes y bombillas Matter, y todos los puentes de fabricante.",
        "Matter over Thread: necesitas un router de borde Thread en tu red y, con Gladys hoy en día, tiene que ser un controlador Matter completo, como un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest. El primer emparejamiento de un dispositivo Thread se hace por Bluetooth, algo que Gladys todavía no gestiona: emparejas el dispositivo allí y luego lo compartes con Gladys mediante un nuevo código de emparejamiento. Revisa los dispositivos de Apple, Google y Amazon que ya tienes antes de comprar nada.",
        "Dispositivos Zigbee o Z-Wave: Matter no interviene en absoluto. Necesitan su propio coordinador, que con Gladys significa un dongle USB Zigbee y Zigbee2MQTT, no un hub Matter.",
        "Dispositivos que solo funcionan en la nube, como Somfy io o muchas marcas más antiguas: ningún hub hará que hablen Matter. La solución es una integración que se comunique con su nube, y Gladys suele tener una: Somfy TaHoma, TaHoma Switch y Connexoon pasan, por ejemplo, por la integración externa Overkiz.",
      ],
      outro:
        "Si hoy tienes un dispositivo Matter que va por Wi-Fi o Ethernet, puedes añadirlo a Gladys en los próximos diez minutos sin comprar nada.",
    },
    comparison: {
      title: "Comparativa de hubs Matter",
      intro:
        "Lo que te ofrece realmente cada una de las opciones habituales, y lo que te cuesta a cambio:",
      table: {
        headers: ["Hub", "Controlador", "Router Thread", "Funciona en local"],
        rows: [
          [
            "Gladys en tu propio equipo",
            "Sí",
            "No, Thread necesita otro controlador",
            "Sí, por completo",
          ],
          ["Apple TV 4K / HomePod", "Sí", "Sí", "En gran parte, cuenta de Apple"],
          ["Google Nest Hub / TV Streamer", "Sí", "Sí", "En parte, cuenta de Google"],
          ["Amazon Echo (4.ª generación y posteriores)", "Sí", "Sí", "En parte, cuenta de Amazon"],
          ["Hub SmartThings", "Sí", "Sí", "En parte, cuenta de Samsung"],
          ["Philips Hue Bridge / IKEA DIRIGERA", "No, solo puente", "Según el modelo", "Sí, para el puente"],
        ],
      },
      outro:
        "Los hubs comerciales son buenos routers de borde Thread y, hoy en día, también son la forma de emparejar por primera vez un dispositivo Thread, ya que Gladys no es un router de borde y todavía no hace el emparejamiento por Bluetooth que exige Matter over Thread. Lo que no son es un lugar neutral para construir tus automatizaciones: cada uno mantiene tus dispositivos dentro de su propio ecosistema y de su propia cuenta. Esa es la función que asume Gladys, y gracias al multiadministrador puedes dejar un dispositivo Thread emparejado con la caja y seguir controlándolo por completo desde Gladys.",
    },
    gladys: {
      title: "Gladys como tu hub Matter",
      paragraphs: [
        "Gladys Assistant es un controlador Matter que funciona en tu propio hardware: una Raspberry Pi, un mini-PC o un NAS. Activas Matter en los ajustes de la integración, introduces el código de emparejamiento de 11 dígitos de tu dispositivo y aparece en Gladys, listo para colocarlo en un panel o usarlo en una escena.",
        "A partir de ahí, el control es local. Las órdenes van de tu Gladys a tu dispositivo por tu propia red, sin ninguna cuenta de ecosistema de por medio y sin pasar por la nube. Tus luces, enchufes, persianas, termostatos y sensores Matter conviven con tus dispositivos Zigbee y tus cámaras en una sola interfaz.",
        "Dos detalles prácticos. Matter funciona sobre IPv6, así que IPv6 debe estar activado en tu equipo y en tu router. Y si un dispositivo ya está emparejado con otro controlador, Apple Home por ejemplo, emparejas Gladys con un nuevo código generado por ese controlador en lugar del código impreso en la caja.",
        "Un límite que conviene dejar claro: Gladys no es un router de borde Thread y todavía no gestiona el emparejamiento por Bluetooth que necesita un dispositivo Matter over Thread. Esos dispositivos se siguen añadiendo a través de un controlador Matter completo, un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest, y después se comparten con Gladys. Todo lo demás, Matter over Wi-Fi, Matter over Ethernet y los puentes de fabricante, funciona solo con Gladys.",
      ],
      link: {
        label: "Lee la guía de la integración Matter →",
        href: "/es/docs/integrations/matter/",
      },
    },
    related: {
      title: "Para ir más lejos",
      intro: "Matter es una pieza más de un hogar inteligente local:",
      links: [
        {
          label: "Guía de la integración Matter",
          href: "/es/docs/integrations/matter/",
          text: "Activa Matter en Gladys, empareja un dispositivo y úsalo en tus escenas.",
        },
        {
          label: "Matterbridge",
          href: "/es/docs/integrations/matterbridge/",
          text: "Expón como dispositivos Matter aquellos que no son compatibles con Matter.",
        },
        {
          label: "Zigbee vs Matter vs Z-Wave",
          href: "/es/zigbee-vs-matter-vs-zwave/",
          text: "Qué estándar inalámbrico elegir para los próximos dispositivos que compres.",
        },
        {
          label: "El mejor dongle Zigbee",
          href: "/es/best-zigbee-dongle/",
          text: "Para tus dispositivos Zigbee, el coordinador que conectar a tu servidor.",
        },
        {
          label: "Hogar inteligente con IKEA",
          href: "/es/ikea-smart-home/",
          text: "Usa los dispositivos de IKEA en local, con Zigbee2MQTT o a través de Matter.",
        },
        {
          label: "Crea un hogar inteligente local",
          href: "/es/local-smart-home/",
          text: "Por qué importa lo local primero y cómo construir una casa que funcione sin la nube.",
        },
      ],
    },
    faqTitle: "Preguntas frecuentes",
    cta: {
      title: "Conviértete en tu propio hub Matter",
      text: "Gladys es gratuito, de código abierto y autoalojado. Instálalo en una Raspberry Pi o un mini-PC, activa Matter y controla tus dispositivos en local, sin cuenta de ningún ecosistema.",
      primary: { label: "Empezar", href: "/es/docs/" },
      secondary: { label: "Configurar Matter", href: "/es/docs/integrations/matter/" },
    },
  },
};

export const matterHubFaqEn = [
  {
    question: "Do I need a Matter hub?",
    answer:
      "You need a Matter controller, which is software, not necessarily a box. Apple Home, Google Home, Alexa and SmartThings are controllers, and so is Gladys running on your own Raspberry Pi, mini-PC or NAS. For a Matter device on Wi-Fi or Ethernet, that is all you need and there is no hardware to buy. You only need a box if your devices use Thread: Matter over Thread requires a Thread border router, and with Gladys today that box also has to be a full Matter controller such as an Apple TV, a Matter compatible Echo or a Google Nest device, because the first pairing goes over Bluetooth and Gladys does not handle that yet.",
  },
  {
    question: "What is the difference between a Matter hub and a Thread border router?",
    answer:
      "A Matter controller pairs and controls your devices. A Thread border router connects the low-power Thread radio network to your home IP network. Commercial hubs usually do both, which is why the two get confused, but they are separate jobs: Matter devices on Wi-Fi or Ethernet need a controller and no border router at all. Gladys is a controller, not a border router.",
  },
  {
    question: "Which devices are Thread border routers?",
    answer:
      "Common ones include the Apple TV 4K (Ethernet model) and HomePod, the Google Nest Hub second generation, Nest Hub Max, Nest Wifi Pro and TV Streamer 4K, and the Amazon Echo fourth generation, Echo Hub, Echo Studio and Echo Show. You can also build one yourself with a USB Thread dongle and OpenThread, but be aware that a border router only routes traffic: it does not do the Bluetooth pairing a new Matter over Thread device needs, so with Gladys today you still go through one of the full controllers above.",
  },
  {
    question: "Can I use Matter without Apple, Google or Amazon?",
    answer:
      "For Matter over Wi-Fi and Ethernet, yes: Gladys Assistant is a Matter controller you host yourself, so you can pair and control those devices with no ecosystem account, and Gladys alone is enough. For Matter over Thread, not yet: Gladys is not a Thread border router and does not handle the Bluetooth pairing those devices require, so one of those boxes is still needed to bring the device onto your Thread network. Once it is paired there, you share it with Gladys and control it locally from Gladys.",
  },
  {
    question: "Do I need a Matter dongle?",
    answer:
      "No. Matter travels over your existing Wi-Fi and Ethernet network, so no USB dongle is involved. Dongles marketed as Matter or Thread coordinators contain a Thread radio, which only lets you build a Thread border router: it does not replace a Matter controller, since the Bluetooth pairing step for Matter over Thread is not something Gladys does yet. For Zigbee devices, you need a Zigbee dongle, which is a different thing entirely.",
  },
  {
    question: "Is the IKEA DIRIGERA a Matter hub?",
    answer:
      "The DIRIGERA acts as a Matter bridge: it exposes the IKEA devices paired to it as Matter devices, so a controller such as Gladys can see and control them over your network. It is not a general purpose controller for other brands, and IKEA devices can also be used directly over Zigbee2MQTT if you prefer to skip the hub.",
  },
  {
    question: "Can Gladys be my Matter hub?",
    answer:
      "Yes for Matter over Wi-Fi and Ethernet. Gladys is a Matter controller: enable Matter in the integration settings, enter the 11-digit pairing code of your device, and control it from your dashboard and your scenes. Matter runs on IPv6, so make sure IPv6 is enabled on your machine and your router. Gladys is not a Thread border router, and it does not yet do the Bluetooth pairing that Matter over Thread requires, so those devices are paired with a full Matter controller, an Apple TV, a Matter compatible Echo or a Google Nest device, and then shared with Gladys.",
  },
  {
    question: "Can a device be connected to two Matter hubs at once?",
    answer:
      "Yes, that is what Matter calls multi-admin. A device can be shared with several controllers at the same time. To add it to a second one, you ask the controller that already owns it to generate a new pairing code, and use that code rather than the one printed on the device.",
  },
];

export const matterHubFaqFr = [
  {
    question: "Ai-je besoin d'un hub Matter ?",
    answer:
      "Il vous faut un contrôleur Matter, qui est un logiciel, pas nécessairement un boîtier. Apple Home, Google Home, Alexa et SmartThings sont des contrôleurs, et Gladys aussi, sur votre propre Raspberry Pi, mini-PC ou NAS. Pour un appareil Matter en Wi-Fi ou en Ethernet, cela suffit et il n'y a aucun matériel à acheter. Vous n'avez besoin d'un boîtier que si vos appareils utilisent le Thread : le Matter over Thread exige un routeur de bordure Thread, et avec Gladys aujourd'hui ce boîtier doit aussi être un contrôleur Matter complet, comme une Apple TV, une Echo compatible Matter ou un appareil Google Nest, car le premier appairage passe par le Bluetooth, que Gladys ne gère pas encore.",
  },
  {
    question: "Quelle différence entre un hub Matter et un routeur de bordure Thread ?",
    answer:
      "Un contrôleur Matter appaire et pilote vos appareils. Un routeur de bordure Thread relie le réseau radio basse consommation Thread à votre réseau IP domestique. Les hubs du commerce font en général les deux, d'où la confusion, mais ce sont deux rôles distincts : les appareils Matter en Wi-Fi ou Ethernet ont besoin d'un contrôleur et d'aucun routeur de bordure. Gladys est un contrôleur, pas un routeur de bordure.",
  },
  {
    question: "Quels appareils sont des routeurs de bordure Thread ?",
    answer:
      "Parmi les plus courants : l'Apple TV 4K (modèle Ethernet) et le HomePod, les Google Nest Hub 2e génération, Nest Hub Max, Nest Wifi Pro et TV Streamer 4K, ainsi que les Amazon Echo 4e génération, Echo Hub, Echo Studio et Echo Show. Vous pouvez aussi en fabriquer un avec une clé USB Thread et OpenThread, mais sachez qu'un routeur de bordure ne fait que router le trafic : il n'assure pas l'appairage Bluetooth dont a besoin un nouvel appareil Matter over Thread, si bien qu'avec Gladys aujourd'hui vous passez toujours par l'un des contrôleurs complets ci-dessus.",
  },
  {
    question: "Peut-on utiliser Matter sans Apple, Google ni Amazon ?",
    answer:
      "Pour du Matter en Wi-Fi et en Ethernet, oui : Gladys Assistant est un contrôleur Matter que vous hébergez vous-même, vous pouvez appairer et piloter ces appareils sans aucun compte d'écosystème, et Gladys seule suffit. Pour du Matter over Thread, pas encore : Gladys n'est pas un routeur de bordure Thread et ne gère pas l'appairage Bluetooth qu'exigent ces appareils, il faut donc encore l'un de ces boîtiers pour faire entrer l'appareil sur votre réseau Thread. Une fois qu'il y est appairé, vous le partagez avec Gladys et vous le pilotez en local depuis Gladys.",
  },
  {
    question: "Faut-il un dongle Matter ?",
    answer:
      "Non. Matter circule sur votre réseau Wi-Fi et Ethernet existant : aucune clé USB n'entre en jeu. Les dongles vendus comme coordinateurs Matter ou Thread contiennent une radio Thread, qui permet seulement de fabriquer un routeur de bordure Thread : elle ne remplace pas un contrôleur Matter, puisque l'étape d'appairage Bluetooth du Matter over Thread n'est pas encore gérée par Gladys. Pour des appareils Zigbee, il vous faut une clé Zigbee, ce qui est tout autre chose.",
  },
  {
    question: "L'IKEA DIRIGERA est-il un hub Matter ?",
    answer:
      "Le DIRIGERA joue le rôle de pont Matter : il expose en Matter les appareils IKEA qui lui sont appairés, si bien qu'un contrôleur comme Gladys peut les voir et les piloter sur votre réseau. Ce n'est pas un contrôleur généraliste pour les autres marques, et les appareils IKEA peuvent aussi être utilisés directement via Zigbee2MQTT si vous préférez vous passer du hub.",
  },
  {
    question: "Gladys peut-elle être mon hub Matter ?",
    answer:
      "Oui pour le Matter en Wi-Fi et en Ethernet. Gladys est un contrôleur Matter : activez Matter dans les paramètres de l'intégration, saisissez le code d'appairage à 11 chiffres de votre appareil, et pilotez-le depuis votre tableau de bord et vos scènes. Matter fonctionne en IPv6 : vérifiez que l'IPv6 est activé sur votre machine et sur votre box. Gladys n'est pas un routeur de bordure Thread, et elle ne gère pas encore l'appairage Bluetooth qu'exige le Matter over Thread : ces appareils sont donc appairés sur un contrôleur Matter complet, une Apple TV, une Echo compatible Matter ou un appareil Google Nest, avant d'être partagés avec Gladys.",
  },
  {
    question: "Un appareil peut-il être connecté à deux hubs Matter à la fois ?",
    answer:
      "Oui, c'est ce que Matter appelle le multi-admin. Un appareil peut être partagé entre plusieurs contrôleurs en même temps. Pour l'ajouter à un second, vous demandez au contrôleur qui le possède déjà de générer un nouveau code d'appairage, et vous utilisez ce code plutôt que celui imprimé sur l'appareil.",
  },
];

export const matterHubFaqDe = [
  {
    question: "Brauche ich einen Matter-Hub?",
    answer:
      "Du brauchst einen Matter-Controller – und das ist Software, nicht unbedingt eine Box. Apple Home, Google Home, Alexa und SmartThings sind Controller, ebenso Gladys auf deinem eigenen Raspberry Pi, Mini-PC oder NAS. Für ein Matter-Gerät mit WLAN oder Ethernet reicht das völlig, du musst keine Hardware kaufen. Eine Box brauchst du nur, wenn deine Geräte Thread nutzen: Matter over Thread setzt einen Thread-Border-Router voraus, und mit Gladys muss diese Box derzeit auch ein vollwertiger Matter-Controller sein, etwa ein Apple TV, ein Matter-fähiger Echo oder ein Google-Nest-Gerät. Denn die erste Kopplung läuft über Bluetooth, und das unterstützt Gladys noch nicht.",
  },
  {
    question: "Was ist der Unterschied zwischen einem Matter-Hub und einem Thread-Border-Router?",
    answer:
      "Ein Matter-Controller koppelt und steuert deine Geräte. Ein Thread-Border-Router verbindet das stromsparende Thread-Funknetz mit deinem IP-Heimnetz. Kommerzielle Hubs erledigen meist beides, deshalb werden die beiden oft verwechselt – es sind aber getrennte Aufgaben: Matter-Geräte mit WLAN oder Ethernet brauchen einen Controller und überhaupt keinen Border-Router. Gladys ist ein Controller, kein Border-Router.",
  },
  {
    question: "Welche Geräte sind Thread-Border-Router?",
    answer:
      "Verbreitet sind unter anderem das Apple TV 4K (Ethernet-Modell) und der HomePod, der Google Nest Hub der zweiten Generation, Nest Hub Max, Nest Wifi Pro und TV Streamer 4K sowie der Amazon Echo der vierten Generation, Echo Hub, Echo Studio und Echo Show. Du kannst auch selbst einen mit einem USB-Thread-Stick und OpenThread bauen. Beachte aber: Ein Border-Router leitet nur Datenverkehr weiter, er übernimmt nicht die Bluetooth-Kopplung, die ein neues Matter-over-Thread-Gerät braucht. Mit Gladys führt der Weg derzeit also weiterhin über einen der oben genannten vollwertigen Controller.",
  },
  {
    question: "Kann ich Matter ohne Apple, Google oder Amazon nutzen?",
    answer:
      "Für Matter over WLAN und Ethernet: ja. Gladys Assistant ist ein Matter-Controller, den du selbst hostest – du kannst diese Geräte also ohne Ökosystem-Konto koppeln und steuern, und Gladys allein genügt. Für Matter over Thread: noch nicht. Gladys ist kein Thread-Border-Router und unterstützt die Bluetooth-Kopplung, die diese Geräte erfordern, nicht. Du brauchst also weiterhin eine dieser Boxen, um das Gerät in dein Thread-Netz zu bringen. Sobald es dort gekoppelt ist, teilst du es mit Gladys und steuerst es lokal über Gladys.",
  },
  {
    question: "Brauche ich einen Matter-Stick?",
    answer:
      "Nein. Matter läuft über dein bestehendes WLAN- und Ethernet-Netz, ein USB-Stick ist nicht nötig. Sticks, die als Matter- oder Thread-Koordinator vermarktet werden, enthalten ein Thread-Funkmodul, mit dem du lediglich einen Thread-Border-Router bauen kannst. Einen Matter-Controller ersetzen sie nicht, denn die Bluetooth-Kopplung für Matter over Thread übernimmt Gladys noch nicht. Für Zigbee-Geräte brauchst du einen Zigbee-Stick – das ist etwas völlig anderes.",
  },
  {
    question: "Ist der IKEA DIRIGERA ein Matter-Hub?",
    answer:
      "Der DIRIGERA fungiert als Matter-Bridge: Er stellt die mit ihm gekoppelten IKEA-Geräte als Matter-Geräte bereit, sodass ein Controller wie Gladys sie in deinem Netzwerk sehen und steuern kann. Er ist kein universeller Controller für andere Marken, und IKEA-Geräte lassen sich auch direkt über Zigbee2MQTT nutzen, wenn du auf den Hub verzichten möchtest.",
  },
  {
    question: "Kann Gladys mein Matter-Hub sein?",
    answer:
      "Ja, für Matter over WLAN und Ethernet. Gladys ist ein Matter-Controller: Aktiviere Matter in den Einstellungen der Integration, gib den 11-stelligen Kopplungscode deines Geräts ein und steuere es über dein Dashboard und deine Szenen. Matter läuft über IPv6, also achte darauf, dass IPv6 auf deinem Rechner und deinem Router aktiviert ist. Gladys ist kein Thread-Border-Router und beherrscht die Bluetooth-Kopplung für Matter over Thread noch nicht. Diese Geräte koppelst du daher mit einem vollwertigen Matter-Controller – einem Apple TV, einem Matter-fähigen Echo oder einem Google-Nest-Gerät – und teilst sie anschließend mit Gladys.",
  },
  {
    question: "Kann ein Gerät mit zwei Matter-Hubs gleichzeitig verbunden sein?",
    answer:
      "Ja, das nennt Matter Multi-Admin. Ein Gerät kann gleichzeitig mit mehreren Controllern geteilt werden. Um es zu einem zweiten hinzuzufügen, lässt du den Controller, mit dem es bereits verbunden ist, einen neuen Kopplungscode erzeugen, und verwendest diesen statt des Codes auf dem Gerät.",
  },
];

export const matterHubFaqEs = [
  {
    question: "¿Necesito un hub Matter?",
    answer:
      "Necesitas un controlador Matter, que es un software, no necesariamente una caja. Apple Home, Google Home, Alexa y SmartThings son controladores, y Gladys también, funcionando en tu propia Raspberry Pi, mini-PC o NAS. Para un dispositivo Matter que va por Wi-Fi o Ethernet, no necesitas nada más y no hay hardware que comprar. Solo necesitas una caja si tus dispositivos usan Thread: Matter over Thread requiere un router de borde Thread y, con Gladys hoy en día, esa caja también tiene que ser un controlador Matter completo, como un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest, porque el primer emparejamiento se hace por Bluetooth y Gladys todavía no lo gestiona.",
  },
  {
    question: "¿Qué diferencia hay entre un hub Matter y un router de borde Thread?",
    answer:
      "Un controlador Matter empareja y controla tus dispositivos. Un router de borde Thread conecta la red de radio Thread de bajo consumo con la red IP de tu casa. Los hubs comerciales suelen hacer ambas cosas, por eso se confunden, pero son funciones distintas: los dispositivos Matter por Wi-Fi o Ethernet necesitan un controlador y ningún router de borde. Gladys es un controlador, no un router de borde.",
  },
  {
    question: "¿Qué dispositivos son routers de borde Thread?",
    answer:
      "Entre los más habituales están el Apple TV 4K (modelo con Ethernet) y el HomePod, el Google Nest Hub de segunda generación, el Nest Hub Max, el Nest Wifi Pro y el TV Streamer 4K, así como el Amazon Echo de cuarta generación, el Echo Hub, el Echo Studio y el Echo Show. También puedes montar uno tú mismo con un dongle USB Thread y OpenThread, pero ten en cuenta que un router de borde solo enruta el tráfico: no hace el emparejamiento por Bluetooth que necesita un nuevo dispositivo Matter over Thread, así que con Gladys hoy en día sigues teniendo que pasar por uno de los controladores completos anteriores.",
  },
  {
    question: "¿Puedo usar Matter sin Apple, Google ni Amazon?",
    answer:
      "Para Matter over Wi-Fi y Ethernet, sí: Gladys Assistant es un controlador Matter que alojas tú mismo, así que puedes emparejar y controlar esos dispositivos sin ninguna cuenta de ecosistema, y Gladys basta por sí solo. Para Matter over Thread, todavía no: Gladys no es un router de borde Thread y no gestiona el emparejamiento por Bluetooth que requieren esos dispositivos, así que sigue haciendo falta una de esas cajas para incorporar el dispositivo a tu red Thread. Una vez emparejado allí, lo compartes con Gladys y lo controlas en local desde Gladys.",
  },
  {
    question: "¿Necesito un dongle Matter?",
    answer:
      "No. Matter circula por tu red Wi-Fi y Ethernet existente, así que no interviene ningún dongle USB. Los dongles que se venden como coordinadores Matter o Thread contienen una radio Thread, que solo te permite montar un router de borde Thread: no sustituye a un controlador Matter, ya que el paso de emparejamiento por Bluetooth de Matter over Thread es algo que Gladys todavía no hace. Para dispositivos Zigbee necesitas un dongle Zigbee, que es algo completamente distinto.",
  },
  {
    question: "¿El IKEA DIRIGERA es un hub Matter?",
    answer:
      "El DIRIGERA actúa como puente Matter: expone como dispositivos Matter los dispositivos IKEA emparejados con él, de modo que un controlador como Gladys puede verlos y controlarlos a través de tu red. No es un controlador genérico para otras marcas, y los dispositivos IKEA también pueden usarse directamente con Zigbee2MQTT si prefieres prescindir del hub.",
  },
  {
    question: "¿Puede Gladys ser mi hub Matter?",
    answer:
      "Sí, para Matter over Wi-Fi y Ethernet. Gladys es un controlador Matter: activa Matter en los ajustes de la integración, introduce el código de emparejamiento de 11 dígitos de tu dispositivo y contrólalo desde tu panel y tus escenas. Matter funciona sobre IPv6, así que asegúrate de que IPv6 esté activado en tu equipo y en tu router. Gladys no es un router de borde Thread y todavía no hace el emparejamiento por Bluetooth que exige Matter over Thread, así que esos dispositivos se emparejan con un controlador Matter completo, un Apple TV, un Echo compatible con Matter o un dispositivo Google Nest, y después se comparten con Gladys.",
  },
  {
    question: "¿Puede un dispositivo estar conectado a dos hubs Matter a la vez?",
    answer:
      "Sí, es lo que Matter llama multiadministrador (multi-admin). Un dispositivo puede compartirse con varios controladores al mismo tiempo. Para añadirlo a un segundo, pides al controlador que ya lo gestiona que genere un nuevo código de emparejamiento y usas ese código en lugar del que viene impreso en el dispositivo.",
  },
];

export default matterHubContent;
