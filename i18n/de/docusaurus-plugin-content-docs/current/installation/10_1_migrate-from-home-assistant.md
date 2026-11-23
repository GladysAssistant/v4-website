---
id: migrate-from-home-assistant
title: "Von Home Assistant zu Gladys wechseln: Zigbee2MQTT, Z-Wave, Matter"
description: "Du wechselst von Home Assistant zu Gladys Assistant? Was du behältst und was du neu machst: Zieh dein Zigbee2MQTT-Netzwerk um, ohne deine Geräte neu anzulernen, behalte deinen Z-Wave-Stick, teile deine Matter-Geräte, finde deine MQTT-Geräte wieder und schalte dann Home Assistant aus."
sidebar_label: Von Home Assistant umziehen
keywords:
  - von home assistant zu gladys wechseln
  - home assistant migration
  - home assistant verlassen
  - zigbee2mqtt von home assistant umziehen
  - zigbee2mqtt add-on migration
  - zigbee geräte behalten ohne neu anlernen
  - zha zu zigbee2mqtt
  - z-wave js migration
  - matter gerät teilen home assistant
---

Du wechselst von Home Assistant zu Gladys? Die meisten deiner Geräte ziehen mit um, **ohne neu angelernt zu werden**: das Zigbee2MQTT-Netzwerk, das Z-Wave-Netzwerk, Matter-Geräte und MQTT-Geräte. Zurück bleibt, was du in Home Assistant gebaut hast: Automationen, Dashboards und Verlauf.

Du musst nicht alles an einem Abend umstellen: Gladys kann neben Home Assistant laufen, mit denselben Geräten verbunden, während du deine Szenen neu baust. Home Assistant schaltest du am Ende aus.

## Was du behältst, was du neu machst {/* #what-you-keep-what-you-redo */}

