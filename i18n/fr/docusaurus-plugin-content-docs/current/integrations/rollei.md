---
id: rollei
title: "Caméra Rollei IPC-88 (Aldi) dans Gladys : RTSP et ONVIF"
description: "Comment connecter une caméra de surveillance Rollei IPC-88, la caméra pas chère vendue chez Aldi, à Gladys Assistant. Activer l'ONVIF, trouver son URL RTSP et afficher le flux en local."
sidebar_label: Rollei (caméra Aldi)
keywords:
  - rollei ipc-88
  - rollei ipc 88
  - caméra aldi
  - caméra rollei aldi
  - rollei ipc-88 installation
  - caméra de surveillance aldi
  - rollei rtsp
  - rollei onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

La **Rollei IPC-88** est la caméra de surveillance d'intérieur bon marché vendue régulièrement chez **Aldi**, autour de 20 euros. Comme la plupart des caméras de cette gamme de prix, elle repose sur la plateforme **Tuya** et s'appaire avec l'application **Smart Life**. La bonne nouvelle, c'est qu'elle expose bien un flux **ONVIF/RTSP** : elle peut donc être ajoutée à Gladys Assistant et consultée entièrement sur votre réseau local.

Gladys se connecte aux caméras via leur [flux RTSP](/fr/docs/integrations/camera/), directement sur votre réseau local. Une fois la caméra dans Gladys, le flux vidéo reste chez vous : il ne transite pas par le cloud Tuya ou Rollei, et il continue de fonctionner sans connexion internet.

## Avant de commencer

L'IPC-88 doit être appairée une première fois avec l'application **Smart Life** (ou Tuya Smart), sur votre réseau Wi-Fi. Ce premier appairage est obligatoire : c'est comme ça que la caméra reçoit vos identifiants Wi-Fi. Ensuite, tout ce que nous faisons ici se passe en local.

Deux points à connaître sur cette caméra avant de bâtir quoi que ce soit autour :

- Elle est **alimentée sur secteur et n'a pas de batterie de secours** : elle cesse donc de filmer en cas de coupure de courant. C'est une bonne caméra de surveillance d'appoint, pas un substitut à une véritable alarme.
- Ses LED infrarouges rougeoient de façon visible la nuit, et la qualité audio est modeste. À 20 euros, c'est le compromis.

## Étape 1 : activer l'ONVIF dans l'application Smart Life

Le flux RTSP n'est pas diffusé tant que l'ONVIF n'est pas activé :

1. Ouvrez l'application **Smart Life** et sélectionnez votre Rollei IPC-88.
2. Ouvrez les **paramètres** de la caméra (icône crayon ou engrenage, en haut à droite).
3. Cherchez l'entrée **ONVIF** et activez-la.
4. Si l'application vous demande de définir un identifiant et un mot de passe ONVIF, notez-les : ce sont ces identifiants que vous utiliserez dans l'URL RTSP, et non ceux de votre compte Tuya.

Si votre firmware n'affiche aucune entrée ONVIF, cherchez d'abord une mise à jour du firmware dans l'application : l'option a été ajoutée au fil du temps sur plusieurs firmwares de caméras Tuya.

## Étape 2 : trouver l'URL RTSP de votre caméra

Les caméras basées sur Tuya n'utilisent pas toutes le même chemin RTSP, et celui-ci peut changer d'une version de firmware à l'autre. L'approche fiable est donc de laisser un outil ONVIF vous donner l'URL exacte :

1. Installez un client ONVIF. **Onvier** (Android) est celui qu'utilisent la plupart des possesseurs de cette caméra, et **ONVIF Device Manager** fonctionne bien sous Windows.
2. Lancez une découverte sur votre réseau local : la caméra apparaît avec son adresse IP.
3. Connectez-vous à elle (avec les identifiants ONVIF si vous en avez défini), puis ouvrez les informations de flux : l'outil affiche l'URL RTSP complète des flux principal et secondaire.

L'URL ressemble généralement à ceci, sur le port `554` :

```text
rtsp://192.168.1.20:554/
rtsp://identifiant:motdepasse@192.168.1.20:554/
```

