---
id: turn-on-off-the-switches-action
title: Funksteckdosen in einer Szene ein-/ausschalten
description: "Steuere Funksteckdosen in einer Szene von Gladys Assistant, um Lampen, LED-Streifen oder eine Kaffeemaschine zu automatisieren – mit einem Schritt-für-Schritt-Beispiel."
sidebar_label: Steckdosen ein-/ausschalten
---

Ob für eine einfache Nachttischlampe, einen LED-Streifen oder sogar eine Kaffeemaschine: Funksteckdosen sind in der Hausautomation weit verbreitet.

In Gladys kannst du deine Funksteckdosen steuern – sowohl über das Dashboard als auch in Szenen.

Unten findest du ein konkretes Beispiel.

Nimm eine ganz einfache Filterkaffeemaschine, wie man sie für rund zehn Euro im Handel bekommt. Diese Kaffeemaschinen haben den Vorteil, dass sie einen physischen Ein-/Ausschalter besitzen, der dauerhaft auf „Ein“ bleiben kann.

Mit einer vorgeschalteten Funksteckdose lässt sich das Gerät dann steuern – und so Kaffee auf Knopfdruck zubereiten!

## Mit Gladys an jedem Wochentag morgens automatisch Kaffee kochen

Wir können uns also folgende Szene vorstellen:

```
Auslöser: „Montag bis Freitag um 7 Uhr“

Aktionen:
  - Steckdose „Kaffeemaschine“ einschalten
  - 30 Sekunden warten (bis der Kaffee fertig ist)
  - Steckdose „Kaffeemaschine“ ausschalten
```

In Gladys sieht die Szene so aus:

![Mit Gladys an jedem Wochentag morgens automatisch Kaffee kochen](../../../../../static/img/docs/en/scenes/turn-on-off-the-switches-action/screenshot.png)

Wie du siehst, gibt es zuerst einen Auslöser, der an jedem Wochentag außer am Wochenende (Montag bis Freitag) aktiviert wird.

Dann schaltet die Szene die Steckdose ein, wartet 30 Sekunden und schaltet die Steckdose wieder aus.

Super einfach, oder?
