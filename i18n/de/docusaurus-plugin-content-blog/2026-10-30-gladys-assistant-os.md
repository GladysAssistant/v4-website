---
title: "Gladys Assistant OS: Gladys per USB-Stick auf einem Mini-PC installieren"
description: "Gladys Assistant OS ist der neue offizielle Installer von Gladys für Mini-PCs: Image auf einen USB-Stick schreiben, Mini-PC davon starten, ein paar Fragen beantworten, und Gladys installiert sich von selbst, mit automatischen Updates. Ganz ohne Kommandozeile."
authors: pierregilles
image: /img/presentation/gladys-assistant-os-de.jpg
slug: gladys-assistant-os
---

Hallo zusammen,

heute veröffentliche ich **Gladys Assistant OS**, den neuen offiziellen Weg, Gladys auf einem Mini-PC zu installieren 🎉

{/* truncate */}

Die Idee ist einfach: Du schreibst Gladys Assistant OS auf einen USB-Stick, startest deinen Mini-PC davon, beantwortest ein paar Fragen, und Gladys installiert sich von selbst. Keine Kommandozeile, kein Docker-Befehl zum Kopieren und Einfügen.

![Das Bootmenü von Gladys Assistant OS](../../../static/img/articles/gladys-assistant-os/grub-menu.png)

👉 [Gladys mit Gladys Assistant OS auf einem Mini-PC installieren](/de/docs/installation/mini-pc/)

## Warum ein Installer?

Als ich im Juni das [neue Raspberry-Pi-Image](/de/blog/new-raspberry-pi-image/) veröffentlicht habe, habe ich angekündigt, dass ich an einem „Ubuntu + Gladys“-Image für Mini-PCs arbeite. Hier ist es!

Bisher bedeutete eine Installation von Gladys auf einem Mini-PC: Ubuntu Server selbst installieren (ohne den Haken bei OpenSSH zu vergessen), sich per SSH verbinden, Docker installieren, einen langen `docker run`-Befehl kopieren und dann Watchtower für die Updates einrichten. Nichts Unmögliches, aber viele Schritte, und viele sind an einem davon hängen geblieben.

Der Mini-PC ist die Lösung, die ich für ein Smart Home auf lange Sicht empfehle, also hatte er eine Installation verdient, die genauso einfach ist wie auf dem Raspberry Pi.

## Was Gladys Assistant OS macht

Unter der Haube ist Gladys Assistant OS ein ganz normales **Ubuntu Server 26.04 LTS**, das für Gladys eingerichtet ist:

- Der Installer fragt nur nach deiner **Sprache**, deiner **Tastatur** und deinem **Konto**. Bei nur einer Festplatte musst du nicht einmal eine Festplatte auswählen.
- Beim ersten Start installiert es **Docker**, lädt die **neueste Version von Gladys** herunter und startet sie. Den Fortschritt verfolgst du auf dem Bildschirm des Mini-PCs oder auf deinem Smartphone, unter der Adresse, die dort angezeigt wird.
- **Gladys aktualisiert sich selbst**, sobald eine neue Version erscheint, und Ubuntu installiert seine **Sicherheitsupdates** automatisch.
- Es erkennt deine **Zeitzone**, und Gladys ist von jedem Gerät in deinem Netzwerk unter **`http://gladysassistant.local`** erreichbar.
- Es ist auf Robustheit ausgelegt: Wenn während der Einrichtung die Internetverbindung abbricht oder der Strom ausfällt, macht es einfach dort weiter, wo es aufgehört hat.

![Der erste Start von Gladys Assistant OS](../../../static/img/articles/gladys-assistant-os/setup-page.jpg)

Gladys selbst steckt nie im Image: Gladys wird beim ersten Start heruntergeladen, du startest also immer mit der neuesten Version, selbst mit einem Image, das du vor ein paar Monaten heruntergeladen hast.

## Ein normales Ubuntu, keine Blackbox

Gladys Assistant OS ist kein abgeschottetes System. Es ist ein Ubuntu Server wie jeder andere: Du kannst dich per SSH anmelden, neben Gladys weitere Container betreiben und behältst die volle Kontrolle über deinen Rechner. Es gibt kein Standardpasswort: Das einzige Konto ist das, das du bei der Installation anlegst.

Und wie immer bei Gladys ist alles Open Source: [GladysAssistant/ubuntu-server-gladys](https://github.com/GladysAssistant/ubuntu-server-gladys).

## Auch auf Proxmox

Gladys Assistant OS funktioniert auch in einer virtuellen Maschine unter **Proxmox VE**. Ich habe die Proxmox-Anleitung neu geschrieben, mit Gladys Assistant OS im Mittelpunkt: VM im UEFI-Modus anlegen, vom Image starten, und Gladys installiert sich genauso von selbst.

👉 [Gladys auf Proxmox VE installieren](/de/docs/installation/proxmox/)

## Was du (vorerst) brauchst

Diese erste Version hat ein paar Voraussetzungen:

- einen **Intel- oder AMD**-Computer (x86-64), der im **UEFI**-Modus startet, was bei praktisch jedem Mini-PC der Fall ist. Auf einem Raspberry Pi verwendest du weiterhin das [Raspberry-Pi-Image](/de/docs/installation/raspberry-pi/);
- ein **Ethernet-Kabel**: Der Installer richtet kein WLAN ein;
- einen Bildschirm und eine Tastatur, nur während der Installation.

Docker gibt es natürlich weiterhin, wenn du Gladys auf einem Rechner installierst, auf dem schon andere Dinge laufen, etwa einem NAS oder einem Server: Die [Docker-Anleitung](/de/docs/installation/docker/) ist nach wie vor da.

## Neue Installationsanleitungen

Bei der Gelegenheit habe ich die Installationsdokumentation neu geschrieben, damit Gladys Assistant OS das Erste ist, was du siehst:

- [Erste Schritte](/de/docs/)
- [Gladys mit Gladys Assistant OS auf einem Mini-PC installieren](/de/docs/installation/mini-pc/)
- [Gladys auf Proxmox VE installieren](/de/docs/installation/proxmox/)

Wenn du es ausprobierst, erzähl mir im [Forum](https://community.gladysassistant.com/), wie es gelaufen ist! Das ist eine erste Version, und dein Feedback hilft dabei, sie noch einfacher zu machen 🙂
