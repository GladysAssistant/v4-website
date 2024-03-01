---
id: owntracks
title: Owntracks
sidebar_label: Owntracks
---

# Owntracks

[Owntracks](https://owntracks.org/) is an open-source mobile application that lets you send your geolocation periodically to a server.

**Gladys Plus([https://gladysassistant.com/fr/plus/](https://gladysassistant.com/fr/plus/))** allows you to receive these locations in Gladys.

### Download Owntracks

First, download Owntracks.

- [Android](https://play.google.com/store/apps/details?id=org.owntracks.android&hl=fr&gl=US)
- [iOS](https://apps.apple.com/fr/app/owntracks/id692424691)

### Create an API key in Gladys Plus

Go to [plus.gladysassistant.com](https://plus.gladysassistant.com/), log in.

Then go to `Integration -> Open API`, and create a key.

### Go to Owntracks

Click on the button at the top left of the app:

![owntracks_carte](../../static/img/docs/en/configuration/gateway/open-api-owntracks-0.jpg)

Click on `Settings`:

![owntracks_statuts_info](../../static/img/docs/en/configuration/gateway/open-api-owntracks-1.jpg)

Select `HTTP`, then in the `URL` input enter:

```
<https://api.gladysgateway.com/v1/api/owntracks/[YOUR-API-KEY]>

```

In `DeviceID` and `UserID`, put what you want, it's not useful for Gladys but the fields are mandatory.

I personally put "iphone" in `DeviceID` and "Pierre-Gilles" in `UserID`.

Gladys uses the API key to identify your account.

![owntracks_settings](../../static/img/docs/en/configuration/gateway/open-api-owntracks-2.jpg)

### Check that integration is working

In Gladys, you should see your position on the `Plans` tab.

Please post a message on [the forum](https://en-community.gladysassistant.com), if you need any help.