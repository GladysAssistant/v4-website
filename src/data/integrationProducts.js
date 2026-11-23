/**
 * Hardware to buy for an external integration, keyed by the slug of its page
 * (/docs/integrations/external/<slug>/). `yarn load-external-integrations`
 * turns each product into an Amazon search link carrying the partner id of the
 * page's language, shown in a box under the page header. The documentation
 * written by the integration author is left untouched.
 *
 * A product is the text of the link, and the words searched on Amazon:
 * - a string when the same words work in every language (a brand and a model);
 * - `{ en, fr, de }` when they need translating, or when the product is only
 *   sold in some of the stores (leave the other languages out). The German
 *   words name the European product when the English one is American.
 *
 * Search links rather than product pages: they never go out of stock, and
 * they work in every Amazon store.
 *
 * An integration with nothing to buy on Amazon (a web service, a car, a heat
 * pump fitted by an installer...) simply has no entry. The weekly refresh
 * lists the integrations new to the store that have none, see
 * .github/workflows/refresh-external-integrations.yml.
 *
 * Kept in CommonJS so the generation script can load it.
 */
const ESP32 = "ESP32 DevKit";
const ROBOT_VACUUM = (brand) => ({
  en: `${brand} robot vacuum`,
  fr: `aspirateur robot ${brand}`,
  de: `${brand} Saugroboter`,
});
const CAMERA = (brand) => ({
  en: `${brand} security camera`,
  fr: `caméra de surveillance ${brand}`,
  de: `${brand} Überwachungskamera`,
});
const ROBOT_MOWER = (brand) => ({
  en: `${brand} robot mower`,
  fr: `robot tondeuse ${brand}`,
  de: `${brand} Mähroboter`,
});

