---
title: "Gladys Assistant 5 ist da 🎉"
description: "Fast sechs Jahre nach v4 bekommt Gladys Assistant eine komplett neue Oberfläche. Horizon: ein Glas-Design fürs Smartphone in deiner Tasche, ein Dashboard, das du wirklich frei gestalten kannst, ein neu geschriebener Szenen-Editor und 67 Community-Integrationen."
authors: pierregilles
image: /img/presentation/gladys-assistant-5-en.jpg
slug: gladys-assistant-5
---

Hallo zusammen!

**Gladys Assistant 5 ist erschienen.** 🎉

Das ist die erste Major-Version von Gladys seit fast sechs Jahren, und es ist die, die ich schon sehr lange veröffentlichen wollte: ein komplettes Redesign der Oberfläche, vom Dashboard bis zur letzten Einstellungsseite.

![Das Dashboard von Gladys Assistant 5 im neuen Horizon-Design](../../../static/img/articles/gladys-assistant-5/01-horizon-dashboard-en.webp)

{/* truncate */}

## Ein kurzer Rückblick

Gladys ist **seit 2013** öffentlich. Angefangen hat alles als privates Projekt auf einem Raspberry Pi, in einem Schlafzimmer, mit einer ganz einfachen Idee: Dein Zuhause sollte von einer Maschine gesteuert werden, **die dir gehört**, die **bei dir zu Hause** steht und die weiterläuft, wenn das Internet ausfällt oder ein Startup aufgekauft wird.

Dreizehn Jahre später hat sich an dieser Idee nichts geändert, und sie ist gut gealtert.

- **2013**: die ersten Codezeilen, Gladys v1, auf einem Raspberry Pi.
- **2015**: Gladys v2, und eine Community bildet sich.
- **2016**: Gladys v3.
- **3. November 2020**: **Gladys 4**, komplett neu geschrieben, auf Docker-Basis, mit der Oberfläche, die die meisten von euch heute nutzen.
- **27. August 2026**: **Gladys Assistant 5**.

Zwischen v4 und heute haben wir **86 Feature-Updates** veröffentlicht, jedes davon ein richtiges Paket an Neuerungen, dazu die Bugfix-Releases dazwischen. Die Engine ist richtig gut geworden: Zigbee, Z-Wave, Matter, MQTT, Kameras, Energie, Szenen, ein KI-Assistent, ein Plugin-System. Aber die Oberfläche blieb die von 2020, entworfen für einen Laptop-Bildschirm, zu einer Zeit, in der ich nicht wirklich damit gerechnet habe, dass Leute Tablets an die Wand hängen und ihr Haus vom Smartphone aus im Bett steuern.

Genau das habt ihr gemacht. Version 5 ist also für den Bildschirm, den du tatsächlich benutzt.

## ☀️ Horizon, das neue Design

Das neue Design heißt **Horizon**. Es ist ein weiches, leuchtendes Glas-Theme: mattierte Flächen, die über einem lebendigen Farbverlauf schweben, großzügige Rundungen, echte Tiefe und eine Typografie, die den Zahlen endlich Luft zum Atmen lässt.

![Nahaufnahme des oberen Bereichs des Home-Dashboards: Uhr, Wetter und das Hausansicht-Widget](../../../static/img/articles/gladys-assistant-5/02-horizon-closeup-en.webp)

Das ist ein Zoom auf den oberen Teil eines Dashboards, in Originalgröße. Jedes Widget ist ein mattiertes Panel mit großem Radius, das über einem Farbverlauf schwebt, der hinter der ganzen Seite verläuft, statt Karte für Karte neu gezeichnet zu werden. In der Mitte sitzt die **Hausansicht**, das Aushängeschild dieses Releases: dein Zuhause als Illustration, mit Live-Werten genau dort, wo sie hingehören.

Das ist kein neuer Anstrich für zwei Bildschirme. **Jede Seite von Gladys wurde umgestellt**: das Dashboard, Geräte, Integrationen und jede ihrer Unterseiten, Diskussion, Aktivität, Kalender, Pläne, Szenen, Einstellungen, das Profil, sogar der Login-Bildschirm.

![Nahaufnahme der Gerätesteuerung: Segmented Controls, eine Sollwert-Kapsel und Schalter](../../../static/img/articles/gladys-assistant-5/03-horizon-controls-en.webp)

