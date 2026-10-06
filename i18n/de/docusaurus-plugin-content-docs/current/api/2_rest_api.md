---
id: rest-api
title: HTTP-API
description: "Nutze die HTTP-REST-API von Gladys Assistant: Authentifiziere dich, hol dir ein Access-Token und automatisiere dein Smart Home mit eigenen Skripten und Clients."
sidebar_label: HTTP-API
---

Gladys Assistant ist ein Server, der eine HTTP-REST-API bereitstellt.

Diese API wird vom Gladys-Frontend genutzt, kann aber auch verwendet werden, um Aktionen automatisch auszuführen.

Du kannst deinen eigenen Gladys-Client programmieren oder kleine Skripte (z. B. mit Node-RED oder n8n) auf Basis dieser API erstellen.

**Hinweis:** Diese API ist nur in deinem lokalen Netzwerk erreichbar (dort, wo Gladys läuft). Wenn du von außerhalb auf eine API zugreifen möchtest, bieten wir über Gladys Plus eine [Open API](/de/docs/plus/open-api/) an.

## Authentifizierung

Um ein `access_token` zu erhalten, rufst du die Login-Route auf:

```bash
curl --location --request POST 'http://GLADYS_IP_ADDRESS/api/v1/login' \
--header 'Content-Type: application/json;charset=UTF-8' \
--data-raw '{"email":"<email>", "password":"<password>"}'
```

Sobald du das access_token hast, kannst du damit die API aufrufen:

```bash
curl --location --request GET 'http://GLADYS_IP_ADDRESS/api/v1/device' \
--header 'Accept: application/json, text/plain, */*' \
--header 'authorization: Bearer <access_token>''
```

Dieser Aufruf liefert eine Liste der Geräte in Gladys zurück.

**Hinweis:** Das access_token ist nur 24 Stunden gültig. Das refresh_token ist 30 Tage gültig und ermöglicht es dir, über die Route `POST /api/v1/access_token` ein neues access_token abzurufen.

## API-Dokumentation

Die vollständige Dokumentation dieser API findest du unter: [https://apidoc.gladysassistant.com/](https://apidoc.gladysassistant.com/).
