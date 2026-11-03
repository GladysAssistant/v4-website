---
id: troubleshooting
title: "Troubleshooting Gladys Assistant: common problems and fixes"
description: "Gladys does not open, forgotten password, failed update, Zigbee dongle not detected, scenes at the wrong time, sensors missing from the dashboard: the fixes for the most common Gladys Assistant problems."
sidebar_label: Troubleshooting
keywords:
  - gladys assistant troubleshooting
  - gladys not working
  - gladys forgot password
  - gladys update failed
  - gladys logs
---

import JsonLd from '@site/src/components/seo/JsonLd';

This page gathers the most common problems with Gladys Assistant and how to fix them. If yours is not listed, the [logs](#start-with-the-logs) and [the forum](https://community.gladysassistant.com/) are the next step.

## Start with the logs

Most problems leave a trace in the Gladys logs: an error message usually names the integration or the device involved. You can download them in one click from **Settings > System > Download logs**, or read them from the command line if the interface does not open. See [how to download Gladys logs](/docs/installation/logs).

## Access and login

### Gladys does not open after the installation

Check, in this order, that the container is running (`sudo docker ps`), that no other web server already uses port 80, and that no firewall blocks it. The [Docker installation guide](/docs/installation/docker#gladys-does-not-open-after-the-installation-what-should-i-check) details each step.

### `gladysassistant.local` does not open

Some networks block the mDNS protocol behind that name: some Android versions, guest networks, routers with client isolation. Use the IP address of the machine running Gladys instead, for example `http://192.168.1.20`. See [what to do if `gladysassistant.local` does not open](/docs/installation/docker#if-gladysassistantlocal-does-not-open).

### I forgot my password

On the login page, click on **I forgot my password** and enter your email. Gladys sends you a reset link, or a one-time code, through Telegram or Nextcloud Talk if you have set one of them up.

If you have not, the link or the code is written in the Gladys logs. Run this on the machine running Gladys:

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

If you tried too many times, wait 30 minutes or restart Gladys with `sudo docker restart gladys`. Another administrator can also reset your password from **Settings > Users**.

## Updates

### How do I update Gladys?

If you started [Watchtower](/docs/installation/docker#auto-upgrade-gladys-with-watchtower) as shown in the installation guide, Gladys updates itself when a new version is released. You can also update manually: in **Settings > System**, click on **Check for updates**, then on **Update now** when a new version is available.

### The update says my container uses a "fixed image"

Your container was created with a fixed version, such as `gladysassistant/gladys:v4.80.0`, which never receives updates. Re-create it with the image of the installation command, `gladysassistant/gladys:v5`: remove the container with `sudo docker rm -f gladys` (your data in `/var/lib/gladysassistant` is kept), then run the [installation command](/docs/installation/docker#start-gladys) again.

### The update fails because of disk space

Docker keeps the images of previous versions. Remove the ones no container uses with `sudo docker image prune -a`, then try again.

## Devices and scenes

### My Zigbee dongle is not detected, or Zigbee2MQTT does not start

Check that the dongle shows up on the machine with `ls /dev/serial/by-id/`, then look at the [common Zigbee2MQTT errors and their fixes](/docs/integrations/zigbee2mqtt#troubleshooting-common-zigbee2mqtt-errors). If Gladys runs in a virtual machine, the dongle must be passed through to it (see the [Proxmox guide](/docs/installation/proxmox)).

### A sensor no longer shows its value on the dashboard

The dashboard hides values older than **48 hours** by default, so that you do not trust a sensor that stopped reporting. Check the batteries and the range of the sensor. If it only reports rarely by design, raise the **Time to expiry of a state** in **Settings > System**.

### My scheduled scenes run at the wrong time

Set your timezone in **Settings > System > Timezone**: it is the one scheduled scenes use. Also check the `TZ` variable of your [installation command](/docs/installation/docker#start-gladys), which sets the time of the container.

## Data and backups

### The disk of my machine fills up

Gladys keeps the history of every sensor. In **Settings > System**, lower **Keep Device State History**, and remove the old Docker images with `sudo docker image prune -a`.

### How do I restore a backup?

With [Gladys Plus](/docs/plus/intro), Gladys is backed up every day, encrypted. To restore a backup, open **Settings > Backups** and click on **Restore backup**. On a new installation, choose **Gladys Plus backup restore** on the welcome screen. In both cases you need your backup key, shown in the Gladys Plus settings when you set it up.

## Still stuck?

[Create a topic on the forum](https://community.gladysassistant.com/), describe what you did and what happens, and attach your [logs](/docs/installation/logs). The community will help you find the cause.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gladys does not open after the installation",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check, in this order, that the container is running (sudo docker ps), that no other web server already uses port 80, and that no firewall blocks it. The Docker installation guide details each step.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local does not open",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some networks block the mDNS protocol behind that name: some Android versions, guest networks, routers with client isolation. Use the IP address of the machine running Gladys instead, for example http://192.168.1.20.",
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
        name: "How do I update Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you started Watchtower as shown in the installation guide, Gladys updates itself when a new version is released. You can also update manually: in Settings > System, click on Check for updates, then on Update now when a new version is available.",
        },
      },
      {
        "@type": "Question",
        name: "The update says my container uses a fixed image",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your container was created with a fixed version, such as gladysassistant/gladys:v4.80.0, which never receives updates. Re-create it with the image of the installation command, gladysassistant/gladys:v5: remove the container with sudo docker rm -f gladys (your data in /var/lib/gladysassistant is kept), then run the installation command again.",
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
          text: "Check that the dongle shows up on the machine with ls /dev/serial/by-id/, then look at the common Zigbee2MQTT errors and their fixes in the Zigbee2MQTT documentation. If Gladys runs in a virtual machine, the dongle must be passed through to it.",
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
          text: "Set your timezone in Settings > System > Timezone: it is the one scheduled scenes use. Also check the TZ variable of your installation command, which sets the time of the container.",
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
          text: "With Gladys Plus, Gladys is backed up every day, encrypted. To restore a backup, open Settings > Backups and click on Restore backup. On a new installation, choose Gladys Plus backup restore on the welcome screen. In both cases you need your backup key, shown in the Gladys Plus settings when you set it up.",
        },
      },
    ],
  }}
/>
