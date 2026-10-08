---
id: chart
title: Ein Diagramm auf dem Dashboard anzeigen
description: "Füge deinem Dashboard in Gladys Assistant ein Diagramm-Widget hinzu, um Sensordaten zu visualisieren: Linien-, Balken-, Flächen- oder Binärdiagramme mit eigener zeitlicher Gruppierung."
sidebar_label: Diagramm
---

## Voraussetzungen

Du musst mindestens einen Sensor konfiguriert haben, der Daten an Gladys sendet.

## Konfiguration

Öffne das Gladys-Dashboard und klicke auf die Schaltfläche „Bearbeiten“.

Füge ein Widget „Diagramm“ hinzu:

![Dashboard bearbeiten](../../../../../static/img/docs/en/dashboard/chart/add-chart.png)

Wähle die Geräte aus, die du anzeigen möchtest, und konfiguriere dann den Rest des Widgets:

- **Name**: Wird oben im Widget auf dem Dashboard angezeigt
- **Diagrammtyp**: In Gladys kannst du verschiedene Diagrammtypen anzeigen (Linie, Balken, Fläche, gerade Linie, binär)
- **Achsen anzeigen**: Es gibt zwei Darstellungsarten – eine eher designorientierte Ansicht ohne Achsen und eine mit Achsen
- **Veränderung anzeigen**: Ist diese Option aktiviert, zeigt das Diagramm die relative Veränderung zwischen dem ersten und dem letzten Wert im gewählten Zeitraum an

![Diagramm konfigurieren](../../../../../static/img/docs/en/dashboard/chart/configure-chart.png)

Wenn du die Daten nach Zeitintervallen gruppieren möchtest, kannst du diese Option in den erweiterten Einstellungen ändern:

![Nach Zeitintervall gruppieren](../../../../../static/img/docs/en/dashboard/chart/group-by.png)

## Beispiele für Diagramme

Angenommen, du möchtest den Energieverbrauch eines deiner Geräte anzeigen – dafür eignet sich das Balkendiagramm besonders gut:

![Balkendarstellung](../../../../../static/img/docs/en/dashboard/chart/bar.jpg)

Du kannst diese Daten auch als Flächendiagramm darstellen, ohne Achsen für eine designorientierte Ansicht:

![Flächendarstellung ohne Achsen](../../../../../static/img/docs/en/dashboard/chart/area-without-axes.jpg)

Oder mit Achsen für eine bessere Lesbarkeit:

![Flächendarstellung mit Achsen](../../../../../static/img/docs/en/dashboard/chart/area-with-axes.jpg)

Die Möglichkeiten sind endlos!
