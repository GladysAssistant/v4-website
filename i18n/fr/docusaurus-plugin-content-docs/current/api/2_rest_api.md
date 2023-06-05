---
id: rest-api
title: HTTP API
sidebar_label: HTTP API
---

Gladys Assistant est un serveur qui expose une API HTTP REST.

Cette API sert au frontend de Gladys, mais peut-être aussi utilisée pour faire des actions automatiquement.

Vous pouvez ainsi coder votre propre client Gladys, ou créer des petits scripts (via Node-RED, n8n) au dessus de cette API.

**Note:** Cette API n'est uniquement disponible que via votre réseau local (ou Gladys est disponible). Si vous voulez accéder à une API à distance, nous proposons une [Open API](/fr/docs/plus/open-api/) via Gladys Plus.

## Authentification

Pour récupérer un `access_token`, vous pouvez appeler la route de login :

```bash
curl --location --request POST 'http://GLADYS_IP_ADDRESS/api/v1/login' \
--header 'Content-Type: application/json;charset=UTF-8' \
--data-raw '{"email":"<email>","password":"<password>"}'
```

Une fois l'access_token récupéré, il peut-être utilisé pour appeler l'API :

```bash
curl --location --request GET 'http://GLADYS_IP_ADDRESS/api/v1/device' \
--header 'Accept: application/json, text/plain, */*' \
--header 'authorization: Bearer <access_token>'
```

Ce qui vous retournera la liste des appareils Gladys.

## Documentation d'API

Vous trouverez la documentation complète de cette API sur le site: [https://apidoc.gladysassistant.com/](https://apidoc.gladysassistant.com/).
