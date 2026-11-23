---
id: migrate-from-home-assistant
title: "Von Home Assistant zu Gladys wechseln: Zigbee2MQTT-Geräte behalten"
description: "Du wechselst von Home Assistant zu Gladys Assistant? Verbinde Gladys mit dem Zigbee2MQTT-Add-on von Home Assistant oder ziehe dein Zigbee2MQTT-Netzwerk zu Gladys um, ohne deine Geräte neu anzulernen. Und was mit ZHA-Geräten passiert."
sidebar_label: Von Home Assistant umziehen
keywords:
  - von home assistant zu gladys wechseln
  - home assistant migration
  - zigbee2mqtt von home assistant umziehen
  - zigbee2mqtt add-on migration
  - zigbee geräte behalten ohne neu anlernen
  - zha zu zigbee2mqtt
  - conbee ii home assistant umzug
---

Du wechselst von Home Assistant zu Gladys? Wenn deine Zigbee-Geräte über das **Zigbee2MQTT-Add-on** von Home Assistant laufen (in neueren Versionen von Home Assistant *App* genannt), ziehen sie mit um: **Du musst sie nicht neu anlernen**.

Du hast zwei Möglichkeiten:

- **Option A: Gladys verbindet sich mit dem Zigbee2MQTT von Home Assistant.** Nichts wird verschoben: Zigbee2MQTT bleibt auf Home Assistant, und Gladys liest es über MQTT. Das ist der schnellste Weg, Gladys auszuprobieren.
- **Option B: Du ziehst Zigbee2MQTT zu Gladys um.** Gladys verwaltet dann selbst den MQTT-Broker und Zigbee2MQTT, und du kannst Home Assistant ausschalten.

Du kannst beides nacheinander machen: Starte mit Option A, um Gladys im Alltag zu nutzen, und wechsle zu Option B, sobald du bereit bist, Home Assistant auszuschalten. Die Geräte, die du in Gladys hinzufügst, sind über ihren Zigbee2MQTT-Namen verknüpft, und Option B behält diese Namen: Normalerweise musst du sie in Gladys nicht erneut hinzufügen.

