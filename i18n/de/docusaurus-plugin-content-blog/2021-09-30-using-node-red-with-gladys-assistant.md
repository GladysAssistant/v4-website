---
title: Node-RED per MQTT in Gladys Assistant integrieren
description: Heute lernen wir, wie man Node-RED, ein Low-Code-Tool, mit Gladys Assistant verbindet.
authors: pierregilles
image: /img/presentation/node-red-gladys-assistant-en.jpg
slug: integrate-node-red-with-gladys-assistant-in-mqtt
---

Hallo!

In diesem Tutorial möchte ich dir zeigen, dass man Gladys Assistant mit anderer cooler Open-Source-Software wie Node-RED verbinden kann.

{/* truncate */}

## Gladys Assistant starten

Für dieses Tutorial brauchst du eine Gladys-Assistant-Instanz.

Du kannst Gladys Assistant mit unserem vorgefertigten Raspberry-Pi-OS-Image auf einem Raspberry Pi installieren oder mit Docker einen Gladys-Container starten.

Für den Einstieg folge einfach unserer [Dokumentation](/de/docs/).

## Node-RED starten

Wir verwenden Docker, um Node-RED zu installieren.

### Das Node-RED-Docker-Image starten

Node-RED hat auf seiner Website einen Abschnitt [Getting Started](https://nodered.org/docs/getting-started/). Wenn du aber einfach Docker nutzen willst, kannst du diesen Befehl ausführen:

```
docker run -d \
--log-opt max-size=10m \
--restart=always \
--privileged \
-u root \
--network=host \
--name node_red \
-v /var/lib/node-red:/data \
nodered/node-red
```

**Ein paar Details:**

- Wir haben den „privileged“-Modus verwendet, falls du Module für die Hausautomation auf deinem Rechner nutzen möchtest, die manchmal mehr Rechte für den Zugriff auf das System brauchen. Wenn du das nicht benötigst, kannst du ihn problemlos entfernen.
- „-u root“ sorgt dafür, dass der Container als Benutzer „root“ gestartet wird. Du kannst „root“ durch den aktuellen Benutzer deines Linux-Rechners ersetzen. Auf einem Raspberry Pi ist das wahrscheinlich „pi“.
- „/var/lib/node-red“: Der Ordner, in dem die Node-RED-Daten gespeichert werden.

### Node-RED absichern

Standardmäßig ist Node-RED offen. Wir müssen es absichern, damit nicht jeder es benutzen kann.

Der Node-RED-Admin muss über die Kommandozeile konfiguriert werden.

Zuerst musst du dein Passwort hashen, indem du folgenden Befehl ausführst:

```
docker exec -it node_red node-red admin hash-pw
```

Gib dein Passwort ein.

Anschließend wird eine Zeichenkette wie diese angezeigt:

```
$2b$08$6yOj6Z/ya7eDdn3eKwy4WukuyHUxiJOcZyHFiHPaCQBckKpLxUPly
```

Das ist eine gehashte Version des Passworts „test“.

Öffne die Datei `/var/lib/node-red/settings.js` mit:

```
nano /var/lib/node-red/settings.js
```

Falls das nicht funktioniert, ist nano vielleicht nicht auf deinem Rechner installiert.

Unter Ubuntu/Debian führst du dann aus:

```
sudo apt-get -y install nano
```

Geh zu der Stelle mit:

```
//adminAuth: {
//    type: "credentials",
//    users: [{
//        username: "admin",
//        password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",
//        permissions: "*"
//    }]
//},
```

Entferne die Kommentarzeichen vor diesen Zeilen und ersetze das Passwort durch das gehashte Passwort, das du vorhin erzeugt hast.

Das Ergebnis sollte ungefähr so aussehen:

```
adminAuth: {
    type: "credentials",
    users: [{
        username: "admin",
        password: "$2b$08$6yOj6Z/ya7eDdn3eKwy4WukuyHUxiJOcZyHFiHPaCQBckKpLxUPly",
        permissions: "*"
    }]
},
```

Starte Node-RED jetzt mit diesem Befehl neu:

```
docker restart node_red
```

Und das war's, Node-RED sollte jetzt abgesichert sein!

### Auf Node-RED zugreifen

Glückwunsch, Node-RED sollte jetzt unter `IP_DEINES_RECHNERS:1880` erreichbar sein!

Du solltest einen Login-Bildschirm sehen.

Melde dich hier mit den Zugangsdaten an, die du vorhin in der Datei settings.js festgelegt hast.

Bei mir sind das:

```
Username: admin
Password: test
```

![Node-RED](../../../static/img/articles/en/node-red/node-red.jpg)

## MQTT in Gladys Assistant konfigurieren

Geh jetzt in Gladys Assistant und klicke auf „Integrationen“ => „MQTT“.

Wechsle in den Tab „Einrichtung“ und klicke auf den großen blauen Button „Broker in Docker installieren“, um automatisch einen MQTT-Broker einzurichten.

Du kannst auch einen MQTT-Broker verwenden, den du bereits früher eingerichtet hast.

### Ein MQTT-Gerät in Gladys Assistant anlegen

Zurück im Tab „Geräte“ der MQTT-Integration kannst du ein neues Gerät anlegen:

- Name: „Lampe“
- Externe ID: „mqtt-lamp“
- Raum: „Küche“
- Funktionen: Füge eine Funktion „Licht An/Aus“ hinzu, um die Lampe steuern zu können
  - Name: „Lampe“
  - Externe ID der Funktion: „mqtt-lamp“
  - Minimalwert: 0
  - Maximalwert: 1
  - Ist es ein Sensor? Nein

Kopiere das angezeigte MQTT-Topic, du brauchst es später noch!

## Ein Gerät in Node-RED von Gladys Assistant aus steuern

In Node-RED kannst du einen „mqtt in“-Node anlegen, um Daten von Gladys per MQTT zu empfangen.

Dazu musst du den MQTT-Broker hinzufügen, den wir gerade in Gladys eingerichtet haben. Klicke dafür auf den kleinen Bearbeiten-Button (das Stift-Symbol neben „Add new mqtt-broker“):

![Node-RED](../../../static/img/articles/en/node-red/add-mqtt-broker.jpg)

- Der Server ist `mqtt://localhost`
- Benutzername: gladys
- Passwort: Kopiere das in Gladys generierte Passwort.

![Node-RED](../../../static/img/articles/en/node-red/broker-username.jpg)

Zum Schluss fügst du das MQTT-Topic ein, das wir beim Anlegen des Geräts in Gladys kopiert haben:

![Node-RED](../../../static/img/articles/en/node-red/mqtt-in.jpg)

Jetzt, wo dieser Node bereit ist, kannst du so ziemlich alles daran anschließen. Es wird ausgeführt, sobald auf diesem MQTT-Topic ein Wert eintrifft.

Du könntest einen einfachen Debug-Node anschließen, um die eingehenden Daten zu sehen, oder einen Switch-Node einbauen, um unterschiedliche Aktionen auszuführen, je nachdem, ob Gladys „0“ (Ausschalten) oder „1“ (Einschalten) schickt.

Beispiel:

![Node-RED](../../../static/img/articles/en/node-red/switch-mqtt-in.jpg)

## Sensorwerte von Node-RED an Gladys Assistant senden

Jetzt machen wir in Node-RED das umgekehrte Szenario: Daten von Node-RED an Gladys senden.

Stellen wir uns vor, ich möchte die CPU-Auslastung meines Rechners messen und alle 10 Sekunden an Gladys schicken.

### Ein MQTT-Gerät in Gladys anlegen

Ich lege in Gladys ein MQTT-Gerät „CPU-Auslastung“ an:

- Name: „CPU“
- Externe ID: „mqtt-cpu“
- Raum: „Küche“
- Funktionen: Füge eine Funktion „Unbekannt“ hinzu (du kannst hier alles wählen, es ist nur ein Beispiel)
  - Name: „CPU“
  - Externe ID der Funktion: „mqtt-cpu“
  - Minimalwert: 0
  - Maximalwert: 100
  - Ist es ein Sensor? Ja

Kopiere das angezeigte MQTT-Topic, du brauchst es später noch!

### Alle 15 Sekunden einen Wert aus Node-RED senden

Füge in Node-RED einen „Inject“-Node hinzu.

Setze `msg.payload` auf einen beliebigen Wert (hier habe ich 15 eingetragen).

Stelle unten im Node ein Wiederholungsintervall von 15 Sekunden ein.

![Node-RED](../../../static/img/articles/en/node-red/inject-every-15-seconds.jpg)

Füge jetzt einen „mqtt out“-Node hinzu und trage das MQTT-Topic ein, das wir beim Anlegen des CPU-Geräts gespeichert haben.

![Node-RED](../../../static/img/articles/en/node-red/mqtt-out.jpg)

Verbinde den „Inject“-Node mit dem „mqtt out“-Node und klicke auf „Deploy“.

Jetzt schickt Node-RED alle 15 Sekunden den Wert „15“ per MQTT an Gladys!

Das kannst du überprüfen, indem du ein Dashboard erstellst und das gerade angelegte Gerät darauf anzeigst.

## Weiterführend

Das Ziel, Node-RED hier einzusetzen, ist, Geräte steuern zu können, die noch nicht mit Gladys kompatibel sind. Es lohnt sich also, einen Blick auf die Node-RED-Module zu werfen, um Gladys um neue Kompatibilitäten zu erweitern.

Du kannst auf deren [Website](https://flows.nodered.org/search?type=node&sort=downloads) danach suchen.

Klicke dann in Node-RED oben rechts auf das Menü und anschließend auf „Manage palette“, um neue Module zu installieren.

Die installierten Module kannst du dann in Node-RED in der linken Seitenleiste verwenden.
