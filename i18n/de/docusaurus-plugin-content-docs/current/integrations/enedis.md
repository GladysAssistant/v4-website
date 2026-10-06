---
id: enedis
title: "Enedis-API: deinen Linky-Stromverbrauch in Gladys verfolgen"
description: "Verbinde die Enedis-Data-Connect-API, um den Verbrauch deines Linky-Zählers in Gladys Assistant zu verfolgen. Greife als Privatperson über Gladys Plus auf deine Stromdaten zu, ganz ohne Firmenvertrag (nur Frankreich)."
sidebar_label: Enedis
keywords:
  - enedis api
  - api enedis
  - api linky
  - enedis api privatperson
  - enedis data connect
  - linky verbrauch
  - stromverbrauch verfolgen
---

import JsonLd from '@site/src/components/seo/JsonLd';

Enedis ist das Unternehmen, das das französische Stromverteilnetz betreibt und die intelligenten Linky-Zähler in den Haushalten installiert. Enedis stellt eine API namens Data Connect bereit, über die du die von deinem Linky-Zähler gemessenen Verbrauchsdaten abrufen kannst.

Der Haken: Diese API steht nur Unternehmen offen, und das erst nach Unterzeichnung eines Vertrags und einem Zertifizierungsprozess. Als Privatperson kannst du keinen direkten Zugang zur Enedis-API beantragen.

Hier hilft Gladys. Wir haben eine juristische Person, „Gladys Assistant SAS“, die für den Zugriff auf die Enedis-Data-Connect-API zertifiziert und berechtigt ist, sie Privatpersonen zur Verfügung zu stellen. Mit Gladys kannst du also deinen Linky-Verbrauch über die offizielle Enedis-API verfolgen, ohne selbst ein Unternehmen zu führen.

Diese Integration ist über [Gladys Plus](/de/plus) verfügbar. Nach der Verbindung wird dein täglicher Verbrauch automatisch abgerufen und in deiner eigenen Gladys-Instanz gespeichert. So behältst du deinen Verlauf und kannst darauf eigene Diagramme und [Szenen](/de/docs/scenes/intro/) aufbauen.

:::note
Diese Integration funktioniert nur in Frankreich, da sie sich mit der API von Enedis verbindet, dem Betreiber des französischen Stromverteilnetzes.
:::

## Mit Enedis in Gladys verbinden

