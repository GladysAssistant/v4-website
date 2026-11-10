---
id: proxmox
title: Instalar Gladys Assistant en Proxmox VE
description: "Instala Gladys Assistant en Proxmox VE en una máquina virtual con Gladys Assistant OS, nuestro instalador oficial: crea la VM, instala Gladys respondiendo a unas pocas preguntas y pasa tu dongle Zigbee y tu adaptador Bluetooth por USB."
sidebar_label: Instalación en Proxmox
keywords:
  - gladys proxmox
  - instalar gladys assistant proxmox
  - gladys assistant os proxmox
  - domótica proxmox
  - proxmox passthrough usb zigbee
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

Si ya tienes un servidor [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) en casa, puedes alojar Gladys Assistant en él junto a tus otros servicios.

Te recomendamos ejecutar Gladys en una **máquina virtual (VM)** instalada con **[Gladys Assistant OS](/es/docs/installation/mini-pc/)**, nuestro instalador oficial: el mismo que en un mini-PC. Instala Ubuntu Server, Docker y Gladys en la VM y, después, mantiene Gladys actualizado automáticamente. Una VM se comporta como un ordenador de verdad: tu dongle Zigbee se pasa por USB y Gladys es accesible en `gladysassistant.local` en tu red.

:::note
Esta guía usa los nombres de los menús de la interfaz web de Proxmox en inglés, en Proxmox VE 8 y 9.
:::

## Paso 1: Descargar Gladys Assistant OS en Proxmox

En la interfaz web de Proxmox, selecciona tu almacenamiento (normalmente **local**), abre **ISO Images** y haz clic en **Download from URL**.

Pega el enlace de la imagen de Gladys Assistant OS, haz clic en **Query URL** y luego en **Download**:

```
https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso
```

:::tip[Comprobar la descarga]
En la misma ventana, marca **Advanced**, elige **SHA-256** como algoritmo de hash y pega la suma de comprobación publicada en [este archivo](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso.sha256) (solo la larga serie de caracteres, sin el nombre del archivo). Así, Proxmox comprueba la imagen después de descargarla.
:::

## Paso 2: Crear la máquina virtual

Haz clic en **Create VM** arriba a la derecha y sigue el asistente:

- **General**: llama a la VM `gladys`. Marca **Advanced** y luego **Start at boot**, para que Gladys vuelva a arrancar después de reiniciar el servidor.
- **OS**: selecciona la imagen `gladys-assistant-installer-amd64.iso` que acabas de descargar.
- **System**: pon **BIOS** en **OVMF (UEFI)**: Gladys Assistant OS solo arranca en modo UEFI. Deja marcada la opción **Add EFI Disk** y elige un almacenamiento para ese disco. Marca también **Qemu Agent**.
- **Disks**: **32 GB** bastan para empezar (16 GB como mínimo). Gladys guarda el historial de tus sensores, así que dale más si tienes muchos dispositivos.
- **CPU**: **2 núcleos**. Elige el tipo **host** para obtener el mejor rendimiento (en un clúster con modelos de CPU distintos, consulta las preguntas frecuentes más abajo).
- **Memory**: **4096 MB** (4 GB) para empezar. Prevé **de 6 a 8 GB** en cuanto uses Zigbee2MQTT y varias integraciones, que se ejecutan cada una en su propio contenedor. Podrás aumentarla más adelante desde la pestaña **Hardware**: el cambio se aplica cuando apagas la VM y la vuelves a arrancar.
- **Network**: mantén el bridge por defecto (`vmbr0`) y el modelo **VirtIO**, para que la VM obtenga una dirección en tu red doméstica como cualquier otro dispositivo.

Confirma y arranca la VM.

## Paso 3: Instalar Gladys Assistant OS

Abre la **Console** de la VM. Aparece el menú de Gladys Assistant OS, con la opción **Install Gladys Assistant** resaltada. Se inicia sola al cabo de 3 segundos.

