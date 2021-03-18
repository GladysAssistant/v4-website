---
id: docker
title: Docker
sidebar_label: Docker
---

## On a Raspberry Pi

This tutorial is for Raspberry Pi owner who wants to install Gladys with Docker.

### Install Docker on the Raspberry Pi

```bash
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
```

Then exit your SSH session, and login again.

### Start Gladys

Simply start a Gladys container:

```bash
docker run -d \
--log-opt max-size=10m \
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
gladysassistant/gladys:v4
```

Note:

- `-e TZ=Europe/Paris` => Timezone used by container. Feel free to consult [this list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on wikipedia if you need to change this value.

### Accessing Gladys

You can access Gladys directly by typing the IP of your Raspberry Pi in your browser. To find the IP, just type `ifconfig` on the Raspberry Pi shell, or you can use a network scanner app to find the IP ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) on Android or [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) on iOS)

## Auto-Upgrade Gladys with Watchtower

You can use Watchtower to upgrade automatically Gladys when a new version is available. To do so, start a Watchtower container:

```
docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup --include-restarting
```

## On any system

You can run Gladys on any system:

- A Synology NAS
- A VM
- Any Linux machine
- On MacOS
- On Windows

### Install Docker

I recommend going to the [docker documentation](https://docs.docker.com/) and looking for instructions for your system.

### Start Gladys

Run the command:

```bash
docker run -d \
--log-opt max-size=10m \
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
gladysassistant/gladys:v4
```

You can edit the open ports / network mode depending of your system.
