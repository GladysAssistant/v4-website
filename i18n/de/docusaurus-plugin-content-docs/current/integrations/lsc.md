---
id: lsc
title: "LSC-Kamera in Gladys: RTSP und lokale Einrichtung"
description: "So verbindest du eine LSC-Smart-Connect-Kamera mit Gladys Assistant. LSC-Kameras basieren auf Tuya, ob RTSP verfügbar ist, hängt also vom Modell ab: So prüfst du es und richtest die Verbindung ein."
sidebar_label: LSC-Kamera
keywords:
  - lsc kamera
  - lsc kamera rtsp
  - lsc smart connect
  - lsc kamera gladys
  - lsc kamera hausautomation
  - lsc kamera smart home
  - lsc kamera onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

LSC Smart Connect ist die Smart-Home-Marke, die bei Action verkauft wird. Die Kameras sind günstig und **basieren auf Tuya** – und genau das solltest du wissen, bevor du versuchst, eine davon mit Gladys Assistant zu verbinden.

Gladys verbindet sich mit Kameras über ihren [RTSP- oder HTTP-Stream](/de/docs/integrations/camera), direkt in deinem lokalen Netzwerk. Das Videobild bleibt also bei dir zu Hause und läuft nie über die Cloud. Der Haken bei LSC: Die meisten Tuya-basierten Kameras streamen nur in die Tuya/LSC-Cloud und **stellen ab Werk keinen standardmäßigen RTSP-Stream bereit**. Ein Teil der Modelle ist ONVIF/RTSP-kompatibel – der erste Schritt ist also herauszufinden, welches Modell du hast.

## Unterstützt deine LSC-Kamera RTSP?

Für die gesamte LSC-Produktreihe gibt es keine einheitliche Antwort, prüfe daher dein konkretes Modell:

- Suche auf der Verpackung oder in der LSC-Smart-Connect-App nach einem Hinweis auf **ONVIF** oder **RTSP**. ONVIF-kompatible Kameras stellen fast immer einen RTSP-Stream bereit.
- Suche nach der genauen Modellnummer zusammen mit „RTSP“ oder „ONVIF“, um zu sehen, was andere Nutzer berichten.
- Wenn deine Kamera ONVIF/RTSP unterstützt, gibt es meist eine Einstellung, um es zu aktivieren (und manchmal ein eigenes Stream-Passwort festzulegen) – entweder in der App oder in einer kleinen Weboberfläche unter der IP-Adresse der Kamera.

Bietet das Modell weder RTSP/ONVIF noch einen in deinem lokalen Netzwerk erreichbaren HTTP-Stream, kann es nicht direkt zu Gladys hinzugefügt werden, da es ausschließlich mit der Tuya-Cloud kommuniziert.

## LSC-RTSP-URLs zum Ausprobieren

Wenn deine LSC-Kamera (Tuya-basiert) RTSP bereitstellt, nutzt sie in der Regel Port `554` mit einem dieser gängigen Pfade. Ersetze `username`, `password` und die IP-Adresse durch deine eigenen Werte:

```text
rtsp://username:password@192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/live/ch00_0
rtsp://username:password@192.168.1.20:554/onvif1
```

