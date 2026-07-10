---
title: "Gladys 4.82: Activity Journal & MQTT Redesign 🚀"
description: "Gladys 4.82 introduces a brand new Activity journal showing your home's history in real time, a complete redesign of the MQTT integration, an AI model selector, Tuya smart meter support, and more."
authors: pierregilles
image: /img/presentation/gladys-4-82-activity-journal-mqtt-en.jpg
slug: gladys-4-82-activity-journal-mqtt
---

Hey everyone!

Today I'm releasing what is, so far, one of the biggest releases of the year, and there's a real reason for that.

We're clearly at a turning point in the way software gets built: AI models keep getting more powerful, and the tools to use them day to day are finally becoming mature. Over the past two weeks, two of them changed the way I work on Gladys.

**Claude Fable 5**, Anthropic's flagship model, the one that was temporarily restricted in the United States because its capabilities worried the authorities. It let me tackle very technical topics that would have taken me entire days, and build major features like the Activity journal I detail below.

**Cursor's cloud AI agents**, controllable from mobile. About ten days ago, Cursor launched its iOS app: you can now hand a development task to an agent straight from your phone, and let it work autonomously, without a computer. The complete redesign of the MQTT integration was done **entirely** by a Cursor agent while I was travelling.

{/* truncate */}

## 🏠 New Activity page: your home's history, live

The flagship feature of this release: a new **Activity** tab that displays a visual timeline of everything happening in your home, door openings, motion detections, lights turning on and off, sensor values, and more.

![Gladys Activity journal timeline](../static/img/articles/gladys-4-82-activity-journal-mqtt/01-activity-journal.png)

What makes this page useful every day:

- Timeline grouped by day ("Today", "Yesterday", then full dates) with colored icons per event family.
- **Burst grouping**: consecutive states from the same sensor are merged into a single line with a `×N` badge, expandable to see each timestamped occurrence. Essential for setups with 100 to 200 devices.
- Filters by family (Openings, Motion & presence, Buttons, Lights, Climate, Security, Energy, and more), a room selector, and device search.
- **Real time**, with a floating "N new events" pill when you've scrolled down.
- Infinite scroll with pagination.

## 📡 MQTT: a complete redesign of the virtual device experience

The MQTT integration gets a major UX overhaul, inspired by community feedback ([forum](https://community.gladysassistant.com/t/catalogue-des-features-supportees-en-mqtt/8452)):

![Gladys MQTT device list grouped by room](../static/img/articles/gladys-4-82-activity-journal-mqtt/02-mqtt-device-list.png)

![Gladys MQTT feature catalog with dashboard preview](../static/img/articles/gladys-4-82-activity-journal-mqtt/03-mqtt-feature-catalog.jpg)

- **Compact list** of devices grouped by room.
- **Feature catalog** with a realistic dashboard preview and search.
- **Auto-generated external IDs** (`mqtt:{slug}-{4chars}`), always editable.
- **Copy** button for MQTT identifiers and URLs.

## 🤖 AI: model selection and improved context

I keep pushing the AI agent inside Gladys, because I'm convinced it's the future of home automation: controlling your home by voice or text, running any action, querying your sensors.

This release adds an **AI model selector** in the chat. You can test the different Scaleway models (Mistral, Llama, Qwen, Gemma, and more) and compare their answers in real situations at home. A cost indicator (€, €€, €€€) helps you get your bearings.

![Gladys AI model selector in the chat](../static/img/articles/gladys-4-82-activity-journal-mqtt/04-ai-model-selector.jpg)

Once the best model is identified, I'll do the math to integrate it durably into Gladys Plus, in a way that's sustainable for the project. In the meantime, test it and share your feedback on the forum!

Other AI improvements:

- **Richer context**: irrelevant tool calls and messages are excluded from the context for better answers.
- Fixed the "turn a device on/off" action schema.
- Enriched debug file (last 50 messages).

## ⚡ Tuya: smart meter support

- Support for **Tuya smart meters**, both cloud and local.
- Reading through the **Thing Model shadow** API for devices without legacy specifications.
- Measurements: total power, active/reactive energy, voltage, current.
- Clean display names (Tuya code typos no longer leak into the UI).
- A fixture-based test infrastructure to industrialize adding new Tuya devices.

## 📱 Interface & dashboard

The **Gauge** widget now supports a customizable name to tell apart several gauges from the same device (for example two MQTT water tanks), and we fixed the scroll getting stuck on mobile when you rested your finger on a gauge.

On the mobile side, action buttons and headers are now responsive across many pages (integrations, settings, and more), with buttons stacking on mobile and better wrapping of button groups.

## 🔧 Integrations & fixes

| Integration | Change |
|-------------|--------|
| **Z-Wave JS** | Fixed the integration after a ZWaveJS update |
| **Matter** | Updated matter.js 0.17.3 to 0.17.4 |
| **Air conditioning** | Fixed the AC mode showing as fan mode since v4.79.0 |
| **iOS** | Dark mode is no longer overridden on app launch |
| **Scenes** | Messages with special characters no longer cause display bugs |

## 🛠️ Under the hood (for contributors)

- **Frontend migration from preact-cli (webpack) to Vite**: faster dev startup, improved HMR, a modernized build. Nothing changes for the end user, but it's a healthier technical foundation for what's next.
- New `supported_options` field on DeviceFeature: integrations can now declare the modes and values supported by a feature (for example vacuum modes).
- Expanded developer documentation (`AGENTS.md`).

## ❤️ Thanks to the contributors

Thanks to @Terdious, @Will_71, @Sescandell, and @bertrandda for their contributions, and to the whole community for the feedback on MQTT, the Activity journal, and mobile UX.

A word too for [Gladys Plus](https://gladysassistant.com/en/plus/) subscribers: it's thanks to you that I can pay for the AI tools that make all of this possible. If you want to see Gladys move even faster, Gladys Plus is the best lever. On top of supporting the project, you unlock the advanced features: backups, AI agent, remote access, voice assistants, MCP integration, Enedis, and many more.

As always, Gladys updates automatically within 24 hours if you use Watchtower, or you can do it in one click from the settings. See the [full release notes](https://github.com/GladysAssistant/Gladys/releases/tag/v4.82.0).
