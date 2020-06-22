---
id: raspberry-pi
title: Raspberry Pi
sidebar_label: Raspberry Pi
---

## Download Gladys Raspbian image

We provide a pre-built Raspbian image with Gladys already configured.

<p>
<a class="button button--outline button--primary" href="https://mirror-fr-2.gladysassistant.com/releases/gladys-4.0.0-beta-raspbian-buster.img.zip">Download Gladys Raspbian Buster 4.0.0 Beta</a>
</p>

And unzip the downloaded zip file to get a `.img` file.

## Clone the image on a SD card

Then, you just have to clone this image on the SD card you want to use with you Raspberry Pi.

I recommend the software [Etcher](https://etcher.io/) (Linux/MacOS/Windows compatible).

Install Etcher, plug your SD card into your computer, and clone the `.img` file on your SD card.

<img src="/en/img/docs/installation/etcher.png" alt="Etcher" class="img-responsive" />

## Plug your Raspberry Pi

Plug your Raspberry Pi to your local network and the current.

Give it some time to boot.

## Access Gladys

To access Gladys, open your browser on any computer on the local network your Raspberry Pi is connected. Then enter the URL [http://gladys.local](http://gladys.local).

You should see Gladys web UI!

**Note :** If it doesn't work, you can access Gladys directly by typing the IP of your Raspberry Pi in your browser. To find the IP, you can use a network scanner app to find the IP, like ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) on Android or [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) on iOS)
