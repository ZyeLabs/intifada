# Handoff

1. [Important](#1-important)
2. [Template map](#2-template-map)
3. [Loops](#3-loops)
4. [Gotchas](#4-gotchas)
5. [Brand tokens](#5-brand-tokens)
6. [Fonts](#6-fonts)
7. [Known bugs](#7-known-bugs)
8. [Roadmap](#8-roadmap)

Where every file lives: [README](README.md#where-things-are)

[CONTENT-MODEL.md](CONTENT-MODEL.md) · [BEHAVIOUR-SPEC.md](BEHAVIOUR-SPEC.md) · [css/README.md](src/assets/css/README.md)

---

## 1. Important

**Upcoming vs. past must be a query, not a stored field.**

This kit stores `section: "upcoming" | "completed"` on each event, because a static site has no "now". Don't copy that. Derive it:

```php
// Upcoming
'meta_key'     => 'starts_at',
'meta_value'   => current_time('mysql'),
'meta_compare' => '>=',
'orderby'      => 'meta_value',
'order'        => 'ASC',

// Completed: same, with '<' and DESC
```

Everything else follows — which section a card lands in, the `Status` line, ordering, the `--past` modifier, whether the homepage "Upcoming" strip renders at all.

---

## 2. Template map

Six templates, not fifteen pages.

| Kit | WordPress |
|---|---|
| `_includes/layouts/base.njk` | `header.php` + `footer.php` (split at `</header>` / `<footer>`) |
| `_includes/partials/site-header.njk` | `header.php` |
| `_includes/partials/site-footer.njk` | `footer.php` |
| `_includes/partials/datebar.njk` | part of `header.php` — render with `wp_date()` |
| `index.njk` | `front-page.php` |
| `events.njk` | `archive-event.php` |
| `_includes/layouts/event.njk` | `single-event.php` |
| `_includes/partials/event-card.njk` | `content-event.php` |
| `about-us.njk`, `donate.njk` | `page.php` |
| `news.njk` | `home.php` / `archive.php` — empty, see §8.2 |
| `_includes/partials/poster.njk` | drop it — `wp_get_attachment_image()` does srcset |
| `events/event.njk` | drop it — the template hierarchy does this |

Poster slots: **677px** (hero) and **~396px** (card).

---

## 3. Loops

| Loop | File | Container | Item |
|---|---|---|---|
| Events grid ×2 | `events.njk` | `.collection-catalogue__grid` | `.catalogue-card` |
| Related events | `event.njk` | `.events-catalogue__grid` | `.catalogue-card` |
| Homepage "Latest" | `index.njk` | `.home-latest__list` | `.home-latest__item` |
| Homepage "Upcoming" | `index.njk` | `.home-action-list` | `.home-action-card` |
| Lead story (single) | `index.njk` | `.home-hero__lead` | `.lead-story` |
| Header nav | `site-header.njk` | `.site-header__nav` | `.site-header__nav-link` |
| Drawer nav | `site-header.njk` | `.site-header__drawer-nav` | `.site-header__drawer-link` |
| Footer nav | `site-footer.njk` | `.site-footer__links` | `.site-footer__link` |
| Social | `site-footer.njk` | `.site-footer__social` | `.site-footer__social-link` |
| About principles | `about-us.njk` | `.about-principles__list` | `details.about-principle` |
| About approach | `about-us.njk` | `.about-approach__grid` | `.about-approach-card` |
| Donate impact | `donate.njk` | `.donate-impact__list` | `.donate-impact__card` |

**Important:**

- The **drawer nav is a second DOM tree**, not restyled CSS. One menu location (`primary`), two `wp_nav_menu()` calls.
- The **footer nav is a different menu** — it has a 5th item (Islamic Relief). Register it separately.

---

## 4. Gotchas

- **276 internal `.html` links** become permalinks. If the site is indexed, **add redirects** from `/events/<slug>.html`.
- **`{{ root }}`** in paths is an Eleventy artifact (makes `file://` work). Use `get_template_directory_uri()`.
- **Google Fonts `<link>`** → `wp_enqueue_style`, or self-host. See [Fonts](#6-fonts).
- **Don't reorder the CSS imports.** Same-specificity rules rely on source order — [css/README.md](src/assets/css/README.md).
- **Don't add `width`/`height` to the posters.** The CSS sets `width: 100%` with no height, so an HTML `height` wins as a presentational hint and the image renders at full size. `aspect-ratio` is already there.

---

## 5. Brand tokens

[`src/assets/css/base/tokens.css`](src/assets/css/base/tokens.css). Build `theme.json` from this.

**Colour**

| Token | Value | |
|---|---|---|
| `--si-red` | `#bc0100` | brand red |
| `--si-red-bright` | `#dc2626` | |
| `--si-green` | `#246b40` | |
| `--si-ink` | `#1b1c1c` | body text |
| `--si-copy` | `#5c5c5c` | secondary text |
| `--si-muted` | `#a8a29e` | |
| `--si-bg` | `#fbf9f9` | page |
| `--si-bg-soft` | `#f5f3f3` | |
| `--si-bg-paper` | `#ffffff` | cards |
| `--si-border` | `#d9d9d9` | |
| `--si-line` | `#ebbbb4` | |
| `--si-divider-soft` | `#ebebeb` | |
| `--si-divider-inverse` | `rgba(255,255,255,.12)` | on dark |
| `--si-dark` | `#1b1c1c` | **unused** |
| `--si-dark-line` | `#292524` | |

**Type** — see [Fonts](#6-fonts) below

| Token | Family |
|---|---|
| `--si-font-display` | Epilogue |
| `--si-font-heading` | Public Sans |
| `--si-font-body` | Inter |
| `--si-font-serif` | Newsreader |
| `--si-font-editorial` | Lora |
| `--si-font-accent` | Open Sans |

**Layout** — `--si-shell` `1253px` · `--si-footer-shell` `946px` · `--si-gutter` `24px` · `--si-section-gutter` `48px`

**Motion** — `--si-motion-fast` `160ms` · `--si-motion-base` `280ms` · `--si-motion-slow` `520ms` · `--si-ease-standard` `cubic-bezier(.22,1,.36,1)` · `--si-ease-soft` `cubic-bezier(.25,.1,.25,1)`

**17 colours have no token**, some near-duplicates of ones that exist (`#8f0000` vs `--si-red` `#bc0100`; `#e63946` vs `--si-red-bright`; `#1a5030` vs `--si-green`). Intentional or drift? Left alone — changing them changes the design.

---

## 6. Fonts

**There are no font files in this repo.** All six families come from Google Fonts via a single `<link>`.

- URL: `googleFonts` in [`src/_data/site.json`](src/_data/site.json)
- Emitted in [`src/_includes/layouts/base.njk`](src/_includes/layouts/base.njk)

| Family | Token | Weight it pulls |
|---|---|---|
| Epilogue | `--si-font-display` | 800, 900 |
| Public Sans | `--si-font-heading` | 400–900 + italic |
| Inter | `--si-font-body` | 400–800 + italic |
| Newsreader | `--si-font-serif` | variable, optical size |
| Lora | `--si-font-editorial` | 400, 700 |
| Open Sans | `--si-font-accent` | 800 |

In WordPress: `wp_enqueue_style` for the `<link>`, or **self-host** — it's 320 KB from a third-party origin, render-blocking on the critical path.

Two easy cuts if you want them:

- **Lora (37 KB) and Open Sans (18 KB) are each used by exactly one element**, both on the homepage. 55 KB for two elements.
- **Newsreader is 118 KB** because Google serves it as a variable font with an optical-size axis. Request a static instance if you only need one size.

Neither was done here — both change how those elements look.

---

## 7. Known bugs

Not fixed, because fixing them changes the design. Your call.

| Bug | |
|---|---|
| **Mobile drawer can't be dismissed by tapping outside** | Diagnosed and fixed in [§8.1](#81-fix-the-mobile-drawer). |
| **`catalogue-card--past` is styled but never emitted** | Completed events look identical to upcoming ones. Once §1 is done you have the flag — one line. |
| **Homepage runs the same query twice** | "Latest" and "Upcoming events" show the same 4 events. Content decision. |
| **Two Canal Walk screenings share one poster** | The source files were byte-identical artwork for the 14:00 and 20:00 shows. Either the 14:00 poster was never made, or an event has the wrong image. **Needs a human.** |
| **Hijri transliteration is inconsistent** | Event data says "Dhu al-Qidah"; `Intl` outputs "Dhū al-Qaʿdah". Needs a hijri library or a stored field. |
| **Placeholder poster is 1x** | 677×1000, soft on retina. No higher-res source exists. |
| **Two events are orphaned** | `community-briefing-event` and `social-intifada-launches-official-website` have pages but nothing links to them. In WP they'd surface once published. The second isn't really an event (a website launch, "time" 02:00). |

### Worth doing

- **Render the date bar server-side** with `wp_date()`. Currently JS overwrites a build-time fallback.
- **Trim the fonts** — see [Fonts](#6-fonts).

### Not in this site

- **No contact page, no email address.** The homepage "Get in touch" links to About Us.
- **No bank details, no donation tiers.** One iKhokha link.
- **No team, bios or photos.**

---

## 8. Roadmap

### 8.1 Fix the mobile drawer

The menu only closes via the X. Tapping outside does nothing, and phones have no Escape key.

The backdrop exists, is styled, and has a click handler in `site.js`. It can never fire:

1. **The drawer is full-screen** — 390×844 in a 390×844 viewport. Nothing left to tap.
2. **The backdrop is clipped to the header.** It's `position: fixed; inset: 0` but measures **390×151**. `.site-header` has `backdrop-filter: blur(18px)`, and an element with a backdrop-filter becomes the containing block for its fixed descendants — so `inset: 0` resolves against the header, not the viewport.

Pick one:

- **Keep the full-screen menu** and delete the backdrop (element, CSS, handler). It's dead weight.
- **Restore the side drawer** it was designed for: constrain the drawer (`max-width: ~78vw`) and move the backdrop out of `<header>` so it stops being clipped.

### 8.2 News

The nav "News" item links to `x.com/socialintifada`. They want a real news section.

**Important: the design already exists.** [`pages/news.css`](src/assets/css/pages/news.css) has ~99 selectors of finished, unused CSS — news index, feature block, filter bar, date calendar, archive cards, article detail, share bar, related posts, alternate card.

Nothing references it, so PurgeCSS strips it from the build. It costs nothing and is waiting in `src/`. **Look at it before commissioning a design.**

Build: native `post` type. `home.php` / `archive.php` / `single.php`. Repoint the nav item. Most of the work is markup.

### 8.3 Campaigns

A campaign is a movement — an umbrella other content belongs to.

**Model it as a taxonomy, not a post type.** Register `campaign` against `event`, `post`, `resource`, later `product`:

```
"The Voice of Hind Rajab — SA Tour"
  ├─ 10 events
  ├─ 3 news posts
  ├─ 2 resources
  └─ merch
```

`taxonomy-campaign.php` then assembles itself. Tag a new screening into the campaign and it appears there.

**Important: declare it early.** Retro-fitting a taxonomy across four post types that already hold content is much worse than doing it up front.

If a campaign also needs its own editorial page (hero, body, progress, CTA), add term meta.

Design: `campaign-card` exists in [`components/cards.css`](src/assets/css/components/cards.css). Index and detail pages don't.

### 8.4 Resources

PDFs, educational videos, external links. Public, no email gate.

**No design exists.** `catalogue-card` is the closest pattern to adapt.

One `resource` CPT with a `type` field, not three post types:

| Field | Notes |
|---|---|
| `title`, `description` | |
| `type` | `pdf` \| `video` \| `link` |
| `file` | attachment (pdf). Show file size and type on the link. |
| `video_url` | **embed** — don't self-host video on WordPress |
| `external_url` | |
| `thumbnail` | |
| `campaign` | taxonomy (§8.3) |

### 8.5 Store

Physical merch and digital/donation items, eventually both. Physical goods mean variants, stock and shipping — so **full WooCommerce**. No design exists.

**Decide before building:**

- **Payment gateway.** Donations currently go through one **iKhokha** link. Does iKhokha have a Woo plugin, or does this become PayFast / Peach / Stripe? Commercial decision, per-transaction cost.
- **Fulfilment.** Print-on-demand vs. holding stock.
- **Shipping.** SA only or international? Flat rate or by weight?
- **Are donations products?** Usually cleaner to keep them separate — mixing muddles reporting and may have tax consequences.

**Do this last.** Biggest piece, blocks nothing.

### 8.6 Order

1. Port + fix the drawer (§8.1)
2. **Campaigns taxonomy (§8.3)** — structural, do it early even though it looks like a feature
3. News (§8.2) — design is done, fastest win
4. Resources (§8.4)
5. Store (§8.5)
