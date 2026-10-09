---
id: pilot-wire
title: "Módulo de hilo piloto Zigbee: controla tus radiadores eléctricos en Gladys"
description: "Controla tus radiadores eléctricos con un módulo de hilo piloto Zigbee (fil pilote, NodOn, Legrand) en Gladys Assistant: órdenes de confort, eco y antihielo, en local a través de Zigbee2MQTT."
sidebar_label: Hilo piloto (calefacción)
keywords:
  - hilo piloto zigbee
  - fil pilote zigbee
  - módulo hilo piloto
  - nodon hilo piloto
  - calefacción eléctrica domótica
  - radiador eléctrico hogar inteligente
  - controlar radiador eléctrico zigbee
---

import JsonLd from '@site/src/components/seo/JsonLd';

En Francia, y en algunos países vecinos, casi todos los radiadores eléctricos recientes tienen un **hilo piloto** (*fil pilote*): un cable adicional, normalmente negro, a través del cual el radiador recibe órdenes de funcionamiento. Es la forma más barata y sencilla de hacer controlable la calefacción eléctrica, sin cambiar los radiadores.

Con un **módulo de hilo piloto Zigbee** y Gladys Assistant, envías esas órdenes desde tu panel de control y tus escenas, completamente en local: sin suscripción, sin nube del fabricante, y la calefacción sigue funcionando aunque se caiga tu conexión a internet.

## Cómo funciona el hilo piloto

El hilo piloto no transporta la potencia de calefacción: transporta una **instrucción**. El radiador conserva su propio termostato, ajustado a tu temperatura de confort, y el hilo piloto le indica qué hacer con él.

Hay cuatro órdenes estándar:

- **Confort**: el radiador calienta hasta la temperatura ajustada en su propio selector.
- **Eco**: calienta unos 3,5 °C por debajo de la temperatura de confort.
- **Antihielo**: mantiene unos 7 °C, para una ausencia prolongada.
- **Apagado**: el radiador deja de calentar.

Los módulos y radiadores de "6 órdenes" añaden **Confort -1** y **Confort -2**, es decir, 1 °C y 2 °C por debajo de la temperatura de confort, útiles para una bajada suave en lugar de pasar directamente a eco.

## Elegir un módulo de hilo piloto Zigbee

Un módulo de hilo piloto se coloca entre tu instalación eléctrica y el radiador: recibe órdenes por Zigbee y aplica la orden correspondiente en el hilo piloto. Dos módulos aparecen con frecuencia en la comunidad de Gladys, y ambos son reconocidos por Zigbee2MQTT:

- **NodOn SIN-4-FP-21**: un micromódulo que cabe en la caja de conexión detrás del radiador o en el cuadro eléctrico. Compacto, de 6 órdenes y el más utilizado.
- **Legrand 064882**: el módulo de hilo piloto de Legrand, con el mismo principio, para el cuadro eléctrico o una caja empotrada.

Algunas cosas que debes comprobar antes de comprar:

- **6 órdenes en lugar de 4** si tus radiadores las admiten: así podrás bajar la temperatura de forma progresiva.
- **Espacio disponible**: la caja de conexión detrás de un radiador suele ser estrecha. Comprueba las dimensiones del módulo o instálalo en el lado del cuadro eléctrico.
- **Un módulo por radiador** si quieres controlar cada habitación de forma independiente. Un único módulo al principio de un circuito controla todos los radiadores de ese circuito a la vez.

:::warning
Instalar un módulo de hilo piloto implica trabajar en tu instalación eléctrica de 230 V. Desconecta el interruptor automático correspondiente antes de tocar nada y, si no te sientes cómodo con el cableado, llama a un electricista. Un error en el hilo piloto puede dañar el radiador.
:::

## Emparejar el módulo en Gladys

El módulo se conecta a Gladys a través de [Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt), como cualquier otro dispositivo Zigbee:

1. En Gladys, abre `Integraciones / Zigbee2Mqtt` y luego el menú **Descubrir**.
2. Haz clic en **Permitir la unión**.
3. Pon el módulo en modo de emparejamiento. En la mayoría de los módulos, basta con mantener pulsado el botón frontal hasta que el LED parpadee.
4. El módulo aparece en la lista con sus funciones detectadas. Ponle un nombre, asígnalo a una habitación y guárdalo.
5. Por seguridad, vuelve a desactivar la unión cuando hayas terminado.

Si el módulo no aparece, acércalo al coordinador para emparejarlo o consulta la sección de solución de problemas de la [documentación de Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt).

## Controlar tu calefacción desde Gladys

Desde Gladys 4.48, el **modo de hilo piloto** es una función propia: el módulo expone un selector de modo, no un simple interruptor de encendido/apagado.

