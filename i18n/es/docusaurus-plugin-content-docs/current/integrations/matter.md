---
id: matter
title: Integrar dispositivos Matter en Gladys Assistant
description: "Integra dispositivos Matter en Gladys Assistant: controla luces, enchufes, persianas, termostatos y sensores de distintos fabricantes."
sidebar_label: Matter
---

El protocolo Matter es una pequeña revolución en el mundo del hogar inteligente: por fin permite una comunicación unificada entre dispositivos inteligentes de distintos fabricantes.

:::tip[¿Controlador, border router, puente?]
¿No tienes claro qué necesitas para tus dispositivos Matter y Thread? Lee [¿Necesitas un hub Matter?](/es/matter-hub/)
:::

Gladys Assistant es compatible con Matter, así que puedes integrar dispositivos Matter en tu instalación. Gladys actúa como tu **controlador Matter** y se ejecuta en tu propia máquina: para un dispositivo Matter por Wi-Fi o Ethernet, no necesitas comprar ningún hub. Los dispositivos Thread son la excepción, y se explican más abajo. Si te preguntas qué equipo necesitas, lee nuestra guía sobre [qué hub Matter elegir](/es/matter-hub/).

## Compatibilidad

Gladys admite las siguientes funciones:

- **Encendido/apagado**: enchufes, luces, aire acondicionado, calefacción, ventiladores, etc.
- **Luces**: control de brillo y color.
- **Persianas / cortinas**: abrir, cerrar, pausar + control de posición.
- **Termostatos**: ajuste de la temperatura objetivo.
- **Aires acondicionados**: ajuste de la temperatura objetivo.
- **Sensores de movimiento**
- **Sensores de luminosidad**
- **Sensores de temperatura**
- **Sensores de humedad**

