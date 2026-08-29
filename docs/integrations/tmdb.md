---
id: tmdb
title: TMDB
description: "Display upcoming movie releases in Gladys Assistant with TMDB: create an account, get your API key and add an Upcoming Releases widget to your dashboard."
sidebar_label: TMDB
---

This integration lets you display upcoming movie releases in Gladys Assistant, using [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Create a TMDB account

To configure TMDB, first go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

Create a free account if you don't have one already.

![Create account TMDB](../../static/img/docs/en/configuration/tmdb/create-account-step-1.jpg)

Once logged in, open your account settings and go to the "API" section.

![Create account TMDB](../../static/img/docs/en/configuration/tmdb/create-account-step-2.jpg)

Click on "Create" (or "Request an API key" if this is your first time), choose "Developer", and fill in the short form describing your use (personal use is fine).

![Create account TMDB](../../static/img/docs/en/configuration/tmdb/create-account-step-3.jpg)

Your "API Key (v3 auth)" is generated instantly — this is the value Gladys needs.

![Create account TMDB](../../static/img/docs/en/configuration/tmdb/create-account-step-4.jpg)

## Enter the API key in Gladys Assistant

Go to "Integrations" -> "TMDB". Enter your API key, and click "Save".

![Add TMDB API key in Gladys Assistant](../../static/img/docs/en/configuration/tmdb/add-api-key.jpg)

## Add an Upcoming Releases widget to the dashboard

Go to the dashboard, and click on "Edit".

![Configure TMDB in Gladys Assistant](../../static/img/docs/en/configuration/tmdb/configure-gladys-1.jpg)

Add an "Upcoming Releases" widget.

![Configure TMDB in Gladys Assistant](../../static/img/docs/en/configuration/tmdb/configure-gladys-2.jpg)

Optionally choose how many days ahead to look for releases (15 days, 1 month or 2 months — 1 month by default), and the country whose theatrical release calendar you want to follow (2-letter code, ex. `FR`, `US`, `DE`... — France by default if left empty).

Click on "Save".

![Configure TMDB in Gladys Assistant](../../static/img/docs/en/configuration/tmdb/configure-gladys-3.jpg)

Voilà! Tap a poster to see its synopsis, trailer and a link to its TMDB page.

![Configure TMDB in Gladys Assistant](../../static/img/docs/en/configuration/tmdb/configure-gladys-4.jpg)
