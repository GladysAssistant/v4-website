---
title: Gladys Assistant 4.5 is available, with the multi-dashboard feature!
description: It's a big update, and we really hope you will like it!
author: Pierre-Gilles Leymarie
author_title: Founder of Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /img/pierre-gilles.jpg
image: /img/presentation/gladys-4-5-en-cover.jpg
slug: gladys-assistant-4-5-is-here
---

Hi all,

Today we are releasing Gladys Assistant v4.5, a version that is bringing lots of new features to Gladys Assistant! Let me show you!

## What's new in Gladys Assistant 4.5?

### Multi-dashboard

It's now possible to have multiples dashboards in Gladys Assistant.

### Disabling a scene

It was a highly requested feature, it's now possible to disable a scene in Gladys Assistant! Finally!

If you are prototyping a scene, going on holiday, or simply want to disable an annoying scene: you can do it now!

-- image

### New "Set device value" action in scenes

It's now possible to control any device in a scene:

- You can control the color of a lamp
- Control the temperature of a lamp
- Control any multilevel value

-- image

It's very powerful, and I hope you'll like it!

### Enhancing the user at home dashboard box

Small change, it's now possible to select which user to display in the "user at home" dashboard box.

-- image

### Lots of performance improvements

As the forum was very quite this summer, I took the time to work on some more long-term tasks.

I migrated preact-cli (the tool we use to build Gladys frontend) to their new release 3.x. It was not easy, but definitely worth it, as it reduced by a lot the size of the javascript bundle.

I did quite some work on removing some heavy library that were not necessarely needed in the frontend, to make it lighter and faster!

I hope you'll enjoy the new speed :)

### A first alpha for the Google Home integration in Gladys Plus

I've been working on integrating [Gladys Plus](/plus) with Google Home, the goal is to be able to control your devices:

- In the Google Home app
- Vocally with a Google Home device
- With Google Assistant on your phone

[Here a short demo of the integration on Twitter](https://twitter.com/pierregillesl/status/1405786308329365504).

If you are interested in testing this, please send me a message on [the forum](https://community.gladysassistant.com/)!

### New Zigbee2mqtt devices compatible

A few new Zigbee2mqtt devices were added:

- TuYa TS0601 Air Quality Sensor and CO2 feature [`#1247`](https://github.com/GladysAssistant/Gladys/pull/1247)
- Philips Hue 929002241201 [`#1259`](https://github.com/GladysAssistant/Gladys/pull/1259)
- Light color feature [`#1203`](https://github.com/GladysAssistant/Gladys/pull/1203)

### Fix Bluetooth bug

There was a recurrent bug where Gladys was not be able to connect to the Bluetooth driver as the driver was not "ready".

This is now fixed in Gladys Assistant v4.5.

Read more on this commit: Bluetooth check state before scan + stop presence scanner [`#1194`](https://github.com/GladysAssistant/Gladys/pull/1194)

## How to upgrade?

If you installed Gladys with the official Raspberry Pi OS image, your instance will update **automatically** in the coming hours. It can take up to 24 hours, don't panic.

If you installed Gladys with Docker, make sure you are using Watchtower. See the [documentation](/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

With Watchtower, Gladys will update automatically.

## Thanks to contributors

Thanks to everyone who contributed to this release and gave their feedback on the forum!

If you want to talk about this release, you're all welcom on the [forum](https://community.gladysassistant.com/) !
