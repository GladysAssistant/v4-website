---
id: raspberry-pi
title: Gladys Assistant auf einem Raspberry Pi installieren
description: "Installiere Gladys Assistant mit unserem offiziellen 64-Bit-Image in wenigen Minuten auf einem Raspberry Pi 3, 4 oder 5. Der einfachste Weg, Gladys kennenzulernen."
sidebar_label: Installation auf einem Raspberry Pi
---

Wenn du bereits einen Raspberry Pi besitzt, kannst du Gladys Assistant mit unserem neuen offiziellen **64-Bit-Image**, das mit dem **Raspberry Pi 3, 4 und 5** kompatibel ist, in nur wenigen Minuten installieren.

Das ist der einfachste Weg, Gladys kennenzulernen, ohne Raspberry Pi OS und Docker selbst installieren zu müssen.

:::info
**Für einen langfristigen Betrieb** empfehle ich stattdessen einen Mini-PC (besseres Preis-Leistungs-Verhältnis, integrierte NVMe-SSD, zuverlässiger mit Zigbee-/Z-Wave-Sticks).

Wenn du aber schon einen Raspberry Pi zur Hand hast, nutze ihn, um Gladys auszuprobieren. Genau dafür haben wir diese Installation so einfach gemacht!
:::

## Was du brauchst

- Einen **Raspberry Pi 3, 4 oder 5** (64-Bit-Modell)
- Am besten eine **USB-SSD** (USB-3.0-Adapter + SATA- oder NVMe-SSD). Zum Testen reicht auch eine 16-GB-microSD-Karte.
- Ein **offizielles Netzteil** passend zu deinem Modell (5 V / 3 A für den Pi 4, 5 V / 5 A für den Pi 5)
- Ein **Ethernet-Kabel** oder eine WLAN-Verbindung
- Einen Computer (Windows, macOS oder Linux), um das Image zu schreiben

## Schritt 1: Raspberry Pi Imager herunterladen

Lade [Raspberry Pi Imager](https://www.raspberrypi.com/software/) herunter und installiere ihn auf deinem Computer. Das ist das offizielle Werkzeug, um Images auf SD-Karten oder SSDs zu schreiben.

## Schritt 2: Deinen Raspberry Pi auswählen

Öffne Raspberry Pi Imager und klicke auf **Choose Device** (oder auf **NEXT**, wenn du dich im neuen Schritt-für-Schritt-Assistenten befindest).

Wähle dein Raspberry-Pi-Modell aus der Liste:

![Deinen Raspberry Pi auswählen](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-01.png)

## Schritt 3: Das Gladys-Assistant-Image auswählen

Klicke auf **Choose OS** und navigiere dann durch die folgenden Kategorien:

1. **Other specific-purpose OS**
2. **Home automation**
3. **Gladys Assistant**

![Kategorie „Other specific-purpose OS“ auswählen](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-02.png)

![Kategorie „Home automation“ auswählen](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-03.png)

![Gladys Assistant auswählen](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-04.png)

Wähle anschließend das Image **Gladys Assistant (64-bit, for Rpi 3, 4 & 5)**:

![Gladys-Assistant-64-Bit-Image](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-05.png)

:::tip
Der Download des Images ist etwa 900 MB groß. Raspberry Pi Imager erledigt alles: Herunterladen, Überprüfen und Schreiben auf dein Speichermedium.
:::

## Schritt 4: Speichermedium auswählen

Stecke deine microSD-Karte ein oder schließe deine USB-SSD an, klicke dann auf **Choose Storage** und wähle das entsprechende Gerät aus:

![Speichermedium auswählen](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-06.png)

:::warning
Achte darauf, das richtige Gerät auszuwählen: **Alle Daten auf diesem Laufwerk werden gelöscht**.
:::

## Schritt 5: Installation anpassen (empfohlen)

Bevor du das Image schreibst, konfiguriere die Einstellungen deines Raspberry Pi. So musst du beim ersten Start keinen Bildschirm und keine Tastatur anschließen.

### Hostname

Wähle einen Netzwerknamen für deinen Raspberry Pi. Zum Beispiel `gladys` – dann erreichst du ihn unter `http://gladys.local`:

![Hostname konfigurieren](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-07.png)

### Lokalisierung

Wähle deine Stadt, deine Zeitzone und dein Tastaturlayout:

![Lokalisierung konfigurieren](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-08.png)

### Benutzerkonto

Lege einen Benutzernamen und ein Passwort fest. Dieses Konto wird für den SSH-Zugang und die Anmeldung am System verwendet:

![Benutzerkonto konfigurieren](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-09.png)

### WLAN (optional)

Wenn du kein Ethernet-Kabel verwendest, gib den Namen und das Passwort deines WLANs ein:

![WLAN konfigurieren](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-10.png)

### SSH-Zugang (empfohlen)

Aktiviere SSH, damit du dich aus der Ferne mit deinem Raspberry Pi verbinden kannst. Die Anmeldung per Passwort ist der einfachste Einstieg:

![SSH aktivieren](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-11.png)

## Schritt 6: Image schreiben

Prüfe die Zusammenfassung deiner Konfiguration und klicke dann auf **WRITE**:

![Zusammenfassung vor dem Schreiben](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-12.png)

Das Schreiben kann je nach Geschwindigkeit deines Speichermediums mehrere Minuten dauern. Sobald es abgeschlossen ist, wirft Raspberry Pi Imager das Gerät automatisch aus:

![Schreiben abgeschlossen](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-imager-step-13.png)

## Schritt 7: Erster Start

1. Stecke die microSD-Karte in deinen Raspberry Pi (oder schließe die USB-SSD an)
2. Schließe das Netzteil an
3. Warte etwa 2 Minuten, bis der Raspberry Pi hochgefahren ist

## Schritt 8: Gladys Assistant aufrufen

Öffne deinen Browser und rufe eine dieser Adressen auf:

- `http://gladysassistant.local` (Gladys macht diesen Namen per mDNS in deinem lokalen Netzwerk bekannt)
- `http://gladys.local` (wenn du `gladys` als Hostname festgelegt hast)
- `http://DEINE_LOKALE_IP` (zum Beispiel `http://192.168.1.131`)

Beim ersten Start führt Gladys die Ersteinrichtung durch. Das kann je nach Hardware und Internetverbindung **zwischen 5 Minuten und 1 Stunde** dauern:

![Ersteinrichtung von Gladys](../../../../../static/img/docs/fr/installation/raspberry-pi/raspberry-pi-setup-in-progress-en.png)

Die Seite lädt automatisch neu, sobald Gladys bereit ist. Danach kannst du dein Konto anlegen und mit der Einrichtung deines Smart Homes beginnen!

## Wie geht es weiter?

- Wirf einen Blick in den Leitfaden zur [empfohlenen Hardware](/de/docs/installation/recommended-hardware/), um deine vernetzten Geräte auszuwählen
- Erfahre, wie du [Integrationen installierst](/de/docs/integrations/) (Zigbee, Z-Wave usw.)
- Wenn du auf eine leistungsstärkere Lösung umsteigen möchtest, sieh dir die [Anleitung zur Installation auf einem Mini-PC](/de/docs/installation/mini-pc/) an
