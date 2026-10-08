---
id: devices
title: Geräte auf dem Dashboard anzeigen
description: "Steuere deine Geräte und sieh dir Sensorwerte direkt auf dem Dashboard von Gladys Assistant an – mit dem Widget „Geräte“."
sidebar_label: Geräte
---

In Gladys Assistant kannst du deine Geräte direkt über das Dashboard steuern und die Werte deiner Sensoren in der Oberfläche anzeigen.

## Voraussetzungen

Du musst mindestens ein paar Geräte zu Gladys hinzugefügt haben (ohne Geräte ist es deutlich weniger spannend 😄).

## Konfiguration

Öffne das Gladys-Dashboard und klicke auf „Bearbeiten“.

Wähle das Widget „Geräte“:

![Widget „Geräte“ hinzufügen](../../../../../static/img/docs/en/dashboard/devices/select-widget.png)

Wähle die Geräte aus, die du anzeigen möchtest, und gib deinem Widget einen Namen (optional).

![Anzuzeigende Geräte auswählen](../../../../../static/img/docs/en/dashboard/devices/choose-device-and-name.png)

Klicke auf „Speichern“.

## Verwendung

Jetzt siehst du deine Geräte auf dem Dashboard, kannst bei Sensoren ihre letzten Werte ablesen oder die Geräte direkt steuern.

![Widget „Geräte“](../../../../../static/img/docs/en/dashboard/devices/devices-with-value.png)

## Wenn kein Wert angezeigt wird

Zeigen deine Geräte „kein aktueller Wert“ an, bedeutet das, dass das Gerät in letzter Zeit keine Werte gesendet hat.

![Geräte ohne aktuellen Wert](../../../../../static/img/docs/en/dashboard/devices/no-recent-value.png)

Standardmäßig liegt der Schwellenwert bei 48 Stunden ohne Werte. Du kannst ihn aber unter `Einstellungen` -> `System` -> `Ablaufzeit eines Zustands` ändern:

![Ablaufzeit eines Zustands](../../../../../static/img/docs/en/dashboard/devices/delay-before-expiring.png)
