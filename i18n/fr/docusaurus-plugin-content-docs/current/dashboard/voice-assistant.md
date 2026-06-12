---
id: voice-assistant
title: Parler à Gladys depuis le tableau de bord avec l'assistant vocal
sidebar_label: Assistant vocal
---

Introduit dans [Gladys Assistant 4.77](https://community.gladysassistant.com/t/gladys-assistant-4-77-un-assistant-vocal-dans-gladys/10249), le widget **Assistant vocal** vous permet de parler à Gladys directement depuis votre tableau de bord : posez une question à voix haute, lisez la transcription et la réponse de l'IA en direct, et écoutez la réponse lue à haute voix sur votre appareil.

C'est particulièrement pratique sur une tablette murale ou un smartphone posé sur un plan de travail. Votre maison connectée devient pilotable à la voix, sans assistant tiers.

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/X-UtYMJoKV4" title="Démonstration de l'assistant vocal Gladys Assistant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Que pouvez-vous faire ?

L'assistant vocal s'appuie sur le même agent IA (LLM) que le chat Gladys. Il n'y a pas de liste de commandes fixes : parlez naturellement, Gladys comprend.

Vous pouvez piloter des appareils, lire des capteurs, lancer ou créer des scènes, consulter des caméras, poser des questions générales, et bien plus. Consultez des [exemples d'utilisation](/fr/docs/integrations/openai#exemples) dans la documentation de l'intégration IA.

## Prérequis

- Un abonnement [Gladys Plus](/fr/plus/) avec votre instance connectée à la passerelle.
- Un navigateur compatible avec l'enregistrement du micro (Chrome, Firefox, Edge, Safari sur versions récentes).
- Une **connexion sécurisée (HTTPS)** pour utiliser le micro. Si vous accédez à Gladys à distance, ouvrez-le via [plus.gladysassistant.com](https://plus.gladysassistant.com).
- L'autorisation d'accès au micro accordée dans votre navigateur (sur Safari : **Réglages > Safari > Microphone**).

:::note
Sans Gladys Plus, le widget s'affiche mais le micro reste désactivé. Un message vous invite à connecter votre instance à Gladys Plus.
:::

## Ajouter le widget au tableau de bord

Rendez-vous sur le tableau de bord et cliquez sur **Éditer**.

Ajoutez un widget **Assistant vocal**, puis cliquez sur **Sauvegarder**.

Aucune configuration supplémentaire n'est nécessaire : le widget est prêt à l'emploi une fois Gladys Plus connecté.

## Utiliser l'assistant vocal

1. Cliquez sur le bouton micro dans le widget.
2. Posez votre question à voix haute. L'enregistrement s'arrête automatiquement lorsque vous vous taisez.
3. Gladys affiche ce que vous avez dit et la réponse de l'IA dans le widget.
4. La réponse est lue à haute voix sur votre appareil (synthèse vocale).

L'assistant tient compte de vos échanges récents avec Gladys pour fournir des réponses plus contextuelles.

### États du widget

| État | Signification |
| ---- | ------------- |
| **Parler** | Prêt. Cliquez sur le micro pour commencer. |
| **J'écoute...** | Enregistrement en cours. Parlez maintenant. |
| **Traitement...** | Gladys transcrit votre message et génère une réponse. |
| **Réponse...** | La réponse est en cours de lecture. |

### Astuce tablette murale

Si vous utilisez Gladys sur une tablette tactile, vous pouvez afficher le tableau de bord en plein écran en ajoutant `?fullscreen=force` à l'URL. Consultez l'[introduction au tableau de bord](/fr/docs/dashboard/intro#mode-tablette) pour plus de détails.

## Limitations

Il s'agit d'une première preuve de concept. La fonctionnalité évoluera en fonction des retours de la communauté. N'hésitez pas à partager votre expérience sur [l'annonce du forum](https://community.gladysassistant.com/t/gladys-assistant-4-77-un-assistant-vocal-dans-gladys/10249).

La synthèse vocale est optimisée pour une faible latence. Certaines valeurs (températures, unités comme les ppm ou les °C) peuvent parfois être mal prononcées. Nous suivons les évolutions côté text-to-speech.

## Dépannage

| Problème | Que faire |
| -------- | --------- |
| Micro désactivé | Vérifiez que Gladys Plus est connecté dans **Paramètres > Gladys Plus**. |
| « Le micro nécessite une connexion sécurisée » | Ouvrez Gladys en HTTPS, idéalement sur [plus.gladysassistant.com](https://plus.gladysassistant.com). |
| Micro bloqué sur Safari | Autorisez l'accès au micro dans **Réglages > Safari > Microphone**. |
| « L'enregistrement vocal n'est pas disponible dans ce navigateur » | Essayez une version récente de Chrome, Firefox, Edge ou Safari. |
| Erreur générique | Vérifiez la connexion Gladys Plus et que votre instance peut joindre la passerelle. |

## Documentation associée

- [Gladys Plus](/fr/docs/plus/intro)
- [Utiliser l'IA pour contrôler sa maison connectée](/fr/docs/integrations/openai)
- [Introduction au tableau de bord](/fr/docs/dashboard/intro)
