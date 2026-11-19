---
id: rollei
title: "Rollei IPC-88 (Aldi-Kamera) in Gladys: RTSP und ONVIF"
description: "So verbindest du die Rollei IPC-88, die günstige Überwachungskamera von Aldi, mit Gladys Assistant. ONVIF aktivieren, RTSP-URL herausfinden und den Stream lokal ansehen."
sidebar_label: Rollei (Aldi-Kamera)
keywords:
  - rollei ipc-88
  - rollei ipc 88
  - aldi kamera
  - rollei kamera aldi
  - rollei ipc-88 einrichten
  - rollei rtsp
  - aldi überwachungskamera
  - rollei onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

Die **Rollei IPC-88** ist die günstige Innen-Überwachungskamera, die regelmäßig bei **Aldi** für rund 20 Euro angeboten wird. Wie die meisten Kameras in dieser Preisklasse basiert sie auf der **Tuya**-Plattform und wird mit der **Smart Life**-App gekoppelt. Die gute Nachricht: Sie stellt einen **ONVIF/RTSP**-Stream bereit, sodass du sie zu Gladys Assistant hinzufügen und komplett in deinem lokalen Netzwerk ansehen kannst.

Gladys verbindet sich mit Kameras über ihren [RTSP-Stream](/de/docs/integrations/camera), direkt in deinem LAN. Sobald die Kamera in Gladys eingebunden ist, bleibt das Videobild zu Hause: Es läuft weder über die Tuya- noch über die Rollei-Cloud und funktioniert auch ohne Internetverbindung weiter.

## Bevor du loslegst

Die IPC-88 muss einmalig mit der **Smart Life**-App (oder Tuya Smart) in deinem WLAN gekoppelt werden. Diese erste Kopplung ist Pflicht: Nur so erhält die Kamera deine WLAN-Zugangsdaten. Danach passiert alles, was wir hier machen, lokal.

Zwei Dinge solltest du über diese Kamera wissen, bevor du etwas darauf aufbaust:

- Sie wird **über das Stromnetz versorgt und hat keinen Pufferakku**, nimmt also bei einem Stromausfall nichts auf. Sie ist eine gute Überwachungskamera, aber kein Ersatz für eine richtige Alarmanlage.
- Ihre Infrarot-LEDs leuchten nachts sichtbar rot, und die Audioqualität ist bescheiden. Für 20 Euro ist das der Kompromiss.

## Schritt 1: ONVIF in der Smart Life-App aktivieren

Der RTSP-Stream wird erst bereitgestellt, wenn ONVIF eingeschaltet ist:

1. Öffne die **Smart Life**-App und wähle deine Rollei IPC-88 aus.
2. Öffne die **Einstellungen** der Kamera (das Stift- oder Zahnradsymbol oben rechts).
3. Suche den Eintrag **ONVIF** und aktiviere ihn.
4. Wenn die App dich auffordert, einen ONVIF-Benutzernamen und ein Passwort festzulegen, notiere sie dir: Das sind die Zugangsdaten, die du in der RTSP-URL verwendest, nicht die deines Tuya-Kontos.

Zeigt deine Firmware keinen ONVIF-Eintrag an, prüfe zuerst in der App, ob ein Firmware-Update verfügbar ist: Die Option wurde im Laufe der Zeit in mehrere Tuya-Kamera-Firmwares nachgerüstet.

## Schritt 2: Die RTSP-URL deiner Kamera herausfinden

Tuya-basierte Kameras verwenden nicht alle denselben RTSP-Pfad, und er kann sich zwischen Firmware-Versionen ändern. Am zuverlässigsten ist es daher, dir die genaue URL von einem ONVIF-Tool anzeigen zu lassen:

1. Installiere einen ONVIF-Client. **Onvier** (Android) wird von den meisten Nutzern dieser Kamera verwendet, und **ONVIF Device Manager** funktioniert gut unter Windows.
2. Starte eine Suche in deinem lokalen Netzwerk: Die Kamera erscheint mit ihrer IP-Adresse.
3. Verbinde dich mit ihr (mit den ONVIF-Zugangsdaten, falls du welche festgelegt hast) und öffne die Stream-Informationen: Das Tool zeigt die vollständige RTSP-URL des Haupt- und des Substreams an.

Die URL sieht in der Regel so aus, auf Port `554`:

```text
rtsp://192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/
```

Ein paar Hinweise:

