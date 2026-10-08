---
id: gauge
title: Mostrar un indicador en el panel de control
description: "Añade un widget de indicador (gauge) al panel de control de Gladys Assistant para mostrar el valor actual de un sensor entre su mínimo y su máximo."
sidebar_label: Indicador
---

Puedes mostrar un indicador (gauge) en el panel de control.

![Indicador](../../../../../static/img/docs/en/dashboard/gauge/gauge.png)

Este indicador muestra el valor actual del sensor, entre el mínimo y el máximo definidos a nivel del sensor.

:::note
Si creaste el sensor tú mismo en la integración MQTT, puedes modificar los valores mínimo y máximo tú mismo.

De lo contrario, es responsabilidad de la integración definir correctamente los valores mínimo y máximo.

Si los valores mínimo y máximo no están bien definidos, ¡no dudes en pasarte por el foro para comentarlo!
:::

## Requisitos previos

Debes tener configurado al menos un sensor que envíe datos a Gladys.

## Configuración

Ve al panel de control y haz clic en "Editar".

Añade un widget "Indicador":

![Añadir el widget de indicador en Gladys](../../../../../static/img/docs/en/dashboard/gauge/add-widget.png)

Después, selecciona el sensor que quieres mostrar:

![Seleccionar el sensor que se va a mostrar](../../../../../static/img/docs/en/dashboard/gauge/configure-widget.png)

Haz clic en "Guardar" ¡y listo!
