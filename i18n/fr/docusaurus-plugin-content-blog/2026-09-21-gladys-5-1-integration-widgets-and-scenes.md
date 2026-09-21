---
title: "Gladys Assistant 5.1 : les intégrations peuvent ajouter leurs widgets et leurs scènes"
description: "Une intégration communautaire peut maintenant poser ses propres widgets sur votre tableau de bord et ajouter ses propres déclencheurs et actions dans vos scènes. Au programme aussi : la traduction espagnole, une alerte e-mail quand votre Gladys tombe, le suivi carbone du réseau et le diagnostic des détecteurs de fumée."
authors: pierregilles
image: /img/presentation/gladys-assistant-5-1-fr.jpg
slug: gladys-5-1-integration-widgets-and-scenes
---

Salut à tous !

Nouvelle version de Gladys aujourd'hui, la 5.1 🎉

La version 5 était une grosse refonte de l'interface. Celle-ci est surtout pour les intégrations. Jusqu'ici, une intégration communautaire ne savait faire qu'une chose : publier des appareils. Elle peut maintenant poser ses propres widgets sur votre tableau de bord, et ajouter ses propres déclencheurs et actions dans vos scènes.

![Quatre widgets publiés par des intégrations communautaires, sur un tableau de bord Gladys](../../../static/img/articles/gladys-assistant-5-1/01-integration-widgets-fr.webp)

{/* truncate */}

## Des widgets de tableau de bord publiés par les intégrations

Petit rappel : depuis la 4.84, n'importe qui peut packager une intégration dans une petite image Docker, la publier sur GitHub, et elle apparaît dans le catalogue de toutes les instances Gladys. On en est à 81 aujourd'hui, écrites quasiment uniquement par la communauté.

Le souci, c'est que beaucoup de choses utiles ne sont pas des appareils. Une prévision de production solaire, la carte de nettoyage d'un aspirateur, le gazole le moins cher autour de vous, le risque pollinique du jour, le plan de charge de votre voiture pour la nuit : ça ne rentre pas dans « une température et un interrupteur », et c'est pourtant exactement ce qu'on veut voir sur un tableau de bord.

Une intégration peut donc maintenant déclarer ses propres widgets, et ils arrivent dans l'éditeur de tableau de bord à côté de ceux de Gladys :

