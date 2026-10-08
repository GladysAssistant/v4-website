---
title: "Matterbridge + IA: haz que cualquier dispositivo funcione con Gladys, sin escribir código"
description: "Combinando Matterbridge con la IA, podemos hacer que casi cualquier dispositivo sea compatible con Gladys, sin escribir código. Esta es la visión."
authors: pierregilles
image: /img/presentation/matterbridge-ai-revolution-en.jpg
slug: matterbridge-ai-revolution
---

¡Hola a todos!

La semana pasada pasé mucho tiempo trasteando con Matterbridge y tuve un verdadero momento "eureka" que quería compartir contigo: vamos a poder hacer que **cualquier dispositivo** sea compatible con Matter, y por tanto con Gladys, sin escribir una sola línea de código.

{/* truncate */}

:::info[Este artículo ya no describe el enfoque recomendado]
Desde la publicación de este artículo, Gladys cuenta con **integraciones externas**: integraciones empaquetadas como contenedores Docker, publicadas en GitHub e instalables con un clic desde el catálogo dentro de Gladys. Ahora son la forma recomendada de añadir un dispositivo que no es compatible de forma nativa, y cualquiera puede crear una, en cualquier lenguaje y sin revisión.

👉 [Explora el catálogo de integraciones externas](/es/docs/integrations/external/) o [aprende a crear una](/es/docs/dev/external-integrations/).

Este artículo se conserva como referencia.
:::

## Un poco de contexto

Ya te he hablado de Matterbridge: un proyecto que permite instalar plugins para llevar a Matter dispositivos que no son compatibles con Matter. Hoy, Matterbridge ya te permite usar en Gladys:

- [Persianas Somfy](/es/docs/integrations/external/overkiz/)
- [Dispositivos Shelly](/es/docs/integrations/external/shelly/) (generaciones 1, 2 y 3)
- y pronto, los robots aspiradores Roborock

Pero Matterbridge todavía es joven y no tiene un plugin para todo.

## El problema que resuelve

En Gladys siempre he optado por crear grandes integraciones a medida, dedicando mucho tiempo a la experiencia de usuario y a la interfaz. El problema es que algunos de ustedes tienen necesidades muy específicas: dispositivos de nicho, que a veces ni siquiera se venden ya. Para esos productos, es difícil justificar el tiempo de desarrollo de una integración nativa que solo serviría a un puñado de usuarios.

**¿Y si esas integraciones pudieran ser simplemente plugins de Matterbridge, desarrollados por una IA?**

El sistema de plugins de Matterbridge está bien definido, bien documentado y lleno de ejemplos. Y estas integraciones a menudo ya existen en otros proyectos de código abierto (Node-RED, Home Assistant): basta con pedirle a la IA que traduzca, por ejemplo, un plugin de Node-RED a un plugin de Matterbridge. No hay nada que inventar, ¡es solo "traducir código"!

## Lo que he probado

He creado un plugin de Matterbridge para mi aire acondicionado Mitsubishi, **sin escribir una sola línea de código.** Te lo enseño todo aquí:

[![Matterbridge + IA en acción](../../../static/img/articles/matterbridge-ai-revolution/youtube.jpg)](https://youtu.be/N2xrQtuKstM)

## ¿Y ahora qué?

El siguiente paso lógico: **¿y si automatizáramos por completo la creación de plugins de Matterbridge?** Imagina una "fábrica de plugins", dirigida por Claude Code y ejecutándose en un servidor, que recogería los tickets de GitHub y desarrollaría plugins sin intervención humana.

![El concepto de fábrica de plugins de Matterbridge](../../../static/img/articles/matterbridge-ai-revolution/01.jpg)

Con un sistema así, podríamos industrializar el desarrollo de integraciones y reducir la distancia entre Gladys y proyectos como Home Assistant. Sinceramente creo que es una revolución, y confirma mi decisión de apostar fuerte por Matter este año, porque es realmente el futuro de la casa conectada.

¿Qué opinas?
