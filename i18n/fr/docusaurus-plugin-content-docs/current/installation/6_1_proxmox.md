---
id: proxmox
title: Installer Gladys Assistant sur Proxmox VE
description: "Installez Gladys Assistant sur Proxmox VE dans une machine virtuelle avec Gladys Assistant OS, notre installeur officiel : créez la VM, installez Gladys en quelques questions, et passez votre dongle Zigbee et votre adaptateur Bluetooth en USB."
sidebar_label: Installation sur Proxmox
keywords:
  - gladys proxmox
  - installer gladys assistant proxmox
  - gladys assistant os proxmox
  - domotique proxmox
  - proxmox passthrough usb zigbee
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

Si vous avez déjà un serveur [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) à la maison, vous pouvez y héberger Gladys Assistant à côté de vos autres services.

Nous recommandons de faire tourner Gladys dans une **machine virtuelle (VM)** installée avec **[Gladys Assistant OS](/fr/docs/installation/mini-pc/)**, notre installeur officiel : le même que sur un mini-PC. Il installe Ubuntu Server, Docker et Gladys dans la VM, puis maintient Gladys à jour automatiquement. Une VM se comporte comme un vrai ordinateur : votre dongle Zigbee est transmis en USB, et Gladys est accessible à l'adresse `gladysassistant.local` sur votre réseau.

:::note
Ce guide utilise les noms des menus de l'interface web de Proxmox en anglais, sur Proxmox VE 8 et 9.
:::

## Étape 1 : Télécharger Gladys Assistant OS dans Proxmox

Dans l'interface web de Proxmox, sélectionnez votre stockage (en général **local**), ouvrez **ISO Images**, puis cliquez sur **Download from URL**.

Collez le lien de l'image de Gladys Assistant OS, cliquez sur **Query URL**, puis sur **Download** :

```
https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso
```

:::tip[Vérifier le téléchargement]
Dans la même fenêtre, cochez **Advanced**, choisissez **SHA-256** comme algorithme de hachage et collez l'empreinte publiée dans [ce fichier](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso.sha256) (uniquement la longue suite de caractères, sans le nom du fichier). Proxmox vérifie alors l'image après l'avoir téléchargée.
:::

## Étape 2 : Créer la machine virtuelle

Cliquez sur **Create VM** en haut à droite et suivez l'assistant :

- **General** : nommez la VM `gladys`. Cochez **Advanced**, puis **Start at boot**, pour que Gladys redémarre après un redémarrage du serveur.
- **OS** : sélectionnez l'image `gladys-assistant-installer-amd64.iso` que vous venez de télécharger.
- **System** : réglez **BIOS** sur **OVMF (UEFI)** : Gladys Assistant OS ne démarre qu'en mode UEFI. Gardez **Add EFI Disk** coché et choisissez un stockage pour ce disque. Cochez aussi **Qemu Agent**.
- **Disks** : **32 Go** suffisent pour commencer (16 Go minimum). Gladys conserve l'historique de vos capteurs : prévoyez plus si vous avez beaucoup d'appareils.
- **CPU** : **2 cœurs**. Choisissez le type **host** pour de meilleures performances (dans un cluster avec des modèles de CPU différents, voir la FAQ plus bas).
- **Memory** : **4096 Mo** (4 Go) pour commencer. Prévoyez **6 à 8 Go** dès que vous utilisez Zigbee2MQTT et plusieurs intégrations, qui tournent chacune dans leur propre conteneur. Vous pourrez l'augmenter plus tard depuis l'onglet **Hardware** : le changement s'applique une fois la VM arrêtée puis redémarrée.
- **Network** : gardez le bridge par défaut (`vmbr0`) et le modèle **VirtIO**, pour que la VM obtienne une adresse sur votre réseau local comme n'importe quel autre appareil.

Validez, puis démarrez la VM.

## Étape 3 : Installer Gladys Assistant OS

Ouvrez la **Console** de la VM. Le menu de Gladys Assistant OS s'affiche, avec **Install Gladys Assistant** en surbrillance, et démarre tout seul au bout de 3 secondes.

Répondez ensuite aux questions de l'installeur exactement comme sur un mini-PC : langue, clavier, votre compte et SSH. Voir l'[étape 4 du guide mini-PC](/fr/docs/installation/mini-pc/#installer-questions) pour le détail. Le disque virtuel de la VM est son seul disque, il n'y a donc rien à choisir : quand l'installeur vous demande de confirmer l'effacement du disque, seul ce disque virtuel est effacé, jamais les disques de votre serveur Proxmox.

Quand la console affiche **Installation complete!**, retirez d'abord l'image de la VM, pour qu'elle ne relance pas l'installeur : dans l'onglet **Hardware**, double-cliquez sur **CD/DVD Drive** et choisissez **Do not use any media**. Sélectionnez ensuite **Reboot Now** dans la console et appuyez sur **Entrée** (et encore sur **Entrée** si elle vous demande de retirer le support d'installation). Si la console reste noire, cliquez sur **Reset** en haut à droite de la VM : l'installation est déjà terminée.

