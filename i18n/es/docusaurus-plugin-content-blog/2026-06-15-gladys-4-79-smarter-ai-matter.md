---
title: "Gladys 4.79: una IA más inteligente, un mejor asistente de voz y más dispositivos Matter"
description: "Gladys 4.79 hace más inteligente al agente de IA con las nuevas herramientas Web Request y Compare Times, mejora el asistente de voz y es compatible con más dispositivos Matter."
authors: pierregilles
image: /img/presentation/gladys-4-79-smarter-ai-matter-en.jpg
slug: gladys-4-79-smarter-ai-matter
---

¡Hola a todos!

Ya está disponible Gladys v4.79 🙂, con un agente de IA más inteligente, un mejor asistente de voz y compatibilidad con más dispositivos Matter.

{/* truncate */}

## 🤖 Inteligencia artificial

Esta versión trae varias mejoras para el agente de IA:

- **Creación de escenas:** se ha corregido el esquema y se ha aumentado el tiempo de espera para solucionar un error de creación de escenas señalado por @GBoulvin y @Jluc.
- **Mejor gestión de errores:** mensajes más claros cuando la IA no responde.
- **Llamadas a herramientas en Telegram:** ahora puedes ver las llamadas a herramientas en Telegram, igual que en la web.

![Llamadas a herramientas en Telegram](../../../static/img/articles/gladys-4-79-smarter-ai-matter/01.png)

- **Nuevas herramientas:**
  - **Web Request:** el agente puede consultar API o páginas web. Es una necesidad personal que he implementado, ¡y es increíblemente práctica!
  - **Compare Times:** compara horas del día.

Estas nuevas herramientas permiten cosas muy potentes, por ejemplo, consultar el horario de apertura de una tienda y decirte si está abierta en este momento. Muy útil en las escenas a través de la acción "Preguntar a la IA". Las posibilidades son infinitas.

## 🎙️ Asistente de voz

- **Botón de parada** para interrumpir una respuesta en curso.
- **Detección del micrófono:** si no se ha grabado ningún sonido, Gladys muestra ahora un mensaje de error.

## 🏠 Matter

Compatibilidad ampliada con nuevos tipos de dispositivos: aspiradoras, sensores de NO₂ (índice de dióxido de nitrógeno) y ventiladores.

## 📡 Zigbee2mqtt

- Actualización a Zigbee2mqtt 2.12.0
- Compatibilidad con el mando SONOFF SNZB-01M (4 botones)

## 🔧 Node-RED

Un selector de versión te permite pasar a una versión principal de Node-RED directamente desde la interfaz de Gladys.

![Selector de versión de Node-RED](../../../static/img/articles/gladys-4-79-smarter-ai-matter/02.png)

¡Muy práctico para pasar a la v5, que acaba de salir! ⚠️ Asegúrate de que los módulos que usas son compatibles con la v5.

## 🎬 Escenas

- Campo de valor más ancho para los umbrales de los sensores
- Un botón Atrás para navegar más fácilmente por el editor de escenas

## ☁️ Gladys Plus

Cuando se elimina un usuario remoto en Gladys Plus, el usuario local correspondiente se elimina automáticamente en tu instancia.

---

📋 [Changelog completo](https://github.com/GladysAssistant/Gladys/releases/tag/v4.79.0)

Como siempre, la actualización es automática en un plazo de 24 horas si usas Watchtower, o puedes hacerla manualmente desde **Ajustes → Sistema**. ¡Feliz actualización! 🎉
