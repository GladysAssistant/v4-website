---
id: proxmox
title: Install Gladys Assistant on Proxmox VE
description: "Install Gladys Assistant on Proxmox VE in a Debian virtual machine: create the VM, pass through your Zigbee dongle and Bluetooth adapter over USB, and run Gladys with Docker."
sidebar_label: Install on Proxmox
keywords:
  - gladys proxmox
  - install gladys assistant proxmox
  - proxmox home automation
  - proxmox zigbee usb passthrough
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

If you already run a [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) server at home, you can host Gladys Assistant on it next to your other services.

We recommend running Gladys in a **virtual machine (VM) with Debian**, then installing it with Docker exactly like on any Linux server. A VM behaves like a real computer: the official installation command works as is, your Zigbee dongle is passed through over USB, and Gladys is reachable at `gladysassistant.local` on your network.

:::note
This guide uses the menu names of the Proxmox web interface in English, on Proxmox VE 8 and 9.
:::

## Step 1: Download the Debian ISO

In the Proxmox web interface, select your storage (usually **local**), open **ISO Images**, then click on **Download from URL**.

Paste the link of the latest Debian "netinst" image for your architecture (amd64 for most mini-PCs and servers), available on the [Debian website](https://www.debian.org/distrib/netinst), click on **Query URL**, then on **Download**.

Ubuntu Server works just as well if you prefer it: only the installation in step 3 is different.

## Step 2: Create the virtual machine

Click on **Create VM** at the top right and go through the wizard:

- **General**: name the VM `gladys`. Tick **Advanced**, then **Start at boot**, so Gladys starts again after a reboot of the server.
- **OS**: select the ISO you just downloaded.
- **System**: tick **Qemu Agent**.
- **Disks**: **32 GB** is enough to start. Gladys keeps the history of your sensors, so give it more if you have a lot of devices.
- **CPU**: **2 cores**. Choose the **host** type for the best performance (in a cluster with different CPU models, see the FAQ below).
- **Memory**: **4096 MB** (4 GB) to start. Plan **6 to 8 GB** as soon as you use Zigbee2MQTT and several integrations, which each run in their own container. You can raise it later from the **Hardware** tab: the change applies once you shut the VM down and start it again.
- **Network**: keep the default bridge (`vmbr0`) and the **VirtIO** model, so the VM gets an address on your home network like any other device.

Confirm, then start the VM.

## Step 3: Install Debian or Ubuntu Server

Open the **Console** of the VM and follow the installer. On Debian, at the **Software selection** step:

- untick the desktop environments (Gladys does not need one),
- tick **SSH server** and **standard system utilities**.

:::tip[Set up `sudo` first on Debian]
If you set a root password during the installation, Debian does not install `sudo`, and the commands of this guide need it. Log in as root with `su -`, then run:

```bash
apt update && apt install -y curl sudo
usermod -aG sudo your-user
```

Replace `your-user` with your username, then log out and back in.
:::

:::note[On Ubuntu Server]
The Ubuntu installer has no software selection step: just tick **Install OpenSSH server** when it asks. Ubuntu already comes with `sudo` and `curl`.
:::

Once the system is installed and the VM has rebooted, log in and install the Qemu guest agent, which lets Proxmox show the IP address of the VM and shut it down cleanly:

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
sudo reboot
```

We also recommend giving the VM a fixed IP address with a DHCP reservation in your router: the IP address of the VM is shown in its **Summary** tab once the guest agent runs.

## Step 4: Pass through your Zigbee dongle (and Bluetooth)

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

## Step 5: Install Gladys with Docker

The VM is now a regular Debian server. Follow the [Docker installation guide](/docs/installation/docker): install Docker with the official script, then start Gladys with the installation command, unchanged.

Then open **`http://gladysassistant.local`** from a computer on the same network. If that name does not open, use the IP address of the VM instead, as shown in its **Summary** tab: `http://VM-IP`.

## Step 6: Back up the VM

If you use [Gladys Plus](/docs/plus/intro), it already backs up your Gladys every day, encrypted. On Proxmox you can add a backup of the whole VM: in **Datacenter** > **Backup**, schedule a regular backup of the `gladys` VM. Before a big change, you can also take a snapshot from the **Snapshots** tab of the VM.

## Frequently asked questions

### Should I use a VM or an LXC container?

We recommend a VM because it is the simplest: the official installation works unchanged, and the USB dongle, Bluetooth and IPv6 for Matter behave like on a physical machine. An LXC container also works, and several experienced community members run Gladys that way: it uses a little less RAM, and its resources can be changed without a restart. But Docker inside an LXC needs a privileged container with nesting enabled, and passing USB devices and IPv6 to the container takes extra configuration. If you are comfortable with that, an LXC is a fine choice; otherwise, go for the VM.

### How much RAM and disk does the Gladys VM need?

Start with 2 CPU cores, 4 GB of RAM and a 32 GB disk. Community members who run Zigbee2MQTT and several integrations find that 4 GB quickly gets tight: plan 6 to 8 GB in that case. You can raise the RAM at any time, the change applies once you shut the VM down and start it again. Give the VM more disk if you keep a long history for many sensors.

### Does Matter work in a Proxmox VM?

Yes. Matter relies on IPv6, so IPv6 must be enabled on your router and in the VM. Debian enables it by default: check that the network interface of the VM (usually `ens18`, not the `lo` loopback) has an IPv6 address with `ip -6 addr show dev ens18`. See the [Matter integration](/docs/integrations/matter) for the rest of the setup.

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
          text: "We recommend a VM because it is the simplest: the official installation works unchanged, and the USB dongle, Bluetooth and IPv6 for Matter behave like on a physical machine. An LXC container also works, and several experienced community members run Gladys that way: it uses a little less RAM, and its resources can be changed without a restart. But Docker inside an LXC needs a privileged container with nesting enabled, and passing USB devices and IPv6 to the container takes extra configuration. If you are comfortable with that, an LXC is a fine choice; otherwise, go for the VM.",
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
          text: "Yes. Matter relies on IPv6, so IPv6 must be enabled on your router and in the VM. Debian enables it by default: check that the network interface of the VM (usually ens18, not the lo loopback) has an IPv6 address with ip -6 addr show dev ens18.",
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
