---
title: "Gladys 4.72: Faster AI, Rock-Solid HomeKit & Plenty of Fixes"
description: "Gladys 4.72 resizes camera images for faster, cheaper AI, fixes high HomeKit CPU usage, adds integration tags, and many more fixes."
authors: pierregilles
image: /img/presentation/gladys-4-72-faster-ai-stable-homekit-en.jpg
slug: gladys-4-72-faster-ai-stable-homekit
---

Hey everyone!

Gladys Assistant 4.72.0 is available 🎉 — with a faster AI, a more stable HomeKit, and a long list of fixes.

{/* truncate */}

## ✨ New features

- **Zigbee: dual on/off support for the IKEA BILRESA button.** The IKEA BILRESA button is now fully supported via Zigbee2mqtt.
- **AI: lower latency and cost.** Camera images sent to the AI are now resized before sending, which reduces both the latency and the cost of API calls.
- **Integration list: tags added.** Integrations are now tagged (local, cloud, Gladys Plus) to make their operating mode clearer.
- **ZwaveJS UI: out of alpha.** The ZwaveJS UI integration is stable enough — the alpha warning banner has been removed.
- **MQTT: renamed to "MQTT Virtual Devices"** to make the integration easier to understand for users coming from Home Assistant.
- **Node-RED: warning before container deletion.** A message now warns that deleting the Node-RED container also deletes all associated data.

## 🐛 Bug fixes

- **HomeKit: fixed high CPU usage related to mDNS.** A bug caused abnormally high CPU usage. It's fixed by offering several mDNS options.
- **Nuki: fixed handling of Home Assistant discovery messages.** The integration was listening too broadly, which caused performance issues when many Home Assistant-compatible devices shared the same broker.
- **CalDAV: configuration errors are now displayed** directly in the interface.
- **Backup restoration: more robust.** Security was hardened in the Gladys Plus backup restore function, notably by using `execFile` for OpenSSL commands.
- **User account creation:** the text above the "email" field is now clearer.
- **Zigbee2mqtt: fixed an energy tracking bug** where devices with energy features were always shown in the "Discovery" tab.
- **Energy monitoring: fixed a bug when deleting a meter** in the Zigbee2mqtt integration.
- **Matter: fixed color handling** by using a numeric bitmap for `optionsMask` in Matter color control.

---

Thanks to all the contributors for this release: @bertrandda, @cicoub13, and @David-Digitis.

To update, you can wait 24 hours or go to **Settings → System → Update**. Happy Easter weekend, everyone! 🏠
