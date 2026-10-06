---
title: Gladys Assistant 4.3 ist da – mit vielen neuen Szenen-Funktionen
description: Komplexe Szenen in Gladys Assistant 4 zu erstellen war noch nie so einfach
authors: pierregilles
image: /img/presentation/gladys-4-3-en-cover.jpg
slug: gladys-assistant-4-3-is-here
---

Hallo zusammen,

heute erscheint Gladys Assistant v4.3, ein neues Update, das die Szenen ins Rampenlicht rückt!

Szenen sind das Rückgrat der Hausautomation.

Ein vernetztes Zuhause bedeutet nicht nur, es aus der Ferne steuern zu können: Es geht auch darum, wiederkehrende Abläufe zu automatisieren, ein bisschen Magie in unser Zuhause zu bringen und uns den Alltag zu erleichtern.

{/* truncate */}

## Was ist neu in Version 4.3

### Ein neuer Auslöser „Wenn das Haus leer ist“

Du willst sicher sein, dass alles ausgeschaltet ist, wenn die letzte Person das Haus verlässt?

Ab sofort kannst du eine Szene erstellen, die ausgelöst wird, wenn der Letzte das Haus verlässt.

![Haus ist leer in Gladys Assistant](../../../static/img/articles/en/gladys-4-3/house-empty.png)

Die Anwesenheitserkennung gibt es seit Gladys Assistant v4.1, und sie kann auf verschiedene Arten funktionieren:

- Per Bluetooth: Es gibt Bluetooth-Schlüsselanhänger wie den Nut, die Gladys sehr leicht erkennen kann. Das Prinzip ist einfach: Wenn du dein Zuhause verlässt, „sieht“ Gladys den Bluetooth-Anhänger nicht mehr und markiert dich als abwesend. Wenn du zurückkommst, erkennt Gladys den Anhänger und markiert dich als anwesend.
- In den Szenen: Du kannst eine Szene erstellen, die zum Beispiel bei einer Zustandsänderung eines Sensors ausgelöst wird und dich als anwesend/abwesend markiert. So kannst du mehr oder weniger frei festlegen, wie du dich zu Hause als anwesend/abwesend markierst.

### Das Gegenteil: „Wenn das Haus nicht mehr leer ist“

Du möchtest lieber eine andere Szene, die alles einschaltet, wenn jemand nach Hause kommt und das Haus vorher leer war?

Das geht mit dem Auslöser „Wenn das Haus nicht mehr leer ist“:

![Haus nicht mehr leer in Gladys Assistant](../../../static/img/articles/en/gladys-4-3/house-no-longer-empty.png)

### Präziser: der Auslöser „Zurück zu Hause“

Du willst eine Szene nur dann auslösen, wenn eine bestimmte Person nach Hause kommt?

Es gibt jetzt einen Auslöser „Zurück zu Hause“, der nur dann feuert, wenn der ausgewählte Nutzer nach Hause kommt.

![Zurück zu Hause in Gladys Assistant](../../../static/img/articles/en/gladys-4-3/back-at-home.png)

Praktisch, um für jede Person im Haushalt eine eigene Szene zu erstellen.

### Und das Gegenteil: „Hat das Haus verlassen“

Dasselbe Prinzip, aber beim Verlassen des Hauses.

![Hat das Haus verlassen in Gladys Assistant](../../../static/img/articles/en/gladys-4-3/left-home.png)

### Zeitbedingung

Zwar konntest du bisher schon eine Szene erstellen, die mit einer bestimmten Wiederholung ausgelöst wird (mit [zeitgesteuerten Szenen](/de/docs/scenes/scheduled-trigger)), aber eine zeitbasierte Bedingung innerhalb der Szene war bisher nicht möglich.

Angenommen, du möchtest folgende Szene erstellen:

- „Wenn die Temperatur im Wohnzimmer < 20 °C ist“
- UND „es zwischen 9 und 22 Uhr ist“
- DANN schick mir die Nachricht „Die Temperatur ist zu niedrig“

Mit der zeitbasierten Bedingung ist das möglich!

Beispiel für eine Szene, die nur am Wochenende zwischen 8 und 12 Uhr ausgeführt wird:

![Zeitbedingung in Gladys Assistant](../../../static/img/articles/en/gladys-4-3/time-condition.png)

### Das Ergebnis einer HTTP-Anfrage abrufen

Seit Gladys v4.0.3 kannst du in Szenen HTTP-Anfragen senden.

Praktisch, um in Szenen eine externe API aufzurufen.

Ab sofort kannst du die Antwort des HTTP-Aufrufs abrufen und das Ergebnis der Anfrage in deinen Szenen verwenden.

Angenommen, du möchtest eine Szene erstellen, die jeden Morgen die API von Coinbase aufruft, um den Bitcoin-Kurs abzurufen, und dir eine Nachricht mit dem Kurs schickt.

Das geht jetzt, und hier ist ein Beispiel im Video:

<div class="videoContainer">
<video  width="100%" controls autoplay loop muted>
<source src="/img/articles/en/gladys-4-3/bitcoin-price.mp4" type="video/mp4" />
  Dein Browser unterstützt das Video-Tag nicht.
</video>
</div>

Natürlich ist das nur ein Beispiel unter vielen.

Du könntest eine Wetter-API abfragen, eine Verkehrs-API, einen Sensor bei dir zu Hause, IFTTT und vieles mehr …

Und das ist noch nicht alles! Die aus dem HTTP-Aufruf abgerufenen Variablen kannst du in der Bedingung „Nur fortfahren, wenn“ verwenden, um zu prüfen, ob eine Bedingung erfüllt ist.

![Nur fortfahren, wenn in Gladys Assistant](../../../static/img/articles/en/gladys-4-3/continue-only-if.png)

Beispiele:

- Nur dann eine Nachricht erhalten, wenn die Außentemperatur < 0 °C ist.
- Eine Benachrichtigung erhalten, wenn eine Aktie, die du verfolgst, um mehr als 20 % fällt

### Behebung von Bugs und Tippfehlern in der Oberfläche

Viele von euch haben kleine Rechtschreibfehler in der Oberfläche oder Responsive-Bugs gemeldet.

Ohne ins Detail zu gehen, hier die Liste der verschiedenen Korrektur-Commits dieses Updates:

- Fix #1147: make signup process more responsive [`#1147`](https://github.com/GladysAssistant/Gladys/issues/1147)
- Fix #1161: correct french typo [`#1161`](https://github.com/GladysAssistant/Gladys/issues/1161)
- Fix #1162: correct date format in french scheduled trigger [`#1162`](https://github.com/GladysAssistant/Gladys/issues/1162)
- Fix url in signup process [`8ee5793`](https://github.com/GladysAssistant/Gladys/commit/8ee5793bfa1b3153c8c26bc1e4e2c9b8f2144a8a)
- Add switch dimmer to supported feature types in dashboard box [`b740657`](https://github.com/GladysAssistant/Gladys/commit/b7406570a9e96d4590f78c05bca97a84b8978001)

## Wie aktualisiere ich?

Zum Aktualisieren von Gladys empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Danke an alle Contributors

Nochmals vielen Dank an alle, die zu diesem Release beigetragen haben: Ob beim Programmieren, mit neuen Ideen im Forum oder beim Testen neuer Funktionen – jede Hilfe ist unbezahlbar und macht das Produkt komplett!
