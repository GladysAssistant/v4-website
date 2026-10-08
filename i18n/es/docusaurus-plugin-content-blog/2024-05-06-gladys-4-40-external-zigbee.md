---
title: ¡Prueba Gladys Assistant con una instancia de Zigbee2mqtt existente!
description: ¿Usas Home Assistant y quieres probar Gladys sin tocar tu instalación? ¡Es posible!
authors: pierregilles
image: /img/presentation/gladys-4-40.jpg
slug: gladys-4-40-external-zigbee
---

¡Hola a todos!

Hoy publico Gladys Assistant 4.40, una actualización que trae una función muy solicitada: la posibilidad de usar Gladys con una instancia de Zigbee2mqtt ya existente.

## Usar Gladys con una instancia de Zigbee2mqtt existente

A partir de ahora, cuando configures Zigbee2mqtt en Gladys, Gladys te ofrecerá 2 opciones:

![Elección del modo de Zigbee2mqtt en Gladys](../../../static/img/articles/en/gladys-4-40/choose-zigbee-mode.png)

{/* truncate */}

O bien eres principiante y empiezas desde cero, y Gladys puede encargarse de toda la configuración de Zigbee2mqtt por ti (es lo que Gladys hacía hasta ahora).

O bien eres un usuario experimentado que ya tiene una instalación de Zigbee2mqtt (por ejemplo, si usas Home Assistant o cualquier otra plataforma de domótica), y en ese caso puedes conectar Gladys a tu instalación existente.

Esta segunda opción te permite probar Gladys sin tocar tu instalación, ¡e incluso puedes usar 2 sistemas de domótica al mismo tiempo!

Ese es el poder de los sistemas de código abierto 😊

Si usas otra solución de domótica, me encantaría conocer tu opinión: prueba nuestra integración de Zigbee2mqtt y cuéntanos en [nuestro foro](https://community.gladysassistant.com/) si hay dispositivos que todavía no son compatibles. ¡Es una gran ayuda y nos permite mejorar!

Gracias a AlexTrovato por su trabajo en este desarrollo 🙌

## Philips Hue: nuevo botón "Sincronizar puentes"

Antes, en la integración de Philips Hue, si añadías una bombilla Philips Hue a tu puente mientras Gladys ya estaba en funcionamiento, Gladys no se enteraba de esa nueva bombilla.

La explicación viene de la librería que usamos, que guarda una caché de las luces disponibles porque la sincronización con el puente es una operación costosa.

A partir de ahora, he añadido un botón "Sincronizar puentes" que te permite obtener la lista más reciente de bombillas en Gladys:

![Sincronizar el puente Philips Hue en Gladys](../../../static/img/articles/en/gladys-4-40/sync-hue-bridges.png)

## Hacer parpadear enchufes en las escenas

La acción de escena "Hacer parpadear las luces" ahora te permite seleccionar enchufes inteligentes o cualquier interruptor, para que puedas hacer parpadear una lámpara conectada a un enchufe.

Pero ten cuidado: no hagas parpadear una bombilla tradicional, porque podría fundirse. ¡Usa solo LEDs!

Por ejemplo, la bombilla del espejo de mi baño está controlada por un [interruptor Zigbee ZBMINIL2](https://www.domadoo.fr/fr/peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html?domid=17), y por eso aparece en esta acción de escena:

![Hacer parpadear enchufes en una escena](../../../static/img/articles/en/gladys-4-40/blink-switch.png)

Gracias a Cicoub13 por este desarrollo 🙌

## LAN Manager: tiempo de espera aumentado a 60 segundos

Algunos usuarios me comentaron que el tiempo de espera del escaneo de red de la integración LAN Manager no era suficiente: lo he aumentado de 30 a 60 segundos.

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responder mensajes en el foro y compartir tus comentarios.
- Ayudarnos a mejorar la documentación.
- Desarrollar nuevas funciones/integraciones para Gladys, somos 100 % código abierto.
- Suscribirte a [Gladys Plus](/es/plus)
