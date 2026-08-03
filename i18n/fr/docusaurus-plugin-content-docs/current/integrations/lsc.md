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

Si le modèle n'expose ni RTSP/ONVIF ni flux HTTP accessible sur votre réseau local, il ne peut pas être ajouté à Gladys directement, car il ne communique qu'avec le cloud Tuya.

## URL RTSP LSC à essayer

Quand votre caméra LSC (basée sur Tuya) expose bien le RTSP, elle utilise généralement le port `554` avec l'un de ces chemins courants. Remplacez `username`, `password` et l'adresse IP par vos propres valeurs :

```text
rtsp://username:password@192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/live/ch00_0
rtsp://username:password@192.168.1.20:554/onvif1
```

Les caractères réservés présents dans le nom d'utilisateur ou le mot de passe doivent être encodés en pourcentage dans l'URL, sinon celle-ci ne sera pas interprétée correctement. Le cas le plus courant est `@`, qui devient `%40`, mais cela vaut aussi pour `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) et l'espace (`%20`). En cas de doute, utilisez un mot de passe de flux composé uniquement de lettres et de chiffres.

Le chemin exact dépend du chipset : si la première URL ne répond pas, essayez les autres. Un outil de découverte ONVIF (ou la section ONVIF de l'application de la caméra) vous donnera aussi le chemin RTSP précis de votre modèle.

## Tester l'URL dans VLC

Avant d'ajouter la caméra à Gladys, vérifiez que votre URL RTSP fonctionne dans [VLC](https://www.videolan.org/vlc/index.fr.html) : ouvrez **Fichier → Ouvrir un flux réseau**, collez l'URL et vérifiez que le flux se lit. VLC est un bon moyen de valider l'URL, les identifiants et l'accès réseau : si le flux se lit, il devrait aussi fonctionner dans Gladys, à condition que Gladys prenne en charge le codec et le type de flux de votre caméra.

Si aucune des URL ne se lit dans VLC, c'est un bon indice que votre modèle n'expose pas de RTSP, mais ce n'est pas une preuve. Écartez d'abord les causes habituelles :

- Les identifiants sont bien dans l'URL et correctement encodés en pourcentage (sinon VLC peut afficher sa propre fenêtre d'authentification au lieu de lire le flux).
- Le mot de passe est le mot de passe de flux/ONVIF dédié si l'application vous a demandé d'en définir un, et non celui de votre compte LSC.
- Le chemin du flux correspond à votre modèle : les chemins dépendent du chipset, essayez donc les trois ci-dessus ainsi que tout chemin remonté par un outil de découverte ONVIF.
- La caméra est joignable depuis votre ordinateur (même réseau, bonne adresse IP, port `554` non bloqué).
- Le RTSP/ONVIF est activé dans l'application ou dans l'interface web de la caméra, quand l'option existe.

## Ajouter votre caméra LSC à Gladys

Une fois que vous avez une URL RTSP qui fonctionne, l'ajout de la caméra à Gladys prend une minute :

1. Dans Gladys, allez dans l'onglet **Intégrations** et ouvrez l'intégration **Caméras**.
2. Cliquez sur **Nouveau**, puis collez votre URL RTSP LSC et donnez un nom à la caméra.
3. Cliquez sur **Tester la connexion**, puis **Sauvegarder**.
4. Ajoutez la caméra à votre tableau de bord, et éventuellement demandez à Gladys de l'afficher depuis le chat ou par Telegram.

Le tutoriel complet avec captures d'écran est sur la [page de l'intégration caméra](/docs/integrations/camera).

## Vous préférez une caméra qui fonctionne toujours en local ?

Si vous êtes encore en train de choisir et que vous voulez une caméra qui fonctionne en local avec Gladys sans avoir à chercher, la plupart des [caméras Reolink](/fr/docs/integrations/external/reolink/) exposent un flux RTSP documenté (Reolink publie le format des URL et la [liste des modèles compatibles](https://support.reolink.com/hc/en-us/articles/900000617826/), qui couvre l'essentiel de sa gamme filaire), et ce sont les caméras que nous [recommandons pour Gladys](/docs/installation/recommended-hardware).

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
