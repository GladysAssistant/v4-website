---
title: Gladys Assistant is now compatible with Debian 11 & Ubuntu > 20.04
description: As Gladys runs in Docker, it could seems that it should be compatible with any system by default, but it's not as simple!
authors: pierregilles
image: /img/presentation/gladys-debian-11.jpg
slug: gladys-assistant-compatible-with-debian-11
---

Hi everyone,

I'm excited to announce that we just released the compatibility with Debian 11 and Ubuntu > 20.04.

We also released a bunch of improvement that will make it more easy to install Gladys on a NAS (Synology/Unraid).

No new features were added in this release, it's a lot of long-term work & bugfixes 🙂

<!--truncate-->

## What's new in Gladys Assistant 4.8.1?

### CGgroup v1 to v2

As Gladys runs entirely in Docker, it could seem easy: Gladys should be able to run smoothly on any system, right?

But Gladys works with the Docker daemon and start new containers for 2 integrations: MQTT & Zigbee2mqtt.

So it's a bit tied to the host on this part.

In Gladys, we need to get the container ID of the currently running Gladys container.

We were using CGroup v1 in Debian 10 to get the currently running container ID.

What we would do is that we would read the file `/proc/self/cgroup`, and we would get something like this:

```
3:rdma:/
12:cpuset:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
11:cpu,cpuacct:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
10:freezer:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
9:devices:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
8:blkio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
7:perf_event:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
6:net_cls,net_prio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
5:hugetlb:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
4:pids:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
2:memory:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
1:name=systemd:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
0::/system.slice/containerd.service
```

Then, we would parse this file to extract the container ID (the part after `/docker/`).

In Debian 11, CGroups are now in v2, and works a bit differently, the same file looks like this:

```
3:rdma:/
0::/system.slice/docker-2bb2c94b0c395fc8fdff9fa4ce364a3be0dd05792145ffc93ce8d665d06521f1.scope
```

So the parsing is a bit different to get the container ID, but it still there!

We wrote some custom code for Cgroup v1 & v2, and now support both.

### Custom volumes are now used by integrations

Let's imagine you start Gladys in a customer Docker volume:

```
-v /my_special_folder:/var/lib/gladysassistant
```

In Gladys, you might want to start Zigbee2mqtt/MQTT in the same folder, and it's now possible.

Gladys will take the same the folder on host, and use it for the Zigbee2mqtt & MQTT integration.

### Lots of bugfixes

- Fix a bug where updating a camera device would result in the device being polled several times at its poll frequency ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))
- Fix a bug in scene: The "Try" HTTP Request button was not taking headers into account. ([#1475](https://github.com/GladysAssistant/Gladys/pull/1475))
- Fix a bug on the dashboard: the dashboard name was not updated in the list when updated. ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))
- Add missing translations for the vibration sensor. ([#1461](https://github.com/GladysAssistant/Gladys/pull/1461))

## How to upgrade?

If you installed Gladys with the official Raspberry Pi OS image, your instance will update **automatically** in the coming hours. It can take up to 24 hours, don't panic.

If you installed Gladys with Docker, make sure you are using Watchtower. See the [documentation](/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

With Watchtower, Gladys will update automatically.

## Thanks to contributors

Thanks to everyone who contributed to this release and gave their feedback on the forum!

If you want to talk about this release, you're all welcome on the [forum](https://community.gladysassistant.com/) !
