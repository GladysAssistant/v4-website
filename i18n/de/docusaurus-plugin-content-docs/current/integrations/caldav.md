---
id: caldav
title: "CalDAV in Gladys: iCloud, Google Kalender, Synology und Nextcloud synchronisieren"
description: "Verbinde deinen Kalender per CalDAV mit Gladys Assistant. Schritt-für-Schritt-Einrichtung für iCloud, Google Kalender, Synology und Nextcloud inklusive App-Passwort, um Szenen über deine Termine auszulösen."
sidebar_label: CalDAV
keywords:
  - caldav
  - caldav google kalender
  - caldav icloud
  - caldav nextcloud
  - caldav synology
  - caldav app-passwort
  - kalender synchronisieren smart home
---

import JsonLd from '@site/src/components/seo/JsonLd';

CalDAV ist ein offener Standard, mit dem Anwendungen Kalendertermine von einem Kalenderserver lesen und synchronisieren können. Die meisten Kalenderdienste unterstützen ihn, darunter iCloud, Google Kalender, Synology Calendar und Nextcloud. Deshalb ist CalDAV ein bequemer, herstellerunabhängiger Weg, deinen bestehenden Kalender in eine andere App zu bringen.

In Gladys nutzt du CalDAV, um deinen Kalender mit diesen externen Diensten zu synchronisieren. Sobald deine Termine in Gladys sind, kannst du damit [Szenen](/de/docs/scenes/intro/) auslösen: die Heizung vor einem Meeting einschalten, eine Erinnerung zu Beginn eines Termins senden oder den Hausmodus ändern, wenn du im Urlaub bist.

Die meisten Dienste verlangen ein App-spezifisches Passwort statt deines Hauptpassworts. Die folgenden Schritte zeigen dir für jeden Dienst, wie du es erzeugst und wo du es einfügst.

## Verfügbare Dienste (getestet & andere)

