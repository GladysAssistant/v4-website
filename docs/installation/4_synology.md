---
id: synology
title: Deploy Gladys on a Synology NAS with Docker
sidebar_label: Synology NAS
---

In this tutorial, we go through the instructions for installing Gladys Assistant on a compatible Synology NAS with Docker

## Install Docker on your NAS

You must install docker add-on from the 'Package Manager'
To fetch the list of compatible NAS, go to [docker package page](https://www.synology.com/en-global/dsm/packages/Docker)

## Gladys deployment through Docker

### Storage

For data persistence, we need to create a folder mount on the volume.

If not exist, create a _Shared folder_ named `docker` via _File Station_
In this folder, create another one named `gladysassistant`
**Warning**: In command line, folder path contain the volume name : `/volume1/docker/gladysassistant`

### Install Gladys via SSH

Connect to your NAS with SSH and run this command to create Gladys container.

```
sudo \
docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--cgroupns=host \
--name "gladys" \
-e NODE_ENV=production \
-e SERVER_PORT=8420 \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /volume1/docker/gladysassistant/:/var/lib/gladysassistant \
-v /etc/timezone:/etc/timezone:ro \
-v /etc/localtime:/etc/localtime:ro \
-v /dev:/dev \
gladysassistant/gladys:v4
```

**Notes:**

- `--name "gladys"` : Name of the container.
- `-v /volume1/docker/gladysassistant:...` : Path where datas will be persisted on your NAS.
- `-e SERVER_PORT=8420` : Port where Gladys will be exposed, you can change by any value not used by _Disk Station_ ( [Reserved port on Synology website](https://kb.synology.com/en-global/DSM/tutorial/What_network_ports_are_used_by_Synology_services) )

### Gladys access

Gladys will be accessible on your browser on `http://YOUR_NAS_IP:PORT`

For example `http://192.168.10.15:8420`

## Automatic updates via Watchtower

You can use Watchtower to update Gladys when new version is released.

Run this command to create Watchtower container.

```
 sudo docker run -d \
   --name watchtower \
   --log-opt max-size=10m \
   --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   containrrr/watchtower \
   --cleanup --include-restarting
```

It will check every day if your containers need to be updated.
