---
id: migrate
title: Trasladar Gladys a una nueva máquina
description: "¿Vas a sustituir tu mini-PC, tu Raspberry Pi o tu servidor? Así puedes trasladar Gladys Assistant a una nueva máquina con una copia de seguridad de Gladys Plus, sin volver a emparejar tus dispositivos, y después borrar la antigua de forma segura."
sidebar_label: Cambiar de máquina
keywords:
  - migrar gladys
  - cambiar de servidor gladys
  - cambiar de instancia gladys
  - restaurar copia de seguridad gladys plus
  - nuevo mini pc gladys
---

¿Vas a sustituir la máquina en la que funciona Gladys (un mini-PC antiguo, una Raspberry Pi, un NAS...) por una nueva? Con una **copia de seguridad de Gladys Plus**, recuperas tu instancia tal cual en la nueva máquina: usuarios, viviendas y habitaciones, dispositivos, escenas, paneles, configuración de las integraciones y todo el historial de los sensores.

Zigbee2mqtt y Matter también se restauran: Gladys guarda su configuración en su base de datos cada noche, así que **no necesitas volver a emparejar tus dispositivos**.

Solo hay que tomar algunas precauciones. Este es el procedimiento, paso a paso.

:::info[Lo que necesitas]

- Una suscripción a [Gladys Plus](/es/plus/) que incluya las copias de seguridad, conectada a tu instancia actual.
- La nueva máquina, que instalarás con la guía habitual (por ejemplo [Gladys Assistant OS en un mini-PC](/es/docs/installation/mini-pc/)).

:::

## 1. Antes del cambio (en la máquina antigua)

### Apunta tu clave de copia de seguridad

En tu instancia actual, ve a **Configuración > Gladys Plus**, sección **«Clave de copia de seguridad»**, y haz clic en el ojo para mostrarla. Cópiala en un lugar seguro, fuera de Gladys (en un gestor de contraseñas, por ejemplo).

Tus copias de seguridad están **cifradas con esta clave**: sin ella, es imposible restaurarlas.

:::danger
No desconectes Gladys Plus en la instancia antigua antes de haber apuntado la clave: la desconexión **borra la clave de la instancia**.
:::

### Apunta lo que no está en la copia de seguridad

- **Node-RED**: si lo usas, exporta tus flujos (**menú ☰ > Exportar > Todos los flujos**). No forman parte de la copia de seguridad de Gladys.
- **MQTT**: si usas la integración MQTT con el broker instalado por Gladys (para dispositivos Tasmota, Shelly, etc.), apunta por precaución el nombre de usuario y la contraseña MQTT (**Integraciones > MQTT > Configuración**).

### No emparejes dispositivos nuevos justo antes del traslado

La configuración de Zigbee2mqtt se guarda en Gladys **todas las noches a las 23:00**, la de Matter **a las 4:00**. Un dispositivo Zigbee o Matter emparejado después del último guardado nocturno no estará en la copia de seguridad: tendrías que volver a emparejarlo en la nueva máquina.

### Lanza una copia de seguridad manual

Ve a **Configuración > Copias de seguridad** y haz clic en **«Copia de seguridad ahora»**. Espera a que la nueva copia aparezca en la lista.

### Apaga la máquina antigua

**Las dos máquinas nunca deben funcionar al mismo tiempo**: controlarían los mismos dispositivos, tus escenas se ejecutarían dos veces y compartirían la misma conexión de Gladys Plus.

Después, desconecta tu dongle Zigbee (y tus otros dongles USB) y conéctalo a la nueva máquina. Si tu coordinador Zigbee es un modelo de red (SLZB-06, etc.), no hay nada que mover.

## 2. Instalar la nueva máquina y restaurar la copia de seguridad

Instala Gladys en la nueva máquina con la guía correspondiente. En un mini-PC, sigue [Instalar Gladys Assistant con Gladys Assistant OS](/es/docs/installation/mini-pc/): escribes la imagen en una memoria USB, arrancas el mini-PC desde ella, respondes a unas pocas preguntas y Gladys se instala sola.

