---
id: freebox-delta
title: Instalar Gladys Assistant en una Freebox Delta
description: "Instala Gladys Assistant en una Freebox Delta creando una máquina virtual con Docker. Guía paso a paso para una instalación autoalojada."
sidebar_label: Instalar en una Freebox Delta
---

## En una Freebox Delta

Este tutorial explica cómo instalar Gladys en una Freebox Delta (se hace con Docker).

### Crear una máquina virtual en la Freebox Delta

Primero, accede a la interfaz de la Freebox en la siguiente dirección: mafreebox.free.fr.

![FreeboxOS](../../../../../static/img/docs/en/installation/freebox-delta/freeboxos.jpg)

Haz clic en "VMs". Aparecerá esta ventana:

![Añadir una VM](../../../../../static/img/docs/en/installation/freebox-delta/add-vm.jpg)

Elige un nombre para la VM, por ejemplo `Gladys`.

Selecciona la opción "Elegir un sistema operativo preinstalado de una lista".

Haz clic en "Siguiente".

![Añadir una VM](../../../../../static/img/docs/en/installation/freebox-delta/add-vm-2.jpg)

Selecciona el sistema que quieres instalar, por ejemplo `Ubuntu`.

Introduce una clave SSH pública o una contraseña.

Elige un nombre de usuario, por ejemplo `gladys`.

Haz clic en "Siguiente".

![Añadir una VM](../../../../../static/img/docs/en/installation/freebox-delta/add-vm-3.jpg)

Haz clic en "Finalizar".

La máquina virtual (VM) está lista. Haz clic en "Encender" para iniciar la VM.

![Añadir una VM](../../../../../static/img/docs/en/installation/freebox-delta/start-vm.jpg)

Conéctate por SSH a tu VM y actualiza el sistema:

```bash
sudo apt update
sudo apt upgrade
```

### Instalar Docker en la Freebox Delta

Escribe los siguientes comandos, uno por uno, para instalar Docker en la Freebox Delta.

```bash
sudo apt install docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker gladys
```

Después cierra tu sesión SSH y vuelve a conectarte para asegurarte de que se apliquen los cambios.

### Iniciar Gladys

Para iniciar Gladys, ejecuta el siguiente comando en tu VM:

```bash
docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--cgroupns=host \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
-v /run/udev:/run/udev:ro \
gladysassistant/gladys:v5
```

## Actualizar Gladys automáticamente con Watchtower

Puedes usar Watchtower para actualizar Gladys automáticamente cuando haya una nueva versión disponible. Para ello, inicia un contenedor de Watchtower:

```
docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  nickfedor/watchtower \
  --cleanup --include-restarting
```

### Acceder a Gladys

Puedes acceder a Gladys en `http://gladysassistant.local`, el nombre con el que Gladys se anuncia en tu red local mediante mDNS. Si tu red bloquea mDNS, escribe en su lugar la IP de tu VM en el navegador.

![Acceder a Gladys](../../../../../static/img/docs/en/installation/freebox-delta/freebox-vm-success.jpg)
