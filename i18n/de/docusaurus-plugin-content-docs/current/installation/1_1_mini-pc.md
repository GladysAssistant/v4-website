---
id: mini-pc
title: Gladys Assistant auf einem Mini-PC installieren
description: "Installiere Gladys Assistant auf einem Mini-PC, der empfohlenen Lösung: Hardware auswählen, Ubuntu Server installieren und Gladys mit Docker starten."
sidebar_label: Installation auf einem Mini-PC
keywords:
  - gladys mini pc
  - bester mini pc hausautomation
  - mini pc heimserver
  - gladys ubuntu server installieren
  - beelink smart home
---

import JsonLd from '@site/src/components/seo/JsonLd';

Die Installation auf einem Mini-PC ist die empfohlene Methode, um Gladys voll auszuschöpfen. Diese kleinen Computer sind zuverlässig, leistungsstark, energieeffizient und günstig – eine hervorragende Lösung für den Einsatz zu Hause.

:::tip[Welchen Mini-PC soll ich kaufen?]
Modelle, technische Daten, Stromverbrauch und Budget: [Der beste Mini-PC für die Hausautomation](/de/mini-pc-home-automation/).
:::

## Welche Hardware solltest du wählen?

Ich empfehle den Beelink Mini S13. Eine unglaubliche Maschine zu einem erschwinglichen Preis.

Ich betreibe Gladys seit Jahren auf einem Beelink-Mini-PC, mit hervorragender Leistung und ganz ohne Probleme.

Du findest ihn bei [Amazon](https://www.amazon.com/s?k=Beelink+Mini+S13&tag=gladproj-21).

## Ubuntu Server auf dem Mini-PC installieren

Im Internet gibt es viele Videos, die zeigen, wie man Ubuntu Server auf einem Mini-PC installiert.

:::warning[Schließe deinen Mini-PC per Ethernet-Kabel an deinen Router an, bevor du mit der Installation beginnst!]

**Das ist entscheidend.** Wenn der Mini-PC während der Installation von Ubuntu Server nicht mit dem Netzwerk verbunden ist, kann das Installationsprogramm die benötigten Pakete nicht herunterladen, und **die Option „Install OpenSSH server“ steht nicht zur Verfügung**.

Ohne OpenSSH kannst du dich nicht aus der Ferne mit deinem Mini-PC verbinden, um Docker und Gladys zu installieren, und musst die gesamte Installation wiederholen.

Also: Schließe **zuerst** das Ethernet-Kabel an, starte dann die Installation und achte darauf, während der Einrichtung das Kästchen **„Install OpenSSH server“** anzuhaken.

:::

Ich empfehle dieses Tutorial:

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/n7aEcfDNULc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Gladys Assistant installieren

Sobald Ubuntu installiert ist, musst du nur noch Docker installieren und Gladys über unser offizielles Docker-Image starten.

Folge dazu unserer ausführlichen Anleitung: [Gladys mit Docker installieren](/de/docs/installation/docker/).

## Häufig gestellte Fragen

### Warum einen Mini-PC statt eines Raspberry Pi verwenden?

Ein Mini-PC bietet dir mehr CPU-Leistung, mehr RAM und schnelleren, zuverlässigeren Speicher als ein Raspberry Pi – meist zu einem ähnlichen Gesamtpreis, sobald du Gehäuse, Netzteil und SSD dazurechnest. Diese Lösung empfehlen wir, damit Gladys langfristig flüssig läuft.

### Welchen Mini-PC empfehlt ihr für Gladys?

Wir nutzen und empfehlen den Beelink Mini S13. Er ist leistungsstark, leise, energieeffizient und betreibt Gladys langfristig zuverlässig.

### Welches Betriebssystem sollte ich installieren?

Installiere Ubuntu Server, füge dann Docker hinzu und starte das offizielle Gladys-Image. Der Mini-PC arbeitet dann als kleiner, ständig laufender Heimserver für dein Smart Home.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Warum einen Mini-PC statt eines Raspberry Pi verwenden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ein Mini-PC bietet dir mehr CPU-Leistung, mehr RAM und schnelleren, zuverlässigeren Speicher als ein Raspberry Pi – meist zu einem ähnlichen Gesamtpreis, sobald du Gehäuse, Netzteil und SSD dazurechnest. Diese Lösung empfehlen wir, damit Gladys langfristig flüssig läuft.",
        },
      },
      {
        "@type": "Question",
        name: "Welchen Mini-PC empfehlt ihr für Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir nutzen und empfehlen den Beelink Mini S13. Er ist leistungsstark, leise, energieeffizient und betreibt Gladys langfristig zuverlässig.",
        },
      },
      {
        "@type": "Question",
        name: "Welches Betriebssystem sollte ich installieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installiere Ubuntu Server, füge dann Docker hinzu und starte das offizielle Gladys-Image. Der Mini-PC arbeitet dann als kleiner, ständig laufender Heimserver für dein Smart Home.",
        },
      },
    ],
  }}
/>
