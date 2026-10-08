// Content for the "Aqara sensors without the hub" landing page.
// Aqara's Zigbee sensors are among the most popular devices paired with
// Zigbee2MQTT. Targets "aqara without hub", "aqara sensor zigbee2mqtt",
// "aqara zigbee without aqara app". Gladys maps contact, occupancy,
// temperature, humidity, water_leak, vibration and button actions
// (server/services/zigbee2mqtt/exposes). We are clear that newer Aqara
// Thread/Matter devices are not Zigbee and need a Matter setup instead.

const aqaraWithoutHubContent = {
  en: {
    meta: {
      title: "Aqara Sensors Without the Hub: Local Zigbee Control",
      description:
        "Use Aqara Zigbee sensors without an Aqara hub or the Aqara app: pair door, motion, temperature, leak and vibration sensors with Zigbee2MQTT and automate them locally with Gladys Assistant. Free and open source.",
    },
    screenshotCaption:
      "Aqara door, motion and temperature sensors, paired directly over Zigbee, on a Gladys dashboard.",
    hero: {
      title: "Aqara sensors without the Aqara hub",
      subtitle:
        "Aqara's small, cheap Zigbee sensors work perfectly without Aqara's hub. Pair them with a Zigbee dongle and Gladys Assistant, and automate them locally with every other brand.",
      intro: [
        "Aqara makes some of the most popular smart home sensors: tiny door and window contacts, motion sensors, temperature and humidity sensors, leak detectors and wireless buttons, all running for months or years on a coin cell. Most of them are Zigbee devices.",
        "You don't need an Aqara hub or the Aqara app to use them. Gladys Assistant, a free and open-source smart home platform, installs Zigbee2MQTT for you: pair your Aqara sensors with a Zigbee USB dongle and use them in local scenes, next to your lights, plugs and thermostats from any brand.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT setup guide",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Get started with Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Why use Aqara sensors without the hub",
      intro: "The Aqara hub and app work, but:",
      points: [
        "The Aqara app and many hub features depend on Aqara's cloud and account.",
        "Automations stay mostly inside the Aqara world, with limited options to mix in other brands.",
        "Each hub is one more box and one more app to maintain.",
        "Your sensor history lives in Aqara's app rather than on your own machine.",
      ],
      outro:
        "Paired with a local Zigbee coordinator, the same sensors become building blocks you can use anywhere.",
    },
    features: {
      title: "Aqara sensors that work great in Gladys",
      intro: "These Aqara Zigbee device types map directly to Gladys features:",
      cards: [
        {
          icon: "🚪",
          title: "Door and window sensors",
          text: "Open/closed state for alarms, heating that turns off when a window opens, and notifications.",
        },
        {
          icon: "🏃",
          title: "Motion sensors",
          text: "Turn lights on when someone enters, or arm the alarm when the house is empty.",
        },
        {
          icon: "🌡️",
          title: "Temperature and humidity",
          text: "Room-by-room climate on your dashboard, with history and charts.",
        },
        {
          icon: "💧",
          title: "Leak detectors",
          text: "Get an alert and close a water valve automatically when a leak is detected.",
        },
        {
          icon: "📳",
          title: "Vibration sensors",
          text: "Know when the washing machine has finished, or when a door is being forced.",
        },
        {
          icon: "🔘",
          title: "Wireless buttons",
          text: "Single, double and long press, each one triggering a different scene.",
        },
      ],
    },
    how: {
      title: "How to pair Aqara sensors without the hub",
      intro: "On a mini-PC or a Raspberry Pi running Gladys:",
      points: [
        "Plug a Zigbee coordinator into the machine and enable Zigbee2MQTT in Gladys.",
        "Remove the sensor from the Aqara app if it was paired with an Aqara hub.",
        "In Gladys, open Zigbee2MQTT → Discover and permit joining.",
        "Hold the sensor's reset button for about five seconds until its LED blinks, then keep it close to the coordinator while it pairs.",
        "Add it to a room and to your dashboard, then use it in scenes.",
      ],
      outro:
        "Aqara sensors are known to be picky about which Zigbee routers they connect through. If one keeps dropping off, check the Zigbee2MQTT notes for that model and prefer routers known to work well with Aqara devices.",
    },
    solution: {
      title: "Good to know before you buy",
      paragraphs: [
        "Not every recent Aqara device is Zigbee. Some newer models, such as the Door and Window Sensor P2 and the Motion and Light Sensor P2, use Thread and Matter instead: those don't pair with Zigbee2MQTT, but Gladys can control Matter devices through a Thread border router. Check the protocol on the box, and the Zigbee2MQTT device list for the exact model.",
        "Gladys is free and open source, has been developed since 2013, and runs entirely on your own hardware.",
      ],
      link: {
        label: "Do you need a Matter hub? →",
        href: "/matter-hub/",
      },
    },
    related: {
      title: "Go further",
      intro: "More devices without their hub:",
      links: [
        {
          label: "Philips Hue without the bridge",
          href: "/philips-hue-without-bridge/",
          text: "Pair Hue bulbs directly with your Zigbee dongle.",
        },
        {
          label: "Tuya Zigbee without the Tuya app",
          href: "/tuya-zigbee-without-hub/",
          text: "Local control for Tuya Zigbee devices.",
        },
        {
          label: "Water leak detection",
          href: "/water-leak-detection/",
          text: "Detect leaks and shut the water off automatically.",
        },
        {
          label: "DIY home alarm system",
          href: "/diy-home-alarm-system/",
          text: "A self-monitored alarm with door and motion sensors.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Free your Aqara sensors",
      text: "Gladys is free, open source and installs with a single Docker command. Plug in a Zigbee dongle and pair your first Aqara sensor.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT guide", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  fr: {
    meta: {
      title: "Capteurs Aqara sans hub : contrôle Zigbee en local",
      description:
        "Utilisez vos capteurs Aqara Zigbee sans hub Aqara ni application Aqara : associez détecteurs d'ouverture, de mouvement, de température, de fuite et de vibration à Zigbee2MQTT et automatisez-les en local avec Gladys Assistant. Gratuit et open source.",
    },
    screenshotCaption:
      "Capteurs Aqara d'ouverture, de mouvement et de température, associés directement en Zigbee, sur un tableau de bord Gladys.",
    hero: {
      title: "Capteurs Aqara sans le hub Aqara",
      subtitle:
        "Les petits capteurs Zigbee d'Aqara, peu chers, fonctionnent parfaitement sans le hub Aqara. Associez-les à une clé Zigbee et à Gladys Assistant, et automatisez-les en local avec toutes vos autres marques.",
      intro: [
        "Aqara fabrique certains des capteurs domotiques les plus populaires : de minuscules détecteurs d'ouverture, des détecteurs de mouvement, des capteurs de température et d'humidité, des détecteurs de fuite et des boutons sans fil, qui tiennent des mois ou des années sur une pile bouton. La plupart sont des appareils Zigbee.",
        "Pas besoin de hub Aqara ni de l'application Aqara pour les utiliser. Gladys Assistant, une plateforme domotique gratuite et open source, installe Zigbee2MQTT pour vous : associez vos capteurs Aqara à une clé Zigbee USB et utilisez-les dans des scènes locales, à côté de vos lumières, prises et thermostats de n'importe quelle marque.",
      ],
      primaryCta: {
        label: "Guide d'installation Zigbee2MQTT",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Commencer avec Gladys →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Pourquoi utiliser ses capteurs Aqara sans le hub",
      intro: "Le hub et l'application Aqara fonctionnent, mais :",
      points: [
        "L'application Aqara et beaucoup de fonctions du hub dépendent du cloud et du compte Aqara.",
        "Les automatisations restent surtout dans l'univers Aqara, avec peu de possibilités pour y mêler d'autres marques.",
        "Chaque hub est un boîtier et une application de plus à maintenir.",
        "L'historique de vos capteurs vit dans l'application Aqara plutôt que sur votre propre machine.",
      ],
      outro:
        "Associés à un coordinateur Zigbee local, les mêmes capteurs deviennent des briques utilisables partout.",
    },
    features: {
      title: "Les capteurs Aqara qui fonctionnent très bien dans Gladys",
      intro: "Ces types d'appareils Aqara Zigbee correspondent directement à des fonctions de Gladys :",
      cards: [
        {
          icon: "🚪",
          title: "Détecteurs d'ouverture",
          text: "L'état ouvert/fermé pour l'alarme, un chauffage qui se coupe quand une fenêtre s'ouvre, et des notifications.",
        },
        {
          icon: "🏃",
          title: "Détecteurs de mouvement",
          text: "Allumez la lumière quand quelqu'un entre, ou armez l'alarme quand la maison est vide.",
        },
        {
          icon: "🌡️",
          title: "Température et humidité",
          text: "Le climat pièce par pièce sur votre tableau de bord, avec historique et courbes.",
        },
        {
          icon: "💧",
          title: "Détecteurs de fuite",
          text: "Recevez une alerte et fermez automatiquement une vanne d'eau quand une fuite est détectée.",
        },
        {
          icon: "📳",
          title: "Détecteurs de vibration",
          text: "Sachez quand le lave-linge a fini, ou quand une porte est forcée.",
        },
        {
          icon: "🔘",
          title: "Boutons sans fil",
          text: "Simple, double et appui long, chacun déclenchant une scène différente.",
        },
      ],
    },
    how: {
      title: "Comment associer des capteurs Aqara sans le hub",
      intro: "Sur un mini-PC ou un Raspberry Pi qui fait tourner Gladys :",
      points: [
        "Branchez un coordinateur Zigbee sur la machine et activez Zigbee2MQTT dans Gladys.",
        "Retirez le capteur de l'application Aqara s'il était associé à un hub Aqara.",
        "Dans Gladys, ouvrez Zigbee2MQTT → Découverte et autorisez l'association.",
        "Maintenez le bouton de réinitialisation du capteur environ cinq secondes jusqu'à ce que sa LED clignote, et gardez-le près du coordinateur pendant l'association.",
        "Ajoutez-le à une pièce et à votre tableau de bord, puis utilisez-le dans des scènes.",
      ],
      outro:
        "Les capteurs Aqara sont réputés capricieux sur les routeurs Zigbee par lesquels ils passent. Si l'un d'eux décroche régulièrement, consultez les notes Zigbee2MQTT du modèle et privilégiez des routeurs connus pour bien fonctionner avec Aqara.",
    },
    solution: {
      title: "À savoir avant d'acheter",
      paragraphs: [
        "Tous les appareils Aqara récents ne sont pas en Zigbee. Certains nouveaux modèles, comme le détecteur d'ouverture P2 et le détecteur de mouvement et de luminosité P2, utilisent Thread et Matter : ceux-là ne s'associent pas à Zigbee2MQTT, mais Gladys peut piloter les appareils Matter via un routeur de bordure Thread. Vérifiez le protocole sur la boîte, et la liste des appareils de Zigbee2MQTT pour le modèle exact.",
        "Gladys est gratuite et open source, développée depuis 2013, et tourne entièrement sur votre propre matériel.",
      ],
      link: {
        label: "Faut-il un hub Matter ? →",
        href: "/matter-hub/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "D'autres appareils sans leur box :",
      links: [
        {
          label: "Philips Hue sans le pont",
          href: "/philips-hue-without-bridge/",
          text: "Associez vos ampoules Hue directement à votre clé Zigbee.",
        },
        {
          label: "Tuya Zigbee sans l'application Tuya",
          href: "/tuya-zigbee-without-hub/",
          text: "Le contrôle local de vos appareils Tuya Zigbee.",
        },
        {
          label: "Détection de fuite d'eau",
          href: "/water-leak-detection/",
          text: "Détectez les fuites et coupez l'eau automatiquement.",
        },
        {
          label: "Alarme maison DIY",
          href: "/diy-home-alarm-system/",
          text: "Une alarme autonome avec détecteurs d'ouverture et de mouvement.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Libérez vos capteurs Aqara",
      text: "Gladys est gratuite, open source et s'installe en une seule commande Docker. Branchez une clé Zigbee et associez votre premier capteur Aqara.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: { label: "Guide Zigbee2MQTT", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },

  de: {
    meta: {
      title: "Aqara-Sensoren ohne Hub: Zigbee lokal steuern",
      description:
        "Aqara-Zigbee-Sensoren ohne Aqara-Hub und App: Tür-, Bewegungs-, Temperatur- und Wassersensoren mit Zigbee2MQTT koppeln und lokal mit Gladys automatisieren.",
    },
    screenshotCaption:
      "Aqara-Tür-, Bewegungs- und Temperatursensoren, direkt per Zigbee gekoppelt, auf einem Gladys-Dashboard.",
    hero: {
      title: "Aqara-Sensoren ohne Aqara-Hub",
      subtitle:
        "Die kleinen, günstigen Zigbee-Sensoren von Aqara funktionieren auch ohne den Aqara-Hub bestens. Kopple sie mit einem Zigbee-Stick und Gladys Assistant und automatisiere sie lokal, zusammen mit allen anderen Marken.",
      intro: [
        "Aqara baut einige der beliebtesten Smart-Home-Sensoren: winzige Tür- und Fensterkontakte, Bewegungsmelder, Temperatur- und Feuchtigkeitssensoren, Wassermelder und Funktaster, die alle monate- oder jahrelang mit einer Knopfzelle laufen. Die meisten davon sind Zigbee-Geräte.",
        "Einen Aqara-Hub oder die Aqara-App brauchst du dafür nicht. Gladys Assistant, eine kostenlose Open-Source-Plattform für dein Smart Home, installiert Zigbee2MQTT für dich: Kopple deine Aqara-Sensoren mit einem Zigbee-USB-Stick und nutze sie in lokalen Szenen, neben deinen Lampen, Steckdosen und Thermostaten beliebiger Marken.",
      ],
      primaryCta: {
        label: "Zigbee2MQTT-Einrichtungsanleitung",
        href: "/docs/integrations/zigbee2mqtt/",
      },
      secondaryCta: {
        label: "Mit Gladys loslegen →",
        href: "/docs/",
      },
    },
    problem: {
      title: "Warum Aqara-Sensoren ohne Hub nutzen",
      intro: "Der Aqara-Hub und die App funktionieren, aber:",
      points: [
        "Die Aqara-App und viele Hub-Funktionen hängen von der Aqara-Cloud und einem Aqara-Konto ab.",
        "Automationen bleiben meist innerhalb der Aqara-Welt, andere Marken lassen sich nur begrenzt einbinden.",
        "Jeder Hub ist eine weitere Box und eine weitere App, um die du dich kümmern musst.",
        "Der Verlauf deiner Sensordaten liegt in der Aqara-App statt auf deinem eigenen Rechner.",
      ],
      outro:
        "Mit einem lokalen Zigbee-Koordinator gekoppelt, werden dieselben Sensoren zu Bausteinen, die du überall einsetzen kannst.",
    },
    features: {
      title: "Aqara-Sensoren, die in Gladys super funktionieren",
      intro: "Diese Aqara-Zigbee-Gerätetypen werden direkt auf Gladys-Funktionen abgebildet:",
      cards: [
        {
          icon: "🚪",
          title: "Tür- und Fenstersensoren",
          text: "Offen/geschlossen-Status für die Alarmanlage, eine Heizung, die beim Lüften abschaltet, und Benachrichtigungen.",
        },
        {
          icon: "🏃",
          title: "Bewegungsmelder",
          text: "Licht einschalten, wenn jemand den Raum betritt, oder die Alarmanlage scharf schalten, wenn niemand zu Hause ist.",
        },
        {
          icon: "🌡️",
          title: "Temperatur und Luftfeuchtigkeit",
          text: "Das Raumklima Zimmer für Zimmer auf deinem Dashboard, mit Verlauf und Diagrammen.",
        },
        {
          icon: "💧",
          title: "Wassermelder",
          text: "Bei einem Wasserleck sofort gewarnt werden und automatisch ein Wasserventil schließen.",
        },
        {
          icon: "📳",
          title: "Vibrationssensoren",
          text: "Erfahren, wann die Waschmaschine fertig ist oder ob jemand versucht, eine Tür aufzubrechen.",
        },
        {
          icon: "🔘",
          title: "Funktaster",
          text: "Einfach, doppelt und lang drücken, jeder Druck löst eine andere Szene aus.",
        },
      ],
    },
    how: {
      title: "So koppelst du Aqara-Sensoren ohne Hub",
      intro: "Auf einem Mini-PC oder einem Raspberry Pi mit Gladys:",
      points: [
        "Steck einen Zigbee-Koordinator in den Rechner und aktiviere Zigbee2MQTT in Gladys.",
        "Entferne den Sensor aus der Aqara-App, falls er mit einem Aqara-Hub gekoppelt war.",
        "Öffne in Gladys Zigbee2MQTT → Erkennen und erlaube den Beitritt.",
        "Halte die Reset-Taste des Sensors etwa fünf Sekunden gedrückt, bis die LED blinkt, und halte ihn während der Kopplung nah an den Koordinator.",
        "Ordne ihn einem Raum zu, füge ihn deinem Dashboard hinzu und nutze ihn in Szenen.",
      ],
      outro:
        "Aqara-Sensoren sind bekanntermaßen wählerisch, über welche Zigbee-Router sie sich verbinden. Wenn einer immer wieder die Verbindung verliert, sieh dir die Hinweise von Zigbee2MQTT zu diesem Modell an und setze auf Router, die nachweislich gut mit Aqara-Geräten funktionieren.",
    },
    solution: {
      title: "Gut zu wissen vor dem Kauf",
      paragraphs: [
        "Nicht jedes neue Aqara-Gerät nutzt Zigbee. Einige neuere Modelle, etwa der Door and Window Sensor P2 und der Motion and Light Sensor P2, setzen stattdessen auf Thread und Matter: Sie lassen sich nicht mit Zigbee2MQTT koppeln, aber Gladys kann Matter-Geräte über einen Thread-Border-Router steuern. Prüfe das Protokoll auf der Verpackung und das genaue Modell in der Geräteliste von Zigbee2MQTT.",
        "Gladys ist kostenlos und Open Source, wird seit 2013 entwickelt und läuft komplett auf deiner eigenen Hardware.",
      ],
      link: {
        label: "Brauchst du einen Matter-Hub? →",
        href: "/matter-hub/",
      },
    },
    related: {
      title: "Weiterlesen",
      intro: "Weitere Geräte ohne ihren Hub:",
      links: [
        {
          label: "Philips Hue ohne Bridge",
          href: "/philips-hue-without-bridge/",
          text: "Hue-Lampen direkt mit deinem Zigbee-Stick koppeln.",
        },
        {
          label: "Tuya Zigbee ohne Tuya-App",
          href: "/tuya-zigbee-without-hub/",
          text: "Lokale Steuerung für Tuya-Zigbee-Geräte.",
        },
        {
          label: "Wasserschäden erkennen",
          href: "/water-leak-detection/",
          text: "Lecks erkennen und das Wasser automatisch abdrehen.",
        },
        {
          label: "Alarmanlage selber bauen",
          href: "/diy-home-alarm-system/",
          text: "Eine selbst überwachte Alarmanlage mit Tür- und Bewegungssensoren.",
        },
      ],
    },
    faqTitle: "Häufige Fragen",
    cta: {
      title: "Befreie deine Aqara-Sensoren",
      text: "Gladys ist kostenlos, Open Source und mit einem einzigen Docker-Befehl installiert. Zigbee-Stick einstecken und den ersten Aqara-Sensor koppeln.",
      primary: { label: "Jetzt starten", href: "/docs/" },
      secondary: { label: "Zigbee2MQTT-Anleitung", href: "/docs/integrations/zigbee2mqtt/" },
    },
  },
};

export const aqaraWithoutHubFaqEn = [
  {
    question: "Can Aqara sensors work without the Aqara hub?",
    answer:
      "Yes, Aqara's Zigbee sensors can be paired with any compatible Zigbee coordinator through Zigbee2MQTT. With Gladys Assistant and a Zigbee USB dongle, you use them locally without the Aqara hub, app or account.",
  },
  {
    question: "Which Aqara sensors work with Zigbee2MQTT?",
    answer:
      "More than 200 Aqara devices are listed: door and window sensors, motion sensors, temperature and humidity sensors, leak detectors, vibration sensors and wireless buttons. Check the exact model on the Zigbee2MQTT supported devices list, as newer Thread/Matter models are not Zigbee.",
  },
  {
    question: "Why does my Aqara sensor keep disconnecting?",
    answer:
      "Aqara and Xiaomi end devices don't look for a new parent when their router disappears, and some routers are known to cause drop-offs, according to the Zigbee2MQTT documentation (certain Centralite, GE, Ledvance/OSRAM, Legrand, Sylvania and SmartThings devices). Pair them right next to the coordinator, and prefer routers that work well with Aqara, such as IKEA Tradfri plugs and repeaters.",
  },
  {
    question: "Do I lose anything without the Aqara hub?",
    answer:
      "You lose the Aqara app, its cloud features and hub-specific functions like the hub's built-in siren or camera. The sensors' readings and events work fully in Gladys, where you build your own scenes.",
  },
];

export const aqaraWithoutHubFaqFr = [
  {
    question: "Les capteurs Aqara fonctionnent-ils sans le hub Aqara ?",
    answer:
      "Oui, les capteurs Zigbee d'Aqara s'associent à n'importe quel coordinateur Zigbee compatible via Zigbee2MQTT. Avec Gladys Assistant et une clé Zigbee USB, vous les utilisez en local sans hub, application ni compte Aqara.",
  },
  {
    question: "Quels capteurs Aqara fonctionnent avec Zigbee2MQTT ?",
    answer:
      "Plus de 200 appareils Aqara y sont listés : détecteurs d'ouverture, de mouvement, capteurs de température et d'humidité, détecteurs de fuite, de vibration et boutons sans fil. Vérifiez le modèle exact dans la liste des appareils de Zigbee2MQTT : les nouveaux modèles Thread/Matter ne sont pas en Zigbee.",
  },
  {
    question: "Pourquoi mon capteur Aqara se déconnecte-t-il ?",
    answer:
      "Les capteurs Aqara et Xiaomi ne cherchent pas de nouveau parent quand leur routeur disparaît, et certains routeurs sont connus pour provoquer des déconnexions, selon la documentation de Zigbee2MQTT (certains appareils Centralite, GE, Ledvance/OSRAM, Legrand, Sylvania et SmartThings). Associez-les juste à côté du coordinateur, et privilégiez des routeurs qui fonctionnent bien avec Aqara, comme les prises et répéteurs IKEA Tradfri.",
  },
  {
    question: "Que perd-on sans le hub Aqara ?",
    answer:
      "L'application Aqara, ses fonctions cloud et les fonctions propres au hub, comme sa sirène ou sa caméra intégrée. Les mesures et événements des capteurs fonctionnent entièrement dans Gladys, où vous créez vos propres scènes.",
  },
];

export const aqaraWithoutHubFaqDe = [
  {
    question: "Funktionieren Aqara-Sensoren ohne Aqara-Hub?",
    answer:
      "Ja, die Zigbee-Sensoren von Aqara lassen sich über Zigbee2MQTT mit jedem kompatiblen Zigbee-Koordinator koppeln. Mit Gladys Assistant und einem Zigbee-USB-Stick nutzt du sie lokal, ohne Aqara-Hub, App oder Konto.",
  },
  {
    question: "Welche Aqara-Sensoren funktionieren mit Zigbee2MQTT?",
    answer:
      "Über 200 Aqara-Geräte sind gelistet: Tür- und Fenstersensoren, Bewegungsmelder, Temperatur- und Feuchtigkeitssensoren, Wassermelder, Vibrationssensoren und Funktaster. Prüfe das genaue Modell in der Liste der von Zigbee2MQTT unterstützten Geräte, denn neuere Thread/Matter-Modelle sind kein Zigbee.",
  },
  {
    question: "Warum verliert mein Aqara-Sensor ständig die Verbindung?",
    answer:
      "Laut der Dokumentation von Zigbee2MQTT suchen sich Aqara- und Xiaomi-Endgeräte keinen neuen Parent, wenn ihr Router verschwindet, und manche Router sind für Verbindungsabbrüche bekannt (bestimmte Geräte von Centralite, GE, Ledvance/OSRAM, Legrand, Sylvania und SmartThings). Kopple die Sensoren direkt neben dem Koordinator und setze auf Router, die gut mit Aqara funktionieren, etwa IKEA-Tradfri-Steckdosen und -Repeater.",
  },
  {
    question: "Verliere ich etwas ohne den Aqara-Hub?",
    answer:
      "Du verzichtest auf die Aqara-App, ihre Cloud-Funktionen und hubspezifische Funktionen wie die eingebaute Sirene oder Kamera des Hubs. Die Messwerte und Ereignisse der Sensoren funktionieren in Gladys vollständig, und dort baust du deine eigenen Szenen.",
  },
];

export default aqaraWithoutHubContent;
