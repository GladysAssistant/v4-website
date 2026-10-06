---
id: send-a-sms-action
title: Eine SMS senden
description: "Sende in einer Szene von Gladys Assistant eine SMS an dein Handy über den französischen Mobilfunkanbieter Free Mobile und füge Sensorwerte und Variablen in die Nachricht ein."
sidebar_label: SMS senden
---

Mit dieser Aktion kannst du in einer Szene eine SMS an dein Handy senden – über den französischen Mobilfunkanbieter [Free Mobile](https://mobile.free.fr).

## Einfaches Beispiel

Eine SMS zu senden ist ganz einfach: Erstelle in einer Szene die Aktion „SMS senden“.

![SMS senden](../../../../../static/img/docs/en/scenes/send-a-sms-action/send-a-sms.png)

## Eine Variable in eine SMS einfügen

Angenommen, du möchtest dir eine Warnung schicken, wenn die Temperatur in deinem Zuhause zu niedrig ist.

Dabei möchtest du den aktuellen Temperaturwert in die Nachricht einfügen, damit du weißt, wie warm es gerade ist.

Füge dazu deiner Szene die Aktion „Letzten Zustand abrufen“ hinzu und wähle den Sensor aus, den du abfragen möchtest.

![Sensorwert abrufen](../../../../../static/img/docs/en/scenes/send-a-sms-action/get-device-value.jpg)

Weiter hinten in der Szene kannst du dann die Aktion „SMS senden“ hinzufügen. Tippe in der Nachricht `{{ ` und wähle die zuvor definierte Variable aus.

![Variable einfügen](../../../../../static/img/docs/en/scenes/send-a-sms-action/inject-variable-demo.png)

Wenn die Szene ausgeführt wird, solltest du den Wert in deiner Nachricht erhalten 🥳
