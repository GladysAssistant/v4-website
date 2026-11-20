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

`build.sh` runs one `docusaurus build --locale <locale>` per locale instead of a
single `docusaurus build`. A single process never gives back the Rspack memory
of the locales it has already built (about 2.5 GB each) and peaks around 12 GB
on the fourth locale, where Cloudflare Pages builds stalled until the 20-minute
timeout. One process per locale peaks around 5 GB, for the same build time and
the same output. This is why `docusaurus.config.js` spells out the `baseUrl` of
each translated locale: with a single `--locale`, Docusaurus would otherwise
drop the `/fr/`, `/de/` or `/es/` prefix, and build that locale over the whole
site. `build.sh` stops before building anything when a translated locale has
no `baseUrl`, so a new language needs one too.

That cache lives in `node_modules/.cache`, which Cloudflare Pages restores for
Docusaurus projects once **build caching** is enabled on the project
(Settings > Build > Build cache > Enable). The build log then opens with a
"Restoring from build cache" line; without it every deploy starts cold. The
cache is purged after seven days without a build, which the daily
`refresh-dev-activity` workflow prevents.

Yarn's download cache is restored as well (`.cache/yarn` in the home folder),
which is why `.yarnrc.yml` points Yarn 4's `globalFolder` there instead of its
default `~/.yarn/berry`.

`DEV_ACTIVITY_GITHUB_TOKEN` (see below) also keeps the install step short: it
spares the build the wait on the anonymous GitHub rate limit, up to 30 seconds
per deploy.

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

## Deploying on Cloudflare Workers

Cloudflare Pages refuses a deployment of more than 20,000 files, and every
external integration adds eight of them (an HTML page and a JavaScript chunk in
each of the four languages): the site reaches that limit at about 1,700
integrations. A Worker with static assets on the Workers Paid plan accepts
100,000 files, so the site is moving from Pages to a Worker. Nothing else
changes: `build.sh` produces the same `build` folder, and Workers apply the
same `_redirects` and `_headers` files, with the same limits. The first rule
of `_headers` spells out the three headers Pages adds to every response on its
own and a Worker does not.

The `Deploy` workflow (`.github/workflows/deploy.yml`) builds the site on
GitHub and uploads it with `wrangler deploy --config wrangler.workers.jsonc`,
on every push to master and once a day. It only ever deploys master, also
when started by hand from another branch. Building on GitHub rather than on
Cloudflare also lifts the 8 GB of memory and the 20-minute timeout of their
build machines: with 3,000 integrations the build peaks around 12 GB and takes
about 12 minutes on four cores. The workflow builds cold, without the Rspack
cache described above, which weighs several gigabytes.

One-time setup:

1. Subscribe the Cloudflare account to **Workers Paid**. On the free plan a
   Worker is limited to 20,000 files, like Pages.
2. Create an API token from the **Edit Cloudflare Workers** template
   (Manage account > Account API tokens > Create token), limited to this
   account and to the gladysassistant.com zone.
3. Store it in a GitHub environment that only master can use, not as a
   repository secret. The token can deploy to production: a repository secret
   reaches every workflow, including one pushed on a branch by anyone with
   write access, while the secrets of this environment only reach the jobs
   that run on master, whose code went through review.
   1. Settings > Environments > New environment, named `cloudflare`. If a
      workflow already ran, GitHub has created it on its own, without any
      restriction: open it.
   2. Under **Deployment branches and tags**, choose **Selected branches and
      tags** and add `master`.
   3. Add two environment secrets: `CLOUDFLARE_API_TOKEN` (the token) and
      `CLOUDFLARE_ACCOUNT_ID`. Without them the workflows do nothing.
4. Run the workflow (Actions > Deploy > Run workflow). The site is then
   online at `gladys-website.<account>.workers.dev`, marked `noindex` by
   `_headers`, while Cloudflare Pages keeps serving gladysassistant.com.
   Check it there: pages in the four languages, a redirect of `_redirects`,
   an unknown URL (404 page), and an image under `/fr/img/`. Compare the
   response headers with production as well (`curl -sI` on both), not only
   the status codes.
5. Move the domain. Cloudflare refuses to create a Worker custom domain on a
   hostname that still has the CNAME record of the Pages project, so the site
   is unreachable between the two steps below: do them back to back, at a
   quiet hour.
   1. Delete the DNS record of gladysassistant.com that points to
      `v4-website.pages.dev`, and remove the domain from the Pages project
      (Custom domains).
   2. Add gladysassistant.com to the Worker in the dashboard (Settings >
      Domains & Routes > Add > Custom domain), which takes effect at once,
      where a deployment takes several minutes.

   Then list the domain under `routes` in `wrangler.workers.jsonc` (done for
   gladysassistant.com), so that the configuration file says what the
   dashboard does. From then on the file is the reference: every deployment
   replaces the custom domains of the Worker with the ones it lists, so a
   domain added in the dashboard only is removed by the next deployment.

Once the domain is served by the Worker, the Pages project can be deleted,
along with what only exists for it: the `refresh-dev-activity` workflow (the
`Deploy` workflow runs every day by itself), the `CF_PAGES` test in
`build.sh`, the `v4-website.pages.dev` rule of `_headers`, and the sections of
this README about Cloudflare Pages. `DEV_ACTIVITY_GITHUB_TOKEN` is not needed
by the workflow, which uses the automatic `GITHUB_TOKEN`.

One difference with Pages: a URL without its trailing slash (`/docs`) is
redirected to the slashed one with a 307, where Pages answers 308. The pages
and the sitemap only use slashed URLs.

### Previews of pull requests

Every pull request opened from a branch of this repository gets a preview at
`https://pr-<number>-gladys-website.<subdomain>.workers.dev`, marked `noindex`
like the other workers.dev addresses, and a comment with the link, updated on
every push. Two workflows share the work, so that the Cloudflare token never
runs next to the code of a pull request:

- `Node.js CI` (`.github/workflows/test.yml`) builds the pull request, as it
  always did, and keeps the build as an artifact for a day;
- `Preview` (`.github/workflows/preview.yml`) starts when that run ends,
  always from master, and uploads the artifact with
  `wrangler versions upload --preview-alias pr-<number>`. A version upload
  does not change what production serves.

Limits:

- Pull requests from forks get no preview, and neither do the pull requests
  of the `Refresh external integrations` workflow: GitHub starts no workflow
  on a pull request opened with its automatic token.
- A preview is served with the `wrangler.workers.jsonc` of master: a pull
  request that changes it only shows the change once merged.
- Every preview is a version of the Worker. Cloudflare always keeps the 100
  most recent versions and the older ones for 30 days, and a preview link
  stops working once its version is deleted. Production can only be rolled
  back to one of those 100 versions, previews included.
- The first preview needs the Worker to exist: `Deploy` must have run once.

### Serving the build locally

To serve the build locally exactly as the Worker does, redirects and headers
included:

```bash
./build.sh
npx wrangler dev --config wrangler.workers.jsonc
```

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