Und die Bedienelemente wurden eins nach dem anderen neu gezeichnet. Aus den alten Bootstrap-Buttongruppen wurden **Segmented Controls im iOS-Stil**: eine weiche Spur, ein einziges weißes aktives Segment. Sollwerte wurden zu **Kapseln** mit Minus und Plus. Jede Gerätezeile ist jetzt eine eigene, verschachtelte Glas-Kachel. Nichts davon ändert, was Gladys tut. Alles davon ändert, wie es sich anfühlt, wenn du es zwanzigmal am Tag benutzt.

Mein Lieblingsdetail sieht man eigentlich nur in Bewegung. Der Dashboard-Umschalter sitzt nicht in einer Leiste oben auf der Seite: Er ist eine **schwebende Kapsel**, die fixiert bleibt, während das Dashboard darunter scrollt, und ihr Hintergrund mattiert alles, was durchläuft. Ein Foto, ein Diagramm, ein Kartentitel: Alles verschwimmt beim Durchlaufen und wird auf der anderen Seite wieder scharf.

![Das Dashboard scrollt unter dem schwebenden Umschalter, der den darunterliegenden Inhalt mattiert](../../../static/img/articles/gladys-assistant-5/04-liquid-glass-en.webp)

Die Kapsel ist außerdem überall für den Mauszeiger durchlässig, außer auf ihren eigenen Pills, sodass die Widgets, die darunter durchgleiten, klickbar bleiben. Eine Kleinigkeit. Aber genau der Moment, in dem sich die Oberfläche nicht mehr wie eine Webseite anfühlt.

## 📱 Gebaut fürs Smartphone in deiner Tasche

Das ist der Teil, der mir am meisten am Herzen liegt, und der, der sich am schwersten in einem Screenshot zeigen lässt. Deshalb werde ich konkret.

![Gladys Assistant 5 auf dem Smartphone: der Startbildschirm, die Steuerung eines Raums und das Licht-Panel](../../../static/img/articles/gladys-assistant-5/05-mobile-en.webp)

Diese drei Bildschirme liegen nur eine Geste auseinander. Du öffnest Gladys und siehst dein Haus. Einmal scrollen, und du bist bei der Steuerung eines Raums: ein Licht, ein Rollladen, die Klimaanlage und ihr Sollwert, alles in Fingergröße. Du tippst auf das Licht und bekommst ein Vollbild-Panel mit einem Helligkeitsregler, den du mit dem Daumen ziehst, und einem Farbrad. Darum geht es in diesem Release.

**Der Dashboard-Umschalter ist nach unten gewandert.** Auf dem Smartphone ist der erreichbare Rand der untere, nicht der obere. Unterhalb des Desktop-Breakpoints löst sich die Tab-Leiste deshalb vom Header und wird zu einem schwebenden Dock in Daumenreichweite. Es berücksichtigt `safe-area-inset-bottom`, damit es auf dem iPhone nicht mit dem Home-Indikator kollidiert, und es folgt dem **Visual Viewport**: iOS Safari animiert beim Scrollen seine eigene untere Werkzeugleiste, und ohne diese Korrektur würde das Dock ständig darunter verschwinden. Jetzt nicht mehr.

**Nur der aktive Tab behält seinen Namen.** Die anderen schrumpfen zu Icon-Punkten. Auf einem 390-Pixel-Bildschirm ist das der Unterschied zwischen zwei sichtbaren Dashboards und fünf.

**Du kannst zwischen Dashboards wischen, und es fühlt sich nativ an.** Kein Neuladen der Seite: Das benachbarte Dashboard **gleitet als Skeleton unter deinem Finger herein**, mit exakt dem Layout, das das echte haben wird, und wechselt zu Live-Daten, sobald es angekommen ist. Die Geste rastet nach 12 Pixeln Weg auf eine Achse ein, wird bei 15 % der Bildschirmbreite oder bei einem schnellen Wisch ausgelöst und federt zurück, wenn auf der Seite kein Dashboard mehr ist. Widgets mit eigener horizontaler Geste (eine Karte, ein Schieberegler, eine scrollbare Gerätetabelle) behalten sie: Der Pager erkennt sie anhand ihrer Geometrie, nicht über eine fest kodierte Liste, sodass ein neues scrollbares Widget automatisch abgedeckt ist.

**Touch-Ziele wachsen nur für Finger.** Jedes Bedienelement in einem Widget erreicht die ~44-Pixel-Untergrenze der Apple HIG, aber nur unter `@media (pointer: coarse)`, sodass ein Laptop mit Touchscreen die kompakte Mausgröße behält, statt sich in einen Kiosk zu verwandeln. Dieselbe Idee beim Tippen auf eine Gerätezeile: Bei Touch ist die ganze Zeile das Ziel, mit der Maus nicht, denn ein versehentlicher Klick auf einen Gerätenamen darf niemals einen Live-Befehl an deine Lampen auslösen.

