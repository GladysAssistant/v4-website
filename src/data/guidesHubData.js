// Content for the /guides/ hub page.
// The footer used to link every landing page and became unreadable. It now
// keeps a few essentials plus "All guides", and this page lists every guide,
// comparison and tool by theme, so each page stays two clicks away from
// anywhere on the site. When you add a landing page, add it here.

const card = (href, en, fr) => ({ href, en, fr });

export const guidesSections = [
  {
    id: "start",
    title: { en: "Getting started", fr: "Bien démarrer" },
    items: [
      card(
        "/local-smart-home/",
        { label: "Build a local smart home", text: "Why local-first matters and how to build a home that runs without the cloud." },
        { label: "Créer une maison connectée locale", text: "Pourquoi le local d'abord compte, et comment bâtir une maison qui tourne sans cloud." }
      ),
      card(
        "/open-source-home-automation/",
        { label: "Open-source home automation", text: "The main open-source platforms, compared." },
        { label: "La domotique open source", text: "Les principales plateformes open source, comparées." }
      ),
      card(
        "/works-with/",
        { label: "Works with Gladys", text: "The brands and protocols Gladys supports, and which work without the internet." },
        { label: "Appareils compatibles", text: "Les marques et protocoles pris en charge par Gladys, et ceux qui marchent sans internet." }
      ),
      card(
        "/zigbee-vs-matter-vs-zwave/",
        { label: "Zigbee vs Z-Wave vs Matter vs Thread", text: "Which smart home protocol to choose." },
        { label: "Zigbee vs Z-Wave vs Matter vs Thread", text: "Quel protocole domotique choisir." }
      ),
      card(
        "/best-zigbee-dongle/",
        { label: "Best Zigbee USB dongle", text: "Which Zigbee coordinator to buy, USB or network." },
        { label: "Quelle clé Zigbee choisir", text: "Quel coordinateur Zigbee acheter, USB ou réseau." }
      ),
      card(
        "/matter-hub/",
        { label: "Do you need a Matter hub?", text: "Controllers, Thread border routers and bridges explained." },
        { label: "Faut-il un hub Matter ?", text: "Contrôleurs, routeurs de bordure Thread et ponts expliqués." }
      ),
    ],
  },
  {
    id: "ai",
    title: { en: "AI", fr: "Intelligence artificielle" },
    items: [
      card(
        "/ai-smart-home/",
        { label: "Control your home with AI", text: "Natural-language control, a proactive AI agent and a weekly report, privately." },
        { label: "Piloter sa maison avec l'IA", text: "Pilotage en langage naturel, IA proactive et rapport hebdomadaire, en toute confidentialité." }
      ),
      card(
        "/smart-home-mcp-server/",
        { label: "Smart home MCP server", text: "Connect Claude, Copilot, Perplexity or Le Chat to your home." },
        { label: "Serveur MCP domotique", text: "Connectez Claude, Copilot, Perplexity ou Le Chat à votre maison." }
      ),
    ],
  },
  {
    id: "devices",
    title: { en: "Devices and protocols", fr: "Appareils et protocoles" },
    items: [
      card(
        "/zigbee2mqtt-without-home-assistant/",
        { label: "Zigbee2MQTT without Home Assistant", text: "Gladys installs and manages Zigbee2MQTT for you." },
        { label: "Zigbee2MQTT sans Home Assistant", text: "Gladys installe et gère Zigbee2MQTT pour vous." }
      ),
      card(
        "/z-wave-js-ui-without-home-assistant/",
        { label: "Z-Wave JS UI without Home Assistant", text: "Your Z-Wave network with a simple interface, over MQTT." },
        { label: "Z-Wave JS UI sans Home Assistant", text: "Votre réseau Z-Wave avec une interface simple, via MQTT." }
      ),
      card(
        "/philips-hue-without-bridge/",
        { label: "Philips Hue without the bridge", text: "Pair Hue bulbs directly with a Zigbee dongle." },
        { label: "Philips Hue sans le pont", text: "Associez vos ampoules Hue directement à une clé Zigbee." }
      ),
      card(
        "/aqara-without-hub/",
        { label: "Aqara sensors without the hub", text: "Use Aqara Zigbee sensors locally, without the Aqara app." },
        { label: "Capteurs Aqara sans hub", text: "Utilisez vos capteurs Aqara Zigbee en local, sans l'application Aqara." }
      ),
      card(
        "/tuya-zigbee-without-hub/",
        { label: "Tuya Zigbee without the Tuya app", text: "Local control for Tuya Zigbee devices." },
        { label: "Tuya Zigbee sans l'application Tuya", text: "Le contrôle local de vos appareils Tuya Zigbee." }
      ),
      card(
        "/ikea-smart-home/",
        { label: "IKEA smart home", text: "Tradfri over Zigbee, DIRIGERA over Matter, and the Matter over Thread range." },
        { label: "Maison connectée IKEA", text: "Tradfri en Zigbee, DIRIGERA en Matter, et la gamme Matter over Thread." }
      ),
      card(
        "/sinope-zigbee/",
        { label: "Sinopé Zigbee thermostats", text: "Control Sinopé thermostats locally, without Neviweb." },
        { label: "Thermostats Sinopé Zigbee", text: "Pilotez vos thermostats Sinopé en local, sans Neviweb." }
      ),
      card(
        "/reolink-rtsp-url/",
        { label: "Reolink RTSP URL", text: "Enable RTSP and find the stream URL of your Reolink camera." },
        { label: "URL RTSP Reolink", text: "Activer le RTSP et trouver l'URL du flux de votre caméra Reolink." }
      ),
      card(
        "/home-weather-station/",
        { label: "Home weather station", text: "The best weather stations for a smart home." },
        { label: "Station météo connectée", text: "Les meilleures stations météo pour une maison connectée." }
      ),
    ],
  },
  {
    id: "energy",
    title: { en: "Energy", fr: "Énergie" },
    items: [
      card(
        "/home-energy-monitoring/",
        { label: "Reduce your electricity bill", text: "Track your consumption and act on the data." },
        { label: "Réduire sa facture d'électricité", text: "Suivez votre consommation et agissez sur les données." }
      ),
      card(
        "/edf-tempo/",
        { label: "EDF Tempo colour of the day", text: "Today's and tomorrow's Tempo colour, live (France)." },
        { label: "Tempo EDF : couleur du jour", text: "La couleur Tempo du jour et de demain, en direct." }
      ),
      card(
        "/heures-creuses/",
        { label: "France's new off-peak hours", text: "What the 2025–2027 heures creuses reform changes, and how to adapt (France)." },
        { label: "Heures creuses : ce qui change", text: "Ce que change la réforme des heures creuses, et comment s'adapter." }
      ),
      card(
        "/hydro-quebec-peak-events/",
        { label: "Hydro-Québec peak events today", text: "Live Flex D and Winter Credit peak events (Quebec)." },
        { label: "Pointes Hydro-Québec aujourd'hui", text: "Les pointes Flex D et crédit hivernal, en direct (Québec)." }
      ),
      card(
        "/hydro-quebec-flex-d/",
        { label: "Hydro-Québec Rate Flex D", text: "How Flex D works and how to automate it (Quebec)." },
        { label: "Tarif Flex D d'Hydro-Québec", text: "Comment fonctionne le Flex D et comment l'automatiser (Québec)." }
      ),
      card(
        "/ontario-electricity-rates/",
        { label: "Ontario electricity rates now", text: "The current Time-of-Use and Ultra-Low Overnight price, live (Ontario)." },
        { label: "Tarifs d'électricité en Ontario", text: "Le prix en cours, selon la grille horaire de l'Ontario, en direct." }
      ),
    ],
  },
  {
    id: "home",
    title: { en: "Security and comfort", fr: "Sécurité et confort" },
    items: [
      card(
        "/diy-home-alarm-system/",
        { label: "DIY home alarm system", text: "A self-monitored alarm that runs locally, with no contract." },
        { label: "Alarme maison DIY", text: "Une alarme autonome qui tourne en local, sans abonnement." }
      ),
      card(
        "/water-leak-detection/",
        { label: "Water leak detection and shutoff", text: "Detect leaks and shut the water off automatically." },
        { label: "Détection de fuite d'eau", text: "Détectez les fuites et coupez l'eau automatiquement." }
      ),
      card(
        "/nest-thermostat-alternative/",
        { label: "Nest thermostat alternative", text: "Local thermostats you control yourself, after Nest's end of support." },
        { label: "Alternative au thermostat Nest", text: "Des thermostats locaux que vous maîtrisez, après la fin du support Nest." }
      ),
      card(
        "/presence-simulation/",
        { label: "Presence simulation", text: "Make your home look occupied while you're away." },
        { label: "Simulation de présence", text: "Donnez l'impression que la maison est occupée pendant votre absence." }
      ),
    ],
  },
  {
    id: "compare",
    title: { en: "Comparisons and alternatives", fr: "Comparatifs et alternatives" },
    items: [
      card(
        "/home-assistant-vs-gladys-assistant/",
        { label: "Gladys vs Home Assistant", text: "An honest, feature-by-feature comparison." },
        { label: "Gladys vs Home Assistant", text: "Un comparatif honnête, fonction par fonction." }
      ),
      card(
        "/home-assistant-alternative/",
        { label: "Home Assistant alternative", text: "Why people switch from Home Assistant to Gladys." },
        { label: "Alternative à Home Assistant", text: "Pourquoi on passe de Home Assistant à Gladys." }
      ),
      card(
        "/home-assistant-green-alternative/",
        { label: "Home Assistant Green alternative", text: "Your own local hub on a mini-PC or a Raspberry Pi." },
        { label: "Alternative au Home Assistant Green", text: "Votre propre box locale sur un mini-PC ou un Raspberry Pi." }
      ),
      card(
        "/jeedom-vs-gladys-assistant/",
        { label: "Gladys vs Jeedom", text: "An honest comparison with the French home automation box." },
        { label: "Gladys vs Jeedom", text: "Un comparatif honnête avec la box domotique française." }
      ),
      card(
        "/jeedom-alternative/",
        { label: "Jeedom alternative", text: "Why people move from Jeedom to Gladys." },
        { label: "Alternative à Jeedom", text: "Pourquoi on passe de Jeedom à Gladys." }
      ),
      card(
        "/openhab-alternative/",
        { label: "openHAB alternative", text: "Simpler open-source home automation." },
        { label: "Alternative à openHAB", text: "Une domotique open source plus simple." }
      ),
      card(
        "/domoticz-alternative/",
        { label: "Domoticz alternative", text: "A modern, open-source successor to Domoticz." },
        { label: "Alternative à Domoticz", text: "Une alternative moderne et open source à Domoticz." }
      ),
      card(
        "/smartthings-alternative/",
        { label: "SmartThings alternative", text: "A local, private alternative to Samsung SmartThings." },
        { label: "Alternative à SmartThings", text: "Une alternative locale et privée à Samsung SmartThings." }
      ),
      card(
        "/hubitat-alternative/",
        { label: "Hubitat alternative", text: "Open source, local, with a modern interface." },
        { label: "Alternative à Hubitat", text: "Open source, local, avec une interface moderne." }
      ),
      card(
        "/homey-alternative/",
        { label: "Homey alternative", text: "A free, open-source alternative to Homey Pro." },
        { label: "Alternative à Homey", text: "Une alternative gratuite et open source au Homey Pro." }
      ),
      card(
        "/alexa-alternative/",
        { label: "Alexa alternative", text: "A private, self-hosted alternative to Amazon Alexa." },
        { label: "Alternative à Alexa", text: "Une alternative privée et auto-hébergée à Amazon Alexa." }
      ),
      card(
        "/google-home-alternative/",
        { label: "Google Home alternative", text: "A private, self-hosted alternative to Google Home." },
        { label: "Alternative à Google Home", text: "Une alternative privée et auto-hébergée à Google Home." }
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
};
