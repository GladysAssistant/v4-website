---
id: matter-bridge
title: Exposer vos appareils Gladys à Apple Maison, Google Home et Alexa avec Matter
description: "Transformez Gladys Assistant en bridge Matter : appairez-le avec Apple Maison, Google Home, Amazon Alexa, SmartThings ou Home Assistant et pilotez-y vos appareils Zigbee, Z-Wave ou Wi-Fi, 100 % en local."
sidebar_label: Bridge Matter
---

L'intégration **Bridge Matter** transforme Gladys en bridge Matter. Une fois appairé, vos appareils Gladys apparaissent dans l'application Matter de votre choix (Apple Maison, Google Home, Amazon Alexa, SmartThings, Home Assistant...), **quel que soit leur protocole** : Zigbee, Z-Wave, Wi-Fi, MQTT... La liaison Matter entre Gladys et votre **contrôleur Matter** (concentrateur domestique, Nest, Echo...) reste sur votre réseau local, et le bridge ne nécessite pas d'abonnement Gladys Plus.

Trois points à connaître toutefois :

- Le pilotage depuis l'application n'est pas toujours local : hors de chez vous, et avec certains écosystèmes (Google Home, ou Alexa par exemple), votre commande peut passer par le cloud de l'éditeur de l'application avant d'atteindre votre contrôleur, qui parle ensuite à Gladys en local.
- Votre application Matter peut demander son propre compte : un identifiant Apple pour Apple Maison, un compte Google pour Google Home, un compte Amazon pour Alexa, un compte Samsung pour SmartThings.
- Le bridge ne rend pas un appareil local : si Gladys pilote un appareil via un service cloud (une intégration cloud, par exemple), cet appareil dépend toujours de ce cloud quand vous le pilotez depuis une application Matter.

:::tip[Matter, Matterbridge ou Bridge Matter ?]
Trois intégrations ont des noms proches, mais elles ne vont pas dans le même sens :

- **Bridge Matter** (cette page) : appareils Gladys → vos applications Matter (Apple Maison, Google Home, Alexa...).
- [Matter](/fr/docs/integrations/matter/) : appareils Matter → Gladys. Gladys est le contrôleur Matter.
- [Matterbridge](/fr/docs/integrations/matterbridge/) : appareils exposés par le projet open source Matterbridge et ses plugins → Gladys.

