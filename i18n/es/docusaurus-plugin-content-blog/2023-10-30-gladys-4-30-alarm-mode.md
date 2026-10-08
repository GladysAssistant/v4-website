---
title: ¡Gladys incorpora una alarma completa!
description: La seguridad es la base de la domótica. A partir de hoy, Gladys incluye una alarma completa para ayudarte a gestionar la seguridad de tu casa.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-30-en.jpg
slug: gladys-4-30-alarm-mode
---

¡Hola a todos!

¡Gladys Assistant 4.30 acaba de salir, y es una versión increíble! 🥳

La función principal es la gestión completa de un modo alarma que te permite montar un sistema de seguridad completo para tu casa.

![Maqueta de la alarma de Gladys en un iPad](../../../static/img/articles/en/gladys-4-30/alarm_ipad_mockup_en.png)

Reconócelo, dan ganas de probarla 😎

## Una alarma en Gladys

Gladys ya puede sustituir a un sistema de alarma completo gestionando los distintos estados que tiene cualquier buen sistema de alarma:

{/* truncate */}

![Alarma en el panel de control de Gladys](../../../static/img/articles/en/gladys-4-30/alarm-dashboard.jpg)

Si quieres montar una alarma con Gladys, ¡he escrito [un tutorial completo](/es/docs/dashboard/alarm/) sobre el tema!

## Integración con Node-RED

Ya era posible conectar Node-RED con Gladys (con la [integración MQTT](/es/docs/integrations/mqtt)), pero hacían falta ciertos conocimientos, ya que tenías que lanzar Node-RED tú mismo.

Lokkye ha trabajado en una integración nativa para que cualquiera pueda lanzar una instancia de Node-RED junto a Gladys ¡con un solo clic!

A partir de ahora, solo tienes que ir a la integración "Node-RED" y hacer clic en "Activar" para lanzar un contenedor de Node-RED:

![Integración de Node-RED en Gladys](../../../static/img/articles/en/gladys-4-30/node-red-integration.png)

## Tuya: gestión del consumo eléctrico

La integración Tuya ahora es compatible con los enchufes inteligentes que envían datos de consumo eléctrico.

Gracias a Lokkye por el desarrollo 🙏

## Lanzar una escena desde el chat

Esto ya era posible con la integración ChatGPT, pero este comando se acaba de añadir al modelo de chat "local" de Gladys. Ahora puedes pedirle a Gladys en el chat que lance una escena:

![Lanzar una escena desde el chat](../../../static/img/articles/en/gladys-4-30/cinema-scene.png)

Gracias a Lokkye por el desarrollo 🙏

## Lanzar una escena con MQTT

Ahora puedes lanzar una escena por MQTT publicando un mensaje en el topic:

```
gladys/master/scene/SCENE_SELECTOR/start
```

Sustituyendo `SCENE_SELECTOR` por el selector de la escena, que encontrarás en la URL de edición de la escena.

Por ejemplo, para la escena `http://192.168.1.10/dashboard/scene/cinema`, tendrás que enviar un mensaje al topic:

```
gladys/master/scene/cinema/start
```

Gracias a Lokkye por el desarrollo 🙏

## Lanzar una escena al arrancar Gladys

¿Quieres recibir un mensaje cuando Gladys se reinicia? ¿Realizar una acción cada vez que Gladys arranca?

Ahora puedes lanzar una escena al arrancar Gladys:

![Escena al arrancar Gladys](../../../static/img/articles/en/gladys-4-30/gladys-start-trigger.png)

Gracias a Lokkye por el desarrollo 🙏

## Zigbee2mqtt: mejoras en la interfaz

Los dispositivos ya añadidos dejan de mostrarse por defecto en la página "Descubrimiento de la red Zigbee":

![Zigbee2mqtt oculta los dispositivos ya añadidos](../../../static/img/articles/en/gladys-4-30/zigbee2mqtt-hide-already-added-devices.png)

¡Y la URL de Zigbee2mqtt ahora aparece en la página de configuración!

**Corrección de errores**: al cambiar el puerto del dongle USB, Gladys reinicia el contenedor de Zigbee2mqtt con el volumen correcto.

Gracias a AlexTrovato y Cicoub13 por estas mejoras 🙏

## HomeKit: gestión de sensores de humedad y de fugas de agua

¡A partir de ahora, tus sensores de fugas de agua y de humedad también se envían a HomeKit!

Gracias a bertrandda por el desarrollo 🙏

El CHANGELOG completo está disponible [aquí](https://github.com/GladysAssistant/Gladys/releases/tag/v4.30.0).

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responde a mensajes en el foro y da tu opinión.
- Ayúdanos a mejorar la documentación.
- Desarrolla nuevas funciones/integraciones para Gladys: somos 100 % código abierto.
- Suscríbete a [Gladys Plus](/es/plus/)
