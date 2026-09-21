---
title: "Gladys 5.1: integrations bring their own widgets and their own scenes"
description: "A community integration can now put its own widget on your dashboard, and add its own triggers and actions to the scene editor — without a single line of code in the core. Plus a Spanish translation, an email when your Gladys goes offline, grid carbon tracking and smoke detector diagnostics."
authors: pierregilles
image: /img/presentation/gladys-assistant-5-1-en.jpg
slug: gladys-5-1-integration-widgets-and-scenes
---

Hey everyone!

**Gladys Assistant 5.1 is out.** 🎉

Version 5 was about the interface. This one is about what the community can do with it, and it removes two walls that have been there since the beginning: an integration could not put anything on your dashboard, and it could not add anything to your scenes. Both are gone.

![Four widgets published by community integrations, on a Gladys dashboard](../static/img/articles/gladys-assistant-5-1/01-integration-widgets-en.webp)

{/* truncate */}

## 🧩 Integrations can now publish dashboard widgets

A few versions ago we opened **external integrations**: anyone can package a device compatibility as a small Docker image, publish it on GitHub, and it appears in the catalog of every Gladys instance on the planet. There are **81 of them today**, written almost entirely by people who had never opened the Gladys codebase.

But those integrations could only do one thing: publish devices. And a lot of what an integration knows is not a device. Your solar production forecast for tomorrow is not a device. A vacuum's cleaning map is not a device. The cheapest diesel around you, the pollen risk of the day, the plan your car will follow tonight to charge on off-peak hours: none of that fits into "a temperature and a switch", and all of it is exactly what you want to see on a dashboard.

**So an integration can now declare its own widgets**, and Gladys renders them.

![The "Integration widgets" section of the widget picker](../static/img/articles/gladys-assistant-5-1/02-widget-picker-en.webp)

They show up in the widget picker of the dashboard editor, in their own section, each one carrying the name of the integration that published it. You add one like any other widget, and if the widget has settings — which vacuum, which region, which period — you fill them right there, in a form the integration described and Gladys generated.

### The integration says *what*, Gladys decides *how*

This is the part I care about, and it is a deliberate design choice rather than a shortcut.

No third-party integration ships HTML into your Gladys. No iframe, no script, no CSS, no custom colors, no custom sizes. An integration sends a **content tree** in a small declarative vocabulary — a heading, value tiles, a gauge, a list of states, a chart, a poster grid, an image, buttons — and the core renders it.

Which means every widget, including one written by someone you have never heard of, gets the Horizon glass theme for free, dark mode for free, the mobile layout for free, your language and your timezone for free, and keeps working when the interface evolves. It is the iOS and Android widget model, and nobody finds those ecosystems poor.

The vocabulary also refuses to let a widget be ugly. Style is not the only way to ruin a card — clutter is the other one, and it is the one free composition produces. So a widget has a **content budget**: at most 8 components, at most one focal component (a chart *or* a list *or* an image, never two), at most 6 value tiles, at most 4 buttons, a bounded list, short texts. And the **order is imposed by the core**, not by the integration: header, tiles, focal component, states, buttons. Whatever an integration sends, two widgets that show "a value, a curve and two buttons" come out with the same silhouette.

The worst widget an integration can produce looks like a slightly busy Gladys widget. That was the goal.

A few more things that come with it:

- **The content is produced at runtime**, not frozen in the manifest. A vacuum that is cleaning can return a different layout than a vacuum on its dock, without any template language to invent, specify and maintain forever.
- **Nothing is trusted.** Every payload is normalized and bounded before it reaches the interface: known component types only, bounded strings and lists, finite numbers, validated dates, `https` links only, and images served through your own Gladys rather than fetched from a third party by your browser.
- **A button can act.** It can call the integration, or write a value on one of its device features, with the result reported in the card.
- **A widget can plot your own history**, by pointing at one of the integration's device features, or plot data Gladys has no history of at all (a forecast, a charging plan, tomorrow's prices) by sending the points inline — with annotations on the curve and a "now" marker.
- **An integration that has no devices at all** — a fuel price index, a cinema release feed — now has a home: the new `provider` integration type, whose whole contract is what it provides.

