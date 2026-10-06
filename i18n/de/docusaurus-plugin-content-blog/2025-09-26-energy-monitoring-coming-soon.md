---
title: Energiemonitoring kommt bald zu Gladys
description: "Entdecke die neue Gladys-Integration „Energiemonitoring“: Verfolge deinen Stromverbrauch auf den Cent genau und hilf beim Testen mit!"
authors: pierregilles
image: /img/presentation/energy-monitoring-coming-soon-en.jpg
slug: energy-monitoring-coming-soon
---

Hallo zusammen,

Ende Mai habe ich mich mit Thomas Lemaistre ([**@Terdious**](https://community.gladysassistant.com/u/terdious/summary) im Forum) unterhalten, und er hat mir seine Elektroinstallation erklärt: mehrere Zähler, Solarpanels, ein Elektroauto … und bald auch Batterien, um seine Energie zu speichern.

**Sein Ziel in Gladys:**

👉 Seinen Verbrauch direkt in **Euro** verfolgen  
👉 Die verschiedenen Energieflüsse in seinem Zuhause visualisieren  
👉 Die Leistung seiner Solarpanels messen  
👉 Und vor allem wissen, wie nah er an der **Energieautarkie** ist 🌞🔋

Von solchen Features für Gladys träume ich schon lange 😍 Aber es ist ein großes Projekt, das ohne Finanzierung schwer anzustoßen ist.

Im Juni hat **@Terdious angeboten, die Entwicklung selbst zu finanzieren**. Einfach so! 🎉

Er hat ein detailliertes Lastenheft erstellt, ich habe ein Angebot gemacht, er hat es angenommen … und so konnte ich diesen Sommer mit dem Projekt loslegen.

Heute freue ich mich riesig, dir den **ersten Teil** dieser Entwicklung zu zeigen!

{/* truncate */}

## Was bisher entwickelt wurde

### Konfiguration

In Gladys gibt es eine brandneue Integration: **„Energiemonitoring“** 🎉

![Integration Energiemonitoring](../../../static/img/articles/en/energy-monitoring-coming-soon/energy-monitoring-integration.png)

Hier findest du alle Optionen rund um das Energiemonitoring in Gladys.

Im ersten Tab kannst du den Aufbau deiner Elektroinstallation festlegen, indem du deine Geräte hierarchisch anordnest. So versteht Gladys, wie der Strom in deinem Zuhause fließt.

![Hierarchie der Gerätefunktionen](../../../static/img/articles/en/energy-monitoring-coming-soon/device-features-hierarchy.png)

👉 Anschließend kannst du deine Stromtarife eingeben. Und eine wichtige Neuerung: Gladys verwaltet auch den Tarifverlauf! Denn anders als andere Hausautomations-Software berücksichtigen wir, dass sich Preise im Laufe der Jahre ändern … und deine Berechnungen sollen Jahr für Jahr die Realität widerspiegeln.

![Preise konfigurieren 1](../../../static/img/articles/en/energy-monitoring-coming-soon/configure-prices-1.png)
![Preise konfigurieren 2](../../../static/img/articles/en/energy-monitoring-coming-soon/configure-prices-2.png)
![Preise konfigurieren 3](../../../static/img/articles/en/energy-monitoring-coming-soon/configure-prices-3.png)

Vorerst erfolgt die Eingabe manuell, ein automatischer Import ist aber bereits geplant.

**3 Vertragsarten werden bereits unterstützt:**

- Grundtarif
- Hochtarif/Niedertarif (HT/NT)
- EDF Tempo

Die ersten beiden sind komplett generisch und lassen sich daher überall auf der Welt nutzen. Ein amerikanischer Nutzer mit einem Hoch-/Niedertarifvertrag kann sie zum Beispiel problemlos verwenden.

Mein Anspruch ist klar: Die Berechnungen von Gladys sollen genauso präzise sein wie die deines Energieversorgers. Auf den Cent genau.

**Keine Näherungswerte**: Zuverlässigkeit ist das A und O.

Genau dort steckte auch die meiste Arbeit: eine ultrapräzise Berechnungs-Engine umzusetzen. Ich habe Tests mit meinem eigenen EDF-Tempo-Vertrag gemacht, und die Ergebnisse stimmen exakt mit den Werten im EDF-Kundenportal überein ✅

Und eine gute Nachricht: Diese Integration funktioniert sowohl mit den Daten der Enedis-Integration (über Gladys Plus) als auch mit jeder beliebigen eigenen Verbrauchsquelle:

- einem Zigbee-Zwischenstecker,
- einem MQTT-Sensor,
- oder jedem anderen Messwert, den du an Gladys sendest.

### 📊 **Dashboard**

Ich habe ein Widget „Energiemonitoring“ hinzugefügt.

Damit siehst du deinen Verbrauch pro Jahr, Monat oder Tag auf einen Blick.

![Widget Energiemonitoring](../../../static/img/articles/en/energy-monitoring-coming-soon/dashboard-widget.png)

Und das ist erst der Anfang: Weitere Widgets werden das Monitoring ergänzen.

## **Wie geht es weiter?**

Hier brauche ich deine Hilfe:

Ich suche Nutzer, die mir beim Testen des Algorithmus helfen.

Konkret: Wenn du bereit bist, mir per privater Nachricht [im Forum](https://community.gladysassistant.com/) deine Verbrauchsdaten zu schicken, kann ich sie mit den Berechnungen von Gladys vergleichen und sicherstellen, dass die Ergebnisse perfekt übereinstimmen.

Das Ziel: schnell eine erste Beta des Energiemonitorings in Gladys veröffentlichen, bevor ich mich den weiteren Features widme, die @Terdious sich gewünscht hat.

## **Danke, Thomas**

Ich möchte mich ganz herzlich bei @Terdious bedanken – ohne ihn hätte es diese Entwicklung schlicht nicht gegeben. Dank seiner Finanzierung konnte ich dieses Projekt starten, und ich glaube, die ganze Community kann ihm ein großes DANKE sagen 🙌

Und für alle, die sich manchmal fragen, warum bestimmte Wünsche nicht schnell umgesetzt werden: Es ist nie eine Frage des Wollens, sondern der Ressourcen. Ich arbeite an Gladys je nach verfügbarer Finanzierung, und Beiträge wie dieser sind ein **enormer Beschleuniger** für das Projekt 🚀
