---
id: proxmox
title: Instalar Gladys Assistant en Proxmox VE
description: "Instala Gladys Assistant en Proxmox VE en una máquina virtual Debian: crea la VM, pasa tu dongle Zigbee y tu adaptador Bluetooth por USB y ejecuta Gladys con Docker."
sidebar_label: Instalación en Proxmox
keywords:
  - gladys proxmox
  - instalar gladys assistant proxmox
  - domótica proxmox
  - proxmox passthrough usb zigbee
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

Si ya tienes un servidor [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) en casa, puedes alojar Gladys Assistant en él junto a tus otros servicios.

Te recomendamos ejecutar Gladys en una **máquina virtual (VM) con Debian** y después instalarlo con Docker exactamente igual que en cualquier servidor Linux. Una VM se comporta como un ordenador de verdad: el comando de instalación oficial funciona tal cual, tu dongle Zigbee se pasa por USB y Gladys es accesible en `gladysassistant.local` en tu red.

:::note
Esta guía usa los nombres de los menús de la interfaz web de Proxmox en inglés, en Proxmox VE 8 y 9.
:::

## Paso 1: Descargar la ISO de Debian

En la interfaz web de Proxmox, selecciona tu almacenamiento (normalmente **local**), abre **ISO Images** y haz clic en **Download from URL**.

Pega el enlace de la última imagen «netinst» de Debian para tu arquitectura (amd64 para la mayoría de mini-PC y servidores), disponible en el [sitio web de Debian](https://www.debian.org/distrib/netinst), haz clic en **Query URL** y luego en **Download**.

Ubuntu Server funciona igual de bien si lo prefieres: solo cambia la instalación del paso 3.

## Paso 2: Crear la máquina virtual

Haz clic en **Create VM** arriba a la derecha y sigue el asistente:

- **General**: llama a la VM `gladys`. Marca **Advanced** y luego **Start at boot**, para que Gladys vuelva a arrancar después de reiniciar el servidor.
- **OS**: selecciona la ISO que acabas de descargar.
- **System**: marca **Qemu Agent**.
- **Disks**: **32 GB** bastan para empezar. Gladys guarda el historial de tus sensores, así que dale más si tienes muchos dispositivos.
- **CPU**: **2 núcleos**. Elige el tipo **host** para obtener el mejor rendimiento (en un clúster con modelos de CPU distintos, consulta las preguntas frecuentes más abajo).
- **Memory**: **4096 MB** (4 GB). Gladys funciona con 2 GB, pero Zigbee2MQTT y las demás integraciones agradecerán el margen.
- **Network**: mantén el bridge por defecto (`vmbr0`) y el modelo **VirtIO**, para que la VM obtenga una dirección en tu red doméstica como cualquier otro dispositivo.

Confirma y arranca la VM.

## Paso 3: Instalar Debian o Ubuntu Server

Abre la **Console** de la VM y sigue el instalador. En Debian, en el paso **Selección de programas**:

- desmarca los entornos de escritorio (Gladys no necesita ninguno),
- marca **servidor SSH** y **utilidades estándar del sistema**.

:::tip[En Debian, configura primero `sudo`]
Si definiste una contraseña de root durante la instalación, Debian no instala `sudo`, que necesitan los comandos de esta guía. Inicia sesión como root con `su -` y ejecuta:

```bash
apt update && apt install -y curl sudo
usermod -aG sudo tu-usuario
```

Sustituye `tu-usuario` por tu nombre de usuario y luego cierra la sesión y vuelve a entrar.
:::

:::note[En Ubuntu Server]
El instalador de Ubuntu no tiene un paso de selección de programas: basta con marcar **Install OpenSSH server** cuando lo pregunte. Ubuntu ya incluye `sudo` y `curl`.
:::

Cuando el sistema esté instalado y la VM se haya reiniciado, inicia sesión e instala el agente invitado de Qemu, que permite a Proxmox mostrar la dirección IP de la VM y apagarla correctamente:

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
sudo reboot
```

También te recomendamos dar una dirección IP fija a la VM con una reserva DHCP en tu router: la dirección IP de la VM aparece en su pestaña **Summary** en cuanto el agente invitado está en marcha.

## Paso 4: Pasar tu dongle Zigbee (y el Bluetooth)

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

## Paso 5: Instalar Gladys con Docker

La VM es ahora un servidor Debian normal. Sigue la [guía de instalación con Docker](/es/docs/installation/docker): instala Docker con el script oficial y luego inicia Gladys con el comando de instalación, sin cambiar nada.

Después abre **`http://gladysassistant.local`** desde un ordenador de la misma red. Si ese nombre no se abre, usa en su lugar la dirección IP de la VM, que aparece en su pestaña **Summary**: `http://IP-DE-LA-VM`.

## Paso 6: Hacer copias de seguridad de la VM

Si usas [Gladys Plus](/es/docs/plus/intro), ya hace cada día una copia de seguridad cifrada de tu Gladys. En Proxmox puedes añadir una copia de la VM completa: en **Datacenter** > **Backup**, programa una copia de seguridad periódica de la VM `gladys`. Antes de un cambio importante, también puedes tomar un snapshot desde la pestaña **Snapshots** de la VM.

## Preguntas frecuentes

### ¿Debo usar una VM o un contenedor LXC?

Te recomendamos una VM. Gladys se ejecuta en Docker, y Docker dentro de un contenedor LXC necesita un contenedor privilegiado con nesting activado. Además, los dispositivos USB son más difíciles de pasar a un contenedor, y Matter necesita que IPv6 funcione también dentro del contenedor. Algunos miembros de la comunidad ejecutan Gladys en un LXC «Docker» privilegiado y funciona, pero una VM te da exactamente la misma configuración que la instalación oficial, a cambio de unos cientos de MB de RAM más.

### ¿Cuánta RAM y disco necesita la VM de Gladys?

2 núcleos, 4 GB de RAM y un disco de 32 GB son cómodos para una casa típica. Gladys en sí funciona con 2 GB de RAM. Dale más disco a la VM si guardas un historial largo de muchos sensores.

### ¿Funciona Matter en una VM de Proxmox?

Sí. Matter se basa en IPv6, así que IPv6 debe estar activado en tu router y en la VM. Debian lo activa por defecto: comprueba que la interfaz de red de la VM (normalmente `ens18`, no la interfaz de loopback `lo`) tiene una dirección IPv6 con `ip -6 addr show dev ens18`. Consulta la [integración Matter](/es/docs/integrations/matter) para el resto de la configuración.

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
          text: "Te recomendamos una VM. Gladys se ejecuta en Docker, y Docker dentro de un contenedor LXC necesita un contenedor privilegiado con nesting activado. Además, los dispositivos USB son más difíciles de pasar a un contenedor, y Matter necesita que IPv6 funcione también dentro del contenedor. Algunos miembros de la comunidad ejecutan Gladys en un LXC Docker privilegiado y funciona, pero una VM te da exactamente la misma configuración que la instalación oficial, a cambio de unos cientos de MB de RAM más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánta RAM y disco necesita la VM de Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2 núcleos, 4 GB de RAM y un disco de 32 GB son cómodos para una casa típica. Gladys en sí funciona con 2 GB de RAM. Dale más disco a la VM si guardas un historial largo de muchos sensores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona Matter en una VM de Proxmox?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Matter se basa en IPv6, así que IPv6 debe estar activado en tu router y en la VM. Debian lo activa por defecto: comprueba que la interfaz de red de la VM (normalmente ens18, no la interfaz de loopback lo) tiene una dirección IPv6 con ip -6 addr show dev ens18.",
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