The widgets in the screenshots above are examples of what the vocabulary can express. The mechanism ships today; the integrations that use it are now writable by the same people who tripled the catalog in two weeks.

## 🎬 Integrations can now add triggers and actions to your scenes

Same wall, other side of the house.

Every trigger and every action in the scene editor was, until today, hardcoded in Gladys. An external integration had no way in — and the two generic surfaces it did have do not cover the need:

- **A device feature is a state, not an event.** A temperature, a switch, a presence: those are values, and `device.new-state` handles them perfectly. But a licence plate recognized on the driveway, a doorbell pressed with a snapshot, an NFC tag scanned, a voice command understood — those are *things that happen*, with data attached. Bending them into a feature loses the data, races on two events in a row, and pollutes your history.
- **Setting a value is not an operation.** "Take a snapshot and give me the image", "clean these three rooms", "announce this on that speaker" are operations with parameters and a result.

So an integration can now declare **its own scene triggers and its own scene actions**, in its manifest, and they appear in the scene editor like everything else.

![A scene triggered by an integration, with an integration action in its steps](../static/img/articles/gladys-assistant-5-1/03-scene-integration-en.webp)

The card is generated by Gladys from the declaration: the fields become a form, a field left empty matches any value, and the details the event carries become **scene variables** you can use in the following steps — the confidence score in the screenshot above is coming straight from the trigger.

The design rule here is the same as everywhere else in this system: **the core matches, the integration knows nothing about your scenes.** The integration fires a typed event with its data; Gladys compares it against the triggers you configured. The integration never learns which scenes exist, there is nothing to leak and nothing to resynchronize when it reconnects, and your configuration stays in Gladys. An action is emitted once, a timeout fails that action and only that action.

This also means a scene can now mix things that had no business meeting before: an event from one integration, an action from another, and the usual Gladys steps in between.

## 💬 "Gladys conversation only"

A small one that a lot of you asked for. When a scene sends you a message, it goes, by default, to every messaging service you configured — Telegram, SMS, and so on.

![The delivery selector of the message action, set to "Gladys conversation only"](../static/img/articles/gladys-assistant-5-1/04-conversation-only-en.webp)

Now you can choose. **"Gladys conversation only"** keeps the message inside Gladys, and only there. It is the only way to write a message that installing Telegram six months later cannot silently turn into a phone notification, and it is available even if you have no messaging channel configured at all. The same option exists on the "Ask the AI" scene action.

While we are in scenes: **scenes created by the AI are now tagged "AI"**, so you can tell what you wrote from what it wrote — and filtering by tag now matches exactly instead of matching anything that contains the word.

## 🇪🇸 Gladys now speaks Spanish

![The Gladys interface in Spanish](../static/img/articles/gladys-assistant-5-1/05-spanish.webp)

**Gladys is now available in Spanish**, the fourth language after English, French and German. The whole interface: the dashboard, the devices, the scene editor, the settings, the integration pages, and even the icon search keywords.

Huge thanks to **Nestor Alonso Torres** for this one. If you want Gladys in your language, the translation files are plain JSON in the repository and the path is open.

## 📩 Be warned when your Gladys goes offline

Gladys Plus sees your instance connect and disconnect. So it might as well tell you when it stops.

![The new Gladys Plus setting: be emailed when your instance goes offline](../static/img/articles/gladys-assistant-5-1/06-offline-alert-en.webp)

**Gladys Plus can now email the admins of your account when your instance has been unreachable for longer than a delay you choose** — from 10 minutes to a day — and email them again once it is back online. Power cut, internet box down, dead SD card, a Docker update that went sideways: you find out the same day, instead of the evening you come home and notice the lights did not turn on.

The setting lives on your Gladys Plus account, so you change it from Gladys Plus, and Gladys links you straight there.

## 🌍 A new device category: grid carbon

