---
title: Gladys Assistant ya es compatible con Debian 11 y Ubuntu > 20.04
description: Como Gladys funciona en Docker, podría parecer que es compatible con cualquier sistema por defecto, ¡pero no es tan sencillo!
authors: pierregilles
image: /img/presentation/gladys-debian-11.jpg
slug: gladys-assistant-compatible-with-debian-11
---

¡Hola a todos!

Me alegra anunciar que acabamos de publicar la compatibilidad con Debian 11 y Ubuntu > 20.04.

También hemos publicado un montón de mejoras que facilitan la instalación de Gladys en un NAS (Synology/Unraid).

En esta versión no hay funcionalidades nuevas: es sobre todo mucho trabajo de fondo y correcciones de bugs 🙂

{/* truncate */}

## ¿Qué hay de nuevo en Gladys Assistant 4.8.1?

### De CGroup v1 a v2

Como Gladys funciona íntegramente en Docker, podría parecer sencillo: Gladys debería poder funcionar sin problemas en cualquier sistema, ¿verdad?

Pero Gladys trabaja con el daemon de Docker y arranca nuevos contenedores para 2 integraciones: MQTT y Zigbee2mqtt.

Así que, en este aspecto, Gladys depende un poco del host.

En Gladys necesitamos obtener el ID del contenedor de Gladys que se está ejecutando.

En Debian 10 usábamos CGroup v1 para obtener el ID del contenedor en ejecución.

Lo que hacíamos era leer el archivo `/proc/self/cgroup` y obteníamos algo así:

```
3:rdma:/
12:cpuset:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
11:cpu,cpuacct:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
10:freezer:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
9:devices:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
8:blkio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
7:perf_event:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
6:net_cls,net_prio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
5:hugetlb:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
4:pids:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
2:memory:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
1:name=systemd:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
0::/system.slice/containerd.service
```

Después, analizábamos este archivo para extraer el ID del contenedor (la parte que va después de `/docker/`).

En Debian 11, los CGroups pasan a la versión 2 y funcionan de forma un poco distinta. El mismo archivo tiene este aspecto:

```
3:rdma:/
0::/system.slice/docker-2bb2c94b0c395fc8fdff9fa4ce364a3be0dd05792145ffc93ce8d665d06521f1.scope
```

Así que el análisis para obtener el ID del contenedor es algo diferente, ¡pero el ID sigue ahí!

Hemos escrito código específico para CGroup v1 y v2, y ahora somos compatibles con ambos.

### Las integraciones ahora usan los volúmenes personalizados

Imagina que arrancas Gladys con un volumen de Docker personalizado:

```
-v /my_special_folder:/var/lib/gladysassistant
```

En Gladys, quizá quieras arrancar Zigbee2mqtt/MQTT en la misma carpeta, y ahora es posible.

Gladys toma la misma carpeta del host y la usa para las integraciones Zigbee2mqtt y MQTT.

### Muchas correcciones de bugs

- Corregido un bug por el que, al modificar una cámara, el dispositivo se consultaba varias veces en cada intervalo de consulta ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))
- Corregido un bug en las escenas: el botón "Probar" de las peticiones HTTP no tenía en cuenta las cabeceras. ([#1475](https://github.com/GladysAssistant/Gladys/pull/1475))
- Corregido un bug en el panel: el nombre del panel no se actualizaba en la lista tras modificarlo. ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))
- Añadidas las traducciones que faltaban para el sensor de vibración. ([#1461](https://github.com/GladysAssistant/Gladys/pull/1461))

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los colaboradores

¡Gracias a todos los que han contribuido a esta versión y han dado su opinión en el foro!

Si quieres hablar de esta versión, ¡eres bienvenido en el [foro](https://community.gladysassistant.com/)!
