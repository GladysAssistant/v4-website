---
id: macos-windows
title: MacOS/Windows
sidebar_label: MacOS/Windows
---

Le process est presque le même que pour Raspberry Pi.

### Install Docker Desktop

Vous devez d'abord installer [Docker Desktop](https://www.docker.com/products/docker-desktop).

Suivez les instructions sur leur site.

Docker Desktop devrait normalement installer Kitematic. Si ce n'est pas le cas, rendez-vous sur le site de [Kitematic](https://kitematic.com/).

### Lancer Gladys

Vous devez lancer Kitematic.

Puis, dans l'interface, cherchez "gladysassistant":

<img src="/img/docs/installation/docker-desktop/kitematic-gladysassistant.png" alt="Kitematic gladys assistant" class="img-responsive" />

Sélectionnez le tag "4.0.0-beta-amd64":

<img src="/img/docs/installation/docker-desktop/kitematic-select-tag.png" alt="Kitematic gladys assistant" class="img-responsive" />

Cliquez sur "Create" pour lancer un nouveau container:

<img src="/img/docs/installation/docker-desktop/kitematic-start-gladys.png" alt="Kitematic gladys assistant" class="img-responsive" />

Puis lancez dans votre navigateur l'URL indiqué par Kitematic (ici, "http://localhost:32768")

<img src="/img/docs/installation/docker-desktop/kitematic-success.png" alt="Kitematic gladys assistant" class="img-responsive" />

Hop, vous avez accès à Gladys!
