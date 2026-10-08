---
title: "Gladys Assistant 5.1: Integrationen können eigene Widgets und Szenen-Bausteine hinzufügen"
description: "Eine Community-Integration kann jetzt eigene Widgets auf deinem Dashboard platzieren und deinen Szenen eigene Auslöser und Aktionen hinzufügen. Außerdem in diesem Release: eine spanische Übersetzung, eine E-Mail-Warnung, wenn dein Gladys ausfällt, CO₂-Tracking des Stromnetzes und Diagnosedaten für Rauchmelder."
authors: pierregilles
image: /img/presentation/gladys-assistant-5-1-en.jpg
slug: gladys-5-1-integration-widgets-and-scenes
---

Hallo zusammen!

Heute gibt es eine neue Gladys-Version, die 5.1 🎉

Version 5 war ein großes Redesign der Oberfläche. Diese hier dreht sich vor allem um Integrationen. Bisher konnte eine Community-Integration genau eine Sache: Geräte veröffentlichen. Jetzt kann sie eigene Widgets auf deinem Dashboard platzieren und deinen Szenen eigene Auslöser und Aktionen hinzufügen.

![Vier Widgets von Community-Integrationen auf einem Gladys-Dashboard](../../../static/img/articles/gladys-assistant-5-1/01-integration-widgets-en.webp)

{/* truncate */}

## Dashboard-Widgets, die von Integrationen bereitgestellt werden

Kurze Erinnerung: Seit 4.84 kann jeder eine Integration in ein kleines Docker-Image packen, es auf GitHub veröffentlichen, und schon taucht sie im Katalog jeder Gladys-Instanz auf. Heute sind wir bei 81 Integrationen, fast alle von der Community geschrieben.

Das Problem: Viele nützliche Dinge sind keine Geräte. Eine Prognose der Solarproduktion, die Reinigungskarte eines Saugroboters, der günstigste Diesel in deiner Nähe, die heutige Pollenbelastung, der Ladeplan deines Autos für heute Nacht: Nichts davon passt in „eine Temperatur und ein Schalter“, und genau das alles willst du auf einem Dashboard sehen.

Deshalb kann eine Integration jetzt ihre eigenen Widgets deklarieren, und diese landen im Dashboard-Editor direkt neben den eingebauten:

![Der Abschnitt „Integrations-Widgets“ in der Widget-Auswahl](../../../static/img/articles/gladys-assistant-5-1/02-widget-picker-en.webp)

Sie erscheinen in der Widget-Auswahl des Dashboard-Editors in einem eigenen Abschnitt, zusammen mit dem Namen der Integration, die sie bereitstellt. Du fügst sie hinzu wie jedes andere Widget. Und wenn es Einstellungen gibt (welcher Saugroboter, welche Region, welcher Zeitraum), füllst du sie direkt dort aus, in einem Formular, das die Integration beschreibt und Gladys generiert.

### Die Integration sagt, was angezeigt wird, Gladys entscheidet, wie

Das ist der wichtigste Teil dieses Features, und es war eine bewusste Entscheidung, nicht etwas, das sich zufällig so ergeben hat.

Keine Drittanbieter-Integration schleust HTML in dein Gladys ein. Kein iframe, kein Script, kein CSS, keine eigenen Farben oder Größen. Die Integration schickt eine Beschreibung ihres Inhalts in einem kleinen Vokabular: ein Titel, Wert-Kacheln, eine Anzeige, eine Liste von Zuständen, ein Diagramm, ein Bilderraster, Buttons. Das Rendering übernimmt Gladys.

Dadurch bekommt jedes Widget, selbst eines von jemandem, von dem du noch nie gehört hast, automatisch das Horizon-Theme, den Dark Mode, das mobile Layout, deine Sprache und deine Zeitzone. Und es funktioniert weiter, wenn sich die Oberfläche ändert. Es ist das Widget-Modell von iOS und Android.

Es gibt außerdem ein Inhaltsbudget, um überladene Karten zu vermeiden: maximal 8 Komponenten, eine einzige Hauptkomponente (ein Diagramm oder eine Liste oder ein Bild, nicht zwei), maximal 6 Wert-Kacheln, maximal 4 Buttons, begrenzte Listen und kurze Texte. Und Gladys bestimmt die Anzeigereihenfolge: Kopfzeile, Kacheln, Hauptkomponente, Zustände, Buttons. Zwei Widgets, die einen Wert, eine Kurve und zwei Buttons anzeigen, sehen dadurch gleich aus.

