---
id: intro
title: Szenen in Gladys Assistant
description: "Erstelle leistungsstarke Szenen in Gladys Assistant: Verkette Aktionen, starte sie manuell oder über Auslöser und automatisiere dein Smart Home ganz nach deinen Wünschen."
sidebar_label: Einführung
---

In Gladys Assistant kannst du **Szenen** erstellen. Eine Szene ist eine Abfolge von **Aktionen**, die nacheinander oder parallel ausgeführt werden.

Szenen sind vollständig anpassbar: Du stellst deine eigenen Aktionsabläufe im `Szenen-Editor` von Gladys zusammen.

Szenen können manuell, automatisch (über einen **Auslöser**) oder aus einer anderen Szene heraus gestartet werden.

Ein paar Beispiele:

- Eine Szene „Ganzes Haus ausschalten“, die alle Lichter im Haus ausschaltet. Diese Szene kannst du auch manuell starten, um alle Lichter zu Hause aus der Ferne auszuschalten.
- Eine Szene „Einbruchalarm“, die dem Benutzer eine Telegram-Nachricht sendet. Diese Szene würde so eingerichtet, dass sie nach einem Auslöser „Wenn eine Bewegung erkannt wird“ startet.

## Eine Szene erstellen

Um eine Szene zu erstellen, öffne in der Gladys-Oberfläche den Tab „Szenen“ und klicke auf die Schaltfläche „Neu +“.

![Eine Szene erstellen](../../../../../static/img/docs/en/scenes/intro/scenes-intro-1.jpg)

Wähle einen Namen und ein Symbol für deine Szene. Das Symbol wird nur in der Gladys-Oberfläche verwendet.

![Eine Szene erstellen](../../../../../static/img/docs/en/scenes/intro/scenes-intro-2.jpg)

Jetzt bist du im Szenen-Editor. Gehen wir die einzelnen Bereiche des Editors gemeinsam durch:

![Eine Szene erstellen](../../../../../static/img/docs/en/scenes/intro/scenes-intro-3.jpg)

1. Auslöser: Wenn du deiner Szene Auslöser hinzufügst (das ist optional), erscheinen sie hier. Dieselbe Szene kann durch mehrere verschiedene Auslöser gestartet werden. Diese Auslöser sind alle voneinander unabhängig. 
:::note
Mehrere Auslöser hinzuzufügen bedeutet einfach: „Wenn dieses Ereignis eintritt ODER wenn dieses Ereignis eintritt ODER …“
:::
2. Ein Schritt: Eine Szene ist eine Folge von Schritten, die nacheinander ausgeführt werden. Gladys wartet, bis ein Schritt abgeschlossen ist, bevor es mit dem nächsten weitergeht. Innerhalb eines Schritts fügt „Parallele Aktion hinzufügen“ eine Aktion hinzu, die gleichzeitig mit den anderen Aktionen dieses Schritts ausgeführt wird. Du kannst Aktionen also sowohl parallel als auch nacheinander ausführen. Ziemlich mächtig, oder?
3. Starten: Mit dieser Schaltfläche kannst du die Ausführung der Szene testen. Sie berücksichtigt keine Auslöser, sondern führt nur die Schritte aus.
4. Speichern: Mit dieser Schaltfläche speicherst du die Szene.
5. Löschen: Mit dieser Schaltfläche löschst du die Szene.
6. Auslöser hinzufügen: Mit dieser Schaltfläche fügst du der Szene einen Auslöser hinzu. Du kannst beliebig viele Auslöser hinzufügen.
7. Die Schaltfläche „+“ zwischen zwei Schritten: Sie fügt an dieser Stelle einen neuen Schritt in die Szene ein.
8. Klicke auf den Titel der Szene, um ihn zu bearbeiten.