Lors de ce premier démarrage, Gladys Assistant OS installe Docker, télécharge Gladys et la lance : suivez la progression dans la console. Quand elle affiche **Gladys Assistant est prêt**, ouvrez **`http://gladysassistant.local`** depuis un ordinateur du même réseau. Si ce nom ne s'ouvre pas, utilisez plutôt l'adresse IP affichée dans la console : `http://IP-DE-LA-VM`.

## Étape 4 : Installer l'agent invité Qemu

L'agent invité Qemu permet à Proxmox d'afficher l'adresse IP de la VM et de l'arrêter proprement. Connectez-vous à la VM avec le compte créé pendant l'installation, dans la console ou en SSH (`ssh votre-utilisateur@gladysassistant.local`), puis lancez :

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
```

```bash
sudo reboot
```

Nous recommandons aussi de donner à la VM une adresse IP fixe grâce à une réservation DHCP dans votre box : l'adresse IP de la VM s'affiche dans son onglet **Summary** une fois l'agent invité lancé.

## Étape 5 : Transmettre votre dongle Zigbee (et le Bluetooth)

Si vous utilisez un coordinateur Zigbee USB, branchez-le sur le serveur Proxmox, puis donnez-le à la VM :

1. Sélectionnez la VM, ouvrez **Hardware**, puis cliquez sur **Add** > **USB Device**.
2. Choisissez **Use USB Vendor/Device ID** et sélectionnez votre dongle dans la liste (par exemple un dongle Zigbee SONOFF).
3. Cliquez sur **Add**, puis redémarrez la VM pour qu'elle voie l'appareil.

Choisir le dongle par son identifiant vendor/device, plutôt que par port USB, permet à la VM de le retrouver même si vous le branchez sur un autre port. Vous pouvez faire la même chose depuis le shell de l'hôte Proxmox : trouvez l'identifiant avec `lsusb`, puis lancez `qm set <ID de la VM> -usb0 host=<vendor>:<device>`.

Dans la VM, vérifiez que le dongle apparaît :

```bash
ls /dev/serial/by-id/
```

Faites de même pour un **adaptateur Bluetooth USB** si vous voulez utiliser des capteurs Bluetooth ou appairer des appareils Matter en Bluetooth, puis installez BlueZ dans la VM :

```bash
sudo apt install -y bluez
```

:::tip[Un coordinateur réseau évite le passthrough USB]
Avec un coordinateur Zigbee Ethernet (comme le SMLIGHT SLZB-06), il n'y a rien à transmettre : Gladys le joint par le réseau, et vous pouvez déplacer la VM sur un autre nœud Proxmox librement. Voir [Utiliser un coordinateur réseau](/fr/docs/integrations/zigbee2mqtt#utiliser-un-coordinateur-réseau).
:::

## Étape 6 : Sauvegarder la VM

Si vous utilisez [Gladys Plus](/fr/docs/plus/intro), il sauvegarde déjà votre Gladys tous les jours, de manière chiffrée. Sur Proxmox, vous pouvez ajouter une sauvegarde de la VM entière : dans **Datacenter** > **Backup**, planifiez une sauvegarde régulière de la VM `gladys`. Avant un gros changement, vous pouvez aussi prendre un snapshot depuis l'onglet **Snapshots** de la VM.

## Vous préférez installer Debian vous-même ?

Gladys Assistant OS dédie la VM à Gladys et s'occupe des mises à jour. Si vous préférez gérer le système vous-même, créez la VM de la même façon, installez-y Debian ou Ubuntu Server, puis suivez le [guide d'installation avec Docker](/fr/docs/installation/docker).

## Questions fréquentes

### Faut-il utiliser une VM ou un conteneur LXC ?

Nous recommandons une VM installée avec Gladys Assistant OS parce que c'est le plus simple : Gladys s'installe et se met à jour toute seule, et le dongle USB, le Bluetooth et l'IPv6 pour Matter se comportent comme sur une machine physique. Un conteneur LXC fonctionne aussi, et plusieurs membres expérimentés de la communauté font tourner Gladys ainsi : il consomme un peu moins de RAM, et ses ressources se modifient sans redémarrage. Mais Gladys Assistant OS ne s'installe pas dans un LXC : vous installez vous-même Docker et Gladys, Docker dans un LXC demande un conteneur privilégié avec l'option nesting activée, et transmettre les périphériques USB et l'IPv6 au conteneur demande une configuration supplémentaire. Si vous êtes à l'aise avec ça, le LXC est un bon choix ; sinon, partez sur la VM.

### De combien de RAM et de disque la VM Gladys a-t-elle besoin ?

Commencez avec 2 cœurs, 4 Go de RAM et un disque de 32 Go. Les membres de la communauté qui utilisent Zigbee2MQTT et plusieurs intégrations constatent que 4 Go deviennent vite un peu justes : prévoyez alors 6 à 8 Go. Vous pouvez augmenter la RAM à tout moment, le changement s'applique une fois la VM arrêtée puis redémarrée. Donnez plus de disque à la VM si vous gardez un long historique pour beaucoup de capteurs.

### Matter fonctionne-t-il dans une VM Proxmox ?

Oui. Matter repose sur l'IPv6 : il doit donc être activé sur votre box et dans la VM. Ubuntu, sur lequel repose Gladys Assistant OS, l'active par défaut : vérifiez que l'interface réseau de la VM (pas l'interface de loopback `lo`) a une adresse IPv6 avec `ip -6 addr`. Voir l'[intégration Matter](/fr/docs/integrations/matter) pour la suite de la configuration.

### Puis-je déplacer la VM Gladys sur un autre nœud Proxmox ?

Oui, mais un périphérique USB transmis à la VM reste attaché au serveur sur lequel il est branché : déplacez le dongle avec la VM, ou utilisez un coordinateur Zigbee réseau, qui fonctionne depuis n'importe quel nœud. Dans un cluster dont les nœuds ont des modèles de CPU différents, gardez aussi le type de CPU par défaut de la VM plutôt que **host**, sinon la migration à chaud peut échouer.

### Gladys peut-elle surveiller mon serveur Proxmox ?

Oui. L'[intégration communautaire Proxmox](/fr/docs/integrations/external/proxmox) affiche dans Gladys l'état de vos VM et conteneurs et le résultat de vos sauvegardes, pour être prévenu quand une sauvegarde échoue.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Faut-il utiliser une VM ou un conteneur LXC ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous recommandons une VM installée avec Gladys Assistant OS parce que c'est le plus simple : Gladys s'installe et se met à jour toute seule, et le dongle USB, le Bluetooth et l'IPv6 pour Matter se comportent comme sur une machine physique. Un conteneur LXC fonctionne aussi, et plusieurs membres expérimentés de la communauté font tourner Gladys ainsi : il consomme un peu moins de RAM, et ses ressources se modifient sans redémarrage. Mais Gladys Assistant OS ne s'installe pas dans un LXC : vous installez vous-même Docker et Gladys, Docker dans un LXC demande un conteneur privilégié avec l'option nesting activée, et transmettre les périphériques USB et l'IPv6 au conteneur demande une configuration supplémentaire. Si vous êtes à l'aise avec ça, le LXC est un bon choix ; sinon, partez sur la VM.",
        },
      },
      {
        "@type": "Question",
        name: "De combien de RAM et de disque la VM Gladys a-t-elle besoin ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commencez avec 2 cœurs, 4 Go de RAM et un disque de 32 Go. Les membres de la communauté qui utilisent Zigbee2MQTT et plusieurs intégrations constatent que 4 Go deviennent vite un peu justes : prévoyez alors 6 à 8 Go. Vous pouvez augmenter la RAM à tout moment, le changement s'applique une fois la VM arrêtée puis redémarrée. Donnez plus de disque à la VM si vous gardez un long historique pour beaucoup de capteurs.",
        },
      },
      {
        "@type": "Question",
        name: "Matter fonctionne-t-il dans une VM Proxmox ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Matter repose sur l'IPv6 : il doit donc être activé sur votre box et dans la VM. Ubuntu, sur lequel repose Gladys Assistant OS, l'active par défaut : vérifiez que l'interface réseau de la VM (pas l'interface de loopback lo) a une adresse IPv6 avec ip -6 addr.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je déplacer la VM Gladys sur un autre nœud Proxmox ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, mais un périphérique USB transmis à la VM reste attaché au serveur sur lequel il est branché : déplacez le dongle avec la VM, ou utilisez un coordinateur Zigbee réseau, qui fonctionne depuis n'importe quel nœud. Dans un cluster dont les nœuds ont des modèles de CPU différents, gardez aussi le type de CPU par défaut de la VM plutôt que host, sinon la migration à chaud peut échouer.",
        },
      },
      {
        "@type": "Question",
        name: "Gladys peut-elle surveiller mon serveur Proxmox ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L'intégration communautaire Proxmox affiche dans Gladys l'état de vos VM et conteneurs et le résultat de vos sauvegardes, pour être prévenu quand une sauvegarde échoue.",
        },
      },
    ],
  }}
/>
