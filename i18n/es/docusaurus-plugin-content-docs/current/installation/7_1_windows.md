---
id: windows
title: "Gladys Assistant en Windows: posible, pero no recomendado"
description: "¿Se puede instalar Gladys Assistant en un PC con Windows? Técnicamente sí, pero no lo recomendamos: los dongles USB, el Bluetooth y la detección en red funcionan mal. Esto es lo que te aconsejamos, con Gladys Assistant OS."
sidebar_label: Windows (no recomendado)
keywords:
  - gladys assistant windows
  - instalar gladys windows
  - gladys windows 11
  - gladys docker desktop
  - gladys virtualbox
  - domótica pc windows
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Respuesta corta: no recomendamos ejecutar Gladys Assistant en Windows.**

Gladys está pensado para funcionar en Linux, dentro de Docker. En Windows, el propio Docker se ejecuta dentro de una máquina virtual Linux oculta (WSL 2). Gladys ve entonces esa máquina virtual y no tu PC: no llega a tus dongles USB, a tu adaptador Bluetooth ni a tu red local como lo necesita. La mayor parte de lo que hace útil un hogar inteligente deja de funcionar o requiere apaños frágiles.

La buena noticia: con [Gladys Assistant OS](/es/docs/installation/mini-pc), nuestro instalador oficial, una máquina dedicada a Gladys está lista en unos 30 minutos, sin ninguna línea de comandos. Y puedes prepararlo todo desde tu PC con Windows.

## Lo que no funciona con Docker Desktop

Si inicias Gladys con Docker Desktop en Windows, o con Docker instalado en una distribución WSL 2 (Ubuntu en WSL, por ejemplo), esto es lo que te vas a encontrar:

- **Dongles USB Zigbee y Z-Wave**: el dongle está conectado a Windows, no a la máquina virtual de Docker. Pasárselo requiere herramientas adicionales (`usbipd-win`) y suele romperse tras un reinicio.
- **Bluetooth**: no está disponible dentro de la máquina virtual de Docker, así que no hay sensores Bluetooth ni emparejamiento Matter por Bluetooth.
- **Red local**: Docker puede reenviar las conexiones normales a Gladys, pero incluso con la opción `--network=host` del [comando de instalación](/es/docs/installation/docker), Gladys no tiene acceso directo a la red de tu PC. `gladysassistant.local` no funciona, y la detección de dispositivos en la red (Matter, cámaras, Philips Hue, escaneo de red…) es poco fiable o no funciona en absoluto.
- **Reiniciar y apagar desde Gladys**: estas acciones controlan un host Linux, así que en Windows no hacen nada.
- **Disponibilidad**: un hogar inteligente debe funcionar las 24 horas. Un PC de sobremesa entra en suspensión, se apaga, y las actualizaciones de Windows lo reinician cuando quieren: tus escenas y tu alarma se detienen con él.

## Lo que recomendamos en su lugar

### Lo mejor: un mini-PC con Gladys Assistant OS

Un mini-PC consume unos pocos vatios, está siempre encendido y ejecuta Gladys sin nada que sortear. Con [Gladys Assistant OS](/es/docs/installation/mini-pc), grabas el instalador en una memoria USB desde tu PC con Windows, arrancas el mini-PC desde ella y respondes a unas pocas preguntas: Gladys se instala solo y después se mantiene actualizado por sí mismo.

- 👉 [Instalar Gladys en un mini-PC con Gladys Assistant OS](/es/docs/installation/mini-pc) (recomendado)
- 👉 [Instalar Gladys en una Raspberry Pi](/es/docs/installation/raspberry-pi), con nuestra imagen oficial

**Un PC antiguo que ya no uses también puede convertirse en tu caja Gladys.** Gladys Assistant OS se instala en cualquier ordenador con procesador Intel o AMD que arranque en modo UEFI, con un SSD de al menos 16 GB y un puerto Ethernet. Sustituye a Windows: el disco de ese PC se borra.

Si ya tienes un servidor o un NAS en casa, también puedes usarlo: consulta las guías de [Proxmox](/es/docs/installation/proxmox), [Synology](/es/docs/installation/synology) y [Unraid](/es/docs/installation/unraid), o la [guía de instalación con Docker](/es/docs/installation/docker) para cualquier servidor Linux.

### Para probar Gladys en tu PC con Windows: una máquina virtual

Si quieres probar Gladys en el PC que ya usas, instala Gladys Assistant OS en una **máquina virtual** y no con Docker Desktop. La máquina virtual se comporta entonces como un mini-PC en tu red. Es también el enfoque que documenta Home Assistant para Windows.

