---
id: windows
title: "Gladys Assistant sur Windows : possible, mais déconseillé"
description: "Peut-on installer Gladys Assistant sur un PC Windows ? Techniquement oui, mais nous le déconseillons : dongles USB, Bluetooth et découverte réseau fonctionnent mal. Voici quoi faire à la place, avec Gladys Assistant OS."
sidebar_label: Windows (déconseillé)
keywords:
  - gladys assistant windows
  - installer gladys windows
  - gladys windows 11
  - gladys docker desktop
  - gladys virtualbox
  - domotique pc windows
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Réponse courte : nous déconseillons de faire tourner Gladys Assistant sur Windows.**

Gladys est conçue pour tourner sous Linux, dans Docker. Sur Windows, Docker tourne lui-même dans une machine virtuelle Linux cachée (WSL 2). Gladys voit alors cette machine virtuelle, et pas votre PC : elle n'accède ni à vos dongles USB, ni à votre adaptateur Bluetooth, ni à votre réseau local comme elle en a besoin. L'essentiel de ce qui rend une maison connectée utile ne fonctionne plus, ou demande des bricolages fragiles.

La bonne nouvelle : avec [Gladys Assistant OS](/fr/docs/installation/mini-pc), notre installeur officiel, une machine dédiée à Gladys est prête en une trentaine de minutes, sans aucune ligne de commande. Et vous pouvez tout préparer depuis votre PC Windows.

## Ce qui ne fonctionne pas avec Docker Desktop

Si vous lancez Gladys avec Docker Desktop sur Windows, ou avec Docker installé dans une distribution WSL 2 (Ubuntu sous WSL, par exemple), voici ce que vous allez rencontrer :

- **Les dongles USB Zigbee et Z-Wave** : le dongle est branché sur Windows, pas sur la machine virtuelle de Docker. Le lui transmettre demande des outils supplémentaires (`usbipd-win`) et casse souvent après un redémarrage.
- **Le Bluetooth** : indisponible dans la machine virtuelle de Docker, donc pas de capteurs Bluetooth ni d'appairage Matter en Bluetooth.
- **Le réseau local** : Docker sait relayer les connexions ordinaires vers Gladys, mais même avec l'option `--network=host` de la [commande d'installation](/fr/docs/installation/docker), Gladys n'a pas d'accès direct au réseau de votre PC. `gladysassistant.local` ne fonctionne pas, et la découverte des appareils sur le réseau (Matter, caméras, Philips Hue, scan du réseau…) est aléatoire, voire impossible.
- **Le redémarrage et l'extinction depuis Gladys** : ces actions pilotent un hôte Linux, elles ne font donc rien sur Windows.
- **La disponibilité** : une maison connectée doit tourner 24 h/24. Un PC de bureau se met en veille, s'éteint, et les mises à jour Windows le redémarrent quand elles le décident : vos scènes et votre alarme s'arrêtent avec lui.

## Ce que nous recommandons à la place

### Le mieux : un mini-PC avec Gladys Assistant OS

Un mini-PC consomme quelques watts, reste allumé en permanence et fait tourner Gladys sans rien à contourner. Avec [Gladys Assistant OS](/fr/docs/installation/mini-pc), vous écrivez l'installeur sur une clé USB depuis votre PC Windows, vous démarrez le mini-PC dessus et vous répondez à quelques questions : Gladys s'installe toute seule, puis se met à jour toute seule.

- 👉 [Installer Gladys sur un mini-PC avec Gladys Assistant OS](/fr/docs/installation/mini-pc) (recommandé)
- 👉 [Installer Gladys sur un Raspberry Pi](/fr/docs/installation/raspberry-pi), avec notre image officielle

**Un vieux PC dont vous ne vous servez plus peut aussi devenir votre box Gladys.** Gladys Assistant OS s'installe sur n'importe quel ordinateur doté d'un processeur Intel ou AMD qui démarre en mode UEFI, d'un SSD d'au moins 16 Go et d'un port Ethernet. Il remplace Windows : le disque de ce PC est effacé.

Si vous avez déjà un serveur ou un NAS à la maison, vous pouvez aussi l'utiliser : voir les guides [Proxmox](/fr/docs/installation/proxmox), [Synology](/fr/docs/installation/synology) et [Unraid](/fr/docs/installation/unraid), ou le [guide d'installation Docker](/fr/docs/installation/docker) pour n'importe quel serveur Linux.

