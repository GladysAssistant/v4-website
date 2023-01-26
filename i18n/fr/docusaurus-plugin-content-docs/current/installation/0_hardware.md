---
id: hardware
title: Le matériel recommandé
sidebar_label: Le matériel
slug: /
---

Gladys Assistant est un programme qui tourne sur n'importe quelle machine Linux: un PC sous Ubuntu, un Raspberry Pi, un NAS, un VPS, un serveur...

Récapitulons les différentes options :

- **Un PC sous Ubuntu**: De plus en plus d'utilisateurs font tourner Gladys sur un mini-PC, comme un Dell Optiplex 3040, un Intel NUC, ou n'importe quel ordinateur Linux. Ces machines sont très stables, durables, et trouvables autour de 100€ d'occasions ou reconditionnés. A mon sens, en 2023, c'est une des options les plus intéressantes pour installer Gladys.

Ma vidéo sur le sujet :

<div class="videoContainer" style={{marginBottom: '20px' }}>
<iframe class="video" src="https://www.youtube.com/embed/6pBeBcgLvj0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Plus d'informations dans [ce sujet](/fr/docs/installation/docker/).

- **Un Raspberry Pi**: Il est possible d'installer Gladys sur un Raspberry Pi grâce à notre image Raspberry Pi OS toute prête. Cependant, avec la pénurie de semi-conducteurs, les Raspberry Pi sont compliqués à trouver et sont devenus très cher ! Nous ne recommandons pas d'utiliser une micro-SD pour stocker vos données (car les micro-SD sont très facilement corrompues), il faut passer par un SSD. Cette manipulation n'est pas forcément facile à faire, et à partir du moment où vous connectez un SSD + un dongle Zigbee par exemple, vous pouvez avoir des problèmes d'alimentations car le Pi n'est pas fait pour connecter autant d'appareils. C'est pour ça qu'aujourd'hui, passer par un mini-PC peut-être une option plus simple et plus stable.

Plus d'informations dans [ce sujet](/fr/docs/installation/raspberry-pi/).

- **Un NAS** : Gladys tourne sur un NAS, que ce soit un NAS Unraid ([tutoriel ici](/fr/docs/installation/unraid/)), ou un NAS Synology ([tutoriel ici](/fr/docs/installation/synology/)).

Un NAS est souvent une machine très stable, et durable. C'est une très bonne option pour commencer sur Gladys.

Si vous avez des questions sur le matériel à utiliser, venez nous les poser sur la [communauté en ligne](https://community.gladysassistant.com/).
