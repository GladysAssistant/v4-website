---
id: send-a-sms-action
title: Enviar un SMS
description: "Envía un SMS a tu móvil en una escena de Gladys Assistant con el operador francés Free Mobile e incluye valores de sensores y variables en el mensaje."
sidebar_label: Enviar un SMS
---

Esta acción te permite enviar un SMS a tu móvil en una escena, con el operador móvil francés [Free Mobile](https://mobile.free.fr).

## Ejemplo sencillo

Enviar un SMS es muy sencillo: crea una acción "Enviar un SMS" en una escena.

![Enviar un SMS](../../../../../static/img/docs/en/scenes/send-a-sms-action/send-a-sms.png)

## Incluir una variable en un SMS

Supongamos que quieres enviarte una alerta cuando la temperatura de tu casa sea demasiado baja.

Quieres incluir el valor actual de la temperatura en el mensaje, para saber qué temperatura hace en ese momento.

Para ello, añade a tu escena la acción "Obtener el último estado" y selecciona el sensor que quieres consultar.

![Obtener el valor del sensor](../../../../../static/img/docs/en/scenes/send-a-sms-action/get-device-value.jpg)

Después, más adelante en la escena, puedes añadir la acción "Enviar un SMS". En el mensaje, escribe `{{ ` y selecciona la variable definida anteriormente.

![Incluir una variable](../../../../../static/img/docs/en/scenes/send-a-sms-action/inject-variable-demo.png)

Cuando se ejecute la escena, deberías recibir el valor en tu mensaje 🥳
