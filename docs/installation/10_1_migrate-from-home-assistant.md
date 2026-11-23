---
id: migrate-from-home-assistant
title: "Migrate from Home Assistant to Gladys: Zigbee2MQTT, Z-Wave, Matter"
description: "Moving from Home Assistant to Gladys Assistant? What you keep and what you redo: move your Zigbee2MQTT network without pairing your devices again, keep your Z-Wave stick, share your Matter devices, find your MQTT devices, then turn Home Assistant off."
sidebar_label: Migrate from Home Assistant
keywords:
  - migrate from home assistant
  - home assistant to gladys
  - switch from home assistant
  - move zigbee2mqtt from home assistant
  - zigbee2mqtt add-on migration
  - keep zigbee devices without re-pairing
  - zha to zigbee2mqtt
  - z-wave js migration
  - matter share device home assistant
---

Moving from Home Assistant to Gladys? Most of your devices come with you **without pairing them again**: the Zigbee2MQTT network, the Z-Wave network, Matter devices and MQTT devices. What stays behind is what you built in Home Assistant: automations, dashboards and history.

You don't have to switch everything in one evening: Gladys can run next to Home Assistant, connected to the same devices, while you rebuild your scenes. You turn Home Assistant off at the end.

## What you keep, what you redo

| In Home Assistant | In Gladys | Pair again? |
| --- | --- | --- |
| Zigbee2MQTT add-on | [Zigbee2MQTT integration](#zigbee2mqtt): Gladys connects to it, then takes it over | No |
| ZHA | [Zigbee2MQTT integration](#devices-paired-with-zha) | Yes |
| Z-Wave JS or Z-Wave JS UI | [Z-Wave JS UI integration](#z-wave) (community), with the same stick | No |
| Matter | [Matter integration](#matter), with a code shared by Home Assistant | No |
| MQTT devices (ESPHome, OpenMQTTGateway, DIY…) | [MQTT integration](#mqtt-devices-and-other-integrations), Home Assistant Discovery | No |
| Tasmota, ESPHome, Shelly, Philips Hue, Netatmo, Tuya… | [Their integration in Gladys](#mqtt-devices-and-other-integrations) | No, in most cases |
| Automations, scripts | [Scenes](#automations-dashboards-and-history) | Rebuild them |
| Dashboards | [Dashboards](#automations-dashboards-and-history) | Rebuild them |
| History | Not transferred | — |

## The recommended order

1. **Install Gladys next to Home Assistant**, on another machine or in another virtual machine: for example [Gladys Assistant OS on a mini-PC](/docs/installation/mini-pc/).
2. **Connect Gladys to what Home Assistant runs**: the Zigbee2MQTT add-on, the MQTT broker, the Matter devices. Nothing moves, and you can go back at any time.
3. **Rebuild your scenes and your dashboards** in Gladys, and use it every day for a while.
4. **Move the radios** (Zigbee dongle, Z-Wave stick) to the Gladys machine, one at a time.
5. **Turn Home Assistant off**, once nothing depends on it anymore (see [Turn Home Assistant off](#turn-home-assistant-off)).

:::warning
A Zigbee dongle or a Z-Wave stick is driven by **a single software at a time**. Never let Home Assistant and Gladys drive the same radio: stop the add-on in Home Assistant before you start it in Gladys.
:::

## Zigbee2MQTT

If your Zigbee devices run on the **Zigbee2MQTT add-on** of Home Assistant (called an *app* in recent versions of Home Assistant), you have two options:

- **Option A: Gladys connects to the Zigbee2MQTT of Home Assistant.** Nothing moves: Zigbee2MQTT stays on Home Assistant and Gladys reads it through MQTT. It's the fastest way to try Gladys.
- **Option B: you move Zigbee2MQTT into Gladys.** Gladys then runs the MQTT broker and Zigbee2MQTT itself, and Home Assistant no longer needs to run.

You can do both in a row: start with option A, then switch to option B when you are ready. The devices you add in Gladys are linked by their Zigbee2MQTT name, and option B keeps these names: you normally don't have to add them to Gladys again.

### Option A: connect Gladys to the Zigbee2MQTT of Home Assistant

1. **Create an MQTT user for Gladys.** The Mosquitto broker add-on of Home Assistant accepts the Home Assistant users: create a user dedicated to Gladys in **Settings > People > Users**. You can also add one under `logins` in the configuration of the Mosquitto add-on.
2. In Gladys, go to **Integrations > Zigbee2MQTT**, **Setup** tab. In step 1 of the wizard, click on **I already have a Zigbee2MQTT**.
3. Enter:
   - the **MQTT broker address**: `mqtt://IP_OF_HOME_ASSISTANT:1883` (the Mosquitto add-on opens port 1883 by default);
   - the **User** and the **Password** you just created;
   - the **Zigbee2MQTT interface address** (optional). On Home Assistant, the Zigbee2MQTT interface usually opens only from the Home Assistant sidebar: leave this field empty, unless you opened its port in the network settings of the add-on.
4. Click on **Connect**. Your devices show up in the **Discover** tab: [add them to Gladys](/docs/integrations/zigbee2mqtt#add-devices).

:::warning
Gladys listens to the `zigbee2mqtt/#` topic: the base topic of your Zigbee2MQTT (`mqtt.base_topic`) must still be `zigbee2mqtt`, the default value of the add-on.
:::

A device shows its values as soon as it is added, when Zigbee2MQTT has sent them since Gladys connected to it. A battery sensor shows its values at its next report: give it up to an hour or so.

**Pros:** five minutes of setup, nothing to break, and you can go back at any time.
**Cons:** Home Assistant (Mosquitto and Zigbee2MQTT) keeps running. If it goes down, your Zigbee network goes down with it.

### Option B: move Zigbee2MQTT into Gladys

Your whole Zigbee network lives in the data folder of Zigbee2MQTT and on the coordinator (your Zigbee dongle). Copy the folder, move the dongle, and Gladys takes over the network as it is.

:::info[Before you start]

- You have SSH access to the Gladys machine.
- You keep **the same Zigbee dongle** as in Home Assistant: the network settings are stored on it.
- Zigbee2MQTT is not set up in Gladys yet. If it is (you used option A, or you installed it to test), first click on **Reset the integration** in the **Advanced settings** of the `Setup` tab. Do it **before** copying the files: the reset deletes the Zigbee2MQTT folder of Gladys. The devices you already added in Gladys are kept.
- If this Gladys already runs its own Zigbee network, with devices you use, these devices are not part of the Home Assistant network: you will have to pair them again on it after the move. Keep a copy of `/var/lib/gladysassistant/zigbee2mqtt/z2m` before the reset, in case you want to go back.

:::

#### 1. Stop Zigbee2MQTT in Home Assistant

In Home Assistant, stop the **Zigbee2MQTT** add-on and turn off its **Start on boot** option, so that it stays stopped. **Two Zigbee2MQTT must never run on the same network.**

#### 2. Get the Zigbee2MQTT folder

With the **Samba share** or **Terminal & SSH** add-on, get the folder of Zigbee2MQTT. It is the `zigbee2mqtt` folder of the Home Assistant configuration: `config/zigbee2mqtt` on the Samba share, `/homeassistant/zigbee2mqtt` (or `/config/zigbee2mqtt`, depending on the version of the add-on) in the terminal. If you changed the `data_path` option of the add-on, the folder is at that path instead.

Take **the whole folder**, not only some files. Besides `configuration.yaml`, `database.db` and `coordinator_backup.json`, it can hold `devices.yaml` and `groups.yaml` (the names of your devices), `secret.yaml` (the network key, when the configuration reads it with `!secret`), `state.json` (the last known states) or an `external_converters` folder. Only the `log` folder is not needed.

Keep a copy of this folder as it is: it is your way back.

#### 3. Copy the folder to the Gladys machine

Its content goes into the Zigbee2MQTT folder of Gladys: `/var/lib/gladysassistant/zigbee2mqtt/z2m/` on a standard installation. For example, from your computer, send the folder to your home folder on the Gladys machine with `scp`:

```bash
scp -r zigbee2mqtt USER@IP_OF_GLADYS:~
```

Then, on the Gladys machine, copy its content into the Zigbee2MQTT folder of Gladys, created if it does not exist yet:

```bash
sudo mkdir -p /var/lib/gladysassistant/zigbee2mqtt/z2m
sudo cp -r ~/zigbee2mqtt/. /var/lib/gladysassistant/zigbee2mqtt/z2m/
```

If you installed Gladys with Docker in another folder than `/var/lib/gladysassistant`, use your folder instead.

#### 4. Edit `configuration.yaml`

Open `configuration.yaml` on the Gladys machine (for example with `sudo nano /var/lib/gladysassistant/zigbee2mqtt/z2m/configuration.yaml`) and fix these lines by hand:

```yaml
homeassistant:
  enabled: false
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://localhost:1884
```

- `server` must point to the MQTT broker of Gladys (port `1884`). Otherwise, it still points to the Mosquitto of Home Assistant: Gladys does not rewrite this line. If the line is missing, add it.
- `homeassistant`: write `enabled: false` under the `homeassistant` section. Don't replace the section with `homeassistant: false`: Zigbee2MQTT 2 refuses this form and does not start.
- Leave the rest as it is. Gladys rewrites on its own, at startup, the MQTT username and password, the serial port and the adapter of the dongle, and the port of the web interface. The network key, the PAN ID and the channel are kept.

#### 5. Install Zigbee2MQTT from Gladys

Plug the Zigbee dongle into the Gladys machine. If Gladys runs in a virtual machine, pass the dongle through to it (see the [Proxmox guide](/docs/installation/proxmox)). With a network coordinator (SLZB-06…), there is nothing to plug in: in the wizard, click on **Network coordinator (SLZB-06…)?** and enter its address (see [Use a network coordinator](/docs/integrations/zigbee2mqtt#use-a-network-coordinator)).

In Gladys, go to **Integrations > Zigbee2MQTT**, **Setup** tab, and follow the [setup wizard](/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard): Gladys recognizes the most common dongles (ConBee II, SONOFF ZBDongle-P and ZBDongle-E…); otherwise, choose its model in the list. Click on **Install**.

Gladys keeps the `configuration.yaml` it finds in the folder, so Zigbee2MQTT starts on your existing network. Once the network is ready, the dashboard shows the number of devices in the network.

#### 6. Check your devices

- Devices you already added in Gladys with option A work again as they are.
- The other ones show up in the **Discover** tab: [add them to Gladys](/docs/integrations/zigbee2mqtt#add-devices).

Battery sensors show their values at their next report.

#### Go back to Home Assistant

Something went wrong? On the dashboard of Gladys, click on **Stop** (Gladys remembers it and does not start Zigbee2MQTT again). Plug the dongle back into the Home Assistant machine, put your copy of the folder back if needed, and start the Zigbee2MQTT add-on again.

### Devices paired with ZHA

ZHA (the built-in Zigbee integration of Home Assistant) is a different case:

- **ZHA does not use MQTT.** Gladys cannot connect to it, so option A does not work for these devices.
- **Gladys runs a single Zigbee2MQTT, so a single Zigbee dongle.** If you used one dongle for Zigbee2MQTT and another one for ZHA, you can't run both in Gladys.

The simplest and most reliable way: move the Zigbee2MQTT network (option B), then pair the devices that were on ZHA again on it, from the **Discover** tab, with **Permit joining**. It takes a bit of work once, but you then have a single network, and a stronger mesh.

If all your Zigbee devices are on ZHA, stop ZHA in Home Assistant (or turn Home Assistant off), plug the dongle into the Gladys machine, [install Zigbee2MQTT](/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) and pair your devices again.

## Z-Wave

Gladys talks to Z-Wave through the community [Z-Wave JS UI integration](/docs/integrations/external/z-wave-js-ui/), which you install from the integrations catalog. Z-Wave JS UI keeps driving the stick, and the integration reads it over MQTT. Your Z-Wave network (the devices and their node numbers) is stored **on the Z-Wave stick itself**: plugged into another Z-Wave JS UI, the stick brings its devices with it.

**To try Gladys first:** if Home Assistant uses the **Z-Wave JS UI** add-on, turn on its MQTT gateway, connected to the Mosquitto of Home Assistant, with the MQTT and Gateway settings the integration expects (see [Setting up Z-Wave JS UI](/docs/integrations/external/z-wave-js-ui/#setting-up-z-wave-js-ui)). Then install the Z-Wave JS UI integration in Gladys and enter this broker in its **Configuration** tab. The official **Z-Wave JS** add-on has no MQTT gateway: Gladys cannot connect to it.

**To move the stick:**

1. **Write down the security keys** of your network: in the **Configuration** tab of the Z-Wave JS add-on (the S0, S2 and Long Range keys), or in **Settings > Z-Wave** of Z-Wave JS UI. Without them, the devices paired securely (locks, alarms…) no longer answer.
2. **Stop the add-on** in Home Assistant and turn off its **Start on boot** option.
3. **Install Z-Wave JS UI** on the Gladys machine, with Docker (see the [Z-Wave JS UI documentation](https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker)), next to an MQTT broker: the one the [MQTT integration](/docs/integrations/mqtt) of Gladys installs works. Plug the stick in.
4. In Z-Wave JS UI, enter **the same security keys** in **Settings > Z-Wave**, then the [MQTT and Gateway settings](/docs/integrations/external/z-wave-js-ui/#setting-up-z-wave-js-ui) the integration expects: **Name** `zwave-js-ui`, **Prefix** `zwave`, **Topic type** `Named topics`, **Payload type** `Entire Z-Wave value Object`…
5. In Gladys, install the [Z-Wave JS UI integration](/docs/integrations/external/z-wave-js-ui/) from the integrations catalog, enter the broker in its **Configuration** tab, then add your devices from the **Discover** tab.

The integration identifies Z-Wave devices by their node number, which the stick keeps: devices added in Gladys before the move keep working. The names you gave in Home Assistant don't come along: rename the devices in Gladys.

## Matter

Matter devices can be controlled by several controllers at once (multi-admin). So you don't have to remove them from Home Assistant to add them to Gladys:

1. In Home Assistant, open the device and click on **Share device**, then on **Share device** again: Home Assistant shows a QR code and a sharing code. The code expires after a few minutes: enter it in Gladys right away.
2. In Gladys, go to **Integrations > Matter**, **Add Device** tab, enter this code, then add the device from the **Devices** tab (see the [Matter guide](/docs/integrations/matter#configuration-in-gladys-assistant)).

Gladys becomes a controller of the device, next to Home Assistant: the device keeps working with Gladys once Home Assistant is turned off.

:::warning[Thread devices]
A Matter over Thread device needs a **Thread border router** on your network, and Gladys is not one. If yours is the one of Home Assistant (the OpenThread Border Router add-on, with a Home Assistant Connect ZBT-1 or ZBT-2 dongle, for example), your Thread devices stop answering when you turn Home Assistant off. Another border router (Apple TV, HomePod, Nest Hub…) only takes over if it is on the **same Thread network**, and it often forms its own. Before turning Home Assistant off, stop the OpenThread Border Router add-on and check that your Thread devices still answer in Gladys. Read [If your device uses Thread only](/docs/integrations/matter#if-your-device-uses-thread-only), and ask on the forum if in doubt.
:::

## MQTT devices and other integrations

**MQTT devices.** Since Gladys 4.86, the [MQTT integration](/docs/integrations/mqtt) understands the **Home Assistant Discovery** protocol: devices that publish their configuration on the `homeassistant/` topic of the broker (ESPHome with MQTT, OpenMQTTGateway, DIY devices…) show up on their own in its **Discovery** tab. You can first connect the MQTT integration to the Mosquitto of Home Assistant. Before turning Home Assistant off, point your devices to the MQTT broker installed by Gladys, connect the MQTT integration to this broker, then restart the devices: they publish their discovery messages again when they reconnect.

Don't add your Zigbee devices from there: Zigbee2MQTT can publish Home Assistant discovery messages too, but use the Zigbee2MQTT integration for them, which supports them fully.

**Devices with their own integration.** Many brands have their integration in the Gladys catalog: [Tasmota](/docs/integrations/external/tasmota), [ESPHome](/docs/integrations/external/esphome), [Shelly](/docs/integrations/external/shelly), [Philips Hue](/docs/integrations/external/philips-hue), [Netatmo](/docs/integrations/external/netatmo), [Tuya](/docs/integrations/external/tuya), cameras… Look for yours in the [integrations catalog](/docs/integrations/), and add your devices from there: they stay paired with their bridge, their cloud or your Wi-Fi, so there is nothing to pair again.

## Automations, dashboards and history

These stay in Home Assistant:

- **Automations and scripts**: rebuild them as [scenes](/docs/scenes/intro). Run them in Gladys only once they are turned off in Home Assistant, otherwise they run twice.
- **Dashboards**: rebuild them in Gladys with the [dashboards](/docs/dashboard/intro).
- **History**: the history of your sensors is not transferred. Gladys starts recording when you add a device.
- **Node-RED**: if you use the Node-RED add-on, you can export your flows and import them into the Node-RED that the community [Node-RED integration](/docs/integrations/external/node-red/) runs next to Gladys. The Home Assistant nodes no longer work: replace them with MQTT nodes.

## Turn Home Assistant off

Before turning Home Assistant off for good, check that:

- every radio (Zigbee dongle, Z-Wave stick) is plugged into the Gladys machine, and its add-on is stopped in Home Assistant;
- no device uses the Mosquitto broker of Home Assistant anymore (Tasmota, Shelly, ESPHome…): point them to the broker of Gladys;
- your Thread devices still answer in Gladys with the OpenThread Border Router add-on of Home Assistant stopped (see [Matter](#matter));
- your scenes run in Gladys.

Keep a backup of Home Assistant for a few weeks: it's your plan B.

## Need help?

If you get stuck at any step, ask your question on the [community forum](https://community.gladysassistant.com/).
