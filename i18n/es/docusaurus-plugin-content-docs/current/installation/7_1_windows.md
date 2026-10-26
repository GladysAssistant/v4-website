---
id: windows
title: "Gladys Assistant en Windows: posible, pero no recomendado"
description: "¿Se puede instalar Gladys Assistant en un PC con Windows? Técnicamente sí, pero no lo recomendamos: los dongles USB, el Bluetooth y la detección en red funcionan mal. Esto es lo que te aconsejamos."
sidebar_label: Windows (no recomendado)
keywords:
  - gladys assistant windows
  - instalar gladys windows
  - gladys windows 11
  - gladys docker desktop
  - domótica pc windows
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Respuesta corta: no recomendamos ejecutar Gladys Assistant en Windows.**

Gladys está pensado para funcionar en Linux, dentro de Docker. En Windows, el propio Docker se ejecuta dentro de una máquina virtual Linux oculta (WSL 2). Gladys ve entonces esa máquina virtual y no tu PC: no llega a tus dongles USB, a tu adaptador Bluetooth ni a tu red local como lo necesita. La mayor parte de lo que hace útil un hogar inteligente deja de funcionar o requiere apaños frágiles.

La buena noticia: una máquina dedicada a Gladys cuesta poco y es mucho más sencilla.

## Lo que no funciona con Docker Desktop

Si inicias Gladys con Docker Desktop en Windows, esto es lo que te vas a encontrar:

- **Dongles USB Zigbee y Z-Wave**: el dongle está conectado a Windows, no a la máquina virtual de Docker. Pasárselo requiere herramientas adicionales (`usbipd-win`) y suele romperse tras un reinicio.
- **Bluetooth**: no está disponible dentro de la máquina virtual de Docker, así que no hay sensores Bluetooth ni emparejamiento Matter por Bluetooth.
- **Red local**: en Windows, la opción `--network=host` del [comando de instalación](/es/docs/installation/docker) no da a Gladys acceso a tu red doméstica. `gladysassistant.local` no funciona, y la detección de dispositivos en la red (Matter, cámaras, Philips Hue, escaneo de red…) es poco fiable o no funciona en absoluto.
- **Reiniciar y apagar desde Gladys**: estas acciones controlan un host Linux, así que en Windows no hacen nada.
- **Disponibilidad**: un hogar inteligente debe funcionar las 24 horas. Un PC de sobremesa entra en suspensión, se apaga, y las actualizaciones de Windows lo reinician cuando quieren: tus escenas y tu alarma se detienen con él.

## Lo que recomendamos en su lugar

### Lo mejor: una pequeña máquina dedicada

Un mini-PC o una Raspberry Pi consume unos pocos vatios, está siempre encendido y ejecuta Gladys con la instalación oficial, sin nada que sortear.

- 👉 [Instalar Gladys en un mini-PC](/es/docs/installation/mini-pc) (recomendado)
- 👉 [Instalar Gladys en una Raspberry Pi](/es/docs/installation/raspberry-pi)

Si ya tienes un NAS o un servidor en casa, también puedes usarlo: consulta las guías de [Synology](/es/docs/installation/synology) y [Unraid](/es/docs/installation/unraid), o la [guía de instalación con Docker](/es/docs/installation/docker) para cualquier servidor Linux.

### Si de verdad quieres usar tu PC con Windows: una máquina virtual Linux

Si quieres probar Gladys en el PC que ya tienes, ejecútalo en una **máquina virtual Linux** y no con Docker Desktop. Es también el enfoque que documenta Home Assistant para Windows.

1. Instala un hipervisor como [VirtualBox](https://www.virtualbox.org/).
2. Crea una máquina virtual con **2 núcleos**, **4 GB de RAM** y un disco de **32 GB**, e instala en ella Debian o Ubuntu Server.
3. Configura su adaptador de red como **Adaptador puente** (Bridged Adapter), para que la máquina virtual tenga su propia dirección en tu red doméstica.
4. Pásale tu dongle Zigbee con un **filtro USB** en los ajustes USB de la máquina virtual (o usa un [coordinador de red](/es/docs/integrations/zigbee2mqtt#use-a-network-coordinator), que no necesita USB).
5. Sigue la [guía de instalación con Docker](/es/docs/installation/docker) dentro de la máquina virtual.

Ten en cuenta que el PC debe permanecer encendido y que la suspensión debe estar desactivada. Por eso esta configuración sirve para probar Gladys, pero una máquina dedicada sigue siendo la mejor opción a largo plazo.

## Preguntas frecuentes

### ¿Puedo instalar Gladys Assistant con Docker Desktop en Windows?

Gladys arranca, pero sin acceso a los dongles USB, al Bluetooth y a tu red local, la mayoría de las integraciones no funcionan bien. No damos soporte a esta configuración. Usa un mini-PC o una Raspberry Pi dedicados o, como mínimo, una máquina virtual Linux con red en modo puente.

### ¿Y con WSL 2?

No es mejor: Docker Desktop ya funciona sobre WSL 2, y WSL 2 tiene los mismos límites con el USB, el Bluetooth y la red local.

### ¿Y en un Mac?

El problema es el mismo: en macOS, Docker Desktop también ejecuta Docker en una máquina virtual oculta. Usa una máquina dedicada para Gladys.

### ¿Existe una versión de Gladys para Windows?

No. Gladys se ejecuta en Docker sobre Linux, lo que cubre mini-PC, Raspberry Pi, NAS y servidores. Puedes controlarlo desde cualquier navegador en Windows y desde tu teléfono.

### Soy desarrollador en Windows, ¿cómo contribuyo a Gladys?

Es otro uso: para programar en Gladys desde Windows, sigue la [guía del entorno de desarrollo en Windows](/es/docs/dev/setup-development-environment-windows), que usa WSL 2 y VS Code.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo instalar Gladys Assistant con Docker Desktop en Windows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys arranca, pero sin acceso a los dongles USB, al Bluetooth y a tu red local, la mayoría de las integraciones no funcionan bien. No damos soporte a esta configuración. Usa un mini-PC o una Raspberry Pi dedicados o, como mínimo, una máquina virtual Linux con red en modo puente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Y con WSL 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es mejor: Docker Desktop ya funciona sobre WSL 2, y WSL 2 tiene los mismos límites con el USB, el Bluetooth y la red local.",
        },
      },
      {
        "@type": "Question",
        name: "¿Y en un Mac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El problema es el mismo: en macOS, Docker Desktop también ejecuta Docker en una máquina virtual oculta. Usa una máquina dedicada para Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "¿Existe una versión de Gladys para Windows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Gladys se ejecuta en Docker sobre Linux, lo que cubre mini-PC, Raspberry Pi, NAS y servidores. Puedes controlarlo desde cualquier navegador en Windows y desde tu teléfono.",
        },
      },
      {
        "@type": "Question",
        name: "Soy desarrollador en Windows, ¿cómo contribuyo a Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es otro uso: para programar en Gladys desde Windows, sigue la guía del entorno de desarrollo en Windows, que usa WSL 2 y VS Code.",
        },
      },
    ],
  }}
/>
