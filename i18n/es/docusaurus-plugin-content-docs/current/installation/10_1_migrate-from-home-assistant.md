---
id: migrate-from-home-assistant
title: "Migrar de Home Assistant a Gladys: Zigbee2MQTT, Z-Wave, Matter"
description: "¿Pasas de Home Assistant a Gladys Assistant? Qué conservas y qué rehaces: traslada tu red Zigbee2MQTT sin volver a emparejar tus dispositivos, conserva tu dongle Z-Wave, comparte tus dispositivos Matter, recupera tus dispositivos MQTT y apaga Home Assistant."
sidebar_label: Migrar desde Home Assistant
keywords:
  - migrar de home assistant a gladys
  - dejar home assistant
  - pasar de home assistant a gladys
  - trasladar zigbee2mqtt desde home assistant
  - migración complemento zigbee2mqtt
  - conservar dispositivos zigbee sin volver a emparejar
  - zha a zigbee2mqtt
  - migración z-wave js
  - compartir dispositivo matter home assistant
---

¿Pasas de Home Assistant a Gladys? La mayoría de tus dispositivos te acompañan **sin volver a emparejarlos**: la red Zigbee2MQTT, la red Z-Wave, los dispositivos Matter y los dispositivos MQTT. Lo que se queda atrás es lo que construiste en Home Assistant: automatizaciones, paneles e historial.

No tienes que cambiarlo todo en una tarde: Gladys puede funcionar junto a Home Assistant, conectada a los mismos dispositivos, mientras vuelves a crear tus escenas. Apagas Home Assistant al final.

## Qué conservas y qué rehaces {/* #what-you-keep-what-you-redo */}

