---
id: imou
title: "Imou in Gladys: RTSP-URL und Kamera-Einrichtung"
description: "Verbinde eine Imou-Kamera per RTSP mit Gladys Assistant, lokal und ohne Cloud. Mit dem genauen Imou-RTSP-URL-Format für Haupt- und Substream."
sidebar_label: Imou
keywords:
  - imou rtsp url
  - imou gladys
  - imou hausautomation
  - imou smart home
  - imou rtsp
  - imou kamera verbinden
  - imou ranger 2 rtsp
  - imou lokal
---

import JsonLd from '@site/src/components/seo/JsonLd';

Imou-Kameras (eine Marke von Dahua) sind eine günstige und weit verbreitete Wahl, und die meisten von ihnen funktionieren mit Gladys Assistant.

Imou-Kameras stellen einen standardmäßigen **RTSP**-Stream bereit und werden daher über die allgemeine [Kamera-Integration](/de/docs/integrations/camera) verbunden. Gladys kommuniziert direkt in deinem lokalen Netzwerk mit der Kamera – dein Videobild bleibt also zu Hause und läuft nie über die Imou-Cloud.

## Imou-RTSP-URL

Imou-Kameras stellen auf Port `554` zwei RTSP-Streams bereit: einen hochauflösenden **Hauptstream** und einen leichteren **Substream**. Ersetze `username`, `password` und die IP-Adresse durch deine eigenen Werte:

```text
# Hauptstream (hohe Auflösung):
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=0

# Substream (niedrige Auflösung):
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=1
```

Ein paar Dinge, die du wissen solltest:

