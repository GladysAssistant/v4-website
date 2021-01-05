---
id: synology
title: Déployer Gladys sur un NAS Synogoly avec Docker
sidebar_label: Synology avec Docker
---


Ce tutoriel vous explique comment installer Gladys avec Docker sur un NAS Synogoly compatible.

## Préalable : installer Docker sur votre NAS 

Installez simplement le package via le 'Centre de paquets'  
Pour voir la liste des NAS Synology compatibles, allez sur la [page du package docker](https://www.synology.com/fr-fr/dsm/packages/Docker)



## Déployer Gladys sur votre NAS Synogoly via Docker

### Préparer le stockage de Gladys

Pour conserver les données en dehors du container, nous avons besoin de créer un dossier sur le volume du Syno.  
Pour ma part j'ai créé un nouveau *Dossier partagé* `docker` via *File Station* pour tous mes besoins de stockage des containers dockers.  
Créons donc un dossier spécifique pour le stockage de ce container Gladys ```/docker/gladysassistant-latest```  
**attention**: le chemin de ce dossier en ligne de commande devra intégrer le nom du volume de stockage. Pour ma part, ce sera `/volume1/docker/gladysassistant-latest`

C'est là que nous stockerons le contenu de  `/var/lib/gladysassistant`  

Si vous avez déjà lancé l'alpha auparavant, pensez à supprimer le contenu de ce dossier `/var/lib/gladysassistant`, car nous avons fais des modifications à ce niveau entre l'alpha et la beta. Attention: vous perdrez les données de l'alpha!


### Installer et lancer le Gladys via SSH

> Pour tester rapidement l'installation, je vous suggère de commencer par utiliser docker en ligne de commande depuis une connexion SSH.  
> En effet, la configuration n'est pas entièrement possible par l'assistant de l'interface docker ; il n'est notamment pas possible d'indiquer les liens vers `/dev`et vers `/var/run/docker.socket`. Pour contourner le problème, il faudra commencer une configuration via l'assistant, puis l'exporter, y ajouter les points de montage pour enfin créer un conteneur en important cette configuration (après avoir préalablement détruit le premier conteneur).
> Cependant, bien que nous lancerons docker en ligne de commande, vous pouvez suivre l'exécution du container via l'interface docker de DSM. Il ne sera juste pas possible de modifier la configuration depuis l'interface. 

Pour lancer Gladys, exécutez la commande ci-dessous depuis une connexion SSH sur votre Syno pour créer et lancer le container **gladysassistant-latest**  
Il faut bien sûr que votre compte utilisateur ait les droits d'administration. Nous utilisons la commande *sudo* pour l'élévation temporaire de privilège nécessaire (le mot de passe demandé est votre mot de passe utilisateur).
Si ce n'est pas déjà fait, docker commencera alors par télécharger l'image depuis DockerHub.  

```sudo \
docker run -d \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--name "gladysassistant-latest" \
-e NODE_ENV=production \
-e SERVER_PORT=8420 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /volume1/docker/gladysassistant-latest/:/var/lib/gladysassistant \
-v /dev:/dev \
gladysassistant/gladys:latest
```

**Notes:**

- `--name "gladysassistant-latest"` : c'est le nom du conteneur que vous verrez dans l'interface de supervision docker de DSM
- `-v /docker/gladysassistant-latest:...` : changez ce chemin en fonction de l'endroit où vous avez préparé l'espace de stockage de gladys.
- `-e TZ=Europe/Paris` => Pour changer le fuseau horaire du container, vous pouvez modifier cette variable. Vous trouverez toutes les valeurs possibles sur [cette list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `-e SERVER_PORT=8420` => Vous pouvez adapter le port exposé selon votre configuration. N'utilisez pas le `80` par contre si vous faites tourner un serveur web sur votre Syno. (thanks captain obvious ;-))
- Si vous êtes sur une architecture x64/x86, utilisez le tag `v4-amd64`, soit une image `gladysassistant/gladys:v4-amd64`

### Accéder à Gladys

Vous pouvez accéder à Gladys en tapant l'IP de votre Synology sur votre navigateur suivi du numéro de port.  
Dans mon cas ce sera `http://192.168.53.137:8420`

Pour trouver l'IP de votre Syno, vous pouvez utiliser Synogoly Assistant, que vous trouverez sur l'(espace de téléchargement de votre NAS)[https://www.synology.com/en-sg/support/download/DS218+#utilities] sur le site de synology.  
Sinon vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS)



## Mise à jour automatique avec Watchtower

Vous pouvez utiliser Watchtower pour mettre automatiquement Gladys à jour quand une nouvelle version est disponible.  
Pour cela, nous allons installer le container Watchtower disponible sur DockerHub https://hub.docker.com/r/containrrr/watchtower

Là encore, il faut le lancer en ligne de commande depuis une connexion SSH sur votre synology.  
Il faut que votre compte utilisateur ait les droits d'administration.  

Lancez le container avec la commande *sudo* (le mot de passe demandé est votre mot de passe utilisateur)

```
 sudo docker run -d \
  --name "watchtower" \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup
```
Pour une démo, je vous recommande la vidéo youtube suivante : [Watchtower Docker Install using Synology DS 218+](https://www.youtube.com/watch?v=1YLZfIr4F5I)


## Configuration via l'assistant docker de DSM Synology
Certains paramètre ne peuvent pas être configuré directement dans l'assistant. Il faut donc passer par l'import export de configurations depuis l'onglet "Conteneur" de l'assistant.

Vous pouvez enregistrer la configuration ci-dessous sous forme d'un fichier .json que vous importerez via l'interface de gestion des conteneurs docker de DSM
```
{
   "cap_add" : null,
   "cap_drop" : null,
   "cmd" : "npm run start:prod",
   "cpu_priority" : 50,
   "devices" : null,
   "enable_publish_all_ports" : false,
   "enable_restart_policy" : true,
   "enabled" : true,
   "entrypoint_default" : "docker-entrypoint.sh",
   "env_variables" : [
      {
         "key" : "PATH",
         "value" : "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
      },
      {
         "key" : "NODE_VERSION",
         "value" : "12.20.0"
      },
      {
         "key" : "YARN_VERSION",
         "value" : "1.22.5"
      },
      {
         "key" : "NODE_ENV",
         "value" : "production"
      },
      {
         "key" : "SERVER_PORT",
         "value" : "8420"
      },
      {
         "key" : "TZ",
         "value" : "Europe/Paris"
      },
      {
         "key" : "SQLITE_FILE_PATH",
         "value" : "/var/lib/gladysassistant/gladys-production.db"
      }
   ],
  "exporting" : false,
   "id" : "1174f48a451fa110cf2248fbd2533407cb1535e87ea92d97c065a68739fc5c28",
   "image" : "gladysassistant/gladys:latest",
   "is_ddsm" : false,
   "is_package" : false,
   "links" : [],
   "memory_limit" : 0,
   "name" : "gladysassistant-latest",
   "network" : [
      {
         "driver" : "host",
         "name" : "host"
      }
   ],
   "network_mode" : "host",
   "port_bindings" : [],
   "privileged" : true,
   "shortcut" : {
      "enable_shortcut" : true,
      "enable_status_page" : true,
      "enable_web_page" : false
   },
   "use_host_network" : true,
   "volume_bindings" : [
      {
         "host_volume_file" : "/dev",
         "mount_point" : "/dev",
         "type" : "rw"
      },
      {
         "host_volume_file" : "/docker/gladysassistant-latest",
         "mount_point" : "/var/lib/gladysassistant",
         "type" : "rw"
      },
      {
         "host_volume_file" : "/var/run/docker-sock",
         "mount_point" : "/var/run/docker.sock",
         "type" : "rw"
      }
   ]
}

```
