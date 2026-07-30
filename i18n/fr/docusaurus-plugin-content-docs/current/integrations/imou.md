---
id: imou
title: "Imou dans Gladys : URL RTSP et configuration de la caméra"
description: "Connectez une caméra Imou à Gladys Assistant en RTSP, en local et sans le cloud. Avec le format exact des URL RTSP Imou pour les flux principal et secondaire."
sidebar_label: Imou
keywords:
  - url rtsp imou
  - imou gladys
  - imou domotique
  - imou rtsp
  - connecter caméra imou
  - imou ranger 2 rtsp
  - imou local
---

import JsonLd from '@site/src/components/seo/JsonLd';

Les caméras Imou (une marque de Dahua) sont un choix abordable et très répandu, et la plupart fonctionnent avec Gladys Assistant.

Les caméras Imou exposent un flux **RTSP** standard : elles se connectent donc via l'[intégration caméra](/docs/integrations/camera) générique. Gladys communique avec la caméra directement sur votre réseau local, ce qui signifie que votre flux vidéo reste chez vous et ne transite jamais par le cloud Imou.

## URL RTSP d'une caméra Imou

Les caméras Imou exposent deux flux RTSP sur le port `554` : un flux **principal** en haute résolution et un flux **secondaire** plus léger. Remplacez `username`, `password` et l'adresse IP par vos propres valeurs :

```text
# Flux principal (haute résolution) :
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=0

# Flux secondaire (basse résolution) :
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=1
```

Quelques points utiles :

- La valeur `channel=1` est le numéro de canal. Sur une caméra seule il vaut toujours `1`. Si la caméra passe par un NVR Imou/Dahua, incrémentez-le pour chaque canal (`channel=2`, `channel=3`, etc.).
- `subtype=0` correspond au flux principal, `subtype=1` au flux secondaire. Pour un affichage fluide sur votre tableau de bord, le flux **secondaire** suffit souvent et sollicite moins votre serveur Gladys. Utilisez le flux **principal** pour la pleine résolution.
- Le nom d'utilisateur est généralement `admin`, et le mot de passe est le mot de passe de l'appareil que vous avez défini lors de l'association de la caméra dans l'application Imou Life (et non le mot de passe de votre compte Imou).
- Les caractères réservés présents dans le nom d'utilisateur ou le mot de passe doivent être encodés en pourcentage dans l'URL, sinon celle-ci ne sera pas interprétée correctement. Le cas le plus courant est `@`, qui devient `%40`, mais cela vaut aussi pour `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) et l'espace (`%20`). En cas de doute, utilisez un mot de passe composé uniquement de lettres et de chiffres.
- Certains modèles Imou sur batterie ne maintiennent pas de flux RTSP actif pour économiser l'énergie. Sur ceux-là, le RTSP peut ne pas être disponible et la caméra ne peut pas être ajoutée à Gladys.

## Activer le RTSP sur votre caméra Imou

Sur de nombreuses caméras Imou, le RTSP (et l'ONVIF) doit être activé avant que le flux ne réponde :

1. Ouvrez l'application **Imou Life** et sélectionnez votre caméra.
2. Allez dans **Paramètres → Réglages de la caméra** et cherchez **ONVIF** ou **RTSP** (le libellé exact dépend du modèle et du firmware).
3. Activez-le, et si l'application vous demande de définir un mot de passe ONVIF/RTSP, notez-le : c'est le mot de passe que vous utiliserez dans l'URL RTSP.

C'est une bonne pratique de garder un mot de passe dédié pour le flux RTSP, afin de pouvoir le changer à tout moment.

## Tester l'URL dans VLC

Avant d'ajouter la caméra à Gladys, vérifiez que votre URL RTSP fonctionne dans [VLC](https://www.videolan.org/vlc/index.fr.html) : ouvrez **Fichier → Ouvrir un flux réseau**, collez l'URL et vérifiez que le flux se lit. VLC est un bon moyen de valider l'URL, les identifiants et l'accès réseau : si le flux se lit, il devrait aussi fonctionner dans Gladys, à condition que Gladys prenne en charge le codec et le type de flux de votre caméra.

Si VLC ne lit pas le flux, cela ne veut pas forcément dire que la caméra n'expose pas de RTSP. Vérifiez les points suivants avant d'abandonner :

- Les identifiants sont bien dans l'URL et correctement encodés en pourcentage (sinon VLC peut afficher sa propre fenêtre d'authentification).
- Le mot de passe est celui de l'appareil/ONVIF, pas celui de votre compte Imou.
- Le chemin du flux correspond à votre modèle (valeurs `channel` et `subtype`, et le numéro de canal si vous passez par un NVR).
- La caméra est joignable depuis votre ordinateur (même réseau, bonne adresse IP, port `554` non bloqué).
- Le RTSP/ONVIF est bien activé dans l'application Imou Life.

## Ajouter votre caméra Imou à Gladys

Une fois votre URL RTSP validée, l'ajout de la caméra à Gladys prend une minute :

1. Dans Gladys, allez dans l'onglet **Intégrations** et ouvrez l'intégration **Caméras**.
2. Cliquez sur **Nouveau**, puis collez votre URL RTSP Imou et donnez un nom à la caméra.
3. Cliquez sur **Tester la connexion**, puis **Sauvegarder**.
4. Ajoutez la caméra à votre tableau de bord, et éventuellement demandez à Gladys de l'afficher depuis le chat ou par Telegram.

Le tutoriel complet avec captures d'écran est sur la [page de l'intégration caméra](/docs/integrations/camera).

## Questions fréquentes

### Quelle est l'URL RTSP d'une caméra Imou ?

Les caméras Imou exposent deux flux RTSP sur le port 554 : le flux principal (haute résolution) à l'adresse `rtsp://username:password@IP_CAMERA:554/cam/realmonitor?channel=1&subtype=0` et un flux secondaire plus léger à l'adresse `rtsp://username:password@IP_CAMERA:554/cam/realmonitor?channel=1&subtype=1`. Remplacez le nom d'utilisateur, le mot de passe et l'IP par les vôtres. Le nom d'utilisateur est généralement `admin` et le mot de passe est celui de l'appareil, défini dans l'application Imou Life.

