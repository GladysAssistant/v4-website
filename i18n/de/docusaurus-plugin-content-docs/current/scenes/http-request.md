---
id: http-request
title: HTTP-Anfragen in einer Szene senden
description: "Sende HTTP-Anfragen in Szenen von Gladys Assistant, um externe APIs und Dienste aufzurufen, nicht unterstützte Geräte zu steuern oder eine IFTTT-Aktion auszulösen."
sidebar_label: HTTP-Anfrage
---

In Szenen ist es manchmal nützlich, eine externe API aufzurufen, um Geräte zu steuern, die nicht von Gladys Assistant verwaltet werden. Vielleicht möchtest du auch einfach einen externen Dienst aufrufen, ohne extra dafür eine eigene Integration zu entwickeln.

## Voraussetzungen

Du brauchst Gladys Assistant v4.0.3 (oder neuer), um diese Funktion nutzen zu können.

## Eine HTTP-Anfrage in einer Szene senden

In Szenen kannst du die Aktion „HTTP-Anfrage senden“ erstellen, mit der du eine HTTP-Anfrage vom Typ GET, POST, PATCH, PUT oder DELETE senden kannst.

Bei Bedarf kannst du Header hinzufügen, zum Beispiel für die Authentifizierung.

![Aktion „HTTP-Anfrage“ in Gladys-Szenen](../../../../../static/img/docs/en/scenes/http-request/gladys-scene-http-request-box.jpg)

## Konkretes Beispiel: Eine IFTTT-Aktion aus einer Szene in Gladys Assistant auslösen

Wahrscheinlich kennst du [IFTTT](https://ifttt.com/), einen Dienst, mit dem sich verschiedene Dienste miteinander verbinden lassen. Der kostenlose Tarif ist auf eine Handvoll Applets pro Konto begrenzt – das reicht aber völlig, wenn du IFTTT nur nutzen möchtest, um eine fehlende Funktion in Gladys auszugleichen.

In diesem Beispiel nutzen wir IFTTT, um bei jedem Aufruf einer Szene einen Wert in einem Google Sheet zu speichern.

Ziel ist es, ein Ereignis „Haus verlassen“ an IFTTT zu senden und es in einem Google Sheet protokollieren zu lassen. So können wir nachverfolgen, wann wir das Haus verlassen.

Das ist natürlich nur ein Beispiel, das du an deine Bedürfnisse anpassen kannst 😁

### Maker Webhooks in IFTTT konfigurieren

Gehe in IFTTT auf [https://ifttt.com/maker_webhooks](https://ifttt.com/maker_webhooks), um die Maker Webhooks zu konfigurieren.

Folge dem Tutorial von IFTTT, um die Maker Webhooks einzurichten.

Nach der Konfiguration der Webhooks solltest du auf einer Seite wie dieser landen:

![IFTTT Maker Webhook](../../../../../static/img/docs/en/scenes/http-request/iftt-configure-maker-webhook.jpg)

Ersetze `{event}` durch den Namen deines Ereignisses, in meinem Beispiel „left_home“, und kopiere dann die URL.

Bewahre die URL für später auf.

### Den Google-Sheets-Dienst in IFTTT konfigurieren

Suche auf der IFTTT-Seite „Explore“ nach dem Dienst „Google Sheets“ und verbinde dein Google-Konto. Es wird für den Rest des Tutorials benötigt.

### Ein Applet erstellen

Suche nach dem Dienst „Webhooks“, den du gerade konfiguriert hast.

![Applet suchen](../../../../../static/img/docs/en/scenes/http-request/ifttt-applet-1.jpg)

Wähle „Receive a web request“:

![Eine Webhook-Anfrage empfangen](../../../../../static/img/docs/en/scenes/http-request/ifttt-applet-2.jpg)

Gib den Namen des Ereignisses ein, den du im vorherigen Schritt festgelegt hast, hier „left_home“:

![Namen des Ereignisses eingeben](../../../../../static/img/docs/en/scenes/http-request/ifttt-applet-3.jpg)

Wähle aus, wo IFTTT die Daten speichern soll (in welcher Tabelle in deinem Google Drive):

![Google-Drive-Ordner zum Speichern der Daten auswählen](../../../../../static/img/docs/en/scenes/http-request/ifttt-applet-4.jpg)

Klicke auf „Save“.

![IFTTT-Applet abschließen](../../../../../static/img/docs/en/scenes/http-request/ifttt-applet-5.jpg)

Klicke anschließend auf „Finish“.

### In Gladys eine Szene erstellen

Erstelle in Gladys eine neue Szene und füge ihr die Aktion „HTTP-Anfrage senden“ hinzu.

Wähle „Methode: POST“ und gib als URL die URL des IFTTT-Webhooks ein, den du zuvor konfiguriert hast.

![Aktion „HTTP-Anfrage“ erstellen](../../../../../static/img/docs/en/scenes/http-request/gladys-scene-http-request-box.jpg)

Speichere die Szene und starte sie.

Wenn du jetzt in dein Google Drive schaust, solltest du im Stammverzeichnis einen Ordner „IFTTT“ finden, der einen Ordner „MakerWebhook“ und in diesem Fall einen Ordner „let_home“ enthält.

Darin findest du eine Tabelle mit einer Zeile, die festhält, wann du das Haus verlassen hast:

![Ergebnis in Google Sheets](../../../../../static/img/docs/en/scenes/http-request/google-sheet-result.jpg)

## Fazit

Das war nur ein Beispiel. Mit dieser Aktion kannst du in Szenen unzählige Dinge umsetzen:

- Die API einer anderen Smart-Home-Zentrale aufrufen
- IFTTT aufrufen, um beliebige APIs zu steuern: Musik über Sonos? Dein Telefon klingeln lassen? Eine E-Mail senden? Einen Tweet absetzen?
- Die API von [Zapier](https://zapier.com/) aufrufen, um beliebige APIs anzusprechen (Gmail, Kalender, Trello und Hunderte weitere)

Kurz gesagt: Die Möglichkeiten sind grenzenlos.

## Die Antwort eines HTTP-Aufrufs in einer Szene verwenden

Du kannst die Antwort einer HTTP-Anfrage auch in Szenen weiterverwenden.

Hier ein Beispiel, das die Coinbase-API abfragt, um den Bitcoin-Kurs zu erhalten, und ihn per Telegram an den Benutzer sendet:

<div class="videoContainer">
<video  width="100%" controls autoplay loop muted>
<source src="/img/docs/en/scenes/http-request/bitcoin-price.mp4" type="video/mp4" />
  Dein Browser unterstützt das Video-Tag nicht.
</video>
</div>

Den Wert kannst du mit einer Aktion „Nur fortfahren, wenn“ vergleichen:

![Nur fortfahren, wenn](../../../../../static/img/docs/en/scenes/http-request/continue-only-if.png)
