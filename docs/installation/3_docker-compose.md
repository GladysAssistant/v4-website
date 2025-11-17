---
id: docker-compose
title: Install Gladys Assistant with Docker Compose
sidebar_label: Install with Docker Compose
---

This tutorial explains how to manually install Gladys using Docker Compose, regardless of the machine you are running Gladys on: a mini-PC, a Synology NAS, a Linux VM, or any other setup.

## Prerequisites

To install Docker Compose, you just need to install Docker:

```bash
curl -sSL https://get.docker.com | sh
```

If you want to verify that Docker Compose is active on your system, type:

```bash
sudo docker compose version
```

In my case, I see the following displayed:

```bash
gladys@gladys:~$ docker compose version
Docker Compose version v2.24.5
```

## Create the Docker Compose Configuration File

```yaml
version: "3"

services:
  gladys:
    image: gladysassistant/gladys:v4
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
  watchtower:
    image: nickfedor/watchtower
    restart: always
    container_name: watchtower
    command: --cleanup --include-restarting
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

Save this file in a directory on your system.

## Configure Gladys Assistant

Some settings you can customize:

- `SERVER_PORT: 80` → You can change the default port of the Gladys interface.
- `TZ: Europe/Paris` → To change the container's time zone. You can find all possible values in [this list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Start Gladys Assistant

To start Gladys (and Watchtower), run the following command:

```bash
sudo docker compose up -d
```

Note:

- `-d` => This option allows you to run the containers in detached mode. This way, you can disconnect, and the containers will continue to run.

## Access Gladys Assistant

You can access Gladys by entering your machine's IP address in your browser.

:::note
Note: You must be on the same network as the machine!
:::

To find your machine's IP address on your local network, you can use applications like:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) on Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) on iOS
