---
id: matter-bridge
title: Stelle deine Gladys-Geräte mit Matter für Apple Home, Google Home und Alexa bereit
description: "Mach Gladys Assistant zur Matter-Bridge: Kopple sie mit Apple Home, Google Home, Amazon Alexa, SmartThings oder Home Assistant und steuere dort deine Zigbee-, Z-Wave- oder WLAN-Geräte, 100 % lokal."
sidebar_label: Matter-Bridge
---

Die Integration **Matter-Bridge** macht Gladys zu einer Matter-Bridge. Nach dem Koppeln erscheinen deine Gladys-Geräte in der Matter-App deiner Wahl (Apple Home, Google Home, Amazon Alexa, SmartThings, Home Assistant...), **unabhängig von ihrem Protokoll**: Zigbee, Z-Wave, WLAN, MQTT... Die Matter-Verbindung zwischen Gladys und deinem **Matter-Controller** (Steuerzentrale, Nest, Echo...) bleibt in deinem lokalen Netzwerk, und die Bridge braucht kein Gladys-Plus-Abo.

Drei Dinge solltest du trotzdem wissen:

- Die Steuerung über die App ist nicht immer lokal: Unterwegs, und bei manchen Ökosystemen (zum Beispiel Google Home oder Alexa) kann dein Befehl über die Cloud des App-Anbieters laufen, bevor er deinen Controller erreicht, der dann lokal mit Gladys spricht.
- Deine Matter-App braucht eventuell ein eigenes Konto: eine Apple-ID für Apple Home, ein Google-Konto für Google Home, ein Amazon-Konto für Alexa, ein Samsung-Konto für SmartThings.
- Die Bridge macht ein Gerät nicht lokal: Steuert Gladys ein Gerät über einen Cloud-Dienst (zum Beispiel über eine Cloud-Integration), hängt dieses Gerät weiterhin von dieser Cloud ab, wenn du es über eine Matter-App steuerst.

:::tip[Matter, Matterbridge oder Matter-Bridge?]
Drei Integrationen haben ähnliche Namen, arbeiten aber in unterschiedliche Richtungen:

- **Matter-Bridge** (diese Seite): Gladys-Geräte → deine Matter-Apps (Apple Home, Google Home, Alexa...).
- [Matter](/de/docs/integrations/matter/): Matter-Geräte → Gladys. Gladys ist der Matter-Controller.
- [Matterbridge](/de/docs/integrations/matterbridge/): Geräte, die das Open-Source-Projekt Matterbridge und seine Plugins bereitstellen → Gladys.

Matter-Bridge und Matterbridge können nicht gleichzeitig aktiviert sein: Beide brauchen den Port 5540.

:::

## Voraussetzungen

- **IPv6 in deinem lokalen Netzwerk.** Matter basiert auf IPv6. Die Seite der Integration zeigt dir, ob auf dem Rechner, auf dem Gladys läuft, eine IPv6-Schnittstelle gefunden wurde.
- **Gladys muss das Host-Netzwerk nutzen.** Die Standardinstallation von Gladys (`network_mode: host` in Docker) tut das bereits. Die Bridge lauscht auf dem UDP-Port **5540**, dem Standard-Matter-Port und dem einzigen, den Amazon Alexa erkennt. Sie läuft parallel zur Integration [Matter](/de/docs/integrations/matter/), die einen anderen Port nutzt, aber **nicht parallel zur Integration [Matterbridge](/de/docs/integrations/matterbridge/)**, die ebenfalls den Port 5540 braucht.
- **Ein Administratorkonto.** Die Integration ist nur für Gladys-Administratoren sichtbar.
- **Ein Matter-Controller im selben Netzwerk.** Die App allein reicht nicht immer: Die meisten Ökosysteme brauchen ein Gerät, das als Matter-Controller dient.
  - Apple Home: Ein iPhone oder iPad (iOS 18 oder neuer) kann die Bridge zu Hause ohne Steuerzentrale hinzufügen und steuern. Eine Steuerzentrale (Apple TV oder HomePod) wird empfohlen: Sie ist nötig, um deine Geräte von unterwegs zu steuern und Automationen auszuführen.
  - Google Home: ein Matter-fähiges Google-Gerät (Nest Hub, Nest-Lautsprecher, Google TV Streamer...).
  - Amazon Alexa: ein Matter-fähiger Echo.
  - SmartThings: ein SmartThings-Hub oder ein Samsung-Gerät, das als Hub dient.
  - Home Assistant: sein Matter-Server.

Die Kopplung läuft über dein Netzwerk: Anders als manche Matter-Geräte braucht die Bridge kein Bluetooth.

## Bridge aktivieren

Öffne in Gladys `Integrationen` und klicke auf `Matter-Bridge` (Kategorie „Sprachassistenten & KI“).

Prüfe, dass die Seite `Auf diesem Rechner ist eine IPv6-Schnittstelle verfügbar ✅` anzeigt, und klicke dann auf `Matter-Bridge aktivieren`.

