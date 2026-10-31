---
id: windows
title: "Gladys Assistant unter Windows: möglich, aber nicht empfohlen"
description: "Kann man Gladys Assistant auf einem Windows-PC installieren? Technisch ja, aber wir raten davon ab: USB-Dongles, Bluetooth und Netzwerkerkennung funktionieren schlecht. So geht es besser."
sidebar_label: Windows (nicht empfohlen)
keywords:
  - gladys assistant windows
  - gladys windows installieren
  - gladys windows 11
  - gladys docker desktop
  - hausautomation windows pc
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Kurze Antwort: Wir raten davon ab, Gladys Assistant unter Windows zu betreiben.**

Gladys ist dafür gebaut, unter Linux in Docker zu laufen. Unter Windows läuft Docker selbst in einer versteckten virtuellen Linux-Maschine (WSL 2). Gladys sieht dann diese virtuelle Maschine und nicht deinen PC: Es erreicht weder deine USB-Dongles noch deinen Bluetooth-Adapter noch dein lokales Netzwerk so, wie es nötig wäre. Das meiste, was ein Smart Home nützlich macht, funktioniert dann nicht mehr oder nur mit wackeligen Umwegen.

Die gute Nachricht: Ein eigener Rechner für Gladys kostet wenig und ist viel einfacher.

## Was mit Docker Desktop nicht funktioniert

Wenn du Gladys unter Windows mit Docker Desktop startest, stößt du auf Folgendes:

- **Zigbee- und Z-Wave-USB-Dongles**: Der Dongle steckt in Windows, nicht in der virtuellen Maschine von Docker. Ihn durchzureichen braucht zusätzliche Werkzeuge (`usbipd-win`) und geht nach einem Neustart oft kaputt.
- **Bluetooth**: In der virtuellen Maschine von Docker nicht verfügbar, also keine Bluetooth-Sensoren und kein Koppeln von Matter-Geräten per Bluetooth.
- **Lokales Netzwerk**: Unter Windows gibt die Option `--network=host` des [Installationsbefehls](/de/docs/installation/docker) Gladys keinen Zugriff auf dein Heimnetz. `gladysassistant.local` funktioniert nicht, und die Erkennung von Geräten im Netzwerk (Matter, Kameras, Philips Hue, Netzwerkscan …) ist unzuverlässig oder klappt gar nicht.
- **Neustart und Herunterfahren aus Gladys**: Diese Aktionen steuern einen Linux-Host und bewirken unter Windows daher nichts.
- **Verfügbarkeit**: Ein Smart Home muss rund um die Uhr laufen. Ein Desktop-PC geht in den Ruhezustand, wird ausgeschaltet, und Windows-Updates starten ihn neu, wann sie wollen: Deine Szenen und deine Alarmanlage stehen dann mit still.

## Was wir stattdessen empfehlen

### Am besten: ein kleiner eigener Rechner

Ein Mini-PC oder ein Raspberry Pi braucht nur ein paar Watt, läuft ständig und betreibt Gladys mit der offiziellen Installation, ganz ohne Umwege.

- 👉 [Gladys auf einem Mini-PC installieren](/de/docs/installation/mini-pc) (empfohlen)
- 👉 [Gladys auf einem Raspberry Pi installieren](/de/docs/installation/raspberry-pi)

Wenn du schon ein NAS oder einen Heimserver hast, kannst du auch den nutzen: Siehe die Anleitungen für [Synology](/de/docs/installation/synology) und [Unraid](/de/docs/installation/unraid) oder die [Anleitung zur Docker-Installation](/de/docs/installation/docker) für jeden Linux-Server.

### Wenn du unbedingt deinen Windows-PC nutzen willst: eine virtuelle Linux-Maschine

Wenn du Gladys auf deinem vorhandenen PC ausprobieren willst, betreibe es in einer **virtuellen Linux-Maschine**, nicht mit Docker Desktop. Diesen Weg dokumentiert auch Home Assistant für Windows.

1. Installiere einen Hypervisor wie [VirtualBox](https://www.virtualbox.org/).
2. Lege eine virtuelle Maschine mit **2 CPU-Kernen**, **4 GB RAM** und einer **32-GB**-Disk an und installiere darin Debian oder Ubuntu Server.
3. Stelle ihren Netzwerkadapter auf **Netzwerkbrücke** (Bridged Adapter), damit die virtuelle Maschine eine eigene Adresse in deinem Heimnetz bekommt.
4. Gib ihr deinen Zigbee-Dongle über einen **USB-Filter** in den USB-Einstellungen der virtuellen Maschine (oder nutze einen [Netzwerk-Koordinator](/de/docs/integrations/zigbee2mqtt#use-a-network-coordinator), der gar kein USB braucht).
5. Folge in der virtuellen Maschine der [Anleitung zur Docker-Installation](/de/docs/installation/docker).

Denk daran, dass der PC eingeschaltet bleiben muss und der Ruhezustand deaktiviert sein muss. Deshalb eignet sich diese Lösung zum Ausprobieren, aber ein eigener Rechner bleibt langfristig die bessere Wahl.

## Häufig gestellte Fragen

### Kann ich Gladys Assistant mit Docker Desktop unter Windows installieren?

Gladys startet, aber ohne Zugriff auf USB-Dongles, Bluetooth und dein lokales Netzwerk funktionieren die meisten Integrationen nicht richtig. Wir unterstützen dieses Setup nicht. Nutze einen eigenen Mini-PC oder Raspberry Pi oder zumindest eine virtuelle Linux-Maschine mit Netzwerkbrücke.

### Und mit WSL 2?

Das ist nicht besser: Docker Desktop läuft bereits auf WSL 2, und WSL 2 hat dieselben Grenzen bei USB, Bluetooth und lokalem Netzwerk.

### Und auf einem Mac?

Das Problem ist dasselbe: Auch unter macOS lässt Docker Desktop Docker in einer versteckten virtuellen Maschine laufen. Nutze einen eigenen Rechner für Gladys.

### Gibt es eine Windows-Version von Gladys?

Nein. Gladys läuft in Docker unter Linux, und das deckt Mini-PCs, Raspberry Pis, NAS und Server ab. Steuern kannst du es von jedem Browser unter Windows und von deinem Smartphone aus.

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
          text: "Gladys startet, aber ohne Zugriff auf USB-Dongles, Bluetooth und dein lokales Netzwerk funktionieren die meisten Integrationen nicht richtig. Wir unterstützen dieses Setup nicht. Nutze einen eigenen Mini-PC oder Raspberry Pi oder zumindest eine virtuelle Linux-Maschine mit Netzwerkbrücke.",
        },
      },
      {
        "@type": "Question",
        name: "Und mit WSL 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das ist nicht besser: Docker Desktop läuft bereits auf WSL 2, und WSL 2 hat dieselben Grenzen bei USB, Bluetooth und lokalem Netzwerk.",
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
          text: "Nein. Gladys läuft in Docker unter Linux, und das deckt Mini-PCs, Raspberry Pis, NAS und Server ab. Steuern kannst du es von jedem Browser unter Windows und von deinem Smartphone aus.",
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
