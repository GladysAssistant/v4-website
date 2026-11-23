// Built-in (native) integrations shown in the integrations catalog
// (/docs/integrations/), next to the community ones of the store.
//
// Source: the entries of front/src/config/integrations/*.json in
// GladysAssistant/Gladys (5.3.4) that are not marked `deprecated`, with their
// categories and transports. A deprecated integration has no page on the site:
// its documentation is deleted and its URL redirects to the community
// integration that supersedes it (see _redirects).
// The list is static: update it when an integration is added to the core or
// deprecated there. Covers come from front/src/assets/integrations/cover.
//
// `doc` is the slug of the integration's page under /docs/integrations/.
// `transports` and `gladysPlus` follow the facets of the in-app catalog
// (docs/specs/integration-catalog-categories.md in the Gladys repository).

const nativeIntegrations = [
  {
    key: "zigbee2mqtt",
    doc: "zigbee2mqtt",
    cover: "zigbee2mqtt.jpg",
    categories: ["protocols"],
    transports: ["local"],
    name: { en: "Zigbee2MQTT" },
    description: {
      en: "Thousands of Zigbee devices from hundreds of brands, 100% local, without any vendor hub.",
      fr: "Des milliers d'appareils Zigbee de centaines de marques, 100 % local, sans box constructeur.",
      de: "Tausende Zigbee-Geräte von Hunderten Marken, 100 % lokal, ohne Hersteller-Hub.",
      es: "Miles de dispositivos Zigbee de cientos de marcas, 100 % local, sin hub del fabricante.",
    },
  },
  {
    key: "matter",
    doc: "matter",
    cover: "matter.jpg",
    categories: ["protocols"],
    transports: ["local"],
    name: { en: "Matter" },
    description: {
      en: "The universal smart home standard: add Matter devices from any brand, 100% local.",
      fr: "Le standard universel de la maison connectée : vos appareils Matter de toutes marques, 100 % local.",
      de: "Der universelle Smart-Home-Standard: Matter-Geräte jeder Marke, 100 % lokal.",
      es: "El estándar universal del hogar inteligente: dispositivos Matter de cualquier marca, 100 % local.",
    },
  },
  {
    key: "mqtt",
    doc: "mqtt",
    cover: "mqtt.jpg",
    categories: ["protocols"],
    transports: ["local"],
    name: { en: "MQTT" },
    description: {
      en: "Create virtual devices driven over MQTT, the universal glue of DIY projects.",
      fr: "Créez des appareils virtuels pilotés en MQTT, le langage universel des projets DIY.",
      de: "Erstelle virtuelle Geräte, die per MQTT gesteuert werden: der Klebstoff jedes DIY-Projekts.",
      es: "Crea dispositivos virtuales controlados por MQTT, el pegamento universal de los proyectos DIY.",
    },
  },
  {
    key: "rtspCamera",
    doc: "camera",
    cover: "rtsp-camera.jpg",
    categories: ["security"],
    transports: ["local"],
    name: {
      en: "Cameras (RTSP)",
      fr: "Caméras (RTSP)",
      de: "Kameras (RTSP)",
      es: "Cámaras (RTSP)",
    },
    description: {
      en: "Show the live stream of any RTSP or HTTP camera, locally, whatever its brand.",
      fr: "Affichez le flux de n'importe quelle caméra RTSP ou HTTP, en local, quelle que soit la marque.",
      de: "Zeige den Livestream jeder RTSP- oder HTTP-Kamera an, lokal und egal welcher Marke.",
      es: "Muestra la imagen en directo de cualquier cámara RTSP o HTTP, en local y sea cual sea la marca.",
    },
  },
  {
    key: "bluetooth",
    doc: "bluetooth",
    cover: "bluetooth.jpg",
    categories: ["network", "protocols"],
    transports: ["local"],
    name: {
      en: "Bluetooth Presence",
      fr: "Présence Bluetooth",
      de: "Bluetooth-Anwesenheit",
      es: "Presencia Bluetooth",
    },
    description: {
      en: "Know who is home from their phone or a Bluetooth tag.",
      fr: "Sachez qui est à la maison grâce à son téléphone ou à un porte-clés Bluetooth.",
      de: "Erkenne am Handy oder an einem Bluetooth-Anhänger, wer zu Hause ist.",
      es: "Sabe quién está en casa gracias a su móvil o a un llavero Bluetooth.",
    },
  },
  {
    key: "owntracks",
    doc: "owntracks",
    cover: "owntracks.jpg",
    categories: ["network"],
    transports: [],
    gladysPlus: true,
    name: { en: "OwnTracks" },
    description: {
      en: "Send your phone's location to Gladys and trigger scenes when you leave or come home.",
      fr: "Envoyez la position de votre téléphone à Gladys et déclenchez des scènes en partant ou en rentrant.",
      de: "Sende den Standort deines Handys an Gladys und löse beim Gehen oder Heimkommen Szenen aus.",
      es: "Envía la ubicación de tu móvil a Gladys y lanza escenas al salir o al volver a casa.",
    },
  },
  {
    key: "enedis",
    doc: "enedis",
    cover: "enedis.jpg",
    categories: ["energy"],
    transports: ["cloud"],
    gladysPlus: true,
    name: { en: "Enedis" },
    description: {
      en: "The electricity consumption of your Linky meter, straight into Gladys.",
      fr: "La consommation électrique de votre compteur Linky, directement dans Gladys.",
      de: "Der Stromverbrauch deines Linky-Zählers, direkt in Gladys.",
      es: "El consumo eléctrico de tu contador Linky, directamente en Gladys.",
    },
  },
  {
    key: "energyMonitoring",
    doc: "energy-monitoring",
    cover: "energy-monitoring.jpg",
    categories: ["energy"],
    transports: ["local"],
    name: {
      en: "Energy Monitoring",
      fr: "Suivi de l'énergie",
      de: "Energieüberwachung",
      es: "Supervisión de energía",
    },
    description: {
      en: "Track your electricity consumption and what it costs you, device by device.",
      fr: "Suivez votre consommation d'électricité et ce qu'elle vous coûte, appareil par appareil.",
      de: "Verfolge deinen Stromverbrauch und was er dich kostet, Gerät für Gerät.",
      es: "Sigue tu consumo eléctrico y lo que te cuesta, dispositivo por dispositivo.",
    },
  },
  {
    key: "thermostat",
    doc: "thermostat",
    cover: "thermostat.jpg",
    categories: ["climate"],
    transports: ["local"],
    name: { en: "Thermostat", es: "Termostato" },
    description: {
      en: "Create virtual thermostats, or schedule the ones you already have.",
      fr: "Créez des thermostats virtuels, ou programmez ceux que vous avez déjà.",
      de: "Erstelle virtuelle Thermostate oder programmiere deine vorhandenen.",
      es: "Crea termostatos virtuales o programa los que ya tienes.",
    },
  },
  {
    key: "lanManager",
    doc: "lan-manager",
    cover: "lan-manager.jpg",
    categories: ["network"],
    transports: ["local"],
    name: { en: "LAN Manager", de: "LAN-Manager", es: "Gestor LAN" },
    description: {
      en: "Presence detection by scanning the devices connected to your network.",
      fr: "Détection de présence en scannant les appareils connectés à votre réseau.",
      de: "Anwesenheitserkennung durch einen Scan der Geräte in deinem Netzwerk.",
      es: "Detección de presencia escaneando los dispositivos conectados a tu red.",
    },
  },
  {
    key: "matterbridge",
    doc: "matterbridge",
    cover: "matterbridge.jpg",
    categories: ["protocols"],
    transports: ["local"],
    name: { en: "Matterbridge" },
    description: {
      en: "Bring the devices exposed by Matterbridge and its plugins into Gladys.",
      fr: "Intégrez à Gladys les appareils exposés par Matterbridge et ses plugins.",
      de: "Hol die Geräte, die Matterbridge und seine Plugins bereitstellen, in Gladys.",
      es: "Lleva a Gladys los dispositivos que exponen Matterbridge y sus plugins.",
    },
  },
  {
    key: "airplay",
    doc: "airplay",
    cover: "airplay.jpg",
    categories: ["multimedia"],
    transports: ["local"],
    name: { en: "AirPlay" },
    description: {
      en: "Make Gladys speak and play sounds on your AirPlay speakers and HomePods.",
      fr: "Faites parler Gladys et jouez des sons sur vos enceintes AirPlay et HomePod.",
      de: "Lass Gladys auf deinen AirPlay-Lautsprechern und HomePods sprechen und Töne abspielen.",
      es: "Haz que Gladys hable y reproduzca sonidos en tus altavoces AirPlay y HomePod.",
    },
  },
  {
    key: "alexa",
    doc: "alexa",
    cover: "alexa.jpg",
    categories: ["assistants"],
    transports: ["cloud"],
    gladysPlus: true,
    name: { en: "Amazon Alexa" },
    description: {
      en: "Control your Gladys devices by voice with Alexa.",
      fr: "Contrôlez vos appareils Gladys à la voix avec Alexa.",
      de: "Steuere deine Gladys-Geräte per Sprache mit Alexa.",
      es: "Controla tus dispositivos de Gladys con la voz a través de Alexa.",
    },
  },
  {
    key: "googleHome",
    doc: "google-home",
    cover: "google-home.jpg",
    categories: ["assistants"],
    transports: ["cloud"],
    gladysPlus: true,
    name: { en: "Google Home" },
    description: {
      en: "Control your Gladys devices by voice with Google Home.",
      fr: "Contrôlez vos appareils Gladys à la voix avec Google Home.",
      de: "Steuere deine Gladys-Geräte per Sprache mit Google Home.",
      es: "Controla tus dispositivos de Gladys con la voz a través de Google Home.",
    },
  },
  {
    key: "homekit",
    doc: "homekit",
    cover: "homekit.jpg",
    categories: ["assistants"],
    transports: ["local"],
    name: { en: "Apple HomeKit" },
    description: {
      en: "Bring your devices into the Apple Home app and control them with Siri.",
      fr: "Retrouvez vos appareils dans l'app Maison d'Apple et pilotez-les avec Siri.",
      de: "Bring deine Geräte in die Home-App von Apple und steuere sie mit Siri.",
      es: "Lleva tus dispositivos a la app Casa de Apple y contrólalos con Siri.",
    },
  },
  {
    key: "openai",
    doc: "openai",
    cover: "openai.jpg",
    categories: ["assistants"],
    transports: ["cloud"],
    gladysPlus: true,
    name: {
      en: "Artificial Intelligence",
      fr: "Intelligence artificielle",
      de: "Künstliche Intelligenz",
      es: "Inteligencia artificial",
    },
    description: {
      en: "Talk to your home in plain language, with AI models hosted in France.",
      fr: "Parlez à votre maison en langage naturel, avec des modèles d'IA hébergés en France.",
      de: "Sprich in natürlicher Sprache mit deinem Zuhause, mit in Frankreich gehosteten KI-Modellen.",
      es: "Habla con tu casa en lenguaje natural, con modelos de IA alojados en Francia.",
    },
  },
  {
    key: "mcp",
    doc: "mcp",
    cover: "mcp.jpg",
    categories: ["assistants"],
    transports: ["local"],
    gladysPlus: true,
    name: { en: "MCP" },
    description: {
      en: "Connect Claude, Mistral or any AI agent to your home with the Model Context Protocol.",
      fr: "Connectez Claude, Mistral ou n'importe quel agent IA à votre maison grâce au protocole MCP.",
      de: "Verbinde Claude, Mistral oder jeden KI-Agenten über das Model Context Protocol mit deinem Zuhause.",
      es: "Conecta Claude, Mistral o cualquier agente de IA a tu casa con el Model Context Protocol.",
    },
  },
];

module.exports = nativeIntegrations;
