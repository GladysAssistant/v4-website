---
id: rest-api
title: HTTP API
sidebar_label: HTTP API
---

Gladys Assistant is a server that exposes an HTTP REST API.

This API is used for the Gladys frontend, but can also be used to perform actions automatically.

You can code your own Gladys client, or create small scripts (via Node-RED, n8n) on top of this API.

**Note:** This API is only available via your local network (where Gladys is available). If you want to access a remote API, we offer an [Open API](/docs/plus/open-api/) via Gladys Plus.

## Authentication

To retrieve an `access_token`, you can call the login route:

```bash
curl --location --request POST 'http://GLADYS_IP_ADDRESS/api/v1/login' \
--header 'Content-Type: application/json;charset=UTF-8' \
--data-raw '{"email":"<email>", "password":"<password>"}'
```

Once the access_token has been retrieved, it can be used to call the :

```bash
curl --location --request GET 'http://GLADYS_IP_ADDRESS/api/v1/device' \
--header 'Accept: application/json, text/plain, */*' \
--header 'authorization: Bearer <access_token>''
```

This will return a list of Gladys devices.

## API documentation

Full documentation for this API can be found at: [https://apidoc.gladysassistant.com/](https://apidoc.gladysassistant.com/).
