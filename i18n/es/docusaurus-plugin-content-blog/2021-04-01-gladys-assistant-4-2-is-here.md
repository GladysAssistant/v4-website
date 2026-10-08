---
title: ¡Ya está aquí Gladys Assistant 4.2.0, con soporte para Zigbee2mqtt!
description: ¡Tras meses de trabajo, Gladys Assistant ya puede gestionar dispositivos Zigbee!
authors: pierregilles
image: /img/presentation/gladys-4-2-zigbee-cover-en.jpg
slug: gladys-assistant-4-2-is-here
---

Hola a todos:

¡Gladys v4.2.0 sale hoy! ¡Ya!

Desde el lanzamiento de Gladys Assistant 4 el pasado noviembre, cada vez más colaboradores han aportado su granito de arena proponiendo nuevas funciones para Gladys Assistant.

Desde noviembre, hemos publicado **11 nuevas versiones de Gladys**. Son casi 3 nuevas versiones al mes. ¡No paramos!

{/* truncate */}

## Novedades de la versión 4.2

### Zigbee2mqtt

Es oficial: la integración [Zigbee2mqtt](https://www.zigbee2mqtt.io/) ya está integrada en Gladys 4 🚀

Por tanto, ahora es posible controlar una amplia gama de dispositivos Zigbee mediante un dongle USB Zigbee. Aquí tienes la [lista de dispositivos compatibles](https://www.zigbee2mqtt.io/information/supported_devices.html).

![Zigbee2Mqtt GladysAssistant](../../../static/img/articles/en/gladys-4-2/zigbee2mqtt.png)

Es el resultado de meses de trabajo de muchos miembros de la comunidad. Gracias a [Reno](https://community.gladysassistant.com/u/reno/summary) por el primer desarrollo, gracias a [cicoub13](https://community.gladysassistant.com/u/cicoub13/summary) por retomar el desarrollo y gracias a [lmilcent](https://community.gladysassistant.com/u/lmilcent/summary) por las pruebas.

Por el momento, puede que no todos los dispositivos estén perfectamente gestionados, algo normal ya que no tenemos todos los dispositivos imaginables del planeta. Es posible que haya que hacer algunos ajustes que iremos descubriendo a medida que se use esta integración.

Consulta [la documentación de esta integración](/es/docs/integrations/zigbee2mqtt).

No dudes en dejar tus comentarios en el foro si te encuentras con un dispositivo que no se gestiona bien.

### Amanecer / atardecer

Ahora es posible crear escenas que se activen al atardecer o al amanecer.

![Amanecer](../../../static/img/articles/en/gladys-4-2/sunrise-2.png)

¡Gracias a [Lokkye](https://community.gladysassistant.com/u/lokkye/summary) por el trabajo realizado en esta PR!

### Philips Hue

Hemos actualizado a su última versión la dependencia NPM que usamos en la integración Philips Hue.

Algunos usuarios tenían problemas para detectar un puente Philips Hue en su red porque antes usábamos el escaneo N-UPnP de Philips Hue, que se basa en su API en línea.

Hemos cambiado esta función para que utilice el escaneo UPnP de la red, que se realiza íntegramente en local, sin llamadas a los servidores de Philips Hue. ¡Esto debería solucionar los problemas que tenían algunos usuarios!

### Control del brillo en el panel

Gracias al trabajo de [VonOx](https://community.gladysassistant.com/u/vonox/summary), ahora puedes controlar el brillo de tus bombillas desde el panel.

![Brillo](../../../static/img/articles/en/gladys-4-2/light.png)

### Gladys Plus

¡He seguido trabajando en optimizaciones y rendimiento para mejorar la velocidad de acceso a Gladys Plus!

Investigando, encontré una forma de reducir la carga tanto en los servidores de Gladys Plus como en las instancias locales.

Este cambio mejora drásticamente el rendimiento, y estoy deseando ver en producción cómo se comporta en instancias más grandes (como la de Terdious) o en instancias con conexiones lentas (como la de Mastho).

### Actualización importante de varias dependencias internas

Hemos aprovechado para hacer actualizaciones importantes de algunas de las dependencias que utilizamos:

- De Node 12 -> a Node.js 14 LTS
- De Sequelize 4 -> a Sequelize 6
- Hemos pasado a la última versión de [node-nlp](https://github.com/axa-group/nlp.js), la librería que usamos para el reconocimiento del lenguaje en Gladys. Según las pruebas que hemos hecho, ¡el modelo de procesamiento del lenguaje reconoce mucho mejor las peticiones! Además, se han añadido nuevas frases al módulo meteorológico para tener conversaciones más ricas con Gladys 😄

No todo ha sido fácil de hacer, ¡pero estamos contentos de haberlo conseguido!

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Una nueva imagen de Raspberry Pi OS

Aprovecho para anunciar que tenemos una nueva imagen de Raspberry Pi OS, que generamos automáticamente con el mismo proceso de build que utiliza la Fundación Raspberry Pi.

Esta imagen tiene varias ventajas:

- Siempre está actualizada. Cuando instalas Gladys en una Raspberry Pi, esta imagen busca automáticamente la última versión de Gladys durante la instalación. En el primer arranque, verás una página de espera mientras Gladys se instala automáticamente 🙂

![Nueva imagen de Raspberry Pi OS](../../../static/img/articles/en/gladys-4-2/new-image.jpg)

- Es más sencillo para nosotros, porque ahora podemos generar automáticamente una nueva imagen en cuanto la fundación lanza un nuevo modelo de Raspberry Pi.

Muchas gracias a [VonOx](https://community.gladysassistant.com/u/vonox/summary) por el increíble trabajo realizado. ¡¡No lo habría hecho mejor!!

## Agradecimientos

Esta nueva versión es la demostración perfecta de la fuerza del código abierto: poder hacer juntos lo que no seríamos capaces de hacer solos.

Una vez más, la comunidad de Gladys ha demostrado que está aquí para desarrollar juntos, probar juntos y hacer avanzar este proyecto.

Gracias a todos los que han contribuido a esta versión 👏👏

Pierre-Gilles Leymarie
