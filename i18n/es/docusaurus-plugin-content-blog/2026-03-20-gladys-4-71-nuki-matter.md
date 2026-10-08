---
title: "Gladys 4.71: Nuki más robusto y grandes mejoras en Matter"
description: "Gladys 4.71 trae una integración Nuki más robusta, varias mejoras en Matter y una detección de presencia Bluetooth más clara."
authors: pierregilles
image: /img/presentation/gladys-4-71-nuki-matter-en.jpg
slug: gladys-4-71-nuki-matter
---

¡Hola a todos!

Esta nueva versión trae mejoras importantes en **Matter** y **Nuki**, además de varias correcciones de errores.

{/* truncate */}

## 🔐 Nuki v1.0.1: una integración más robusta

La integración Nuki se ha actualizado con varias correcciones importantes:

- Al arrancar, Gladys ahora comprueba que el servicio está bien configurado antes de iniciarlo, para evitar errores en los logs.
- Las suscripciones MQTT ahora se limitan solo a los dispositivos Nuki registrados, para evitar escuchas innecesarias.
- Ya no es posible lanzar un escaneo (HTTP o MQTT) si el servicio no está configurado: el indicador de carga se detiene y se muestra un mensaje claro.
- El token de API introducido en la pestaña de configuración ahora se valida: si hay un error, se muestra un mensaje y el token se borra automáticamente.

¡Gracias, [@ProtZ](https://community.gladysassistant.com/), por este trabajo tan minucioso!

## ⚡ Matter: varias mejoras

Matter sigue evolucionando rápidamente en Gladys:

- **Proceso de emparejamiento más claro:** las instrucciones de emparejamiento ahora son más fáciles de leer y más accesibles para los nuevos usuarios.
- **Nuevos clusters Boolean y Switch:** para admitir el IKEA BILRESA y el Aqara Door and Window Sensor P2. Desarrollé esta compatibilidad haciendo pruebas a través de Matterbridge, así que tus comentarios sobre los dispositivos IKEA / Aqara son muy bienvenidos 🙂
- **Seguimiento de los filtros HEPA:** los purificadores de aire compatibles con Matter ahora pueden mostrar el estado de su filtro HEPA en Gladys. ¡Gracias, **@Nagromdark**!

Sigo invirtiendo mucho en Matter y ahora mismo estoy preparando una gran actualización de la biblioteca `matter-js` para lograr aún más estabilidad y compatibilidad.

**Matterbridge:** corregido un error por el que la versión actual no se guardaba correctamente, lo que podía provocar actualizaciones repetidas e innecesarias del contenedor.

## 📡 Presencia Bluetooth: más clara para los nuevos usuarios

Ahora un mensaje indica claramente que esta integración solo funciona con **balizas** (beacons) Bluetooth, y no con smartphones ni relojes inteligentes.

## 🛠️ Iconos que faltaban en los sensores de producción de energía

A las funciones `ENERGY_PRODUCTION_SENSOR` les faltaban los iconos en algunas vistas. Ya está corregido, ¡gracias, **@Terdious**!

---

La actualización es automática. Para forzarla, ve a **Ajustes → Sistema**. ¡Buen fin de semana! 🏠
