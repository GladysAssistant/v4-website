---
id: docker
title: "Gladys mit Docker installieren: Debian, Ubuntu & Co."
description: "Installiere Gladys Assistant mit einem einzigen Befehl per Docker auf Debian, Ubuntu oder jedem anderen System (Mini-PC, NAS, Linux-Server, VM). Kostenlos, quelloffen und selbst gehostet."
sidebar_label: Installation mit Docker
keywords:
  - gladys docker installieren
  - gladys debian installieren
  - gladys ubuntu installieren
  - gladys assistant docker
  - selbst gehostete hausautomation docker
  - gladys auf nas betreiben
  - gladys synology docker
---

import JsonLd from '@site/src/components/seo/JsonLd';

In dieser Anleitung gehen wir die Schritte zur Installation von Gladys Assistant mit Docker durch. Sie funktioniert auf jedem System (Mini-PC, NAS, Linux-Server, VM …), und unter Debian und Ubuntu sind die Schritte identisch.

## Docker installieren

:::tip[Unter Debian zuerst `curl` und `sudo` installieren]
Ubuntu bringt `curl` und `sudo` mit, eine minimale Debian-Installation dagegen oft keines von beiden, und die folgenden Befehle brauchen beide. Melde dich mit `su -` als root an und führe aus:

```bash
apt update && apt install -y curl sudo
usermod -aG sudo dein-benutzer
```

Ersetze `dein-benutzer` durch deinen Benutzernamen, melde dich ab und wieder an und mache dann unten weiter. Der Rest dieser Anleitung ist unter Debian und Ubuntu identisch.
:::

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

## Gladys starten {/* #start-gladys */}

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

## Gladys mit Watchtower automatisch aktualisieren {/* #auto-upgrade-gladys-with-watchtower */}

Mit Watchtower kannst du Gladys automatisch aktualisieren, sobald eine neue Version verfügbar ist. Starte dazu einen Watchtower-Container:

```bash
sudo docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  nickfedor/watchtower \
  --cleanup --include-restarting
```

## Gladys aufrufen {/* #accessing-gladys */}

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

### Kann ich Gladys unter Debian oder Ubuntu installieren?

Ja, und die Schritte sind auf beiden gleich: Installiere Docker mit dem offiziellen Skript und starte dann den Gladys-Container mit dem obigen Befehl. Jede von Docker unterstützte Debian- oder Ubuntu-Version funktioniert, auf einem Mini-PC, einem Server oder einer virtuellen Maschine. Auf einer minimalen Debian-Installation installierst du zuerst `curl` und `sudo` (siehe den Tipp oben auf dieser Seite).

### Gladys öffnet sich nach der Installation nicht: Was sollte ich prüfen?

1. **Läuft der Container?** `sudo docker ps` sollte `gladys` mit dem Status `Up` anzeigen. Fehlt er oder startet er ständig neu, lies seine Logs mit `sudo docker logs gladys --tail=100` (siehe [Gladys-Logs herunterladen](/de/docs/installation/logs)).
2. **Ist Port 80 schon belegt?** Gladys lauscht auf Port 80 des Rechners. Nutzt bereits ein anderer Webserver (Apache, Nginx …) diesen Port, kann Gladys nicht starten: Stoppe diesen Server oder starte Gladys mit `-e SERVER_PORT=8080` auf einem anderen Port und öffne `http://IP-DES-RECHNERS:8080`.
3. **Blockiert eine Firewall?** Wenn `ufw` aktiv ist, gib den Port mit `sudo ufw allow 80/tcp` frei.
4. **Öffnet sich `gladysassistant.local` nicht?** Nutze stattdessen die IP-Adresse des Rechners, wie [oben](#wenn-gladysassistantlocal-sich-nicht-öffnet) beschrieben.

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
      {
        "@type": "Question",
        name: "Kann ich Gladys unter Debian oder Ubuntu installieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, und die Schritte sind auf beiden gleich: Installiere Docker mit dem offiziellen Skript und starte dann den Gladys-Container mit dem obigen Befehl. Jede von Docker unterstützte Debian- oder Ubuntu-Version funktioniert, auf einem Mini-PC, einem Server oder einer virtuellen Maschine. Auf einer minimalen Debian-Installation installierst du zuerst curl und sudo (siehe den Tipp oben auf dieser Seite).",
        },
      },
      {
        "@type": "Question",
        name: "Gladys öffnet sich nach der Installation nicht: Was sollte ich prüfen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prüfe zuerst mit sudo docker ps, ob der Container läuft, und lies seine Logs mit sudo docker logs gladys, falls er fehlt oder ständig neu startet. Prüfe dann, ob kein anderer Webserver (Apache, Nginx) Port 80 belegt, oder starte Gladys mit -e SERVER_PORT=8080 auf einem anderen Port. Ist die Firewall ufw aktiv, gib den Port mit sudo ufw allow 80/tcp frei. Öffnet sich gladysassistant.local nicht, nutze die IP-Adresse des Rechners.",
        },
      },
    ],
  }}
/>
