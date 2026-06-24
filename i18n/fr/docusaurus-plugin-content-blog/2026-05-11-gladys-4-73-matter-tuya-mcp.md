---
title: "Gladys 4.73 : grosse mise à jour Matter.js, Tuya Local et serveur MCP"
description: "Gladys 4.73 embarque une grosse mise à jour de Matter.js, les bases de Tuya Local, des améliorations énergie et MCP, et un Airplay plus stable."
authors: pierregilles
image: /img/presentation/gladys-4-73-matter-tuya-mcp-fr.jpg
slug: gladys-4-73-matter-tuya-mcp
---

Salut à tous 👋

Une nouvelle version de Gladys Assistant est disponible : **v4.73.0 !** Cette release apporte plusieurs améliorations importantes autour de l'énergie, de Matter, du support Tuya Local et de l'intégration Airplay.

{/* truncate */}

## 🧩 Mise à jour de Matter.js en 0.16.11

Gladys embarque désormais la dernière version de Matter.js (`0.16.11`). C'est une grosse mise à jour — nous montons depuis la 0.13.0 — qui améliore la compatibilité et la stabilité des appareils Matter.

Pensez à vérifier que vos appareils Matter fonctionnent toujours après cette version, car il y a une migration de fichier de Matter.js qui a pu être capricieuse chez certains utilisateurs.

➡️ [Pull request #2501](https://github.com/GladysAssistant/Gladys/pull/2501)

## 🔌 Tuya Local : première base d'intégration

Cette première PR pose les bases du support **Tuya Local** dans Gladys, permettant à terme de piloter certains appareils Tuya localement, sans dépendre du cloud. Merci [@Terdious](https://community.gladysassistant.com/) !

➡️ [Pull request #2434](https://github.com/GladysAssistant/Gladys/pull/2434)

## ⚡ Gestion de l'énergie et optimisation du MCP

Cette version ajoute de nouvelles fonctionnalités autour de l'énergie et améliore les performances du MCP (Model Context Protocol), utilisé par les clients IA. Merci [@bertrandda](https://community.gladysassistant.com/) !

➡️ [Pull request #2522](https://github.com/GladysAssistant/Gladys/pull/2522)

## 🔊 Remplacement de la librairie AirTunes

La librairie `airtunes` a été remplacée par `airplay-sender`, afin d'améliorer la stabilité et la maintenance de la fonctionnalité Airplay. Merci encore @bertrandda !

➡️ [Pull request #2439](https://github.com/GladysAssistant/Gladys/pull/2439)

---

Comme d'habitude, vous pouvez mettre à jour Gladys directement depuis l'interface, ou attendre que Gladys se mette à jour tout seul. Merci à tous les contributeurs 🙌

🔗 [Changelog complet](https://github.com/GladysAssistant/Gladys/compare/v4.72.1...v4.73.0)
