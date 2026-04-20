# Intifada CMS Starter

Rails + Spina CMS starter configured for a **Figma MCP + AI-assisted development workflow**.

## Current stack

- Ruby `3.2.3`
- Rails `6.1.7.x`
- Spina CMS `2.19.0`
- PostgreSQL `16` (Docker Compose)
- `tailwindcss-ruby` pinned to `~> 3.4.19` for Spina asset compatibility

## Website structure (implemented)

- `Home` (newsroom front page)
- `News` (resource index for articles)
- `Events` (resource index for events)
- `Campaigns` (resource index for campaigns)
- `Donate`

Resource detail templates are also in place for:

- `Article`
- `Event`
- `Campaign`

## Quick start

1. Copy env template:

   ```bash
   cp .env.example .env
   ```

2. Bootstrap everything:

   ```bash
   ./bin/setup_cms
   ```

3. Start the app:

   ```bash
   bundle exec rails server
   ```

4. Open:

- Site: `http://localhost:3000`
- Spina admin: `http://localhost:3000/admin`

Admin user credentials are read from `.env` (`SPINA_ADMIN_EMAIL`, `SPINA_ADMIN_PASSWORD`).

## AI usage policy in this project

AI is intended for **development workflow only** (design-to-code, scaffolding, content drafts, refactors).  
No runtime AI feature is wired into the website.

## Figma MCP + Spina workflow

Use this loop while building pages:

1. Pull Figma section context with MCP (`get_screenshot`, `get_design_context`) for a target frame/node.
2. Map that section to editable Spina parts in [default.rb](/home/suleiman/code/intifada/config/initializers/themes/default.rb).
3. Implement/update ERB templates in [app/views/default](/home/suleiman/code/intifada/app/views/default).
4. Keep editable content in CMS parts (`content(:part_name)`), not hardcoded text.
5. Validate in `/admin`, then preview on the public route.

Detailed playbook: [docs/figma-mcp-playbook.md](/home/suleiman/code/intifada/docs/figma-mcp-playbook.md)

## Useful commands

```bash
# start database only
docker compose up -d db

# run migrations
bundle exec rails db:migrate

# run Spina installer once on a fresh project
bundle exec rails g spina:install --silent

# set/update first admin from env
bundle exec rails spina:setup_admin

# sync pages/resources/navigation from theme config
bundle exec rails spina:sync_site

# rebuild Spina Tailwind assets
bundle exec rails spina:tailwind:build
```

## Notes

- The project includes a local Postgres compose service on port `5433` by default (change in `.env`).
- If this is a fresh machine, run `bundle install` before `./bin/setup_cms`.
