---
id: intro
title: Integraciones de Gladys Assistant
sidebar_label: Introducción
slug: /integrations/
description: "Gladys Assistant es compatible con Zigbee (Zigbee2MQTT), Matter, MQTT, Shelly, Sonos, cámaras y miles de dispositivos. Protocolos abiertos primero, además de integraciones externas para añadir cualquier otro dispositivo o servicio en un clic."
---

Gladys Assistant es un **proyecto de código abierto**, desarrollado y mantenido por una **comunidad de apasionados de la domótica**.  
Nuestra misión: hacer que el hogar inteligente sea **sencillo, local y respetuoso con la privacidad**.

Todo el código fuente está disponible en [GitHub](https://github.com/GladysAssistant/Gladys).

## Nuestra visión

Conectar dispositivos a Gladys no debería depender de una nube cerrada ni de un único fabricante. Apostamos en primer lugar por los **protocolos abiertos**, por **Matter y Zigbee** como estándares a largo plazo, y por las **integraciones externas** para todo lo demás.

En la práctica, esto se traduce en dos enfoques complementarios:

1. **Integraciones nativas** para protocolos abiertos (Zigbee, Matter, MQTT), incluidas en Gladys
2. **Integraciones externas**: integraciones de la comunidad empaquetadas como contenedores Docker e instalables en un clic, para cubrir cualquier otro dispositivo o servicio

## Protocolos abiertos primero

Estas son las integraciones que recomendamos para cualquier nueva instalación:

- [Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt/): miles de dispositivos Zigbee, control local, sin nube
- [Matter](/es/docs/integrations/matter/): el estándar de la industria, 100 % local, respaldado por las mayores marcas
- [MQTT](/es/docs/integrations/mqtt/): el pegamento universal para proyectos DIY y sensores personalizados

En esta documentación encontrarás guías dedicadas: [Shelly](/es/docs/integrations/external/shelly/), [Sonos](/es/docs/integrations/sonos/), [cámaras](/es/docs/integrations/camera/) y muchas más en la barra lateral.

## Matter: el futuro del hogar inteligente

**Matter es el futuro del hogar inteligente.**  
Este protocolo abierto y local cuenta con el respaldo de los mayores nombres del sector. Es moderno, seguro y funciona sobre Wi-Fi, Thread y Ethernet.

¿Quieres saber más? Lee la [documentación de Matter](/es/docs/integrations/matter/).

## Integraciones externas

¿Tu dispositivo o servicio no está cubierto por una integración nativa? Las **integraciones externas** son la forma más rápida de añadirlo, y cualquiera puede crear y publicar una.

Una integración externa es un pequeño programa empaquetado como **contenedor Docker** y publicado en un repositorio público de GitHub. Gladys lo ejecuta en un entorno aislado y seguro y se comunica con él a través de una API dedicada. Desde el punto de vista del usuario:

- Explora el catálogo de integraciones de la comunidad directamente en Gladys
- Instala la que necesites en **un clic**: Gladys descarga la imagen, la inicia y genera su interfaz
- O instálala directamente desde la URL de un repositorio de GitHub

Como cada una se ejecuta en su propio contenedor aislado, las integraciones externas pueden escribirse en cualquier lenguaje y publicarse por cualquiera, sin revisión previa, sin dejar de ser seguras para tu instancia de Gladys.

👉 **[Explora el catálogo completo de integraciones externas](/es/docs/integrations/external/)**, actualizado en tiempo real desde la tienda de la comunidad.

¿Quieres crear una? Las integraciones externas están pensadas para ser la **forma más sencilla de crear y publicar una integración**, sin pull request y sin validación. Consulta la [guía para desarrolladores de integraciones externas](/es/docs/dev/external-integrations/).

El resto de esta sección documenta las **integraciones nativas**, las que vienen incluidas en Gladys.

## Otras opciones

Para configuraciones personalizadas o experimentales, también puedes usar:

- [Node-RED](/es/docs/integrations/node-red/) y MQTT para crear tus propias automatizaciones
- El [foro](https://community.gladysassistant.com/) para hablar de un dispositivo concreto o de una necesidad de integración

## ¿Preguntas o ideas?

¡Únete a la [comunidad de Gladys](https://community.gladysassistant.com/)!

Tanto si quieres hacer una pregunta, probar una nueva integración o proponer una, siempre serás bienvenido.
