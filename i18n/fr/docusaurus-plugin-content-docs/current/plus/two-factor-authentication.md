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

Essayez les codes de chaque entrée Gladys, l'une après l'autre. Une fois la bonne trouvée, vous pouvez supprimer de votre application les entrées Gladys obsolètes de ce même compte, pour éviter toute confusion. Gardez les entrées de vos autres comptes Gladys Plus, si vous en avez plusieurs.

Vérifiez aussi que vous vous connectez avec la bonne adresse e-mail : chaque compte Gladys Plus a sa propre 2FA.

### 3. Le code a expiré pendant que vous le tapiez

Un code n'est valable que peu de temps. Si le code est sur le point de changer (la plupart des applications affichent un petit compte à rebours), **attendez le code suivant** et saisissez-le tout de suite.

### 4. Le code n'a pas été saisi correctement

Le code est composé de **6 chiffres, sans espace**. Certaines applications affichent le code sous la forme `123 456` : tapez les 6 chiffres sans l'espace. Si vous copiez-collez le code, vérifiez qu'aucun espace ou caractère en trop n'a été copié.

### 5. Trop de tentatives

Après plusieurs codes erronés d'affilée, Gladys Plus peut refuser temporairement les nouvelles tentatives (« Trop de tentatives échouées »). Attendez quelques minutes, puis réessayez avec un nouveau code.

## J'ai changé de téléphone ou réinstallé mon application

Les codes 2FA sont générés à partir d'un secret stocké **dans votre application d'authentification**. Si vous changez de téléphone, ou si vous désinstallez l'application, ce secret ne vous suit que si votre application synchronise ou sauvegarde vos comptes : sinon, la nouvelle application ne génèrera pas de codes valides.

### Vérifiez d'abord si votre application peut restaurer vos comptes

Certaines applications d'authentification sauvegardent vos comptes en ligne : par exemple Google Authenticator lorsqu'il est lié à votre compte Google, Microsoft Authenticator avec sa sauvegarde dans le cloud, Ente Auth, ou 2FAS avec sa sauvegarde. Installez la même application sur votre nouveau téléphone, puis connectez-vous ou restaurez la sauvegarde. Si votre entrée Gladys réapparaît, ses codes fonctionnent comme avant : vous n'avez rien d'autre à faire.

Sinon, tout dépend si vous avez encore votre ancien téléphone.

### Vous avez encore votre ancien téléphone

C'est le cas le plus simple. Vous avez deux possibilités :

