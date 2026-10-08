---
id: pilot-wire
title: "Zigbee-Steuerdrahtmodul: Elektroheizungen in Gladys steuern"
description: "Steuere deine Elektroheizkörper mit einem Zigbee-Steuerdrahtmodul (fil pilote, NodOn, Legrand) in Gladys Assistant: Komfort-, Eco- und Frostschutzbefehle, lokal über Zigbee2MQTT."
sidebar_label: Steuerdraht (Heizung)
keywords:
  - zigbee steuerdraht
  - fil pilote zigbee
  - steuerdraht modul
  - nodon fil pilote
  - elektroheizung smart home
  - elektroheizkörper hausautomation
  - elektroheizung zigbee steuern
---

import JsonLd from '@site/src/components/seo/JsonLd';

In Frankreich und einigen Nachbarländern hat fast jeder neuere Elektroheizkörper einen **Steuerdraht** (*fil pilote*): eine zusätzliche, meist schwarze Ader, über die der Heizkörper Betriebsbefehle empfängt. Das ist der günstigste und einfachste Weg, eine Elektroheizung steuerbar zu machen, ohne die Heizkörper auszutauschen.

Mit einem **Zigbee-Steuerdrahtmodul** und Gladys Assistant gibst du diese Befehle über dein Dashboard und deine Szenen vor – komplett lokal: kein Abo, keine Hersteller-Cloud, und die Heizung funktioniert auch dann weiter, wenn deine Internetverbindung ausfällt.

## So funktioniert der Steuerdraht

Der Steuerdraht überträgt nicht die Heizleistung, sondern eine **Anweisung**. Der Heizkörper behält sein eigenes Thermostat, das auf deine Komforttemperatur eingestellt ist, und der Steuerdraht sagt ihm, was er damit tun soll.

Es gibt vier Standardbefehle:

- **Komfort**: Der Heizkörper heizt auf die an seinem eigenen Drehregler eingestellte Temperatur.
- **Eco**: Er heizt auf etwa 3,5 °C unter der Komforttemperatur.
- **Frostschutz**: Er hält etwa 7 °C, für längere Abwesenheiten.
- **Aus**: Der Heizkörper heizt nicht mehr.

Module und Heizkörper mit „6 Befehlen“ ergänzen **Komfort -1** und **Komfort -2**, also 1 °C bzw. 2 °C unter der Komforttemperatur – praktisch für eine sanfte Absenkung statt eines kompletten Wechsels auf Eco.

## Ein Zigbee-Steuerdrahtmodul auswählen

Ein Steuerdrahtmodul sitzt zwischen deiner Elektroinstallation und dem Heizkörper: Es empfängt Befehle über Zigbee und legt den entsprechenden Befehl auf den Steuerdraht. Zwei Module werden in der Gladys-Community immer wieder genannt, beide werden von Zigbee2MQTT erkannt:

- **NodOn SIN-4-FP-21**: ein Mikromodul, das in die Anschlussdose hinter dem Heizkörper oder in den Verteilerkasten passt. Kompakt, 6 Befehle und am weitesten verbreitet.
- **Legrand 064882**: das Steuerdrahtmodul von Legrand, gleiches Prinzip, für den Verteilerkasten oder eine Unterputzdose.

Vor dem Kauf solltest du ein paar Dinge prüfen:

- **6 statt 4 Befehle**, wenn deine Heizkörper sie unterstützen: So kannst du die Temperatur schrittweise absenken.
- **Verfügbarer Platz**: Die Anschlussdose hinter einem Heizkörper ist oft eng. Prüfe die Abmessungen des Moduls oder installiere es auf der Seite des Verteilerkastens.
- **Ein Modul pro Heizkörper**, wenn du jeden Raum einzeln steuern möchtest. Ein einzelnes Modul am Anfang eines Stromkreises steuert alle Heizkörper dieses Stromkreises gemeinsam.

