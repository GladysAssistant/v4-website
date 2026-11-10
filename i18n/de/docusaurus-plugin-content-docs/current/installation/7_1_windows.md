---
id: windows
title: "Gladys Assistant unter Windows: möglich, aber nicht empfohlen"
description: "Kann man Gladys Assistant auf einem Windows-PC installieren? Technisch ja, aber wir raten davon ab: USB-Dongles, Bluetooth und Netzwerkerkennung funktionieren schlecht. So geht es besser, mit Gladys Assistant OS."
sidebar_label: Windows (nicht empfohlen)
keywords:
  - gladys assistant windows
  - gladys windows installieren
  - gladys windows 11
  - gladys docker desktop
  - gladys virtualbox
  - hausautomation windows pc
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Kurze Antwort: Wir raten davon ab, Gladys Assistant unter Windows zu betreiben.**

Gladys ist dafür gebaut, unter Linux in Docker zu laufen. Unter Windows läuft Docker selbst in einer versteckten virtuellen Linux-Maschine (WSL 2). Gladys sieht dann diese virtuelle Maschine und nicht deinen PC: Es erreicht weder deine USB-Dongles noch deinen Bluetooth-Adapter noch dein lokales Netzwerk so, wie es nötig wäre. Das meiste, was ein Smart Home nützlich macht, funktioniert dann nicht mehr oder nur mit wackeligen Umwegen.

Die gute Nachricht: Mit [Gladys Assistant OS](/de/docs/installation/mini-pc), unserem offiziellen Installer, ist ein eigener Rechner für Gladys in etwa 30 Minuten eingerichtet, ganz ohne Kommandozeile. Und alles Nötige kannst du an deinem Windows-PC vorbereiten.

## Was mit Docker Desktop nicht funktioniert

Wenn du Gladys unter Windows mit Docker Desktop startest oder mit Docker, das in einer WSL-2-Distribution installiert ist (zum Beispiel Ubuntu unter WSL), stößt du auf Folgendes:

- **Zigbee- und Z-Wave-USB-Dongles**: Der Dongle steckt in Windows, nicht in der virtuellen Maschine von Docker. Ihn durchzureichen braucht zusätzliche Werkzeuge (`usbipd-win`) und geht nach einem Neustart oft kaputt.
- **Bluetooth**: In der virtuellen Maschine von Docker nicht verfügbar, also keine Bluetooth-Sensoren und kein Koppeln von Matter-Geräten per Bluetooth.
- **Lokales Netzwerk**: Docker kann normale Verbindungen an Gladys weiterleiten, aber selbst mit der Option `--network=host` des [Installationsbefehls](/de/docs/installation/docker) bekommt Gladys keinen direkten Zugriff auf das Netzwerk deines PCs. `gladysassistant.local` funktioniert nicht, und die Erkennung von Geräten im Netzwerk (Matter, Kameras, Philips Hue, Netzwerkscan …) ist unzuverlässig oder klappt gar nicht.
- **Neustart und Herunterfahren aus Gladys**: Diese Aktionen steuern einen Linux-Host und bewirken unter Windows daher nichts.
- **Verfügbarkeit**: Ein Smart Home muss rund um die Uhr laufen. Ein Desktop-PC geht in den Ruhezustand, wird ausgeschaltet, und Windows-Updates starten ihn neu, wann sie wollen: Deine Szenen und deine Alarmanlage stehen dann mit still.

## Was wir stattdessen empfehlen

### Am besten: ein Mini-PC mit Gladys Assistant OS

Ein Mini-PC braucht nur ein paar Watt, läuft ständig und betreibt Gladys ganz ohne Umwege. Mit [Gladys Assistant OS](/de/docs/installation/mini-pc) schreibst du den Installer an deinem Windows-PC auf einen USB-Stick, startest den Mini-PC davon und beantwortest ein paar Fragen: Gladys installiert sich von selbst und hält sich danach selbst auf dem neuesten Stand.

- 👉 [Gladys mit Gladys Assistant OS auf einem Mini-PC installieren](/de/docs/installation/mini-pc) (empfohlen)
- 👉 [Gladys auf einem Raspberry Pi installieren](/de/docs/installation/raspberry-pi), mit unserem offiziellen Image

**Auch ein alter PC, den du nicht mehr nutzt, kann deine Gladys-Box werden.** Gladys Assistant OS lässt sich auf jedem Computer mit Intel- oder AMD-Prozessor installieren, der im UEFI-Modus startet und eine SSD mit mindestens 16 GB sowie einen Ethernet-Anschluss hat. Es ersetzt Windows: Die Festplatte dieses PCs wird gelöscht.

