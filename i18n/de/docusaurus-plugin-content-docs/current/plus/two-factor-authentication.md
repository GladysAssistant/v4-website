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

Wenn deine App deinen Gladys-Eintrag nicht wiederherstellen konnte, kannst du keine 2FA-Codes mehr erzeugen. Du kannst deine App aber trotzdem selbst ersetzen, mit deinen **Wiederherstellungscodes**:

1. Melde dich auf [plus.gladysassistant.com](https://plus.gladysassistant.com) mit einem Wiederherstellungscode an (siehe [Einen Wiederherstellungscode verwenden](#einen-wiederherstellungscode-verwenden) weiter unten).
2. Öffne **Einstellungen > Sicherheit**, Karte **„Deine Zwei-Faktor-App“**, und klicke auf **„Meine Zwei-Faktor-App wechseln“**.
3. Scanne den QR-Code mit deiner neuen App und gib den Code ein, den sie anzeigt.
4. Klicke beim Code der aktuellen App auf **„Deine aktuelle App verloren? Verwende stattdessen einen Wiederherstellungscode.“** und gib dann **einen weiteren** deiner Wiederherstellungscodes ein.
5. Klicke auf **„Meine Zwei-Faktor-App ersetzen“**.

Du brauchst also zwei Wiederherstellungscodes: einen für die Anmeldung, einen für den Wechsel der App. Der zweite wird nur verbraucht, wenn der Wechsel gelingt: Wird der Code deiner neuen App abgelehnt, kannst du es erneut versuchen, ohne einen Code zu verlieren. Deine übrigen Wiederherstellungscodes bleiben gültig, aber denk daran, [einen neuen Satz zu erzeugen](#wiederherstellungscodes-erzeugen-bevor-du-sie-brauchst), sobald deine neue App eingerichtet ist.

Keinen Wiederherstellungscode mehr, oder nur noch einen? Siehe [Ich habe keine Wiederherstellungscodes mehr](#no-recovery-codes-left).

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

## Ich habe keine Wiederherstellungscodes mehr {#no-recovery-codes-left}

Du hast sowohl deine Authenticator-App als auch deine Wiederherstellungscodes verloren? Seit Gladys 5.3.1 kommst du wieder in dein Konto, ohne dem Support zu schreiben. Wähle die Lösung, die zu deiner Situation passt:

- **Deine Gladys steht bei dir zu Hause und ist mit Gladys Plus verbunden**: [Erzeuge neue Wiederherstellungscodes über deine Gladys](#recovery-codes-from-gladys).
- **Eine andere Person deines Gladys-Plus-Kontos ist Administrator** und hat noch Zugriff auf ihre 2FA-App: Sie kann [deine Zwei-Faktor-Authentifizierung zurücksetzen](#reset-by-another-admin).
- **Keine Gladys ist mit deinem Konto verbunden** (Gladys ausgeschaltet, defekt, verloren oder nie installiert): [Setze deine Zwei-Faktor-Authentifizierung per E-Mail zurück](#reset-by-email).

### Neue Codes über deine Gladys erzeugen {#recovery-codes-from-gladys}

Deine Gladys, die physisch bei dir zu Hause steht, ist bereits ein vertrauenswürdiges Gerät deines Gladys-Plus-Kontos: Sie kann deine 2FA-App vertreten, gerade lange genug, um dir einen neuen Satz Wiederherstellungscodes zu geben.

1. Öffne deine Gladys **lokal** aus deinem Heimnetz, über ihre lokale Adresse (zum Beispiel ihre IP-Adresse). Diese Aktion ist auf plus.gladysassistant.com nicht verfügbar: Es geht ja gerade darum, zu Hause zu sein.
2. Melde dich mit einem **Administrator**-Konto deiner Gladys an.
3. Öffne **Einstellungen > Benutzer**. Klicke unter deinem Benutzer im Abschnitt **„Fernzugriff · Gladys Plus“** auf **„Wiederherstellungscodes“**.
4. Gib **dein Gladys-Passwort** ein (das deiner lokalen Instanz, nicht dein Gladys-Plus-Passwort) und klicke auf **„Erzeugen“**.
5. Gladys zeigt **10 neue Wiederherstellungscodes, nur ein einziges Mal** an: Kopiere oder lade sie herunter und bewahre sie an einem sicheren Ort auf. Auf deiner Gladys wird nichts gespeichert.

Deine bisherigen Wiederherstellungscodes funktionieren sofort nicht mehr, und Gladys Plus benachrichtigt dich per E-Mail. Für die Anmeldung brauchst du weiterhin dein Gladys-Plus-Passwort: Diese Codes ersetzen nur deine 2FA-App. Melde dich danach auf [plus.gladysassistant.com](https://plus.gladysassistant.com) mit einem dieser Codes an und ersetze deine 2FA-App wie unter [Du hast dein altes Handy nicht mehr](#du-hast-dein-altes-handy-nicht-mehr) beschrieben.

Gut zu wissen:

- Die Schaltfläche **„Wiederherstellungscodes“** erscheint nur, wenn deine Gladys dein Gladys-Plus-Konto bereits kennt, also wenn die Fingerabdrücke deiner Verschlüsselungsschlüssel unter deinem Benutzer angezeigt werden.
- Du bist kein Administrator deiner Gladys? Frag die Person, die Gladys bei dir zu Hause verwaltet: Sie kann diese Codes für dich erzeugen, indem sie **ihr eigenes** Gladys-Passwort eingibt, und sie dir dann weitergeben.

### Deine 2FA von einem anderen Administrator zurücksetzen lassen {#reset-by-another-admin}

Wenn dein Gladys-Plus-Konto einen weiteren Administrator hat, der noch Zugriff auf seine 2FA-App hat, kann er deine Zwei-Faktor-Authentifizierung über Gladys Plus zurücksetzen:

1. Er meldet sich auf [plus.gladysassistant.com](https://plus.gladysassistant.com) an und öffnet **Einstellungen > Benutzer**.
2. Unter deinem Benutzer klickt er im Abschnitt **„Fernzugriff · Gladys Plus“** auf **„Zwei-Faktor-Authentifizierung zurücksetzen“**.
3. Er gibt den Code **seiner eigenen** 2FA-App ein und klickt auf **„Zurücksetzen“**.

Du wirst per E-Mail benachrichtigt. Melde dich danach mit deinem Passwort an: Gladys Plus fordert dich sofort auf, eine neue Authenticator-App einzurichten und dann neue Wiederherstellungscodes zu speichern. Deine Verschlüsselungsschlüssel und dein Zugriff auf deine Gladys ändern sich nicht.

Ein Administrator kann seine eigene Zwei-Faktor-Authentifizierung nicht auf diese Weise zurücksetzen.

### Deine 2FA per E-Mail zurücksetzen, wenn keine Gladys verbunden ist {#reset-by-email}

Wenn keine Gladys mit deinem Gladys-Plus-Konto verbunden ist (nie installiert, defekte oder verlorene Hardware, längerer Stromausfall ...), kannst du deine Zwei-Faktor-Authentifizierung sofort per E-Mail zurücksetzen:

1. Melde dich auf [plus.gladysassistant.com](https://plus.gladysassistant.com) mit deiner E-Mail-Adresse und deinem Passwort an.
2. Klicke auf dem Bildschirm für den 2FA-Code unter **„Hast du den Zugriff auf deine Zwei-Faktor-App verloren?“** auf **„Keine Gladys verbunden? Setze deine Zwei-Faktor-Authentifizierung per E-Mail zurück.“**
3. Öffne die E-Mail, die du erhältst, und klicke auf den Link. Er funktioniert nur **ein einziges Mal** und läuft nach **einer Stunde** ab (du kannst nur einen pro Minute anfordern: Schau auch in deinem Spam-Ordner nach).
4. Klicke auf der Seite, die sich öffnet, auf **„Meine Zwei-Faktor-Authentifizierung zurücksetzen“**.
5. Melde dich mit deinem Passwort an: Gladys Plus fordert dich auf, eine neue Authenticator-App einzurichten und dann neue Wiederherstellungscodes zu speichern.

Deine alte App und deine alten Wiederherstellungscodes funktionieren nicht mehr, und du wirst per E-Mail benachrichtigt, sobald das Zurücksetzen erledigt ist. Deine Verschlüsselungsschlüssel ändern sich nicht.

**Du hast auch dein Passwort vergessen?** Beginne mit „Ich habe mein Passwort vergessen“: Die Seite zum Zurücksetzen des Passworts, die du über die erhaltene E-Mail öffnest, bietet denselben Link unter den Zwei-Faktor-Feldern an. Sobald deine 2FA zurückgesetzt ist, kehre auf diese Seite zurück, um dein neues Passwort festzulegen: Der Link zum Zurücksetzen des Passworts bleibt zwei Stunden lang gültig.

**Deine Gladys ist verbunden?** Dann wird das Zurücksetzen per E-Mail abgelehnt, und zwar absichtlich: Deine Gladys bei dir zu Hause ist der letzte Ausweg für dein Konto, und ein Administrator deiner Gladys kann stattdessen [neue Wiederherstellungscodes erzeugen](#recovery-codes-from-gladys). Diese Prüfung erfolgt bei der Anforderung des Links und beim Klick darauf: Verbindet sich deine Gladys dazwischen wieder, wird der Link abgelehnt, bleibt aber gültig, solange keine Gladys verbunden ist.

## Nach dem Zurücksetzen des Passworts oder der 2FA

**Das Zurücksetzen deiner Zwei-Faktor-Authentifizierung** (durch einen Administrator oder per E-Mail) ändert weder deine Verschlüsselungsschlüssel noch deinen Zugriff auf deine Gladys: Sobald deine neue App eingerichtet ist, funktioniert alles wie vorher.

**Das Zurücksetzen deines Gladys-Plus-Passworts** („Ich habe mein Passwort vergessen“) erzeugt dagegen neue Verschlüsselungsschlüssel. Gladys Plus ist Ende-zu-Ende-verschlüsselt, und deine Gladys akzeptiert nur die Schlüssel, die du bei dir zu Hause autorisiert hast: **Dein Fernzugriff wird daher aus Sicherheitsgründen automatisch widerrufen**. Das ist normal, nichts ist kaputt: Auf plus.gladysassistant.com erklärt dir eine Seite, was zu tun ist.

Um deinen Zugriff zurückzubekommen, öffnet ein Administrator deiner Gladys deine Instanz **lokal** und geht zu **Einstellungen > Benutzer**. Unter deinem Benutzer prüft er im Abschnitt **„Fernzugriff · Gladys Plus“**, ob die Fingerabdrücke deiner neuen Schlüssel mit denen auf deiner Gladys-Plus-Seite übereinstimmen, und aktiviert dann den Schalter **„Autorisiert“**.

## Kontakt

Keine der Lösungen oben hat funktioniert? Schreib uns an [hello@gladysassistant.com](mailto:hello@gladysassistant.com) **von der E-Mail-Adresse deines Gladys-Plus-Kontos**, damit wir dein Konto zuordnen können, und sag uns, was du bereits versucht hast.

Du kannst deine Frage auch im [Community-Forum](https://community.gladysassistant.com/) stellen.
