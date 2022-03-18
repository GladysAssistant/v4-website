---
id: docker
title: Installation with Docker
sidebar_label: Docker
---

In this tutorial, we go through the instructions for installing Gladys Assistant with Docker. This tutorial works for any system (Raspberry Pi, Ubuntu VM, Synology NAS).

## Install Docker

To install Docker, simply run the command :

```bash
curl -sSL https://get.docker.com | sh
```

Once Docker is installed, add your linux user to the Docker group. If you are on a Raspberry Pi, you can run this command to add the "pi" user to the "docker"group:

```
sudo usermod -aG docker pi
```

Exit your SSH session, and login again in order for the changes to takes effect.

To verify that Docker is working as expected, type:

```
docker ps
```

It should show an empty list of running container.

If you have any issues installing Docker, have a look at the [docker documentation](https://docs.docker.com/). Look for instructions pertaining to your system.

## Start Gladys

You can start a Gladys container with the command:

```bash
docker run -d \
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
gladysassistant/gladys:v4
```

Note:

- `-e TZ=Europe/Paris` => Timezone used by container. Feel free to consult [this list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on wikipedia if you need to change this value.

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

## Accessing Gladys

You can access Gladys directly by typing the IP of your machine (the Raspberry Pi for example) in your browser.

To find the IP, just type `ifconfig` on the linux machine shell, or use a network scanner app ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) on Android or [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) on iOS)