1. Instala [VirtualBox](https://www.virtualbox.org/) y descarga la [imagen de Gladys Assistant OS](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso) (un archivo `.iso` de unos 2 GB).
2. En VirtualBox, haz clic en **Nueva**. Selecciona la imagen `gladys-assistant-installer-amd64.iso`, elige el tipo **Linux** y la versión **Ubuntu (64-bit)**. Si VirtualBox ofrece una instalación desatendida (*Unattended Installation*), desactívala marcando **Skip Unattended Installation**: el instalador de Gladys Assistant OS hace sus propias preguntas. Dale a la máquina virtual **2 núcleos**, **4 GB de RAM** (de 6 a 8 GB en cuanto uses Zigbee2MQTT y varias integraciones) y un disco de **32 GB**.
3. Antes de arrancarla, abre su **Configuración**:
   - en **Sistema**, activa la opción **EFI** (*Enable EFI*): Gladys Assistant OS solo arranca en modo UEFI;
   - en **Red**, configura el adaptador como **Adaptador puente** (*Bridged Adapter*) y, en **Nombre**, elige la tarjeta de red que usa tu PC (Ethernet o Wi-Fi), para que la máquina virtual tenga su propia dirección en tu red doméstica.
4. Arranca la máquina virtual y responde a las preguntas del instalador como en un mini-PC: consulta el [paso 4 de la guía del mini-PC](/es/docs/installation/mini-pc#installer-questions). Solo se borra el disco virtual de la máquina virtual, nunca el disco de tu PC.
5. Cuando el instalador muestre **Installation complete!**, quita primero la imagen para que no vuelva a arrancar el instalador: en el menú de la ventana de la máquina virtual, en **Dispositivos > Unidades ópticas** (*Devices > Optical Drives*), retira el disco de la unidad virtual. Después selecciona **Reboot Now**.
6. Gladys se instala solo en este primer arranque. Cuando la ventana de la máquina virtual muestre **Gladys Assistant está listo**, abre **`http://gladysassistant.local`** en tu navegador en Windows. Si ese nombre no se abre, usa la dirección que aparece debajo en la ventana de la máquina virtual (por ejemplo `http://192.168.1.42`).

Para usar tus dispositivos:

- **Dongle Zigbee**: conéctalo al PC y, en los ajustes **USB** de la máquina virtual, activa el **controlador USB 3.0 (xHCI)** y añade un **filtro USB** para tu dongle: VirtualBox se lo pasa a la máquina virtual cada vez que arranca. Si el dongle no aparece en la máquina virtual, o se desconecta continuamente, un [coordinador de red](/es/docs/integrations/zigbee2mqtt#use-a-network-coordinator) evita el USB por completo.
- **Bluetooth**: para usar sensores Bluetooth o emparejar dispositivos Matter por Bluetooth, pasa del mismo modo un adaptador Bluetooth USB a la máquina virtual, con otro filtro USB, y después instala BlueZ en la máquina virtual: `sudo apt install -y bluez`.

Ten en cuenta que el PC debe permanecer encendido y que la suspensión debe estar desactivada. Por eso esta configuración sirve para probar Gladys, pero una máquina dedicada sigue siendo la mejor opción a largo plazo. Cuando des el paso, una [copia de seguridad de Gladys Plus](/es/docs/installation/migrate) lleva toda tu instalación a la nueva máquina.

¿Prefieres gestionar el sistema tú mismo? Instala en su lugar Debian o Ubuntu Server en la máquina virtual y sigue la [guía de instalación con Docker](/es/docs/installation/docker).

## Preguntas frecuentes

### ¿Puedo instalar Gladys Assistant con Docker Desktop en Windows?

Gladys arranca, pero sin acceso a los dongles USB, al Bluetooth y a tu red local, la mayoría de las integraciones no funcionan bien. No damos soporte a esta configuración. Usa un mini-PC dedicado instalado con Gladys Assistant OS o, como mínimo, Gladys Assistant OS en una máquina virtual con red en modo puente.

### ¿Y con WSL 2?

No es mejor: Docker Desktop ya funciona sobre WSL 2, y Docker instalado directamente en una distribución WSL 2 (como Ubuntu) se ejecuta en la misma máquina virtual oculta, con los mismos límites con el USB, el Bluetooth y la red local.

### ¿Puedo convertir mi viejo PC con Windows en una caja Gladys?

Sí, si lo dedicas a Gladys: Gladys Assistant OS sustituye Windows por Ubuntu Server y Gladys, y mantiene Gladys actualizado. El PC necesita un procesador Intel o AMD que arranque en modo UEFI, un SSD de al menos 16 GB y un puerto Ethernet. Su disco se borra: haz antes una copia de tus archivos.

### ¿Y en un Mac?

El problema es el mismo: en macOS, Docker Desktop también ejecuta Docker en una máquina virtual oculta. Usa una máquina dedicada para Gladys.

### ¿Existe una versión de Gladys para Windows?

No. Gladys se ejecuta en Docker sobre Linux, lo que cubre mini-PC, Raspberry Pi, NAS y servidores. En un mini-PC, Gladys Assistant OS lo instala todo por ti. Puedes controlar Gladys desde cualquier navegador en Windows y desde tu teléfono.

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
          text: "Gladys arranca, pero sin acceso a los dongles USB, al Bluetooth y a tu red local, la mayoría de las integraciones no funcionan bien. No damos soporte a esta configuración. Usa un mini-PC dedicado instalado con Gladys Assistant OS o, como mínimo, Gladys Assistant OS en una máquina virtual con red en modo puente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Y con WSL 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es mejor: Docker Desktop ya funciona sobre WSL 2, y Docker instalado directamente en una distribución WSL 2 (como Ubuntu) se ejecuta en la misma máquina virtual oculta, con los mismos límites con el USB, el Bluetooth y la red local.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo convertir mi viejo PC con Windows en una caja Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, si lo dedicas a Gladys: Gladys Assistant OS sustituye Windows por Ubuntu Server y Gladys, y mantiene Gladys actualizado. El PC necesita un procesador Intel o AMD que arranque en modo UEFI, un SSD de al menos 16 GB y un puerto Ethernet. Su disco se borra: haz antes una copia de tus archivos.",
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
          text: "No. Gladys se ejecuta en Docker sobre Linux, lo que cubre mini-PC, Raspberry Pi, NAS y servidores. En un mini-PC, Gladys Assistant OS lo instala todo por ti. Puedes controlar Gladys desde cualquier navegador en Windows y desde tu teléfono.",
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
