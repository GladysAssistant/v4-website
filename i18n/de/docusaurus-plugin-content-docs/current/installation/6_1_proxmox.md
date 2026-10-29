---
id: proxmox
title: Gladys Assistant auf Proxmox VE installieren
description: "Installiere Gladys Assistant auf Proxmox VE in einer Debian-VM: VM anlegen, Zigbee-Dongle und Bluetooth-Adapter per USB durchreichen und Gladys mit Docker starten."
sidebar_label: Installation auf Proxmox
keywords:
  - gladys proxmox
  - gladys assistant proxmox installieren
  - hausautomation proxmox
  - proxmox usb passthrough zigbee
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

Wenn du zu Hause schon einen [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview)-Server betreibst, kannst du Gladys Assistant dort neben deinen anderen Diensten hosten.

Wir empfehlen, Gladys in einer **virtuellen Maschine (VM) mit Debian** laufen zu lassen und es dann mit Docker genau wie auf jedem anderen Linux-Server zu installieren. Eine VM verhält sich wie ein echter Rechner: Der offizielle Installationsbefehl funktioniert unverändert, dein Zigbee-Dongle wird per USB durchgereicht und Gladys ist in deinem Netzwerk unter `gladysassistant.local` erreichbar.

:::note
Diese Anleitung verwendet die englischen Menünamen der Proxmox-Weboberfläche, unter Proxmox VE 8 und 9.
:::

## Schritt 1: Das Debian-ISO herunterladen

Wähle in der Proxmox-Weboberfläche deinen Speicher (meist **local**), öffne **ISO Images** und klicke auf **Download from URL**.

