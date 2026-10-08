---
id: docker-compose
title: Instalar Gladys Assistant con Docker Compose
description: "Instala Gladys Assistant manualmente con Docker Compose en un mini-PC, un NAS Synology, una máquina virtual Linux o cualquier equipo con Docker."
sidebar_label: Instalación con Docker Compose
---

Este tutorial explica cómo instalar Gladys manualmente con Docker Compose, sea cual sea el equipo en el que lo ejecutes: un mini-PC, un NAS Synology, una máquina virtual Linux o cualquier otra configuración.

## Requisitos previos

Para instalar Docker Compose, solo tienes que instalar Docker:

```bash
curl -sSL https://get.docker.com | sh
```

Si quieres comprobar que Docker Compose está activo en tu sistema, escribe:

```bash
sudo docker compose version
```

En mi caso, se muestra lo siguiente:

```bash
gladys@gladys:~$ docker compose version
Docker Compose version v2.24.5
```

## Crear el archivo de configuración de Docker Compose

Escribe el siguiente texto en el archivo `gladys-compose.yml`.
```yaml
services:
  gladys:
    image: gladysassistant/gladys:v5
    container_name: gladys
    restart: always
    privileged: true
    network_mode: host
    cgroup: host
    logging:
      driver: "json-file"
      options:
        max-size: 10m
    environment:
      NODE_ENV: production
      SQLITE_FILE_PATH: /var/lib/gladysassistant/gladys-production.db
      SERVER_PORT: 80
      TZ: Europe/Paris
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/gladysassistant:/var/lib/gladysassistant
      - /dev:/dev
      - /run/udev:/run/udev:ro
      # Bus del sistema del host: reinicio/apagado desde los ajustes del sistema y
      # requisito para el Bluetooth (emparejamiento Matter por BLE, sensores Bluetooth)
      - /run/dbus:/run/dbus:ro
  watchtower:
    image: nickfedor/watchtower
    restart: always
    container_name: watchtower
    command: --cleanup --include-restarting
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

Guarda este archivo en un directorio de tu sistema.

## Configurar Gladys Assistant

Algunos ajustes que puedes personalizar:

- `SERVER_PORT: 80` → Puedes cambiar el puerto predeterminado de la interfaz de Gladys.
- `TZ: Europe/Paris` → Para cambiar la zona horaria del contenedor (por ejemplo `Europe/Madrid` o `America/Mexico_City`). Encontrarás todos los valores posibles en [esta lista](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Iniciar Gladys Assistant

Para iniciar Gladys (y Watchtower), ejecuta el siguiente comando:

```bash
sudo docker compose -f gladys-compose.yml up -d
```

Nota:

- `-d` => Esta opción permite ejecutar los contenedores en segundo plano (modo "detached"). Así puedes desconectarte y los contenedores seguirán funcionando.

## Acceder a Gladys Assistant

Abre **`http://gladysassistant.local`** en tu navegador. Gladys anuncia ese nombre en tu red local mediante mDNS, así que puedes acceder a él desde cualquier dispositivo de la misma red sin tener que buscar nunca una dirección IP.

:::note
Debes estar en la misma red que el equipo.
:::

Si tienes varias instancias de Gladys en casa, puedes cambiar el nombre de cada una en **Ajustes → Sistema → Dirección local (mDNS)**. El cambio se aplica de inmediato, sin necesidad de reiniciar.

### Si `gladysassistant.local` no se abre

mDNS está integrado en macOS, iOS y Windows 10 y posteriores, y funciona en la mayoría de las redes domésticas. Aun así, algunas configuraciones lo bloquean: ciertas versiones de Android, las redes de invitados y los routers con el aislamiento de clientes activado. Además, Gladys solo se anuncia cuando se ejecuta en la red del host, que es lo que hace la configuración anterior.

En ese caso, usa en su lugar la dirección IP del equipo en tu navegador. Para encontrarla en tu red local, puedes usar aplicaciones como:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) en Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) en iOS
