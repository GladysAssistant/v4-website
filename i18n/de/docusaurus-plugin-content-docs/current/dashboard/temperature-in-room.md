---
id: temperature-in-room
title: Die durchschnittliche Raumtemperatur auf dem Dashboard anzeigen
description: "Zeige die durchschnittliche Temperatur eines Raums auf deinem Dashboard in Gladys Assistant an – berechnet aus allen Temperatursensoren im Raum."
sidebar_label: Raumtemperatur
---

In Gladys Assistant kannst du die durchschnittliche Temperatur eines Raums auf deinem Dashboard anzeigen.

Dieses Widget ruft die Temperatur aller Temperatursensoren im Raum ab und zeigt den Durchschnitt auf dem Dashboard an.

## Voraussetzungen

Du musst vorher mindestens einen Temperatursensor konfiguriert haben.

Das kann ein Sensor mit beliebigem Protokoll sein (Zigbee, Matter, MQTT, ganz egal), und dieser Sensor muss einem Raum zugewiesen sein.

:::note
Manche Sensoren melden eine „Gerätetemperatur“ – ein Computer meldet zum Beispiel seine CPU-Temperatur. Gladys berücksichtigt diese Werte in diesem Widget nicht als Temperaturwerte.
:::

## Konfiguration

Öffne das Dashboard und klicke auf „Bearbeiten“.

Wähle das Widget „Raumtemperatur“ und klicke auf die Schaltfläche +.

![Temperatur-Widget in Gladys hinzufügen](../../../../../static/img/docs/en/dashboard/temperature-in-room/add-widget-temperature-in-room.png)

Wähle anschließend den Raum aus, der angezeigt werden soll.

![Anzuzeigenden Raum auswählen](../../../../../static/img/docs/en/dashboard/temperature-in-room/select-room.png)

Du kannst eigene Schwellenwerte festlegen, bei denen sich die Farbe des Widgets je nach Temperatur ändert.

Klicke auf „Speichern“.

![Das Widget „Raumtemperatur“](../../../../../static/img/docs/en/dashboard/temperature-in-room/temperature-in-room.png)

Wenn sich keine Sensoren im Raum befinden oder diese in der letzten Stunde keine Werte gesendet haben, siehst du Folgendes:

![Keine Daten](../../../../../static/img/docs/en/dashboard/temperature-in-room/no-temperature.png)
