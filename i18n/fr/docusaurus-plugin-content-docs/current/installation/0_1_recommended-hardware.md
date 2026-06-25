---
id: recommended-hardware
title: Le matériel recommandé
description: "Le meilleur matériel Zigbee pour une maison connectée Gladys Assistant fiable : dongle coordinateur recommandé et appareils les mieux notés dans chaque catégorie."
sidebar_label: Matériel recommandé
---

Pour construire une maison connectée fiable et durable avec Gladys Assistant, **je recommande le protocole Zigbee** pour la grande majorité de vos appareils.

Zigbee est un protocole sans-fil maillé : chaque appareil alimenté sur secteur étend le réseau et améliore la fiabilité globale. Il est aussi **ouvert**, **standardisé** et **indépendant des constructeurs**, ce qui vous permet de mélanger les marques sans être enfermé dans un écosystème propriétaire.

Cette page liste les appareils Zigbee les mieux notés de chaque catégorie, ceux que j'achèterais aujourd'hui pour équiper une maison à partir de zéro.

> 💡 Tous les appareils Zigbee listés ci-dessous s'appairent à un coordinateur Zigbee (le "dongle") via l'[intégration Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt/).

## Coordinateur Zigbee (le "dongle")

Le coordinateur Zigbee est **l'appareil le plus important** de votre installation : c'est le cerveau de votre réseau Zigbee. Choisissez un modèle de qualité, vous le garderez pendant des années.

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg" alt="SONOFF Zigbee 3.0 USB Dongle Plus-E" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">SONOFF Zigbee 3.0 USB Dongle Plus-E</h4>
    <p class="product-card__description">Le meilleur rapport qualité/prix en coordinateur USB. Basé sur la puce EFR32MG21, officiellement supporté par Zigbee2MQTT. C'est celui que j'utilise au quotidien.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/dongle-zigbee/6315-sonoff-dongle-usb-zigbee-30-antenne-externe-v2-zbdongle-e-compatible-home-assistant-et-zigbee2mqtt-6920075777659.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SLZB-06.png" alt="SMLight SLZB-06" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative Ethernet</span>
    <h4 class="product-card__title">SMLight SLZB-06</h4>
    <p class="product-card__description">Coordinateur Zigbee Ethernet/PoE. Pratique si vous voulez éloigner le dongle de votre serveur (placard technique) pour une meilleure couverture du réseau Zigbee. <strong>⚠️ Avec ce modèle, vous devrez installer et gérer Zigbee2MQTT vous-même</strong> (Docker, machine dédiée…), l'intégration Zigbee2MQTT de Gladys ne le lance pas automatiquement contrairement au dongle USB.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/box-domotique/7612-smlight-slzb-06mg24u-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg24.html?domid=17" target="_blank" rel="noopener">Voir le produit sur SMLight</a>
  </div>
</div>

> ⚠️ Utilisez une **rallonge USB 2.0** pour éloigner le dongle de quelques centimètres de votre serveur. Les ports USB 3.0 et les boîtiers métalliques génèrent beaucoup d'interférences sur la bande 2,4 GHz.

## Ampoules connectées

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/9290024687.jpg" alt="Philips Hue White and Color Ambiance E27" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Philips Hue White and Color Ambiance E27</h4>
    <p class="product-card__description">La meilleure ampoule Zigbee du marché : rendu des couleurs excellent, très fiable, et elle agit comme un routeur Zigbee. S'appaire directement avec Zigbee2MQTT, sans pont Hue nécessaire.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=Philips+Hue+White+and+Color+Ambiance+E27&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/AC10787.jpg" alt="Innr Smart Bulb E27 Color" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative économique</span>
    <h4 class="product-card__title">Innr Smart Bulb E27 Color</h4>
    <p class="product-card__description">Marque hollandaise spécialisée Zigbee, très bien supportée par Zigbee2MQTT. Bon rapport qualité/prix, agit aussi comme routeur Zigbee, alternative crédible à Hue.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=Innr+E27+color+Zigbee&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
</div>

