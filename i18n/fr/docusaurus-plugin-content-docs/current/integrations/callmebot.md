---
id: callmebot
title: Envoyez des messages Gladys vers WhatsApp et Signal avec CallMeBot
sidebar_label: CallMeBot
---

CallMeBot est un service qui permet à Gladys d'envoyer des messages vers différentes plateformes de messagerie comme WhatsApp et Signal.

Cette intégration fonctionne uniquement dans un sens - Gladys peut envoyer des messages mais ne peut pas recevoir de réponses.

## Limitations

- Communication unidirectionnelle uniquement (Gladys peut envoyer mais pas recevoir de messages)
- Ne prend pas en charge l'envoi d'images
- Des limites s'appliquent (consultez le site web de CallMeBot pour les limites actuelles)

## Instructions d'installation

### 1. Obtenir votre clé API

Tout d'abord, vous devez obtenir une clé API de CallMeBot :

#### Pour WhatsApp :

1. Visitez [la page WhatsApp de CallMeBot](https://www.callmebot.com/blog/free-api-whatsapp-messages/)
2. Suivez les étapes d'activation :
   - Envoyez un message à leur numéro WhatsApp
   - Attendez le message de confirmation avec votre clé API
   - Conservez votre clé API pour l'étape suivante

#### Pour Signal :

1. Visitez [la page Signal de CallMeBot](https://www.callmebot.com/blog/free-api-signal-send-messages/)
2. Suivez les étapes d'activation :
   - Commencez une discussion avec leur bot Signal
   - Suivez les instructions pour obtenir votre clé API
   - Conservez votre clé API pour l'étape suivante

### 2. Configurer Gladys

1. Dans Gladys, accédez à la liste des "Intégrations"
2. Trouvez "CallMeBot"
3. Choisissez votre plateforme de messagerie :
   - Pour WhatsApp : Sélectionnez "WhatsApp" et entrez votre numéro de téléphone au format international (par exemple, +33612345678)
   - Pour Signal : Sélectionnez "Signal" et entrez l'UUID fourni par CallMeBot (trouvé dans l'URL qu'ils vous ont donnée)
4. Entrez votre clé API
5. Cliquez sur "Enregistrer"

## Utilisation

Une fois configuré, vous pouvez utiliser CallMeBot dans les scènes en utilisant l'action "Envoyer un message".

## Dépannage

Si vous rencontrez des problèmes :

1. Vérifiez que votre clé API est correcte
2. Vérifiez que vous avez terminé le processus d'activation
3. Assurez-vous que vous respectez les limites du service CallMeBot
4. Vérifiez votre connexion Internet

Pour plus d'aide, visitez le [site web de CallMeBot](https://www.callmebot.com/) ou le [forum de la communauté Gladys](https://community.gladysassistant.com/).
