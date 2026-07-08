---
title: "Gladys 4.73: Major Matter.js Upgrade, Local Tuya & MCP Server"
description: "Gladys 4.73 ships a major Matter.js upgrade, the first foundation for Local Tuya, energy and MCP improvements, and a more stable Airplay."
authors: pierregilles
image: /img/presentation/gladys-4-73-matter-tuya-mcp-en.jpg
slug: gladys-4-73-matter-tuya-mcp
---

Hey everyone 👋

A new version of Gladys Assistant is available: **v4.73.0!** This release brings several important improvements around energy, Matter, Local Tuya support, and the Airplay integration.

{/* truncate */}

## 🧩 Matter.js updated to 0.16.11

Gladys now ships the latest version of Matter.js (`0.16.11`). This is a big update, we're moving up from 0.13.0, and it improves the compatibility and stability of Matter devices.

Please check that your Matter devices still work after this update, as there's a Matter.js file migration that was a little tricky for some users.

➡️ [Pull request #2501](https://github.com/GladysAssistant/Gladys/pull/2501)

## 🔌 Local Tuya: the first foundation

This first PR lays the groundwork for **Local Tuya** support in Gladys, which will eventually let you control some Tuya devices locally, without relying on the cloud. Thanks [@Terdious](https://community.gladysassistant.com/)!

➡️ [Pull request #2434](https://github.com/GladysAssistant/Gladys/pull/2434)

## ⚡ Energy management & MCP optimization

This version adds new energy features and improves the performance of the MCP (Model Context Protocol) used by AI clients. Thanks [@bertrandda](https://community.gladysassistant.com/)!

➡️ [Pull request #2522](https://github.com/GladysAssistant/Gladys/pull/2522)

## 🔊 AirTunes library replaced

The `airtunes` library has been replaced by `airplay-sender` to improve the stability and maintainability of the Airplay feature. Thanks again @bertrandda!

➡️ [Pull request #2439](https://github.com/GladysAssistant/Gladys/pull/2439)

---

As usual, you can update Gladys directly from the interface, or simply wait for it to update on its own. Thanks to all the contributors 🙌

🔗 [Full changelog](https://github.com/GladysAssistant/Gladys/compare/v4.72.1...v4.73.0)
