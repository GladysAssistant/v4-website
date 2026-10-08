---
id: mqtt
title: MQTT
description: "Conecta dispositivos MQTT a Gladys Assistant: configura un broker MQTT e intercambia datos en ambos sentidos entre Gladys y tus sensores y actuadores."
sidebar_label: MQTT
---

El objetivo de este tutorial es explicar cómo funciona MQTT en Gladys Assistant.

MQTT es un protocolo de "publicación / suscripción" muy utilizado en domótica. Es popular porque es muy ligero y está disponible en muchas plataformas DIY (Arduino, ESP8266 NodeMCU). Existen implementaciones para la mayoría de los lenguajes de programación (JavaScript / Node.js, Python, PHP, C / C++, Java...).

MQTT te permite enviar un valor **a** Gladys desde un dispositivo conectado (por ejemplo, un sensor de temperatura que mide la temperatura cada 10 minutos). También puedes usar MQTT para enviar una orden domótica **desde** Gladys a un actuador (por ejemplo, enviar a un motor de persiana la orden de abrirse).

Por eso Gladys implementa una API MQTT en ambos sentidos:

- "Dispositivo -> Gladys"
- "Gladys -> Dispositivo"

La API MQTT se describe en [la documentación de MQTT](/es/docs/api/mqtt-api).

## Configurar un broker MQTT en Gladys Assistant

Este tutorial da por hecho que (1) has instalado Gladys Assistant 4 con la imagen oficial de Raspbian, como se [explica aquí](/es/docs/), o que (2) has instalado Gladys con Docker.

Primero, ve a la sección `Integraciones` de Gladys y abre la integración MQTT:

![Configurar un broker MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/configure-mqtt-broker-1.jpg)

Después, ve a la pestaña "Configuración" para configurar tu broker MQTT.

![Configurar un broker MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/configure-mqtt-broker-2.jpg)

En este punto tienes 2 opciones:

- O BIEN dejas que Gladys lance por sí sola un broker MQTT (mediante Docker). Es la opción recomendada, ya que es la forma más sencilla de usar MQTT en Gladys.
- O BIEN configuras tú mismo un broker MQTT (local o remoto). Esta opción puede ser útil si ya tienes un broker MQTT funcionando en un servidor o si quieres usar un broker MQTT en línea.

En este tutorial seguiremos la opción 1 (dejar que Gladys lance el broker MQTT).

Así que puedes dejar que Gladys cree automáticamente el broker MQTT.

Según tu conexión a internet y la potencia de tu máquina, esto puede tardar desde unos segundos hasta unos minutos.

![Configurar un broker MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/configure-mqtt-broker-3.jpg)

Puedes hacer clic en el pequeño ojo para ver la contraseña que Gladys ha generado para tu broker MQTT.

Te recomendamos que anotes esta contraseña en algún sitio.

![Configurar un broker MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/configure-mqtt-broker-4.jpg)

¡Ya tienes un broker MQTT en funcionamiento y conectado a Gladys!

## Declarar un dispositivo MQTT en Gladys

En este tutorial usaremos como ejemplo un sensor de temperatura situado en la cocina que envía valores de temperatura a Gladys cada 10 minutos.

Primero, ve a la pestaña "Dispositivos" de la integración MQTT y haz clic en el botón "Nuevo +":

![Crear un dispositivo MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/create-mqtt-device-1.jpg)

Rellena el formulario con la información de tu dispositivo.

Por ejemplo, rellénalo con estos datos:

- Nombre: "Sensor de temperatura"
- ID externo: `mqtt:kitchen:temperature-sensor`. No debe contener espacios y debe empezar por `mqtt:`. Te recomendamos mantener una convención en toda tu instalación de Gladys, como `mqtt:nombre_habitacion:nombre_dispositivo`.
- Habitación: "Cocina".

![Crear un dispositivo MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/create-mqtt-device-2.jpg)

A continuación, vamos a añadir funcionalidades a este dispositivo.

