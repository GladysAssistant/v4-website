---
id: mini-pc
title: Instalar Gladys Assistant en un mini-PC con Gladys Assistant OS
description: "Instala Gladys Assistant en un mini-PC con Gladys Assistant OS, nuestro instalador oficial: graba una memoria USB, arranca el mini-PC desde ella, responde a unas pocas preguntas y Gladys se instala automáticamente, actualizaciones incluidas."
sidebar_label: Instalación en un mini-PC
keywords:
  - gladys assistant os
  - gladys mini pc
  - instalar gladys mini pc
  - gladys iso
  - instalar gladys ubuntu server
  - mejor mini pc domótica
  - mini pc servidor doméstico
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Gladys Assistant OS** es nuestro instalador oficial para mini-PC. Convierte cualquier mini-PC en una central domótica dedicada a Gladys Assistant: lo grabas en una memoria USB, arrancas el mini-PC desde ella, respondes a unas pocas preguntas y Gladys se instala automáticamente.

Sin línea de comandos y sin configurar Docker a mano: Gladys Assistant OS se encarga de todo y, después, mantiene Gladys actualizado por sí solo.

:::tip[¿Qué mini-PC comprar?]
Modelos, especificaciones, consumo eléctrico y presupuesto: [El mejor mini-PC para domótica](/es/mini-pc-home-automation/). Llevo años usando Gladys en un mini-PC Beelink y te recomiendo el [Beelink Mini S13](https://www.amazon.com/s?k=Beelink+Mini+S13&tag=gladproj-21).
:::

## Lo que Gladys Assistant OS hace por ti

Por dentro, Gladys Assistant OS es un **Ubuntu Server 26.04 LTS** estándar, preparado para Gladys:

- instala Ubuntu Server en el disco interno del mini-PC,
- en el primer arranque, instala Docker, descarga la última versión de Gladys y lo pone en marcha,
- **actualiza Gladys automáticamente** en cuanto se publica una nueva versión,
- instala automáticamente las **actualizaciones de seguridad de Ubuntu**,
- detecta tu zona horaria,
- y deja Gladys accesible en **`http://gladysassistant.local`** desde cualquier dispositivo de tu red.

Gladys Assistant OS es de código abierto: su código está en [GitHub](https://github.com/GladysAssistant/ubuntu-server-gladys).

## Lo que necesitas

- Un **mini-PC** (o un PC) con un **procesador Intel o AMD** (x86-64) que arranque en modo **UEFI**, como prácticamente todos los ordenadores de los últimos diez años. Cuenta con al menos **8 GB de RAM**.
- Un **SSD interno** (NVMe, SATA o eMMC) de al menos 16 GB en el mini-PC.
- Un **cable Ethernet** conectado a tu router o a tu módem de internet. El instalador no funciona por wifi.
- Una **memoria USB de 4 GB o más**.
- Una **pantalla y un teclado**, solo durante la instalación. Después, el mini-PC funciona por su cuenta, sin pantalla.
- Un ordenador para descargar la imagen y grabarla en la memoria USB.

:::warning[Se borrará el disco interno del mini-PC]
Gladys Assistant OS borra el disco en el que se instala. No se borra nada hasta que lo confirmas en el instalador, pero antes haz una copia de seguridad de todo lo que quieras conservar. La memoria USB también se borrará.
:::

:::info[¿En una Raspberry Pi?]
Gladys Assistant OS está pensado para ordenadores Intel y AMD. En una Raspberry Pi, usa en su lugar nuestra [imagen oficial para Raspberry Pi](/es/docs/installation/raspberry-pi/).
:::

## Paso 1: descargar Gladys Assistant OS

Descarga la imagen de Gladys Assistant OS (un archivo `.iso` de unos 2 GB):

<p>
  <a class="button button--primary button--lg" href="https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso">Descargar Gladys Assistant OS</a>
</p>

Este enlace te da siempre la última versión. Las notas de cada versión están en [GitHub](https://github.com/GladysAssistant/ubuntu-server-gladys/releases).

<details>
<summary>Opcional: comprobar que la descarga está intacta</summary>

Descarga el [archivo de suma de comprobación](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso.sha256) y guárdalo en la misma carpeta que la imagen. Después, desde esa carpeta:

En Linux:

```bash
sha256sum -c gladys-assistant-installer-amd64.iso.sha256
```

En macOS:

```bash
shasum -a 256 -c gladys-assistant-installer-amd64.iso.sha256
```

Los dos comandos deben responder `OK`.

En Windows, en PowerShell:

```powershell
Get-FileHash .\gladys-assistant-installer-amd64.iso -Algorithm SHA256
```

El hash que se muestra debe ser idéntico al del archivo `.sha256` (ábrelo con el Bloc de notas).

</details>

## Paso 2: grabar la imagen en una memoria USB

La imagen tiene que **grabarse** en la memoria USB con una herramienta específica: copiar el archivo `.iso` en la memoria no funciona.

1. Descarga e instala [balenaEtcher](https://etcher.balena.io/), disponible para Windows, macOS y Linux.
2. Conecta la memoria USB a tu ordenador.
3. En balenaEtcher, haz clic en **Flash from file** y selecciona `gladys-assistant-installer-amd64.iso`.
4. Haz clic en **Select target** y elige tu memoria USB. Comprueba bien que es la unidad correcta: se borrará.
5. Haz clic en **Flash!** y espera a que terminen la grabación y la verificación.

## Paso 3: arrancar el mini-PC desde la memoria USB

1. Conecta el mini-PC a tu router con el **cable Ethernet** y, después, conecta la pantalla, el teclado y la memoria USB.
2. Enciende el mini-PC e, inmediatamente, pulsa varias veces la tecla del **menú de arranque**: **F7** en los Beelink, **F10** en los Intel NUC y, normalmente, **F12**, **F11** o **Esc** en las demás marcas.
3. En el menú de arranque, elige tu memoria USB (su nombre suele empezar por `UEFI:`).

Aparece el menú de Gladys Assistant OS, con la opción **Install Gladys Assistant** resaltada. Se inicia sola al cabo de 3 segundos.

:::tip[¿El mini-PC no arranca desde la memoria USB?]
Abre los ajustes de la BIOS (normalmente con **Supr** (_Del_) o **F2** al encender), comprueba que el ordenador arranca en modo **UEFI** (y no en modo "Legacy" o "CSM") y pon la memoria USB en primer lugar en el orden de arranque. Si sigue sin arrancar, desactiva el **Secure Boot** en esos mismos ajustes.
:::

## Paso 4: responder a las preguntas del instalador {/* #installer-questions */}

El instalador solo hace unas pocas preguntas. Muévete con las **flechas** del teclado y la tecla **Tab**, marca o desmarca una opción con la **barra espaciadora** y confirma con **Intro** (_Enter_).

1. **Idioma**: el inglés está preseleccionado. Elige tu idioma: lo usarán las pantallas siguientes y, después, la página de configuración de Gladys.
2. **Teclado**: se te propone la distribución de tu idioma (por ejemplo, la distribución española si eliges el español). Revísala con atención, porque vas a escribir tu contraseña.
3. **Disco**:
   - si el mini-PC tiene **un solo disco interno** (los discos de menos de 16 GB no cuentan), no hay nada que elegir: Gladys Assistant OS se instala en él automáticamente y ocupa todo el disco;
   - si tiene **varios discos**, el instalador te pregunta cuál usar: deja seleccionada la opción que usa todo el disco (_Use an entire disk_), elige el disco, deja la opción LVM como está y valida la pantalla de resumen con **Hecho** (_Done_).

   En ambos casos, el instalador te pide después que confirmes en una ventana (_Confirm destructive action_), que puede aparecer un poco más tarde, después de la pantalla de la cuenta. **No** (_No_) está seleccionado por defecto: baja hasta **Continuar** (_Continue_) con las flechas y pulsa **Intro** para borrar el disco e iniciar la instalación. No se borra nada antes de este paso.

4. **Tu cuenta**: introduce tu nombre, un nombre de usuario y una contraseña. Es la única cuenta de la máquina (no hay ninguna contraseña por defecto): apunta la contraseña en un lugar seguro, la necesitarás para el mantenimiento. El instalador también te pide un nombre de servidor (_server name_), pero la máquina siempre se llama `gladys`, así que puedes escribir lo que quieras.
5. **SSH**: la opción **Instalar el servidor OpenSSH** (_Install OpenSSH server_) viene marcada por defecto. Déjala marcada para poder conectarte más adelante al mini-PC a distancia desde tu ordenador. Si nunca vas a necesitarlo, puedes desmarcarla.

A partir de ahí, la instalación continúa por sí sola durante unos minutos.

## Paso 5: dejar que Gladys se instale

Al final de la instalación, el mini-PC se reinicia: **retira la memoria USB** (si un mensaje te pide que retires el medio de instalación, retíralo y pulsa **Intro**).

En este primer arranque, Gladys Assistant OS instala Docker, descarga Gladys y lo pone en marcha. Puedes seguir el progreso:

- en la pantalla del mini-PC,
- o desde tu ordenador o tu teléfono, en la dirección que aparece en pantalla junto a **Dirección de configuración** (por ejemplo `http://192.168.1.42`).

La descarga de Gladys es el paso más largo y su duración depende de tu conexión a internet. Deja el mini-PC conectado al cable Ethernet hasta el final.

:::note[Nada de qué preocuparse]
Si el mini-PC no tiene acceso a internet, su pantalla muestra **Se requiere conexión a Internet** y la configuración espera: se reanuda por sí sola en cuanto vuelve la conexión. Si se va la luz, basta con volver a encender el mini-PC: la configuración continúa donde se quedó.
:::

## Paso 6: abrir Gladys

Cuando la pantalla muestre **Gladys Assistant está listo**, abre **`http://gladysassistant.local`** en tu navegador, desde un ordenador o un teléfono conectado a la misma red. Si dejaste abierta la página de configuración, esta cambia sola a Gladys (actualízala si hace falta).

Si `gladysassistant.local` no se abre, usa en su lugar la dirección que aparece debajo en la pantalla del mini-PC (por ejemplo `http://192.168.1.42`). Algunas redes no admiten estos nombres locales, por ejemplo con ciertos teléfonos Android, en las redes de invitados o con los routers que tienen activado el aislamiento de clientes.

Solo te queda crear tu cuenta y configurar tu casa: consulta [Configurar tu hogar inteligente](/es/docs/#configuring-your-smart-home). Ya puedes desconectar la pantalla y el teclado: el mini-PC no los necesita.

:::tip
Asigna al mini-PC una dirección IP fija con una reserva DHCP en los ajustes de tu router: así su dirección no cambiará nunca.
:::

## Actualizaciones

- **Gladys se actualiza automáticamente.** [Watchtower](https://github.com/nicholas-fedor/watchtower) se instala junto a Gladys e instala cada nueva versión automáticamente. No tienes que hacer nada.
- **Las actualizaciones de seguridad de Ubuntu se instalan automáticamente.** Eso sí, el mini-PC nunca se reinicia por su cuenta, y algunas actualizaciones (las del kernel de Linux, por ejemplo) solo se aplican después de un reinicio. Reinicia el mini-PC de vez en cuando, por ejemplo con `sudo reboot` por SSH. Gladys vuelve a arrancar automáticamente.
- No hace falta reinstalar cuando sale una nueva versión de Gladys Assistant OS: las nuevas versiones solo afectan a las nuevas instalaciones.

## Para ir más allá

Gladys Assistant OS es un Ubuntu Server estándar, así que sigues teniendo el control de tu máquina. Algunas cosas útiles si te manejas con la terminal:

- **Conectarte a distancia** (si mantuviste OpenSSH): `ssh tu-usuario@gladysassistant.local`, o con la dirección IP del mini-PC.
- **Los datos de Gladys** se guardan en `/var/lib/gladysassistant`.
- **Gladys y Watchtower** se ejecutan con Docker Compose, a partir de `/opt/gladys/compose.yaml`. Tu cuenta puede usar `docker` sin `sudo` (si te pide `sudo`, cierra la sesión y vuelve a entrar una vez después de la instalación).
- **Bluetooth**: para usar sensores Bluetooth o emparejar dispositivos Matter por Bluetooth, instala BlueZ en el mini-PC: `sudo apt install -y bluez`.
- **Diagnóstico**: `sudo gladys-diagnostics` muestra el estado de la máquina. Su salida no contiene ninguna contraseña ni ningún secreto, así que puedes compartirla en [el foro](https://community.gladysassistant.com/) si necesitas ayuda.
- **Zona horaria**: se detecta automáticamente. Para cambiarla, por ejemplo a `Europe/Madrid`:

```bash
sudo timedatectl set-timezone Europe/Madrid
```

```bash
echo GLADYS_TZ=Europe/Madrid | sudo tee /opt/gladys/.env
```

```bash
docker compose -f /opt/gladys/compose.yaml up -d gladys
```

## Solución de problemas

**La pantalla muestra "Se requiere conexión a Internet"**: el mini-PC no tiene acceso a internet. Comprueba el cable Ethernet y tu router: la configuración se reanuda por sí sola, sin reiniciar, en cuanto la conexión funciona.

**`gladysassistant.local` no se abre**: tu red no admite los nombres locales. Usa la dirección que aparece en la pantalla del mini-PC.

**El navegador sigue mostrando la página de configuración**: Gladys todavía no está listo. Espera a que aparezca **Gladys Assistant está listo** en la pantalla y luego actualiza la página.

**La pantalla muestra "La configuración no puede continuar"**: inicia sesión en el mini-PC (pulsa **Ctrl+Alt+F2** para que aparezca una pantalla de inicio de sesión, o usa SSH) y ejecuta `sudo gladys-diagnostics`. Después, pide ayuda en [el foro](https://community.gladysassistant.com/) junto con su salida.

Para ver los registros del propio Gladys, consulta [cómo descargar los registros de Gladys](/es/docs/installation/logs/).

## ¿Prefieres instalarlo manualmente?

Gladys Assistant OS dedica todo el mini-PC a Gladys. Si prefieres instalar tú mismo Ubuntu Server o Debian, o ejecutar Gladys en una máquina que ya hace otras cosas (un NAS, un servidor, una máquina virtual), sigue la [guía de instalación con Docker](/es/docs/installation/docker/).

## Preguntas frecuentes

### ¿Qué es Gladys Assistant OS?

Gladys Assistant OS es el instalador oficial de Gladys Assistant para mini-PC. Instala Ubuntu Server 26.04 LTS, Docker y Gladys, y después mantiene Gladys actualizado automáticamente. Lo grabas en una memoria USB, arrancas el mini-PC desde ella y respondes a unas pocas preguntas: no hace falta usar la línea de comandos.

### ¿Qué mini-PC se recomienda para Gladys?

Usamos y recomendamos el Beelink Mini S13. Es potente, silencioso, eficiente energéticamente y ejecuta Gladys de forma fiable a largo plazo. Gladys Assistant OS está pensado para cualquier mini-PC con un procesador Intel o AMD que arranque en modo UEFI: cuenta con al menos 8 GB de RAM y un SSD.

### ¿Por qué usar un mini-PC en lugar de una Raspberry Pi?

Un mini-PC te ofrece más potencia de CPU, más RAM y un almacenamiento más rápido y fiable que una Raspberry Pi, normalmente por un precio total similar una vez que sumas la caja, la fuente de alimentación y el SSD. Es la opción que recomendamos para que Gladys funcione con fluidez a largo plazo.

### ¿Puedo instalar Gladys Assistant OS por wifi?

No, el instalador necesita un cable Ethernet con acceso a internet. Además, una conexión por cable es más fiable para una central domótica que funciona todo el día.

### ¿Gladys Assistant OS borrará mi mini-PC?

Sí. Gladys Assistant OS borra el disco interno en el que se instala, después de pedirte confirmación. Haz una copia de seguridad de todo lo que quieras conservar antes de instalarlo.

### ¿Puedo seguir usando el mini-PC para otras cosas?

Sí. Gladys Assistant OS es un Ubuntu Server estándar: puedes conectarte por SSH y ejecutar otros contenedores Docker junto a Gladys. Las actualizaciones automáticas solo se aplican a Gladys y a Watchtower: tus otros contenedores nunca se actualizan, salvo que les añadas la etiqueta de Watchtower.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es Gladys Assistant OS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys Assistant OS es el instalador oficial de Gladys Assistant para mini-PC. Instala Ubuntu Server 26.04 LTS, Docker y Gladys, y después mantiene Gladys actualizado automáticamente. Lo grabas en una memoria USB, arrancas el mini-PC desde ella y respondes a unas pocas preguntas: no hace falta usar la línea de comandos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué mini-PC se recomienda para Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usamos y recomendamos el Beelink Mini S13. Es potente, silencioso, eficiente energéticamente y ejecuta Gladys de forma fiable a largo plazo. Gladys Assistant OS está pensado para cualquier mini-PC con un procesador Intel o AMD que arranque en modo UEFI: cuenta con al menos 8 GB de RAM y un SSD.",
        },
      },
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
        name: "¿Puedo instalar Gladys Assistant OS por wifi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, el instalador necesita un cable Ethernet con acceso a internet. Además, una conexión por cable es más fiable para una central domótica que funciona todo el día.",
        },
      },
      {
        "@type": "Question",
        name: "¿Gladys Assistant OS borrará mi mini-PC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Gladys Assistant OS borra el disco interno en el que se instala, después de pedirte confirmación. Haz una copia de seguridad de todo lo que quieras conservar antes de instalarlo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo seguir usando el mini-PC para otras cosas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Gladys Assistant OS es un Ubuntu Server estándar: puedes conectarte por SSH y ejecutar otros contenedores Docker junto a Gladys. Las actualizaciones automáticas solo se aplican a Gladys y a Watchtower: tus otros contenedores nunca se actualizan, salvo que les añadas la etiqueta de Watchtower.",
        },
      },
    ],
  }}
/>
