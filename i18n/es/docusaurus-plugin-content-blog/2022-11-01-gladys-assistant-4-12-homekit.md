---
title: ¡Gladys Assistant 4.12 con compatibilidad con HomeKit!
description: Esta nueva versión trae muchas funcionalidades nuevas, como la compatibilidad con HomeKit, el control de tu termostato y la compatibilidad con los dispositivos Lixee TIC.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-12.jpg
slug: gladys-assistant-4-12-homekit
---

¡Hola a todos!

Hoy me alegra publicar Gladys Assistant 4.12 con un montón de funcionalidades nuevas.

{/* truncate */}

## ¿Qué hay de nuevo en Gladys Assistant 4.12?

### Compatibilidad con HomeKit

Gladys ya es oficialmente compatible con HomeKit, lo que significa que puedes controlar todos tus dispositivos de Gladys desde tus dispositivos Apple y usar Siri.

![Integración de HomeKit en Gladys Assistant](../../../static/img/articles/en/gladys-4-12/homekit-example.jpg)

De momento solo admitimos 3 tipos de dispositivos:

- Bombilla (encendido/apagado, color, temperatura de color y brillo)
- Interruptor (encendido/apagado)
- Sensor de temperatura

Se añadirán más tipos de dispositivos a petición en el [foro](https://community.gladysassistant.com/).

Para conectar tus dispositivos de Gladys a HomeKit, ¡sigue [nuestra documentación](/es/docs/integrations/homekit)!

### Controla tu termostato

Ya hay un nuevo tipo de dispositivo disponible en la integración MQTT: el termostato 🚀

![Control del termostato en Gladys](../../../static/img/articles/en/gladys-4-12/thermostat.gif)

Ahora puedes controlar fácilmente la temperatura de tu casa y también automatizarlo en las escenas.

### Para usuarios en Francia: controla tu consumo eléctrico con Zigbee Lixee TIC

Para los usuarios en Francia, ahora somos compatibles con el sensor Lixee TIC, un dispositivo que se conecta al contador eléctrico inteligente Linky para ver en directo cuánta potencia está consumiendo tu casa.

El dispositivo simplemente se conecta a tu contador Linky:

![Lixee TIC](../../../static/img/articles/en/gladys-4-12/lixee-tic.jpg)

Se conecta a Gladys mediante la integración Zigbee2mqtt y te permite ver el consumo eléctrico de tu casa en tiempo real.

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los colaboradores

Gracias a todos los que han contribuido a esta versión y han dado su opinión.

Si quieres hablar de esta versión, ¡eres bienvenido en el [foro](https://community.gladysassistant.com/)!

## Apóyanos

Si quieres apoyarnos, hay muchas formas de hacerlo:

- Responde a mensajes en el foro y danos tu opinión.
- Ayúdanos a mejorar la documentación.
- Desarrolla nuevas funcionalidades o integraciones para Gladys: somos 100 % código abierto.
- Haz una [donación puntual](https://www.buymeacoffee.com/gladysassistant).
- Suscríbete a [Gladys Plus](/es/plus).
