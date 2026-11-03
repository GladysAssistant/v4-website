---
id: windows
title: "Gladys Assistant sur Windows : possible, mais déconseillé"
description: "Peut-on installer Gladys Assistant sur un PC Windows ? Techniquement oui, mais nous le déconseillons : dongles USB, Bluetooth et découverte réseau fonctionnent mal. Voici quoi faire à la place."
sidebar_label: Windows (déconseillé)
keywords:
  - gladys assistant windows
  - installer gladys windows
  - gladys windows 11
  - gladys docker desktop
  - domotique pc windows
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Réponse courte : nous déconseillons de faire tourner Gladys Assistant sur Windows.**

Gladys est conçue pour tourner sous Linux, dans Docker. Sur Windows, Docker tourne lui-même dans une machine virtuelle Linux cachée (WSL 2). Gladys voit alors cette machine virtuelle, et pas votre PC : elle n'accède ni à vos dongles USB, ni à votre adaptateur Bluetooth, ni à votre réseau local comme elle en a besoin. L'essentiel de ce qui rend une maison connectée utile ne fonctionne plus, ou demande des bricolages fragiles.

La bonne nouvelle : une machine dédiée à Gladys coûte peu, et c'est bien plus simple.

## Ce qui ne fonctionne pas avec Docker Desktop

Si vous lancez Gladys avec Docker Desktop sur Windows, voici ce que vous allez rencontrer :

- **Les dongles USB Zigbee et Z-Wave** : le dongle est branché sur Windows, pas sur la machine virtuelle de Docker. Le lui transmettre demande des outils supplémentaires (`usbipd-win`) et casse souvent après un redémarrage.
- **Le Bluetooth** : indisponible dans la machine virtuelle de Docker, donc pas de capteurs Bluetooth ni d'appairage Matter en Bluetooth.
- **Le réseau local** : sur Windows, l'option `--network=host` de la [commande d'installation](/fr/docs/installation/docker) ne donne pas à Gladys l'accès à votre réseau domestique. `gladysassistant.local` ne fonctionne pas, et la découverte des appareils sur le réseau (Matter, caméras, Philips Hue, scan du réseau…) est aléatoire, voire impossible.
- **Le redémarrage et l'extinction depuis Gladys** : ces actions pilotent un hôte Linux, elles ne font donc rien sur Windows.
- **La disponibilité** : une maison connectée doit tourner 24 h/24. Un PC de bureau se met en veille, s'éteint, et les mises à jour Windows le redémarrent quand elles le décident : vos scènes et votre alarme s'arrêtent avec lui.

## Ce que nous recommandons à la place

### Le mieux : une petite machine dédiée

Un mini-PC ou un Raspberry Pi consomme quelques watts, reste allumé en permanence et fait tourner Gladys avec l'installation officielle, sans rien à contourner.

- 👉 [Installer Gladys sur un mini-PC](/fr/docs/installation/mini-pc) (recommandé)
- 👉 [Installer Gladys sur un Raspberry Pi](/fr/docs/installation/raspberry-pi)

Si vous avez déjà un NAS ou un serveur à la maison, vous pouvez aussi l'utiliser : voir les guides [Synology](/fr/docs/installation/synology) et [Unraid](/fr/docs/installation/unraid), ou le [guide d'installation Docker](/fr/docs/installation/docker) pour n'importe quel serveur Linux.

### Si vous tenez à utiliser votre PC Windows : une machine virtuelle Linux

Si vous voulez essayer Gladys sur le PC que vous avez déjà, faites-la tourner dans une **machine virtuelle Linux**, et non avec Docker Desktop. C'est aussi l'approche que Home Assistant documente pour Windows.

1. Installez un hyperviseur comme [VirtualBox](https://www.virtualbox.org/).
2. Créez une machine virtuelle avec **2 cœurs**, **4 Go de RAM** et un disque de **32 Go**, et installez-y Debian ou Ubuntu Server.
3. Réglez sa carte réseau en **Accès par pont** (Bridged Adapter), pour que la machine virtuelle obtienne sa propre adresse sur votre réseau local.
4. Donnez-lui votre dongle Zigbee avec un **filtre USB** dans les paramètres USB de la machine virtuelle (ou utilisez un [coordinateur réseau](/fr/docs/integrations/zigbee2mqtt#utiliser-un-coordinateur-réseau), qui n'a pas besoin d'USB).
5. Suivez le [guide d'installation Docker](/fr/docs/installation/docker) dans la machine virtuelle.

Gardez en tête que le PC doit rester allumé et que la mise en veille doit être désactivée. C'est pour cela que cette configuration convient pour essayer Gladys, mais qu'une machine dédiée reste le meilleur choix sur le long terme.

## Questions fréquentes

### Puis-je installer Gladys Assistant avec Docker Desktop sur Windows ?

Gladys démarre, mais sans accès aux dongles USB, au Bluetooth et à votre réseau local, la plupart des intégrations ne fonctionnent pas correctement. Nous ne prenons pas en charge cette configuration. Utilisez un mini-PC ou un Raspberry Pi dédié, ou au minimum une machine virtuelle Linux en réseau par pont.

### Et avec WSL 2 ?

Ce n'est pas mieux : Docker Desktop tourne déjà sur WSL 2, et WSL 2 a les mêmes limites pour l'USB, le Bluetooth et le réseau local.

### Et sur un Mac ?

Le problème est le même : sur macOS aussi, Docker Desktop fait tourner Docker dans une machine virtuelle cachée. Utilisez une machine dédiée pour Gladys.

### Existe-t-il une version Windows de Gladys ?

Non. Gladys tourne dans Docker sous Linux, ce qui couvre les mini-PC, les Raspberry Pi, les NAS et les serveurs. Vous pouvez la piloter depuis n'importe quel navigateur sous Windows, et depuis votre téléphone.

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
          text: "Gladys démarre, mais sans accès aux dongles USB, au Bluetooth et à votre réseau local, la plupart des intégrations ne fonctionnent pas correctement. Nous ne prenons pas en charge cette configuration. Utilisez un mini-PC ou un Raspberry Pi dédié, ou au minimum une machine virtuelle Linux en réseau par pont.",
        },
      },
      {
        "@type": "Question",
        name: "Et avec WSL 2 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ce n'est pas mieux : Docker Desktop tourne déjà sur WSL 2, et WSL 2 a les mêmes limites pour l'USB, le Bluetooth et le réseau local.",
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
          text: "Non. Gladys tourne dans Docker sous Linux, ce qui couvre les mini-PC, les Raspberry Pi, les NAS et les serveurs. Vous pouvez la piloter depuis n'importe quel navigateur sous Windows, et depuis votre téléphone.",
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
