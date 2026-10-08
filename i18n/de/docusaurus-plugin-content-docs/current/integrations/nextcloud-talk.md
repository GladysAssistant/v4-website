---
id: nextcloud-talk
title: Nextcloud Talk
description: "Chatte über Nextcloud Talk mit Gladys Assistant: Lege ein Bot-Konto an, ermittle dein Unterhaltungs-Token und sende Anweisungen an dein Smart Home."
sidebar_label: Nextcloud Talk
---

Mit dieser Integration kannst du über die Nextcloud-App [Talk](https://nextcloud.com/talk/) mit Gladys sprechen.

Die App ist für Android, iOS und im Web verfügbar. Damit kommunizierst du mit Gladys Assistant, indem du Anweisungen gibst, Informationen erhältst oder Fragen beantwortest...

## Nextcloud-Konto für deinen Bot

Bots gibt es in Nextcloud Talk nicht von Haus aus. Du musst daher ein eigenes Nextcloud-Konto für deinen Bot anlegen.

Melde dich in Nextcloud mit dem Konto deines Bots an:
1. Öffne die Einstellungen und klicke auf den Tab „Sicherheit“
2. Gib ganz unten „Gladys“ ein und klicke auf „Neues App-Passwort erstellen“

Notiere dir das erzeugte Passwort

![Nextcloud-Talk-Passwort](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_1_app_password.png)

## Dein Unterhaltungs-Token ermitteln

So legst du fest, welche Nextcloud-Talk-Unterhaltung Gladys überwachen soll:
1. Öffne Nextcloud in einem **Browser** mit deinem **persönlichen Konto**
2. Öffne die App Talk
3. Starte eine Unterhaltung mit dem Konto deines Bots

![Unterhaltung in Nextcloud Talk starten](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_2_start_conversation.png)

4. Notiere dir das Token, du findest es in der URL der Unterhaltung

![Nextcloud-Talk-Token](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_3_token.png)

## Die vollständige Bot-Konfiguration für Nextcloud Talk in Gladys Assistant eintragen

Öffne „Integrationen“ -> „Nextcloud Talk“.

![Integration Nextcloud Talk](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_4_integration_list.png)

1. Gib die Basis-URL deiner Nextcloud-Instanz ein
2. Gib den Benutzernamen des Nextcloud-Kontos deines Bots ein
3. Füge hier das zuvor erzeugte Passwort ein
4. Füge das Unterhaltungs-Token ein

Klicke auf „Speichern“.

![Bot-Konfiguration in Gladys Assistant eintragen](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_5_configuration.png)

## Erste Unterhaltung zwischen Nextcloud Talk und Gladys Assistant

Schreibe in der Nextcloud-Web- oder Mobil-App deine erste Nachricht an Gladys Assistant, zum Beispiel: „Schalte das Licht in der Küche ein“.

Warte einen Moment und ......... Magie!!!

Dein Assistent antwortet dir! Mit [Gladys Plus](/de/plus/) versteht die integrierte KI natürliche Sprache. Siehe die [Dokumentation zur KI-Integration](/de/docs/integrations/openai).