En efecto, en Gladys un dispositivo "físico" puede tener varias "funcionalidades". Algunos fabricantes ofrecen dispositivos "multisensor" (temperatura/humedad/luminosidad es un clásico).

En la barra de búsqueda, busca "temperatura" y selecciona "Temperatura / sensor de temperatura". Haz clic en "Añadir funcionalidad".

Después puedes rellenar el formulario con la siguiente información:

- Nombre: "Temperatura". Es el nombre que se mostrará en el panel.
- ID externo de la funcionalidad: `mqtt:kitchen:temperature-sensor:temperature`. Aquí también te aconsejamos mantener una convención, por ejemplo `mqtt:nombre_habitacion:nombre_dispositivo:nombre_funcionalidad`.
- Unidad: "°C"
- Valor mínimo: -50 (supongamos que tu sensor de temperatura llega hasta -50 °C)
- Valor máximo: 200 (¡supongamos que tu sensor de temperatura llega tan alto!)
- ¿Es un sensor?: esta casilla sirve para indicar si tu dispositivo funciona en el sentido "Dispositivo -> Gladys" o "Gladys -> Dispositivo". Si eliges "Sí", el dispositivo es de "solo lectura" y simplemente envía valores a Gladys. Es el caso de nuestro sensor de temperatura. Si eliges "No", el dispositivo es un actuador que Gladys puede controlar.
- Topic MQTT: es el topic en el que Gladys "escuchará" los nuevos valores de este dispositivo. Te aconsejamos copiarlo en algún sitio para más adelante.

![Crear un dispositivo MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/create-mqtt-device-3.jpg)

Haz clic en "Guardar". Deberías ver una pantalla como esta:

![Crear un dispositivo MQTT en Gladys Assistant](../../../../../static/img/docs/en/configuration/mqtt/create-mqtt-device-4.jpg)

## Probar el dispositivo MQTT

Te sugerimos usar un cliente MQTT para probar este dispositivo MQTT.

Puedes usar, por ejemplo, el cliente MQTT [MQTT X](https://mqttx.app/).

Después de instalar y abrir el programa, haz clic en "New connection".

Rellena el formulario con la siguiente información:

- Name: "MQTTGladys". Este nombre solo sirve para mostrarse en el programa.
- Host: la dirección IP de tu Raspberry Pi en la red. Para este tutorial debes estar en la misma red que tu Raspberry Pi.
- Port: 1883
- Username: `gladys`
- Password: la contraseña que Gladys generó en la primera parte de este tutorial.

![Probar el dispositivo MQTT](../../../../../static/img/docs/en/configuration/mqtt/send-test-message-mqtt-1.jpg)

:::note
Si no guardaste la contraseña, puedes encontrarla volviendo a la configuración del módulo MQTT y haciendo clic en el pequeño ojo del campo de contraseña.
:::

Guarda la configuración haciendo clic en "Connect".

En la barra inferior, introduce el topic MQTT que copiaste al crear la funcionalidad.

En el campo inferior, escribe una temperatura, en este caso "21.2", y haz clic en "Publish":

![Probar el dispositivo MQTT](../../../../../static/img/docs/en/configuration/mqtt/send-test-message-mqtt-2.jpg)

En el panel, añade un nuevo bloque "Dispositivos de la habitación" y selecciona tu habitación.

Deberías ver tu dispositivo con la temperatura que acabamos de enviar:

![Probar el dispositivo MQTT](../../../../../static/img/docs/en/configuration/mqtt/send-test-message-mqtt-3.jpg)

¡Bravo!

## Para ir más allá

Si quieres escribir un programa que envíe datos a tu broker MQTT, existen bibliotecas MQTT para todos los lenguajes.

Por ejemplo, en Node.js puedes usar el [paquete npm mqtt](https://www.npmjs.com/package/mqtt).

En internet encontrarás muchísimos tutoriales para todas las plataformas :)
