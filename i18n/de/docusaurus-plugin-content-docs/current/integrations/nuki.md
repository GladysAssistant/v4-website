---
id: nuki
title: Dein Nuki-Schloss mit deinem Smart Home verbinden
description: "Verbinde dein smartes Nuki-Schloss mit Gladys Assistant, um es über die Nuki Web API oder MQTT zu verriegeln, zu entriegeln und Batteriestand und Status zu überwachen."
sidebar_label: Nuki
---

# Integration deines smarten Nuki-Schlosses in Gladys
Mit dieser Integration kannst du:
-   smarte Schlösser der Marke Nuki steuern: verriegeln, entriegeln
-   bestimmte Informationen an Gladys übermitteln (Batteriestand, Schlossstatus)  

Öffne in Gladys `Integrationen / Nuki`  
Es stehen zwei Arten der Integration zur Verfügung. Wir empfehlen, nur eine der beiden zu wählen.

## NukiWeb-API-Token

_Voraussetzung: Gladys muss jederzeit Internetzugang haben_

1. Aktiviere und konfiguriere dein Nuki-Web-Konto: [Nuki-Web-Konfiguration](https://help.nuki.io/hc/fr/articles/360016485718-Activer-et-d%C3%A9sactiver-un-compte-Nuki-Web#:~:text=Activez%20Nuki%20Web%20dans%20l,dans%20l'App%20de%20Nuki.)
  
![Nuki-API](../../../../../static/img/docs/en/configuration/nuki/nukiweb-en.png)

![Nuki-API-Schlüssel](../../../../../static/img/docs/en/configuration/nuki/nukiweb-auth-en.png)  

2. Konfiguriere den Nuki-Dienst in Gladys, indem du das API-Token einträgst  
![Nuki konfigurieren](../../../../../static/img/docs/en/configuration/nuki/nuki-integration-configuration-en.png)

3. Führe einen HTTP-Scan durch  
![HTTP-Erkennung](../../../../../static/img/docs/en/configuration/nuki/nuki-integration-discover-http-en.png)
  

## MQTT
_Voraussetzung: MQTT ist in Gladys eingerichtet und funktioniert_

1. Konfiguriere MQTT in der Nuki-App (verwende die lokale IP des MQTT-Brokers, nicht den Domainnamen): [Nuki-MQTT-Konfiguration](https://help.nuki.io/hc/fr/articles/14052016143249-Activation-et-configuration-via-l-App-Nuki)  
![Nuki-App](../../../../../static/img/docs/en/configuration/nuki/nuki-app-mqtt1.jpg)  
![Nuki-App MQTT](../../../../../static/img/docs/en/configuration/nuki/nuki-app-mqtt2.jpg)

2. Öffne in Gladys direkt den Bereich zur Nuki-MQTT-Erkennung, um deine Geräte zu sehen  
![Nuki-MQTT-Erkennung](../../../../../static/img/docs/en/configuration/nuki/nuki-integration-discover-mqtt-en.png)

Jetzt musst du nur noch das Dashboard konfigurieren:  
![Nuki-Dashboard](../../../../../static/img/docs/en/configuration/nuki/nuki-dashboard-en.png)
