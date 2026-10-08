---
id: camera
title: "IP-Kamera-Integration: jede RTSP- oder HTTP-Kamera zu Gladys hinzufügen"
description: "Füge IP-Kameras über ihren RTSP- oder HTTP-Stream zu Gladys Assistant hinzu und sieh sie dir live auf deinem Dashboard an. Funktioniert mit jeder Kameramarke, lokal und ohne Cloud."
sidebar_label: Kamera
keywords:
  - rtsp kamera
  - ip kamera hausautomation
  - ip kamera smart home
  - kamera integration
  - rtsp stream url
  - http kamera stream
---

import JsonLd from '@site/src/components/seo/JsonLd';

Gladys unterstützt Kameras, die einen RTSP- oder HTTP-Stream bereitstellen. Da sich Gladys direkt in deinem lokalen Netzwerk mit der Kamera verbindet, bleibt dein Videobild zu Hause und läuft nie über die Cloud eines Herstellers.

Zuerst musst du die RTSP-/HTTP-URL des Streams herausfinden.

:::note
Die URL findest du im Handbuch deines Geräts oder auf der Website des Herstellers.
:::

Hier ein Beispiel für eine RTSP-URL:

```
rtsp://username:password@192.168.1.20/live/ch00_0
```

Hier ein Beispiel für eine HTTP-URL:

```
http://user:password@192.168.1.20/video?profile=0
```

Wenn du diese Information nicht im Handbuch deiner Kamera findest, probiere diese Website: [https://www.ispyconnect.com/cameras](https://www.ispyconnect.com/cameras) (eine Datenbank mit Kameras und den jeweiligen Verbindungsdaten).

Es gibt dort sogar einen integrierten URL-Generator.

Hier zum Beispiel für eine Xiaomi-Kamera:

![RTSP-Kamera-URL-Generator iSpyConnect](../../../../../static/img/docs/en/configuration/camera/camera-ispy.jpg)

Findest du auf dieser Website nicht die gesuchten Informationen, empfehle ich dir, nach „Name deiner Kamera + RTSP“ zu googeln. Die Suchergebnisse sollten dir zeigen, ob ein offener Stream verfügbar ist.

:::tip
Für die gängigsten Kameramarken haben wir eigene Anleitungen mit dem genauen RTSP-URL-Format:

- [Reolink](/de/docs/integrations/external/reolink/)
- [Imou](/de/docs/integrations/imou)
- [LSC Smart Connect (Action)](/de/docs/integrations/lsc)
- [Rollei IPC-88 (Aldi)](/de/docs/integrations/rollei)
:::

## Den Stream in VLC testen

Du kannst dich mit [VLC](https://www.videolan.org/vlc/) mit dem Stream deiner Kamera verbinden.

Öffne VLC und klicke auf „Medien“ -> „Netzwerkstream öffnen...“

![VLC Netzwerkstream öffnen](../../../../../static/img/docs/en/configuration/camera/camera-vlc-step-1.jpg)

Gib dann die URL deines RTSP- oder HTTP-Streams ein.

![VLC Netzwerkstream öffnen](../../../../../static/img/docs/en/configuration/camera/camera-vlc-step-2.jpg)

Fertig!

Wenn die URL korrekt ist, solltest du das Bild deiner Kamera in VLC sehen.

![VLC Netzwerkstream öffnen](../../../../../static/img/docs/en/configuration/camera/camera-vlc-step-3.jpg)

## Deine RTSP-Kamera mit Gladys Assistant verbinden

Wenn du den Kamerastream in VLC sehen konntest, sollte er auch in Gladys Assistant funktionieren.

Gehe in Gladys zum Tab „Integrationen“ und klicke auf die Integration „Kamera“:

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-1.jpg)

Klicke auf „Neu“.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-2.jpg)

Fülle das Formular aus.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-3.jpg)

Mit einem Klick auf „Verbindung testen“ kannst du den Stream ausprobieren. Funktioniert es nicht: Bist du sicher, dass deine Gladys-Hardware im selben Netzwerk wie deine Kamera ist? Stimmen die Zugangsdaten?

Danach kannst du auf „Speichern“ klicken.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-4.jpg)

## Deine Kamera zum Dashboard von Gladys Assistant hinzufügen

Öffne das Gladys-Dashboard und klicke auf „Bearbeiten“.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-5.jpg)

Klicke auf „+“ und wähle dann das Kamera-Widget.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-6.jpg)

