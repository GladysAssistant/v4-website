---
id: migrate-from-home-assistant
title: "Migrate from Home Assistant to Gladys: keep your Zigbee2MQTT devices"
description: "Moving from Home Assistant to Gladys Assistant? Connect Gladys to the Zigbee2MQTT add-on of Home Assistant, or move your Zigbee2MQTT network into Gladys, without pairing your devices again. What to do with ZHA devices."
sidebar_label: Migrate from Home Assistant
keywords:
  - migrate from home assistant
  - home assistant to gladys
  - move zigbee2mqtt from home assistant
  - zigbee2mqtt add-on migration
  - keep zigbee devices without re-pairing
  - zha to zigbee2mqtt
  - conbee ii home assistant migration
---

Moving from Home Assistant to Gladys? If your Zigbee devices run on the **Zigbee2MQTT add-on** of Home Assistant (called an *app* in recent versions of Home Assistant), they come with you: **you don't need to pair them again**.

You have two options:

- **Option A: Gladys connects to the Zigbee2MQTT of Home Assistant.** Nothing moves: Zigbee2MQTT stays on Home Assistant and Gladys reads it through MQTT. It's the fastest way to try Gladys.
- **Option B: you move Zigbee2MQTT into Gladys.** Gladys then runs the MQTT broker and Zigbee2MQTT itself, and you can turn Home Assistant off.

You can do both in a row: start with option A to use Gladys every day, then switch to option B when you are ready to turn Home Assistant off. The devices you add in Gladys are linked by their Zigbee2MQTT name, and option B keeps these names: you normally don't have to add them to Gladys again.

