---
title: "Gladys 4.80: Matter 1.5, Netatmo, Tuya & a More Powerful AI Agent 🚀"
description: "Gladys 4.80 brings Matter 1.5 support via a major Matter.js upgrade, Netatmo and Tuya fixes, and a more capable AI agent with a new sensor tool."
authors: pierregilles
image: /img/presentation/gladys-4-80-matter-netatmo-tuya-ai-en.jpg
slug: gladys-4-80-matter-netatmo-tuya-ai
---

Hey everyone!

Lots of new things lately 😀 This version 4.80 brings many stability improvements, fixes for Matter, Netatmo, and Tuya, plus several AI additions.

{/* truncate */}

## 🤖 AI

The AI agent keeps improving, with two new features:

- ➕ Added a new `sensor.set-state` tool, letting the agent directly change the state of certain sensors when asked. For example, you can use the AI to read a camera image looking at a meter and store the value it reads into a virtual device. You could also automatically read a license plate and store the number into a virtual device!
- 🐞 Added a button to download the AI's debug context as JSON, to make it easier to diagnose issues and share them with the community.

The AI-generated weekly reports now appear in the background tasks (**Settings → Tasks**), which lets you track their execution and easily spot any errors. A random delay was also added before they're generated, to avoid overloading the servers all at once.

## 🏠 Matter

This version further improves Matter compatibility:

- 🌡️ Added local temperature reporting on compatible devices.
- 🔄 More robust connection process.
- 📝 Richer logs to make debugging easier.
- 🌀 Several fixes for Matter fans.
- 🎛️ Fixed a bug where a device's unique identifier changed when it was updated.
- ⚡ Reads the initial state of device features at startup.
- ❗ Errors when registering a device are now shown directly in the interface.

Matter.js was also updated to version [0.17.3](https://github.com/matter-js/matter.js/blob/main/CHANGELOG.md#0170-2026-05-20), a major step forward bringing notably:

- Support for the **Matter 1.5 / 1.5.1** specification, improving compatibility with the newest devices.
- A **20–50% reduction in memory usage**, letting Gladys run even more smoothly.

## 📡 Integrations

### Tuya

The Tuya integration keeps maturing: a new common mapping layer to improve device handling in both local and cloud modes, and an assistant to automatically create a GitHub ticket when a device is partially or not supported.

### Netatmo

Two important improvements: restored automatic OAuth token refresh, and a more resilient automatic reconnection in case of authentication errors, including during business API calls.

### Zigbee2MQTT

Zigbee devices now display their IEEE address as well as a direct link to open the device in Zigbee2MQTT, making diagnostics and configuration easier. Remember to add your Zigbee2mqtt interface URL in the settings to use this feature 😉

## 🐛 Fixes

- Fixed a bug on scenes using the **next sunrise** trigger.
- Fixed an issue preventing a device from being saved when `energy_parent_id` was invalid.

## ❤️ Thanks to the contributors

A big thank you to everyone who took part in this release: @cicoub13, @Terdious, and @Will_71. And thanks to the whole Gladys community for your feedback, tests, and contributions that keep the project moving forward quickly! 🚀

As always, Gladys updates automatically within 24 hours if you use Watchtower, or you can do it in one click from the settings. See the [full release notes](https://github.com/GladysAssistant/Gladys/releases/tag/v4.80.0).
