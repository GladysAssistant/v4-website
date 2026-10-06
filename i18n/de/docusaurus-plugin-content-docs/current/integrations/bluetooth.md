---
id: bluetooth
title: Anwesenheit per Bluetooth-Erkennung verwalten
description: "Erkenne Anwesenheit zu Hause per Bluetooth in Gladys Assistant: Nutze einen Bluetooth-Schlüsselanhänger, um automatisch zu wissen, ob du zu Hause oder unterwegs bist."
sidebar_label: Bluetooth
---

Die Bluetooth-Integration ist nützlich für die Anwesenheitserkennung.

Es gibt Bluetooth-Schlüsselanhänger wie den [NUT-Schlüsselanhänger](https://www.amazon.com/gp/product/B08K3124JR/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gladproj-20&creative=9325&linkCode=as2&creativeASIN=B08K3124JR&linkId=5688d18164e92becabd17c6d49fdd778), die ihre Anwesenheit dauerhaft per Bluetooth aussenden.

Mit einem solchen Anhänger kann Gladys erkennen, ob du zu Hause bist (oder nicht), indem es einfach nach Bluetooth-Geräten in der Nähe sucht.

:::note
Dieser Trick funktioniert nicht mit allen Bluetooth-Geräten. Er funktioniert nur mit Bluetooth-Geräten, die (1) ihr Signal kontinuierlich aussenden und (2) ihre Bluetooth-Adresse nicht verschleiern. **Die meisten Smartphones senden ihr Bluetooth-Signal nicht kontinuierlich aus**.

Generell gilt: Je „dümmer“ das Gerät, desto besser funktioniert es! Ich hatte zum Beispiel ein Fitbit-Force-2-Armband, und damit hat es funktioniert. Mit einer Apple Watch funktioniert es dagegen nicht.
:::

## Dein Bluetooth-Gerät einrichten

Öffne die Integration „Bluetooth“, Tab „Erkennung“. Scanne die Bluetooth-Geräte in der Umgebung und suche das Gerät, das du hinzufügen möchtest.

Klicke auf „Mit Gladys verbinden“:

![Bluetooth-Gerät einrichten](../../../../../static/img/docs/en/configuration/bluetooth/configure-device.png)

Aktiviere dann die Option „Dieses Gerät als Anwesenheitssensor verwenden“.

Gib dem Gerät einen eindeutigen Namen und füge es zu Gladys hinzu.

Du solltest nun auf diesem Bildschirm landen:

![Bluetooth-Gerät einrichten](../../../../../static/img/docs/en/configuration/bluetooth/device-list.png)

Gehe jetzt zum Bildschirm „Anwesenheitsscanner“ und prüfe, ob deine Konfiguration so aussieht:

![Bluetooth-Gerät einrichten](../../../../../static/img/docs/en/configuration/bluetooth/presence-scanner.png)

Sehr gut, auf Bluetooth-Seite ist alles eingerichtet!

## Anwesenheit in Szenen verwalten

### Eine „Nach Hause kommen“-Szene

Jetzt erstellen wir eine `Szene`, die einen Nutzer als „zu Hause anwesend“ markiert, sobald der NUT-Schlüsselanhänger (oder ein anderes kompatibles Bluetooth-Gerät) erkannt wird.

Gehe zum Tab „Szenen“ und erstelle eine Szene wie diese:

![Szene „Nach Hause kommen“](../../../../../static/img/docs/en/configuration/bluetooth/back-at-home-scene.png)

Die Szene ist ganz einfach.

WENN „der Schlüsselanhänger erkannt wird“, DANN „Nutzer ‚Tony‘ als zu Hause anwesend markieren“.

### Eine „Haus verlassen“-Szene

Um das Verlassen des Hauses abzubilden, empfehlen wir dir eine regelmäßig ausgeführte Szene, die prüft, ob dein NUT-Schlüsselanhänger kürzlich zu Hause erkannt wurde.

Erkennt Gladys das Gerät, passiert nichts. Andernfalls markiert Gladys den Nutzer als abwesend.

Die Szene sollte so aussehen:

![Szene „Haus verlassen“](../../../../../static/img/docs/en/configuration/bluetooth/left-home-scene.png)

Du kannst die Einstellungen an dein Zuhause anpassen. Wenn dir 10 Minuten zu kurz erscheinen, um als abwesend zu gelten, kannst du den Wert auf 20 Minuten erhöhen, um „Fehlalarme“ zu vermeiden 😀

## Anwesenheit auf dem Dashboard anzeigen

Du kannst die Anwesenheit ausgewählter Nutzer auf dem Dashboard anzeigen. Verwende dazu das Widget „Anwesende Nutzer“:

![Anwesenheits-Dashboard](../../../../../static/img/docs/en/configuration/bluetooth/user-presence-dashboard.png)
