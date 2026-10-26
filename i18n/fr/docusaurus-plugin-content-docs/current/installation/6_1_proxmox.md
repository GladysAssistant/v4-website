---
id: proxmox
title: Installer Gladys Assistant sur Proxmox VE
description: "Installez Gladys Assistant sur Proxmox VE dans une machine virtuelle Debian : créez la VM, passez votre dongle Zigbee et votre adaptateur Bluetooth en USB, et lancez Gladys avec Docker."
sidebar_label: Installation sur Proxmox
keywords:
  - gladys proxmox
  - installer gladys assistant proxmox
  - domotique proxmox
  - proxmox passthrough usb zigbee
  - gladys lxc
---

import JsonLd from '@site/src/components/seo/JsonLd';

Si vous avez déjà un serveur [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) à la maison, vous pouvez y héberger Gladys Assistant à côté de vos autres services.

Nous recommandons de faire tourner Gladys dans une **machine virtuelle (VM) Debian**, puis de l'installer avec Docker exactement comme sur n'importe quel serveur Linux. Une VM se comporte comme un vrai ordinateur : la commande d'installation officielle fonctionne telle quelle, votre dongle Zigbee est transmis en USB, et Gladys est accessible à l'adresse `gladysassistant.local` sur votre réseau.

:::note
Ce guide utilise les noms des menus de l'interface web de Proxmox en anglais, sur Proxmox VE 8 et 9.
:::

## Étape 1 : Télécharger l'ISO de Debian

Dans l'interface web de Proxmox, sélectionnez votre stockage (en général **local**), ouvrez **ISO Images**, puis cliquez sur **Download from URL**.

