---
id: mqtt-api
title: MQTT API
sidebar_label: MQTT API
---

If you have configured a MQTT Broker with your Gladys installation, you will have access to the Gladys MQTT API.

Here are all the MQTT topics available, each one with an example message to send:

#### Push a new device state

Say you have a temperature sensor sending data to Gladys, you'll have to send it's temperature values to:

```
Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/state
Body: 22.2
```

#### Push state to a device

Say you have a MQTT light, and you want it to be controlled in Gladys.

The light will need to subscribe to this topic:

```
gladys/device/:device_external_id/feature/:device_feature_external_id/state
```

Where it will receive values such as:

```
1
```

Meaning "The light needs to be turned on".

Or

```
0
```

Meaning "The light needs to be turned off".
