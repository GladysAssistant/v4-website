---
title: "Gladys 4.78: Get an AI-Powered Weekly Report of Your Home"
description: "Gladys 4.78 introduces an AI-powered weekly home report, a dashboard Link widget, a redesigned mobile integrations list, and Zigbee alarm actions."
authors: pierregilles
image: /img/presentation/gladys-4-78-ai-weekly-home-report-en.jpg
slug: gladys-4-78-ai-weekly-home-report
---

Hey everyone 🙂

I just released Gladys Assistant 4.78! Here's what's new — starting with the headline feature: an **AI-powered weekly report** of your home.

{/* truncate */}

## 🤖 AI weekly report

The flagship feature of this version: the weekly home report. Every week, Gladys can send you a personalized summary of your connected home: comfort, energy consumption, disconnected sensors, trends, and practical advice.

By default, the report is sent every Sunday at 6pm, which is configurable in the "Artificial Intelligence" integration:

![Configure the AI weekly report](../static/img/articles/gladys-4-78-ai-weekly-home-report/01.png)

Here's a real example of a report from my own production home:

> Hello, here is your weekly home summary for the period from June 2 to June 8, 2026.
>
> Your total electricity consumption for this week was 55.99 kWh, for a cost of €8.26. We see a downward trend compared to the previous week, which showed a consumption of 59.12 kWh and a cost of €9.36. The washing machine plug in the utility room consumed 2.11 kWh over the period.
>
> Regarding the maintenance of your equipment, several sensors are silent and need your attention. The CO2 sensor in the office hasn't transmitted data for several months. In addition, the bathroom motion sensor has been inactive for 5 weeks, and the presence detector in the toilet has been offline for a very long time.

Of course, we can make this report evolve if you have ideas!

## 📊 Dashboard: Link widget

You can now add a Link widget to your dashboard to access an external interface in one click: Zigbee2mqtt, Tasmota, your router's interface, a NAS, a camera, etc.

Each link is customizable — title, URL, and icon (website, server, NAS, Wi-Fi, web interface…):

![Link widget configuration](../static/img/articles/gladys-4-78-ai-weekly-home-report/02.png)

![Link widget on the dashboard](../static/img/articles/gladys-4-78-ai-weekly-home-report/03.jpg)

Handy for centralizing all your access points inside Gladys.

## 🔌 Integration list: redesigned on mobile

The integrations page has been reworked for clearer, more pleasant navigation on mobile.

![Integration list on mobile](../static/img/articles/gladys-4-78-ai-weekly-home-report/04.png)

## 🧠 Removal of the old local "brain"

The old local AI system (pre-recorded questions/answers) has been removed. It dated back to a time when AI didn't exist, and it gave a poor first impression to someone installing Gladys for the first time. Removing this old code makes Gladys lighter, drops an NLP library that's no longer useful, and helps Gladys start faster 🙂

## ⚡ Energy monitoring

Fixed a grouping bug in the monthly/yearly consumption widget. Data should now display correctly over those periods.

## 🎬 Scenes

When selecting a device property in a "device state change" scene trigger, devices without a room are now visible under a "No room" category. No more "ghost" devices that were impossible to select 🙂

## 📡 Zigbee2mqtt

Two additions for Zigbee2mqtt users:

- **DEVELCO keypad:** support for keypad actions (disarm, arm day/night/all zones, exit delay, emergency).
- **Alarm sirens:** new `trigger_alarm` and `stop_alarm` actions (e.g. Bosch outdoor siren), usable in your scenes and automations.

---

As usual, the update is automatic within 24 hours if you use Watchtower, or you can trigger it in one click from the settings.

Thanks to the whole community for the feedback, tests, and suggestions. I'm very curious to hear what the AI weekly report looks like in your homes!

Full changelog: [v4.77.0 → v4.78.0](https://github.com/GladysAssistant/Gladys/compare/v4.77.0...v4.78.0)