Cuando Gladys muestre la pantalla de bienvenida (en [http://gladysassistant.local](http://gladysassistant.local) con Gladys Assistant OS):

1. Haz clic en **«Restaurar copia de seguridad de Gladys Plus»**, y **no** en «Crear cuenta local».
2. Inicia sesión con tu cuenta de Gladys Plus: correo electrónico, contraseña y código de [doble factor](/es/docs/plus/two-factor-authentication/).
3. Introduce tu **clave de copia de seguridad**: la que apuntaste en el paso 1.
4. Elige la copia de seguridad más reciente y haz clic en **«Restaurar copia de seguridad»** y luego en **«Confirmar»**.

La restauración tarda más o menos según el tamaño de tu historial. Al terminar, Gladys se reinicia sola. Después inicias sesión con tu cuenta de Gladys habitual, es decir, **el correo electrónico y la contraseña de tu instancia antigua**.

:::tip[¿La restauración falla?]
Comprueba que la clave que has introducido es la de la instancia antigua: Gladys te propone cambiarla y volver a intentarlo. También puedes crear una cuenta local, conectar Gladys Plus más tarde en **Configuración > Gladys Plus** y restaurar la copia de seguridad desde **Configuración > Copias de seguridad**.
:::

## 3. Comprobaciones después de la restauración

- **Zigbee2mqtt**: Gladys lo reinstala automáticamente con su configuración restaurada (red Zigbee y dispositivos), sin volver a emparejar. Aun así, ve a **Integraciones > Zigbee2mqtt** y comprueba el puerto USB del dongle: puede tener otro nombre en la nueva máquina. En ese caso, selecciona el correcto.
- **Matter**: el controlador se restaura automáticamente desde su copia de seguridad.
- **Integraciones del catálogo**: se reinstalan automáticamente al arrancar. Gladys vuelve a descargar sus imágenes, lo que puede tardar unos minutos.
- **MQTT** (si usas el broker instalado por Gladys): desde Gladys 5.3.1, Gladys vuelve a crear el broker automáticamente con tus credenciales guardadas, así que tus dispositivos MQTT se reconectan sin cambiar nada. Comprueba en **Integraciones > MQTT** que Gladys está conectada al broker.
- **Node-RED**: vuelve a importar tus flujos.
- **Dirección IP**: la nueva máquina tiene una nueva dirección IP. Todo lo que contacta con Gladys por su IP (dispositivos MQTT, etc.) debe usar la nueva. Lo más sencillo: una vez apagada la máquina antigua, da a la nueva, en la configuración de tu router, la dirección IP fija que tenía la antigua (reserva DHCP).
- **Gladys Plus**: tu conexión a Gladys Plus forma parte de la copia de seguridad, así que la nueva máquina ocupa el lugar de la antigua. Comprueba que la instancia está conectada en **Configuración > Gladys Plus** y prueba el acceso remoto en [plus.gladysassistant.com](https://plus.gladysassistant.com). Al día siguiente, comprueba que aparece una nueva copia en **Configuración > Copias de seguridad**.

## 4. Borrar la máquina antigua

Mantenla apagada unos días, el tiempo de comprobar que todo funciona: es tu plan B. **Nunca la vuelvas a encender con Gladys en marcha mientras la nueva máquina está funcionando.**

Después, recuerda que su disco sigue conteniendo tu base de datos de Gladys (usuarios, claves de Gladys Plus, accesos a tus integraciones). Por lo tanto:

- **si la regalas o la vendes**, reinstala un sistema borrando el disco por completo;
- **si la conservas para otra cosa**, elimina los contenedores y los datos de Gladys:

```bash
docker rm -f gladys gladys-z2m-zigbee2mqtt gladys-z2m-mqtt eclipse-mosquitto gladys-node-red gladys-matterbridge
```

```bash
sudo rm -rf /var/lib/gladysassistant
```

Adapta la lista de contenedores a lo que muestra el comando `docker ps -a` en tu máquina (por ejemplo, añade `watchtower` si está instalado). Si instalaste Gladys tú mismo con Docker en otra carpeta distinta de `/var/lib/gladysassistant`, borra esa carpeta.

No hace falta desconectar Gladys Plus en la máquina antigua: la nueva ha tomado el relevo de la conexión.

## ¿Necesitas ayuda?

Si te atascas en algún paso, haz tu pregunta en el [foro de la comunidad](https://community.gladysassistant.com/).
