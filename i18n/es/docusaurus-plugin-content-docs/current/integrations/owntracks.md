---
id: owntracks
title: Owntracks
description: "Sigue la ubicación de tu teléfono en Gladys Assistant con OwnTracks y Gladys Plus para automatizar la presencia y activar escenas basadas en la ubicación."
sidebar_label: Owntracks
---

[Owntracks](https://owntracks.org/) es una app móvil de código abierto que envía periódicamente la ubicación del teléfono a un servidor.

Gladys Plus te permite recibir los mensajes de Owntracks y crear ubicaciones en Gladys.

### Descargar Owntracks

Primero, descarga Owntracks en iOS o Android.

### Crear una clave API en Gladys Plus

Ve a [plus.gladysassistant.com](https://plus.gladysassistant.com/) e inicia sesión.

Después, ve a "Ajustes" => "Open API" y crea una clave.

### Configurar Owntracks

Haz clic en el botón de la esquina superior izquierda:

![Open API Owntracks Gladys](../../../../../static/img/docs/en/configuration/gateway/open-api-owntracks-0.jpg)

Haz clic en "Settings":

![Open API Owntracks Gladys](../../../../../static/img/docs/en/configuration/gateway/open-api-owntracks-1.jpg)

Selecciona "HTTP" y, en el campo "URL", introduce:

```
https://api.gladysgateway.com/v1/api/owntracks/[YOUR-API-KEY]
```

Rellena los campos `UserID` y `DeviceID` con los términos que prefieras (son obligatorios).

Yo puse "iphone" como `DeviceID` y "pierre-gilles" como `UserID`.

Gladys usa la clave API para identificar quién hace la petición.

![Open API Owntracks Gladys](../../../../../static/img/docs/en/configuration/gateway/open-api-owntracks-2.jpg)

### Ver tu ubicación en Gladys

Deberías ver tu ubicación en Gladys, en la pestaña "Mapas".