:::warning
Für die Installation eines Steuerdrahtmoduls musst du an deiner 230-V-Elektroinstallation arbeiten. Schalte die betreffende Sicherung aus, bevor du etwas anfasst, und beauftrage eine Elektrofachkraft, wenn du dir bei der Verkabelung unsicher bist. Ein Fehler am Steuerdraht kann den Heizkörper beschädigen.
:::

## Das Modul in Gladys koppeln

Das Modul wird wie jedes andere Zigbee-Gerät über [Zigbee2MQTT](/de/docs/integrations/zigbee2mqtt) mit Gladys verbunden:

1. Öffne in Gladys `Integrationen / Zigbee2Mqtt` und dann das Menü **Erkennen**.
2. Klicke auf **Beitritt erlauben**.
3. Versetze das Modul in den Kopplungsmodus. Bei den meisten Modulen hältst du dazu die Taste an der Vorderseite gedrückt, bis die LED blinkt.
4. Das Modul erscheint mit seinen erkannten Funktionen in der Liste. Gib ihm einen Namen, ordne es einem Raum zu und speichere es.
5. Deaktiviere den Beitritt anschließend aus Sicherheitsgründen wieder.

Taucht das Modul nicht auf, bring es zum Koppeln näher an den Koordinator oder sieh dir den Abschnitt zur Fehlerbehebung in der [Zigbee2MQTT-Dokumentation](/de/docs/integrations/zigbee2mqtt) an.

## Deine Heizung über Gladys steuern

Seit Gladys 4.48 ist der **Steuerdraht-Modus** eine eigene Funktion: Das Modul meldet einen Moduswähler, keinen einfachen Ein/Aus-Schalter.

- Im **Dashboard** fügst du das Modul einem Widget „Geräte“ hinzu: Den Befehl (Komfort, Eco, Frostschutz, Aus) wählst du aus einem Drop-down.
- In **Szenen** kannst du den Modus eines oder mehrerer Heizkörper ändern – und genau hier wird es spannend.

Einige Automatisierungen, die sich lohnen:

- **Nachtabsenkung**: Schalte die Schlafzimmer um 23 Uhr auf Eco und um 6:30 Uhr zurück auf Komfort, mit einem [zeitgesteuerten Auslöser](/de/docs/scenes/scheduled-trigger).
- **Leeres Haus**: Senke alle Heizkörper auf Eco ab, sobald das [Haus leer ist](/de/docs/scenes/house-empty), und schalte zurück auf Komfort, wenn jemand nach Hause kommt.
- **Lange Abwesenheit**: Schalte während des Urlaubs auf Frostschutz und ein paar Stunden vor deiner Rückkehr wieder auf Komfort.
- **Rote Tage bei EDF Tempo**: Wenn du den [EDF-Tempo-Tarif](/de/docs/scenes/edf-tempo) nutzt, ist das Absenken der Heizung an roten Tagen die lohnendste Einsparung im ganzen Haus, da die Heizung der größte Verbraucher ist.

Kombiniere das mit der [Überwachung deines Stromverbrauchs](/de/docs/integrations/enedis), und du siehst die Wirkung dieser Szenen direkt auf deiner Rechnung.

## Häufige Fragen

### Was ist ein Zigbee-Steuerdrahtmodul?

Ein kleines elektrisches Modul zwischen deiner Installation und einem Elektroheizkörper, das den per Zigbee gesendeten Befehl auf dessen Steuerdraht legt: Komfort, Eco, Frostschutz oder Aus. Damit lässt sich ein gewöhnlicher Heizkörper über eine Hausautomationsplattform wie Gladys steuern, ohne ihn austauschen zu müssen.

### Welches Zigbee-Steuerdrahtmodul funktioniert mit Gladys?

