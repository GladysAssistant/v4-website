---
id: proxmox
title: Install Gladys Assistant on Proxmox VE
description: "Install Gladys Assistant on Proxmox VE in a virtual machine with Gladys Assistant OS, our official installer: create the VM, install Gladys in a few questions, and pass through your Zigbee dongle and Bluetooth adapter over USB."
sidebar_label: Install on Proxmox
keywords:
  - gladys proxmox
  - install gladys assistant proxmox
  - gladys assistant os proxmox
  - proxmox home automation
  - proxmox zigbee usb passthrough
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

If you already run a [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) server at home, you can host Gladys Assistant on it next to your other services.

We recommend running Gladys in a **virtual machine (VM)** installed with **[Gladys Assistant OS](/docs/installation/mini-pc/)**, our official installer: the same one as on a mini-PC. It installs Ubuntu Server, Docker and Gladys in the VM, then keeps Gladys up to date automatically. A VM behaves like a real computer: your Zigbee dongle is passed through over USB, and Gladys is reachable at `gladysassistant.local` on your network.

:::note
This guide uses the menu names of the Proxmox web interface in English, on Proxmox VE 8 and 9.
:::

## Step 1: Download Gladys Assistant OS to Proxmox

In the Proxmox web interface, select your storage (usually **local**), open **ISO Images**, then click on **Download from URL**.

Paste the link of the Gladys Assistant OS image, click on **Query URL**, then on **Download**:

```
https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso
```

:::tip[Check the download]
In the same window, tick **Advanced**, choose **SHA-256** as hash algorithm and paste the checksum published in [this file](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso.sha256) (only the long series of characters, without the file name). Proxmox then checks the image after downloading it.
:::

## Step 2: Create the virtual machine

Click on **Create VM** at the top right and go through the wizard:

- **General**: name the VM `gladys`. Tick **Advanced**, then **Start at boot**, so Gladys starts again after a reboot of the server.
- **OS**: select the `gladys-assistant-installer-amd64.iso` image you just downloaded.
- **System**: set **BIOS** to **OVMF (UEFI)**: Gladys Assistant OS only starts in UEFI mode. Keep **Add EFI Disk** ticked and choose a storage for it. Also tick **Qemu Agent**.
- **Disks**: **32 GB** is enough to start (16 GB minimum). Gladys keeps the history of your sensors, so give it more if you have a lot of devices.
- **CPU**: **2 cores**. Choose the **host** type for the best performance (in a cluster with different CPU models, see the FAQ below).
- **Memory**: **4096 MB** (4 GB) to start. Plan **6 to 8 GB** as soon as you use Zigbee2MQTT and several integrations, which each run in their own container. You can raise it later from the **Hardware** tab: the change applies once you shut the VM down and start it again.
- **Network**: keep the default bridge (`vmbr0`) and the **VirtIO** model, so the VM gets an address on your home network like any other device.

Confirm, then start the VM.

## Step 3: Install Gladys Assistant OS

Open the **Console** of the VM. The menu of Gladys Assistant OS appears, with **Install Gladys Assistant** highlighted, and starts on its own after 3 seconds.

Then answer the installer's questions exactly as on a mini-PC: language, keyboard, your account and SSH. See [step 4 of the mini-PC guide](/docs/installation/mini-pc/#installer-questions) for the details. The virtual disk of the VM is its only disk, so there is nothing to choose: when the installer asks you to confirm the erasure of the disk, only this virtual disk is erased, never the disks of your Proxmox server.

At the end of the installation, the VM restarts. Remove the image from the VM first, so it does not start the installer again: in the **Hardware** tab, double-click on **CD/DVD Drive** and choose **Do not use any media**. Then, if the console asks you to remove the installation medium, press **Enter**.

On this first boot, Gladys Assistant OS installs Docker, downloads Gladys and starts it: follow the progress in the console. When it shows **Gladys Assistant is ready**, open **`http://gladysassistant.local`** from a computer on the same network. If that name does not open, use the IP address displayed in the console instead: `http://VM-IP`.

## Step 4: Install the Qemu guest agent

