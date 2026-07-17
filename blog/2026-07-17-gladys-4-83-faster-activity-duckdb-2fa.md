---
title: "Gladys 4.83: Faster Activity, DuckDB Cleanup & 2FA 🚀"
description: "Gladys 4.83 makes the Activity page instant even on huge databases, cleans up orphaned DuckDB states, redesigns Gladys Plus 2FA, and adds seconds on scene state triggers."
authors: pierregilles
image: /img/presentation/gladys-4-83-faster-activity-duckdb-2fa-en.jpg
slug: gladys-4-83-faster-activity-duckdb-2fa
---

Hey everyone!

Version **4.83.0** is available! After the major 4.82 release (Activity journal + MQTT), this version focuses on **reliability**, **performance**, and a few very concrete daily improvements — especially for installations with a lot of history, and for Gladys Plus.

{/* truncate */}

## ⚡ Activity page: instant display, even on large databases

On an installation with hundreds of millions of states, filtering activity on an infrequent category (openings, buttons…) could freeze the interface for several tens of seconds.

The **Activity** page now loads the history in progressive time windows: the first events are displayed immediately, and the search continues in the background with a banner like « Searching for activity — {month}… ».

On a database of **448 million states**, an « Openings » filter that took 20–33 s to respond now displays the first results in ~100 ms.

Thanks to @Terdious for this work!

## 🧹 Automatic cleanup of orphaned states (DuckDB)

Since the migration of histories to DuckDB, a bug caused the « no longer keep history » purge of a feature, as well as the deletion of devices in some cases, not to clean up states correctly in DuckDB.

Result: « zombie » states (features without history, or already deleted features) could accumulate for years without anyone noticing — until the Activity journal arrived.

This release fixes the purge, and runs **once at startup** a background job that cleans up orphaned states, gently (in batches, with pauses), to avoid saturating the CPU or blocking the rest of Gladys.

![DuckDB orphaned states cleanup task in Gladys](../static/img/articles/gladys-4-83-faster-activity-duckdb-2fa/01-duckdb-orphan-cleanup.png)

On a test installation, **45 million** orphaned states were purged. You can follow the progress in **Settings → Tasks**.

Thanks again to @Terdious!

## 🔐 Gladys Plus: 2FA flow redesigned

The entire Gladys Plus two-factor authentication flow has been reworked to better handle many small unpleasant cases that had been reported (missing configuration, code errors, going back, etc.).

Don’t hesitate to share your feedback on 2FA. I really want it to be simpler for beginner users, and I’m aware that the authentication steps remain a bit complex for a non-technical user.

A next step would be to add **recovery codes**, so you can reset 2FA yourself if you lose your phone or authentication app.

## 🛟 Gladys Plus restoration: no more temporary account

When restoring a backup from the registration screen, Gladys previously created a temporary local account with hardcoded credentials. If the flow was interrupted or failed, this account could remain, block registration… and leave an instance in a painful state.

This temporary account has been **removed**. Restoration works without creating a local user, and instances already « blocked » by an old temporary account are automatically healed at startup.

## 🎬 Scenes: duration in seconds on state trigger

On the **Device State Change** trigger, the option « run after the condition has been valid for… » only offered **minutes**.

You can now choose **seconds** or **minutes** — practical for reacting quickly (e.g. « if movement remains detected for 10 seconds »).

![Scene state trigger with duration in seconds](../static/img/articles/gladys-4-83-faster-activity-duckdb-2fa/02-scene-state-trigger-seconds.png)

Existing scenes remain in minutes by default.

## 🖥️ Interface

- **Dashboard**: widget types are sorted alphabetically according to the interface language (thanks @Will_71)
- **Scenes**: same for trigger and action lists (thanks @Will_71)
- **MQTT**: excessive vertical spacing corrected in the device list
- **Activity**: horizontal scroll of filters improved on Windows
- **Scenes**: fixed a black gap on multi-line variable chips
- **HomeKit**: color temperature values out of bounds (e.g. LED strips) are now bounded to the max HomeKit value (500 mireds), which avoids HAP warnings like « characteristic was supplied illegal value »

## 🛠️ Technical

- **DuckDB migration**: switch from the `duckdb` package (deprecated) to `@duckdb/node-api`. Same engine, same `.duckdb` files: **no data migration** on the user side. Precompiled binaries replace native compilation.
- Automatic publication of the Gladys Plus front-end after a production release

## ❤️ Thanks to the contributors

A big thanks to @Terdious and @Will_71 for their contributions to this version, and thanks to the entire community for your feedback and tests — especially those of you who run Gladys on very large history databases: it’s thanks to you that we can validate these performances in real conditions.

As always, Gladys updates automatically within 24 hours if you use Watchtower, otherwise you can do it in one click in the settings.

Don’t forget to configure Telegram to receive an alert on your phone when Gladys updates!

See the [full release notes on GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.83.0).
