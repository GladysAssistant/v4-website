---
id: hardware
title: Getting started with Gladys Assistant
sidebar_label: Getting started
slug: /
description: "How to install Gladys Assistant: on a mini-PC with Gladys Assistant OS, our official installer, on a Raspberry Pi, or on any Linux machine with Docker. Free, open-source, self-hosted home automation."
---

It can be difficult to know where to start when you're new to home automation.

## Choose Your Home Automation Hub

Gladys Assistant is a self-hosted software, which means everything works locally on a home automation hub. This is one of its main strengths!

You have several options to run Gladys:

### Option 1: Mini-PC with Gladys Assistant OS (Recommended)

Most users run Gladys on a mini-PC. It's the best price/performance ratio for a long-term setup.

Installing it is easy with **Gladys Assistant OS**, our official installer: write it to a USB drive, start the mini-PC from it and answer a few questions. Gladys installs itself, then stays up to date automatically. No command line needed.

- **New mini-PC** (Beelink, Intel NUC…), for example the [Beelink Mini S13 on Amazon](https://www.amazon.com/s?k=Beelink+Mini+S13&tag=gladproj-21)
- **Refurbished mini-PC**: often cheaper on second-hand marketplaces. Look for at least 8 GB RAM and an SSD.
- **A computer you already own**: an old PC, an Intel NUC gathering dust… Any computer with an Intel or AMD processor can become your Gladys box (its disk will be erased).

👉 [Install Gladys on a mini-PC with Gladys Assistant OS](/docs/installation/mini-pc/)

### Option 2: Raspberry Pi

- A great way to discover Gladys if you already have one on hand
- Simplified setup with our official 64-bit image (Pi 3, 4, and 5)
- 👉 [Raspberry Pi installation guide](/docs/installation/raspberry-pi/)
- For everyday long-term use, a mini-PC is still the better choice

### Option 3: A Server or NAS You Already Run

If you already have a machine running other services, you can install Gladys on it with Docker, next to what is already there:

- **Any Linux server with Debian or Ubuntu**: see the [Docker installation guide](/docs/installation/docker/)
- **Synology or Unraid NAS**: see the [Synology](/docs/installation/synology/) and [Unraid](/docs/installation/unraid/) guides
- **Proxmox VE server**: run Gladys in a Debian VM, see the [Proxmox installation guide](/docs/installation/proxmox/)

## Installing Gladys Assistant

Depending on the hardware chosen, you can follow one of the following tutorials:

- **Recommended:** [Install Gladys Assistant on a mini-PC with Gladys Assistant OS](/docs/installation/mini-pc/)
- [Install Gladys Assistant on a Raspberry Pi](/docs/installation/raspberry-pi/)
- [Install Gladys Assistant with Docker on Debian, Ubuntu or any Linux machine](/docs/installation/docker/)
- [Install Gladys Assistant on Proxmox VE](/docs/installation/proxmox/)
- [Install Gladys Assistant on a Synology NAS](/docs/installation/synology/)
- [Install Gladys Assistant on an Unraid NAS](/docs/installation/unraid/)

## Define Your Smart Home Project

The most important thing is to define the automations you want to implement in your home: connected lights, an alarm to secure your home, energy savings by turning off unused devices or heating?

A good way to organize is to create a table (in Excel, Google Sheets, or Notion) where you list all the devices you want to integrate, room by room.

![Notion Table Connected Home](../../static/img/docs/en/installation/guide/notion-table-connected.jpg)

### Example: Living Room

| Name                                                      | Price  | Link                                                                                                                           |
| --------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Zigbee Temperature/Humidity Sensor with Display           | $19,99 | [Amazon US](https://amzn.to/4i3oRP1)                                                                                           |
| ZigBee Smart Plug 4 Pack with Real-time Energy Monitoring | €16.99 | [Amazon US](https://amzn.to/3CRoBne)                                                                                           |
| IKEA TRÅDFRI E27 Bulb (Ceiling Light)                     | $13,99 | [IKEA US](https://www.ikea.com/us/en/p/tradfri-led-bulb-e26-1100-lumen-smart-wireless-dimmable-white-spectrum-globe-50545678/) |
| IKEA STYRBAR Remote (Brightness)                          | $13,99 | [IKEA US](https://www.ikea.com/us/en/p/styrbar-remote-control-smart-white-80488370/)                                           |
| Zigbee Motion Sensor 4 Pack                               | $75,99 | [Amazon US](https://amzn.to/4k2hb0X)                                                                                           |

The idea is not necessarily to buy everything at once, but rather to plan and gradually equip your home, unless you have just moved in and want to install everything immediately.

## Configuring Your Smart Home

Once Gladys is running at your home, you can access it via your web browser and start configuring your home.

![Gladys Installation](../../static/img/docs/en/installation/guide/welcome-gladys.jpg)

From there, just follow the steps: create the main administrator account for your smart home, answer a few preferences, and name your house. It takes a couple of minutes.

There you go! You now have a Gladys smart home system at your place.

You can now set up the various integrations available in Gladys.

If you have any questions, join us now [on the forum](https://community.gladysassistant.com/)!
