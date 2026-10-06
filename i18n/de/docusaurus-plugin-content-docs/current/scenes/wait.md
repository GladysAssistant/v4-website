---
id: wait-action
title: Warten
description: "Nutze die Aktion „Warten“ in einer Szene von Gladys Assistant, um für eine feste oder berechnete Dauer zu pausieren – basierend auf Variablen und mathematischen Funktionen."
sidebar_label: Warten
---

Mit dieser Aktion kannst du für eine feste oder berechnete Dauer warten.

## Einfache feste Wartezeit

Du kannst eine feste Wartezeit angeben, die sich nicht ändert:

![Warten](../../../../../static/img/docs/en/scenes/wait-action/wait.png)

## Berechnete Wartezeit

Du kannst auch eine dynamische Wartezeit festlegen, die sich anhand von Variablen oder mathematischen Berechnungen ändert.

Hast du zum Beispiel weiter oben in deiner Szene einen Sensorwert abgerufen (mit der Aktion „Letzten Zustand abrufen“), kannst du diese Variable als Grundlage für die Berechnung deiner Wartezeit verwenden:

![Warten](../../../../../static/img/docs/en/scenes/wait-action/wait-computed.png)

### Verfügbare mathematische Funktionen

Siehe [Mathematische Funktionen](/de/docs/scenes/math-functions).
