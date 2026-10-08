---
title: Llega Gladys Assistant 4.9 con compatibilidad con Amazon Alexa
description: Es hora de lanzar una nueva versión, con una gran integración nueva, Amazon Alexa.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-9.jpg
slug: gladys-assistant-4-9-with-alexa-integration
---

¡Hola a todos!

Hoy lanzo una nueva versión, Gladys Assistant v4.9.

En esta versión, traigo a Gladys una gran integración nueva: Amazon Alexa.

Esto significa que ahora somos compatibles con todos los asistentes de voz: [Google Home](/es/docs/integrations/google-home) y [Amazon Alexa](/es/docs/integrations/alexa).

{/* truncate */}

## ¿Qué hay de nuevo en Gladys Assistant 4.9?

### Integración con Amazon Alexa

Ahora puedes controlar tus dispositivos de Gladys desde Amazon Alexa.

Por ahora admitimos 3 tipos de control:

- Encendido/apagado (en luces e interruptores)
- Brillo de las luces
- Color de las luces

Esto significa que puedes decir:

- "Alexa, enciende la luz del salón."
- "Alexa, baja la luz del baño."

![Amazon Alexa Gladys](../../../static/img/articles/en/gladys-4-9/alexa.jpg)

Configurar Amazon Alexa solo lleva unos pocos clics.

Puedes seguir nuestra documentación sobre [cómo configurar Amazon Alexa](/es/docs/integrations/alexa).

### Inyectar variables en la acción "Petición HTTP" de las escenas

Ahora puedes inyectar cualquier variable de una escena en la acción "Petición HTTP".

![Inyectar una variable en una petición HTTP en una escena](../../../static/img/articles/en/gladys-4-9/inject-variables-http-request.jpg)

Es súper sencillo y te ayuda a crear escenas potentes, ¡como llamar a Node-RED con un parámetro personalizado!

## Zigbee2Mqtt: compatibilidad con el Sonoff SNZB-01

Ahora admitimos más tipos de clic en el interruptor inalámbrico Sonoff SNZB-01.

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los colaboradores

¡Gracias a todos los que han contribuido a esta versión y han dado su opinión en el foro!

Si quieres hablar de esta versión, ¡estás más que invitado al [foro](https://community.gladysassistant.com/)!

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responder a mensajes en el foro y dar tu opinión.
- Ayudarnos a mejorar la documentación.
- Desarrollar nuevas funciones/integraciones para Gladys: somos 100 % código abierto.
- Hacer una [donación puntual](https://www.buymeacoffee.com/gladysassistant).
- Suscribirte a nuestra [suscripción mensual a Gladys Plus](/es/plus).
