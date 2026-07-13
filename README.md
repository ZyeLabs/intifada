# Social Intifada — template kit

HTML/CSS/JS for socialintifada.org, structured to become a WordPress theme.

**Read [HANDOFF.md](HANDOFF.md) first.**

## Run

```bash
npm install
npm start      # http://localhost:8080
npm run build  # -> _site/
```

## Where things are

| You want | It's here |
|---|---|
| **HTML templates** | [`src/`](src/) — see the table below |
| **CSS** | [`src/assets/css/`](src/assets/css/) — 15 partials, `site.css` is the entry point. [README](src/assets/css/README.md) |
| **Brand tokens** | [`src/assets/css/base/tokens.css`](src/assets/css/base/tokens.css) — all `--si-*`. Listed in [HANDOFF §5](HANDOFF.md#5-brand-tokens) |
| **JavaScript** | [`src/assets/js/site.js`](src/assets/js/site.js) — one file, no dependencies. Spec: [BEHAVIOUR-SPEC.md](BEHAVIOUR-SPEC.md) |
| **Fonts** | **No font files.** Google Fonts `<link>` — see [HANDOFF §6](HANDOFF.md#6-fonts) |
| **Images — event posters** | [`src/assets/events/`](src/assets/events/) — WebP, two widths each (`-800`, `-1355`) |
| **Images — logos, favicon, hero** | [`src/assets/img/`](src/assets/img/) |
| **Content / data** | [`src/_data/`](src/_data/) — `events.json` is the main one. [CONTENT-MODEL.md](CONTENT-MODEL.md) |

### HTML templates

| File | Page |
|---|---|
| [`src/_includes/layouts/base.njk`](src/_includes/layouts/base.njk) | the page shell — `<head>`, header, footer |
| [`src/_includes/layouts/event.njk`](src/_includes/layouts/event.njk) | an event page |
| [`src/_includes/partials/site-header.njk`](src/_includes/partials/site-header.njk) | header + mobile drawer |
| [`src/_includes/partials/site-footer.njk`](src/_includes/partials/site-footer.njk) | footer |
| [`src/_includes/partials/datebar.njk`](src/_includes/partials/datebar.njk) | the English/Islamic date bar |
| [`src/_includes/partials/event-card.njk`](src/_includes/partials/event-card.njk) | the event card (used in every listing) |
| [`src/_includes/partials/poster.njk`](src/_includes/partials/poster.njk) | poster `<img>` + srcset |
| [`src/index.njk`](src/index.njk) | homepage |
| [`src/events.njk`](src/events.njk) | events index |
| [`src/about-us.njk`](src/about-us.njk) | about |
| [`src/donate.njk`](src/donate.njk) | donate |
| [`src/news.njk`](src/news.njk) | news (empty — see [HANDOFF §8.2](HANDOFF.md#82-news)) |
| [`src/events/event.njk`](src/events/event.njk) | generates the 10 event pages from `events.json` |

Templates are [Nunjucks](https://mozilla.github.io/nunjucks/) — HTML with `{{ }}` and `{% %}`. Maps to PHP templates directly.

## Docs

- **[HANDOFF.md](HANDOFF.md)** — template map, gotchas, what to build next
- **[CONTENT-MODEL.md](CONTENT-MODEL.md)** — CPT fields
- **[BEHAVIOUR-SPEC.md](BEHAVIOUR-SPEC.md)** — the JS, with exact values
- **[src/assets/css/README.md](src/assets/css/README.md)** — stylesheet structure
