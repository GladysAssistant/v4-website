---
id: owntracks
title: Owntracks
sidebar_label: Owntracks
---

[Owntracks](https://owntracks.org/) est une application mobile open-source qui permet d'envoyer sa géolocalisation périodiquement à un serveur.

Gladys Plus vous permet de recevoir ces localisations dans Gladys.

### Télécharger Owntracks

Tout d'abord, téléchargez Owntracks sur iOS ou Android.

### Créez une clé d'API dans Gladys Plus

Allez à [plus.gladysassistant.com](https://plus.gladysassistant.com/), connectez-vous.

Puis allez dans "settings" => "Open API", et créez une clé.

### Allez dans Owntracks

Clickez sur le bouton en haut à gauche de l'app:

![Open API owntracks Gladys](../../../../../static/img/docs/fr/configuration/gateway/open-api-owntracks-0.jpg)

Cliquez sur "paramètres":

![Open API owntracks Gladys](../../../../../static/img/docs/fr/configuration/gateway/open-api-owntracks-1.jpg)

Sélectionnez "HTTP", puis dans l'input "URL" entrez:

```
https://api.gladysgateway.com/v1/api/owntracks/[YOUR-API-KEY]
```

Dans `DeviceID` et `UserID`, mettez ce que vous voulez, ce n'est pas utile pour Gladys mais les champs sont obligatoires.

J'ai mis personnellement "iphone" dans `DeviceID` et "pierre-gilles" dans `UserID`.

Gladys utilise la clé d'API pour identifier votre compte.

![Open API owntracks Gladys](../../../../../static/img/docs/fr/configuration/gateway/open-api-owntracks-2.jpg)

### Vérifiez que l'intégration fonctionne

Dans Gladys, vous devriez voir votre position sur l'onglet "Maps".
