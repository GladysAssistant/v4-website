---
title: "Neue KI-Architektur: Gladys wird zu einem echten KI-Agenten 🤖"
description: "Gladys wird zu einem echten KI-Agenten: Es denkt jetzt nach, verkettet Tool-Aufrufe und handelt, um auch komplexe Anfragen zu erfüllen – mit einer komplett neu gestalteten Chat-Oberfläche."
authors: pierregilles
image: /img/presentation/gladys-becomes-real-ai-agent-en.jpg
slug: gladys-becomes-real-ai-agent
---

Hallo zusammen,

Seit ich KI zum ersten Mal in Gladys integriert habe, war das Versprechen da, aber die Realität blieb begrenzt: Du hast eine Frage gestellt, die KI hat geantwortet. Eine Eingabe, eine Ausgabe. Kein Nachdenken dazwischen, keine echte Eigenständigkeit. **Was ich heute ankündige, ändert das grundlegend.**

![Gladys-KI: vorher](../../../static/img/articles/gladys-becomes-real-ai-agent/01.png)

{/* truncate */}

## Gladys kann jetzt „nachdenken“, bevor es antwortet

Vielleicht kennst du Claude Code, den Entwicklungsagenten von Anthropic, der ein komplexes Problem zerlegt, iteriert, Tools nutzt und sich anpasst, bis er die Lösung findet. Genau dieses Modell habe ich auf Gladys übertragen.

![Gladys-KI: jetzt](../../../static/img/articles/gladys-becomes-real-ai-agent/02.png)

Wenn du Gladys ab sofort eine Frage stellst, versucht es nicht mehr nur, eine Antwort zu formulieren. Es **handelt.** Es kann mehrere Tool-Aufrufe hintereinander verketten, um sein Ziel zu erreichen:

- Wie hoch ist der CO2-Wert im Wohnzimmer gerade?
- Mach das Licht im Wohnzimmer an und schalte den Ventilator aus
- Zeig mir meinen Energieverbrauch im letzten Monat
- Erstelle eine Szene, die mir jeden Morgen um 7 Uhr eine Nachricht mit dem CO2-Wert im Wohnzimmer und in der Küche sowie dem Zustand meiner Türen schickt
- Erstelle eine Szene, die bei Bewegung in meiner Garage der KI ein Foto meiner Kamera schickt und prüft, ob das Auto mein rotes Tesla Model 3 ist. Wenn ja, bleibt die KI still; wenn nicht, warnt sie mich, dass ein unbekanntes Auto da ist.

Das sind Anfragen, für die man vorher mehrere manuelle Schritte gebraucht hätte oder die schlicht gar nicht funktioniert haben! Diese Arbeit baut zum Teil auf dem MCP-Server auf, den [@bertrandda](https://community.gladysassistant.com/) entwickelt hat und den ich in diese neue Architektur integriert habe. Danke an ihn!

## Eine neu gestaltete, wirklich nutzbare Oberfläche

Ich habe die Gelegenheit auch genutzt, um die Chat-Oberfläche komplett neu zu bauen. Übersichtlicher, flüssiger und endlich auch auf dem Handy gut nutzbar.

![Neu gestaltete Chat-Oberfläche](../../../static/img/articles/gladys-becomes-real-ai-agent/03.jpg)

![Chat auf dem Handy](../../../static/img/articles/gladys-becomes-real-ai-agent/04.jpg)

Jeder Tool-Aufruf wird in der Konversation klar angezeigt, sodass du verstehst, was Gladys gerade tut, und leicht herausfinden kannst, wenn etwas nicht wie geplant läuft.

![In der Konversation angezeigte Tool-Aufrufe](../../../static/img/articles/gladys-becomes-real-ai-agent/05.jpg)

### Auch auf Telegram und Nextcloud Talk

Du nutzt Gladys unterwegs über Telegram oder Nextcloud Talk? Der verbesserte Agent ist auch auf diesen Kanälen verfügbar, du hast also die volle Power direkt auf deinem Handy, ohne die Weboberfläche öffnen zu müssen.

![Der KI-Agent auf Telegram](../../../static/img/articles/gladys-becomes-real-ai-agent/06.jpg)

### Jetzt kostenlos ausprobieren

Aktualisiere Gladys zuerst auf v4.76.0. Dann brauchst du Gladys Plus, und ich biete dir [einen kompletten Testmonat an, ohne Kreditkarte](/de/plus/). Jedes Konto bekommt **3.000 Anfragen pro Monat + 500 Anfragen zur Bildanalyse.** Das reicht mehr als aus, um zu entdecken, was der Agent alles kann, und ich bin gespannt auf dein Feedback: was funktioniert, was dich überrascht und was du dir als Nächstes wünschst!

Beim KI-Modell bin ich mit Mistral Small 3.2 an die Grenzen dieses Tools gestoßen, deshalb bin ich vorerst auf Gemma 4 umgestiegen – weiterhin bei Scaleway, in Frankreich gehostet, mit vollständig privaten Daten 🔒

Natürlich kann es noch Bugs geben, und ich freue mich sehr über dein Feedback 🙂
