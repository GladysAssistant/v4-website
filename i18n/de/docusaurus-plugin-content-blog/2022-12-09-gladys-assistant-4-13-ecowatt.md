---
title: Node.js 18 & Ecowatt-Integration
description: Senke deinen Stromverbrauch automatisch, wenn das Netz es braucht.
authors: pierregilles
image: /img/presentation/gladys-assistant-4-13-en.jpg
slug: gladys-assistant-4-13-ecowatt
---

Gladys Assistant 4.13 ist da, und es ist ein großes Release!

Wir haben die Entwickler-Erfahrung deutlich verbessert, Gladys auf Node.js 18 (von 14!) aktualisiert und bieten eine neue Integration für Nutzer in Frankreich.

{/* truncate */}

## Was ist neu in Gladys Assistant 4.13?

### Ecowatt-Integration

In Frankreich gibt es diesen Winter die Sorge, dass die Stromproduktion nicht ausreicht, um den Verbrauch zu Spitzenzeiten zu decken.

Unser Netzbetreiber hat eine API bereitgestellt, die den Bürgern die Tageszeiten nennt, zu denen das Netz am stärksten belastet ist.

Wir haben diese API in Gladys integriert, damit unsere Nutzer in Frankreich ihren Stromverbrauch automatisch senken können, wenn das Netz es am dringendsten braucht.

Im Dashboard siehst du den Zustand des Stromnetzes und die Prognosen:

![Ecowatt im Dashboard](../../../static/img/articles/en/gladys-4-13/ecowatt-dashboard.jpg)

In Szenen kannst du deinen Verbrauch automatisch senken, wenn das Netz am stärksten belastet ist:

![Ecowatt in Szenen](../../../static/img/articles/en/gladys-4-13/ecowatt-scene.jpg)

### Upgrade auf Node.js 18 LTS

Gladys basiert jetzt auf Node.js 18 LTS.

Das hat sich enorm auf die Geschwindigkeit unserer CI ausgewirkt, weil wir mit dem Upgrade viele kompilierte Polyfills entfernen konnten.

Zum Beispiel haben wir für die Ende-zu-Ende-Verschlüsselung in Gladys Plus ein Webcrypto-Polyfill verwendet – ab Node.js 16 ist die Webcrypto-API in Node nativ verfügbar.

Ergebnis: Unsere Tests laufen statt 16 Minuten jetzt nur noch 6 Minuten!

### Ende der Unterstützung für Open-Zwave

Wir unterstützen open-zwave nicht mehr, da sich diese Integration unter Node.js > 14 nicht mehr bauen ließ.

Da Node 14 nächstes Jahr sein End-of-Life erreicht, mussten wir upgraden, um Gladys sicher zu halten.

Wir arbeiten an einer neuen Integration auf Basis von Zwave-JS-UI. Bis dahin empfehlen wir dir die Kombination Node-RED + Gladys + Zwave-JS-UI.

## Wie aktualisiere ich?

Um Gladys zu aktualisieren, empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Danke an die Mitwirkenden

Danke an alle, die zu diesem Release beigetragen und ihr Feedback gegeben haben.

Wenn du über dieses Release sprechen möchtest, bist du im [Forum](https://community.gladysassistant.com/) herzlich willkommen!

## Unterstütze uns

Wenn du uns unterstützen möchtest, gibt es viele Möglichkeiten:

- Beantworte Beiträge im Forum und gib dein Feedback.
- Hilf uns, die Dokumentation zu verbessern.
- Entwickle neue Funktionen/Integrationen für Gladys – wir sind zu 100 % Open Source.
- Abonniere [Gladys Plus](/de/plus).
