---
id: zigbee2mqtt
title: "Zigbee2MQTT mit Gladys einrichten: lokaler Zigbee-Hub ohne Cloud"
description: "Richte Zigbee2MQTT mit Gladys Assistant und einem USB-Zigbee-Dongle auf einem Raspberry Pi oder NAS ein. Geräte lokal koppeln und hinzufügen, ohne Cloud und ohne Drittanbieter-Bridge."
sidebar_label: Zigbee2Mqtt
keywords:
  - zigbee2mqtt
  - zigbee2mqtt einrichten
  - zigbee2mqtt gerät hinzufügen
  - gerät zu zigbee2mqtt hinzufügen
  - raspberry pi zigbee
  - zigbee usb stick raspberry pi
  - lokaler zigbee hub
  - zigbee geräte verbinden
  - zigbee2mqtt port
  - error while starting zigbee-herdsman
  - zigbee2mqtt mac channel access failure
  - zigbee2mqtt failed to connect to the adapter
---

import JsonLd from '@site/src/components/seo/JsonLd';

Mit Zigbee2MQTT betreibst du deinen eigenen **lokalen Zigbee-Hub** mit Gladys: Du steckst einen USB-Zigbee-Dongle in den Rechner, auf dem Gladys läuft, und steuerst jedes Zigbee-Gerät direkt von zu Hause aus, ohne Cloud-Konto und ohne Hersteller-Bridge. Diese Anleitung zeigt dir, wie du alles einrichtest, deinen Dongle koppelst und Geräte hinzufügst.

:::tip[Du kommst von Home Assistant?]
Gladys installiert und verwaltet Zigbee2MQTT und den zugehörigen MQTT-Broker für dich: Siehe [Zigbee2MQTT ohne Home Assistant](/de/zigbee2mqtt-without-home-assistant/). Du suchst noch einen Dongle? Lies unseren [Kaufratgeber für Zigbee-Dongles](/de/best-zigbee-dongle/).
:::

