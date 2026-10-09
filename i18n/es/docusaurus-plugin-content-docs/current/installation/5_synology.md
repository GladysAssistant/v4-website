---
id: synology
title: Instalar Gladys Assistant en un NAS Synology
description: "Instala Gladys Assistant en un NAS Synology con Docker: configura el almacenamiento, despliega el contenedor por SSH y pon en marcha tu hogar inteligente autoalojado."
sidebar_label: Instalación en un NAS Synology
---

En este tutorial repasamos los pasos para instalar Gladys Assistant con Docker en un NAS Synology compatible.

## Instalar Docker en tu NAS

Instala el paquete Docker desde el "Centro de paquetes".
Encontrarás la lista de NAS compatibles en la [página del paquete Docker](https://www.synology.com/en-global/dsm/packages/Docker).

## Desplegar Gladys con Docker

### Almacenamiento

Para que los datos se conserven de forma persistente, tenemos que crear en el volumen una carpeta que se montará.

Si no existe todavía, crea mediante _File Station_ una _carpeta compartida_ llamada `docker`.
Dentro de esta carpeta, crea otra llamada `gladysassistant`.
**Atención**: en la línea de comandos, la ruta de la carpeta incluye el nombre del volumen: `/volume1/docker/gladysassistant`

### Instalar Gladys por SSH

Conéctate a tu NAS por SSH y ejecuta este comando para crear el contenedor de Gladys.

```
sudo \
docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--cgroupns=host \
--name "gladys" \
-e NODE_ENV=production \
-e SERVER_PORT=8420 \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /volume1/docker/gladysassistant/:/var/lib/gladysassistant \
-v /etc/TZ:/etc/timezone:ro \
-v /etc/localtime:/etc/localtime:ro \
-v /dev:/dev \
gladysassistant/gladys:v5
```

**Notas:**

- `--name "gladys"`: nombre del contenedor.
- `-v /volume1/docker/gladysassistant:...`: ruta donde se guardarán los datos de forma persistente en tu NAS.
- `-e SERVER_PORT=8420`: puerto por el que Gladys será accesible. Puedes sustituirlo por cualquier valor que no use _Disk Station_ ([puertos reservados en la web de Synology](https://kb.synology.com/en-global/DSM/tutorial/What_network_ports_are_used_by_Synology_services))

### Acceder a Gladys

Gladys será accesible desde tu navegador en `http://gladysassistant.local:PORT`, el nombre que Gladys anuncia en tu red local mediante mDNS.

Por ejemplo, `http://gladysassistant.local:8420`. Si tu red bloquea mDNS, usa en su lugar la dirección IP del NAS, por ejemplo `http://192.168.10.15:8420`.

## Actualizaciones automáticas con Watchtower

Puedes usar Watchtower para actualizar Gladys cuando se publique una nueva versión.

Ejecuta este comando para crear el contenedor de Watchtower.

```
 sudo docker run -d \
   --name watchtower \
   --log-opt max-size=10m \
   --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   nickfedor/watchtower \
   --cleanup --include-restarting
```

Comprobará cada día si tus contenedores necesitan actualizarse.
