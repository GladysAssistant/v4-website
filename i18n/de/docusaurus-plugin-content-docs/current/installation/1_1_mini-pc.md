---
id: mini-pc
title: Gladys Assistant mit Gladys Assistant OS auf einem Mini-PC installieren
description: "Installiere Gladys Assistant mit Gladys Assistant OS, unserem offiziellen Installer, auf einem Mini-PC: USB-Stick beschreiben, Mini-PC davon starten, ein paar Fragen beantworten, und Gladys installiert sich von selbst, Updates inklusive."
sidebar_label: Installation auf einem Mini-PC
keywords:
  - gladys assistant os
  - gladys mini pc
  - gladys mini pc installieren
  - gladys iso
  - gladys ubuntu server installieren
  - bester mini pc hausautomation
  - mini pc heimserver
---

import JsonLd from '@site/src/components/seo/JsonLd';

**Gladys Assistant OS** ist unser offizieller Installer für Mini-PCs. Damit wird jeder Mini-PC zu einer eigenen Gladys-Assistant-Zentrale: Du schreibst das Image auf einen USB-Stick, startest den Mini-PC davon, beantwortest ein paar Fragen, und Gladys installiert sich von selbst.

Keine Kommandozeile, kein Docker, das du von Hand einrichten musst: Gladys Assistant OS kümmert sich um alles und hält Gladys anschließend selbstständig auf dem neuesten Stand.

