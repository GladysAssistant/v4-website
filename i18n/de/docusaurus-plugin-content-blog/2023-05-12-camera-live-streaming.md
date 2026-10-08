---
title: Kamera-Livestreaming in Gladys Assistant 4.23
description: Behalte dein Zuhause von überall auf der Welt im Blick – Ende-zu-Ende-verschlüsselt!
authors: pierregilles
image: /img/presentation/camera-streaming-gladys-4-23-en.png
slug: camera-live-streaming-gladys-assistant-4-23
---

Hallo zusammen!

Ich freue mich, dir heute Gladys Assistant 4.23 vorzustellen – ein neues Release mit jeder Menge neuer Funktionen!

## Kamera-Livestreaming

Die wichtigste Neuerung dieser Version: Du kannst deine Kameras jetzt live im Dashboard ansehen, entweder lokal oder aus der Ferne über Gladys Plus.

![Kamera-Streaming](../../../static/img/articles/en/gladys-4-23/camera-streaming.jpg)

Der Videostream wird Ende-zu-Ende verschlüsselt, um deine Privatsphäre zu schützen – wie immer 😉

{/* truncate */}

**Hinweis:** Diese Funktion braucht ziemlich viele Ressourcen (einen Videostream abspielen, komprimieren und verschlüsseln, und das alles live – das kostet Leistung!). Wenn der Livestream nicht startet oder sehr lange zum Starten braucht, ist dein Gerät dafür möglicherweise nicht leistungsstark genug. 32-Bit-Raspberry-Pis reichen dafür zum Beispiel nicht aus.

## Auswahl des Zigbee-Dongle-Modells

In der Zigbee-Integration kannst du jetzt auswählen, welches Zigbee-Dongle-Modell du verwendest. Die Konfigurationsdatei von Zigbee2mqtt wird dann automatisch angepasst!

![Zigbee-Modell](../../../static/img/articles/en/gladys-4-23/zigbee-dongle.jpg)

Danke an AlexTrovato für die Entwicklung 👏

## Berechnungen in Szenen

In Szenen kannst du jetzt an 2 Stellen mathematische Berechnungen durchführen:

In der Bedingung „Nur fortfahren, wenn“ kannst du mehrere Variablen miteinander vergleichen und dabei eine Berechnung durchführen:

![Nur fortfahren, wenn – mit Berechnung](../../../static/img/articles/en/gladys-4-23/continue-only-if.jpg)

In der Aktion „Ein Gerät steuern“ kannst du eine Variable und eine Berechnung verwenden, um den Wert zu ermitteln, der an das Gerät gesendet wird.

![Ein Gerät steuern – mit Berechnung](../../../static/img/articles/en/gladys-4-23/set-device-value.jpg)

Sehr praktisch für dynamische Szenen, die sich an den Ablauf der Szene anpassen!

Danke @bertrandda für die Entwicklung 👏

## NextCloud-Talk-Integration

Neue Integration! Damit kannst du über NextCloud Talk mit Gladys chatten, genau wie mit der Telegram-Integration.

![NextCloud Talk](../../../static/img/articles/en/gladys-4-23/nextcloud-talk.jpg)

Danke @bertrandda für die Entwicklung 👏

## Diverse Verbesserungen und Fehlerbehebungen

- Verbesserte Kontoerstellung: reaktionsschneller, einfacher und mit weniger Angaben.
- Die HomeKit-Integration unterstützt jetzt Tür-/Fensterkontakte
- Das Dashboard zeigt die Sensornamen übersichtlicher an ([#1749](https://github.com/GladysAssistant/Gladys/pull/1749))
- Fehler in der Aktion „HTTP-Anfrage“ behoben, durch den ein leerer POST-Body nicht möglich war ([#1772](https://github.com/GladysAssistant/Gladys/pull/1772))

## Wie aktualisiere ich?

Um Gladys zu aktualisieren, empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Danke an die Mitwirkenden

Danke an alle, die zu diesem Release beigetragen und ihr Feedback gegeben haben.

Wenn du über dieses Release sprechen möchtest, bist du im [Forum](https://community.gladysassistant.com/) herzlich willkommen!

## Unterstütze uns

Wenn du uns unterstützen möchtest, gibt es viele Möglichkeiten:

- Beantworte Beiträge im Forum und gib dein Feedback.
- Hilf uns, die Dokumentation zu verbessern.
- Entwickle neue Funktionen/Integrationen für Gladys – wir sind zu 100 % Open Source.
- Abonniere [Gladys Plus](/de/plus).
