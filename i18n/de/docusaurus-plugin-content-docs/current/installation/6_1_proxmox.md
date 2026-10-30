---
id: proxmox
title: Gladys Assistant auf Proxmox VE installieren
description: "Installiere Gladys Assistant auf Proxmox VE in einer virtuellen Maschine mit Gladys Assistant OS, unserem offiziellen Installer: VM anlegen, Gladys mit ein paar Fragen installieren und Zigbee-Dongle und Bluetooth-Adapter per USB durchreichen."
sidebar_label: Installation auf Proxmox
keywords:
  - gladys proxmox
  - gladys assistant proxmox installieren
  - gladys assistant os proxmox
  - hausautomation proxmox
  - proxmox usb passthrough zigbee
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

Wenn du zu Hause schon einen [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview)-Server betreibst, kannst du Gladys Assistant dort neben deinen anderen Diensten hosten.

Wir empfehlen, Gladys in einer **virtuellen Maschine (VM)** laufen zu lassen, die du mit **[Gladys Assistant OS](/de/docs/installation/mini-pc/)** installierst, unserem offiziellen Installer, also demselben wie auf einem Mini-PC. Es installiert Ubuntu Server, Docker und Gladys in der VM und hält Gladys danach automatisch auf dem neuesten Stand. Eine VM verhält sich wie ein echter Rechner: Dein Zigbee-Dongle wird per USB durchgereicht und Gladys ist in deinem Netzwerk unter `gladysassistant.local` erreichbar.

:::note
Diese Anleitung verwendet die englischen Menünamen der Proxmox-Weboberfläche, unter Proxmox VE 8 und 9.
:::

## Schritt 1: Gladys Assistant OS in Proxmox herunterladen

Wähle in der Proxmox-Weboberfläche deinen Speicher (meist **local**), öffne **ISO Images** und klicke auf **Download from URL**.

Füge den Link zum Image von Gladys Assistant OS ein, klicke auf **Query URL** und dann auf **Download**:

```
https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso
```

:::tip[Den Download prüfen]
Setze im selben Fenster den Haken bei **Advanced**, wähle **SHA-256** als Hash-Algorithmus und füge die Prüfsumme ein, die in [dieser Datei](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso.sha256) veröffentlicht ist (nur die lange Zeichenfolge, ohne den Dateinamen). Proxmox prüft das Image dann nach dem Herunterladen.
:::

## Schritt 2: Die virtuelle Maschine anlegen

Klicke oben rechts auf **Create VM** und gehe den Assistenten durch:

- **General**: Nenne die VM `gladys`. Setze den Haken bei **Advanced** und dann bei **Start at boot**, damit Gladys nach einem Neustart des Servers wieder startet.
- **OS**: Wähle das gerade heruntergeladene Image `gladys-assistant-installer-amd64.iso`.
- **System**: Stelle **BIOS** auf **OVMF (UEFI)**: Gladys Assistant OS startet nur im UEFI-Modus. Lass den Haken bei **Add EFI Disk** gesetzt und wähle einen Speicher dafür. Setze außerdem den Haken bei **Qemu Agent**.
- **Disks**: **32 GB** reichen für den Anfang (mindestens 16 GB). Gladys speichert den Verlauf deiner Sensoren, gib also mehr, wenn du viele Geräte hast.
- **CPU**: **2 Kerne**. Wähle den Typ **host** für die beste Leistung (in einem Cluster mit unterschiedlichen CPU-Modellen siehe die FAQ unten).
- **Memory**: **4096 MB** (4 GB) für den Anfang. Plane **6 bis 8 GB** ein, sobald du Zigbee2MQTT und mehrere Integrationen nutzt, die jeweils in einem eigenen Container laufen. Du kannst den Wert später im Tab **Hardware** erhöhen: Die Änderung greift, sobald du die VM herunterfährst und wieder startest.
- **Network**: Behalte die Standard-Bridge (`vmbr0`) und das Modell **VirtIO**, damit die VM wie jedes andere Gerät eine Adresse in deinem Heimnetz bekommt.

Bestätige und starte die VM.

## Schritt 3: Gladys Assistant OS installieren

Öffne die **Console** der VM. Das Menü von Gladys Assistant OS erscheint, der Eintrag **Install Gladys Assistant** ist bereits markiert und startet nach 3 Sekunden von selbst.

