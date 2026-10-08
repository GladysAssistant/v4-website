---
title: "Gladys 4.74: desfase de amanecer y atardecer en tus escenas ☀️"
description: "Gladys 4.74 te permite añadir un desfase antes o después del amanecer y del atardecer en tus escenas, añade el Philips Hue Dimmer v2 y corrige errores de Matter."
authors: pierregilles
image: /img/presentation/gladys-4-74-sunrise-sunset-offset-en.jpg
slug: gladys-4-74-sunrise-sunset-offset
---

Hola a todos:

Ya está disponible una nueva versión de Gladys Assistant, con varias correcciones y mejoras en torno a Matter, Zigbee2MQTT y las escenas basadas en el sol ☀️

{/* truncate */}

## ✨ Novedades

### 🌅 Desfase antes/después del amanecer y del atardecer

Ahora puedes configurar un retraso antes o después del amanecer y del atardecer en tus escenas. Algunos ejemplos de uso:

- Encender las luces **30 minutos antes del atardecer**
- Cerrar las persianas **15 minutos después del atardecer**
- Activar una escena **antes del amanecer**

Gracias [@cicoub13](https://community.gladysassistant.com/) por esta contribución 🙌

### 💡 Zigbee2MQTT: se añade el Philips Hue Dimmer Switch v2

Se ha añadido en Zigbee2MQTT la compatibilidad con el mando **Philips Hue Dimmer Switch v2**. Ahora puedes usarlo fácilmente en tus escenas y automatizaciones de Gladys.

## 🛠 Correcciones

- **Matter: corregido un error 409 en algunos dispositivos.** Se ha corregido un problema que podía provocar un error `409` al actualizar dispositivos Matter que compartían el mismo identificador único.
- **Gladys Plus: corregido un error de asociación en el primer inicio de sesión.** Se ha corregido un problema que podía impedir que un usuario se asociara correctamente con Gladys Plus en su primer inicio de sesión.

---

Gladys se actualiza automáticamente, o puedes hacerlo con un solo clic desde los ajustes.

👉 Consulta el [registro de cambios completo en GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.74.0). ¡Gracias a todos los colaboradores!
