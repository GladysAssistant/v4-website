---
id: mqtt-api
title: MQTT-API
description: "Referenz der MQTT-API von Gladys Assistant: alle Topics, um Gerätezustände (Temperatur, Text, binär) zu senden und dein Smart Home über MQTT zu steuern."
sidebar_label: MQTT-API
---

Wenn du in deiner Gladys-Installation einen MQTT-Broker konfiguriert hast, steht dir die MQTT-API von Gladys zur Verfügung.

Hier sind alle verfügbaren MQTT-Topics, jeweils mit einer Beispielnachricht:

### Einen dezimalen Gerätezustand senden

Angenommen, du hast einen Temperatursensor, der Daten an Gladys sendet. Seine Temperaturwerte musst du dann an folgendes Topic senden:

```
Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/state
Body: 22.2
```

### Einen Text-Gerätezustand senden

Wenn du möchtest, kannst du Text an Gladys senden, um ihn auf dem Dashboard anzuzeigen!

![Text über MQTT in Gladys Assistant](../../../../../static/img/docs/en/architecture/mqtt-text.png)

Dazu legst du in der MQTT-Integration ein Gerät vom Typ „Text“ an und veröffentlichst dann eine Nachricht auf diesem Topic:

```
Topic: gladys/master/device/:device_external_id/feature/:device_feature_external_id/text
Body: Hello Gladys!
```

### Einen Zustand an ein Gerät senden

Angenommen, du hast eine MQTT-Lampe und möchtest sie über Gladys steuern.

Die Lampe muss dieses Topic abonnieren:

```
gladys/device/:device_external_id/feature/:device_feature_external_id/state
```

Dort empfängt sie Werte wie:

```
1
```

Das bedeutet „Die Lampe soll eingeschaltet werden“.

Oder

```
0
```

Das bedeutet „Die Lampe soll ausgeschaltet werden“.

### Eine Szene über MQTT starten

Du kannst eine Szene auch über MQTT starten, indem du eine Nachricht auf folgendem Topic veröffentlichst:

```
gladys/master/scene/SCENE_SELECTOR/start
```

Ersetze dabei `SCENE_SELECTOR` durch den Selektor der Szene, den du in der URL beim Bearbeiten der Szene findest.

Für die Szene `http://192.168.1.10/dashboard/scene/cinema` sendest du zum Beispiel eine Nachricht an das Topic:

```
gladys/master/scene/cinema/start
```
