---
id: docker-compose
title: Gladys Assistant mit Docker Compose installieren
description: "Installiere Gladys Assistant manuell mit Docker Compose auf einem Mini-PC, einem Synology-NAS, einer Linux-VM oder jedem anderen Rechner mit Docker."
sidebar_label: Installation mit Docker Compose
---

Diese Anleitung erklärt, wie du Gladys manuell mit Docker Compose installierst – unabhängig davon, auf welchem Rechner Gladys läuft: einem Mini-PC, einem Synology-NAS, einer Linux-VM oder einer anderen Umgebung.

## Voraussetzungen

Um Docker Compose zu installieren, musst du nur Docker installieren:

```bash
curl -sSL https://get.docker.com | sh
```

Wenn du prüfen möchtest, ob Docker Compose auf deinem System aktiv ist, gib Folgendes ein:

```bash
sudo docker compose version
```

Bei mir wird Folgendes angezeigt:

```bash
gladys@gladys:~$ docker compose version
Docker Compose version v2.24.5
```

## Die Docker-Compose-Konfigurationsdatei erstellen

Schreibe den folgenden Text in die Datei `gladys-compose.yml`.
```yaml
services:
  gladys:
    image: gladysassistant/gladys:v5
    container_name: gladys
    restart: always
    privileged: true
    network_mode: host
    cgroup: host
    logging:
      driver: "json-file"
      options:
        max-size: 10m
    environment:
      NODE_ENV: production
      SQLITE_FILE_PATH: /var/lib/gladysassistant/gladys-production.db
      SERVER_PORT: 80
      TZ: Europe/Paris
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/gladysassistant:/var/lib/gladysassistant
      - /dev:/dev
      - /run/udev:/run/udev:ro
      # Systembus des Hosts: Neustart/Herunterfahren über die Systemeinstellungen und
      # Voraussetzung für Bluetooth (Matter-Kopplung per BLE, Bluetooth-Sensoren)
      - /run/dbus:/run/dbus:ro
  watchtower:
    image: nickfedor/watchtower
    restart: always
    container_name: watchtower
    command: --cleanup --include-restarting
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

Speichere diese Datei in einem Verzeichnis auf deinem System.

## Gladys Assistant konfigurieren

Einige Einstellungen, die du anpassen kannst:

- `SERVER_PORT: 80` → Hier kannst du den Standardport der Gladys-Oberfläche ändern.
- `TZ: Europe/Paris` → Um die Zeitzone des Containers zu ändern. Alle möglichen Werte findest du in [dieser Liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Gladys Assistant starten

Um Gladys (und Watchtower) zu starten, führe den folgenden Befehl aus:

```bash
sudo docker compose -f gladys-compose.yml up -d
```

Hinweis:

- `-d` => Mit dieser Option laufen die Container im Hintergrund (Detached-Modus). So kannst du die Verbindung trennen, und die Container laufen weiter.

## Gladys Assistant aufrufen

Öffne **`http://gladysassistant.local`** in deinem Browser. Gladys macht diesen Namen per mDNS in deinem lokalen Netzwerk bekannt, sodass du es von jedem Gerät im selben Netzwerk erreichst, ohne jemals eine IP-Adresse heraussuchen zu müssen.

:::note
Du musst dich im selben Netzwerk wie der Rechner befinden.
:::

Wenn du zu Hause mehrere Gladys-Instanzen betreibst, kannst du jede unter **Einstellungen → System → Lokale Adresse (mDNS)** umbenennen. Die Änderung wirkt sofort, ein Neustart ist nicht nötig.

### Wenn `gladysassistant.local` sich nicht öffnet

mDNS ist in macOS, iOS sowie Windows 10 und neuer integriert und funktioniert in den meisten Heimnetzwerken. Einige Konfigurationen blockieren es dennoch: manche Android-Versionen, Gastnetzwerke und Router mit aktivierter Client-Isolation. Außerdem macht sich Gladys nur bekannt, wenn es im Host-Netzwerk läuft – genau das tut die obige Konfiguration.

Verwende in diesem Fall stattdessen die IP-Adresse des Rechners in deinem Browser. Um sie in deinem lokalen Netzwerk zu finden, kannst du Apps wie diese verwenden:

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner) unter Android
- [iNet - Network Scanner](https://apps.apple.com/us/app/inet-network-scanner/id340793353) unter iOS
