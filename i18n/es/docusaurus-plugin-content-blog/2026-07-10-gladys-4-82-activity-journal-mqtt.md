---
title: "Gladys 4.82: registro de actividad y rediseño de MQTT 🚀"
description: "Gladys 4.82 presenta un nuevo registro de actividad que muestra el historial de tu casa en tiempo real, un rediseño completo de la integración MQTT, un selector de modelos de IA, compatibilidad con los contadores inteligentes Tuya y mucho más."
authors: pierregilles
image: /img/presentation/gladys-4-82-activity-journal-mqtt-en.jpg
slug: gladys-4-82-activity-journal-mqtt
---

¡Hola a todos!

Hoy publico una de las versiones más grandes del año hasta ahora, y hay una razón de peso para ello.

Estamos claramente en un punto de inflexión en la forma de crear software: los modelos de IA son cada vez más potentes y las herramientas para usarlos en el día a día por fin están maduras. En las últimas dos semanas, dos de ellas han cambiado mi forma de trabajar en Gladys.

**Claude Fable 5**, el modelo insignia de Anthropic, el que estuvo restringido temporalmente en Estados Unidos porque sus capacidades preocupaban a las autoridades. Me ha permitido abordar temas muy técnicos que me habrían llevado días enteros, y crear grandes funcionalidades como el registro de actividad que detallo más abajo.

**Los agentes de IA en la nube de Cursor**, controlables desde el móvil. Hace unos diez días, Cursor lanzó su app para iOS: ahora puedes encargar una tarea de desarrollo a un agente directamente desde tu teléfono y dejar que trabaje de forma autónoma, sin ordenador. El rediseño completo de la integración MQTT lo hizo **íntegramente** un agente de Cursor mientras yo estaba de viaje.

{/* truncate */}

## 🏠 Nueva página Actividad: el historial de tu casa, en directo

La funcionalidad estrella de esta versión: una nueva pestaña **Actividad** que muestra una línea de tiempo visual de todo lo que pasa en tu casa: aperturas de puertas, detecciones de movimiento, luces que se encienden y se apagan, valores de sensores y mucho más.

![Línea de tiempo del registro de actividad de Gladys](../../../static/img/articles/gladys-4-82-activity-journal-mqtt/01-activity-journal.png)

Lo que hace que esta página sea útil cada día:

- Línea de tiempo agrupada por día ("Hoy", "Ayer" y luego fechas completas) con iconos de colores para cada familia de eventos.
- **Agrupación de ráfagas**: los estados consecutivos de un mismo sensor se fusionan en una sola línea con una insignia `×N`, que se puede desplegar para ver cada repetición con su marca de tiempo. Imprescindible en instalaciones con 100 a 200 dispositivos.
- Filtros por familia (Aperturas, Movimiento y presencia, Botones, Luces, Clima, Seguridad, Energía y más), un selector de habitación y búsqueda de dispositivos.
- **Tiempo real**, con una píldora flotante "N eventos nuevos" cuando te has desplazado hacia abajo.
- Desplazamiento infinito con paginación.

## 📡 MQTT: un rediseño completo de la experiencia con dispositivos virtuales

