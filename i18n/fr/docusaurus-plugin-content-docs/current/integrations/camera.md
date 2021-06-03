---
id: camera
title: Caméra
sidebar_label: Caméra
---

Gladys est compatible avec les caméras qui exposent des flux RTSP ou HTTP et avec les webcam USB (méthode expliquée à la fin).

Vous trouverez en général dans le manuel utilisateur de votre caméra, ou sur le site du constructeur, les informations du flux RTSP ou HTTP.

Voilà un exemple de flux RTSP :

```
rtsp://username:password@192.168.1.20/live/ch00_0
```

Voilà un exemple d'une API HTTP pour récuperer une image d'une caméra :

```
http://user:password@192.168.1.20/video?profile=0
```

Si vous ne trouvez pas dans votre manuel, je peux vous conseiller ce site [https://www.ispyconnect.com/sources.aspx](https://www.ispyconnect.com/sources.aspx) qui est une base de donnée de toutes les informations de connexion des caméras qui existent dans le commerce.

Il propose même un générateur d'URL en fonction de la marque, le modèle de votre caméra, et les informations de connexion (nom d'utilisateur + mot de passe) de votre caméra.

Exemple avec une caméra Xiaomi :

![Générateur flux RTSP iSpyConnect](../../../../../static/img/docs/fr/configuration/camera/camera-ispy.png)

Si vous ne trouvez rien sur ce site, une recherche Google peut vous aider, en cherchant "NOM DE LA CAMERA + RTSP", vous trouverez votre bonheur si la caméra expose un flux.

Si vous ne trouvez rien, peut-être que votre caméra utilise un protocole fermé, et dans ce cas là vous n'avez pas beaucoup de choix que de changer de caméra.

## Testez la connexion à votre caméra avec VLC

Il est possible de tester la connexion à votre caméra à l'aide de l'excellent logiciel [VLC](https://www.videolan.org/vlc/index.fr.html).

Pour cela, ouvrez VLC et cliquez sur "Fichier" -> "Ouvrir un flux réseau"

![VLC ouvrir un flux réseau](../../../../../static/img/docs/fr/configuration/camera/camera-vlc-step-1.png)

Ensuite, entrez l'URL de votre flux RTSP ou HTTP.

![VLC ouvrir un flux réseau](../../../../../static/img/docs/fr/configuration/camera/camera-vlc-step-2.png)

C'est bon ! Si les informations de connexion sont bonnes, vous devriez voir votre caméra :

![VLC ouvrir un flux réseau](../../../../../static/img/docs/fr/configuration/camera/camera-vlc-step-3.png)

## Ajoutez votre caméra à Gladys Assistant

Une fois que vous avez votre URL de flux vidéo qui fonctionne dans VLC, vous pouvez désormais ajouter le flux à Gladys.

Allez dans l'onglet "Intégrations" dans Gladys Assistant, puis cliquez sur l'intégration "Caméras" :

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-1.png)

Cliquez sur le bouton pour créer une nouvelle caméra

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-2.png)

Remplissez les informations de connexion à votre caméra

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-3.png)

Vous pouvez tester la connexion afin de vérifier que le flux est bien accessible de Gladys Assistant. Si Gladys n'a pas accès à la caméra, êtes-vous sûr que votre ordinateur faisant tourner Gladys est bien sur le même réseau que la caméra ? Que la caméra est bien accessible ? Que les identifiants sont bons ?

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/z_ajouter_webcam_usb_gladys_assistant_02-test.jpg)

Une fois que la caméra fonctionne, cliquez sur le bouton "Sauvegarder".

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-4.png)

## Ajoutez la caméra au dashboard de Gladys Assistant

Rendez-vous sur le dasboard de Gladys et cliquez sur le bouton pour modifier le dashboard

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-5.png)

Cliquez sur "+" là où vous voulez ajouter votre box, et sélectionnez la box "Caméra"

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-6.png)

Sélectionnez votre caméra, donnez un nom à la box, et cliquez sur "Enregistrer"

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-7.png)

Voilà ! Votre caméra est visible.

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-8.png)

## Envoyez un message à Gladys Assistant pour voir une image de caméra

Rendez-vous dans l'onglet message, et demandez à Gladys "Montre moi la caméra dans la XXXXX" (Mettez le nom de la pièce ou se trouve votre caméra)

Et, magie :

![Demander une image de caméra à Gladys](../../../../../static/img/docs/fr/configuration/camera/chat-camera-fr.png)

Cela fonctionne aussi par Telegram si vous avez configuré l'intégration :)

## Ajoutez une webcam USB à Gladys Assistant sous Raspberry

Il est possible de voir le flux diffusé par une webcam connectée en USB à Gladys Assistant.

La procédure est la même pour l'intégrer à Gladys Assistant :

Allez dans l'onglet "Intégrations" dans Gladys Assistant, puis cliquez sur l'intégration "Caméras" :

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-1.png)

Cliquez sur le bouton pour créer une nouvelle caméra

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/camera-step-2.png)

Remplissez les informations de connexion à votre caméra en saisissant, dans la zone Flux RTSP/HTTP de la caméra, l'adresse du port USB sur lequel est connecté la webcam : /dev/video0

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/z_ajouter_webcam_usb_gladys_assistant_01-config.jpg)

Vous pouvez tester la connexion afin de vérifier que le flux est bien accessible de Gladys Assistant.

J'ai mis une photo du port de Dieppe devant ma webcam 😄

![Ajouter une caméra à Gladys Assistant](../../../../../static/img/docs/fr/configuration/camera/z_ajouter_webcam_usb_gladys_assistant_02-test.jpg)

Une fois que la caméra fonctionne, cliquez sur le bouton "Sauvegarder".

## Le tutoriel en vidéo

Si vous préférez les tutoriels en vidéo, j'ai enregistré une vidéo pour vous montrer en direct comment faire:

<div class="videoContainer">
    <iframe class="video" src="https://www.youtube.com/embed/sCFoiqwSIq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