Kurz gesagt verbinden wir deine Zigbee-Geräte direkt mit Gladys, ganz ohne Drittanbieter-Bridges (nur mit einem USB-Zigbee-Dongle und dem Projekt [Zigbee2Mqtt](https://www.zigbee2mqtt.io/)).

Die Liste der kompatiblen Geräte findest du [hier](https://www.zigbee2mqtt.io/supported-devices/).

Bevor du loslegst, stelle sicher, dass du einen Zigbee-Koordinator hast: entweder einen USB-Dongle, der im Rechner mit Gladys steckt, oder einen Netzwerk-Koordinator (siehe [Einen Netzwerk-Koordinator verwenden](#use-a-network-coordinator) weiter unten).

Ein einfacher und günstiger USB-Dongle, den wir mit Gladys getestet haben, ist der [Sonoff Zigbee 3.0 USB Dongle](https://amzn.to/3JZwzJy).

Die vollständige Liste der kompatiblen Adapter findest du in der [Liste der von Zigbee2mqtt unterstützten Adapter](https://www.zigbee2mqtt.io/guide/adapters/).

## Den Port des USB-Dongles konfigurieren

Stecke deinen Zigbee-USB-Dongle in den Rechner, auf dem Gladys läuft (deinen Raspberry Pi, dein NAS).

![Sonoff USB Zigbee 3.0](../../../../../static/img/docs/en/configuration/zigbee2mqtt/zigbee-raspberry-pi-usb-sonoff.jpg)

Gehe in Gladys zu `Integrationen / Zigbee2Mqtt`.

Klicke dann im Menü auf `Einstellungen`. Gladys durchsucht automatisch die verschiedenen USB-Ports und schlägt sie dir in einer Auswahlliste vor.

Wähle den USB-Port aus, über den Gladys mit Zigbee kommunizieren soll.

![Einstellungen des USB-Dongles](../../../../../static/img/docs/en/configuration/zigbee2mqtt/z2m_parameter_dongle_usb_en.png)

**13. Mai 2023:** Du kannst jetzt das Modell deines Zigbee-Dongles auswählen:

![Modell des USB-Dongles](../../../../../static/img/docs/en/configuration/zigbee2mqtt/zigbee-dongle.jpg)

So weiß Zigbee2mqtt, welche Konfiguration es verwenden soll.

:::warning
Wenn du einen Dongle auf Basis von [EmberZNet](https://www.zigbee2mqtt.io/guide/adapters/emberznet.html) besitzt (zum Beispiel den Sonoff Zigbee 3.0 ZBDongle-E), solltest du die Firmware des Dongles [aktualisieren](https://www.zigbee2mqtt.io/guide/adapters/emberznet.html#firmware-flashing). Andernfalls wähle in der Liste die Option `(legacy ezsp)`.
:::

:::warning
Wenn du Gladys auf einer externen USB-Festplatte betreibst, kann es zu Stromproblemen kommen, da dein Pi Schwierigkeiten haben kann, sowohl die Festplatte als auch den Zigbee-USB-Stick ausreichend zu versorgen.

Wir empfehlen dir einen USB-Hub mit eigener Stromversorgung.

Mehr dazu liest du auf der Website von Zigbee2MQTT: [Zigbee2MQTT fails to start](https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html)
:::

## Einen Netzwerk-Koordinator verwenden {/* #use-a-network-coordinator */}

Seit Gladys 5 muss der Koordinator nicht mehr im Rechner mit Gladys stecken. Ein Netzwerk-Koordinator (SMLIGHT SLZB-06/SLZB-07, ZigStar…) verbindet sich per Ethernet oder WLAN, sodass du ihn mitten in deinem Zuhause platzieren kannst, weit weg von deinem Server und von Störquellen. Gladys installiert und verwaltet Zigbee2MQTT weiterhin für dich.

In `Integrationen / Zigbee2Mqtt`, in der Einrichtung:

1. Wähle unter **Wie ist der Zigbee-Koordinator verbunden?** die Option **Netzwerk-Koordinator (Ethernet/WLAN)**.
2. Gib die Adresse und den TCP-Port des Koordinators ein, zum Beispiel `tcp://192.168.1.20:6638` (das Präfix `tcp://` ist optional). Gib dem Koordinator in deinem Router eine feste IP-Adresse.
3. Wähle den Adaptertyp aus, der in der Dokumentation deines Koordinators angegeben ist: Der SLZB-06 verwendet `zstack`, der SLZB-06M und der SLZB-07 verwenden `ember`.

Fahre dann mit dem nächsten Schritt fort, um Zigbee2MQTT zu aktivieren.

## Zigbee2Mqtt aktivieren

Sobald dein Dongle konfiguriert ist, muss Gladys zwei Container installieren (MQTT und Zigbee2Mqtt), um den Dongle zu nutzen und mit all deinen Geräten zu kommunizieren. Keine Sorge, das alles ist automatisiert.

Gehe in den Bereich `Einrichtung` und klicke auf den Button **Zigbee2mqtt aktivieren**. Nach kurzer Zeit (die Wartezeit hängt von deinem Raspberry-Pi-Modell und deiner Bandbreite ab) solltest du sehen, dass alle Elemente gestartet sind und die Verbindungen zwischen ihnen grün angezeigt werden.

![Status der Zigbee2Mqtt-Dienste](../../../../../static/img/docs/en/configuration/zigbee2mqtt/z2m_services_state_en.png)

## Kopplung von Geräten erlauben

Damit sich Geräte mit deinem Zigbee-Netzwerk koppeln können, musst du in der Zigbee-Konfiguration das Beitreten (`joining in`) erlauben.

Klicke auf das Menü `Erkennen` und dann auf den Button `Beitritt erlauben`.

![Kopplung erlauben](../../../../../static/img/docs/en/configuration/zigbee2mqtt/z2m_authorize_association_en.png)

:warning: Sobald deine Geräte gekoppelt sind, solltest du hierher zurückkehren und die Kopplung aus Sicherheitsgründen wieder sperren.

## Geräte hinzufügen

Wie du dein Gerät dem Netzwerk beitreten lässt, steht in seiner Anleitung. Meistens genügt ein langer Druck auf die physische Taste.

Die bereits mit deinem Zigbee-Netzwerk gekoppelten Geräte erscheinen automatisch mit ihren erkannten Funktionen in der Liste. Du kannst sie umbenennen und über die Auswahlliste einem Raum zuordnen.

![Ein Gerät hinzufügen](../../../../../static/img/docs/en/configuration/zigbee2mqtt/z2m_add_device_en.png)

## Die Geräte bearbeiten

Bei Bedarf kannst du im Menü `Geräte` die Konfiguration deiner Geräte anpassen oder ergänzen.

Klicke bei einem Gerät auf den Button **Bearbeiten**. Dann kannst du seinen Namen, den Raum, zu dem es gehört, und den Namen jeder Funktion ändern.

![Ein Gerät bearbeiten](../../../../../static/img/docs/en/configuration/zigbee2mqtt/z2m_edit_device_en.png)

## Verwendung

Du kannst diese Zigbee-Geräte jetzt über das [Dashboard](../dashboard/devices.md) oder automatisch in den [Szenen](../scenes/intro.md) verwenden. Je nach Funktion des jeweiligen Geräts hast du Zugriff auf Messwerte, Zustände oder Aktionen.

## Häufige Zigbee2MQTT-Fehler beheben

Die meisten Zigbee2MQTT-Probleme haben drei Ursachen: den falschen USB-Port, den falschen Adaptertyp oder Störungen im 2,4-GHz-Band. Hier sind die Fehler, auf die du am wahrscheinlichsten stößt, und was sie tatsächlich bedeuten.

### Error while starting zigbee-herdsman

Zigbee2MQTT konnte überhaupt nicht mit deinem Dongle kommunizieren. Prüfe in dieser Reihenfolge:

1. Der in `Integrationen / Zigbee2Mqtt / Einstellungen` ausgewählte **USB-Port** ist der, an dem dein Dongle steckt. Wenn du den Dongle an einen anderen Port umgesteckt oder mit angeschlossener Festplatte neu gestartet hast, kann sich der Portname geändert haben.
2. Das in den Einstellungen ausgewählte **Dongle-Modell** passt zu deiner Hardware. Ein Silicon-Labs-Dongle, der als Texas-Instruments-Dongle konfiguriert ist (oder umgekehrt), scheitert genau hier.
3. Nichts anderes verwendet den Dongle. Nur eine einzige Zigbee2MQTT-Instanz kann den Adapter belegen.
4. Der Dongle bekommt genug Strom. Ziehe ihn ab, stecke ihn über einen **USB-Hub mit eigener Stromversorgung** oder ein kurzes USB-Verlängerungskabel wieder ein und starte die Integration neu.

### Failed to connect to the adapter (SRSP - SYS - ping after 6000ms)

Dieser Fehler betrifft speziell Koordinatoren von Texas Instruments (CC2652 / ZBDongle-P): Der Adapter ist vorhanden, antwortet aber nicht. Fast immer liegt es an einem falschen Port, einem falschen Adaptertyp in den Einstellungen oder einem Dongle, der physisch abgezogen und wieder eingesteckt werden muss. Besteht das Problem weiter, löst ein erneutes Flashen der Koordinator-Firmware die übrigen Fälle.

### Adapter EZSP protocol version (8) is not supported by host

Dein EmberZNet-Dongle (Silicon Labs), typischerweise ein **Sonoff ZBDongle-E**, läuft mit einer älteren Firmware, als die aktuelle Zigbee2MQTT-Version erwartet. Du hast zwei Möglichkeiten:

- die [Firmware des Dongles aktualisieren](https://www.zigbee2mqtt.io/guide/adapters/emberznet.html#firmware-flashing), was der empfohlene Weg ist, oder
- in Gladys in der Liste der Dongle-Modelle die Option `(legacy ezsp)` wählen, damit Zigbee2MQTT das alte Protokoll spricht.

### MQTT failed to connect, exiting (connection refused: not authorized)

Zigbee2MQTT ist gestartet, aber der MQTT-Broker hat die Zugangsdaten abgelehnt. In Gladys werden beide Container für dich verwaltet, du musst also selten eine Konfigurationsdatei anfassen: Gehe zurück in den Bereich `Einrichtung`, deaktiviere Zigbee2MQTT und aktiviere es dann wieder. Gladys erstellt beide Container mit passenden Zugangsdaten neu. Wenn du zusätzlich die MQTT-Integration mit einem eigenen Broker nutzt, achte darauf, dass du Zigbee2MQTT nicht mit einem anderen Benutzernamen oder Passwort auf diesen Broker verwiesen hast.

### MAC channel access failure

Das ist ein Funkproblem, kein Softwareproblem: Der Koordinator findet keinen freien Sendeplatz. Die üblichen Ursachen und Lösungen:

- Der Dongle steckt direkt im Rechner, neben USB-3.0-Ports, einer SSD oder dem Raspberry Pi selbst. Setze ihn mit einem **USB-Verlängerungskabel von etwa einem Meter** ab – das ist die mit Abstand wirksamste Lösung.
- Dein WLAN und dein Zigbee-Netzwerk überschneiden sich im 2,4-GHz-Band. Ändere deinen WLAN-Kanal oder deinen Zigbee-Kanal, damit sie sich nicht überlagern.
- Das Gerät ist zu weit vom Koordinator entfernt. Platziere ein Zigbee-Gerät mit Netzstrom (eine Steckdose oder eine Lampe) dazwischen: Solche Geräte arbeiten als Router und erweitern das Mesh.

Falls dein Problem hier nicht aufgeführt ist, behandelt die [Zigbee2MQTT-Dokumentation](https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html) Startfehler ausführlich, und im [Gladys-Forum](https://community.gladysassistant.com/) kannst du gut nach deiner genauen Fehlermeldung suchen.

## Häufige Fragen

### Wie füge ich in Gladys ein Gerät zu Zigbee2MQTT hinzu?

Sobald Zigbee2MQTT aktiviert ist, öffne das Menü `Erkennen`, klicke auf `Beitritt erlauben` und versetze dein Gerät dann in den Kopplungsmodus (meist durch einen langen Druck auf seine Taste). Das Gerät erscheint automatisch mit seinen erkannten Funktionen in der Liste, wo du es umbenennen und einem Raum zuordnen kannst. Denk daran, das Beitreten danach aus Sicherheitsgründen wieder auszuschalten.

### Welchen USB-Zigbee-Dongle sollte ich mit einem Raspberry Pi oder NAS verwenden?

Jeder Adapter aus der [Liste der von Zigbee2MQTT unterstützten Adapter](https://www.zigbee2mqtt.io/guide/adapters/) funktioniert. Ein günstiger Dongle, den wir mit Gladys getestet haben, ist der Sonoff Zigbee 3.0 USB Dongle. Stecke ihn in den Rechner, auf dem Gladys läuft (deinen Raspberry Pi oder dein NAS); wenn du von einer USB-Festplatte bootest, verwende einen USB-Hub mit eigener Stromversorgung, damit der Dongle genug Strom bekommt. Unser [Kaufratgeber für Zigbee-Dongles](/de/best-zigbee-dongle/) vergleicht die gängigsten Modelle.

### Funktioniert Zigbee2MQTT mit Gladys ohne Cloud?

Ja. Zigbee2MQTT läuft lokal auf deiner eigenen Hardware und kommuniziert über den USB-Dongle mit deinen Geräten. Dein Zigbee-Netzwerk funktioniert also ohne Internetverbindung und ohne Cloud-Konto beim Hersteller.

### Welchen Port und welche Einstellungen sollte ich für meinen Zigbee-Dongle wählen?

Gehe in Gladys zu `Integrationen / Zigbee2Mqtt` und dann zu `Einstellungen`. Gladys durchsucht deine USB-Ports und schlägt sie in einer Auswahlliste vor. Du wählst einfach den Port deines Dongles und das Dongle-Modell aus, damit Zigbee2MQTT die richtige Konfiguration lädt.

### Warum startet Zigbee2MQTT nicht?

Fast immer, weil Zigbee2MQTT den Koordinator nicht erreicht: Der falsche USB-Port ist ausgewählt, das Dongle-Modell in den Einstellungen passt nicht zu deiner Hardware, der Dongle bekommt zu wenig Strom, oder seine Firmware ist zu alt (der Fehler `EZSP protocol version is not supported` bei Sonoff-ZBDongle-E-Dongles). Prüfe zuerst Port und Modell in den Einstellungen der Integration, ziehe den Dongle dann ab und stecke ihn über einen USB-Hub mit eigener Stromversorgung oder ein USB-Verlängerungskabel wieder ein.

### Warum verlieren meine Zigbee-Geräte immer wieder die Verbindung?

Hauptursache sind Störungen im 2,4-GHz-Band, die in den Logs als `MAC channel access failure` auftauchen. Setze den Dongle mit einem ein Meter langen USB-Verlängerungskabel vom Rechner ab, halte ihn von USB-3.0-Ports und SSDs fern, stelle sicher, dass sich deine WLAN- und Zigbee-Kanäle nicht überschneiden, und füge Zigbee-Geräte mit Netzstrom hinzu, die als Router arbeiten und das Mesh erweitern.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie füge ich in Gladys ein Gerät zu Zigbee2MQTT hinzu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sobald Zigbee2MQTT aktiviert ist, öffne das Menü Erkennen, klicke auf Beitritt erlauben und versetze dein Gerät dann in den Kopplungsmodus (meist durch einen langen Druck auf seine Taste). Das Gerät erscheint automatisch mit seinen erkannten Funktionen in der Liste, wo du es umbenennen und einem Raum zuordnen kannst. Schalte das Beitreten danach aus Sicherheitsgründen wieder aus.",
        },
      },
      {
        "@type": "Question",
        name: "Welchen USB-Zigbee-Dongle sollte ich mit einem Raspberry Pi oder NAS verwenden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jeder Adapter aus der Liste der von Zigbee2MQTT unterstützten Adapter funktioniert. Ein günstiger, mit Gladys getesteter Dongle ist der Sonoff Zigbee 3.0 USB Dongle. Stecke ihn in den Rechner, auf dem Gladys läuft, zum Beispiel deinen Raspberry Pi oder dein NAS. Wenn du von einer USB-Festplatte bootest, verwende einen USB-Hub mit eigener Stromversorgung, damit der Dongle genug Strom bekommt.",
        },
      },
      {
        "@type": "Question",
        name: "Funktioniert Zigbee2MQTT mit Gladys ohne Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Zigbee2MQTT läuft lokal auf deiner eigenen Hardware und kommuniziert über den USB-Dongle mit deinen Geräten. Dein Zigbee-Netzwerk funktioniert also ohne Internetverbindung und ohne Cloud-Konto beim Hersteller.",
        },
      },
      {
        "@type": "Question",
        name: "Welchen Port und welche Einstellungen sollte ich für meinen Zigbee-Dongle wählen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gehe in Gladys zu Integrationen, dann Zigbee2Mqtt und dann Einstellungen. Gladys durchsucht deine USB-Ports und schlägt sie in einer Auswahlliste vor. Du wählst den Port deines Dongles und das Dongle-Modell aus, damit Zigbee2MQTT die richtige Konfiguration lädt.",
        },
      },
      {
        "@type": "Question",
        name: "Warum startet Zigbee2MQTT nicht?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fast immer, weil Zigbee2MQTT den Koordinator nicht erreicht: Der falsche USB-Port ist ausgewählt, das Dongle-Modell in den Einstellungen passt nicht zu deiner Hardware, der Dongle bekommt zu wenig Strom, oder seine Firmware ist zu alt (der Fehler EZSP protocol version is not supported bei Sonoff-ZBDongle-E-Dongles). Prüfe zuerst Port und Modell in den Einstellungen der Integration, ziehe den Dongle dann ab und stecke ihn über einen USB-Hub mit eigener Stromversorgung oder ein USB-Verlängerungskabel wieder ein.",
        },
      },
      {
        "@type": "Question",
        name: "Warum verlieren meine Zigbee-Geräte immer wieder die Verbindung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hauptursache sind Störungen im 2,4-GHz-Band, die in den Logs als MAC channel access failure auftauchen. Setze den Dongle mit einem ein Meter langen USB-Verlängerungskabel vom Rechner ab, halte ihn von USB-3.0-Ports und SSDs fern, stelle sicher, dass sich deine WLAN- und Zigbee-Kanäle nicht überschneiden, und füge Zigbee-Geräte mit Netzstrom hinzu, die als Router arbeiten und das Mesh erweitern.",
        },
      },
    ],
  }}
/>
