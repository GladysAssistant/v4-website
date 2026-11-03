---
id: windows
title: "Gladys Assistant on Windows: possible, but not recommended"
description: "Can you install Gladys Assistant on a Windows PC? Technically yes, but we advise against it: USB dongles, Bluetooth and network discovery do not work well. Here is what to do instead."
sidebar_label: Windows (not recommended)
keywords:
  - gladys assistant windows
  - install gladys windows
  - gladys windows 11
  - gladys docker desktop
  - home automation windows pc
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Short answer: we do not recommend running Gladys Assistant on Windows.**

Gladys is designed to run on Linux, in Docker. On Windows, Docker itself runs inside a hidden Linux virtual machine (WSL 2). Gladys then sees that virtual machine, not your PC: it cannot reach your USB dongles, your Bluetooth adapter or your local network the way it needs to. Most of what makes a smart home useful stops working, or needs fragile workarounds.

The good news: a dedicated machine for Gladys costs little, and it is much simpler.

## What does not work with Docker Desktop

If you start Gladys with Docker Desktop on Windows, here is what you will run into:

- **Zigbee and Z-Wave USB dongles**: the dongle is plugged into Windows, not into the Docker virtual machine. Passing it through requires extra tools (`usbipd-win`) and often breaks after a reboot.
- **Bluetooth**: not available inside the Docker virtual machine, so no Bluetooth sensors and no Matter pairing over Bluetooth.
- **Local network**: the `--network=host` option of the [installation command](/docs/installation/docker) does not give Gladys access to your home network on Windows. `gladysassistant.local` does not work, and the discovery of devices on the network (Matter, cameras, Philips Hue, network scan…) is unreliable or does not work at all.
- **Restart and shutdown from Gladys**: these actions drive a Linux host, so they do nothing on Windows.
- **Availability**: a smart home must run 24/7. A desktop PC goes to sleep, gets turned off, and Windows updates restart it on their own schedule: your scenes and alarms stop with it.

## What we recommend instead

### Best option: a small dedicated machine

A mini-PC or a Raspberry Pi uses a few watts, stays on all the time, and runs Gladys with the official installation, with nothing to work around.

- 👉 [Install Gladys on a mini-PC](/docs/installation/mini-pc) (recommended)
- 👉 [Install Gladys on a Raspberry Pi](/docs/installation/raspberry-pi)

If you already have a NAS or a home server, you can also use it: see the [Synology](/docs/installation/synology) and [Unraid](/docs/installation/unraid) guides, or the [Docker installation guide](/docs/installation/docker) for any Linux server.

### If you really want to use your Windows PC: a Linux virtual machine

If you want to try Gladys on the PC you already have, run it in a **Linux virtual machine**, not with Docker Desktop. This is also the approach Home Assistant documents for Windows.

1. Install a hypervisor such as [VirtualBox](https://www.virtualbox.org/).
2. Create a virtual machine with **2 CPU cores**, **4 GB of RAM** and a **32 GB** disk, and install Debian or Ubuntu Server in it.
3. Set its network adapter to **Bridged Adapter**, so the virtual machine gets its own address on your home network.
4. Give it your Zigbee dongle with a **USB filter** in the USB settings of the virtual machine (or use a [network coordinator](/docs/integrations/zigbee2mqtt#use-a-network-coordinator), which needs no USB at all).
5. Follow the [Docker installation guide](/docs/installation/docker) inside the virtual machine.

Keep in mind that the PC must stay on, and that sleep mode must be turned off. That is why this setup is fine to try Gladys, but a dedicated machine remains the better long-term choice.

## Frequently asked questions

### Can I install Gladys Assistant with Docker Desktop on Windows?

Gladys starts, but without access to USB dongles, Bluetooth and your local network, most integrations do not work properly. We do not support this setup. Use a dedicated mini-PC or Raspberry Pi, or at least a Linux virtual machine with a bridged network.

### Does WSL 2 work?

Not better: Docker Desktop already runs on WSL 2, and WSL 2 has the same limits on USB, Bluetooth and the local network.

### And on a Mac?

The problem is the same: Docker Desktop on macOS also runs Docker in a hidden virtual machine. Use a dedicated machine for Gladys.

### Is there a Windows version of Gladys?

No. Gladys runs in Docker on Linux, which covers mini-PCs, Raspberry Pis, NAS and servers. You can control it from any browser on Windows, and from your phone.

### I am a developer on Windows, how do I contribute to Gladys?

That is a different use: to code on Gladys from Windows, follow the [Windows development environment guide](/docs/dev/setup-development-environment-windows), which uses WSL 2 and VS Code.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I install Gladys Assistant with Docker Desktop on Windows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys starts, but without access to USB dongles, Bluetooth and your local network, most integrations do not work properly. We do not support this setup. Use a dedicated mini-PC or Raspberry Pi, or at least a Linux virtual machine with a bridged network.",
        },
      },
      {
        "@type": "Question",
        name: "Does WSL 2 work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not better: Docker Desktop already runs on WSL 2, and WSL 2 has the same limits on USB, Bluetooth and the local network.",
        },
      },
      {
        "@type": "Question",
        name: "And on a Mac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The problem is the same: Docker Desktop on macOS also runs Docker in a hidden virtual machine. Use a dedicated machine for Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a Windows version of Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Gladys runs in Docker on Linux, which covers mini-PCs, Raspberry Pis, NAS and servers. You can control it from any browser on Windows, and from your phone.",
        },
      },
      {
        "@type": "Question",
        name: "I am a developer on Windows, how do I contribute to Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That is a different use: to code on Gladys from Windows, follow the Windows development environment guide, which uses WSL 2 and VS Code.",
        },
      },
    ],
  }}
/>