### La caméra Imou Ranger 2 gère-t-elle le RTSP ?

Oui. L'Imou Ranger 2 (et la Ranger 2C) expose un flux RTSP standard une fois le RTSP/ONVIF activé dans l'application Imou Life : elle peut donc être ajoutée à Gladys via l'intégration caméra comme n'importe quelle caméra RTSP.

### L'intégration Imou fonctionne-t-elle sans le cloud ?

Oui. Gladys se connecte à votre caméra Imou directement sur votre réseau local via son flux RTSP : la vidéo ne passe jamais par le cloud Imou et continue de fonctionner sans connexion internet.

### Pourquoi mon URL RTSP Imou ne se connecte-t-elle pas ?

Les causes les plus fréquentes sont le RTSP/ONVIF désactivé dans l'application Imou Life, un mauvais mot de passe (utilisez le mot de passe de l'appareil/ONVIF, pas celui de votre compte Imou), un mauvais numéro de canal (`channel=1` pour une seule caméra), ou un modèle sur batterie qui ne maintient pas le flux actif. Testez d'abord l'URL dans VLC : si VLC ne l'ouvre pas non plus, le problème vient de l'URL ou de la caméra, pas de Gladys.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelle est l'URL RTSP d'une caméra Imou ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les caméras Imou exposent deux flux RTSP sur le port 554 : le flux principal (haute résolution) à l'adresse rtsp://username:password@IP_CAMERA:554/cam/realmonitor?channel=1&subtype=0 et un flux secondaire plus léger à l'adresse rtsp://username:password@IP_CAMERA:554/cam/realmonitor?channel=1&subtype=1. Remplacez le nom d'utilisateur, le mot de passe et l'IP par les vôtres. Le nom d'utilisateur est généralement admin et le mot de passe est celui de l'appareil, défini dans l'application Imou Life.",
        },
      },
      {
        "@type": "Question",
        name: "La caméra Imou Ranger 2 gère-t-elle le RTSP ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L'Imou Ranger 2 (et la Ranger 2C) expose un flux RTSP standard une fois le RTSP/ONVIF activé dans l'application Imou Life : elle peut donc être ajoutée à Gladys via l'intégration caméra comme n'importe quelle caméra RTSP.",
        },
      },
      {
        "@type": "Question",
        name: "L'intégration Imou fonctionne-t-elle sans le cloud ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Gladys se connecte à votre caméra Imou directement sur votre réseau local via son flux RTSP : la vidéo ne passe jamais par le cloud Imou et continue de fonctionner sans connexion internet.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi mon URL RTSP Imou ne se connecte-t-elle pas ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les causes les plus fréquentes sont le RTSP/ONVIF désactivé dans l'application Imou Life, un mauvais mot de passe (utilisez le mot de passe de l'appareil/ONVIF, pas celui de votre compte Imou), un mauvais numéro de canal (channel=1 pour une seule caméra), ou un modèle sur batterie qui ne maintient pas le flux actif. Testez d'abord l'URL dans VLC : si VLC ne l'ouvre pas non plus, le problème vient de l'URL ou de la caméra, pas de Gladys.",
        },
      },
    ],
  }}
/>
