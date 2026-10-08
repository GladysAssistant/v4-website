---
title: Gladys Assistant ya es compatible con Matter
description: "Descubre Gladys Assistant v4.58: compatibilidad con Matter, ¡pero no es la única novedad!"
authors: pierregilles
image: /img/presentation/gladys-assistant-4-58.jpg
slug: gladys-assistant-4-58-with-matter-support
---

Si has pasado por el foro de Gladys últimamente, seguro que lo has notado: ¡las últimas semanas han sido especialmente intensas!

Hoy estoy muy contento de publicar **Gladys Assistant 4.58**, que trae la compatibilidad con Matter, aunque eso está lejos de ser lo único interesante de esta versión 😄

{/* truncate */}

## Integración Matter

Como comenté en mi [balance del año 2024](/es/blog/2024-year-in-review/), estoy convencido de que Matter es una pequeña revolución en el mundo del hogar inteligente, y una revolución que tendrá un **impacto extremadamente positivo para Gladys**.

Este protocolo es abierto, funciona totalmente en local y por fin permite que dispositivos de marcas muy distintas hablen un idioma común.

Se acabaron los protocolos propietarios, las aplicaciones de terceros, las API en la nube y los datos que acaban en servidores de terceros 😎

Digo que este protocolo es abierto porque cualquiera puede crear un dispositivo Matter, incluso en plan DIY.

