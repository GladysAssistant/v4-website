// The integrations scrolling under the homepage hero: well-known brands and
// standards, picked so that a visitor recognizes something they own at a
// glance. Two rows, one per line of the marquee.
//
// `name` is the exact name of the integration in the catalog (the `name.en`
// of src/data/nativeIntegrations.js, or the `name` of a community integration
// in src/data/externalIntegrations.json); `label` is a shorter name to show,
// when the catalog one is long. An entry the catalog does not carry (renamed
// or removed from the store) is dropped at build time by
// plugins/integrations-summary.js, so the homepage never shows an integration
// that does not exist.

const homeIntegrationsShowcase = [
  [
    { name: "Zigbee2MQTT", label: "Zigbee" },
    { name: "Matter" },
    { name: "Apple HomeKit" },
    { name: "Google Home" },
    { name: "Amazon Alexa" },
    { name: "Philips Hue" },
    { name: "IKEA DIRIGERA & TRÅDFRI", label: "IKEA" },
    { name: "Shelly" },
    { name: "Sonos" },
    { name: "Tuya" },
    { name: "Netatmo" },
    { name: "Xiaomi Home", label: "Xiaomi" },
    { name: "SmartThings" },
    { name: "Google Nest" },
    { name: "Tapo" },
    { name: "Reolink" },
    { name: "Ring" },
    { name: "eufy Security" },
    { name: "SwitchBot" },
    { name: "Nanoleaf" },
    { name: "Legrand Home + Control", label: "Legrand" },
  ],
  [
    { name: "Daikin Cloud", label: "Daikin" },
    { name: "Atlantic Cozytouch" },
    { name: "Viessmann ViCare", label: "Viessmann" },
    { name: "Enedis", label: "Linky" },
    { name: "Enphase IQ Gateway", label: "Enphase" },
    { name: "SolarEdge" },
    { name: "Zendure" },
    { name: "EcoFlow" },
    { name: "Roborock" },
    { name: "iRobot Roomba" },
    { name: "Dyson" },
    { name: "Home Connect" },
    { name: "LG ThinQ" },
    { name: "Apple TV" },
    { name: "Spotify" },
    { name: "Plex" },
    { name: "Renault / Dacia" },
    { name: "Freebox" },
  ],
];

module.exports = homeIntegrationsShowcase;
