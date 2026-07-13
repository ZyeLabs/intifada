# Content model

Data is in [`src/_data/`](src/_data/) — real content, ready to seed a CPT. Or delete it and start empty.

## Event

`events.json` — 10 entries.

| Field | Type | Required | Example |
|---|---|---|---|
| `slug` | string | yes | `the-voice-of-hind-rajab-joburg-the-glen` |
| `title` | string | yes | `The Voice of Hind Rajab - Joburg: Nu Metro, The Glen` |
| `startsAt` | datetime **+02:00** | no — `null` = TBC | `2026-05-16T20:00:00+02:00` |
| `dateHijri` | string | no | `29 Dhu al-Qidah 1447 AH` |
| `location` | string | no — `null` renders "TBC" | `Nu Metro, The Glen` |
| `poster` | image | yes | base path, see below |
| `posterAlt` | string | yes | = title |
| `eyebrow` | string | no | `Film screening` |
| `summary` | text | no | |
| `section` | enum | yes | `upcoming` \| `completed` — **derive it, HANDOFF §1** |
| `registration` | enum | yes | `Sold out` \| `Tickets on sale` \| `New show added` \| `Open` |
| `ctaLabel` | string | no | `Book via Quicket` |
| `ctaUrl` | url | no | **absent → inert `<span>`, present → `<a>`** |
| `asideNote` | string | no | `This screening is sold out.` |
| `featured` | bool | max one true | drives homepage lead + strip |
| `badge` | string | no — only on the featured one | `NEW SHOW ADDED` |
| `relatedSlugs` | slug[] | no | |
| `body` | rich text | yes | |

### Derive, don't store

From `startsAt`: the long date (`Saturday, 16 May 2026`), the time (`20:00`), the card stamp (`16` / `MAY`), `<time datetime>`.

Also: `Location: X` / `Venue to be confirmed` from `location`. `Status` from `section`.

**Exception — `dateHijri` must be stored** (or converted server-side). `Intl` outputs "Dhū al-Qaʿdah"; the site's data says "Dhu al-Qidah".

### `registration` drives four strings

`registration`, `ctaLabel`, `asideNote` and the closing line of `body` all restate the same fact. **Derive the first three from the enum** — as four independent strings they drift, and did.

### Poster field

A base path — `assets/events/vhr-the-glen` — with `-800.webp` / `-1355.webp` appended by the template. In WP this is just an attachment ID.

### Fields that don't exist

- **City.** Cape Town / Joburg / Durban live only inside the title string. A city taxonomy needs re-authoring.
- **Cinema screen.** Fused into `location` as `, Cine 2`.
- **Price.** Nowhere.
- **Charity partner.** Islamic Relief is a paragraph repeated in all 10 bodies, not a relation. Worth promoting to a field.

---

## Menus

Three separate things.

**`nav.json`** — header + drawer:

| Label | URL |
|---|---|
| Home | `index.html` |
| About Us | `about-us.html` |
| News | `https://x.com/socialintifada` — **external**, not the news page |
| Events | `events.html` |

Plus a CTA button: **Support Us** → `donate.html`.

**`footerNav.json`** — the same 4 **plus a 5th**: Islamic Relief.

**`social.json`** — YouTube, TikTok, X, Upscrolled. One field covers the visible text and the `aria-label`.

---

## Site options

`site.json`: `name` · `url` · `logoLight` / `logoDark` · `footerMission` · `donateUrl` · `description` · `ogImage` · `supportUsLabel` · `googleFonts` · `stylesheet` · `script`

`footerMission` and the homepage "Our mission" copy are **different strings**.

---

## Page content

Hardcoded in the templates. Promote to ACF, or leave it — low churn.

- **About** — 4 principles `{heading, body}`; 3 approach cards `{svg icon, heading, body}`; 2 quotes `{text, source}`. The Al Ma'idah quote is authored twice (desktop + mobile).
- **Donate** — 3 impact cards `{number, heading, body}`; 3 bullets; one iKhokha URL used twice.

---

## Types to build

Scope in [HANDOFF §8](HANDOFF.md#8-roadmap).

- **`campaign`** — a taxonomy across `event`, `post`, `resource`, `product`. Declare it early.
- **`post`** — news. Native WP, no new model. Design already exists.
- **`resource`** — one CPT, one `type` field (`pdf` | `video` | `link`).
- **`product`** — WooCommerce.