module.exports = {
  // Air quality and weather stations
  airthings: ["Airthings Wave Plus", "Airthings View Plus", "Airthings Wave Radon"],
  airvisual: ["IQAir AirVisual Pro"],
  "ambient-weather": [{ en: "Ambient Weather WS-2902" }, { en: "Ambient Weather WS-5000" }],
  awair: ["Awair Element"],
  "bresser-weather-station": [
    { en: "Bresser weather station", fr: "station météo Bresser", de: "Bresser Wetterstation" },
  ],
  "cumulus-weather-display": [
    { en: "Ecowitt weather station", fr: "station météo Ecowitt", de: "Ecowitt Wetterstation" },
    { en: "Davis Vantage Vue", fr: "Davis Vantage Vue", de: "Davis Vantage Vue" },
  ],
  ecowitt: ["Ecowitt GW2000", "Ecowitt Wittboy", "Ecowitt WH51"],
  kaiterra: ["Kaiterra Laser Egg"],
  meteobridge: [{ en: "Davis Vantage Pro2", fr: "Davis Vantage Pro2", de: "Davis Vantage Pro2" }],
  "mobile-alerts": ["Mobile Alerts"],
  netatmo: [
    { en: "Netatmo Weather Station", fr: "station météo Netatmo", de: "Netatmo Wetterstation" },
    { en: "Netatmo Smart Thermostat", fr: "thermostat Netatmo", de: "Netatmo Thermostat" },
    { en: "Netatmo Smart Indoor Camera", fr: "caméra intérieure Netatmo", de: "Netatmo Innenkamera" },
  ],
  purpleair: [{ en: "PurpleAir Zen" }, { en: "PurpleAir Touch" }],
  qingping: ["Qingping Air Monitor", "Qingping CGG1"],
  "raspberry-shake": ["Raspberry Shake"],
  "rtl-433-433-868-mhz": ["RTL-SDR Blog V4", "Nooelec RTL-SDR"],
  "ruuvi-gateway": ["RuuviTag", "Ruuvi Gateway"],
  sensorpush: ["SensorPush HT.w", "SensorPush G1 WiFi Gateway"],
  "sensorpush-cloud": ["SensorPush HT.w", "SensorPush G1 WiFi Gateway"],
  tempest: ["WeatherFlow Tempest"],
  "weatherflow-tempest": ["WeatherFlow Tempest"],
  weatherlink: ["Davis Vantage Vue", "Davis Vantage Pro2", "Davis WeatherLink Live"],
  "weather-underground": [
    { en: "Ecowitt weather station", fr: "station météo Ecowitt", de: "Ecowitt Wetterstation" },
    { en: "Ambient Weather WS-2902" },
  ],
  weewx: [
    { en: "Ecowitt weather station", fr: "station météo Ecowitt", de: "Ecowitt Wetterstation" },
    "Davis Vantage Vue",
  ],
  "x-sense": [
    { en: "X-Sense smart smoke detector", fr: "détecteur de fumée connecté X-Sense", de: "X-Sense Rauchmelder" },
    { en: "X-Sense water leak detector", fr: "détecteur de fuite d'eau X-Sense", de: "X-Sense Wassermelder" },
  ],
  "nest-protect": ["Google Nest Protect"],
  minut: ["Minut"],
  airgradient: [{ en: "AirGradient ONE" }],

  // Air purifiers, fans, heaters and thermostats
  blueair: ["Blueair Blue Pure", "Blueair HealthProtect"],
  dreo: [
    { en: "Dreo tower fan", fr: "ventilateur colonne Dreo", de: "Dreo Turmventilator" },
    { en: "Dreo air purifier", fr: "purificateur d'air Dreo", de: "Dreo Luftreiniger" },
    { en: "Dreo space heater", fr: "chauffage Dreo", de: "Dreo Heizlüfter" },
  ],
  dyson: ["Dyson Purifier Cool", "Dyson Purifier Hot+Cool"],
  "philips-air": [
    { en: "Philips air purifier", fr: "purificateur d'air Philips", de: "Philips Luftreiniger" },
    { en: "Philips humidifier", fr: "humidificateur Philips", de: "Philips Luftbefeuchter" },
  ],
  "vesync-levoit": ["Levoit Core 300S", "Levoit Core 400S", "Levoit Classic 300S"],
  winix: [{ en: "Winix air purifier", fr: "purificateur d'air Winix", de: "Winix Luftreiniger" }],
  "xiaomi-miot": [
    "Xiaomi Smart Air Purifier 4",
    { en: "Xiaomi Smart Humidifier", fr: "humidificateur Xiaomi", de: "Xiaomi Luftbefeuchter" },
    { en: "Xiaomi Smart Standing Fan", fr: "ventilateur Xiaomi", de: "Xiaomi Standventilator" },
  ],
  "big-ass-fans": [{ en: "Big Ass Fans Haiku" }],
  "bond-bridge": [{ en: "Bond Bridge" }],
  "modern-forms": [{ en: "Modern Forms smart fan" }],
  "bosch-smart-home": [
    "Bosch Smart Home Controller II",
    { en: "Bosch Smart Home radiator thermostat II", fr: "thermostat de radiateur Bosch Smart Home II", de: "Bosch Smart Home Heizkörperthermostat II" },
  ],
  "danfoss-ally": ["Danfoss Ally"],
  ecobee: [{ en: "ecobee Smart Thermostat Premium" }, { en: "ecobee SmartSensor" }],
  flair: [{ en: "Flair Smart Vent" }, { en: "Flair Puck" }],
  "google-nest": [
    "Google Nest Learning Thermostat",
    "Google Nest Cam",
    "Google Nest Doorbell",
  ],
  heatzy: [{ fr: "Heatzy Pilote" }],
  "honeywell-evohome": ["Honeywell Evohome"],
  "honeywell-home-lyric": [
    { en: "Honeywell Home T9 thermostat", fr: "Honeywell Home T6", de: "Honeywell Home T6 Thermostat" },
    { en: "Honeywell Home T5 thermostat" },
  ],
  "honeywell-total-connect": [{ en: "Honeywell Wi-Fi thermostat" }],
  mill: [{ en: "Mill WiFi heater", fr: "radiateur Mill WiFi", de: "Mill WLAN Heizung" }],
  sensibo: ["Sensibo Air", "Sensibo Sky"],
  "sinope-neviweb": [{ en: "Sinopé smart thermostat" }],
  tado: [
    { en: "tado° Smart Thermostat", fr: "thermostat connecté tado°", de: "tado° Smartes Thermostat" },
    { en: "tado° Smart Radiator Thermostat", fr: "tête thermostatique tado°", de: "tado° Smartes Heizkörperthermostat" },
    { en: "tado° Smart AC Control", fr: "tado° climatisation", de: "tado° Smarte Klimaanlagen-Steuerung" },
  ],
  venstar: [{ en: "Venstar ColorTouch thermostat" }],
  switcher: [{ en: "Switcher smart water heater" }],
  "max-cube": ["eQ-3 radiator thermostat"],
  plugwise: [{ en: "Plugwise Anna", fr: "Plugwise Anna", de: "Plugwise Anna" }],
  aprilaire: [{ en: "Aprilaire 8840 thermostat" }],
  midea: [
    { en: "Midea U-Shaped window air conditioner", fr: "climatiseur mobile Midea", de: "Midea mobile Klimaanlage" },
    { en: "Midea dehumidifier", fr: "déshumidificateur Midea", de: "Midea Luftentfeuchter" },
  ],
  "tcl-home": [
    { en: "TCL window air conditioner", fr: "climatiseur mobile TCL", de: "TCL mobile Klimaanlage" },
    { en: "TCL dehumidifier", fr: "déshumidificateur TCL", de: "TCL Luftentfeuchter" },
  ],

  // Lighting
  aidot: [
    { en: "Linkind smart bulb", fr: "ampoule connectée Linkind", de: "Linkind smarte Glühbirne" },
    { en: "AiDot smart bulb", fr: "ampoule connectée AiDot", de: "AiDot smarte Glühbirne" },
  ],
  "art-net": [{ en: "Art-Net DMX node", fr: "nœud Art-Net DMX", de: "Art-Net DMX Node" }],
  cync: [{ en: "GE Cync smart bulb" }, { en: "GE Cync smart plug" }],
  "elgato-light": ["Elgato Key Light", "Elgato Key Light Air", "Elgato Light Strip"],
  govee: [
    { en: "Govee LED strip lights", fr: "ruban LED Govee", de: "Govee LED Strip" },
    { en: "Govee floor lamp", fr: "lampadaire Govee", de: "Govee Stehlampe" },
    { en: "Govee TV backlight", fr: "rétroéclairage TV Govee", de: "Govee TV Hintergrundbeleuchtung" },
  ],
  "hyperion-hyperhdr": [
    { en: "WS2812B LED strip", fr: "ruban LED WS2812B", de: "WS2812B LED Strip" },
    { en: "HDMI USB capture card", fr: "carte de capture HDMI USB", de: "HDMI USB Capture Card" },
  ],
  "ikea-dirigera-tradfri": ["IKEA DIRIGERA", "IKEA TRADFRI"],
  lifx: [
    { en: "LIFX smart bulb", fr: "ampoule LIFX", de: "LIFX smarte Glühbirne" },
    { en: "LIFX Lightstrip", fr: "LIFX Lightstrip", de: "LIFX Lightstrip" },
  ],
  "leviton-decora-smart-wi-fi": [{ en: "Leviton Decora Smart Wi-Fi switch" }],
  lutron: [{ en: "Lutron Caseta Smart Hub" }, { en: "Lutron Caseta dimmer" }],
  "magic-home": [
    { en: "Magic Home WiFi LED controller", fr: "contrôleur LED WiFi Magic Home", de: "Magic Home WLAN LED Controller" },
  ],
  milight: ["MiLight MiBoxer", { en: "MiLight bulb", fr: "ampoule MiLight", de: "MiLight Glühbirne" }],
  nanoleaf: ["Nanoleaf Shapes", "Nanoleaf Lines", "Nanoleaf Essentials"],
  openrgb: [{ en: "ARGB LED strip PC", fr: "ruban LED ARGB PC", de: "ARGB LED Strip PC" }],
  "philips-hue": [
    { en: "Philips Hue Bridge", fr: "pont Philips Hue", de: "Philips Hue Bridge" },
    { en: "Philips Hue White and Color starter kit", fr: "kit de démarrage Philips Hue White and Color", de: "Philips Hue White and Color Starter Set" },
    "Philips Hue Lightstrip",
  ],
  "philips-hue-sync-box": ["Philips Hue Play HDMI Sync Box"],
  twinkly: ["Twinkly Strings", "Twinkly Icicle"],
  wiz: [
    { en: "WiZ smart bulb", fr: "ampoule connectée WiZ", de: "WiZ smarte Glühbirne" },
    { en: "WiZ LED strip", fr: "ruban LED WiZ", de: "WiZ LED Strip" },
    { en: "WiZ smart plug", fr: "prise connectée WiZ", de: "WiZ smarte Steckdose" },
  ],
  wled: [
    { en: "WLED controller", fr: "contrôleur WLED", de: "WLED Controller" },
    { en: "WS2812B LED strip", fr: "ruban LED WS2812B", de: "WS2812B LED Strip" },
  ],
  yeelight: [
    { en: "Yeelight smart bulb", fr: "ampoule connectée Yeelight", de: "Yeelight smarte Glühbirne" },
    { en: "Yeelight LED strip", fr: "ruban LED Yeelight", de: "Yeelight LED Strip" },
  ],
  deako: [{ en: "Deako smart switch" }],
  "automate-pulse-hub-v2": [{ en: "Automate Pulse 2 hub" }],
  "soma-connect": [{ en: "SOMA Smart Shades 2" }, { en: "SOMA Connect" }],

  // Plugs, relays and DIY modules
  "ai-on-the-edge": ["ESP32-CAM"],
  blebox: ["BleBox switchBox"],
  broadlink: ["Broadlink RM4 Pro", "Broadlink RM4 Mini"],
  "chacon-dio": [{ fr: "Chacon DiO 2.0" }, { fr: "prise connectée DiO" }],
  esphome: [ESP32, "ESP8266 D1 Mini", "Athom ESPHome smart plug"],
  espresense: [ESP32],
  "espsomfy-rts": [ESP32, { en: "CC1101 433MHz module", fr: "module CC1101 433 MHz", de: "CC1101 433 MHz Modul" }],
  "homekit-controller": [
    { en: "HomeKit smart plug", fr: "prise connectée HomeKit", de: "HomeKit smarte Steckdose" },
    "Eve Energy",
    "Meross HomeKit",
  ],
  meross: [
    { en: "Meross smart plug", fr: "prise connectée Meross", de: "Meross smarte Steckdose" },
    { en: "Meross smart power strip", fr: "multiprise connectée Meross", de: "Meross smarte Steckdosenleiste" },
    { en: "Meross garage door opener", fr: "Meross ouvre-porte de garage", de: "Meross Garagentoröffner" },
  ],
  "mjpeg-snapshot-cameras": ["ESP32-CAM"],
  mysensors: ["Arduino Nano", "NRF24L01"],
  mystrom: ["myStrom WiFi Switch"],
  refoss: [
    { en: "Refoss smart plug", fr: "prise connectée Refoss", de: "Refoss smarte Steckdose" },
    { en: "Refoss energy monitor", fr: "compteur d'énergie Refoss", de: "Refoss Energiemessgerät" },
  ],
  shelly: ["Shelly 1PM Gen4", "Shelly Plug S", "Shelly 2PM", "Shelly Pro 3EM"],
  "sonoff-ewelink": ["Sonoff Basic R4", "Sonoff Mini R4", "Sonoff S60"],
  switchbot: ["SwitchBot Hub 2", "SwitchBot Bot", "SwitchBot Curtain 3"],
  tapo: [
    "TP-Link Tapo P110",
    "TP-Link Tapo C210",
    { en: "TP-Link Tapo smart bulb", fr: "ampoule connectée TP-Link Tapo", de: "TP-Link Tapo smarte Glühbirne" },
  ],
  tasmota: [
    { en: "Tasmota smart plug", fr: "prise connectée Tasmota", de: "Tasmota Steckdose" },
    "Sonoff Basic R4",
    "Athom Tasmota",
  ],
  "theengs-openmqttgateway": [ESP32, "Xiaomi LYWSD03MMC"],
  "tp-link-kasa": [
    { en: "Kasa Smart Plug", fr: "prise connectée TP-Link Kasa", de: "TP-Link Kasa smarte Steckdose" },
    { en: "Kasa Smart Light Switch" },
  ],
  tuya: [
    { en: "Tuya smart plug", fr: "prise connectée Tuya", de: "Tuya smarte Steckdose" },
    { en: "Smart Life smart bulb", fr: "ampoule connectée Smart Life", de: "Smart Life smarte Glühbirne" },
    { en: "Tuya WiFi thermostat", fr: "thermostat WiFi Tuya", de: "Tuya WLAN Thermostat" },
  ],
  wemo: [{ en: "Wemo Smart Plug" }],
  wyze: [{ en: "Wyze Cam v4" }, { en: "Wyze Plug" }, { en: "Wyze Bulb Color" }],
  yolink: [{ en: "YoLink Hub" }, { en: "YoLink water leak sensor" }],
  hubspace: [{ en: "Hubspace smart plug" }],

  // Gateways, hubs and radio dongles
  aqara: [
    "Aqara Hub M3",
    "Aqara Hub M2",
    { en: "Aqara temperature sensor", fr: "capteur de température Aqara", de: "Aqara Temperatursensor" },
  ],
  chirpstack: [
    { en: "LoRaWAN gateway", fr: "passerelle LoRaWAN", de: "LoRaWAN Gateway" },
    "Dragino LHT65",
  ],
  "deconz-phoscon": ["ConBee III", "ConBee II"],
  "fibaro-yubii-home": ["Fibaro Home Center 3", "Fibaro Yubii Home"],
  "homematic-ccu": [
    "Homematic IP CCU3",
    { en: "Homematic IP radiator thermostat", fr: "thermostat de radiateur Homematic IP", de: "Homematic IP Heizkörperthermostat" },
  ],
  "homematic-ip": [
    "Homematic IP Access Point",
    { en: "Homematic IP radiator thermostat", fr: "thermostat de radiateur Homematic IP", de: "Homematic IP Heizkörperthermostat" },
  ],
  "homey-pro-bridge": ["Homey Pro"],
  "hubitat-elevation": [{ en: "Hubitat Elevation C-8" }],
  insteon: [{ en: "Insteon Hub" }],
  "klf200-io-homecontrol": ["Velux KLF 200"],
  knx: [{ en: "KNX IP interface", fr: "interface KNX IP", de: "KNX IP Schnittstelle" }],
  "legrand-home-control": [
    { fr: "Legrand Céliane with Netatmo" },
    { fr: "Legrand dooxie with Netatmo" },
  ],
  "logitech-harmony-hub": ["Logitech Harmony Hub"],
  meshtastic: ["Heltec V3 Meshtastic", "LILYGO T-Beam", "RAK WisBlock Meshtastic"],
  "modbus-tcp": [
    { en: "RS485 to Ethernet converter", fr: "convertisseur RS485 Ethernet", de: "RS485 Ethernet Konverter" },
    { en: "Modbus energy meter", fr: "compteur d'énergie Modbus", de: "Modbus Stromzähler" },
  ],
  openepaperlink: [{ en: "e-paper price tag", fr: "étiquette e-paper", de: "E-Paper Preisschild" }],
  "openthread-border-router": [
    "SMLIGHT SLZB-06",
    { en: "Thread border router dongle", fr: "dongle Thread", de: "Thread Border Router Dongle" },
  ],
  overkiz: ["Somfy TaHoma switch", "Somfy Connectivity Kit"],
  "owserver-1-wire": ["DS18B20", { en: "1-Wire USB adapter", fr: "adaptateur USB 1-Wire", de: "1-Wire USB Adapter" }],
  rflink: [{ en: "RFLink 433MHz gateway", fr: "passerelle RFLink 433 MHz", de: "RFLink 433 MHz Gateway" }],
  "rfxcom-rfxtrx": ["RFXCOM RFXtrx433XL"],
  smartthings: [{ en: "Aeotec Smart Home Hub", fr: "Aeotec Smart Home Hub", de: "Aeotec Smart Home Hub" }],
  "smlight-slzb": ["SMLIGHT SLZB-06", "SMLIGHT SLZB-06M", "SMLIGHT SLZB-MR1"],
  "somfy-tahoma": ["Somfy TaHoma switch", "Somfy Connectivity Kit"],
  "somfy-mylink": [{ en: "Somfy myLink" }],
  telldus: ["TellStick"],
  "the-things-network": [
    { en: "LoRaWAN gateway", fr: "passerelle LoRaWAN", de: "LoRaWAN Gateway" },
    "Dragino LHT65",
  ],
  tydom: [{ fr: "Delta Dore Tydom Home" }],
  "wm-bus-meters-wmbusmeters": ["RTL-SDR Blog V4", { en: "wM-Bus USB dongle", fr: "clé USB wM-Bus", de: "wM-Bus USB Stick" }],
  "z2m-devices-monitor": ["SONOFF Zigbee 3.0 USB Dongle Plus", "SMLIGHT SLZB-06"],
  "z-wave-js-ui": [
    { en: "Zooz ZST39 Z-Wave stick", fr: "clé Z-Wave Aeotec Z-Stick 7", de: "Aeotec Z-Stick 7" },
    { en: "Aeotec Z-Stick 7 Plus" },
  ],

  // Cameras, doorbells, locks and alarms
  "ajax-systems-sia-dc-09": ["Ajax StarterKit", "Ajax Hub 2"],
  "amcrest-dahua": [CAMERA("Amcrest"), CAMERA("Dahua")],
  arlo: ["Arlo Pro 5", "Arlo Essential", "Arlo Video Doorbell"],
  "august-yale": [
    { en: "August Wi-Fi Smart Lock", fr: "Yale Linus", de: "Yale Linus" },
    { en: "Yale Assure Lock 2" },
  ],
  blink: ["Blink Outdoor 4", "Blink Mini 2", "Blink Video Doorbell"],
  dahua: [CAMERA("Dahua")],
  "diagral-e-one": [{ fr: "alarme Diagral e-ONE" }],
  doorbird: ["DoorBird"],
  "envisalink-dsc-honeywell": [{ en: "EnvisaLink EVL-4" }],
  "eufy-security": ["eufyCam 3", "eufy Video Doorbell", "eufy HomeBase 3"],
  ezviz: [CAMERA("EZVIZ"), { en: "EZVIZ video doorbell", fr: "sonnette vidéo EZVIZ", de: "EZVIZ Video-Türklingel" }],
  foscam: [CAMERA("Foscam")],
  frigate: [
    "Google Coral USB Accelerator",
    { en: "Reolink PoE camera", fr: "caméra PoE Reolink", de: "Reolink PoE Kamera" },
  ],
  go2rtc: [
    "TP-Link Tapo C210",
    { en: "Reolink PoE camera", fr: "caméra PoE Reolink", de: "Reolink PoE Kamera" },
  ],
  hikvision: [CAMERA("Hikvision")],
  "icsee-ptz": [{ en: "iCSee PTZ camera", fr: "caméra PTZ iCSee", de: "iCSee PTZ Kamera" }],
  igloohome: ["igloohome Smart Padlock", "igloohome Keybox"],
  "imou-life": [CAMERA("Imou")],
  ismartgate: ["ismartgate"],
  loqed: ["LOQED Touch Smart Lock"],
  meari: [CAMERA("ieGeek")],
  nuki: ["Nuki Smart Lock Pro", "Nuki Smart Lock Go", "Nuki Keypad 2"],
  onvif: [
    { en: "ONVIF PoE camera", fr: "caméra PoE ONVIF", de: "ONVIF PoE Kamera" },
    { en: "Reolink PoE camera", fr: "caméra PoE Reolink", de: "Reolink PoE Kamera" },
  ],
  opengarage: [{ en: "OpenGarage" }],
  remootio: ["Remootio 3"],
  reolink: ["Reolink RLC-810A", "Reolink Argus 4 Pro", "Reolink Video Doorbell"],
  ring: ["Ring Video Doorbell", "Ring Stick Up Cam", "Ring Alarm"],
  schlage: [{ en: "Schlage Encode" }, { en: "Schlage Encode Plus" }],
  scrypted: [{ en: "Reolink PoE camera", fr: "caméra PoE Reolink", de: "Reolink PoE Kamera" }],
  simplisafe: [{ en: "SimpliSafe home security system" }],
  "somfy-protect": [
    { fr: "Somfy Home Alarm", de: "Somfy Home Alarm" },
    { fr: "Somfy Indoor Camera", de: "Somfy Indoor Camera" },
  ],
  "synology-surveillance-station": [
    "Synology DS224+",
    { en: "Reolink PoE camera", fr: "caméra PoE Reolink", de: "Reolink PoE Kamera" },
  ],
  tailwind: [{ en: "Tailwind iQ3 garage door opener" }],
  tedee: ["Tedee GO", "Tedee PRO"],
  ttlock: [{ en: "TTLock smart lock", fr: "serrure connectée TTLock", de: "TTLock smartes Türschloss" }],
  "unifi-protect": ["UniFi Protect G5 Bullet", "UniFi Protect G4 Doorbell"],
  axis: [CAMERA("Axis")],
  "guardian-elexa": [
    { en: "Guardian by Elexa leak detector" },
    { en: "Guardian by Elexa valve controller" },
  ],
  "somfy-protexial-protexiom": [{ fr: "alarme Somfy Protexial io" }],

  // Robot vacuums, mowers, pets and appliances
  anova: ["Anova Precision Cooker"],
  dreame: [ROBOT_VACUUM("Dreame")],
  ecovacs: [ROBOT_VACUUM("Ecovacs Deebot"), ROBOT_MOWER("Ecovacs GOAT")],
  "eufy-clean": [ROBOT_VACUUM("eufy")],
  "gardena-smart-system": [
    "GARDENA smart Gateway",
    "GARDENA smart SILENO",
    "GARDENA smart Water Control",
  ],
  "husqvarna-automower": ["Husqvarna Automower"],
  "irobot-roomba": ["iRobot Roomba", "iRobot Braava Jet"],
  "litter-robot": [{ en: "Litter-Robot 4" }],
  "lubluelu-sl68-tuya": [ROBOT_VACUUM("Lubluelu")],
  mammotion: ["Mammotion LUBA", "Mammotion YUKA"],
  meater: ["MEATER Plus", "MEATER Pro"],
  mova: [ROBOT_VACUUM("MOVA")],
  petkit: [
    { en: "PETKIT automatic feeder", fr: "distributeur de croquettes PETKIT", de: "PETKIT Futterautomat" },
    { en: "PETKIT water fountain", fr: "fontaine à eau PETKIT", de: "PETKIT Trinkbrunnen" },
    "PETKIT Pura Max",
  ],
  petlibro: [
    { en: "PETLIBRO automatic feeder", fr: "distributeur de croquettes PETLIBRO", de: "PETLIBRO Futterautomat" },
    { en: "PETLIBRO water fountain", fr: "fontaine à eau PETLIBRO", de: "PETLIBRO Trinkbrunnen" },
  ],
  "rituals-perfume-genie": ["Rituals Perfume Genie 2.0"],
  roborock: [ROBOT_VACUUM("Roborock")],
  "segway-navimow": ["Segway Navimow"],
  "shark-iq": [{ en: "Shark robot vacuum" }],
  "sure-petcare": ["SureFlap Microchip Cat Flap Connect", "SureFeed Microchip Pet Feeder Connect"],
  tineco: ["Tineco Floor One S7", "Tineco Floor One S5"],
  valetudo: [ROBOT_VACUUM("Dreame"), ROBOT_VACUUM("Roborock")],
  "worx-landroid": ["Worx Landroid"],
  "xiaomi-home": [ROBOT_VACUUM("Xiaomi")],
  fyta: ["FYTA Beam"],
  "bosch-indego": [ROBOT_MOWER("Bosch Indego")],
  "eheim-digital": ["EHEIM thermocontrol+e", "EHEIM classicLED+e"],

  // Watering, pools and spas
  beatbot: ["Beatbot AquaSense"],
  "bestway-lay-z-spa": ["Bestway Lay-Z-Spa"],
  flipr: [{ fr: "Flipr AnalysR" }],
  "hunter-hydrawise": ["Hunter Hydrawise"],
  "intex-purespa": ["Intex PureSpa"],
  iopool: [{ fr: "iopool EcO" }],
  linktap: ["LinkTap G2S"],
  "ondilo-ico": [{ en: "Ondilo ICO Pool", fr: "Ondilo ICO Pool", de: "Ondilo ICO Pool" }],
  opensprinkler: [{ en: "OpenSprinkler" }],
  "orbit-b-hyve": [{ en: "Orbit B-hyve smart sprinkler controller" }],
  rachio: [{ en: "Rachio 3 Smart Sprinkler Controller" }],
  "rain-bird": [
    { en: "Rain Bird LNK2 WiFi module", fr: "Rain Bird LNK2 WiFi", de: "Rain Bird LNK2 WLAN Modul" },
  ],
  "flo-by-moen": [{ en: "Moen Flo Smart Water Monitor" }],
  flume: [{ en: "Flume 2 Smart Home Water Monitor" }],
  "balboa-spa": [{ en: "Balboa BWA Wi-Fi module" }],
  "pool-lab": ["PoolLab 2.0"],
  rainmachine: [{ en: "RainMachine Touch HD-12" }],
  yardian: [{ en: "Yardian Pro smart sprinkler controller" }],

  // Energy: solar, batteries, meters, chargers and UPSs
  "anker-solix": ["Anker SOLIX Solarbank", "Anker SOLIX Smart Meter"],
  "apc-ups-daemon": ["APC Back-UPS", "APC Smart-UPS"],
  "apsystems-ez1-ecu": ["APsystems EZ1-M"],
  "beem-energy": [{ fr: "kit solaire Beem" }],
  ecoflow: ["EcoFlow River 2", "EcoFlow Delta 2"],
  ecojoko: [{ fr: "Ecojoko" }],
  "emporia-vue": [{ en: "Emporia Vue 3" }, { en: "Emporia Smart Plug" }],
  "go-e-charger": ["go-e Charger Gemini"],
  "homewizard-energy": ["HomeWizard P1 Meter", "HomeWizard Energy Socket"],
  "hoymiles-opendtu": ["Hoymiles HMS-800", "OpenDTU"],
  iotawatt: [{ en: "IoTaWatt" }],
  marstek: ["Marstek Venus E"],
  "network-ups-tools-nut": [
    "APC Back-UPS",
    "Eaton Ellipse ECO",
    "CyberPower UPS",
  ],
  "sense-energy-monitor": [{ en: "Sense Energy Monitor" }],
  "tesla-wall-connector": [{ en: "Tesla Wall Connector" }],
  "victron-energy-gx": ["Victron Cerbo GX", "Victron SmartShunt"],
  "victron-vrm": ["Victron Cerbo GX", "Victron SmartShunt"],
  wallbox: ["Wallbox Pulsar Plus", "Wallbox Pulsar Max"],
  zendure: ["Zendure SolarFlow"],
  "ecocompteur-legrand": [{ fr: "Legrand écocompteur 412000" }],
  "rainforest-eagle": [{ en: "Rainforest Eagle-200" }],

  // TVs, players and speakers
  "android-tv-fire-tv-adb": ["Fire TV Stick 4K", "Nvidia Shield TV", "Google TV Streamer"],
  "android-tv-remote": ["Google TV Streamer", "Nvidia Shield TV"],
  "apple-tv": ["Apple TV 4K"],
  "bang-olufsen": ["Bang & Olufsen Beosound"],
  bose: ["Bose Smart Soundbar", "Bose Home Speaker 500"],
  "cambridge-audio": ["Cambridge Audio CXN100", "Cambridge Audio MXN10"],
  devialet: ["Devialet Phantom"],
  "divoom-pixoo": ["Divoom Pixoo 64"],
  "echo-media-player": ["Echo Dot", "Echo Show 8", "Echo Pop"],
  "epson-projector": [
    { en: "Epson home cinema projector", fr: "vidéoprojecteur Epson", de: "Epson Heimkino Beamer" },
  ],
  "fully-kiosk-browser": ["Amazon Fire HD 10", "Lenovo Tab M11"],
  "google-cast": ["Chromecast with Google TV", "Google Nest Mini", "Google Nest Hub"],
  "kef-wireless-speakers": ["KEF LS50 Wireless II", "KEF LSX II"],
  lametric: ["LaMetric TIME", "LaMetric SKY"],
  "lg-soundbar": [{ en: "LG soundbar", fr: "barre de son LG", de: "LG Soundbar" }],
  "lg-webos": [{ en: "LG OLED TV", fr: "TV LG OLED", de: "LG OLED TV" }],
  "linkplay-wiim-arylic": ["WiiM Mini", "WiiM Pro Plus", "WiiM Amp"],
  "lyrion-music-server": ["Raspberry Pi 5", "HiFiBerry DAC"],
  "music-player-daemon": ["Raspberry Pi 5", "HiFiBerry DAC"],
  nad: ["NAD C 3050", "NAD M10 V2"],
  "notifications-android-fire-tv": ["Fire TV Stick 4K", "Google TV Streamer"],
  onkyo: [
    { en: "Onkyo AV receiver", fr: "amplificateur home cinéma Onkyo", de: "Onkyo AV Receiver" },
    { en: "Pioneer AV receiver", fr: "amplificateur home cinéma Pioneer", de: "Pioneer AV Receiver" },
  ],
  "panasonic-viera": [{ en: "Panasonic OLED TV", fr: "TV Panasonic OLED", de: "Panasonic OLED TV" }],
  "philips-tv": [{ en: "Philips Ambilight TV", fr: "TV Philips Ambilight", de: "Philips Ambilight Fernseher" }],
  "players-works-with-bluos": ["Bluesound Node", "Bluesound Pulse"],
  "ps5-remote-play": ["PlayStation 5"],
  roku: [{ en: "Roku Streaming Stick 4K" }, { en: "Roku Ultra" }],
  "samsung-smart-tv": [
    { en: "Samsung Smart TV", fr: "TV Samsung", de: "Samsung Smart TV" },
    { en: "Samsung The Frame", fr: "Samsung The Frame", de: "Samsung The Frame" },
  ],
  "sennheiser-ambeo-soundbar": ["Sennheiser AMBEO Soundbar"],
  snapcast: ["Raspberry Pi Zero 2 W", "HiFiBerry DAC"],
  sonos: ["Sonos Era 100", "Sonos Beam", "Sonos Move 2"],
  "sony-audio": [{ en: "Sony soundbar", fr: "barre de son Sony", de: "Sony Soundbar" }],
  "sony-bravia-tv": [{ en: "Sony Bravia TV", fr: "TV Sony Bravia", de: "Sony Bravia Fernseher" }],
  trmnl: ["TRMNL e-ink display"],
  "unfolded-circle-remote": ["Unfolded Circle Remote 3"],
  "vizio-smartcast": [{ en: "VIZIO smart TV" }, { en: "VIZIO soundbar" }],
  volumio: ["Raspberry Pi 5", "HiFiBerry DAC"],
  wallpanel: ["Amazon Fire HD 10", "Lenovo Tab M11"],
  xbox: ["Xbox Series X", "Xbox Series S"],
  "xiaomi-tv": [{ en: "Xiaomi TV", fr: "TV Xiaomi", de: "Xiaomi Fernseher" }, "Xiaomi TV Box S"],
  "yamaha-av-receivers-ynca": [
    { en: "Yamaha AV receiver", fr: "amplificateur home cinéma Yamaha", de: "Yamaha AV Receiver" },
  ],
  "yamaha-musiccast": ["Yamaha MusicCast 20", { en: "Yamaha MusicCast soundbar", fr: "barre de son Yamaha MusicCast", de: "Yamaha MusicCast Soundbar" }],
  "yoto-player-advanced": ["Yoto Player", "Yoto Mini"],
  yoto: ["Yoto Player", "Yoto Mini"],
  arcam: ["Arcam AVR11", "Arcam SA30"],
  "bose-soundtouch": ["Bose SoundTouch 10"],
  "frontier-silicon-radios": [
    { en: "Sangean WFR-28 internet radio", fr: "radio internet Hama DIR3120", de: "Hama DIR3120 Internetradio" },
  ],
  hdfury: ["HDFury VRROOM", "HDFury Arcana 2"],
  "jvc-projector": [{ en: "JVC D-ILA projector", fr: "vidéoprojecteur JVC D-ILA", de: "JVC D-ILA Beamer" }],
  "nintendo-parental-controls": ["Nintendo Switch 2"],
  "pjlink-projectors": [
    { en: "Epson home cinema projector", fr: "vidéoprojecteur Epson", de: "Epson Heimkino Beamer" },
    { en: "BenQ projector", fr: "vidéoprojecteur BenQ", de: "BenQ Beamer" },
  ],
  "playstation-network": [
    "PlayStation 5",
    { en: "PS5 DualSense controller", fr: "manette DualSense PS5", de: "PS5 DualSense Controller" },
  ],
  russound: [{ en: "Russound MCA-88X" }],
  "vogel-s-motionmount": ["Vogel's MotionMount TVM 7675"],

  // Network, NAS, servers and printers
  asuswrt: [{ en: "ASUS WiFi 7 router", fr: "routeur ASUS WiFi 7", de: "ASUS WiFi 7 Router" }, "ASUS ZenWiFi"],
  "brother-printers": [
    { en: "Brother laser printer", fr: "imprimante laser Brother", de: "Brother Laserdrucker" },
  ],
  "devolo-home-network": ["devolo Magic 2 WiFi 6"],
  "fritz-box": ["FRITZ!Box 7590 AX", "FRITZ!Box 5690 Pro"],
  "fritz-smarthome": ["FRITZ!DECT 200", "FRITZ!DECT 302"],
  "hp-printer": [{ en: "HP LaserJet printer", fr: "imprimante HP LaserJet", de: "HP LaserJet Drucker" }, { en: "HP OfficeJet Pro", fr: "HP OfficeJet Pro", de: "HP OfficeJet Pro" }],
  keenetic: [{ en: "Keenetic router", fr: "routeur Keenetic", de: "Keenetic Router" }],
  mikrotik: ["MikroTik hAP ax3", "MikroTik hEX"],
  netgear: ["NETGEAR Nighthawk", "NETGEAR Orbi"],
  openwrt: ["GL.iNet Flint 2", "OpenWrt One"],
  opnsense: [{ en: "N100 firewall mini PC", fr: "mini PC firewall N100", de: "N100 Firewall Mini PC" }],
  pfsense: [{ en: "N100 firewall mini PC", fr: "mini PC firewall N100", de: "N100 Firewall Mini PC" }, "Netgate 1100"],
  "pi-hole": ["Raspberry Pi 5", "Raspberry Pi Zero 2 W"],
  pikvm: ["PiKVM V4", "GL.iNet Comet KVM"],
  qnap: ["QNAP TS-264", "QNAP TS-464"],
  "qnap-qsw": ["QNAP QSW-1105-5T", "QNAP QSW-M408"],
  starlink: ["Starlink Mini", { en: "Starlink Standard Kit", fr: "kit Starlink Standard", de: "Starlink Standard Kit" }],
  "synology-dsm": ["Synology DS224+", "Synology DS923+"],
  teltonika: ["Teltonika RUTX50", "Teltonika RUT241"],
  "tp-link-deco": ["TP-Link Deco X50", "TP-Link Deco BE65"],
  "tp-link-mercusys-router": ["TP-Link Archer AX55", "TP-Link Archer BE550"],
  "tp-link-omada": ["TP-Link Omada EAP650", "TP-Link Omada ER605"],
  "ugreen-nas": ["UGREEN NASync DXP2800", "UGREEN NASync DXP4800 Plus"],
  "ubiquiti-airos": ["Ubiquiti NanoStation 5AC Loco", "Ubiquiti LiteBeam 5AC"],
  "unifi-network": ["UniFi Cloud Gateway Ultra", "UniFi U6+", "UniFi Express"],
  "ipp-printers": [{ en: "AirPrint wireless printer", fr: "imprimante WiFi AirPrint", de: "AirPrint WLAN Drucker" }],
  "samsung-syncthru": [
    { en: "Samsung Xpress laser printer", fr: "imprimante laser Samsung Xpress", de: "Samsung Xpress Laserdrucker" },
  ],

  // 3D printers
  "bambu-lab": ["Bambu Lab A1 mini", "Bambu Lab A1", { en: "Bambu Lab PLA filament", fr: "filament PLA Bambu Lab", de: "Bambu Lab PLA Filament" }],
  "elegoo-3d-printers": ["Elegoo Centauri Carbon", "Elegoo Saturn 4 Ultra", "Elegoo Mars 5"],
  "moonraker-klipper": ["Creality K1", "Sovol SV08", "BIGTREETECH Pi"],
  octoprint: ["Creality Ender 3 V3", "Raspberry Pi 5"],
  prusalink: ["Prusament PLA", { en: "Prusa MK4S", fr: "Prusa MK4S", de: "Prusa MK4S" }],
  spoolman: [{ en: "PLA filament 1.75mm", fr: "filament PLA 1,75 mm", de: "PLA Filament 1,75 mm" }],

  // Trackers and presence
  "apple-device-tracker": ["Apple AirTag"],
  invoxia: ["Invoxia GPS Tracker"],
  "paj-gps": ["PAJ GPS Tracker"],
  tractive: [
    { en: "Tractive GPS dog tracker", fr: "Tractive GPS chien", de: "Tractive GPS Hund" },
    { en: "Tractive GPS cat tracker", fr: "Tractive GPS chat", de: "Tractive GPS Katze" },
  ],
  weenect: [
    { fr: "Weenect XS chien", de: "Weenect XS Hund" },
    { fr: "Weenect XS chat", de: "Weenect XS Katze" },
  ],
  "tilt-pi": [{ en: "Tilt Hydrometer" }],

  // Watches, rings and scales
  fitbit: ["Fitbit Charge 6", "Fitbit Versa 4"],
  "garmin-connect": ["Garmin Venu 3", "Garmin Forerunner 265", "Garmin Index S2"],
  "google-health": ["Google Pixel Watch 3", "Fitbit Charge 6"],
  "huawei-health": ["Huawei Watch GT 5", "Huawei Band 9"],
  oura: ["Oura Ring 4"],
  polar: ["Polar Vantage V3", "Polar Ignite 3"],
  withings: ["Withings Body Smart", "Withings ScanWatch 2", "Withings BPM Connect"],
};
