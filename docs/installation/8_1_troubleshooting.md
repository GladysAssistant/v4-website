---
id: troubleshooting
title: "Troubleshooting Gladys Assistant: common problems and fixes"
description: "Mini-PC that does not start from the USB drive, Gladys does not open, forgotten password, failed update, Zigbee dongle not detected, scenes at the wrong time: the fixes for the most common Gladys Assistant problems."
sidebar_label: Troubleshooting
keywords:
  - gladys assistant troubleshooting
  - gladys not working
  - gladys assistant os problem
  - gladys forgot password
  - gladys update failed
  - gladys logs
---

import JsonLd from '@site/src/components/seo/JsonLd';

This page gathers the most common problems with Gladys Assistant and how to fix them. If yours is not listed, the [logs](#start-with-the-logs) and [the forum](https://community.gladysassistant.com/) are the next step.

## Start with the logs

Most problems leave a trace in the Gladys logs: an error message usually names the integration or the device involved. You can download them in one click from **Settings > System > Download logs**, or read them from the command line if the interface does not open. See [how to download Gladys logs](/docs/installation/logs).

If you installed Gladys with [Gladys Assistant OS](/docs/installation/mini-pc), `sudo gladys-diagnostics` also displays the state of the machine: network, disk, Docker and Gladys. Run it over SSH, or on the mini-PC itself after pressing **Ctrl+Alt+F2** to get a login prompt.

## Installation

### The mini-PC does not start from the USB drive

The image of [Gladys Assistant OS](/docs/installation/mini-pc) must be written to the USB drive with a tool such as balenaEtcher: copying the `.iso` file onto the drive does not work. Then, in the BIOS settings (usually with **Del** or **F2** at startup), check that the computer boots in **UEFI** mode, not "Legacy" or "CSM", and put the USB drive first in the boot order. If it still refuses to start, disable **Secure Boot** in the same settings.

### Gladys does not open after the installation

**With Gladys Assistant OS**, the screen of the mini-PC shows where the installation stands. On the first boot, it downloads Gladys, which can take a while depending on your Internet connection: wait until the screen shows **Gladys Assistant is ready**. If it shows **Internet connection required**, check the Ethernet cable and your router: the setup resumes on its own. If it shows **Setup cannot continue**, see [the troubleshooting section of the guide](/docs/installation/mini-pc#troubleshooting).

**With Docker**, check, in this order, that the container is running (`sudo docker ps`), that no other web server already uses port 80, and that no firewall blocks it. The [Docker installation guide](/docs/installation/docker#gladys-does-not-open-after-the-installation-what-should-i-check) details each step.

### `gladysassistant.local` does not open

Some networks block the mDNS protocol behind that name: some Android versions, guest networks, routers with client isolation. Use the IP address of the machine running Gladys instead, for example `http://192.168.1.20`. With Gladys Assistant OS, this address is shown on the screen of the mini-PC. See [what to do if `gladysassistant.local` does not open](/docs/installation/docker#if-gladysassistantlocal-does-not-open).

## Login

### I forgot my password

On the login page, click on **I forgot my password** and enter your email. Gladys sends you a reset link, or a one-time code, through Telegram or Nextcloud Talk if you have set one of them up.

If you have not, the link or the code is written in the Gladys logs. Run this on the machine running Gladys:

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

If you tried too many times, wait 30 minutes or restart Gladys with `sudo docker restart gladys`. Another administrator can also reset your password from **Settings > Users**.

This is the password of your Gladys at home. For your Gladys Plus account, use **I forgot my password** on [plus.gladysassistant.com](https://plus.gladysassistant.com).

### My Gladys Plus two-factor code is refused, or I lost my phone

First check that your phone sets its date and time automatically: if its clock is off by more than about 30 seconds, every code it generates is refused. Changed phone, or lost your authenticator app and your recovery codes? Since Gladys 5.3.1, you can get back into your account on your own, without writing to support. See [two-factor authentication troubleshooting](/docs/plus/two-factor-authentication).

## Updates

### How do I update Gladys?

**With Gladys Assistant OS**, you have nothing to do: Gladys updates itself as soon as a new version is released. **With Docker**, if you started [Watchtower](/docs/installation/docker#auto-upgrade-gladys-with-watchtower) as shown in the installation guide, Gladys updates itself too.

You can also update manually: in **Settings > System**, click on **Check for updates**, then on **Update now** when a new version is available.

### The update says my container uses a "fixed image"

Your container was created with a fixed version, such as `gladysassistant/gladys:v4.80.0`, which never receives updates. Re-create it with the image `gladysassistant/gladys:v5`, keeping the options of your current container: the same data folder, port and environment variables. On a [Synology NAS](/docs/installation/synology), for example, they differ from the standard command.

1. Remove the container with `sudo docker rm -f gladys`. Your data stays in its folder on the machine (`/var/lib/gladysassistant` with the [installation command](/docs/installation/docker#start-gladys)).
2. Start it again with the same options, and `gladysassistant/gladys:v5` as the image.

With [Docker Compose](/docs/installation/docker-compose), set `image: gladysassistant/gladys:v5` in your file, then run `sudo docker compose -f gladys-compose.yml up -d` (with the name of your file).

### The update fails because of disk space

Docker keeps the images of previous versions. Remove the ones no container uses with `sudo docker image prune -a`, then try again.

## Devices and scenes

### My Zigbee dongle is not detected, or Zigbee2MQTT does not start

In **Integrations > Zigbee2MQTT > Setup**, Gladys lists the USB ports with the name of the device plugged into each one, and preselects the port and the model of the most common dongles. If your dongle is not in the list, check that the machine sees it with `ls /dev/serial/by-id/`. If Zigbee2MQTT does not turn green, Gladys tells you why on the same page: see the [common Zigbee2MQTT errors and their fixes](/docs/integrations/zigbee2mqtt#troubleshooting-common-zigbee2mqtt-errors). If Gladys runs in a virtual machine, the dongle must be passed through to it (see the [Proxmox guide](/docs/installation/proxmox)).

### A sensor no longer shows its value on the dashboard

The dashboard hides values older than **48 hours** by default, so that you do not trust a sensor that stopped reporting. Check the batteries and the range of the sensor. If it only reports rarely by design, raise the **Time to expiry of a state** in **Settings > System**.

### My scheduled scenes run at the wrong time

Scheduled scenes use the timezone of Gladys: check it in **Settings > System > Timezone**.

## Data and backups

### The disk of my machine fills up

Gladys keeps the history of every sensor. In **Settings > System**, lower **Keep Device State History**, and remove the old Docker images with `sudo docker image prune -a`.

### How do I restore a backup?

With [Gladys Plus](/docs/plus/intro), Gladys is backed up every day, encrypted. To restore a backup, open **Settings > Backups** and click on **Restore backup**. On a new installation, choose **Gladys Plus backup restore** on the welcome screen. In both cases you need your backup key: it is shown in **Settings > Gladys Plus** of your current instance, so write it down before you need it.

Replacing the machine that runs Gladys? Follow the [move to a new machine guide](/docs/installation/migrate): it lists what to write down before the switch, and brings back your Zigbee and Matter devices without pairing them again.

## Still stuck?

[Create a topic on the forum](https://community.gladysassistant.com/), describe what you did and what happens, and attach your [logs](/docs/installation/logs). With Gladys Assistant OS, also add the output of `sudo gladys-diagnostics`: it contains no password or secret. The community will help you find the cause.

Before posting, read your logs: if you reset your password recently, remove the reset link or code from them, as well as anything else you do not want to share publicly.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "The mini-PC does not start from the USB drive",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The image of Gladys Assistant OS must be written to the USB drive with a tool such as balenaEtcher: copying the .iso file onto the drive does not work. Then, in the BIOS settings (usually with Del or F2 at startup), check that the computer boots in UEFI mode, not Legacy or CSM, and put the USB drive first in the boot order. If it still refuses to start, disable Secure Boot in the same settings.",
        },
      },
      {
        "@type": "Question",
        name: "Gladys does not open after the installation",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Gladys Assistant OS, the screen of the mini-PC shows where the installation stands: wait until it shows Gladys Assistant is ready. If it shows Internet connection required, check the Ethernet cable and your router: the setup resumes on its own. With Docker, check, in this order, that the container is running (sudo docker ps), that no other web server already uses port 80, and that no firewall blocks it.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local does not open",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some networks block the mDNS protocol behind that name: some Android versions, guest networks, routers with client isolation. Use the IP address of the machine running Gladys instead, for example http://192.168.1.20. With Gladys Assistant OS, this address is shown on the screen of the mini-PC.",
        },
      },
      {
        "@type": "Question",
        name: "I forgot my password",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On the login page, click on I forgot my password and enter your email. Gladys sends you a reset link, or a one-time code, through Telegram or Nextcloud Talk if you have set one of them up. If you have not, the link or the code is written in the Gladys logs: run sudo docker logs gladys 2>&1 | grep \"Forgot password\" on the machine running Gladys. Another administrator can also reset your password from Settings > Users.",
        },
      },
      {
        "@type": "Question",
        name: "My Gladys Plus two-factor code is refused, or I lost my phone",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First check that your phone sets its date and time automatically: if its clock is off by more than about 30 seconds, every code it generates is refused. Changed phone, or lost your authenticator app and your recovery codes? Since Gladys 5.3.1, you can get back into your account on your own, without writing to support: see the two-factor authentication troubleshooting page.",
        },
      },
      {
        "@type": "Question",
        name: "How do I update Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Gladys Assistant OS, you have nothing to do: Gladys updates itself as soon as a new version is released. With Docker, if you started Watchtower as shown in the installation guide, Gladys updates itself too. You can also update manually: in Settings > System, click on Check for updates, then on Update now when a new version is available.",
        },
      },
      {
        "@type": "Question",
        name: "The update says my container uses a fixed image",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your container was created with a fixed version, such as gladysassistant/gladys:v4.80.0, which never receives updates. Re-create it with the image gladysassistant/gladys:v5, keeping the options of your current container: the same data folder, port and environment variables. Remove the container with sudo docker rm -f gladys (your data stays in its folder on the machine), then start it again with the same options and the v5 image. With Docker Compose, set the image to gladysassistant/gladys:v5 in your file, then run sudo docker compose -f gladys-compose.yml up -d.",
        },
      },
      {
        "@type": "Question",
        name: "The update fails because of disk space",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Docker keeps the images of previous versions. Remove the ones no container uses with sudo docker image prune -a, then try again.",
        },
      },
      {
        "@type": "Question",
        name: "My Zigbee dongle is not detected, or Zigbee2MQTT does not start",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Integrations > Zigbee2MQTT > Setup, Gladys lists the USB ports with the name of the device plugged into each one, and preselects the port and the model of the most common dongles. If your dongle is not in the list, check that the machine sees it with ls /dev/serial/by-id/. If Zigbee2MQTT does not turn green, Gladys tells you why on the same page. If Gladys runs in a virtual machine, the dongle must be passed through to it.",
        },
      },
      {
        "@type": "Question",
        name: "A sensor no longer shows its value on the dashboard",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The dashboard hides values older than 48 hours by default, so that you do not trust a sensor that stopped reporting. Check the batteries and the range of the sensor. If it only reports rarely by design, raise the Time to expiry of a state in Settings > System.",
        },
      },
      {
        "@type": "Question",
        name: "My scheduled scenes run at the wrong time",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scheduled scenes use the timezone of Gladys: check it in Settings > System > Timezone.",
        },
      },
      {
        "@type": "Question",
        name: "The disk of my machine fills up",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys keeps the history of every sensor. In Settings > System, lower Keep Device State History, and remove the old Docker images with sudo docker image prune -a.",
        },
      },
      {
        "@type": "Question",
        name: "How do I restore a backup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Gladys Plus, Gladys is backed up every day, encrypted. To restore a backup, open Settings > Backups and click on Restore backup. On a new installation, choose Gladys Plus backup restore on the welcome screen. In both cases you need your backup key: it is shown in Settings > Gladys Plus of your current instance, so write it down before you need it. To replace the machine that runs Gladys, follow the move to a new machine guide.",
        },
      },
    ],
  }}
/>
