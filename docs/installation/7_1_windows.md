---
id: windows
title: "Gladys Assistant on Windows: possible, but not recommended"
description: "Can you install Gladys Assistant on a Windows PC? Technically yes, but we advise against it: USB dongles, Bluetooth and network discovery do not work well. Here is what to do instead, with Gladys Assistant OS."
sidebar_label: Windows (not recommended)
keywords:
  - gladys assistant windows
  - install gladys windows
  - gladys windows 11
  - gladys docker desktop
  - gladys virtualbox
  - home automation windows pc
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Short answer: we do not recommend running Gladys Assistant on Windows.**

Gladys is designed to run on Linux, in Docker. On Windows, Docker itself runs inside a hidden Linux virtual machine (WSL 2). Gladys then sees that virtual machine, not your PC: it cannot reach your USB dongles, your Bluetooth adapter or your local network the way it needs to. Most of what makes a smart home useful stops working, or needs fragile workarounds.

The good news: with [Gladys Assistant OS](/docs/installation/mini-pc), our official installer, a dedicated machine for Gladys is ready in about 30 minutes, without any command line. And you can prepare everything from your Windows PC.

## What does not work with Docker Desktop

If you start Gladys with Docker Desktop on Windows, or with Docker installed in a WSL 2 distribution (Ubuntu on WSL, for example), here is what you will run into:

- **Zigbee and Z-Wave USB dongles**: the dongle is plugged into Windows, not into the Docker virtual machine. Passing it through requires extra tools (`usbipd-win`) and often breaks after a reboot.
- **Bluetooth**: not available inside the Docker virtual machine, so no Bluetooth sensors and no Matter pairing over Bluetooth.
- **Local network**: Docker can forward ordinary connections to Gladys, but even with the `--network=host` option of the [installation command](/docs/installation/docker), Gladys does not get direct access to the network of your PC. `gladysassistant.local` does not work, and the discovery of devices on the network (Matter, cameras, Philips Hue, network scan…) is unreliable or does not work at all.
- **Restart and shutdown from Gladys**: these actions drive a Linux host, so they do nothing on Windows.
- **Availability**: a smart home must run 24/7. A desktop PC goes to sleep, gets turned off, and Windows updates restart it on their own schedule: your scenes and alarms stop with it.

## What we recommend instead

### Best option: a mini-PC with Gladys Assistant OS

A mini-PC uses a few watts, stays on all the time, and runs Gladys with nothing to work around. With [Gladys Assistant OS](/docs/installation/mini-pc), you write the installer to a USB drive from your Windows PC, start the mini-PC from it and answer a few questions: Gladys installs itself, then keeps itself up to date.

- 👉 [Install Gladys on a mini-PC with Gladys Assistant OS](/docs/installation/mini-pc) (recommended)
- 👉 [Install Gladys on a Raspberry Pi](/docs/installation/raspberry-pi), with our official image

**An old PC you no longer use can also become your Gladys box.** Gladys Assistant OS installs on any computer with an Intel or AMD processor that starts in UEFI mode, an SSD of at least 16 GB and an Ethernet port. It replaces Windows: the disk of that PC is erased.

If you already have a home server or a NAS, you can also use it: see the [Proxmox](/docs/installation/proxmox), [Synology](/docs/installation/synology) and [Unraid](/docs/installation/unraid) guides, or the [Docker installation guide](/docs/installation/docker) for any Linux server.

### To try Gladys on your Windows PC: a virtual machine

If you want to try Gladys on the PC you already use, install Gladys Assistant OS in a **virtual machine**, not with Docker Desktop. The virtual machine then behaves like a mini-PC on your network. This is also the approach Home Assistant documents for Windows.