Gehe auf [plus.gladysassistant.com](https://plus.gladysassistant.com) und klicke auf die Integration „Enedis“:

![Enedis-Symbol](../../../../../static/img/docs/en/configuration/enedis/enedis-integration-icone.jpg)

Klicke auf den Button „Ich greife auf meinen Enedis-Kundenbereich zu“:

![Enedis-Integration Gladys Einwilligung](../../../../../static/img/docs/en/configuration/enedis/enedis-integration-clic.jpg)

Erteile auf Enedis-Seite die Einwilligung und klicke auf „Bestätigen“.

![Enedis-Einwilligung](../../../../../static/img/docs/en/configuration/enedis/enedis-consentement.jpg)

Du solltest wieder bei Gladys landen, das sich nun mit deinem Enedis-Konto synchronisiert.

Die erste Synchronisierung kann je nach Auslastung der Enedis-API eine Weile dauern. Ich empfehle dir, Gladys zu schließen und später wiederzukommen 🙂

## Deinen Stromverbrauch anzeigen

In Gladys findest du deinen Stromzähler unter „Zähler“:

![Enedis-Integration Gladys, meine Zähler](../../../../../static/img/docs/en/configuration/enedis/enedis-compteur.jpg)

Auf dem Dashboard kannst du ein neues Diagramm erstellen und „Täglicher Verbrauch“ auswählen:

![Enedis-Integration Gladys, täglicher Verbrauch](../../../../../static/img/docs/en/configuration/enedis/graphique-consommation-quotidienne.jpg)

Wähle „Histogramm“, und du solltest dieses Diagramm auf deinem Dashboard sehen:

![Enedis-Integration Gladys, Diagramm](../../../../../static/img/docs/en/configuration/enedis/enedis-graphique.jpg)

Ab hier verhalten sich die Daten wie bei jedem anderen Gladys-Gerät: Du kannst damit Automatisierungen bauen, dich bei ungewöhnlich hohem Verbrauch benachrichtigen lassen oder sie mit anderen Sensoren kombinieren. Das passt gut zu den Funktionen des [Energiemonitorings](/de/docs/integrations/energy-monitoring/).

## Häufig gestellte Fragen

### Wie greife ich als Privatperson auf die Enedis-API zu?

Die Enedis-Data-Connect-API steht Privatpersonen nicht direkt offen: Enedis schließt API-Verträge nur mit zertifizierten Unternehmen ab. Der praktische Weg, über die offizielle API auf deine eigenen Linky-Daten zuzugreifen, ohne ein Unternehmen zu gründen, führt über einen zertifizierten Anbieter. Gladys Assistant SAS ist zertifiziert – mit [Gladys Plus](/de/plus) verbindest du dein Enedis-Konto einmalig, und Gladys ruft deinen Verbrauch für dich ab.

### Ist die Enedis-API kostenlos?

Für Privatpersonen sind die Daten selbst kostenlos: Du erlaubst lediglich den Zugriff auf deine eigenen, von deinem Linky-Zähler gemessenen Verbrauchsdaten. Kosten entstehen für den Dienst, der sie abruft und speichert. Bei Gladys ist die Enedis-Integration in [Gladys Plus](/de/plus) enthalten.

### Welche Daten stellt der Linky-Zähler bereit?

Über Data Connect kannst du auf deinen täglichen Verbrauch zugreifen und, je nach Vertrag, auf deine halbstündliche Lastkurve, deine maximale Leistung und deine Vertragsdaten. In Gladys wird der tägliche Verbrauch abgerufen und gespeichert, sodass du ihn über Tage, Wochen und Monate darstellen kannst.

### Kann ich meine Linky-Daten lokal speichern?

Ja. Sobald Gladys deinen Verbrauch über die Enedis-API abgerufen hat, werden die Daten in deiner eigenen Gladys-Instanz gespeichert. Du behältst deinen vollständigen Verlauf, selbst wenn du die Integration später trennst, und kannst darauf lokale Diagramme, Szenen und Benachrichtigungen aufbauen.

### Ich kann die Enedis-Einwilligung nicht erteilen?

Die Enedis-Plattform ist wegen Updates auf Enedis-Seite manchmal offline. Oft ist es am besten, es später noch einmal zu versuchen.

Funktioniert es dann immer noch nicht, prüfe, ob dein Enedis-Konto funktioniert: Kannst du deine Stromverbrauchsdaten bei Enedis sehen? Falls nicht, liegt das Problem wahrscheinlich bei Enedis.

### Mir fehlen Daten der letzten Tage?

Theoretisch wird die Enedis-API jeden Morgen aktualisiert.

In der Praxis sind die Daten jedoch nicht immer zur gleichen Uhrzeit verfügbar, und an manchen Tagen (zum Beispiel an Feiertagen) gibt es gar keine Daten.

Wenn du allerdings Lücken auf deinem Dashboard bemerkst, die dauerhaft bestehen bleiben, schreib bitte einen Beitrag im [Forum](https://community.gladysassistant.com/).

### Die Synchronisierung läuft nicht mehr?

Deine Einwilligung ist 2 Jahre gültig und muss erneuert werden, wenn Gladys deine Daten weiterhin abrufen soll.

Synchronisiert sich dein Konto nicht mehr, empfehle ich dir im Zweifel, deine Einwilligung zu erneuern, indem du auf den blauen Button „Ich greife auf meinen Enedis-Kundenbereich zu“ klickst.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie greife ich als Privatperson auf die Enedis-API zu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Enedis-Data-Connect-API steht Privatpersonen nicht direkt offen: Enedis schließt API-Verträge nur mit zertifizierten Unternehmen ab. Um über die offizielle API auf deine eigenen Linky-Daten zuzugreifen, ohne ein Unternehmen zu gründen, gehst du über einen zertifizierten Anbieter. Gladys Assistant SAS ist zertifiziert – mit Gladys Plus verbindest du dein Enedis-Konto einmalig, und Gladys ruft deinen Verbrauch für dich ab.",
        },
      },
      {
        "@type": "Question",
        name: "Ist die Enedis-API kostenlos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für Privatpersonen sind die Daten selbst kostenlos: Du erlaubst den Zugriff auf deinen eigenen, von deinem Linky-Zähler gemessenen Verbrauch. Kosten entstehen für den Dienst, der sie abruft und speichert. Bei Gladys ist die Enedis-Integration in Gladys Plus enthalten.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Daten stellt der Linky-Zähler bereit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Über Data Connect kannst du auf deinen täglichen Verbrauch zugreifen und, je nach Vertrag, auf deine halbstündliche Lastkurve, deine maximale Leistung und deine Vertragsdaten. In Gladys wird der tägliche Verbrauch abgerufen und gespeichert, sodass du ihn über Tage, Wochen und Monate darstellen kannst.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich meine Linky-Daten lokal speichern?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Sobald Gladys deinen Verbrauch über die Enedis-API abgerufen hat, werden die Daten in deiner eigenen Gladys-Instanz gespeichert. Du behältst deinen vollständigen Verlauf, selbst wenn du die Integration später trennst, und kannst darauf lokale Diagramme, Szenen und Benachrichtigungen aufbauen.",
        },
      },
    ],
  }}
/>
