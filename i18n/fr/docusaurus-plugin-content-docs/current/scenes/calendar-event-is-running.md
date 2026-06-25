---
id: calendar-event-is-running-condition
title: Condition sur un évènement de calendrier
description: "Ajoutez une condition à une scène Gladys Assistant selon un événement de calendrier en cours, pour n'exécuter vos automatisations qu'en vacances, au sport ou en réunion."
sidebar_label: Un évènement du calendrier est en cours
---

Cette condition vous permet de continuer ou stopper une scène uniquement si un évènement dans le calendrier est actuellement en cours / n'est pas en cours.

Imaginons que vous vouliez mettre une condition sur une scène pour qu'elle ne se déclenche que lorsque que vous êtes en vacances, ou au contraire quand vous êtes au travail.

Vous pouvez connecter votre calendrier dans Gladys (via l'intégration [Caldav](/fr/docs/integrations/caldav/)).

Ensuite, vous pouvez créer la condition suivante :

![Un évènement est en cours dans le calendrier](../../../../../static/img/docs/fr/scenes/calendar-event-is-running/calendar-event-is-running.jpg)

Si un évènement est en cours dans les calendriers "Perso" ou "Sport", et qu'il contient le mot "travail" dans le titre, alors la scène continuera. Sinon, la scène sera stoppée.

Vous pouvez ensuite utiliser l'évènement trouvé dans la scène, par exemple dans l'action "Envoyer un message" :

![Message avec variable](../../../../../static/img/docs/fr/scenes/calendar-event-is-running/msg-calendar-is-running-fr.jpg)