## Prises connectées (avec mesure de consommation)

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/A1Z.jpg" alt="Nous A1Z prise intelligente Zigbee" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Nous A1Z prise intelligente Zigbee</h4>
    <p class="product-card__description">L'une des prises Zigbee les plus populaires de la communauté Zigbee2MQTT. Mesure de consommation en temps réel, fiable, et fait office de routeur Zigbee pour étendre le maillage.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Capteurs de température et d'humidité

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WSDCGQ11LM.jpg" alt="Aqara Capteur Température et Humidité" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Aqara Capteur Température et Humidité</h4>
    <p class="product-card__description">Très précis, autonomie de batterie excellente (2+ ans), format ultra-compact. La référence absolue sous Zigbee2MQTT pour mesurer température, humidité et pression atmosphérique.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/thermometre-connecte/6705-aqara-capteur-de-temperature-et-d-humidite-zigbee-30-t1-th-s02d-6975833352159.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-02D.jpg" alt="SONOFF SNZB-02D avec écran" loading="lazy" />
    </div>
    <span class="product-card__badge">Avec écran</span>
    <h4 class="product-card__title">SONOFF SNZB-02D</h4>
    <p class="product-card__description">Capteur Zigbee de température et d'humidité avec écran LCD intégré. Excellent rapport qualité/prix, parfait pour les pièces de vie où l'on veut voir les valeurs d'un coup d'œil. Je l'utilise au quotidien.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/produits-de-domotique/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran-snzb-02d-compatible-zigbee2mqtt-6920075740004.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Détecteurs de mouvement

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ14LM.jpg" alt="Aqara Motion Sensor P1" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Aqara Motion Sensor P1</h4>
    <p class="product-card__description">Le détecteur de mouvement PIR Zigbee le mieux noté : sensibilité paramétrable, délai de réarmement configurable, mesure de luminosité, très longue autonomie sur pile CR2450.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/peripheriques/6138-aqara-detecteur-de-mouvement-et-luminosite-zigbee-30-aqara-motion-sensor-p1-ms-s02-6970504215979.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Détecteurs d'ouverture (portes / fenêtres)

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/E3.png" alt="Nous E2 détecteur d'ouverture Zigbee" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Nous E3 — Détecteur d'ouverture Zigbee 3.0</h4>
    <p class="product-card__description">Détecteur d'ouverture porte/fenêtre Zigbee 3.0 100 % local. Format compact, longue autonomie sur pile, très bon rapport qualité/prix. Excellent support Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/peripheriques/6193-nous-detecteur-d-ouverture-de-porte-ou-fenetre-zigbee-30-5907772033876.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.jpg" alt="Aqara Door and Window Sensor T1 MCCGQ12LM" loading="lazy" />
    </div>
    <span class="product-card__badge">Premium</span>
    <h4 class="product-card__title">Aqara Door and Window Sensor T1 (MCCGQ12LM)</h4>
    <p class="product-card__description">Version Zigbee 3.0 (et non Matter/Thread) du capteur d'ouverture Aqara, encore plus compact que le modèle d'origine. Très fiable, longue autonomie, finition haut de gamme.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/detecteur-ouverture-de-porte-et-fenetre-connecte/6707-aqara-detecteur-d-ouverture-portefenetre-zigbee-30-door-and-window-sensor-t1-mccgq12lm.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Boutons et télécommandes sans fil

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WXKG11LM.jpg" alt="Aqara Wireless Mini Switch" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Aqara Wireless Mini Switch</h4>
    <p class="product-card__description">Mini bouton sans fil avec détection appui court / double appui / appui long. Trois actions sur un seul bouton, parfait pour des automatisations personnalisées.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=Aqara+Wireless+Mini+Switch+WXKG11LM&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-01P.jpg" alt="SONOFF SNZB-01P" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative</span>
    <h4 class="product-card__title">SONOFF SNZB-01P</h4>
    <p class="product-card__description">Bouton Zigbee économique avec base magnétique. Détection appui court, double, et long. Parfait pour remplacer un interrupteur ou créer des raccourcis.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=SONOFF+SNZB-01P&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
</div>

