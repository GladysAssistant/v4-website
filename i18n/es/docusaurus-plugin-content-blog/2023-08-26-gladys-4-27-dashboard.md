---
title: Compatibilidad Zigbee con IKEA TRÅDFRI y cambio de nombre de dispositivos en el panel
description: Paneles aún más personalizados y más compatibilidad Zigbee en Gladys Assistant 4.27
authors: pierregilles
image: /img/presentation/gladys-assistant-4-27.jpg
slug: gladys-4-27-dashboard-rename-and-zigbee
---

¡Hola a todos!

Espero que hayas pasado unas buenas vacaciones ☀️

En cuanto a Gladys Assistant, volví la semana pasada con una actualización a la v4.26.1, que trajo una [serie de correcciones](https://community.gladysassistant.com/t/gladys-assistant-v4-26-1-mosquitto-fixed-at-v2-0-15-google-home-graph-improved/118) en respuesta a los comentarios de la comunidad durante el verano.

Hoy continúo con una actualización más importante en cuanto a funciones: Gladys Assistant 4.27.

## Cambia el nombre de tus dispositivos en el panel

{/* truncate */}

Era una función de la que se hablaba desde hacía mucho tiempo: ¿qué se debería mostrar en el panel para "definir" correctamente una función? ¿El nombre del dispositivo? ¿El nombre del dispositivo y la habitación? ¿El nombre de la función? ¿O ambos?

Después de pensarlo, me di cuenta de que nunca podríamos contentar a todo el mundo, así que decidí permitirte modificar el nombre que se muestra en el panel.

En concreto, en el panel, dentro del widget "Dispositivos", puedes cambiar el nombre de cada dispositivo y moverlo según tus preferencias:

<div class="videoContainer">
<video width="100%" controls autoplay loop muted>
<source src="https://gladysassistant-assets.b-cdn.net/gladys-4-27/gladys-rename-devices-en.mp4" type="video/mp4" />
  Tu navegador no es compatible con la etiqueta de vídeo.
</video>
</div>

## Nuevos dispositivos Zigbee

Gladys ahora es totalmente compatible con 3 nuevos dispositivos Zigbee, dos de ellos de la gama conectada de IKEA.

Si no conoces la [oferta de iluminación conectada Zigbee de IKEA](https://www.ikea.com/us/en/cat/eclairage-connecte-36812/), es muy asequible (desde 9,99 € una bombilla y 6,99 € un interruptor) y de buena calidad. Si estás empezando en la domótica, es una buena forma de dar los primeros pasos. Además, ¡está disponible en todas las tiendas IKEA o con entrega a domicilio a través de su web!

### Botón IKEA TRÅDFRI con regulador de intensidad

![IKEA TRÅDFRI con regulador de intensidad](../../../static/img/articles/en/gladys-4-27/ikea-tradfri-button.jpg)

Este botón es un interruptor de encendido/apagado muy económico ([6,99 € en IKEA](https://www.ikea.com/us/en/p/tradfri-variateur-dintensite-sans-fil-connecte-blanc-70408595/)), que también funciona como regulador de intensidad al mantener pulsado encendido o apagado.

He añadido compatibilidad con 5 acciones:

- Encender
- Apagar
- Aumentar el brillo
- Reducir el brillo
- Detener el cambio de brillo

Estas acciones están disponibles en las escenas para tus automatizaciones:

![Botón IKEA en las escenas de Gladys](../../../static/img/articles/en/gladys-4-27/scene-ikea-button.jpg)

### Botón IKEA STYRBAR con control de intensidad y color

![IKEA STYRBAR](../../../static/img/articles/en/gladys-4-27/ikea-styrbar-button.jpg)

Este mando a distancia conectado te permite controlar el encendido/apagado, la intensidad y el color de una o varias bombillas. Está disponible por [9,99 € en IKEA](https://www.ikea.com/us/en/p/styrbar-remote-control-smart-white-80488370/).

He añadido compatibilidad con 11 acciones:

- Encender
- Apagar
- Aumentar el brillo
- Reducir el brillo
- Detener el cambio de brillo
- Clic en la flecha izquierda
- Clic en la flecha derecha
- Flecha izquierda mantenida
- Flecha derecha mantenida
- Flecha izquierda soltada
- Flecha derecha soltada

Estas acciones también están disponibles en las escenas para automatizar lo que quieras.

Por supuesto, usados con Gladys, estos dos botones pueden controlar absolutamente cualquier cosa.

Si prefieres un control más "directo", puedes usar los [Bindings de Zigbee2mqtt](https://www.zigbee2mqtt.io/guide/usage/binding.html) para asociar directamente el interruptor y la bombilla, en Zigbee directo.

Así tendrás un control directo que funciona incluso si tu sistema domótico no está activo.

### Botón Xiaomi WXKG01LM

He añadido algunas acciones que faltaban para este botón:

- Triple clic
- Cuádruple clic
- Clic soltado
- Muchos clics

## ¿Te falta alguna compatibilidad Zigbee?

Si tienes un dispositivo Zigbee que Gladys todavía no gestiona por completo, no dudes en publicar un mensaje [en el foro](https://community.gladysassistant.com/).

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responde a mensajes en el foro y comparte tus comentarios.
- Ayúdanos a mejorar la documentación.
- Desarrolla nuevas funciones/integraciones para Gladys: somos 100 % código abierto.
- Suscríbete a [Gladys Plus](/es/plus/)
