---
id: temperature-in-room
title: Mostrar la temperatura media de una habitación en el panel
description: "Muestra la temperatura media de una habitación en tu panel de Gladys Assistant, calculada a partir de todos los sensores de temperatura de la habitación."
sidebar_label: Temperatura de la habitación
---

En Gladys Assistant puedes mostrar la temperatura media de una habitación en tu panel.

Este widget obtiene la temperatura de todos los sensores de temperatura presentes en la habitación y muestra la media en el panel.

## Requisitos previos

Antes debes tener configurado al menos un sensor de temperatura.

Puede ser un sensor de cualquier protocolo (Zigbee, Matter, MQTT, da igual), y debe estar asignado a una habitación.

:::note
Algunos sensores informan de una "temperatura del dispositivo"; por ejemplo, un ordenador puede informar de la temperatura de su CPU. Gladys no tiene en cuenta estos valores como valores de temperatura en este widget.
:::

## Configuración

Ve al panel y haz clic en "Editar".

Selecciona el widget "Temperatura de la habitación" y haz clic en el botón +.

![Añadir el widget de temperatura en Gladys](../../../../../static/img/docs/en/dashboard/temperature-in-room/add-widget-temperature-in-room.png)

A continuación, selecciona la habitación que quieres mostrar.

![Seleccionar la habitación que se mostrará](../../../../../static/img/docs/en/dashboard/temperature-in-room/select-room.png)

Puedes configurar umbrales personalizados a partir de los cuales el color del widget cambiará en función de la temperatura.

Haz clic en "Guardar".

![El widget de temperatura de la habitación](../../../../../static/img/docs/en/dashboard/temperature-in-room/temperature-in-room.png)

Si no tienes ningún sensor en la habitación, o si estos sensores no han enviado ningún valor en la última hora, verás lo siguiente:

![Sin datos](../../../../../static/img/docs/en/dashboard/temperature-in-room/no-temperature.png)