Ein paar technische Details:

- Der Inhalt wird live berechnet, nicht im Manifest eingefroren. Ein Saugroboter, der gerade saugt, kann ein anderes Layout liefern als einer in seiner Ladestation.
- Nichts gilt als vertrauenswürdig. Jeder Payload wird geprüft und begrenzt, bevor er die Oberfläche erreicht: nur bekannte Komponenten, längenbegrenzte Texte und Listen, endliche Zahlen, gültige Datumsangaben, https-Links und Bilder, die von deinem Gladys ausgeliefert werden, statt dass dein Browser sie bei einem Drittanbieter abruft.
- Ein Button kann etwas auslösen: die Integration aufrufen oder einen Wert in eine ihrer Gerätefunktionen schreiben. Das Ergebnis wird in der Karte angezeigt.
- Ein Widget kann eine Kurve aus deinem Gladys-Verlauf zeichnen, oder aus Daten, die Gladys nicht hat (eine Prognose, ein Ladeplan, die Preise von morgen), indem es die Punkte direkt mitschickt, inklusive Anmerkungen und einer „Jetzt“-Markierung.
- Eine Integration ganz ohne Geräte, etwa ein Kraftstoffpreis-Index oder ein Feed mit Kinostarts, hat dank des neuen Typs `provider` endlich ihren Platz.

Ein Hinweis zu den Screenshots oben: Sie sind Beispiele dafür, was mit dem Vokabular möglich ist. Der Mechanismus ist ab heute verfügbar, die Integrationen, die ihn nutzen, müssen aber erst noch geschrieben werden.

## Szenen-Auslöser und -Aktionen, die von Integrationen bereitgestellt werden

Auf der Szenen-Seite gab es genau dasselbe Problem. Bisher war jeder Auslöser und jede Aktion im Szenen-Editor fest in Gladys einprogrammiert. Eine externe Integration hatte keine Möglichkeit, eigene hinzuzufügen, und die zwei generischen Schnittstellen, die sie hatte, reichten nicht aus:

- Eine Gerätefunktion ist ein Zustand. Eine Temperatur, ein Schalter, eine Anwesenheit: Das funktioniert sehr gut mit dem Auslöser „Zustandsänderung“. Aber ein in der Einfahrt erkanntes Kennzeichen, eine Türklingel mit Schnappschuss, ein gescannter NFC-Tag oder ein verstandener Sprachbefehl sind einmalige Ereignisse mit Daten. Wenn man sie in eine Funktion verwandelt, gehen die Daten verloren, es gerät durcheinander, wenn zwei Ereignisse direkt hintereinander kommen, und es müllt deinen Verlauf zu.
- Einen Wert schreiben ist nicht dasselbe wie eine Operation ausführen. „Mach einen Schnappschuss und gib mir das Bild“, „sauge diese drei Räume“, „sag das auf jenem Lautsprecher an“: Da gibt es Parameter und ein Ergebnis.

Deshalb kann eine Integration jetzt ihre Auslöser und Aktionen in ihrem Manifest deklarieren, und sie erscheinen im Szenen-Editor wie alles andere.

![Eine Szene, die von einer Integration ausgelöst wird, mit einer Integrations-Aktion in ihren Schritten](../../../static/img/articles/gladys-assistant-5-1/03-scene-integration-en.webp)

Die Karte wird von Gladys aus der Deklaration erzeugt. Die Felder werden zu einem Formular, ein leer gelassenes Feld passt auf jeden Wert, und die Daten, die das Ereignis mitbringt, werden zu Szenen-Variablen, die du in den folgenden Schritten wiederverwenden kannst. Der Konfidenzwert im Screenshot kommt direkt vom Auslöser.

Beim Design ist es Gladys, das den Abgleich übernimmt: Die Integration schickt ein typisiertes Ereignis mit seinen Daten, und Gladys vergleicht es mit den Auslösern, die du konfiguriert hast. Die Integration erfährt nie, welche Szenen existieren. Es gibt also nichts, was nach außen dringen könnte, nichts, was beim erneuten Verbinden synchronisiert werden müsste, und deine Konfiguration bleibt in Gladys. Eine Aktion wird genau einmal gesendet, und ein Timeout lässt nur diese eine Aktion fehlschlagen.

Ein netter Nebeneffekt: Eine Szene kann jetzt ein Ereignis aus einer Integration, eine Aktion aus einer anderen und die üblichen Gladys-Schritte dazwischen kombinieren.

## „Nur Gladys-Konversation“

