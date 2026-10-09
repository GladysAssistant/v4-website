---
id: rest-api
title: API HTTP
description: "Usa la API REST HTTP de Gladys Assistant: autentícate, obtén un token de acceso y automatiza tu hogar inteligente con tus propios scripts y clientes."
sidebar_label: API HTTP
---

Gladys Assistant es un servidor que expone una API REST HTTP.

Esta API la utiliza el frontend de Gladys, pero también puede usarse para ejecutar acciones de forma automática.

Puedes programar tu propio cliente de Gladys o crear pequeños scripts (por ejemplo, con Node-RED o n8n) sobre esta API.

**Nota:** Esta API solo está disponible en tu red local (donde se ejecuta Gladys). Si quieres acceder a una API desde fuera de casa, ofrecemos una [Open API](/es/docs/plus/open-api/) a través de Gladys Plus.

## Autenticación

Para obtener un `access_token`, puedes llamar a la ruta de inicio de sesión:

```bash
curl --location --request POST 'http://GLADYS_IP_ADDRESS/api/v1/login' \
--header 'Content-Type: application/json;charset=UTF-8' \
--data-raw '{"email":"<email>", "password":"<password>"}'
```

Una vez obtenido el access_token, puedes usarlo para llamar a la API:

```bash
curl --location --request GET 'http://GLADYS_IP_ADDRESS/api/v1/device' \
--header 'Accept: application/json, text/plain, */*' \
--header 'authorization: Bearer <access_token>''
```

Esta llamada devuelve la lista de dispositivos de Gladys.

**Nota:** El access_token solo es válido durante 24 horas. El refresh_token es válido durante 30 días y te permite obtener un nuevo access_token llamando a la ruta `POST /api/v1/access_token`.

## Documentación de la API

Encontrarás la documentación completa de esta API en: [https://apidoc.gladysassistant.com/](https://apidoc.gladysassistant.com/).
