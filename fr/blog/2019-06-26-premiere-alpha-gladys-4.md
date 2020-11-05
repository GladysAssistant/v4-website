---
title: Une première version alpha pour Gladys 4 !
description: Après 7 mois de travail, la première alpha de Gladys 4 est enfin disponible. Retour sur les nouveautés, et les instructions d'installation de cette version.
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/gladys-4-alpha.jpg

id: premiere-alpha-gladys-4
---

[English article here](/en/blog/first-alpha-gladys-4).

Salut à tous !

Cela fait un bout de temps que je travaille sur Gladys Assistant 4, la prochaine version majeure de Gladys.

Le développement a pris du temps car c'est une nouvelle version qui a demandé un grand travail de recherche, d'expérimentation et de définition.

J'avais publié en décembre dernier un manifeste (que vous pouvez retrouver en anglais [ici](https://docs.google.com/document/d/1zqH0vvIRICOiXsgJVHRanInBgJ8aoTWtnrNpyASW9b0/edit?usp=sharing).

Et aujourd'hui, c'est le grand jour : c'est la sortie de la première alpha de Gladys 4! 🍾🎉

<!--truncate-->

![Gladys 4 devices](/fr/img/articles/gladys-4-alpha/gladys-4-mockup-devices.jpg)

## Les nouveautés

Gladys 4 est une réécriture **complète** de Gladys.

Le constat fait en décembre dernier, c'est que l'on était bloqué dans Gladys 3 à cause de certains choix technologiques datant du début du projet (il y a 6 ans!). Cela impactait la stabilité, la sécurité et la performance de Gladys 3.

Je suis donc reparti de zéro, avec des technologies plus modernes, et surtout beaucoup plus stable sur le long terme.

Sous le capot, on retrouve :