Beantworte dann die Fragen des Installers genau wie auf einem Mini-PC: Sprache, Tastatur, dein Konto und SSH. Die Details findest du in [Schritt 4 der Mini-PC-Anleitung](/de/docs/installation/mini-pc/#installer-questions). Die virtuelle Festplatte der VM ist ihre einzige Festplatte, es gibt also nichts auszuwählen: Wenn der Installer dich bittet, das Löschen der Festplatte zu bestätigen, wird nur diese virtuelle Festplatte gelöscht, niemals die Festplatten deines Proxmox-Servers.

Wenn die Konsole **Installation complete!** anzeigt, entferne zuerst das Image aus der VM, damit sie den Installer nicht erneut startet: Doppelklicke im Tab **Hardware** auf **CD/DVD Drive** und wähle **Do not use any media**. Wähle dann in der Konsole **Reboot Now** und drücke **Enter** (und noch einmal **Enter**, wenn sie dich auffordert, das Installationsmedium zu entfernen). Bleibt die Konsole schwarz, klicke oben rechts in der VM auf **Reset**: Die Installation ist bereits abgeschlossen.

Bei diesem ersten Start installiert Gladys Assistant OS Docker, lädt Gladys herunter und startet es: Verfolge den Fortschritt in der Konsole. Sobald dort **Gladys Assistant ist bereit** steht, öffne **`http://gladysassistant.local`** auf einem Rechner im selben Netzwerk. Wenn sich dieser Name nicht öffnet, nutze stattdessen die IP-Adresse, die in der Konsole angezeigt wird: `http://IP-DER-VM`.

## Schritt 4: Den Qemu-Gastagenten installieren

Mit dem Qemu-Gastagenten zeigt Proxmox die IP-Adresse der VM an und kann sie sauber herunterfahren. Melde dich mit dem Konto, das du bei der Installation angelegt hast, an der VM an, in der Konsole oder per SSH (`ssh dein-benutzer@gladysassistant.local`), und führe dann aus:

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
```

```bash
sudo reboot
```

Wir empfehlen außerdem, der VM per DHCP-Reservierung in deinem Router eine feste IP-Adresse zu geben: Die IP-Adresse der VM steht in ihrem Tab **Summary**, sobald der Gastagent läuft.

## Schritt 5: Den Zigbee-Dongle (und Bluetooth) durchreichen

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

## Schritt 6: Die VM sichern

Wenn du [Gladys Plus](/de/docs/plus/intro) nutzt, sichert es deine Gladys bereits jeden Tag verschlüsselt. Unter Proxmox kannst du zusätzlich die ganze VM sichern: Plane unter **Datacenter** > **Backup** eine regelmäßige Sicherung der VM `gladys`. Vor größeren Änderungen kannst du außerdem im Tab **Snapshots** der VM einen Snapshot anlegen.

## Lieber Debian selbst installieren?

Gladys Assistant OS reserviert die VM für Gladys und kümmert sich um die Updates. Wenn du das System lieber selbst verwaltest, lege die VM auf dieselbe Weise an, installiere Debian oder Ubuntu Server darauf und folge dann der [Anleitung zur Docker-Installation](/de/docs/installation/docker).

## Häufig gestellte Fragen

### Soll ich eine VM oder einen LXC-Container nutzen?

Wir empfehlen eine mit Gladys Assistant OS installierte VM, weil sie am einfachsten ist: Gladys installiert und aktualisiert sich selbst, und USB-Dongle, Bluetooth und IPv6 für Matter verhalten sich wie auf einem physischen Rechner. Ein LXC-Container funktioniert ebenfalls, und mehrere erfahrene Community-Mitglieder betreiben Gladys so: Er braucht etwas weniger RAM, und seine Ressourcen lassen sich ohne Neustart ändern. Gladys Assistant OS lässt sich aber nicht in einem LXC installieren: Du installierst Docker und Gladys selbst, Docker in einem LXC braucht einen privilegierten Container mit aktiviertem Nesting, und USB-Geräte und IPv6 an den Container durchzureichen erfordert zusätzliche Konfiguration. Wenn du dich damit wohlfühlst, ist ein LXC eine gute Wahl; sonst nimm die VM.

### Wie viel RAM und Speicher braucht die Gladys-VM?

Starte mit 2 CPU-Kernen, 4 GB RAM und einer 32-GB-Disk. Community-Mitglieder, die Zigbee2MQTT und mehrere Integrationen nutzen, merken, dass 4 GB schnell knapp werden: Plane in diesem Fall 6 bis 8 GB ein. Du kannst den RAM jederzeit erhöhen, die Änderung greift, sobald du die VM herunterfährst und wieder startest. Gib der VM mehr Speicher, wenn du für viele Sensoren einen langen Verlauf behältst.

### Funktioniert Matter in einer Proxmox-VM?

Ja. Matter basiert auf IPv6, deshalb muss IPv6 in deinem Router und in der VM aktiviert sein. Ubuntu, die Grundlage von Gladys Assistant OS, aktiviert es standardmäßig: Prüfe mit `ip -6 addr`, ob die Netzwerkschnittstelle der VM (nicht die Loopback-Schnittstelle `lo`) eine IPv6-Adresse hat. Den Rest der Einrichtung findest du bei der [Matter-Integration](/de/docs/integrations/matter).

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
          text: "Wir empfehlen eine mit Gladys Assistant OS installierte VM, weil sie am einfachsten ist: Gladys installiert und aktualisiert sich selbst, und USB-Dongle, Bluetooth und IPv6 für Matter verhalten sich wie auf einem physischen Rechner. Ein LXC-Container funktioniert ebenfalls, und mehrere erfahrene Community-Mitglieder betreiben Gladys so: Er braucht etwas weniger RAM, und seine Ressourcen lassen sich ohne Neustart ändern. Gladys Assistant OS lässt sich aber nicht in einem LXC installieren: Du installierst Docker und Gladys selbst, Docker in einem LXC braucht einen privilegierten Container mit aktiviertem Nesting, und USB-Geräte und IPv6 an den Container durchzureichen erfordert zusätzliche Konfiguration. Wenn du dich damit wohlfühlst, ist ein LXC eine gute Wahl; sonst nimm die VM.",
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
          text: "Ja. Matter basiert auf IPv6, deshalb muss IPv6 in deinem Router und in der VM aktiviert sein. Ubuntu, die Grundlage von Gladys Assistant OS, aktiviert es standardmäßig: Prüfe mit ip -6 addr, ob die Netzwerkschnittstelle der VM (nicht die Loopback-Schnittstelle lo) eine IPv6-Adresse hat.",
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
