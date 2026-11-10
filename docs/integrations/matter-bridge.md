---
id: matter-bridge
title: Expose your Gladys devices to Apple Home, Google Home and Alexa with Matter
description: "Turn Gladys Assistant into a Matter bridge: pair it with Apple Home, Google Home, Amazon Alexa, SmartThings or Home Assistant and control your Zigbee, Z-Wave or Wi-Fi devices from there, 100% locally."
sidebar_label: Matter Bridge
---

The **Matter Bridge** integration turns Gladys into a Matter bridge. Once paired, your Gladys devices appear in the Matter app of your choice (Apple Home, Google Home, Amazon Alexa, SmartThings, Home Assistant...), **whatever protocol they use**: Zigbee, Z-Wave, Wi-Fi, MQTT... The Matter link between Gladys and your **Matter controller** (home hub, Nest, Echo...) stays on your local network, and the bridge doesn't need a Gladys Plus subscription.

Three things to know, though:

- Controlling from the app isn't always local: away from home, and with some ecosystems (Google Home, for example) even at home, your command goes through the cloud of the app's provider before it reaches your controller, which then talks to Gladys locally.
- Your Matter app may need its own account: an Apple ID for Apple Home, a Google account for Google Home, an Amazon account for Alexa, a Samsung account for SmartThings.
- The bridge doesn't make a device local: if Gladys controls a device through a cloud service (a cloud-based integration, for example), that device still depends on this cloud when you control it from a Matter app.

:::tip[Matter, Matterbridge or Matter Bridge?]
Three integrations have similar names, but they don't go in the same direction:

- **Matter Bridge** (this page): Gladys devices → your Matter apps (Apple Home, Google Home, Alexa...).
- [Matter](/docs/integrations/matter/): Matter devices → Gladys. Gladys is the Matter controller.
- [Matterbridge](/docs/integrations/matterbridge/): devices exposed by the open-source Matterbridge project and its plugins → Gladys.

:::

## Prerequisites

- **IPv6 on your local network.** Matter relies on IPv6. The integration page tells you whether an IPv6 interface was detected on the machine running Gladys.
- **Gladys must use the host network.** The standard Gladys installation (`network_mode: host` in Docker) already does. The bridge listens on UDP port **5541**, separate from port 5540 used by the [Matter](/docs/integrations/matter/) integration, so both can run at the same time.
- **An administrator account.** The integration is only visible to Gladys administrators.
- **A Matter controller on the same network.** The app alone isn't always enough: most ecosystems need a device that acts as their Matter controller.
  - Apple Home: an iPhone or iPad (iOS 18 or later) can add and control the bridge at home without a hub. A home hub (Apple TV or HomePod) is recommended: it is needed to control your devices away from home and to run automations.
  - Google Home: a Google device that supports Matter (Nest Hub, Nest speaker, Google TV Streamer...).
  - Amazon Alexa: an Echo that supports Matter.
  - SmartThings: a SmartThings hub, or a Samsung device that acts as one.
  - Home Assistant: its Matter server.

Pairing happens over your network: unlike some Matter devices, the bridge doesn't need Bluetooth.

## Enable the bridge

In Gladys, go to `Integrations` and click on `Matter Bridge` (in the "Voice assistants & AI" category).

Check that the page shows `An IPv6 interface is available on this machine ✅`, then click on `Enable the Matter bridge`.

The bridge starts after a few seconds. If it can't start, the error is shown on the page under `The Matter bridge could not start:`.

The bridge starts again automatically every time Gladys restarts.

## Choose the devices to expose

In the `Exposed devices` section, choose:

- `Expose all compatible devices` (default): every compatible device is exposed, including the ones you add later.
- `Only expose the selected devices`: pick the devices to expose in the list. Each device is shown with the Matter functions it will have (light, plug, temperature...).

Click on `Save`. Changes are applied right away, and your pairings are kept: no need to pair the bridge again.

Then, Gladys keeps the bridge up to date by itself:

- A **new compatible device** is added to the bridge (in "all" mode).
- A **renamed device** is renamed in your Matter apps, and keeps its room and automations there.
- A **deleted device** (or a device removed from the selection) disappears from the bridge.

:::note
Matter limits names to 32 characters: longer device names are cut in your Matter apps.
:::

## Pair Gladys with your Matter app

As long as the bridge isn't paired, the `Pairing` section shows a **QR code** and an 11-digit **pairing code** (`1234-567-8901`).

In your Matter app, add a new Matter device and scan the QR code, or type the pairing code:

