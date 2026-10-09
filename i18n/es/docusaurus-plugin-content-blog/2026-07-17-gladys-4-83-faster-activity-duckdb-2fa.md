---
title: "Gladys 4.83: actividad más rápida, limpieza de DuckDB y 2FA 🚀"
description: "Gladys 4.83 hace que la página de Actividad se muestre al instante incluso con bases de datos enormes, limpia los estados huérfanos de DuckDB, rediseña la 2FA de Gladys Plus y añade los segundos en los disparadores de estado de las escenas."
authors: pierregilles
image: /img/presentation/gladys-4-83-faster-activity-duckdb-2fa-en.jpg
slug: gladys-4-83-faster-activity-duckdb-2fa
---

¡Hola a todos!

¡Ya está disponible la versión **4.83.0**! Tras la gran versión 4.82 (diario de actividad + MQTT), esta versión se centra en la **fiabilidad**, el **rendimiento** y algunas mejoras muy concretas del día a día, sobre todo para las instalaciones con mucho historial y para Gladys Plus.

{/* truncate */}

## ⚡ Página de Actividad: visualización instantánea, incluso con bases de datos grandes

En una instalación con cientos de millones de estados, filtrar la actividad por una categoría poco frecuente (aperturas, botones…) podía congelar la interfaz durante varias decenas de segundos.

La página **Actividad** carga ahora el historial por ventanas de tiempo progresivas: los primeros eventos se muestran de inmediato y la búsqueda continúa en segundo plano, con un banner del tipo "Buscando actividad — `{month}`…".

En una base de datos de **448 millones de estados**, un filtro "Aperturas" que tardaba entre 20 y 33 s en responder muestra ahora los primeros resultados en ~100 ms.

¡Gracias a @Terdious por este trabajo!

## 🧹 Limpieza automática de los estados huérfanos (DuckDB)

Desde la migración de los historiales a DuckDB, un bug hacía que la purga "dejar de guardar el historial" de una función, así como la eliminación de dispositivos en algunos casos, no limpiaran correctamente los estados en DuckDB.

Resultado: podían acumularse durante años estados "zombis" (funciones sin historial o funciones ya eliminadas) sin que nadie se diera cuenta… hasta que llegó el diario de actividad.

Esta versión corrige la purga y ejecuta **una sola vez al arrancar** una tarea en segundo plano que limpia los estados huérfanos con suavidad (por lotes, con pausas), para no saturar la CPU ni bloquear el resto de Gladys.

![Tarea de limpieza de los estados huérfanos de DuckDB en Gladys](../../../static/img/articles/gladys-4-83-faster-activity-duckdb-2fa/01-duckdb-orphan-cleanup.png)

En una instalación de prueba se purgaron **45 millones** de estados huérfanos. Puedes seguir el progreso en **Ajustes → Tareas**.

¡Gracias de nuevo a @Terdious!

## 🔐 Gladys Plus: flujo de 2FA rediseñado

Se ha rediseñado todo el flujo de autenticación de dos factores de Gladys Plus para gestionar mejor muchos pequeños casos molestos que se habían reportado (configuración incompleta, errores de código, volver atrás, etc.).

No dudes en compartir tu opinión sobre la 2FA. Quiero de verdad que sea más sencilla para los usuarios principiantes, y soy consciente de que los pasos de autenticación siguen siendo algo complejos para un usuario no técnico.

Un próximo paso sería añadir **códigos de recuperación**, para que puedas restablecer la 2FA tú mismo si pierdes el móvil o la app de autenticación.

## 🛟 Restauración de Gladys Plus: adiós a la cuenta temporal

Al restaurar una copia de seguridad desde la pantalla de registro, Gladys creaba hasta ahora una cuenta local temporal con credenciales fijas en el código. Si el proceso se interrumpía o fallaba, esta cuenta podía quedarse, bloquear el registro… y dejar una instancia en un estado bastante incómodo.

Esta cuenta temporal se ha **eliminado**. La restauración funciona sin crear un usuario local, y las instancias que ya estaban "bloqueadas" por una antigua cuenta temporal se reparan automáticamente al arrancar.

## 🎬 Escenas: duración en segundos en el disparador de estado

En el disparador **Cambio de estado de un dispositivo**, la opción "ejecutar cuando la condición se cumpla desde hace…" solo ofrecía **minutos**.

Ahora puedes elegir **segundos** o **minutos**, algo práctico para reaccionar rápido (p. ej., "si se sigue detectando movimiento durante 10 segundos").

![Disparador de estado de una escena con duración en segundos](../../../static/img/articles/gladys-4-83-faster-activity-duckdb-2fa/02-scene-state-trigger-seconds.png)

Las escenas existentes se mantienen en minutos por defecto.

## 🖥️ Interfaz

- **Panel**: los tipos de widget se ordenan alfabéticamente según el idioma de la interfaz (gracias @Will_71)
- **Escenas**: lo mismo para las listas de disparadores y acciones (gracias @Will_71)
- **MQTT**: corregido un espaciado vertical excesivo en la lista de dispositivos
- **Actividad**: mejorado el desplazamiento horizontal de los filtros en Windows
- **Escenas**: corregido un hueco negro en las etiquetas de variables de varias líneas
- **HomeKit**: los valores de temperatura de color fuera de rango (p. ej., tiras LED) se limitan ahora al valor máximo de HomeKit (500 mireds), lo que evita advertencias HAP como "characteristic was supplied illegal value"

## 🛠️ Aspectos técnicos

- **Migración de DuckDB**: cambio del paquete `duckdb` (obsoleto) a `@duckdb/node-api`. Mismo motor, mismos archivos `.duckdb`: **ninguna migración de datos** por parte del usuario. Los binarios precompilados sustituyen a la compilación nativa.
- Publicación automática del frontend de Gladys Plus tras una release en producción

## ❤️ Gracias a los colaboradores

Muchas gracias a @Terdious y @Will_71 por sus contribuciones a esta versión, y gracias a toda la comunidad por sus comentarios y pruebas, sobre todo a quienes usan Gladys con bases de datos de historial muy grandes: gracias a ellos podemos validar este rendimiento en condiciones reales.

Como siempre, Gladys se actualiza automáticamente en un plazo de 24 horas si usas Watchtower; si no, puedes hacerlo con un clic en los ajustes.

¡No olvides configurar Telegram para recibir una alerta en tu móvil cuando Gladys se actualice!

Consulta las [notas de versión completas en GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.83.0).
