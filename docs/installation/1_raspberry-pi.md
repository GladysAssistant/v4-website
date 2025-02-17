---
id: raspberry-pi
title: Installing Gladys Assistant on a Raspberry Pi
sidebar_label: Install on a Raspberry Pi
---

:::note
Historically, I recommended using Raspberry Pi for installing Gladys.

However, they are becoming less competitive for several reasons:

- A high overall cost once you add the power supply, case, and SSD.
- Limited reliability with a micro-SD card and a complex installation with an SSD. Moreover, even with a USB SSD, the performance is still far inferior to that of a mini-PC with an integrated NVMe SSD.
- A less powerful processor compared to low-power Intel equivalents.
- Recurring power issues when adding a Zigbee dongle and an SSD.

My recommendation is to buy a mini-PC. There are powerful options starting at [$169 on Amazon US](https://amzn.to/4gKDV2E), and versions below $120 if you search for refurbished ones.
:::

## Installing Gladys on an already configured Raspberry Pi

If you are looking to install Gladys Assistant on a Raspberry Pi that is already configured, use the [Docker](/docs/installation/docker) tutorial.

## Installing Gladys on a new Raspberry Pi

### Download Gladys Raspberry Pi OS image

We provide a pre-built Raspberry Pi OS image with Gladys already configured.

For Raspberry Pi 3, 4 & 400:

<a class="button button--primary margin-bottom--md" href="https://gladysassistant.com/download/latest-64" rel="nofollow" >Download Gladys Assistant OS Bullseye 64-bit</a>

:::note
We do not support old Raspberry Pi with arm/v6 architecture.

For the Raspberry Pi 5, follow the [Docker](/docs/installation/docker) tutorial.
:::

This link will download a `.zip` file containing the Raspberry Pi OS image of Gladys Assistant. After unzipping the downloaded file, you'll get a `.img` file.

### Clone the image on a SD card

Once you have retrieved the image (`.img` file described above), you need to clone this image on the Raspberry Pi SD card.

We recommend the software [Etcher](https://www.balena.io/etcher/) (Linux/MacOS/Windows compatible).

Install Etcher, plug your SD card into your computer, and clone the `.img` file on your SD card.

![Etcher](../../static/img/docs/en/installation/etcher.png)

### Plug your Raspberry Pi

Plug your Raspberry Pi to your local network. Make sure the power adaptor is connected.

Give it some time to boot.

### Access Gladys

To access Gladys, open your web browser on any computer on the local network. **/!\ Make sure your computer and your Raspberry Pi are connected to the same network.**

Then enter the URL `http://gladys.local` or `http://raspberrypi.local` or `http://IP_OF_YOUR_RASPBERRY_PI`.

You should see the Gladys Web UI (portal).

:::note
If you don't see the Gladys login page when typing `http://gladys.local` in your browser, try typing the IP address of your Raspberry Pi.

To find the Raspberry Pi IP address on your local network, you can use applications like:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) on Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) on iOS
  :::
