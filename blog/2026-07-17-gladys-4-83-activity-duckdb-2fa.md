---
title: "Gladys 4.83: Faster Activity, DuckDB Cleanup and Gladys Plus 2FA"
description: "Gladys 4.83 makes the Activity page instant even on very large databases, automatically cleans up orphan states in DuckDB, and reworks the Gladys Plus two-factor authentication flow."
authors: pierregilles
image: /img/presentation/gladys-4-83-activity-duckdb-2fa-en.jpg
slug: gladys-4-83-activity-duckdb-2fa
---

Hey everyone!

Version **4.83.0** is out! 🚀

After the big 4.82 release (activity journal + MQTT), this version focuses on **reliability**, **performance** and a few very concrete day-to-day improvements, especially for installations with a lot of history, and for Gladys Plus.

{/* truncate */}

## ⚡ Activity page: instant display, even on large databases

On an installation with hundreds of millions of states, filtering the activity on an infrequent category (openings, buttons, and so on) could freeze the interface for tens of seconds.

The **Activity** page now loads history through progressive time windows: the first events show up right away, and the search continues in the background with a banner like "Searching activity - `{month}`…".

On a database with **448 million states**, an "Openings" filter that used to take 20 to 33 s now displays its first results in ~100 ms.

Thanks to [@Terdious](https://community.gladysassistant.com/u/terdious) for this work!

## 🧹 Automatic cleanup of orphan states (DuckDB)

Since history was migrated to DuckDB, a bug meant that purging a feature ("stop keeping history"), as well as deleting devices in some cases, did not properly clean up the states in DuckDB.

The result: "zombie" states (features with no history, or features already deleted) could pile up for years without anyone noticing, until the activity journal arrived.

This release fixes the purge, and runs **once at startup** a background job that cleans up orphan states gently (in batches, with pauses), so it never saturates the CPU or blocks the rest of Gladys.

![DuckDB orphan states cleanup in the Gladys jobs list](../static/img/articles/gladys-4-83-activity-duckdb-2fa/01-duckdb-orphan-cleanup.png)

On a test installation, **45 million** orphan states were purged this way. You can follow the progress in **Settings → Jobs**.

Thanks again to [@Terdious](https://community.gladysassistant.com/u/terdious)!

## 🔐 Gladys Plus: reworked 2FA flow

The whole Gladys Plus two-factor authentication flow has been reworked to better handle plenty of small unpleasant cases that had been reported to me (missing configuration, code errors, going back, and so on).

Please send me your feedback on 2FA. I really want this to be simpler for beginners, and I'm aware the authentication steps are still a bit complex for non-technical users.

A next step would be to add **recovery codes**, so you can reset 2FA yourself if you lose your phone or your authenticator app.

## 🛟 Gladys Plus restore: no more temporary account

When restoring a backup from the signup screen, Gladys used to create a temporary local account with hardcoded credentials. If the flow was interrupted or failed, that account could stick around, block signup… and leave an instance in an annoying state.

That temporary account has been **removed**. Restoring works without creating a local user, and instances already "stuck" with an old temporary account are healed automatically at startup.

## 🎬 Scenes: duration in seconds on the state trigger

On the **Device state changed** trigger, the "run after the condition has been true for…" option only offered **minutes**.

You can now choose **seconds** or **minutes**, handy to react quickly (for example: "if motion is still detected after 10 seconds").

![Choosing between seconds and minutes on the device state changed trigger](../static/img/articles/gladys-4-83-activity-duckdb-2fa/02-scene-trigger-seconds.png)

Existing scenes stay in minutes by default.

## 🖥️ Interface

- **Dashboard**: widget types are sorted **alphabetically** according to the interface language (thanks [@Will_71](https://community.gladysassistant.com/u/will_71))
- **Scenes**: same for the trigger and action lists (thanks [@Will_71](https://community.gladysassistant.com/u/will_71))
- **MQTT**: excessive vertical spacing fixed in the device list
- **Activity**: improved horizontal scrolling of filters on Windows
- **Scenes**: fixed a black gap on multi-line variable chips
- **HomeKit**: out-of-range color temperature values (LED strips, for example) are now clamped to the HomeKit maximum (500 mireds), which avoids HAP warnings like "characteristic was supplied illegal value"

## 🛠️ Technical

- **DuckDB migration**: moved from the (deprecated) `duckdb` package to `@duckdb/node-api`. Same engine, same `.duckdb` files: **no data migration** on the user side. Prebuilt binaries replace native compilation.
- Automatic deployment of the Gladys Plus frontend after a production release

## ❤️ Thanks to the contributors

A big thank you to [@Terdious](https://community.gladysassistant.com/u/terdious) and [@Will_71](https://community.gladysassistant.com/u/will_71) for their contributions to this version, and thanks to the whole community for your feedback and testing, especially those of you running Gladys on very large history databases: it's thanks to you that we can validate these performance gains in real conditions.

As always, Gladys updates automatically within 24 hours if you use Watchtower, otherwise you can do it in one click from the settings.

Remember to set up Telegram to get an alert on your phone when Gladys updates!

[See the full release notes on GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.83.0)