![The grid carbon intensity of the electricity grid, on an energy dashboard](../static/img/articles/gladys-assistant-5-1/08-grid-carbon-en.webp)

Gladys gains a **grid carbon sensor** category: the carbon intensity of your electricity grid in gCO₂eq/kWh, the share of carbon-free electricity, and the share of renewables. Three values with their own units, their own history, their own charts — and, more importantly, three values a scene can read.

"Start the washing machine when the grid is clean" is now a scene you can write, and the integrations that publish those numbers for your country have somewhere to publish them.

## 🔥 Smoke detectors say more than "smoke / no smoke"

![A kitchen widget showing the diagnostics of a smoke detector](../static/img/articles/gladys-assistant-5-1/07-smoke-detector-en.webp)

Zigbee smoke detectors report a lot more than the alarm itself, and Gladys now maps it: **how contaminated the sensing chamber is** (a dirty detector is a blind detector, and it tells you to clean or replace it), **whether the detector has muted itself**, and a command to **hush the alarm** for as long as the device allows.

That last one deliberately stays out of the generic switch category: silencing a smoke alarm must never be reachable through "turn everything off" in a scene or a voice assistant.

## 🔌 Devices, protocols, system

- **Matter**: matter.js upgraded to 0.17.9, which fixes the `Node ID X is already commissioned` errors that blocked some pairings.
- **HomeKit**: air conditioners are exposed as a HeaterCooler, so telling Siri to turn one on keeps the mode it was on instead of resetting it.
- **Zigbee2MQTT**: the **ZLinky_TIC three-phase labels** are mapped (`SINSTS1`, `SMAXSN*`, `IINST1`, `IMAX1`), `probe_temperature` gets a temperature type of its own instead of being flattened into the main one, and the Zigbee2MQTT container now runs in **your instance's timezone** — so its logs and schedules stop being off by two hours.
- **Sonos**: the built-in integration now carries a *deprecated* badge and a **migrate button** to the community integration, which does more, with a warning in the modal about what changes for play-notification.
- **Dashboard**: the slider and the number input now honor the **step** declared by a device feature, so a setpoint that moves by 0.5 stops jumping by 1.
- **Calendar**: fixed a regression where loading the dayjs timezone plugin broke the calendar.
- **Gladys Plus**: the payment lock some accounts were left in by the Lite plan 402 bug is cleared automatically, and every release is now published to Gladys Plus straight from the release workflow.
- **Security**: fixed a password reset flaw where an attacker-chosen origin could poison the reset link sent by email.

And on the documentation side, the API endpoints that were missing from the generated apidoc are published, and the external integrations specification is now split into one file per topic — which matters more than it sounds, because that specification is what anyone writing an integration reads.

## 🩹 And everything 5.0.x already fixed

Between 5.0 and today, four patch releases went out — 5.0.1, 5.0.2, 5.0.3 and 5.0.4 — with around fifty fixes, almost all of them from your feedback on the new interface: portrait tablets, long device names, the mobile dock, weather icons, the ConBee III, scene variables renumbering, select menus falling off the bottom of the screen, dashboard scroll lag.

**Nearly 70 pull requests since version 5.0**, 23 of them in this release.

## ❤️ Thank you

Thanks to [@cicoub13](https://github.com/cicoub13), [@William-De71](https://github.com/William-De71), [@vincentBesseau](https://github.com/vincentBesseau) and **Nestor Alonso Torres** for the code in this release, and to everyone publishing external integrations — the catalog is at **81** and it is still going up.

If you want to build one, [the developer guide is here](/docs/dev/external-integrations/) — and you can now give it a widget and a few scene triggers while you are at it. The guide has not caught up with those two yet; in the meantime, their manifest fields, their payloads and their limits are specified in full in [the external integrations specification](https://github.com/GladysAssistant/Gladys/tree/master/docs/specs/external-integrations/capabilities).

As always, Gladys updates automatically within 24 hours if you use Watchtower, otherwise you can do it in one click from the settings.

Remember to set up Telegram to get an alert on your phone when Gladys updates!

[See the full release notes on GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v5.1.0)
