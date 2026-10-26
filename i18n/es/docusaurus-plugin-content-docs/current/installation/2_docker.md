---
id: docker
title: Instalar Gladys con Docker en Debian, Ubuntu y más
description: "Instala Gladys Assistant con Docker en Debian, Ubuntu o cualquier sistema (mini-PC, NAS, servidor Linux, VM) con un solo comando. Gratuito, de código abierto y autoalojado."
sidebar_label: Instalación con Docker
keywords:
  - instalar gladys docker
  - instalar gladys debian
  - instalar gladys ubuntu
  - gladys assistant docker
  - domótica autoalojada docker
  - ejecutar gladys en un nas
  - gladys synology docker
---

import JsonLd from '@site/src/components/seo/JsonLd';

En este tutorial repasamos los pasos para instalar Gladys Assistant con Docker. Funciona en cualquier sistema (mini-PC, NAS, servidor Linux, VM...), y los pasos son los mismos en Debian y en Ubuntu.

## Instalar Docker

:::tip[En Debian, instala primero `curl` y `sudo`]
Ubuntu incluye `curl` y `sudo`, pero una instalación mínima de Debian a menudo no trae ninguno de los dos, y los comandos siguientes necesitan ambos. Inicia sesión como root con `su -` y ejecuta:

```bash
apt update && apt install -y curl sudo
usermod -aG sudo tu-usuario
```

Sustituye `tu-usuario` por tu nombre de usuario, cierra la sesión, vuelve a entrar y continúa abajo. El resto de esta guía es idéntico en Debian y en Ubuntu.
:::

Para instalar Docker, simplemente ejecuta este comando:

```bash
curl -sSL https://get.docker.com | sh
```

Para comprobar que Docker funciona correctamente, escribe:

```bash
sudo docker ps
```

Debería mostrarse una lista vacía de contenedores en ejecución.

Si tienes algún problema al instalar Docker, echa un vistazo a la [documentación de Docker](https://docs.docker.com/) y busca las instrucciones correspondientes a tu sistema.

## Iniciar Gladys {/* #start-gladys */}

Puedes iniciar un contenedor de Gladys con este comando:

```bash
sudo docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--cgroupns=host \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
-v /run/udev:/run/udev:ro \
-v /run/dbus:/run/dbus:ro \
gladysassistant/gladys:v5
```

Notas:

- `-d` => Ejecuta el contenedor en segundo plano
- `--log-driver json-file` => Configura los registros (logs) del contenedor
- `--log-opt max-size=10m` => Limita el tamaño del archivo de registro a 10 MB
- `--cgroupns=host` => Usa el espacio de nombres cgroup del host
- `--restart=always` => Reinicia el contenedor automáticamente
- `--privileged` => Concede privilegios ampliados al contenedor
- `--network=host` => Usa la pila de red del host
- `-e` => Define variables de entorno
- `-v` => Monta volúmenes
- `-v /run/dbus:/run/dbus:ro` => Da a Gladys acceso al bus del sistema del host. Es lo que te permite reiniciar o apagar la máquina desde los ajustes del sistema, y es el requisito previo para el Bluetooth: tanto vincular un dispositivo Matter por BLE como leer sensores Bluetooth pasan por BlueZ, al que solo se puede acceder a través de ese bus. El host necesita tener BlueZ instalado (`sudo apt install bluez` en Debian y Ubuntu).
- `TZ=Europe/Paris` => Zona horaria que usa el contenedor. Si necesitas cambiar este valor, consulta [esta lista](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) en Wikipedia.

## Actualizar Gladys automáticamente con Watchtower {/* #auto-upgrade-gladys-with-watchtower */}

Puedes usar Watchtower para actualizar Gladys automáticamente cuando haya una nueva versión disponible. Para ello, inicia un contenedor de Watchtower:

```bash
sudo docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  nickfedor/watchtower \
  --cleanup --include-restarting
```

## Acceder a Gladys {/* #accessing-gladys */}

Abre **`http://gladysassistant.local`** en tu navegador. Gladys anuncia ese nombre en tu red local mediante mDNS, así que puedes acceder a él desde cualquier dispositivo de la misma red sin tener que buscar nunca una dirección IP.

:::note
Debes estar en la misma red que la máquina.
:::

Si tienes varias instancias de Gladys en casa, puedes cambiar el nombre de cada una en **Ajustes → Sistema → Dirección local (mDNS)**. El cambio se aplica de inmediato, sin necesidad de reiniciar.

### Si `gladysassistant.local` no se abre

mDNS viene integrado en macOS, iOS y Windows 10 o posterior, y funciona en la mayoría de las redes domésticas. Aun así, algunas configuraciones lo bloquean: ciertas versiones de Android, las redes de invitados y los routers con el aislamiento de clientes activado. Además, Gladys solo se anuncia cuando se ejecuta en la red del host, que es justo lo que hace el comando anterior.

En ese caso, usa la dirección IP de la máquina en tu navegador. Para encontrarla en tu red local, puedes usar aplicaciones como:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) en Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) en iOS

:::tip[Configura tu propia zona horaria]
El comando anterior usa `TZ=Europe/Paris`. Sustitúyelo por tu propio valor (por ejemplo `Europe/Madrid`, `America/Mexico_City` o `America/Argentina/Buenos_Aires`) de la [lista de zonas horarias](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) para que las escenas y las programaciones se ejecuten a la hora local correcta.
:::

