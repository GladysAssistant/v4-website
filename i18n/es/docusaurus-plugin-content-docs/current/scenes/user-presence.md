---
id: user-presence
title: Definir la presencia de un usuario en una escena
description: "Define la presencia o ausencia de un usuario en una escena de Gladys Assistant para controlar las automatizaciones de llegada y salida de casa desde cualquier fuente de presencia."
sidebar_label: Presencia del usuario
---

# Presencia de los usuarios en el panel

En el panel, Gladys te permite mostrar qué usuarios están presentes o ausentes de casa.

![Presencia de los usuarios en el panel](../../../../../static/img/docs/en/scenes/user-presence/dashboard-box.png)

Puedes usar escenas para definir la presencia o la ausencia de un usuario.

- Puedes hacerlo manualmente, lanzando la escena cuando sales o llegas a casa (útil, pero quizá algo limitante; ¡es mejor automatizarlo!).
- O bien automatizar la detección de presencia: puede ser un botón en la entrada, una detección de movimiento si vives solo, una app Tasker que envíe un mensaje MQTT cuando te conectas al Wi-Fi de casa o un localizador Nut. ¡Tú eliges!

Tenemos tutoriales sobre la [detección por Bluetooth](/es/docs/integrations/bluetooth/) y el [escaneo de red](/es/docs/integrations/lan-manager/).

## Definir al usuario como "presente en casa" en una escena

El objetivo de esta acción es decirle a Gladys: "Se ha detectado al usuario en casa".

Con esta información, Gladys podrá:

- Activar un evento de "vuelta a casa" si el usuario estaba marcado antes como ausente.
- No hacer nada si el usuario ya estaba en casa.

Para configurarlo, puedes crear en una escena la acción "usuario visto en casa":

![Usuario visto en casa](../../../../../static/img/docs/en/scenes/user-presence/user-seen-at-home.png)

## Definir al usuario como "fuera de casa" en una escena

El objetivo de esta acción es informar a Gladys: "El usuario no está en esta casa".

Con esta información, Gladys podrá:

- Activar un evento de "salida de casa" si el usuario estaba marcado antes como presente en casa.
- No hacer nada si el usuario no estaba marcado como presente o si ya estaba marcado como ausente de **esta** casa.

Para configurarlo, puedes crear en una escena la acción "el usuario ha salido de casa":

![El usuario ha salido de casa](../../../../../static/img/docs/en/scenes/user-presence/user-left-home.png)
