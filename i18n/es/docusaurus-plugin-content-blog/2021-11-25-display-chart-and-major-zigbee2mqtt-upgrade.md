---
title: "Nueva versión: gráficos en el panel de Gladys y gran actualización de Zigbee2mqtt"
description: Gran lanzamiento hoy, por fin puedes mostrar gráficos en el panel y usar cualquier dispositivo compatible con Zigbee2mqtt en Gladys Assistant.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-7-chart.jpg
slug: display-chart-and-major-zigbee2mqtt-upgrade
---

¡Hola a todos!

Esta semana publico un conjunto de grandes funciones que se venían pidiendo desde hace bastante tiempo 🚀

Todo está disponible en Gladys Assistant v4.7 🥳

## ¿Qué hay de nuevo en Gladys Assistant v4.7?

### Gráficos en el panel

Ahora tenemos una forma nativa de mostrar gráficos en el panel, de manera totalmente automática y sin tener que configurar una base de datos externa como InfluxDB.

![Gráfico en el panel de Gladys Assistant](../../../static/img/articles/en/gladys-4-7/chart-dashboard.jpg)

{/* truncate */}

Para ello, Gladys agrega ahora todos los datos de los dispositivos en 3 niveles de granularidad distintos:

- Datos por hora: Gladys guarda como máximo 100 valores por función de dispositivo y por hora.
- Datos diarios: Gladys guarda como máximo 100 valores por función de dispositivo y por día.
- Datos mensuales: Gladys guarda como máximo 100 valores por función de dispositivo y por mes.

Al mostrar un gráfico en el panel, Gladys utiliza uno de estos 3 conjuntos de datos agregados para mostrar el gráfico lo más rápido posible.

Nuestro objetivo es mantenernos por debajo de 100 ms de tiempo de respuesta, sin importar la cantidad de datos que guarde tu sensor.

Para saber cómo configurar esta función, puedes leer [la documentación](/es/docs/dashboard/chart).

### Compatibilidad total con Zigbee2mqtt

Cuando lanzamos la compatibilidad con Zigbee2mqtt este año, optamos por un enfoque muy prudente:

Cada dispositivo tenía que ser clasificado manualmente por un desarrollador antes de poder usarse en Gladys.

Para empezar, este enfoque era más seguro, porque nos permitía integrar mejor cada dispositivo, conocer una amplia variedad de periféricos Zigbee y adaptar Gladys a ellos.

Pero con el tiempo, se volvió muy repetitivo escribir un PR para cada nuevo dispositivo Zigbee, así que cambiamos de enfoque:

¡Detectar automáticamente cada dispositivo!

Gracias a la [Pull Request #1302](https://github.com/GladysAssistant/Gladys/pull/1302) de Alexandre Trovato, ahora podemos analizar los datos enviados por Zigbee2mqtt para asociar automáticamente esos dispositivos a las funciones de Gladys.

Esto significa que todos los dispositivos compatibles con Zigbee2mqtt son ahora compatibles con Gladys, de forma nativa.

### En la integración Tasmota, convertir un interruptor en una luz

Era un comentario frecuente: algunos usuarios conectan una lámpara a un interruptor y, por lo tanto, quieren que ese interruptor se considere una luz en Gladys.

Por ejemplo, si digo "Enciende la luz del salón", también debería encender esos interruptores.

Ahora es posible convertir un interruptor en una luz en la integración Tasmota.

### Nueva categoría "Temperatura del dispositivo" para supervisar la temperatura de la CPU

Algunos dispositivos envían un valor con la temperatura de su CPU.

En Gladys solo teníamos una categoría "Temperatura", y el problema era que, al preguntar "¿Qué temperatura hace en el salón?", Gladys respondía con la temperatura de la CPU del ordenador de tu salón...

Ahora existe una categoría independiente "Temperatura del dispositivo" que te permite clasificar claramente esas temperaturas de CPU, sin afectar a la función "Temperatura ambiente" de Gladys.

Desarrollado en [#1327](https://github.com/GladysAssistant/Gladys/commit/94acaac8fd32c3c0e0c82c581f10904d5ed36f0d).

### Muchas mejoras y correcciones de errores

- En la integración MQTT, ahora se muestra si el broker está conectado o no ([#1349](https://github.com/GladysAssistant/Gladys/commit/a5c95dcfbfc84b8ddde141a4e3680cae9fb659ce))
- En la integración CalDAV, la fecha de los eventos recurrentes ahora es correcta ([#1367](https://github.com/GladysAssistant/Gladys/commit/b6ab1c06e94f804c6077da7b99e5e258ef0cf475))
- En la integración Telegram, la temperatura se muestra ahora en el formato correcto del usuario ([#1363](https://github.com/GladysAssistant/Gladys/commit/bcbb1234b1590fb14a2af5eef87065c966297287))
- En la pestaña de escenas, se corrigió un error que impedía editar el nombre de una escena ([#1318](https://github.com/GladysAssistant/Gladys/commit/7ed2d520b8b5b6c03b539311903425393797aaa1))
- Muchas correcciones y mejoras en la integración eWeLink ([#1044](https://github.com/GladysAssistant/Gladys/commit/a755d55f2ebb70983111343018b3fd9a1590933b))

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los colaboradores

¡Gracias a todas las personas que han contribuido a esta versión y han compartido sus comentarios en el foro!

Si quieres hablar de esta versión, ¡estás más que invitado al [foro](https://community.gladysassistant.com/)!
