---
title: "Gladys 4.74 : délai avant/après le lever et le coucher du soleil ☀️"
description: "Gladys 4.74 permet d'ajouter un délai avant ou après le lever et le coucher du soleil dans vos scènes, ajoute le Philips Hue Dimmer v2, et corrige des bugs Matter."
authors: pierregilles
image: /img/presentation/gladys-4-74-sunrise-sunset-offset-fr.jpg
slug: gladys-4-74-sunrise-sunset-offset
---

Salut à tous,

Une nouvelle version de Gladys Assistant est disponible, avec plusieurs correctifs et améliorations autour de Matter, Zigbee2MQTT et des scénarios liés au soleil ☀️

{/* truncate */}

## ✨ Nouveautés

### 🌅 Délai avant/après le lever et le coucher du soleil

Il est maintenant possible de configurer un délai avant ou après le lever et le coucher du soleil dans vos scènes. Quelques exemples d'utilisation :

- Allumer les lumières **30 minutes avant le coucher du soleil**
- Fermer les volets **15 minutes après le coucher du soleil**
- Déclencher un scénario **avant le lever du soleil**

Merci [@cicoub13](https://community.gladysassistant.com/) pour cette contribution 🙌

### 💡 Zigbee2MQTT : ajout du Philips Hue Dimmer Switch v2

Le support de la télécommande **Philips Hue Dimmer Switch v2** a été ajouté dans Zigbee2MQTT. Vous pouvez désormais l'utiliser facilement dans vos scènes et automatisations Gladys.

## 🛠 Correctifs

- **Matter : correction d'un bug 409 sur certains appareils.** Correction d'un problème pouvant provoquer une erreur `409` lors de la mise à jour d'appareils Matter partageant le même identifiant unique.
- **Gladys Plus : correction d'un bug d'association au premier login.** Correction d'un problème pouvant empêcher l'association correcte d'un utilisateur avec Gladys Plus lors de la première connexion.

---

Gladys se met à jour automatiquement, sinon vous pouvez le faire en un clic dans les paramètres.

👉 Voir le [changelog complet sur GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.74.0). Merci à tous les contributeurs !
