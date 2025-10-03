---
id: nuki
title: Connect your Nuki lock to your smart home
sidebar_label: Nuki
---

# Integration of your Nuki smart lock with Gladys
This integration adds the ability to:
-   control Nuki brand smart locks: lock, unlock
-   send certain information to Gladys (battery level, lock status)  

Go to `Integrations / Nuki` in Gladys  
There are two types of integration available. It is recommended to choose only one of the two.

## NukiWeb API Key

_Prerequisite: Gladys must have internet access at all times_

1. Activate and configure your Nuki Web account [Nuki Web Configuration](https://help.nuki.io/hc/fr/articles/360016485718-Activer-et-d%C3%A9sactiver-un-compte-Nuki-Web#:~:text=Activez%20Nuki%20Web%20dans%20l,dans%20l'App%20de%20Nuki.)
  
![API Nuki](../../../../../static/img/docs/fr/configuration/nuki/nukiweb-en.png)

![APIKey Nuki](../../../../../static/img/docs/fr/configuration/nuki/nukiweb-auth-en.png)  

2. Configure the Nuki service in Gladys by adding the API key  
![Configure Nuki](../../../../../static/img/docs/fr/configuration/nuki/nuki-integration-configuration-en.png)

3. Perform an HTTP scan  
![Discover HTTP](../../../../../static/img/docs/fr/configuration/nuki/nuki-integration-discover-http-en.png)
  

## MQTT
_Prerequisite: Gladys MQTT is configured and functional_

1. Configure MQTT in the Nuki app (use the local MQTT IP, not the domain name) [Nuki MQTT Configuration](https://help.nuki.io/hc/fr/articles/14052016143249-Activation-et-configuration-via-l-App-Nuki)  
![App Nuki](../../../../../static/img/docs/fr/configuration/nuki/nuki-app-mqtt1.jpg)  
![App Nuki MQTT](../../../../../static/img/docs/fr/configuration/nuki/nuki-app-mqtt2.jpg)

2. Go directly to the Nuki MQTT discovery section in Gladys to see your devices  
![DiscoverNuki MQTT](../../../../../static/img/docs/fr/configuration/nuki/nuki-integration-discover-mqtt-en.png)

Now you just have to configure the dashboard:  
![Nuki Dashboard](../../../../../static/img/docs/fr/configuration/nuki/nuki-dashboard-en.png)