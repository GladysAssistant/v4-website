---
title: OpenAI GPT-3 jetzt in Gladys Assistant verfügbar
description: Gib Gladys die Kraft der künstlichen Intelligenz!
authors: pierregilles
image: /img/presentation/open-ai-gpt-3-release.jpg
slug: open-ai-gpt-3-in-gladys-assistant
---

:::info[Artikel vom Januar 2023 – die KI in Gladys hat sich seitdem stark verändert]
Gladys setzt nicht mehr auf OpenAI. Der KI-Assistent läuft jetzt mit **Open-Weight-Modellen, die in Frankreich gehostet werden** (Scaleway), über [Gladys Plus](/de/plus/) – deine Anfragen bleiben also in Europa.

Außerdem beantwortet er nicht mehr nur Fragen: Gladys **steuert heute tatsächlich dein Zuhause**. Es schaltet Lampen ein, liest Sensoren aus, zeigt deine Kameras an und kann Szenen für dich ausführen oder sogar erstellen.

👉 In der [aktuellen KI-Dokumentation](/de/docs/integrations/openai) siehst du, was Gladys heute alles kann.
:::

Hallo zusammen!

Sofern du nicht in einer Höhle lebst, hast du bestimmt schon von ChatGPT/GPT-3 gehört, einer künstlichen Intelligenz von OpenAI.

Im Internet hat jeder versucht, mit dieser KI zu chatten – sei es, um herauszufinden, ob sie uns im Job ersetzen wird, ob sie Uni-Prüfungen besser besteht als wir, oder einfach, um zu sehen, wie sie auf verzwickte Fragen reagiert.

Ich für meinen Teil halte diese KI für ein großartiges Werkzeug, eine Art Suchmaschine auf Steroiden, die natürliche Sprache versteht und Zugriff auf einen beeindruckenden Datenbestand hat!

{/* truncate */}

## Was hat das mit Gladys zu tun?

In Gladys gibt es schon immer einen Tab „Chat“, über den du Anfragen an Gladys schicken kannst: „Schalte das Licht im Wohnzimmer ein“, „Zeig mir die Kamera im Garten“, „Wie warm ist es im Badezimmer?“

Vom Prinzip her funktioniert dieser Tab genauso wie GPT-3: Wir haben ein neuronales Netz mit einem Datensatz trainiert, um ihm „beizubringen“, auf Befehle der Nutzer zu antworten.

Der Unterschied zwischen der aktuellen Umsetzung in Gladys und GPT-3 liegt in der Menge der Eingabedaten.

Während Gladys mit ein paar Befehlen trainiert wurde, hat GPT-3 175 Milliarden Parameter und wurde unter anderem trainiert mit:

- Petabytes an Webseiten, gecrawlt über 8 Jahre
- Allen Reddit-Inhalten mit mehr als 3 Upvotes
- Sehr vielen Büchern
- Der kompletten Wikipedia

Für das Training dieses Modells hat OpenAI einen Cluster aus 10.000 Nvidia-V100-Grafikkarten eingesetzt. Monströs!

Einmal trainiert, ist dieses Modell so groß, dass man einen Server mit mindestens 175 GB RAM braucht, um es auszuführen 🤯

Kurz gesagt: GPT-3 spielt in einer beeindruckenden Liga, die für uns im kleinen Maßstab kaum erreichbar ist.

## OpenAI-GPT-3-Integration in Gladys

OpenAI hat dieses Modell nicht nur für sich selbst gebaut, es ist über eine API verfügbar (und die ist nicht kostenlos, schließlich müssen die 10.000 Nvidia V100 irgendwie bezahlt werden ^^).

Genau diese API habe ich in Gladys integriert!

Ich habe ein paar Tests gemacht, um zu sehen, ob GPT-3 für die Hausautomation interessant sein könnte, und ehrlich gesagt: Es ist verblüffend.

Ich habe am „Prompt“ gefeilt, den ich an GPT-3 schicke, um den Rahmen der möglichen Interaktionen abzustecken, und das funktioniert super!

GPT-3 schafft es, jede Anfrage einzuordnen, und kann sehr viele Fragen beantworten – zur Erinnerung: GPT-3 hat Zugriff auf Inhalte aus allen Ecken des Internets.

Aber genug geredet …

## Showtime!

Fangen wir einfach an: Ich habe vergessen, wie man Eier kocht?

![Das Zuhause mit Gladys und GPT-3 steuern](../../../static/img/articles/en/openai-gpt-3-release/boiled-eggs.jpg)

Hier eine Frage zur Hausautomation – was meinst du, Gladys?

![Frage zum Stromverbrauch an Gladys und GPT-3](../../../static/img/articles/en/openai-gpt-3-release/reduce-electricity.jpg)

Ich weiß nicht mehr, wie man die Logs eines Docker-Containers anzeigt …

![Docker-Logs – Gladys und GPT-3](../../../static/img/articles/en/openai-gpt-3-release/docker-logs.jpg)

Wie hoch ist der Eiffelturm?

![Allgemeinwissen, Jules Verne – Gladys und GPT-3](../../../static/img/articles/en/openai-gpt-3-release/size-eiffel-tower.jpg)

Die KI scheint superschlau zu sein – ist das die Zukunft?

![Die nächsten 10 Jahre – Gladys und GPT-3](../../../static/img/articles/en/openai-gpt-3-release/ai-standard.jpg)

Aber ist das nicht gefährlich? Ich habe I, Robot gesehen, und da wurden die Menschen in ihren eigenen Häusern eingesperrt!

![Rebellische KI – Gladys und GPT-3](../../../static/img/articles/en/openai-gpt-3-release/i-robot-rebel.jpg)

Puh, da sind wir ja gerade noch an einer Katastrophe vorbeigeschrammt!

## Wie kann ich es testen?

Da die GPT-3-API nicht kostenlos ist, biete ich diese Integration allen Nutzern von [Gladys Plus](/de/plus) an.

Wenn du es testen möchtest, musst du zu Gladys Plus wechseln – und als Bonus unterstützt du das Wachstum eines großartigen Open-Source-Projekts 😊

Keine Ausreden!

➡️ [Mehr über Gladys Plus erfahren](/de/plus) ⬅️

Du brauchst Gladys Assistant v4.15, um diese Integration zu nutzen. Du findest sie im Tab „Integrationen“:

![Open-AI-Integration in Gladys](../../../static/img/articles/en/openai-gpt-3-release/open-ai-integration.jpg)

## Wie geht es weiter?

Im Moment ist diese Integration eine Alpha-Version. Ziel ist es, dein Feedback zu sammeln und dir das Testen zu ermöglichen.

Die Integration hat vorerst keine Auswirkungen auf deine Hausautomation: Wenn du sie bittest, das Licht einzuschalten, antwortet sie dir zwar, führt die Aktion aber nicht aus.

Je nach deinem Feedback können wir GPT-3 dann vollständig in Gladys integrieren.

Und, was hältst du davon? Bist du gespannt? 😄

Ich freue mich auf dein Feedback [im Forum](https://community.gladysassistant.com/)!

## Wie aktualisiere ich?

Um Gladys zu aktualisieren, empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).