| In Home Assistant | In Gladys | Neu anlernen? |
| --- | --- | --- |
| Zigbee2MQTT-Add-on | [Zigbee2MQTT-Integration](#zigbee2mqtt): Gladys verbindet sich damit und übernimmt es dann | Nein |
| ZHA | [Zigbee2MQTT-Integration](#devices-paired-with-zha) | Ja |
| Z-Wave JS oder Z-Wave JS UI | [Z-Wave-JS-UI-Integration](#z-wave), mit demselben Stick | Nein |
| Matter | [Matter-Integration](#matter), mit einem von Home Assistant geteilten Code | Nein |
| MQTT-Geräte (ESPHome, OpenMQTTGateway, Eigenbau…) | [MQTT-Integration](#mqtt-devices-and-other-integrations), Home Assistant Discovery | Nein |
| Tasmota, ESPHome, Shelly, Philips Hue, Netatmo, Tuya… | [Ihre Integration in Gladys](#mqtt-devices-and-other-integrations) | Meistens nicht |
| Automationen, Skripte | [Szenen](#automations-dashboards-and-history) | Neu bauen |
| Dashboards | [Dashboards](#automations-dashboards-and-history) | Neu bauen |
| Verlauf | Wird nicht übertragen | — |

## Die empfohlene Reihenfolge {/* #the-recommended-order */}

1. **Installiere Gladys neben Home Assistant**, auf einem anderen Rechner oder in einer anderen virtuellen Maschine: zum Beispiel [Gladys Assistant OS auf einem Mini-PC](/de/docs/installation/mini-pc/).
2. **Verbinde Gladys mit dem, was Home Assistant betreibt**: dem Zigbee2MQTT-Add-on, dem MQTT-Broker, den Matter-Geräten. Nichts wird verschoben, und du kannst jederzeit zurück.
3. **Baue deine Szenen und Dashboards** in Gladys neu auf und nutze es eine Weile im Alltag.
4. **Zieh die Funkmodule** (Zigbee-Stick, Z-Wave-Stick) auf den Gladys-Rechner um, eins nach dem anderen.
5. **Schalte Home Assistant aus**, sobald nichts mehr davon abhängt (siehe [Home Assistant ausschalten](#turn-home-assistant-off)).

:::warning
Ein Zigbee-Stick oder ein Z-Wave-Stick wird **immer nur von einer Software gleichzeitig** gesteuert. Lass nie Home Assistant und Gladys dasselbe Funkmodul steuern: Stoppe das Add-on in Home Assistant, bevor du es in Gladys startest.
:::

## Zigbee2MQTT {/* #zigbee2mqtt */}

Wenn deine Zigbee-Geräte über das **Zigbee2MQTT-Add-on** von Home Assistant laufen (in neueren Versionen von Home Assistant *App* genannt), hast du zwei Möglichkeiten:

- **Option A: Gladys verbindet sich mit dem Zigbee2MQTT von Home Assistant.** Nichts wird verschoben: Zigbee2MQTT bleibt auf Home Assistant, und Gladys liest es über MQTT. Das ist der schnellste Weg, Gladys auszuprobieren.
- **Option B: Du ziehst Zigbee2MQTT zu Gladys um.** Gladys verwaltet dann selbst den MQTT-Broker und Zigbee2MQTT, und Home Assistant muss nicht mehr laufen.

Du kannst beides nacheinander machen: Starte mit Option A und wechsle zu Option B, sobald du bereit bist. Die Geräte, die du in Gladys hinzufügst, sind über ihren Zigbee2MQTT-Namen verknüpft, und Option B behält diese Namen: Normalerweise musst du sie in Gladys nicht erneut hinzufügen.

### Option A: Gladys mit dem Zigbee2MQTT von Home Assistant verbinden {/* #option-a-connect-gladys-to-the-zigbee2mqtt-of-home-assistant */}

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

### Option B: Zigbee2MQTT zu Gladys umziehen {/* #option-b-move-zigbee2mqtt-into-gladys */}

Dein ganzes Zigbee-Netzwerk steckt im Datenordner von Zigbee2MQTT und auf dem Koordinator (deinem Zigbee-Stick). Kopiere den Ordner, stecke den Stick um, und Gladys übernimmt das Netzwerk so, wie es ist.

:::info[Bevor du anfängst]

- Du hast SSH-Zugriff auf den Gladys-Rechner.
- Du behältst **denselben Zigbee-Stick** wie unter Home Assistant: Die Netzwerkeinstellungen sind darauf gespeichert.
- Zigbee2MQTT ist in Gladys noch nicht eingerichtet. Falls doch (du hast Option A genutzt oder es zum Ausprobieren installiert), klicke zuerst in den **Erweiterten Einstellungen** des Tabs `Einrichtung` auf **Integration zurücksetzen**. Mach das **bevor** du die Dateien kopierst: Das Zurücksetzen löscht den Zigbee2MQTT-Ordner von Gladys. Die Geräte, die du schon zu Gladys hinzugefügt hast, bleiben erhalten.

:::

#### 1. Zigbee2MQTT in Home Assistant stoppen {/* #1-stop-zigbee2mqtt-in-home-assistant */}

Stoppe in Home Assistant das **Zigbee2MQTT**-Add-on und schalte seinen automatischen Start (Option *Start on boot*) aus, damit es gestoppt bleibt. **Zwei Zigbee2MQTT dürfen nie im selben Netzwerk laufen.**

#### 2. Den Zigbee2MQTT-Ordner holen {/* #2-get-the-zigbee2mqtt-folder */}

Hol dir mit dem Add-on **Samba share** oder **Terminal & SSH** den Ordner von Zigbee2MQTT. Es ist der Ordner `zigbee2mqtt` der Home-Assistant-Konfiguration: `config/zigbee2mqtt` auf der Samba-Freigabe, `/homeassistant/zigbee2mqtt` (oder `/config/zigbee2mqtt`, je nach Version des Add-ons) im Terminal. Die wichtigen Dateien:

- `configuration.yaml`, sowie `devices.yaml` und `groups.yaml`, falls vorhanden;
- `database.db`;
- `coordinator_backup.json`;
- `state.json` (optional: die letzten bekannten Zustände).

Bewahre eine unveränderte Kopie dieses Ordners auf: Sie ist dein Weg zurück.

#### 3. Die Dateien auf den Gladys-Rechner kopieren {/* #3-copy-the-files-to-the-gladys-machine */}

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

#### 4. `configuration.yaml` anpassen {/* #4-edit-configurationyaml */}

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

#### 5. Zigbee2MQTT aus Gladys installieren {/* #5-install-zigbee2mqtt-from-gladys */}

Stecke den Zigbee-Stick an den Gladys-Rechner. Läuft Gladys in einer virtuellen Maschine, reiche den Stick an sie durch (siehe die [Proxmox-Anleitung](/de/docs/installation/proxmox)).

Gehe in Gladys zu **Integrationen > Zigbee2MQTT**, Tab `Einrichtung`, und folge dem [Einrichtungsassistenten](/de/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard): Gladys erkennt die gängigsten Sticks (ConBee II, SONOFF ZBDongle-P und ZBDongle-E…); sonst wähle sein Modell in der Liste. Klicke auf **Installieren**.

Gladys behält die `configuration.yaml`, die es im Ordner findet: Zigbee2MQTT startet also mit deinem bestehenden Netzwerk. Sobald das Netzwerk bereit ist, zeigt das Dashboard die Anzahl der Geräte im Netzwerk.

#### 6. Deine Geräte prüfen {/* #6-check-your-devices */}

- Geräte, die du mit Option A schon zu Gladys hinzugefügt hast, funktionieren wieder unverändert.
- Die anderen erscheinen im Tab `Geräte in der Nähe`: [Füge sie zu Gladys hinzu](/de/docs/integrations/zigbee2mqtt#add-devices).

Batteriebetriebene Sensoren zeigen ihre Werte bei ihrer nächsten Meldung.

#### Zurück zu Home Assistant {/* #go-back-to-home-assistant */}

Etwas klappt nicht? Klicke im Dashboard von Gladys auf **Stoppen** (Gladys merkt es sich und startet Zigbee2MQTT nicht wieder). Stecke den Stick wieder an den Home-Assistant-Rechner, lege bei Bedarf deine Kopie des Ordners zurück und starte das Zigbee2MQTT-Add-on wieder.

### Mit ZHA angelernte Geräte {/* #devices-paired-with-zha */}

ZHA (die eingebaute Zigbee-Integration von Home Assistant) ist ein anderer Fall:

- **ZHA nutzt kein MQTT.** Gladys kann sich also nicht damit verbinden, und Option A funktioniert für diese Geräte nicht.
- **Gladys verwaltet ein einziges Zigbee2MQTT, also einen einzigen Zigbee-Stick.** Wenn du einen Stick für Zigbee2MQTT und einen anderen für ZHA genutzt hast, kannst du nicht beide in Gladys betreiben.

Am einfachsten und zuverlässigsten: Zieh das Zigbee2MQTT-Netzwerk um (Option B) und lerne die Geräte, die unter ZHA liefen, darauf neu an, im Tab `Geräte in der Nähe` mit **Anlernen aktivieren**. Das ist einmal etwas Arbeit, aber danach hast du ein einziges Netzwerk und ein stabileres Mesh.

Wenn alle deine Zigbee-Geräte unter ZHA laufen, stoppe ZHA in Home Assistant (oder schalte Home Assistant aus), stecke den Stick an den Gladys-Rechner, [installiere Zigbee2MQTT](/de/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) und lerne deine Geräte neu an.

## Z-Wave {/* #z-wave */}

Gladys spricht Z-Wave über [Z-Wave JS UI](/de/docs/integrations/zwavejs-ui), per MQTT. Dein Z-Wave-Netzwerk (die Geräte und ihre Node-Nummern) ist **auf dem Z-Wave-Stick selbst** gespeichert: An ein anderes Z-Wave JS UI angeschlossen, bringt der Stick seine Geräte mit.

**Um Gladys zuerst auszuprobieren:** Wenn Home Assistant das Add-on **Z-Wave JS UI** nutzt, schalte sein MQTT-Gateway ein, verbunden mit dem Mosquitto von Home Assistant, mit den Einstellungen aus der [Z-Wave-JS-UI-Anleitung](/de/docs/integrations/zwavejs-ui#z-wave-js-ui-konfigurieren), und verbinde Gladys dann mit diesem Broker. Das offizielle Add-on **Z-Wave JS** hat kein MQTT-Gateway: Gladys kann sich nicht damit verbinden.

**Um den Stick umzuziehen:**

1. **Notiere die Sicherheitsschlüssel** deines Netzwerks: im Tab **Konfiguration** des Z-Wave-JS-Add-ons (S0-Legacy-Schlüssel und S2-Schlüssel) oder unter **Settings > Z-Wave** in Z-Wave JS UI. Ohne sie antworten sicher angelernte Geräte (Schlösser, Alarmanlagen…) nicht mehr.
2. **Stoppe das Add-on** in Home Assistant und schalte seinen automatischen Start (Option *Start on boot*) aus.
3. **Installiere Z-Wave JS UI** auf dem Gladys-Rechner mit Docker (siehe die [Dokumentation von Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker)), neben einem MQTT-Broker: Der, den die [MQTT-Integration](/de/docs/integrations/mqtt) von Gladys installiert, passt. Stecke den Stick ein.
4. Gib in Z-Wave JS UI unter **Settings > Z-Wave** **dieselben Sicherheitsschlüssel** ein, dann die MQTT- und Gateway-Einstellungen aus der [Z-Wave-JS-UI-Anleitung](/de/docs/integrations/zwavejs-ui#z-wave-js-ui-konfigurieren).
5. Verbinde in Gladys die [Z-Wave-JS-UI-Integration](/de/docs/integrations/zwavejs-ui#gladys-mit-z-wave-js-ui-verbinden) mit dem Broker und füge deine Geräte im Tab **Z-Wave JS UI Entdeckung** hinzu.

Gladys erkennt Z-Wave-Geräte an ihrer Node-Nummer, die der Stick behält: Geräte, die vor dem Umzug in Gladys hinzugefügt wurden, funktionieren weiter. Die Namen aus Home Assistant ziehen nicht mit um: Benenne die Geräte in Gladys um.

## Matter {/* #matter */}

Ein Matter-Gerät kann von mehreren Controllern gleichzeitig gesteuert werden (Multi-Admin). Du musst es also nicht aus Home Assistant entfernen, um es zu Gladys hinzuzufügen:

1. Öffne das Gerät in Home Assistant und klicke auf **Gerät teilen**: Home Assistant öffnet ein Kopplungsfenster und gibt dir einen Kopplungscode.
2. Gehe in Gladys zu **Integrationen > Matter**, Tab **Gerät hinzufügen**, gib diesen Code ein und füge das Gerät dann im Tab **Geräte** hinzu (siehe die [Matter-Anleitung](/de/docs/integrations/matter#einrichtung-in-gladys-assistant)).

Gladys wird ein Controller des Geräts, neben Home Assistant: Das Gerät funktioniert mit Gladys weiter, wenn Home Assistant ausgeschaltet ist.

:::warning[Thread-Geräte]
Ein Matter-over-Thread-Gerät braucht einen **Thread-Border-Router** in deinem Netzwerk, und Gladys ist keiner. Ist deiner der von Home Assistant (das Add-on OpenThread Border Router, zum Beispiel mit einem Home Assistant Connect ZBT-1 oder ZBT-2), antworten deine Thread-Geräte nicht mehr, sobald du Home Assistant ausschaltest. Lies vorher [Wenn dein Gerät nur Thread nutzt](/de/docs/integrations/matter#wenn-dein-gerät-nur-thread-nutzt) und frag im Zweifel im Forum.
:::

## MQTT-Geräte und andere Integrationen {/* #mqtt-devices-and-other-integrations */}

**MQTT-Geräte.** Seit Gladys 4.86 versteht die [MQTT-Integration](/de/docs/integrations/mqtt) das Protokoll **Home Assistant Discovery**: Geräte, die ihre Konfiguration auf dem Topic `homeassistant/` des Brokers veröffentlichen (ESPHome mit MQTT, OpenMQTTGateway, Eigenbauten…), erscheinen von selbst in ihrem Tab **Erkennung**. Du kannst die MQTT-Integration zuerst mit dem Mosquitto von Home Assistant verbinden und deine Geräte dann auf den Broker von Gladys umstellen, bevor du Home Assistant ausschaltest.

Füge deine Zigbee-Geräte nicht dort hinzu: Zigbee2MQTT kann zwar auch Home-Assistant-Discovery-Nachrichten veröffentlichen, nutze für sie aber die Zigbee2MQTT-Integration, die sie vollständig unterstützt.

**Geräte mit eigener Integration.** Viele Marken haben ihre Integration in Gladys, nativ oder aus der Community: [Tasmota](/de/docs/integrations/tasmota), [ESPHome](/de/docs/integrations/external/esphome), [Shelly](/de/docs/integrations/external/shelly), [Philips Hue](/de/docs/integrations/external/philips-hue), [Netatmo](/de/docs/integrations/external/netatmo), [Tuya](/de/docs/integrations/external/tuya), Kameras… Such deine im [Integrationskatalog](/de/docs/integrations/) und füge deine Geräte von dort hinzu: Sie bleiben mit ihrer Bridge, ihrer Cloud oder deinem WLAN gekoppelt, es gibt also nichts neu anzulernen.

## Automationen, Dashboards und Verlauf {/* #automations-dashboards-and-history */}

Das alles bleibt in Home Assistant:

- **Automationen und Skripte**: Baue sie als [Szenen](/de/docs/scenes/intro) neu. Aktiviere sie in Gladys erst, wenn sie in Home Assistant ausgeschaltet sind, sonst laufen sie doppelt.
- **Dashboards**: Baue sie in Gladys mit den [Dashboards](/de/docs/dashboard/intro) neu.
- **Verlauf**: Der Verlauf deiner Sensoren wird nicht übertragen. Gladys beginnt mit der Aufzeichnung, sobald du ein Gerät hinzufügst.
- **Node-RED**: Wenn du das Node-RED-Add-on nutzt, kannst du deine Flows exportieren und in die [Node-RED-Integration](/de/docs/integrations/node-red) von Gladys importieren. Die Home-Assistant-Nodes funktionieren nicht mehr: Ersetze sie durch MQTT-Nodes.

## Home Assistant ausschalten {/* #turn-home-assistant-off */}

Bevor du Home Assistant endgültig ausschaltest, prüfe, dass:

- jedes Funkmodul (Zigbee-Stick, Z-Wave-Stick) am Gladys-Rechner steckt und sein Add-on in Home Assistant gestoppt ist;
- kein Gerät mehr den Mosquitto-Broker von Home Assistant nutzt (Tasmota, Shelly, ESPHome…): Stelle sie auf den Broker von Gladys um;
- deine Thread-Geräte einen anderen Border-Router als Home Assistant haben (siehe [Matter](#matter));
- deine Szenen in Gladys laufen.

Bewahre ein paar Wochen lang ein Backup von Home Assistant auf: Es ist dein Plan B.

## Brauchst du Hilfe? {/* #need-help */}

Wenn du bei einem Schritt nicht weiterkommst, stell deine Frage im [Community-Forum](https://community.gladysassistant.com/).
