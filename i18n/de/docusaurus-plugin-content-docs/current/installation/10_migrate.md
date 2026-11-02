---
id: migrate
title: Gladys auf einen neuen Rechner umziehen
description: "Du ersetzt deinen Mini-PC, deinen Raspberry Pi oder deinen Server? So ziehst du Gladys Assistant mit einem Gladys-Plus-Backup auf einen neuen Rechner um, ohne deine Geräte neu anzulernen, und löschst danach den alten Rechner sicher."
sidebar_label: Auf neuen Rechner umziehen
keywords:
  - gladys umziehen
  - gladys neuer server
  - gladys instanz wechseln
  - gladys plus backup wiederherstellen
  - neuer mini pc gladys
---

Du ersetzt den Rechner, auf dem Gladys läuft (einen alten Mini-PC, einen Raspberry Pi, ein NAS...), durch einen neuen? Mit einem **Gladys-Plus-Backup** bekommst du deine Instanz auf dem neuen Rechner genau so zurück, wie sie war: Benutzer, Zuhause und Räume, Geräte, Szenen, Dashboards, Einstellungen der Integrationen und den gesamten Sensorverlauf.

Auch Zigbee2mqtt und Matter werden wiederhergestellt: Gladys speichert ihre Konfiguration jede Nacht in seiner Datenbank, du musst deine Geräte also **nicht neu anlernen**.

Du musst nur ein paar Vorsichtsmaßnahmen beachten. Hier ist die Anleitung, Schritt für Schritt.

:::info[Was du brauchst]

- Ein [Gladys Plus](/de/plus/)-Abonnement mit Backups, das mit deiner aktuellen Instanz verbunden ist.
- Den neuen Rechner, den du mit der üblichen Anleitung installierst (zum Beispiel [Gladys Assistant OS auf einem Mini-PC](/de/docs/installation/mini-pc/)).

:::

## 1. Vor dem Wechsel (auf dem alten Rechner)

### Notiere deinen Backup-Schlüssel

Gehe in deiner aktuellen Instanz zu **Einstellungen > Gladys Plus**, Abschnitt **„Backup-Schlüssel“**, und klicke auf das Auge, um ihn anzuzeigen. Kopiere ihn an einen sicheren Ort außerhalb von Gladys (zum Beispiel in einen Passwort-Manager).

Deine Backups sind **mit diesem Schlüssel verschlüsselt**: Ohne ihn lassen sie sich nicht wiederherstellen.

:::danger
Trenne Gladys Plus auf der alten Instanz nicht, bevor du den Schlüssel notiert hast: Beim Trennen wird **der Schlüssel aus der Instanz gelöscht**.
:::

### Notiere, was nicht im Backup ist

- **Node-RED**: Wenn du es nutzt, exportiere deine Flows (**Menü ☰ > Export > Alle Flows**). Sie sind nicht Teil des Gladys-Backups.
- **MQTT**: Wenn du die MQTT-Integration mit dem von Gladys installierten Broker nutzt (für Tasmota, Shelly usw.), notiere zur Sicherheit den MQTT-Benutzernamen und das Passwort (**Integrationen > MQTT > Einrichtung**).

### Lerne kurz vor dem Umzug keine neuen Geräte an

Die Konfiguration von Zigbee2mqtt wird **jeden Abend um 23 Uhr** in Gladys gespeichert, die von Matter **um 4 Uhr morgens**. Ein Zigbee- oder Matter-Gerät, das nach der letzten nächtlichen Sicherung angelernt wurde, ist nicht im Backup: Du müsstest es auf dem neuen Rechner neu anlernen.

### Starte ein manuelles Backup

Gehe zu **Einstellungen > Backups** und klicke auf **„Jetzt sichern“**. Warte, bis das neue Backup in der Liste erscheint.

### Schalte den alten Rechner aus

**Lass die beiden Rechner nie gleichzeitig laufen**: Sie würden dieselben Geräte steuern, deine Szenen würden doppelt ausgelöst, und sie würden sich dieselbe Gladys-Plus-Verbindung teilen.

Ziehe dann deinen Zigbee-Stick (und deine anderen USB-Sticks) ab und stecke ihn in den neuen Rechner. Wenn dein Zigbee-Koordinator ein Netzwerkmodell ist (SLZB-06 usw.), musst du nichts umstecken.

## 2. Den neuen Rechner installieren und das Backup wiederherstellen

Installiere Gladys auf dem neuen Rechner mit der passenden Anleitung. Auf einem Mini-PC folgst du [Gladys Assistant mit Gladys Assistant OS installieren](/de/docs/installation/mini-pc/): Du schreibst das Image auf einen USB-Stick, startest den Mini-PC davon, beantwortest ein paar Fragen, und Gladys installiert sich von selbst.

