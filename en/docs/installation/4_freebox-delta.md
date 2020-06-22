---
id: freebox-delta
title: Freebox Delta
sidebar_label: Freebox Delta
---

## On a Freebox Delta

This tutorial is for Freebox Delta owner who wants to install Gladys with Docker.

### Create a virtual machine on the Freebox Delta

First, go to the Freebox interface at the following address: mafreebox.free.fr.

<img src="/en/img/docs/installation/freebox-delta/freeboxos.PNG" alt="FreeboxOs" class="img-responsive" />

Click on "VMs". This window appears:

<img src="/en/img/docs/installation/freebox-delta/add-vm.PNG" alt="Add a VM" class="img-responsive" />

Choose a name for the VM, for example Gladys.

Select the option "Choose a pre-installed operating system from a list".

Click on "Next".

<img src="/en/img/docs/installation/freebox-delta/add-vm-2.PNG" alt="Ajouter une VM" class="img-responsive" />

Select the system to install, for example Ubuntu.

Enter a public SSH key or password.

Choose a username, for example galdys.

Click on "Next".

<img src="/en/img/docs/installation/freebox-delta/add-vm-3.PNG" alt="Ajouter une VM" class="img-responsive" />

Click on "Finish".

The VM is ready, click on "Switch on" to start the VM.

<img src="/en/img/docs/installation/freebox-delta/start-vm.PNG" alt="Ajouter une VM" class="img-responsive" />

Access your VM in SSH and update the system.

```bash
sudo apt update
sudo apt upgrade
```

### Install Docker on the Raspberry Pi

```bash
sudo apt install docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker gladys
```

Then exit your SSH session, and login again.

### Start Gladys

To launch Gladys, run the following command on your VM:

```bash
docker run -d \
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
gladysassistant/gladys:4.0.0-beta-arm
```

## Auto-Upgrade Gladys with Watchtower

You can use Watchtower to upgrade automatically Gladys when a new version is available. To do so, start a Watchtower container:

```
docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower:armhf-latest \
  --cleanup
```

### Accessing Gladys

You can access Gladys directly by typing the IP of your VM in your browser.

<img src="/en/img/docs/installation/freebox-delta/freebox-vm-success.PNG" alt="Access VM" class="img-responsive" />
