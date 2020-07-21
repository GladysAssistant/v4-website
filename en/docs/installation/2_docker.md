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

If you tried the alpha before the beta, you need to remove the `/var/lib/gladysassistant` folder to ensure all files from the alpha are deleted. Warning: you'll lose any data saved in Gladys alpha.

```bash
docker run -d \
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
gladysassistant/gladys:4.0.0-beta-arm
```

Note:

- If you are on a x64/x86 architecture, you can change the image to `gladysassistant/gladys:4.0.0-beta-amd64`
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
  containrrr/watchtower:armhf-latest \
  --cleanup
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
gladysassistant/gladys:4.0.0-beta-amd64
```

You can edit the open ports / network mode depending of your system.
