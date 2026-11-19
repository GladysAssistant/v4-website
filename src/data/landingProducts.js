/**
 * Hardware to buy for a landing page, keyed by the page's route
 * (/<key>/). <AmazonProducts page="<key>" lang={lang} /> turns each product
 * into an Amazon search link carrying the partner id of the page's language,
 * shown in a box on the page. Same format as integrationProducts.js:
 * - a string when the same words work in every language (a brand and a model);
 * - `{ en, fr }` when they need translating, or when the product is only worth
 *   showing in one of the two stores (leave the other language out).
 *
 * The words are both the text of the link ("<product> on Amazon") and the
 * Amazon search, so they read as a product name: a brand and a model, not a
 * generic search ("Zigbee smart plug") that would land on products Gladys
 * may not support.
 *
 * Only languages with an Amazon partner id show the box (en, fr: see
 * src/utils/affiliateLinks.js).
 *
 * Choices worth knowing before editing:
 * - No mini-PC in French: the French site sells its own ready-to-use kit
 *   (/starter-kit/), which an Amazon link would undercut.
 * - Sinopé and the Hydro-Québec / Ontario pages target Canada: their products
 *   are English only (amazon.fr doesn't ship there). Heures creuses and EDF
 *   Tempo target France: their products are French only.
 * - /best-smart-home-hub/ promises "no affiliate rankings" and has no entry.
 *
 * Kept in CommonJS like integrationProducts.js.
 */
const ZIGBEE_DONGLE = "Sonoff ZBDongle-E";
const ZIGBEE_DONGLE_EN = { en: ZIGBEE_DONGLE };
const ZWAVE_STICK = { en: "Zooz ZST39 800", fr: "Aeotec Z-Stick 7" };
const ENERGY_PLUG = {
  en: "THIRDREALITY Zigbee Smart Plug",
  fr: "Prise Zigbee NOUS A1Z",
};
const ENERGY_PLUG_FR = { fr: ENERGY_PLUG.fr };
const MINI_PC = { en: "Beelink Mini S13" };
const RASPBERRY_PI_5 = { en: "Raspberry Pi 5" };
const AQARA_DOOR = {
  en: "Aqara Door and Window Sensor",
  fr: "Capteur d'ouverture Aqara",
};
const AQARA_MOTION = {
  en: "Aqara Motion Sensor P1",
  fr: "Détecteur de mouvement Aqara P1",
};
const AQARA_CLIMATE = {
  en: "Aqara Temperature and Humidity Sensor",
  fr: "Capteur de température et d'humidité Aqara",
};
const AQARA_LEAK = {
  en: "Aqara Water Leak Sensor",
  fr: "Détecteur de fuite d'eau Aqara",
};
const SINOPE_THERMOSTAT = { en: "Sinopé TH1123ZB" };
const SINOPE_LOAD_CONTROLLER = { en: "Sinopé RM3500ZB" };
const SINOPE_VALVE = { en: "Sinopé Sedna valve" };
const NODON_PILOT_WIRE = { fr: "NodOn SIN-4-FP-21" };
const NODON_RELAY = { fr: "NodOn SIN-4-1-20" };
const REOLINK_POE = "Reolink RLC-520A";
const ZIGBEE_SIREN = { en: "Heiman HS2WD-E", fr: "Sirène Heiman HS2WD-E" };