Si tienes un dispositivo que todavía no es compatible, no dudes en compartirlo en el [foro](https://community.gladysassistant.com/) y trabajaremos para añadirlo.

## Matter vs. Thread

Matter es un **protocolo de aplicación**, es decir, define cómo se comunican los dispositivos a nivel de los mensajes intercambiados: qué tipos de órdenes son posibles (por ejemplo, encender una luz u obtener la temperatura), en qué formato se envían esos mensajes y cómo gestionan los dispositivos su estado, el emparejamiento o la seguridad.

En resumen, Matter se ocupa del "qué" y del "cómo" de las interacciones entre dispositivos inteligentes.

Thread, en cambio, es un **protocolo de red mallada de bajo nivel**, diseñado para la comunicación entre dispositivos inalámbricos de bajo consumo. Es una alternativa a Zigbee o al Wi-Fi, pero, a diferencia de ellos, se basa en estándares IP (IPv6), lo que lo hace compatible con Internet de forma nativa.

Thread se encarga de "cómo viajan" los mensajes, es decir, de transportarlos a través de una red inalámbrica fiable, rápida y segura.

Algunos dispositivos Matter usan Thread como protocolo de red, ¡pero no todos! Los dispositivos Matter también pueden usar Wi-Fi, Ethernet o incluso Bluetooth.

### Si tu dispositivo ya está en tu red

Si tu dispositivo es compatible con Matter y usa Wi-Fi o Ethernet, ya está en tu red y se puede usar directamente en Gladys.

Es el caso de todos los puentes Matter que ofrecen fabricantes como Philips Hue, IKEA con su hub DIRIGERA, etc.

También es el caso de todos los dispositivos Wi-Fi, como enchufes o bombillas inteligentes conectados directamente al Wi-Fi.

### Si tu dispositivo no es compatible con Matter

No necesitas Matter para usar un dispositivo en Gladys. Si tu dispositivo o servicio no tiene una integración nativa, echa un vistazo al [catálogo de integraciones externas](/es/docs/integrations/external/): integraciones de la comunidad que se instalan con un clic, sin línea de comandos ni archivo de configuración.

Y si la que necesitas todavía no existe, puedes crearla: consulta la [guía para desarrolladores de integraciones externas](/es/docs/dev/external-integrations/).

### Si tu dispositivo solo usa Thread

Si tu dispositivo usa Thread, tienes que conectarlo a un router Thread antes de poder usarlo en Gladys.

Un router Thread (o "Thread Border Router") conecta tus dispositivos Thread con la red de tu casa. **Gladys no es un Thread Border Router**: es un controlador Matter, así que un dispositivo Thread necesita uno en tu red.

Muchos dispositivos comerciales son routers Thread:

- Apple TV 4K Ethernet 128 GB
- Apple HomePod
- Google Nest Hub Max
- Google Nest Hub (2.ª generación)
- Google Nest Wi-Fi Pro
- Google TV Streamer 4K
- Amazon Echo (4.ª generación)
- Amazon Echo Hub
- Amazon Echo Studio
- Amazon Echo Show (21, 15, 10 y 8)

También puedes montar tu propio router Thread con un dongle USB Thread y OpenThread.

:::warning
Hoy en día, un Thread Border Router por sí solo no basta para añadir un dispositivo Matter over Thread a Gladys. El emparejamiento de un dispositivo de este tipo pasa por Bluetooth, que Gladys todavía no gestiona, así que el emparejamiento inicial debe hacerse con un **controlador Matter completo**: un Apple TV, un Amazon Echo compatible con Matter o un dispositivo Google Nest. Una vez emparejado el dispositivo allí, pide a ese controlador un nuevo código de emparejamiento y añade el dispositivo a Gladys, que lo controlará en local.

Esto también significa que un dongle Thread flasheado con OpenThread, o la radio Thread de un coordinador multiprotocolo como el SMLIGHT SLZB-MR1 o el SONOFF Dongle Max, enruta el tráfico Thread pero no sustituye a ese controlador.

Esto podría cambiar en el futuro si se añade el emparejamiento por Bluetooth a Gladys.
:::

## Configuración en Gladys Assistant

Ve a la pestaña "Integraciones" y luego a "Matter".

Primero, activa Matter en los ajustes:

![Activar Matter en los ajustes de Gladys](../../../../../static/img/docs/en/configuration/matter/enable-matter-settings.png)

:::note
Matter funciona con IPv6, así que IPv6 debe estar activado en tu router y en tu máquina.
Gladys muestra las interfaces de red disponibles en tu máquina. Si no encuentra ninguna, mostrará un mensaje de error.
:::

Después, ve a la pestaña "Añadir un dispositivo" para emparejar un nuevo dispositivo Matter:

![Añadir un dispositivo Matter](../../../../../static/img/docs/en/configuration/matter/add-matter-device.png)

Para añadir un dispositivo Matter, necesitarás un código de emparejamiento de 11 dígitos.

:::note
Si tu dispositivo ya está conectado a otro controlador Matter, necesitarás un código de emparejamiento proporcionado por ese controlador, no el código original del dispositivo. **Ejemplo:** tengo un enchufe inteligente Eve conectado a mi Apple TV 4K Ethernet. El código de emparejamiento está disponible en la app "Casa" de iOS.
:::

Una vez emparejado el dispositivo, ve a la pestaña "Dispositivos" para añadirlo a Gladys.

En esta pestaña verás todos los dispositivos Matter emparejados y los que ya se han añadido a Gladys:

![Guardar el dispositivo Matter en Gladys](../../../../../static/img/docs/en/configuration/matter/save-matter-device-to-gladys.png)

Una vez añadido, puedes usar el dispositivo en tu panel de control y en tus escenas.

## Ejemplo: controla tu aire acondicionado desde el panel de control

En el panel de control, ahora puedes añadir un widget "Dispositivos" y seleccionar tu aire acondicionado Matter:

![Añadir un aire acondicionado Matter al panel de control](../../../../../static/img/docs/en/configuration/matter/add-ac-to-dashboard.png)

Después de guardar el panel de control, puedes controlar este aire acondicionado:

![Controlar tu aire acondicionado Matter en Gladys](../../../../../static/img/docs/en/configuration/matter/control-ac-dashboard.png)