| En Home Assistant | En Gladys | ¿Volver a emparejar? |
| --- | --- | --- |
| Complemento Zigbee2MQTT | [Integración Zigbee2MQTT](#zigbee2mqtt): Gladys se conecta a él y después lo retoma | No |
| ZHA | [Integración Zigbee2MQTT](#devices-paired-with-zha) | Sí |
| Z-Wave JS o Z-Wave JS UI | [Integración Z-Wave JS UI](#z-wave), con el mismo dongle | No |
| Matter | [Integración Matter](#matter), con un código compartido por Home Assistant | No |
| Dispositivos MQTT (ESPHome, OpenMQTTGateway, DIY…) | [Integración MQTT](#mqtt-devices-and-other-integrations), Home Assistant Discovery | No |
| Tasmota, ESPHome, Shelly, Philips Hue, Netatmo, Tuya… | [Su integración en Gladys](#mqtt-devices-and-other-integrations) | No, en la mayoría de los casos |
| Automatizaciones, scripts | [Escenas](#automations-dashboards-and-history) | Volver a crearlas |
| Paneles | [Paneles](#automations-dashboards-and-history) | Volver a crearlos |
| Historial | No se transfiere | — |

## El orden recomendado {/* #the-recommended-order */}

1. **Instala Gladys junto a Home Assistant**, en otra máquina o en otra máquina virtual: por ejemplo [Gladys Assistant OS en un mini-PC](/es/docs/installation/mini-pc/).
2. **Conecta Gladys a lo que ejecuta Home Assistant**: el complemento Zigbee2MQTT, el broker MQTT, los dispositivos Matter. No se mueve nada y puedes volver atrás en cualquier momento.
3. **Vuelve a crear tus escenas y tus paneles** en Gladys, y úsala en el día a día durante un tiempo.
4. **Traslada las radios** (dongle Zigbee, dongle Z-Wave) a la máquina de Gladys, de una en una.
5. **Apaga Home Assistant** cuando ya nada dependa de él (consulta [Apagar Home Assistant](#turn-home-assistant-off)).

:::warning
Un dongle Zigbee o un dongle Z-Wave lo controla **un solo software a la vez**. No dejes nunca que Home Assistant y Gladys controlen la misma radio: detén el complemento en Home Assistant antes de arrancarla en Gladys.
:::

## Zigbee2MQTT {/* #zigbee2mqtt */}

Si tus dispositivos Zigbee funcionan con el **complemento (add-on) Zigbee2MQTT** de Home Assistant (llamado *app* en las versiones recientes de Home Assistant), tienes dos opciones:

- **Opción A: Gladys se conecta al Zigbee2MQTT de Home Assistant.** No se mueve nada: Zigbee2MQTT sigue en Home Assistant y Gladys lo lee por MQTT. Es la forma más rápida de probar Gladys.
- **Opción B: trasladas Zigbee2MQTT a Gladys.** Gladys gestiona entonces por sí misma el broker MQTT y Zigbee2MQTT, y Home Assistant ya no tiene que funcionar.

Puedes hacer las dos seguidas: empieza por la opción A y pasa a la opción B cuando estés listo. Los dispositivos que añades en Gladys están vinculados por su nombre en Zigbee2MQTT, y la opción B conserva esos nombres: normalmente no tienes que volver a añadirlos en Gladys.

### Opción A: conectar Gladys al Zigbee2MQTT de Home Assistant {/* #option-a-connect-gladys-to-the-zigbee2mqtt-of-home-assistant */}

1. **Crea un usuario MQTT para Gladys.** El complemento Mosquitto broker de Home Assistant acepta los usuarios de Home Assistant: crea un usuario dedicado a Gladys en **Configuración > Personas > Usuarios**. También puedes añadir uno en `logins`, en la configuración del complemento Mosquitto.
2. En Gladys, ve a **Integraciones > Zigbee2MQTT**, pestaña `Configuración`. En el paso 1 del asistente, haz clic en **Ya tengo un Zigbee2MQTT**.
3. Introduce:
   - la **Dirección del broker MQTT**: `mqtt://IP_DE_HOME_ASSISTANT:1883`;
   - el **Usuario** y la **Contraseña** que acabas de crear;
   - la **Dirección de la interfaz de Zigbee2MQTT** (opcional). En Home Assistant, la interfaz de Zigbee2MQTT suele abrirse solo desde la barra lateral de Home Assistant: deja este campo vacío, salvo que hayas abierto su puerto en los ajustes de red del complemento.
4. Haz clic en **Conectar**. Tus dispositivos aparecen en la pestaña `Descubrir`: [añádelos a Gladys](/es/docs/integrations/zigbee2mqtt#add-devices).

:::warning
Gladys escucha el topic `zigbee2mqtt/#`: el topic base de tu Zigbee2MQTT (`mqtt.base_topic`) debe seguir siendo `zigbee2mqtt`, el valor por defecto del complemento.
:::

Un dispositivo muestra sus valores en cuanto se añade, si Zigbee2MQTT los ha enviado desde que Gladys se conectó. Un sensor con pilas muestra sus valores en su próximo envío: cuenta hasta una hora aproximadamente.

**Ventajas:** cinco minutos de configuración, nada que romper, y puedes volver atrás en cualquier momento.
**Inconveniente:** Home Assistant (Mosquitto y Zigbee2MQTT) sigue funcionando. Si se cae, tu red Zigbee se cae con él.

### Opción B: trasladar Zigbee2MQTT a Gladys {/* #option-b-move-zigbee2mqtt-into-gladys */}

Toda tu red Zigbee está en la carpeta de datos de Zigbee2MQTT y en el coordinador (tu dongle Zigbee). Copia la carpeta, cambia el dongle de máquina y Gladys retoma la red tal cual.

:::info[Antes de empezar]

- Tienes acceso SSH a la máquina de Gladys.
- Conservas **el mismo dongle Zigbee** que en Home Assistant: los ajustes de la red están guardados en él.
- Zigbee2MQTT aún no está configurado en Gladys. Si lo está (usaste la opción A, o lo instalaste para probar), haz clic primero en **Restablecer la integración** en los **Ajustes avanzados** de la pestaña `Configuración`. Hazlo **antes** de copiar los archivos: el restablecimiento borra la carpeta Zigbee2MQTT de Gladys. Los dispositivos que ya añadiste en Gladys se conservan.

:::

#### 1. Detén Zigbee2MQTT en Home Assistant {/* #1-stop-zigbee2mqtt-in-home-assistant */}

En Home Assistant, detén el complemento **Zigbee2MQTT** y desactiva su opción **Iniciar en el arranque**, para que siga detenido. **Nunca deben funcionar dos Zigbee2MQTT en la misma red.**

#### 2. Recupera la carpeta de Zigbee2MQTT {/* #2-get-the-zigbee2mqtt-folder */}

Con el complemento **Samba share** o **Terminal & SSH**, recupera la carpeta de Zigbee2MQTT. Es la carpeta `zigbee2mqtt` de la configuración de Home Assistant: `config/zigbee2mqtt` en el recurso compartido Samba, `/homeassistant/zigbee2mqtt` (o `/config/zigbee2mqtt`, según la versión del complemento) en el terminal. Los archivos que importan:

- `configuration.yaml`, y `devices.yaml` y `groups.yaml` si existen;
- `database.db`;
- `coordinator_backup.json`;
- `state.json` (opcional: los últimos estados conocidos).

Guarda una copia de esta carpeta tal cual: es tu vuelta atrás.

#### 3. Copia los archivos a la máquina de Gladys {/* #3-copy-the-files-to-the-gladys-machine */}

Copia estos archivos en la carpeta Zigbee2MQTT de Gladys: `/var/lib/gladysassistant/zigbee2mqtt/z2m/` en una instalación estándar. Crea la carpeta si aún no existe:

```bash
sudo mkdir -p /var/lib/gladysassistant/zigbee2mqtt/z2m
```

Por ejemplo, desde tu ordenador, envía los archivos a tu carpeta personal en la máquina de Gladys con `scp`:

```bash
scp configuration.yaml database.db coordinator_backup.json state.json USUARIO@IP_DE_GLADYS:~
```

Después, en la máquina de Gladys, muévelos a la carpeta (añade `devices.yaml` y `groups.yaml` si los tienes):

```bash
sudo mv ~/configuration.yaml ~/database.db ~/coordinator_backup.json ~/state.json /var/lib/gladysassistant/zigbee2mqtt/z2m/
```

Si instalaste Gladys con Docker en otra carpeta distinta de `/var/lib/gladysassistant`, usa tu carpeta.

#### 4. Corrige `configuration.yaml` {/* #4-edit-configurationyaml */}

Abre `configuration.yaml` en la máquina de Gladys (por ejemplo con `sudo nano /var/lib/gladysassistant/zigbee2mqtt/z2m/configuration.yaml`) y corrige a mano estas líneas:

```yaml
homeassistant:
  enabled: false
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://localhost:1884
```

- `server` debe apuntar al broker MQTT de Gladys (puerto `1884`). Si no, sigue apuntando al Mosquitto de Home Assistant: Gladys no reescribe esta línea. Si falta, añádela.
- `homeassistant`: escribe `enabled: false` bajo la sección `homeassistant`. No sustituyas la sección por `homeassistant: false`: Zigbee2MQTT 2 rechaza esta forma y no arranca.
- Deja el resto tal cual. Gladys reescribe por sí misma, al arrancar, el usuario y la contraseña MQTT, el puerto serie y el adaptador del dongle, y el puerto de la interfaz web. La clave de red, el PAN ID y el canal se conservan.

#### 5. Instala Zigbee2MQTT desde Gladys {/* #5-install-zigbee2mqtt-from-gladys */}

Conecta el dongle Zigbee a la máquina de Gladys. Si Gladys funciona en una máquina virtual, pásale el dongle (consulta la [guía de Proxmox](/es/docs/installation/proxmox)).

En Gladys, ve a **Integraciones > Zigbee2MQTT**, pestaña `Configuración`, y sigue el [asistente de configuración](/es/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard): Gladys reconoce los dongles más habituales (ConBee II, SONOFF ZBDongle-P y ZBDongle-E…); si no, elige su modelo en la lista. Haz clic en **Instalar**.

Gladys conserva el `configuration.yaml` que encuentra en la carpeta: Zigbee2MQTT arranca así en tu red existente. Cuando la red está lista, el panel muestra el número de dispositivos de la red.

#### 6. Comprueba tus dispositivos {/* #6-check-your-devices */}

- Los dispositivos que ya añadiste en Gladys con la opción A vuelven a funcionar tal cual.
- Los demás aparecen en la pestaña `Descubrir`: [añádelos a Gladys](/es/docs/integrations/zigbee2mqtt#add-devices).

Los sensores con pilas muestran sus valores en su próximo envío.

#### Volver a Home Assistant {/* #go-back-to-home-assistant */}

¿Algún problema? En el panel de Gladys, haz clic en **Detener** (Gladys lo recuerda y no vuelve a arrancar Zigbee2MQTT). Vuelve a conectar el dongle a la máquina de Home Assistant, restaura tu copia de la carpeta si hace falta y vuelve a arrancar el complemento Zigbee2MQTT.

### Dispositivos emparejados con ZHA {/* #devices-paired-with-zha */}

ZHA (la integración Zigbee incluida en Home Assistant) es otro caso:

- **ZHA no usa MQTT.** Gladys no puede conectarse a él, así que la opción A no funciona para estos dispositivos.
- **Gladys gestiona un único Zigbee2MQTT, es decir, un único dongle Zigbee.** Si usabas un dongle para Zigbee2MQTT y otro para ZHA, no podrás hacer funcionar los dos en Gladys.

Lo más sencillo y fiable: traslada la red Zigbee2MQTT (opción B) y vuelve a emparejar en ella los dispositivos que estaban en ZHA, desde la pestaña `Descubrir`, con **Permitir la incorporación**. Es un poco de trabajo una vez, pero después tienes una sola red y una malla más sólida.

Si todos tus dispositivos Zigbee están en ZHA, detén ZHA en Home Assistant (o apaga Home Assistant), conecta el dongle a la máquina de Gladys, [instala Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) y vuelve a emparejar tus dispositivos.

## Z-Wave {/* #z-wave */}

Gladys habla con Z-Wave a través de [Z-Wave JS UI](/es/docs/integrations/zwavejs-ui), por MQTT. Tu red Z-Wave (los dispositivos y sus números de nodo) está guardada **en el propio dongle Z-Wave**: conectado a otro Z-Wave JS UI, el dongle se lleva sus dispositivos consigo.

**Para probar Gladys primero:** si Home Assistant usa el complemento **Z-Wave JS UI**, activa su pasarela MQTT, conectada al Mosquitto de Home Assistant, con los ajustes indicados en la [guía de Z-Wave JS UI](/es/docs/integrations/zwavejs-ui#configurar-z-wave-js-ui), y después conecta Gladys a ese broker. El complemento oficial **Z-Wave JS** no tiene pasarela MQTT: Gladys no puede conectarse a él.

**Para trasladar el dongle:**

1. **Apunta las claves de seguridad** de tu red: en la pestaña **Configuración** del complemento Z-Wave JS (las claves S0, S2 y Long Range), o en **Settings > Z-Wave** de Z-Wave JS UI. Sin ellas, los dispositivos emparejados de forma segura (cerraduras, alarmas…) dejan de responder.
2. **Detén el complemento** en Home Assistant y desactiva su opción **Iniciar en el arranque**.
3. **Instala Z-Wave JS UI** en la máquina de Gladys, con Docker (consulta la [documentación de Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker)), junto a un broker MQTT: el que instala la [integración MQTT](/es/docs/integrations/mqtt) de Gladys sirve. Conecta el dongle.
4. En Z-Wave JS UI, introduce **las mismas claves de seguridad** en **Settings > Z-Wave**, y después los ajustes MQTT y Gateway de la [guía de Z-Wave JS UI](/es/docs/integrations/zwavejs-ui#configurar-z-wave-js-ui).
5. En Gladys, conecta la [integración Z-Wave JS UI](/es/docs/integrations/zwavejs-ui#conectar-gladys-a-z-wave-js-ui) al broker y añade tus dispositivos desde la pestaña **Descubrimiento de Z-Wave JS UI**.

Gladys identifica los dispositivos Z-Wave por su número de nodo, que el dongle conserva: los dispositivos añadidos en Gladys antes del traslado siguen funcionando. Los nombres que les diste en Home Assistant no se trasladan: cambia el nombre de los dispositivos en Gladys.

## Matter {/* #matter */}

Un dispositivo Matter puede estar controlado por varios controladores a la vez (multiadministrador). Así que no tienes que quitarlo de Home Assistant para añadirlo a Gladys:

1. En Home Assistant, abre el dispositivo y haz clic en **Compartir dispositivo**, y después otra vez en **Compartir dispositivo**: Home Assistant muestra un código QR y un código para compartir. El código caduca a los pocos minutos: introdúcelo enseguida en Gladys.
2. En Gladys, ve a **Integraciones > Matter**, pestaña **Añadir dispositivo**, introduce ese código y después añade el dispositivo desde la pestaña **Dispositivos** (consulta la [guía de Matter](/es/docs/integrations/matter#configuración-en-gladys-assistant)).

Gladys pasa a ser un controlador del dispositivo, junto a Home Assistant: el dispositivo sigue funcionando con Gladys cuando Home Assistant está apagado.

:::warning[Dispositivos Thread]
Un dispositivo Matter over Thread necesita un **router de borde Thread** en tu red, y Gladys no lo es. Si el tuyo es el de Home Assistant (el complemento OpenThread Border Router, con un dongle Home Assistant Connect ZBT-1 o ZBT-2, por ejemplo), tus dispositivos Thread dejan de responder cuando apagas Home Assistant. Antes, lee [Si tu dispositivo solo usa Thread](/es/docs/integrations/matter#si-tu-dispositivo-solo-usa-thread) y pregunta en el foro si tienes dudas.
:::

## Dispositivos MQTT y otras integraciones {/* #mqtt-devices-and-other-integrations */}

**Dispositivos MQTT.** Desde Gladys 4.86, la [integración MQTT](/es/docs/integrations/mqtt) entiende el protocolo **Home Assistant Discovery**: los dispositivos que publican su configuración en el topic `homeassistant/` del broker (ESPHome con MQTT, OpenMQTTGateway, montajes DIY…) aparecen solos en su pestaña **Descubrimiento**. Puedes conectar primero la integración MQTT al Mosquitto de Home Assistant y después apuntar tus dispositivos al broker de Gladys antes de apagar Home Assistant.

No añadas tus dispositivos Zigbee desde ahí: Zigbee2MQTT también puede publicar mensajes de descubrimiento de Home Assistant, pero usa para ellos la integración Zigbee2MQTT, que los gestiona por completo.

**Dispositivos con su propia integración.** Muchas marcas tienen su integración en Gladys, nativa o de la comunidad: [Tasmota](/es/docs/integrations/tasmota), [ESPHome](/es/docs/integrations/external/esphome), [Shelly](/es/docs/integrations/external/shelly), [Philips Hue](/es/docs/integrations/external/philips-hue), [Netatmo](/es/docs/integrations/external/netatmo), [Tuya](/es/docs/integrations/external/tuya), cámaras… Busca la tuya en el [catálogo de integraciones](/es/docs/integrations/) y añade tus dispositivos desde ella: siguen emparejados con su puente, su nube o tu Wi-Fi, así que no hay nada que volver a emparejar.

## Automatizaciones, paneles e historial {/* #automations-dashboards-and-history */}

Todo esto se queda en Home Assistant:

- **Automatizaciones y scripts**: vuelve a crearlos como [escenas](/es/docs/scenes/intro). Actívalas en Gladys solo cuando estén desactivadas en Home Assistant; si no, se ejecutan dos veces.
- **Paneles**: vuelve a crearlos en Gladys con los [paneles](/es/docs/dashboard/intro).
- **Historial**: el historial de tus sensores no se transfiere. Gladys empieza a registrarlo cuando añades un dispositivo.
- **Node-RED**: si usas el complemento Node-RED, puedes exportar tus flujos e importarlos en la [integración Node-RED](/es/docs/integrations/node-red) de Gladys. Los nodos de Home Assistant dejan de funcionar: sustitúyelos por nodos MQTT.

## Apagar Home Assistant {/* #turn-home-assistant-off */}

Antes de apagar Home Assistant definitivamente, comprueba que:

- cada radio (dongle Zigbee, dongle Z-Wave) está conectada a la máquina de Gladys, y su complemento está detenido en Home Assistant;
- ningún dispositivo usa ya el broker Mosquitto de Home Assistant (Tasmota, Shelly, ESPHome…): apúntalos al broker de Gladys;
- tus dispositivos Thread tienen un router de borde distinto de Home Assistant (consulta [Matter](#matter));
- tus escenas funcionan en Gladys.

Guarda una copia de seguridad de Home Assistant durante unas semanas: es tu plan B.

## ¿Necesitas ayuda? {/* #need-help */}

Si te quedas atascado en algún paso, haz tu pregunta en el [foro de la comunidad](https://community.gladysassistant.com/).