## Preguntas frecuentes

### ¿En qué sistemas puedo ejecutar Gladys con Docker?

La instalación con Docker funciona en cualquier sistema que ejecute Docker: un mini-PC, un NAS (Synology, Unraid), un servidor Linux, una Raspberry Pi o una máquina virtual. El mismo comando único inicia Gladys en todos ellos. En un servidor Proxmox, sigue la [guía de Proxmox](/es/docs/installation/proxmox).

### ¿Cómo actualizo Gladys cuando se ejecuta en Docker?

La forma más sencilla es ejecutar el contenedor de Watchtower que se muestra arriba. Detecta las nuevas imágenes de Gladys y actualiza tu contenedor automáticamente cuando se publica una nueva versión, así que no tienes que actualizar a mano.

### ¿Puedo ejecutar Gladys en un NAS Synology o Unraid?

Sí. Siempre que tu NAS pueda ejecutar contenedores Docker, puedes ejecutar Gladys en él con el mismo comando. Es una forma muy popular de autoalojar Gladys en un hardware que ya tienes.

### ¿Puedo instalar Gladys en Debian o Ubuntu?

Sí, y los pasos son los mismos en ambos: instala Docker con el script oficial y luego inicia el contenedor de Gladys con el comando de arriba. Funciona cualquier versión de Debian o Ubuntu compatible con Docker, en un mini-PC, un servidor o una máquina virtual. En una instalación mínima de Debian, instala primero `curl` y `sudo` (consulta el consejo al principio de esta página).

### Gladys no se abre después de la instalación: ¿qué debo comprobar?

1. **¿El contenedor está en marcha?** `sudo docker ps` debería mostrar `gladys` con el estado `Up`. Si no aparece o se reinicia sin parar, lee sus registros con `sudo docker logs gladys --tail=100` (consulta [cómo descargar los registros de Gladys](/es/docs/installation/logs)).
2. **¿El puerto 80 ya está ocupado?** Gladys escucha en el puerto 80 de la máquina. Si otro servidor web (Apache, Nginx…) ya lo usa, Gladys no puede arrancar. Detén ese servidor o mueve Gladys a otro puerto: elimina el contenedor con `sudo docker rm -f gladys` (tus datos en `/var/lib/gladysassistant` se conservan), vuelve a ejecutar el [comando de instalación](#start-gladys) con `-e SERVER_PORT=8080` **en lugar de** `-e SERVER_PORT=80` y abre `http://IP-DE-LA-MAQUINA:8080`.
3. **¿Lo bloquea un cortafuegos?** Si `ufw` está activado, abre el puerto que usa Gladys: `sudo ufw allow 80/tcp` (o `8080/tcp` si lo has cambiado).
4. **¿`gladysassistant.local` no se abre?** Usa en su lugar la dirección IP de la máquina, como se explica [más arriba](#si-gladysassistantlocal-no-se-abre).

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿En qué sistemas puedo ejecutar Gladys con Docker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La instalación con Docker funciona en cualquier sistema que ejecute Docker: un mini-PC, un NAS como Synology o Unraid, un servidor Linux, una Raspberry Pi o una máquina virtual. El mismo comando único inicia Gladys en todos ellos. En un servidor Proxmox, sigue la guía de Proxmox.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo actualizo Gladys cuando se ejecuta en Docker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La forma más sencilla es ejecutar el contenedor de Watchtower. Detecta las nuevas imágenes de Gladys y actualiza tu contenedor automáticamente cuando se publica una nueva versión, así que no tienes que actualizar a mano.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo ejecutar Gladys en un NAS Synology o Unraid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Siempre que tu NAS pueda ejecutar contenedores Docker, puedes ejecutar Gladys en él con el mismo comando. Es una forma muy popular de autoalojar Gladys en un hardware que ya tienes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo instalar Gladys en Debian o Ubuntu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, y los pasos son los mismos en ambos: instala Docker con el script oficial y luego inicia el contenedor de Gladys con el comando de arriba. Funciona cualquier versión de Debian o Ubuntu compatible con Docker, en un mini-PC, un servidor o una máquina virtual. En una instalación mínima de Debian, instala primero curl y sudo (consulta el consejo al principio de esta página).",
        },
      },
      {
        "@type": "Question",
        name: "Gladys no se abre después de la instalación: ¿qué debo comprobar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprueba primero con sudo docker ps que el contenedor está en marcha y lee sus registros con sudo docker logs gladys si no aparece o se reinicia. Comprueba después que ningún otro servidor web (Apache, Nginx) usa ya el puerto 80, o mueve Gladys a otro puerto: elimina el contenedor con sudo docker rm -f gladys (tus datos se conservan) y vuelve a ejecutar el comando de instalación con -e SERVER_PORT=8080 en lugar de -e SERVER_PORT=80. Si el cortafuegos ufw está activado, abre el puerto que usa Gladys, por ejemplo con sudo ufw allow 80/tcp. Por último, si gladysassistant.local no se abre, usa la dirección IP de la máquina.",
        },
      },
    ],
  }}
/>
