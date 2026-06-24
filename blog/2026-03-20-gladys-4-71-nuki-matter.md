---
title: "Gladys 4.71: A More Robust Nuki & Major Matter Improvements"
description: "Gladys 4.71 brings a more robust Nuki integration, several Matter improvements, and clearer Bluetooth Presence handling."
authors: pierregilles
image: /img/presentation/gladys-4-71-nuki-matter-en.jpg
slug: gladys-4-71-nuki-matter
---

Hey everyone,

This new version brings significant improvements to **Matter** and **Nuki**, plus several bug fixes.

{/* truncate */}

## 🔐 Nuki v1.0.1: a more robust integration

The Nuki integration has been updated with several important fixes:

- On startup, Gladys now checks that the service is properly configured before launching, to avoid errors in the logs.
- MQTT subscriptions are now limited to registered Nuki devices only, avoiding unnecessary listening.
- A scan (HTTP or MQTT) is no longer possible if the service isn't configured: the loading spinner stops and a clear message is displayed.
- The API token entered in the configuration tab is now validated: on error, a message is shown and the token is cleared automatically.

Thanks [@ProtZ](https://community.gladysassistant.com/) for this thorough work!

## ⚡ Matter: several improvements

Matter keeps evolving quickly in Gladys:

- **Clearer pairing process:** pairing instructions are now easier to read and more accessible for new users.
- **New Boolean & Switch clusters:** to support the IKEA BILRESA and the Aqara Door and Window Sensor P2. I developed this compatibility by testing through Matterbridge — feedback on IKEA / Aqara devices is very welcome 🙂
- **HEPA filter monitoring:** Matter-compatible air purifiers can now expose their HEPA filter status in Gladys. Thanks **@Nagromdark**!

I'm continuing to invest heavily in Matter, and I'm currently preparing a major update of the `matter-js` library for even more stability and compatibility.

**Matterbridge:** fixed a bug where the current version wasn't saved correctly, which could trigger repeated, unnecessary container updates.

## 📡 Bluetooth Presence: clearer for new users

A message now clearly indicates that this integration only works with Bluetooth **beacons**, and not with smartphones or smartwatches.

## 🛠️ Missing icons for energy production sensors

`ENERGY_PRODUCTION_SENSOR` features had missing icons in some views. This is now fixed — thanks **@Terdious**!

---

The update is automatic. To force it, go to **Settings → System**. Have a great weekend! 🏠
