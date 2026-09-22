---
id: easypanel
title: Install Gladys Assistant with Easypanel
description: "Install Gladys Assistant using Easypanel, a self-hosted Docker deployment platform: deploy the one-click template and start automating your home."
sidebar_label: Install with Easypanel
---

[Easypanel](https://easypanel.io) is a self-hosted Docker deployment platform, and Gladys Assistant has a one-click deployment template there.

## Deploy Gladys Assistant

- Open your Easypanel panel and create a new project
- Deploy the [Gladys Assistant template](https://easypanel.io/templates/gladys) - Easypanel takes care of the volumes and container configuration for you
- Once deployed, access Gladys on the domain Easypanel assigns to the service

[![Deploy on Easypanel](https://easypanel.io/img/deploy-on-easypanel-40.svg)](https://easypanel.io/templates/gladys)

:::note
Gladys normally uses host networking to scan your local network for smart home devices. Depending on how your Easypanel host is configured, network device discovery may be limited compared to a bare-metal or Docker Compose install - the dashboard and manually configured integrations still work as expected.
:::
