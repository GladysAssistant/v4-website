---
id: send-a-zigbee2mqtt-message-action
title: Send a Zigbee2Mqtt message
sidebar_label: Send a Zigbee2Mqtt message
---

In scenes, it is sometimes useful to send an order to control zigbee2mqtt devices that are not managed by Gladys Assistant.

## Send a Zigbee2Mqtt message in a scene

To send a Zigbee2Mqtt message, it's very simple, create a "send a Zigbee2Mqtt message" action in a scene.

![Send Zigbee2Mqtt message](../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message.png)

## Concrete example: Trigger a siren [Woox R7051](https://www.zigbee2mqtt.io/devices/R7051.html) from a Gladys Assistant scene

### In Gladys, create a scene

Create a new scene in Gladys, then add an "send a Zigbee2Mqtt message" action to it.

Specify the topic of your device.

![Device topic](../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-topic.png)

Specify the command to control your device. You can find your device's information on the [Zigbee2mqtt](https://www.zigbee2mqtt.io/devices/R7051.html#warning-composite) website.

![Device message](../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-message.png)

Save the scene and launch it.

## Inject a variable into a message

You want to inject the duration value into the message, in order to know the current duration value.

To do this, you must add a "retrieve the last state" action to your scene and select the device you want to request.

![Get device value](../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/get-device-value.png)

Then, further in the scene, you can add a "send a Zigbee2Mqtt message" action, and in the message you type `{{` and select the previously defined variable.

![Send message with injected variable](../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message-with-injected-variable.png)

When the scene runs, you should get the value in your message 🥳
