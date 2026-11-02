---
id: migrate
title: Move Gladys to a new machine
description: "Replacing your mini-PC, Raspberry Pi or server? Here is how to move Gladys Assistant to a new machine with a Gladys Plus backup, without pairing your devices again, then wipe the old one safely."
sidebar_label: Move to a new machine
keywords:
  - migrate gladys
  - move gladys to a new server
  - change gladys instance
  - restore gladys plus backup
  - new mini pc gladys
---

Replacing the machine that runs Gladys (an old mini-PC, a Raspberry Pi, a NAS...) with a new one? With a **Gladys Plus backup**, you get your instance back as it was on the new machine: users, houses and rooms, devices, scenes, dashboards, integration settings and the whole sensor history.

Zigbee2mqtt and Matter are restored too: Gladys stores their configuration in its database every night, so **you don't need to pair your devices again**.

There are just a few precautions to take. Here is the procedure, step by step.

:::info[What you need]

- A [Gladys Plus](/plus/) subscription that includes backups, connected to your current instance.
- The new machine, which you will install with the usual guide (for example [Gladys Assistant OS on a mini-PC](/docs/installation/mini-pc/)).

:::

## 1. Before you switch (on the old machine)

### Write down your backup key

In your current instance, go to **Settings > Gladys Plus**, **"Backup Key"** section, and click the eye icon to show it. Copy it somewhere safe, outside of Gladys (in a password manager, for example).

Your backups are **encrypted with this key**: without it, they cannot be restored.

:::danger
Don't disconnect Gladys Plus on the old instance before you have written the key down: disconnecting **erases the key from the instance**.
:::

### Write down what is not in the backup

- **Node-RED**: if you use it, export your flows (**☰ menu > Export > All flows**). They are not part of the Gladys backup.
- **MQTT**: if you use the MQTT integration with the broker installed by Gladys (for Tasmota, Shelly devices, etc.), write down the MQTT username and password as a precaution (**Integrations > MQTT > Setup**).

### Don't pair new devices right before the move

The Zigbee2mqtt configuration is saved in Gladys **every evening at 11 PM**, the Matter one **at 4 AM**. A Zigbee or Matter device paired after the last nightly save will not be in the backup: you would have to pair it again on the new machine.

### Run a manual backup

Go to **Settings > Backups** and click **"Backup now"**. Wait until the new backup shows up in the list.

### Turn off the old machine

**Never run both machines at the same time**: they would control the same devices, your scenes would run twice, and they would share the same Gladys Plus connection.

Then unplug your Zigbee dongle (and your other USB dongles) and plug it into the new machine. If your Zigbee coordinator is a network model (SLZB-06, etc.), there is nothing to move.

## 2. Install the new machine and restore the backup

Install Gladys on the new machine with the matching guide. On a mini-PC, follow [Install Gladys Assistant with Gladys Assistant OS](/docs/installation/mini-pc/): you write the image to a USB drive, boot the mini-PC from it, answer a few questions, and Gladys installs itself.

When Gladys shows the welcome screen (on [http://gladysassistant.local](http://gladysassistant.local) with Gladys Assistant OS):

1. Click **"Gladys Plus backup restore"**, **not** "Create local account".
2. Log in with your Gladys Plus account: email, password and [two-factor authentication](/docs/plus/two-factor-authentication/) code.
3. Enter your **backup key**: the one you wrote down in step 1.
4. Pick the most recent backup, then click **"Restore backup"** and **"Confirm"**.

The restore takes more or less time depending on the size of your history. When it is done, Gladys restarts by itself. You then log in with your usual Gladys account, that is **the email and password of your old instance**.

:::tip[The restore fails?]
Check that the key you entered is the one of the old instance: Gladys lets you change it and try again. You can also create a local account, connect Gladys Plus later in **Settings > Gladys Plus**, then restore the backup from **Settings > Backups**.
:::

## 3. Checks after the restore

- **Zigbee2mqtt**: Gladys reinstalls it automatically with its restored configuration (Zigbee network and devices), with no new pairing. Still, go to **Integrations > Zigbee2mqtt** and check the USB port of the dongle: it may have another name on the new machine. If so, select the right one.
- **Matter**: the controller is restored automatically from its backup.
- **Catalog integrations**: they are reinstalled automatically at startup. Gladys downloads their images again, which can take a few minutes.
- **MQTT** (if you use the broker installed by Gladys): since Gladys 5.3.1, Gladys recreates the broker automatically with your stored credentials, so your MQTT devices reconnect without any change. Check in **Integrations > MQTT** that Gladys is connected to the broker.
- **Node-RED**: import your flows again.
- **IP address**: the new machine has a new IP address. Everything that reaches Gladys by its IP (MQTT devices, etc.) must use the new one. The easiest way: once the old machine is off, give the new one, in your router settings, the fixed IP address the old one had (DHCP reservation).
- **Gladys Plus**: your Gladys Plus connection is part of the backup, so the new machine takes the place of the old one. Check that the instance is connected in **Settings > Gladys Plus**, and test remote access on [plus.gladysassistant.com](https://plus.gladysassistant.com). The next day, check that a new backup shows up in **Settings > Backups**.

## 4. Wipe the old machine

Keep it turned off for a few days, while you check that everything works: it is your plan B. **Never turn it back on with Gladys running while the new machine is running.**

After that, remember that its disk still holds your Gladys database (users, Gladys Plus keys, access to your integrations). So:

- **if you give it away or sell it**, reinstall a system and fully erase the disk;
- **if you keep it for something else**, remove the Gladys containers and data:

```bash
docker rm -f gladys gladys-z2m-zigbee2mqtt gladys-z2m-mqtt eclipse-mosquitto gladys-node-red gladys-matterbridge
```

```bash
sudo rm -rf /var/lib/gladysassistant
```

Adapt the list of containers to what the `docker ps -a` command shows on your machine (for example, add `watchtower` if it is installed). If you installed Gladys yourself with Docker in another folder than `/var/lib/gladysassistant`, delete that folder instead.

No need to disconnect Gladys Plus on the old machine: the new one has taken over the connection.

## Need help?

If you get stuck at any step, ask your question on the [community forum](https://community.gladysassistant.com/).
