---
id: intro
title: Gladys Plus
sidebar_label: Intro
---

[Gladys Plus](/fr/plus/) est un service additionnel créé et maintenu par [Pierre-Gilles Leymarie](https://twitter.com/pierregillesl), fondateur du projet.

Ce service est entièrement optionel, il est tout à fait possible d'utiliser Gladys complètement gratuitement sans ce service.

L'objectif de ce service est de proposer des fonctionnalités assez pratique à des utilisateurs qui préfèrent du clé en main, facile à utiliser pour toute la famille, et sécurisé par défaut.

J'ai fais une vidéo sur YouTube où je présente comment fonctionne Gladys Plus:

<div class="videoContainer">
<iframe  class="video" src="https://www.youtube.com/embed/TmjrBeufjyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Les fonctionnalités proposées

### Accès à distance chiffré de bout en bout

Nous savons tous en domotique qu'il est compliqué d'accéder à sa configuration locale à distance.

Vous devez soit ouvrir votre réseau à l'extérieur d'Internet, soit configurer un VPN sur votre réseau local.

Les deux options ne sont pas parfaites: la première n'est pas sécurisée, car votre instance locale devient disponible en ligne et peut être piratée. L'option VPN est pénible à configurer, à utiliser et à maintenir.

Le "Gladys Gateway", fait parti du package Gladys Plus, et est disponible à [plus.gladysassistant.com](https://plus.gladysassistant.com), c'est un tunnel chiffré de bout en bout qui transmet les requêtes faites sur le client web à votre instance locale sans compromettre votre vie privée car le trafic est chiffré de bout en bout.

### Sauvegardes chiffrées quotidiennes

Perdre ses données domotiques en raison d'une panne de disque ou d'une mauvaise configuration n'est jamais marrant.

Nous fournissons un service de sauvegarde chiffré, entièrement automatisé, afin que vous puissiez restaurer votre instance à tout moment, n'importe où.

### API ouverte du monde extérieur

Parfois, nous voulons envoyer une requête API à notre instance locale Gladys pour envoyer de nouvelles données de capteurs, ou des données de localisation Owntracks par exemple. L'Open API de Gladys Plus permet cela :)

### Compatibilité avec Google Home

Google Home est une intégration particulière.

Malheureusement, Google Home est un produit 100% Cloud, et Google demande à ce que ses partenaires soient eux aussi hébergés dans le Cloud.

Ainsi, contrairement aux autres intégrations qui peuvent fonctionner entièrement localement, Google Home par nature ne peut fonctionner qu'en passant par une intégration approuvée par Google, et hébergée dans le cloud.

Afin de permettre à la communauté Gladys d'utiliser Google Home avec Gladys, nous avons développé notre propre intégration Google Home, via cette passerelle web Gladys Plus.

Plus d'informations dans [la documentation](/fr/docs/integrations/google-home).