- **Apple Home**: tap `+` > `Add Accessory`, then scan the QR code (or tap `More options...` to type the code).
- **Google Home**: tap `+` > `Device` > `Matter-enabled device`, then scan the QR code.
- **Amazon Alexa**: tap `+` > `Device` > `Matter`, then follow the steps and scan the QR code.
- **SmartThings** and **Home Assistant**: use the "add a Matter device" option of the app.

:::warning[Uncertified accessory]
Gladys isn't a certified Matter product. During pairing, your app warns you that the accessory is **not certified**: confirm that you want to add it anyway (`Add Anyway` in Apple Home, for example).
:::

The app then finds the "Gladys Bridge" and imports the exposed devices. Your app may ask you to assign each device to a room.

You can now control your Gladys devices from your Matter app, in your automations, and with Siri, Google Assistant or Alexa voice commands 🗣️

Synchronization works both ways:

- When a device changes state in Gladys (a sensor reading, a light switched on from the dashboard or a scene...), the new state is sent to your Matter apps.
- When you control a device from a Matter app, Gladys sends the command to the device, exactly as if you had used the Gladys dashboard.

## Add Gladys to another ecosystem

Once the bridge is paired, the QR code is hidden, and the page lists the ecosystems Gladys is paired with (`Gladys is paired with:`).

Matter lets you pair the same bridge with several apps (multi-admin). To add Gladys to a second ecosystem:

1. Open the pairing mode of the bridge from an app it is already paired with. For example, in Apple Home: open the settings of the bridge and tap `Turn On Pairing Mode`. The app gives you a new pairing code.
2. In the other app, add a Matter device and type (or scan) this new code.

## Supported devices

| Gladys device | Appears in Matter as |
| --- | --- |
| 💡 Light (on/off, brightness, color temperature, color) | Light: On/Off, dimmable, color temperature or color, depending on the features of the light |
| 🔌 Switch / plug (on/off) | Plug. A multi-channel switch gives one plug per channel |
| 🪟 Roller shutter, curtain (position and/or open / close / stop) | Window covering (roller shade or curtain) |
| 🚪 Opening sensor | Contact sensor |
| 🚶 Motion or presence sensor | Occupancy sensor |
| 💧 Leak sensor | Water leak detector |
| 🔥 Smoke and/or CO sensor | Smoke / CO alarm |
| 🌡️ Temperature sensor | Temperature sensor (°F and K are converted to °C) |
| 💦 Humidity sensor | Humidity sensor |
| ☀️ Light sensor | Light sensor (lux) |
| 🧭 Pressure sensor | Pressure sensor |
| 🌫️ CO2, PM2.5 and PM10 sensors | Air quality sensor, with an overall air quality computed from PM2.5 (or CO2 when there is no PM2.5) |
| 🔋 Battery | Battery level of the device, with a low battery warning below 20% |

A device with several features (for example a temperature, humidity and battery sensor) is exposed as a single bridged device. Most apps show it as one accessory, some show one tile per function (temperature, humidity, battery...).

Some limits to know:

- Only features that can be controlled are exposed for lights, plugs and covers: a read-only light or plug is not exposed.
- A device that only has a battery is not exposed.
- Covers are controlled in height only: tilt is not supported.
- Thermostats and air conditioners, locks, fans, buttons, sirens, energy meters, vacuums and media players are not supported yet.

We regularly add support for new device types based on community feedback. Feel free to suggest yours on the [Gladys forum](https://community.gladysassistant.com/)!

## Disable or reset the bridge

- `Disable the Matter bridge` takes the bridge offline but **keeps its pairings**: when you enable it again, your Matter apps find the same bridge and the same devices.
- `Reset the bridge` is for when you can't pair the bridge anymore. All the pairings of Gladys are deleted: the bridge no longer answers the ecosystems it was paired with. An old "Gladys Bridge" entry may remain in your Matter apps: **remove it there**, then add the bridge again with its **new pairing code**. Your selection of exposed devices is kept.

## Troubleshooting

- **No IPv6 interface detected**: enable IPv6 on your router and on the machine running Gladys, then restart Gladys.
- **The app can't find the bridge**: check that your phone and Gladys are on the same network (not a guest Wi-Fi), and that Gladys uses the host network.
- **A device is missing**: check that it is part of the supported devices above and, in "selection" mode, that it is selected, then click on `Save`.

🛠️ Need help? Join us on the [Gladys community forum](https://community.gladysassistant.com/), we're here to support you!
