---
id: configure-owntracks-gladys-plus
title: Configure Owntracks with Gladys Plus
sidebar_label: Configure Owntracks with Gladys Plus
---

[Owntracks](https://owntracks.org/) is an open-source mobile app which sends the phone location to a server, periodically.

[Gladys Plus](https://gladysassistant.com/pricing) allows you to receive Owntracks message and create location in Gladys.

### Download Owntracks

First download Owntracks on iOS or Android.

### Create an API key in Gladys Plus

Go to [plus.gladysassistant.com](https://plus.gladysassistant.com/), connect.

Then go to "settings" => "Open API", and create a key.

### Go to Owntracks

Click on the button in the top-left corner:

<img src="/img/docs/configuration/gateway/open-api-owntracks-0.jpg" alt="Open API owntracks Gladys" class="img-responsive" width="300" />

Click on settings:

<img src="/img/docs/configuration/gateway/open-api-owntracks-1.jpg" alt="Open API owntracks Gladys" class="img-responsive" width="300" />

Select "HTTP", and in the "URL" input, enter:

```
https://api.gladysgateway.com/v1/api/owntracks/[YOUR-API-KEY]
```

In the `UserID` and `DeviceID` input, you can put anything you want (those fields are mandatory).

I put "iphone" for the `DeviceID`, and "pierre-gilles" for the `UserID`.

Gladys uses the API key to identify who is making the request.

<img src="/img/docs/configuration/gateway/open-api-owntracks-2.jpg" alt="Open API owntracks Gladys" class="img-responsive" width="300" />

### See your location in Gladys

You should see your location in Gladys in the "Maps" tab.