Das NodOn SIN-4-FP-21 ist in der Gladys-Community am weitesten verbreitet, das Legrand 064882 erfüllt denselben Zweck. Beide werden von Zigbee2MQTT erkannt und melden ihren Steuerdraht-Modus an Gladys. Bevorzuge ein Modul mit 6 Befehlen, wenn deine Heizkörper das unterstützen, und prüfe den verfügbaren Platz in der Anschlussdose hinter dem Heizkörper.

### Welche Steuerdraht-Befehle gibt es?

Die vier Standardbefehle sind Komfort (der Heizkörper heizt auf die an seinem Drehregler eingestellte Temperatur), Eco (etwa 3,5 °C darunter), Frostschutz (etwa 7 °C) und Aus. Module und Heizkörper mit 6 Befehlen ergänzen Komfort -1 und Komfort -2, also eine Absenkung um 1 °C bzw. 2 °C.

### Funktioniert die Heizungssteuerung ohne Internet?

Ja. Das Modul kommuniziert per Zigbee mit dem USB-Dongle an deinem Gladys-Rechner, und Gladys läuft bei dir zu Hause. Deine Heizungsszenen laufen weiter, auch wenn deine Internetverbindung ausfällt – anders als bei vernetzten Thermostaten, die von der Cloud ihres Herstellers abhängen.

### Brauche ich ein Steuerdrahtmodul pro Heizkörper?

Um jeden Raum einzeln zu steuern, ja: ein Modul pro Heizkörper. Wenn es dir reicht, mehrere Heizkörper gemeinsam zu steuern, deckt ein einzelnes Modul am Anfang des Stromkreises im Verteilerkasten alle Heizkörper dieses Stromkreises ab.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist ein Zigbee-Steuerdrahtmodul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ein kleines elektrisches Modul zwischen deiner Installation und einem Elektroheizkörper, das den per Zigbee gesendeten Befehl auf dessen Steuerdraht legt: Komfort, Eco, Frostschutz oder Aus. Damit lässt sich ein gewöhnlicher Heizkörper über eine Hausautomationsplattform wie Gladys steuern, ohne ihn austauschen zu müssen.",
        },
      },
      {
        "@type": "Question",
        name: "Welches Zigbee-Steuerdrahtmodul funktioniert mit Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das NodOn SIN-4-FP-21 ist in der Gladys-Community am weitesten verbreitet, das Legrand 064882 erfüllt denselben Zweck. Beide werden von Zigbee2MQTT erkannt und melden ihren Steuerdraht-Modus an Gladys. Bevorzuge ein Modul mit 6 Befehlen, wenn deine Heizkörper das unterstützen, und prüfe den verfügbaren Platz in der Anschlussdose hinter dem Heizkörper.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Steuerdraht-Befehle gibt es?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die vier Standardbefehle sind Komfort (der Heizkörper heizt auf die an seinem Drehregler eingestellte Temperatur), Eco (etwa 3,5 °C darunter), Frostschutz (etwa 7 °C) und Aus. Module und Heizkörper mit 6 Befehlen ergänzen Komfort -1 und Komfort -2, also eine Absenkung um 1 °C bzw. 2 °C.",
        },
      },
      {
        "@type": "Question",
        name: "Funktioniert die Heizungssteuerung ohne Internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Das Modul kommuniziert per Zigbee mit dem USB-Dongle an deinem Gladys-Rechner, und Gladys läuft bei dir zu Hause. Deine Heizungsszenen laufen weiter, auch wenn deine Internetverbindung ausfällt – anders als bei vernetzten Thermostaten, die von der Cloud ihres Herstellers abhängen.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich ein Steuerdrahtmodul pro Heizkörper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Um jeden Raum einzeln zu steuern, ja: ein Modul pro Heizkörper. Wenn es dir reicht, mehrere Heizkörper gemeinsam zu steuern, deckt ein einzelnes Modul am Anfang des Stromkreises im Verteilerkasten alle Heizkörper dieses Stromkreises ab.",
        },
      },
    ],
  }}
/>
