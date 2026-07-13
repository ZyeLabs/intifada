# Stylesheet

`site.css` is the entry point. Everything else is `@import`ed and flattened by PostCSS at build.

## Import order is load-bearing

**Don't alphabetise it.** Several rules across partials have identical specificity and rely on source order.

Example: `.generic-page__header h1, .donate-hero h1 { font-size: clamp(2rem, 5vw, 3.8rem) }` lives in `pages/news.css`, and `pages/donate.css` sets its own `.donate-hero h1 { font-size: clamp(44px, 7vw, 88px) }`. Same specificity — last one wins. Move `news` after `donate` and the donate heading silently drops from 88px to 61px.

## Partials no page uses

`pages/news.css` and parts of `components/cards.css` hold **complete, finished styles for features that were never built**: news index, archive, calendar, filter bar, article detail, share bar, campaign cards, an alternate event card.

Kept because the WordPress build wants them (HANDOFF §8.2). They cost nothing — PurgeCSS strips them from the bundle since no markup references them.

**`news.css` is not entirely dead** — it also carries the `.donate-hero h1` rule above. Don't delete the file.

## Tokens

`base/tokens.css` — every `--si-*`. Build `theme.json` from it.

- **17 colours have no token.** Some are near-misses of ones that exist: `#8f0000` vs `--si-red` `#bc0100`, `#e63946` vs `--si-red-bright` `#dc2626`, `#1a5030` vs `--si-green` `#246b40`. Intentional or drift? Left alone — changing them changes the design.
- `--si-dark` is defined but never used.