![La section « Widgets d'intégrations » du sélecteur de widgets](../../../static/img/articles/gladys-assistant-5-1/02-widget-picker-fr.webp)

Ils apparaissent dans le sélecteur de widgets de l'éditeur de tableau de bord, dans leur propre section, avec le nom de l'intégration qui les fournit. Vous en ajoutez un comme n'importe quel autre widget. Et s'il a des réglages (quel aspirateur, quelle région, quelle période), vous les remplissez directement là, dans un formulaire décrit par l'intégration et généré par Gladys.

### L'intégration dit quoi afficher, Gladys décide comment

C'est le point important de cette fonctionnalité, et c'est un choix assumé, pas quelque chose qu'on a subi.

Aucune intégration tierce n'injecte de HTML dans votre Gladys. Pas d'iframe, pas de script, pas de CSS, pas de couleurs ni de tailles personnalisées. L'intégration envoie une description de son contenu dans un petit vocabulaire : un titre, des tuiles de valeurs, une jauge, une liste d'états, un graphique, une grille d'images, des boutons. C'est Gladys qui fait le rendu.

Du coup chaque widget, même écrit par quelqu'un que vous ne connaissez pas, hérite automatiquement du thème Horizon, du mode sombre, de la mise en page mobile, de votre langue et de votre fuseau horaire. Et il continue de marcher quand l'interface évolue. C'est le modèle des widgets iOS et Android.

Il y a aussi un budget de contenu, pour éviter les cartes surchargées : 8 composants maximum, un seul composant principal (un graphique ou une liste ou une image, pas deux), 6 tuiles de valeurs maximum, 4 boutons maximum, des listes limitées et des textes courts. Et c'est Gladys qui décide de l'ordre d'affichage : en-tête, tuiles, composant principal, états, boutons. Deux widgets qui montrent une valeur, une courbe et deux boutons sortent donc avec la même allure.

Quelques précisions techniques :

- Le contenu est calculé à la volée, pas figé dans le manifeste. Un aspirateur en train de nettoyer peut renvoyer un affichage différent d'un aspirateur sur sa base.
- Rien n'est considéré comme fiable. Chaque contenu est vérifié et borné avant d'arriver dans l'interface : uniquement des composants connus, des textes et des listes de taille limitée, des nombres finis, des dates valides, des liens en https, et des images servies par votre Gladys plutôt que récupérées chez un tiers par votre navigateur.
- Un bouton peut agir : appeler l'intégration, ou écrire une valeur sur une de ses fonctionnalités d'appareil. Le résultat s'affiche dans la carte.
- Un widget peut tracer une courbe depuis votre historique Gladys, ou depuis des données que Gladys n'a pas (une prévision, un plan de charge, les prix de demain) en envoyant directement les points, avec des annotations et un repère « maintenant ».
- Une intégration qui n'a aucun appareil, comme un indice de prix des carburants ou un flux de sorties cinéma, a enfin sa place grâce au nouveau type `provider`.

Une précision sur les captures ci-dessus : ce sont des exemples de ce que le vocabulaire sait faire. Le mécanisme sort aujourd'hui, les intégrations qui l'utilisent restent à écrire.

## Des déclencheurs et des actions de scène publiés par les intégrations

C'est exactement le même problème du côté des scènes. Jusqu'ici, tous les déclencheurs et toutes les actions de l'éditeur étaient codés en dur dans Gladys. Une intégration externe n'avait aucun moyen d'en ajouter, et les deux surfaces génériques dont elle disposait ne suffisaient pas :

- Une fonctionnalité d'appareil, c'est un état. Une température, un interrupteur, une présence : ça marche très bien avec le déclencheur « changement d'état ». Par contre, une plaque d'immatriculation reconnue dans l'allée, une sonnette avec un instantané, un tag NFC scanné ou une commande vocale comprise, ce sont des événements ponctuels avec des données attachées. Les faire passer pour une fonctionnalité fait perdre la donnée, se mélange quand deux événements s'enchaînent, et pollue votre historique.
- Écrire une valeur, ce n'est pas lancer une opération. « Prends un instantané et donne-moi l'image », « nettoie ces trois pièces », « annonce ça sur cette enceinte » : il y a des paramètres et un résultat.

Une intégration peut donc maintenant déclarer ses déclencheurs et ses actions dans son manifeste, et ils apparaissent dans l'éditeur de scènes comme le reste.

![Une scène déclenchée par une intégration, avec une action d'intégration dans ses étapes](../../../static/img/articles/gladys-assistant-5-1/03-scene-integration-fr.webp)

La carte est générée par Gladys à partir de la déclaration. Les champs deviennent un formulaire, un champ laissé vide accepte n'importe quelle valeur, et les données de l'événement deviennent des variables de scène réutilisables dans les étapes suivantes. L'indice de confiance sur la capture vient directement du déclencheur.

Côté conception, c'est Gladys qui fait la correspondance : l'intégration envoie un événement typé avec ses données, et Gladys le compare aux déclencheurs que vous avez configurés. L'intégration n'apprend jamais quelles scènes existent, il n'y a donc rien à fuiter et rien à resynchroniser quand elle se reconnecte, et votre configuration reste dans Gladys. Une action est envoyée une seule fois, et un timeout fait échouer cette action uniquement.

Au passage, une scène peut maintenant mélanger un événement d'une intégration, une action d'une autre, et les étapes Gladys habituelles entre les deux.

## « Conversation Gladys uniquement »

Beaucoup d'entre vous l'ont demandé. Quand une scène vous envoie un message, il part par défaut sur tous les services de messagerie que vous avez configurés (Telegram, SMS...).

![Le sélecteur de destination de l'action message, réglé sur « Conversation Gladys uniquement »](../../../static/img/articles/gladys-assistant-5-1/04-conversation-only-fr.webp)

Vous pouvez maintenant choisir. Avec « Conversation Gladys uniquement », le message reste dans Gladys et nulle part ailleurs. C'est pratique si vous installez Telegram plus tard et que vous ne voulez pas que vos anciennes scènes se mettent à vous notifier sur le téléphone. L'option marche même si vous n'avez aucun canal de messagerie configuré, et elle existe aussi sur l'action « Demander à l'IA ».

Toujours dans les scènes : les scènes créées par l'IA sont maintenant taguées « AI », ce qui permet de les retrouver facilement. Et le filtre par tag correspond désormais exactement au tag, au lieu de retenir tout ce qui contient le mot.

## Gladys parle espagnol

![L'interface de Gladys en espagnol](../../../static/img/articles/gladys-assistant-5-1/05-spanish.webp)

Gladys est maintenant traduit en espagnol, la quatrième langue après l'anglais, le français et l'allemand. Toute l'interface y est passée : tableau de bord, appareils, éditeur de scènes, paramètres, pages d'intégrations, et même les mots-clés de recherche d'icônes.

Un grand merci à Nestor Alonso Torres pour cette contribution. Si vous voulez Gladys dans votre langue, les fichiers de traduction sont de simples JSON dans le dépôt, n'hésitez pas à vous lancer.

## Être prévenu quand votre Gladys tombe

![Le nouveau réglage Gladys Plus : recevoir un e-mail quand l'instance est hors ligne](../../../static/img/articles/gladys-assistant-5-1/06-offline-alert-fr.webp)

Gladys Plus voit votre instance se connecter et se déconnecter. Il peut maintenant vous envoyer un e-mail quand elle est injoignable depuis plus longtemps qu'un délai que vous choisissez, de 10 minutes à une journée, puis un second e-mail quand elle revient.

Coupure de courant, box internet tombée, carte SD morte, mise à jour Docker qui a mal tourné : vous êtes prévenu le jour même, au lieu de le découvrir le soir en rentrant.

Le réglage appartient à votre compte Gladys Plus, il se change donc depuis Gladys Plus, et Gladys vous met un lien direct vers la bonne page.

## Nouvelle catégorie d'appareil : le carbone du réseau

![L'intensité carbone du réseau électrique, sur un tableau de bord énergie](../../../static/img/articles/gladys-assistant-5-1/08-grid-carbon-fr.webp)

Gladys gagne une catégorie « capteur carbone du réseau », avec trois valeurs : l'intensité carbone de votre réseau électrique en gCO₂eq/kWh, la part d'électricité décarbonée et la part de renouvelable. Chacune a son unité, son historique et ses graphiques.

Surtout, une scène peut les lire. « Lance la machine à laver quand le réseau est propre » devient donc possible, et les intégrations qui publient ces chiffres pour votre pays ont enfin où les mettre.

## Les détecteurs de fumée remontent plus d'informations

![Un widget cuisine affichant le diagnostic d'un détecteur de fumée](../../../static/img/articles/gladys-assistant-5-1/07-smoke-detector-fr.webp)

Les détecteurs de fumée Zigbee envoient bien plus que l'alarme elle-même, et Gladys sait maintenant les lire : l'encrassement de la chambre de détection (un détecteur encrassé ne détecte plus rien, il vous dit donc quand le nettoyer ou le remplacer), le fait que le détecteur se soit mis en silence, et une commande pour couper l'alarme aussi longtemps que l'appareil l'autorise.

Cette dernière reste volontairement en dehors de la catégorie interrupteur. Couper une alarme incendie ne doit pas pouvoir se faire par un « éteins tout » dans une scène ou un assistant vocal.

## Appareils, protocoles, système

- **Matter** : matter.js passe en 0.17.9, ce qui corrige les erreurs `Node ID X is already commissioned` qui bloquaient certains appairages.
- **HomeKit** : les climatisations sont exposées en HeaterCooler. Demander à Siri d'en allumer une conserve maintenant le mode dans lequel elle était.
- **Zigbee2MQTT** : les étiquettes triphasées du ZLinky_TIC sont gérées (`SINSTS1`, `SMAXSN*`, `IINST1`, `IMAX1`), `probe_temperature` a son propre type de température au lieu d'écraser la principale, et le conteneur tourne dans le fuseau horaire de votre instance. Ses logs et ses horaires ne sont donc plus décalés.
- **Sonos** : l'intégration native a maintenant un badge « déprécié » et un bouton de migration vers l'intégration communautaire, qui fait plus de choses. La fenêtre de migration prévient de ce qui change pour les notifications vocales.
- **Tableau de bord** : le curseur et le champ numérique respectent le pas déclaré par la fonctionnalité d'appareil. Une consigne qui bouge par 0,5 ne saute donc plus par 1.
- **Calendrier** : correction d'une régression où le chargement du plugin timezone de dayjs cassait le calendrier.
- **Gladys Plus** : le verrou de paiement dans lequel certains comptes étaient restés à cause du bug 402 de l'offre Lite est levé automatiquement. Et chaque version est maintenant publiée sur Gladys Plus directement depuis le workflow de release.
- **Sécurité** : correction d'une faille de réinitialisation de mot de passe, où une origine choisie par un attaquant pouvait empoisonner le lien envoyé par e-mail.

Côté documentation, les routes d'API qui manquaient dans l'apidoc généré sont publiées, et la spécification des intégrations externes est découpée en un fichier par sujet.

## Et tout ce que les 5.0.x ont déjà corrigé

Entre la 5.0 et aujourd'hui, quatre versions correctives sont sorties (5.0.1 à 5.0.4) avec une cinquantaine de correctifs, presque tous issus de vos retours sur la nouvelle interface : tablettes en portrait, noms d'appareils trop longs, dock mobile, icônes météo, ConBee III, renumérotation des variables de scène, menus déroulants qui tombaient en bas de l'écran, latence de défilement du tableau de bord.

Ça fait près de 70 pull requests depuis la version 5.0, dont 23 dans cette version.

## Remerciements aux contributeurs

Merci à [@cicoub13](https://github.com/cicoub13), [@William-De71](https://github.com/William-De71), [@vincentBesseau](https://github.com/vincentBesseau) et Nestor Alonso Torres pour le code de cette version, et à tous ceux qui publient des intégrations externes. Le catalogue est à 81 et il continue de monter.

Si vous voulez écrire la vôtre, [le guide développeur est ici](/docs/dev/external-integrations/). Il couvre maintenant les widgets et les déclarations de scène, avec les champs de manifeste, le vocabulaire de contenu, les limites et les méthodes du SDK.

On se retrouve sur [le forum](https://community.gladysassistant.com/) si vous voulez parler de cette version :)

## Comment mettre à jour ?

Comme toujours, Gladys se met à jour automatiquement sous 24 h si vous utilisez Watchtower, sinon vous pouvez le faire en un clic depuis les paramètres.

Pensez à configurer Telegram pour recevoir une alerte sur votre téléphone quand Gladys se met à jour !

Le CHANGELOG complet est disponible [ici](https://github.com/GladysAssistant/Gladys/releases/tag/v5.1.0).
