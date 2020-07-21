---
title: Un équivalent à PhpMyAdmin en Node.js
description: On utilise souvent PhpMyAdmin pour administrer sa base de donnée MySQL, voici Express-admin, son équivalent Node.js !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /fr/img/presentation/express-admin-icone.jpg

id: equivalent-phpmyadmin-nodejs
---

Pour administrer sa base de donnée MySQL, on utilise la plupart du temps phpmyadmin qu'on a souvent sur sa machine ou son serveur. Cependant, avec l'archive préinstallée, ni Apache ni PHP n'est installé ( inutile car Gladys est écrite en 100% Node.js ).

Nous allons donc utiliser [Express Admin](http://simov.github.io/express-admin/), un équivalent en Node.js à phpmyadmin ! ( et encore plus simple à utiliser !)

<!--truncate-->

### Installer Express Admin

Créez un dossier où vous voulez dans votre Raspberry Pi, appellons le par exemple express-admin, et plaçons nous dans ce dossier :

```
mkdir express-admin && cd express-admin
```

Il suffit ensuite d'installer globalement express-admin avec NPM :

```
sudo npm install -g express-admin
```

On créé ensuite un dossier de config où seront enregistrés les fichiers de config :

```
mkdir config
```

Puis on va donner à express-admin les informations de connexions à notre base de donnée pour qu'il s'y connecte :

```
sudo admin config
```

( config correspond au nom du dossier créé à l'étape précédente )

On remplit avec les informations suivantes :

<img alt="Configuration" src="/fr/img/articles/equivalent-phphmyadmin-nodejs/configuration.png" />
 
### Utiliser express-admin

Allez sur votre navigateur à l'adresse `http://IP_DE_VOTRE_RASPBERRY_PI:3000`. Vous devriez trouver quelque chose qui ressemble à ça :

<img alt="Login page" src="/fr/img/articles/equivalent-phphmyadmin-nodejs/login.png" />

Vous pouvez vous connecter avec les identifiants que vous avez rentré lors de la configuration ( Admin user, Admin password ).

Vous devriez arriver sur un panel, félicitation vous avez réussi !

<img alt="Panel" src="/fr/img/articles/equivalent-phphmyadmin-nodejs/panel.png" />

### Modifier une ligne

Petite subtilité, il y a apparemment des petits bugs avec express-admin et les champs `datetime` de MySQL ( voir [l'issue GitHub](https://github.com/simov/express-admin/issues/50) ). Il considère que les dates sont fausses et vous mets une erreur 'malformed' qui vous empêche de mettre à jour un champs.

<img alt="Malformed" src="/fr/img/articles/equivalent-phphmyadmin-nodejs/malformed.png" />

Il y a néanmoins une solution ( plutôt un quickfix ), une fois que vous avez lancé au moins une fois express-admin, allez dans le fichier `config/settings.json` et modifiez le type des champs datetime ( seulement des tables que vous voulez modifier ) à :

```
"type": "varchar(255)"
```

Ce qui nous donne :

```
{
   "name":"createdAt",
   "verbose":"createdAt",
   "control":{
      "text":true
   },
   "type":"varchar(255)",
   "allowNull":true,
   "defaultValue":null,
   "listview":{
      "show":true
   },
   "editview":{
      "show":true
   }
}
```

Cela va juste désactiver la vérification des dates par express-admin, ce qui permet ensuite de faire des update de lignes sans soucis ;) ( même si vous verrez toujours l'erreur )

### Conclusion

N'hésitez pas si certaines étapes ne sont pas claires ou si vous avez des questions. Si vous n'avez pas encore installé Gladys, c'est plus que jamais le moment de s'y mettre !
