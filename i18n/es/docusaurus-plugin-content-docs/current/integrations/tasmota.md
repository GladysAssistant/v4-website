---
id: tasmota
title: "Tasmota y Gladys: flashea tus dispositivos y contrólalos en local por MQTT"
description: "Conecta dispositivos Tasmota a Gladys Assistant: flashea el firmware de código abierto en tu dispositivo ESP8266 o ESP32 con el instalador web, configura MQTT y contrólalo todo en local."
sidebar_label: Tasmota
keywords:
  - tasmota
  - tasmota mqtt
  - tasmota gladys
  - tasmota web installer
  - tasmota esp8266
  - tasmota esp32
  - tasmota local
  - flashear tasmota
  - configurar tasmota
---

import JsonLd from '@site/src/components/seo/JsonLd';

[Tasmota](https://tasmota.github.io/docs/) es un firmware gratuito y de código abierto para dispositivos basados en ESP8266, ESP8285 y ESP32. Sustituye el firmware en la nube del fabricante en enchufes inteligentes, interruptores, bombillas y sensores para que funcionen **completamente en local**, sin cuenta del fabricante y sin depender de internet, y los expone por MQTT, HTTP o puerto serie.

Como Tasmota habla MQTT estándar, encaja perfectamente con Gladys Assistant: una vez flasheados, tus dispositivos se detectan y se controlan en local, en tu propia red, sin pasar por ninguna nube de terceros.

Para conectar un dispositivo Tasmota a Gladys hay tres pasos:

- flashear tu dispositivo con el firmware Tasmota
- configurar MQTT en el dispositivo
- añadirlo en `Integraciones / Tasmota` en Gladys

## ¿Por qué usar Tasmota con Gladys?

- **Totalmente local y privado**: el dispositivo ya no "llama a casa" a los servidores del fabricante. Solo se comunica con tu bróker MQTT local y con Gladys.
- **Sin nube ni suscripción**: Tasmota es gratuito y de código abierto, y sigue funcionando aunque el fabricante original cierre su servicio.
- **Reutiliza hardware barato**: muchos enchufes e interruptores inteligentes asequibles (Sonoff y otros dispositivos basados en ESP) se pueden volver a flashear en lugar de tirarlos.
- **Fiable y rápido**: los comandos locales no dependen de tu conexión a internet, así que tus automatizaciones se ejecutan al instante.

:::tip[¿Tasmota o Zigbee?]
Tasmota funciona en dispositivos wifi, así que cada uno se conecta directamente a tu router, lo que resulta práctico para unos cuantos enchufes e interruptores conectados a la red eléctrica. Para sensores con batería y grandes cantidades de dispositivos, una red mallada [Zigbee](./zigbee2mqtt.md) de bajo consumo suele ser más adecuada. Ambos funcionan en local, ambos van de maravilla con Gladys y puedes combinarlos. Si te decides por Zigbee, consulta nuestra [guía de compra de dongles Zigbee](/es/best-zigbee-dongle/).
:::

## Flashear tu dispositivo con Tasmota

La forma más sencilla de instalar Tasmota es el **instalador web** oficial: [tasmota.github.io/install](https://tasmota.github.io/install/). Flashea tu dispositivo directamente desde un navegador Chrome o Edge por USB (mediante la API WebSerial), sin tener que instalar ningún software adicional.

Es compatible con todos los dispositivos basados en Espressif ESP8266, ESP8285, ESP32, ESP32-S y ESP32-C3.

Si tu dispositivo necesita un flasheo manual, sigue la [guía de instalación de Tasmota](https://tasmota.github.io/docs/Getting-Started/). En internet hay muchos tutoriales específicos para cada dispositivo; encontrarás el adecuado para tu modelo exacto buscando su nombre junto con "Tasmota".

## Configurar MQTT en el dispositivo

Una vez flasheado, abre la página web del dispositivo (su dirección IP en tu red) y configura MQTT como se describe en la [documentación MQTT de Tasmota](https://tasmota.github.io/docs/MQTT/).

Haz clic en el menú `Configuration`.

![Menú de Tasmota](../../../../../static/img/docs/en/configuration/tasmota/tasmota-home.png)

Haz clic en el menú `Configure MQTT`.

![Configuración de Tasmota](../../../../../static/img/docs/en/configuration/tasmota/tasmota-configuration.png)

Después, rellena el formulario de configuración con los datos de tu bróker MQTT:

- `Host`: URL del bróker MQTT
- `Port`: puerto del bróker MQTT
- `User`: usuario para conectarse al bróker MQTT
- `Password`: contraseña para conectarse al bróker MQTT
- `Topic`: un identificador único para este dispositivo

![Tasmota MQTT](../../../../../static/img/docs/en/configuration/tasmota/tasmota-mqtt.png)

:::note
Gladys incluye su propio bróker MQTT. Si todavía no has configurado ninguno, instala primero la [integración MQTT](./mqtt.md) en Gladys y después apunta tus dispositivos Tasmota hacia él.
:::

## Añadir el dispositivo a Gladys

Una vez configurado el dispositivo, vuelve a Gladys:

1. abre la página `Integraciones -> Tasmota`
2. selecciona el menú `Detección MQTT`
3. haz clic en el botón `Escanear` (si el dispositivo aún no aparece en la lista)
4. después haz clic en `Guardar`
5. ¡y listo!

Ahora puedes controlar tu dispositivo Tasmota desde Gladys, añadirlo a tus paneles de control y usarlo en tus [escenas](/es/docs/scenes/intro/), todo en local.

## Preguntas frecuentes

### ¿Es Tasmota compatible con Gladys Assistant?

Sí. Tasmota se comunica por MQTT y Gladys tiene una integración nativa de Tasmota que detecta y controla los dispositivos Tasmota de tu red local. Solo tienes que flashear el firmware, configurar MQTT en el dispositivo y buscarlo en `Integraciones / Tasmota`.

### ¿Funciona Tasmota sin la nube ni internet?

Sí. Esa es precisamente la razón de ser de Tasmota: sustituye el firmware en la nube del fabricante por un control local mediante MQTT y HTTP. Una vez flasheado y vinculado con Gladys, tu dispositivo funciona completamente en tu red local, incluso sin conexión a internet.

### ¿Qué dispositivos pueden ejecutar Tasmota?

Cualquier dispositivo basado en un chip Espressif ESP8266, ESP8285, ESP32, ESP32-S o ESP32-C3 se puede flashear con Tasmota. Esto incluye muchos enchufes inteligentes, interruptores, relés, bombillas y sensores (como numerosos dispositivos Sonoff).

### ¿Cómo flasheo Tasmota?

El método más sencillo es el instalador web oficial en tasmota.github.io/install, que flashea tu dispositivo directamente desde un navegador Chrome o Edge por USB, sin instalar ningún software. También es posible flashearlo manualmente siguiendo la guía de instalación de Tasmota.

### ¿Necesito un bróker MQTT aparte para Tasmota?

Necesitas un bróker MQTT, pero Gladys ya incluye uno. Instala la integración MQTT en Gladys y apunta los ajustes MQTT de tus dispositivos Tasmota a ese bróker. Gladys los detectará automáticamente.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es Tasmota compatible con Gladys Assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Tasmota se comunica por MQTT y Gladys tiene una integración nativa de Tasmota que detecta y controla los dispositivos Tasmota de tu red local. Flasheas el firmware, configuras MQTT en el dispositivo y después lo buscas en Integraciones / Tasmota.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona Tasmota sin la nube ni internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Tasmota sustituye el firmware en la nube del fabricante por un control local mediante MQTT y HTTP. Una vez flasheado y vinculado con Gladys, tu dispositivo funciona completamente en tu red local, incluso sin conexión a internet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué dispositivos pueden ejecutar Tasmota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier dispositivo basado en un chip Espressif ESP8266, ESP8285, ESP32, ESP32-S o ESP32-C3 se puede flashear con Tasmota. Esto incluye muchos enchufes inteligentes, interruptores, relés, bombillas y sensores, como numerosos dispositivos Sonoff.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo flasheo Tasmota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El método más sencillo es el instalador web oficial en tasmota.github.io/install, que flashea tu dispositivo directamente desde un navegador Chrome o Edge por USB, sin instalar ningún software. También es posible flashearlo manualmente siguiendo la guía de instalación de Tasmota.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito un bróker MQTT aparte para Tasmota?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Necesitas un bróker MQTT, pero Gladys ya incluye uno. Instala la integración MQTT en Gladys y apunta los ajustes MQTT de tus dispositivos Tasmota a ese bróker; Gladys los detectará automáticamente.",
        },
      },
    ],
  }}
/>
