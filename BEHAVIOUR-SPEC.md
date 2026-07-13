# Behaviour spec

[`src/assets/js/site.js`](src/assets/js/site.js) — no dependencies. Native `Element.animate`, `IntersectionObserver`, `matchMedia`.

Everything is driven by `data-` attributes on the markup. Keep the attributes and it ports unchanged.

WordPress: `wp_enqueue_script(..., [], null, true)`.

---

## Don't break these

**1. Reduced motion works by not running the reveal engine.** Nothing is hidden by CSS — only JS sets a "from" state — so skipping it renders everything in place.

**Never move the hidden state into CSS.** Reduced-motion users, and anyone whose JS fails, would get a blank page.

**2. `word-stagger` splits headings into per-word spans.** It sets `aria-label` on the parent and `aria-hidden` on the spans, so screen readers still read one string.

---

## Mobile nav drawer

`[data-mobile-nav]` (the `<header>`). **Only below 760px.**

| Attribute | Element |
|---|---|
| `data-mobile-nav-toggle` | burger |
| `data-mobile-nav-drawer` | panel |
| `data-mobile-nav-backdrop` | scrim |
| `data-mobile-nav-close` | X |
| `data-mobile-nav-link` | links in the drawer |

**Open** — un-hide drawer + backdrop, then on the *next* `requestAnimationFrame` set `aria-expanded="true"`, add `.is-nav-open` to the header and `.site-body--nav-open` to `<body>` (scroll lock), focus the first focusable element.

The rAF split matters — without it the CSS transition has no start state.

**Close** — reverse, restore focus, then `hidden = true` **after 240ms** so the transition plays.

**Closes on:** toggle, X, backdrop, any drawer link (no focus restore), **Escape**.

**Focus trap:** Tab / Shift+Tab wrap between first and last focusable.

**Breakpoint:** crossing up to desktop force-closes.

> **The backdrop handler can never fire** — the drawer is full-screen and the backdrop is clipped to the header. The menu only closes via the X. Fix: [HANDOFF §8.1](HANDOFF.md#81-fix-the-mobile-drawer).

---

## Header

On scroll (passive) and resize, rAF-throttled:

- toggles `.is-header-condensed` when `scrollY > 24`
- writes header `offsetHeight` into `--si-header-offset` on `<html>`

---

## Reveal engine

Every `[data-animate]` gets an `IntersectionObserver`.

- threshold: `data-animate-threshold`, default **0.15**
- delay: `data-animate-delay`, **in seconds**
- fires **once**, unless `data-animate-once="false"`
- children of a `[data-animate-group]` are driven by the group

| `data-animate` | From → To | Duration | Easing |
|---|---|---|---|
| `fade-up` | `opacity .001`, `translate3d(0,24px,0)` → `opacity 1`, `translate3d(0,0,0) scale(1)` | 620ms | soft |
| `fade-left` | `translate3d(-24px,0,0)` → centre | 620ms | soft |
| `fade-right` | `translate3d(24px,0,0)` → centre | 620ms | soft |
| `scale-in` | `opacity .001`, `scale(.92)` → `scale(1)` | 620ms | soft |
| `clip-reveal` | `clip-path inset(0 0 18% 0)`, `opacity .001`, `scale(1.02)` → `inset(0 0 0 0)`, `opacity 1`, `scale(1)` | 900ms | standard |
| `line-grow` | `transform-origin: left center`, `scaleX(0)` → `scaleX(1)` | 680ms | standard |
| `word-stagger` | per word: `opacity 0`, `translate3d(0,1.05em,0)` → in place | 720ms, **35ms/word** | standard |
| `draw-in` | per SVG path: `stroke-dasharray/offset = getTotalLength()` → `strokeDashoffset 0` | 900ms, **60ms/path** | standard |

- soft = `cubic-bezier(0.25, 0.1, 0.25, 1)` · standard = `cubic-bezier(0.22, 1, 0.36, 1)`
- `opacity: .001`, not `0` — keeps the box rendered
- `data-animate-origin="top"` flips `fade-up` to `-24px`

## Stagger groups

`[data-animate-group="stagger"]` — observe the container, animate its direct children (skipping `[hidden]`).

- `opacity .001`, `translate3d(0,24px,0)` → in place
- 620ms, soft
- step: **70ms** desktop, **50ms** below 760px
- start offset from the container's `data-animate-delay`

## Parallax

`[data-parallax]` → first `img` / `video` / `iframe` inside.

- amount: **0.14** if `data-parallax="medium"`, else **0.08**
- on scroll (passive, rAF): `offset = clamp((viewportCentre − elementCentre) × amount, −40, 40)` px
- written to `--si-parallax-offset`; CSS applies `translate3d(0, var(--si-parallax-offset), 0) scale(1.06)`
- **disabled** under reduced motion or ≤760px

## Mobile collapse

`details[data-mobile-collapse]` → `open = !matches("(max-width: 760px)")`. Re-evaluated on breakpoint change.

## Date bar

- `[data-date-gregorian]` ← `Intl.DateTimeFormat('en-ZA', {weekday, day, month, year})`
- `[data-date-hijri]` ← `Intl.DateTimeFormat('en-u-ca-islamic-umalqura', …)`, era stripped, `" AH"` appended

Both overwrite a build-time fallback. **In WordPress use `wp_date()`** — then it's never stale and the JS is pure enhancement.

> Outputs "Dhū al-Qaʿdah" while event data says "Dhu al-Qidah". HANDOFF §7.

---

## Dead attributes

Nothing consumes these. Strip or ignore:

`data-mobile-sticky-context` · `data-mobile-sticky-target`
