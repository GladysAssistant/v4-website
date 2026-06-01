---
id: voice-assistant
title: Parler à Gladys depuis le tableau de bord avec l'assistant vocal
sidebar_label: Assistant vocal
---

Le widget **Assistant vocal** vous permet de parler à Gladys directement depuis votre tableau de bord : posez une question à voix haute, lisez la transcription et la réponse de l'IA en direct, et écoutez la réponse lue à haute voix sur votre appareil.

Il s'appuie sur Gladys Plus pour la reconnaissance vocale, les réponses de l'IA en mode agent (modèles open-weight) et la synthèse vocale.

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