Quelques remarques :

- Sur beaucoup d'IPC-88, **aucun identifiant n'est nécessaire** dans l'URL : la forme simple `rtsp://IP_CAMERA:554/...` fonctionne telle quelle sur le réseau local.
- Les caractères réservés d'un identifiant ou d'un mot de passe doivent être encodés en pourcentage dans l'URL, sinon elle ne sera pas interprétée correctement. Le plus fréquent est `@`, qui devient `%40`, mais cela vaut aussi pour `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) et l'espace (`%20`).
- Donnez à la caméra une **adresse IP fixe** (une réservation DHCP sur votre box est le plus simple). Si son IP change, l'URL RTSP enregistrée dans Gladys cesse de fonctionner.
- Si la caméra expose deux flux, le flux **secondaire**, plus léger, suffit généralement pour une tuile de tableau de bord et sollicite moins votre serveur Gladys.

## Étape 3 : tester l'URL dans VLC

Avant d'ajouter la caméra à Gladys, vérifiez que l'URL fonctionne dans [VLC](https://www.videolan.org/vlc/) : ouvrez **Média → Ouvrir un flux réseau...**, collez l'URL et vérifiez que le flux se lance. Si VLC le lit, Gladys devrait le lire aussi, à condition que le codec de votre caméra soit pris en charge.

Si VLC n'affiche rien, passez en revue les causes habituelles :

- L'ONVIF est bien activé dans l'application Smart Life, et la caméra a été redémarrée depuis.
- L'adresse IP est bien l'adresse actuelle, et votre ordinateur est sur le même réseau que la caméra.
- Les identifiants, quand la caméra en demande, sont bien les identifiants ONVIF et sont correctement encodés en pourcentage.
- Le chemin RTSP est bien celui remonté par l'outil ONVIF, et non un chemin copié depuis une autre marque de caméra.

## Étape 4 : ajouter la caméra à Gladys

Une fois votre URL RTSP validée :

1. Dans Gladys, allez dans l'onglet **Intégrations** et ouvrez l'intégration **Caméra**.
2. Cliquez sur **Nouveau**, collez votre URL RTSP et donnez un nom à la caméra.
3. Cliquez sur **Tester la connexion**, puis sur **Sauvegarder**.
4. Ajoutez la caméra à un tableau de bord, et éventuellement demandez à Gladys de vous envoyer une photo dans une scène ou dans un message Telegram.

Le tutoriel complet avec captures d'écran est sur la [page de l'intégration caméra](/fr/docs/integrations/camera/).

## Les autres caméras Aldi

Aldi vend plusieurs familles de caméras sous la marque Rollei, et elles ne se comportent pas toutes de la même façon :

