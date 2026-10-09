---
id: get-last-device-state-action
title: Obtener el último estado
description: "Obtén el último estado de un dispositivo en una escena de Gladys Assistant y guárdalo en una variable para usarlo en condiciones y en las acciones siguientes."
sidebar_label: Obtener el último estado
---

Esta acción te permite obtener el último estado de un dispositivo gestionado por Gladys y guardarlo en una variable.

Veamos un ejemplo.

## Añadir una condición sobre la temperatura de una habitación

Supongamos que quieres crear una escena que obtenga la temperatura de una habitación y continúe el escenario solo si la temperatura es inferior a 20 °C.

El primer paso de tu escena es añadir una acción "Obtener el último estado" y seleccionar el sensor que quieres usar.

![Obtener el último estado en una escena](../../../../../static/img/docs/en/scenes/get-last-device-state-action/get-last-device-state.jpg)

Después, en el siguiente bloque de acciones, añade una acción "Continuar solo si" seleccionando la variable obtenida anteriormente.

Con la condición "sensor de temperatura de la cocina < 20 °C", queda así:

![Escena con "Continuar solo si"](../../../../../static/img/docs/en/scenes/get-last-device-state-action/continue-only-if.jpg)
