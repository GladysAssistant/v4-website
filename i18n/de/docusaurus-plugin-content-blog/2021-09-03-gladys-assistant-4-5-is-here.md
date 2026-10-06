---
title: Gladys Assistant 4.5 ist da – mit mehreren Dashboards!
description: Ein großes Update, und wir hoffen sehr, dass es dir gefällt!
authors: pierregilles
image: /img/presentation/gladys-4-5-en-cover.jpg
slug: gladys-assistant-4-5-is-here
---

Hallo zusammen,

heute veröffentlichen wir Gladys Assistant v4.5, eine Version, die jede Menge neue Funktionen in Gladys Assistant bringt! Ich zeige sie dir!

## Was ist neu in Gladys Assistant 4.5?

### Mehrere Dashboards

Ab sofort kannst du in Gladys Assistant mehrere Dashboards haben.

![Mehrere Dashboards in Gladys Assistant](../../../static/img/articles/en/gladys-4-5/multi-dashboard.jpg)

Du kannst mehrere Dashboards erstellen, und jedes hat seine eigene URL – so kannst du deine Lieblings-Dashboards als Lesezeichen in deinem Browser speichern.

Du kannst auswählen, welches Dashboard angezeigt werden soll:

![Dashboard wechseln in Gladys Assistant](../../../static/img/articles/en/gladys-4-5/switch-dashboard.jpg)

Und schon wechselst du zu einem anderen Dashboard, ganz einfach!

![Kamera-Dashboard in Gladys Assistant](../../../static/img/articles/en/gladys-4-5/camera-dashboard.jpg)

{/* truncate */}

### Eine Szene deaktivieren

Das war ein häufig gewünschtes Feature: Ab sofort kannst du in Gladys Assistant eine Szene deaktivieren! Endlich!

Ob du gerade an einer Szene herumprobierst, in den Urlaub fährst oder einfach eine nervige Szene abschalten willst: Jetzt geht das!

![Szene deaktivieren in Gladys Assistant](../../../static/img/articles/en/gladys-4-5/disable-scene.jpg)

### Neue Aktion „Gerätewert setzen“ in Szenen

Ab sofort kannst du in einer Szene jedes Gerät steuern:

- Du kannst die Farbe einer Lampe steuern
- Die Farbtemperatur einer Lampe steuern
- Jeden mehrstufigen Wert steuern

![Gerät in einer Szene steuern in Gladys Assistant](../../../static/img/articles/en/gladys-4-5/set-device-value.jpg)

Das ist sehr mächtig, und ich hoffe, es gefällt dir!

### Verbesserte Dashboard-Box „Nutzer zu Hause“

Eine kleine Änderung: Du kannst jetzt auswählen, welche Nutzer in der Dashboard-Box „Nutzer zu Hause“ angezeigt werden sollen.

![Nutzer in der Box „Nutzer zu Hause“ auswählen in Gladys Assistant](../../../static/img/articles/en/gladys-4-5/user-presence.jpg)

### Viele Performance-Verbesserungen

Da es diesen Sommer im Forum sehr ruhig war, habe ich mir Zeit für einige längerfristige Aufgaben genommen.

Ich habe preact-cli (das Tool, mit dem wir das Frontend von Gladys bauen) auf die neue Version 3.x migriert. Das war nicht einfach, hat sich aber definitiv gelohnt, denn das JavaScript-Bundle ist dadurch deutlich kleiner geworden.

Außerdem habe ich einige schwere Bibliotheken entfernt, die im Frontend nicht unbedingt nötig waren, damit es leichter und schneller wird!

Ich hoffe, du genießt das neue Tempo :)

### Eine erste Alpha der Google-Home-Integration in Gladys Plus

Ich arbeite an der Integration von [Gladys Plus](/de/plus) mit Google Home. Das Ziel ist, deine Geräte steuern zu können:

- In der Google-Home-App
- Per Sprache mit einem Google-Home-Gerät
- Mit dem Google Assistant auf deinem Smartphone

[Hier eine kurze Demo der Integration auf Twitter](https://twitter.com/pierregillesl/status/1405786308329365504).

Wenn du Lust hast, das zu testen, schick mir eine Nachricht im [Forum](https://community.gladysassistant.com/)!

### Neue kompatible Zigbee2mqtt-Geräte

Einige neue Zigbee2mqtt-Geräte wurden hinzugefügt:

- TuYa TS0601 Luftqualitätssensor und CO2-Funktion [`#1247`](https://github.com/GladysAssistant/Gladys/pull/1247)
- Philips Hue 929002241201 [`#1259`](https://github.com/GladysAssistant/Gladys/pull/1259)
- Lichtfarben-Funktion [`#1203`](https://github.com/GladysAssistant/Gladys/pull/1203)

### Bluetooth-Bug behoben

Es gab einen wiederkehrenden Bug, bei dem Gladys sich nicht mit dem Bluetooth-Treiber verbinden konnte, weil der Treiber nicht „bereit“ war.

Das ist in Gladys Assistant v4.5 jetzt behoben.

Mehr dazu in diesem Commit: Bluetooth check state before scan + stop presence scanner [`#1194`](https://github.com/GladysAssistant/Gladys/pull/1194)

## Wie aktualisiere ich?

Zum Aktualisieren von Gladys empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Danke an alle Contributors

Danke an alle, die zu diesem Release beigetragen und ihr Feedback im Forum gegeben haben!

Wenn du über dieses Release sprechen möchtest, bist du herzlich im [Forum](https://community.gladysassistant.com/) willkommen!
