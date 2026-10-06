---
id: unraid
title: Gladys Assistant auf einem Unraid-NAS installieren
description: "Installiere Gladys Assistant über den App-Store auf einem Unraid-NAS: Docker-Container mit Host-Netzwerk konfigurieren und mit der Automatisierung deines Zuhauses loslegen."
sidebar_label: Installation auf einem Unraid-NAS
---

In dieser Anleitung gehen wir die Schritte zur Installation von Gladys Assistant mit Docker auf einem Unraid-NAS durch.

## Nach Gladys-Assistant suchen

Installiere die Docker-App über den „Apps Manager“:

- Klicke in deinem Unraid-Admin-Dashboard auf „Apps“
- Suche nach „Gladys-Assistant“
- Klicke auf „install“

![AppManager](../../../../../static/img/docs/en/installation/unraid/apps_manager.jpg)

## Gladys konfigurieren

Anschließend wirst du zu den Konfigurationsseiten von Gladys weitergeleitet.

![Konfiguration](../../../../../static/img/docs/en/installation/unraid/docker_config.jpg)

Das sind die verschiedenen Parameter:

1. Der Name deiner App. Wenn du keine weitere Instanz hast, kannst du ihn bei Gladys-Assistant belassen
2. Das Docker-Hub-Repository. Ändere es nur, wenn du genau weißt, was du tust
3. Der Netzwerktyp MUSS auf **HOST** bleiben. Das ist nötig, damit Gladys dein Netzwerk nach neuen smarten Geräten durchsuchen kann
4. Deine Zeitzone. Achte darauf, dieses [Format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) einzuhalten
5. Der Port, über den das Gladys-Dashboard angezeigt wird

Achtung: Wenn du MQTT-Geräte hast oder planst, muss Port 1883 frei sein. Dasselbe gilt für Zigbee-Geräte, die sowohl Port 1884 als auch 8080 frei benötigen.

:::note
Wenn du den Standardport 8006 änderst, leitet dich der WebUI-Button möglicherweise auf den falschen Port weiter. Um das zu ändern, klicke auf die erweiterte Ansicht (Advanced View), suche das Feld für die Web UI und ändere die Portnummer.
:::

Klicke auf „Apply“ und warte, bis die Installation abgeschlossen ist.

## Gladys aufrufen

Gladys ist in deinem Browser unter `http://IP_DEINES_NAS:PORT` erreichbar.

Zum Beispiel `http://192.168.1.2:8006`

Du kannst die Web UI auch aufrufen, indem du auf „Docker“, dann auf das Gladys-Logo und schließlich auf „WebUI“ klickst.

Willkommen bei Gladys Assistant!

## Gladys aktualisieren

Watchtower ist unter Unraid derzeit nicht verfügbar (das könnte sich bald ändern).

So aktualisierst du Gladys:

0. Öffne den Docker-Bereich
1. Klicke auf „Advanced View“
2. Klicke auf „force update“

![Aktualisierung](../../../../../static/img/docs/en/installation/unraid/gladys_update.jpg)

Deine aktuelle Version siehst du im Gladys-Dashboard: Klicke oben rechts auf dein Profil, dann auf „Einstellungen“ und schließlich auf „System“.

## Erweiterte Parameter

Bei der Konfiguration von Gladys siehst du weitere Parameter:

- Gladys lib folder: Ordner auf deinem NAS, in dem dauerhafte Dateien gespeichert werden
- Gladys Dev Folder: Ordner, in dem Geräte als Dateien abgebildet werden
- Gladys uDev Folder: udev ist der Gerätemanager des Linux-Kernels
- DB File path: Docker-Pfad zur SQLite-Datenbank
- Environment: production oder development (zeigt Debug-Informationen an)
- Gladys Docker Folder: Docker-Befehlsdatei, um Docker-Container aus Gladys heraus zu erstellen und zu verwalten
