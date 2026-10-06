---
id: intro
title: Integrationen von Gladys Assistant
sidebar_label: Einführung
slug: /integrations/
description: "Gladys Assistant unterstützt Zigbee (Zigbee2MQTT), Matter, MQTT, Shelly, Sonos, Kameras und Tausende Geräte. Offene Protokolle zuerst, dazu externe Integrationen, um jedes andere Gerät und jeden Dienst mit einem Klick hinzuzufügen."
---

Gladys Assistant ist ein **Open-Source-Projekt**, das von einer **Community von Smart-Home-Begeisterten** entwickelt und gepflegt wird.  
Unsere Mission: das Smart Home **einfach, lokal und datenschutzfreundlich** machen.

Der vollständige Quellcode ist auf [GitHub](https://github.com/GladysAssistant/Gladys) verfügbar.

## Unsere Vision

Das Verbinden von Geräten mit Gladys sollte nicht von einer geschlossenen Cloud oder einem einzelnen Hersteller abhängen. Wir setzen in erster Linie auf **offene Protokolle**, auf **Matter und Zigbee** als langfristige Standards und auf **externe Integrationen** für alles andere.

In der Praxis bedeutet das zwei Ansätze, die sich ergänzen:

1. **Native Integrationen** für offene Protokolle (Zigbee, Matter, MQTT), direkt in Gladys integriert
2. **Externe Integrationen**: Community-Integrationen, als Docker-Container verpackt und mit einem Klick installierbar, um jedes andere Gerät und jeden anderen Dienst abzudecken

## Offene Protokolle zuerst

Diese Integrationen empfehlen wir für jede neue Installation:

- [Zigbee2MQTT](/de/docs/integrations/zigbee2mqtt/): Tausende Zigbee-Geräte, lokale Steuerung, keine Cloud
- [Matter](/de/docs/integrations/matter/): der Industriestandard, 100 % lokal, unterstützt von den größten Marken
- [MQTT](/de/docs/integrations/mqtt/): der universelle Kitt für DIY-Projekte und eigene Sensoren

In dieser Dokumentation findest du eigene Anleitungen: [Shelly](/de/docs/integrations/external/shelly/), [Sonos](/de/docs/integrations/sonos/), [Kameras](/de/docs/integrations/camera/) und weitere in der Seitenleiste.

## Matter: die Zukunft des Smart Home

**Matter ist die Zukunft des Smart Home.**  
Dieses offene, lokale Protokoll wird von den größten Namen der Branche unterstützt. Es ist modern, sicher und funktioniert über WLAN, Thread und Ethernet.

Mehr erfahren? Lies die [Matter-Dokumentation](/de/docs/integrations/matter/).

## Externe Integrationen

Dein Gerät oder Dienst wird von keiner nativen Integration abgedeckt? **Externe Integrationen** sind der schnellste Weg, es hinzuzufügen – und jeder kann eine erstellen und veröffentlichen.

Eine externe Integration ist ein kleines Programm, das als **Docker-Container** verpackt und in einem öffentlichen GitHub-Repository veröffentlicht wird. Gladys führt es in einer sicheren Sandbox aus und kommuniziert über eine eigene API damit. Aus Nutzersicht heißt das:

- Durchstöbere den Katalog der Community-Integrationen direkt in Gladys
- Installiere die gewünschte Integration mit **einem Klick**: Gladys lädt das Image herunter, startet es und erzeugt die passende Oberfläche
- Oder installiere sie direkt über die URL eines GitHub-Repositorys

Da jede Integration in ihrem eigenen isolierten Container läuft, können externe Integrationen in jeder beliebigen Programmiersprache geschrieben und von jedem ohne Prüfung veröffentlicht werden – und bleiben dabei sicher für deine Gladys-Instanz.

👉 **[Durchstöbere den vollständigen Katalog der externen Integrationen](/de/docs/integrations/external/)**, live aktualisiert aus dem Community-Store.

Möchtest du selbst eine bauen? Externe Integrationen sind als **einfachster Weg gedacht, eine Integration zu erstellen und zu veröffentlichen**, ohne Pull Request und ohne Freigabe. Sieh dir den [Entwicklerleitfaden für externe Integrationen](/de/docs/dev/external-integrations/) an.

Der Rest dieses Abschnitts dokumentiert die **nativen Integrationen**, also die, die direkt in Gladys eingebaut sind.

## Weitere Möglichkeiten

Für individuelle oder experimentelle Setups kannst du außerdem nutzen:

- [Node-RED](/de/docs/integrations/node-red/) und MQTT, um eigene Automatisierungen zu bauen
- Das [Forum](https://community.gladysassistant.com/), um über ein bestimmtes Gerät oder einen Integrationswunsch zu sprechen

## Fragen oder Ideen?

Komm in die [Gladys-Community](https://community.gladysassistant.com/)!

Ob du eine Frage stellen, eine neue Integration testen oder eine vorschlagen möchtest – du bist jederzeit willkommen.