:::tip[Welchen Mini-PC soll ich kaufen?]
Modelle, technische Daten, Stromverbrauch und Budget: [Der beste Mini-PC für die Hausautomation](/de/mini-pc-home-automation/). Ich betreibe Gladys seit Jahren auf einem Beelink-Mini-PC und empfehle den [Beelink Mini S13](https://www.amazon.com/s?k=Beelink+Mini+S13&tag=gladproj-21).
:::

## Was Gladys Assistant OS für dich erledigt

Unter der Haube ist Gladys Assistant OS ein ganz normales **Ubuntu Server 26.04 LTS**, das für Gladys eingerichtet ist:

- es installiert Ubuntu Server auf der internen Festplatte des Mini-PCs,
- beim ersten Start installiert es Docker, lädt die neueste Version von Gladys herunter und startet sie,
- es **aktualisiert Gladys automatisch**, sobald eine neue Version erscheint,
- es installiert die **Sicherheitsupdates von Ubuntu** automatisch,
- es erkennt deine Zeitzone,
- und Gladys ist von jedem Gerät in deinem Netzwerk unter **`http://gladysassistant.local`** erreichbar.

Gladys Assistant OS ist Open Source: Der Code liegt auf [GitHub](https://github.com/GladysAssistant/ubuntu-server-gladys).

## Was du brauchst

- Einen **Mini-PC** (oder einen PC) mit einem **Intel- oder AMD-Prozessor** (x86-64), der im **UEFI**-Modus startet, was bei praktisch jedem Computer der letzten zehn Jahre der Fall ist. Plane mindestens **8 GB RAM** ein.
- Eine **interne SSD** (NVMe, SATA oder eMMC) mit mindestens 16 GB im Mini-PC.
- Ein **Ethernet-Kabel**, das mit deinem Router verbunden ist. Der Installer unterstützt kein WLAN.
- Einen **USB-Stick mit 4 GB oder mehr**.
- Einen **Bildschirm und eine Tastatur**, nur während der Installation. Danach läuft der Mini-PC eigenständig, ohne Bildschirm.
- Einen Computer, um das Image herunterzuladen und auf den USB-Stick zu schreiben.

:::warning[Die interne Festplatte des Mini-PCs wird gelöscht]
Gladys Assistant OS löscht die Festplatte, auf der es installiert wird. Gelöscht wird erst, nachdem du es im Installer bestätigt hast, aber sichere vorher alles, was du behalten möchtest. Auch der USB-Stick wird gelöscht.
:::

:::info[Auf einem Raspberry Pi?]
Gladys Assistant OS ist für Computer mit Intel- oder AMD-Prozessor gemacht. Auf einem Raspberry Pi verwendest du stattdessen unser [offizielles Raspberry-Pi-Image](/de/docs/installation/raspberry-pi/).
:::

## Schritt 1: Gladys Assistant OS herunterladen

Lade das Image von Gladys Assistant OS herunter (eine `.iso`-Datei mit etwa 2 GB):

<p>
  <a class="button button--primary button--lg" href="https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso">Gladys Assistant OS herunterladen</a>
</p>

Über diesen Link bekommst du immer die neueste Version. Die Versionshinweise findest du auf [GitHub](https://github.com/GladysAssistant/ubuntu-server-gladys/releases).

<details>
<summary>Optional: Prüfen, ob der Download unversehrt ist</summary>

Lade die [Prüfsummendatei](https://download.gladysassistant.com/gladys-assistant-installer-amd64.iso.sha256) herunter und lege sie in denselben Ordner wie das Image. Führe dann in diesem Ordner Folgendes aus:

Unter Linux:

```bash
sha256sum -c gladys-assistant-installer-amd64.iso.sha256
```

Unter macOS:

```bash
shasum -a 256 -c gladys-assistant-installer-amd64.iso.sha256
```

Beide Befehle müssen mit `OK` antworten.

Unter Windows, in der PowerShell:

```powershell
Get-FileHash .\gladys-assistant-installer-amd64.iso -Algorithm SHA256
```

Der angezeigte Hash muss mit dem in der `.sha256`-Datei übereinstimmen (öffne sie mit dem Editor).

</details>

## Schritt 2: Das Image auf einen USB-Stick schreiben

Das Image muss mit einem speziellen Werkzeug auf den USB-Stick **geschrieben** werden: Die `.iso`-Datei einfach auf den Stick zu kopieren, funktioniert nicht.

1. Lade [balenaEtcher](https://etcher.balena.io/) herunter und installiere es. Es ist für Windows, macOS und Linux verfügbar.
2. Stecke den USB-Stick in deinen Computer.
3. Klicke in balenaEtcher auf **Flash from file** und wähle `gladys-assistant-installer-amd64.iso` aus.
4. Klicke auf **Select target** und wähle deinen USB-Stick aus. Prüfe genau, ob es das richtige Laufwerk ist: Es wird gelöscht.
5. Klicke auf **Flash!** und warte, bis das Schreiben und die Überprüfung abgeschlossen sind.

## Schritt 3: Den Mini-PC vom USB-Stick starten

1. Verbinde den Mini-PC über das **Ethernet-Kabel** mit deinem Router und schließe dann Bildschirm, Tastatur und USB-Stick an.
2. Schalte den Mini-PC ein und drücke sofort mehrmals die Taste für das **Bootmenü**: **F7** bei Beelink, **F10** bei Intel NUC und meist **F12**, **F11** oder **Esc** bei anderen Marken.
3. Wähle im Bootmenü deinen USB-Stick aus (sein Name beginnt oft mit `UEFI:`).

Das Menü von Gladys Assistant OS erscheint, der Eintrag **Install Gladys Assistant** ist bereits markiert. Nach 3 Sekunden startet er von selbst.

:::tip[Der Mini-PC startet nicht vom USB-Stick?]
Öffne die BIOS-Einstellungen (meist mit **Entf** bzw. **Del** oder **F2** beim Einschalten), prüfe, ob der Computer im **UEFI**-Modus startet (nicht „Legacy“ oder „CSM“), und setze den USB-Stick an die erste Stelle der Bootreihenfolge. Wenn er dann immer noch nicht startet, deaktiviere in denselben Einstellungen **Secure Boot**.
:::

## Schritt 4: Die Fragen des Installers beantworten

Der Installer stellt nur ein paar Fragen. Du bewegst dich mit den **Pfeiltasten** und **Tab**, setzt oder entfernst einen Haken mit der **Leertaste** und bestätigst mit **Enter**.

1. **Sprache**: Englisch ist vorausgewählt. Wähle deine Sprache: Die folgenden Bildschirme und danach auch die Einrichtungsseite von Gladys verwenden sie.
2. **Tastatur**: Das Tastaturlayout deiner Sprache wird vorgeschlagen (wenn du Deutsch wählst, zum Beispiel das deutsche QWERTZ-Layout). Prüfe es sorgfältig, denn gleich gibst du dein Passwort ein.
3. **Festplatte**:
   - Wenn der Mini-PC **eine einzige interne Festplatte** hat, gibt es nichts auszuwählen: Gladys Assistant OS installiert sich automatisch darauf und nutzt die gesamte Festplatte.
   - Wenn er **mehrere Festplatten** hat, fragt der Installer, welche verwendet werden soll: Behalte die Option, die die ganze Festplatte verwendet (*Use an entire disk*), wähle die Festplatte aus, lass die LVM-Option, wie sie ist, und bestätige dann die Übersicht mit **Fertig** (*Done*).

   In beiden Fällen erscheint anschließend das Fenster zur Bestätigung (*Confirm destructive action*): Wähle **Weiter** (*Continue*), um die Festplatte zu löschen und die Installation zu starten. Vor diesem Schritt wird nichts gelöscht.

4. **Dein Konto**: Gib deinen Namen, einen Benutzernamen und ein Passwort ein. Das ist das einzige Konto auf dem Rechner (es gibt kein Standardpasswort): Bewahre das Passwort an einem sicheren Ort auf, du brauchst es für die Wartung. Der Installer fragt außerdem nach einem Servernamen, aber der Rechner heißt immer `gladys`, du kannst also irgendetwas eingeben.
5. **SSH**: **OpenSSH-Server installieren** (*Install OpenSSH server*) ist standardmäßig angehakt. Lass den Haken gesetzt, damit du dich später von deinem Computer aus per Fernzugriff am Mini-PC anmelden kannst. Wenn du das nie vorhast, kannst du ihn entfernen.

Die Installation läuft dann ein paar Minuten lang von selbst.

## Schritt 5: Gladys installiert sich von selbst

Am Ende der Installation startet der Mini-PC neu: **Zieh den USB-Stick ab** (wenn eine Meldung dich auffordert, das Installationsmedium zu entfernen, entferne es und drücke dann **Enter**).

Bei diesem ersten Start installiert Gladys Assistant OS Docker, lädt Gladys herunter und startet es. Du kannst den Fortschritt verfolgen:

- auf dem Bildschirm des Mini-PCs,
- oder von deinem Computer oder Smartphone aus, unter der **Einrichtungsadresse**, die auf dem Bildschirm angezeigt wird (zum Beispiel `http://192.168.1.42`).

Der Download von Gladys ist der längste Schritt, und wie lange er dauert, hängt von deiner Internetverbindung ab. Lass den Mini-PC bis zum Schluss mit dem Ethernet-Kabel verbunden.

:::note[Kein Grund zur Sorge]
Hat der Mini-PC keinen Internetzugang, wartet die Einrichtung bei **Warten auf eine Internetverbindung…** und macht von selbst weiter, sobald die Verbindung wieder steht. Fällt der Strom aus, schalte den Mini-PC einfach wieder ein: Die Einrichtung macht dort weiter, wo sie aufgehört hat.
:::

## Schritt 6: Gladys öffnen

Sobald auf dem Bildschirm **Gladys Assistant ist bereit** steht, öffne **`http://gladysassistant.local`** in deinem Browser, auf einem Computer oder Smartphone im selben Netzwerk. Wenn du die Einrichtungsseite offen gelassen hast, wechselt sie von selbst zu Gladys (lade sie bei Bedarf neu).

Falls sich `gladysassistant.local` nicht öffnet, verwende stattdessen die Adresse, die auf dem Bildschirm des Mini-PCs darunter angezeigt wird (zum Beispiel `http://192.168.1.42`). Manche Netzwerke unterstützen diese lokalen Namen nicht, zum Beispiel manche Android-Smartphones, Gastnetzwerke oder Router mit Client-Isolation.

Jetzt musst du nur noch dein Konto anlegen und dein Zuhause einrichten: siehe [Dein Smart Home konfigurieren](/de/docs/#configuring-your-smart-home). Bildschirm und Tastatur kannst du abziehen, der Mini-PC braucht sie nicht mehr.

:::tip
Gib dem Mini-PC eine feste IP-Adresse, indem du in den Einstellungen deines Routers eine DHCP-Reservierung anlegst: Dann ändert sich seine Adresse nie.
:::

## Updates

- **Gladys aktualisiert sich selbst.** [Watchtower](https://github.com/nicholas-fedor/watchtower) wird zusammen mit Gladys installiert und spielt jede neue Version automatisch ein. Du musst nichts tun.
- **Die Sicherheitsupdates von Ubuntu werden automatisch installiert.** Der Mini-PC startet allerdings nie von selbst neu: Manche Updates (zum Beispiel des Linux-Kernels) werden erst nach einem Neustart wirksam. Starte den Mini-PC deshalb ab und zu neu, zum Beispiel mit `sudo reboot` über SSH. Gladys startet danach von selbst wieder.
- Wenn eine neue Version von Gladys Assistant OS erscheint, musst du nichts neu installieren: Neue Versionen sind nur für neue Installationen relevant.

## Für Fortgeschrittene

Gladys Assistant OS ist ein ganz normales Ubuntu Server, du behältst also die volle Kontrolle über deinen Rechner. Ein paar nützliche Hinweise, wenn du dich im Terminal wohlfühlst:

- **Fernzugriff** (wenn du OpenSSH behalten hast): `ssh dein-benutzer@gladys.local` oder mit der IP-Adresse des Mini-PCs.
- **Die Daten von Gladys** liegen in `/var/lib/gladysassistant`.
- **Gladys und Watchtower** werden mit Docker Compose gestartet, über `/opt/gladys/compose.yaml`. Dein Konto kann `docker` ohne `sudo` verwenden (melde dich nach der Installation einmal neu an, falls es nach `sudo` verlangt).
- **Diagnose**: `sudo gladys-diagnostics` zeigt den Zustand des Rechners an. Die Ausgabe enthält keine Passwörter oder sonstigen Geheimnisse, du kannst sie also im [Forum](https://community.gladysassistant.com/) teilen, wenn du Hilfe brauchst.
- **Zeitzone**: Sie wird automatisch erkannt. Um sie zu ändern, zum Beispiel auf `Europe/Berlin`:

```bash
sudo timedatectl set-timezone Europe/Berlin
```

```bash
echo GLADYS_TZ=Europe/Berlin | sudo tee /opt/gladys/.env
```

```bash
docker compose -f /opt/gladys/compose.yaml up -d gladys
```

## Fehlerbehebung

**Der Bildschirm bleibt bei „Warten auf eine Internetverbindung…“ stehen**: Der Mini-PC hat keinen Internetzugang. Prüfe das Ethernet-Kabel und deinen Router: Die Einrichtung macht von selbst weiter, ohne Neustart, sobald die Verbindung funktioniert.

**`gladysassistant.local` öffnet sich nicht**: Dein Netzwerk unterstützt keine lokalen Namen. Verwende die Adresse, die auf dem Bildschirm des Mini-PCs angezeigt wird.

**Der Browser zeigt immer noch die Einrichtungsseite an**: Gladys ist noch nicht bereit. Warte, bis auf dem Bildschirm **Gladys Assistant ist bereit** steht, und lade die Seite dann neu.

**Der Bildschirm zeigt „Einrichtung kann nicht fortgesetzt werden“ an**: Melde dich am Mini-PC an (drücke **Strg+Alt+F2**, um eine Anmeldeaufforderung zu erhalten, oder nutze SSH) und führe `sudo gladys-diagnostics` aus. Bitte dann im [Forum](https://community.gladysassistant.com/) um Hilfe und füge die Ausgabe bei.

Wie du die Logs von Gladys selbst einsiehst, erfährst du unter [Gladys-Logs herunterladen](/de/docs/installation/logs/).

## Lieber manuell installieren?

Mit Gladys Assistant OS ist der gesamte Mini-PC für Gladys reserviert. Wenn du Ubuntu Server oder Debian lieber selbst installieren oder Gladys auf einem Rechner betreiben möchtest, der bereits andere Aufgaben erledigt (ein NAS, ein Server, eine virtuelle Maschine), folge der [Anleitung zur Docker-Installation](/de/docs/installation/docker/).

## Häufig gestellte Fragen

### Was ist Gladys Assistant OS?

Gladys Assistant OS ist der offizielle Installer von Gladys Assistant für Mini-PCs. Es installiert Ubuntu Server 26.04 LTS, Docker und Gladys und hält Gladys anschließend automatisch auf dem neuesten Stand. Du schreibst es auf einen USB-Stick, startest den Mini-PC davon und beantwortest ein paar Fragen: ganz ohne Kommandozeile.

### Welchen Mini-PC empfehlt ihr für Gladys?

Wir nutzen und empfehlen den Beelink Mini S13. Er ist leistungsstark, leise, energieeffizient und betreibt Gladys langfristig zuverlässig. Gladys Assistant OS ist für jeden Mini-PC mit Intel- oder AMD-Prozessor gemacht, der im UEFI-Modus startet: Plane mindestens 8 GB RAM und eine SSD ein.

### Warum einen Mini-PC statt eines Raspberry Pi verwenden?

Ein Mini-PC bietet dir mehr CPU-Leistung, mehr RAM und schnelleren, zuverlässigeren Speicher als ein Raspberry Pi – meist zu einem ähnlichen Gesamtpreis, sobald du Gehäuse, Netzteil und SSD dazurechnest. Diese Lösung empfehlen wir, damit Gladys langfristig flüssig läuft.

### Kann ich Gladys Assistant OS über WLAN installieren?

Nein, der Installer braucht ein Ethernet-Kabel mit Internetzugang. Eine Kabelverbindung ist außerdem zuverlässiger für eine Smart-Home-Zentrale, die rund um die Uhr läuft.

### Löscht Gladys Assistant OS meinen Mini-PC?

Ja. Gladys Assistant OS löscht die interne Festplatte, auf der es installiert wird, nachdem es dich um Bestätigung gebeten hat. Sichere vor der Installation alles, was du behalten möchtest.

### Kann ich den Mini-PC trotzdem noch für andere Dinge nutzen?

Ja. Gladys Assistant OS ist ein ganz normales Ubuntu Server: Du kannst dich per SSH anmelden und neben Gladys weitere Docker-Container betreiben. Die automatischen Updates betreffen nur Gladys und Watchtower, niemals deine anderen Container.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist Gladys Assistant OS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys Assistant OS ist der offizielle Installer von Gladys Assistant für Mini-PCs. Es installiert Ubuntu Server 26.04 LTS, Docker und Gladys und hält Gladys anschließend automatisch auf dem neuesten Stand. Du schreibst es auf einen USB-Stick, startest den Mini-PC davon und beantwortest ein paar Fragen: ganz ohne Kommandozeile.",
        },
      },
      {
        "@type": "Question",
        name: "Welchen Mini-PC empfehlt ihr für Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir nutzen und empfehlen den Beelink Mini S13. Er ist leistungsstark, leise, energieeffizient und betreibt Gladys langfristig zuverlässig. Gladys Assistant OS ist für jeden Mini-PC mit Intel- oder AMD-Prozessor gemacht, der im UEFI-Modus startet: Plane mindestens 8 GB RAM und eine SSD ein.",
        },
      },
      {
        "@type": "Question",
        name: "Warum einen Mini-PC statt eines Raspberry Pi verwenden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ein Mini-PC bietet dir mehr CPU-Leistung, mehr RAM und schnelleren, zuverlässigeren Speicher als ein Raspberry Pi – meist zu einem ähnlichen Gesamtpreis, sobald du Gehäuse, Netzteil und SSD dazurechnest. Diese Lösung empfehlen wir, damit Gladys langfristig flüssig läuft.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich Gladys Assistant OS über WLAN installieren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein, der Installer braucht ein Ethernet-Kabel mit Internetzugang. Eine Kabelverbindung ist außerdem zuverlässiger für eine Smart-Home-Zentrale, die rund um die Uhr läuft.",
        },
      },
      {
        "@type": "Question",
        name: "Löscht Gladys Assistant OS meinen Mini-PC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Gladys Assistant OS löscht die interne Festplatte, auf der es installiert wird, nachdem es dich um Bestätigung gebeten hat. Sichere vor der Installation alles, was du behalten möchtest.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich den Mini-PC trotzdem noch für andere Dinge nutzen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Gladys Assistant OS ist ein ganz normales Ubuntu Server: Du kannst dich per SSH anmelden und neben Gladys weitere Docker-Container betreiben. Die automatischen Updates betreffen nur Gladys und Watchtower, niemals deine anderen Container.",
        },
      },
    ],
  }}
/>
