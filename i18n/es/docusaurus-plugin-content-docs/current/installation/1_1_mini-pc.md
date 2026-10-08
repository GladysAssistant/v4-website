---
id: mini-pc
title: Instalar Gladys Assistant en un mini-PC
description: "Instala Gladys Assistant en un mini-PC, la opción recomendada: elige el hardware, instala Ubuntu Server y ejecuta Gladys con Docker."
sidebar_label: Instalación en un mini-PC
keywords:
  - gladys mini pc
  - mejor mini pc domótica
  - mini pc servidor doméstico
  - instalar gladys ubuntu server
  - beelink domótica
---

import JsonLd from '@site/src/components/seo/JsonLd';

La instalación en un mini-PC es el método recomendado para sacar el máximo partido a Gladys. Estos pequeños ordenadores son fiables, potentes, eficientes energéticamente y asequibles, lo que los convierte en una solución excelente para el hogar.

:::tip[¿Qué mini-PC comprar?]
Modelos, especificaciones, consumo eléctrico y presupuesto: [El mejor mini-PC para domótica](/es/mini-pc-home-automation/).
:::

## ¿Qué hardware elegir?

Te recomiendo el Beelink Mini S13. Es una máquina increíble a un precio asequible.

Llevo años usando Gladys en un mini-PC Beelink, con un rendimiento excelente y sin ningún problema.

Lo encontrarás en [Amazon](https://www.amazon.com/s?k=Beelink+Mini+S13&tag=gladproj-21).

## Instalar Ubuntu Server en el mini-PC

En internet hay muchos vídeos que explican cómo instalar Ubuntu Server en un mini-PC.

:::warning[¡Conecta tu mini-PC a tu router con un cable Ethernet antes de empezar la instalación!]

**Esto es fundamental.** Si el mini-PC no está conectado a la red durante la instalación de Ubuntu Server, el instalador no podrá descargar los paquetes que necesita y **la opción "Install OpenSSH server" no estará disponible**.

Sin OpenSSH, no podrás conectarte de forma remota a tu mini-PC para instalar Docker y Gladys, y tendrás que repetir toda la instalación.

Así que: conecta **primero** el cable Ethernet, después inicia la instalación y asegúrate de marcar la casilla **"Install OpenSSH server"** durante la configuración.

:::

Te recomiendo este tutorial:

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/n7aEcfDNULc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Instalar Gladys Assistant

Una vez instalado Ubuntu, solo te queda instalar Docker y ejecutar Gladys con nuestra imagen oficial de Docker.

Para ello, sigue nuestra guía detallada: [Instalar Gladys con Docker](/es/docs/installation/docker/).

## Preguntas frecuentes

### ¿Por qué usar un mini-PC en lugar de una Raspberry Pi?

Un mini-PC te ofrece más potencia de CPU, más RAM y un almacenamiento más rápido y fiable que una Raspberry Pi, normalmente por un precio total similar una vez que sumas la caja, la fuente de alimentación y el SSD. Es la opción que recomendamos para que Gladys funcione con fluidez a largo plazo.

### ¿Qué mini-PC se recomienda para Gladys?

Usamos y recomendamos el Beelink Mini S13. Es potente, silencioso, eficiente energéticamente y ejecuta Gladys de forma fiable a largo plazo.

### ¿Qué sistema operativo debo instalar?

Instala Ubuntu Server, añade Docker y ejecuta la imagen oficial de Gladys. El mini-PC funcionará entonces como un pequeño servidor doméstico, siempre encendido, para tu hogar inteligente.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué usar un mini-PC en lugar de una Raspberry Pi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un mini-PC te ofrece más potencia de CPU, más RAM y un almacenamiento más rápido y fiable que una Raspberry Pi, normalmente por un precio total similar una vez que sumas la caja, la fuente de alimentación y el SSD. Es la opción que recomendamos para que Gladys funcione con fluidez a largo plazo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué mini-PC se recomienda para Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usamos y recomendamos el Beelink Mini S13. Es potente, silencioso, eficiente energéticamente y ejecuta Gladys de forma fiable a largo plazo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sistema operativo debo instalar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instala Ubuntu Server, añade Docker y ejecuta la imagen oficial de Gladys. El mini-PC funcionará entonces como un pequeño servidor doméstico, siempre encendido, para tu hogar inteligente.",
        },
      },
    ],
  }}
/>
