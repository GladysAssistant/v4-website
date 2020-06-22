---
id: configure-owntracks-gladys-plus
title: Configurer Owntracks avec Gladys Plus
sidebar_label: Configurer Owntracks avec Gladys Plus
---

[Owntracks](https://owntracks.org/) est une application mobile open-source qui permet d'envoyer sa géolocalisation périodiquement à un serveur.

[Gladys Plus](https://gladysassistant.com/pricing) vous permet de recevoir ces localisations dans Gladys.

### Télécharger Owntracks

Tout d'abord, téléchargez Owntracks sur iOS ou Android.

### Créez une clé d'API dans Gladys Plus

Allez à [plus.gladysassistant.com](https://plus.gladysassistant.com/), connectez-vous.

Puis allez dans "settings" => "Open API", et créez une clé.

### Allez dans Owntracks

Clickez sur le bouton en haut à gauche de l'app:

<img src="/img/docs/configuration/gateway/open-api-owntracks-0.jpg" alt="Open API owntracks Gladys" class="img-responsive" width="300" />

Cliquez sur "paramètres":

<img src="/img/docs/configuration/gateway/open-api-owntracks-1.jpg" alt="Open API owntracks Gladys" class="img-responsive" width="300" />

Sélectionnez "HTTP", puis dans l'input "URL" entrez:

```
https://api.gladysgateway.com/v1/api/owntracks/[YOUR-API-KEY]
```

Dans `DeviceID` et `UserID`, mettez ce que vous voulez, ce n'est pas utile pour Gladys mais les champs sont obligatoires.

J'ai mis personnellement "iphone" dans `DeviceID` et "pierre-gilles" dans `UserID`.

Gladys utilise la clé d'API pour identifier votre compte.

<img src="/img/docs/configuration/gateway/open-api-owntracks-2.jpg" alt="Open API owntracks Gladys" class="img-responsive" width="300" />

### Vérifier que l'intégration fonctionne

Dans Gladys, vous devriez voir votre position sur l'onglet "Maps".