**Segmented Controls sind die Ausnahme von der 44-Pixel-Regel**, und zwar absichtlich: Innerhalb einer Segment-Spur ist die *ganze Spur* die Touch-Zone, daher behalten die Segmente die iOS-typische Höhe, statt sich zu einem Turm aus dicken Buttons zu stapeln.

**Popups brechen aus ihrer Karte aus.** Datumsauswahl, Zeitraum-Selektoren und Dropdown-Menüs werden ganz oben im Dokument gerendert statt innerhalb des Widgets, das sie geöffnet hat. So werden sie auf kleinen Bildschirmen nie von ihrer eigenen Karte abgeschnitten.

**Das Einstellungsmenü scrollt seitwärts**, mit Überlauf-Pfeilen, statt in sechs Zeilen umzubrechen, und Spalten, die nicht mehr passen, **brechen um**, statt zerquetscht zu werden.

Zwanzig kleine Entscheidungen. Zusammen machen sie den Unterschied zwischen einer Oberfläche, die auf dem Smartphone *funktioniert*, und einer, die dafür *gemacht* wurde.

## 🌙 Hell oder dunkel, du entscheidest

Horizon gibt es in beiden Varianten. Das dunkle Theme ist kein invertierter Filter, sondern bewusst gestaltet: dasselbe Glas, dieselbe Tiefe, an den Rändern etwas wärmer.

![Das Dashboard von Gladys Assistant 5 im Dark Mode](../../../static/img/articles/gladys-assistant-5/06-dark-mode-en.webp)

## 🧱 Ein Dashboard, das du wirklich gestalten kannst

Das alte Dashboard bestand aus N gleich breiten Spalten, Punkt. Wenn du links eine große Hausansicht und rechts einen Stapel kleiner Kacheln haben wolltest, ging das nicht.

Jetzt besteht ein Dashboard aus **Abschnitten**, und jeder Abschnitt hat seine eigenen Spalten:

- **Gewichtete Spaltenbreiten.** Eine Spalte ist *normal* oder *breit*. Ein Abschnitt `breit | normal` setzt links ein großes Panel und rechts einen Kachelstapel. Zwei Klicks, zwei Werte, kein Pixelgefummel.
- **Eine Chip-Leiste.** Kompakte Status-Pills oben auf einem Dashboard: Alarmstatus, „alles geschlossen", eine Temperatur, die Solarproduktion, der nächste Kalendertermin. Auf dem Smartphone umbrechen sie, statt überzulaufen.
- **Schnellaktionen und Szenen mit Live-Status.** Ein Szenen-Button zeigt dir jetzt, was die Szene gemacht hat: `Haus verlassen · An`.
- **Ein Hausansicht-Widget**: eine Illustration deines Zuhauses mit angehefteten Live-Werten.
- **Der Editor zeigt eine echte Vorschau.** Die Bearbeitungsfläche und die Ansicht teilen sich jetzt ein einziges Spaltenlayout mit denselben prozentualen Anteilen. Was du anordnest, ist das, was du bekommst.
- **Eine durchsuchbare Widget-Auswahl** mit Icon und Namen pro Typ statt eines einfachen Dropdowns.

Dashboards **brauchen jetzt ein Icon**, wenn du sie erstellst, und bei bestehenden Dashboards, deren Name mit einem Emoji beginnt, wird dieses Emoji automatisch zu ihrem Icon.

## 🎬 Der Szenen-Editor, neu geschrieben

Szenen waren der mächtigste und zugleich einschüchterndste Teil von Gladys. Der Editor ist jetzt ein **vertikaler Ablauf**: ein **WENN**-Block für die Auslöser, ein **DANN**-Block für die Schritte, jeder Schritt einklappbar, jede Aktion aus einer **nach Kategorien sortierten Auswahl** statt einer flachen Liste.

![Der neu geschriebene Szenen-Editor mit seinen WENN- und DANN-Blöcken](../../../static/img/articles/gladys-assistant-5/07-scene-editor-en.webp)

Außerdem neu bei den Szenen:

- **Laufende Szenen sehen und stoppen**, endlich.
- Eine Aktion **„Aktuelles Datum und Uhrzeit abrufen"**.
- Ein Modus **„jede Zustandsänderung"** beim Auslöser für Gerätezustände.
- Die Auswahl des Nachrichtenkanals listet nur die Messaging-Dienste auf, die du tatsächlich konfiguriert hast.
- Du kannst den ersten Aktionsblock einer Szene löschen.
- Kalenderereignisse kommen in den Szenenvariablen als lesbare Liste zurück.

