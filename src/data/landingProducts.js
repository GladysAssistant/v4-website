/**
 * Hardware to buy for a landing page, keyed by the page's route
 * (/<key>/). <AmazonProducts page="<key>" lang={lang} /> turns each product
 * into an Amazon search link carrying the partner id of the page's language,
 * shown in a box on the page. Same format as integrationProducts.js:
 * - a string when the same words work in every language (a brand and a model);
 * - `{ en, fr }` when they need translating, or when the product is only worth
 *   showing in one of the two stores (leave the other language out).
 *
 * Only languages with an Amazon partner id show the box (en, fr: see
 * src/utils/affiliateLinks.js).
 *
 * Choices worth knowing before editing:
 * - No mini-PC in French: the French site sells its own ready-to-use kit
 *   (/starter-kit/), which an Amazon link would undercut.
 * - Sinopé and the Hydro-Québec / Ontario pages target Canada: amazon.fr
 *   doesn't sell Sinopé, so those products are English only.
 * - /best-smart-home-hub/ promises "no affiliate rankings" and has no entry.
 *
 * Kept in CommonJS like integrationProducts.js.
 */
const ZIGBEE_DONGLE = {
  en: "Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-E",
  fr: "Sonoff ZBDongle-E clé Zigbee 3.0",
};
const ZIGBEE_SMART_PLUG = {
  en: "Zigbee smart plug with energy monitoring",
  fr: "prise connectée Zigbee mesure de consommation",
};
// Pages aimed at one country only show the store of that country.
const ZIGBEE_DONGLE_EN = { en: ZIGBEE_DONGLE.en };
const ZIGBEE_SMART_PLUG_FR = { fr: ZIGBEE_SMART_PLUG.fr };
const MINI_PC = { en: "Beelink Mini S13 N150" };
const RASPBERRY_PI_5 = { en: "Raspberry Pi 5 8GB" };
const AQARA_DOOR = {
  en: "Aqara Door and Window Sensor",
  fr: "Aqara capteur d'ouverture porte fenêtre",
};
const AQARA_MOTION = {
  en: "Aqara Motion Sensor P1",
  fr: "Aqara détecteur de mouvement P1",
};
const AQARA_LEAK = {
  en: "Aqara Water Leak Sensor",
  fr: "Aqara détecteur de fuite d'eau",
};
const SINOPE_THERMOSTAT = { en: "Sinope TH1123ZB Zigbee thermostat" };
const SINOPE_LOAD_CONTROLLER = { en: "Sinope RM3500ZB water heater controller" };
const REOLINK_POE = {
  en: "Reolink RLC-520A PoE camera",
  fr: "Reolink RLC-520A caméra PoE",
};

