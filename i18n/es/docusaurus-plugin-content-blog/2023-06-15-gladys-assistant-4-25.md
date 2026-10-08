---
title: "Gladys Assistant 4.25: mejoras en las escenas y el panel"
description: ¡Un nuevo widget "Dispositivos", envío de imágenes de cámara en las escenas y mucho más!
authors: pierregilles
image: /img/presentation/gladys-assistant-4-25-en.jpg
slug: gladys-assistant-4-25
---

¡Hola a todos!

Hoy hay nueva versión de Gladys, con cambios muy interesantes que mejoran el uso diario de Gladys.

Antes de empezar: si buscas hardware para ejecutar Gladys, un mini-PC Beelink es una forma estupenda de iniciarte en la domótica con un equipo fiable y potente.

Algunos miembros de la comunidad incluso han pedido varios, por así decirlo 😂

La comunidad coincide bastante en que hoy en día los mini-PC son una alternativa más que seria a la Raspberry Pi, difícil de encontrar y, al final, de precio similar cuando lo sumas todo (placa + SSD + fuente de alimentación + carcasa).

👉 Consulta la [guía de hardware recomendado](/es/docs/installation/recommended-hardware/) para ver nuestras recomendaciones actuales.

## Nuevo widget "Dispositivos"

{/* truncate */}

Era motivo de frustración para muchos: hasta ahora no era posible crear un widget "Dispositivos" que mezclara dispositivos de distintas habitaciones.

Ya está solucionado con este nuevo widget desarrollado por Lokkye, totalmente personalizable: puedes arrastrar cualquier dispositivo dentro y ponerle el título que quieras:

![Widget Dispositivos](../../../static/img/articles/en/gladys-4-25/devices-widget.jpg)

## Mejor experiencia de uso en las escenas

La experiencia general de creación y edición de escenas ha mejorado mucho en esta versión.

Para empezar, una escena ahora tiene una descripción editable, que te permite distinguir mejor tus escenas:

![Descripción de la escena](../../../static/img/articles/en/gladys-4-25/scene-description.jpg)

Esta descripción se edita de forma superfácil haciendo clic en la descripción dentro de la escena:

![Cabecera de la escena en el ordenador](../../../static/img/articles/en/gladys-4-25/scene-header-desktop.jpg)

Verás que la cabecera de la parte superior de la pantalla de edición de la escena se ha mejorado para ser más funcional y fácil de leer. Las funciones secundarias (duplicar y eliminar) se han trasladado a un botón "Más", para no sobrecargar constantemente la pantalla de botones.

En el móvil, se ha mejorado el diseño responsive para que la pantalla siga siendo clara y legible incluso en pantallas pequeñas:

![Cabecera de la escena en el móvil](../../../static/img/articles/en/gladys-4-25/scene-header-mobile.jpg)

Por último, Gladys ofrece ahora la función más solicitada: mover acciones o bloques de acciones dentro de las escenas.

Esta cruz que puedes agarrar permite coger acciones y arrastrarlas y soltarlas en otro punto de la escena.

![Mover una acción en una escena](../../../static/img/articles/en/gladys-4-25/move-action-scene.jpg)

## Enviar una imagen de cámara en las escenas

Una PR genial de Lokkye, que ahora te permite enviar una imagen de una cámara por mensaje en las escenas.

La idea de esta función es poder crear escenas del tipo "Si se detecta movimiento, ENTONCES envíame por mensaje una imagen de la cámara exterior":

![Enviar una imagen de cámara en las escenas](../../../static/img/articles/en/gladys-4-25/scene-camera-image.jpg)

## Google Home: corrección de un bug en la gestión del brillo

Recibí comentarios de un usuario sueco de Gladys que me explicó que sus bombillas IKEA Tradfri no funcionaban muy bien con la integración de Google Home.

Cuando ponía el brillo al 100 % en Google Home, sus bombillas solo estaban a la mitad de su brillo en Gladys.

La causa de este bug era bastante sencilla: las bombillas IKEA Tradfri tienen un rango de brillo de 0 a 254 y no de 0 a 100 %, así que hace falta un pequeño paso de conversión para pasar de la escala de Google Home (0-100 %) a la escala de Tradfri (0-254), y viceversa.

El bug se ha corregido [en esta PR](https://github.com/GladysAssistant/Gladys/pull/1813).

## Nuevas unidades de superficie

Era una petición de Hizo en el foro: ahora es posible añadir dispositivos MQTT de superficie.

Útil, por ejemplo, para un robot aspirador que devuelve la superficie limpiada o en limpieza.

![Superficie](../../../static/img/articles/en/gladys-4-25/surface.jpg)

## HomeKit: nuevo botón para restablecer la vinculación

Gracias a una PR de bertrandda, ahora es posible restablecer la vinculación con HomeKit en Gladys:

![Restablecer HomeKit](../../../static/img/articles/en/gladys-4-25/homekit-reset.jpg)

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los colaboradores

Gracias a todos los que han contribuido a esta versión y han dado su opinión.

Si quieres hablar de esta versión, ¡estás más que invitado al [foro](https://community.gladysassistant.com/)!

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responde a mensajes en el foro y da tu opinión.
- Ayúdanos a mejorar la documentación.
- Desarrolla nuevas funciones o integraciones para Gladys, somos 100 % código abierto.
- Suscríbete a [Gladys Plus](/es/plus/)