Ist die Integration [Matterbridge](/de/docs/integrations/matterbridge/) aktiviert, ist diese Schaltfläche deaktiviert und die Seite erklärt warum: Deaktiviere zuerst die Matterbridge-Integration.

Die Bridge startet nach wenigen Sekunden. Kann sie nicht starten, wird der Fehler auf der Seite unter `Die Matter-Bridge konnte nicht gestartet werden:` angezeigt.

Danach startet die Bridge bei jedem Neustart von Gladys automatisch.

## Bereitgestellte Geräte auswählen

Wähle im Abschnitt `Bereitgestellte Geräte`:

- `Alle kompatiblen Geräte bereitstellen` (Standard): Alle kompatiblen Geräte werden bereitgestellt, auch die, die du später hinzufügst.
- `Nur die ausgewählten Geräte bereitstellen`: Wähle die Geräte in der Liste aus. Jedes Gerät wird mit den Matter-Funktionen angezeigt, die es haben wird (Licht, Steckdose, Temperatur...).

Klicke auf `Speichern`. Die Änderungen werden sofort übernommen und deine Kopplungen bleiben erhalten: Du musst die Bridge nicht neu koppeln.

Danach hält Gladys die Bridge selbst auf dem neuesten Stand:

- Ein **neues kompatibles Gerät** wird zur Bridge hinzugefügt (im Modus „alle“).
- Ein **umbenanntes Gerät** wird in deinen Matter-Apps umbenannt und behält dort seinen Raum und seine Automationen.
- Ein **gelöschtes Gerät** (oder ein aus der Auswahl entferntes) verschwindet von der Bridge.

:::note
Matter begrenzt Namen auf 32 Zeichen: Längere Gerätenamen werden in deinen Matter-Apps abgeschnitten.
:::

## Gladys mit deiner Matter-App koppeln

Solange die Bridge nicht gekoppelt ist, zeigt der Abschnitt `Kopplung` einen **QR-Code** und einen 11-stelligen **Kopplungscode** (`1234-567-8901`).

Füge in deiner Matter-App ein neues Matter-Gerät hinzu und scanne den QR-Code oder gib den Kopplungscode ein:

- **Apple Home**: Tippe auf `+` > `Gerät hinzufügen` und scanne den QR-Code (oder tippe auf `Weitere Optionen...`, um den Code einzugeben).
- **Google Home**: Tippe auf `+` > `Gerät` > `Matter-kompatibles Gerät` und scanne den QR-Code.
- **Amazon Alexa**: Tippe auf `+` > `Gerät` > `Matter`, folge den Schritten und scanne den QR-Code.
- **SmartThings** und **Home Assistant**: Nutze die Option „Matter-Gerät hinzufügen“ der App.

:::warning[Nicht zertifiziertes Zubehör]
Gladys ist kein zertifiziertes Matter-Produkt. Beim Koppeln warnt dich deine App, dass das Zubehör **nicht zertifiziert** ist: Bestätige, dass du es trotzdem hinzufügen möchtest (zum Beispiel `Trotzdem hinzufügen` in Apple Home).
:::

Die App findet dann die „Gladys Bridge“ und importiert die bereitgestellten Geräte. Eventuell fragt sie dich, jedem Gerät einen Raum zuzuweisen.

Jetzt kannst du deine Gladys-Geräte über deine Matter-App, in deinen Automationen und per Sprache mit Siri, Google Assistant oder Alexa steuern 🗣️

Die Synchronisierung funktioniert in beide Richtungen:

- Ändert ein Gerät in Gladys seinen Zustand (ein Sensorwert, ein Licht, das über das Dashboard oder eine Szene eingeschaltet wird...), wird der neue Zustand an deine Matter-Apps gesendet.
- Steuerst du ein Gerät über eine Matter-App, sendet Gladys den Befehl an das Gerät, genau wie über das Gladys-Dashboard.

## Gladys zu einem weiteren Ökosystem hinzufügen

Sobald die Bridge gekoppelt ist, wird der QR-Code ausgeblendet und die Seite listet die Ökosysteme auf, mit denen Gladys gekoppelt ist (`Gladys ist gekoppelt mit:`).

Mit Matter kannst du dieselbe Bridge mit mehreren Apps koppeln (Multi-Admin). So fügst du Gladys zu einem zweiten Ökosystem hinzu:

1. Öffne den Kopplungsmodus der Bridge in einer bereits gekoppelten App. Zum Beispiel in Apple Home: Öffne die Einstellungen der Bridge und tippe auf `Kopplungsmodus aktivieren`. Die App gibt dir einen neuen Kopplungscode.
2. Füge in der anderen App ein Matter-Gerät hinzu und gib diesen neuen Code ein (oder scanne ihn).

## Unterstützte Geräte