- Bei vielen IPC-88 werden **überhaupt keine Zugangsdaten** in der URL benötigt: Die einfache Form `rtsp://CAMERA_IP:554/...` funktioniert im lokalen Netzwerk so, wie sie ist.
- Reservierte Zeichen in Benutzername oder Passwort müssen in der URL prozentkodiert werden, sonst wird sie nicht korrekt ausgewertet. Am häufigsten betrifft das `@`, das zu `%40` wird, aber dasselbe gilt für `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) und das Leerzeichen (`%20`).
- Gib der Kamera eine **feste IP-Adresse** (am einfachsten über eine DHCP-Reservierung in deinem Router). Ändert sich ihre IP, funktioniert die in Gladys gespeicherte RTSP-URL nicht mehr.
- Stellt die Kamera zwei Streams bereit, reicht für eine Dashboard-Kachel meist der leichtere **Sub**-Stream, und er belastet deinen Gladys-Server weniger.

## Schritt 3: Die URL in VLC testen

Bevor du die Kamera zu Gladys hinzufügst, prüfe in [VLC](https://www.videolan.org/vlc/), ob die URL funktioniert: Öffne **Medien → Netzwerkstream öffnen...**, füge die URL ein und prüfe, ob der Stream abgespielt wird. Wenn VLC ihn abspielt, sollte Gladys das auch können, sofern es den Codec deiner Kamera unterstützt.

Zeigt VLC nichts an, geh die üblichen Verdächtigen durch:

- ONVIF ist in der Smart Life-App wirklich aktiviert, und die Kamera wurde seitdem neu gestartet.
- Die IP-Adresse ist die aktuelle, und dein Computer ist im selben Netzwerk wie die Kamera.
- Die Zugangsdaten sind, falls die Kamera welche verlangt, die ONVIF-Zugangsdaten und korrekt prozentkodiert.
- Der RTSP-Pfad ist der vom ONVIF-Tool gemeldete und nicht einer, der von einer anderen Kameramarke übernommen wurde.

## Schritt 4: Die Kamera zu Gladys hinzufügen

Sobald deine RTSP-URL bestätigt ist:

1. Gehe in Gladys auf den Tab **Integrationen** und öffne die Integration **Kamera**.
2. Klicke auf **Neu**, füge deine RTSP-URL ein und gib der Kamera einen Namen.
3. Klicke auf **Verbindung testen** und dann auf **Speichern**.
4. Füge die Kamera einem Dashboard hinzu und lass dir von Gladys optional einen Schnappschuss in einer Szene oder per Telegram-Nachricht schicken.

Die vollständige Anleitung mit Screenshots findest du auf der [Seite zur Kamera-Integration](/de/docs/integrations/camera).

## Andere Aldi-Kameras

Aldi verkauft mehrere Kamerafamilien unter dem Namen Rollei, und sie verhalten sich nicht alle gleich:

- **WLAN-Überwachungskameras für innen und außen** (die IPC-88 und ihre Geschwister) basieren auf Tuya und stellen in der Regel ONVIF/RTSP bereit, die obige Methode funktioniert also.
- **Wildkameras** (Fotofallen) zeichnen auf eine SD-Karte auf und versenden bei 4G-Modellen Bilder per E-Mail oder MMS. Sie haben keinen Live-RTSP-Stream und kein Video im lokalen Netzwerk und können daher nicht zu Gladys hinzugefügt werden.

Wenn du eine Kamera kaufen möchtest, statt eine vorhandene weiterzuverwenden, sparst du Zeit mit einem Modell, das seine RTSP-Unterstützung klar dokumentiert. Auf den Seiten zu [Reolink](/de/docs/integrations/external/reolink/) und [Imou](/de/docs/integrations/imou) findest du zwei Produktreihen mit einer vorhersehbaren RTSP-URL.

## Häufige Fragen

### Unterstützt die bei Aldi verkaufte Rollei IPC-88 RTSP?

Ja. Die Rollei IPC-88 ist eine Tuya-basierte Kamera, die einen ONVIF/RTSP-Stream bereitstellt, sobald ONVIF in der Smart Life-App aktiviert ist. Die genaue RTSP-URL liest du dann mit einem ONVIF-Client wie Onvier oder ONVIF Device Manager aus und verwendest diese URL in Gladys.

### Wie lautet die RTSP-URL einer Rollei IPC-88?

Sie verwendet Port 554 und hat in der Regel die Form `rtsp://CAMERA_IP:554/...`, oft ohne dass im lokalen Netzwerk Zugangsdaten nötig sind. Der genaue Pfad hängt von der Firmware ab. Statt ihn zu raten, lass besser ein ONVIF-Suchtool in deinem Netzwerk laufen: Es zeigt dir die vollständige RTSP-URL des Haupt- und des Substreams deines Geräts an.