Wähle deine Kamera aus und klicke auf „Speichern“.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-7.jpg)

Voilà! Deine Kamera sollte jetzt sichtbar sein.

![Eine Kamera zu Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/camera/camera-step-8.jpg)

## Gladys Assistant per Nachricht um ein Kamerabild bitten

Gehe zum Tab „Chat“ und frag Gladys: „Zeig mir die Kamera im XXXX“ (wobei XXXX der Raum ist, in dem sich die Kamera befindet).

Und... Magie!

![Ein Kamerabild in Gladys Assistant anfordern](../../../../../static/img/docs/en/configuration/camera/chat-camera-en.jpg)

Das funktioniert auch über Telegram, sofern du Telegram in Gladys eingerichtet hast.

## Häufig gestellte Fragen

### Wie finde ich die RTSP-URL meiner Kamera?

Schau zuerst im Handbuch deiner Kamera oder auf der Website des Herstellers nach, denn der Pfad unterscheidet sich je nach Marke. Findest du sie dort nicht, listet die [iSpyConnect-Kameradatenbank](https://www.ispyconnect.com/cameras) die Verbindungsdaten für die meisten Modelle auf und generiert sogar URLs. Alternativ kannst du online nach „dein Kameramodell + RTSP“ suchen. Für Reolink-Kameras gibt es unsere [eigene Reolink-Anleitung](/de/docs/integrations/external/reolink/).

### Welche Kameras funktionieren mit Gladys?

Jede IP-Kamera, die einen standardmäßigen RTSP- oder HTTP-Stream bereitstellt, funktioniert mit Gladys, unabhängig von der Marke. USB-Webcams werden ebenfalls unterstützt. Funktioniert deine Kamera nur über eine geschlossene Hersteller-App oder -Cloud, ist sie nicht kompatibel.

### Schickt Gladys mein Kamerabild in die Cloud?

Nein. Gladys verbindet sich über den RTSP- oder HTTP-Stream direkt in deinem lokalen Netzwerk mit deiner Kamera, sodass das Video in deinem Zuhause bleibt. Das ist ein zentraler Bestandteil davon, dass Gladys eine lokale Open-Source-Lösung für die Hausautomation ist.

### Der Stream verbindet sich nicht – was sollte ich prüfen?

Prüfe zuerst, ob die URL in [VLC](https://www.videolan.org/vlc/) funktioniert. Kann auch VLC sie nicht öffnen, prüfe, ob der Rechner, auf dem Gladys läuft, im selben Netzwerk wie die Kamera ist, ob die Zugangsdaten stimmen und ob RTSP in den Kameraeinstellungen aktiviert ist.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie finde ich die RTSP-URL meiner Kamera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schau zuerst im Handbuch deiner Kamera oder auf der Website des Herstellers nach, denn der Pfad unterscheidet sich je nach Marke. Findest du sie dort nicht, listet die iSpyConnect-Kameradatenbank die Verbindungsdaten für die meisten Modelle auf und generiert sogar URLs. Alternativ kannst du online nach deinem Kameramodell plus RTSP suchen.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Kameras funktionieren mit Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jede IP-Kamera, die einen standardmäßigen RTSP- oder HTTP-Stream bereitstellt, funktioniert mit Gladys, unabhängig von der Marke. USB-Webcams werden ebenfalls unterstützt. Funktioniert deine Kamera nur über eine geschlossene Hersteller-App oder -Cloud, ist sie nicht kompatibel.",
        },
      },
      {
        "@type": "Question",
        name: "Schickt Gladys mein Kamerabild in die Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Gladys verbindet sich über den RTSP- oder HTTP-Stream direkt in deinem lokalen Netzwerk mit deiner Kamera, sodass das Video in deinem Zuhause bleibt. Das ist ein zentraler Bestandteil davon, dass Gladys eine lokale Open-Source-Lösung für die Hausautomation ist.",
        },
      },
      {
        "@type": "Question",
        name: "Der Kamerastream verbindet sich nicht – was sollte ich prüfen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prüfe zuerst, ob die URL in VLC funktioniert. Kann auch VLC sie nicht öffnen, prüfe, ob der Rechner, auf dem Gladys läuft, im selben Netzwerk wie die Kamera ist, ob die Zugangsdaten stimmen und ob RTSP in den Kameraeinstellungen aktiviert ist.",
        },
      },
    ],
  }}
/>