| Gladys-Gerät | Erscheint in Matter als |
| --- | --- |
| 💡 Licht (Ein/Aus, Helligkeit, Farbtemperatur, Farbe) | Licht: Ein/Aus, dimmbar, Farbtemperatur oder Farbe, je nach Funktionen des Lichts |
| 🔌 Schalter / Steckdose (Ein/Aus) | Steckdose. Ein mehrkanaliger Schalter ergibt eine Steckdose pro Kanal |
| 🪟 Rollladen, Vorhang (Position und/oder Öffnen / Schließen / Stopp) | Beschattung (Rollladen oder Vorhang) |
| 🚪 Öffnungssensor | Kontaktsensor |
| 🚶 Bewegungs- oder Präsenzsensor | Präsenzsensor |
| 💧 Wassermelder | Wasserleckmelder |
| 🔥 Rauch- und/oder CO-Melder | Rauch-/CO-Melder |
| 🌡️ Temperatursensor | Temperatursensor (°F und K werden in °C umgerechnet) |
| 💦 Luftfeuchtigkeitssensor | Luftfeuchtigkeitssensor |
| ☀️ Helligkeitssensor | Helligkeitssensor (Lux) |
| 🧭 Luftdrucksensor | Luftdrucksensor |
| 🌫️ CO2-, PM2.5- und PM10-Sensoren | Luftqualitätssensor, mit einer Gesamtluftqualität aus PM2.5 (oder CO2, wenn kein PM2.5 vorhanden ist) |
| 🔋 Batterie | Batteriestand des Geräts, mit einer Warnung bei schwacher Batterie unter 20 % |

Ein Gerät mit mehreren Funktionen (zum Beispiel ein Temperatur-, Luftfeuchtigkeits- und Batteriesensor) wird als ein einziges Gerät der Bridge bereitgestellt. Die meisten Apps zeigen es als ein Zubehör an, manche zeigen eine Kachel pro Funktion (Temperatur, Luftfeuchtigkeit, Batterie...).

Ein paar Einschränkungen:

- Bei Lichtern, Steckdosen und Rollläden werden nur steuerbare Funktionen bereitgestellt: Ein nur lesbares Licht oder eine nur lesbare Steckdose wird nicht bereitgestellt.
- Ein Gerät, das nur eine Batterie hat, wird nicht bereitgestellt.
- Rollläden werden nur in der Höhe gesteuert: Lamellenneigung wird nicht unterstützt.
- Thermostate und Klimageräte, Schlösser, Ventilatoren, Taster, Sirenen, Energiezähler, Saugroboter und Mediaplayer werden noch nicht unterstützt.

Wir fügen regelmäßig neue Gerätetypen hinzu, basierend auf dem Feedback der Community. Schlag deine gern im [Gladys-Forum](https://community.gladysassistant.com/) vor!

## Bridge deaktivieren oder zurücksetzen

- `Matter-Bridge deaktivieren` nimmt die Bridge offline, **behält aber ihre Kopplungen**: Wenn du sie wieder aktivierst, finden deine Matter-Apps dieselbe Bridge und dieselben Geräte.
- `Bridge zurücksetzen` ist für den Fall gedacht, dass sich die Bridge nicht mehr koppeln lässt. Alle Kopplungen von Gladys werden gelöscht: Die Bridge antwortet den Ökosystemen, mit denen sie gekoppelt war, nicht mehr. Ein alter Eintrag „Gladys Bridge“ kann in deinen Matter-Apps bleiben: **Entferne ihn dort** und füge die Bridge dann mit ihrem **neuen Kopplungscode** erneut hinzu. Deine Auswahl der bereitgestellten Geräte bleibt erhalten.

## Fehlerbehebung

- **Keine IPv6-Schnittstelle gefunden**: Aktiviere IPv6 auf deinem Router und auf dem Rechner, auf dem Gladys läuft, und starte Gladys neu.
- **Die App findet die Bridge nicht**: Prüfe, dass dein Smartphone und Gladys im selben Netzwerk sind (nicht in einem Gast-WLAN) und dass Gladys das Host-Netzwerk nutzt.
- **`Die Matter-Bridge wurde nicht gestartet: Der Port 5540, der Standard-Matter-Port, wird bereits von einem anderen Programm auf diesem Rechner verwendet`**: Auf dem Rechner läuft eine andere Matter-Bridge (ein außerhalb von Gladys installiertes Matterbridge, ein anderer Matter-Server...). Beende sie oder lege sie auf einen anderen Port, und deaktiviere und aktiviere dann die Matter-Bridge erneut.
- **`Die Matter-Bridge wurde nicht gestartet: Die Matterbridge-Integration ist aktiviert`**: Deaktiviere die Integration [Matterbridge](/de/docs/integrations/matterbridge/), und deaktiviere und aktiviere dann die Matter-Bridge erneut.
- **Ein Gerät fehlt**: Prüfe, ob es zu den oben unterstützten Geräten gehört und im Auswahlmodus ausgewählt ist, und klicke dann auf `Speichern`.

🛠️ Brauchst du Hilfe? Komm in das [Gladys-Community-Forum](https://community.gladysassistant.com/), wir helfen dir gern!