module.exports = {
  // Hardware guides
  "mini-pc-home-automation": [
    MINI_PC,
    { en: "Intel N100 mini PC" },
    RASPBERRY_PI_5,
    { en: "Raspberry Pi 5 NVMe SSD kit" },
    ZIGBEE_DONGLE,
  ],
  "home-assistant-green-alternative": [
    MINI_PC,
    RASPBERRY_PI_5,
    ZIGBEE_DONGLE,
    { en: "Zooz ZST39 800 Z-Wave stick", fr: "Aeotec Z-Stick 7 clé Z-Wave" },
  ],
  "local-smart-home": [MINI_PC, ZIGBEE_DONGLE, AQARA_MOTION, ZIGBEE_SMART_PLUG],
  "zigbee2mqtt-without-home-assistant": [
    ZIGBEE_DONGLE,
    "Sonoff ZBDongle-P CC2652P",
    "SMLIGHT SLZB-06",
    { en: "USB extension cable 1m", fr: "rallonge USB 1m" },
  ],
  "z-wave-js-ui-without-home-assistant": [
    { en: "Zooz ZST39 800 Z-Wave stick", fr: "Aeotec Z-Stick 7 clé Z-Wave" },
    { en: "Aeotec Z-Stick 7 Plus", fr: "Fibaro Door Window Sensor 2" },
    { en: "Zooz Z-Wave motion sensor", fr: "Fibaro Wall Plug Z-Wave" },
  ],
  "zigbee-vs-matter-vs-zwave": [
    ZIGBEE_DONGLE,
    { en: "Zooz ZST39 800 Z-Wave stick", fr: "Aeotec Z-Stick 7 clé Z-Wave" },
    { en: "Matter smart plug", fr: "prise connectée Matter" },
  ],
  "matter-hub": [
    { en: "Apple TV 4K Wi-Fi + Ethernet", fr: "Apple TV 4K Wi-Fi + Ethernet" },
    "Apple HomePod mini",
    { en: "Google Nest Hub 2nd gen", fr: "Google Nest Hub 2e génération" },
    { en: "Amazon Echo 4th gen", fr: "Amazon Echo 4e génération" },
  ],

  // Brands without their cloud or hub
  "aqara-without-hub": [
    AQARA_DOOR,
    AQARA_MOTION,
    {
      en: "Aqara Temperature and Humidity Sensor",
      fr: "Aqara capteur température humidité",
    },
    AQARA_LEAK,
    { en: "Aqara Vibration Sensor", fr: "Aqara capteur de vibration" },
    { en: "Aqara Wireless Mini Switch", fr: "Aqara interrupteur sans fil" },
    ZIGBEE_DONGLE,
  ],
  "tuya-zigbee-without-hub": [
    ZIGBEE_SMART_PLUG,
    { en: "Tuya Zigbee switch module", fr: "module interrupteur Zigbee Tuya" },
    {
      en: "Tuya Zigbee temperature humidity sensor",
      fr: "capteur température humidité Zigbee Tuya",
    },
    {
      en: "Tuya Zigbee roller shutter module",
      fr: "module volet roulant Zigbee Tuya",
    },
    ZIGBEE_DONGLE,
  ],
  "philips-hue-without-bridge": [
    {
      en: "Philips Hue White and Color Ambiance A19",
      fr: "Philips Hue White and Color Ambiance E27",
    },
    "Philips Hue White Ambiance GU10",
    "Philips Hue Lightstrip Plus",
    { en: "Philips Hue Dimmer Switch", fr: "Philips Hue télécommande Dimmer Switch" },
    ZIGBEE_DONGLE,
  ],
  // IKEA isn't sold on Amazon: only the dongle that pairs it without DIRIGERA.
  "ikea-smart-home": [ZIGBEE_DONGLE],
  "shelly-without-cloud": [
    "Shelly 1PM Gen3",
    "Shelly Pro 3EM",
    "Shelly PM Mini Gen3",
    "Shelly Plug S Gen3",
  ],
  "sinope-zigbee": [
    SINOPE_THERMOSTAT,
    { en: "Sinope TH1300ZB floor heating thermostat" },
    SINOPE_LOAD_CONTROLLER,
    { en: "Sinope Sedna smart water valve" },
    ZIGBEE_DONGLE_EN,
  ],
  "reolink-rtsp-url": [
    REOLINK_POE,
    { en: "Reolink RLC-810A 4K PoE camera", fr: "Reolink RLC-810A caméra PoE 4K" },
    "Reolink E1 Pro",
    { en: "PoE switch", fr: "switch PoE" },
  ],
  "works-with": [
    { en: "Philips Hue starter kit", fr: "Philips Hue kit de démarrage" },
    { en: "TP-Link Kasa smart plug", fr: "TP-Link Tapo prise connectée" },
    { en: "TP-Link Tapo camera", fr: "TP-Link Tapo caméra" },
    "Shelly 1PM Gen3",
    { en: "Sonos Era 100", fr: "Sonos Era 100" },
    { en: "Roborock robot vacuum", fr: "Roborock aspirateur robot" },
  ],

  // Use cases
  "water-leak-detection": [
    AQARA_LEAK,
    { en: "Third Reality Zigbee water leak sensor" },
    { en: "Sinope Sedna smart water valve" },
    { en: "Zigbee motorized water valve", fr: "vanne d'eau motorisée Zigbee" },
    ZIGBEE_DONGLE,
  ],
  "diy-home-alarm-system": [
    AQARA_MOTION,
    AQARA_DOOR,
    { en: "Zigbee siren", fr: "sirène Zigbee" },
    REOLINK_POE,
    ZIGBEE_DONGLE,
  ],
  "presence-simulation": [
    { en: "Zigbee smart bulb", fr: "ampoule connectée Zigbee" },
    { en: "Zigbee smart plug", fr: "prise connectée Zigbee" },
    {
      en: "Zigbee roller shutter module",
      fr: "module volet roulant Zigbee",
    },
    ZIGBEE_DONGLE,
  ],
  "nest-thermostat-alternative": [
    { en: "Matter smart thermostat", fr: "thermostat connecté Matter" },
    SINOPE_THERMOSTAT,
    { en: "Sonoff TRVZB Zigbee radiator valve", fr: "Sonoff TRVZB tête thermostatique Zigbee" },
    {
      en: "Aqara Temperature and Humidity Sensor",
      fr: "Aqara capteur température humidité",
    },
  ],
  "home-energy-monitoring": [
    "Shelly Pro 3EM",
    { en: "Shelly EM", fr: "Shelly EM" },
    ZIGBEE_SMART_PLUG,
    { en: "NOUS A1Z Zigbee smart plug", fr: "NOUS A1Z prise Zigbee" },
  ],

  // Electricity rates
  "heures-creuses": [
    { fr: "module relais Zigbee 16A chauffe-eau" },
    ZIGBEE_SMART_PLUG_FR,
    { fr: "NodOn module fil pilote Zigbee" },
  ],
  "edf-tempo": [
    { fr: "NodOn module fil pilote Zigbee" },
    { fr: "module relais Zigbee 16A chauffe-eau" },
    ZIGBEE_SMART_PLUG_FR,
  ],
  "hydro-quebec-flex-d": [
    SINOPE_THERMOSTAT,
    SINOPE_LOAD_CONTROLLER,
    ZIGBEE_DONGLE_EN,
  ],
  "hydro-quebec-peak-events": [
    SINOPE_THERMOSTAT,
    SINOPE_LOAD_CONTROLLER,
    ZIGBEE_DONGLE_EN,
  ],
  "ontario-electricity-rates": [
    { en: "Zigbee smart plug with energy monitoring" },
    SINOPE_LOAD_CONTROLLER,
    ZIGBEE_DONGLE_EN,
  ],
};
