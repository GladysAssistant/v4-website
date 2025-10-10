---
id: intro
title: Gladys Assistant Integrations
sidebar_label: Introduction
slug: /integrations/
---

Gladys Assistant is an **open-source project**, developed and maintained by a **community of home automation enthusiasts**.  
Our mission: to make the smart home **simple, local, and privacy-friendly**.

The full source code is available on [GitHub](https://github.com/GladysAssistant/Gladys).

## 🌐 Available Integrations

This documentation lists **all integrations compatible with Gladys Assistant**.  
They allow you to connect your favorite devices and services to your home automation setup.

The main integrations are:

- [Zigbee2MQTT](/docs/integrations/zigbee2mqtt/)
- [Matter](/docs/integrations/matter/)
- [MQTT](/docs/integrations/mqtt/)

And the good news?  
**Anyone can build a Gladys integration!**  
👉 Simply follow [this tutorial](/docs/dev/developing-a-service/) to create your own.

## 🚀 The Future of Integrations in Gladys Assistant

Our vision is clear: **Matter is the future of smart homes**.  
This open-source, 100% local protocol is backed by the biggest names in the industry.  
It’s modern, secure, and works across multiple technologies (Wi-Fi, Thread, Ethernet…).

Want to learn more? Check out the [Matter launch article](/blog/gladys-assistant-4-58-with-matter-support/).

## 🧩 “Legacy” Devices

Smart home technology is evolving fast, and many users still have devices that are not yet Matter-compatible.

Fortunately, there’s an amazing open-source project called [Matterbridge](https://github.com/Luligu/matterbridge) that lets you **connect those legacy devices to your Matter ecosystem**.  
We use it to manage devices such as:

- [Somfy](/docs/integrations/somfy-tahoma/) roller shutters
- Older generations of [Shelly](/docs/integrations/shelly/) devices

Want to connect a specific device?  
💡 Sometimes, you just need to write a small Matterbridge plugin — just a few lines of JavaScript are enough to integrate it with Gladys.  
You can also use [Node-RED](/docs/integrations/node-red/) and MQTT to build custom automations.

## 💬 Questions, ideas, or want to contribute?

Join the [Gladys community](https://en-community.gladysassistant.com/)!

Whether you want to ask a question, help with development, or suggest a new integration, **you’re always welcome**.
