---
id: get-last-device-state-action
title: Letzten Zustand abrufen
description: "Rufe in einer Szene von Gladys Assistant den letzten Zustand eines Geräts ab und speichere ihn in einer Variable, um ihn in Bedingungen und nachfolgenden Aktionen zu nutzen."
sidebar_label: Letzten Zustand abrufen
---

Mit dieser Aktion kannst du den letzten Zustand eines von Gladys verwalteten Geräts abrufen und in einer Variable speichern.

Schauen wir uns ein Beispiel an.

## Eine Bedingung auf die Raumtemperatur hinzufügen

Angenommen, du möchtest eine Szene erstellen, die die Temperatur eines Raums abruft und das Szenario nur fortsetzt, wenn die Temperatur unter 20 °C liegt.

Im ersten Schritt fügst du deiner Szene die Aktion „Letzten Zustand abrufen“ hinzu und wählst den gewünschten Sensor aus.

![Letzten Zustand abrufen](../../../../../static/img/docs/en/scenes/get-last-device-state-action/get-last-device-state.jpg)

Füge dann im nächsten Aktionsblock die Aktion „Nur fortfahren, wenn“ hinzu und wähle die zuvor abgerufene Variable aus.

Mit der Bedingung „Temperatursensor Küche < 20 °C“ sieht das so aus:

![Szene mit „Nur fortfahren, wenn“](../../../../../static/img/docs/en/scenes/get-last-device-state-action/continue-only-if.jpg)
