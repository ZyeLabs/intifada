# Social Intifada Website: Remaining Development Brief

## 1) Scope Reset (Current Truth)

This replaces the old brief where it no longer matches the project.

- CMS is **Spina CMS** (not Strapi).
- App stack is **Rails + ERB + CSS** (not Next.js).
- Design source is **Figma MCP**.
- AI is used for **development workflow only** (scaffolding, refactor, design-to-code), not as a runtime website feature.

## 2) What Is Already Done

- Spina is installed and running.
- Theme is configured in [`config/initializers/themes/default.rb`](/home/suleiman/code/intifada/config/initializers/themes/default.rb).
- Homepage currently implements the Figma **Events Catalogue** layout (`/events` desktop frame style).
- Homepage content is already dynamic for:
  - `page_title`
  - `upcoming_heading`
  - `past_heading`
  - `upcoming_events` repeater
  - `past_events` repeater

## 3) Design + Flow Understanding (From Figma)

Current Figma file flow includes:

1. Global header/top app bar with logo, nav, and donate CTA.
2. Homepage newsroom layout:
   - lead hero story
   - latest news sidebar/rail
   - campaigns and events block
3. Events index page (`/events`) with:
   - page title
   - upcoming cards
   - past cards
4. Event detail template (`/events-template`) with:
   - title, summary, metadata bar
   - hero/media
   - body sections

This confirms the intended UX pattern is **newsroom first**, with campaigns/events/donate as supporting sections.

## 4) Remaining Build Priorities

1. Implement global layout (header/footer) from Figma across all templates.
2. Add content structures for newsroom pages:
   - news listing
   - article detail
   - campaigns listing/detail
   - donate page
3. Keep homepage as curated front page (manual + auto sections).
4. Add SEO/meta fields and social share image support.
5. Final responsive QA at desktop/tablet/mobile breakpoints.

## 5) Dynamic Content Map (Where Content Must Be CMS-Driven)

### Global (all pages)

- Logo image
- Main navigation items
- Donate button label + URL
- Footer mission text
- Footer social links
- Default SEO title/description/OG image

### Homepage

- Breaking strip (optional text + link)
- Lead story (article reference)
- Secondary lead stories (article references)
- Latest news rail (auto latest N articles, with optional manual override)
- Campaign spotlight (campaign reference)
- Upcoming events teaser (auto next N events)
- Donate teaser copy + CTA

### News Landing

- Page title + intro
- Featured story (optional manual reference)
- News list (auto paginated)
- Category/tag filters
- Sort mode (latest, featured)

### Article Detail

- Headline
- Standfirst/subheading
- Publish datetime
- Author
- Category/tag
- Hero image/video
- Body rich content
- Related articles (manual list, fallback auto)
- Optional inline CTA block (campaign/donate)

### Events Listing

- Page title + intro
- Upcoming/past section headings
- Event cards (date/time/title/venue/image/CTA)
- Optional “view all” and filter controls

### Event Detail

- Event title
- Summary
- Date/time/location
- Hero media
- Full description body
- Registration CTA
- Related events

### Campaigns

- Page intro
- Featured campaign
- Active campaign cards
- Campaign status/progress text
- CTA label + URL per campaign
- Optional archive toggle

### Donate

- Hero title + short trust statement
- Suggested giving options (repeater)
- One-time and recurring CTA URLs
- Impact bullets
- Optional FAQ/assurance block

## 6) What Should Stay Static (Not CMS-Editable)

- Core spacing/layout system
- Typography scale/tokens
- Color tokens and interaction tokens
- Component behavior (hover/focus states)
- Accessibility rules and semantic structure

These should live in code to keep visual consistency and prevent editor-level style drift.

## 7) Implementation Rule for Remaining Work

For each new Figma section:

1. Pull node screenshot/context via MCP.
2. Add only required Spina fields.
3. Render via reusable partials/components.
4. Keep text/media/links dynamic via CMS.
5. Avoid hardcoded production copy.
