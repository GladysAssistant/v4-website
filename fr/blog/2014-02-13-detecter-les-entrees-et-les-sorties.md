---
id: detecter-les-entrees-et-les-sorties
title: Un détecteur de mouvements sur les ports GPIOs du Raspberry Pi
description: Afin de diffuser des alertes uniquement quand le propriétaire est là, il est utile de savoir si l’appartement est vide ou occupé ! Nous apprendrons ici à détecter si la pièce est occupé.
image: /fr/img/presentation/motionsensorlow.jpg
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel a été écrit il y a plusieurs années, il ne concerne pas Gladys v4 ! 
</div>

L'objectif de Gladys est de nous aider au quotidien en diffusant des alertes ( nouveaux messages, rappels de rendez-vous ou de notes, réveils, etc.. ).
Mais il est inutile de diffuser ces alertes si le propriétaire n'est pas là et que l'appartement est vide !
Dans ce tuto nous allons voir comment savoir si l'appartement est occupé grâce à un détecteur de mouvement.Le capteur de mouvement utilisé dans ce tutoriel peut être acheté [ici](http://amzn.to/1IkbDJl) pour environ 3-4\$.

![détecteur mouvement](/fr/img/articles/detecter-les-entrees-et-les-sorties/sku_139624_1.jpg)

<!--truncate-->

## Le montage

Le montage est très simple, il suffit de connecter les ports du détecteur directement au GPIOs du Raspberry Pi en suivant le schéma suivant :

![Schéma montage GPIO détecteur mouvement](/fr/img/articles/detecter-les-entrees-et-les-sorties/schema-pir.jpg)

Vous remarquerez deux vis oranges sur le capteur :

- La première sert à régler la sensibilité du capteur ( la valeur par défaut est 50% )
- La deuxième sert à ajuster la durée pendant laquelle le capteur va monter à 3V en sortie quand il a détecté un mouvement. ( Par défaut, quelques secondes )

## Le code Python

Pour le script je remercie l'auteur de [cet article](http://www.raspberrypi-spy.co.uk/2013/01/cheap-pir-sensors-and-the-raspberry-pi-part-1/) pour cet excellent script que j'ai adapté selon mes besoins.

Que ce passe-il dans ce script ?
En fait le capteur attend qu'il y ait un mouvement. Dès qu'un mouvement est détecté, une requête est faite à un fichier PHP sur le Raspberry afin de "prévenir" qu'un mouvement a été détecté, pour que le Raspberry Pi puisse l'enregistrer.

Je vous laisse faire une petite API adapté à vos besoins, cela se fait en quelques lignes de Node.js/PHP/ce que vous voulez :)

## Interprétations

Quand un mouvement est détecté, plusieurs interprétations peuvent être faites, je les ai regroupées dans un tableau :

### Un mouvement est détecté

<table class="table table-striped">
    <caption>Un mouvement est détecté</caption>
    <tbody>
        <tr>
            <th>Contexte/Historique</th>
            <th>Interprétation</th>
            <th>Conséquence</th>
        </tr>
        <tr>
            <td>Nous sommes dans la journée, et le Raspberry a vu un mouvement il y a moins de 5 minutes </td>
            <td>L'utilisateur est dans son appartement, il n'est pas sorti ( ou peu longtemps ).</td>
            <td>On ne fait rien</td>
        </tr>
        <tr>
            <td>Nous sommes dans la journée, et le dernier mouvement remonte il y a plus de 40 minutes </td>
            <td>L'utilisateur était sorti, et il vient de rentrer.</td>
            <td>On l'accueil avec un "Bienvenue Monsieur" et on lui diffuse les messages qu'il a reçu pendant son absence.</td>
        </tr>
        <tr>
            <td>Nous sommes la nuit (ou le matin assez tôt). Le dernier mouvement remonte à moins de 8heures (ou 10 heures pour
                les dormeurs !) </td>
            <td>L'utilisateur était en train de dormir, et il vient de se réveiller.</td>
            <td>Suivant ses préférences : si un réveil est en cours, on coupe le réveil car l'utilisateur est debout.<br/>Sinon
                on ne fait rien de particulier</td>
        </tr>
        <tr>
            <td>Nous sommes la nuit (ou le matin assez tôt). Le dernier mouvement remonte à plus de 8heures (ou 10 heures) </td>
            <td>L'utilisateur n'a pas dormi chez lui ce soir là ( car le dernier mouvement date trop ), et il rentre chez lui.
                ( Il pouvait être en vacances, ou parti en week end ) </td>
            <td>On l'accueil suivant l'heure, on lui diffuse les messages qu'il a reçu en son absence.</td>
        </tr>
    </tbody>
</table>

## Conclusion

Comme vous pouvez le voir, les possibilités de scénarios sont infinis ! Rien qu'en sachant si l'utilisateur est là ou pas, Gladys est capable d'interpréter ce qu'à fait l'utilisateur, et donc d'agir en conséquence.

Avec ces infos, il devient possible de désactiver les notifications quand l'utilisateur n'est pas là.
Imaginons notre utilisateur a réglé son réveil à 8H, mais pour une raison x ou y, il dort chez un ami. Gladys comprend que l'utilisateur n'est pas là, et en conséquence il peut décider de ne pas lancer le réveil, car l'appartement est vide ! Idem pour tout autre notification, car diffuser quelques chose dans une pièce vide, c'est inutile ;)
Autre scénario : L'utilisateur part, mais oublie de couper la musique. Au bout d'un certain temps, Gladys comprends qu'il n'y a plus personne dans l'appartement et naturellement coupe le son!

Voilà, c'est la fin du tuto n°6 ! J'espère qu'il vous a plu et qu'il vous aideras dans vos projets. N'hésitez pas à laisser un commentaire si vous avez des questions/idées/remarques/améliorations ou si juste ce tuto vous a plu !
