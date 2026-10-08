---
title: Die neue Hauptversion Gladys Assistant 4 ist da, komplett neu geschrieben!
description: Heute ist ein großer Tag – nach fast 2 Jahren Arbeit der gesamten Community ist Gladys Assistant 4 verfügbar und wie immer kostenlos herunterladbar!
authors: pierregilles
image: /img/presentation/gladys-4-launch.jpg
slug: lancement-gladys-assistant-4
---

Hallo zusammen,

heute ist ein großer Tag: Nach fast 2 Jahren Arbeit der gesamten Community ist Gladys Assistant 4 verfügbar – und wie immer kostenlos herunterladbar!

![Gladys 4 auf verschiedenen Geräten](../../../static/img/articles/en/gladys-4-launch/gladys-4-mockup-devices.jpg)

Mit diesen Tutorials kannst du direkt ins Abenteuer starten:

- [Tutorial für den Raspberry Pi](/de/docs/)
- [Manuelle Installation mit Docker](/de/docs/installation/docker/)
- [Gladys Assistant auf der Demo-Seite testen](https://demo.gladysassistant.com)

Lass uns jetzt auf die Entscheidungen zurückblicken, die zu dieser vierten Version von Gladys Assistant geführt haben 🙂

{/* truncate */}

## Die Geschichte hinter dieser v4

Im Dezember 2018 habe ich mich mit zwei Mitgliedern der Community getroffen, um über die Zukunft des Projekts zu sprechen. Gemeinsam haben wir festgelegt, was wir uns für die nächste Hauptversion von Gladys, Gladys Assistant 4, wünschen. Nach diesem Treffen habe ich ein technisches Manifest verfasst, das unsere Diskussionen zusammenfasste.

Gladys Assistant v3 war in die Jahre gekommen, sowohl was den Entwicklungsprozess als auch die eingesetzten Technologien betraf. Es war ein tolles Produkt, aber die Entwicklung wurde immer langsamer und weniger stabil – wegen technischer Entscheidungen, die bis in die Anfänge des Projekts zurückreichten.

Dieses Mammut zu warten wurde immer schwieriger, und die Attraktivität des Projekts litt darunter. Es gab viele „mysteriöse“ Bugs, und alle wurden deswegen verrückt. Es war frustrierend zu sehen, wie sich alle mit einem simplen Update von Gladys v3 abmühten und an Konfigurationspunkten hängen blieben, die eigentlich automatisch hätten funktionieren sollen.

**Das Fazit war eindeutig:** Langfristig war es besser, bei null anzufangen und aus all den Jahren Erfahrung zu lernen, statt ein Produkt mit Klebeband zu flicken, das ursprünglich nie dafür gedacht war, von so vielen Menschen über so viele Jahre genutzt zu werden.

Zwei Jahre lang haben wir gemeinsam mit der Community an Version 4 gearbeitet, entwickelt mit Technologien, die unserer Meinung nach besser für die Embedded-Welt geeignet sind.

Diese zwei Jahre waren sehr hart.

Sehr hart, weil sich das Projekt zwei Jahre lang scheinbar nicht weiterbewegt hat: An der v3 wurde nicht mehr entwickelt, aber die v4 war auch noch nicht fertig.

Sehr hart, weil ich mindestens ein Jahr lang das Gefühl hatte, im luftleeren Raum zu arbeiten – an einem Produkt, das niemand benutzte.

Es war eine Durststrecke.

Aber heute ist der Moment der Erfüllung. Die Arbeit hat sich gelohnt, und dank des Engagements der gesamten Community ist Gladys Assistant 4 verfügbar! 🎉

## Danke

Bevor ich diese v4 vorstelle, möchte ich allen Community-Mitgliedern danken, die enorm viel Arbeit in diese Version gesteckt haben.

- [Alexandre Trovato](https://community.gladysassistant.com/u/AlexTrovato/summary), „die Maschine“, der es schafft, einen Pull-Request vorzuschlagen, bevor ich meine Antwort auf seine Nachricht fertig geschrieben habe 😁
- [Vincent Kulak](https://community.gladysassistant.com/u/vonox/summary), „der Docker-Gott“, der den gesamten Build-Prozess von Gladys Assistant 4 aufgesetzt hat.
- [Thibaut Courvoisier](https://community.gladysassistant.com/u/link39/summary), „der Z-Wave-Profi“, der alle von seiner umfangreichen Z-Wave-Installation und seinem tiefen Wissen über das Protokoll profitieren lässt.
- [Thomas Lemaistre](https://community.gladysassistant.com/u/terdious/summary), „der größte Gladys-Nutzer aller Zeiten“, der die Grenzen des Produkts ständig ausreizt – mit seinem professionellen Einsatz, mit dem er seinen Campingplatz verwaltet.
- [Bertrand d'Aure](https://community.gladysassistant.com/u/bertrandda/summary), „Mr. CalDav“, der die CalDav-Integration entwickelt und pflegt und sich ein Bein ausreißt, damit sie für alle auf der Welt funktioniert.

Aber auch allen anderen Contributors auf GitHub: https://github.com/GladysAssistant/Gladys#contributors-

## Eine neu gestaltete Oberfläche: aufgeräumt, stilvoll und unglaublich schnell

Gladys Assistant kommt mit einer neuen, komplett überarbeiteten Oberfläche zurück. Die Oberfläche ist einfacher und lässt sich ganz leicht mit der Maus bearbeiten.

Ihre Reaktionsschnelligkeit verdankt die Oberfläche dem Frontend-Framework [Preact](https://preactjs.com/), das in Gladys Assistant 4 zum Einsatz kommt. Ein modernes und sehr leichtgewichtiges Framework, das für eine tolle Flüssigkeit in Gladys sorgt.

Die Oberfläche ist als PWA ([Progressive Web App](https://fr.wikipedia.org/wiki/Progressive_web_app)) konzipiert und lässt sich daher wie eine normale App auf dem Smartphone installieren (iOS / Android / Mac / Windows / Linux).

Du kannst die Oberfläche von Gladys Assistant 4 auf [der Demo-Seite](https://demo.gladysassistant.com) ausprobieren.

## Hunderte Smart-Home-Geräte bereits kompatibel

Seit mehreren Monaten arbeitet die Community von Gladys Assistant intensiv daran, die Integrationen aus der v3 in die v4 zu übertragen.

Heute sind in Gladys Assistant 4 bereits Hunderte Geräte für die Hausautomation verfügbar.

![Integrationen von Gladys Assistant 4](../../../static/img/articles/en/gladys-4-launch/integrations.png)

Aktuell unterstützt Gladys Assistant folgende Geräte:

- Z-Wave
- Xiaomi ([Doku](/de/docs/integrations/xiaomi/))
- Philips Hue ([Doku](/de/docs/integrations/external/philips-hue/))
- Sonoff (Tasmota) ([Doku](/de/docs/integrations/tasmota/))
- RTSP-, HTTP- und USB-Kameras ([Doku](/de/docs/integrations/camera/))
- Das MQTT-Protokoll ([Doku](/de/docs/integrations/mqtt/))

Viele weitere Integrationen sind in Entwicklung und werden diese Liste ergänzen, damit sich möglichst viele Geräte steuern lassen. Und da Gladys Assistant Open Source ist, kannst du selbst zu dieser Liste beitragen, indem du einen PR auf GitHub einreichst :)

## Native Kameraverwaltung

![Kameraverwaltung in Gladys Assistant 4](../../../static/img/articles/en/gladys-4-launch/cameras-gladys-4.jpg)

Die Kameraverwaltung ist nativ in Gladys Assistant 4 integriert, über die Protokolle RTSP, HTTP und USB.

Gladys holt sich die Streams aller Kameras im Haus und zeigt sie in einer einzigen Oberfläche an. Die Gladys-Instanz fungiert dabei als Proxy und ermöglicht es dir, deine Kameras auch außerhalb deines Netzwerks anzusehen, ohne sie dem Internet aussetzen zu müssen. Die Kameras bleiben sicher im lokalen Netz.

Die Videostreams werden komprimiert, damit die Oberfläche auch bei vielen Kameras maximal performant bleibt.

## Vom Machine Learning zur Chat-Engine

Gladys Assistant ist auch ein Assistent, mit dem du dich unterhalten kannst.

![Chats mit Gladys Assistant 4](../../../static/img/articles/en/gladys-4-launch/discuss-gladys.png)

Gladys Assistant nutzt die neuesten Fortschritte in der automatischen Sprachverarbeitung, um deine Anfragen zu verstehen (wir verwenden [NLP.js](https://github.com/axa-group/nlp.js)).

Du kannst Gladys Assistant zum Beispiel fragen:

- „Schalte das Licht im Wohnzimmer ein“
- „Wie warm ist es in der Küche?“
- „Wie ist das Wetter?“
- „Zeig mir die Küchenkamera“
- Und viele weitere Fragen, je mehr die Community den Datensatz erweitert!

Der Datensatz, mit dem das Modell trainiert wird, ist vollständig Open Source und wird von der Community gepflegt.

## Eine offene MQTT-API zur Integration von DIY-Geräten

Gladys bietet eine offene MQTT-API, damit jeder seine DIY-Geräte in Gladys integrieren kann.

So kannst du Daten von einem Arduino, einem ESP8266, einem entfernten Raspberry Pi oder jedem anderen MQTT-fähigen Gerät an Gladys senden.

Umgekehrt kann Gladys auch MQTT-Geräte steuern.

Mehr dazu erfährst du in der [MQTT-Integration](/de/docs/integrations/mqtt/).

## Eine Szenen-Engine, so leistungsstark wie nie

Mit Gladys Assistant 4 kannst du komplexe Szenen erstellen. Du kannst Abfolgen von Aktionen sowohl nacheinander als auch parallel ausführen – mit Bedingungen.

![Szenen in Gladys Assistant 4](../../../static/img/articles/en/gladys-4-launch/scenes.png)

Eine „Kino“-Szene, die die Beleuchtung im Wohnzimmer einstellt?

Eine „Wecker“-Szene, die die Kaffeemaschine startet und verschiedene Lichter vom Schlafzimmer bis zur Küche einschaltet?

Mit der Szenen-Engine von Gladys Assistant ist alles möglich 😄

Die Szenen-Engine wurde unter hoher Last getestet und wird sich in den kommenden Versionen der Software stetig weiterentwickeln.

Mehr dazu erfährst du unter [Szenen in Gladys Assistant 4](/de/docs/scenes/intro/).

## Privatsphäre im Mittelpunkt

Gladys Assistant speichert alle Nutzerdaten in einer lokalen SQLite-Datenbank. Für die Nutzung von Gladys Assistant ist kein Online-Konto nötig.

Du bleibst Herr und Eigentümer deiner Installation.

Gladys Assistant lässt sich ganz einfach auf jedem Raspberry Pi installieren, über ein vorgefertigtes Raspbian-Image mit Gladys Assistant (Download [in der Dokumentation für den Raspberry Pi](/de/docs/)).

Du kannst Gladys Assistant auch auf jedem Linux-Rechner installieren: einem Synology-NAS, einer Freebox Delta, einem VPS, einem alten Server – alles ist möglich.

## Automatische und atomare Updates: absolut zuverlässige Stabilität

Eines der Hauptziele der v4 ist es, langfristig ein stabiles und robustes Produkt zu sein. Da sich das Produkt häufig weiterentwickelt, brauchten wir ein automatisches Update-System, das die Installation eines Nutzers nicht gefährden kann.

Gladys Assistant läuft deshalb in Docker, einem Linux-Container-System, mit dem sich die Anwendung als Image verteilen lässt, das die Anwendung und alle ihre Abhängigkeiten enthält. Wir nutzen das hervorragende [Watchtower](https://github.com/nicholas-fedor/watchtower), um den Container automatisch zu aktualisieren.

So wird die Verteilung von Gladys-Updates automatisiert und funktioniert atomar.

Ein Update **kann nicht** in einem halbgaren Zustand landen: Entweder es klappt, oder es schlägt fehl.

## Meine Ziele nach diesem Launch

Mein persönliches Ziel für diese Version: **1.000 aktive Nutzer** der v4 in den nächsten 6 Monaten.

Das ist kein unrealistisches Ziel, die Zahl wirkt sogar eher klein, aber ich möchte mich auf Qualität statt Quantität konzentrieren.

Nur zum Vergleich: Seit seinem Launch wurde der Raspberry Pi 30 Millionen Mal verkauft.

1.000 Gladys-Instanzen entsprechen 0,0033 % der verkauften Raspberry Pis – und da sind all diejenigen noch nicht mitgezählt, die Gladys auf einem NAS, einer Freebox oder einem anderen Rechner betreiben.

Es ist also **ein sehr bescheidenes Ziel**, und das ist auch so gewollt.

Mir sind 1.000 begeisterte Nutzer lieber, die Gladys lieben, es jeden Tag nutzen und sich in der Online-Community einbringen, als 10.000 Nutzer, die das Produkt einfach nur nutzen und sonst nichts.

Bevor wir skalieren, möchte ich mich lieber darauf konzentrieren, diesen Kern aus begeisterten Nutzern aufzubauen, der die Stärke dieses Projekts ist. Sobald wir 1.000 rundum zufriedene Nutzer haben, können wir das nächste Ziel angehen.

Ich werde die Fortschritte auf dem Weg zu diesem Ziel in den sozialen Netzwerken teilen und in ein paar Monaten bestimmt einen Rückblick-Artikel schreiben 🙂

Nochmals vielen Dank an euch alle für eure Hilfe und euer Feedback!

Wenn du Teil des Kerns der 1.000 Nutzer von Gladys Assistant 4 werden möchtest: Jetzt ist der Moment, und los geht's mit dem [Installations-Tutorial für Gladys Assistant](/de/docs/).

Bis bald!

Pierre-Gilles Leymarie
