---
title: Gladys Assistant 4.8 ist da, mit Kalender-Auslösern und -Bedingungen in Szenen!
description: Ab sofort kannst du Kalenderereignisse als Auslöser und Bedingungen in Szenen verwenden.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-8-cover.jpg
slug: gladys-assistant-4-8-with-calendar-in-scenes
---

Hallo zusammen!

Heute freue ich mich, eine neue Version von Gladys zu veröffentlichen: Gladys Assistant v4.8 🥳

Diese Version dreht sich vor allem um die Kalender-Integration, bringt aber auch viele UX-Verbesserungen in Gladys.

{/* truncate */}

## Was ist neu in Gladys Assistant 4.8?

### Szenen-Auslöser, wenn ein Kalenderereignis bevorsteht

Das ist eine große Funktion, die Kalender in Gladys endlich richtig nützlich macht.

Ab sofort kannst du eine Szene auslösen, wenn ein bestimmtes Ereignis im Kalender bevorsteht.

Du möchtest daran erinnert werden, wann du zur Arbeit musst? Oder zur richtigen Zeit sanft geweckt werden?

Dafür brauchst du mindestens einen Kalender, der mit Gladys verbunden ist (wir unterstützen iCloud-Kalender, Google Kalender, Synology-Kalender oder jeden CalDAV-Kalender über unsere [CalDAV-Integration](/de/docs/integrations/caldav/)).

Erstelle eine neue Szene und lege einen Auslöser „Kalenderereignis steht bevor“ an:

![Kalenderereignis steht bevor](../../../static/img/docs/en/scenes/calendar-event-is-coming/calendar-event-is-coming.jpg)

Du kannst nach dem Namen des Ereignisses filtern (enthält „Fitness“, beginnt mit „Meeting“, beliebiger Name und mehr!)

Anschließend kannst du in der Szene die Informationen des Ereignisses nutzen, das die Szene ausgelöst hat – zum Beispiel in einer Aktion „Nachricht senden“:

![Nachricht zu einem bevorstehenden Kalenderereignis](../../../static/img/docs/en/scenes/calendar-event-is-coming/msg-calendar-is-coming-en.jpg)

### Szenen-Bedingung, wenn ein Kalenderereignis läuft

Stell dir jetzt vor, du möchtest einer Szene eine Bedingung hinzufügen, damit sie nur läuft, wenn du bei der Arbeit, in einem Meeting oder im Urlaub bist.

Dafür kannst du in Szenen die Bedingung „Bedingung auf Kalenderereignisse“ verwenden.

![Bedingung: Kalenderereignis läuft](../../../static/img/docs/en/scenes/calendar-event-is-running/calendar-event-is-running.jpg)

Wie beim Auslöser kannst du nach dem Namen filtern.

Und natürlich kannst du das Ereignis in den folgenden Aktionen derselben Szene verwenden.

### Kamerabild um 180° drehen

Dank des [Pull Requests von VonOx auf GitHub](https://github.com/GladysAssistant/Gladys/pull/1297) kannst du ein Kamerabild in Gladys jetzt drehen:

![Kamera um 180° drehen](../../../static/img/articles/en/gladys-4-8/camera-rotation-en.jpg)

### UX-Verbesserungen bei MQTT

Eine kleine Verbesserung, die viel dazu beiträgt, die Funktionsweise von MQTT zu verstehen: Die MQTT-Topics zum Veröffentlichen und Abonnieren werden für Geräte, die keine Sensoren sind, jetzt direkt in der Oberfläche angezeigt.

Bei MQTT-Sensoren sieht das so aus:

![MQTT-Sensor](../../../static/img/articles/en/gladys-4-8/sensor-en.jpg)

Bei allen Geräten, die keine Sensoren sind:

![MQTT-Gerät, das kein Sensor ist](../../../static/img/articles/en/gladys-4-8/non-sensor-en.jpg)

### Zigbee2mqtt: CO-Sensoren & Alarmfunktion

Dank der Arbeit von Alexandre Trovato auf GitHub ([hier](https://github.com/GladysAssistant/Gladys/pull/1417) und [hier](https://github.com/GladysAssistant/Gladys/pull/1420)) kannst du jetzt einen CO-Sensor über Zigbee2mqtt hinzufügen und die Alarmfunktion in Gladys nutzen.

## Wie aktualisiere ich?

Um Gladys zu aktualisieren, empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Danke an die Mitwirkenden

Danke an alle, die zu diesem Release beigetragen und ihr Feedback im Forum gegeben haben!

Wenn du über dieses Release sprechen möchtest, bist du im [Forum](https://community.gladysassistant.com/) herzlich willkommen!

## Unterstütze uns

Wenn du uns unterstützen möchtest, gibt es viele Möglichkeiten:

- Beantworte Beiträge im Forum und gib dein Feedback.
- Hilf uns, die Dokumentation zu verbessern.
- Entwickle neue Funktionen/Integrationen für Gladys – wir sind zu 100 % Open Source.
- Mach eine [einmalige Spende](https://www.buymeacoffee.com/gladysassistant).
- Schließ ein [monatliches Abo für Gladys Plus](/de/plus) ab.