### Pour essayer Gladys sur votre PC Windows : une machine virtuelle

Si vous voulez essayer Gladys sur le PC que vous utilisez déjà, installez Gladys Assistant OS dans une **machine virtuelle**, et non avec Docker Desktop. La machine virtuelle se comporte alors comme un mini-PC sur votre réseau. C'est aussi l'approche que Home Assistant documente pour Windows.

1. Installez [VirtualBox](https://www.virtualbox.org/), puis téléchargez l'[image de Gladys Assistant OS](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso) (un fichier `.iso` d'environ 2 Go).
2. Dans VirtualBox, cliquez sur **Nouvelle**. Sélectionnez l'image `gladys-assistant-installer-amd64.iso`, choisissez le type **Linux** et la version **Ubuntu (64-bit)**. Si VirtualBox propose une installation automatique (*Unattended Installation*), désactivez-la en cochant **Skip Unattended Installation** : l'installeur de Gladys Assistant OS pose ses propres questions. Donnez à la machine virtuelle **2 cœurs**, **4 Go de RAM** (6 à 8 Go dès que vous utilisez Zigbee2MQTT et plusieurs intégrations) et un disque de **32 Go**.
3. Avant de la démarrer, ouvrez sa **Configuration** :
   - dans **Système**, cochez l'option **EFI** (*Enable EFI*) : Gladys Assistant OS ne démarre qu'en mode UEFI ;
   - dans **Réseau**, réglez la carte en **Accès par pont** (*Bridged Adapter*), et dans **Nom**, choisissez la carte réseau qu'utilise votre PC (Ethernet ou Wi-Fi), pour que la machine virtuelle obtienne sa propre adresse sur votre réseau local.
4. Démarrez la machine virtuelle et répondez aux questions de l'installeur comme sur un mini-PC : voir l'[étape 4 du guide mini-PC](/fr/docs/installation/mini-pc#installer-questions). Seul le disque virtuel de la machine virtuelle est effacé, jamais le disque de votre PC.
5. Quand l'installeur affiche **Installation complete!**, retirez d'abord l'image, pour qu'elle ne relance pas l'installeur : dans le menu de la fenêtre de la machine virtuelle, **Périphériques > Lecteurs optiques** (*Devices > Optical Drives*), retirez le disque du lecteur virtuel. Sélectionnez ensuite **Reboot Now**.
6. Gladys s'installe toute seule à ce premier démarrage. Quand la fenêtre de la machine virtuelle affiche **Gladys Assistant est prêt**, ouvrez **`http://gladysassistant.local`** dans votre navigateur sous Windows. Si ce nom ne s'ouvre pas, utilisez l'adresse affichée en dessous dans la fenêtre de la machine virtuelle (par exemple `http://192.168.1.42`).

Pour utiliser vos appareils :

- **Dongle Zigbee** : branchez-le sur le PC, puis dans les paramètres **USB** de la machine virtuelle, activez le **contrôleur USB 3.0 (xHCI)** et ajoutez un **filtre USB** pour votre dongle : VirtualBox le confie à la machine virtuelle à chaque démarrage. Si le dongle n'apparaît pas dans la machine virtuelle, ou se déconnecte sans arrêt, un [coordinateur réseau](/fr/docs/integrations/zigbee2mqtt#utiliser-un-coordinateur-réseau) évite complètement l'USB.
- **Bluetooth** : pour utiliser des capteurs Bluetooth ou appairer des appareils Matter en Bluetooth, donnez de la même façon un adaptateur Bluetooth USB à la machine virtuelle, avec un autre filtre USB, puis installez BlueZ dans la machine virtuelle : `sudo apt install -y bluez`.

Gardez en tête que le PC doit rester allumé et que la mise en veille doit être désactivée. C'est pour cela que cette configuration convient pour essayer Gladys, mais qu'une machine dédiée reste le meilleur choix sur le long terme. Le jour où vous changez, une [sauvegarde Gladys Plus](/fr/docs/installation/migrate) transfère toute votre installation sur la nouvelle machine.

Vous préférez gérer le système vous-même ? Installez plutôt Debian ou Ubuntu Server dans la machine virtuelle, puis suivez le [guide d'installation Docker](/fr/docs/installation/docker).

## Questions fréquentes

### Puis-je installer Gladys Assistant avec Docker Desktop sur Windows ?

Gladys démarre, mais sans accès aux dongles USB, au Bluetooth et à votre réseau local, la plupart des intégrations ne fonctionnent pas correctement. Nous ne prenons pas en charge cette configuration. Utilisez un mini-PC dédié installé avec Gladys Assistant OS, ou au minimum Gladys Assistant OS dans une machine virtuelle en réseau par pont.

### Et avec WSL 2 ?

Ce n'est pas mieux : Docker Desktop tourne déjà sur WSL 2, et Docker installé directement dans une distribution WSL 2 (comme Ubuntu) tourne dans la même machine virtuelle cachée, avec les mêmes limites pour l'USB, le Bluetooth et le réseau local.

### Puis-je transformer mon vieux PC Windows en box Gladys ?

Oui, si vous le dédiez à Gladys : Gladys Assistant OS remplace Windows par Ubuntu Server et Gladys, et maintient Gladys à jour. Le PC doit avoir un processeur Intel ou AMD qui démarre en mode UEFI, un SSD d'au moins 16 Go et un port Ethernet. Son disque est effacé : sauvegardez vos fichiers avant.

### Et sur un Mac ?

Le problème est le même : sur macOS aussi, Docker Desktop fait tourner Docker dans une machine virtuelle cachée. Utilisez une machine dédiée pour Gladys.

### Existe-t-il une version Windows de Gladys ?

Non. Gladys tourne dans Docker sous Linux, ce qui couvre les mini-PC, les Raspberry Pi, les NAS et les serveurs. Sur un mini-PC, Gladys Assistant OS installe tout cela pour vous. Vous pouvez piloter Gladys depuis n'importe quel navigateur sous Windows, et depuis votre téléphone.

### Je suis développeur sous Windows, comment contribuer à Gladys ?

C'est un autre usage : pour coder sur Gladys depuis Windows, suivez le [guide de l'environnement de développement Windows](/fr/docs/dev/setup-development-environment-windows), qui utilise WSL 2 et VS Code.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Puis-je installer Gladys Assistant avec Docker Desktop sur Windows ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys démarre, mais sans accès aux dongles USB, au Bluetooth et à votre réseau local, la plupart des intégrations ne fonctionnent pas correctement. Nous ne prenons pas en charge cette configuration. Utilisez un mini-PC dédié installé avec Gladys Assistant OS, ou au minimum Gladys Assistant OS dans une machine virtuelle en réseau par pont.",
        },
      },
      {
        "@type": "Question",
        name: "Et avec WSL 2 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ce n'est pas mieux : Docker Desktop tourne déjà sur WSL 2, et Docker installé directement dans une distribution WSL 2 (comme Ubuntu) tourne dans la même machine virtuelle cachée, avec les mêmes limites pour l'USB, le Bluetooth et le réseau local.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je transformer mon vieux PC Windows en box Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, si vous le dédiez à Gladys : Gladys Assistant OS remplace Windows par Ubuntu Server et Gladys, et maintient Gladys à jour. Le PC doit avoir un processeur Intel ou AMD qui démarre en mode UEFI, un SSD d'au moins 16 Go et un port Ethernet. Son disque est effacé : sauvegardez vos fichiers avant.",
        },
      },
      {
        "@type": "Question",
        name: "Et sur un Mac ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le problème est le même : sur macOS aussi, Docker Desktop fait tourner Docker dans une machine virtuelle cachée. Utilisez une machine dédiée pour Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Existe-t-il une version Windows de Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Gladys tourne dans Docker sous Linux, ce qui couvre les mini-PC, les Raspberry Pi, les NAS et les serveurs. Sur un mini-PC, Gladys Assistant OS installe tout cela pour vous. Vous pouvez piloter Gladys depuis n'importe quel navigateur sous Windows, et depuis votre téléphone.",
        },
      },
      {
        "@type": "Question",
        name: "Je suis développeur sous Windows, comment contribuer à Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est un autre usage : pour coder sur Gladys depuis Windows, suivez le guide de l'environnement de développement Windows, qui utilise WSL 2 et VS Code.",
        },
      },
    ],
  }}
/>