Wenn Gladys den Willkommensbildschirm anzeigt (unter [http://gladysassistant.local](http://gladysassistant.local) mit Gladys Assistant OS):

1. Klicke auf **„Gladys-Plus-Backup wiederherstellen“**, und **nicht** auf „Lokalen Account erstellen“.
2. Melde dich mit deinem Gladys-Plus-Konto an: E-Mail, Passwort und Code der [Zwei-Faktor-Authentifizierung](/de/docs/plus/two-factor-authentication/).
3. Gib deinen **Backup-Schlüssel** ein: den, den du in Schritt 1 notiert hast.
4. Wähle das neueste Backup aus, klicke dann auf **„Backup wiederherstellen“** und **„Bestätigen“**.

Die Wiederherstellung dauert je nach Größe deines Verlaufs unterschiedlich lange. Am Ende startet Gladys von selbst neu. Danach meldest du dich mit deinem gewohnten Gladys-Konto an, also mit **der E-Mail und dem Passwort deiner alten Instanz**.

:::tip[Die Wiederherstellung schlägt fehl?]
Prüfe, ob der eingegebene Schlüssel wirklich der der alten Instanz ist: Gladys bietet dir an, ihn zu ändern und es erneut zu versuchen. Du kannst auch einen lokalen Account erstellen, Gladys Plus später unter **Einstellungen > Gladys Plus** verbinden und das Backup dann unter **Einstellungen > Backups** wiederherstellen.
:::

## 3. Nach der Wiederherstellung prüfen

- **Zigbee2mqtt**: Gladys installiert es automatisch mit seiner wiederhergestellten Konfiguration (Zigbee-Netzwerk und Geräte) neu, ohne neues Anlernen. Prüfe trotzdem unter **Integrationen > Zigbee2mqtt** den USB-Port des Sticks: Er kann auf dem neuen Rechner anders heißen. Wähle in diesem Fall den richtigen aus.
- **Matter**: Der Controller wird automatisch aus seinem Backup wiederhergestellt.
- **Integrationen aus dem Katalog**: Sie werden beim Start automatisch neu installiert. Gladys lädt ihre Images erneut herunter, was ein paar Minuten dauern kann.
- **MQTT** (wenn du den von Gladys installierten Broker nutzt): Seit Gladys 5.3.1 erstellt Gladys den Broker automatisch mit deinen gespeicherten Zugangsdaten neu, deine MQTT-Geräte verbinden sich also ohne Änderung wieder. Prüfe unter **Integrationen > MQTT**, dass Gladys mit dem Broker verbunden ist.
- **Node-RED**: Importiere deine Flows wieder.
- **IP-Adresse**: Der neue Rechner hat eine neue IP-Adresse. Alles, was Gladys über seine IP erreicht (MQTT-Geräte usw.), muss die neue verwenden. Am einfachsten: Sobald der alte Rechner aus ist, gib dem neuen in den Einstellungen deines Routers die feste IP-Adresse, die der alte hatte (DHCP-Reservierung).
- **Gladys Plus**: Deine Gladys-Plus-Verbindung ist Teil des Backups, der neue Rechner nimmt also den Platz des alten ein. Prüfe unter **Einstellungen > Gladys Plus**, dass die Instanz verbunden ist, und teste den Fernzugriff auf [plus.gladysassistant.com](https://plus.gladysassistant.com). Prüfe am nächsten Tag, dass unter **Einstellungen > Backups** ein neues Backup erscheint.

## 4. Den alten Rechner löschen

Lass ihn ein paar Tage ausgeschaltet, während du prüfst, dass alles funktioniert: Er ist dein Plan B. **Schalte ihn nie mit laufendem Gladys ein, während der neue Rechner läuft.**

Denk danach daran, dass seine Festplatte noch deine Gladys-Datenbank enthält (Benutzer, Gladys-Plus-Schlüssel, Zugänge deiner Integrationen). Also:

- **Wenn du ihn verschenkst oder verkaufst**, installiere ein System neu und lösche dabei die Festplatte vollständig;
- **wenn du ihn für etwas anderes behältst**, entferne die Container und Daten von Gladys:

```bash
docker rm -f gladys gladys-z2m-zigbee2mqtt gladys-z2m-mqtt eclipse-mosquitto gladys-node-red gladys-matterbridge
```

```bash
sudo rm -rf /var/lib/gladysassistant
```

Passe die Liste der Container an das an, was der Befehl `docker ps -a` bei dir anzeigt (füge zum Beispiel `watchtower` hinzu, wenn es installiert ist). Wenn du Gladys selbst mit Docker in einem anderen Ordner als `/var/lib/gladysassistant` installiert hast, lösche stattdessen diesen Ordner.

Du musst Gladys Plus auf dem alten Rechner nicht trennen: Der neue hat die Verbindung übernommen.

## Brauchst du Hilfe?

Wenn du bei einem Schritt nicht weiterkommst, stelle deine Frage im [Community-Forum](https://community.gladysassistant.com/).
