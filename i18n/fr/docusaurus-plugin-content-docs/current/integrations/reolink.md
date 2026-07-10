---
id: reolink
title: "Reolink dans Gladys : URL RTSP et configuration de la caméra"
description: "Connectez une caméra Reolink à Gladys Assistant en RTSP, en local et sans le cloud. Avec le format exact des URL RTSP Reolink pour les flux principal et secondaire."
sidebar_label: Reolink
keywords:
  - url rtsp reolink
  - reolink gladys
  - reolink domotique
  - reolink rtsp
  - connecter caméra reolink
  - reolink local
---

import JsonLd from '@site/src/components/seo/JsonLd';

Les caméras Reolink sont un choix abordable et très répandu, et elles fonctionnent parfaitement avec Gladys Assistant. Ce sont d'ailleurs les caméras que nous [recommandons pour Gladys](/docs/installation/recommended-hardware).

Les caméras Reolink exposent un flux **RTSP** standard : elles se connectent donc via l'[intégration caméra](/docs/integrations/camera) générique. Gladys communique avec la caméra directement sur votre réseau local, ce qui signifie que votre flux vidéo reste chez vous et ne transite jamais par le cloud Reolink.

## URL RTSP d'une caméra Reolink

Reolink expose deux flux RTSP sur le port `554` : un flux **principal** en haute résolution et un flux **secondaire** plus léger. Remplacez `username`, `password` et l'adresse IP par vos propres valeurs :

```
# Flux principal (haute résolution), H.264 :
rtsp://username:password@192.168.1.20:554/h264Preview_01_main

# Flux secondaire (basse résolution), H.264 :
rtsp://username:password@192.168.1.20:554/h264Preview_01_sub
```

Si votre caméra Reolink diffuse en H.265 (HEVC), remplacez le codec dans le chemin :

```
rtsp://username:password@192.168.1.20:554/h265Preview_01_main
```

Quelques points utiles :

- Le `01` dans le chemin est le numéro de canal. Sur une caméra seule il vaut toujours `01`. Si la caméra passe par un NVR Reolink, incrémentez-le pour chaque canal (`02`, `03`, etc.).
- Pour un affichage fluide sur votre tableau de bord, le flux **secondaire** suffit souvent et sollicite moins votre serveur Gladys. Utilisez le flux **principal** pour la pleine résolution.
- Certains modèles Reolink sur batterie (par exemple la gamme Argus) n'exposent pas de flux RTSP. Sur ceux-là, le RTSP n'est pas disponible et la caméra ne peut pas être ajoutée à Gladys.

## Activer le RTSP sur votre caméra Reolink

Le RTSP est activé par défaut sur la plupart des caméras Reolink, mais si le flux ne répond pas vous pouvez le vérifier :

1. Ouvrez l'application Reolink (ou l'interface web à l'adresse IP de la caméra) et connectez-vous.
2. Allez dans **Paramètres → Réseau → Avancé → Réglages des ports** (ou **Réglages serveur** selon le modèle).
3. Vérifiez que le **RTSP** est activé et notez le port (`554` par défaut).

C'est aussi une bonne pratique de créer un utilisateur dédié pour Gladys plutôt que d'utiliser le compte `admin`, afin de pouvoir le révoquer à tout moment.

## Tester l'URL dans VLC

Avant d'ajouter la caméra à Gladys, vérifiez que votre URL RTSP fonctionne dans [VLC](https://www.videolan.org/vlc/index.fr.html) : ouvrez **Fichier → Ouvrir un flux réseau**, collez l'URL et vérifiez que le flux se lit. Si ça fonctionne dans VLC, ça fonctionnera dans Gladys.

## Ajouter votre caméra Reolink à Gladys

Une fois votre URL RTSP validée, l'ajout de la caméra à Gladys prend une minute :

1. Dans Gladys, allez dans l'onglet **Intégrations** et ouvrez l'intégration **Caméras**.
2. Cliquez sur **Nouveau**, puis collez votre URL RTSP Reolink et donnez un nom à la caméra.
3. Cliquez sur **Tester la connexion**, puis **Sauvegarder**.
4. Ajoutez la caméra à votre tableau de bord, et éventuellement demandez à Gladys de l'afficher depuis le chat ou par Telegram.

Le tutoriel complet avec captures d'écran est sur la [page de l'intégration caméra](/docs/integrations/camera).

## Questions fréquentes

### Quelle est l'URL RTSP d'une caméra Reolink ?

Les caméras Reolink exposent deux flux RTSP sur le port 554 : le flux principal (haute résolution) à l'adresse `rtsp://username:password@IP_CAMERA:554/h264Preview_01_main` et un flux secondaire plus léger à l'adresse `rtsp://username:password@IP_CAMERA:554/h264Preview_01_sub`. Remplacez le nom d'utilisateur, le mot de passe et l'IP par les vôtres. Si votre caméra diffuse en H.265, remplacez `h264` par `h265` dans le chemin.

### L'intégration Reolink fonctionne-t-elle sans le cloud ?

Oui. Gladys se connecte à votre caméra Reolink directement sur votre réseau local via son flux RTSP : la vidéo ne passe jamais par le cloud Reolink et continue de fonctionner sans connexion internet.

### Pourquoi mon URL RTSP Reolink ne se connecte-t-elle pas ?

Les causes les plus fréquentes sont un mauvais numéro de canal (`01` pour une seule caméra), un mauvais codec (`h264` vs `h265`, principal vs secondaire), des identifiants incorrects, ou le RTSP désactivé dans les réglages de la caméra. Testez d'abord l'URL dans VLC : si VLC ne l'ouvre pas non plus, le problème vient de l'URL ou de la caméra, pas de Gladys.

### Puis-je ajouter une caméra Reolink connectée à un NVR Reolink ?

Oui. Utilisez l'adresse IP du NVR et incrémentez le numéro de canal dans le chemin pour chaque caméra, par exemple `h264Preview_02_main` pour le deuxième canal.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelle est l'URL RTSP d'une caméra Reolink ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les caméras Reolink exposent deux flux RTSP sur le port 554 : le flux principal (haute résolution) à l'adresse rtsp://username:password@IP_CAMERA:554/h264Preview_01_main et un flux secondaire plus léger à l'adresse rtsp://username:password@IP_CAMERA:554/h264Preview_01_sub. Remplacez le nom d'utilisateur, le mot de passe et l'IP par les vôtres. Si votre caméra diffuse en H.265, remplacez h264 par h265 dans le chemin.",
        },
      },
      {
        "@type": "Question",
        name: "L'intégration Reolink fonctionne-t-elle sans le cloud ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Gladys se connecte à votre caméra Reolink directement sur votre réseau local via son flux RTSP : la vidéo ne passe jamais par le cloud Reolink et continue de fonctionner sans connexion internet.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi mon URL RTSP Reolink ne se connecte-t-elle pas ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les causes les plus fréquentes sont un mauvais numéro de canal, un mauvais codec (h264 vs h265, principal vs secondaire), des identifiants incorrects, ou le RTSP désactivé dans les réglages de la caméra. Testez d'abord l'URL dans VLC : si VLC ne l'ouvre pas non plus, le problème vient de l'URL ou de la caméra, pas de Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je ajouter une caméra Reolink connectée à un NVR Reolink ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Utilisez l'adresse IP du NVR et incrémentez le numéro de canal dans le chemin pour chaque caméra, par exemple h264Preview_02_main pour le deuxième canal.",
        },
      },
    ],
  }}
/>

