---
id: mqtt-api
title: MQTT API
sidebar_label: MQTT API
---

If you configured a MQTT Broker with your Gladys installation, you have access to Gladys MQTT API.

Here are all the MQTT topics available, with examples of message to send:

#### Push a new device state

Image you have a temperature sensor sending data to Gladys, you'll have to send his temperature values to:

```
Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/state
Body: 22.2
```

#### Push state to a device

Imagine you are a MQTT lights, and you want to be controlled in Gladys.

You need to subscribe to this topic:

```
gladys/device/:device_external_id/feature/:device_feature_external_id/state
```

Where you will receive values like:

```
1
```

Meaning "You need to be turned on".

Or

```
0
```

Meaning "You need to be turned off".
