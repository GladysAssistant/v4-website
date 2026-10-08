---
id: voice-assistant
title: Mit dem Sprachassistenten vom Dashboard aus mit Gladys sprechen
description: "Sprich mit dem Sprachassistenten-Widget direkt vom Dashboard aus mit Gladys Assistant: Stell deine Frage, lies die Live-Transkription und die KI-Antwort mit und lass sie dir vorlesen."
sidebar_label: Sprachassistent
---

Mit dem in [Gladys Assistant 4.77](https://community.gladysassistant.com/t/gladys-assistant-4-77-un-assistant-vocal-dans-gladys/10249) eingeführten Widget **Sprachassistent** kannst du direkt von deinem Dashboard aus mit Gladys sprechen: Stell eine Frage, lies die Live-Transkription und die KI-Antwort mit und lass dir die Antwort auf deinem Gerät vorlesen.

Besonders praktisch ist das auf einem Wandtablet oder einem Smartphone, das auf der Arbeitsplatte liegt. Dein Smart Home wird sprachgesteuert – ganz ohne Sprachassistenten von Drittanbietern.

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/X-UtYMJoKV4" title="Demo des Sprachassistenten von Gladys Assistant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Was kannst du damit machen?

Der Sprachassistent nutzt denselben LLM-gestützten Agenten wie der Gladys-Chat. Es gibt keine feste Liste von Befehlen: Sprich ganz natürlich, und Gladys versteht dich.

Du kannst Geräte steuern, Sensoren abfragen, Szenen starten oder erstellen, Kameras ansehen und allgemeine Fragen stellen. Siehe die [Anwendungsbeispiele](/de/docs/integrations/openai#examples) in der Dokumentation der KI-Integration.

## Voraussetzungen

- Ein [Gladys Plus](/de/plus/)-Abo, bei dem deine Instanz mit dem Gateway verbunden ist.
- Ein Browser, der Mikrofonaufnahmen unterstützt (Chrome, Firefox, Edge, Safari in aktuellen Versionen).
- Eine **sichere Verbindung (HTTPS)**, um das Mikrofon nutzen zu können. Wenn du aus der Ferne auf Gladys zugreifst, öffne es über [plus.gladysassistant.com](https://plus.gladysassistant.com).
- Die Mikrofonberechtigung in deinem Browser (in Safari: **Einstellungen > Safari > Mikrofon**).

:::note
Ohne Gladys Plus wird das Widget zwar angezeigt, das Mikrofon bleibt aber deaktiviert. Eine Meldung fordert dich auf, deine Instanz mit Gladys Plus zu verbinden.
:::

## Das Widget zu deinem Dashboard hinzufügen

Öffne das Dashboard und klicke auf **Bearbeiten**.

Füge ein Widget **Sprachassistent** hinzu und klicke dann auf **Speichern**.

Eine weitere Konfiguration ist nicht nötig: Sobald Gladys Plus verbunden ist, ist das Widget einsatzbereit.

## Den Sprachassistenten verwenden

1. Klicke im Widget auf die Mikrofon-Schaltfläche.
2. Stell deine Frage. Die Aufnahme stoppt automatisch, sobald du aufhörst zu sprechen.
3. Gladys zeigt im Widget an, was du gesagt hast, und die Antwort der KI.
4. Die Antwort wird auf deinem Gerät vorgelesen (Sprachausgabe).

Der Assistent berücksichtigt deine letzten Unterhaltungen mit Gladys, um passendere Antworten im Kontext zu geben.

### Zustände des Widgets

| Zustand | Bedeutung |
| ----- | ------- |
| **Sprechen** | Bereit. Klicke auf das Mikrofon, um zu starten. |
| **Hört zu ...** | Aufnahme läuft. Sprich jetzt. |
| **Verarbeitung ...** | Gladys transkribiert deine Nachricht und erstellt eine Antwort. |
| **Spricht ...** | Die Antwort wird vorgelesen. |

### Tipp für Wandtablets

Wenn du Gladys auf einem Touchscreen-Tablet nutzt, kannst du das Dashboard im Vollbildmodus anzeigen, indem du der URL `?fullscreen=force` hinzufügst. Details findest du in der [Einführung zum Dashboard](/de/docs/dashboard/intro#tablet-mode).

## Einschränkungen

Dies ist ein erster Proof of Concept. Die Funktion wird sich anhand des Feedbacks der Community weiterentwickeln. Teile deine Erfahrungen gerne in der [Ankündigung im Forum](https://community.gladysassistant.com/t/gladys-assistant-4-77-un-assistant-vocal-dans-gladys/10249).

Die Sprachausgabe ist auf geringe Latenz optimiert. Manche Werte (Temperaturen, Einheiten wie ppm oder °C) werden gelegentlich falsch ausgesprochen. Wir beobachten Verbesserungen auf Seiten der Sprachsynthese.

## Fehlerbehebung

| Problem | Was tun? |
| ------- | ---------- |
| Mikrofon deaktiviert | Prüfe unter **Einstellungen > Gladys Plus**, ob Gladys Plus verbunden ist. |
| „Das Mikrofon erfordert eine sichere Verbindung“ | Öffne Gladys über HTTPS, idealerweise unter [plus.gladysassistant.com](https://plus.gladysassistant.com). |
| Mikrofon in Safari blockiert | Erlaube den Mikrofonzugriff unter **Einstellungen > Safari > Mikrofon**. |
| „Sprachaufnahme ist in diesem Browser nicht verfügbar“ | Probiere eine aktuelle Version von Chrome, Firefox, Edge oder Safari. |
| Allgemeiner Fehler | Prüfe deine Gladys-Plus-Verbindung und ob deine Instanz das Gateway erreichen kann. |

## Weiterführende Dokumentation

- [Gladys Plus](/de/docs/plus/intro)
- [KI nutzen, um dein vernetztes Zuhause zu steuern](/de/docs/integrations/openai)
- [Einführung zum Dashboard](/de/docs/dashboard/intro)
