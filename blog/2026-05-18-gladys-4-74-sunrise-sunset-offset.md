---
title: "Gladys 4.74: Sunrise & Sunset Offsets in Your Scenes ☀️"
description: "Gladys 4.74 lets you add an offset before or after sunrise and sunset in your scenes, adds the Philips Hue Dimmer v2, and fixes Matter bugs."
authors: pierregilles
image: /img/presentation/gladys-4-74-sunrise-sunset-offset-en.jpg
slug: gladys-4-74-sunrise-sunset-offset
---

Hey everyone,

A new version of Gladys Assistant is available, with several fixes and improvements around Matter, Zigbee2MQTT, and sun-based scenes ☀️

{/* truncate */}

## ✨ New features

### 🌅 Offset before/after sunrise and sunset

You can now configure a delay before or after sunrise and sunset in your scenes. A few example use cases:

- Turn the lights on **30 minutes before sunset**
- Close the shutters **15 minutes after sunset**
- Trigger a scene **before sunrise**

Thanks [@cicoub13](https://community.gladysassistant.com/) for this contribution 🙌

### 💡 Zigbee2MQTT: Philips Hue Dimmer Switch v2 added

Support for the **Philips Hue Dimmer Switch v2** remote has been added in Zigbee2MQTT. You can now easily use it in your Gladys scenes and automations.

## 🛠 Fixes

- **Matter: fixed a 409 error on some devices.** Fixed an issue that could cause a `409` error when updating Matter devices sharing the same unique identifier.
- **Gladys Plus: fixed an association bug on first login.** Fixed an issue that could prevent a user from being correctly associated with Gladys Plus on first login.

---

Gladys updates automatically, or you can do it in one click from the settings.

👉 See the [full changelog on GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.74.0). Thanks to all the contributors!
