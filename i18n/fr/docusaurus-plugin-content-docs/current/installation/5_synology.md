---
id: synology
title: Installer Gladys Assistant sur un NAS Synology
sidebar_label: Installation sur NAS Synology
---

Ce tutoriel vous explique comment installer Gladys avec Docker sur un NAS Synology compatible.

## Préalable : installer Docker sur votre NAS

Installez simplement le package docker via le "Centre de paquets".

Pour voir la liste des NAS Synology compatibles, allez sur la [page du package docker](https://www.synology.com/fr-fr/dsm/packages/Docker).

## Déployer Gladys sur votre NAS Synology via Docker

### Préparer le stockage de Gladys

Pour conserver les données en dehors du conteneur, nous avons besoin de créer un dossier sur le volume du Syno.

Si il n'existe pas déjà, créez le _Dossier partagé_ `docker` via _File Station_ pour tous vos besoins de stockage des conteneurs docker.

Créez ensuite un dossier pour le stockage de ce conteneur Gladys `docker/gladysassistant`.

**Attention** : le chemin de ce dossier en ligne de commande devra intégrer le nom du volume de stockage : `/volume1/docker/gladysassistant`

### Installer et lancer le Gladys via SSH

Pour lancer Gladys, exécutez la commande ci-dessous depuis une connexion SSH sur votre Syno pour créer et lancer le conteneur **gladys**.

Il faut bien sûr que votre compte utilisateur ait les droits d'administration. Nous utilisons la commande _sudo_ pour l'élévation temporaire de privilège nécessaire (le mot de passe demandé est votre mot de passe utilisateur).

Si ce n'est pas déjà fait, docker commencera alors par télécharger l'image depuis DockerHub.

```
sudo \
docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--cgroupns=host \
--name "gladys" \
-e NODE_ENV=production \
-e SERVER_PORT=8420 \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /volume1/docker/gladysassistant/:/var/lib/gladysassistant \
-v /etc/timezone:/etc/timezone:ro \
-v /etc/localtime:/etc/localtime:ro \
-v /dev:/dev \
gladysassistant/gladys:v4
```

**Notes:**

- `--name "gladys"` : c'est le nom du conteneur que vous verrez dans l'interface de supervision docker de DSM
- `-v /volume1/docker/gladysassistant:...` : changez ce chemin en fonction de l'endroit où vous avez préparé l'espace de stockage de gladys.
- `-e SERVER_PORT=8420` => Vous pouvez adapter le port exposé selon votre besoin. La liste des ports réservés est disponible sur le [site Synology](https://kb.synology.com/fr-fr/DSM/tutorial/What_network_ports_are_used_by_Synology_services)

### Accéder à Gladys

Vous pouvez accéder à Gladys dans votre navigateur à l'addresse `http://YOUR_NAS_IP:PORT`
Dans notre exemple ce sera `http://192.168.53.137:8420`.

## Mise à jour automatique avec Watchtower

Vous pouvez utiliser Watchtower pour mettre automatiquement Gladys à jour quand une nouvelle version est disponible.  
Pour cela, nous allons installer le conteneur Watchtower disponible sur DockerHub https://hub.docker.com/r/containrrr/watchtower

Executez la commande suivante pour créer le conteneur Watchtower

```
 sudo docker run -d \
   --name watchtower \
   --log-opt max-size=10m \
   --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   containrrr/watchtower \
   --cleanup --include-restarting
```
