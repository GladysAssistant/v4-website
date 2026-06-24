---
title: "Gladys 4.71 : Nuki plus robuste et de belles avancées sur Matter"
description: "Gladys 4.71 apporte une intégration Nuki plus robuste, plusieurs améliorations Matter, et une gestion plus claire du Bluetooth Presence."
authors: pierregilles
image: /img/presentation/gladys-4-71-nuki-matter-fr.jpg
slug: gladys-4-71-nuki-matter
---

Salut à tous,

Cette nouvelle version apporte des améliorations importantes sur **Matter** et **Nuki**, ainsi que plusieurs corrections de bugs.

{/* truncate */}

## 🔐 Nuki v1.0.1 : une intégration plus robuste

L'intégration Nuki a été mise à jour avec plusieurs correctifs importants :

- Au démarrage, Gladys vérifie maintenant que le service est bien configuré avant de démarrer, pour éviter les erreurs dans les logs.
- Les abonnements MQTT sont désormais limités aux seuls appareils Nuki enregistrés, ce qui évite des écoutes inutiles.
- Un scan (HTTP ou MQTT) n'est plus possible si le service n'est pas configuré : le spinner de chargement s'arrête et un message clair s'affiche.
- La saisie du token API dans l'onglet de configuration est maintenant validée : en cas d'erreur, un message s'affiche et le token est effacé automatiquement.

Merci [@ProtZ](https://community.gladysassistant.com/) pour ce travail de fond !

## ⚡ Matter : plusieurs améliorations

Matter continue d'évoluer rapidement dans Gladys :

- **Processus de jumelage clarifié :** les instructions d'appairage sont plus lisibles et accessibles pour les nouveaux utilisateurs.
- **Nouveaux clusters Boolean & Switch :** afin de gérer les IKEA BILRESA et les Aqara Door and Window Sensor P2. J'ai développé cette compatibilité en testant via Matterbridge, je suis preneur de retours pour IKEA / Aqara 🙂
- **Monitoring du filtre HEPA :** les purificateurs d'air compatibles Matter peuvent désormais exposer l'état du filtre HEPA dans Gladys. Merci **@Nagromdark** !

Je continue d'investir dans Matter, et je suis actuellement en train de préparer une grosse mise à jour de la librairie `matter-js` pour permettre plus de stabilité et de compatibilités.

**Matterbridge :** correction d'un bug où la version courante n'était pas correctement sauvegardée, ce qui pouvait provoquer des mises à jour répétées et inutiles du container.

## 📡 Bluetooth Presence : plus clair pour les nouveaux utilisateurs

Désormais, un message indique clairement que cette intégration ne fonctionne qu'avec les **beacons** Bluetooth, et non pas avec les smartphones ni les montres connectées.

## 🛠️ Icônes manquantes pour les capteurs de production d'énergie

Les features de type `ENERGY_PRODUCTION_SENSOR` avaient des icônes manquantes dans certaines vues. C'est maintenant corrigé, merci **@Terdious** !

---

La mise à jour se fait automatiquement. Pour la forcer, rendez-vous dans **Paramètres → Système**. Bon weekend à tous ! 🏠
