---
title: "Gladys 4.80: Matter 1.5, Netatmo, Tuya & ein noch leistungsfähigerer KI-Agent 🚀"
description: "Gladys 4.80 bringt Unterstützung für Matter 1.5 dank eines großen Matter.js-Upgrades, Korrekturen für Netatmo und Tuya sowie einen leistungsfähigeren KI-Agenten mit einem neuen Sensor-Tool."
authors: pierregilles
image: /img/presentation/gladys-4-80-matter-netatmo-tuya-ai-en.jpg
slug: gladys-4-80-matter-netatmo-tuya-ai
---

Hallo zusammen!

In letzter Zeit tut sich einiges 😀 Diese Version 4.80 bringt viele Stabilitätsverbesserungen, Korrekturen für Matter, Netatmo und Tuya sowie mehrere Neuerungen rund um die KI.

{/* truncate */}

## 🤖 KI

Der KI-Agent wird immer besser, mit zwei neuen Funktionen:

- ➕ Neues Tool `sensor.set-state`, mit dem der Agent auf Anfrage den Zustand bestimmter Sensoren direkt ändern kann. Du kannst die KI zum Beispiel ein Kamerabild auslesen lassen, auf dem ein Zähler zu sehen ist, und den abgelesenen Wert in einem virtuellen Gerät speichern. Oder du liest automatisch ein Nummernschild aus und speicherst die Nummer in einem virtuellen Gerät!
- 🐞 Neuer Button, um den Debug-Kontext der KI als JSON herunterzuladen – so lassen sich Probleme leichter diagnostizieren und mit der Community teilen.

Die von der KI erstellten Wochenberichte erscheinen jetzt in den Hintergrundaufgaben (**Einstellungen → Aufgaben**). So kannst du ihre Ausführung verfolgen und Fehler leicht erkennen. Außerdem wurde vor ihrer Erstellung eine zufällige Verzögerung eingebaut, damit die Server nicht alle gleichzeitig überlastet werden.

## 🏠 Matter

Diese Version verbessert die Matter-Kompatibilität weiter:

- 🌡️ Übermittlung der lokalen Temperatur bei kompatiblen Geräten.
- 🔄 Robusterer Verbindungsprozess.
- 📝 Ausführlichere Logs für einfacheres Debugging.
- 🌀 Mehrere Korrekturen für Matter-Ventilatoren.
- 🎛️ Bug behoben, bei dem sich die eindeutige Kennung eines Geräts bei einer Aktualisierung änderte.
- ⚡ Der Anfangszustand der Gerätefunktionen wird beim Start ausgelesen.
- ❗ Fehler bei der Registrierung eines Geräts werden jetzt direkt in der Oberfläche angezeigt.

Außerdem wurde Matter.js auf Version [0.17.3](https://github.com/matter-js/matter.js/blob/main/CHANGELOG.md#0170-2026-05-20) aktualisiert – ein großer Schritt nach vorn, der unter anderem Folgendes bringt:

- Unterstützung der Spezifikation **Matter 1.5 / 1.5.1** für eine bessere Kompatibilität mit den neuesten Geräten.
- **20–50 % weniger Speicherverbrauch**, damit Gladys noch flüssiger läuft.

## 📡 Integrationen

### Tuya

Die Tuya-Integration wird immer ausgereifter: eine neue gemeinsame Mapping-Schicht für eine bessere Geräteverwaltung im lokalen und im Cloud-Modus sowie ein Assistent, der automatisch ein GitHub-Ticket erstellt, wenn ein Gerät nur teilweise oder gar nicht unterstützt wird.

### Netatmo

Zwei wichtige Verbesserungen: Die automatische Erneuerung des OAuth-Tokens funktioniert wieder, und die automatische Neuverbindung bei Authentifizierungsfehlern ist robuster, auch bei Business-API-Aufrufen.

### Zigbee2MQTT

Zigbee-Geräte zeigen jetzt ihre IEEE-Adresse sowie einen direkten Link an, um das Gerät in Zigbee2MQTT zu öffnen. Das erleichtert Diagnose und Konfiguration. Denk daran, die URL deiner Zigbee2mqtt-Oberfläche in den Einstellungen einzutragen, um diese Funktion zu nutzen 😉

## 🐛 Korrekturen

- Bug bei Szenen mit dem Auslöser **nächster Sonnenaufgang** behoben.
- Problem behoben, durch das ein Gerät nicht gespeichert werden konnte, wenn `energy_parent_id` ungültig war.

## ❤️ Danke an die Contributors

Ein großes Dankeschön an alle, die an diesem Release mitgewirkt haben: @cicoub13, @Terdious und @Will_71. Und danke an die gesamte Gladys-Community für euer Feedback, eure Tests und eure Beiträge, die das Projekt so schnell voranbringen! 🚀

Wie immer aktualisiert sich Gladys innerhalb von 24 Stunden automatisch, wenn du Watchtower nutzt, oder du machst es mit einem Klick in den Einstellungen. Hier geht's zu den [vollständigen Release Notes](https://github.com/GladysAssistant/Gladys/releases/tag/v4.80.0).
