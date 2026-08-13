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
the page keeps moving even on quiet days. If GitHub or the forum is
unreachable during a build, the version committed in the repository is used
instead.

To regenerate it locally:

```bash
yarn load-dev-activity
```

## How to add new integrations ?

Don't add files into the `integrations` folder.

We use an AirTable spreadsheet to crowdsource the list of integrations.

Please contact us on the forum if you want write access to this spreadsheet.
