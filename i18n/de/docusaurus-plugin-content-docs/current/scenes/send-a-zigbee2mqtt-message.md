---
id: send-a-zigbee2mqtt-message-action
title: Eine Zigbee2Mqtt-Nachricht senden
description: "Sende in einer Szene von Gladys Assistant eine Zigbee2MQTT-Nachricht, um Zigbee-Geräte direkt zu steuern – etwa eine Sirene auszulösen – inklusive Einfügen von Variablen."
sidebar_label: Zigbee2Mqtt-Nachricht senden
---

In Szenen ist es manchmal nützlich, einen Befehl an zigbee2mqtt-Geräte zu senden, die nicht von Gladys Assistant verwaltet werden.

## Eine Zigbee2Mqtt-Nachricht in einer Szene senden

Eine Zigbee2Mqtt-Nachricht zu senden ist ganz einfach: Erstelle in einer Szene die Aktion „Zigbee2Mqtt-Nachricht senden“.

![Zigbee2Mqtt-Nachricht senden](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message.png)

## Konkretes Beispiel: Eine Sirene [Woox R7051](https://www.zigbee2mqtt.io/devices/R7051.html) aus einer Szene in Gladys Assistant auslösen

### In Gladys eine Szene erstellen

Erstelle in Gladys eine neue Szene und füge ihr die Aktion „Zigbee2Mqtt-Nachricht senden“ hinzu.

Gib das Topic deines Geräts an.

![Topic des Geräts](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-topic.png)

Gib den Befehl an, mit dem dein Gerät gesteuert werden soll. Informationen zu deinem Gerät findest du auf der Website von [Zigbee2mqtt](https://www.zigbee2mqtt.io/devices/R7051.html#warning-composite).

![Nachricht an das Gerät](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/device-message.png)

Speichere die Szene und starte sie.

## Eine Variable in eine Nachricht einfügen

Angenommen, du möchtest den Wert für die Dauer in die Nachricht einfügen, um den aktuellen Wert zu verwenden.

Füge dazu deiner Szene die Aktion „Letzten Zustand abrufen“ hinzu und wähle das Gerät aus, das du abfragen möchtest.

![Gerätewert abrufen](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/get-device-value.png)

Weiter hinten in der Szene kannst du dann die Aktion „Zigbee2Mqtt-Nachricht senden“ hinzufügen. Tippe in der Nachricht `{{` und wähle die zuvor definierte Variable aus.

![Nachricht mit eingefügter Variable senden](../../../../../static/img/docs/en/scenes/send-a-zigbee2mqtt-message-action/send-a-zigbee2mqtt-message-with-injected-variable.png)

Wenn die Szene ausgeführt wird, solltest du den Wert in deiner Nachricht erhalten 🥳