- Node.js + Express pour le serveur.
- Une PWA avec [Preact](https://github.com/developit/preact/) pour le frontend (Preact est un équivalent à React ultra-léger qui tient sur 3kb).
- Sqlite pour la base de donnée.

Mon objectif avec cette nouvelle version était de créer un logiciel léger, stable et simple à utiliser.

Lors de la conception, je n'ai cessé de répéter :

- L'utilisateur ne doit pas être un développeur pour utiliser Gladys.
- Qualité > Quantité. On ne fait pas forcément tout, mais ce qu'on fait on le fait bien. Je ne veux pas d'un logiciel brouillon qui essaie de tout faire.
- Stabilité, légèreté et performance. L'expérience du logiciel doit être la même pour tous les utilisateurs, et ce durant tout le cycle de vie du logiciel. La mise à jour et les différentes maintenances doivent être simples, et fiables.
- L'expérience utilisateur, c'est la clé. L'UX générale du logiciel, les différents flows dans l'interface doivent être réfléchis et travaillés.

## A quoi ressemble Gladys 4 Alpha

Bon, assez parlé, place à la démo!

### Les différents onglets

Le dashboard

![Gladys 4 Dashboard](/fr/img/articles/gladys-4-alpha/dashboard.png)

La vue "Chat" pour discuter avec Gladys:

![Gladys 4 Dashboard](/fr/img/articles/gladys-4-alpha/chat.png)

La page de configuration du Z-Wave, désormais intégré en natif dans Gladys:

![Gladys 4 Dashboard](/fr/img/articles/gladys-4-alpha/zwave.png)

La page de Gladys Plus, le nouveau nom du "Gladys Community package" de Gladys! C'est le plan payant de Gladys, qui permet un accès chiffré de bout en bout de partout dans le monde, des backups quotidiennes, et bien plus.

![Gladys 4 Dashboard](/fr/img/articles/gladys-4-alpha/gladys-plus.png)

Les fameuses backups quotidiennes:

![Gladys 4 Dashboard](/fr/img/articles/gladys-4-alpha/backups.png)

Enfin, la vue Système:

![Gladys 4 Dashboard](/fr/img/articles/gladys-4-alpha/system.png)

Une fonctionnalité que j'adore, c'est la possibilité d'envoyer par Telegram à Gladys un simple message "Montre moi la caméra de la cuisine", et de recevoir directement dans Telegram la vue de la caméra :

![Gladys 4 Telegram](/fr/img/articles/gladys-4-alpha/telegram-image.jpg)

### Les détails d'UI qui ont leur importance

Ma philosophie dans cette v4, c'est que l'interface utilisateur, c'est le plus important.

Il m'est arrivé de passer des jours entiers sur des petits éléments d'interface, juste pour m'assurer que tous les cas particuliers étaient gérés.

Ca peut paraître tout bête, mais je suis conscient que dans la v3 beaucoup d'éléments d'interface ne renvoyait pas suffisamment d'informations à l'utilisateur sur l'état de l'UI: en cours de chargement, une erreur réseau est survenue, une erreur de validation est survenue, etc...

L'ancien framework (AngularJS) que l'on utilisait n'était pas conçu pour permettre des gestions d'états aussi complexes, avec des données arrivant dynamiquement en arrière-plan.

Dans Gladys 4 j'utilise un gestionnaire d'état centralisé très performant, [unistore](https://github.com/developit/unistore), qui nous permet de créer des interfaces plus complètes.

### Les services migrés de la v3

Pour l'instant, seuls 4 services ont été migrés de la v3 à la v4: les services Z-Wave, Camera, Telegram et DarkSky. Ces services ne sont pas entièrement terminés, mais c'est un déjà un premier jet fonctionnel.

D'autres services sont en cours de migration : Sonos, Bluetooth, Philips Hue et Caldav Calendar grâce au support de la communauté :)

## Tester l'alpha en ligne

Si tu es un débutant, le plus simple pour tester Gladys 4 Alpha est de te rendre sur la version de démo en ligne:

[demo.gladysassistant.com](https://demo.gladysassistant.com/dashboard)

C'est un des grands avantages de ce frontend séparé du backend, il est possible d'héberger une version de démo 100% statique !

## Comment installer l'alpha?

⚠️ Attention, comme précisé, cette version est une version alpha destinée à un public développeur. Pour l'installer, il faudra lancer des lignes de commandes, ce n'est pas encore la version finale clé en main.

Cette alpha, comme son nom l'indique, est encore en développement. Il y a donc probablement certaines instabilités ou fonctionnalité manquantes. Tout cela sera corrigé avant la release finale.

🇫🇷 Pour l'instant, la v4 n'est qu'en anglais, mais la traduction sera faite avant la sortie finale de Gladys. Il y a des fichiers de traductions, ce ne sera pas un gros chantier.

### Sur MacOS/Windows

Étant donné que Gladys 4 tourne sous Docker, il est assez facile de l'installer sur MacOS et Windows, sans même à avoir à taper de lignes de commandes grâce à l'application Kitematic.

Je vous laisse lire mon tutoriel ici :

[Installer Gladys Assistant 4 Alpha sur MacOS/Windows](/fr/docs/installation/macos-windows).

### Sur Raspberry Pi

Sur Raspberry Pi, c'est pareil, il suffit d'installer Docker sur le Pi, puis de lancer l'image, tout tourne tout seul ensuite.

Je vous laisse lire mon tutoriel ici :

[Installer Gladys Assistant 4 Alpha sur Raspberry Pi](/fr/docs/).

## Suite & Remerciements

La suite, c'est évidemment pour vous de tester cette version alpha de Gladys, que ce soit via la version de démo, ou en l'installant manuellement, et de donner vos retours !

De mon côté, je rentre en France la semaine prochaine, et je commence dès la mi-juillet mon tour de France des installations Gladys. J'irais dans un premier temps visiter des installations très particulières afin de tester Gladys 4 Alpha en situation réelle. Je continuerais le tour de France à la rentrée après mes vacances d'été.

J'aimerais remercier tous ceux qui ont contribués à cette version alpha:

- Les contributeurs GitHub: VonOx, atrovato, bertrandda, NilkOne et cicoub13. Mention spéciale à VonOx qui a fait un travail formidable sur les build Docker: la cross-compilation ARM c'était pas facile. De même pour atrovato qui a travaillé à fond sur le service Bluetooth: j'ai hâte de merger ça.
- Les contributeurs via Gladys Plus, qui grâce à leur soutien financier mensuel permettent à ce projet d'avancer !

Un grand merci 🙌

## Soutenir mon travail

J'ai récemment stoppé les ventes du pack de vidéos de la v3 car il n'est plus adapté à la v4.

Ma seule source de revenus sur Gladys est désormais Gladys Plus, et pour l'instant ce package rapporte environ 759€/mois. C'est un début, mais c'est peu quand on enlève les frais et les taxes.

Si vous voulez soutenir mon travail, et me permettre de passer du temps sur Gladys, vous pouvez:

- Apporter un soutien régulier via Gladys Plus pour 9.99€/mois. C'est la meilleure façon de soutenir mon travail et ça vous donne accès à pas mal de fonctionnalités supplémentaires, et à un chat privée avec toute la communauté 🙂
- Faire un don en Bitcoin: 3KQiX1FtbdXLXPH9UfLSyuzRMDRGY52EiA
- Ou via [PayPal](https://www.paypal.me/gladysassistant/20) (mais bon, le Bitcoin c'est mieux!)

Merci à toutes vos remarques positives sur les derniers mois vis à vis du travail réalisé.

J'espère que vous réalisez l'ampleur du chantier et que vous êtes aussi excité que mois vis-à-vis de cette nouvelle mouture de Gladys.

J'ai hâte d'avoir vos retours!