Después, responde a las preguntas del instalador exactamente igual que en un mini-PC: idioma, teclado, tu cuenta y SSH. Consulta el [paso 4 de la guía para mini-PC](/es/docs/installation/mini-pc/#installer-questions) para ver los detalles. El disco virtual de la VM es su único disco, así que no hay nada que elegir: cuando el instalador te pida confirmar el borrado del disco, solo se borra este disco virtual, nunca los discos de tu servidor Proxmox.

Cuando la consola indique que la instalación ha terminado (_Installation complete!_), quita primero la imagen de la VM, para que no vuelva a iniciar el instalador: en la pestaña **Hardware**, haz doble clic en **CD/DVD Drive** y elige **Do not use any media**. Después, selecciona **Reiniciar ahora** (_Reboot Now_) en la consola y pulsa **Intro** (y otra vez **Intro** si te pide que retires el medio de instalación). Si la consola se queda en negro, haz clic en **Reset** arriba a la derecha de la VM: la instalación ya ha terminado.

En este primer arranque, Gladys Assistant OS instala Docker, descarga Gladys y lo pone en marcha: sigue el progreso en la consola. Cuando muestre **Gladys Assistant está listo**, abre **`http://gladysassistant.local`** desde un ordenador de la misma red. Si ese nombre no se abre, usa en su lugar la dirección IP que aparece en la consola: `http://IP-DE-LA-VM`.

## Paso 4: Instalar el agente invitado de Qemu

El agente invitado de Qemu permite a Proxmox mostrar la dirección IP de la VM y apagarla correctamente. Inicia sesión en la VM con la cuenta que creaste durante la instalación, en la consola o por SSH (`ssh tu-usuario@gladysassistant.local`), y ejecuta:

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
```

```bash
sudo reboot
```

También te recomendamos dar una dirección IP fija a la VM con una reserva DHCP en tu router: la dirección IP de la VM aparece en su pestaña **Summary** en cuanto el agente invitado está en marcha.

## Paso 5: Pasar tu dongle Zigbee (y el Bluetooth)

Si usas un coordinador Zigbee USB, conéctalo al servidor Proxmox y dáselo a la VM:

1. Selecciona la VM, abre **Hardware** y haz clic en **Add** > **USB Device**.
2. Elige **Use USB Vendor/Device ID** y selecciona tu dongle en la lista (por ejemplo, un dongle Zigbee SONOFF).
3. Haz clic en **Add** y reinicia la VM para que vea el dispositivo.

Elegir el dongle por su identificador vendor/device, en lugar de por puerto USB, hace que la VM lo vuelva a encontrar aunque lo conectes a otro puerto. También puedes hacerlo desde el shell del host Proxmox: busca el identificador con `lsusb` y ejecuta `qm set <ID de la VM> -usb0 host=<vendor>:<device>`.

En la VM, comprueba que el dongle aparece:

```bash
ls /dev/serial/by-id/
```

Haz lo mismo con un **adaptador Bluetooth USB** si quieres usar sensores Bluetooth o emparejar dispositivos Matter por Bluetooth, y después instala BlueZ en la VM:

```bash
sudo apt install -y bluez
```

:::tip[Un coordinador de red evita el passthrough USB]
Con un coordinador Zigbee Ethernet (como el SMLIGHT SLZB-06), no hay nada que pasar: Gladys lo alcanza por la red y puedes mover la VM a otro nodo Proxmox libremente. Consulta [Usar un coordinador de red](/es/docs/integrations/zigbee2mqtt#use-a-network-coordinator).
:::

## Paso 6: Hacer copias de seguridad de la VM

Si usas [Gladys Plus](/es/docs/plus/intro), ya hace cada día una copia de seguridad cifrada de tu Gladys. En Proxmox puedes añadir una copia de la VM completa: en **Datacenter** > **Backup**, programa una copia de seguridad periódica de la VM `gladys`. Antes de un cambio importante, también puedes tomar un snapshot desde la pestaña **Snapshots** de la VM.

## ¿Prefieres instalar Debian tú mismo?

Gladys Assistant OS dedica la VM a Gladys y se encarga de las actualizaciones. Si prefieres gestionar el sistema tú mismo, crea la VM de la misma forma, instala en ella Debian o Ubuntu Server y sigue la [guía de instalación con Docker](/es/docs/installation/docker).

## Preguntas frecuentes

### ¿Debo usar una VM o un contenedor LXC?

Te recomendamos una VM instalada con Gladys Assistant OS porque es lo más sencillo: Gladys se instala y se actualiza solo, y el dongle USB, el Bluetooth y el IPv6 para Matter se comportan como en una máquina física. Un contenedor LXC también funciona, y varios miembros experimentados de la comunidad ejecutan Gladys así: consume algo menos de RAM y sus recursos se pueden cambiar sin reiniciar. Pero Gladys Assistant OS no se puede instalar en un LXC: tienes que instalar Docker y Gladys tú mismo, Docker dentro de un LXC necesita un contenedor privilegiado con nesting activado, y pasar los dispositivos USB y el IPv6 al contenedor requiere configuración adicional. Si te sientes cómodo con ello, un LXC es una buena opción; si no, elige la VM.

### ¿Cuánta RAM y disco necesita la VM de Gladys?

Empieza con 2 núcleos, 4 GB de RAM y un disco de 32 GB. Los miembros de la comunidad que usan Zigbee2MQTT y varias integraciones notan que 4 GB se quedan cortos enseguida: en ese caso, prevé de 6 a 8 GB. Puedes aumentar la RAM en cualquier momento; el cambio se aplica cuando apagas la VM y la vuelves a arrancar. Dale más disco a la VM si guardas un historial largo de muchos sensores.

### ¿Funciona Matter en una VM de Proxmox?

Sí. Matter se basa en IPv6, así que IPv6 debe estar activado en tu router y en la VM. Ubuntu, la base de Gladys Assistant OS, lo activa por defecto: comprueba que la interfaz de red de la VM (no la interfaz de loopback `lo`) tiene una dirección IPv6 con `ip -6 addr`. Consulta la [integración Matter](/es/docs/integrations/matter) para el resto de la configuración.

### ¿Puedo mover la VM de Gladys a otro nodo Proxmox?

Sí, pero un dispositivo USB pasado a la VM sigue conectado al servidor en el que está enchufado: mueve el dongle con la VM o usa un coordinador Zigbee de red, que funciona desde cualquier nodo. En un clúster cuyos nodos tienen modelos de CPU distintos, mantén además el tipo de CPU por defecto de la VM en lugar de **host**; si no, la migración en caliente puede fallar.

### ¿Puede Gladys supervisar mi servidor Proxmox?

Sí. La [integración comunitaria Proxmox](/es/docs/integrations/external/proxmox) muestra en Gladys el estado de tus VM y contenedores y el resultado de tus copias de seguridad, para que te avise cuando una copia falla.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Debo usar una VM o un contenedor LXC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Te recomendamos una VM instalada con Gladys Assistant OS porque es lo más sencillo: Gladys se instala y se actualiza solo, y el dongle USB, el Bluetooth y el IPv6 para Matter se comportan como en una máquina física. Un contenedor LXC también funciona, y varios miembros experimentados de la comunidad ejecutan Gladys así: consume algo menos de RAM y sus recursos se pueden cambiar sin reiniciar. Pero Gladys Assistant OS no se puede instalar en un LXC: tienes que instalar Docker y Gladys tú mismo, Docker dentro de un LXC necesita un contenedor privilegiado con nesting activado, y pasar los dispositivos USB y el IPv6 al contenedor requiere configuración adicional. Si te sientes cómodo con ello, un LXC es una buena opción; si no, elige la VM.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánta RAM y disco necesita la VM de Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Empieza con 2 núcleos, 4 GB de RAM y un disco de 32 GB. Los miembros de la comunidad que usan Zigbee2MQTT y varias integraciones notan que 4 GB se quedan cortos enseguida: en ese caso, prevé de 6 a 8 GB. Puedes aumentar la RAM en cualquier momento; el cambio se aplica cuando apagas la VM y la vuelves a arrancar. Dale más disco a la VM si guardas un historial largo de muchos sensores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona Matter en una VM de Proxmox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Matter se basa en IPv6, así que IPv6 debe estar activado en tu router y en la VM. Ubuntu, la base de Gladys Assistant OS, lo activa por defecto: comprueba que la interfaz de red de la VM (no la interfaz de loopback lo) tiene una dirección IPv6 con ip -6 addr.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo mover la VM de Gladys a otro nodo Proxmox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, pero un dispositivo USB pasado a la VM sigue conectado al servidor en el que está enchufado: mueve el dongle con la VM o usa un coordinador Zigbee de red, que funciona desde cualquier nodo. En un clúster cuyos nodos tienen modelos de CPU distintos, mantén además el tipo de CPU por defecto de la VM en lugar de host; si no, la migración en caliente puede fallar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede Gladys supervisar mi servidor Proxmox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La integración comunitaria Proxmox muestra en Gladys el estado de tus VM y contenedores y el resultado de tus copias de seguridad, para que te avise cuando una copia falla.",
        },
      },
    ],
  }}
/>
