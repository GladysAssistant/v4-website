---
id: raspberry-pi
title: Raspberry Pi
sidebar_label: Raspberry Pi
slug: /
---

## Download Gladys Raspbian image

We provide a pre-built Raspbian image with Gladys already configured: <a href="https://cdn.elephantcdn.com/gh/gladysassistant/gladys/releases/download/v4.0.4/gladys-4.0.4-rev4.img.zip">Download Gladys Assistant Raspberry Pi OS v4.0.4-rev4</a>.

And unzip the downloaded zip file to get a `.img` file.

## Clone the image on a SD card

Then, you just have to clone this image on the SD card you want to use with you Raspberry Pi.

I recommend the software [Etcher](https://etcher.io/) (Linux/MacOS/Windows compatible).

Install Etcher, plug your SD card into your computer, and clone the `.img` file on your SD card.

<img src="../../static/img/docs/installation/etcher.png" alt="Etcher"  />

## Plug your Raspberry Pi

Plug your Raspberry Pi to your local network and the current.

Give it some time to boot.

## Access Gladys

To access Gladys, open your browser on any computer on the local network your Raspberry Pi is connected. Then enter the URL `http://gladys.local`.

You should see Gladys web UI!

**Note :** If it doesn't work, you can access Gladys directly by typing the IP of your Raspberry Pi in your browser. To find the IP, you can use a network scanner app to find the IP, like ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) on Android or [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) on iOS)