Das haben sich viele von euch gewünscht. Wenn eine Szene dir eine Nachricht schickt, geht sie standardmäßig an alle Messaging-Dienste, die du eingerichtet hast (Telegram, SMS ...).

![Die Zustellungsauswahl der Nachrichten-Aktion, eingestellt auf „Nur Gladys-Konversation“](../../../static/img/articles/gladys-assistant-5-1/04-conversation-only-en.webp)

Jetzt kannst du wählen. Mit „Nur Gladys-Konversation“ bleibt die Nachricht in Gladys und nirgendwo sonst. Das ist praktisch, wenn du später Telegram einrichtest und nicht willst, dass deine alten Szenen plötzlich Benachrichtigungen auf dein Handy schicken. Die Option funktioniert auch, wenn du überhaupt keinen Messaging-Kanal eingerichtet hast, und es gibt sie auch bei der Aktion „Die KI fragen“.

Ebenfalls bei den Szenen: Von der KI erstellte Szenen werden jetzt mit „KI“ getaggt, sodass du sie leicht wiederfindest. Und das Filtern nach Tag sucht jetzt nach dem exakten Tag, statt alles zu behalten, was das Wort enthält.

## Gladys spricht Spanisch

![Die Gladys-Oberfläche auf Spanisch](../../../static/img/articles/gladys-assistant-5-1/05-spanish.webp)

Gladys ist jetzt ins Spanische übersetzt, die vierte Sprache nach Englisch, Französisch und Deutsch. Die gesamte Oberfläche wurde übersetzt: Dashboard, Geräte, Szenen-Editor, Einstellungen, Integrationsseiten und sogar die Suchbegriffe für Icons.

Ein großes Dankeschön an Nestor Alonso Torres für diesen Beitrag. Wenn du Gladys in deiner Sprache haben möchtest: Die Übersetzungsdateien sind einfache JSON-Dateien im Repository, leg los!

## Werde gewarnt, wenn dein Gladys ausfällt

![Die neue Gladys-Plus-Einstellung: per E-Mail benachrichtigt werden, wenn deine Instanz offline geht](../../../static/img/articles/gladys-assistant-5-1/06-offline-alert-en.webp)

Gladys Plus sieht, wann sich deine Instanz verbindet und trennt. Jetzt kann es dir eine E-Mail schicken, wenn sie länger als eine von dir gewählte Zeitspanne nicht erreichbar war (von 10 Minuten bis zu einem Tag), und dir erneut schreiben, sobald sie wieder da ist.

Stromausfall, Internetrouter ausgefallen, kaputte SD-Karte, ein schiefgelaufenes Docker-Update: Du erfährst es noch am selben Tag, statt es abends zu bemerken, wenn du nach Hause kommst.

Die Einstellung gehört zu deinem Gladys-Plus-Konto, du änderst sie also in Gladys Plus, und Gladys gibt dir einen direkten Link zur richtigen Seite.

## Eine neue Gerätekategorie: CO₂-Intensität des Stromnetzes

![Die CO₂-Intensität des Stromnetzes auf einem Energie-Dashboard](../../../static/img/articles/gladys-assistant-5-1/08-grid-carbon-en.webp)

Gladys bekommt eine Kategorie „Netz-CO₂-Sensor“ mit drei Werten: die CO₂-Intensität deines Stromnetzes in gCO₂eq/kWh, der Anteil an CO₂-freiem Strom und der Anteil an erneuerbaren Energien. Jeder Wert hat seine Einheit, seinen Verlauf und seine Diagramme.

Noch wichtiger: Eine Szene kann diese Werte lesen. „Starte die Waschmaschine, wenn das Netz sauber ist“ wird damit möglich, und die Integrationen, die diese Zahlen für dein Land bereitstellen, haben endlich einen Ort, an dem sie sie ablegen können.

## Rauchmelder liefern mehr Informationen

![Ein Küchen-Widget mit den Diagnosedaten eines Rauchmelders](../../../static/img/articles/gladys-assistant-5-1/07-smoke-detector-en.webp)

Zigbee-Rauchmelder senden viel mehr als nur den Alarm selbst, und Gladys kann das jetzt auslesen: wie stark die Messkammer verschmutzt ist (ein verschmutzter Melder erkennt gar nichts mehr, er sagt dir also, wann du ihn reinigen oder austauschen solltest), ob sich der Melder selbst stummgeschaltet hat, und einen Befehl, um den Alarm so lange stummzuschalten, wie das Gerät es erlaubt.

