---
id: troubleshooting
title: "Fehlerbehebung bei Gladys Assistant: häufige Probleme und Lösungen"
description: "Mini-PC startet nicht vom USB-Stick, Gladys öffnet sich nicht, Passwort vergessen, Update schlägt fehl, Zigbee-Dongle wird nicht erkannt, Szenen zur falschen Zeit: die Lösungen für die häufigsten Probleme mit Gladys Assistant."
sidebar_label: Fehlerbehebung
keywords:
  - gladys assistant fehlerbehebung
  - gladys funktioniert nicht
  - gladys assistant os problem
  - gladys passwort vergessen
  - gladys update fehlgeschlagen
  - gladys logs
---

import JsonLd from '@site/src/components/seo/JsonLd';

Diese Seite sammelt die häufigsten Probleme mit Gladys Assistant und wie du sie löst. Wenn deins nicht dabei ist, sind die [Logs](#fang-mit-den-logs-an) und [das Forum](https://community.gladysassistant.com/) der nächste Schritt.

## Fang mit den Logs an

Die meisten Probleme hinterlassen eine Spur in den Gladys-Logs: Eine Fehlermeldung nennt meist die betroffene Integration oder das betroffene Gerät. Du kannst sie mit einem Klick unter **Einstellungen > System > Logs herunterladen** herunterladen oder über die Kommandozeile lesen, wenn sich die Oberfläche nicht öffnet. Siehe [Gladys Assistant Logs herunterladen](/de/docs/installation/logs).

Wenn du Gladys mit [Gladys Assistant OS](/de/docs/installation/mini-pc) installiert hast, zeigt `sudo gladys-diagnostics` zusätzlich den Zustand des Rechners an: Netzwerk, Festplatte, Docker und Gladys. Führe den Befehl über SSH aus oder direkt am Mini-PC, nachdem du **Strg+Alt+F2** gedrückt hast, um eine Anmeldeaufforderung zu erhalten.

## Installation

### Der Mini-PC startet nicht vom USB-Stick

Das Image von [Gladys Assistant OS](/de/docs/installation/mini-pc) muss mit einem Werkzeug wie balenaEtcher auf den USB-Stick geschrieben werden: Die `.iso`-Datei einfach auf den Stick zu kopieren, funktioniert nicht. Öffne dann die BIOS-Einstellungen (meist mit **Entf** bzw. **Del** oder **F2** beim Einschalten), prüfe, ob der Computer im **UEFI**-Modus startet (nicht „Legacy“ oder „CSM“), und setze den USB-Stick an die erste Stelle der Bootreihenfolge. Wenn er dann immer noch nicht startet, deaktiviere in denselben Einstellungen **Secure Boot**.

### Gladys öffnet sich nach der Installation nicht

**Mit Gladys Assistant OS** zeigt der Bildschirm des Mini-PCs, wie weit die Installation ist. Beim ersten Start lädt er Gladys herunter, was je nach Internetverbindung eine Weile dauern kann: Warte, bis auf dem Bildschirm **Gladys Assistant ist bereit** steht. Zeigt er **Internetverbindung erforderlich** an, prüfe das Ethernet-Kabel und deinen Router: Die Einrichtung macht von selbst weiter. Zeigt er **Einrichtung kann nicht fortgesetzt werden** an, siehe [den Abschnitt Fehlerbehebung der Anleitung](/de/docs/installation/mini-pc#fehlerbehebung).

**Mit Docker** prüfst du in dieser Reihenfolge, ob der Container läuft (`sudo docker ps`), ob kein anderer Webserver Port 80 belegt und ob keine Firewall ihn blockiert. Die [Anleitung zur Docker-Installation](/de/docs/installation/docker#gladys-öffnet-sich-nach-der-installation-nicht-was-sollte-ich-prüfen) beschreibt jeden Schritt.

### `gladysassistant.local` öffnet sich nicht

Manche Netzwerke blockieren das mDNS-Protokoll hinter diesem Namen: einige Android-Versionen, Gastnetzwerke, Router mit Client-Isolation. Nutze stattdessen die IP-Adresse des Rechners, auf dem Gladys läuft, zum Beispiel `http://192.168.1.20`. Mit Gladys Assistant OS wird diese Adresse auf dem Bildschirm des Mini-PCs angezeigt. Siehe [was tun, wenn sich `gladysassistant.local` nicht öffnet](/de/docs/installation/docker#wenn-gladysassistantlocal-sich-nicht-öffnet).

## Anmeldung

### Ich habe mein Passwort vergessen

Klicke auf der Anmeldeseite auf **Ich habe mein Passwort vergessen** und gib deine E-Mail-Adresse ein. Gladys schickt dir einen Link zum Zurücksetzen oder einen Einmalcode über Telegram oder Nextcloud Talk, wenn du einen der beiden eingerichtet hast.

Andernfalls steht der Link oder der Code in den Gladys-Logs. Führe auf dem Rechner, auf dem Gladys läuft, Folgendes aus:

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

Wenn du es zu oft versucht hast, warte 30 Minuten oder starte Gladys mit `sudo docker restart gladys` neu. Ein anderer Administrator kann dein Passwort auch unter **Einstellungen > Benutzer** zurücksetzen.

Das ist das Passwort deiner Gladys zu Hause. Für dein Gladys-Plus-Konto nutze **Ich habe mein Passwort vergessen** auf [plus.gladysassistant.com](https://plus.gladysassistant.com).

### Mein Gladys-Plus-Zwei-Faktor-Code wird abgelehnt, oder ich habe mein Handy verloren

Prüfe zuerst, ob dein Handy Datum und Uhrzeit automatisch einstellt: Geht seine Uhr mehr als etwa 30 Sekunden falsch, werden alle Codes abgelehnt, die es erzeugt. Du hast dein Handy gewechselt oder deine Authenticator-App und deine Wiederherstellungscodes verloren? Seit Gladys 5.3.1 kommst du selbst wieder in dein Konto, ohne den Support anzuschreiben. Siehe [Probleme mit der Zwei-Faktor-Authentifizierung lösen](/de/docs/plus/two-factor-authentication).

## Aktualisierungen

### Wie aktualisiere ich Gladys?

**Mit Gladys Assistant OS** musst du nichts tun: Gladys aktualisiert sich selbst, sobald eine neue Version erscheint. **Mit Docker** aktualisiert sich Gladys ebenfalls selbst, wenn du [Watchtower](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower) wie in der Installationsanleitung gestartet hast.

Du kannst auch manuell aktualisieren: Klicke unter **Einstellungen > System** auf **Nach Updates suchen** und dann auf **Jetzt aktualisieren**, wenn eine neue Version verfügbar ist.

### Das Update meldet, dass mein Container ein „festes Image“ verwendet

Dein Container wurde mit einer festen Version erstellt, zum Beispiel `gladysassistant/gladys:v4.80.0`, die nie Updates bekommt. Erstelle ihn mit dem Image `gladysassistant/gladys:v5` neu und behalte dabei die Optionen deines aktuellen Containers bei: denselben Datenordner, denselben Port und dieselben Umgebungsvariablen. Auf einem [Synology-NAS](/de/docs/installation/synology) zum Beispiel weichen sie vom Standardbefehl ab.

1. Entferne den Container mit `sudo docker rm -f gladys`. Deine Daten bleiben in ihrem Ordner auf dem Rechner (`/var/lib/gladysassistant` mit dem [Installationsbefehl](/de/docs/installation/docker#start-gladys)).
2. Starte ihn mit denselben Optionen und `gladysassistant/gladys:v5` als Image neu.

Mit [Docker Compose](/de/docs/installation/docker-compose) trägst du `image: gladysassistant/gladys:v5` in deine Datei ein und führst dann `sudo docker compose -f gladys-compose.yml up -d` aus (mit dem Namen deiner Datei).

### Das Update schlägt wegen Speicherplatz fehl

Docker behält die Images früherer Versionen. Entferne die, die kein Container nutzt, mit `sudo docker image prune -a` und versuche es dann erneut.

## Geräte und Szenen

### Mein Zigbee-Dongle wird nicht erkannt oder Zigbee2MQTT startet nicht

Unter **Integrationen > Zigbee2MQTT > Einrichtung** listet Gladys die USB-Ports mit dem Namen des jeweils angeschlossenen Geräts auf und wählt Port und Modell der gängigsten Dongles bereits aus. Taucht dein Dongle nicht in der Liste auf, prüfe mit `ls /dev/serial/by-id/`, ob der Rechner ihn sieht. Wird Zigbee2MQTT nicht grün, zeigt dir Gladys auf derselben Seite den Grund an: Siehe die [häufigen Zigbee2MQTT-Fehler und ihre Lösungen](/de/docs/integrations/zigbee2mqtt#häufige-zigbee2mqtt-fehler-beheben). Läuft Gladys in einer virtuellen Maschine, muss der Dongle an sie durchgereicht werden (siehe die [Proxmox-Anleitung](/de/docs/installation/proxmox)).

### Ein Sensor zeigt im Dashboard keinen Wert mehr an

Das Dashboard blendet standardmäßig Werte aus, die älter als **48 Stunden** sind, damit du dich nicht auf einen Sensor verlässt, der nichts mehr meldet. Prüfe die Batterien und die Reichweite des Sensors. Meldet er von Haus aus nur selten, erhöhe die **Zeit bis zum Ablauf eines Zustands** unter **Einstellungen > System**.

### Meine geplanten Szenen laufen zur falschen Zeit

Geplante Szenen nutzen die Zeitzone von Gladys: Prüfe sie unter **Einstellungen > System > Zeitzone**.

## Daten und Backups

### Die Festplatte meines Rechners läuft voll

Gladys speichert den Verlauf jedes Sensors. Verringere unter **Einstellungen > System** den Wert **Gerätestatusverlauf behalten** und entferne alte Docker-Images mit `sudo docker image prune -a`.

### Wie stelle ich ein Backup wieder her?

Mit [Gladys Plus](/de/docs/plus/intro) wird Gladys jeden Tag verschlüsselt gesichert. Um ein Backup wiederherzustellen, öffne **Einstellungen > Backups** und klicke auf **Backup wiederherstellen**. Bei einer neuen Installation wählst du auf dem Willkommensbildschirm **Gladys-Plus-Backup wiederherstellen**. In beiden Fällen brauchst du deinen Backup-Schlüssel: Er wird unter **Einstellungen > Gladys Plus** deiner aktuellen Instanz angezeigt, notiere ihn also, bevor du ihn brauchst.

Du ersetzt den Rechner, auf dem Gladys läuft? Folge der [Anleitung zum Umzug auf einen neuen Rechner](/de/docs/installation/migrate): Sie listet auf, was du vor dem Wechsel notieren solltest, und holt deine Zigbee- und Matter-Geräte zurück, ohne sie neu zu koppeln.

## Kommst du nicht weiter?

[Erstelle ein Thema im Forum](https://community.gladysassistant.com/), beschreibe, was du gemacht hast und was passiert, und hänge deine [Logs](/de/docs/installation/logs) an. Mit Gladys Assistant OS füge auch die Ausgabe von `sudo gladys-diagnostics` hinzu: Sie enthält keine Passwörter oder sonstigen Geheimnisse. Die Community hilft dir, die Ursache zu finden.

Lies deine Logs vor dem Posten durch: Wenn du dein Passwort kürzlich zurückgesetzt hast, entferne den Link oder Code zum Zurücksetzen daraus, ebenso alles andere, was du nicht öffentlich teilen möchtest.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Der Mini-PC startet nicht vom USB-Stick",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das Image von Gladys Assistant OS muss mit einem Werkzeug wie balenaEtcher auf den USB-Stick geschrieben werden: Die .iso-Datei einfach auf den Stick zu kopieren, funktioniert nicht. Öffne dann die BIOS-Einstellungen (meist mit Entf bzw. Del oder F2 beim Einschalten), prüfe, ob der Computer im UEFI-Modus startet (nicht Legacy oder CSM), und setze den USB-Stick an die erste Stelle der Bootreihenfolge. Wenn er dann immer noch nicht startet, deaktiviere in denselben Einstellungen Secure Boot.",
        },
      },
      {
        "@type": "Question",
        name: "Gladys öffnet sich nach der Installation nicht",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mit Gladys Assistant OS zeigt der Bildschirm des Mini-PCs, wie weit die Installation ist: Warte, bis dort Gladys Assistant ist bereit steht. Zeigt er Internetverbindung erforderlich an, prüfe das Ethernet-Kabel und deinen Router: Die Einrichtung macht von selbst weiter. Mit Docker prüfst du in dieser Reihenfolge, ob der Container läuft (sudo docker ps), ob kein anderer Webserver Port 80 belegt und ob keine Firewall ihn blockiert.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local öffnet sich nicht",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manche Netzwerke blockieren das mDNS-Protokoll hinter diesem Namen: einige Android-Versionen, Gastnetzwerke, Router mit Client-Isolation. Nutze stattdessen die IP-Adresse des Rechners, auf dem Gladys läuft, zum Beispiel http://192.168.1.20. Mit Gladys Assistant OS wird diese Adresse auf dem Bildschirm des Mini-PCs angezeigt.",
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
        name: "Mein Gladys-Plus-Zwei-Faktor-Code wird abgelehnt, oder ich habe mein Handy verloren",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prüfe zuerst, ob dein Handy Datum und Uhrzeit automatisch einstellt: Geht seine Uhr mehr als etwa 30 Sekunden falsch, werden alle Codes abgelehnt, die es erzeugt. Du hast dein Handy gewechselt oder deine Authenticator-App und deine Wiederherstellungscodes verloren? Seit Gladys 5.3.1 kommst du selbst wieder in dein Konto, ohne den Support anzuschreiben: Siehe die Seite zu Problemen mit der Zwei-Faktor-Authentifizierung.",
        },
      },
      {
        "@type": "Question",
        name: "Wie aktualisiere ich Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mit Gladys Assistant OS musst du nichts tun: Gladys aktualisiert sich selbst, sobald eine neue Version erscheint. Mit Docker aktualisiert sich Gladys ebenfalls selbst, wenn du Watchtower wie in der Installationsanleitung gestartet hast. Du kannst auch manuell aktualisieren: Klicke unter Einstellungen > System auf Nach Updates suchen und dann auf Jetzt aktualisieren, wenn eine neue Version verfügbar ist.",
        },
      },
      {
        "@type": "Question",
        name: "Das Update meldet, dass mein Container ein festes Image verwendet",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dein Container wurde mit einer festen Version erstellt, zum Beispiel gladysassistant/gladys:v4.80.0, die nie Updates bekommt. Erstelle ihn mit dem Image gladysassistant/gladys:v5 neu und behalte dabei die Optionen deines aktuellen Containers bei: denselben Datenordner, denselben Port und dieselben Umgebungsvariablen. Entferne den Container mit sudo docker rm -f gladys (deine Daten bleiben in ihrem Ordner auf dem Rechner) und starte ihn mit denselben Optionen und dem v5-Image neu. Mit Docker Compose trägst du das Image gladysassistant/gladys:v5 in deine Datei ein und führst dann sudo docker compose -f gladys-compose.yml up -d aus.",
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
          text: "Unter Integrationen > Zigbee2MQTT > Einrichtung listet Gladys die USB-Ports mit dem Namen des jeweils angeschlossenen Geräts auf und wählt Port und Modell der gängigsten Dongles bereits aus. Taucht dein Dongle nicht in der Liste auf, prüfe mit ls /dev/serial/by-id/, ob der Rechner ihn sieht. Wird Zigbee2MQTT nicht grün, zeigt dir Gladys auf derselben Seite den Grund an. Läuft Gladys in einer virtuellen Maschine, muss der Dongle an sie durchgereicht werden.",
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
          text: "Geplante Szenen nutzen die Zeitzone von Gladys: Prüfe sie unter Einstellungen > System > Zeitzone.",
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
          text: "Mit Gladys Plus wird Gladys jeden Tag verschlüsselt gesichert. Um ein Backup wiederherzustellen, öffne Einstellungen > Backups und klicke auf Backup wiederherstellen. Bei einer neuen Installation wählst du auf dem Willkommensbildschirm Gladys-Plus-Backup wiederherstellen. In beiden Fällen brauchst du deinen Backup-Schlüssel: Er wird unter Einstellungen > Gladys Plus deiner aktuellen Instanz angezeigt, notiere ihn also, bevor du ihn brauchst. Um den Rechner zu ersetzen, auf dem Gladys läuft, folge der Anleitung zum Umzug auf einen neuen Rechner.",
        },
      },
    ],
  }}
/>
