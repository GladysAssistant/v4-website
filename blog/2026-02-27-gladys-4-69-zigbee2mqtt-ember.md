---
title: "Gladys 4.69: New Zigbee2mqtt Ember Driver & Tasmota Energy Tracking"
description: "Gladys 4.69 adds the new Zigbee2mqtt Ember driver, Tasmota energy tracking, and a clearer door sensor display on your dashboard."
authors: pierregilles
image: /img/presentation/gladys-4-69-zigbee2mqtt-ember-en.jpg
slug: gladys-4-69-zigbee2mqtt-ember
---

Hey everyone,

A new version of Gladys Assistant is available 🥳, featuring the new Zigbee2mqtt Ember driver and Tasmota energy tracking.

{/* truncate */}

## Zigbee2mqtt: the new Ember driver

Zigbee2mqtt now offers a new driver, **Ember**, for certain dongles such as the Sonoff ZBDongle-E. The Zigbee2mqtt integration in Gladys now lets you select this Ember driver for compatible dongles.

If you use EZSP, Zigbee2mqtt won't touch your installation without your action, to avoid breaking your setup. **Stability is a core value of the project**, and this update was designed not to impact your daily use.

If you want to switch to Ember, you can, but you'll probably need to update your Zigbee dongle's firmware first. For example, for the Sonoff Dongle-E, the integration lets you choose between "Ember" (the new default) and the old EZSP driver:

![Selecting the Zigbee driver](../static/img/articles/gladys-4-69-zigbee2mqtt-ember/01.png)

If you test the new driver and your firmware isn't compatible, don't panic, you'll see a clear message:

![Firmware incompatibility message](../static/img/articles/gladys-4-69-zigbee2mqtt-ember/02.png)

You can then either update the firmware or go back to EZSP for now. A big thank you to [@cicoub13](https://community.gladysassistant.com/) for this contribution!

## Dashboard: improved door/window sensor display

The display of door/window sensors on the dashboard has been improved for better readability. We now show "Open/Closed" instead of the small padlock icon, which wasn't very legible.

## Tasmota: energy tracking added

Tasmota devices are now integrated into energy monitoring. Thanks [@Terdious](https://community.gladysassistant.com/) for this development 🙌

---

The update is automatic, or you can force it in the settings. Have a great end of the week!
