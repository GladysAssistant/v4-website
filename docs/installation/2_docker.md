---
id: docker
title: Install Gladys Assistant with Docker
sidebar_label: Install with Docker
---

In this tutorial, we go through the instructions for installing Gladys Assistant with Docker. This tutorial works for any system (Mini-PC, NAS, Linux Server, VM...).

## Install Docker

To install Docker, simply run the command:

```bash
curl -sSL https://get.docker.com | sh
```

To verify that Docker is working as expected, type:

```bash
sudo docker ps
```

It should show an empty list of running containers.

If you have any issues installing Docker, have a look at the [docker documentation](https://docs.docker.com/). Look for instructions pertaining to your system.

## Start Gladys

You can start a Gladys container with the command:

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
gladysassistant/gladys:v4
```

Note:

- `-d` => Run container in background
- `--log-driver json-file` => Configure container logging
- `--log-opt max-size=10m` => Limit log file size to 10MB
- `--cgroupns=host` => Use host's cgroup namespace
- `--restart=always` => Automatically restart container
- `--privileged` => Give extended privileges to container
- `--network=host` => Use host network stack
- `-e` => Set environment variables
- `-v` => Mount volumes
- `TZ=Europe/Paris` => Timezone used by container. Feel free to consult [this list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on wikipedia if you need to change this value.

## Auto-Upgrade Gladys with Watchtower

You can use Watchtower to upgrade automatically Gladys when a new version is available. To do so, start a Watchtower container:

```bash
sudo docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup --include-restarting
```

## Accessing Gladys

You can access Gladys by entering the machine's IP address in your browser.

:::note
Note: You must be on the same network as the machine!
:::

To find your machine's IP address on your local network, you can use applications like:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) on Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) on iOS