Geräte, die mit **ZHA** (der eingebauten Zigbee-Integration von Home Assistant) angelernt sind, sind ein anderer Fall: Siehe [Mit ZHA angelernte Geräte](#devices-paired-with-zha).

## Option A: Gladys mit dem Zigbee2MQTT von Home Assistant verbinden {/* #option-a-connect-gladys-to-the-zigbee2mqtt-of-home-assistant */}

1. **Lege einen MQTT-Benutzer für Gladys an.** Das Mosquitto-broker-Add-on von Home Assistant akzeptiert die Benutzer von Home Assistant: Lege unter **Einstellungen > Personen > Benutzer** einen eigenen Benutzer für Gladys an. Du kannst auch einen unter `logins` in der Konfiguration des Mosquitto-Add-ons hinzufügen.
2. Gehe in Gladys zu **Integrationen > Zigbee2MQTT**, Tab `Einrichtung`. Klicke in Schritt 1 des Assistenten auf **Ich habe bereits ein Zigbee2MQTT**.
3. Gib Folgendes ein:
   - die **Adresse des MQTT-Brokers**: `mqtt://IP_VON_HOME_ASSISTANT:1883`;
   - den **Benutzer** und das **Passwort**, die du gerade angelegt hast;
   - die **Adresse der Zigbee2MQTT-Oberfläche** (optional). Unter Home Assistant öffnet sich die Oberfläche von Zigbee2MQTT meist nur über die Seitenleiste von Home Assistant: Lass dieses Feld leer, außer du hast ihren Port in den Netzwerkeinstellungen des Add-ons freigegeben.
4. Klicke auf **Verbinden**. Deine Geräte erscheinen im Tab `Geräte in der Nähe`: [Füge sie zu Gladys hinzu](/de/docs/integrations/zigbee2mqtt#add-devices).

:::warning
Gladys hört auf das Topic `zigbee2mqtt/#`: Das Basis-Topic deines Zigbee2MQTT (`mqtt.base_topic`) muss weiterhin `zigbee2mqtt` sein, der Standardwert des Add-ons.
:::

Ein Gerät zeigt seine Werte, sobald es hinzugefügt ist, wenn Zigbee2MQTT sie gesendet hat, seit Gladys verbunden ist. Ein batteriebetriebener Sensor zeigt seine Werte bei seiner nächsten Meldung: Rechne mit bis zu etwa einer Stunde.

**Vorteile:** fünf Minuten Einrichtung, nichts kann kaputtgehen, und du kannst jederzeit zurück.
**Nachteil:** Home Assistant (Mosquitto und Zigbee2MQTT) läuft weiter. Fällt es aus, fällt auch dein Zigbee-Netzwerk aus.

## Option B: Zigbee2MQTT zu Gladys umziehen {/* #option-b-move-zigbee2mqtt-into-gladys */}

Dein ganzes Zigbee-Netzwerk steckt im Datenordner von Zigbee2MQTT und auf dem Koordinator (deinem Zigbee-Stick). Kopiere den Ordner, stecke den Stick um, und Gladys übernimmt das Netzwerk so, wie es ist.

:::info[Bevor du anfängst]

- Gladys ist installiert (zum Beispiel mit [Gladys Assistant OS auf einem Mini-PC](/de/docs/installation/mini-pc/)), und du hast SSH-Zugriff auf den Rechner.
- Du behältst **denselben Zigbee-Stick** wie unter Home Assistant: Die Netzwerkeinstellungen sind darauf gespeichert.
- Zigbee2MQTT ist in Gladys noch nicht eingerichtet. Falls doch (du hast Option A getestet oder es zum Ausprobieren installiert), klicke zuerst in den **Erweiterten Einstellungen** des Tabs `Einrichtung` auf **Integration zurücksetzen**. Mach das **bevor** du die Dateien kopierst: Das Zurücksetzen löscht den Zigbee2MQTT-Ordner von Gladys. Die Geräte, die du schon zu Gladys hinzugefügt hast, bleiben erhalten.

:::

### 1. Zigbee2MQTT in Home Assistant stoppen {/* #1-stop-zigbee2mqtt-in-home-assistant */}

Stoppe in Home Assistant das **Zigbee2MQTT**-Add-on und schalte seinen automatischen Start (Option *Start on boot*) aus, damit es gestoppt bleibt. **Zwei Zigbee2MQTT dürfen nie im selben Netzwerk laufen.**

### 2. Den Zigbee2MQTT-Ordner holen {/* #2-get-the-zigbee2mqtt-folder */}

Hol dir mit dem Add-on **Samba share** oder **Terminal & SSH** den Ordner von Zigbee2MQTT. Es ist der Ordner `zigbee2mqtt` der Home-Assistant-Konfiguration: `config/zigbee2mqtt` auf der Samba-Freigabe, `/homeassistant/zigbee2mqtt` (oder `/config/zigbee2mqtt`, je nach Version des Add-ons) im Terminal. Die wichtigen Dateien:

- `configuration.yaml`, sowie `devices.yaml` und `groups.yaml`, falls vorhanden;
- `database.db`;
- `coordinator_backup.json`;
- `state.json` (optional: die letzten bekannten Zustände).

Bewahre eine unveränderte Kopie dieses Ordners auf: Sie ist dein Weg zurück.

### 3. Die Dateien auf den Gladys-Rechner kopieren {/* #3-copy-the-files-to-the-gladys-machine */}

Kopiere diese Dateien in den Zigbee2MQTT-Ordner von Gladys: `/var/lib/gladysassistant/zigbee2mqtt/z2m/` bei einer Standardinstallation. Lege den Ordner an, falls er noch nicht existiert:

```bash
sudo mkdir -p /var/lib/gladysassistant/zigbee2mqtt/z2m
```

Schicke die Dateien zum Beispiel von deinem Computer aus mit `scp` in dein Home-Verzeichnis auf dem Gladys-Rechner:

```bash
scp configuration.yaml database.db coordinator_backup.json state.json BENUTZER@IP_VON_GLADYS:~
```

Verschiebe sie dann auf dem Gladys-Rechner in den Ordner (füge `devices.yaml` und `groups.yaml` hinzu, falls du sie hast):

```bash
sudo mv ~/configuration.yaml ~/database.db ~/coordinator_backup.json ~/state.json /var/lib/gladysassistant/zigbee2mqtt/z2m/
```

Wenn du Gladys mit Docker in einem anderen Ordner als `/var/lib/gladysassistant` installiert hast, nimm stattdessen deinen Ordner.

### 4. `configuration.yaml` anpassen {/* #4-edit-configurationyaml */}

Öffne `configuration.yaml` auf dem Gladys-Rechner (zum Beispiel mit `sudo nano /var/lib/gladysassistant/zigbee2mqtt/z2m/configuration.yaml`) und passe diese Zeilen von Hand an:

```yaml
homeassistant:
  enabled: false
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://localhost:1884
```

- `server` muss auf den MQTT-Broker von Gladys zeigen (Port `1884`). Sonst zeigt es weiterhin auf den Mosquitto von Home Assistant: Gladys schreibt diese Zeile nicht um. Fehlt die Zeile, füge sie hinzu.
- `homeassistant`: Schreibe `enabled: false` unter den Abschnitt `homeassistant`. Ersetze den Abschnitt nicht durch `homeassistant: false`: Zigbee2MQTT 2 lehnt diese Form ab und startet nicht.
- Lass den Rest unverändert. Gladys schreibt beim Start selbst den MQTT-Benutzer und das Passwort, den seriellen Port und den Adapter des Sticks sowie den Port der Weboberfläche neu. Netzwerkschlüssel, PAN ID und Kanal bleiben erhalten.

### 5. Zigbee2MQTT aus Gladys installieren {/* #5-install-zigbee2mqtt-from-gladys */}

Stecke den Zigbee-Stick an den Gladys-Rechner. Läuft Gladys in einer virtuellen Maschine, reiche den Stick an sie durch (siehe die [Proxmox-Anleitung](/de/docs/installation/proxmox)).

Gehe in Gladys zu **Integrationen > Zigbee2MQTT**, Tab `Einrichtung`, und folge dem [Einrichtungsassistenten](/de/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard): Gladys erkennt die gängigsten Sticks (ConBee II, SONOFF ZBDongle-P und ZBDongle-E…); sonst wähle sein Modell in der Liste. Klicke auf **Installieren**.

Gladys behält die `configuration.yaml`, die es im Ordner findet: Zigbee2MQTT startet also mit deinem bestehenden Netzwerk. Sobald das Netzwerk bereit ist, zeigt das Dashboard die Anzahl der Geräte im Netzwerk.

### 6. Deine Geräte prüfen {/* #6-check-your-devices */}

- Geräte, die du mit Option A schon zu Gladys hinzugefügt hast, funktionieren wieder unverändert.
- Die anderen erscheinen im Tab `Geräte in der Nähe`: [Füge sie zu Gladys hinzu](/de/docs/integrations/zigbee2mqtt#add-devices).

Batteriebetriebene Sensoren zeigen ihre Werte bei ihrer nächsten Meldung.

### Zurück zu Home Assistant {/* #go-back-to-home-assistant */}

Etwas klappt nicht? Klicke im Dashboard von Gladys auf **Stoppen** (Gladys merkt es sich und startet Zigbee2MQTT nicht wieder). Stecke den Stick wieder an den Home-Assistant-Rechner, lege bei Bedarf deine Kopie des Ordners zurück und starte das Zigbee2MQTT-Add-on wieder.

## Mit ZHA angelernte Geräte {/* #devices-paired-with-zha */}

ZHA ist ein anderer Fall:

- **ZHA nutzt kein MQTT.** Gladys kann sich also nicht damit verbinden, und Option A funktioniert für diese Geräte nicht.
- **Gladys verwaltet ein einziges Zigbee2MQTT, also einen einzigen Zigbee-Stick.** Wenn du einen Stick für Zigbee2MQTT und einen anderen für ZHA genutzt hast, kannst du nicht beide in Gladys betreiben.

Am einfachsten und zuverlässigsten: Zieh das Zigbee2MQTT-Netzwerk um (Option B) und lerne die Geräte, die unter ZHA liefen, darauf neu an, im Tab `Geräte in der Nähe` mit **Anlernen aktivieren**. Das ist einmal etwas Arbeit, aber danach hast du ein einziges Netzwerk und ein stabileres Mesh.

Wenn alle deine Zigbee-Geräte unter ZHA laufen, stoppe ZHA in Home Assistant (oder schalte Home Assistant aus), stecke den Stick an den Gladys-Rechner, [installiere Zigbee2MQTT](/de/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) und lerne deine Geräte neu an.

## Automationen und Dashboards {/* #automations-and-dashboards */}

Deine Automationen und Dashboards ziehen nicht mit deinen Geräten um: Baue sie in Gladys mit den [Szenen](/de/docs/scenes/intro) und den [Dashboards](/de/docs/dashboard/intro) neu auf. Wenn du Z-Wave nutzt, siehe die [Z-Wave-JS-UI-Integration](/de/docs/integrations/zwavejs-ui).

## Brauchst du Hilfe? {/* #need-help */}

Wenn du bei einem Schritt nicht weiterkommst, stell deine Frage im [Community-Forum](https://community.gladysassistant.com/).
