---
title: "Tag-Filter & MQTT in Szenen mit Gladys Assistant 4.31"
description: Gladys Assistant 4.31 bringt neue Funktionen für Szenen sowie Korrekturen für den neuen Alarmmodus.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-31.jpg
slug: gladys-4-31-tags-mqtt-scene
---

Hallo zusammen,

Ende Oktober habe ich [Gladys Assistant 4.30](/de/blog/gladys-4-30-alarm-mode/) vorgestellt, eine Version, die Gladys eine vollständige Alarmanlage beschert hat!

Heute veröffentliche ich Gladys Assistant 4.31, eine Version mit vielen neuen Funktionen und Korrekturen, die auf eurem Feedback zum Alarmmodus basieren 🎉🎉

## Tag-Filter in Szenen

Viele von euch haben sich einen Mechanismus gewünscht, um die wachsende Zahl an Szenen in euren Instanzen zu filtern – und @Lokkye hat genau das umgesetzt!

{/* truncate */}

Du kannst deinen Szenen jetzt einen oder mehrere Tags hinzufügen:

![Tag zu einer Szene in Gladys hinzufügen](../../../static/img/articles/en/gladys-4-31/scene-set-tag.jpg)

Und anschließend deine Szenen nach Tag filtern:

![Szenen in Gladys nach Tag filtern](../../../static/img/articles/en/gladys-4-31/scene-tags-list.jpg)

So kannst du deine Szenen einfacher organisieren (nach Raum, nach Funktion).

## Neuer Auslöser: Empfang einer MQTT-Nachricht

Ab sofort kannst du eine Szene beim Empfang einer benutzerdefinierten MQTT-Nachricht auslösen!

Ziel dieses Auslösers ist es, fortgeschrittenen Nutzern einfache externe Integrationen zu ermöglichen, ohne zwingend den Umweg über Node-RED gehen zu müssen.

Wenn du zum Beispiel [Frigate](https://docs.frigate.video/integrations/mqtt/) nutzt und in Gladys eine MQTT-Nachricht empfangen möchtest, sobald eine Kamera eine Bewegung erkennt, dann geht das jetzt!

![Szene mit MQTT-Nachrichtenempfang in Gladys](../../../static/img/articles/en/gladys-4-31/scene-mqtt-trigger.jpg)

Das ist nur ein Beispiel – du kannst noch viel weiter gehen und zum Beispiel Skripte schreiben, die Gladys über diesen Auslöser aufrufen!

## Bereinigung der Sensorzustände in der Datenbank

Bei der Installation von Gladys hast du normalerweise festgelegt, wie lange die Sensorzustände aufbewahrt werden.

Heute füge ich für diesen Parameter neue Zeiträume in Gladys hinzu:

![Neue Zeiträume für die Bereinigung der Sensorzustände in Gladys](../../../static/img/articles/en/gladys-4-31/state-history.jpg)

Außerdem gibt es einen neuen Parameter „Aggregierte Zustände behalten“, mit dem du Gladys sagen kannst, wie lange die vorberechneten Zustände für die Anzeige im Dashboard aufbewahrt werden sollen:

![Bereinigung der aggregierten Sensorzustände in Gladys](../../../static/img/articles/en/gladys-4-31/state-history-agregate.jpg)

Die Idee hinter diesem Parameter: Du kannst zum Beispiel „6 Monate Rohdaten“ + „1 Jahr aggregierte Daten“ behalten, um die Rohdaten nicht zu lange zu speichern und trotzdem das letzte Jahr im Dashboard angezeigt zu bekommen.

**Hinweis:** Wenn deine Gladys-Datenbank groß ist, solltest du diese Einstellung anpassen. Die nächste Bereinigung findet am folgenden Tag um 4 Uhr morgens statt!

## Neue docker-compose.yml-Datei

Cyril hat an der Datei [docker-compose.yml](https://github.com/GladysAssistant/Gladys/blob/master/docker/docker-compose.yml) gearbeitet, die wir auf der Website zur Installation von Gladys anbieten.

Sie ist jetzt wieder komplett auf dem neuesten Stand!

## Philips Hue: hybrider Scan + manuelles Hinzufügen einer Bridge

Einige von euch hatten Probleme mit der Philips-Hue-Integration, weil ihre Philips-Hue-Bridge von Gladys nicht lokal erkannt wurde.

Cyril hat einen neuen „hybriden“ Scan entwickelt, der zusätzlich zum bisherigen „UpNp“-Scan einen „N-UpNp“-Scan durchführt.

Falls Gladys deine Philips-Hue-Bridge trotzdem nicht erkennt, kannst du sie manuell über ihre IP-Adresse hinzufügen.

## Chat: eine Kamera über ihren Namen anzeigen

Du kannst jetzt im Chat eine Kamera anzeigen lassen, indem du sie bei ihrem Namen nennst (und nicht unbedingt beim Namen des Raums).

Wenn deine Kamera zum Beispiel „Kühlschrankkamera“ heißt, kannst du Gladys bitten, sie anzuzeigen:

![Kamerabild in Gladys über den Namen abrufen](../../../static/img/articles/en/gladys-4-31/camera-by-name.jpg)

Wenn du fragst „Zeig mir die Kamera im Wohnzimmer“ und es mehrere Kameras im Wohnzimmer gibt, schickt dir Gladys jetzt alle Bilder.

## Korrekturen

- Vertauschte Beschriftungen der Türöffnungssensoren in Szenen korrigiert: Aus „offen“ wird „geschlossen“ und aus „geschlossen“ wird „offen“ (das war ein Fehler!). An deinen bestehenden Szenen musst du nichts ändern, wenn sie funktioniert haben – nur die Beschriftung hat sich geändert, nicht der Wert.
- Der Name des „Alarm“-Widgets ist jetzt optional. Bleibt er leer, wird die Titelleiste ausgeblendet.
- Im Alarm muss der Parameter `?fullscreen=force`, wenn er angegeben ist, trotz Weiterleitungen auf den Sperrbildschirm sowie nach dem Entsperren des Alarms erhalten bleiben.

Das vollständige CHANGELOG findest du [hier](https://github.com/GladysAssistant/Gladys/releases/tag/v4.31.0).

## Wie aktualisiere ich?

Zum Aktualisieren von Gladys empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Unterstütze uns

Wenn du uns unterstützen möchtest, gibt es viele Möglichkeiten:

- Beantworte Beiträge im Forum und gib dein Feedback.
- Hilf uns, die Dokumentation zu verbessern.
- Entwickle neue Funktionen/Integrationen für Gladys – wir sind zu 100 % Open Source.
- Abonniere [Gladys Plus](/de/plus/)
