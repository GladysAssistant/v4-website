---
title: "Gladys 4.68 : Matterbridge en un clic, intégrations favorites et Tasmota amélioré"
description: "Gladys 4.68 permet de lancer Matterbridge en un clic, de marquer vos intégrations favorites, et améliore la découverte et le suivi énergétique Tasmota."
authors: pierregilles
image: /img/presentation/gladys-4-68-matterbridge-fr.jpg
slug: gladys-4-68-matterbridge
---

Salut à tous,

Une nouvelle version de Gladys est disponible, avec plusieurs améliorations et corrections, dont la possibilité de lancer **Matterbridge** en un clic, ouvrant la porte à encore plus d'appareils compatibles.

{/* truncate */}

## 🆕 Nouveautés

### Intégration Matterbridge

Gladys vous permet maintenant de lancer un **container Matterbridge en un clic**, ouvrant la porte à encore plus d'appareils compatibles.

![L'intégration Matterbridge dans Gladys](../../../static/img/articles/gladys-4-68-matterbridge/01.jpg)

Si vous voulez savoir comment j'ai développé cette intégration avec l'IA, je vous en dis plus sur YouTube :

[![Développer l'intégration Matterbridge avec l'IA](../../../static/img/articles/gladys-4-68-matterbridge/youtube.jpg)](https://youtu.be/gLtJE3dgEIA)

📖 [La documentation Matterbridge](/fr/docs/integrations/matterbridge/)

⚠️ Attention : si vous avez déjà lancé Matterbridge sur votre instance, le lancer via Gladys peut entraîner un conflit de port. Il n'y a pas de réel intérêt à lancer Matterbridge via Gladys si vous l'avez déjà mis en place vous-même en dehors de Gladys.

### Favoris pour les intégrations

Vous pouvez désormais marquer vos intégrations préférées en favoris pour les retrouver plus facilement.

### Améliorations Tasmota

Découverte automatique de l'IP via MQTT, lien direct vers l'interface de l'appareil, et un meilleur tri lors de la découverte.

## 🐛 Corrections & améliorations

- **Widget température dans les pièces :** les valeurs aberrantes de température sont désormais exclues, et la conversion en Fahrenheit pour la valeur maximale est corrigée.
- **Chat :** les espaces dans les messages sont maintenant correctement préservés grâce au `pre-wrap` :

![Correction des espaces dans le chat](../../../static/img/articles/gladys-4-68-matterbridge/02.png)

- **DuckDB** mis à jour en 1.4.4.
- Correction de fautes de frappe dans les traductions.
- Amélioration de la robustesse du service MCP.

---

Merci à tous les contributeurs : @bertrandda, @mutmut, @Will_71, @qleg et @Terdious pour ce beau travail collaboratif ! 🙌

Bonne mise à jour ! 🚀
