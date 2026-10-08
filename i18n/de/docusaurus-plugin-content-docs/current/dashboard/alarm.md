---
id: alarm
title: Wie richtest du mit Gladys deine eigene Alarmanlage ein?
description: "Baue mit Gladys Assistant eine komplette Alarmanlage für dein Zuhause: Scharf- und Unscharfschalten, Teil- und Panikmodus, Aktivierungsverzögerung, Alarmcode und Strategien per Szene."
sidebar_label: Alarm
---

In Gladys kannst du eine richtige Alarmanlage einrichten.

## Dashboard konfigurieren

Auf dem Dashboard kannst du ein „Alarm“-Widget hinzufügen:

![Alarm auf dem Dashboard](../../../../../static/img/docs/en/dashboard/alarm/alarm-dashboard.jpg)

Der Alarm in Gladys hat 4 Modi:

- **Scharf**: Das Haus ist scharf geschaltet. Praktisch, wenn du nicht zu Hause bist.
- **Unscharf**: Das Haus ist unscharf geschaltet, der Alarm ist nicht aktiv.
- **Teilweise scharf**: Dieser Modus eignet sich für einen „Nachtmodus“ oder „Mittagsschlafmodus“. Du bist zu Hause und möchtest nur den Außenbereich des Hauses überwachen, nicht aber den Innenbereich, damit du dich weiterhin frei bewegen kannst.
- **Panikmodus**: Ein Eindringling ist im Haus und du möchtest den Alarm auslösen – und vielleicht automatisch eine Nachricht an eine Vertrauensperson senden?

Jetzt, da du die verschiedenen Modi kennst, ist es Zeit, Szenen einzurichten, um deine Alarmstrategie umzusetzen.

## Aktivierungsverzögerung und Alarmcode festlegen

In den Einstellungen des Hauses („Einstellungen“ -> „Häuser“) gibt es 2 Parameter festzulegen:

![Alarmeinstellungen des Hauses](../../../../../static/img/docs/en/dashboard/alarm/alarm-house-settings.jpg)

- **Alarmcode**: Wenn du den „Tablet-Modus“ nutzt, zeigt Gladys auf diesen Tablets ein Ziffernfeld an, sobald der Alarm scharf geschaltet ist. Der hier festgelegte Code dient zum Deaktivieren des Alarms. Auf den Tablet-Modus gehen wir später in diesem Tutorial ein.
- **Verzögerung vor dem Scharfschalten**: Wenn du eine Verzögerung möchtest, bevor der Alarm scharf geschaltet wird (zwischen 5 Sekunden und 1 Minute), kannst du sie hier einstellen. So hast du Zeit, das Haus zu verlassen, bevor der Alarm aktiv wird.

## Szenen einrichten

Jetzt müssen wir Gladys mitteilen, was im jeweiligen Alarmmodus passieren soll.

Die erste Szene, die du erstellst, wird ausgelöst, wenn der Alarm scharf geschaltet wird.

Du kannst dir zum Beispiel eine Telegram-Nachricht senden, wenn der Alarm scharf geschaltet wird, ein akustisches Signal im Haus abspielen oder die Lichter blinken lassen – alles ist möglich!

![Alarm wird scharf geschaltet …](../../../../../static/img/docs/en/dashboard/alarm/alarm-arming.jpg)

Als Nächstes das wichtigste Szenario: Was soll bei einem Einbruch passieren?

Du kannst eine Szene mit mehreren Auslösern erstellen:

- „Wenn im Wohnzimmer eine Bewegung erkannt wird“
- „Wenn in der Küche eine Bewegung erkannt wird“
- „Wenn die Haustür geöffnet wird“

![Alarmszene bei Bewegung](../../../../../static/img/docs/en/dashboard/alarm/alarm-scene-motion.jpg)

Füge dann die Bedingung „UND der Alarm ist scharf geschaltet“ hinzu:

![Bedingung der Alarmszene](../../../../../static/img/docs/en/dashboard/alarm/alarm-condition.jpg)

Ist diese Bedingung erfüllt, läuft die Szene weiter und du kannst dir eine Telegram-Nachricht senden, dir ein Kamerabild per Telegram schicken, einen akustischen Alarm im Haus auslösen usw.

Wenn jemand in dein Zuhause einbricht, versucht er vielleicht, Gladys über deine Wandtablets zu entsperren.

Er kann 3 Codes ausprobieren, bevor das Ziffernfeld für 5 Minuten gesperrt wird. Nach 3 falschen Codes wird dieser Szenen-Auslöser aktiviert:

![Falscher Alarmcode](../../../../../static/img/docs/en/dashboard/alarm/wrong-alarm-code.jpg)

Du kannst für diesen Auslöser eine Szene erstellen, die dich per Nachricht warnt.

## Tablet-Modus

Wenn du zu Hause ein Tablet an der Wand hast, kannst du es über die Schaltfläche „Tablet-Modus“ bei Gladys anmelden:

![Tablet-Modus](../../../../../static/img/docs/en/dashboard/alarm/alarm-tablet-mode-button.jpg)

Wenn du auf diese Schaltfläche klickst, erscheint ein Formular, in dem du das Haus angibst, in dem sich das Tablet befindet.

Gladys braucht diese Information, um zu wissen, wann das Tablet „gesperrt“ werden soll:

![Konfiguration des Tablet-Modus](../../../../../static/img/docs/en/dashboard/alarm/alarm-tablet-mode-config.jpg)

Wenn dein Tablet im Vollbildmodus laufen soll, kannst du der URL den Parameter `?fullscreen=force` hinzufügen.

Dieser „erzwungene Vollbildmodus“ hat nichts mit dem Tablet-Modus zu tun; beide sind völlig unabhängig voneinander.

Wird der Alarm scharf geschaltet, ermittelt Gladys automatisch alle Tablets im Haus und sperrt sie.

Diese Tablets zeigen dann ein Ziffernfeld an, mit dem du den Alarm deaktivieren kannst:

![Ziffernfeld im Tablet-Modus](../../../../../static/img/docs/en/dashboard/alarm/alarm-tablet-mode-locked.jpg)

Dieses Ziffernfeld ist eine Alternative zu physischen Tastaturen. Du kannst aber auch ein echtes Zigbee-Keypad verwenden und eine Szene erstellen, die den Alarm unscharf schaltet, wenn dieses Keypad benutzt wird.

Du kannst auch ganz auf diese Ziffernfelder verzichten und den Alarm über das „Alarm“-Widget auf deinem Handy unscharf schalten.
