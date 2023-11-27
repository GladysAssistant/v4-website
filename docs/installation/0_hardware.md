---
id: hardware
title: Smart Home - The ultimate guide for beginners
sidebar_label: The ultimate smart home guide
slug: /
---

It's hard to know where to start when you're new to home automation. What equipment should you choose? For what budget? Which home automation protocol to use?

I've put together this tutorial to cover all these points and give you a starting point for creating your connected home from scratch.

## Defining your smart home project

The most important thing is to define the automation systems you want to install in your home: connected lights? An alarm to secure your home? Save energy by switching off unused appliances/heating?

Personally, I like to draw up a table (in Excel, Google Sheet or Notion) broken down by room, listing all the appliances I want to install.

For example:

**Living Room**

| Name                                    | Price  | Link                                                                                                                                                                   |
| --------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Door opening sensor                     | 10,06€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/5320-sonoff-capteur-d-ouverture-de-portefenetre-zigbee-30-snzb-04-6920075776126.html?domid=17)                       |
| Temperature/Humidity sensor             | 10,91€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.html?domid=17)                                 |
| Rolling shutters Zigbee                 | 39,92€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/5245-sunricher-module-volet-roulant-zigbee-30.html?domid=17)                                                         |
| Smart Power Plug with power consumption | 16,99€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=17)                           |
| Ampoule IKEA Tradfi E27 with color      | 17,99€ | [IKEA](https://www.ikea.com/fr/fr/p/tradfri-ampoule-led-e27-806-lumen-connecte-sans-fil-a-variateur-dintensite-spectre-couleur-et-blanc-globe-70439158/)               |
| IKEA STYRBAR remote control             | 9,99€  | [IKEA](https://www.ikea.com/fr/fr/p/styrbar-telecommande-connecte-blanc-30488363/)                                                                                     |
| Motion sensor - Zigbee Aqara P1         | 24,99€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/6138-aqara-detecteur-de-mouvement-et-luminosite-zigbee-30-aqara-motion-sensor-p1-ms-s02-6970504215979.html?domid=17) |

## Choosing your smart home hub

Gladys Assistant is "self-hosted" software, which means that everything will run locally on your home automation box.

That's Gladys' strength!

Gladys runs on any Linux mini-PC:

| Model                    | Price  | Comment                                                                                                                                                                                                                                                                                                                              | Link                                                                                                                     |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Raspberry Pi 4           | 56,90€ | The best-known and most affordable board on the market. Easy to set up with our Raspberry Pi OS image. Beware, using a micro-SD can present risks in the long term (risk of disk corruption). Perhaps a good entry point for getting started on Gladys at low cost!                                                                  | [Kubii](https://www.kubii.com/fr/cartes-raspberry-pi/2771-nouveau-raspberry-pi-4-modele-b-2gb-3272496308794.html?gladys) |
| Khadas VIM1S             | 65,99€ | A card with integrated eMMC storage. 2GB RAM / 16GB storage. Installation of Ubuntu Server via their custom BIOS, then installation of Gladys in CLI with Docker.                                                                                                                                                                    | [Amazon](https://amzn.to/3suD6Z3)                                                                                        |
| Beelink Mini S12 Pro     | 185€   | A super-powerful mini-PC: low-power 12th-generation Quad Core Intel, 8/16GB RAM, 256/512GB NVMe SSD. Extremely stable over the long term, and very high-performance. Little fiddling to do (it's all integrated in a case, and power supplied). To use it, install Ubuntu Server via a bootable USB key + install Gladys via Docker. | [Amazon](https://amzn.to/49RNnPI)                                                                                        |
| Any server, NAS, mini-PC |        | Do you have a Synology NAS? An Intel NUC? Any Linux server, as long as it can run Docker, can run Gladys. Don't hesitate to come to the forum if you have any questions.                                                                                                                                                             |                                                                                                                          |

## Installing Gladys Assistant

Depending on the box you've chosen, you'll need to use either:

- Our Raspberry Pi OS image: [Installation on Raspberry Pi](/docs/installation/raspberry-pi/)
- Our [Docker installation tutorial](/docs/installation/docker/)

## Configuring your connected home

Once Gladys is running in your home, you'll be able to access it via your web browser.

If you have any questions, reach us on [Gladys Assistant Forum](https://en-community.gladysassistant.com/) !
