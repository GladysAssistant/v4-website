---
id: mqtt-api
title: MQTT API
sidebar_label: MQTT API
---

Si vous avez configurer un broker MQTT avec Gladys, vous pouvez communiquer avec Gladys via MQTT.

#### Envoyer un nouvel état de périphérique

Si vous avez un capteur de température qui doit retourner des valeurs en MQTT, vous pouvez envoyer vos valeurs sur le topic suivant:

```
Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/state
Body: 22.2
```

#### Contrôler un périphérique depuis Gladys

Imaginons que vous êtes une ampoule contrôlable via MQTT.

Vous devez écouter le topic MQTT:

```
gladys/device/:device_external_id/feature/:device_feature_external_id/state
```

Ou vous allez recevoir des valeurs comme par exemple:

```
1
```

Ce qui veut dire "Gladys demande à la lampe de s'allumer".

Ou

```
0
```

Ce qui veut dire "Gladys demande à la lampe de s'éteindre".
