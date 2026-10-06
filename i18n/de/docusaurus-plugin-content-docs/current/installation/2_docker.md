---
id: docker
title: Gladys Assistant mit Docker installieren
description: "Installiere Gladys Assistant mit einem einzigen Befehl per Docker auf jedem System (Mini-PC, NAS, Linux-Server, VM). Kostenlos, quelloffen und selbst gehostet."
sidebar_label: Installation mit Docker
keywords:
  - gladys docker installieren
  - gladys assistant docker
  - selbst gehostete hausautomation docker
  - gladys auf nas betreiben
  - gladys synology docker
---

import JsonLd from '@site/src/components/seo/JsonLd';

In dieser Anleitung gehen wir die Schritte zur Installation von Gladys Assistant mit Docker durch. Sie funktioniert auf jedem System (Mini-PC, NAS, Linux-Server, VM …).

## Docker installieren

Um Docker zu installieren, führe einfach diesen Befehl aus:

```bash
curl -sSL https://get.docker.com | sh
```

Um zu prüfen, ob Docker wie erwartet funktioniert, gib Folgendes ein:

```bash
sudo docker ps
```

Es sollte eine leere Liste laufender Container angezeigt werden.

Falls du Probleme bei der Installation von Docker hast, wirf einen Blick in die [Docker-Dokumentation](https://docs.docker.com/) und suche dort nach der Anleitung für dein System.

## Gladys starten {#start-gladys}

Mit diesem Befehl startest du einen Gladys-Container:

```bash
sudo docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--cgroupns=host \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
-v /run/udev:/run/udev:ro \
-v /run/dbus:/run/dbus:ro \
gladysassistant/gladys:v5
```

Hinweise:

- `-d` => Container im Hintergrund ausführen
- `--log-driver json-file` => Logging des Containers konfigurieren
- `--log-opt max-size=10m` => Größe der Logdatei auf 10 MB begrenzen
- `--cgroupns=host` => Den cgroup-Namespace des Hosts verwenden
- `--restart=always` => Container automatisch neu starten
- `--privileged` => Dem Container erweiterte Rechte geben
- `--network=host` => Den Netzwerk-Stack des Hosts verwenden
- `-e` => Umgebungsvariablen setzen
- `-v` => Volumes einbinden
- `-v /run/dbus:/run/dbus:ro` => Gibt Gladys Zugriff auf den Systembus des Hosts. Darüber kannst du den Rechner in den Systemeinstellungen neu starten oder herunterfahren, und das ist die Voraussetzung für Bluetooth: Sowohl das Koppeln eines Matter-Geräts über BLE als auch das Auslesen von Bluetooth-Sensoren laufen über BlueZ, das nur über diesen Bus erreichbar ist. Auf dem Host muss BlueZ installiert sein (`sudo apt install bluez` unter Debian und Ubuntu).
- `TZ=Europe/Paris` => Zeitzone, die der Container verwendet. Falls du diesen Wert ändern musst, findest du in [dieser Liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) auf Wikipedia alle möglichen Werte.

## Gladys mit Watchtower automatisch aktualisieren {#auto-upgrade-gladys-with-watchtower}

Mit Watchtower kannst du Gladys automatisch aktualisieren, sobald eine neue Version verfügbar ist. Starte dazu einen Watchtower-Container:

```bash
sudo docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  nickfedor/watchtower \
  --cleanup --include-restarting
```

## Gladys aufrufen {#accessing-gladys}

Öffne **`http://gladysassistant.local`** in deinem Browser. Gladys macht diesen Namen per mDNS in deinem lokalen Netzwerk bekannt, sodass du es von jedem Gerät im selben Netzwerk erreichst, ohne jemals eine IP-Adresse heraussuchen zu müssen.

:::note
Du musst dich im selben Netzwerk wie der Rechner befinden.
:::

Wenn du zu Hause mehrere Gladys-Instanzen betreibst, kannst du jede unter **Einstellungen → System → Lokale Adresse (mDNS)** umbenennen. Die Änderung wirkt sofort, ein Neustart ist nicht nötig.

### Wenn `gladysassistant.local` sich nicht öffnet

mDNS ist in macOS, iOS sowie Windows 10 und neuer integriert und funktioniert in den meisten Heimnetzwerken. Einige Konfigurationen blockieren es dennoch: manche Android-Versionen, Gastnetzwerke und Router mit aktivierter Client-Isolation. Außerdem macht sich Gladys nur bekannt, wenn es im Host-Netzwerk läuft – genau das tut der obige Befehl.

Verwende in diesem Fall stattdessen die IP-Adresse des Rechners in deinem Browser. Um sie in deinem lokalen Netzwerk zu finden, kannst du Apps wie diese verwenden:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) unter Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) unter iOS

:::tip[Stelle deine eigene Zeitzone ein]
Der obige Befehl verwendet `TZ=Europe/Paris`. Ersetze diesen Wert durch deinen eigenen (zum Beispiel `Europe/Berlin`, `Europe/Vienna` oder `Europe/Zurich`) aus der [Liste der Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), damit Szenen und Zeitpläne zur richtigen Ortszeit ausgeführt werden.
:::

## Häufig gestellte Fragen

### Auf welchen Systemen kann ich Gladys mit Docker betreiben?

Die Docker-Installation funktioniert auf jedem System, auf dem Docker läuft: einem Mini-PC, einem NAS (Synology, Unraid), einem Linux-Server, einem Raspberry Pi oder einer virtuellen Maschine. Auf allen startet derselbe einzelne Befehl Gladys.

### Wie aktualisiere ich Gladys unter Docker?

Am einfachsten startest du den oben gezeigten Watchtower-Container. Er hält Ausschau nach neuen Gladys-Images und aktualisiert deinen Container automatisch, sobald eine neue Version erscheint – du musst also nichts von Hand aktualisieren.

### Kann ich Gladys auf einem Synology- oder Unraid-NAS betreiben?

Ja. Solange dein NAS Docker-Container ausführen kann, kannst du Gladys mit demselben Befehl darauf betreiben. Das ist eine beliebte Möglichkeit, Gladys auf Hardware selbst zu hosten, die du bereits besitzt.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Auf welchen Systemen kann ich Gladys mit Docker betreiben?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Docker-Installation funktioniert auf jedem System, auf dem Docker läuft: einem Mini-PC, einem NAS wie Synology oder Unraid, einem Linux-Server, einem Raspberry Pi oder einer virtuellen Maschine. Auf allen startet derselbe einzelne Befehl Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Wie aktualisiere ich Gladys unter Docker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Am einfachsten startest du den Watchtower-Container. Er hält Ausschau nach neuen Gladys-Images und aktualisiert deinen Container automatisch, sobald eine neue Version erscheint – du musst also nichts von Hand aktualisieren.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich Gladys auf einem Synology- oder Unraid-NAS betreiben?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Solange dein NAS Docker-Container ausführen kann, kannst du Gladys mit demselben Befehl darauf betreiben. Das ist eine beliebte Möglichkeit, Gladys auf Hardware selbst zu hosten, die du bereits besitzt.",
        },
      },
    ],
  }}
/>
