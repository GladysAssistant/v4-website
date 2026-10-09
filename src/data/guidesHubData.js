// Content for the /guides/ hub page.
// The footer used to link every landing page and became unreadable. It now
// keeps a few essentials plus "All guides", and this page lists every guide,
// comparison and tool by theme, so each page stays two clicks away from
// anywhere on the site. When you add a landing page, add it here.

const card = (href, en, fr, de, es) => ({ href, en, fr, de, es });

export const guidesSections = [
  {
    id: "start",
    title: { en: "Getting started", fr: "Bien démarrer", de: "Erste Schritte", es: "Primeros pasos" },
    items: [
      card(
        "/best-smart-home-hub/",
        { label: "Best smart home hub", text: "Hubitat, Homey, SmartThings, Home Assistant Green or a mini-PC: which hub to choose." },
        { label: "Quelle box domotique choisir", text: "Jeedom, Homey, Home Assistant Green ou un mini-PC : quelle box choisir." },
        { label: "Die beste Smart-Home-Zentrale", text: "Hubitat, Homey, SmartThings, Home Assistant Green oder ein Mini-PC: Welche Zentrale passt zu dir?" },
        { label: "El mejor hub domótico", text: "Hubitat, Homey, SmartThings, Home Assistant Green o un mini-PC: qué hub elegir." }
      ),
      card(
        "/mini-pc-home-automation/",
        { label: "Best mini-PC for home automation", text: "Intel N100/N150, Raspberry Pi 5 or a used office PC: what to buy." },
        { label: "Quel mini-PC pour la domotique", text: "Intel N100/N150, Raspberry Pi 5 ou PC de bureau d'occasion : quoi acheter." },
        { label: "Der beste Mini-PC für die Hausautomation", text: "Intel N100/N150, Raspberry Pi 5 oder ein gebrauchter Büro-PC: Was du kaufen solltest." },
        { label: "El mejor mini-PC para domótica", text: "Intel N100/N150, Raspberry Pi 5 o un PC de oficina de segunda mano: qué comprar." }
      ),
      card(
        "/local-smart-home/",
        { label: "Build a local smart home", text: "Why local-first matters and how to build a home that runs without the cloud." },
        { label: "Créer une maison connectée locale", text: "Pourquoi le local d'abord compte, et comment bâtir une maison qui tourne sans cloud." },
        { label: "Ein lokales Smart Home aufbauen", text: "Warum „lokal zuerst“ zählt und wie dein Zuhause ganz ohne Cloud läuft." },
        { label: "Crea un hogar inteligente local", text: "Por qué importa lo local primero y cómo construir una casa que funcione sin la nube." }
      ),
      card(
        "/open-source-home-automation/",
        { label: "Open-source home automation", text: "The main open-source platforms, compared." },
        { label: "La domotique open source", text: "Les principales plateformes open source, comparées." },
        { label: "Open-Source-Hausautomation", text: "Die wichtigsten Open-Source-Plattformen im Vergleich." },
        { label: "Domótica de código abierto", text: "Las principales plataformas de código abierto, comparadas." }
      ),
      card(
        "/works-with/",
        { label: "Works with Gladys", text: "The brands and protocols Gladys supports, and which work without the internet." },
        { label: "Appareils compatibles", text: "Les marques et protocoles pris en charge par Gladys, et ceux qui marchent sans internet." },
        { label: "Kompatibel mit Gladys", text: "Die Marken und Protokolle, die Gladys unterstützt, und welche ohne Internet funktionieren." },
        { label: "Compatible con Gladys", text: "Las marcas y protocolos compatibles con Gladys, y cuáles funcionan sin internet." }
      ),
      card(
        "/zigbee-vs-matter-vs-zwave/",
        { label: "Zigbee vs Z-Wave vs Matter vs Thread", text: "Which smart home protocol to choose." },
        { label: "Zigbee vs Z-Wave vs Matter vs Thread", text: "Quel protocole domotique choisir." },
        { label: "Zigbee vs. Z-Wave vs. Matter vs. Thread", text: "Welches Smart-Home-Protokoll du wählen solltest." },
        { label: "Zigbee vs Z-Wave vs Matter vs Thread", text: "Qué protocolo domótico elegir." }
      ),
      card(
        "/best-zigbee-dongle/",
        { label: "Best Zigbee USB dongle", text: "Which Zigbee coordinator to buy, USB or network." },
        { label: "Quelle clé Zigbee choisir", text: "Quel coordinateur Zigbee acheter, USB ou réseau." },
        { label: "Der beste Zigbee-USB-Stick", text: "Welchen Zigbee-Koordinator du kaufen solltest, USB oder Netzwerk." },
        { label: "El mejor dongle USB Zigbee", text: "Qué coordinador Zigbee comprar, USB o de red." }
      ),
      card(
        "/matter-hub/",
        { label: "Do you need a Matter hub?", text: "Controllers, Thread border routers and bridges explained." },
        { label: "Faut-il un hub Matter ?", text: "Contrôleurs, routeurs de bordure Thread et ponts expliqués." },
        { label: "Brauchst du einen Matter-Hub?", text: "Controller, Thread-Border-Router und Bridges einfach erklärt." },
        { label: "¿Necesitas un hub Matter?", text: "Controladores, routers de borde Thread y puentes, explicados." }
      ),
    ],
  },
  {
    id: "ai",
    title: { en: "AI", fr: "Intelligence artificielle", de: "KI", es: "Inteligencia artificial" },
    items: [
      card(
        "/ai-smart-home/",
        { label: "Control your home with AI", text: "Natural-language control, a proactive AI agent and a weekly report, privately." },
        { label: "Piloter sa maison avec l'IA", text: "Pilotage en langage naturel, IA proactive et rapport hebdomadaire, en toute confidentialité." },
        { label: "Dein Zuhause mit KI steuern", text: "Steuerung per natürlicher Sprache, ein proaktiver KI-Agent und ein Wochenbericht, mit Datenschutz." },
        { label: "Controla tu casa con IA", text: "Control en lenguaje natural, un agente de IA proactivo y un informe semanal, con total privacidad." }
      ),
      card(
        "/smart-home-mcp-server/",
        { label: "Smart home MCP server", text: "Connect Claude, Copilot, Perplexity or Le Chat to your home." },
        { label: "Serveur MCP domotique", text: "Connectez Claude, Copilot, Perplexity ou Le Chat à votre maison." },
        { label: "Smart-Home-MCP-Server", text: "Verbinde Claude, Copilot, Perplexity oder Le Chat mit deinem Zuhause." },
        { label: "Servidor MCP domótico", text: "Conecta Claude, Copilot, Perplexity o Le Chat a tu casa." }
      ),
    ],
  },
  {
    id: "devices",
    title: { en: "Devices and protocols", fr: "Appareils et protocoles", de: "Geräte und Protokolle", es: "Dispositivos y protocolos" },
    items: [
      card(
        "/zigbee2mqtt-without-home-assistant/",
        { label: "Zigbee2MQTT without Home Assistant", text: "Gladys installs and manages Zigbee2MQTT for you." },
        { label: "Zigbee2MQTT sans Home Assistant", text: "Gladys installe et gère Zigbee2MQTT pour vous." },
        { label: "Zigbee2MQTT ohne Home Assistant", text: "Gladys installiert und verwaltet Zigbee2MQTT für dich." },
        { label: "Zigbee2MQTT sin Home Assistant", text: "Gladys instala y gestiona Zigbee2MQTT por ti." }
      ),
      card(
        "/z-wave-js-ui-without-home-assistant/",
        { label: "Z-Wave JS UI without Home Assistant", text: "Your Z-Wave network with a simple interface, over MQTT." },
        { label: "Z-Wave JS UI sans Home Assistant", text: "Votre réseau Z-Wave avec une interface simple, via MQTT." },
        { label: "Z-Wave JS UI ohne Home Assistant", text: "Dein Z-Wave-Netz mit einer einfachen Oberfläche, über MQTT." },
        { label: "Z-Wave JS UI sin Home Assistant", text: "Tu red Z-Wave con una interfaz sencilla, a través de MQTT." }
      ),
      card(
        "/philips-hue-without-bridge/",
        { label: "Philips Hue without the bridge", text: "Pair Hue bulbs directly with a Zigbee dongle." },
        { label: "Philips Hue sans le pont", text: "Associez vos ampoules Hue directement à une clé Zigbee." },
        { label: "Philips Hue ohne Bridge", text: "Koppel Hue-Lampen direkt mit einem Zigbee-Stick." },
        { label: "Philips Hue sin el bridge", text: "Empareja las bombillas Hue directamente con un dongle Zigbee." }
      ),
      card(
        "/aqara-without-hub/",
        { label: "Aqara sensors without the hub", text: "Use Aqara Zigbee sensors locally, without the Aqara app." },
        { label: "Capteurs Aqara sans hub", text: "Utilisez vos capteurs Aqara Zigbee en local, sans l'application Aqara." },
        { label: "Aqara-Sensoren ohne Hub", text: "Nutze Aqara-Zigbee-Sensoren lokal, ohne die Aqara-App." },
        { label: "Sensores Aqara sin el hub", text: "Usa los sensores Zigbee de Aqara en local, sin la app de Aqara." }
      ),
      card(
        "/tuya-zigbee-without-hub/",
        { label: "Tuya Zigbee without the Tuya app", text: "Local control for Tuya Zigbee devices." },
        { label: "Tuya Zigbee sans l'application Tuya", text: "Le contrôle local de vos appareils Tuya Zigbee." },
        { label: "Tuya Zigbee ohne Tuya-App", text: "Lokale Steuerung für Tuya-Zigbee-Geräte." },
        { label: "Tuya Zigbee sin la app de Tuya", text: "Control local para los dispositivos Zigbee de Tuya." }
      ),
      card(
        "/shelly-without-cloud/",
        { label: "Shelly without the cloud", text: "Local, real-time control of Shelly relays, plugs and meters." },
        { label: "Shelly sans le cloud", text: "Le contrôle local et en temps réel des relais, prises et compteurs Shelly." },
        { label: "Shelly ohne Cloud", text: "Lokale Echtzeit-Steuerung von Shelly-Relais, -Steckdosen und -Messgeräten." },
        { label: "Shelly sin la nube", text: "Control local y en tiempo real de los relés, enchufes y medidores Shelly." }
      ),
      card(
        "/ikea-smart-home/",
        { label: "IKEA smart home", text: "Tradfri over Zigbee, DIRIGERA over Matter, and the Matter over Thread range." },
        { label: "Maison connectée IKEA", text: "Tradfri en Zigbee, DIRIGERA en Matter, et la gamme Matter over Thread." },
        { label: "IKEA Smart Home", text: "Tradfri über Zigbee, DIRIGERA über Matter und die Matter-over-Thread-Reihe." },
        { label: "Hogar inteligente con IKEA", text: "Tradfri por Zigbee, DIRIGERA por Matter y la gama Matter over Thread." }
      ),
      card(
        "/sinope-zigbee/",
        { label: "Sinopé Zigbee thermostats", text: "Control Sinopé thermostats locally, without Neviweb." },
        { label: "Thermostats Sinopé Zigbee", text: "Pilotez vos thermostats Sinopé en local, sans Neviweb." },
        { label: "Sinopé-Zigbee-Thermostate", text: "Steuere Sinopé-Thermostate lokal, ohne Neviweb." },
        { label: "Termostatos Zigbee de Sinopé", text: "Controla los termostatos Sinopé en local, sin Neviweb." }
      ),
      card(
        "/reolink-rtsp-url/",
        { label: "Reolink RTSP URL", text: "Enable RTSP and find the stream URL of your Reolink camera." },
        { label: "URL RTSP Reolink", text: "Activer le RTSP et trouver l'URL du flux de votre caméra Reolink." },
        { label: "Reolink-RTSP-URL", text: "RTSP aktivieren und die Stream-URL deiner Reolink-Kamera finden." },
        { label: "URL RTSP de Reolink", text: "Activa RTSP y encuentra la URL del flujo de tu cámara Reolink." }
      ),
      card(
        "/home-weather-station/",
        { label: "Home weather station", text: "The best weather stations for a smart home." },
        { label: "Station météo connectée", text: "Les meilleures stations météo pour une maison connectée." },
        { label: "Wetterstation fürs Smart Home", text: "Die besten Wetterstationen für ein Smart Home." },
        { label: "Estación meteorológica para casa", text: "Las mejores estaciones meteorológicas para un hogar inteligente." }
      ),
    ],
  },
  {
    id: "energy",
    title: { en: "Energy", fr: "Énergie", de: "Energie", es: "Energía" },
    items: [
      card(
        "/home-energy-monitoring/",
        { label: "Reduce your electricity bill", text: "Track your consumption and act on the data." },
        { label: "Réduire sa facture d'électricité", text: "Suivez votre consommation et agissez sur les données." },
        { label: "Stromrechnung senken", text: "Behalte deinen Verbrauch im Blick und handle auf Basis der Daten." },
        { label: "Reduce tu factura de la luz", text: "Controla tu consumo y actúa a partir de los datos." }
      ),
      card(
        "/edf-tempo/",
        { label: "EDF Tempo colour of the day", text: "Today's and tomorrow's Tempo colour, live (France)." },
        { label: "Tempo EDF : couleur du jour", text: "La couleur Tempo du jour et de demain, en direct." },
        { label: "EDF Tempo: Farbe des Tages", text: "Die Tempo-Farbe von heute und morgen, live (Frankreich)." },
        { label: "EDF Tempo: color del día", text: "El color Tempo de hoy y de mañana, en directo (Francia)." }
      ),
      card(
        "/heures-creuses/",
        { label: "France's new off-peak hours", text: "What the 2025–2027 heures creuses reform changes, and how to adapt (France)." },
        { label: "Heures creuses : ce qui change", text: "Ce que change la réforme des heures creuses, et comment s'adapter." },
        { label: "Frankreichs neue Nebenzeiten", text: "Was die Reform der heures creuses 2025–2027 ändert und wie du dich anpasst (Frankreich)." },
        { label: "Las nuevas horas valle en Francia", text: "Qué cambia la reforma de las heures creuses 2025–2027 y cómo adaptarte (Francia)." }
      ),
      card(
        "/hydro-quebec-peak-events/",
        { label: "Hydro-Québec peak events today", text: "Live Flex D and Winter Credit peak events (Quebec)." },
        { label: "Pointes Hydro-Québec aujourd'hui", text: "Les pointes Flex D et crédit hivernal, en direct (Québec)." },
        { label: "Hydro-Québec-Spitzenereignisse heute", text: "Flex-D- und Winterkredit-Spitzenereignisse, live (Québec)." },
        { label: "Eventos de punta de Hydro-Québec hoy", text: "Los eventos de punta de Flex D y del Crédito de invierno, en directo (Quebec)." }
      ),
      card(
        "/hydro-quebec-flex-d/",
        { label: "Hydro-Québec Rate Flex D", text: "How Flex D works and how to automate it (Quebec)." },
        { label: "Tarif Flex D d'Hydro-Québec", text: "Comment fonctionne le Flex D et comment l'automatiser (Québec)." },
        { label: "Hydro-Québec-Tarif Flex D", text: "Wie Flex D funktioniert und wie du ihn automatisierst (Québec)." },
        { label: "Tarifa Flex D de Hydro-Québec", text: "Cómo funciona Flex D y cómo automatizarlo (Quebec)." }
      ),
      card(
        "/ontario-electricity-rates/",
        { label: "Ontario electricity rates now", text: "The current Time-of-Use and Ultra-Low Overnight price, live (Ontario)." },
        { label: "Tarifs d'électricité en Ontario", text: "Le prix en cours, selon la grille horaire de l'Ontario, en direct." },
        { label: "Aktuelle Strompreise in Ontario", text: "Der aktuelle Time-of-Use- und Ultra-Low-Overnight-Preis, live (Ontario)." },
        { label: "Tarifas eléctricas de Ontario ahora", text: "El precio actual de las tarifas Time-of-Use y Ultra-Low Overnight, en directo (Ontario)." }
      ),
    ],
  },
  {
    id: "home",
    title: { en: "Security and comfort", fr: "Sécurité et confort", de: "Sicherheit und Komfort", es: "Seguridad y confort" },
    items: [
      card(
        "/diy-home-alarm-system/",
        { label: "DIY home alarm system", text: "A self-monitored alarm that runs locally, with no contract." },
        { label: "Alarme maison DIY", text: "Une alarme autonome qui tourne en local, sans abonnement." },
        { label: "Alarmanlage selbst bauen", text: "Eine selbst überwachte Alarmanlage, die lokal läuft, ganz ohne Vertrag." },
        { label: "Alarma casera DIY", text: "Una alarma autogestionada que funciona en local, sin contrato." }
      ),
      card(
        "/water-leak-detection/",
        { label: "Water leak detection and shutoff", text: "Detect leaks and shut the water off automatically." },
        { label: "Détection de fuite d'eau", text: "Détectez les fuites et coupez l'eau automatiquement." },
        { label: "Wasserleck erkennen und abschalten", text: "Erkenne Lecks und dreh das Wasser automatisch ab." },
        { label: "Detección de fugas de agua y corte automático", text: "Detecta fugas y corta el agua automáticamente." }
      ),
      card(
        "/nest-thermostat-alternative/",
        { label: "Nest thermostat alternative", text: "Local thermostats you control yourself, after Nest's end of support." },
        { label: "Alternative au thermostat Nest", text: "Des thermostats locaux que vous maîtrisez, après la fin du support Nest." },
        { label: "Nest-Thermostat-Alternative", text: "Lokale Thermostate, die du selbst steuerst, nach dem Support-Ende von Nest." },
        { label: "Alternativa al termostato Nest", text: "Termostatos locales que controlas tú, tras el fin del soporte de Nest." }
      ),
      card(
        "/presence-simulation/",
        { label: "Presence simulation", text: "Make your home look occupied while you're away." },
        { label: "Simulation de présence", text: "Donnez l'impression que la maison est occupée pendant votre absence." },
        { label: "Anwesenheitssimulation", text: "Lass dein Zuhause bewohnt wirken, während du weg bist." },
        { label: "Simulación de presencia", text: "Haz que tu casa parezca habitada mientras estás fuera." }
      ),
    ],
  },
  {
    id: "compare",
    title: { en: "Comparisons and alternatives", fr: "Comparatifs et alternatives", de: "Vergleiche und Alternativen", es: "Comparativas y alternativas" },
    items: [
      card(
        "/home-assistant-vs-gladys-assistant/",
        { label: "Gladys vs Home Assistant", text: "An honest, feature-by-feature comparison." },
        { label: "Gladys vs Home Assistant", text: "Un comparatif honnête, fonction par fonction." },
        { label: "Gladys vs. Home Assistant", text: "Ein ehrlicher Vergleich, Funktion für Funktion." },
        { label: "Gladys vs Home Assistant", text: "Una comparativa honesta, función por función." }
      ),
      card(
        "/home-assistant-alternative/",
        { label: "Home Assistant alternative", text: "Why people switch from Home Assistant to Gladys." },
        { label: "Alternative à Home Assistant", text: "Pourquoi on passe de Home Assistant à Gladys." },
        { label: "Home Assistant Alternative", text: "Warum Nutzer von Home Assistant zu Gladys wechseln." },
        { label: "Alternativa a Home Assistant", text: "Por qué la gente se pasa de Home Assistant a Gladys." }
      ),
      card(
        "/home-assistant-green-alternative/",
        { label: "Home Assistant Green alternative", text: "Your own local hub on a mini-PC or a Raspberry Pi." },
        { label: "Alternative au Home Assistant Green", text: "Votre propre box locale sur un mini-PC ou un Raspberry Pi." },
        { label: "Home Assistant Green Alternative", text: "Deine eigene lokale Zentrale auf einem Mini-PC oder Raspberry Pi." },
        { label: "Alternativa a Home Assistant Green", text: "Tu propio hub local en un mini-PC o una Raspberry Pi." }
      ),
      card(
        "/jeedom-vs-gladys-assistant/",
        { label: "Gladys vs Jeedom", text: "An honest comparison with the French home automation box." },
        { label: "Gladys vs Jeedom", text: "Un comparatif honnête avec la box domotique française." },
        { label: "Gladys vs. Jeedom", text: "Ein ehrlicher Vergleich mit der französischen Smart-Home-Zentrale." },
        { label: "Gladys vs Jeedom", text: "Una comparativa honesta con la centralita domótica francesa." }
      ),
      card(
        "/jeedom-alternative/",
        { label: "Jeedom alternative", text: "Why people move from Jeedom to Gladys." },
        { label: "Alternative à Jeedom", text: "Pourquoi on passe de Jeedom à Gladys." },
        { label: "Jeedom-Alternative", text: "Warum Nutzer von Jeedom zu Gladys wechseln." },
        { label: "Alternativa a Jeedom", text: "Por qué la gente se pasa de Jeedom a Gladys." }
      ),
      card(
        "/openhab-alternative/",
        { label: "openHAB alternative", text: "Simpler open-source home automation." },
        { label: "Alternative à openHAB", text: "Une domotique open source plus simple." },
        { label: "openHAB-Alternative", text: "Einfachere Open-Source-Hausautomation." },
        { label: "Alternativa a openHAB", text: "Una domótica de código abierto más sencilla." }
      ),
      card(
        "/domoticz-alternative/",
        { label: "Domoticz alternative", text: "A modern, open-source successor to Domoticz." },
        { label: "Alternative à Domoticz", text: "Une alternative moderne et open source à Domoticz." },
        { label: "Domoticz-Alternative", text: "Ein moderner Open-Source-Nachfolger für Domoticz." },
        { label: "Alternativa a Domoticz", text: "Un sucesor moderno y de código abierto de Domoticz." }
      ),
      card(
        "/smartthings-alternative/",
        { label: "SmartThings alternative", text: "A local, private alternative to Samsung SmartThings." },
        { label: "Alternative à SmartThings", text: "Une alternative locale et privée à Samsung SmartThings." },
        { label: "SmartThings-Alternative", text: "Eine lokale, private Alternative zu Samsung SmartThings." },
        { label: "Alternativa a SmartThings", text: "Una alternativa local y privada a Samsung SmartThings." }
      ),
      card(
        "/hubitat-alternative/",
        { label: "Hubitat alternative", text: "Open source, local, with a modern interface." },
        { label: "Alternative à Hubitat", text: "Open source, local, avec une interface moderne." },
        { label: "Hubitat-Alternative", text: "Open Source, lokal und mit moderner Oberfläche." },
        { label: "Alternativa a Hubitat", text: "De código abierto, local y con una interfaz moderna." }
      ),
      card(
        "/homey-alternative/",
        { label: "Homey alternative", text: "A free, open-source alternative to Homey Pro." },
        { label: "Alternative à Homey", text: "Une alternative gratuite et open source au Homey Pro." },
        { label: "Homey-Alternative", text: "Eine kostenlose Open-Source-Alternative zum Homey Pro." },
        { label: "Alternativa a Homey", text: "Una alternativa gratuita y de código abierto a Homey Pro." }
      ),
      card(
        "/alexa-alternative/",
        { label: "Alexa alternative", text: "A private, self-hosted alternative to Amazon Alexa." },
        { label: "Alternative à Alexa", text: "Une alternative privée et auto-hébergée à Amazon Alexa." },
        { label: "Alexa-Alternative", text: "Eine private, selbst gehostete Alternative zu Amazon Alexa." },
        { label: "Alternativa a Alexa", text: "Una alternativa privada y autoalojada a Amazon Alexa." }
      ),
      card(
        "/google-home-alternative/",
        { label: "Google Home alternative", text: "A private, self-hosted alternative to Google Home." },
        { label: "Alternative à Google Home", text: "Une alternative privée et auto-hébergée à Google Home." },
        { label: "Google-Home-Alternative", text: "Eine private, selbst gehostete Alternative zu Google Home." },
        { label: "Alternativa a Google Home", text: "Una alternativa privada y autoalojada a Google Home." }
      ),
    ],
  },
];