- **Transférer vos comptes** de l'ancienne application vers la nouvelle, grâce à la fonction d'export de votre application d'authentification (la plupart en proposent une, par exemple « Transférer des comptes » dans Google Authenticator).
- **Enregistrer votre nouvelle application sur Gladys Plus** : connectez-vous sur [plus.gladysassistant.com](https://plus.gladysassistant.com), allez dans **Paramètres > Sécurité**, et cliquez sur **« Changer mon application 2FA »**. Scannez le QR code avec votre nouvelle application, puis entrez un code de votre nouvelle application **et** un code de votre ancienne application pour confirmer. Une fois confirmé, seule votre nouvelle application sera acceptée.

Gardez votre ancien téléphone tant que le changement n'est pas confirmé !

### Vous n'avez plus votre ancien téléphone

Si votre application n'a pas pu restaurer votre entrée Gladys, vous ne pouvez plus générer de codes 2FA. Vous pouvez tout de même remplacer votre application vous-même, avec vos **codes de récupération** :

1. Connectez-vous sur [plus.gladysassistant.com](https://plus.gladysassistant.com) avec un code de récupération (voir [Utiliser un code de récupération](#utiliser-un-code-de-récupération) ci-dessous).
2. Allez dans **Paramètres > Sécurité**, carte **« Votre application 2FA »**, et cliquez sur **« Changer mon application 2FA »**.
3. Scannez le QR code avec votre nouvelle application, et entrez le code qu'elle affiche.
4. Pour le code de l'application actuelle, cliquez sur **« Vous avez perdu votre application actuelle ? Utilisez plutôt un code de récupération. »**, puis entrez **un autre** de vos codes de récupération.
5. Cliquez sur **« Remplacer mon application 2FA »**.

Il vous faut donc deux codes de récupération : un pour vous connecter, un pour remplacer l'application. Le second n'est consommé que si le remplacement réussit : si le code de votre nouvelle application est refusé, vous pouvez réessayer sans perdre de code. Vos autres codes de récupération restent valables, mais pensez à [en générer un nouveau jeu](#générer-des-codes-de-récupération-avant-den-avoir-besoin-) une fois votre nouvelle application en place.

Vous n'avez plus de codes de récupération, ou plus qu'un seul ? Voir [Je n'ai plus de codes de récupération](#no-recovery-codes-left).

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

## Je n'ai plus de codes de récupération {/* #no-recovery-codes-left */}

Vous avez perdu à la fois votre application d'authentification et vos codes de récupération ? Depuis Gladys 5.3.1, vous pouvez retrouver l'accès à votre compte sans écrire au support. Choisissez la solution qui correspond à votre situation :

- **Votre Gladys est chez vous et connectée à Gladys Plus** : [générez de nouveaux codes de récupération depuis votre Gladys](#recovery-codes-from-gladys).
- **Une autre personne de votre compte Gladys Plus est administrateur**, et a toujours accès à son application 2FA : elle peut [réinitialiser votre double authentification](#reset-by-another-admin).
- **Aucune Gladys n'est connectée à votre compte** (Gladys éteinte, en panne, perdue, ou jamais installée) : [réinitialisez votre double authentification par e-mail](#reset-by-email).

### Générer de nouveaux codes depuis votre Gladys {/* #recovery-codes-from-gladys */}

Votre Gladys, physiquement chez vous, est déjà un appareil de confiance de votre compte Gladys Plus : elle peut remplacer votre application 2FA, le temps de vous donner un nouveau jeu de codes de récupération.

1. Ouvrez votre Gladys **en local**, depuis votre réseau domestique, avec son adresse locale (par exemple son adresse IP). Cette action n'est pas disponible depuis plus.gladysassistant.com : l'objectif est justement d'être chez vous.
2. Connectez-vous avec un compte **administrateur** de votre Gladys.
3. Allez dans **Paramètres > Utilisateurs**. Sous votre utilisateur, dans la section **« Accès à distance · Gladys Plus »**, cliquez sur **« Codes de récupération »**.
4. Saisissez **votre mot de passe Gladys** (celui de votre instance locale, pas celui de Gladys Plus), puis cliquez sur **« Générer »**.
5. Gladys affiche **10 nouveaux codes de récupération, une seule fois** : copiez-les ou téléchargez-les, et enregistrez-les en lieu sûr. Rien n'est conservé sur votre Gladys.

Vos anciens codes de récupération cessent aussitôt de fonctionner, et Gladys Plus vous prévient par e-mail. Votre mot de passe Gladys Plus reste nécessaire pour vous connecter : ces codes remplacent seulement votre application 2FA. Connectez-vous ensuite sur [plus.gladysassistant.com](https://plus.gladysassistant.com) avec l'un de ces codes, puis remplacez votre application 2FA comme expliqué dans [Vous n'avez plus votre ancien téléphone](#vous-navez-plus-votre-ancien-téléphone).

Bon à savoir :

- Le bouton **« Codes de récupération »** n'apparaît que si votre Gladys connaît déjà votre compte Gladys Plus, c'est-à-dire si les empreintes de vos clés de chiffrement sont affichées sous votre utilisateur.
- Vous n'êtes pas administrateur de votre Gladys ? Demandez à la personne qui gère Gladys chez vous : elle peut générer ces codes pour vous, en saisissant **son propre** mot de passe Gladys, puis vous les transmettre.

### Faire réinitialiser votre 2FA par un autre administrateur {/* #reset-by-another-admin */}

Si votre compte Gladys Plus a un autre administrateur qui a toujours accès à son application 2FA, il peut réinitialiser votre double authentification depuis Gladys Plus :

1. Il se connecte sur [plus.gladysassistant.com](https://plus.gladysassistant.com) et va dans **Paramètres > Utilisateurs**.
2. Sous votre utilisateur, dans la section **« Accès à distance · Gladys Plus »**, il clique sur **« Réinitialiser la double authentification »**.
3. Il saisit le code de **sa propre** application 2FA, puis clique sur **« Réinitialiser »**.

Vous êtes prévenu par e-mail. Connectez-vous ensuite avec votre mot de passe : Gladys Plus vous demande aussitôt de configurer une nouvelle application d'authentification, puis d'enregistrer de nouveaux codes de récupération. Vos clés de chiffrement et votre accès à votre Gladys ne changent pas.

Un administrateur ne peut pas réinitialiser sa propre double authentification de cette façon.

### Réinitialiser votre 2FA par e-mail, quand aucune Gladys n'est connectée {/* #reset-by-email */}

Si aucune Gladys n'est connectée à votre compte Gladys Plus (jamais installée, matériel en panne ou perdu, longue coupure de courant...), vous pouvez réinitialiser votre double authentification par e-mail, immédiatement :

1. Sur [plus.gladysassistant.com](https://plus.gladysassistant.com), connectez-vous avec votre adresse e-mail et votre mot de passe.
2. Sur l'écran du code 2FA, sous **« Vous avez perdu l'accès à votre application 2FA ? »**, cliquez sur **« Pas de Gladys connectée ? Réinitialisez votre double authentification par email. »**
3. Ouvrez l'e-mail que vous recevez, et cliquez sur le lien. Il ne fonctionne qu'**une seule fois** et expire au bout d'**une heure** (vous ne pouvez en demander qu'un par minute : pensez à vérifier vos spams).
4. Sur la page qui s'ouvre, cliquez sur **« Réinitialiser ma double authentification »**.
5. Connectez-vous avec votre mot de passe : Gladys Plus vous demande de configurer une nouvelle application d'authentification, puis d'enregistrer de nouveaux codes de récupération.

Votre ancienne application et vos anciens codes de récupération ne fonctionnent plus, et vous êtes prévenu par e-mail une fois la réinitialisation faite. Vos clés de chiffrement ne changent pas.

**Vous avez aussi oublié votre mot de passe ?** Commencez par « J'ai oublié mon mot de passe » : la page de réinitialisation du mot de passe, ouverte depuis l'e-mail reçu, propose le même lien sous les champs de double authentification. Une fois votre 2FA réinitialisée, revenez sur cette page pour choisir votre nouveau mot de passe : le lien de réinitialisation du mot de passe reste valable deux heures.

**Votre Gladys est connectée ?** La réinitialisation par e-mail est alors refusée, et c'est voulu : votre Gladys, chez vous, est le dernier recours de votre compte, et un administrateur de votre Gladys peut [générer de nouveaux codes de récupération](#recovery-codes-from-gladys) à la place. Cette vérification est faite à la demande et au clic sur le lien : si votre Gladys se reconnecte entre les deux, le lien est refusé, mais reste utilisable tant qu'aucune Gladys n'est connectée.

## Après une réinitialisation de votre mot de passe ou de votre 2FA

**Réinitialiser votre double authentification** (par un administrateur ou par e-mail) ne change ni vos clés de chiffrement, ni votre accès à votre Gladys : une fois votre nouvelle application configurée, tout fonctionne comme avant.

**Réinitialiser votre mot de passe Gladys Plus** (« J'ai oublié mon mot de passe »), en revanche, génère de nouvelles clés de chiffrement. Gladys Plus est chiffré de bout en bout, et votre Gladys n'accepte que les clés que vous avez autorisées chez vous : **votre accès à distance est donc automatiquement révoqué**, par sécurité. C'est normal, rien n'est cassé : sur plus.gladysassistant.com, une page vous explique ce qu'il faut faire.

Pour retrouver votre accès, un administrateur de votre Gladys ouvre votre instance **en local** et va dans **Paramètres > Utilisateurs**. Sous votre utilisateur, dans la section **« Accès à distance · Gladys Plus »**, il vérifie que les empreintes de vos nouvelles clés correspondent à celles affichées sur votre page Gladys Plus, puis active l'interrupteur **« Autorisé »**.

## Nous contacter

Aucune des solutions ci-dessus n'a fonctionné ? Écrivez-nous à [hello@gladysassistant.com](mailto:hello@gladysassistant.com) **depuis l'adresse e-mail de votre compte Gladys Plus**, pour que nous puissions identifier votre compte, et dites-nous ce que vous avez déjà essayé.

Vous pouvez aussi poser votre question sur le [forum de la communauté](https://community.gladysassistant.com/).