Reservierte Zeichen im Benutzernamen oder Passwort müssen in der URL prozentkodiert werden, sonst wird sie nicht korrekt ausgewertet. Am häufigsten betrifft das `@`, das zu `%40` wird, aber dasselbe gilt für `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) und Leerzeichen (`%20`). Im Zweifel legst du ein Stream-Passwort fest, das nur aus Buchstaben und Ziffern besteht.

Der genaue Pfad hängt vom Chipsatz ab. Wenn die erste URL nicht antwortet, probiere die anderen. Ein ONVIF-Discovery-Tool (oder der ONVIF-Bereich in der App der Kamera) zeigt dir außerdem den exakten RTSP-Pfad für dein Modell.

## Die URL in VLC testen

Bevor du die Kamera zu Gladys hinzufügst, prüfe in [VLC](https://www.videolan.org/vlc/), ob deine RTSP-URL funktioniert: Öffne **Medien → Netzwerkstream öffnen...**, füge die URL ein und prüfe, ob der Stream abgespielt wird. Mit VLC kannst du URL, Zugangsdaten und Netzwerkweg gut überprüfen: Läuft der Stream dort, sollte er auch in Gladys funktionieren – vorausgesetzt, Gladys unterstützt den Codec und den Stream-Typ deiner Kamera.

Spielt keine der URLs in VLC ab, ist das ein starkes Indiz, dass dein Modell kein RTSP bereitstellt – aber noch kein Beweis. Schließe zuerst die üblichen Verdächtigen aus:

- Die Zugangsdaten stehen in der URL und sind korrekt prozentkodiert (sonst zeigt VLC eventuell einen eigenen Anmeldedialog an, statt abzuspielen).
- Das Passwort ist das eigene Stream-/ONVIF-Passwort, falls die App dich aufgefordert hat, eines festzulegen – nicht das Passwort deines LSC-Kontos.
- Der Stream-Pfad passt zu deinem Modell: Die Pfade hängen vom Chipsatz ab, probiere also alle drei oben genannten sowie jeden Pfad, den ein ONVIF-Discovery-Tool meldet.
- Die Kamera ist von deinem Computer aus erreichbar (gleiches Netzwerk, richtige IP, Port `554` nicht blockiert).
- RTSP/ONVIF ist in der App oder in der Weboberfläche der Kamera aktiviert, sofern es diese Option gibt.

## Deine LSC-Kamera zu Gladys hinzufügen

Sobald du eine funktionierende RTSP-URL hast, ist die Kamera in einer Minute in Gladys eingerichtet:

1. Öffne in Gladys den Tab **Integrationen** und dort die Integration **Kamera**.
2. Klicke auf **Neu**, füge deine LSC-RTSP-URL ein und gib der Kamera einen Namen.
3. Klicke auf **Verbindung testen** und dann auf **Speichern**.
4. Füge die Kamera deinem Dashboard hinzu und lass sie dir bei Bedarf von Gladys im Chat oder auf Telegram anzeigen.

Die vollständige Anleitung mit Screenshots findest du auf der [Seite zur Kamera-Integration](/de/docs/integrations/camera).

## Lieber eine Kamera, die immer lokal funktioniert?

Wenn du noch auf der Suche bist und eine Kamera willst, die ohne Rätselraten lokal mit Gladys funktioniert: [Reolink-Kameras](/de/docs/integrations/external/reolink/) bieten einen dokumentierten RTSP-Stream (Reolink veröffentlicht das URL-Format und die [Liste kompatibler Modelle](https://support.reolink.com/hc/en-us/articles/900000617826/), die den Großteil der kabelgebundenen Modelle abdeckt). Das sind auch die Kameras, die wir [für Gladys empfehlen](/de/docs/installation/recommended-hardware).

## Häufige Fragen

### Kann ich eine LSC-Kamera mit Gladys verbinden?

Das hängt vom Modell ab. LSC-Smart-Connect-Kameras basieren auf Tuya, und viele streamen ausschließlich in die Tuya/LSC-Cloud, ohne RTSP-Stream. Ist dein Modell ONVIF- oder RTSP-kompatibel, kannst du es über die Kamera-Integration mit seiner RTSP-URL zu Gladys hinzufügen. Suche auf der Verpackung, in der App oder zur Modellnummer nach einem Hinweis auf ONVIF/RTSP.

### Stellen LSC-Kameras einen RTSP-Stream bereit?

Nur einige. LSC ist eine Tuya-Marke, und Standard-Tuya-Kameras stellen standardmäßig kein RTSP bereit. LSC-Modelle mit ONVIF-Kennzeichnung tun das meistens, auf Port 554. Teste die URL in VLC, bevor du die Kamera zu Gladys hinzufügst.

### Funktioniert die LSC-Kamera-Integration ohne Cloud?

Ja, sofern deine LSC-Kamera einen RTSP-Stream bereitstellt: Gladys verbindet sich direkt über dein lokales Netzwerk damit, und das Video läuft nie über die LSC- oder Tuya-Cloud. Kameras, die nur in die Tuya-Cloud streamen, lassen sich nicht lokal nutzen.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kann ich eine LSC-Kamera mit Gladys verbinden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt vom Modell ab. LSC-Smart-Connect-Kameras basieren auf Tuya, und viele streamen ausschließlich in die Tuya/LSC-Cloud, ohne RTSP-Stream. Ist dein Modell ONVIF- oder RTSP-kompatibel, kannst du es über die Kamera-Integration mit seiner RTSP-URL zu Gladys hinzufügen. Suche auf der Verpackung, in der App oder zur Modellnummer nach einem Hinweis auf ONVIF/RTSP.",
        },
      },
      {
        "@type": "Question",
        name: "Stellen LSC-Kameras einen RTSP-Stream bereit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nur einige. LSC ist eine Tuya-Marke, und Standard-Tuya-Kameras stellen standardmäßig kein RTSP bereit. LSC-Modelle mit ONVIF-Kennzeichnung tun das meistens, auf Port 554. Teste die URL in VLC, bevor du die Kamera zu Gladys hinzufügst.",
        },
      },
      {
        "@type": "Question",
        name: "Funktioniert die LSC-Kamera-Integration ohne Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, sofern deine LSC-Kamera einen RTSP-Stream bereitstellt: Gladys verbindet sich direkt über dein lokales Netzwerk damit, und das Video läuft nie über die LSC- oder Tuya-Cloud. Kameras, die nur in die Tuya-Cloud streamen, lassen sich nicht lokal nutzen.",
        },
      },
    ],
  }}
/>
