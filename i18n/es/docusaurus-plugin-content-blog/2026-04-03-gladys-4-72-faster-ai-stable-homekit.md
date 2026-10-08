---
title: "Gladys 4.72: IA más rápida, HomeKit a prueba de bombas y un montón de correcciones"
description: "Gladys 4.72 redimensiona las imágenes de las cámaras para una IA más rápida y económica, corrige el alto uso de CPU de HomeKit, añade etiquetas a las integraciones e incluye muchas más correcciones."
authors: pierregilles
image: /img/presentation/gladys-4-72-faster-ai-stable-homekit-en.jpg
slug: gladys-4-72-faster-ai-stable-homekit
---

¡Hola a todos!

Ya está disponible Gladys Assistant 4.72.0 🎉, con una IA más rápida, un HomeKit más estable y una larga lista de correcciones.

{/* truncate */}

## ✨ Novedades

- **Zigbee: compatibilidad doble encendido/apagado para el botón IKEA BILRESA.** El botón IKEA BILRESA ahora es totalmente compatible a través de Zigbee2mqtt.
- **IA: menos latencia y menos coste.** Las imágenes de las cámaras que se envían a la IA ahora se redimensionan antes del envío, lo que reduce tanto la latencia como el coste de las llamadas a la API.
- **Lista de integraciones: se añaden etiquetas.** Las integraciones ahora tienen etiquetas (local, nube, Gladys Plus) para que su modo de funcionamiento quede más claro.
- **ZwaveJS UI: sale de la fase alfa.** La integración ZwaveJS UI es lo bastante estable y se ha eliminado el banner de advertencia de versión alfa.
- **MQTT: renombrada a "MQTT - Dispositivos virtuales"** para que la integración resulte más fácil de entender a los usuarios que vienen de Home Assistant.
- **Node-RED: advertencia antes de eliminar el contenedor.** Ahora un mensaje avisa de que eliminar el contenedor de Node-RED también elimina todos los datos asociados.

## 🐛 Correcciones de errores

- **HomeKit: corregido el alto uso de CPU relacionado con mDNS.** Un error provocaba un uso de CPU anormalmente alto. Se ha corregido ofreciendo varias opciones de mDNS.
- **Nuki: corregida la gestión de los mensajes de descubrimiento de Home Assistant.** La integración escuchaba demasiados mensajes, lo que causaba problemas de rendimiento cuando muchos dispositivos compatibles con Home Assistant compartían el mismo broker.
- **CalDAV: los errores de configuración ahora se muestran** directamente en la interfaz.
- **Restauración de copias de seguridad: más robusta.** Se ha reforzado la seguridad de la función de restauración de copias de seguridad de Gladys Plus, sobre todo mediante el uso de `execFile` para los comandos de OpenSSL.
- **Creación de cuenta de usuario:** el texto encima del campo "correo electrónico" ahora es más claro.
- **Zigbee2mqtt: corregido un error de seguimiento de energía** por el que los dispositivos con funciones de energía siempre aparecían en la pestaña "Descubrimiento".
- **Monitorización de energía: corregido un error al eliminar un contador** en la integración Zigbee2mqtt.
- **Matter: corregida la gestión del color** usando un bitmap numérico para `optionsMask` en el control de color de Matter.

---

Gracias a todos los colaboradores de esta versión: @bertrandda, @cicoub13 y @David-Digitis.

Para actualizar, puedes esperar 24 horas o ir a **Ajustes → Sistema → Actualizar**. ¡Feliz fin de semana de Semana Santa a todos! 🏠
