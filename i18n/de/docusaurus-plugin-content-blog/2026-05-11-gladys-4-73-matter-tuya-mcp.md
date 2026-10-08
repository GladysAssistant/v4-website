---
title: "Gladys 4.73: Großes Matter.js-Upgrade, Local Tuya & MCP-Server"
description: "Gladys 4.73 bringt ein großes Matter.js-Upgrade, die erste Grundlage für Local Tuya, Verbesserungen bei Energie und MCP sowie ein stabileres Airplay."
authors: pierregilles
image: /img/presentation/gladys-4-73-matter-tuya-mcp-en.jpg
slug: gladys-4-73-matter-tuya-mcp
---

Hallo zusammen 👋

Eine neue Version von Gladys Assistant ist verfügbar: **v4.73.0!** Dieses Release bringt mehrere wichtige Verbesserungen rund um Energie, Matter, die Unterstützung von Local Tuya und die Airplay-Integration.

{/* truncate */}

## 🧩 Matter.js auf 0.16.11 aktualisiert

Gladys liefert jetzt die neueste Version von Matter.js (`0.16.11`) mit. Das ist ein großes Update, wir springen von 0.13.0 nach oben, und es verbessert die Kompatibilität und Stabilität von Matter-Geräten.

Bitte prüfe nach diesem Update, ob deine Matter-Geräte noch funktionieren, denn es gibt eine Migration der Matter.js-Dateien, die bei einigen Nutzern etwas knifflig war.

➡️ [Pull Request #2501](https://github.com/GladysAssistant/Gladys/pull/2501)

## 🔌 Local Tuya: die erste Grundlage

Dieser erste PR legt den Grundstein für die Unterstützung von **Local Tuya** in Gladys, mit der du später einige Tuya-Geräte lokal steuern kannst, ohne von der Cloud abhängig zu sein. Danke [@Terdious](https://community.gladysassistant.com/)!

➡️ [Pull Request #2434](https://github.com/GladysAssistant/Gladys/pull/2434)

## ⚡ Energiemanagement & MCP-Optimierung

Diese Version fügt neue Energiefunktionen hinzu und verbessert die Performance des MCP (Model Context Protocol), das von KI-Clients genutzt wird. Danke [@bertrandda](https://community.gladysassistant.com/)!

➡️ [Pull Request #2522](https://github.com/GladysAssistant/Gladys/pull/2522)

## 🔊 AirTunes-Bibliothek ersetzt

Die Bibliothek `airtunes` wurde durch `airplay-sender` ersetzt, um die Stabilität und Wartbarkeit der Airplay-Funktion zu verbessern. Nochmals danke, @bertrandda!

➡️ [Pull Request #2439](https://github.com/GladysAssistant/Gladys/pull/2439)

---

Wie immer kannst du Gladys direkt über die Oberfläche aktualisieren oder einfach warten, bis es sich selbst aktualisiert. Danke an alle Mitwirkenden 🙌

🔗 [Vollständiges Changelog](https://github.com/GladysAssistant/Gladys/compare/v4.72.1...v4.73.0)