Wenn du schon einen Heimserver oder ein NAS hast, kannst du auch den nutzen: Siehe die Anleitungen für [Proxmox](/de/docs/installation/proxmox), [Synology](/de/docs/installation/synology) und [Unraid](/de/docs/installation/unraid) oder die [Anleitung zur Docker-Installation](/de/docs/installation/docker) für jeden Linux-Server.

### Gladys auf deinem Windows-PC ausprobieren: eine virtuelle Maschine

Wenn du Gladys auf dem PC ausprobieren willst, den du ohnehin nutzt, installiere Gladys Assistant OS in einer **virtuellen Maschine**, nicht mit Docker Desktop. Die virtuelle Maschine verhält sich dann wie ein Mini-PC in deinem Netzwerk. Diesen Weg dokumentiert auch Home Assistant für Windows.

1. Installiere [VirtualBox](https://www.virtualbox.org/) und lade das [Image von Gladys Assistant OS](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso) herunter (eine `.iso`-Datei von etwa 2 GB).
2. Klicke in VirtualBox auf **Neu**. Wähle das Image `gladys-assistant-installer-amd64.iso` aus, als Typ **Linux** und als Version **Ubuntu (64-bit)**. Wenn VirtualBox eine unbeaufsichtigte Installation (*Unattended Installation*) anbietet, schalte sie mit **Skip Unattended Installation** ab: Der Installer von Gladys Assistant OS stellt seine eigenen Fragen. Gib der virtuellen Maschine **2 CPU-Kerne**, **4 GB RAM** (6 bis 8 GB, sobald du Zigbee2MQTT und mehrere Integrationen nutzt) und eine **32-GB**-Disk.
3. Öffne vor dem ersten Start ihre **Einstellungen**:
   - Aktiviere unter **System** die Option **EFI** (*Enable EFI*): Gladys Assistant OS startet nur im UEFI-Modus.
   - Stelle unter **Netzwerk** den Adapter auf **Netzwerkbrücke** (*Bridged Adapter*) und wähle unter **Name** die Netzwerkkarte, die dein PC nutzt (Ethernet oder WLAN), damit die virtuelle Maschine eine eigene Adresse in deinem Heimnetz bekommt.
4. Starte die virtuelle Maschine und beantworte die Fragen des Installers wie auf einem Mini-PC: Siehe [Schritt 4 der Mini-PC-Anleitung](/de/docs/installation/mini-pc#installer-questions). Gelöscht wird nur die virtuelle Disk der virtuellen Maschine, nie die Festplatte deines PCs.
5. Wenn der Installer **Installation complete!** anzeigt, entferne zuerst das Image, damit es den Installer nicht erneut startet: Entferne im Menü des VM-Fensters unter **Geräte > Optische Laufwerke** (*Devices > Optical Drives*) das Medium aus dem virtuellen Laufwerk. Wähle dann **Reboot Now**.
6. Gladys installiert sich bei diesem ersten Start von selbst. Sobald im Fenster der virtuellen Maschine **Gladys Assistant ist bereit** steht, öffne **`http://gladysassistant.local`** in deinem Browser unter Windows. Öffnet sich dieser Name nicht, nutze die Adresse, die darunter im Fenster der virtuellen Maschine angezeigt wird (zum Beispiel `http://192.168.1.42`).

So nutzt du deine Geräte:

- **Zigbee-Dongle**: Stecke ihn in den PC, aktiviere dann in den **USB**-Einstellungen der virtuellen Maschine den **USB-3.0-Controller (xHCI)** und füge einen **USB-Filter** für deinen Dongle hinzu: VirtualBox übergibt ihn bei jedem Start an die virtuelle Maschine. Taucht der Dongle in der virtuellen Maschine nicht auf oder trennt er sich ständig, kommt ein [Netzwerk-Koordinator](/de/docs/integrations/zigbee2mqtt#use-a-network-coordinator) ganz ohne USB aus.
- **Bluetooth**: Für Bluetooth-Sensoren oder das Koppeln von Matter-Geräten per Bluetooth gibst du der virtuellen Maschine auf dieselbe Weise einen USB-Bluetooth-Adapter, mit einem weiteren USB-Filter, und installierst dann BlueZ in der virtuellen Maschine: `sudo apt install -y bluez`.

Denk daran, dass der PC eingeschaltet bleiben muss und der Ruhezustand deaktiviert sein muss. Deshalb eignet sich diese Lösung zum Ausprobieren, aber ein eigener Rechner bleibt langfristig die bessere Wahl. Wenn du umsteigst, bringt ein [Gladys-Plus-Backup](/de/docs/installation/migrate) deine ganze Installation auf den neuen Rechner.

Du verwaltest das System lieber selbst? Dann installiere stattdessen Debian oder Ubuntu Server in der virtuellen Maschine und folge der [Anleitung zur Docker-Installation](/de/docs/installation/docker).

## Häufig gestellte Fragen

### Kann ich Gladys Assistant mit Docker Desktop unter Windows installieren?

Gladys startet, aber ohne Zugriff auf USB-Dongles, Bluetooth und dein lokales Netzwerk funktionieren die meisten Integrationen nicht richtig. Wir unterstützen dieses Setup nicht. Nutze einen eigenen Mini-PC mit Gladys Assistant OS oder zumindest Gladys Assistant OS in einer virtuellen Maschine mit Netzwerkbrücke.

### Und mit WSL 2?

Das ist nicht besser: Docker Desktop läuft bereits auf WSL 2, und Docker, das direkt in einer WSL-2-Distribution (wie Ubuntu) installiert ist, läuft in derselben versteckten virtuellen Maschine, mit denselben Grenzen bei USB, Bluetooth und lokalem Netzwerk.

### Kann ich meinen alten Windows-PC in eine Gladys-Box verwandeln?

Ja, wenn du ihn ganz für Gladys nutzt: Gladys Assistant OS ersetzt Windows durch Ubuntu Server und Gladys und hält Gladys auf dem neuesten Stand. Der PC braucht einen Intel- oder AMD-Prozessor, der im UEFI-Modus startet, eine SSD mit mindestens 16 GB und einen Ethernet-Anschluss. Seine Festplatte wird gelöscht: Sichere vorher deine Dateien.

### Und auf einem Mac?

Das Problem ist dasselbe: Auch unter macOS lässt Docker Desktop Docker in einer versteckten virtuellen Maschine laufen. Nutze einen eigenen Rechner für Gladys.

### Gibt es eine Windows-Version von Gladys?

Nein. Gladys läuft in Docker unter Linux, und das deckt Mini-PCs, Raspberry Pis, NAS und Server ab. Auf einem Mini-PC installiert Gladys Assistant OS all das für dich. Steuern kannst du Gladys von jedem Browser unter Windows und von deinem Smartphone aus.

### Ich bin Entwickler unter Windows, wie trage ich zu Gladys bei?

Das ist ein anderer Anwendungsfall: Um unter Windows an Gladys zu programmieren, folge der [Anleitung zur Windows-Entwicklungsumgebung](/de/docs/dev/setup-development-environment-windows), die WSL 2 und VS Code nutzt.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kann ich Gladys Assistant mit Docker Desktop unter Windows installieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys startet, aber ohne Zugriff auf USB-Dongles, Bluetooth und dein lokales Netzwerk funktionieren die meisten Integrationen nicht richtig. Wir unterstützen dieses Setup nicht. Nutze einen eigenen Mini-PC mit Gladys Assistant OS oder zumindest Gladys Assistant OS in einer virtuellen Maschine mit Netzwerkbrücke.",
        },
      },
      {
        "@type": "Question",
        name: "Und mit WSL 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das ist nicht besser: Docker Desktop läuft bereits auf WSL 2, und Docker, das direkt in einer WSL-2-Distribution (wie Ubuntu) installiert ist, läuft in derselben versteckten virtuellen Maschine, mit denselben Grenzen bei USB, Bluetooth und lokalem Netzwerk.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich meinen alten Windows-PC in eine Gladys-Box verwandeln?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wenn du ihn ganz für Gladys nutzt: Gladys Assistant OS ersetzt Windows durch Ubuntu Server und Gladys und hält Gladys auf dem neuesten Stand. Der PC braucht einen Intel- oder AMD-Prozessor, der im UEFI-Modus startet, eine SSD mit mindestens 16 GB und einen Ethernet-Anschluss. Seine Festplatte wird gelöscht: Sichere vorher deine Dateien.",
        },
      },
      {
        "@type": "Question",
        name: "Und auf einem Mac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das Problem ist dasselbe: Auch unter macOS lässt Docker Desktop Docker in einer versteckten virtuellen Maschine laufen. Nutze einen eigenen Rechner für Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Gibt es eine Windows-Version von Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Gladys läuft in Docker unter Linux, und das deckt Mini-PCs, Raspberry Pis, NAS und Server ab. Auf einem Mini-PC installiert Gladys Assistant OS all das für dich. Steuern kannst du Gladys von jedem Browser unter Windows und von deinem Smartphone aus.",
        },
      },
      {
        "@type": "Question",
        name: "Ich bin Entwickler unter Windows, wie trage ich zu Gladys bei?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das ist ein anderer Anwendungsfall: Um unter Windows an Gladys zu programmieren, folge der Anleitung zur Windows-Entwicklungsumgebung, die WSL 2 und VS Code nutzt.",
        },
      },
    ],
  }}
/>