Collez le lien de la dernière image Debian « netinst » pour votre architecture (amd64 pour la plupart des mini-PC et serveurs), disponible sur le [site de Debian](https://www.debian.org/distrib/netinst), cliquez sur **Query URL**, puis sur **Download**.

Ubuntu Server fonctionne tout aussi bien si vous le préférez : la suite de ce guide est la même.

## Étape 2 : Créer la machine virtuelle

Cliquez sur **Create VM** en haut à droite et suivez l'assistant :

- **General** : nommez la VM `gladys`. Cochez **Advanced**, puis **Start at boot**, pour que Gladys redémarre après un redémarrage du serveur.
- **OS** : sélectionnez l'ISO Debian que vous venez de télécharger.
- **System** : cochez **Qemu Agent**.
- **Disks** : **32 Go** suffisent pour commencer. Gladys conserve l'historique de vos capteurs : prévoyez plus si vous avez beaucoup d'appareils.
- **CPU** : **2 cœurs**. Choisissez le type **host** pour de meilleures performances.
- **Memory** : **4096 Mo** (4 Go). Gladys tourne avec 2 Go, mais Zigbee2MQTT et les autres intégrations apprécieront la marge.
- **Network** : gardez le bridge par défaut (`vmbr0`) et le modèle **VirtIO**, pour que la VM obtienne une adresse sur votre réseau local comme n'importe quel autre appareil.

Validez, puis démarrez la VM.

## Étape 3 : Installer Debian

Ouvrez la **Console** de la VM et suivez l'installateur Debian. À l'étape **Sélection des logiciels** :

- décochez les environnements de bureau (Gladys n'en a pas besoin),
- cochez **serveur SSH** et **utilitaires usuels du système**.

Une fois Debian installé et la VM redémarrée, connectez-vous et installez l'agent invité Qemu, qui permet à Proxmox d'afficher l'adresse IP de la VM et de l'éteindre proprement :

```bash
sudo apt update && sudo apt install -y qemu-guest-agent
sudo reboot
```

:::tip
Si vous avez défini un mot de passe root pendant l'installation, Debian n'installe pas `sudo`. Suivez l'encadré Debian en haut du [guide d'installation Docker](/fr/docs/installation/docker) pour installer d'abord `curl` et `sudo`.
:::

Nous vous conseillons aussi de donner une adresse IP fixe à la VM avec une réservation DHCP dans votre box : l'adresse IP de la VM s'affiche dans son onglet **Summary** dès que l'agent invité tourne.

## Étape 4 : Transmettre votre dongle Zigbee (et le Bluetooth)

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

## Étape 5 : Installer Gladys avec Docker

La VM est maintenant un serveur Debian classique. Suivez le [guide d'installation Docker](/fr/docs/installation/docker) : installez Docker avec le script officiel, puis lancez Gladys avec la commande d'installation, sans rien changer.

Ouvrez ensuite **`http://gladysassistant.local`** depuis un ordinateur du même réseau. Si ce nom ne s'ouvre pas, utilisez plutôt l'adresse IP de la VM, affichée dans son onglet **Summary** : `http://IP-DE-LA-VM`.

## Étape 6 : Sauvegarder la VM

Si vous utilisez [Gladys Plus](/fr/docs/plus/intro), il sauvegarde déjà votre Gladys tous les jours, de manière chiffrée. Sur Proxmox, vous pouvez ajouter une sauvegarde de la VM entière : dans **Datacenter** > **Backup**, planifiez une sauvegarde régulière de la VM `gladys`. Vous pouvez aussi prendre un **Snapshot** de la VM avant un gros changement.

## Questions fréquentes

### Faut-il utiliser une VM ou un conteneur LXC ?

Nous recommandons une VM. Gladys tourne dans Docker, et Docker dans un conteneur LXC demande un conteneur privilégié avec l'option nesting activée. Les périphériques USB sont aussi plus difficiles à transmettre à un conteneur, et Matter a besoin que l'IPv6 fonctionne aussi dans le conteneur. Certains membres de la communauté font tourner Gladys dans un LXC « Docker » privilégié, et ça fonctionne, mais une VM vous donne exactement la même configuration que l'installation officielle, pour quelques centaines de Mo de RAM en plus.

### De combien de RAM et de disque la VM Gladys a-t-elle besoin ?

2 cœurs, 4 Go de RAM et un disque de 32 Go sont confortables pour une maison classique. Gladys elle-même tourne avec 2 Go de RAM. Donnez plus de disque à la VM si vous gardez un long historique pour beaucoup de capteurs.

### Matter fonctionne-t-il dans une VM Proxmox ?

Oui. Matter repose sur l'IPv6 : il doit donc être activé sur votre box et dans la VM. Debian l'active par défaut : vérifiez que la VM a une adresse IPv6 avec `ip -6 addr`. Voir l'[intégration Matter](/fr/docs/integrations/matter) pour la suite de la configuration.

### Puis-je déplacer la VM Gladys sur un autre nœud Proxmox ?

Oui, mais un périphérique USB transmis à la VM reste attaché au serveur sur lequel il est branché : déplacez le dongle avec la VM, ou utilisez un coordinateur Zigbee réseau, qui fonctionne depuis n'importe quel nœud.

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
          text: "Nous recommandons une VM. Gladys tourne dans Docker, et Docker dans un conteneur LXC demande un conteneur privilégié avec l'option nesting activée. Les périphériques USB sont aussi plus difficiles à transmettre à un conteneur, et Matter a besoin que l'IPv6 fonctionne aussi dans le conteneur. Certains membres de la communauté font tourner Gladys dans un LXC Docker privilégié, et ça fonctionne, mais une VM vous donne exactement la même configuration que l'installation officielle, pour quelques centaines de Mo de RAM en plus.",
        },
      },
      {
        "@type": "Question",
        name: "De combien de RAM et de disque la VM Gladys a-t-elle besoin ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2 cœurs, 4 Go de RAM et un disque de 32 Go sont confortables pour une maison classique. Gladys elle-même tourne avec 2 Go de RAM. Donnez plus de disque à la VM si vous gardez un long historique pour beaucoup de capteurs.",
        },
      },
      {
        "@type": "Question",
        name: "Matter fonctionne-t-il dans une VM Proxmox ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Matter repose sur l'IPv6 : il doit donc être activé sur votre box et dans la VM. Debian l'active par défaut : vérifiez que la VM a une adresse IPv6 avec ip -6 addr.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je déplacer la VM Gladys sur un autre nœud Proxmox ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, mais un périphérique USB transmis à la VM reste attaché au serveur sur lequel il est branché : déplacez le dongle avec la VM, ou utilisez un coordinateur Zigbee réseau, qui fonctionne depuis n'importe quel nœud.",
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
