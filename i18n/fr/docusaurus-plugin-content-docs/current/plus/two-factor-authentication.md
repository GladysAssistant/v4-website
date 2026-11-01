---
id: two-factor-authentication
title: "Double authentification (2FA) : résoudre les problèmes"
description: "Votre code 2FA Gladys Plus est refusé, vous avez changé de téléphone ou perdu votre application d'authentification ? Voici comment résoudre les problèmes de double authentification les plus courants."
sidebar_label: Problèmes de 2FA
---

Pour protéger votre maison, chaque compte Gladys Plus est sécurisé par une **double authentification (2FA)** : en plus de votre mot de passe, Gladys Plus vous demande un **code à 6 chiffres** généré par une application d'authentification sur votre téléphone (Google Authenticator, Microsoft Authenticator, 2FAS, Ente Auth...). Ce code change toutes les 30 secondes.

Ce code vous est demandé quand vous vous connectez sur [plus.gladysassistant.com](https://plus.gladysassistant.com), quand vous connectez votre instance Gladys locale à Gladys Plus (dans **Paramètres > Gladys Plus** de votre instance), et pour quelques actions sensibles (générer des codes de récupération, changer d'application 2FA, réinitialiser votre mot de passe).

Cette page liste les problèmes les plus fréquents, et comment les résoudre.

## Mon code 2FA est refusé

Si Gladys affiche « **Le code 2FA n'est pas valide** », vérifiez les points suivants un par un : dans la grande majorité des cas, le problème vient de l'un d'eux.

### 1. L'heure de votre téléphone n'est pas bonne

Les codes 2FA sont calculés à partir de l'heure actuelle. **Si l'horloge de votre téléphone est décalée de plus de 30 secondes environ, tous les codes qu'il génère sont refusés**, même s'ils ont l'air parfaitement normaux.

Vérifiez que votre téléphone règle sa date et son heure automatiquement :

- **iPhone** : Réglages > Général > Date et heure > activez **« Réglage automatique »**.
- **Android** : Paramètres > Système > Date et heure > activez **« Régler l'heure automatiquement »** (le menu exact peut varier selon la marque de votre téléphone).

Réessayez ensuite avec un nouveau code. Seule l'horloge de votre téléphone compte : l'horloge de votre instance Gladys n'a aucun impact sur les codes 2FA.

### 2. Vous utilisez la mauvaise entrée dans votre application

Si vous avez configuré la 2FA plusieurs fois (par exemple après une réinitialisation, ou pour faire un essai), votre application d'authentification contient peut-être **plusieurs entrées liées à Gladys**. Seule la plus récente fonctionne : les anciennes génèrent des codes qui sont refusés.

Essayez les codes de chaque entrée Gladys, l'une après l'autre. Une fois la bonne trouvée, vous pouvez supprimer les autres de votre application pour éviter toute confusion.

Vérifiez aussi que vous vous connectez avec la bonne adresse e-mail : chaque compte Gladys Plus a sa propre 2FA.

### 3. Le code a expiré pendant que vous le tapiez

Un code n'est valable que peu de temps. Si le code est sur le point de changer (la plupart des applications affichent un petit compte à rebours), **attendez le code suivant** et saisissez-le tout de suite.

### 4. Le code n'a pas été saisi correctement

Le code est composé de **6 chiffres, sans espace**. Certaines applications affichent le code sous la forme `123 456` : tapez les 6 chiffres sans l'espace. Si vous copiez-collez le code, vérifiez qu'aucun espace ou caractère en trop n'a été copié.

### 5. Trop de tentatives

Après plusieurs codes erronés d'affilée, Gladys Plus peut refuser temporairement les nouvelles tentatives (« Trop de tentatives échouées »). Attendez quelques minutes, puis réessayez avec un nouveau code.

## J'ai changé de téléphone ou réinstallé mon application

Les codes 2FA sont générés à partir d'un secret stocké **uniquement dans votre application d'authentification**. Si vous changez de téléphone, ou si vous désinstallez l'application, ce secret n'est pas transféré automatiquement : la nouvelle application ne génèrera pas de codes valides.

### Vous avez encore votre ancien téléphone

C'est le cas le plus simple. Vous avez deux possibilités :

- **Transférer vos comptes** de l'ancienne application vers la nouvelle, grâce à la fonction d'export de votre application d'authentification (la plupart en proposent une, par exemple « Transférer des comptes » dans Google Authenticator).
- **Enregistrer votre nouvelle application sur Gladys Plus** : connectez-vous sur [plus.gladysassistant.com](https://plus.gladysassistant.com), allez dans **Paramètres > Sécurité**, et cliquez sur **« Changer mon application 2FA »**. Scannez le QR code avec votre nouvelle application, puis entrez un code de votre nouvelle application **et** un code de votre ancienne application pour confirmer. Une fois confirmé, seule votre nouvelle application sera acceptée.

Gardez votre ancien téléphone tant que le changement n'est pas confirmé !

### Vous n'avez plus votre ancien téléphone

Vous ne pouvez plus générer de codes 2FA, mais vous pouvez toujours vous connecter avec un **code de récupération** (voir ci-dessous). [Contactez-nous](#nous-contacter) ensuite pour que nous réinitialisions la 2FA de votre compte : vous pourrez configurer votre nouvelle application lors de votre prochaine connexion.

## Utiliser un code de récupération

Les codes de récupération sont des **codes à usage unique** qui vous permettent de vous connecter quand vous n'avez plus accès à votre application d'authentification. Ils ne sont affichés **qu'une seule fois** : quand vous activez la 2FA, et à chaque fois que vous générez un nouveau jeu de codes.

Pour en utiliser un, sur l'écran du code 2FA, repérez **« Vous avez perdu l'accès à votre application 2FA ? »** et cliquez sur **« Utiliser un code de récupération »**, puis entrez l'un de vos codes. Chaque code ne peut être utilisé qu'une fois : rayez-le une fois utilisé.

### Générer des codes de récupération (avant d'en avoir besoin !)

Si vous n'avez jamais enregistré vos codes de récupération, ou si vous en avez utilisé la plupart, générez-en un nouveau jeu **dès maintenant**, tant que vous avez encore accès à votre application d'authentification :

1. Connectez-vous sur [plus.gladysassistant.com](https://plus.gladysassistant.com).
2. Allez dans **Paramètres > Sécurité**.
3. Cliquez sur **« Générer des codes de récupération »**, et entrez un code de votre application 2FA pour confirmer.
4. **Enregistrez ces codes en lieu sûr**, en dehors de votre téléphone : dans un gestionnaire de mots de passe, ou imprimés sur papier. Ils ne seront plus jamais affichés.

Générer un nouveau jeu de codes invalide immédiatement vos anciens codes de récupération.

## Après une réinitialisation de la 2FA

Gladys Plus est chiffré de bout en bout. Quand votre 2FA est réinitialisée, vos clés de chiffrement changent, donc **votre accès à votre instance Gladys est automatiquement révoqué**, pour des raisons de sécurité : votre instance n'accepte que les clés que vous avez autorisées chez vous.

C'est normal : sur plus.gladysassistant.com, la page « Plus qu'une étape ! » s'affiche à nouveau. Pour retrouver votre accès, ouvrez votre instance Gladys **en local**, reconnectez-vous dans **Paramètres > Gladys Plus**, puis autorisez à nouveau votre utilisateur dans la section « Utilisateurs distants ». Le [tutoriel de connexion](/fr/docs/plus/connect-gladys-plus/) détaille chaque étape avec des captures d'écran.

## Nous contacter

Aucune des solutions ci-dessus n'a fonctionné ? Écrivez-nous à [hello@gladysassistant.com](mailto:hello@gladysassistant.com) **depuis l'adresse e-mail de votre compte Gladys Plus**, pour que nous puissions identifier votre compte, et dites-nous ce que vous avez déjà essayé.

Vous pouvez aussi poser votre question sur le [forum de la communauté](https://community.gladysassistant.com/).