## 🧩 67 Community-Integrationen, Tendenz steigend

Vor zwei Versionen haben wir **externe Integrationen** geöffnet: Jeder kann die Unterstützung für ein Gerät als kleines Docker-Image verpacken, veröffentlichen, und es erscheint im Katalog jeder Gladys-Instanz auf dem Planeten.

Der Katalog ist **in etwas mehr als zwei Wochen von 20 auf 67 Integrationen** gewachsen. Airzone, Apple TV, Daikin, De Dietrich, Ladestationen, CallMeBot, Docker, Solar-Wechselrichter: Fast alles davon wurde von der Community geschrieben, nicht von mir.

![Der Integrationskatalog, gefiltert auf die Community-Integrationen](../../../static/img/articles/gladys-assistant-5/08-integration-store-en.webp)

Dieses Release poliert den ganzen Kreislauf: eine Ansicht **Installiert**, die zeigt, was tatsächlich auf deiner Instanz läuft, Versionsnummern **mit Link zu ihrem Changelog**, die neue Version im Banner „Update verfügbar", eine **Verlaufsaufbewahrung pro Funktion** bei externen Geräten und **automatisches Energie-Tracking** für Funktionen, die eine Leistung melden.

Wenn dein Gerät noch nicht unterstützt wird, [kannst du die Integration an einem Nachmittag selbst bauen](/de/docs/dev/external-integrations/).

## 🤖 Der Assistent bekommt ein Mikrofon

Die Diskussionsseite ist wie alles andere auf Horizon umgezogen: Die Unterhaltung liegt auf demselben Glas, und die Tools, die der Assistent für seine Antwort benutzt hat, werden als Chips angezeigt, die du aufklappen kannst.

![Der KI-Assistent von Gladys auf der Diskussionsseite im Horizon-Design](../../../static/img/articles/gladys-assistant-5/09-ai-chat-en.webp)

Die Neuerung sitzt direkt neben dem Senden-Button: ein **Mikrofon**. Tippe darauf und diktiere deine Nachricht, statt sie zu tippen. Auf dem Smartphone ist das der Unterschied zwischen „den Assistenten nutzen" und „sich die Mühe sparen".

![Das Eingabefeld mit dem neuen Mikrofon-Button neben dem Senden-Button](../../../static/img/articles/gladys-assistant-5/10-ai-microphone-en.webp)

Der Assistent hat außerdem ein neues Tool gelernt: Er kann den **Batteriestand deiner Geräte** auslesen. Auf „Welche Sensoren brauchen neue Batterien?" gibt es jetzt also eine echte Antwort.

## ⚡ Energie

Die Energie-Widgets haben das Horizon-Design bekommen, dazu ein Upgrade, das du jeden Monat spüren wirst: Der Abrechnungszeitraum kann jetzt **an jedem beliebigen Tag des Monats beginnen**, sodass er zu deinem echten Abrechnungszeitraum passt statt zum Kalender.

![Das Energie-Dashboard](../../../static/img/articles/gladys-assistant-5/11-energy-en.webp)

Für Enedis-Nutzer: Der neue Einwilligungs-Callback **DataConnect 2026** wird unterstützt, und eine Synchronisierung berechnet jetzt nur noch die Kosten der Geräte neu, die sie tatsächlich betroffen hat, statt des gesamten Verlaufs.

## 🔌 Geräte, Protokolle, System

![Die Geräteseite](../../../static/img/articles/gladys-assistant-5/12-devices-en.webp)

- **Den Verlauf eines Geräts als CSV exportieren**, direkt aus der Geräteliste.
- **Matter**: Wassermelder, Kontakt- und Regensensoren sowie **Türschlösser**.
- **Zigbee2MQTT 2.13**, Unterstützung für **Netzwerk-Koordinatoren** (SMLIGHT SLZB-06/07 und Co.), solarbetriebene Außensirenen und der Heiman HS2WD-E.
- **MQTT**: Wildcard-State-Topics bei der Home Assistant Discovery.
- **Google Home**: Temperatur- und Feuchtigkeitssensoren werden bereitgestellt.
- **Kameras**: eine Kamera deaktivieren, ohne sie zu löschen, ein echter Privatmodus.
- **Den Host neu starten oder herunterfahren** über die Systemeinstellungen, und das funktioniert jetzt auch bei Standard-Docker-Installationen.
- **Gladys meldet sich per mDNS in deinem lokalen Netzwerk an**, die Suche nach deiner Instanz ist also keine IP-Jagd mehr.
- **Wiederherstellungscodes für die Zwei-Faktor-Authentifizierung** bei Gladys Plus, und Gladys empfiehlt jetzt gängige 2FA-Apps.
- Die Wetter-Icons wurden neu gezeichnet und die Pivot-Bedingungen erweitert.