Letzteres bleibt bewusst außerhalb der Kategorie Schalter. Einen Feueralarm stummzuschalten darf nicht über ein „Alles ausschalten“ in einer Szene oder über einen Sprachassistenten möglich sein.

## Geräte, Protokolle, System

- **Matter**: matter.js wurde auf 0.17.9 aktualisiert, was die Fehler `Node ID X is already commissioned` behebt, die manche Kopplungen blockiert haben.
- **HomeKit**: Klimaanlagen werden als HeaterCooler bereitgestellt. Wenn du Siri bittest, eine einzuschalten, behält sie jetzt den Modus, in dem sie vorher war.
- **Zigbee2MQTT**: Die dreiphasigen ZLinky_TIC-Labels werden unterstützt (`SINSTS1`, `SMAXSN*`, `IINST1`, `IMAX1`), `probe_temperature` bekommt einen eigenen Temperaturtyp, statt den Haupttyp zu überschreiben, und der Container läuft jetzt in der Zeitzone deiner Instanz. Seine Logs und Zeitpläne liegen nicht mehr ein paar Stunden daneben.
- **Dashboard**: Der Schieberegler und das Zahlenfeld beachten die von der Gerätefunktion deklarierte Schrittweite. Ein Sollwert, der sich in 0,5er-Schritten bewegt, springt nicht mehr um 1.
- **Sonos**: Die eingebaute Integration hat jetzt ein „Veraltet“-Badge und einen Button zur Migration auf die Community-Integration, die mehr kann. Das Migrationsfenster weist darauf hin, was sich bei Wiedergabe-Benachrichtigungen ändert.
- **Kalender**: Eine Regression wurde behoben, bei der das Laden des dayjs-Zeitzonen-Plugins den Kalender kaputt gemacht hat.
- **Gladys Plus**: Die Zahlungssperre, in der einige Konten wegen des 402-Bugs beim Lite-Tarif festhingen, wird jetzt automatisch aufgehoben. Und jedes Release wird direkt aus dem Release-Workflow in Gladys Plus veröffentlicht.
- **Sicherheit**: Eine Schwachstelle beim Zurücksetzen des Passworts wurde behoben, bei der ein vom Angreifer gewählter Origin den per E-Mail verschickten Link manipulieren konnte.

Bei der Dokumentation: Die API-Routen, die in der generierten apidoc fehlten, sind jetzt veröffentlicht, und die Spezifikation für externe Integrationen ist in eine Datei pro Thema aufgeteilt.

## Und alles, was 5.0.x schon behoben hat

Zwischen 5.0 und heute sind vier Patch-Releases erschienen (5.0.1 bis 5.0.4) mit rund fünfzig Fixes, fast alle aufgrund eures Feedbacks zur neuen Oberfläche: Tablets im Hochformat, lange Gerätenamen, das mobile Dock, Wetter-Icons, der ConBee III, die Neunummerierung von Szenen-Variablen, Dropdown-Menüs, die unten aus dem Bildschirm herausragten, ruckelndes Scrollen im Dashboard.

Das macht fast 70 Pull Requests seit Version 5.0, davon 23 in diesem Release.

## Danke an die Mitwirkenden

Danke an [@cicoub13](https://github.com/cicoub13), [@William-De71](https://github.com/William-De71), [@vincentBesseau](https://github.com/vincentBesseau) und Nestor Alonso Torres für den Code in diesem Release, und an alle, die externe Integrationen veröffentlichen. Der Katalog steht bei 81 und wächst weiter.

Wenn du deine eigene schreiben möchtest, [findest du hier den Entwickler-Leitfaden](/de/docs/dev/external-integrations/). Er deckt jetzt auch Widgets und Szenen-Deklarationen ab, mit den Manifest-Feldern, dem Inhaltsvokabular, den Limits und den SDK-Methoden.

Wir sehen uns im [Forum](https://community.gladysassistant.com/), wenn du über dieses Release sprechen möchtest :)

## Wie aktualisiere ich?

Wie immer aktualisiert sich Gladys innerhalb von 24 Stunden automatisch, wenn du Watchtower verwendest. Ansonsten kannst du das mit einem Klick in den Einstellungen erledigen.

Denk daran, Telegram einzurichten, um auf deinem Handy benachrichtigt zu werden, wenn Gladys aktualisiert wird!

Das [vollständige CHANGELOG von 5.1.0](https://github.com/GladysAssistant/Gladys/releases/tag/v5.1.0) findest du auf GitHub.
