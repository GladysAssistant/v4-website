---
id: matter-bridge
title: Expón tus dispositivos de Gladys a Apple Home, Google Home y Alexa con Matter
description: "Convierte Gladys Assistant en un puente Matter: emparéjalo con Apple Home, Google Home, Amazon Alexa, SmartThings o Home Assistant y controla desde allí tus dispositivos Zigbee, Z-Wave o Wi-Fi, 100 % en local."
sidebar_label: Puente Matter
---

La integración **Puente Matter** convierte Gladys en un puente Matter. Una vez emparejado, tus dispositivos de Gladys aparecen en la aplicación Matter que elijas (Apple Home, Google Home, Amazon Alexa, SmartThings, Home Assistant...), **sea cual sea su protocolo**: Zigbee, Z-Wave, Wi-Fi, MQTT... La conexión Matter entre Gladys y tu **controlador Matter** (concentrador doméstico, Nest, Echo...) se queda en tu red local, y el puente no necesita una suscripción a Gladys Plus.

Aun así, conviene saber tres cosas:

- El control desde la aplicación no siempre es local: fuera de casa, y con algunos ecosistemas (Google Home, por ejemplo) incluso en casa, tu orden pasa por la nube del proveedor de la aplicación antes de llegar a tu controlador, que luego habla con Gladys en local.
- Tu aplicación Matter puede necesitar su propia cuenta: un ID de Apple para Apple Home, una cuenta de Google para Google Home, una cuenta de Amazon para Alexa, una cuenta de Samsung para SmartThings.
- El puente no hace local un dispositivo: si Gladys controla un dispositivo a través de un servicio en la nube (una integración en la nube, por ejemplo), ese dispositivo sigue dependiendo de esa nube cuando lo controlas desde una aplicación Matter.

:::tip[¿Matter, Matterbridge o Puente Matter?]
Tres integraciones tienen nombres parecidos, pero no van en la misma dirección:

- **Puente Matter** (esta página): dispositivos de Gladys → tus aplicaciones Matter (Apple Home, Google Home, Alexa...).
- [Matter](/es/docs/integrations/matter/): dispositivos Matter → Gladys. Gladys es el controlador Matter.
- [Matterbridge](/es/docs/integrations/matterbridge/): dispositivos expuestos por el proyecto open source Matterbridge y sus plugins → Gladys.

El Puente Matter y Matterbridge no pueden estar activados a la vez: ambos necesitan el puerto 5540.

:::

## Requisitos

- **IPv6 en tu red local.** Matter se basa en IPv6. La página de la integración te indica si se ha detectado una interfaz IPv6 en la máquina donde se ejecuta Gladys.
- **Gladys debe usar la red del host.** La instalación estándar de Gladys (`network_mode: host` en Docker) ya lo hace. El puente escucha en el puerto UDP **5540**, el puerto Matter estándar y el único que Amazon Alexa sabe descubrir. Funciona a la vez que la integración [Matter](/es/docs/integrations/matter/), que usa otro puerto, pero **no a la vez que la integración [Matterbridge](/es/docs/integrations/matterbridge/)**, que también necesita el puerto 5540.
- **Una cuenta de administrador.** La integración solo es visible para los administradores de Gladys.
- **Un controlador Matter en la misma red.** La aplicación sola no siempre basta: la mayoría de los ecosistemas necesitan un dispositivo que haga de controlador Matter.
  - Apple Home: un iPhone o iPad (iOS 18 o posterior) puede añadir y controlar el puente en casa sin concentrador. Se recomienda un concentrador doméstico (Apple TV o HomePod): es necesario para controlar tus dispositivos fuera de casa y para ejecutar automatizaciones.
  - Google Home: un dispositivo de Google compatible con Matter (Nest Hub, altavoz Nest, Google TV Streamer...).
  - Amazon Alexa: un Echo compatible con Matter.
  - SmartThings: un hub SmartThings, o un dispositivo Samsung que haga de hub.
  - Home Assistant: su servidor Matter.

El emparejamiento se hace por la red: a diferencia de algunos dispositivos Matter, el puente no necesita Bluetooth.

## Activar el puente

En Gladys, ve a `Integraciones` y haz clic en `Puente Matter` (categoría «Asistentes de voz e IA»).

