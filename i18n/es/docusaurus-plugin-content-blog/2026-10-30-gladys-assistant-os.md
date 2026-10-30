---
title: "Gladys Assistant OS: instala Gladys en un mini-PC desde una memoria USB"
description: "Gladys Assistant OS es el nuevo instalador oficial de Gladys para mini-PC: grábalo en una memoria USB, arranca tu mini-PC desde ella, responde a unas pocas preguntas y Gladys se instala solo, con actualizaciones automáticas. Sin necesidad de usar la línea de comandos."
authors: pierregilles
image: /img/presentation/gladys-assistant-os-es.jpg
slug: gladys-assistant-os
---

Hola a todos:

Hoy publico **Gladys Assistant OS**, la nueva forma oficial de instalar Gladys en un mini-PC 🎉

{/* truncate */}

La idea es sencilla: grabas Gladys Assistant OS en una memoria USB, arrancas tu mini-PC desde ella, respondes a unas pocas preguntas y Gladys se instala solo. Sin línea de comandos y sin ningún comando Docker que copiar y pegar.

![El menú de arranque de Gladys Assistant OS](../../../static/img/articles/gladys-assistant-os/grub-menu.png)

👉 [Instalar Gladys en un mini-PC con Gladys Assistant OS](/es/docs/installation/mini-pc/)

## ¿Por qué un instalador?

Cuando publiqué la [nueva imagen para Raspberry Pi](/es/blog/new-raspberry-pi-image/) en junio, comenté que estaba trabajando en una imagen «Ubuntu + Gladys» para mini-PC. ¡Aquí está!

Hasta ahora, instalar Gladys en un mini-PC significaba instalar Ubuntu Server por tu cuenta (sin olvidarte de marcar la casilla de OpenSSH), conectarte por SSH, instalar Docker, copiar un largo comando `docker run` y, después, configurar Watchtower para las actualizaciones. Nada imposible, pero eran muchos pasos, y mucha gente se quedaba atascada en alguno de ellos.

El mini-PC es la opción que recomiendo para un hogar inteligente a largo plazo, así que merecía una instalación tan sencilla como la de la Raspberry Pi.

## Lo que hace Gladys Assistant OS

Por dentro, Gladys Assistant OS es un **Ubuntu Server 26.04 LTS** estándar, preparado para Gladys:

- El instalador solo te pide tu **idioma**, tu **teclado** y tu **cuenta**. Con un solo disco, ni siquiera hay que elegir disco.
- En el primer arranque, instala **Docker**, descarga la **última versión de Gladys** y la pone en marcha. Puedes seguir el progreso en la pantalla del mini-PC o desde tu teléfono, en la dirección que aparece en pantalla.
- **Gladys se actualiza solo** en cuanto sale una nueva versión, y Ubuntu instala automáticamente sus **actualizaciones de seguridad**.
- Detecta tu **zona horaria**, y Gladys es accesible en **`http://gladysassistant.local`** desde cualquier dispositivo de tu red, o en la dirección IP que aparece en la pantalla del mini-PC si ese nombre no abre.
- Está pensado para ser robusto: si se cae la conexión a internet o se va la luz mientras instala Gladys en el primer arranque, simplemente continúa donde se quedó.

![El primer arranque de Gladys Assistant OS](../../../static/img/articles/gladys-assistant-os/setup-page.jpg)

La imagen nunca incluye el propio Gladys: Gladys se descarga en el primer arranque, así que siempre empiezas con la última versión, incluso con una imagen que descargaste hace unos meses.

## Un Ubuntu normal, no una caja cerrada

Gladys Assistant OS no es un sistema bloqueado. Es un Ubuntu Server como cualquier otro: puedes conectarte por SSH, ejecutar otros contenedores junto a Gladys y mantener el control total de tu máquina. No hay ninguna contraseña por defecto: la única cuenta es la que creas durante la instalación.

Y, como siempre con Gladys, todo es de código abierto: [GladysAssistant/ubuntu-server-gladys](https://github.com/GladysAssistant/ubuntu-server-gladys).

## También en Proxmox

Gladys Assistant OS también funciona en una máquina virtual de **Proxmox VE**. He reescrito la guía de Proxmox en torno a él: crea la VM en modo UEFI, arráncala desde la imagen y Gladys se instala de la misma forma.

👉 [Instalar Gladys en Proxmox VE](/es/docs/installation/proxmox/)

## Lo que necesitas (por ahora)

Esta primera versión tiene algunos requisitos:

- un ordenador **Intel o AMD** (x86-64) que arranque en modo **UEFI**, como prácticamente todos los mini-PC. En una Raspberry Pi, sigue usando la [imagen para Raspberry Pi](/es/docs/installation/raspberry-pi/);
- un **cable Ethernet**: el instalador no configura el wifi;
- una pantalla y un teclado, solo durante la instalación.

Por supuesto, Docker sigue disponible si instalas Gladys en una máquina que ya hace otras cosas, como un NAS o un servidor: la [guía de Docker](/es/docs/installation/docker/) sigue ahí.

## Nuevas guías de instalación

Para la ocasión, he reescrito la documentación de instalación para que Gladys Assistant OS sea lo primero que veas:

- [Primeros pasos](/es/docs/)
- [Instalar Gladys en un mini-PC con Gladys Assistant OS](/es/docs/installation/mini-pc/)
- [Instalar Gladys en Proxmox VE](/es/docs/installation/proxmox/)

Si lo pruebas, ¡cuéntame cómo te ha ido en [el foro](https://community.gladysassistant.com/)! Es una primera versión, y tus comentarios ayudarán a hacerlo aún más sencillo 🙂
