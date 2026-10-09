---
title: "Gladys 4.80: Matter 1.5, Netatmo, Tuya y un agente de IA aún más potente 🚀"
description: "Gladys 4.80 trae compatibilidad con Matter 1.5 gracias a una gran actualización de Matter.js, correcciones para Netatmo y Tuya, y un agente de IA más capaz con una nueva herramienta para sensores."
authors: pierregilles
image: /img/presentation/gladys-4-80-matter-netatmo-tuya-ai-en.jpg
slug: gladys-4-80-matter-netatmo-tuya-ai
---

¡Hola a todos!

Muchas novedades últimamente 😀 Esta versión 4.80 trae muchas mejoras de estabilidad, correcciones para Matter, Netatmo y Tuya, y varias novedades relacionadas con la IA.

{/* truncate */}

## 🤖 IA

El agente de IA sigue mejorando, con dos nuevas funciones:

- ➕ Nueva herramienta `sensor.set-state`, que permite al agente cambiar directamente el estado de ciertos sensores cuando se lo pides. Por ejemplo, puedes usar la IA para leer la imagen de una cámara que apunta a un contador y guardar el valor leído en un dispositivo virtual. ¡También podrías leer automáticamente una matrícula y guardar el número en un dispositivo virtual!
- 🐞 Nuevo botón para descargar el contexto de depuración de la IA en formato JSON, para que sea más fácil diagnosticar problemas y compartirlos con la comunidad.

Los informes semanales generados por la IA ahora aparecen en las tareas en segundo plano (**Ajustes → Tareas**), lo que te permite seguir su ejecución y detectar fácilmente cualquier error. También se ha añadido un retardo aleatorio antes de generarlos, para no sobrecargar los servidores todos a la vez.

## 🏠 Matter

Esta versión mejora aún más la compatibilidad con Matter:

- 🌡️ Envío de la temperatura local en los dispositivos compatibles.
- 🔄 Proceso de conexión más robusto.
- 📝 Logs más detallados para facilitar la depuración.
- 🌀 Varias correcciones para los ventiladores Matter.
- 🎛️ Corregido un error por el que el identificador único de un dispositivo cambiaba al actualizarlo.
- ⚡ Se lee el estado inicial de las funciones de los dispositivos al arrancar.
- ❗ Los errores al registrar un dispositivo ahora se muestran directamente en la interfaz.

Además, Matter.js se ha actualizado a la versión [0.17.3](https://github.com/matter-js/matter.js/blob/main/CHANGELOG.md#0170-2026-05-20), un gran paso adelante que trae, entre otras cosas:

- Compatibilidad con la especificación **Matter 1.5 / 1.5.1**, que mejora la compatibilidad con los dispositivos más recientes.
- Una **reducción del 20-50 % del uso de memoria**, para que Gladys funcione aún con más fluidez.

## 📡 Integraciones

### Tuya

La integración Tuya sigue madurando: una nueva capa de mapeo común para mejorar la gestión de los dispositivos tanto en modo local como en la nube, y un asistente que crea automáticamente un ticket en GitHub cuando un dispositivo solo es compatible parcialmente o no lo es.

### Netatmo

Dos mejoras importantes: vuelve a funcionar la renovación automática del token OAuth, y la reconexión automática en caso de errores de autenticación es más robusta, también durante las llamadas a la API de negocio.

### Zigbee2MQTT

Los dispositivos Zigbee ahora muestran su dirección IEEE, así como un enlace directo para abrir el dispositivo en Zigbee2MQTT, lo que facilita el diagnóstico y la configuración. No olvides añadir la URL de tu interfaz de Zigbee2mqtt en los ajustes para usar esta función 😉

## 🐛 Correcciones

- Corregido un error en las escenas que usan el disparador **próximo amanecer**.
- Corregido un problema que impedía guardar un dispositivo cuando `energy_parent_id` no era válido.

## ❤️ Gracias a los colaboradores

Muchísimas gracias a todos los que han participado en esta versión: @cicoub13, @Terdious y @Will_71. ¡Y gracias a toda la comunidad de Gladys por sus comentarios, pruebas y contribuciones, que hacen que el proyecto avance tan rápido! 🚀

Como siempre, Gladys se actualiza automáticamente en un plazo de 24 horas si usas Watchtower, o puedes hacerlo con un clic desde los ajustes. Consulta las [notas de la versión completas](https://github.com/GladysAssistant/Gladys/releases/tag/v4.80.0).
