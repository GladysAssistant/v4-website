---
id: macos-windows
title: MacOS/Windows
sidebar_label: MacOS/Windows
---

The process is almost the same as on the Raspberry Pi, it's just a container to start.

### Install Docker Desktop

You first need to install [Docker Desktop](https://www.docker.com/products/docker-desktop).

Follow the instructions on Docker website.

Docker Desktop should install Kitematic, a Docker GUI. If it doesn't, you can install get it on [Kitematic](https://kitematic.com/) website.

### Start Gladys

You need to start Kitematic first.

Then, search for "gladysassistant":

![Kitematic gladys assistant](../../static/img/docs/installation/docker-desktop/kitematic-gladysassistant.png)

Select the tag "v4-amd64":

![Kitematic gladys assistant](../../static/img/docs/installation/docker-desktop/kitematic-select-tag.png)

Click on "Create" to start a new container:

![Kitematic gladys assistant](../../static/img/docs/installation/docker-desktop/kitematic-start-gladys.png)

Then open in your browser the address showed by Docker (here, "http://localhost:32768")

![Kitematic gladys assistant](../../static/img/docs/installation/docker-desktop/kitematic-success.png)

Success!
