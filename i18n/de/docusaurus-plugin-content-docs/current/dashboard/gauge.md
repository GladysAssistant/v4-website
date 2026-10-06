---
id: gauge
title: Eine Messanzeige auf dem Dashboard anzeigen
description: "Füge deinem Dashboard in Gladys Assistant ein Messanzeige-Widget hinzu, um den aktuellen Wert eines Sensors zwischen seinem Minimum und Maximum darzustellen."
sidebar_label: Messanzeige
---

Du kannst auf dem Dashboard eine Messanzeige (Gauge) anzeigen.

![Messanzeige](../../../../../static/img/docs/en/dashboard/gauge/gauge.png)

Diese Messanzeige zeigt den aktuellen Wert des Sensors zwischen dem Minimum und dem Maximum an, die für den Sensor festgelegt sind.

:::note
Wenn du den Sensor selbst in der MQTT-Integration angelegt hast, kannst du Minimum und Maximum selbst anpassen.

Andernfalls ist die jeweilige Integration dafür zuständig, Minimum und Maximum korrekt festzulegen.

Sind Minimum und Maximum nicht richtig definiert, komm gerne ins Forum, um darüber zu sprechen!
:::

## Voraussetzungen

Du musst mindestens einen Sensor konfiguriert haben, der Daten an Gladys sendet.

## Konfiguration

Öffne das Dashboard und klicke auf „Bearbeiten“.

Füge ein Widget „Messanzeige“ hinzu:

![Messanzeige-Widget in Gladys hinzufügen](../../../../../static/img/docs/en/dashboard/gauge/add-widget.png)

Wähle dann den Sensor aus, der angezeigt werden soll:

![Anzuzeigenden Sensor auswählen](../../../../../static/img/docs/en/dashboard/gauge/configure-widget.png)

Klicke auf „Speichern“ – und schon bist du fertig!
