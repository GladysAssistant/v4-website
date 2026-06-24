---
title: "Gladys 4.72 : IA plus rapide, HomeKit stabilisé et plein de correctifs"
description: "Gladys 4.72 redimensionne les images de caméra pour une IA plus rapide et moins chère, corrige la consommation CPU de HomeKit, ajoute des tags d'intégration et bien plus."
authors: pierregilles
image: /img/presentation/gladys-4-72-faster-ai-stable-homekit-fr.jpg
slug: gladys-4-72-faster-ai-stable-homekit
---

Salut à tous !

Gladys Assistant 4.72.0 est disponible 🎉 — avec une IA plus rapide, un HomeKit plus stable, et une longue liste de correctifs.

{/* truncate */}

## ✨ Nouvelles fonctionnalités

- **Zigbee : support du double on/off pour le bouton IKEA BILRESA.** Le bouton IKEA BILRESA est maintenant pleinement supporté via Zigbee2mqtt.
- **IA : réduction de la latence et des coûts.** Les images de caméras envoyées à l'IA sont maintenant redimensionnées avant envoi, ce qui réduit la latence et le coût des appels.
- **Liste des intégrations : ajout de tags.** Les intégrations sont maintenant taguées (local, cloud, Gladys Plus) pour mieux identifier leur mode de fonctionnement.
- **ZwaveJS UI : sortie de l'alpha.** L'intégration ZwaveJS UI est suffisamment stable, le bandeau d'avertissement alpha est retiré.
- **MQTT : renommage en « Appareils virtuels MQTT »** afin de simplifier la compréhension de cette intégration pour les utilisateurs venant de Home Assistant.
- **Node-RED : avertissement à la suppression du container.** Un message prévient maintenant que supprimer le container Node-RED supprime également toutes les données associées.

## 🐛 Corrections de bugs

- **HomeKit : correction de la consommation CPU élevée liée au mDNS.** Un bug causait une consommation CPU anormalement haute. C'est corrigé en fournissant plusieurs options de mDNS.
- **Nuki : correction du traitement des messages de discovery Home Assistant.** L'intégration écoutait trop largement, ce qui créait des problèmes de performance si beaucoup d'appareils compatibles Home Assistant étaient sur le même broker.
- **CalDAV : affichage des erreurs de configuration** directement dans l'interface.
- **Restauration des sauvegardes : plus robuste.** La sécurité a été renforcée dans la fonction de restauration de sauvegardes Gladys Plus, notamment via l'utilisation de `execFile` pour les commandes OpenSSL.
- **Création de compte utilisateur :** le texte au-dessus du champ « email » est maintenant plus clair.
- **Zigbee2mqtt : correction d'un bug lié au suivi d'énergie** où les appareils ayant des fonctionnalités de suivi de l'énergie étaient affichés en permanence dans l'onglet « Découverte ».
- **Suivi de l'énergie : correction d'un bug lors de la suppression d'un compteur** dans l'intégration Zigbee2mqtt.
- **Matter : correction de la gestion des couleurs** via l'utilisation d'un bitmap numérique pour `optionsMask` dans le contrôle de couleur Matter.

---

Merci à tous les contributeurs de cette version : @bertrandda, @cicoub13, et @David-Digitis.

Pour mettre à jour, vous pouvez attendre 24 h ou aller dans **Paramètres → Système → Mettre à jour**. Bon weekend de Pâques à tous ! 🏠
