---
title: "Gladys 4.84: Externe Integrationen sind da 🚀"
description: "Gladys 4.84 bringt externe Integrationen: Template klonen, Integration auf GitHub veröffentlichen, und jeder kann sie mit einem Klick installieren. Nach wenigen Tagen sind bereits 20 Integrationen verfügbar."
authors: pierregilles
image: /img/presentation/gladys-4-84-external-integrations-en.jpg
slug: gladys-4-84-external-integrations
---

Hallo zusammen!

Version **4.84.0** ist draußen, und es ist wahrscheinlich das wichtigste Release in der Geschichte des Projekts. 🚀

Sechs Jahre lang haben wir geduldig **36 Integrationen** direkt im Kern von Gladys aufgebaut. Jede einzelne brauchte einen Pull Request, ein Review, Tests und jede Menge meiner Zeit. Genau das war der Flaschenhals des Projekts.

Dieser Flaschenhals ist ab heute Geschichte. Mit **externen Integrationen** kann jeder eine Gladys-Integration entwickeln und veröffentlichen, ohne mich um Erlaubnis zu fragen. Das Ergebnis kam schnell: **Bereits 20 Integrationen sind verfügbar**, entwickelt in wenigen Tagen von 6 verschiedenen Mitwirkenden.

Anders gesagt: In wenigen Tagen hat die Community **mehr als die Hälfte** dessen geschaffen, was wir in 6 Jahren erreicht hatten. Das ist ein echter Sprung für das Projekt.

{/* truncate */}

## 🧩 So funktionieren externe Integrationen

Eine externe Integration ist ein **Docker-Container**, der von Gladys überwacht wird. Er kommuniziert über eine eigene API mit Gladys, und Gladys erzeugt die komplette Oberfläche automatisch: Geräteliste, Erkennung, Konfigurationsformular.

Konkret heißt das für dich als Nutzer:

- Du öffnest den Integrationskatalog in Gladys
- Externe Integrationen erscheinen neben den nativen, mit einem Community-Badge
- Du klickst auf **Installieren**: Gladys lädt das Image herunter, startet den Container und zeigt die Oberfläche an
- Du kannst sie direkt aus Gladys heraus starten, stoppen, aktualisieren, ihre Logs ansehen oder sie deinstallieren

Jede Integration läuft in einer **isolierten Sandbox** (256 MB RAM, 0,5 CPU, schreibgeschütztes Dateisystem, isoliertes Netzwerk). Stürzt eine Integration ab, stürzt sie allein ab: Sie kann deine Gladys-Instanz nicht mit in den Abgrund reißen. Genau diese Garantie macht es sicher, Integrationen ohne Review zu veröffentlichen.

## 📦 20 Integrationen in wenigen Tagen

Das hat die Community bereits veröffentlicht:

**Geräte**: Airzone Cloud, De Dietrich, Enki, Freebox, MELCloud, MELCloud Home, MyNeomitis (Axenco), Netatmo, Philips Hue, Roborock, SmartThings, Spotify, TP-Link Kasa, Tuya, UPnP / IGD, Zendure

**Messaging**: CallMeBot, Free Mobile SMS, ntfy, Telegram

![Der Katalog der externen Integrationen, mit einer Karte pro Community-Integration](../../../static/img/articles/gladys-4-84-external-integrations/01-external-integrations-catalog-en.png)