The Qemu guest agent lets Proxmox show the IP address of the VM and shut it down cleanly. Log in to the VM with the account you created during the installation, in the console or over SSH (`ssh your-username@gladysassistant.local`), then run:

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
```

```bash
sudo reboot
```

We also recommend giving the VM a fixed IP address with a DHCP reservation in your router: the IP address of the VM is shown in its **Summary** tab once the guest agent runs.

## Step 5: Pass through your Zigbee dongle (and Bluetooth)

If you use a USB Zigbee coordinator, plug it into the Proxmox server, then give it to the VM:

1. Select the VM, open **Hardware**, then click on **Add** > **USB Device**.
2. Choose **Use USB Vendor/Device ID** and select your dongle in the list (for example a SONOFF Zigbee dongle).
3. Click on **Add**, then restart the VM so it sees the device.

Choosing the dongle by its vendor/device ID, rather than by USB port, means the VM finds it again even if you plug it into another port. You can do the same from the shell of the Proxmox host: find the ID with `lsusb`, then run `qm set <VM ID> -usb0 host=<vendor>:<device>`.

In the VM, check that the dongle shows up:

```bash
ls /dev/serial/by-id/
```

Do the same for a **USB Bluetooth adapter** if you want to use Bluetooth sensors or pair Matter devices over Bluetooth, then install BlueZ in the VM:

```bash
sudo apt install -y bluez
```

:::tip[A network coordinator avoids USB passthrough]
With an Ethernet Zigbee coordinator (such as the SMLIGHT SLZB-06), there is nothing to pass through: Gladys reaches it over the network, and you can move the VM to another Proxmox node freely. See [Use a network coordinator](/docs/integrations/zigbee2mqtt#use-a-network-coordinator).
:::

## Step 6: Back up the VM

If you use [Gladys Plus](/docs/plus/intro), it already backs up your Gladys every day, encrypted. On Proxmox you can add a backup of the whole VM: in **Datacenter** > **Backup**, schedule a regular backup of the `gladys` VM. Before a big change, you can also take a snapshot from the **Snapshots** tab of the VM.

## Prefer to install Debian yourself?

Gladys Assistant OS dedicates the VM to Gladys and takes care of the updates. If you'd rather manage the system yourself, create the VM the same way, install Debian or Ubuntu Server on it, then follow the [Docker installation guide](/docs/installation/docker).

## Frequently asked questions

### Should I use a VM or an LXC container?

We recommend a VM installed with Gladys Assistant OS because it is the simplest: Gladys installs and updates itself, and the USB dongle, Bluetooth and IPv6 for Matter behave like on a physical machine. An LXC container also works, and several experienced community members run Gladys that way: it uses a little less RAM, and its resources can be changed without a restart. But Gladys Assistant OS cannot be installed in an LXC: you install Docker and Gladys yourself, Docker inside an LXC needs a privileged container with nesting enabled, and passing USB devices and IPv6 to the container takes extra configuration. If you are comfortable with that, an LXC is a fine choice; otherwise, go for the VM.

### How much RAM and disk does the Gladys VM need?

Start with 2 CPU cores, 4 GB of RAM and a 32 GB disk. Community members who run Zigbee2MQTT and several integrations find that 4 GB quickly gets tight: plan 6 to 8 GB in that case. You can raise the RAM at any time, the change applies once you shut the VM down and start it again. Give the VM more disk if you keep a long history for many sensors.

### Does Matter work in a Proxmox VM?

Yes. Matter relies on IPv6, so IPv6 must be enabled on your router and in the VM. Ubuntu, on which Gladys Assistant OS is based, enables it by default: check that the network interface of the VM (not the `lo` loopback) has an IPv6 address with `ip -6 addr`. See the [Matter integration](/docs/integrations/matter) for the rest of the setup.

### Can I move the Gladys VM to another Proxmox node?

Yes, but a USB device passed through to the VM stays attached to the server it is plugged into: move the dongle with the VM, or use a network Zigbee coordinator, which works from any node. In a cluster whose nodes have different CPU models, also keep the default CPU type of the VM instead of **host**, otherwise live migration can fail.

### Can Gladys monitor my Proxmox server?

Yes. The community [Proxmox integration](/docs/integrations/external/proxmox) shows the state of your VMs and containers and the result of your backups in Gladys, so you can get notified when a backup fails.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I use a VM or an LXC container?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend a VM installed with Gladys Assistant OS because it is the simplest: Gladys installs and updates itself, and the USB dongle, Bluetooth and IPv6 for Matter behave like on a physical machine. An LXC container also works, and several experienced community members run Gladys that way: it uses a little less RAM, and its resources can be changed without a restart. But Gladys Assistant OS cannot be installed in an LXC: you install Docker and Gladys yourself, Docker inside an LXC needs a privileged container with nesting enabled, and passing USB devices and IPv6 to the container takes extra configuration. If you are comfortable with that, an LXC is a fine choice; otherwise, go for the VM.",
        },
      },
      {
        "@type": "Question",
        name: "How much RAM and disk does the Gladys VM need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with 2 CPU cores, 4 GB of RAM and a 32 GB disk. Community members who run Zigbee2MQTT and several integrations find that 4 GB quickly gets tight: plan 6 to 8 GB in that case. You can raise the RAM at any time, the change applies once you shut the VM down and start it again. Give the VM more disk if you keep a long history for many sensors.",
        },
      },
      {
        "@type": "Question",
        name: "Does Matter work in a Proxmox VM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Matter relies on IPv6, so IPv6 must be enabled on your router and in the VM. Ubuntu, on which Gladys Assistant OS is based, enables it by default: check that the network interface of the VM (not the lo loopback) has an IPv6 address with ip -6 addr.",
        },
      },
      {
        "@type": "Question",
        name: "Can I move the Gladys VM to another Proxmox node?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but a USB device passed through to the VM stays attached to the server it is plugged into: move the dongle with the VM, or use a network Zigbee coordinator, which works from any node. In a cluster whose nodes have different CPU models, also keep the default CPU type of the VM instead of host, otherwise live migration can fail.",
        },
      },
      {
        "@type": "Question",
        name: "Can Gladys monitor my Proxmox server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The community Proxmox integration shows the state of your VMs and containers and the result of your backups in Gladys, so you can get notified when a backup fails.",
        },
      },
    ],
  }}
/>
