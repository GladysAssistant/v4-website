---
id: intro
title: Gladys Assistant Integrations
sidebar_label: Introduction
slug: /integrations/
description: "Gladys Assistant supports Zigbee (Zigbee2MQTT), Matter, MQTT, Shelly, Sonos, cameras, and thousands of devices. Open protocols first, with Matterbridge and an AI plugin factory for legacy hardware."
---

Gladys Assistant is an **open-source project**, developed and maintained by a **community of home automation enthusiasts**.  
Our mission: make the smart home **simple, local, and privacy-friendly**.

The full source code is available on [GitHub](https://github.com/GladysAssistant/Gladys).

## Our vision

Connecting devices to Gladys should not depend on a closed cloud or a single manufacturer. We focus on **open protocols** first, **Matter** as the long-term standard, and **practical solutions** for everything else.

In practice, that means three complementary approaches:

1. **Native integrations** for open protocols (Zigbee, Matter, MQTT…)
2. **Matterbridge** to bring legacy or proprietary devices into your Matter ecosystem
3. **An AI-powered plugin factory** to develop new Matterbridge plugins automatically when your device is not supported yet

## Open protocols first

These are the integrations we recommend for any new installation:

- [Zigbee2MQTT](/docs/integrations/zigbee2mqtt/): thousands of Zigbee devices, local control, no cloud
- [Matter](/docs/integrations/matter/): the industry standard, 100% local, supported by the biggest brands
- [MQTT](/docs/integrations/mqtt/): the universal glue for DIY projects and custom sensors

Browse this documentation for dedicated guides: [Shelly](/docs/integrations/shelly/), [Sonos](/docs/integrations/sonos/), [cameras](/docs/integrations/camera/), and more in the sidebar.

## Matter: the future of the smart home

**Matter is the future of smart homes.**  
This open-source, local protocol is backed by the biggest names in the industry. It is modern, secure, and works across Wi-Fi, Thread, and Ethernet.

Want to learn more? Read the [Matter documentation](/docs/integrations/matter/).

## Legacy devices with Matterbridge

Smart home technology evolves fast. Many users still own devices that are not Matter-compatible.

[Matterbridge](https://github.com/Luligu/matterbridge) is an open-source bridge that exposes non-Matter devices to Gladys through Matter. We use it today for equipment such as:

- [Somfy](/docs/integrations/somfy-tahoma/) roller shutters
- Older generations of [Shelly](/docs/integrations/shelly/) devices

See the [Matterbridge documentation](/docs/integrations/matterbridge/) to enable it in Gladys.

## The Matterbridge plugin factory

Your device is not supported yet, and it does not use an open protocol like Zigbee or Matter?

We built an **[AI-powered Matterbridge plugin factory](https://community.gladysassistant.com/t/lusine-a-plugins-matterbridge-rendez-nimporte-quel-appareil-compatible-avec-gladys/10234)**. No development skills required:

1. **Open a GitHub issue** on the [plugin factory repository](https://github.com/GladysAssistant/matterbridge-ai-plugin-factory/issues) and describe your device
2. **The AI develops the plugin** overnight
3. **Download and install it** in Matterbridge, then test it in Gladys
4. **Leave feedback** on the issue if something needs fixing: the AI iterates on the next run

:::note
Matterbridge must be installed and configured first. Follow the [Matterbridge documentation](/docs/integrations/matterbridge/) if you have not set it up yet.
:::

This factory already produces plugins for major ecosystems (Philips Hue, Tasmota, ESPHome, Netatmo, Tado, SwitchBot, and many more). The pipeline runs every morning: the more requests we receive, the faster Gladys covers new devices.

## Other options

For custom or experimental setups, you can also use:

- [Node-RED](/docs/integrations/node-red/) and MQTT to build your own automations
- The [forum](https://community.gladysassistant.com/) to discuss a specific device or integration need

## Questions or ideas?

Join the [Gladys community](https://community.gladysassistant.com/)!

Whether you want to ask a question, test a new plugin, or suggest an integration, you are always welcome.
