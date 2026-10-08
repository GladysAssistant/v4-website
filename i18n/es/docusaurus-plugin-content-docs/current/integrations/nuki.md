---
id: nuki
title: Conecta tu cerradura Nuki a tu hogar inteligente
description: "Conecta tu cerradura inteligente Nuki a Gladys Assistant para cerrarla, abrirla y supervisar su batería y su estado, mediante la Nuki Web API o MQTT."
sidebar_label: Nuki
---

# Integración de tu cerradura inteligente Nuki en Gladys
Esta integración te permite:
-   controlar las cerraduras inteligentes de la marca Nuki: cerrar, abrir
-   enviar cierta información a Gladys (nivel de batería, estado de la cerradura)  

Ve a `Integraciones / Nuki` en Gladys  
Hay dos tipos de integración disponibles. Te recomendamos elegir solo uno de los dos.

## Token de la API NukiWeb

_Requisito previo: Gladys debe tener acceso a internet en todo momento_

1. Activa y configura tu cuenta Nuki Web: [Configuración de Nuki Web](https://help.nuki.io/hc/fr/articles/360016485718-Activer-et-d%C3%A9sactiver-un-compte-Nuki-Web#:~:text=Activez%20Nuki%20Web%20dans%20l,dans%20l'App%20de%20Nuki.)
  
![API de Nuki](../../../../../static/img/docs/en/configuration/nuki/nukiweb-en.png)

![Clave de API de Nuki](../../../../../static/img/docs/en/configuration/nuki/nukiweb-auth-en.png)  

2. Configura el servicio Nuki en Gladys añadiendo el token de la API  
![Configurar Nuki](../../../../../static/img/docs/en/configuration/nuki/nuki-integration-configuration-en.png)

3. Realiza un escaneo HTTP  
![Detección HTTP](../../../../../static/img/docs/en/configuration/nuki/nuki-integration-discover-http-en.png)
  

## MQTT
_Requisito previo: MQTT está configurado y funciona en Gladys_

1. Configura MQTT en la aplicación Nuki (usa la IP local del broker MQTT, no el nombre de dominio): [Configuración MQTT de Nuki](https://help.nuki.io/hc/fr/articles/14052016143249-Activation-et-configuration-via-l-App-Nuki)  
![Aplicación Nuki](../../../../../static/img/docs/en/configuration/nuki/nuki-app-mqtt1.jpg)  
![Aplicación Nuki MQTT](../../../../../static/img/docs/en/configuration/nuki/nuki-app-mqtt2.jpg)

2. Ve directamente a la sección de detección MQTT de Nuki en Gladys para ver tus dispositivos  
![Detección MQTT de Nuki](../../../../../static/img/docs/en/configuration/nuki/nuki-integration-discover-mqtt-en.png)

Ahora solo tienes que configurar el panel de control:  
![Panel de control con Nuki](../../../../../static/img/docs/en/configuration/nuki/nuki-dashboard-en.png)
