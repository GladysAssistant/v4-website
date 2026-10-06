---
id: lan-manager
title: Anwesenheit per Scan deines WLAN-Netzwerks erkennen
description: "Erkenne in Gladys Assistant, ob du zu Hause oder unterwegs bist, indem dein WLAN-Netzwerk nach deinem Smartphone, Tablet oder Computer durchsucht wird."
sidebar_label: Lan-Manager
---

Mit der LAN-Manager-Integration durchsucht Gladys dein Netzwerk in regelmäßigen Abständen und erkennt anhand deines Smartphones, Tablets oder Computers, ob du zu Hause bist oder nicht.

:::note
Diese Methode kann zu Fehlalarmen führen, wenn dein Smartphone nicht dauerhaft mit dem WLAN verbunden ist (zum Beispiel, wenn es in den Ruhemodus wechselt).
:::

:::warning
Diese Methode funktioniert nicht mit iPhones.

Für das iPhone empfehle ich, mit der App „Kurzbefehle“ eine Anfrage an Gladys zu senden, wenn du das Haus verlässt.
:::

## Dein Smartphone hinzufügen

Öffne die Integration „LAN Manager“, klicke auf „LAN-Erkennung“ und wähle „Netzwerksuche“.

Lege das Gerät anschließend mit einem Klick auf „Speichern“ an.

Falls die Suche keine Ergebnisse liefert, prüfe Folgendes:

- Deine Gladys-Installation befindet sich im richtigen Netzwerk
- Dein Gladys-Container läuft im Modus „network=host“. Das ist der Fall, wenn du Gladys mit dem offiziellen `docker run`-Befehl gestartet hast
- Der zu scannende CIDR-Bereich ist korrekt (er lässt sich in den Einstellungen der Integration anpassen)

## Anwesenheit in Szenen verwalten

### Eine Szene „Nach Hause kommen“

Jetzt erstellen wir eine `Szene`, die einen Benutzer als „zu Hause anwesend“ markiert, sobald dein Smartphone erkannt wird.

Öffne den Tab „Szenen“ und erstelle eine Szene wie diese:

![Szene „Nach Hause kommen“](../../../../../static/img/docs/en/configuration/bluetooth/back-at-home-scene.png)

Die Szene ist ganz einfach.

WENN „Smartphone wird erkannt“, DANN „Benutzer ‚Tony‘ als zu Hause anwesend markieren“.

### Eine Szene „Haus verlassen“

Um zu erkennen, dass ein Benutzer das Haus verlassen hat, empfehlen wir eine regelmäßig ausgeführte Szene, die prüft, ob dein Smartphone kürzlich zu Hause erkannt wurde.

Erkennt Gladys das Gerät, passiert nichts. Andernfalls markiert Gladys den Benutzer als abwesend.

Die Szene sollte so aussehen:

![Szene „Haus verlassen“](../../../../../static/img/docs/en/configuration/bluetooth/left-home-scene.png)

Du kannst mit den Einstellungen experimentieren, bis sie zu deinem Zuhause passen. Wenn dir 10 Minuten zu kurz sind, um als abwesend zu gelten, kannst du den Wert auf 20 Minuten erhöhen und so Fehlalarme vermeiden 😀

## Anwesenheit im Dashboard anzeigen

Du kannst die Anwesenheit ausgewählter Benutzer im Dashboard anzeigen. Nutze dafür das Widget „Anwesende Benutzer“:

![Anwesenheit im Dashboard](../../../../../static/img/docs/en/configuration/bluetooth/user-presence-dashboard.png)
