---
id: freebox-delta
title: Freebox Delta
sidebar_label: Freebox Delta
---

## Sur Freebox Delta

Ce tutoriel vous explique comment installer Gladys avec Docker sur une Freebox Delta.

### Créer une machine virtuelle sur la Freebox Delta

Tout d'abord il faut se rendre sur l'interface Freebox à l'adresse suivante : mafreebox.free.fr.

<img src="/fr/img/docs/installation/freebox-delta/freeboxos.PNG" alt="FreeboxOs"  />

Cliquez sur "VMs". Cette fenêtre apparait :

<img src="/fr/img/docs/installation/freebox-delta/add-vm.PNG" alt="Ajouter une VM"  />

Choisissez un nom pour la VM, par exemple Gladys.

Sélectionnez l'option "Choisir un système d'exploitation pré-installé parmi une liste".

Cliquez sur "Suivant".

<img src="/fr/img/docs/installation/freebox-delta/add-vm-2.PNG" alt="Ajouter une VM"  />

Sélectionnez le système à installer, par exemple Debian ou Ubuntu.
(Préférez Debian à Ubuntu pour une meilleure reconnaissance des ports USB de la Freebox)

Renseignez une clé SSH publique ou un mot de passe.

Choisissez un nom d'utilisateur, par exemple `gladys`.

Cliquez sur "Suivant".

<img src="/fr/img/docs/installation/freebox-delta/add-vm-3.PNG" alt="Ajouter une VM"  />

Cliquez sur "Terminer".

La VM est prête, cliquez sur "Allumer" pour démarrer la VM.

<img src="/fr/img/docs/installation/freebox-delta/start-vm.PNG" alt="Ajouter une VM"  />

Accédez à votre VM en SSH et mettez à jour le système.

```bash
sudo apt update
sudo apt upgrade
```

### Installer Docker sur la VM

```bash
sudo apt install docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker gladys
```

Ensuite, fermez votre session SSH puis reconnectez-vous à votre VM.

### Lancer Gladys

Pour lancer Gladys, exécutez la commande suivante sur votre VM:

```bash
docker run -d \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
gladysassistant/gladys:v4-arm
```

## Mise à jour automatique avec Watchtower

Vous pouvez utiliser Watchtower pour mettre automatiquement Gladys à jour quand une nouvelle version est disponible. Pour cela, lancez le container:

```bash
docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower:armhf-latest \
  --cleanup
```

### Accéder à Gladys

Vous pouvez accéder à Gladys en tapant l'IP de votre VM sur votre navigateur.

<img src="/fr/img/docs/installation/freebox-delta/freebox-vm-success.PNG" alt="Access VM"  />
