---
id: node-red
title: Node-RED
description: "Integra Node-RED con Gladys Assistant para conectar hardware, APIs y servicios en línea: activa el contenedor y crea automatizaciones potentes."
sidebar_label: Node-RED
---

En este tutorial te mostramos cómo integrar [Node-RED](https://nodered.org/) con Gladys Assistant.

Esto te permitirá conectar dispositivos de hardware, APIs y servicios en línea.

## Activar Node-RED

En Gladys, ve a `Integraciones / Node-RED`.

Gladys necesita instalar un contenedor. No te preocupes, todo está automatizado.

Ve a la sección `Configuración` y haz clic en el botón **Activar**. Al cabo de unos instantes (el tiempo depende de tu modelo de Raspberry Pi y de tu ancho de banda), deberías ver en verde todos los elementos inicializados y los enlaces entre ellos.

![Estado de los servicios de Node-RED](../../../../../static/img/docs/en/configuration/node-red/node-red_etat_services_en.png)

## Conectarse a Node-RED

Puedes abrir la interfaz de Node-RED haciendo clic en el enlace.
:warning: Atención, el enlace no es accesible desde Gladys Plus

![Enlace de Node-RED](../../../../../static/img/docs/en/configuration/node-red/node-red_link_en.png)

Llegarás a tu instancia local de Node-RED.

![Inicio de sesión en Node-RED](../../../../../static/img/docs/en/configuration/node-red/node-red_login_en.png)

Para conectarte, debes usar los datos de acceso que se indican en la sección `Configuración`.

## Uso

Ya puedes crear tus flujos de Node-RED

![Node-RED](../../../../../static/img/docs/en/configuration/node-red/node-red_en.png)

## Instalar Node-RED fuera de Gladys

Si prefieres iniciar Node-RED por tu cuenta, puedes seguir nuestro [artículo del blog aquí](/es/blog/integrate-node-red-with-gladys-assistant-in-mqtt/).