### Kann ich eine Aldi-Kamera ohne Cloud nutzen?

Nach der Kopplung ja, was den Videostream betrifft. Die erste Kopplung läuft über die Smart Life-App und die Tuya-Cloud, danach liest Gladys den RTSP-Stream aber direkt in deinem lokalen Netzwerk. Das Video verlässt also nie dein Zuhause, und die Kamera wird in Gladys auch ohne Internetverbindung weiter angezeigt.

### Warum taucht meine Rollei-Kamera nicht in der ONVIF-Suche auf?

Die üblichen Ursachen sind: ONVIF ist in der Smart Life-App noch deaktiviert, die Kamera befindet sich in einem anderen Netzwerk oder VLAN als dein Computer (2,4-GHz-Gastnetzwerke sind eine klassische Falle), oder die Firmware ist älter als die ONVIF-Option. Aktiviere ONVIF, starte die Kamera neu, prüfe auf ein Firmware-Update und starte die Suche erneut von einem Gerät im selben Netzwerk.

### Ist die Rollei IPC-88 eine gute Überwachungskamera?

Sie ist eine preiswerte Überwachungskamera, hat aber keinen Pufferakku, fällt also bei einem Stromausfall aus, und ihre Nachtsicht-LEDs sind sichtbar. Für eine echte Einbruchserkennung kombinierst du sie besser mit Tür- und Bewegungssensoren und nutzt sie zur visuellen Kontrolle statt als eigentliche Alarmanlage. Sieh dir dazu unseren [Ratgeber für eine selbstgebaute Alarmanlage](/de/diy-home-alarm-system/) an.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Unterstützt die bei Aldi verkaufte Rollei IPC-88 RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Die Rollei IPC-88 ist eine Tuya-basierte Kamera, die einen ONVIF/RTSP-Stream bereitstellt, sobald ONVIF in der Smart Life-App aktiviert ist. Die genaue RTSP-URL liest du dann mit einem ONVIF-Client wie Onvier oder ONVIF Device Manager aus und verwendest diese URL in Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lautet die RTSP-URL einer Rollei IPC-88?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sie verwendet Port 554 und hat in der Regel die Form rtsp://CAMERA_IP:554/..., oft ohne dass im lokalen Netzwerk Zugangsdaten nötig sind. Der genaue Pfad hängt von der Firmware ab. Statt ihn zu raten, lass besser ein ONVIF-Suchtool in deinem Netzwerk laufen: Es zeigt dir die vollständige RTSP-URL des Haupt- und des Substreams deines Geräts an.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich eine Aldi-Kamera ohne Cloud nutzen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nach der Kopplung ja, was den Videostream betrifft. Die erste Kopplung läuft über die Smart Life-App und die Tuya-Cloud, danach liest Gladys den RTSP-Stream aber direkt in deinem lokalen Netzwerk. Das Video verlässt also nie dein Zuhause, und die Kamera wird in Gladys auch ohne Internetverbindung weiter angezeigt.",
        },
      },
      {
        "@type": "Question",
        name: "Warum taucht meine Rollei-Kamera nicht in der ONVIF-Suche auf?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die üblichen Ursachen sind: ONVIF ist in der Smart Life-App noch deaktiviert, die Kamera befindet sich in einem anderen Netzwerk oder VLAN als dein Computer, oder die Firmware ist älter als die ONVIF-Option. Aktiviere ONVIF, starte die Kamera neu, prüfe auf ein Firmware-Update und starte die Suche erneut von einem Gerät im selben Netzwerk.",
        },
      },
      {
        "@type": "Question",
        name: "Ist die Rollei IPC-88 eine gute Überwachungskamera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sie ist eine preiswerte Überwachungskamera, hat aber keinen Pufferakku, fällt also bei einem Stromausfall aus, und ihre Nachtsicht-LEDs sind sichtbar. Für eine echte Einbruchserkennung kombinierst du sie besser mit Tür- und Bewegungssensoren und nutzt sie zur visuellen Kontrolle statt als eigentliche Alarmanlage.",
        },
      },
    ],
  }}
/>
