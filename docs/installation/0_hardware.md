---
id: hardware
title: Recommended hardware
sidebar_label: The hardware
slug: /
---

Gladys Assistant is a program that runs on any Linux machine: a PC running Ubuntu, a Raspberry Pi, a NAS, a VPS, a server...

Let's summarize the different options:

- **A PC running Ubuntu**: More and more users are running Gladys on a mini-PC, like a Dell Optiplex 3040, an Intel NUC, or any Linux computer. These machines are very stable, durable, and can be found around 100€ used or refurbished. In my opinion, in 2023, this is one of the most interesting options to install Gladys.

[How to install Gladys with Docker on a PC](/docs/installation/docker/).

- **A Raspberry Pi**: It is possible to install Gladys on a Raspberry Pi with our ready-made Raspberry Pi OS image. However, with the shortage of semiconductors, Raspberry Pi's are hard to find and have become very expensive! We don't recommend using a micro-SD to store your data (because micro-SDs are very easily corrupted), you have to use an SSD. This manipulation is not necessarily easy to do, and from the moment you connect an SSD + a Zigbee dongle for example, you can have power supply problems because the Pi is not made to connect so many devices. That's why today, using a mini-PC can be a simpler and more stable option.

[How to install Gladys on a Raspberry Pi](/docs/installation/raspberry-pi/).

- **A NAS** : Gladys runs on a NAS, either a Unraid NAS ([tutorial here](/docs/installation/unraid/)), or a Synology NAS ([tutorial here](/docs/installation/synology/)).

A NAS is often a very stable, durable machine. It is a very good option to start with Gladys.

If you have any questions about the hardware to use, come and ask us on the [online community](https://en-community.gladysassistant.com/).
