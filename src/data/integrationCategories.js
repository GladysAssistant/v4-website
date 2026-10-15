// Browse categories of the integrations catalog: the same controlled
// vocabulary, order, labels and Feather icons as the catalog inside Gladys
// (INTEGRATION_CATALOG_CATEGORIES in server/utils/constants.js and
// `integration.root.menu` in the front i18n files of GladysAssistant/Gladys).
// The store index carries these keys for every community integration, and
// src/data/nativeIntegrations.js for the built-in ones.
//
// The sidebar (sidebars.js) groups the integration pages by the same
// categories: its labels are translated in
// i18n/<locale>/docusaurus-plugin-content-docs/current.json.

const integrationCategories = [
  {
    key: "climate",
    icon: "thermometer",
    label: {
      en: "Heating & cooling",
      fr: "Chauffage & climatisation",
      de: "Heizung & Klima",
      es: "Calefacción y refrigeración",
    },
  },
  {
    key: "lighting",
    icon: "zap",
    label: {
      en: "Lighting, plugs & covers",
      fr: "Éclairage, prises & volets",
      de: "Beleuchtung, Steckdosen & Rollläden",
      es: "Iluminación, enchufes y persianas",
    },
  },
  {
    key: "energy",
    icon: "battery-charging",
    label: { en: "Energy", fr: "Énergie", de: "Energie", es: "Energía" },
  },
  {
    key: "security",
    icon: "shield",
    label: {
      en: "Cameras & security",
      fr: "Caméras & sécurité",
      de: "Kameras & Sicherheit",
      es: "Cámaras y seguridad",
    },
  },
  {
    key: "multimedia",
    icon: "speaker",
    label: {
      en: "Multimedia",
      fr: "Multimédia",
      de: "Multimedia",
      es: "Multimedia",
    },
  },
  {
    key: "appliances",
    icon: "coffee",
    label: {
      en: "Appliances & garden",
      fr: "Électroménager & jardin",
      de: "Haushaltsgeräte & Garten",
      es: "Electrodomésticos y jardín",
    },
  },
  {
    key: "environment",
    icon: "cloud",
    label: {
      en: "Weather & environment",
      fr: "Météo & environnement",
      de: "Wetter & Umwelt",
      es: "Meteorología y entorno",
    },
  },
  {
    key: "protocols",
    icon: "radio",
    label: {
      en: "Protocols & hubs",
      fr: "Protocoles & passerelles",
      de: "Protokolle & Gateways",
      es: "Protocolos y concentradores",
    },
  },
  {
    key: "network",
    icon: "wifi",
    label: {
      en: "Network & presence",
      fr: "Réseau & présence",
      de: "Netzwerk & Anwesenheit",
      es: "Red y presencia",
    },
  },
  {
    key: "notifications",
    icon: "message-square",
    label: {
      en: "Messaging & notifications",
      fr: "Messages & notifications",
      de: "Nachrichten & Benachrichtigungen",
      es: "Mensajería y notificaciones",
    },
  },
  {
    key: "assistants",
    icon: "mic",
    label: {
      en: "Voice assistants & AI",
      fr: "Assistants vocaux & IA",
      de: "Sprachassistenten & KI",
      es: "Asistentes de voz e IA",
    },
  },
  {
    key: "services",
    icon: "calendar",
    label: {
      en: "Services",
      fr: "Services",
      de: "Dienste",
      es: "Servicios",
    },
  },
];

module.exports = integrationCategories;