Dazu der lange Rest: alphabetisch sortierte Räume, Integrationsnamen in der Geräteliste, der Häuser-Tab als lesbare Liste, die DuckDB-Migrationskarte, die sich ausblendet, sobald nichts mehr zu migrieren ist, und ein Haufen Fixes.

**92 Pull Requests, 720 Dateien, rund 52.000 hinzugefügte Zeilen, in 12 Tagen.**

## 🏡 Du kommst von Home Assistant?

Der übliche Einwand ist die Anzahl der Integrationen. Dieses Argument verliert gerade an Boden: Der Community-Katalog ist **in etwas mehr als zwei Wochen von 20 auf 67 Integrationen** gewachsen, geschrieben von Leuten, die den Code von Gladys noch nie zuvor geöffnet hatten, und er wird immer schneller. Wir schließen diese Lücke bewusst, und zwar schnell. Hier ist in der Zwischenzeit alles, was du heute schon bekommst.

- **Eine Oberfläche, die du nicht selbst bauen musst.** Kein YAML, keine Dashboard-DSL, kein Kartenkatalog, den du lernen musst. Du installierst Gladys und es sieht schon so aus wie auf den Screenshots in diesem Beitrag, auf deinem Smartphone, im Dark Mode, ohne eine einzige Konfigurationsdatei.
- **Deine vorhandenen Geräte funktionieren wahrscheinlich schon.** Gladys spricht **Home Assistant Discovery über MQTT**: Deine ESPHome-, Tasmota- und Zigbee2MQTT-Geräte werden automatisch gefunden, ganz ohne manuelle Konfiguration. Gladys spricht außerdem nativ Zigbee2MQTT, Matter, Z-Wave und kann mit HomeKit und Google Home kommunizieren.
- **Ein einziger Update-Button.** Gladys ist ein Docker-Image. Es aktualisiert sich selbst, mit einem Klick oder automatisch mit Watchtower.
- **Ein KI-Assistent, der wirklich integriert ist**, der deine Geräte sieht, sie steuern kann und dir sagt, welche Tools er benutzt hat.
- **Dasselbe Versprechen seit 2013**: Local First, Open Source, keine Cloud nötig, kein Konto nötig, deine Daten auf deiner Hardware.

Am schnellsten urteilst du nicht, indem du mich liest. Sondern indem du auf den nächsten Link klickst.

## 👉 Probier es jetzt aus

**[Öffne die Live-Demo](https://demo.gladysassistant.com/dashboard)**. Das ist ein vollständiges Gladys Assistant 5, das komplett in deinem Browser läuft, mit einem echten Haus, echten Dashboards, echten Szenen. Nichts zu installieren, keine Anmeldung.

Und wenn du überzeugt bist: **[Installiere Gladys](/de/docs/)**. Auf einem Raspberry Pi, einem NAS, einem alten Laptop, auf allem, was Docker kann. Das dauert nur ein paar Minuten.

## ❤️ Danke

Version 5 gibt es dank all der Leute, die Fehler gemeldet, diskutiert, auf ihren eigenen Wand-Tablets getestet und mir Screenshots von Dingen geschickt haben, die auf dem Smartphone kaputt waren.

Ein riesiges Dankeschön an [@Dreamthy](https://github.com/Dreamthy), [@William-De71](https://github.com/William-De71), [@callemand](https://github.com/callemand), [@cicoub13](https://github.com/cicoub13), [@vincentBesseau](https://github.com/vincentBesseau), Stéphane Escandell und Valentin Hutter für den Code in diesem Release, und an alle, die externe Integrationen veröffentlichen: Ihr seid der Grund, warum sich der Katalog in zwei Wochen verdreifacht hat.

Wie immer aktualisiert sich Gladys innerhalb von 24 Stunden automatisch, wenn du Watchtower verwendest. Ansonsten kannst du das Update mit einem Klick in den Einstellungen durchführen.

Denk daran, Telegram einzurichten, damit du eine Benachrichtigung auf dem Smartphone bekommst, wenn Gladys aktualisiert wird!

[Die vollständigen Release Notes auf GitHub ansehen](https://github.com/GladysAssistant/Gladys/releases/tag/v5.0.0)
