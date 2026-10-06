---
title: "Die KI-Plugin-Fabrik für Matterbridge: So funktioniert jedes Gerät mit Gladys"
description: "Eröffne ein GitHub-Ticket mit einer Beschreibung deines Geräts, und eine KI-gestützte Fabrik baut über Nacht ein Matterbridge-Plugin, damit es mit Gladys funktioniert."
authors: pierregilles
image: /img/presentation/matterbridge-ai-plugin-factory-en.jpg
slug: matterbridge-ai-plugin-factory
---

Hallo zusammen,

du hast Geräte, die nicht mit Gladys kompatibel sind und kein offenes Protokoll wie Zigbee oder Matter nutzen? Keine Sorge. Ich habe eine **KI-gestützte Plugin-Fabrik für Matterbridge** gebaut, die automatisch Plugins für deine Geräte entwickelt. Programmierkenntnisse sind nicht nötig.

{/* truncate */}

:::info[Dieser Artikel beschreibt nicht mehr den empfohlenen Weg]
Seit der Veröffentlichung dieses Beitrags hat Gladys **externe Integrationen** bekommen: Integrationen, die als Docker-Container verpackt, auf GitHub veröffentlicht und mit einem Klick aus dem Katalog in Gladys installiert werden können. Sie sind jetzt der empfohlene Weg, um ein Gerät hinzuzufügen, das nicht nativ unterstützt wird, und jeder kann eine erstellen – in jeder Sprache, ohne Review.

👉 [Den Katalog der externen Integrationen durchstöbern](/de/docs/integrations/external/) oder [erfahren, wie man eine erstellt](/de/docs/dev/external-integrations/).

Dieser Artikel bleibt zur Dokumentation erhalten.
:::

> **Voraussetzung:** Matterbridge muss installiert und konfiguriert sein. Falls das noch nicht der Fall ist, folge zuerst [diesem Tutorial in der Dokumentation](/de/docs/integrations/matterbridge/).

## Wie funktioniert das?

Du eröffnest ein GitHub-Ticket mit einer Beschreibung deines Geräts, die KI entwickelt das Plugin über Nacht, und du musst es nur noch testen. Wenn etwas nicht stimmt, hinterlässt du einen Kommentar, und die KI bessert nach.

## Schritt 1: Ein GitHub-Ticket erstellen

Geh zum Repository der Fabrik: 👉 [matterbridge-ai-plugin-factory/issues](https://github.com/GladysAssistant/matterbridge-ai-plugin-factory/issues)

Klicke auf **„New Issue“**:

![Ein neues Issue erstellen](../../../static/img/articles/matterbridge-ai-plugin-factory/01.png)

Wähle dann die Vorlage **„Plugin Request“**:

![Die Vorlage Plugin Request auswählen](../../../static/img/articles/matterbridge-ai-plugin-factory/02.png)

Fülle das Formular aus:

- **Titel:** der Name des gewünschten Plugins
- **Links:** Wenn du ähnliche Plugins aus anderen Projekten kennst (Home Assistant, Homebridge …), füge die Links hinzu. Je mehr Kontext du lieferst, desto passender ist das Ergebnis schon beim ersten Versuch.
- **Funktionen:** Beschreibe, was du steuern möchtest. Beispiele: Temperatur, Ein/Aus, Luftfeuchtigkeit, Helligkeit …
- **Zusätzlicher Kontext:** optional, aber nützlich, wenn dein Gerät Besonderheiten hat.

![Das Formular für die Plugin-Anfrage ausfüllen](../../../static/img/articles/matterbridge-ai-plugin-factory/03.png)

![Details der Plugin-Anfrage](../../../static/img/articles/matterbridge-ai-plugin-factory/04.png)

> **Tipp:** Wenn du nicht weißt, was du bei den Links angeben sollst, schreib das in die Beschreibung und bitte die KI, selbst zu suchen. Aber je genauer du bist, desto besser wird das Ergebnis.

## Schritt 2: Das Plugin installieren und testen

Die Fabrik läuft **jeden Morgen** und bearbeitet **ein Plugin pro Durchlauf**. Sobald deins entwickelt ist, antwortet die KI direkt im Ticket mit einem Download-Link:

![Die KI antwortet mit einem Download-Link](../../../static/img/articles/matterbridge-ai-plugin-factory/05.png)

Lade die Datei herunter und klicke dann in Matterbridge auf **„Upload +“**:

![Das Plugin in Matterbridge hochladen](../../../static/img/articles/matterbridge-ai-plugin-factory/06.jpg)

Gib anschließend den Namen des Plugins im Feld **„Plugin Name“** ein und klicke auf **„Add +“**:

![Das Plugin hinzufügen](../../../static/img/articles/matterbridge-ai-plugin-factory/07.jpg)

Das Plugin ist installiert, du kannst es testen!

## Schritt 3: Feedback geben

Wenn das Plugin nicht wie erwartet funktioniert, hinterlasse einen Kommentar im GitHub-Ticket. Die KI liest dein Feedback und korrigiert das Plugin beim nächsten Durchlauf:

![Feedback im Ticket hinterlassen](../../../static/img/articles/matterbridge-ai-plugin-factory/08.png)

---

Eröffne ruhig Tickets, genau dafür ist die Fabrik da! Und wenn du Fragen dazu hast, wie sie funktioniert, frag einfach.
