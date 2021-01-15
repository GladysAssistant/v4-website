---
id: tasmota
title: Tasmota
sidebar_label: Tasmota
---

Tasmota is an open source firmware for ESP8266 devices.

To connect them to Gladys:
- flash your device with Tamosta firmware
- configure it
- go to `Integrations / Tasmota` in Gladys

## Flash with Tasmota firmware

Follow instructions on <a href="https://tasmota.github.io/docs/Getting-Started/" target="_blank">Tasmota installation user guide</a>.

There is many firmware installation guides on Internet according to each device. You can find the one you are looking for.

## Configure device

Once flashed with new firmare, go to the device web page and configure MQTT as describe at <a href="https://tasmota.github.io/docs/MQTT/" target="_blank">Tasmota MQTT configuration</a>.

Enter your MQTT broken information and fill the <i>Topic</i> field with the expected unique device identifier.

Click on `Configuration`.

![Tasmota menu](/en/img/docs/configuration/tasmota/tasmota-home.png)

Click on `Configure MQTT` menu.

![Tasmota configuration](/en/img/docs/configuration/tasmota/tasmota-configuration.png)

Then fill configuration form with your information:
- `Host` : MQTT broker URL
- `Port` : MQTT broker port
- `User` : user to connect to MOQTT broker
- `Password` : password to connect to MQTT broker

![Tasmota MQTT](/en/img/docs/configuration/tasmota/tasmota-mqtt.png)

## Add device to Gladys

Once saved, go back to Gladys:
1. to `Integration -> Tasmota` page
2. select `MQTT discover` menu
3. click on `Scan`button (if device is not laready listed)
4. then `Save`
5. et voilà!