- Der Wert `channel=1` ist die Kanalnummer. Bei einer einzelnen Kamera ist er immer `1`. Ist die Kamera über einen Imou-/Dahua-NVR angebunden, erhöhst du ihn für jeden Kanal (`channel=2`, `channel=3` usw.).
- `subtype=0` ist der Hauptstream, `subtype=1` der Substream. Für eine flüssige Liveansicht auf deinem Dashboard reicht oft der **Substream**, der deinen Gladys-Server weniger belastet. Nutze den **Hauptstream**, wenn du die volle Auflösung möchtest.
- Der Benutzername ist meist `admin`, das Passwort ist das Gerätepasswort, das du beim Koppeln der Kamera in der Imou-Life-App festgelegt hast (nicht das Passwort deines Imou-Kontos).
- Reservierte Zeichen im Benutzernamen oder Passwort müssen in der URL prozentkodiert werden, sonst wird sie nicht korrekt ausgewertet. Am häufigsten betrifft das `@`, das zu `%40` wird, aber dasselbe gilt für `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) und Leerzeichen (`%20`). Im Zweifel wählst du ein Passwort, das nur aus Buchstaben und Ziffern besteht.
- Manche akkubetriebenen Imou-Modelle halten keinen dauerhaften RTSP-Stream aufrecht, um Strom zu sparen. Bei diesen ist RTSP unter Umständen nicht verfügbar, und die Kamera kann nicht zu Gladys hinzugefügt werden.

## RTSP auf deiner Imou-Kamera aktivieren

Bei vielen Imou-Kameras muss RTSP (und ONVIF) erst eingeschaltet werden, bevor der Stream antwortet:

1. Öffne die App **Imou Life** und wähle deine Kamera aus.
2. Gehe zu **Einstellungen → Kameraeinstellungen** und suche nach **ONVIF** oder **RTSP** (die genaue Bezeichnung hängt von Modell und Firmware ab).
3. Aktiviere die Option. Fordert dich die App auf, ein ONVIF-/RTSP-Passwort festzulegen, notiere es dir: Das ist das Passwort, das du in der RTSP-URL verwendest.

Es ist sinnvoll, ein eigenes Passwort für den RTSP-Stream zu verwenden, damit du es jederzeit ändern kannst.

## Die URL in VLC testen

Bevor du die Kamera zu Gladys hinzufügst, prüfe in [VLC](https://www.videolan.org/vlc/), ob deine RTSP-URL funktioniert: Öffne **Medien → Netzwerkstream öffnen...**, füge die URL ein und prüfe, ob der Stream abgespielt wird. VLC eignet sich gut, um URL, Zugangsdaten und Netzwerkverbindung zu prüfen: Läuft der Stream dort, sollte er auch in Gladys funktionieren – vorausgesetzt, Gladys unterstützt den Codec und den Stream-Typ deiner Kamera.

Spielt VLC den Stream nicht ab, heißt das nicht unbedingt, dass die Kamera kein RTSP hat. Prüfe Folgendes, bevor du aufgibst:

- Die Zugangsdaten stehen in der URL und sind korrekt prozentkodiert (sonst öffnet VLC unter Umständen stillschweigend einen eigenen Anmeldedialog).
- Das Passwort ist das Geräte-/ONVIF-Passwort, nicht das Passwort deines Imou-Kontos.
- Der Stream-Pfad passt zu deinem Modell (Werte für `channel` und `subtype` sowie die Kanalnummer, falls du über einen NVR gehst).
- Die Kamera ist von deinem Computer aus erreichbar (gleiches Netzwerk, richtige IP, Port `554` nicht blockiert).
- RTSP/ONVIF ist in der Imou-Life-App tatsächlich aktiviert.

## Deine Imou-Kamera zu Gladys hinzufügen

Sobald deine RTSP-URL bestätigt ist, ist die Kamera in einer Minute zu Gladys hinzugefügt:

1. Gehe in Gladys zum Tab **Integrationen** und öffne die Integration **Kamera**.
2. Klicke auf **Neu**, füge deine Imou-RTSP-URL ein und gib der Kamera einen Namen.
3. Klicke auf **Verbindung testen** und dann auf **Speichern**.
4. Füge die Kamera zu deinem Dashboard hinzu und bitte Gladys optional im Chat oder über Telegram, sie dir zu zeigen.

Die vollständige Anleitung mit Screenshots findest du auf der Seite der [Kamera-Integration](/de/docs/integrations/camera).

## Häufig gestellte Fragen

### Wie lautet die RTSP-URL einer Imou-Kamera?

Imou-Kameras stellen auf Port 554 zwei RTSP-Streams bereit: den Hauptstream (hohe Auflösung) unter `rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=0` und einen leichteren Substream unter `rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=1`. Ersetze Benutzername, Passwort und IP durch deine eigenen Werte. Der Benutzername ist meist `admin`, das Passwort ist das in der Imou-Life-App festgelegte Gerätepasswort.

### Unterstützt die Imou Ranger 2 RTSP?

Ja. Die Imou Ranger 2 (und Ranger 2C) stellt einen standardmäßigen RTSP-Stream bereit, sobald RTSP/ONVIF in der Imou-Life-App aktiviert ist. Sie kann daher wie jede andere RTSP-Kamera über die Kamera-Integration zu Gladys hinzugefügt werden.

### Funktioniert die Imou-Integration ohne Cloud?

Ja. Gladys verbindet sich über den RTSP-Stream direkt in deinem lokalen Netzwerk mit deiner Imou-Kamera. Das Video läuft also nie über die Imou-Cloud und funktioniert auch ohne Internetverbindung weiter.

### Warum verbindet sich meine Imou-RTSP-URL nicht?

Die häufigsten Ursachen sind: RTSP/ONVIF ist in der Imou-Life-App deaktiviert, das Passwort ist falsch (nutze das Geräte-/ONVIF-Passwort, nicht das Passwort deines Imou-Kontos), die Kanalnummer ist falsch (`channel=1` bei einer einzelnen Kamera) oder es handelt sich um ein Akkumodell, das den Stream nicht dauerhaft bereitstellt. Teste die URL zuerst in VLC: Kann auch VLC sie nicht öffnen, liegt das Problem an der URL oder der Kamera, nicht an Gladys.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie lautet die RTSP-URL einer Imou-Kamera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Imou-Kameras stellen auf Port 554 zwei RTSP-Streams bereit: den Hauptstream (hohe Auflösung) unter rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=0 und einen leichteren Substream unter rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=1. Ersetze Benutzername, Passwort und IP durch deine eigenen Werte. Der Benutzername ist meist admin, das Passwort ist das in der Imou-Life-App festgelegte Gerätepasswort.",
        },
      },
      {
        "@type": "Question",
        name: "Unterstützt die Imou Ranger 2 RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Die Imou Ranger 2 (und Ranger 2C) stellt einen standardmäßigen RTSP-Stream bereit, sobald RTSP/ONVIF in der Imou-Life-App aktiviert ist. Sie kann daher wie jede andere RTSP-Kamera über die Kamera-Integration zu Gladys hinzugefügt werden.",
        },
      },
      {
        "@type": "Question",
        name: "Funktioniert die Imou-Integration ohne Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Gladys verbindet sich über den RTSP-Stream direkt in deinem lokalen Netzwerk mit deiner Imou-Kamera. Das Video läuft also nie über die Imou-Cloud und funktioniert auch ohne Internetverbindung weiter.",
        },
      },
      {
        "@type": "Question",
        name: "Warum verbindet sich meine Imou-RTSP-URL nicht?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die häufigsten Ursachen sind: RTSP/ONVIF ist in der Imou-Life-App deaktiviert, das Passwort ist falsch (nutze das Geräte-/ONVIF-Passwort, nicht das Passwort deines Imou-Kontos), die Kanalnummer ist falsch (channel=1 bei einer einzelnen Kamera) oder es handelt sich um ein Akkumodell, das den Stream nicht dauerhaft bereitstellt. Teste die URL zuerst in VLC: Kann auch VLC sie nicht öffnen, liegt das Problem an der URL oder der Kamera, nicht an Gladys.",
        },
      },
    ],
  }}
/>
