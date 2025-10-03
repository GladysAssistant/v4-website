---
title: Intégrer Node-RED avec Gladys Assistant en MQTT
description: Aujourd'hui nous allons apprendre comment connecter Node-RED à Gladys Assistant en MQTT !
authors: pierregilles
image: /img/presentation/node-red-gladys-assistant-fr.jpg
slug: integrate-node-red-with-gladys-assistant-in-mqtt
---

Salut à tous!

Aujourd'hui on se retrouve avec non pas un article, mais une vidéo Youtube où je vous explique comment intégrer Node-RED avec Gladys Assistant.

Pour ceux qui ne connaissent pas [Node-RED](https://nodered.org), c'est un outil open-source "low code" qui permet de faire de faire des scénarios, avec des entrées et des sorties façon "programmation visuelle".

## Pourquoi proposer ce tutoriel ?

Je suis conscient que dans Gladys Assistant 4 nous n'avons pas encore toutes les compatibilités espérées (ça prend du temps!), et donc je pense que Node-RED peut-être une bonne solution pour palier à certains manques de Gladys 4.

Ce que je vous propose ici, c'est d'utiliser Node-RED comme complément de Gladys, et de faire communiquer les deux en MQTT.

Bien-sûr, ce tutoriel n'est pas forcément pour tout le monde: Node-RED est un peu moins simple à mettre en place que Gladys, et il y a un peu de ligne de commande au début.

Néanmoins, à l'aide de ce tutoriel et d'un peu de temps, je pense avoir vulgarisé suffisamment le fonctionnement des deux outils pour les faire travailler ensemble.

La vidéo est sur YouTube ci-dessous, et vous trouverez à la suite les différentes commandes que j'ai utilisé !

PS: Si vous pouviez mettre un commentaire sur la vidéo Youtube, cela a un vrai impact sur le référencement YouTube et ça permet à la chaine d'être encore plus visible sur internet. Merci d'avance !

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/bpmHzR8_S5g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Lancer Node-RED

La commande utilisée dans la vidéo est la suivante:

```
docker run -d \
--log-opt max-size=10m \
--restart=always \
--privileged \
-u root \
--network=host \
--name node_red \
-v /var/lib/node-red:/data \
nodered/node-red
```

## Sécuriser Node-RED

Pour sécuriser Node-RED, je génère un hash de mot de passe avec la commande suivante:

```
docker exec -it node_red node-red admin hash-pw
```

Puis j'édite le fichier:

```
nano /var/lib/node-red/settings.js
```

Et je redémarre Node-RED:

```
docker restart node_red
```

## Conclusion

J'espère que ce format vidéo vous a plu.

Si oui, n'hésitez pas le dire en commentaire sur YouTube !

Merci à tous !
