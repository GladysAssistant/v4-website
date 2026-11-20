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

## Building the site

A build of the four locales takes about four minutes on a GitHub runner, almost
all of it in the Rspack bundling step. Docusaurus already runs with every
`faster` option enabled (see `future` in `docusaurus.config.js`). The workflows
build cold: the Rspack persistent cache (`node_modules/.cache`) weighs several
gigabytes, for a build about a minute and a half shorter.

`build.sh` runs one `docusaurus build --locale <locale>` per locale instead of a
single `docusaurus build`. A single process never gives back the Rspack memory
of the locales it has already built (about 2.5 GB each) and peaks around 12 GB
on the fourth locale. One process per locale peaks around 5 GB, for the same
build time and the same output. This is why `docusaurus.config.js` spells out
the `baseUrl` of each translated locale: with a single `--locale`, Docusaurus
would otherwise drop the `/fr/`, `/de/` or `/es/` prefix, and build that locale
over the whole site. `build.sh` stops before building anything when a
translated locale has no `baseUrl`, so a new language needs one too.

The workflows take the Node version from `.node-version` and the Yarn version
from `packageManager` in `package.json` (through Corepack): update them there.

## Deploying on Cloudflare Workers

The site is served by `gladys-website`, a Cloudflare Worker with static assets
and no script, on the Workers Paid plan. It moved there from Cloudflare Pages in
November 2026: Pages refuses a deployment of more than 20,000 files, and every
external integration adds eight of them (an HTML page and a JavaScript chunk in
each of the four languages), so the site would have reached that limit at about
1,700 integrations. A Worker on the paid plan accepts 100,000 files.

The `Deploy` workflow (`.github/workflows/deploy.yml`) builds the site on
GitHub and uploads it with `wrangler deploy`, on every push to master and once
a day, so that the /dev/ page keeps moving on quiet days. It only ever deploys
master, also when started by hand from another branch. Building on GitHub
rather than on Cloudflare also lifts the 8 GB of memory and the 20-minute
timeout of their build machines: with 3,000 integrations the build peaks around
12 GB and takes about 12 minutes on four cores.

`wrangler.jsonc` configures the Worker. It applies the `_redirects` and
`_headers` files of the build, with the same limits as Pages (2,000 static and
100 dynamic redirects, 100 header rules). A few things Pages did on its own
are spelled out there:

- `not_found_handling` serves the nearest `404.html`, so a missing page under
  `/fr/` gets the French one;
- the first rule of `_headers` adds the headers Pages sent on every response
  (`Access-Control-Allow-Origin`, `X-Content-Type-Options`,
  `Referrer-Policy`), and other rules give the text files their charset.

One difference remains: a URL without its trailing slash (`/docs`) is
redirected to the slashed one with a 307, where Pages answered 308. The pages
and the sitemap only use slashed URLs.

### The domain

gladysassistant.com is attached to the Worker in the Cloudflare dashboard
(Workers & Pages > gladys-website > Settings > Domains & Routes), not in
`wrangler.jsonc`. Without `routes` in that file, a deployment leaves the
domains of the Worker as they are. Listing a domain there would make the file
the reference: every deployment would then replace the custom domains of the
Worker with the ones it lists, and remove a domain added in the dashboard only.

The Worker also answers at `gladys-website.gladysassistant.workers.dev`, which
`_headers` marks `noindex`.

### The Cloudflare token

`deploy.yml` and `preview.yml` read `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` from the `cloudflare` environment of the repository
(Settings > Environments), which only master can use. Without them the
workflows do nothing. The token can deploy to production: a repository secret
would reach every workflow, including one pushed on a branch by anyone with
write access, while the secrets of this environment only reach the jobs that
run on master, whose code went through review.

To replace the token, create one from the **Edit Cloudflare Workers** template
(Manage account > Account API tokens > Create token), limited to this account
and to the gladysassistant.com zone, and update the secret. If the environment
ever has to be recreated, set **Deployment branches and tags** to **Selected
branches and tags** with `master` before adding the secrets: an environment
that GitHub creates on its own, when a workflow refers to one that does not
exist, has no restriction.

### Previews of pull requests

Every pull request opened from a branch of this repository gets a preview at
`https://pr-<number>-gladys-website.gladysassistant.workers.dev`, marked
`noindex` like the other workers.dev addresses, and a comment with the link,
updated on every push. Two workflows share the work, so that the Cloudflare
token never runs next to the code of a pull request:

- `Node.js CI` (`.github/workflows/test.yml`) builds the pull request and keeps
  the build as an artifact for a day;
- `Preview` (`.github/workflows/preview.yml`) starts when that run ends,
  always from master, and uploads the artifact with
  `wrangler versions upload --preview-alias pr-<number>`. A version upload
  does not change what production serves.

Limits:

- Pull requests from forks get no preview, and neither do the pull requests
  of the `Refresh external integrations` workflow: GitHub starts no workflow
  on a pull request opened with its automatic token.
- A preview is served with the `wrangler.jsonc` of master: a pull request that
  changes it only shows the change once merged.
- Every preview is a version of the Worker. Cloudflare always keeps the 100
  most recent versions and the older ones for 30 days, and a preview link
  stops working once its version is deleted. Production can only be rolled
  back to one of those 100 versions, previews included.

### Serving the build locally

To serve the build locally exactly as the Worker does, redirects and headers
included:

```bash
CLOUDFLARE_DEPLOY=1 ./build.sh
npx wrangler dev
```

`CLOUDFLARE_DEPLOY=1` builds what production gets, without the image copies of
the translated locales that the rewrites of `_redirects` replace.

## How to refresh the development activity page?

The [/dev/](https://gladysassistant.com/dev/) page reads
`src/data/devActivity.json`: a snapshot of the Gladys repository (releases,
pull requests, contributors), of the weekly commits of the Gladys, v4-website
and gladys-gateway repositories added together (the list lives in
`src/utils/commitWeeks.js`), and of the accepted feature requests on the forum.

Nothing to do by hand: `build.sh` regenerates it on every deploy, and the
`Deploy` workflow also runs once a day, so the page keeps moving even on quiet
days. Whatever cannot be downloaded during
a build (GitHub unreachable, rate limit reached, forum down) simply keeps the
values committed in the repository, section by section, so a refresh never
fails the deploy.

To regenerate it locally:

```bash
yarn load-dev-activity
```

### About the GitHub rate limit

Without a token, GitHub allows 60 requests per hour and *per IP*, a budget a
shared machine often finds already spent: the GitHub half of the snapshot then
stops refreshing (the build log shows `403 rate limit exceeded`). The script
limits the damage by sending conditional requests: each answer is stored with
its `ETag` and the `304 Not Modified` replies do not count against the limit.

The workflows pass the automatic token of GitHub Actions (`GITHUB_TOKEN`),
which is enough. Locally, set a personal token as `DEV_ACTIVITY_GITHUB_TOKEN`
in `.env`, which raises the budget to 5000 requests per hour.

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
>> GitHub calls: GITHUB_TOKEN (Actions token, 377 characters)
>> GitHub calls: DEV_ACTIVITY_GITHUB_TOKEN (fine-grained token, 93 characters)
>> GitHub calls: no token (DEV_ACTIVITY_GITHUB_TOKEN and GITHUB_TOKEN are unset): […]
```

The name is deliberately specific: `GITHUB_TOKEN` is read by a lot of tooling
(and is the name GitHub Actions gives its own automatic token), so a variable
set for this script alone should not be handed to everything else running in
the build. `GITHUB_TOKEN` is still accepted as a fallback, which is what the
workflows use when they pass `secrets.GITHUB_TOKEN`.
