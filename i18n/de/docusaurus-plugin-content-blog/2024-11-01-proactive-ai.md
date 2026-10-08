---
title: Proaktive KI kommt zu Gladys Assistant!
description: Künstliche Intelligenz wird noch tiefer in Gladys integriert, um dein Zuhause smarter und reaktionsschneller zu machen.
authors: pierregilles
image: /img/presentation/gladys-4-48.jpg
slug: proactive-ai
---

Hallo zusammen!

Heute freue ich mich, dir Gladys Assistant 4.48 vorzustellen – eine Version, in der künstliche Intelligenz noch tiefer in Gladys integriert ist, um dein Zuhause smarter und reaktionsschneller zu machen.

Seit Januar 2023 konntest du ChatGPT bereits über Gladys Fragen stellen.

![Gladys mit ChatGPT](../../../static/img/articles/en/gladys-4-48/chatgpt-gladys.jpg)

Das war ein guter Anfang, aber ich möchte weitergehen! Was wäre, wenn die KI proaktiv sein und Entscheidungen für dich treffen könnte?

## Stell dir die Möglichkeiten vor

{/* truncate */}

Stell dir vor, ein Auto hält vor deinem Haus. Ein eigener Wachmann würde hinsehen, dein Auto an Form, Farbe und Kennzeichen erkennen und sofort wissen, dass du es bist. Aber einen Wachmann rund um die Uhr einzustellen, kann sich nicht jeder leisten!

Was, wenn die KI diese Rolle übernehmen könnte?

In Gladys kannst du jetzt eine einfache Anweisung schreiben, zum Beispiel:

> „Wenn ein Auto vor dem Haus steht und es ein roter Tesla Model 3 mit dem Kennzeichen XXX ist, schalte die Garage ein; andernfalls warne mich, dass ein Eindringling da ist.“

Mit Gladys 4.48 wird dieses Szenario Wirklichkeit! Du hast eine Allround-KI, die bereitsteht, um zu überwachen und Entscheidungen zu treffen – genau wie ein eigener Wachmann, nur ohne die Kosten.

## Ein konkretes Beispiel

Diese neue Funktion basiert auf der OpenAI-API mit ChatGPT 4o-mini und deren neuester Vision-Funktion, verfügbar für Gladys-Plus-Abonnenten.

In einer Szene kannst du eine Aktion „KI fragen“ anlegen und ihr bei Bedarf ein Bild einer Kamera mitschicken.

Nehmen wir das Auto-Beispiel:

![Analyse des Kamerabilds](../../../static/img/articles/en/gladys-4-48/ask-ai-camera.png)

Wird draußen vor deinem Haus eine Bewegung erkannt, schickt Gladys das Bild der Garagenkamera zur Analyse der Situation. Je nach Ergebnis gilt dann:

- Wird das richtige Auto erkannt, geht das Licht in der Garage an.
- Wird ein anderes Auto erkannt, bekommst du eine Einbruchswarnung auf dein Handy.

## Sensorwerte analysieren

Die Kamera ist nur ein Beispiel! Du kannst der KI auch Sensordaten schicken und sie bitten, abhängig vom Ergebnis zu handeln.

Du könntest zum Beispiel den Wert eines CO2-Sensors schicken und eine Aktion anfordern, wenn der Wert ungewöhnlich ist:

![CO2-Wert mit Gladys analysieren](../../../static/img/articles/en/gladys-4-48/ask-ai-sensor.png)

Du musst nicht erst nachschlagen, welche CO2-Werte in einem Raum empfohlen sind – die KI greift auf ihr umfangreiches Wissen zurück (im Grunde das ganze Internet!), um die Situation einzuschätzen und intelligent zu handeln.

Du kannst sogar Werte aus anderen APIs einbinden, um:

- Gleich morgens einen Wetterbericht zu bekommen
- Die Finanzmärkte mit einer Börsenzusammenfassung zu verfolgen
- Die Nachrichten über einen RSS-Feed zu checken
- Während deines Urlaubs täglich die Sicherheit deines Zuhauses zu prüfen (normale Temperatur usw.)

Die Möglichkeiten sind endlos! Ich bin gespannt, was du mit diesem Update baust. Teile deine Experimente im Forum, um andere zu inspirieren!

## Weitere Neuerungen

- In Szenen werden Filter nach Tag oder Titel jetzt in der URL gespeichert, sodass du nach dem Navigieren einfach zu einem Filter zurückkehren kannst.
- Unterstützung für Heizkörper mit Steuerdraht (fil pilote) in Szenen hinzugefügt.
- Kamerabilder werden jetzt über TCP (statt UDP) abgerufen, wodurch Anzeigefehler (wie der Bug mit dem grünen Streifen) vermieden werden.
- Binäre Diagramme korrigiert: Der erste Wert wird jetzt korrekt angezeigt.
- DuckDB: Verbindungen werden jetzt sauber geschlossen, wenn Gladys herunterfährt.

Danke an alle, die zu diesem Update beigetragen haben! 🙌

## Wie aktualisiere ich?

Um Gladys zu aktualisieren, empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).
