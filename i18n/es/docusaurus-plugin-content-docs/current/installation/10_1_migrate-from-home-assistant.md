---
id: migrate-from-home-assistant
title: "Migrar de Home Assistant a Gladys: conserva tus dispositivos Zigbee2MQTT"
description: "¿Pasas de Home Assistant a Gladys Assistant? Conecta Gladys al complemento Zigbee2MQTT de Home Assistant, o traslada tu red Zigbee2MQTT a Gladys, sin volver a emparejar tus dispositivos. Y qué hacer con los dispositivos ZHA."
sidebar_label: Migrar desde Home Assistant
keywords:
  - migrar de home assistant a gladys
  - dejar home assistant
  - trasladar zigbee2mqtt desde home assistant
  - migración complemento zigbee2mqtt
  - conservar dispositivos zigbee sin volver a emparejar
  - zha a zigbee2mqtt
  - conbee ii migración home assistant
---

¿Pasas de Home Assistant a Gladys? Si tus dispositivos Zigbee funcionan con el **complemento (add-on) Zigbee2MQTT** de Home Assistant (llamado *app* en las versiones recientes de Home Assistant), te acompañan: **no necesitas volver a emparejarlos**.

Tienes dos opciones:

- **Opción A: Gladys se conecta al Zigbee2MQTT de Home Assistant.** No se mueve nada: Zigbee2MQTT sigue en Home Assistant y Gladys lo lee por MQTT. Es la forma más rápida de probar Gladys.
- **Opción B: trasladas Zigbee2MQTT a Gladys.** Gladys gestiona entonces por sí misma el broker MQTT y Zigbee2MQTT, y puedes apagar Home Assistant.

Puedes hacer las dos seguidas: empieza por la opción A para usar Gladys en el día a día y pasa a la opción B cuando estés listo para apagar Home Assistant. Los dispositivos que añades en Gladys están vinculados por su nombre en Zigbee2MQTT, y la opción B conserva esos nombres: normalmente no tienes que volver a añadirlos en Gladys.

