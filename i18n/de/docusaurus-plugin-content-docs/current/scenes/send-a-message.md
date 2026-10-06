---
id: send-a-message-action
title: Eine Nachricht senden
description: "Sende einem Benutzer von Gladys Assistant in einer Szene eine Nachricht über Telegram oder den Web-Chat und füge Sensorwerte und Variablen in den Text ein."
sidebar_label: Nachricht senden
---

Mit dieser Aktion kannst du einem Gladys-Benutzer in einer Szene eine Nachricht senden.

Gladys nutzt dann Telegram bzw. den Gladys-Web-Chat, um den Benutzer zu erreichen.

## Einfaches Beispiel

Eine Nachricht zu senden ist ganz einfach: Erstelle in einer Szene die Aktion „Nachricht senden“ und wähle den Benutzer aus, der die Nachricht erhalten soll.

![Nachricht senden](../../../../../static/img/docs/en/scenes/send-a-message-action/send-a-message.png)

## Eine Variable in eine Nachricht einfügen

Angenommen, du möchtest dir eine Warnung schicken, wenn die Temperatur in deinem Zuhause zu niedrig ist.

Dabei möchtest du den aktuellen Temperaturwert in die Nachricht einfügen, damit du weißt, wie warm es gerade ist.

Füge dazu deiner Szene die Aktion „Letzten Zustand abrufen“ hinzu und wähle den Sensor aus, den du abfragen möchtest.

![Sensorwert abrufen](../../../../../static/img/docs/en/scenes/send-a-message-action/get-device-value.jpg)

Weiter hinten in der Szene kannst du dann die Aktion „Nachricht senden“ hinzufügen. Tippe in der Nachricht `{{` und wähle die zuvor definierte Variable aus.

![Variable einfügen](../../../../../static/img/docs/en/scenes/send-a-message-action/inject-variable-demo.png)

Wenn die Szene ausgeführt wird, solltest du den Wert in deiner Nachricht erhalten 🥳
