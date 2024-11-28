---
id: send-a-sms-action
title: Send a SMS
sidebar_label: Send a SMS
---

This action allows you to send a SMS to your cell phone with the french mobile operator [Free Mobile](https://mobile.free.fr) in a scene.

## Simple example

To send a SMS, it's very simple, create a "send SMS" action in a scene.

![Send sms](../../static/img/docs/en/scenes/send-a-sms-action/send-a-sms.png)

## Inject a variable into a sms

Say you want to send yourself an alert when the temperature is too low in your home.

You want to inject the current temperature value into the message, in order to know the current temperature value.

To do this, you must add a "retrieve the last state" action to your scene and select the sensor you want to request.

![Get sensor value](../../static/img/docs/en/scenes/send-a-sms-action/get-device-value.jpg)

Then, further in the scene, you can add a "send SMS" action, and in the message you type `{{ ` and select the previously defined variable.

![Get sensor value](../../static/img/docs/en/scenes/send-a-sms-action/inject-variable-demo.png)

When the scene runs, you should get the value in your message 🥳