Existe, por ejemplo, un excelente proyecto de código abierto, [Matterbridge](https://github.com/Luligu/matterbridge), cuyo objetivo es conectar dispositivos no compatibles con Matter a una red Matter. Este proyecto permite, por ejemplo, que dispositivos **Shelly**, **Somfy Tahoma**, **Zigbee2MQTT**, **Home Assistant** y otros sean compatibles con Matter.

¡Gracias a este proyecto, todos estos dispositivos pasan a ser compatibles con Gladys Assistant!

Si tienes dispositivos poco comunes, incluso puedes programar un pequeño plugin de Matterbridge para añadir compatibilidad con Matter a tu dispositivo y así integrarlo fácilmente en Gladys Assistant.

En resumen, esta integración ya está disponible:

![Matter en Gladys Assistant](../../../static/img/articles/en/gladys-4-58/matter-devices.png)

Mi objetivo es cubrir el 100 % de los dispositivos Matter, y tus comentarios son bienvenidos para que podamos conseguirlo.

Para empezar con la integración Matter, puedes seguir este tutorial:

👉 [Integrar dispositivos Matter en Gladys Assistant](/es/docs/integrations/matter/)

## Widget "Indicador" en el panel de control

![Widget Indicador en el panel de control](../../../static/img/articles/en/gladys-4-58/gauge-widget.png)

Ahora puedes añadir un widget "Indicador" (gauge) a tu panel de control, ¡muy útil para visualizar el nivel de llenado de un depósito, el nivel de batería de un dispositivo y mucho más!

## Widget "Gráficos" mejorado

El widget "Gráficos" ahora admite funciones de agregación personalizadas:

![Funciones de agregación en los gráficos de Gladys](../../../static/img/articles/en/gladys-4-58/chart-aggregate-functions.png)

Así como la agrupación por intervalo: hora, día, semana, mes, año:

![Agrupación por intervalo de tiempo en los gráficos de Gladys](../../../static/img/articles/en/gladys-4-58/chart-group-by.png)

Estas mejoras te permitirán visualizar mejor tus datos, por ejemplo:

- Mostrar la precipitación **acumulada** **por día**
- Mostrar la **suma** mensual del consumo eléctrico
- Mostrar el **número** de valores de sensor recibidos **por semana**
- Mostrar el **valor mínimo** de tu batería de almacenamiento **por día**

¡Las posibilidades son infinitas!

## La acción de escena "Esperar" admite valores dinámicos

Ahora es posible insertar variables y hacer cálculos en el bloque "Esperar".

Por ejemplo, si quieres esperar un tiempo aleatorio entre 5 y 30 minutos, puedes usar esta función:

![Esperar con variables](../../../static/img/articles/en/gladys-4-58/random-wait-scenes.png)

¡Súper útil para simular presencia!

También es posible insertar una variable procedente de un sensor, o incluso de la IA de Gladys…

## Obtén el resultado de una consulta a la IA

En las escenas, puedes usar nuestro bloque "Preguntar a la IA" para hacerle una pregunta a la inteligencia artificial y obtener su opinión sobre una situación.

¡Es la verdadera "IA proactiva" con la que todos hemos soñado!

Por ejemplo, esta acción te permite identificar un coche en la imagen de una cámara o analizar el valor de un sensor, sin que tengas que intervenir.

La respuesta de la IA ahora se inserta en una variable de escena, que se puede usar en todos los demás bloques, por ejemplo, para que se diga en voz alta por un altavoz:

![Insertar la respuesta de la IA en las escenas](../../../static/img/articles/en/gladys-4-58/use-ai-response-scene.png)

## Notificación de actualización de Gladys

A partir de ahora, Gladys te enviará una notificación cuando se acabe de actualizar.

La notificación se envía a los administradores de Gladys, en su idioma, a través de los medios de comunicación que tengan configurados: Telegram, WhatsApp, Signal o NextCloud Talk.

![Notificación de actualización](../../../static/img/articles/en/gladys-4-58/upgrade-notification.png)

## Alarma: la activación parcial ahora bloquea tus tablets

Si usas la alarma de Gladys y activas la activación parcial por la noche o durante la siesta, debes saber que ahora bloquea todas las tablets de la casa, ¡para evitar que un posible intruso acceda a tu domótica mientras duermes!

En concreto, en cuanto se activa el modo "Activación parcial", todas las tablets de la casa mostrarán esta pantalla para proteger tu instalación:

![Modo alarma de Gladys en un iPad](../../../static/img/articles/en/gladys-4-30/alarm_ipad_mockup_en.png)

## Zigbee2MQTT: compatibilidad con el sensor de nivel Tuya ME201WZ

![Compatibilidad con el sensor de nivel Tuya ME201WZ](../../../static/img/articles/en/gladys-4-58/moray-tuya-me201wz.jpg)

Si quieres medir en tiempo real el nivel de un depósito y recibir alertas cuando el nivel sea demasiado bajo o demasiado alto, ahora puedes usar el [sensor Zigbee Tuya ME201WZ](https://www.domadoo.fr/fr/produits-compatibles-jeedom/7616-moray-capteur-de-niveau-d-eau-liquide-carburant-zigbee-tuya-me201wz.html?domid=17), totalmente compatible con Gladys 🙂

## ZWaveJS: compatibilidad con la medición de energía

Los dispositivos que admiten la medición de energía, como el ZW075 AEON Labs Smart Switch Gen5, ahora son compatibles con nuestra integración Z-Wave, basada en ZWaveJS.

¡Gracias a @Sescandell por el desarrollo!

## ¡Y eso no es todo!

Esta versión trae muchas otras mejoras, entre ellas:

- **HomeKit**: limitación de los nombres de los accesorios a un máximo de 64 caracteres (conforme a las especificaciones). Gracias a @bertrandda por el desarrollo 🙏
- **MQTT** y **Zigbee2MQTT**: mejor rendimiento de la búsqueda en la página de dispositivos.
- **Escenas**:
  - Posibilidad de eliminar la primera condición de un grupo de varias condiciones.
  - Nueva barra inferior para guardar y probar una escena + confirmación antes de eliminarla. Gracias a @cicoub13 🙏
  - Nuevo botón para insertar un grupo de acciones.
  - Los filtros ahora se conservan tras eliminar una escena.
- **Panel de control**:
  - Nuevo botón para insertar un widget en una posición concreta.
  - Los dispositivos MQTT que no son sensores pero tampoco se pueden controlar se muestran como sensores.
  - Corregida la visualización de los placeholders MQTT en las escenas.
  - El widget de control de la iluminación solo aparece si hay más de dos luces.
- **Websockets locales**: corregido un error que provocaba parpadeos visuales en el panel de control.

El CHANGELOG completo está disponible [en GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.58.0).

Gracias a todos los colaboradores y a todos los testers que me han ayudado mucho con esta versión, especialmente a @mutmut, que me ayudó muchísimo con la compatibilidad con Matter.

## ¿Cómo actualizar?

Gladys se actualizará automáticamente si usas Watchtower.

Si no, puedes usar nuestro nuevo botón para actualizar Gladys con un solo clic:

![Actualizar Gladys con un clic](../../../static/img/articles/en/gladys-4-58/upgrade_gladys_one_click.png)

Este botón está disponible desde Gladys Assistant v4.57 en la pestaña `Ajustes` → `Sistema`.

## ¿Quieres empezar con Gladys?

Si eres principiante y buscas una solución sencilla y completa, he diseñado un kit ideal para empezar sin complicaciones:

- Un **mini-PC potente**: 4 núcleos, 8/16 GB de RAM, SSD de 256/500 GB
- Acceso a un **curso completo** en el que te enseño mi instalación paso a paso
- Un año de suscripción a **Gladys Plus**, con copias de seguridad automáticas, acceso remoto cifrado y mucho más

Todo desde 165,98 €, por ahora solo con envío [a Francia](https://gladysassistant.com/fr/starter-kit/).
(¡Escríbeme si quieres que lo enviemos a otro país!)

Con este kit ahorras tiempo, apoyas un proyecto de código abierto y disfrutas de una solución pensada para durar 😎

¡Nos vemos pronto en Gladys! 👋

Pierre-Gilles
