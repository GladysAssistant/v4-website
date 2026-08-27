# Gladys Assistant website

This is the repository of https://gladysassistant.com.

This website is built with [Docusaurus v2](https://v2.docusaurus.io/).

## How to contribute?

### Clone the repository

```
git clone https://github.com/GladysAssistant/v4-website
cd v4-website
```

### Install the dependencies

```
yarn
```

### Running the English website

```
npm start
```

### Running the French website

```
npm run start -- --locale fr
```

## How to refresh the development activity page?

The [/dev/](https://gladysassistant.com/dev/) page reads
`src/data/devActivity.json`: a snapshot of the Gladys repository (weekly
commits, releases, pull requests, contributors) and of the accepted feature
requests on the forum.

Nothing to do by hand: `build.sh` regenerates it on every deploy, and the
`refresh-dev-activity` workflow asks Cloudflare Pages for a daily rebuild so
the page keeps moving even on quiet days. Whatever cannot be downloaded during
a build (GitHub unreachable, rate limit reached, forum down) simply keeps the
values committed in the repository, section by section, so a refresh never
fails the deploy.

To regenerate it locally:

```bash
yarn load-dev-activity
```

### About the GitHub rate limit

Without a token, GitHub allows 60 requests per hour and *per IP*. Cloudflare
Pages builds run on shared IPs, so that budget is often already spent by
someone else and the GitHub half of the snapshot stops refreshing (the build
logs then show `403 rate limit exceeded`). The script limits the damage by
sending conditional requests: each answer is stored with its `ETag` and the
`304 Not Modified` replies do not count against the limit.

To refresh reliably, give the build a token: create a fine-grained personal
access token with read-only public access (no scope needed) and add it as a
`GITHUB_TOKEN` environment variable on the Cloudflare Pages project
(Settings > Environment variables). That raises the budget to 5000 requests
per hour. Locally, a `GITHUB_TOKEN` in `.env` does the same.

## How to add new integrations ?

Don't add files into the `integrations` folder.

We use an AirTable spreadsheet to crowdsource the list of integrations.

Please contact us on the forum if you want write access to this spreadsheet.
