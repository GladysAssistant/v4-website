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
        "integrations/openweather",
        "integrations/caldav",
        "integrations/camera",
        "integrations/xiaomi",
        "integrations/google-home",
        "integrations/alexa",
        "integrations/homekit",
        "integrations/enedis",
        "integrations/bluetooth",
        "integrations/broadlink",
        "integrations/sonoff",
        "integrations/tasmota",
        "integrations/tp-link",
        "integrations/tuya",
        "integrations/philips-hue",
        "integrations/mqtt",
        "integrations/owntracks",
        "integrations/zigbee2mqtt",
        "integrations/zwave",
        "integrations/telegram",
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
        "dev/setup-development-environment-mac-linux",
        "dev/setup-development-environment-windows",
        "dev/developing-a-service",
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
