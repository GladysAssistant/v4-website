---
id: docker
title: Install Gladys with Docker on Debian, Ubuntu & more
description: "Install Gladys Assistant with Docker on Debian, Ubuntu or any system (mini-PC, NAS, Linux server, VM) in a single command. Free, open-source and self-hosted."
sidebar_label: Install with Docker
keywords:
  - install gladys docker
  - install gladys debian
  - install gladys ubuntu
  - gladys assistant docker
  - self-hosted home automation docker
  - run gladys on nas
  - gladys synology docker
---

import JsonLd from '@site/src/components/seo/JsonLd';

In this tutorial, we go through the instructions for installing Gladys Assistant with Docker. This tutorial works for any system (Mini-PC, NAS, Linux Server, VM...), and the steps are the same on Debian and Ubuntu.

## Install Docker

:::tip[On Debian, install `curl` and `sudo` first]
Ubuntu ships with `curl` and `sudo`, but a minimal Debian install often has neither, and the commands below need both. Log in as root with `su -`, then run:

```bash
apt update && apt install -y curl sudo
usermod -aG sudo your-user
```

Replace `your-user` with your username, log out and back in, then continue below. The rest of this guide is identical on Debian and Ubuntu.
:::

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
-v /run/dbus:/run/dbus:ro \
gladysassistant/gladys:v5
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
- `-v /run/dbus:/run/dbus:ro` => Gives Gladys access to the host's system bus. It is what lets you reboot or shut down the machine from the System settings, and it is the prerequisite for Bluetooth: pairing a Matter device over BLE and reading Bluetooth sensors both go through BlueZ, which is only reachable over that bus. The host needs BlueZ installed (`sudo apt install bluez` on Debian and Ubuntu).
- `TZ=Europe/Paris` => Timezone used by container. Feel free to consult [this list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on wikipedia if you need to change this value.

## Auto-Upgrade Gladys with Watchtower

You can use Watchtower to upgrade automatically Gladys when a new version is available. To do so, start a Watchtower container:

```bash
sudo docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  nickfedor/watchtower \
  --cleanup --include-restarting
```

## Accessing Gladys

Open **`http://gladysassistant.local`** in your browser. Gladys announces that name on your local network over mDNS, so you can reach it from any device on the same network without ever looking up an IP address.

:::note
You must be on the same network as the machine.
:::

If you run several Gladys instances at home, you can rename each one from **Settings → System → Local address (mDNS)**. The change takes effect immediately, no restart needed.

### If `gladysassistant.local` does not open

mDNS is built into macOS, iOS and Windows 10 and later, and works on most home networks. A few setups still block it: some Android versions, guest networks, and routers with client isolation turned on. Gladys also only advertises itself when it runs on the host network, which is what the command above does.

In that case, use the machine's IP address in your browser instead. To find it on your local network, you can use applications like:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) on Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) on iOS

:::tip[Set your own timezone]
The command above uses `TZ=Europe/Paris`. Replace it with your own value (for example `America/New_York` or `America/Toronto`) from the [timezone list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) so scenes and schedules run at the right local time.
:::

## Frequently asked questions

### What systems can I run Gladys with Docker on?

The Docker install works on any system that runs Docker: a mini-PC, a NAS (Synology, Unraid), a Linux server, a Raspberry Pi or a virtual machine. The same single command starts Gladys on all of them. On a Proxmox server, follow the [Proxmox guide](/docs/installation/proxmox).

### How do I update Gladys running in Docker?

The easiest way is to run the Watchtower container shown above. It watches for new Gladys images and upgrades your container automatically when a new version is released, so you do not have to update by hand.

### Can I run Gladys on a Synology or Unraid NAS?

Yes. As long as your NAS can run Docker containers, you can run Gladys on it with the same command. This is a popular way to self-host Gladys on hardware you already own.

### Can I install Gladys on Debian or Ubuntu?

Yes, and the steps are the same on both: install Docker with the official script, then start the Gladys container with the command above. Any Debian or Ubuntu version supported by Docker works, on a mini-PC, a server or a virtual machine. On a minimal Debian install, install `curl` and `sudo` first (see the tip at the top of this page).

### Gladys does not open after the installation: what should I check?

1. **Is the container running?** `sudo docker ps` should list `gladys` with an `Up` status. If it is missing or keeps restarting, read its logs with `sudo docker logs gladys --tail=100` (see [how to read Gladys logs](/docs/installation/logs)).
2. **Is port 80 already taken?** Gladys listens on port 80 of the machine. If another web server (Apache, Nginx…) already uses it, Gladys cannot start. Stop that server, or move Gladys to another port: remove the container with `sudo docker rm -f gladys` (your data in `/var/lib/gladysassistant` is kept), run the [install command](#start-gladys) again with `-e SERVER_PORT=8080` **instead of** `-e SERVER_PORT=80`, then open `http://MACHINE-IP:8080`.
3. **Is a firewall blocking it?** If `ufw` is enabled, allow the port Gladys uses: `sudo ufw allow 80/tcp` (or `8080/tcp` if you moved it).
4. **Does `gladysassistant.local` not resolve?** Use the IP address of the machine instead, as explained [above](#if-gladysassistantlocal-does-not-open).

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What systems can I run Gladys with Docker on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Docker install works on any system that runs Docker: a mini-PC, a NAS such as Synology or Unraid, a Linux server, a Raspberry Pi or a virtual machine. The same single command starts Gladys on all of them.",
        },
      },
      {
        "@type": "Question",
        name: "How do I update Gladys running in Docker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The easiest way is to run the Watchtower container. It watches for new Gladys images and upgrades your container automatically when a new version is released, so you do not have to update by hand.",
        },
      },
      {
        "@type": "Question",
        name: "Can I run Gladys on a Synology or Unraid NAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. As long as your NAS can run Docker containers, you can run Gladys on it with the same command. This is a popular way to self-host Gladys on hardware you already own.",
        },
      },
      {
        "@type": "Question",
        name: "Can I install Gladys on Debian or Ubuntu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and the steps are the same on both: install Docker with the official script, then start the Gladys container with the command above. Any Debian or Ubuntu version supported by Docker works, on a mini-PC, a server or a virtual machine. On a minimal Debian install, install curl and sudo first (see the tip at the top of this page).",
        },
      },
      {
        "@type": "Question",
        name: "Gladys does not open after the installation: what should I check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First check that the container is running with sudo docker ps, and read its logs with sudo docker logs gladys if it is missing or restarting. Then check that no other web server (Apache, Nginx) already uses port 80, or move Gladys to another port: remove the container with sudo docker rm -f gladys (your data is kept) and run the install command again with -e SERVER_PORT=8080 instead of -e SERVER_PORT=80. If the ufw firewall is enabled, allow the port Gladys uses, for example sudo ufw allow 80/tcp. Finally, if gladysassistant.local does not open, use the IP address of the machine.",
        },
      },
    ],
  }}
/>