Füge den Link zum aktuellen Debian-„netinst“-Image für deine Architektur ein (amd64 für die meisten Mini-PCs und Server), zu finden auf der [Debian-Website](https://www.debian.org/distrib/netinst), klicke auf **Query URL** und dann auf **Download**.

Ubuntu Server funktioniert genauso gut, wenn dir das lieber ist: Nur die Installation in Schritt 3 ist anders.

## Schritt 2: Die virtuelle Maschine anlegen

Klicke oben rechts auf **Create VM** und gehe den Assistenten durch:

- **General**: Nenne die VM `gladys`. Setze den Haken bei **Advanced** und dann bei **Start at boot**, damit Gladys nach einem Neustart des Servers wieder startet.
- **OS**: Wähle das gerade heruntergeladene ISO.
- **System**: Setze den Haken bei **Qemu Agent**.
- **Disks**: **32 GB** reichen für den Anfang. Gladys speichert den Verlauf deiner Sensoren, gib also mehr, wenn du viele Geräte hast.
- **CPU**: **2 Kerne**. Wähle den Typ **host** für die beste Leistung (in einem Cluster mit unterschiedlichen CPU-Modellen siehe die FAQ unten).
- **Memory**: **4096 MB** (4 GB) für den Anfang. Plane **6 bis 8 GB** ein, sobald du Zigbee2MQTT und mehrere Integrationen nutzt, die jeweils in einem eigenen Container laufen. Du kannst den Wert später im Tab **Hardware** erhöhen: Die Änderung greift, sobald du die VM herunterfährst und wieder startest.
- **Network**: Behalte die Standard-Bridge (`vmbr0`) und das Modell **VirtIO**, damit die VM wie jedes andere Gerät eine Adresse in deinem Heimnetz bekommt.

Bestätige und starte die VM.

## Schritt 3: Debian oder Ubuntu Server installieren

Öffne die **Console** der VM und folge dem Installer. Unter Debian beim Schritt **Softwareauswahl**:

- entferne den Haken bei den Desktop-Umgebungen (Gladys braucht keine),
- setze den Haken bei **SSH-Server** und **Standard-Systemwerkzeuge**.

:::tip[Unter Debian zuerst `sudo` einrichten]
Wenn du bei der Installation ein root-Passwort gesetzt hast, installiert Debian kein `sudo`, das die Befehle dieser Anleitung brauchen. Melde dich mit `su -` als root an und führe aus:

```bash
apt update && apt install -y curl sudo
usermod -aG sudo dein-benutzer
```

Ersetze `dein-benutzer` durch deinen Benutzernamen und melde dich dann ab und wieder an.
:::

:::note[Unter Ubuntu Server]
Der Ubuntu-Installer hat keinen Schritt zur Softwareauswahl: Setze einfach den Haken bei **Install OpenSSH server**, wenn er danach fragt. Ubuntu bringt `sudo` und `curl` bereits mit.
:::

Wenn das System installiert und die VM neu gestartet ist, melde dich an und installiere den Qemu-Gastagenten. Damit zeigt Proxmox die IP-Adresse der VM an und kann sie sauber herunterfahren:

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
sudo reboot
```

Wir empfehlen außerdem, der VM per DHCP-Reservierung in deinem Router eine feste IP-Adresse zu geben: Die IP-Adresse der VM steht in ihrem Tab **Summary**, sobald der Gastagent läuft.

## Schritt 4: Den Zigbee-Dongle (und Bluetooth) durchreichen

Wenn du einen USB-Zigbee-Koordinator nutzt, stecke ihn in den Proxmox-Server und gib ihn dann an die VM weiter:

1. Wähle die VM, öffne **Hardware** und klicke auf **Add** > **USB Device**.
2. Wähle **Use USB Vendor/Device ID** und such deinen Dongle in der Liste aus (zum Beispiel einen SONOFF-Zigbee-Dongle).
3. Klicke auf **Add** und starte die VM neu, damit sie das Gerät sieht.

Wenn du den Dongle über seine Vendor/Device-ID statt über den USB-Port auswählst, findet die VM ihn auch dann wieder, wenn du ihn in einen anderen Port steckst. Das geht auch in der Shell des Proxmox-Hosts: Ermittle die ID mit `lsusb` und führe dann `qm set <VM-ID> -usb0 host=<vendor>:<device>` aus.

Prüfe in der VM, ob der Dongle auftaucht:

```bash
ls /dev/serial/by-id/
```

Mach dasselbe mit einem **USB-Bluetooth-Adapter**, wenn du Bluetooth-Sensoren nutzen oder Matter-Geräte per Bluetooth koppeln willst, und installiere dann BlueZ in der VM:

```bash
sudo apt install -y bluez
```

:::tip[Ein Netzwerk-Koordinator erspart das USB-Durchreichen]
Mit einem Ethernet-Zigbee-Koordinator (wie dem SMLIGHT SLZB-06) gibt es nichts durchzureichen: Gladys erreicht ihn über das Netzwerk, und du kannst die VM frei auf einen anderen Proxmox-Knoten verschieben. Siehe [Einen Netzwerk-Koordinator verwenden](/de/docs/integrations/zigbee2mqtt#use-a-network-coordinator).
:::

## Schritt 5: Gladys mit Docker installieren

Die VM ist jetzt ein ganz normaler Debian-Server. Folge der [Anleitung zur Docker-Installation](/de/docs/installation/docker): Installiere Docker mit dem offiziellen Skript und starte Gladys dann mit dem Installationsbefehl, ohne etwas zu ändern.

Öffne anschließend **`http://gladysassistant.local`** auf einem Rechner im selben Netzwerk. Wenn sich dieser Name nicht öffnet, nutze stattdessen die IP-Adresse der VM aus ihrem Tab **Summary**: `http://IP-DER-VM`.

## Schritt 6: Die VM sichern

Wenn du [Gladys Plus](/de/docs/plus/intro) nutzt, sichert es deine Gladys bereits jeden Tag verschlüsselt. Unter Proxmox kannst du zusätzlich die ganze VM sichern: Plane unter **Datacenter** > **Backup** eine regelmäßige Sicherung der VM `gladys`. Vor größeren Änderungen kannst du außerdem im Tab **Snapshots** der VM einen Snapshot anlegen.

## Häufig gestellte Fragen

### Soll ich eine VM oder einen LXC-Container nutzen?

Wir empfehlen eine VM, weil sie am einfachsten ist: Die offizielle Installation funktioniert unverändert, und USB-Dongle, Bluetooth und IPv6 für Matter verhalten sich wie auf einem physischen Rechner. Ein LXC-Container funktioniert ebenfalls, und mehrere erfahrene Community-Mitglieder betreiben Gladys so: Er braucht etwas weniger RAM, und seine Ressourcen lassen sich ohne Neustart ändern. Docker in einem LXC braucht aber einen privilegierten Container mit aktiviertem Nesting, und USB-Geräte und IPv6 an den Container durchzureichen erfordert zusätzliche Konfiguration. Wenn du dich damit wohlfühlst, ist ein LXC eine gute Wahl; sonst nimm die VM.

### Wie viel RAM und Speicher braucht die Gladys-VM?

Starte mit 2 CPU-Kernen, 4 GB RAM und einer 32-GB-Disk. Community-Mitglieder, die Zigbee2MQTT und mehrere Integrationen nutzen, merken, dass 4 GB schnell knapp werden: Plane in diesem Fall 6 bis 8 GB ein. Du kannst den RAM jederzeit erhöhen, die Änderung greift, sobald du die VM herunterfährst und wieder startest. Gib der VM mehr Speicher, wenn du für viele Sensoren einen langen Verlauf behältst.

### Funktioniert Matter in einer Proxmox-VM?

Ja. Matter basiert auf IPv6, deshalb muss IPv6 in deinem Router und in der VM aktiviert sein. Debian aktiviert es standardmäßig: Prüfe mit `ip -6 addr show dev ens18`, ob die Netzwerkschnittstelle der VM (meist `ens18`, nicht die Loopback-Schnittstelle `lo`) eine IPv6-Adresse hat. Den Rest der Einrichtung findest du bei der [Matter-Integration](/de/docs/integrations/matter).

### Kann ich die Gladys-VM auf einen anderen Proxmox-Knoten verschieben?

Ja, aber ein an die VM durchgereichtes USB-Gerät bleibt an dem Server, in dem es steckt: Nimm den Dongle mit der VM mit oder nutze einen Netzwerk-Zigbee-Koordinator, der von jedem Knoten aus funktioniert. In einem Cluster mit unterschiedlichen CPU-Modellen behältst du außerdem den Standard-CPU-Typ der VM statt **host**, sonst kann die Live-Migration fehlschlagen.

### Kann Gladys meinen Proxmox-Server überwachen?

Ja. Die [Community-Integration Proxmox](/de/docs/integrations/external/proxmox) zeigt in Gladys den Zustand deiner VMs und Container und das Ergebnis deiner Backups an, damit du benachrichtigt wirst, wenn ein Backup fehlschlägt.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Soll ich eine VM oder einen LXC-Container nutzen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir empfehlen eine VM, weil sie am einfachsten ist: Die offizielle Installation funktioniert unverändert, und USB-Dongle, Bluetooth und IPv6 für Matter verhalten sich wie auf einem physischen Rechner. Ein LXC-Container funktioniert ebenfalls, und mehrere erfahrene Community-Mitglieder betreiben Gladys so: Er braucht etwas weniger RAM, und seine Ressourcen lassen sich ohne Neustart ändern. Docker in einem LXC braucht aber einen privilegierten Container mit aktiviertem Nesting, und USB-Geräte und IPv6 an den Container durchzureichen erfordert zusätzliche Konfiguration. Wenn du dich damit wohlfühlst, ist ein LXC eine gute Wahl; sonst nimm die VM.",
        },
      },
      {
        "@type": "Question",
        name: "Wie viel RAM und Speicher braucht die Gladys-VM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starte mit 2 CPU-Kernen, 4 GB RAM und einer 32-GB-Disk. Community-Mitglieder, die Zigbee2MQTT und mehrere Integrationen nutzen, merken, dass 4 GB schnell knapp werden: Plane in diesem Fall 6 bis 8 GB ein. Du kannst den RAM jederzeit erhöhen, die Änderung greift, sobald du die VM herunterfährst und wieder startest. Gib der VM mehr Speicher, wenn du für viele Sensoren einen langen Verlauf behältst.",
        },
      },
      {
        "@type": "Question",
        name: "Funktioniert Matter in einer Proxmox-VM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Matter basiert auf IPv6, deshalb muss IPv6 in deinem Router und in der VM aktiviert sein. Debian aktiviert es standardmäßig: Prüfe mit ip -6 addr show dev ens18, ob die Netzwerkschnittstelle der VM (meist ens18, nicht die Loopback-Schnittstelle lo) eine IPv6-Adresse hat.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich die Gladys-VM auf einen anderen Proxmox-Knoten verschieben?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, aber ein an die VM durchgereichtes USB-Gerät bleibt an dem Server, in dem es steckt: Nimm den Dongle mit der VM mit oder nutze einen Netzwerk-Zigbee-Koordinator, der von jedem Knoten aus funktioniert. In einem Cluster mit unterschiedlichen CPU-Modellen behältst du außerdem den Standard-CPU-Typ der VM statt host, sonst kann die Live-Migration fehlschlagen.",
        },
      },
      {
        "@type": "Question",
        name: "Kann Gladys meinen Proxmox-Server überwachen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Die Community-Integration Proxmox zeigt in Gladys den Zustand deiner VMs und Container und das Ergebnis deiner Backups an, damit du benachrichtigt wirst, wenn ein Backup fehlschlägt.",
        },
      },
    ],
  }}
/>
