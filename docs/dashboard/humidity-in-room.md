---
id: humidity-in-room
title: Display the average humidity of a room on the dashboard
sidebar_label: Room humidity
---

In Gladys Assistant, you can display the average humidity of a room on your dashboard.

This widget will fetch the humidity from all humidity sensors present in the room and display an average on the dashboard.

## Prerequisites

You must first have configured at least one humidity sensor.

This can be a sensor of any protocol (Zigbee, Matter, MQTT, whatever), and have assigned this sensor to a room.

## Configuration

Go to the dashboard, and click "Edit".

Select the "Room humidity" widget, and click the + button.

![Add the humidity widget to Gladys](../../static/img/docs/en/dashboard/humidity-in-room/add-widget.png)

Next, select the room you want to display.

![Select the room to display](../../static/img/docs/en/dashboard/humidity-in-room/configure-widget.png)

You can configure custom thresholds where the widget color will change based on humidity.

Click "Save".

![The room humidity widget](../../static/img/docs/en/dashboard/humidity-in-room/humidity-in-room.png)

If you have no sensors in the room, or if these sensors have not sent any values in the last hour, you will see:

![No data](../../static/img/docs/en/dashboard/humidity-in-room/no-values.png)
