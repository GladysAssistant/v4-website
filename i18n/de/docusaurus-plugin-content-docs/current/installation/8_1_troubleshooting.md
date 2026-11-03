---
id: troubleshooting
title: "Fehlerbehebung bei Gladys Assistant: häufige Probleme und Lösungen"
description: "Gladys öffnet sich nicht, Passwort vergessen, Update schlägt fehl, Zigbee-Dongle wird nicht erkannt, Szenen zur falschen Zeit, Sensoren fehlen im Dashboard: die Lösungen für die häufigsten Probleme mit Gladys Assistant."
sidebar_label: Fehlerbehebung
keywords:
  - gladys assistant fehlerbehebung
  - gladys funktioniert nicht
  - gladys passwort vergessen
  - gladys update fehlgeschlagen
  - gladys logs
---

import JsonLd from '@site/src/components/seo/JsonLd';

Diese Seite sammelt die häufigsten Probleme mit Gladys Assistant und wie du sie löst. Wenn deins nicht dabei ist, sind die [Logs](#fang-mit-den-logs-an) und [das Forum](https://community.gladysassistant.com/) der nächste Schritt.

## Fang mit den Logs an

Die meisten Probleme hinterlassen eine Spur in den Gladys-Logs: Eine Fehlermeldung nennt meist die betroffene Integration oder das betroffene Gerät. Du kannst sie mit einem Klick unter **Einstellungen > System > Logs herunterladen** herunterladen oder über die Kommandozeile lesen, wenn sich die Oberfläche nicht öffnet. Siehe [Gladys Assistant Logs herunterladen](/de/docs/installation/logs).

## Zugriff und Anmeldung

### Gladys öffnet sich nach der Installation nicht

Prüfe in dieser Reihenfolge, ob der Container läuft (`sudo docker ps`), ob kein anderer Webserver Port 80 belegt und ob keine Firewall ihn blockiert. Die [Anleitung zur Docker-Installation](/de/docs/installation/docker#gladys-öffnet-sich-nach-der-installation-nicht-was-sollte-ich-prüfen) beschreibt jeden Schritt.

### `gladysassistant.local` öffnet sich nicht

Manche Netzwerke blockieren das mDNS-Protokoll hinter diesem Namen: einige Android-Versionen, Gastnetzwerke, Router mit Client-Isolation. Nutze stattdessen die IP-Adresse des Rechners, auf dem Gladys läuft, zum Beispiel `http://192.168.1.20`. Siehe [was tun, wenn sich `gladysassistant.local` nicht öffnet](/de/docs/installation/docker#wenn-gladysassistantlocal-sich-nicht-öffnet).

### Ich habe mein Passwort vergessen

Klicke auf der Anmeldeseite auf **Ich habe mein Passwort vergessen** und gib deine E-Mail-Adresse ein. Gladys schickt dir einen Link zum Zurücksetzen oder einen Einmalcode über Telegram oder Nextcloud Talk, wenn du einen der beiden eingerichtet hast.

Andernfalls steht der Link oder der Code in den Gladys-Logs. Führe auf dem Rechner, auf dem Gladys läuft, Folgendes aus:

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

Wenn du es zu oft versucht hast, warte 30 Minuten oder starte Gladys mit `sudo docker restart gladys` neu. Ein anderer Administrator kann dein Passwort auch unter **Einstellungen > Benutzer** zurücksetzen.

## Aktualisierungen

### Wie aktualisiere ich Gladys?

Wenn du [Watchtower](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower) wie in der Installationsanleitung gestartet hast, aktualisiert sich Gladys bei jeder neuen Version selbst. Du kannst auch manuell aktualisieren: Klicke unter **Einstellungen > System** auf **Nach Updates suchen** und dann auf **Jetzt aktualisieren**, wenn eine neue Version verfügbar ist.

### Das Update meldet, dass mein Container ein „festes Image“ verwendet

Dein Container wurde mit einer festen Version erstellt, zum Beispiel `gladysassistant/gladys:v4.80.0`, die nie Updates bekommt. Erstelle ihn mit dem Image aus dem Installationsbefehl neu, `gladysassistant/gladys:v5`: Entferne den Container mit `sudo docker rm -f gladys` (deine Daten in `/var/lib/gladysassistant` bleiben erhalten) und führe dann den [Installationsbefehl](/de/docs/installation/docker#start-gladys) erneut aus.

### Das Update schlägt wegen Speicherplatz fehl

Docker behält die Images früherer Versionen. Entferne die, die kein Container nutzt, mit `sudo docker image prune -a` und versuche es dann erneut.

## Geräte und Szenen

### Mein Zigbee-Dongle wird nicht erkannt oder Zigbee2MQTT startet nicht

Prüfe mit `ls /dev/serial/by-id/`, ob der Dongle auf dem Rechner auftaucht, und sieh dir dann die [häufigen Zigbee2MQTT-Fehler und ihre Lösungen](/de/docs/integrations/zigbee2mqtt#häufige-zigbee2mqtt-fehler-beheben) an. Läuft Gladys in einer virtuellen Maschine, muss der Dongle an sie durchgereicht werden (siehe die [Proxmox-Anleitung](/de/docs/installation/proxmox)).

### Ein Sensor zeigt im Dashboard keinen Wert mehr an

Das Dashboard blendet standardmäßig Werte aus, die älter als **48 Stunden** sind, damit du dich nicht auf einen Sensor verlässt, der nichts mehr meldet. Prüfe die Batterien und die Reichweite des Sensors. Meldet er von Haus aus nur selten, erhöhe die **Zeit bis zum Ablauf eines Zustands** unter **Einstellungen > System**.

### Meine geplanten Szenen laufen zur falschen Zeit

Stelle deine Zeitzone unter **Einstellungen > System > Zeitzone** ein: Diese nutzen die geplanten Szenen. Prüfe auch die Variable `TZ` in deinem [Installationsbefehl](/de/docs/installation/docker#start-gladys), die die Uhrzeit des Containers festlegt.

## Daten und Backups

### Die Festplatte meines Rechners läuft voll

Gladys speichert den Verlauf jedes Sensors. Verringere unter **Einstellungen > System** den Wert **Gerätestatusverlauf behalten** und entferne alte Docker-Images mit `sudo docker image prune -a`.

### Wie stelle ich ein Backup wieder her?

Mit [Gladys Plus](/de/docs/plus/intro) wird Gladys jeden Tag verschlüsselt gesichert. Um ein Backup wiederherzustellen, öffne **Einstellungen > Backups** und klicke auf **Backup wiederherstellen**. Bei einer neuen Installation wählst du auf dem Willkommensbildschirm **Gladys-Plus-Backup wiederherstellen**. In beiden Fällen brauchst du deinen Backup-Schlüssel, der beim Einrichten in den Gladys-Plus-Einstellungen angezeigt wird.

## Kommst du nicht weiter?

[Erstelle ein Thema im Forum](https://community.gladysassistant.com/), beschreibe, was du gemacht hast und was passiert, und hänge deine [Logs](/de/docs/installation/logs) an. Die Community hilft dir, die Ursache zu finden.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gladys öffnet sich nach der Installation nicht",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prüfe in dieser Reihenfolge, ob der Container läuft (sudo docker ps), ob kein anderer Webserver Port 80 belegt und ob keine Firewall ihn blockiert. Die Anleitung zur Docker-Installation beschreibt jeden Schritt.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local öffnet sich nicht",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manche Netzwerke blockieren das mDNS-Protokoll hinter diesem Namen: einige Android-Versionen, Gastnetzwerke, Router mit Client-Isolation. Nutze stattdessen die IP-Adresse des Rechners, auf dem Gladys läuft, zum Beispiel http://192.168.1.20.",
        },
      },
      {
        "@type": "Question",
        name: "Ich habe mein Passwort vergessen",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Klicke auf der Anmeldeseite auf Ich habe mein Passwort vergessen und gib deine E-Mail-Adresse ein. Gladys schickt dir einen Link zum Zurücksetzen oder einen Einmalcode über Telegram oder Nextcloud Talk, wenn du einen der beiden eingerichtet hast. Andernfalls steht der Link oder der Code in den Gladys-Logs: Führe sudo docker logs gladys 2>&1 | grep \"Forgot password\" auf dem Rechner aus, auf dem Gladys läuft. Ein anderer Administrator kann dein Passwort auch unter Einstellungen > Benutzer zurücksetzen.",
        },
      },
      {
        "@type": "Question",
        name: "Wie aktualisiere ich Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wenn du Watchtower wie in der Installationsanleitung gestartet hast, aktualisiert sich Gladys bei jeder neuen Version selbst. Du kannst auch manuell aktualisieren: Klicke unter Einstellungen > System auf Nach Updates suchen und dann auf Jetzt aktualisieren, wenn eine neue Version verfügbar ist.",
        },
      },
      {
        "@type": "Question",
        name: "Das Update meldet, dass mein Container ein festes Image verwendet",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dein Container wurde mit einer festen Version erstellt, zum Beispiel gladysassistant/gladys:v4.80.0, die nie Updates bekommt. Erstelle ihn mit dem Image aus dem Installationsbefehl neu, gladysassistant/gladys:v5: Entferne den Container mit sudo docker rm -f gladys (deine Daten in /var/lib/gladysassistant bleiben erhalten) und führe dann den Installationsbefehl erneut aus.",
        },
      },
      {
        "@type": "Question",
        name: "Das Update schlägt wegen Speicherplatz fehl",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Docker behält die Images früherer Versionen. Entferne die, die kein Container nutzt, mit sudo docker image prune -a und versuche es dann erneut.",
        },
      },
      {
        "@type": "Question",
        name: "Mein Zigbee-Dongle wird nicht erkannt oder Zigbee2MQTT startet nicht",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prüfe mit ls /dev/serial/by-id/, ob der Dongle auf dem Rechner auftaucht, und sieh dir dann die häufigen Zigbee2MQTT-Fehler und ihre Lösungen in der Zigbee2MQTT-Dokumentation an. Läuft Gladys in einer virtuellen Maschine, muss der Dongle an sie durchgereicht werden.",
        },
      },
      {
        "@type": "Question",
        name: "Ein Sensor zeigt im Dashboard keinen Wert mehr an",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das Dashboard blendet standardmäßig Werte aus, die älter als 48 Stunden sind, damit du dich nicht auf einen Sensor verlässt, der nichts mehr meldet. Prüfe die Batterien und die Reichweite des Sensors. Meldet er von Haus aus nur selten, erhöhe die Zeit bis zum Ablauf eines Zustands unter Einstellungen > System.",
        },
      },
      {
        "@type": "Question",
        name: "Meine geplanten Szenen laufen zur falschen Zeit",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stelle deine Zeitzone unter Einstellungen > System > Zeitzone ein: Diese nutzen die geplanten Szenen. Prüfe auch die Variable TZ in deinem Installationsbefehl, die die Uhrzeit des Containers festlegt.",
        },
      },
      {
        "@type": "Question",
        name: "Die Festplatte meines Rechners läuft voll",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys speichert den Verlauf jedes Sensors. Verringere unter Einstellungen > System den Wert Gerätestatusverlauf behalten und entferne alte Docker-Images mit sudo docker image prune -a.",
        },
      },
      {
        "@type": "Question",
        name: "Wie stelle ich ein Backup wieder her?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mit Gladys Plus wird Gladys jeden Tag verschlüsselt gesichert. Um ein Backup wiederherzustellen, öffne Einstellungen > Backups und klicke auf Backup wiederherstellen. Bei einer neuen Installation wählst du auf dem Willkommensbildschirm Gladys-Plus-Backup wiederherstellen. In beiden Fällen brauchst du deinen Backup-Schlüssel, der beim Einrichten in den Gladys-Plus-Einstellungen angezeigt wird.",
        },
      },
    ],
  }}
/>