1. [iCloud](#icloud)
2. [Google Calendar](#google-calendar)
3. [Synology Calendar](#synology-calendar)
4. [Nextcloud](#nextcloud)
5. [Andere](#others)

### iCloud {/* #icloud */}

Melde dich bei deinem Apple-Account an: [https://appleid.apple.com](https://appleid.apple.com)

Klicke auf „Passwort generieren“.

![iCloud](../../../../../static/img/docs/en/configuration/caldav/apple_1_app_password.png)

Gib einen Namen für dein Passwort ein, zum Beispiel „Gladys“.

![iCloud](../../../../../static/img/docs/en/configuration/caldav/apple_2_password_modal.png)

Notiere dir das generierte Passwort.

Öffne im Gladys-Dashboard die CalDAV-Konfigurationsseite.

![iCloud](../../../../../static/img/docs/en/configuration/caldav/apple_3_integration.png)

1. Wähle „iCloud-Kalender“
2. Behalte die Standard-URL bei
3. Gib deine Apple-ID ein (die E-Mail-Adresse, die mit deinem Apple-Account verknüpft ist)
4. Füge hier das zuvor generierte Passwort ein

![iCloud](../../../../../static/img/docs/en/configuration/caldav/apple_4_apple_config.png)

Klicke auf „Speichern“.

Erscheint eine Bestätigungsmeldung, synchronisiert Gladys deinen Kalender. Erscheint ein Fehler, prüfe die vorherigen Schritte und versuche es erneut.

### Google Calendar {/* #google-calendar */}

Melde dich bei deinem Google-Konto an: [https://myaccount.google.com/](https://myaccount.google.com/)

Gehe zum Bereich „Sicherheit“ und klicke auf „App-Passwörter“.

![Google Calendar](../../../../../static/img/docs/en/configuration/caldav/google_1_app_password.png)

1. Wähle „Kalender“ als App
2. Wähle „Andere“ als Gerät
3. Gib einen App-Namen ein (zum Beispiel „Gladys“), klicke auf „Generieren“ und notiere dir das generierte Passwort.

![Google Calendar](../../../../../static/img/docs/en/configuration/caldav/google_2_generate.png)

Öffne im Gladys-Dashboard die CalDAV-Konfigurationsseite (Tab Integrationen > Kalender).

![Google Calendar](../../../../../static/img/docs/en/configuration/caldav/apple_3_integration.png)

1. Wähle „Google Kalender“
2. Behalte die Standard-URL bei
3. Gib deine Google-E-Mail-Adresse ein
4. Füge hier das zuvor generierte Passwort ein

![Google Calendar](../../../../../static/img/docs/en/configuration/caldav/google_4_google_config.png)

Klicke auf „Speichern“. Erscheint eine Bestätigungsmeldung, synchronisiert Gladys deinen Kalender. Erscheint ein Fehler, prüfe die vorherigen Schritte und versuche es erneut.

### Synology Calendar {/* #synology-calendar */}

Öffne auf deiner Synology die Anwendung „Calendar“.

![Synology](../../../../../static/img/docs/en/configuration/caldav/synology_1_app_calendar.png)

1. Klicke neben deinem Kalender auf das kleine Dreieck
2. Klicke dann auf „CalDAV-Konto“

![Synology](../../../../../static/img/docs/en/configuration/caldav/synology_2_app_calendar.png)

Kopiere die URL für „macOS / iOS“.

![Synology](../../../../../static/img/docs/en/configuration/caldav/synology_3_calendar_url.png)

Öffne im Gladys-Dashboard die CalDAV-Konfigurationsseite (Tab Integrationen > Kalender).

![Synology](../../../../../static/img/docs/en/configuration/caldav/apple_3_integration.png)

1. Wähle „Synology Calendar“
2. Füge hier die zuvor kopierte URL ein
3. Gib deinen Synology-Benutzernamen ein
4. Gib hier dein Synology-Passwort ein

![Synology](../../../../../static/img/docs/en/configuration/caldav/synology_4_synology_config.png)

Klicke auf „Speichern“.

Erscheint eine Bestätigungsmeldung, synchronisiert Gladys deinen Kalender. Erscheint ein Fehler, prüfe die vorherigen Schritte und versuche es erneut.

### Nextcloud {/* #nextcloud */}

1. Öffne auf deiner Nextcloud-Instanz die Einstellungen und klicke auf den Bereich „Sicherheit“
2. Gib unten „Gladys“ ein und klicke auf „Neues App-Passwort erstellen“

Notiere dir das generierte Passwort.

![Nextcloud](../../../../../static/img/docs/en/configuration/caldav/nextcloud_1_app_password.png)

Klicke in der Kalender-App auf „Einstellungen & Import“.

![Nextcloud](../../../../../static/img/docs/en/configuration/caldav/nextcloud_2_config.png)

Dann auf „Primäre CalDAV-Adresse kopieren“.

![Nextcloud](../../../../../static/img/docs/en/configuration/caldav/nextcloud_3_config_url.png)

Öffne im Gladys-Dashboard die CalDAV-Konfigurationsseite (Tab Integrationen > Kalender).

![Nextcloud](../../../../../static/img/docs/en/configuration/caldav/apple_3_integration.png)

1. Wähle „Andere“
2. Füge hier die zuvor kopierte URL ein
3. Gib deinen Nextcloud-Benutzernamen ein
4. Füge hier das zuvor generierte Passwort ein

![Nextcloud](../../../../../static/img/docs/en/configuration/caldav/other_config.png)

Klicke auf „Speichern“.

Erscheint eine Bestätigungsmeldung, synchronisiert Gladys deinen Kalender. Erscheint ein Fehler, prüfe die vorherigen Schritte und versuche es erneut.

### Andere {/* #others */}

Für alle anderen Dienste:

1. Gib hier die CalDAV-URL ein
2. Gib hier deinen Benutzernamen oder deine E-Mail-Adresse ein
3. Gib dann dein Passwort ein (falls erforderlich)

![Andere Dienste](../../../../../static/img/docs/en/configuration/caldav/other_config.png)

## Häufig gestellte Fragen

### Was ist CalDAV?

CalDAV ist ein offener Standard auf Basis von WebDAV, mit dem Anwendungen auf Kalenderdaten eines Kalenderservers zugreifen und sie synchronisieren können. Er wird von den meisten Kalenderanbietern unterstützt, sodass eine App wie Gladys deine Termine aus iCloud, Google Kalender, Synology oder Nextcloud ohne dienstspezifische Integration lesen kann.

### Brauche ich mein Kontopasswort oder ein App-Passwort?

Bei den meisten Diensten brauchst du ein App-spezifisches Passwort, nicht dein Hauptpasswort. Bei iCloud, Google und Nextcloud kannst du in den Sicherheitseinstellungen ein eigenes Passwort für Gladys erzeugen, das du jederzeit widerrufen kannst, ohne dein Hauptpasswort zu ändern. Die Einrichtungsschritte oben zeigen dir, wo du es für den jeweiligen Dienst erzeugst.

### Wie verbinde ich Google Kalender per CalDAV?

Melde dich bei deinem Google-Konto an, öffne die Sicherheitseinstellungen und erstelle ein App-Passwort für „Kalender“. Gehe dann in Gladys auf die CalDAV-Konfigurationsseite, wähle „Google Kalender“, behalte die Standard-URL bei, gib deine Google-E-Mail-Adresse ein und füge das generierte App-Passwort ein. Gladys synchronisiert dann deine Termine.

### Wie verbinde ich meinen iCloud-Kalender?

Melde dich unter appleid.apple.com an und erzeuge ein App-spezifisches Passwort. Öffne in Gladys die CalDAV-Konfigurationsseite, wähle „iCloud-Kalender“, behalte die Standard-URL bei, gib die E-Mail-Adresse deiner Apple-ID ein und füge das Passwort ein. Funktioniert das Passwort nicht, stelle sicher, dass du ein App-spezifisches Passwort erzeugt hast und nicht dein normales Apple-ID-Passwort verwendest.

### Kann ich CalDAV mit jedem anderen Kalenderdienst nutzen?

Ja. Wenn dein Dienst CalDAV unterstützt, wähle in Gladys „Andere“ und gib die CalDAV-URL, deinen Benutzernamen oder deine E-Mail-Adresse sowie dein Passwort ein. Das funktioniert mit selbst gehosteten Servern wie Baïkal oder Radicale und mit den meisten Anbietern, die einen CalDAV-Endpunkt bereitstellen.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist CalDAV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CalDAV ist ein offener Standard auf Basis von WebDAV, mit dem Anwendungen auf Kalenderdaten eines Kalenderservers zugreifen und sie synchronisieren können. Er wird von den meisten Kalenderanbietern unterstützt, sodass eine App wie Gladys deine Termine aus iCloud, Google Kalender, Synology oder Nextcloud ohne dienstspezifische Integration lesen kann.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich für CalDAV mein Kontopasswort oder ein App-Passwort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bei den meisten Diensten brauchst du ein App-spezifisches Passwort, nicht dein Hauptpasswort. Bei iCloud, Google und Nextcloud kannst du in den Sicherheitseinstellungen ein eigenes Passwort für Gladys erzeugen, das du jederzeit widerrufen kannst, ohne dein Hauptpasswort zu ändern.",
        },
      },
      {
        "@type": "Question",
        name: "Wie verbinde ich Google Kalender per CalDAV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Melde dich bei deinem Google-Konto an, öffne die Sicherheitseinstellungen und erstelle ein App-Passwort für Kalender. Gehe dann in Gladys auf die CalDAV-Konfigurationsseite, wähle Google Kalender, behalte die Standard-URL bei, gib deine Google-E-Mail-Adresse ein und füge das generierte App-Passwort ein. Gladys synchronisiert dann deine Termine.",
        },
      },
      {
        "@type": "Question",
        name: "Wie verbinde ich meinen iCloud-Kalender per CalDAV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Melde dich unter appleid.apple.com an und erzeuge ein App-spezifisches Passwort. Öffne in Gladys die CalDAV-Konfigurationsseite, wähle iCloud-Kalender, behalte die Standard-URL bei, gib die E-Mail-Adresse deiner Apple-ID ein und füge das Passwort ein. Funktioniert es nicht, stelle sicher, dass du ein App-spezifisches Passwort erzeugt hast und nicht dein normales Apple-ID-Passwort verwendest.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich CalDAV mit jedem anderen Kalenderdienst nutzen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wenn dein Dienst CalDAV unterstützt, wähle in Gladys Andere und gib die CalDAV-URL, deinen Benutzernamen oder deine E-Mail-Adresse sowie dein Passwort ein. Das funktioniert mit selbst gehosteten Servern wie Baikal oder Radicale und mit den meisten Anbietern, die einen CalDAV-Endpunkt bereitstellen.",
        },
      },
    ],
  }}
/>