module.exports = {
  // Hardware guides
  "mini-pc-home-automation": [
    MINI_PC,
    RASPBERRY_PI_5,
    { en: "Raspberry Pi SSD Kit" },
    ZIGBEE_DONGLE_EN,
  ],
  "home-assistant-green-alternative": [
    MINI_PC,
    RASPBERRY_PI_5,
    ZIGBEE_DONGLE,
    ZWAVE_STICK,
  ],
  "local-smart-home": [MINI_PC, ZIGBEE_DONGLE, AQARA_MOTION, ENERGY_PLUG],
  "zigbee2mqtt-without-home-assistant": [
    ZIGBEE_DONGLE,
    "Sonoff ZBDongle-P",
    "SMLIGHT SLZB-06",
  ],
  "z-wave-js-ui-without-home-assistant": [
    ZWAVE_STICK,
    { en: "Aeotec Z-Stick 7 Plus", fr: "Fibaro Door/Window Sensor 2" },
    { en: "Zooz ZSE18", fr: "Fibaro Wall Plug" },
  ],
  "zigbee-vs-matter-vs-zwave": [ZIGBEE_DONGLE, ZWAVE_STICK, "Eve Energy"],
  "matter-hub": [
    "Apple TV 4K",
    "Apple HomePod mini",
    { en: "Google Nest Hub (2nd gen)", fr: "Google Nest Hub (2e génération)" },
    { en: "Amazon Echo (4th gen)", fr: "Amazon Echo (4e génération)" },
  ],

  // Brands without their cloud or hub
  "aqara-without-hub": [
    AQARA_DOOR,
    AQARA_MOTION,
    AQARA_CLIMATE,
    AQARA_LEAK,
    { en: "Aqara Vibration Sensor", fr: "Capteur de vibration Aqara" },
    { en: "Aqara Wireless Mini Switch", fr: "Interrupteur sans fil Aqara" },
    ZIGBEE_DONGLE,
  ],
  "tuya-zigbee-without-hub": [
    ENERGY_PLUG,
    { en: "MOES Zigbee switch module", fr: "Module interrupteur Zigbee MOES" },
    { en: "MOES Zigbee curtain switch", fr: "Module volet roulant Zigbee MOES" },
    ZIGBEE_DONGLE,
  ],
  "philips-hue-without-bridge": [
    {
      en: "Philips Hue White and Color Ambiance A19",
      fr: "Philips Hue White and Color Ambiance E27",
    },
    "Philips Hue White Ambiance GU10",
    "Philips Hue Lightstrip Plus",
    "Philips Hue Dimmer Switch",
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
    { en: "Sinopé TH1300ZB" },
    SINOPE_LOAD_CONTROLLER,
    SINOPE_VALVE,
    ZIGBEE_DONGLE_EN,
  ],
  "reolink-rtsp-url": [REOLINK_POE, "Reolink RLC-810A", "Reolink E1 Pro"],
  "works-with": [
    { en: "Philips Hue Starter Kit", fr: "Kit de démarrage Philips Hue" },
    { en: "TP-Link Kasa KP125M", fr: "TP-Link Tapo P110" },
    "TP-Link Tapo C210",
    "Shelly 1PM Gen3",
    "Sonos Era 100",
  ],

  // Use cases
  "water-leak-detection": [
    AQARA_LEAK,
    { en: "THIRDREALITY Zigbee Water Leak Sensor" },
    SINOPE_VALVE,
    { fr: "Aqara Valve Controller T1" },
    ZIGBEE_DONGLE,
  ],
  "diy-home-alarm-system": [
    AQARA_MOTION,
    AQARA_DOOR,
    ZIGBEE_SIREN,
    REOLINK_POE,
    ZIGBEE_DONGLE,
  ],
  "presence-simulation": [
    { en: "Philips Hue White A19", fr: "Philips Hue White E27" },
    ENERGY_PLUG,
    { fr: "NodOn SIN-4-RS-20" },
    ZIGBEE_DONGLE,
  ],
  "nest-thermostat-alternative": [
    SINOPE_THERMOSTAT,
    { fr: "Eve Thermo" },
    { en: "Sonoff TRVZB", fr: "Tête thermostatique Sonoff TRVZB" },
    AQARA_CLIMATE,
  ],
  "home-energy-monitoring": ["Shelly Pro 3EM", "Shelly EM", ENERGY_PLUG],

  // Electricity rates
  "heures-creuses": [NODON_RELAY, ENERGY_PLUG_FR, NODON_PILOT_WIRE],
  "edf-tempo": [NODON_PILOT_WIRE, NODON_RELAY, ENERGY_PLUG_FR],
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
    { en: ENERGY_PLUG.en },
    SINOPE_LOAD_CONTROLLER,
    ZIGBEE_DONGLE_EN,
  ],
};
