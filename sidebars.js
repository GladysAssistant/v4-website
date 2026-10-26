const externalIntegrations = require("./src/data/externalIntegrations.json");
const nativeIntegrations = require("./src/data/nativeIntegrations");
const integrationCategories = require("./src/data/integrationCategories");

// Pages of built-in integrations that are not an entry of the catalog: brand
// guides of the camera integration, a heating guide, and deprecated
// integrations whose documentation stays online.
const otherNativeDocs = [
  { doc: "imou", name: "Imou", category: "security" },
  { doc: "lsc", name: "LSC", category: "security" },
  { doc: "rollei", name: "Rollei", category: "security" },
  { doc: "pilot-wire", name: "Pilot wire", category: "climate" },
  { doc: "sonos", name: "Sonos", category: "multimedia" },
  { doc: "zwavejs-ui", name: "Z-Wave JS UI", category: "protocols" },
  { doc: "openweather", name: "OpenWeather", category: "environment" },
];

// The integration pages, built-in and community mixed, grouped by the
// categories of the catalog (each page under its first category) and sorted
// by name. One flat list would put every integration page in the sidebar of
// every other one: hundreds of links per page, thousands soon.
const integrationPages = [
  ...nativeIntegrations.map((integration) => ({
    id: `integrations/${integration.doc}`,
    name: integration.name.en,
    category: integration.categories[0],
  })),
  ...otherNativeDocs.map((doc) => ({
    id: `integrations/${doc.doc}`,
    name: doc.name,
    category: doc.category,
  })),
  ...externalIntegrations.integrations.map((integration) => ({
    id: `integrations/external/${integration.slug}`,
    name: integration.name,
    category: integration.categories[0] || "other",
  })),
].sort((a, b) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id));

const integrationItems = [
  ...integrationCategories,
  { key: "other", label: { en: "Other integrations" } },
]
  .map((category) => ({
    type: "category",
    label: category.label.en,
    collapsed: true,
    items: integrationPages
      .filter((page) => page.category === category.key)
      .map((page) => page.id),
  }))
  .filter((category) => category.items.length > 0);

module.exports = {
  docs: [
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/hardware",
        "installation/recommended-hardware",
        "installation/mini-pc",
        "installation/docker",
        "installation/docker-compose",
        "installation/synology",
        "installation/unraid",
        {
          id: "installation/freebox-delta",
          type: "doc",
          className: "fr-only",
        },
        "installation/raspberry-pi",
        "installation/phone",
        "installation/logs",
        "installation/faq",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: { type: "doc", id: "integrations/intro" },
      items: integrationItems,
    },
    {
      type: "category",
      label: "Scenes",
      items: [
        "scenes/intro",
        "scenes/math-functions",
        "scenes/device-state-changed-trigger",
        "scenes/scheduled-trigger",
        "scenes/calendar-event-is-coming-trigger",
        "scenes/calendar-event-is-running-condition",
        "scenes/edf-tempo",
        "scenes/turn-on-off-the-switches-action",
        "scenes/get-last-device-state-action",
        "scenes/wait-action",
        "scenes/continue-only-if-action",
        "scenes/send-a-sms-action",
        "scenes/send-a-message-action",
        "scenes/send-a-zigbee2mqtt-message-action",
        "scenes/turn-on-off-the-lights-action",
        "scenes/http-request",
        "scenes/user-presence",
        "scenes/chain-action",
        "scenes/house-empty",
        "scenes/house-no-longer-empty",
        "scenes/back-at-home",
        "scenes/left-home",
        "scenes/time-condition",
        "scenes/sunset-sunrise",
        "scenes/zone",
      ],
    },
    {
      type: "category",
      label: "Dashboard",
      items: [
        "dashboard/intro",
        "dashboard/alarm",
        "dashboard/weather",
        "dashboard/chart",
        "dashboard/gauge",
        "dashboard/voice-assistant",
        "dashboard/temperature-in-room",
        "dashboard/humidity-in-room",
        "dashboard/camera",
        "dashboard/devices",
        "dashboard/edf-tempo",
      ],
    },
    {
      type: "category",
      label: "API",
      items: ["api/data-model", "api/rest-api", "api/mqtt-api"],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "dev/external-integrations",
        "dev/developing-a-service",
        "dev/setup-development-environment-mac-linux",
        "dev/setup-development-environment-windows",
        "dev/cypress-tests",
      ],
    },
    {
      type: "category",
      label: "Gladys Plus",
      items: ["plus/intro", "plus/connect-gladys-plus", "plus/open-api"],
    },
  ],
};
