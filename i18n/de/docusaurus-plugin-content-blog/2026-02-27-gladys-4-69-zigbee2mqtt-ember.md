---
title: "Gladys 4.69: Neuer Zigbee2mqtt-Treiber Ember & Energie-Tracking für Tasmota"
description: "Gladys 4.69 bringt den neuen Zigbee2mqtt-Treiber Ember, Energie-Tracking für Tasmota und eine übersichtlichere Anzeige von Türsensoren in deinem Dashboard."
authors: pierregilles
image: /img/presentation/gladys-4-69-zigbee2mqtt-ember-en.jpg
slug: gladys-4-69-zigbee2mqtt-ember
---

Hallo zusammen,

Eine neue Version von Gladys Assistant ist verfügbar 🥳, mit dem neuen Zigbee2mqtt-Treiber Ember und Energie-Tracking für Tasmota.

{/* truncate */}

## Zigbee2mqtt: der neue Treiber Ember

Zigbee2mqtt bietet jetzt für bestimmte Sticks wie den Sonoff ZBDongle-E einen neuen Treiber an: **Ember**. Mit der Zigbee2mqtt-Integration in Gladys kannst du diesen Ember-Treiber jetzt für kompatible Sticks auswählen.

Wenn du EZSP nutzt, verändert Zigbee2mqtt deine Installation nicht ohne dein Zutun, damit dein Setup nicht kaputtgeht. **Stabilität ist ein Grundwert des Projekts**, und dieses Update wurde so gestaltet, dass es deinen Alltag nicht beeinträchtigt.

Wenn du auf Ember umsteigen möchtest, kannst du das tun, musst aber wahrscheinlich zuerst die Firmware deines Zigbee-Sticks aktualisieren. Beim Sonoff Dongle-E zum Beispiel kannst du in der Integration zwischen „Ember“ (dem neuen Standard) und dem alten EZSP-Treiber wählen:

![Auswahl des Zigbee-Treibers](../../../static/img/articles/gladys-4-69-zigbee2mqtt-ember/01.png)

Wenn du den neuen Treiber testest und deine Firmware nicht kompatibel ist, keine Panik – du bekommst eine klare Meldung:

![Meldung zur Inkompatibilität der Firmware](../../../static/img/articles/gladys-4-69-zigbee2mqtt-ember/02.png)

Du kannst dann entweder die Firmware aktualisieren oder vorerst zu EZSP zurückkehren. Ein großes Dankeschön an [@cicoub13](https://community.gladysassistant.com/) für diesen Beitrag!

## Dashboard: verbesserte Anzeige von Tür-/Fenstersensoren

Die Anzeige von Tür-/Fenstersensoren im Dashboard wurde für eine bessere Lesbarkeit verbessert. Wir zeigen jetzt „Offen/Geschlossen“ statt des kleinen Vorhängeschloss-Symbols an, das nicht besonders gut erkennbar war.

## Tasmota: Energie-Tracking hinzugefügt

Tasmota-Geräte sind jetzt in die Energieüberwachung eingebunden. Danke [@Terdious](https://community.gladysassistant.com/) für diese Entwicklung 🙌

---

Das Update erfolgt automatisch, oder du kannst es in den Einstellungen erzwingen. Ein schönes Wochenende euch allen!
