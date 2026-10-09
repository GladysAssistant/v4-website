---
id: continue-only-if-action
title: Condición sobre variables
description: "Usa la acción \"Continuar solo si\" en las escenas de Gladys Assistant para que la escena siga ejecutándose solo cuando una variable cumpla una condición, con soporte de funciones matemáticas."
sidebar_label: Condición sobre variables
---

Esta acción te permite continuar (o no) la ejecución de la escena en función de una condición determinada.

Veamos un ejemplo.

## Continuar la escena con una condición sobre la temperatura de una habitación

Supongamos que quieres crear una escena que obtenga la temperatura de una habitación y que continúe el escenario solo si la temperatura es inferior a 20 °C.

El primer paso en tu escena es añadir una acción "Obtener el último estado" y seleccionar el sensor que quieres usar.

![Obtener el último estado](../../../../../static/img/docs/en/scenes/get-last-device-state-action/get-last-device-state.jpg)

Después, en el siguiente bloque de acciones, puedes añadir una acción "Continuar solo si", seleccionando la variable obtenida anteriormente.

Con la condición `kitchen temperature sensor <20°C`, el resultado es el siguiente:

![Escena con "Continuar solo si"](../../../../../static/img/docs/en/scenes/get-last-device-state-action/continue-only-if.jpg)

En esta acción puedes insertar variables y usar funciones matemáticas.

Consulta las [funciones matemáticas disponibles](/es/docs/scenes/math-functions).
