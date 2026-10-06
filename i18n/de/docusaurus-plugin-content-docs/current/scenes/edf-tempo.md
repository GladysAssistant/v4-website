---
id: edf-tempo
title: Mit EDF Tempo und Gladys bei der Stromrechnung sparen
description: "Spare mit EDF Tempo und Gladys Assistant bei deiner Stromrechnung: Füge deinen Szenen eine Tempo-Bedingung hinzu, damit Automatisierungen nur an den richtigen Tagen laufen."
sidebar_label: EDF Tempo
---

In Frankreich bietet EDF den Tarif [EDF Tempo](https://particulier.edf.fr/fr/accueil/gestion-contrat/options/tempo.html) an. Dabei ist Strom das ganze Jahr über in der Regel günstiger – außer an bestimmten „weißen“ und „roten“ Tagen, an denen der Strompreis deutlich höher ist.
Jedes Tempo-Jahr, das vom 1. September bis zum 31. August läuft, umfasst 300 blaue, 43 weiße und 22 rote Tage.
Dieser Vertragstyp eignet sich besonders für Nutzer, die ihren Verbrauch leicht verschieben können.

### Automatische Szenarien mit Gladys

In Gladys kannst du in einer Szene den aktuellen Status des Tempo-Tages abrufen und herausfinden, ob gerade Hochtarif- oder Niedertarifzeit ist.
Erstelle dazu die Szenen-Aktion „Bedingung auf EDF-Tempo“:

![EDF-Tempo-Szenen](../../../../../static/img/docs/en/scenes/edf-tempo/edf-tempo-scenes.png)

Ist die Bedingung nicht erfüllt, kann sie die weitere Ausführung der Szene stoppen.

Mit dieser Bedingung kannst du alle möglichen smarten Szenen erstellen:

- Die Waschmaschine NUR an blauen Tagen starten
- Morgens um 8 Uhr, falls ein roter Tag ist, eine Nachricht über Telegram senden
- Abends um 19 Uhr, falls der nächste Tag ein roter Tag ist, eine Nachricht senden, die daran erinnert, den Geschirrspüler noch am selben Abend zu starten.
  Kurz gesagt: Die Möglichkeiten sind endlos!