1. Install [VirtualBox](https://www.virtualbox.org/), then download the [image of Gladys Assistant OS](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso) (an `.iso` file of about 2 GB).
2. In VirtualBox, click on **New**. Select the `gladys-assistant-installer-amd64.iso` image, choose the **Linux** type and the **Ubuntu (64-bit)** version. If VirtualBox offers an unattended installation, tick **Skip Unattended Installation**: the installer of Gladys Assistant OS asks its own questions. Give the virtual machine **2 CPU cores**, **4 GB of RAM** and a **32 GB** disk.
3. Before starting it, open its **Settings**:
   - in **System**, tick **Enable EFI**: Gladys Assistant OS only starts in UEFI mode;
   - in **Network**, set the adapter to **Bridged Adapter**, so the virtual machine gets its own address on your home network.
4. Start the virtual machine and answer the installer's questions as on a mini-PC: see [step 4 of the mini-PC guide](/docs/installation/mini-pc#installer-questions). Only the virtual disk of the virtual machine is erased, never the disk of your PC.
5. When the installer shows **Installation complete!**, remove the image first, so it does not start the installer again: in the menu of the virtual machine window, choose **Devices > Optical Drives > Remove disk from virtual drive**. Then select **Reboot Now**.
6. Gladys installs itself on this first boot. When the window of the virtual machine shows **Gladys Assistant is ready**, open **`http://gladysassistant.local`** in your browser on Windows.

To use your devices:

- **Zigbee dongle**: plug it into the PC, then in the **USB** settings of the virtual machine, enable the **USB 3.0 (xHCI) controller** and add a **USB filter** for your dongle: VirtualBox hands it over to the virtual machine each time it starts. If the dongle does not show up in the virtual machine, or keeps disconnecting, a [network coordinator](/docs/integrations/zigbee2mqtt#use-a-network-coordinator) avoids USB entirely.
- **Bluetooth**: to use Bluetooth sensors or pair Matter devices over Bluetooth, give the virtual machine a USB Bluetooth adapter the same way, with another USB filter, then install BlueZ in the virtual machine: `sudo apt install -y bluez`.

Keep in mind that the PC must stay on, and that sleep mode must be turned off. That is why this setup is fine to try Gladys, but a dedicated machine remains the better long-term choice. When you switch, a [Gladys Plus backup](/docs/installation/migrate) brings your whole setup over to the new machine.

Prefer to manage the system yourself? Install Debian or Ubuntu Server in the virtual machine instead, then follow the [Docker installation guide](/docs/installation/docker).

## Frequently asked questions

### Can I install Gladys Assistant with Docker Desktop on Windows?

Gladys starts, but without access to USB dongles, Bluetooth and your local network, most integrations do not work properly. We do not support this setup. Use a dedicated mini-PC installed with Gladys Assistant OS, or at least Gladys Assistant OS in a virtual machine with a bridged network.

### Does WSL 2 work?

Not better: Docker Desktop already runs on WSL 2, and Docker installed directly in a WSL 2 distribution (such as Ubuntu) runs in the same hidden virtual machine, with the same limits on USB, Bluetooth and the local network.

### Can I turn my old Windows PC into a Gladys box?

Yes, if you dedicate it to Gladys: Gladys Assistant OS replaces Windows with Ubuntu Server and Gladys, and keeps Gladys up to date. The PC needs an Intel or AMD processor that starts in UEFI mode, an SSD of at least 16 GB and an Ethernet port. Its disk is erased: back up your files first.

### And on a Mac?

The problem is the same: Docker Desktop on macOS also runs Docker in a hidden virtual machine. Use a dedicated machine for Gladys.

### Is there a Windows version of Gladys?

No. Gladys runs in Docker on Linux, which covers mini-PCs, Raspberry Pis, NAS and servers. On a mini-PC, Gladys Assistant OS installs all of it for you. You can control Gladys from any browser on Windows, and from your phone.

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
          text: "Gladys starts, but without access to USB dongles, Bluetooth and your local network, most integrations do not work properly. We do not support this setup. Use a dedicated mini-PC installed with Gladys Assistant OS, or at least Gladys Assistant OS in a virtual machine with a bridged network.",
        },
      },
      {
        "@type": "Question",
        name: "Does WSL 2 work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not better: Docker Desktop already runs on WSL 2, and Docker installed directly in a WSL 2 distribution (such as Ubuntu) runs in the same hidden virtual machine, with the same limits on USB, Bluetooth and the local network.",
        },
      },
      {
        "@type": "Question",
        name: "Can I turn my old Windows PC into a Gladys box?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you dedicate it to Gladys: Gladys Assistant OS replaces Windows with Ubuntu Server and Gladys, and keeps Gladys up to date. The PC needs an Intel or AMD processor that starts in UEFI mode, an SSD of at least 16 GB and an Ethernet port. Its disk is erased: back up your files first.",
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
          text: "No. Gladys runs in Docker on Linux, which covers mini-PCs, Raspberry Pis, NAS and servers. On a mini-PC, Gladys Assistant OS installs all of it for you. You can control Gladys from any browser on Windows, and from your phone.",
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
