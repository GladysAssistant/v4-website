---
id: intro
title: Discussion
sidebar_label: Intro
---

La Discussion dans Gladys est une fonctionnalité qui permet d'interagir avec le logiciel.

Gladys communiquera automatiquement avec vous si vous lui programmez une interaction grâce aux [Scènes](/fr/docs/scenes/send-a-message-action).

Vous pouvez également demander à Gladys dans la Discussion d'effectuer des "commandes d'actions" ou des "commandes de remonter d'informations des états des capteurs".

## Allumer/Éteindre la lumière

Il est possible dans Gladys d’“Allumer" et d'"Éteindre” la lumière par pièce via la commande <“Allume” ou “Éteins” 'nom de la pièce'>.

Cette fonctionnalité est très pratique car elle permet d’avoir la main en action sur ses actionneurs sans exposer Gladys sur Internet en utilisant la messagerie Telegram.

## Demander la température d'une pièce

Il s'agit d'une information remontée par un capteur. Dans la discussion, cette donnée est comprise par Gladys sous la forme d'une question du type : <"Quelle est la température dans la 'nom de la pièce' ?">

## Demander la météo extérieure

Pour que Gladys vous communique cette information dans la discussion, il faudra d'abord que vous activiez l'intégration [Openweather](/fr/docs/integrations/openweather/).
Ensuite même principe que précédemment, Gladys répondra à votre demande sur la météo extérieure si vous le lui demander sous la forme d'une question du type : <"Quelle est la météo">
