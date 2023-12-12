module.exports = {
  docs: [
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/hardware",
        "installation/raspberry-pi",
        "installation/docker",
        "installation/docker-compose",
        "installation/synology",
        "installation/unraid",
        "installation/freebox-delta",
        "installation/phone",
        "installation/faq",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations/alexa",
        "integrations/bluetooth",
        "integrations/broadlink",
        "integrations/caldav",
        "integrations/camera",
        "integrations/enedis",
        "integrations/google-home",
        "integrations/homekit",
        "integrations/mqtt",
        "integrations/node-red",
        "integrations/openweather",
        "integrations/openai",
        "integrations/owntracks",
        "integrations/philips-hue",
        "integrations/sonoff",
        "integrations/sonos",
        "integrations/tasmota",
        "integrations/telegram",
        "integrations/tp-link",
        "integrations/tuya",
        "integrations/xiaomi",
        "integrations/zigbee2mqtt",
        "integrations/zwave",
      ],
    },
    {
      type: "category",
      label: "Scenes",
      items: [
        "scenes/intro",
        "scenes/device-state-changed-trigger",
        "scenes/scheduled-trigger",
        "scenes/calendar-event-is-coming-trigger",
        "scenes/calendar-event-is-running-condition",
        "scenes/turn-on-off-the-switches-action",
        "scenes/get-last-device-state-action",
        "scenes/wait-action",
        "scenes/continue-only-if-action",
        "scenes/send-a-message-action",
        "scenes/turn-on-off-the-lights-action",
        "scenes/http-request",
        "scenes/user-presence",
        "scenes/chain-action",
        "scenes/house-empty",
        "scenes/house-no-longer-empty",
        "scenes/back-at-home",
        "scenes/left-home",
        "scenes/time-condition",
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
        "dashboard/temperature-in-room",
        "dashboard/camera",
        "dashboard/devices-in-room",
        "dashboard/chart",
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
        "dev/developing-a-service",
        "dev/setup-development-environment-mac-linux",
        "dev/setup-development-environment-windows",
        "dev/cypress-tests",
      ],
    },
    {
      type: "category",
      label: "Gladys Plus",
      items: ["plus/intro", "plus/open-api"],
    },
  ],
};
