---
id: lsc
title: "Caméra LSC dans Gladys : RTSP et configuration locale"
description: "Comment connecter une caméra LSC Smart Connect à Gladys Assistant. Les caméras LSC sont basées sur Tuya : la disponibilité du RTSP dépend du modèle, voici comment vérifier et connecter."
sidebar_label: Caméra LSC
keywords:
  - caméra lsc
  - caméra lsc rtsp
  - lsc smart connect
  - caméra lsc gladys
  - caméra lsc domotique
  - caméra lsc onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

LSC Smart Connect est la marque domotique vendue par Action. Ses caméras sont peu chères et **basées sur Tuya**, ce qui est le point clé à connaître avant d'essayer d'en connecter une à Gladys Assistant.

Gladys se connecte aux caméras via leur [flux RTSP ou HTTP](/docs/integrations/camera), directement sur votre réseau local : le flux vidéo reste ainsi chez vous et ne transite jamais par le cloud. Le hic avec LSC, c'est que la plupart des caméras basées sur Tuya ne diffusent que vers le cloud Tuya/LSC et **n'exposent pas de flux RTSP standard** par défaut. Une partie des modèles sont compatibles ONVIF/RTSP : la première étape est donc de savoir lequel vous avez.

## Votre caméra LSC gère-t-elle le RTSP ?

Il n'y a pas de réponse unique pour toute la gamme LSC, vérifiez donc votre modèle précis :

- Cherchez une mention **ONVIF** ou **RTSP** sur la boîte ou dans l'application LSC Smart Connect. Les caméras compatibles ONVIF exposent presque toujours un flux RTSP.
- Recherchez le numéro de modèle exact avec « RTSP » ou « ONVIF » pour voir ce que rapportent les autres utilisateurs.
- Si votre caméra est compatible ONVIF/RTSP, il y a généralement un réglage pour l'activer (et parfois définir un mot de passe de flux dédié) dans l'application ou une petite interface web à l'adresse IP de la caméra.

Si le modèle n'a aucune option RTSP ou ONVIF, il ne peut pas être ajouté à Gladys directement, car il ne communique qu'avec le cloud Tuya.

## URL RTSP LSC à essayer

Quand votre caméra LSC (basée sur Tuya) expose bien le RTSP, elle utilise généralement le port `554` avec l'un de ces chemins courants. Remplacez `username`, `password` et l'adresse IP par vos propres valeurs :

```
rtsp://username:password@192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/live/ch00_0
rtsp://username:password@192.168.1.20:554/onvif1
```

Le chemin exact dépend du chipset : si la première URL ne répond pas, essayez les autres. Un outil de découverte ONVIF (ou la section ONVIF de l'application de la caméra) vous donnera aussi le chemin RTSP précis de votre modèle.

## Tester l'URL dans VLC

Avant d'ajouter la caméra à Gladys, vérifiez que votre URL RTSP fonctionne dans [VLC](https://www.videolan.org/vlc/index.fr.html) : ouvrez **Fichier → Ouvrir un flux réseau**, collez l'URL et vérifiez que le flux se lit. Si ça fonctionne dans VLC, ça fonctionnera dans Gladys. Si aucune des URL ne se lit dans VLC, votre modèle n'expose probablement pas de RTSP.

## Ajouter votre caméra LSC à Gladys

Une fois que vous avez une URL RTSP qui fonctionne, l'ajout de la caméra à Gladys prend une minute :

1. Dans Gladys, allez dans l'onglet **Intégrations** et ouvrez l'intégration **Caméras**.
2. Cliquez sur **Nouveau**, puis collez votre URL RTSP LSC et donnez un nom à la caméra.
3. Cliquez sur **Tester la connexion**, puis **Sauvegarder**.
4. Ajoutez la caméra à votre tableau de bord, et éventuellement demandez à Gladys de l'afficher depuis le chat ou par Telegram.

Le tutoriel complet avec captures d'écran est sur la [page de l'intégration caméra](/docs/integrations/camera).

## Vous préférez une caméra qui fonctionne toujours en local ?

Si vous êtes encore en train de choisir et que vous voulez une caméra garantie compatible en local avec Gladys, les [caméras Reolink](/docs/integrations/reolink) exposent un flux RTSP documenté sur tous les modèles filaires et sont les caméras que nous [recommandons pour Gladys](/docs/installation/recommended-hardware).

## Questions fréquentes

### Puis-je connecter une caméra LSC à Gladys ?

Cela dépend du modèle. Les caméras LSC Smart Connect sont basées sur Tuya, et beaucoup ne diffusent que vers le cloud Tuya/LSC sans flux RTSP. Si votre modèle précis est compatible ONVIF ou RTSP, vous pouvez l'ajouter à Gladys via l'intégration caméra à l'aide de son URL RTSP. Vérifiez la boîte, l'application ou le numéro de modèle pour une mention ONVIF/RTSP.

### Les caméras LSC exposent-elles un flux RTSP ?

Seulement certaines. LSC est une marque Tuya, et les caméras Tuya standard n'exposent pas le RTSP par défaut. Les modèles LSC estampillés ONVIF le font généralement, sur le port 554. Testez l'URL dans VLC pour confirmer avant d'ajouter la caméra à Gladys.

### L'intégration caméra LSC fonctionne-t-elle sans le cloud ?

Quand votre caméra LSC expose un flux RTSP, oui : Gladys s'y connecte directement sur votre réseau local et la vidéo ne passe jamais par le cloud LSC ou Tuya. Les caméras qui ne diffusent que vers le cloud Tuya ne peuvent pas être utilisées en local.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Puis-je connecter une caméra LSC à Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cela dépend du modèle. Les caméras LSC Smart Connect sont basées sur Tuya, et beaucoup ne diffusent que vers le cloud Tuya/LSC sans flux RTSP. Si votre modèle précis est compatible ONVIF ou RTSP, vous pouvez l'ajouter à Gladys via l'intégration caméra à l'aide de son URL RTSP. Vérifiez la boîte, l'application ou le numéro de modèle pour une mention ONVIF/RTSP.",
        },
      },
      {
        "@type": "Question",
        name: "Les caméras LSC exposent-elles un flux RTSP ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seulement certaines. LSC est une marque Tuya, et les caméras Tuya standard n'exposent pas le RTSP par défaut. Les modèles LSC estampillés ONVIF le font généralement, sur le port 554. Testez l'URL dans VLC pour confirmer avant d'ajouter la caméra à Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "L'intégration caméra LSC fonctionne-t-elle sans le cloud ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quand votre caméra LSC expose un flux RTSP, oui : Gladys s'y connecte directement sur votre réseau local et la vidéo ne passe jamais par le cloud LSC ou Tuya. Les caméras qui ne diffusent que vers le cloud Tuya ne peuvent pas être utilisées en local.",
        },
      },
    ],
  }}
/>
