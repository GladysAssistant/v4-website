---
id: two-factor-authentication
title: "Zwei-Faktor-Authentifizierung (2FA): Probleme lösen"
description: "Dein Gladys-Plus-2FA-Code wird abgelehnt, du hast dein Handy gewechselt oder deine Authenticator-App verloren? So löst du die häufigsten Probleme mit der Zwei-Faktor-Authentifizierung."
sidebar_label: 2FA-Probleme
---

Um dein Zuhause zu schützen, ist jedes Gladys-Plus-Konto mit einer **Zwei-Faktor-Authentifizierung (2FA)** gesichert: Zusätzlich zu deinem Passwort fragt Gladys Plus nach einem **6-stelligen Code**, den eine Authenticator-App auf deinem Handy erzeugt (Google Authenticator, Microsoft Authenticator, 2FAS, Ente Auth ...). Dieser Code ändert sich alle 30 Sekunden.

Der Code wird abgefragt, wenn du dich auf [plus.gladysassistant.com](https://plus.gladysassistant.com) anmeldest, wenn du deine lokale Gladys-Instanz mit Gladys Plus verbindest (unter **Einstellungen > Gladys Plus** deiner Instanz), und bei einigen sensiblen Aktionen (Wiederherstellungscodes erzeugen, Zwei-Faktor-App wechseln, Passwort zurücksetzen).

Auf dieser Seite findest du die häufigsten Probleme und wie du sie löst.

## Mein 2FA-Code wird abgelehnt

Wenn Gladys „**Der Zwei-Faktor-Code ist ungültig**“ anzeigt, prüfe die folgenden Punkte nacheinander: In den allermeisten Fällen liegt das Problem bei einem davon.

### 1. Die Uhrzeit deines Handys stimmt nicht

2FA-Codes werden aus der aktuellen Uhrzeit berechnet. **Geht die Uhr deines Handys um mehr als etwa 30 Sekunden falsch, werden alle Codes abgelehnt, die es erzeugt**, auch wenn sie völlig normal aussehen.

Stelle sicher, dass dein Handy Datum und Uhrzeit automatisch einstellt:

- **iPhone**: Einstellungen > Allgemein > Datum & Uhrzeit > **„Automatisch einstellen“** aktivieren.
- **Android**: Einstellungen > System > Datum und Uhrzeit > **„Uhrzeit automatisch einstellen“** aktivieren (das genaue Menü kann je nach Hersteller abweichen).

Versuche es dann mit einem neuen Code. Nur die Uhr deines Handys zählt: Die Uhr deiner Gladys-Instanz hat keinen Einfluss auf die 2FA-Codes.

### 2. Du verwendest den falschen Eintrag in deiner App

Wenn du die 2FA mehrmals eingerichtet hast (zum Beispiel nach einem Zurücksetzen oder zum Testen), enthält deine Authenticator-App vielleicht **mehrere Einträge zu Gladys**. Nur der neueste funktioniert: Die älteren erzeugen Codes, die abgelehnt werden.

Probiere die Codes jedes Gladys-Eintrags nacheinander aus. Sobald du den richtigen gefunden hast, kannst du die veralteten Gladys-Einträge desselben Kontos aus deiner App löschen, um Verwechslungen zu vermeiden. Behalte die Einträge deiner anderen Gladys-Plus-Konten, falls du mehrere hast.

Prüfe auch, ob du dich mit der richtigen E-Mail-Adresse anmeldest: Jedes Gladys-Plus-Konto hat seine eigene 2FA.

### 3. Der Code ist während der Eingabe abgelaufen

Ein Code ist nur kurze Zeit gültig. Wenn der Code gleich wechselt (die meisten Apps zeigen einen kleinen Countdown), **warte auf den nächsten Code** und gib ihn sofort ein.

### 4. Der Code wurde falsch eingegeben

Der Code besteht aus **6 Ziffern, ohne Leerzeichen**. Manche Apps zeigen den Code als `123 456` an: Tippe die 6 Ziffern ohne das Leerzeichen ein. Wenn du den Code kopierst und einfügst, achte darauf, dass kein Leerzeichen oder zusätzliches Zeichen mitkopiert wurde.

### 5. Zu viele Versuche

Nach mehreren falschen Codes hintereinander kann Gladys Plus neue Versuche vorübergehend ablehnen („Zu viele fehlgeschlagene Versuche“). Warte ein paar Minuten und versuche es dann mit einem neuen Code.

## Ich habe mein Handy gewechselt oder meine App neu installiert

2FA-Codes werden aus einem Geheimnis erzeugt, das **in deiner Authenticator-App** gespeichert ist. Wenn du dein Handy wechselst oder die App deinstallierst, kommt dieses Geheimnis nur mit, wenn deine App deine Konten synchronisiert oder sichert: Andernfalls erzeugt die neue App keine gültigen Codes.

### Prüfe zuerst, ob deine App deine Konten wiederherstellen kann

Manche Authenticator-Apps speichern deine Konten online: zum Beispiel Google Authenticator, wenn es mit deinem Google-Konto verknüpft ist, Microsoft Authenticator mit seiner Cloud-Sicherung, Ente Auth oder 2FAS mit seiner Sicherung. Installiere dieselbe App auf deinem neuen Handy und melde dich an oder stelle die Sicherung wieder her. Wenn dein Gladys-Eintrag wieder erscheint, funktionieren seine Codes wie vorher: Du musst nichts weiter tun.

Andernfalls hängt es davon ab, ob du dein altes Handy noch hast.

### Du hast dein altes Handy noch

Das ist der einfachste Fall. Du hast zwei Möglichkeiten:

- **Deine Konten übertragen** – von der alten App in die neue, mit der Exportfunktion deiner Authenticator-App (die meisten bieten eine an, zum Beispiel „Konten übertragen“ in Google Authenticator).
- **Deine neue App bei Gladys Plus registrieren**: Melde dich auf [plus.gladysassistant.com](https://plus.gladysassistant.com) an, öffne **Einstellungen > Sicherheit** und klicke auf **„Meine Zwei-Faktor-App wechseln“**. Scanne den QR-Code mit deiner neuen App und gib zur Bestätigung einen Code deiner neuen App **und** einen Code deiner alten App ein. Nach der Bestätigung wird nur noch deine neue App akzeptiert.

Behalte dein altes Handy, bis der Wechsel bestätigt ist!

### Du hast dein altes Handy nicht mehr

Wenn deine App deinen Gladys-Eintrag nicht wiederherstellen konnte, kannst du keine 2FA-Codes mehr erzeugen, dich aber weiterhin mit einem **Wiederherstellungscode** anmelden (siehe unten). [Kontaktiere uns](#kontakt) danach, damit wir die 2FA deines Kontos zurücksetzen: Bei deiner nächsten Anmeldung kannst du dann deine neue App einrichten.

## Einen Wiederherstellungscode verwenden

Wiederherstellungscodes sind **Einmal-Codes**, mit denen du dich anmelden kannst, wenn du keinen Zugriff mehr auf deine Authenticator-App hast. Sie werden **nur ein einziges Mal** angezeigt: wenn du die 2FA aktivierst und jedes Mal, wenn du einen neuen Satz erzeugst.

Um einen zu verwenden, suche auf dem Bildschirm für den 2FA-Code nach **„Hast du den Zugriff auf deine Zwei-Faktor-App verloren?“**, klicke auf **„Einen Wiederherstellungscode verwenden“** und gib einen deiner Codes ein. Jeder Code kann nur einmal verwendet werden: Streiche ihn nach der Verwendung durch.

### Wiederherstellungscodes erzeugen (bevor du sie brauchst!)

Wenn du deine Wiederherstellungscodes nie gespeichert oder die meisten schon verwendet hast, erzeuge **jetzt** einen neuen Satz, solange du noch Zugriff auf deine Authenticator-App hast:

1. Melde dich auf [plus.gladysassistant.com](https://plus.gladysassistant.com) an.
2. Öffne **Einstellungen > Sicherheit**.
3. Klicke auf **„Wiederherstellungscodes erzeugen“** und gib zur Bestätigung einen Code aus deiner 2FA-App ein.
4. **Bewahre diese Codes an einem sicheren Ort auf**, außerhalb deines Handys: in einem Passwort-Manager oder ausgedruckt auf Papier. Sie werden nie wieder angezeigt.

Wenn du einen neuen Satz erzeugst, werden deine bisherigen Wiederherstellungscodes sofort ungültig.

## Nach dem Zurücksetzen der 2FA

Gladys Plus ist Ende-zu-Ende-verschlüsselt. Wenn deine 2FA zurückgesetzt wird, ändern sich deine Verschlüsselungsschlüssel, daher wird **dein Zugriff auf deine Gladys-Instanz aus Sicherheitsgründen automatisch widerrufen**: Deine Instanz akzeptiert nur die Schlüssel, die du bei dir zu Hause autorisiert hast.

Das ist normal: Auf plus.gladysassistant.com erscheint wieder die Seite „Ein letzter Schritt!“. Um deinen Zugriff zurückzubekommen, öffne deine Gladys-Instanz **lokal**, melde dich unter **Einstellungen > Gladys Plus** erneut an und autorisiere deinen Benutzer erneut im Abschnitt „Remote-Benutzer“. Das [Verbindungs-Tutorial](/de/docs/plus/connect-gladys-plus/) erklärt jeden Schritt mit Screenshots.

## Kontakt

Keine der Lösungen oben hat funktioniert? Schreib uns an [hello@gladysassistant.com](mailto:hello@gladysassistant.com) **von der E-Mail-Adresse deines Gladys-Plus-Kontos**, damit wir dein Konto zuordnen können, und sag uns, was du bereits versucht hast.

Du kannst deine Frage auch im [Community-Forum](https://community.gladysassistant.com/) stellen.
