# Gladys Assistant website

This is the repository of https://gladysassistant.com.

This website is built with [Docusaurus](https://docusaurus.io/) v3.

## How to contribute?

### Clone the repository

```
git clone https://github.com/GladysAssistant/v4-website
cd v4-website
```

### Install the dependencies

The project uses Yarn 4, installed through [Corepack](https://nodejs.org/api/corepack.html),
which ships with Node and reads the exact version from the `packageManager`
field of `package.json`:

```
corepack enable
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

### Running the German website

```
npm run start -- --locale de
```

German translations live in `i18n/de/` (docs, blog, UI strings); the guide
and comparison pages carry a `de` object in their `src/data/*Data.js` file.
External integration pages are generated in German by
`yarn load-external-integrations` (with the author's English documentation when
there is no German one). The France/Québec/Ontario-specific pages are not
translated and fall back to the English content.

### Running the Spanish website

```
npm run start -- --locale es
```

Spanish works exactly like German: translations live in `i18n/es/`, the guide
and comparison pages carry an `es` object in their `src/data/*Data.js` file,
and `yarn load-external-integrations` also generates the external integration
pages in Spanish (with the author's English documentation when there is no
Spanish one). The France/Québec/Ontario-specific pages fall back to English.

## Build time on Cloudflare Pages

A cold build of the four locales takes a bit over three minutes, almost all of
it in the Rspack bundling step. Docusaurus already runs with every `faster`
option enabled (see `future` in `docusaurus.config.js`), so the only lever left
is to keep the Rspack persistent cache between deploys: with the cache warm the
same build takes about a minute and a half.

That cache lives in `node_modules/.cache`, which Cloudflare Pages restores for
Docusaurus projects once **build caching** is enabled on the project
(Settings > Build > Build cache > Enable). The build log then opens with a
"Restoring from build cache" line; without it every deploy starts cold. The
cache is purged after seven days without a build, which the daily
`refresh-dev-activity` workflow prevents.

Yarn's download cache is restored as well (`.cache/yarn` in the home folder),
which is why `.yarnrc.yml` points Yarn 4's `globalFolder` there instead of its
default `~/.yarn/berry`.

Two other things keep the install step short:

- `puppeteer` is not a dependency any more: it downloaded a whole Chrome at
  every install while only `scripts/clean_integrations.js` uses it. Install it
  locally with `yarn add --dev puppeteer` when running that script, without
  committing the change.
- `DEV_ACTIVITY_GITHUB_TOKEN` (see below) also spares the build the wait on
  the anonymous GitHub rate limit, up to 30 seconds per deploy.

### Cloudflare Pages build system v3

The project builds on the v2 build system; Cloudflare moves v2 projects to v3
on February 23, 2027 and already offers the switch in the project settings.
v3 only updates the preinstalled tools (Node 22, Yarn 4, Python 3.13), it is
not a build speed lever, but two of its changes matter here:

- v3 no longer reads `engines` in `package.json` to pick the Node version.
  The Pages project already sets `NODE_VERSION` to 24, so nothing changes
  there; the `.node-version` file at the root mirrors that choice so that
  local installs and the GitHub workflows build with the same Node as
  production.
- v3 no longer detects the Yarn version from `yarn.lock` and defaults to
  Yarn 4. The project is on Yarn 4 (see `packageManager` in `package.json`),
  so it builds on v3 as is. Set the `YARN_VERSION` environment variable on
  the Pages project to the same version as `packageManager`, for production
  and preview builds alike: it is required on v2, whose default is Yarn 3,
  and keeps v3 from switching Yarn under the project when its default moves.

## How to refresh the development activity page?

The [/dev/](https://gladysassistant.com/dev/) page reads
`src/data/devActivity.json`: a snapshot of the Gladys repository (releases,
pull requests, contributors), of the weekly commits of the Gladys, v4-website
and gladys-gateway repositories added together (the list lives in
`src/utils/commitWeeks.js`), and of the accepted feature requests on the forum.

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

To refresh reliably, give the build a token and add it as a
`DEV_ACTIVITY_GITHUB_TOKEN` environment variable on the Cloudflare Pages
project (Settings > Environment variables). That raises the budget to 5000
requests per hour. Locally, the same variable in `.env` does the same.

Only public data is read, so the token needs no permission on anything:

- **classic token**: create it with no scope checked at all. A scopeless
  classic token reads public data, which is all this script does.
- **fine-grained token**: under **Repository access**, pick **Public
  Repositories (read-only)**; nothing to tick under Repository or Account
  permissions. Give it an **expiration date under a year**: the
  GladysAssistant organization refuses fine-grained tokens living longer than
  366 days, "no expiration" included, and answers `403 Forbidden` on every
  call — the build log quotes that refusal in full. Such a token has to be
  rotated once a year; a classic token has no such limit.

The build log always opens with what it got, so a deploy that refreshes nothing
says whether the token even reached it:

```
>> GitHub calls: DEV_ACTIVITY_GITHUB_TOKEN (fine-grained token, 93 characters)
>> GitHub calls: no token (DEV_ACTIVITY_GITHUB_TOKEN and GITHUB_TOKEN are unset): […]
```

The name is deliberately specific: `GITHUB_TOKEN` is read by a lot of tooling
(and is the name GitHub Actions gives its own automatic token), so a variable
set for this script alone should not be handed to everything else running in
the build. `GITHUB_TOKEN` is still accepted as a fallback, which is what the
workflows use when they pass `secrets.GITHUB_TOKEN`.

## How to add new integrations ?

Don't add files into the `integrations` folder.

We use an AirTable spreadsheet to crowdsource the list of integrations.

Please contact us on the forum if you want write access to this spreadsheet.
