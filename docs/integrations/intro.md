---
id: intro
title: Gladys Assistant Integrations
sidebar_label: Introduction
slug: /integrations/
description: "Gladys Assistant supports Zigbee (Zigbee2MQTT), Matter, MQTT, Shelly, Sonos, cameras, and thousands of devices. Open protocols first, plus external integrations to add any other device or service in one click."
---

Gladys Assistant is an **open-source project**, developed and maintained by a **community of home automation enthusiasts**.  
Our mission: make the smart home **simple, local, and privacy-friendly**.

The full source code is available on [GitHub](https://github.com/GladysAssistant/Gladys).

## Our vision

Connecting devices to Gladys should not depend on a closed cloud or a single manufacturer. We focus on **open protocols** first, **Matter and Zigbee** as the long-term standards, and **external integrations** for everything else.

In practice, that means two complementary approaches:

1. **Native integrations** for open protocols (Zigbee, Matter, MQTT), built into Gladys
2. **External integrations**: community integrations packaged as Docker containers and installable in one click, to cover any other device or service

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

## External integrations

Your device or service is not covered by a native integration? **External integrations** are the fastest way to add it, and anyone can create and publish one.

An external integration is a small program packaged as a **Docker container** and published on a public GitHub repository. Gladys runs it in a secure sandbox and talks to it through a dedicated API. From a user's point of view:

- Browse the catalog of community integrations directly in Gladys
- Install the one you need in **one click**: Gladys pulls the image, starts it, and generates its interface
- Or install directly from a GitHub repository URL

Because each one runs in its own isolated container, external integrations can be written in any language and published by anyone, without review, while staying safe for your Gladys instance.

👉 **[Browse the full catalog of external integrations](/docs/integrations/external/)**, updated live from the community store.

Want to build one? External integrations are designed to be the **simplest way to create and publish an integration**, with no pull request and no validation. See the [external integrations developer guide](/docs/dev/external-integrations/).

The rest of this section documents the **native integrations**, the ones built into Gladys.

## Other options

For custom or experimental setups, you can also use:

- [Node-RED](/docs/integrations/node-red/) and MQTT to build your own automations
- The [forum](https://community.gladysassistant.com/) to discuss a specific device or integration need

## Questions or ideas?

Join the [Gladys community](https://community.gladysassistant.com/)!

Whether you want to ask a question, test a new integration, or suggest one, you are always welcome.
