---
title: Gladys Assistant ist jetzt kompatibel mit Debian 11 & Ubuntu > 20.04
description: Da Gladys in Docker läuft, könnte man meinen, es sei automatisch mit jedem System kompatibel – aber so einfach ist es nicht!
authors: pierregilles
image: /img/presentation/gladys-debian-11.jpg
slug: gladys-assistant-compatible-with-debian-11
---

Hallo zusammen,

Ich freue mich, ankündigen zu können, dass wir gerade die Kompatibilität mit Debian 11 und Ubuntu > 20.04 veröffentlicht haben.

Außerdem haben wir eine Reihe von Verbesserungen veröffentlicht, die die Installation von Gladys auf einem NAS (Synology/Unraid) erleichtern.

In diesem Release gibt es keine neuen Features – es steckt vor allem viel langfristige Arbeit & Bugfixing darin 🙂

{/* truncate */}

## Was ist neu in Gladys Assistant 4.8.1?

### CGroup v1 zu v2

Da Gladys komplett in Docker läuft, könnte man meinen, es sei ganz einfach: Gladys sollte doch auf jedem System problemlos laufen, oder?

Aber Gladys arbeitet mit dem Docker-Daemon und startet für 2 Integrationen eigene Container: MQTT & Zigbee2mqtt.

In diesem Punkt ist Gladys also ein Stück weit an den Host gebunden.

In Gladys müssen wir die Container-ID des aktuell laufenden Gladys-Containers ermitteln.

Unter Debian 10 haben wir dafür CGroup v1 verwendet.

Wir haben die Datei `/proc/self/cgroup` gelesen und ungefähr Folgendes erhalten:

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

Diese Datei haben wir dann geparst, um die Container-ID zu extrahieren (der Teil nach `/docker/`).

Unter Debian 11 sind CGroups jetzt in Version 2 und funktionieren etwas anders. Dieselbe Datei sieht so aus:

```
3:rdma:/
0::/system.slice/docker-2bb2c94b0c395fc8fdff9fa4ce364a3be0dd05792145ffc93ce8d665d06521f1.scope
```

Das Parsen zur Ermittlung der Container-ID ist also etwas anders, aber die ID ist immer noch da!

Wir haben eigenen Code für CGroup v1 & v2 geschrieben und unterstützen jetzt beide.

### Eigene Volumes werden jetzt von den Integrationen verwendet

Stell dir vor, du startest Gladys mit einem eigenen Docker-Volume:

```
-v /my_special_folder:/var/lib/gladysassistant
```

In Gladys möchtest du Zigbee2mqtt/MQTT vielleicht im selben Ordner starten – und das ist jetzt möglich.

Gladys übernimmt denselben Ordner auf dem Host und verwendet ihn für die Zigbee2mqtt- & MQTT-Integration.

### Jede Menge Bugfixes

- Fehler behoben, durch den ein Kamera-Gerät nach dem Bearbeiten mehrfach in seinem Abfrageintervall abgefragt wurde ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))
- Fehler in Szenen behoben: Der „Testen“-Button für HTTP-Anfragen hat die Header nicht berücksichtigt. ([#1475](https://github.com/GladysAssistant/Gladys/pull/1475))
- Fehler im Dashboard behoben: Der Name des Dashboards wurde nach einer Änderung in der Liste nicht aktualisiert. ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))
- Fehlende Übersetzungen für den Vibrationssensor hinzugefügt. ([#1461](https://github.com/GladysAssistant/Gladys/pull/1461))

## Wie aktualisiere ich?

Um Gladys zu aktualisieren, empfehlen wir Watchtower: Es aktualisiert deinen Container automatisch, sobald eine neue Version erscheint. Siehe die [Dokumentation](/de/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Danke an alle Mitwirkenden

Danke an alle, die zu diesem Release beigetragen und im Forum ihr Feedback gegeben haben!

Wenn du über dieses Release sprechen möchtest, bist du im [Forum](https://community.gladysassistant.com/) herzlich willkommen!
