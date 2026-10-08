---
title: Gladys Assistant v4.10 ya está disponible, ¡con compatibilidad con Broadlink!
description: Compatibilidad con Broadlink, mejoras de rendimiento y nuevas capacidades para Zigbee2mqtt
authors: pierregilles
image: /img/presentation/gladys-assistant-4-10.jpg
slug: gladys-assistant-4-10-broadlink-and-performances
---

¡Hola a todos!

Espero que todos hayan disfrutado de unas estupendas vacaciones de verano 🙂

Hoy publico Gladys Assistant v4.10, una gran versión con nuevas funciones increíbles, tanto en las integraciones como en el núcleo.

{/* truncate */}

## ¿Qué hay de nuevo en Gladys Assistant 4.10?

### Compatibilidad con Broadlink

¡Tenemos una nueva integración! 🎉

Los dispositivos Broadlink son pequeños emisores de infrarrojos que funcionan como mando a distancia y se pueden controlar por Wi-Fi.

![Integración Broadlink en Gladys](../../../static/img/articles/en/gladys-4-10/broadlink.jpg)

Con Gladys v4.10, ahora puedes conectar tus dispositivos Broadlink a Gladys y, por tanto, controlar los aparatos que tu Broadlink puede controlar (por ahora solo por infrarrojos, no por radiofrecuencia).

### Enormes mejoras de rendimiento en el panel de control

Me habían llegado comentarios de que el panel de control de algunos usuarios tardaba muchísimo en cargar cuando tenían varios gráficos en el mismo panel.

Así que le pedí a un usuario que me enviara su base de datos para ver qué pasaba.

Esto es lo que vi:

![Panel de control lento](../../../static/img/articles/en/gladys-4-10/slow-dashboard.jpg)

Su panel tardaba hasta 40 segundos en cargar: ¡¡nada normal!! 😅

Así que ejecuté una por una todas las consultas SQL que intervienen en la visualización del panel.

Enseguida descubrí que algunas consultas súper simples tardaban hasta 6 segundos en ejecutarse, para acabar devolviendo un resultado vacío: ¡nada normal!

![Consulta SQL lenta](../../../static/img/articles/en/gladys-4-10/slow-sql-query.jpg)

Usé `EXPLAIN QUERY PLAN` para entender qué estaba haciendo SQLite.

Me di cuenta de que, aunque tenía los índices correctos en los dos atributos usados en la consulta (`device_feature_id` y `created_at`), SQLite solo usaba un índice para el primer filtro y luego tenía que recorrer secuencialmente todas las filas para filtrar por `created_at`.

La solución era sencilla: creé un índice que cubriera ambos atributos:

```sql
CREATE INDEX ix_device_feature_state_device_feature_id_created_at
ON t_device_feature_state (device_feature_id, created_at);
```

Y al instante, la consulta que tardaba 6 segundos pasó a… ¡5 ms! ⚡

¡El tiempo de carga de su panel pasó de 40 segundos a 100 ms! ⚡

Esta mejora de rendimiento está disponible en Gladys Assistant v4.10.

Ten en cuenta que crear el índice puede llevar algo de tiempo, así que la actualización de Gladys puede tardar más de lo habitual.

### Elige qué historial de estados de dispositivos quieres conservar

Ahora puedes elegir de qué dispositivos quieres conservar el historial de estados.

Si tienes un dispositivo muy "hablador" que almacena toneladas de datos en tu base de datos, ahora puedes excluirlo del historial y Gladys solo conservará el último valor.

![Conservar el historial de estados](../../../static/img/articles/en/gladys-4-10/keep-state-history.jpg)

### Compatibilidad con WebCal

WebCal es un estándar para acceder a archivos iCalendar (archivos `.ics`).

Muchas organizaciones comparten calendarios WebCal con fechas públicas: días festivos, eventos deportivos, programas de televisión, reuniones públicas y mucho más.

La integración CalDAV ahora permite sincronizar estos calendarios WebCal.

Si sigues calendarios WebCal en tu calendario (iCloud, Nextcloud, …), ¡Gladys podrá sincronizarlos!

### Compatibilidad con persianas/cortinas en la integración MQTT

Ahora admitimos persianas y cortinas motorizadas en la integración MQTT.

![Persianas](../../../static/img/articles/en/gladys-4-10/shutters.jpg)

Puedes crear una persiana en Gladys y controlar 3 estados:

```
STOP: 0
OPEN: 1
CLOSE: -1
```

También puedes controlar la posición de la persiana (si tu persiana lo admite).

### Zigbee2mqtt: muestra la calidad de la señal (LQI) en el panel de control

Con Zigbee2mqtt recibimos un atributo de "intensidad de la señal" que indica si el dispositivo está lejos de la red o no.

Ahora admitimos este atributo (LQI) y puedes mostrarlo en tu panel de control:

![Zigbee2mqtt LQI](../../../static/img/articles/en/gladys-4-10/z2m-lqi.jpg)

### Zigbee2mqtt: compatibilidad con sensores de COV (sensores de calidad del aire)

Los COV, o "compuestos orgánicos volátiles", son sustancias químicas emitidas por una gran variedad de productos del hogar (pinturas, muebles, cosméticos).

Algunos niveles de contaminantes pueden ser de 2 a 5 veces más altos dentro de casa que fuera.

Existen sensores para medir el nivel de COV en casa, ¡y ahora los admitimos en Gladys!

### Tasmota: compatibilidad con dispositivos que envían arrays de valores

Algunos dispositivos, como el Sonoff Dual R3 flasheado con Tasmota, no se gestionaban correctamente en Gladys.

¡Ahora los admitimos por completo!

### Muchas correcciones de errores y mejoras de la interfaz

No voy a entrar en el detalle de cada cambio, pero también hemos corregido algunos pequeños errores y mejorado la interfaz.

Puedes consultar todos los detalles en el [CHANGELOG](https://github.com/GladysAssistant/Gladys/releases/tag/v4.10.0).

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los colaboradores

¡Gracias a todos los que han contribuido a esta versión y han dado su opinión en el foro!

Si quieres hablar de esta versión, ¡eres bienvenido en el [foro](https://community.gladysassistant.com/)!

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responde mensajes en el foro y danos tu opinión.
- Ayúdanos a mejorar la documentación.
- Desarrolla nuevas funciones/integraciones para Gladys: somos 100 % código abierto.
- Haz una [donación puntual](https://www.buymeacoffee.com/gladysassistant).
- Suscríbete a [Gladys Plus](/es/plus).
