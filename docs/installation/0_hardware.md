---
id: hardware
title: Getting started with Gladys Assistant
sidebar_label: Getting started
slug: /
---

It can be difficult to know where to start when you're new to home automation.

## Choose Your Home Automation Hub

Gladys Assistant is a self-hosted software, which means everything works locally on a home automation hub. This is one of its main strengths!

You have several options to run Gladys:

### Option 1: Official Starter Kit (Europe Only for now 🇪🇺)

The easiest way to get started is with our **official starter kit**:

- **Gladys pre-installed** on a powerful Beelink mini-PC
- **Plug & play**: Receive it, plug it in, and you're ready in 5 minutes
- **6 months of Gladys Plus included** for remote access
- **Official training included** with hours of video tutorials
- **Support included**: I'm here to help if you have questions

👉 [Discover the starter kit](https://gladysassistant.com/fr/starter-kit/) (Ships to Europe only for now)

**Note:** The starter kit currently ships only to European countries. If you're outside Europe, see the options below.

### Option 2: DIY Installation on Mini-PC

If you're outside Europe or prefer to install Gladys yourself:

- **Beelink Mini S13** or similar mini-PC
  - Powerful and stable hardware (Intel N150, 16GB RAM, 500GB NVMe SSD)
  - Install Ubuntu Server via bootable USB + Gladys via Docker
  - Available on [Amazon US](https://amzn.to/4gKDV2E) or your local retailer
  - **Best price/performance ratio for a long-term setup**

### Option 3: Existing Hardware

If you already have compatible hardware:

- **Synology NAS, Intel NUC, or any Docker-compatible Linux server**
  - Reuse your existing hardware
  - Follow our installation guides below

### Option 4: Raspberry Pi (Not Recommended)

- If you already own a Raspberry Pi, you can test Gladys on it
- However, **I do not recommend this option in the long term**:
  - Total cost is relatively high (Pi + power supply + case + SSD)
  - Micro-SD cards are **strongly discouraged** (high risk of data corruption)
  - Power supply instability makes Zigbee/Z-Wave dongles unreliable

## Installing Gladys Assistant

Depending on the hardware chosen, you can follow one of the following tutorials:

- [Install Gladys Assistant on a Mini-PC](/docs/installation/mini-pc/)
- [Install Gladys Assistant on a Synology NAS](/docs/installation/synology/)
- [Install Gladys Assistant on an Unraid NAS](/docs/installation/unraid/)
- [Install Gladys Assistant on a Raspberry Pi](/docs/installation/raspberry-pi/)

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

Simply follow the steps here.

We will first create the main administrator account for your smart home:

![Create Local Gladys Account](../../static/img/docs/en/installation/guide/create-local-account.jpg)

Next, Gladys will ask you for some preferences:

![Set Local Gladys Account Preferences](../../static/img/docs/en/installation/guide/preferences.jpg)

Finally, you can name your house:

![Create House in Gladys](../../static/img/docs/en/installation/guide/configure-house.jpg)

There you go! You now have a Gladys smart home system at your place.

You can now set up the various integrations available in Gladys.

If you have any questions, join us now [on the forum](https://community.gladysassistant.com/)!