Comprueba que la página muestra `Hay una interfaz IPv6 disponible en esta máquina ✅` y haz clic en `Activar el puente Matter`.

Si la integración [Matterbridge](/es/docs/integrations/matterbridge/) está activada, este botón está desactivado y la página explica por qué: desactiva primero la integración Matterbridge.

El puente se inicia en unos segundos. Si no puede iniciarse, el error se muestra en la página bajo `El puente Matter no ha podido iniciarse:`.

Después, el puente se vuelve a iniciar automáticamente cada vez que Gladys se reinicia.

## Elegir los dispositivos expuestos

En la sección `Dispositivos expuestos`, elige:

- `Exponer todos los dispositivos compatibles` (por defecto): se exponen todos los dispositivos compatibles, incluidos los que añadas más adelante.
- `Exponer solo los dispositivos seleccionados`: elige los dispositivos que quieres exponer en la lista. Cada dispositivo se muestra con las funciones Matter que tendrá (luz, enchufe, temperatura...).

Haz clic en `Guardar`. Los cambios se aplican de inmediato y tus emparejamientos se conservan: no hace falta volver a emparejar el puente.

Después, Gladys mantiene el puente al día por sí solo:

- Un **nuevo dispositivo compatible** se añade al puente (en modo «todos»).
- Un **dispositivo renombrado** se renombra en tus aplicaciones Matter y conserva allí su habitación y sus automatizaciones.
- Un **dispositivo eliminado** (o quitado de la selección) desaparece del puente.

:::note
Matter limita los nombres a 32 caracteres: los nombres de dispositivos más largos se recortan en tus aplicaciones Matter.
:::

## Emparejar Gladys con tu aplicación Matter

Mientras el puente no esté emparejado, la sección `Emparejamiento` muestra un **código QR** y un **código de emparejamiento** de 11 cifras (`1234-567-8901`).

En tu aplicación Matter, añade un nuevo dispositivo Matter y escanea el código QR, o introduce el código de emparejamiento:

- **Apple Home**: toca `+` > `Añadir accesorio` y escanea el código QR (o toca `Más opciones...` para introducir el código).
- **Google Home**: toca `+` > `Dispositivo` > `Dispositivo compatible con Matter` y escanea el código QR.
- **Amazon Alexa**: toca `+` > `Dispositivo` > `Matter`, sigue los pasos y escanea el código QR.
- **SmartThings** y **Home Assistant**: usa la opción «añadir un dispositivo Matter» de la aplicación.

:::warning[Accesorio no certificado]
Gladys no es un producto Matter certificado. Durante el emparejamiento, tu aplicación te avisa de que el accesorio **no está certificado**: confirma que quieres añadirlo de todos modos (`Añadir de todos modos` en Apple Home, por ejemplo).
:::

La aplicación encuentra entonces el «Gladys Bridge» e importa los dispositivos expuestos. Puede que te pida asignar una habitación a cada dispositivo.

Ya puedes controlar tus dispositivos de Gladys desde tu aplicación Matter, en tus automatizaciones y por voz con Siri, el Asistente de Google o Alexa 🗣️

La sincronización funciona en ambos sentidos:

- Cuando un dispositivo cambia de estado en Gladys (una medida de un sensor, una luz encendida desde el panel o una escena...), el nuevo estado se envía a tus aplicaciones Matter.
- Cuando controlas un dispositivo desde una aplicación Matter, Gladys envía la orden al dispositivo, exactamente igual que desde el panel de Gladys.

## Añadir Gladys a otro ecosistema

Una vez emparejado el puente, el código QR se oculta y la página muestra los ecosistemas con los que Gladys está emparejado (`Gladys está emparejado con:`).

Matter permite emparejar un mismo puente con varias aplicaciones (multi-admin). Para añadir Gladys a un segundo ecosistema:

1. Abre el modo de emparejamiento del puente desde una aplicación ya emparejada. Por ejemplo, en Apple Home: abre los ajustes del puente y toca `Activar modo de emparejamiento`. La aplicación te da un nuevo código de emparejamiento.
2. En la otra aplicación, añade un dispositivo Matter e introduce (o escanea) este nuevo código.

## Dispositivos compatibles

