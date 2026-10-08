---
title: "Neues Raspberry-Pi-Image + eine brandneue Schritt-für-Schritt-Installationsanleitung"
description: "Ein neues Raspberry-Pi-Image (Pi 3/4/5) ist im Raspberry Pi Imager verfügbar, dazu eine brandneue Schritt-für-Schritt-Anleitung zur Installation von Gladys."
authors: pierregilles
image: /img/presentation/new-raspberry-pi-image-en.jpg
slug: new-raspberry-pi-image
---

Hallo zusammen,

ich habe ein **neues Gladys-Image für den Raspberry Pi** veröffentlicht, kompatibel mit dem Pi 3, 4 und 5.

{/* truncate */}

Dieses Image basiert auf Raspberry Pi OS Trixie (Debian 13), 64 Bit. Es ist direkt im Raspberry Pi Imager in der Kategorie *Home automation* verfügbar.

![Gladys im Raspberry Pi Imager](../../../static/img/articles/new-raspberry-pi-image/01.jpg)

Bei der Gelegenheit habe ich auch das Installations-Tutorial auf der Website neu geschrieben, mit Bildern zu jedem Schritt:

👉 [Gladys auf einem Raspberry Pi installieren](/de/docs/installation/raspberry-pi/)

## Meine Meinung zum Raspberry Pi

Ich bin ehrlich: Ich halte den Raspberry Pi nach wie vor nicht für die beste langfristige Lösung – ein Mini-PC ist für den täglichen Einsatz leistungsfähiger und zuverlässiger. Außerdem rate ich dringend von einer microSD-Karte ab: In der Praxis kommt es nach ein paar Monaten oft zu Datenkorruption. Wenn du dich für einen Pi entscheidest, plane lieber eine NVMe-SSD ein.

Aber für alle, die schon einen Pi herumliegen haben, ist es eine hervorragende Möglichkeit, Gladys kennenzulernen, ohne sich mit Docker oder der Kommandozeile herumschlagen zu müssen 🙂

## Wie geht es weiter?

Ich lege weiterhin einen starken Fokus auf die Verbreitung und darauf, Gladys einfacher installierbar zu machen, egal welche Hardware du hast. Das Ziel ist, dass möglichst viele Menschen Gladys ausprobieren und sich selbst eine Meinung bilden können.

Ich arbeite an einem „Ubuntu + Gladys“-Image, mit dem du Gladys mit weniger Schritten als bei einer klassischen Ubuntu-Installation auf einem Mini-PC installieren kannst. Wenn du Ideen hast, wie man Gladys zugänglicher und einfacher installierbar machen kann, bin ich ganz Ohr!

Das Repo: [raspberry-pi-os-gladys](https://github.com/GladysAssistant/raspberry-pi-os-gladys)
