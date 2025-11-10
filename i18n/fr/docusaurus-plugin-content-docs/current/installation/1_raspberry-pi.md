---
id: raspberry-pi
title: Installation sur un Raspberry Pi
sidebar_label: Installation sur Raspberry Pi
---

:::warning
Historiquement, je recommandais l’utilisation des Raspberry Pi pour installer Gladys.

Cependant, ils sont de moins en moins compétitifs pour plusieurs raisons :

- Un coût global élevé une fois l’alimentation, le boîtier et le SSD ajoutés.
- Une fiabilité limitée avec une carte micro-SD et une installation complexe avec un SSD. En plus, même avec un SSD en USB, les performances restent bien inférieures à celles d'un mini-PC équipé d’un SSD NVMe intégré.
- Un processeur moins performant par rapport aux équivalents Intel à basse consommation.
- Des problèmes récurrents d’alimentation lorsqu’on ajoute un dongle Zigbee et un SSD.

Ma recommandation est d'acheter un mini-PC. Il y a des super options pour pas cher sur Amazon, AliExpress, etc.

De mon côté, je propose un [kit de démarrage](/fr/starter-kit/) dès 119,99€ avec Gladys pré-installé.
:::

Pour installer Gladys sur un Raspberry Pi, je vous conseille d'installer Raspberry Pi OS dans sa dernière version sur le Raspberry Pi, puis d'installer Gladys avec notre tutoriel [Docker](/fr/docs/installation/docker).
