---
title: "Gladys 4.78: recibe un informe semanal de tu casa generado por IA"
description: "Gladys 4.78 introduce un informe semanal de tu casa generado por IA, un widget de enlace para el panel de control, una lista de integraciones rediseñada en el móvil y acciones de alarma Zigbee."
authors: pierregilles
image: /img/presentation/gladys-4-78-ai-weekly-home-report-en.jpg
slug: gladys-4-78-ai-weekly-home-report
---

Hola a todos 🙂

¡Acabo de publicar Gladys Assistant 4.78! Estas son las novedades, empezando por la función estrella: un **informe semanal de tu casa generado por IA**.

{/* truncate */}

## 🤖 Informe semanal con IA

La función principal de esta versión: el informe semanal de tu casa. Cada semana, Gladys puede enviarte un resumen personalizado de tu hogar inteligente: confort, consumo energético, sensores desconectados, tendencias y consejos prácticos.

Por defecto, el informe se envía todos los domingos a las 18:00, algo que puedes configurar en la integración "Inteligencia artificial":

![Configurar el informe semanal con IA](../../../static/img/articles/gladys-4-78-ai-weekly-home-report/01.png)

Este es un ejemplo real de un informe de mi propia casa:

> Hola, aquí tienes el resumen semanal de tu casa para el periodo del 2 al 8 de junio de 2026.
>
> Tu consumo eléctrico total de esta semana fue de 55,99 kWh, con un coste de 8,26 €. Se observa una tendencia a la baja respecto a la semana anterior, que registró un consumo de 59,12 kWh y un coste de 9,36 €. El enchufe de la lavadora del cuarto de lavado consumió 2,11 kWh durante el periodo.
>
> En cuanto al mantenimiento de tus equipos, varios sensores están en silencio y requieren tu atención. El sensor de CO2 de la oficina no transmite datos desde hace varios meses. Además, el sensor de movimiento del baño lleva 5 semanas inactivo, y el detector de presencia del aseo está desconectado desde hace mucho tiempo.

¡Por supuesto, podemos hacer evolucionar este informe si tienes ideas!

## 📊 Panel de control: widget de enlace

Ahora puedes añadir un widget de enlace a tu panel de control para acceder con un solo clic a una interfaz externa: Zigbee2mqtt, Tasmota, la interfaz de tu router, un NAS, una cámara, etc.

Cada enlace es personalizable: título, URL e icono (sitio web, servidor, NAS, Wi-Fi, interfaz web…):

![Configuración del widget de enlace](../../../static/img/articles/gladys-4-78-ai-weekly-home-report/02.png)

![Widget de enlace en el panel de control](../../../static/img/articles/gladys-4-78-ai-weekly-home-report/03.jpg)

Muy práctico para centralizar todos tus accesos dentro de Gladys.

## 🔌 Lista de integraciones: rediseñada en el móvil

La página de integraciones se ha rediseñado para que la navegación en el móvil sea más clara y agradable.

![Lista de integraciones en el móvil](../../../static/img/articles/gladys-4-78-ai-weekly-home-report/04.png)

## 🧠 Adiós al antiguo "cerebro" local

Se ha eliminado el antiguo sistema de IA local (preguntas/respuestas pregrabadas). Databa de una época en la que la IA no existía, y daba una mala primera impresión a quien instalaba Gladys por primera vez. Eliminar este código antiguo hace que Gladys sea más ligero, prescinde de una librería de NLP que ya no era útil y ayuda a que Gladys arranque más rápido 🙂

## ⚡ Seguimiento energético

Se ha corregido un error de agrupación en el widget de consumo mensual/anual. Los datos deberían mostrarse ahora correctamente en esos periodos.

## 🎬 Escenas

Al seleccionar una propiedad de dispositivo en un disparador de escena "cambio de estado de un dispositivo", los dispositivos sin habitación ahora aparecen en una categoría "Sin habitación". Se acabaron los dispositivos "fantasma" imposibles de seleccionar 🙂

## 📡 Zigbee2mqtt

Dos novedades para los usuarios de Zigbee2mqtt:

- **Teclado DEVELCO:** compatibilidad con las acciones del teclado (desarmar, armar día/noche/todas las zonas, retardo de salida, emergencia).
- **Sirenas de alarma:** nuevas acciones `trigger_alarm` y `stop_alarm` (por ejemplo, la sirena exterior de Bosch), utilizables en tus escenas y automatizaciones.

---

Como siempre, la actualización es automática en un plazo de 24 horas si usas Watchtower, o puedes lanzarla con un solo clic desde los ajustes.

Gracias a toda la comunidad por los comentarios, las pruebas y las sugerencias. ¡Tengo mucha curiosidad por saber cómo es el informe semanal con IA en sus casas!

Registro de cambios completo: [v4.77.0 → v4.78.0](https://github.com/GladysAssistant/Gladys/compare/v4.77.0...v4.78.0)
