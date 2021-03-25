---
id: Capacité Restante d'une Cuve
Title: Capacité Restante d'une Cuve
sidebar_label: Capacité Restant d'une Cuve
---

## Projet   :Capacité Restante d'une Cuve

Bonjour la communauté,

Je vous présente mon projet qui est maintenant fonctionnel pour mesurer la quantité d’eau       restante dans ma cuve.

J’ai eu l’idée de ce projet car ma cuve de récupération d’eau de pluie alimente mon arrosage   extérieur, ma machine à laver ainsi que mes WC et il m’était impossible de savoir hormis le fait d’aller voir dehors dans la cuve si il restait de l’eau ou non.

Gladys me permet de basculer en eau de ville si nécessaire plus facilement via une notification qui m'indique que la cuve est presque vide.

Pour ce projet si cela vous intéresse vous aurez besoin : 

[1x Wemos D1 mini](https://fr.aliexpress.com/item/32831353752.html?spm=a2g0o.productlist.0.0.320d4726JS55R7&algo_pvid=311fbbc2-dbcd-44e1-aba1-cfc3433b1087&algo_expid=311fbbc2-dbcd-44e1-aba1-cfc3433b1087-0&btsid=2100bdec16151905161866000e9e72&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_) (coût 2,63€ sur aliexpress) points fort : petit et wifi

[1 Capteur ultrasons JSN-SR04T](https://fr.aliexpress.com/item/4001111845577.html?spm=a2g0o.productlist.0.0.4643549fvFOEci&algo_pvid=6ae38e71-f59f-471e-a9fa-5dd6371492ef&algo_expid=6ae38e71-f59f-471e-a9fa-5dd6371492ef-2&btsid=2100bdec16151906497798331e9e72&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_) point fort : étanche (coût 5,25€ sur aliexpress)

[1x Cable rallonge](https://fr.aliexpress.com/item/32881199463.html?spm=a2g0s.9042311.0.0.52fb6c37C1E4iY) de 3,5m nécessaire pour les distances > à 2,5m si vous souhaitez le raccorder dans la maison ou dans un garage en usb (coût 4,08€ sur aliexpress)

[1 ou 2 boitiers étanches](https://www.leroymerlin.fr/produits/electricite-domotique/rallonge-multiprise-enrouleur-et-cable-electrique/accessoires-de-connexion-boite-de-derivation/boite-de-derivation/boite-de-derivation-etanche-en-saillie-debflex-8-entrees-65104354.html) en fonction du mode d’installation choisi (coût 2,40€ en magasin de bricolage)

__Total : 17,36€__

Pré-requis : 

  - Logiciel Arduino
  - Intégration MQTT dans Gladys

__1ère Etape : Branchement du capteur JSN-SR04T au Wemos D1 mini__


Schéma : 

! [schéma de montage] (../fr/statique/img/projet cuve/schéma.png)
```
GND : GND

VCC : 5V

Echo : Pin D6

Trigger: Pin D7
```

__2ème étape : L’intégration de MQTT dans Gladys__

Suivre la procédure d’installation dans Gladys et une fois la configuration terminée, il faut créer un nouvel appareil MQTT avec les éléments ci-dessous
