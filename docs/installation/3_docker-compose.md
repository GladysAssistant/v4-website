---
id: docker-compose
title: Installation with Docker Compose
sidebar_label: Docker Compose
---

In this tutorial, we go through the instructions for installing Gladys Assistant with Docker Compose. This tutorial works for any system (Raspberry Pi, Ubuntu VM, Synology NAS).

## Requirements

To install Docker Compose, you must first install Docker. Please refer to [Install Docker documentation](/docs/installation/docker)

### Install Docker Compose

You should install Docker Compose v2 as a Docker plugin. To do so, you can follow the [official documentation](https://docs.docker.com/compose/install/#scenario-two-install-the-compose-plugin)

## Copy/Import the Gladys Docker Compose file descriptor

You can find a Docker Compose file example on our github repository : https://raw.githubusercontent.com/GladysAssistant/Gladys/master/docker/docker-compose.yml

Save this file into a directory on your system.

Things you may want to change:

- `SERVER_PORT: 80` => You can change the default port where the Gladys UI will be exposed. 
- `TZ: Europe/Paris` => Timezone used by container. Feel free to consult [this list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on wikipedia if you need to change this value.

## Start Gladys

You can start Gladys (and Watchtower) containers with the command:

```bash
docker compose up -d
```

Note:

- `-d` => This option is launching the containers in a detached mode, meaning you can disconnect and the containers will stay.

## Accessing Gladys

You can access Gladys directly by typing the IP of your machine (the Raspberry Pi for example) in your browser.

To find the IP, just type `ifconfig` on the linux machine shell, or use a network scanner app ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) on Android or [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) on iOS)
