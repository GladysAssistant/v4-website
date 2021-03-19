---
title: Des mises à jour Gladys plus rapides et plus stables !
description: Le process de mise à jour Gladys évolue pour être plus rapide et surtout beaucoup plus stable !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/nouveau-process-maj-cover.jpg

slug: des-mise-a-jour-gladys-plus-rapide-et-plus-sur
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel est destiné à Gladys v3, il ne fonctionne pas avec Gladys v4 ! 
</div>

Salut à tous!

Jusque là, la mise à jour de Gladys posait problème pour beaucoup d'entre vous. J'ai essayé de repenser ce processus de mise à jour afin que ce soit plus rapide, et surtout plus fiable, pour que vous puissiez tous bénéficier des mises à jour de Gladys le plus rapidement possible!

<!--truncate-->

## Comment fonctionnait la mise à jour jusque là ?

Jusque-là, le script de mise à jour fonctionnait de façon très simple:

Il se plaçait dans le dossier "/home/pi/gladys", et il laissait la commande :

```
npm install gladys
```

C'est tout!

Il faut maintenant comprendre ce que fait cette fameuse commande `npm install` :

- NPM va chercher la dernière version du package gladys.
- Télécharge cette version sous forme d'une archive
- Décompresse l'archive
- Récupère la liste des dépendances
- Installe les dépendances

Dans notre histoire, l'installation de Gladys ne pose pas problème. Gladys est écrit en 100% Javascript, NPM télécharge donc uniquement du code Javascript, et c'est tout.

Le problème vient de l'installation des dépendances. Avec Node.js, il y a deux types de modules:

- Les modules écrit en pure JS
- Les modules natifs, en C++

Ces modules natifs sont très utiles, car ils permettent d'exposer en JS des fonctions qui elles sont écrites en C++ et donc sont extrêmement performantes. Ces modules font en général du travail très bas niveau type:

- Tout ce qui est crypto (type hashage de mot de passe)
- Connexion aux bases de données
- Connexion à un hardware particulier

Hors, ces modules natifs, à l'installation, sont souvent compilés sur la machine qui lance le npm install. Notre pauvre Raspberry Pi se retrouve donc à compiler une lib de crypto complète, et se retrouve parfois bloqué car il lui manque des tools de compilation...

Et en plus, une compilation, ça prend du temps!

## Le nouveau process de mise à jour

L'objectif va désormais être de ne plus installer ces dépendances sur vos Raspberry Pi. Je vais fournir une archive de type `gladys-v3.5.1-Linux-armv6l.tar.gz` contenant tout le nécessaire : gladys + dépendances, avec tout le nécessaire compilé pour architecture ARM. Installer Gladys ne sera plus qu'une décompression d'archive: plus de build fastidieux!

### Le build de l'archive

Bien entendu, j'ai automatisé le process afin de pouvoir délivrer facilement ces archives.

Chez moi, mon Raspberry Pi :

- Télécharge la version de Gladys dont je souhaite faire l'archive
- Installe les dépendances avec [Yarn](https://yarnpkg.com/) et non plus NPM. ( Yarn est plus rapide, et surtout beaucoup plus stable que NPM )
- Compresse le dossier `gladys` en un fichier .tar.gz
- Upload le fichier dans un bucket Amazon S3

En gros, c'est moi qui compile une bonne fois pour toute les dépendances et bundle le tout dans une archive, et non plus vous qui installez chacun de votre côté ;)

Un petit schéma pour récapituler tout ça :

![Build process Gladys](../../../static/img/articles/fr/des-mise-a-jour-gladys-plus-rapide-et-plus-sur/build-process.png)

### L'installation de la mise à jour chez vous

Chez vous, il y a désormais dans l'image Gladys un script `/home/pi/rpi-update.sh` qu'il suffit d'exécuter pour updater Gladys !

La bonne nouvelle, c'est que ce script ne disparait plus si jamais l'installation de gladys fail, car il est à l'extérieur du dossier Gladys!

Un petit schéma de comment se passe l'installation chez vous désormais :

![Update process Gladys](../../../static/img/articles/fr/des-mise-a-jour-gladys-plus-rapide-et-plus-sur/update-process.png)

## Migration vers la nouvelle image

Une nouvelle image de Gladys est désormais disponible contenant tout le nécessaire.

### Backup MySQL

Pour passer de l'ancienne image à la nouvelle, faites d'abord une backup de votre DB MySQL sur votre Raspberry Pi actuel :

    mysqldump -uroot -proot gladys > backup-gladys.sql

Puis récupérez ce fichier en local sur votre machine (Soit en FTP avec [FileZilla](https://filezilla-project.org/), soit en SFTP)

### Installation de la nouvelle image

Ensuite, vous pouvez télécharger la nouvelle image Gladys sur [la page d'installation](/fr/installation).

Ensuite, je vous conseille [Etcher](https://etcher.io/) pour cloner l'image sur votre carte SD ( fonctionne sous Linux/MacOS/Windows ).

Clonez l'image sur votre carte SD.

Insérez la SD dans votre Raspberry Pi, connectez le au réseau en ethernet, et branchez-le : Gladys est prête!

### Restauration de la DB MySQL

Cherchez l'IP de votre Raspberry Pi, puis connectez vous en SSH à celui-ci. Re-transférez le dump SQL sur le Raspberry Pi avec FileZilla ou en SFTP, puis lancez la commande suivante pour charger le dump dans la DB:

    mysql -uroot -proot gladys < backup-gladys.sql

### Pour mettre à jour Gladys

A l'avenir, quand vous voudrez mettre à jour Gladys, il suffira de faire:

    /home/pi/rpi-update.sh

C'est tout !

## Conclusion

J'espère que mon tutoriel a été clair, et que vous avez réussi à mettre tout ça en place chez vous :)

N'hésitez pas si vous avez des remarques à les mettre en commentaires, ou à en parler sur le forum !