| Dispositivo de Gladys | Aparece en Matter como |
| --- | --- |
| 💡 Luz (encendido/apagado, brillo, temperatura de color, color) | Luz: encendido/apagado, regulable, temperatura de color o color, según las funciones de la luz |
| 🔌 Interruptor / enchufe (encendido/apagado) | Enchufe. Un interruptor de varios canales da un enchufe por canal |
| 🪟 Persiana, cortina (posición y/o abrir / cerrar / parar) | Cubierta de ventana (persiana enrollable o cortina) |
| 🚪 Sensor de apertura | Sensor de contacto |
| 🚶 Sensor de movimiento o de presencia | Sensor de presencia |
| 💧 Detector de fugas | Detector de fugas de agua |
| 🔥 Detector de humo y/o de CO | Alarma de humo / CO |
| 🌡️ Sensor de temperatura | Sensor de temperatura (°F y K se convierten a °C) |
| 💦 Sensor de humedad | Sensor de humedad |
| ☀️ Sensor de luminosidad | Sensor de luminosidad (lux) |
| 🧭 Sensor de presión | Sensor de presión |
| 🌫️ Sensores de CO2, PM2.5 y PM10 | Sensor de calidad del aire, con una calidad global calculada a partir de las PM2.5 (o del CO2 si no hay PM2.5) |
| 🔋 Batería | Nivel de batería del dispositivo, con un aviso de batería baja por debajo del 20 % |

Un dispositivo con varias funciones (por ejemplo un sensor de temperatura, humedad y batería) se expone como un único dispositivo del puente. La mayoría de las aplicaciones lo muestran como un solo accesorio, algunas muestran un recuadro por función (temperatura, humedad, batería...).

Algunos límites que conviene conocer:

- En las luces, los enchufes y las persianas solo se exponen las funciones controlables: una luz o un enchufe de solo lectura no se expone.
- Un dispositivo que solo tiene batería no se expone.
- Las persianas se controlan solo en altura: la inclinación no está soportada.
- Los termostatos y aires acondicionados, cerraduras, ventiladores, botones, sirenas, medidores de energía, robots aspiradores y reproductores multimedia todavía no están soportados.

Añadimos regularmente nuevos tipos de dispositivos según los comentarios de la comunidad. ¡No dudes en proponer los tuyos en el [foro de Gladys](https://community.gladysassistant.com/)!

## Desactivar o restablecer el puente

- `Desactivar el puente Matter` desconecta el puente pero **conserva sus emparejamientos**: cuando lo vuelves a activar, tus aplicaciones Matter encuentran el mismo puente y los mismos dispositivos.
- `Restablecer el puente` sirve cuando ya no puedes emparejar el puente. Se borran todos los emparejamientos de Gladys: el puente deja de responder a los ecosistemas con los que estaba emparejado. Puede que quede una antigua entrada «Gladys Bridge» en tus aplicaciones Matter: **elimínala allí** y luego vuelve a añadir el puente con su **nuevo código de emparejamiento**. Tu selección de dispositivos expuestos se conserva.

## Solución de problemas

- **No se detecta ninguna interfaz IPv6**: activa IPv6 en tu router y en la máquina donde se ejecuta Gladys, y luego reinicia Gladys.
- **La aplicación no encuentra el puente**: comprueba que tu teléfono y Gladys están en la misma red (no en una Wi-Fi de invitados) y que Gladys usa la red del host.
- **`El puente Matter no se ha iniciado: el puerto 5540, el puerto Matter estándar, ya está siendo utilizado por otro programa`**: otro puente Matter funciona en la máquina (un Matterbridge instalado fuera de Gladys, otro servidor Matter...). Detenlo o cámbiale el puerto y, a continuación, desactiva y vuelve a activar el puente Matter.
- **`El puente Matter no se ha iniciado: la integración Matterbridge está activada`**: desactiva la integración [Matterbridge](/es/docs/integrations/matterbridge/) y, a continuación, desactiva y vuelve a activar el puente Matter.
- **Falta un dispositivo**: comprueba que forma parte de los dispositivos compatibles de arriba y, en modo selección, que está seleccionado, y luego haz clic en `Guardar`.

🛠️ ¿Necesitas ayuda? Únete al [foro de la comunidad de Gladys](https://community.gladysassistant.com/), ¡estamos aquí para ayudarte!
