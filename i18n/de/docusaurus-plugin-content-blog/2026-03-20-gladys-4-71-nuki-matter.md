---
title: "Gladys 4.71: Robusteres Nuki & große Matter-Verbesserungen"
description: "Gladys 4.71 bringt eine robustere Nuki-Integration, mehrere Verbesserungen bei Matter und eine verständlichere Bluetooth-Anwesenheitserkennung."
authors: pierregilles
image: /img/presentation/gladys-4-71-nuki-matter-en.jpg
slug: gladys-4-71-nuki-matter
---

Hallo zusammen,

Diese neue Version bringt deutliche Verbesserungen bei **Matter** und **Nuki** sowie mehrere Fehlerbehebungen.

{/* truncate */}

## 🔐 Nuki v1.0.1: eine robustere Integration

Die Nuki-Integration wurde mit mehreren wichtigen Korrekturen aktualisiert:

- Beim Start prüft Gladys jetzt, ob der Dienst korrekt konfiguriert ist, bevor er gestartet wird – so werden Fehler in den Logs vermieden.
- MQTT-Abonnements beschränken sich jetzt auf registrierte Nuki-Geräte, um unnötiges Mithören zu vermeiden.
- Ein Scan (HTTP oder MQTT) ist nicht mehr möglich, wenn der Dienst nicht konfiguriert ist: Der Ladekreisel stoppt und eine klare Meldung wird angezeigt.
- Das im Konfigurations-Tab eingegebene API-Token wird jetzt geprüft: Bei einem Fehler erscheint eine Meldung und das Token wird automatisch gelöscht.

Danke [@ProtZ](https://community.gladysassistant.com/) für diese gründliche Arbeit!

## ⚡ Matter: mehrere Verbesserungen

Matter entwickelt sich in Gladys rasant weiter:

- **Verständlicherer Kopplungsprozess:** Die Anleitung zum Koppeln ist jetzt leichter lesbar und für neue Nutzer zugänglicher.
- **Neue Cluster Boolean & Switch:** zur Unterstützung von IKEA BILRESA und dem Aqara Door and Window Sensor P2. Ich habe diese Kompatibilität über Matterbridge getestet und entwickelt – Feedback zu IKEA-/Aqara-Geräten ist sehr willkommen 🙂
- **Überwachung von HEPA-Filtern:** Matter-kompatible Luftreiniger können ihren HEPA-Filterstatus jetzt in Gladys anzeigen. Danke **@Nagromdark**!

Ich investiere weiterhin stark in Matter und bereite gerade ein großes Update der Bibliothek `matter-js` vor, für noch mehr Stabilität und Kompatibilität.

**Matterbridge:** Fehler behoben, durch den die aktuelle Version nicht korrekt gespeichert wurde, was wiederholte, unnötige Container-Updates auslösen konnte.

## 📡 Bluetooth-Anwesenheit: verständlicher für neue Nutzer

Eine Meldung weist jetzt klar darauf hin, dass diese Integration nur mit Bluetooth-**Beacons** funktioniert, nicht mit Smartphones oder Smartwatches.

## 🛠️ Fehlende Symbole für Sensoren zur Energieerzeugung

Bei Funktionen vom Typ `ENERGY_PRODUCTION_SENSOR` fehlten in manchen Ansichten die Symbole. Das ist jetzt behoben, danke **@Terdious**!

---

Das Update erfolgt automatisch. Um es zu erzwingen, geh zu **Einstellungen → System**. Schönes Wochenende! 🏠
