---
title: "Gladys 4.68: inicia Matterbridge con un clic, integraciones favoritas y un Tasmota mejorado"
description: "Gladys 4.68 te permite iniciar Matterbridge con un clic, marcar integraciones favoritas y trae una mejor detección de Tasmota y un mejor seguimiento del consumo de energía."
authors: pierregilles
image: /img/presentation/gladys-4-68-matterbridge-en.jpg
slug: gladys-4-68-matterbridge
---

¡Hola a todos!

Ya está disponible una nueva versión de Gladys, con varias mejoras y correcciones, entre ellas una forma de ejecutar **Matterbridge** con un solo clic y abrir así la puerta a muchos más dispositivos compatibles.

{/* truncate */}

## 🆕 Novedades

### Integración Matterbridge

Gladys ahora te permite iniciar un **contenedor de Matterbridge con un solo clic**, lo que abre la puerta a muchos más dispositivos compatibles.

![Integración Matterbridge en Gladys](../../../static/img/articles/gladys-4-68-matterbridge/01.jpg)

¿Quieres ver cómo construí esta integración con IA? Lo explico todo en YouTube:

[![Construir la integración Matterbridge con IA](../../../static/img/articles/gladys-4-68-matterbridge/youtube.jpg)](https://youtu.be/gLtJE3dgEIA)

📖 [Documentación de Matterbridge](/es/docs/integrations/matterbridge/)

⚠️ Nota: si ya ejecutas Matterbridge en tu instancia, iniciarlo a través de Gladys podría provocar un conflicto de puertos. No hay ninguna ventaja real en ejecutar Matterbridge mediante Gladys si ya lo has configurado tú mismo fuera de Gladys.

### Integraciones favoritas

Ahora puedes marcar tus integraciones favoritas para encontrarlas más rápido.

### Mejoras en Tasmota

Detección automática de la IP a través de MQTT, un enlace directo a la interfaz web del dispositivo y una mejor ordenación durante la búsqueda de dispositivos.

## 🐛 Correcciones y mejoras

- **Widget de temperatura de la habitación:** ahora se excluyen los valores de temperatura atípicos y se ha corregido la conversión a Fahrenheit del valor máximo.
- **Chat:** los espacios de los mensajes ahora se conservan correctamente gracias a `pre-wrap`:

![Corrección de los espacios en el chat](../../../static/img/articles/gladys-4-68-matterbridge/02.png)

- **DuckDB** actualizado a la versión 1.4.4.
- Erratas corregidas en las traducciones.
- Mayor robustez del servicio MCP.

---

¡Gracias a todos los colaboradores: @bertrandda, @mutmut, @Will_71, @qleg y @Terdious por este gran trabajo colaborativo! 🙌

¡Feliz actualización! 🚀