La integración MQTT recibe una gran renovación de UX, inspirada en los comentarios de la comunidad ([foro](https://community.gladysassistant.com/t/catalogue-des-features-supportees-en-mqtt/8452)):

![Lista de dispositivos MQTT de Gladys agrupados por habitación](../../../static/img/articles/gladys-4-82-activity-journal-mqtt/02-mqtt-device-list.png)

![Catálogo de funciones MQTT de Gladys con vista previa del panel](../../../static/img/articles/gladys-4-82-activity-journal-mqtt/03-mqtt-feature-catalog.jpg)

- **Lista compacta** de dispositivos agrupados por habitación.
- **Catálogo de funciones** con una vista previa realista del panel y búsqueda.
- **IDs externos generados automáticamente** (`mqtt:{slug}-{4chars}`), siempre editables.
- Botón **Copiar** para los identificadores y las URL de MQTT.

## 🤖 IA: selección de modelo y mejor contexto

Sigo impulsando el agente de IA dentro de Gladys, porque estoy convencido de que es el futuro de la domótica: controlar tu casa por voz o por texto, ejecutar cualquier acción, consultar tus sensores.

Esta versión añade un **selector de modelos de IA** en el chat. Puedes probar los distintos modelos de Scaleway (Mistral, Llama, Qwen, Gemma y más) y comparar sus respuestas en situaciones reales en tu casa. Un indicador de coste (€, €€, €€€) te ayuda a orientarte.

![Selector de modelos de IA en el chat de Gladys](../../../static/img/articles/gladys-4-82-activity-journal-mqtt/04-ai-model-selector.jpg)

Una vez identificado el mejor modelo, haré números para integrarlo de forma duradera en Gladys Plus, de una manera sostenible para el proyecto. Mientras tanto, ¡pruébalo y comparte tu opinión en el foro!

Otras mejoras de la IA:

- **Contexto más rico**: las llamadas a herramientas y los mensajes irrelevantes se excluyen del contexto para obtener mejores respuestas.
- Corregido el esquema de la acción "encender/apagar un dispositivo".
- Archivo de depuración enriquecido (últimos 50 mensajes).

## ⚡ Tuya: compatibilidad con contadores inteligentes

- Compatibilidad con los **contadores inteligentes Tuya**, tanto en la nube como en local.
- Lectura a través de la API **Thing Model shadow** para dispositivos sin especificaciones heredadas.
- Mediciones: potencia total, energía activa/reactiva, tensión, corriente.
- Nombres de visualización limpios (las erratas de los códigos Tuya ya no aparecen en la interfaz).
- Una infraestructura de pruebas basada en fixtures para industrializar la incorporación de nuevos dispositivos Tuya.

## 📱 Interfaz y panel

El widget **Indicador** (gauge) admite ahora un nombre personalizable para distinguir varios indicadores del mismo dispositivo (por ejemplo, dos depósitos de agua MQTT), y hemos corregido el bloqueo del desplazamiento en el móvil cuando apoyabas el dedo sobre un indicador.

En el móvil, los botones de acción y las cabeceras ahora son responsive en muchas páginas (integraciones, ajustes y más): los botones se apilan en el móvil y los grupos de botones se ajustan mejor.

## 🔧 Integraciones y correcciones

| Integración | Cambio |
|-------------|--------|
| **Z-Wave JS** | Integración reparada tras una actualización de ZWaveJS |
| **Matter** | matter.js actualizado de 0.17.3 a 0.17.4 |
| **Aire acondicionado** | Corregido el modo de climatización que se mostraba como modo ventilador desde la v4.79.0 |
| **iOS** | El modo oscuro ya no se sobrescribe al abrir la app |
| **Escenas** | Los mensajes con caracteres especiales ya no provocan errores de visualización |

## 🛠️ Bajo el capó (para colaboradores)

- **Migración del frontend de preact-cli (webpack) a Vite**: arranque más rápido en desarrollo, HMR mejorado y un build modernizado. Para el usuario final no cambia nada, pero es una base técnica más sana para lo que viene.
- Nuevo campo `supported_options` en DeviceFeature: las integraciones ahora pueden declarar los modos y valores que admite una función (por ejemplo, los modos de un robot aspirador).
- Documentación para desarrolladores ampliada (`AGENTS.md`).

## ❤️ Gracias a los colaboradores

Gracias a @Terdious, @Will_71, @Sescandell y @bertrandda por sus contribuciones, y a toda la comunidad por sus comentarios sobre MQTT, el registro de actividad y la UX en el móvil.

Una palabra también para los suscriptores de [Gladys Plus](https://gladysassistant.com/es/plus/): gracias a ustedes puedo pagar las herramientas de IA que hacen posible todo esto. Si quieres que Gladys avance todavía más rápido, Gladys Plus es la mejor palanca. Además de apoyar el proyecto, desbloqueas las funcionalidades avanzadas: copias de seguridad, agente de IA, acceso remoto, asistentes de voz, integración MCP, Enedis y muchas más.

Como siempre, Gladys se actualiza automáticamente en 24 horas si usas Watchtower, o puedes hacerlo con un clic desde los ajustes. Consulta las [notas de la versión completas](https://github.com/GladysAssistant/Gladys/releases/tag/v4.82.0).