## Modules pour volets roulants

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SR-ZG9080A.jpg" alt="Sunricher Module Volet Roulant Zigbee" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Sunricher Module Volet Roulant Zigbee 3.0</h4>
    <p class="product-card__description">Module encastrable fiable qui rend n'importe quel volet roulant existant connecté. Très bien supporté par Zigbee2MQTT, gestion des fins de course et du calibrage automatique.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/peripheriques/5245-sunricher-module-volet-roulant-zigbee-30.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MINI-ZBRBS.png" alt="SONOFF Module Volet Roulant Zigbee MINI-ZBRBS" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative</span>
    <h4 class="product-card__title">SONOFF MINI-ZBRBS — Module Volet Roulant Zigbee</h4>
    <p class="product-card__description">Micromodule volet roulant Zigbee 3.0 de SONOFF, format compact pour boîte d'encastrement. Bonne alternative au Sunricher, signé d'une marque très bien supportée par Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/produits-de-domotique/8384-sonoff-module-volet-roulant-zigbee-mini-zbrbs.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Modules d'éclairage encastrables

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBMINIL2.jpg" alt="SONOFF ZBMINI-L2" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">SONOFF ZBMINI-L2</h4>
    <p class="product-card__description">Micromodule qui fonctionne <strong>sans fil neutre</strong>. La solution parfaite pour rendre connectées les installations électriques anciennes typiques en France.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=SONOFF+ZBMINI-L2&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
</div>

## Interrupteurs muraux connectés

Ces interrupteurs **remplacent vos interrupteurs muraux existants** et permettent de piloter une lumière à la fois physiquement (via la touche) et à distance (via Gladys). Existent en version **avec fil neutre** (idéal pour le neuf et les rénovations récentes) ou **sans fil neutre** (parfait pour les installations électriques anciennes typiques en France).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WS-EUK01.png" alt="Aqara Smart Wall Switch H1 EU sans neutre" loading="lazy" />
    </div>
    <span class="product-card__badge">Sans neutre</span>
    <h4 class="product-card__title">Aqara Smart Wall Switch H1 EU (sans neutre)</h4>
    <p class="product-card__description">Interrupteur mural Zigbee 3.0 haut de gamme, format européen, qui s'installe <strong>sans fil neutre</strong>. Existe en version simple (WS-EUK01) ou double bascule (WS-EUK02). Finition premium, très fiable, excellent support Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/peripheriques/5726-aqara-interrupteur-mural-intelligent-h1-zigbee-30-sans-neutre-ws-euk01-6970504214774.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/fr/img/docs/fr/installation/recommended-hardware/aqara_h2.jpg" alt="Aqara Light Switch H2 EU" loading="lazy" />
    </div>
    <span class="product-card__badge">Avec neutre</span>
    <h4 class="product-card__title">Aqara Light Switch H2 EU (avec neutre)</h4>
    <p class="product-card__description">Nouvelle génération 2024, <strong>double protocole Zigbee 3.0 + Thread/Matter</strong> : vous l'utilisez en Zigbee aujourd'hui avec Zigbee2MQTT, et vous pourrez basculer vers Matter/Thread plus tard via un simple flash OTA, sans racheter de matériel. Existe en simple (WS-K07D, 1 canal) ou double bascule (WS-K08D, 2 canaux). À privilégier si vous avez un fil neutre à l'interrupteur.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/eclairage-intelligent/7629-aqara-interrupteur-mural-intelligent-zigbee-30-et-thread-aqara-light-switch-h2-2-boutons-1-canal-ws-k07d-6975833355372.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Détecteurs de fuite d'eau

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-05P.png" alt="SONOFF SNZB-05P détecteur d'inondation Zigbee" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">SONOFF SNZB-05P — Détecteur d'inondation Zigbee IP67</h4>
    <p class="product-card__description">Détecteur de fuite d'eau Zigbee certifié IP67, avec sonde déportée extensible (jusqu'à plusieurs mètres). Parfait à placer sous l'évier, derrière la machine à laver ou près du ballon d'eau chaude.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/produits-de-domotique/7183-sonoff-detecteur-d-inondation-zigbee-ip67-extensible-snzb-05p-6920075741810.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Détecteurs de fumée

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SMSZB-120.jpg" alt="Frient Détecteur de fumée intelligent Zigbee SMSZB-120" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Frient — Détecteur de fumée intelligent Zigbee 3.0 (SMSZB-120)</h4>
    <p class="product-card__description">Détecteur de fumée Zigbee certifié EN 14604, qualité professionnelle, conforme aux normes des DAAF français. Très bien noté dans la communauté Zigbee2MQTT, pile longue durée incluse.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/peripheriques/5409-frient-detecteur-de-fumee-intelligent-zigbee-30-smszb-120-5713594002330.html?domid=17" target="_blank" rel="noopener">Voir le produit sur Domadoo</a>
  </div>
