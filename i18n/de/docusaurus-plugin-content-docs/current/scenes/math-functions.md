---
id: math-functions
title: Verfügbare mathematische Funktionen
description: "Übersicht der mathematischen Funktionen in Szenen von Gladys Assistant (Runden, Min/Max, Mittelwert, Potenzen, Logarithmen, Trigonometrie), um dynamische, berechnete Automatisierungen zu erstellen."
sidebar_label: Mathematische Funktionen
---

In einigen Szenen-Aktionen kannst du Variablen einfügen und Berechnungen durchführen.

Das gilt für die folgenden Aktionen:

- Warten
- Gerätewert setzen
- Eine Variable definieren
- Nur fortsetzen, wenn
- Auf einem Lautsprecher sprechen (Lautstärke)

In diesen Aktionen zeigt der Szenen-Editor direkt unter dem Feld einen Link **„Verfügbare Funktionen und Syntax“**: Er klappt die vollständige Liste dessen auf, was du eingeben kannst, ohne die Szene zu verlassen.

## Operatoren

- `+` : Addition
- `-` : Subtraktion
- `*` : Multiplikation
- `/` : Division
- `%` : Modulo
- `^` : Potenz
- `( )` : Klammern, um eine Berechnung zu gruppieren
- `>`, `>=`, `<`, `<=` : Vergleiche

## Funktionen

Eine Funktion erhält ihre Argumente in Klammern, durch Kommas getrennt. Funktionen lassen sich verschachteln: `round(min(100, 3 * 45) / 2)` ergibt `68`.

**Runden und Vorzeichen**

- `abs(-5)` : Absolutwert (Ergebnis = 5)
- `round(5.2)` : Runden (Ergebnis = 5)
- `round(5.86, 1)` : Runden auf 1 Nachkommastelle (Ergebnis = 5.9)
- `floor(5.8)` : Abrunden (Ergebnis = 5)
- `ceil(5.2)` : Aufrunden (Ergebnis = 6)
- `fix(-5.8)` : Runden in Richtung null (Ergebnis = -5)
- `sign(-3)` : Vorzeichen einer Zahl, -1, 0 oder 1 (Ergebnis = -1)

**Minimum, Maximum und Statistik**

- `min(3, 8, 5)` : kleinster Wert (Ergebnis = 3)
- `max(3, 8, 5)` : größter Wert (Ergebnis = 8)
- `mean(18, 20, 22)` : Mittelwert (Ergebnis = 20)
- `median(3, 8, 5)` : Median (Ergebnis = 5)
- `sum(1, 2, 3)` : Summe (Ergebnis = 6)
- `prod(2, 3, 4)` : Produkt (Ergebnis = 24)

**Potenzen und Wurzeln**

- `pow(2, 3)` : Potenz (Ergebnis = 8)
- `sqrt(16)` : Quadratwurzel (Ergebnis = 4)
- `cbrt(27)` : Kubikwurzel (Ergebnis = 3)
- `square(4)` : Quadrat (Ergebnis = 16)
- `cube(3)` : Kubik (Ergebnis = 27)
- `nthRoot(16, 4)` : n-te Wurzel (Ergebnis = 2)
- `hypot(3, 4)` : Hypotenuse, Wurzel aus der Summe der Quadrate (Ergebnis = 5)

**Exponentialfunktion und Logarithmen**

- `exp(1)` : Exponentialfunktion (Ergebnis = 2,718…)
- `log(10)` : natürlicher Logarithmus (Ergebnis = 2,302…)
- `log2(8)` : Logarithmus zur Basis 2 (Ergebnis = 3)
- `log10(1000)` : Logarithmus zur Basis 10 (Ergebnis = 3)

**Ganze Zahlen**

- `gcd(12, 18)` : größter gemeinsamer Teiler (Ergebnis = 6)
- `lcm(4, 6)` : kleinstes gemeinsames Vielfaches (Ergebnis = 12)

**Zufall**

- `random(1, 10)` : zufällige Dezimalzahl zwischen 1 und 10
- `randomInt(1, 10)` : zufällige ganze Zahl zwischen 1 und 9 (das Maximum wird nie zurückgegeben)

**Trigonometrie** (im Bogenmaß)

- `sin(pi / 2)` : Sinus (Ergebnis = 1)
- `cos(0)` : Kosinus (Ergebnis = 1)
- `tan(pi / 4)` : Tangens (Ergebnis = 1)
- `asin`, `acos`, `atan` : Umkehrfunktionen
- `atan2(y, x)` : Winkel des Punktes (x, y)

## Konstanten

- `pi` : 3,14159…
- `e` : 2,71828…
- `tau` : 2 × pi

## Beispiele

Einen Wert zwischen zwei Grenzen halten, hier einen Sollwert zwischen 17 und 21 °C, berechnet aus der Außentemperatur, die im ersten Schritt der Szene mit „Gerätewert abrufen“ gelesen wurde:

```
max(17, min(21, 23 - {{0.0.last_value}} / 4))
```

Auf das nächste halbe Grad runden:

```
round({{0.0.last_value}} * 2) / 2
```

Mittelwert von drei Sensoren, die zuvor in der Szene mit „Gerätewert abrufen“ gelesen wurden:

```
round(mean({{0.0.last_value}}, {{0.1.last_value}}, {{0.2.last_value}}), 1)
```

## Worauf du achten solltest

- Trigonometrische Funktionen arbeiten im **Bogenmaß**: Schreibe `sin(pi / 2)`, nicht `sin(90)`.
- `log` ist der **natürliche** Logarithmus. Verwende `log10` für die Basis 10.
- `randomInt(min, max)` gibt nie `max` zurück.
- Konstanten müssen ausdrücklich multipliziert werden: Schreibe `2 * pi`, nicht `2 pi`.
- Dezimalzahlen werden mit einem **Punkt** geschrieben: `0.5`, nicht `0,5`.
- Eine Formel, die nicht berechnet werden kann (unbekannte Funktion, falsche Anzahl an Argumenten, Division mit unendlichem Ergebnis), **stoppt die Szene**, statt sie mit einem falschen Wert weiterlaufen zu lassen. Der Grund steht in den Gladys-Logs.

:::info
Die vollständige Liste der Funktionen ist seit Gladys Assistant 5.2 verfügbar. Vorher gab es nur die Operatoren sowie `abs`, `round`, `floor`, `ceil` und `random`.
:::