Los dispositivos emparejados con **ZHA** (la integración Zigbee incluida en Home Assistant) son otro caso: consulta [Dispositivos emparejados con ZHA](#devices-paired-with-zha).

## Opción A: conectar Gladys al Zigbee2MQTT de Home Assistant {/* #option-a-connect-gladys-to-the-zigbee2mqtt-of-home-assistant */}

1. **Crea un usuario MQTT para Gladys.** El complemento Mosquitto broker de Home Assistant acepta los usuarios de Home Assistant: crea un usuario dedicado a Gladys en **Ajustes > Personas > Usuarios**. También puedes añadir uno en `logins`, en la configuración del complemento Mosquitto.
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

## Opción B: trasladar Zigbee2MQTT a Gladys {/* #option-b-move-zigbee2mqtt-into-gladys */}

Toda tu red Zigbee está en la carpeta de datos de Zigbee2MQTT y en el coordinador (tu dongle Zigbee). Copia la carpeta, cambia el dongle de máquina y Gladys retoma la red tal cual.

:::info[Antes de empezar]

- Gladys está instalada (por ejemplo con [Gladys Assistant OS en un mini-PC](/es/docs/installation/mini-pc/)) y tienes acceso SSH a su máquina.
- Conservas **el mismo dongle Zigbee** que en Home Assistant: los ajustes de la red están guardados en él.
- Zigbee2MQTT aún no está configurado en Gladys. Si lo está (probaste la opción A, o lo instalaste para probar), haz clic primero en **Restablecer la integración** en los **Ajustes avanzados** de la pestaña `Configuración`. Hazlo **antes** de copiar los archivos: el restablecimiento borra la carpeta Zigbee2MQTT de Gladys. Los dispositivos que ya añadiste en Gladys se conservan.

:::

### 1. Detén Zigbee2MQTT en Home Assistant {/* #1-stop-zigbee2mqtt-in-home-assistant */}

En Home Assistant, detén el complemento **Zigbee2MQTT** y desactiva su arranque automático (opción *Start on boot*), para que siga detenido. **Nunca deben funcionar dos Zigbee2MQTT en la misma red.**

### 2. Recupera la carpeta de Zigbee2MQTT {/* #2-get-the-zigbee2mqtt-folder */}

Con el complemento **Samba share** o **Terminal & SSH**, recupera la carpeta de Zigbee2MQTT. Es la carpeta `zigbee2mqtt` de la configuración de Home Assistant: `config/zigbee2mqtt` en el recurso compartido Samba, `/homeassistant/zigbee2mqtt` (o `/config/zigbee2mqtt`, según la versión del complemento) en el terminal. Los archivos que importan:

- `configuration.yaml`, y `devices.yaml` y `groups.yaml` si existen;
- `database.db`;
- `coordinator_backup.json`;
- `state.json` (opcional: los últimos estados conocidos).

Guarda una copia de esta carpeta tal cual: es tu vuelta atrás.

### 3. Copia los archivos a la máquina de Gladys {/* #3-copy-the-files-to-the-gladys-machine */}

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

### 4. Corrige `configuration.yaml` {/* #4-edit-configurationyaml */}

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

### 5. Instala Zigbee2MQTT desde Gladys {/* #5-install-zigbee2mqtt-from-gladys */}

Conecta el dongle Zigbee a la máquina de Gladys. Si Gladys funciona en una máquina virtual, pásale el dongle (consulta la [guía de Proxmox](/es/docs/installation/proxmox)).

En Gladys, ve a **Integraciones > Zigbee2MQTT**, pestaña `Configuración`, y sigue el [asistente de configuración](/es/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard): Gladys reconoce los dongles más habituales (ConBee II, SONOFF ZBDongle-P y ZBDongle-E…); si no, elige su modelo en la lista. Haz clic en **Instalar**.

Gladys conserva el `configuration.yaml` que encuentra en la carpeta: Zigbee2MQTT arranca así en tu red existente. Cuando la red está lista, el panel muestra el número de dispositivos de la red.

### 6. Comprueba tus dispositivos {/* #6-check-your-devices */}

- Los dispositivos que ya añadiste en Gladys con la opción A vuelven a funcionar tal cual.
- Los demás aparecen en la pestaña `Descubrir`: [añádelos a Gladys](/es/docs/integrations/zigbee2mqtt#add-devices).

Los sensores con pilas muestran sus valores en su próximo envío.

### Volver a Home Assistant {/* #go-back-to-home-assistant */}

¿Algún problema? En el panel de Gladys, haz clic en **Detener** (Gladys lo recuerda y no vuelve a arrancar Zigbee2MQTT). Vuelve a conectar el dongle a la máquina de Home Assistant, restaura tu copia de la carpeta si hace falta y vuelve a arrancar el complemento Zigbee2MQTT.

## Dispositivos emparejados con ZHA {/* #devices-paired-with-zha */}

ZHA es otro caso:

- **ZHA no usa MQTT.** Gladys no puede conectarse a él, así que la opción A no funciona para estos dispositivos.
- **Gladys gestiona un único Zigbee2MQTT, es decir, un único dongle Zigbee.** Si usabas un dongle para Zigbee2MQTT y otro para ZHA, no podrás hacer funcionar los dos en Gladys.

Lo más sencillo y fiable: traslada la red Zigbee2MQTT (opción B) y vuelve a emparejar en ella los dispositivos que estaban en ZHA, desde la pestaña `Descubrir`, con **Permitir la incorporación**. Es un poco de trabajo una vez, pero después tienes una sola red y una malla más sólida.

Si todos tus dispositivos Zigbee están en ZHA, detén ZHA en Home Assistant (o apaga Home Assistant), conecta el dongle a la máquina de Gladys, [instala Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) y vuelve a emparejar tus dispositivos.

## Automatizaciones y paneles {/* #automations-and-dashboards */}

Tus automatizaciones y tus paneles no se trasladan con tus dispositivos: vuelve a crearlos en Gladys con las [escenas](/es/docs/scenes/intro) y los [paneles](/es/docs/dashboard/intro). Si usas Z-Wave, consulta la [integración Z-Wave JS UI](/es/docs/integrations/zwavejs-ui).

## ¿Necesitas ayuda? {/* #need-help */}

Si te quedas atascado en algún paso, haz tu pregunta en el [foro de la comunidad](https://community.gladysassistant.com/).
