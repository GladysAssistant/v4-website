---
id: humidity-in-room
title: Mostrar la humedad media de una habitación en el panel de control
description: "Muestra la humedad media de una habitación en tu panel de control de Gladys Assistant, calculada a partir de todos los sensores de humedad, con umbrales de color personalizados."
sidebar_label: Humedad de la habitación
---

En Gladys Assistant, puedes mostrar la humedad media de una habitación en tu panel de control.

Este widget obtiene la humedad de todos los sensores de humedad presentes en la habitación y muestra la media en el panel de control.

## Requisitos previos

Primero debes haber configurado al menos un sensor de humedad.

Puede ser un sensor de cualquier protocolo (Zigbee, Matter, MQTT, da igual), y debes haber asignado este sensor a una habitación.

## Configuración

Ve al panel de control y haz clic en "Editar".

Selecciona el widget "Humedad de la habitación" y haz clic en el botón +.

![Añadir el widget de humedad a Gladys](../../../../../static/img/docs/en/dashboard/humidity-in-room/add-widget.png)

A continuación, selecciona la habitación que quieres mostrar.

![Seleccionar la habitación que se mostrará](../../../../../static/img/docs/en/dashboard/humidity-in-room/configure-widget.png)

Puedes configurar umbrales personalizados a partir de los cuales el color del widget cambiará según la humedad.

Haz clic en "Guardar".

![El widget de humedad de la habitación](../../../../../static/img/docs/en/dashboard/humidity-in-room/humidity-in-room.png)

Si no tienes sensores en la habitación, o si estos sensores no han enviado ningún valor en la última hora, verás lo siguiente:

![Sin datos](../../../../../static/img/docs/en/dashboard/humidity-in-room/no-values.png)