Le Bridge Matter et Matterbridge ne peuvent pas être activés en même temps : les deux ont besoin du port 5540, sauf si vous [déplacez le bridge sur un autre port](#another-port).

:::

## Prérequis

- **L'IPv6 sur votre réseau local.** Matter repose sur l'IPv6. La page de l'intégration vous indique si une interface IPv6 a été détectée sur la machine qui fait tourner Gladys. Une adresse IPv6 locale (`fe80::...`) suffit : votre fournisseur d'accès n'a pas besoin de vous fournir l'IPv6.
- **Gladys doit utiliser le réseau de l'hôte.** C'est déjà le cas avec l'installation standard de Gladys (`network_mode: host` dans Docker). Le bridge écoute sur le port UDP **5540**, le port Matter standard et le seul qu'Amazon Alexa sait découvrir. Il fonctionne en même temps que l'intégration [Matter](/fr/docs/integrations/matter/), qui utilise un autre port, mais **pas en même temps que l'intégration [Matterbridge](/fr/docs/integrations/matterbridge/)**, qui a elle aussi besoin du port 5540. Si un autre programme utilise déjà ce port, vous pouvez [déplacer le bridge sur un autre port](#another-port).
- **Un compte administrateur.** L'intégration n'est visible que par les administrateurs de Gladys.
- **Un contrôleur Matter sur le même réseau.** L'application seule ne suffit pas toujours : la plupart des écosystèmes ont besoin d'un appareil qui joue le rôle de contrôleur Matter.
  - Apple Maison : un iPhone ou un iPad (iOS 18 ou ultérieur) peut ajouter et piloter le bridge à la maison sans concentrateur. Un concentrateur domestique (Apple TV ou HomePod) est recommandé : il est nécessaire pour piloter vos appareils hors de chez vous et pour faire tourner les automatisations.
  - Google Home : un appareil Google compatible Matter (Nest Hub, enceinte Nest, Google TV Streamer...).
  - Amazon Alexa : un Echo compatible Matter.
  - SmartThings : un hub SmartThings, ou un appareil Samsung qui en fait office.
  - Home Assistant : son serveur Matter.

L'appairage se fait par le réseau : contrairement à certains appareils Matter, le bridge n'a pas besoin du Bluetooth.

## Activer le bridge

Dans Gladys, rendez-vous dans `Intégrations` puis cliquez sur `Bridge Matter` (catégorie « Assistants vocaux & IA »).

Vérifiez que la page affiche `Une interface IPv6 est disponible sur cette machine ✅`, puis cliquez sur `Activer le bridge Matter`.

Si l'intégration [Matterbridge](/fr/docs/integrations/matterbridge/) est activée, ce bouton est désactivé et la page explique pourquoi : désactivez d'abord l'intégration Matterbridge, ou [déplacez le bridge sur un autre port](#another-port).

Le bridge démarre en quelques secondes. S'il ne peut pas démarrer, l'erreur est affichée sur la page sous `Le bridge Matter n'a pas pu démarrer :`.

Le bridge redémarre ensuite automatiquement à chaque redémarrage de Gladys.

### Utiliser un autre port {/* #another-port */}

Par défaut, le bridge écoute sur le port 5540. Si un autre bridge Matter utilise déjà ce port sur la machine (un Matterbridge installé en dehors de Gladys, Home Assistant Matter Hub...), vous pouvez déplacer le bridge de Gladys sur un autre port avec la variable d'environnement `MATTER_BRIDGE_PORT` :

- **Installation avec Docker** : supprimez le conteneur avec `sudo docker rm -f gladys` (vos données dans `/var/lib/gladysassistant` sont conservées), puis relancez la commande avec laquelle vous avez installé Gladys, avec les mêmes options et volumes (voir la [commande d'installation](/fr/docs/installation/docker/)), en ajoutant `-e MATTER_BRIDGE_PORT=5550`.
- **Installation avec [Docker Compose](/fr/docs/installation/docker-compose/)** : ajoutez `MATTER_BRIDGE_PORT: 5550` sous `environment:` dans votre fichier compose, puis relancez Gladys avec `sudo docker compose -f gladys-compose.yml up -d`.

:::warning[Amazon Alexa]
Amazon Alexa ne découvre les appareils Matter que sur le port 5540 : sur un autre port, le bridge n'apparaît plus dans Alexa. Apple Maison, Google Home, SmartThings et Home Assistant ne sont pas concernés.
:::

Sur un autre port, le bridge n'entre plus en conflit avec l'intégration [Matterbridge](/fr/docs/integrations/matterbridge/) : les deux peuvent être activés en même temps.

## Choisir les appareils exposés

Dans la section `Appareils exposés`, choisissez :

- `Exposer tous les appareils compatibles` (par défaut) : tous les appareils compatibles sont exposés, y compris ceux que vous ajouterez plus tard.
- `N'exposer que les appareils sélectionnés` : choisissez les appareils à exposer dans la liste. Chaque appareil est affiché avec les fonctions Matter qu'il aura (lumière, prise, température...).

Cliquez sur `Enregistrer`. Les changements sont appliqués immédiatement et vos appairages sont conservés : inutile d'appairer à nouveau le bridge.

Ensuite, Gladys tient le bridge à jour tout seul :

- Un **nouvel appareil compatible** est ajouté au bridge (en mode « tous »).
- Un **appareil renommé** est renommé dans vos applications Matter, et y garde sa pièce et ses automatisations.
- Un **appareil supprimé** disparaît du bridge.
- Un **appareil retiré de la sélection** disparaît aussi du bridge. Si vous le sélectionnez à nouveau plus tard, il revient avec les mêmes identifiants qu'avant dans le bridge.

:::note
Matter limite les noms à 32 octets : les noms d'appareils plus longs sont tronqués dans vos applications Matter. Les lettres accentuées et les emojis prennent plus d'un octet : un nom qui en contient est donc coupé un peu plus tôt.
:::

## Appairer Gladys avec votre application Matter

Tant que le bridge n'est pas appairé, la section `Appairage` affiche un **QR code** et un **code d'appairage** à 11 chiffres (`1234-567-8901`).

Le bridge reste prêt à être appairé tant qu'il ne l'est pas : Matter ferme la fenêtre d'appairage 48 heures après le démarrage du bridge, ou après trop de tentatives échouées, et Gladys la rouvre tout seul.

Dans votre application Matter, ajoutez un nouvel appareil Matter et scannez le QR code, ou saisissez le code d'appairage :

- **Apple Maison** : touchez `+` > `Ajouter un accessoire`, puis scannez le QR code (ou touchez `Plus d'options...` pour saisir le code).
- **Google Home** : touchez `+` > `Appareil` > `Appareil compatible Matter`, puis scannez le QR code.
- **Amazon Alexa** : touchez `+` > `Appareil` > `Matter`, puis suivez les étapes et scannez le QR code.
- **SmartThings** et **Home Assistant** : utilisez l'option « ajouter un appareil Matter » de l'application.

:::warning[Accessoire non certifié]
Gladys n'est pas un produit Matter certifié. Pendant l'appairage, votre application vous prévient que l'accessoire **n'est pas certifié** : confirmez que vous voulez quand même l'ajouter (`Ajouter quand même` dans Apple Maison, par exemple).
:::

L'application trouve alors le « Gladys Bridge » et importe les appareils exposés. Elle peut vous demander d'attribuer une pièce à chaque appareil.

Vous pouvez maintenant piloter vos appareils Gladys depuis votre application Matter, dans vos automatisations, et à la voix avec Siri, l'Assistant Google ou Alexa 🗣️

La synchronisation fonctionne dans les deux sens :

- Quand un appareil change d'état dans Gladys (une mesure de capteur, une lumière allumée depuis le tableau de bord ou une scène...), le nouvel état est envoyé à vos applications Matter.
- Quand vous pilotez un appareil depuis une application Matter, Gladys envoie la commande à l'appareil, exactement comme depuis le tableau de bord Gladys.

## Ajouter Gladys à un autre écosystème

Une fois le bridge appairé, le QR code est masqué et la page liste les écosystèmes avec lesquels Gladys est appairé (`Gladys est appairé avec :`).

Matter permet d'appairer un même bridge avec plusieurs applications (multi-admin). Pour ajouter Gladys à un deuxième écosystème :

1. Ouvrez le mode d'appairage du bridge depuis une application déjà appairée. Par exemple, dans Apple Maison : ouvrez les réglages du bridge et touchez `Activer le mode d'appairage`. L'application vous donne un nouveau code d'appairage.
2. Dans l'autre application, ajoutez un appareil Matter et saisissez (ou scannez) ce nouveau code.

## Appareils compatibles

| Appareil Gladys | Apparaît dans Matter comme |
| --- | --- |
| 💡 Lumière (marche/arrêt, luminosité, température de couleur, couleur) | Lumière : marche/arrêt, variable, température de couleur ou couleur, selon les fonctionnalités de la lumière |
| 🔌 Interrupteur / prise (marche/arrêt) | Prise. Un interrupteur à plusieurs canaux donne une prise par canal |
| 🪟 Volet roulant, rideau (position et/ou ouvrir / fermer / stop) | Store (volet roulant ou rideau) |
| 🚪 Capteur d'ouverture | Capteur de contact |
| 🚶 Capteur de mouvement ou de présence | Capteur de présence |
| 💧 Détecteur de fuite | Détecteur de fuite d'eau |
| 🔥 Détecteur de fumée et/ou de CO | Alarme fumée / CO |
| 🌡️ Capteur de température | Capteur de température (°F et K sont convertis en °C) |
| 💦 Capteur d'humidité | Capteur d'humidité |
| ☀️ Capteur de luminosité | Capteur de luminosité (lux) |
| 🧭 Capteur de pression | Capteur de pression |
| 🌫️ Capteurs de CO2, PM2.5 et PM10 | Capteur de qualité de l'air, avec une qualité globale basée sur les PM2.5 et le CO2 (la moins bonne des deux l'emporte) |
| 🔋 Batterie | Niveau de batterie de l'appareil, avec une alerte de batterie faible sous 20 % |

Un appareil avec plusieurs fonctionnalités (par exemple un capteur de température, d'humidité et de batterie) est exposé comme un seul appareil du bridge. La plupart des applications l'affichent comme un seul accessoire, certaines affichent une tuile par fonction (température, humidité, batterie...).

Quelques limites à connaître :

- Pour les lumières, les prises et les volets, seules les fonctionnalités pilotables sont exposées : une lumière ou une prise en lecture seule n'est pas exposée.
- Un appareil qui n'a qu'une batterie n'est pas exposé.
- La présence d'un téléphone ou d'un ordinateur sur votre réseau, détectée par les intégrations [Bluetooth](/fr/docs/integrations/bluetooth/) ou [Lan-Manager](/fr/docs/integrations/lan-manager/), n'est pas exposée : elle n'indique pas si quelqu'un est dans une pièce.
- Les volets sont pilotés en hauteur uniquement : l'inclinaison n'est pas prise en charge.
- Les thermostats et climatiseurs, serrures, ventilateurs, boutons, sirènes, compteurs d'énergie, aspirateurs et lecteurs multimédias ne sont pas encore pris en charge.

Nous ajoutons régulièrement de nouveaux types d'appareils selon les retours de la communauté. N'hésitez pas à proposer les vôtres sur le [forum Gladys](https://community.gladysassistant.com/) !

## Désactiver ou réinitialiser le bridge

- `Désactiver le bridge Matter` met le bridge hors ligne mais **conserve ses appairages** : quand vous le réactivez, vos applications Matter retrouvent le même bridge et les mêmes appareils.
- `Réinitialiser le bridge` sert quand vous n'arrivez plus à appairer le bridge. Tous les appairages de Gladys sont supprimés : le bridge ne répond plus aux écosystèmes avec lesquels il était appairé. Une ancienne entrée « Gladys Bridge » peut rester dans vos applications Matter : **supprimez-la**, puis ajoutez à nouveau le bridge avec son **nouveau code d'appairage**. Votre sélection d'appareils exposés est conservée. Ce bouton est disponible même quand le bridge n'a pas pu démarrer.

Si vous retirez Gladys du dernier écosystème avec lequel il était appairé, le bridge se réinitialise tout seul : la page affiche à nouveau le QR code, prêt pour un nouvel appairage.

## Sauvegarde des appairages

Gladys enregistre les appairages du bridge dans sa base de données chaque nuit (à 4h20), et une minute après l'ajout ou le retrait d'un écosystème. Ils font donc partie des sauvegardes [Gladys Plus](/fr/plus/) : si vous [déplacez Gladys sur une nouvelle machine](/fr/docs/installation/migrate/), le bridge revient avec ses appairages, et vos applications Matter le retrouvent sans nouvel appairage.

Seuls les appairages présents dans la dernière sauvegarde Gladys Plus sont restaurés : après avoir ajouté un écosystème, attendez une minute que Gladys enregistre l'appairage avant de lancer une sauvegarde (**Paramètres > Sauvegardes** > **« Sauvegarder maintenant »**). Sinon, vous devrez appairer à nouveau cet écosystème.

## Dépannage

- **Aucune interface IPv6 détectée** : activez l'IPv6 sur votre box et sur la machine qui fait tourner Gladys, puis redémarrez Gladys.
- **L'application ne trouve pas le bridge** : vérifiez que votre téléphone et Gladys sont sur le même réseau (pas sur un Wi-Fi invité), et que Gladys utilise le réseau de l'hôte.
- **`Le bridge Matter n'a pas été démarré : le port 5540, le port Matter standard, est déjà utilisé par un autre programme`** : un autre bridge Matter tourne sur la machine (un Matterbridge installé en dehors de Gladys, un autre serveur Matter...). Arrêtez-le ou changez son port, ou [déplacez le bridge de Gladys sur un autre port](#another-port). Désactivez et réactivez ensuite le bridge Matter.
- **`Le bridge Matter n'a pas été démarré : l'intégration Matterbridge est activée`** : désactivez l'intégration [Matterbridge](/fr/docs/integrations/matterbridge/), puis désactivez et réactivez le bridge Matter. Vous pouvez aussi [déplacer le bridge sur un autre port](#another-port).
- **L'appairage échoue après plusieurs tentatives** : Matter bloque l'appairage pendant un moment après trop de tentatives échouées. Gardez la page de l'intégration ouverte et patientez jusqu'à 15 minutes : Gladys rouvre la fenêtre d'appairage tout seul, puis réessayez.
- **Un appareil manque** : vérifiez qu'il fait partie des appareils compatibles ci-dessus et, en mode sélection, qu'il est bien sélectionné, puis cliquez sur `Enregistrer`.

🛠️ Besoin d'aide ? Rejoignez-nous sur le [forum de la communauté Gladys](https://community.gladysassistant.com/), nous sommes là pour vous aider !