Danke an [@callemand](https://github.com/callemand), [@cicoub13](https://github.com/cicoub13), [@Dreamthy](https://github.com/Dreamthy), [@Terdious](https://github.com/Terdious) und [@William-De71](https://github.com/William-De71) für diese ersten Integrationen!

👉 **[Den vollständigen Katalog auf der Website ansehen](/de/docs/integrations/external/)**, live aktualisiert.

## 👨‍💻 Ein Aufruf an alle Entwickler: Wir brauchen dich

Und hier komme ich auf dich zu.

Wenn du ein Gerät besitzt, das Gladys nicht unterstützt, kannst du es jetzt **selbst zum Laufen bringen** und mit der ganzen Community teilen. In der Praxis bedeutet das:

- **Ein Template zum Klonen.** Das [offizielle Template](https://github.com/GladysAssistant/integration-template-js) enthält bereits eine funktionierende Integration (Sensoren, ein Schalter, eine dimmbare Lampe, eine Steckdose, eine Kamera), das JavaScript-SDK, ein Dockerfile und einen GitHub-Actions-Workflow, der dein Image mit einem Klick baut und veröffentlicht. Du startest mit etwas, das läuft, und ersetzt die Logik durch deine eigene.
- **Mit KI geht es noch schneller.** Der einfachste Weg heute: Template klonen und Claude bitten, die Integration auf dieser Basis für dein Gerät umzuschreiben. Genau so habe ich die CallMeBot-Integration zu einer externen Integration portiert, und meiner Erfahrung nach war das Ergebnis auf Anhieb gut.
- **Du bist mit deinem Protokoll nicht allein.** Für viele Geräte gibt es woanders schon eine Open-Source-Bibliothek oder -Integration. Du kannst dich daran orientieren oder die bestehende Abhängigkeit direkt wiederverwenden: Damit ist oft schon der Großteil der Arbeit erledigt.
- **Kein Pull Request, kein Review, keine Freigabe durch mich.** Du veröffentlichst ein öffentliches GitHub-Repository mit einer Manifest-Datei, fügst das Topic `gladys-assistant-integration` hinzu, und das war's.
- **Innerhalb einer Stunde veröffentlicht.** Ein automatischer Indexer läuft jede Stunde, prüft dein Manifest und veröffentlicht deine Integration im Katalog **jeder Gladys-Instanz**.

Noch nie war es so einfach, zu Gladys beizutragen. Wenn jeder die Integration beisteuert, die er braucht, können wir in wenigen Monaten abdecken, was wir in Jahren nie geschafft hätten.

👉 **[Die Schritt-für-Schritt-Anleitung für Entwickler lesen](/de/docs/dev/external-integrations/)**

Und wenn du etwas veröffentlichst, zeig es uns [im Forum](https://community.gladysassistant.com/): Ich bin schon gespannt, was du baust.

## 🤖 Die KI von Gladys wird immer besser

Der KI-Assistent wird stetig besser, und mehrere Wünsche kamen direkt aus dem Forum:

- **Volle Lichtsteuerung**: Du kannst Gladys jetzt bitten, **Helligkeit, Farbe und Farbtemperatur** einer Lampe einzustellen, nicht nur sie ein- oder auszuschalten.
- **Fragen zur Energie**: Gladys beantwortet jetzt **Fragen zu Verbrauch (kWh) und Kosten über einen Zeitraum** („Wie viel hat mich der Strom im Juli gekostet?“).
- **Zuverlässigere Szenenerstellung**: Ein zweistufiges Tool-Routing verbessert die Qualität der von der KI erzeugten Szenen deutlich.
- **Besser formatierte Antworten**: Das Markdown in KI-Antworten wird im Chat endlich korrekt dargestellt. Kein rohes `**27 °C**` mehr.

## 🏠 Matter

- **Klimaanlagen**: Verwaltung des Betriebsmodus (Thermostat SystemMode), gewünscht im Forum.
- **CO2-Sensoren**: werden jetzt unterstützt.
- **Absturz „Cannot mix BigInt and other types“** bei elektrischen Attributen behoben.
- matter.js auf 0.17.6 aktualisiert.

## 🔌 Weitere Integrationen

- **Enedis**: Die Energiekosten werden nach jeder Synchronisierung neu berechnet.
- **CalDAV**: bessere Synchronisierung, inklusive Unterstützung gelöschter Termine.
- **Zigbee2MQTT**: Die IEEE-Adresse und der Z2M-Link gehen nach dem Speichern eines Geräts nicht mehr verloren.
- **MQTT**: Ein leeres benutzerdefiniertes Topic matcht nicht mehr jede Nachricht, und der Status „manuell gestoppt“ wird beim Speichern der Konfiguration korrekt zurückgesetzt.
- **Telegram**: Die Integration kann jetzt deaktiviert werden (stoppt den Bot, löscht den Schlüssel, trennt die Verknüpfung mit den Nutzern).
- **RTSP-Kameras**: lesbarere Logs, wenn das Abrufen eines Bildes fehlschlägt.

## 🖥️ Oberfläche

- **Diagramme**: Die angezeigten Einheiten folgen jetzt den aktuellen Einheiten der Gerätefunktionen, und undefinierte Werte bringen die Formatierung nicht mehr durcheinander.
- **Dashboard**: Es ist jetzt klar ersichtlich, dass der Tablet-Modus nur für den aktuellen Browser gilt.
- **Integrationskatalog**: Deine Filter und deine Sortierung bleiben erhalten, wenn du von einer Integrationsseite zurücknavigierst, und ein Button lässt dich den Katalog bei Bedarf aktualisieren.

## 🛠️ Technisches

- Die Installation der Service-Abhängigkeiten läuft jetzt **parallel** (4 gleichzeitig), was den Build von Gladys spürbar beschleunigt. Das betrifft nur die Entwicklung: An deiner Instanz ändert sich dadurch nichts.
- Fehler in Messaging-Diensten sind jetzt isoliert: Ein fehlerhafter Dienst hindert die anderen nicht mehr daran, die Nachricht zuzustellen.
- Auf CI-Seite: Docker-Images von Branches werden automatisch in die GitHub-Registry gepusht, und ein Befehl `/build-arm64` baut bei Bedarf ein ARM64-Image für einen PR.

## ❤️ Danke

Danke an alle, die zu dieser Version beigetragen haben, und ganz besonders an die ersten Entwickler externer Integrationen, die schon vor der offiziellen Ankündigung losgelegt haben. In wenigen Tagen habt ihr bewiesen, dass das Modell funktioniert.

Wie immer aktualisiert sich Gladys innerhalb von 24 Stunden automatisch, wenn du Watchtower verwendest. Ansonsten geht es mit einem Klick in den Einstellungen.

Denk daran, Telegram einzurichten, damit du auf deinem Handy benachrichtigt wirst, wenn Gladys sich aktualisiert!

[Die vollständigen Release Notes auf GitHub ansehen](https://github.com/GladysAssistant/Gladys/releases/tag/v4.84.0)