</div>

## Suivi de la consommation électrique (Linky)

Si vous avez un compteur Linky, vous pouvez suivre votre consommation électrique en temps réel directement dans Gladys via la sortie TIC du compteur, grâce au module **ZLinky_TIC** de LiXee.

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZLinky_TIC.png" alt="LiXee ZLinky_TIC" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">LiXee ZLinky_TIC</h4>
    <p class="product-card__description">Module Zigbee 3.0 qui se branche directement sur la sortie TIC du compteur Linky. Remonte la puissance instantanée, l'index de consommation, l'option tarifaire (HC/HP, Tempo…) et bien plus, sans cloud, en local.</p>
    <a class="product-card__cta" href="https://www.domadoo.fr/fr/eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-zlinky-v4000-0014-3770014375179.html?domid=17" target="_blank" rel="noopener">Voir sur Domadoo</a>
  </div>
</div>

## Détecteurs de vibration

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg" alt="Aqara Vibration Sensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Aqara Vibration Sensor</h4>
    <p class="product-card__description">Détecte vibrations, inclinaison et chute libre. Idéal pour détecter les chocs sur une porte (sécurité), un bris de vitre, ou pour savoir quand le lave-linge a fini son cycle.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=Aqara+Vibration+Sensor+DJT11LM&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
</div>

## Caméras

Les caméras **n'utilisent pas** le protocole Zigbee (trop gourmand en bande passante). Pour les caméras, je recommande des **caméras IP avec support ONVIF/RTSP**, qui s'intègrent à Gladys via l'[intégration Caméra](/fr/docs/integrations/camera/).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="/fr/img/docs/fr/installation/recommended-hardware/reolink_5mp_camera.jpg" alt="Reolink 5MP PoE" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommandé</span>
    <h4 class="product-card__title">Reolink (PoE ou Wi-Fi)</h4>
    <p class="product-card__description">Excellente qualité d'image, support RTSP natif, fonctionne entièrement en local sans cloud obligatoire. La référence pour les installations auto-hébergées avec Gladys.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=Reolink+camera+PoE&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/fr/img/docs/fr/installation/recommended-hardware/tapo_c200.jpg" alt="TP-Link Tapo C200" loading="lazy" />
    </div>
    <span class="product-card__badge">Économique</span>
    <h4 class="product-card__title">TP-Link Tapo C200 / C210</h4>
    <p class="product-card__description">Caméra d'intérieur Wi-Fi économique avec support RTSP. Bonne option pour démarrer ou pour surveiller une pièce sans gros budget.</p>
    <a class="product-card__cta" href="https://www.amazon.fr/s?k=TP-Link+Tapo+C200&tag=gladproj-21" target="_blank" rel="noopener">Voir sur Amazon</a>
  </div>
</div>

## En résumé

Pour équiper une maison classique avec Gladys, je vous recommande de commencer avec :

1. Un **SONOFF Zigbee 3.0 USB Dongle Plus-E** comme coordinateur.
2. Quelques **capteurs de température et humidité Aqara** dans les pièces principales.
3. Des **détecteurs de mouvement Aqara P1** pour la détection de présence.
4. Des **prises connectées Nous A1Z** pour piloter et mesurer la consommation.
5. Des **ampoules Philips Hue ou Innr** pour votre éclairage.
6. Quelques **boutons Aqara Mini Switch** pour piloter le tout physiquement.
7. Un **LiXee ZLinky_TIC** pour suivre la consommation électrique de votre maison.

Vous pourrez ensuite étendre votre installation petit à petit selon vos besoins.

Pour plus de détails sur l'intégration de ces appareils, consultez la page de [l'intégration Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt/).
