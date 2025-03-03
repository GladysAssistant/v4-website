---
id: zwavejs-ui
title: Intégrez vos appareils Z-Wave grâce à Z-Wave JS UI
sidebar_label: Z-Wave JS UI
---

Gladys Assistant propose une intégration avec [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/), un logiciel qui permet de contrôler des appareils Z-Wave.

Gladys se connecte au même broker MQTT que Z-Wave JS UI et reçoit des messages MQTT à chaque changement d'état d'un appareil.

## Installer Z-Wave JS UI

Nous vous invitons à vous rendre sur le site de [Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/) pour trouver les instructions d'installation de Z-Wave JS UI.

## Configurer Z-Wave JS UI

Afin que l'intégration avec Gladys fonctionne correctement, 2 réglages sont nécessaires.

Il faut d'abord régler dans Settings les paramètres MQTT, notamment le champ "name" qui va définir le topic MQTT sur lequel les messages seront envoyés.

![Z-Wave JS UI Configuration MQTT](../../../../../static/img/docs/fr/configuration/zwavejs-ui/zwavejs-ui-mqtt-configuration.jpg)

Ensuite, il est nécessaire de configurer la section "Gateway" de la manière suivante :

![Z-Wave JS UI Configuration Gateway](../../../../../static/img/docs/fr/configuration/zwavejs-ui/zwavejs-ui-gateway-configuration.jpg)

## Connecter Gladys à Z-Wave JS UI

Afin que Gladys puisse communiquer avec Z-Wave JS UI, il faut fournir à Gladys l'URL et les informations de connexion au broker MQTT sur lequel publie Z-Wave JS UI.

Rendez-vous dans l'onglet "Configuration" pour ajouter ces informations.

## Découverte Z-Wave JS UI

Rendez-vous sur l'onglet "Découverte Z-Wave JS UI" pour voir les appareils que votre instance Z-Wave JS UI expose.

Vous pouvez ensuite les ajouter à Gladys d'un seul clic!

## Fonctionnalités supportées

- **Capteurs de porte/fenêtre** – Détectent l'état ouvert/fermé, comme le [Fibaro Door Opening Sensor](https://www.domadoo.fr/fr/peripheriques/4105-fibaro-detecteur-d-ouverture-z-wave-doorwindow-sensor-2-blanc-5902701700348.html?domid=17).
- **Interrupteurs binaires** – Permettent d'allumer/éteindre les lumières ou de couper l'alimentation des prises électriques. Appareils compatibles :
  - [Fibaro Wall Plug](https://www.fibaro.com/fr/products/wall-plug/)
  - [Interrupteurs Fibaro](https://www.fibaro.com/fr/products/switches/)
- **Capteurs de température** – Surveillent la température ambiante.
- **Suivi de la consommation électrique** – Analyse de la consommation d'énergie.
- **Contrôle des rideaux/volets** – Ouvrir, fermer et connaître la position des rideaux. Appareils compatibles :
  - [Fibaro Walli Roller Shutter](https://manuals.fibaro.com/fr/walli-roller-shutter/)
  - [Qubino Flush Shutter](https://qubino.com/products/flush-shutter/)
- **Variateurs de lumière (Dimmers)** – Ajustent la luminosité ou contrôlent des appareils à tension variable. Appareils compatibles :
  - [Fibaro Walli Dimmer](https://manuals.fibaro.com/fr/walli-dimmer/)
  - [Fibaro Dimmer 2](https://manuals.fibaro.com/fr/dimmer-2/)
- **Capteurs de luminosité** – Mesurent l'intensité lumineuse ambiante.
- **Capteurs d'alarme** – Détectent les menaces de sécurité.
- **Capteurs binaires** – Permettent divers scénarios de détection ON/OFF.

Si vous avez un appareil qui n'est pas encore géré, n'hésitez pas à nous contacter sur le forum.