Devices paired with **ZHA** (the built-in Zigbee integration of Home Assistant) are a different story: see [Devices paired with ZHA](#devices-paired-with-zha).

## Option A: connect Gladys to the Zigbee2MQTT of Home Assistant

1. **Create an MQTT user for Gladys.** The Mosquitto broker add-on of Home Assistant accepts the Home Assistant users: create a user dedicated to Gladys in **Settings > People > Users**. You can also add one under `logins` in the configuration of the Mosquitto add-on.
2. In Gladys, go to **Integrations > Zigbee2MQTT**, **Setup** tab. In step 1 of the wizard, click on **I already have a Zigbee2MQTT**.
3. Enter:
   - the **MQTT broker address**: `mqtt://IP_OF_HOME_ASSISTANT:1883`;
   - the **User** and the **Password** you just created;
   - the **Zigbee2MQTT interface address** (optional). On Home Assistant, the Zigbee2MQTT interface usually opens only from the Home Assistant sidebar: leave this field empty, unless you opened its port in the network settings of the add-on.
4. Click on **Connect**. Your devices show up in the **Discover** tab: [add them to Gladys](/docs/integrations/zigbee2mqtt#add-devices).

:::warning
Gladys listens to the `zigbee2mqtt/#` topic: the base topic of your Zigbee2MQTT (`mqtt.base_topic`) must still be `zigbee2mqtt`, the default value of the add-on.
:::

A device shows its values as soon as it is added, when Zigbee2MQTT has sent them since Gladys connected to it. A battery sensor shows its values at its next report: give it up to an hour or so.

**Pros:** five minutes of setup, nothing to break, and you can go back at any time.
**Cons:** Home Assistant (Mosquitto and Zigbee2MQTT) keeps running. If it goes down, your Zigbee network goes down with it.

## Option B: move Zigbee2MQTT into Gladys

Your whole Zigbee network lives in the data folder of Zigbee2MQTT and on the coordinator (your Zigbee dongle). Copy the folder, move the dongle, and Gladys takes over the network as it is.

:::info[Before you start]

- Gladys is installed (for example with [Gladys Assistant OS on a mini-PC](/docs/installation/mini-pc/)), and you have SSH access to its machine.
- You keep **the same Zigbee dongle** as in Home Assistant: the network settings are stored on it.
- Zigbee2MQTT is not set up in Gladys yet. If it is (you tried option A, or you installed it to test), first click on **Reset the integration** in the **Advanced settings** of the `Setup` tab. Do it **before** copying the files: the reset deletes the Zigbee2MQTT folder of Gladys. The devices you already added in Gladys are kept.

:::

### 1. Stop Zigbee2MQTT in Home Assistant

In Home Assistant, stop the **Zigbee2MQTT** add-on and turn off its **Start on boot** option, so that it stays stopped. **Two Zigbee2MQTT must never run on the same network.**

### 2. Get the Zigbee2MQTT folder

With the **Samba share** or **Terminal & SSH** add-on, get the folder of Zigbee2MQTT. It is the `zigbee2mqtt` folder of the Home Assistant configuration: `config/zigbee2mqtt` on the Samba share, `/homeassistant/zigbee2mqtt` (or `/config/zigbee2mqtt`, depending on the version of the add-on) in the terminal. The files that matter:

- `configuration.yaml`, and `devices.yaml` and `groups.yaml` if they exist;
- `database.db`;
- `coordinator_backup.json`;
- `state.json` (optional: the last known states).

Keep a copy of this folder as it is: it is your way back.

### 3. Copy the files to the Gladys machine

Copy these files to the Zigbee2MQTT folder of Gladys: `/var/lib/gladysassistant/zigbee2mqtt/z2m/` on a standard installation. Create the folder if it does not exist yet:

```bash
sudo mkdir -p /var/lib/gladysassistant/zigbee2mqtt/z2m
```

For example, from your computer, send the files to your home folder on the Gladys machine with `scp`:

```bash
scp configuration.yaml database.db coordinator_backup.json state.json USER@IP_OF_GLADYS:~
```

Then, on the Gladys machine, move them into the folder (add `devices.yaml` and `groups.yaml` if you have them):

```bash
sudo mv ~/configuration.yaml ~/database.db ~/coordinator_backup.json ~/state.json /var/lib/gladysassistant/zigbee2mqtt/z2m/
```

If you installed Gladys with Docker in another folder than `/var/lib/gladysassistant`, use your folder instead.

### 4. Edit `configuration.yaml`

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

### 5. Install Zigbee2MQTT from Gladys

Plug the Zigbee dongle into the Gladys machine. If Gladys runs in a virtual machine, pass the dongle through to it (see the [Proxmox guide](/docs/installation/proxmox)).

In Gladys, go to **Integrations > Zigbee2MQTT**, **Setup** tab, and follow the [setup wizard](/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard): Gladys recognizes the most common dongles (ConBee II, SONOFF ZBDongle-P and ZBDongle-E…); otherwise, choose its model in the list. Click on **Install**.

Gladys keeps the `configuration.yaml` it finds in the folder, so Zigbee2MQTT starts on your existing network. Once the network is ready, the dashboard shows the number of devices in the network.

### 6. Check your devices

- Devices you already added in Gladys with option A work again as they are.
- The other ones show up in the **Discover** tab: [add them to Gladys](/docs/integrations/zigbee2mqtt#add-devices).

Battery sensors show their values at their next report.

### Go back to Home Assistant

Something went wrong? On the dashboard of Gladys, click on **Stop** (Gladys remembers it and does not start Zigbee2MQTT again). Plug the dongle back into the Home Assistant machine, put your copy of the folder back if needed, and start the Zigbee2MQTT add-on again.

## Devices paired with ZHA

ZHA is a different case:

- **ZHA does not use MQTT.** Gladys cannot connect to it, so option A does not work for these devices.
- **Gladys runs a single Zigbee2MQTT, so a single Zigbee dongle.** If you used one dongle for Zigbee2MQTT and another one for ZHA, you can't run both in Gladys.

The simplest and most reliable way: move the Zigbee2MQTT network (option B), then pair the devices that were on ZHA again on it, from the **Discover** tab, with **Permit joining**. It takes a bit of work once, but you then have a single network, and a stronger mesh.

If all your Zigbee devices are on ZHA, stop ZHA in Home Assistant (or turn Home Assistant off), plug the dongle into the Gladys machine, [install Zigbee2MQTT](/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) and pair your devices again.

## Automations and dashboards

Your automations and dashboards don't come with your devices: rebuild them in Gladys with the [scenes](/docs/scenes/intro) and the [dashboards](/docs/dashboard/intro). If you use Z-Wave, see the [Z-Wave JS UI integration](/docs/integrations/zwavejs-ui).

## Need help?

If you get stuck at any step, ask your question on the [community forum](https://community.gladysassistant.com/).
