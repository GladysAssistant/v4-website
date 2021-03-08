---
title: Des tags NFC pour contrôler Gladys
description: Comment déclencher des actions sur Gladys sans forcément être sur l'interface ? Avec Tasker et des tags NFC !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/nfc-cover.jpg

slug: gladys-and-nfc
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel a été écrit il y a plusieurs années, il ne concerne pas Gladys v4 ! 
</div>

Comment faire pour intéragir avec Gladys sans avoir avec ouvrir une interface web, lancer une commande ? Avec des tags NFC ! Ce sont les parfaits candidats pour faire la liaison entre le monde physique, et Gladys.

<!--truncate-->

### Le matériel

- Des stickers NFC [achetés 4€ ici](http://amzn.to/1QQCbmU).
- Un smartphone Android NFC ( malheureusement, ce n'est pas encore possible sur iPhone, mais les iPhone 6/6S sont équipés d'une puce NFC, peut être qu'un jour Apple ouvrira l'API !)

**Attention**, lors de ce tutoriel, l'ordre d'installation des applications est important. Si vous avez déjà l'application "Trigger" d'installé sur votre portable, désinstallez-la, il faut installer Tasker d'abord ( A cause d'un bug ).

### Installez tasker

[Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en) est une formidable application Android qui vous permet d'automatiser pas mal d'actions. On s'en servira dans ce tuto pour déclencher des séries d'actions lorsqu'on pose son téléphone sur un tag NFC, mais il fait énormément de choses, et apporte **énormément de possiblités pour Gladys**. Elle coûte certes 2€99, mais bon pour les milliers de fonctionnalités que ça apporte, ça vaut son prix.

- Installez tout d'abord Tasker
- Allez dans les préférences de Tasker, onglet `Divers`, puis cocher `Autoriser l'accès extérieur` (pour que Trigger puisse déclencher des actions )

<img alt="Screenshot Android tasker" src="/fr/img/articles/gladys-and-nfc/screenshot-allow-access.jpg" width="400" />
 
### Créez une tâche Tasker

Nous allons maintenant créer une tâche dans Tasker.

#### Comment dire à Gladys que je vais me coucher ?

Un scénario simple que j'ai mis en place chez moi, c'est une petite tâche pour prévenir Gladys que je vais me coucher.

Le principe: Avant de me coucher, je pose mon smartphone sur ma table de nuit ( où il y a un tag NFC sur cette table ), et instantanément Gladys sait que je vais dormir et qu'il faut passer en mode "Nuit". Ainsi elle peut couper la lumière, et enregistrer l'heure à laquelle je me suis couché ( pour faire des belles courbes de sommeil par la suite).

**Pour créer cette tâche :**

- Allez dans l'onglet `tâches` de Tasker, et cliquez sur le `+` en bas pour créer une nouvelle tâche, et donnez lui un nom. Par exemple ici `Scenario Coucher`.
- Puis cliquez à nouveau sur le `+` en bas pour ajouter des actions à cette tâche.
- Sélectionnez `Variables` puis `Affecter une variable`. ( Cela va nous servir à enregistrer le token d'API de votre Gladys )
- Donnez lui comme nom `%Token` et comme valeur ( le champs A ) le token d'API que vous pouvez trouvez dans l'onglet paramètres de l'interface de Gladys.

<img alt="Screenshot Gladys token" src="/fr/img/articles/gladys-and-nfc/token-gladys-v3.png" />

<img alt="Screenshot set token tasker" src="/fr/img/articles/gladys-and-nfc/screenshot-set-token.jpg" width="400" />

- Revenez maintenant en arrière et créez une nouvelle action en cliquant sur `+` en bas comme précédemment. Sélectionnez `Réseau` puis `POST HTTP`.
- Remplissez le champ `Serveur:port` avec le serveur et le port de votre instance Gladys, example : `IP_DE_VOTRE_RASPBERRY_PI`. Si votre Gladys écoute sur un port particulier, il faut le préciser à la fin. Exemple: `192.168.0.12:8080`.
- Remplissez le champ `Chemin` avec le path de la route Gladys que vous voulez appeler. Ici, nous voulons créer un event, c'est donc la route `/event`. On rajoute le token défini précédemment ce qui nous donne: `/event?token=%Token`.
- Ensuite, remplissez le champs `Données/Fichier` avec les données suivantes :

```
code=going-to-sleep
user=1
```

Vous pouvez mettre n'importe quel code parmi la liste d'events suivants : [https://github.com/gladysassistant/gladys-data/blob/master/events/fr.json](https://github.com/gladysassistant/gladys-data/blob/master/events/fr.json).

Le user est l'ID du user que vous voulez affecter par l'event. Si vous allez vous coucher, mettez votre ID ( vous pouvez trouver votre ID dans les paramètres de Gladys, rubrique `Mon compte` )

<img alt="Screenshot edit task" src="/fr/img/articles/gladys-and-nfc/screenshot-edit-task2.jpg" width="400" />

- C'est bon, votre tâche est prête. Vous pouvez la tester en cliquant sur le bouton "play" en bas à gauche. Normalement vous devriez voir apparaître l'event dans l'onglet `Moi` de votre Gladys.

**Remarque:** Si cette tâche ne fonctionne pas, que vous avez une erreur comme quoi l'EventType n'existe pas, c'est que vous n'avez pas la liste d'event à jour dans Gladys. Pour mettre cette liste à jour, allez dans `Paramètres` => `Mettre à jour les données Gladys`.

### Installez Trigger

[Trigger](https://play.google.com/store/apps/details?id=com.jwsoft.nfcactionlauncher) est une application Android gratuite qui vous permet de déclencher des actions après avoir détecté un tag NFC. Trigger servira juste à détecter le tag, puis il lancera la suite d'action que vous aurez défini dans Tasker.

- Installez Trigger
- Créez un nouveau déclencheur en cliquant sur le `+` en bas à droite de l'application, et sélectionnez `NFC`.
- Vous pouvez définir des restrictions d'horaires, de jours, ou de connexion à un réseau Wi-Fi. Sélectionnez ce que vous voulez, puis faites `terminé`, et enfin `Suivant`.
- Ajoutez une action, selectionnez `Tasker` => `Tâche de tasker`, et sélectionnez la tâche que vous avez précédemment créée.
- Faites `Suivant`, puis `Terminé`, puis placez votre téléphone sur le tag NFC que vous voulez écrire.
- C'est bon, votre tag NFC est prêt!

<img alt="Screenshot write NFC" src="/fr/img/articles/gladys-and-nfc/screenshot-write-nfc.jpg" width="400" />

### Conclusion

Grâce au NFC, les possiblitées sont infinies. Chaque recoin de votre maison où un sticker est collé devient un bouton qui peut déclencher une action sur Gladys. Je me sers depuis maintenant un mois de ces tags, et honnêtement c'est très pratique.

Pour finir, une petite anecdote sympa. J'ai posé un tag NFC au mur qui change l'ambiance de mon appartemment. Dès que je pose mon téléphone dessus, imaginez les lumières chez moi qui fondent vers un rouge tamisé, et un petit jazz qui se lance dans la pièce principale... ça fait toujours son petit effet quand des gens viennent chez moi !

Et vous, quels sont vos scénarios favoris ?
