---
id: continue-only-if-action
title: Continue only if
sidebar_label: Continue only if
---

This action allows you to continue (or not) the execution of the scene according to a given condition.

Let's take an example.

## Continue the scene with a condition on the temperature of a room

Suppose you want to do a scene that fetch the temperature of the room, then continues the scenario only if the temperature is below 20 ° C.

The first step in your scene is to add a "get last state" action, and select the sensor you want to use.

![Get last scene state](../../static/img/docs/en/scenes/get-last-device-state-action/get-last-device-state.jpg)

Then, in the next action block, you can add a "Continue only if" action, by selecting the variable retrieved previously.

By setting the condition `kitchen temperature sensor <20°C`, this gives us this:

![Continue only if scene](../../static/img/docs/en/scenes/get-last-device-state-action/continue-only-if.jpg)