export const guidesHubContent = {
  en: {
    meta: {
      title: "Smart Home Guides, Comparisons and Tools",
      description:
        "All Gladys Assistant guides in one place: local smart home, Zigbee and Z-Wave without Home Assistant, devices without their hub, energy tools, and honest comparisons with Home Assistant, SmartThings, Hubitat, Homey and more.",
    },
    title: "Smart home guides",
    subtitle:
      "Guides, live tools and honest comparisons to build a local, private smart home, with or without Gladys.",
  },
  fr: {
    meta: {
      title: "Guides domotique, comparatifs et outils",
      description:
        "Tous les guides de Gladys Assistant au même endroit : maison connectée locale, Zigbee et Z-Wave sans Home Assistant, appareils sans leur box, outils énergie et comparatifs honnêtes avec Home Assistant, Jeedom, SmartThings, Homey et d'autres.",
    },
    title: "Guides domotique",
    subtitle:
      "Des guides, des outils en direct et des comparatifs honnêtes pour construire une maison connectée locale et privée, avec ou sans Gladys.",
  },
  de: {
    meta: {
      title: "Smart-Home-Ratgeber, Vergleiche und Tools",
      description:
        "Alle Ratgeber von Gladys Assistant: lokales Smart Home, Zigbee ohne Home Assistant, Geräte ohne Hub, Energie-Tools und ehrliche Vergleiche.",
    },
    title: "Smart-Home-Ratgeber",
    subtitle:
      "Ratgeber, Live-Tools und ehrliche Vergleiche für ein lokales Smart Home mit Datenschutz, mit oder ohne Gladys.",
  },
  es: {
    meta: {
      title: "Guías de domótica, comparativas y herramientas",
      description:
        "Todas las guías de Gladys Assistant en un solo lugar: hogar inteligente local, Zigbee y Z-Wave sin Home Assistant, dispositivos sin su hub, herramientas de energía y comparativas honestas con Home Assistant, SmartThings, Hubitat, Homey y más.",
    },
    title: "Guías de domótica",
    subtitle:
      "Guías, herramientas en directo y comparativas honestas para construir un hogar inteligente local y privado, con o sin Gladys.",
  },
};
