---
id: send-a-zigbee2mqtt-message-action
title: Envoyer un message Zigbee2Mqtt
description: "Envoyez un message Zigbee2MQTT dans une scène Gladys Assistant pour piloter directement des appareils Zigbee, comme déclencher une sirène, avec injection de variables."
sidebar_label: Envoyer un message Zigbee2Mqtt
---

Dans les scènes, il est parfois utile d'envoyer une commande pour contrôler des appareils Zigbee2Mqtt qui ne sont pas gérés par Gladys Assistant.

## Envoyer un message Zigbee2Mqtt dans une scène

Pour envoyer un message Zigbee2Mqtt, c'est très simple : créez une action "envoyer un message Zigbee2Mqtt" dans une scène.

![Envoyer un message Zigbee2Mqtt](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message.png)

## Exemple concret : Déclencher une sirène [Woox R7051](https://www.zigbee2mqtt.io/devices/R7051.html) depuis une scène Gladys Assistant

### Dans Gladys, créer une scène

Créez une nouvelle scène dans Gladys, puis ajoutez une action "envoyer un message Zigbee2Mqtt".

Spécifiez le topic de votre appareil.

![Topic de l'appareil](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-topic.png)

Spécifiez la commande pour contrôler votre appareil. Vous pouvez trouver les informations de votre appareil sur le site [Zigbee2mqtt](https://www.zigbee2mqtt.io/devices/R7051.html#warning-composite).

![Message de l'appareil](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-message.png)

Enregistrez la scène et lancez-la.

## Injecter une variable dans un message

Vous voulez injecter la valeur de durée actuelle dans le message, afin de savoir la valeur de durée actuelle.

Pour cela, vous devez dans votre scène ajouter une action "Récupérer le dernier état" puis vous sélectionnez l'appareil que vous voulez requêter.

![Récupérer valeur capteur](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/get-device-value.png)

Ensuite, plus loin dans la scène, vous pouvez ajouter une action "Envoyer un message" et dans le message vous tapez `{{ ` puis vous sélectionnez la variable précédemment définie.

![Envoyer un message avec variable injectée](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message-with-injected-variable.png)

Lorsque la scène est lancée, vous devriez obtenir la valeur dans votre message 🥳
