---
id: devices
title: Mostrar dispositivos en el panel
description: "Controla tus dispositivos y consulta los valores de tus sensores directamente desde el panel de Gladys Assistant con el widget \"Dispositivos\"."
sidebar_label: Dispositivos
---

En Gladys Assistant puedes controlar tus dispositivos directamente desde el panel y mostrar los valores de tus sensores en la interfaz.

## Requisitos previos

Debes haber añadido al menos algunos dispositivos a Gladys (sin ellos es mucho menos emocionante 😄).

## Configuración

Ve al panel de Gladys y haz clic en "Editar".

Selecciona el widget "Dispositivos":

![Añadir el widget de dispositivos](../../../../../static/img/docs/en/dashboard/devices/select-widget.png)

Selecciona los dispositivos que quieres mostrar y elige un nombre para tu widget (opcional).

![Seleccionar los dispositivos que se van a mostrar](../../../../../static/img/docs/en/dashboard/devices/choose-device-and-name.png)

Haz clic en "Guardar".

## Uso

Ahora puedes ver tus dispositivos en el panel, consultar sus últimos valores si son sensores o controlarlos directamente.

![Widget de dispositivos](../../../../../static/img/docs/en/dashboard/devices/devices-with-value.png)

## Si no se muestra ningún valor

Si tus dispositivos muestran "ningún valor reciente", significa que el dispositivo no ha enviado ningún valor recientemente.

![Dispositivos sin valor reciente](../../../../../static/img/docs/en/dashboard/devices/no-recent-value.png)

El umbral predeterminado es de 48 horas sin valores, pero puedes cambiarlo en `Ajustes` -> `Sistema` -> `Tiempo de caducidad de un estado`:

![Tiempo de caducidad de un estado](../../../../../static/img/docs/en/dashboard/devices/delay-before-expiring.png)