- En el **panel de control**, añade el módulo a un widget "Dispositivos": eliges la orden (confort, eco, antihielo, apagado) en una lista desplegable.
- En las **escenas**, puedes cambiar el modo de uno o varios radiadores, y aquí es donde se pone interesante.

Algunas automatizaciones que merece la pena crear:

- **Bajada nocturna**: pasa los dormitorios a eco a las 23:00 y vuelve a confort a las 6:30, con un [desencadenador programado](/es/docs/scenes/scheduled-trigger).
- **Casa vacía**: baja todos los radiadores a eco cuando la [casa se quede vacía](/es/docs/scenes/house-empty) y vuelve a confort cuando alguien regrese.
- **Ausencia prolongada**: pasa a antihielo durante las vacaciones y vuelve a confort unas horas antes de tu regreso.
- **Días rojos de EDF Tempo**: si tienes la [tarifa EDF Tempo](/es/docs/scenes/edf-tempo), bajar la calefacción los días rojos es el ahorro más rentable de toda la casa, ya que la calefacción es el mayor consumidor.

Combina esto con el [seguimiento del consumo eléctrico](/es/docs/integrations/enedis) y verás directamente el efecto de esas escenas en tu factura.

## Preguntas frecuentes

### ¿Qué es un módulo de hilo piloto Zigbee?

Es un pequeño módulo eléctrico colocado entre tu instalación y un radiador eléctrico, que aplica en su hilo piloto la orden que envías por Zigbee: confort, eco, antihielo o apagado. Permite controlar un radiador estándar desde una plataforma de domótica como Gladys, sin cambiar el radiador.

### ¿Qué módulo de hilo piloto Zigbee funciona con Gladys?

El NodOn SIN-4-FP-21 es el más utilizado en la comunidad de Gladys, y el Legrand 064882 cumple la misma función. Ambos son reconocidos por Zigbee2MQTT y exponen su modo de hilo piloto en Gladys. Elige preferentemente un módulo de 6 órdenes si tus radiadores lo admiten, y comprueba el espacio disponible en la caja de conexión detrás del radiador.

### ¿Cuáles son las órdenes del hilo piloto?

Las cuatro órdenes estándar son Confort (el radiador calienta hasta la temperatura ajustada en su selector), Eco (unos 3,5 °C menos), Antihielo (unos 7 °C) y Apagado. Los módulos y radiadores de 6 órdenes añaden Confort -1 y Confort -2, una bajada de 1 °C y 2 °C.

### ¿El control de la calefacción funciona sin internet?

Sí. El módulo se comunica por Zigbee con el dongle USB conectado a tu máquina Gladys, y Gladys funciona en tu casa. Tus escenas de calefacción siguen funcionando aunque se caiga tu conexión a internet, a diferencia de los termostatos conectados que dependen de la nube de su fabricante.

### ¿Necesito un módulo de hilo piloto por radiador?

Para controlar cada habitación de forma independiente, sí: un módulo por radiador. Si te basta con controlar varios radiadores a la vez, un único módulo al principio del circuito en el cuadro eléctrico abarca todos los radiadores de ese circuito.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un módulo de hilo piloto Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un pequeño módulo eléctrico colocado entre tu instalación y un radiador eléctrico, que aplica en su hilo piloto la orden que envías por Zigbee: confort, eco, antihielo o apagado. Permite controlar un radiador estándar desde una plataforma de domótica como Gladys, sin cambiar el radiador.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué módulo de hilo piloto Zigbee funciona con Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El NodOn SIN-4-FP-21 es el más utilizado en la comunidad de Gladys, y el Legrand 064882 cumple la misma función. Ambos son reconocidos por Zigbee2MQTT y exponen su modo de hilo piloto en Gladys. Elige preferentemente un módulo de 6 órdenes si tus radiadores lo admiten, y comprueba el espacio disponible en la caja de conexión detrás del radiador.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son las órdenes del hilo piloto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las cuatro órdenes estándar son Confort (el radiador calienta hasta la temperatura ajustada en su selector), Eco (unos 3,5 °C menos), Antihielo (unos 7 °C) y Apagado. Los módulos y radiadores de 6 órdenes añaden Confort -1 y Confort -2, una bajada de 1 °C y 2 °C.",
        },
      },
      {
        "@type": "Question",
        name: "¿El control de la calefacción funciona sin internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El módulo se comunica por Zigbee con el dongle USB conectado a tu máquina Gladys, y Gladys funciona en tu casa. Tus escenas de calefacción siguen funcionando aunque se caiga tu conexión a internet, a diferencia de los termostatos conectados que dependen de la nube de su fabricante.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito un módulo de hilo piloto por radiador?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para controlar cada habitación de forma independiente, sí: un módulo por radiador. Si te basta con controlar varios radiadores a la vez, un único módulo al principio del circuito en el cuadro eléctrico abarca todos los radiadores de ese circuito.",
        },
      },
    ],
  }}
/>
