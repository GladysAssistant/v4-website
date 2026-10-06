---
id: humidity-in-room
title: Die durchschnittliche Luftfeuchtigkeit eines Raums auf dem Dashboard anzeigen
description: "Zeige die durchschnittliche Luftfeuchtigkeit eines Raums auf deinem Dashboard in Gladys Assistant an – berechnet aus allen Feuchtigkeitssensoren, mit eigenen Farbschwellen."
sidebar_label: Luftfeuchtigkeit im Raum
---

In Gladys Assistant kannst du die durchschnittliche Luftfeuchtigkeit eines Raums auf deinem Dashboard anzeigen.

Dieses Widget ruft die Luftfeuchtigkeit aller Feuchtigkeitssensoren im Raum ab und zeigt den Durchschnitt auf dem Dashboard an.

## Voraussetzungen

Du musst vorher mindestens einen Feuchtigkeitssensor konfiguriert haben.

Das kann ein Sensor mit beliebigem Protokoll sein (Zigbee, Matter, MQTT, ganz egal), und du musst diesen Sensor einem Raum zugewiesen haben.

## Konfiguration

Öffne das Dashboard und klicke auf „Bearbeiten“.

Wähle das Widget „Luftfeuchtigkeit im Raum“ und klicke auf die Schaltfläche +.

![Feuchtigkeits-Widget in Gladys hinzufügen](../../../../../static/img/docs/en/dashboard/humidity-in-room/add-widget.png)

Wähle anschließend den Raum aus, der angezeigt werden soll.

![Anzuzeigenden Raum auswählen](../../../../../static/img/docs/en/dashboard/humidity-in-room/configure-widget.png)

Du kannst eigene Schwellenwerte festlegen, bei denen sich die Farbe des Widgets je nach Luftfeuchtigkeit ändert.

Klicke auf „Speichern“.

![Das Widget „Luftfeuchtigkeit im Raum“](../../../../../static/img/docs/en/dashboard/humidity-in-room/humidity-in-room.png)

Wenn sich keine Sensoren im Raum befinden oder diese in der letzten Stunde keine Werte gesendet haben, siehst du Folgendes:

![Keine Daten](../../../../../static/img/docs/en/dashboard/humidity-in-room/no-values.png)
