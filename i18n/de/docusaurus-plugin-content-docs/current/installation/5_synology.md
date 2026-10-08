---
id: synology
title: Gladys Assistant auf einem Synology-NAS installieren
description: "Installiere Gladys Assistant mit Docker auf einem Synology-NAS: Speicher einrichten, den Container per SSH bereitstellen und dein selbst gehostetes Smart Home starten."
sidebar_label: Installation auf einem Synology-NAS
---

In dieser Anleitung gehen wir die Schritte zur Installation von Gladys Assistant mit Docker auf einem kompatiblen Synology-NAS durch.

## Docker auf deinem NAS installieren

Installiere das Docker-Paket über das „Paket-Zentrum“.
Die Liste der kompatiblen NAS findest du auf der [Seite des Docker-Pakets](https://www.synology.com/en-global/dsm/packages/Docker).

## Gladys mit Docker bereitstellen

### Speicher

Damit die Daten dauerhaft erhalten bleiben, müssen wir einen Ordner auf dem Volume anlegen, der eingebunden wird.

Falls noch nicht vorhanden, erstelle über die _File Station_ einen _gemeinsamen Ordner_ namens `docker`.
Erstelle in diesem Ordner einen weiteren Ordner namens `gladysassistant`.
**Achtung**: Auf der Kommandozeile enthält der Ordnerpfad den Namen des Volumes: `/volume1/docker/gladysassistant`

### Gladys per SSH installieren

Verbinde dich per SSH mit deinem NAS und führe diesen Befehl aus, um den Gladys-Container zu erstellen.

```
sudo \
docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--cgroupns=host \
--name "gladys" \
-e NODE_ENV=production \
-e SERVER_PORT=8420 \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /volume1/docker/gladysassistant/:/var/lib/gladysassistant \
-v /etc/TZ:/etc/timezone:ro \
-v /etc/localtime:/etc/localtime:ro \
-v /dev:/dev \
gladysassistant/gladys:v5
```

**Hinweise:**

- `--name "gladys"`: Name des Containers.
- `-v /volume1/docker/gladysassistant:...`: Pfad, unter dem die Daten auf deinem NAS dauerhaft gespeichert werden.
- `-e SERVER_PORT=8420`: Port, über den Gladys erreichbar ist. Du kannst ihn durch jeden Wert ersetzen, der nicht von der _Disk Station_ belegt ist ([Reservierte Ports auf der Synology-Website](https://kb.synology.com/en-global/DSM/tutorial/What_network_ports_are_used_by_Synology_services))

### Gladys aufrufen

Gladys ist in deinem Browser unter `http://gladysassistant.local:PORT` erreichbar – dem Namen, den Gladys per mDNS in deinem lokalen Netzwerk bekannt macht.

Zum Beispiel `http://gladysassistant.local:8420`. Falls dein Netzwerk mDNS blockiert, verwende stattdessen die IP-Adresse des NAS, zum Beispiel `http://192.168.10.15:8420`.

## Automatische Updates mit Watchtower

Mit Watchtower kannst du Gladys aktualisieren, sobald eine neue Version erscheint.

Führe diesen Befehl aus, um den Watchtower-Container zu erstellen.

```
 sudo docker run -d \
   --name watchtower \
   --log-opt max-size=10m \
   --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   nickfedor/watchtower \
   --cleanup --include-restarting
```

Er prüft jeden Tag, ob deine Container aktualisiert werden müssen.
