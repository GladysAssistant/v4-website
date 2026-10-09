---
id: matterbridge
title: Matterbridge
description: "Conecta a Gladys Assistant los dispositivos que no tienen integración nativa ni externa con Matterbridge: activa el contenedor, instala plugins y vincúlalos mediante Matter."
sidebar_label: Matterbridge
---

:::tip
Para añadir un dispositivo o un servicio que no tiene integración nativa, las [integraciones externas](/es/docs/integrations/external/) son la opción recomendada: se instalan con un clic desde Gladys, y cualquiera puede [crear una](/es/docs/dev/external-integrations/).

La mayoría de los dispositivos para los que antes se recomendaba Matterbridge ya cuentan con una integración externa que se comunica directamente con ellos, sin un puente Matter de por medio: [Overkiz](/es/docs/integrations/external/overkiz/) para Somfy TaHoma, TaHoma Switch y Connexoon, y [Shelly](/es/docs/integrations/external/shelly/) para los dispositivos Shelly. Empieza por [explorar el catálogo](/es/docs/integrations/external/): Matterbridge es la alternativa cuando nada de lo que hay allí cubre tu dispositivo.
:::

[Matterbridge](https://github.com/Luligu/matterbridge) es un puente Matter que te permite conectar dispositivos no compatibles con Matter a un ecosistema Matter. Gracias a sus numerosos plugins, Matterbridge puede exponer a Gladys dispositivos de distintos fabricantes a través del protocolo Matter.

## Activar Matterbridge

En Gladys, ve a `Integraciones / Matterbridge`.

![Lista de integraciones](../../../../../static/img/docs/en/configuration/matterbridge/matterbridge-integration-list.png)

Gladys necesita instalar un contenedor Docker para ejecutar Matterbridge. No te preocupes, todo está automatizado.

Haz clic en el botón **Activar** para iniciar el contenedor de Matterbridge.

![Activar Matterbridge](../../../../../static/img/docs/en/configuration/matterbridge/mattebridge-activate-integration.png)

Al cabo de unos instantes (según tu hardware y tu ancho de banda), Matterbridge estará operativo.

## Uso

Una vez que Matterbridge esté en marcha, puedes acceder a su interfaz web para:

- Instalar plugins
- Configurar tus dispositivos
- Obtener el código de vinculación Matter

Consulta la [documentación oficial de Matterbridge](https://github.com/Luligu/matterbridge) para más detalles sobre la configuración de los plugins y la lista de plugins disponibles.

Cuando un plugin exponga tus dispositivos, vincula el puente en Gladys desde la [integración Matter](/es/docs/integrations/matter/): copia el código de vinculación que muestra Matterbridge y añádelo en `Integraciones / Matter`.
