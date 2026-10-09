---
title: "Gladys 4.70: restablece tu integración de Zigbee2mqtt con un solo clic"
description: "Gladys 4.70 añade un botón para restablecer Zigbee2mqtt con un solo clic, actualiza Zigbee2mqtt a la versión 2.9.1 y mejora la interfaz móvil."
authors: pierregilles
image: /img/presentation/gladys-4-70-reset-zigbee2mqtt-en.jpg
slug: gladys-4-70-reset-zigbee2mqtt
---

Hola a todos,

Ya está disponible una nueva versión de Gladys, centrada en mejoras de experiencia de usuario y de estabilidad para las integraciones **Zigbee2mqtt** y **MQTT**.

{/* truncate */}

## 🔧 Qué cambia en esta versión

### Un botón de restablecimiento para Zigbee2mqtt

En la integración de Zigbee2mqtt aparece un nuevo botón **"Restablecer"**. Permite a los usuarios con una integración dañada, o que simplemente quieren cambiar de dongle, restablecer por completo la integración con un solo clic.

![Botón de restablecimiento en la integración de Zigbee2mqtt](../../../static/img/articles/gladys-4-70-reset-zigbee2mqtt/01.png)

![Confirmación del restablecimiento](../../../static/img/articles/gladys-4-70-reset-zigbee2mqtt/02.png)

Esta es la dirección que quiero darle al proyecto: **todo debe poder hacerse desde la interfaz, sin tener que tocar nunca la línea de comandos.** A medida que el [kit de inicio](/es/starter-kit/) gana popularidad, es fundamental que Gladys siga siendo accesible para todos, sea cual sea su nivel técnico.

⚠️ Usa este botón con cuidado: elimina de forma definitiva todos los datos de la integración de Zigbee2mqtt y, si tienes dispositivos emparejados, ¡tendrás que volver a emparejarlos todos!

### Zigbee2mqtt actualizado a la versión 2.9.1

Gladys incluye ahora la última versión de Zigbee2mqtt (2.9.1). [Consulta el registro de cambios](https://github.com/Koenkk/zigbee2mqtt/releases).

### Interfaz de Zigbee2mqtt/MQTT mejorada

Los botones de la lista de dispositivos se han rediseñado para ofrecer una mejor experiencia en el móvil. ¡Gracias a [@Will_71](https://community.gladysassistant.com/) por esta contribución!

---

Como siempre, la actualización es automática en un plazo de 24 horas. Para forzarla, ve a **Ajustes → Sistema**.
