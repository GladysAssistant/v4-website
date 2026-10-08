---
title: "Gladys 4.81: persianas, cuota de IA y Zigbee2MQTT 🚀"
description: "Gladys 4.81 permite al agente de IA y a Alexa controlar tus persianas, añade una visualización de la cuota de IA y trae las credenciales de Zigbee2MQTT y compatibilidad con más dongles."
authors: pierregilles
image: /img/presentation/gladys-4-81-shutters-ai-quota-zigbee2mqtt-en.jpg
slug: gladys-4-81-shutters-ai-quota-zigbee2mqtt
---

¡Hola a todos!

¡Ya está aquí la versión 4.81! 😀 Esta versión permite controlar las persianas desde el agente de IA y Alexa, añade una nueva visualización de la cuota de IA, varias mejoras en Zigbee2MQTT y un montón de correcciones.

{/* truncate */}

## 🪟 Persianas

Las persianas reciben mucha atención en esta versión:

- 🤖 Una nueva herramienta `device.set-shutter` permite al agente de IA controlar tus persianas directamente: abrir, cerrar, detener o colocarlas en cualquier posición entre 0 y 100 %. Ahora basta con pedirle a Gladys que "cierre las persianas del salón hasta la mitad".
- 🗣️ Las persianas y las cortinas ahora se pueden controlar con **Alexa**, tanto para abrir/cerrar como para ajustar la posición.

## 🤖 IA

Una nueva visualización de la cuota te da total visibilidad sobre tu uso de la IA: ahora puedes ver las peticiones de texto e imagen que te quedan, sus fechas de reinicio y tu estado en tiempo real en **Integraciones → Inteligencia artificial**. Se acabó adivinar cuánto te queda.

![Uso de la cuota de IA en Gladys](../../../static/img/articles/gladys-4-81-shutters-ai-quota-zigbee2mqtt/01-ai-quota.png)

## 📡 Zigbee2MQTT

Dos buenas mejoras para los usuarios de Zigbee:

- 🔑 La interfaz ahora muestra tus credenciales MQTT (host, puerto, nombre de usuario y contraseña), con un interruptor para mostrar u ocultar la contraseña y copia con un solo clic, lo que facilita mucho conectar herramientas externas.
- 🔌 Se añade compatibilidad con varios tipos de coordinadores (dongles) que faltaban, entre ellos modelos de Home Assistant, SONOFF, SMLIGHT, Texas Instruments y ZigStar.

![Credenciales MQTT de Zigbee2MQTT en Gladys](../../../static/img/articles/gladys-4-81-shutters-ai-quota-zigbee2mqtt/02-zigbee2mqtt-credentials.png)

## 🎬 Escenas

Las acciones **Preguntar a la IA**, **Enviar un mensaje** y **Enviar una imagen de cámara** ahora seleccionan automáticamente el primer usuario y la primera cámara disponibles, en lugar de dejar los campos vacíos. Una cosa menos que configurar al crear una escena.

## 💡 Philips Hue

Se ha corregido un bug por el que las bombillas Hue recién emparejadas necesitaban un reinicio de Gladys antes de poder controlarse. El puente ahora se resincroniza automáticamente, así que las nuevas bombillas están disponibles al instante.

## 🐛 Correcciones

- ✏️ Se ha corregido el tratamiento de los acentos y caracteres especiales en los mensajes de las escenas, los prompts de IA, las notificaciones de voz y los SMS.
- 🌡️ Los ajustes del sistema ahora muestran la **temperatura de la CPU**, con umbrales codificados por colores y una actualización automática cada 30 segundos.

## ❤️ Gracias a los colaboradores

Muchísimas gracias a @Will_71 y @bertrandda por sus contribuciones a esta versión. ¡Y gracias a toda la comunidad de Gladys por sus comentarios, pruebas e ideas, que hacen avanzar el proyecto! 🚀

Como siempre, Gladys se actualiza automáticamente en un plazo de 24 horas si usas Watchtower, o puedes hacerlo con un clic desde los ajustes. Consulta las [notas de la versión completas](https://github.com/GladysAssistant/Gladys/releases/tag/v4.81.0).
