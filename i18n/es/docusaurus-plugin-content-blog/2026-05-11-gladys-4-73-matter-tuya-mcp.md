---
title: "Gladys 4.73: gran actualización de Matter.js, Local Tuya y servidor MCP"
description: "Gladys 4.73 incluye una gran actualización de Matter.js, la primera base para Local Tuya, mejoras en energía y MCP, y un Airplay más estable."
authors: pierregilles
image: /img/presentation/gladys-4-73-matter-tuya-mcp-en.jpg
slug: gladys-4-73-matter-tuya-mcp
---

Hola a todos 👋

Ya está disponible una nueva versión de Gladys Assistant: **¡la v4.73.0!** Esta versión trae varias mejoras importantes en torno a la energía, Matter, la compatibilidad con Local Tuya y la integración Airplay.

{/* truncate */}

## 🧩 Matter.js actualizado a la 0.16.11

Gladys ahora incluye la última versión de Matter.js (`0.16.11`). Es una gran actualización, ya que pasamos desde la 0.13.0, y mejora la compatibilidad y la estabilidad de los dispositivos Matter.

Comprueba que tus dispositivos Matter siguen funcionando después de esta actualización, ya que hay una migración de archivos de Matter.js que ha dado algún que otro problema a ciertos usuarios.

➡️ [Pull request #2501](https://github.com/GladysAssistant/Gladys/pull/2501)

## 🔌 Local Tuya: la primera base

Esta primera PR sienta las bases de la compatibilidad con **Local Tuya** en Gladys, que con el tiempo te permitirá controlar algunos dispositivos Tuya en local, sin depender de la nube. ¡Gracias [@Terdious](https://community.gladysassistant.com/)!

➡️ [Pull request #2434](https://github.com/GladysAssistant/Gladys/pull/2434)

## ⚡ Gestión de la energía y optimización de MCP

Esta versión añade nuevas funciones de energía y mejora el rendimiento del MCP (Model Context Protocol) que utilizan los clientes de IA. ¡Gracias [@bertrandda](https://community.gladysassistant.com/)!

➡️ [Pull request #2522](https://github.com/GladysAssistant/Gladys/pull/2522)

## 🔊 Sustitución de la librería AirTunes

La librería `airtunes` se ha sustituido por `airplay-sender` para mejorar la estabilidad y la mantenibilidad de la función Airplay. ¡Gracias de nuevo, @bertrandda!

➡️ [Pull request #2439](https://github.com/GladysAssistant/Gladys/pull/2439)

---

Como siempre, puedes actualizar Gladys directamente desde la interfaz o simplemente esperar a que se actualice sola. Gracias a todos los colaboradores 🙌

🔗 [Registro de cambios completo](https://github.com/GladysAssistant/Gladys/compare/v4.72.1...v4.73.0)
