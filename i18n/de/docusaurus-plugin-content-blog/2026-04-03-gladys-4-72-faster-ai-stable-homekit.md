---
title: "Gladys 4.72: Schnellere KI, grundsolides HomeKit & jede Menge Fixes"
description: "Gladys 4.72 verkleinert Kamerabilder für eine schnellere und günstigere KI, behebt die hohe CPU-Last von HomeKit, führt Tags für Integrationen ein und bringt viele weitere Fixes."
authors: pierregilles
image: /img/presentation/gladys-4-72-faster-ai-stable-homekit-en.jpg
slug: gladys-4-72-faster-ai-stable-homekit
---

Hallo zusammen!

Gladys Assistant 4.72.0 ist verfügbar 🎉, mit einer schnelleren KI, einem stabileren HomeKit und einer langen Liste an Fixes.

{/* truncate */}

## ✨ Neue Funktionen

- **Zigbee: Doppelte An/Aus-Unterstützung für den IKEA-BILRESA-Taster.** Der IKEA-BILRESA-Taster wird jetzt über Zigbee2mqtt vollständig unterstützt.
- **KI: geringere Latenz und Kosten.** Kamerabilder, die an die KI geschickt werden, werden jetzt vor dem Senden verkleinert. Das senkt sowohl die Latenz als auch die Kosten der API-Aufrufe.
- **Integrationsliste: Tags hinzugefügt.** Integrationen sind jetzt mit Tags versehen (lokal, Cloud, Gladys Plus), damit ihre Funktionsweise klarer ist.
- **ZwaveJS UI: raus aus der Alpha.** Die Integration ZwaveJS UI ist stabil genug, das Alpha-Warnbanner wurde entfernt.
- **MQTT: umbenannt in „MQTT – Virtuelle Geräte“**, damit die Integration für Nutzer, die von Home Assistant kommen, leichter verständlich ist.
- **Node-RED: Warnung vor dem Löschen des Containers.** Eine Meldung weist jetzt darauf hin, dass beim Löschen des Node-RED-Containers auch alle zugehörigen Daten gelöscht werden.

## 🐛 Bugfixes

- **HomeKit: hohe CPU-Last durch mDNS behoben.** Ein Bug verursachte eine ungewöhnlich hohe CPU-Last. Behoben wird das durch mehrere mDNS-Optionen zur Auswahl.
- **Nuki: Verarbeitung von Home-Assistant-Discovery-Nachrichten korrigiert.** Die Integration hat auf zu viele Nachrichten gehört, was zu Performance-Problemen führte, wenn viele Home-Assistant-kompatible Geräte denselben Broker nutzten.
- **CalDAV: Konfigurationsfehler werden jetzt** direkt in der Oberfläche angezeigt.
- **Backup-Wiederherstellung: robuster.** Die Sicherheit der Wiederherstellungsfunktion für Gladys-Plus-Backups wurde verbessert, insbesondere durch die Verwendung von `execFile` für OpenSSL-Befehle.
- **Anlegen eines Benutzerkontos:** Der Text über dem Feld „E-Mail“ ist jetzt klarer.
- **Zigbee2mqtt: Bug beim Energie-Tracking behoben**, durch den Geräte mit Energiefunktionen immer im Tab „Erkennung“ angezeigt wurden.
- **Energie-Monitoring: Bug beim Löschen eines Zählers** in der Zigbee2mqtt-Integration behoben.
- **Matter: Farbverarbeitung korrigiert**, indem für `optionsMask` in der Matter-Farbsteuerung eine numerische Bitmap verwendet wird.

---

Danke an alle Mitwirkenden an diesem Release: @bertrandda, @cicoub13 und @David-Digitis.

Zum Aktualisieren kannst du 24 Stunden warten oder unter **Einstellungen → System → Aktualisieren** gehen. Euch allen schöne Ostertage! 🏠
