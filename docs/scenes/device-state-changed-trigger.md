---
id: device-state-changed-trigger
title: Trigger a scene when a device state changes
sidebar_label: Device state change
---

Say you want to do a scene that performs an action if the temperature drops below 20°C in a room.

For this you need a "device state change" trigger.

Click on "New trigger", then select "Device state change":

![Trigger a scene when a device's state changes](../../static/img/docs/en/scenes/device-state-changed-trigger/device-state-changed-trigger-1.jpg)

Then select the feature of the device that you want to "monitor".

For example, in our case, we will select a temperature sensor in the kitchen:

![Trigger a scene when a device's state changes](../../static/img/docs/en/scenes/device-state-changed-trigger/device-state-changed-trigger-2.jpg)

Then you can add under which condition this trigger should run the scene.

In our case, we want the scene to be executed if "The temperature is less than 20 ° C":

![Trigger a scene when a device's state changes](../../static/img/docs/en/scenes/device-state-changed-trigger/device-state-changed-trigger-3.jpg)

Depending on the type of device you select in this trigger, the interface adapts. For example, if you want to run a "when the kitchen light comes on" scene, your interface will look like this:

![Trigger a scene when a device's state changes](../../static/img/docs/en/scenes/device-state-changed-trigger/device-state-changed-trigger-4.jpg)
