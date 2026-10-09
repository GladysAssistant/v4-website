---
id: send-a-zigbee2mqtt-message-action
title: Enviar un mensaje Zigbee2Mqtt
description: "Envía un mensaje Zigbee2MQTT en una escena de Gladys Assistant para controlar directamente dispositivos Zigbee, como activar una sirena, con inyección de variables."
sidebar_label: Enviar un mensaje Zigbee2Mqtt
---

En las escenas, a veces es útil enviar una orden para controlar dispositivos zigbee2mqtt que no están gestionados por Gladys Assistant.

## Enviar un mensaje Zigbee2Mqtt en una escena

Enviar un mensaje Zigbee2Mqtt es muy sencillo: crea en una escena la acción "Enviar un mensaje Zigbee2Mqtt".

![Enviar un mensaje Zigbee2Mqtt](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message.png)

## Ejemplo concreto: activar una sirena [Woox R7051](https://www.zigbee2mqtt.io/devices/R7051.html) desde una escena de Gladys Assistant

### En Gladys, crea una escena

Crea una nueva escena en Gladys y añádele la acción "Enviar un mensaje Zigbee2Mqtt".

Indica el topic de tu dispositivo.

![Topic del dispositivo](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-topic.png)

Indica el comando para controlar tu dispositivo. Puedes encontrar la información de tu dispositivo en el sitio web de [Zigbee2mqtt](https://www.zigbee2mqtt.io/devices/R7051.html#warning-composite).

![Mensaje del dispositivo](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-message.png)

Guarda la escena y ejecútala.

## Inyectar una variable en un mensaje

Supongamos que quieres inyectar el valor de la duración en el mensaje, para conocer el valor actual de la duración.

Para ello, debes añadir a tu escena la acción "Obtener el último estado" y seleccionar el dispositivo que quieres consultar.

![Obtener el valor del dispositivo](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/get-device-value.png)

Después, más adelante en la escena, puedes añadir la acción "Enviar un mensaje Zigbee2Mqtt" y, en el mensaje, escribir `{{` y seleccionar la variable definida anteriormente.

![Enviar un mensaje con una variable inyectada](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message-with-injected-variable.png)

Cuando se ejecute la escena, ¡deberías obtener el valor en tu mensaje! 🥳