- Les **caméras de surveillance Wi-Fi d'intérieur et d'extérieur** (l'IPC-88 et ses cousines) sont basées sur Tuya et exposent généralement l'ONVIF/RTSP : la méthode ci-dessus s'applique.
- Les **caméras de chasse** enregistrent sur une carte SD et, sur les modèles 4G, envoient les photos par e-mail ou MMS. Elles n'ont aucun flux RTSP en direct ni vidéo sur le réseau local : elles ne peuvent donc pas être ajoutées à Gladys.

Si vous cherchez à acheter une caméra plutôt qu'à réutiliser celle que vous avez déjà, un modèle qui documente clairement son support RTSP vous fera gagner du temps. Voyez les pages [Reolink](/fr/docs/integrations/external/reolink/) et [Imou](/fr/docs/integrations/imou/) pour deux gammes qui exposent une URL RTSP prévisible.

## Questions fréquentes

### La Rollei IPC-88 vendue chez Aldi gère-t-elle le RTSP ?

Oui. La Rollei IPC-88 est une caméra basée sur Tuya qui expose un flux ONVIF/RTSP dès que l'ONVIF est activé dans l'application Smart Life. Vous lisez ensuite son URL RTSP exacte avec un client ONVIF comme Onvier ou ONVIF Device Manager, et vous utilisez cette URL dans Gladys.

### Quelle est l'URL RTSP d'une Rollei IPC-88 ?

Elle utilise le port 554 et prend généralement la forme `rtsp://IP_CAMERA:554/...`, souvent sans identifiants nécessaires sur le réseau local. Le chemin exact dépend du firmware : plutôt que de le deviner, lancez un outil de découverte ONVIF sur votre réseau, il vous donnera l'URL RTSP complète des flux principal et secondaire de votre exemplaire.

### Peut-on utiliser une caméra Aldi sans le cloud ?

Une fois appairée, oui pour le flux vidéo. L'appairage initial passe par l'application Smart Life et le cloud Tuya, mais ensuite Gladys lit le flux RTSP directement sur votre réseau local : la vidéo ne quitte jamais votre domicile et la caméra continue de s'afficher dans Gladys sans connexion internet.

### Pourquoi ma caméra Rollei n'apparaît-elle pas dans la découverte ONVIF ?

Les causes habituelles sont un ONVIF encore désactivé dans l'application Smart Life, une caméra sur un réseau ou un VLAN différent de celui de votre ordinateur (les réseaux invités en 2,4 GHz sont un piège classique), ou un firmware antérieur à l'option ONVIF. Activez l'ONVIF, redémarrez la caméra, cherchez une mise à jour de firmware, et relancez la découverte depuis un appareil du même réseau.

### La Rollei IPC-88 est-elle une bonne caméra de surveillance ?

C'est une bonne caméra de surveillance pour son prix, mais elle n'a pas de batterie de secours : elle s'éteint donc en cas de coupure de courant, et ses LED de vision nocturne sont visibles. Pour une vraie détection d'intrusion, associez-la à des capteurs d'ouverture et de mouvement et servez-vous-en comme d'une vérification visuelle plutôt que comme de l'alarme elle-même. Voyez notre [guide de l'alarme maison DIY](/fr/diy-home-alarm-system/).

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "La Rollei IPC-88 vendue chez Aldi gère-t-elle le RTSP ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. La Rollei IPC-88 est une caméra basée sur Tuya qui expose un flux ONVIF/RTSP dès que l'ONVIF est activé dans l'application Smart Life. Vous lisez ensuite son URL RTSP exacte avec un client ONVIF comme Onvier ou ONVIF Device Manager, et vous utilisez cette URL dans Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est l'URL RTSP d'une Rollei IPC-88 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Elle utilise le port 554 et prend généralement la forme rtsp://IP_CAMERA:554/..., souvent sans identifiants nécessaires sur le réseau local. Le chemin exact dépend du firmware : plutôt que de le deviner, lancez un outil de découverte ONVIF sur votre réseau, il vous donnera l'URL RTSP complète des flux principal et secondaire de votre exemplaire.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on utiliser une caméra Aldi sans le cloud ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une fois appairée, oui pour le flux vidéo. L'appairage initial passe par l'application Smart Life et le cloud Tuya, mais ensuite Gladys lit le flux RTSP directement sur votre réseau local : la vidéo ne quitte jamais votre domicile et la caméra continue de s'afficher dans Gladys sans connexion internet.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi ma caméra Rollei n'apparaît-elle pas dans la découverte ONVIF ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les causes habituelles sont un ONVIF encore désactivé dans l'application Smart Life, une caméra sur un réseau ou un VLAN différent de celui de votre ordinateur, ou un firmware antérieur à l'option ONVIF. Activez l'ONVIF, redémarrez la caméra, cherchez une mise à jour de firmware, et relancez la découverte depuis un appareil du même réseau.",
        },
      },
      {
        "@type": "Question",
        name: "La Rollei IPC-88 est-elle une bonne caméra de surveillance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est une bonne caméra de surveillance pour son prix, mais elle n'a pas de batterie de secours : elle s'éteint donc en cas de coupure de courant, et ses LED de vision nocturne sont visibles. Pour une vraie détection d'intrusion, associez-la à des capteurs d'ouverture et de mouvement et servez-vous-en comme d'une vérification visuelle plutôt que comme de l'alarme elle-même.",
        },
      },
    ],
  }}
/>
