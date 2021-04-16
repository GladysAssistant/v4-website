---
id: zigbee2mqtt
title: Zigbee2Mqtt
sidebar_label: Zigbee2Mqtt
---

Thanks to the [Zigbee2Mqtt](https://www.zigbee2mqtt.io/) project, it is possible to easily integrate most of the devices using the Zigbee protocol. You can check the list of compatible devices [here](https://www.zigbee2mqtt.io/information/supported_devices.html).

Before you start, make sure you have connected a USB Zigbee adapter like the CC2652R or CC2652RB.

Go to `Integrations / Zigbee2Mqtt` in Gladys.  

## Configure the USB dongle port

By clicking on `Settings` in the menu, Gladys will automatically scan the different USB ports to propose a drop-down list. Indicate in the settings the USB port to use to allow Gladys to communicate in Zigbee.

![USB dongle settings](../../static/img/docs/en/configuration/zigbee2mqtt/z2m_parameter_dongle_usb_en.png)

## Activate Zigbee2Mqtt

Once your dongle is configured, Gladys needs to install two containers (MQTT and Zigbee2Mqtt) to use the dongle and communicate with all your devices. Don't worry, all this has been automated.

Go to the `Setup` section and click on the **Enable Zigbee2mqtt** button. After a few moments (the time depends on your Raspberry Pi model and your bandwidth), you should see all the elements started and the links between each one green.

![Zigbee2Mqtt services status](../../static/img/docs/en/configuration/zigbee2mqtt/z2m_services_state_en.png)

## Allow device association

To allow devices to be associated to your Zigbee network, you must allow joining in the Zigbee configuration.

Click on the `Discover` menu, then click on the `Permit joining` button.

![Authorize association](../../static/img/docs/en/configuration/zigbee2mqtt/z2m_authorize_association_en.png)

:warning: Be careful, once your devices are associated, you will have to come back here to forbid the association, for security.

## Add devices

To make your device join the network, please refer to its manual. In most cases, a long press on the physical button allows this operation.

Still in the same screen, click on the **Scan** button to ask the Zigbee network for the list of known devices.

The devices already associated to your Zigbee network will appear with the list of detected features. You can rename them and associate them to a room using the drop-down list.

![Add a device](../../static/img/docs/en/configuration/zigbee2mqtt/z2m_add_device_en.png)

## Modify the devices

If necessary, you can go to the `Devices` menu to modify/complete the configuration of your devices.

Click on the **Edit** button of a device. You can then edit its name, the room it belongs to and the name of each feature.

![Edit a device](../../static/img/docs/en/configuration/zigbee2mqtt/z2m_edit_device_en.png)

## Usage

You can now use these Zigbee devices from the [Dashboard](../dashboard/devices-in-room.md) or from the [Scenes](../scenes/intro.md) automatically. Depending on the feature of each device, you will have access to measures, states or actions.