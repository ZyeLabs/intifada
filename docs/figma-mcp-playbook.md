# Figma MCP Playbook (Dev Workflow)

Use this workflow to move a Figma page into Spina quickly with AI assistance.

## 1. Extract design context

For each section/frame in Figma:

1. Capture node screenshot (`get_screenshot`).
2. Pull node code context (`get_design_context`).
3. Note node id + section name in your task notes.

Work section-by-section, not whole page at once.

## 2. Map sections to Spina parts

Define fields in [default.rb](/home/suleiman/code/intifada/config/initializers/themes/default.rb):

- Headline/subheadline -> `Line` / `MultiLine`
- Rich body copy -> `Text`
- Hero/banner media -> `Image`
- Repeatable cards -> `Repeater`

## 3. Implement templates

Render sections in:

- [homepage.html.erb](/home/suleiman/code/intifada/app/views/default/pages/homepage.html.erb)
- [show.html.erb](/home/suleiman/code/intifada/app/views/default/pages/show.html.erb)

Use `content(:part_name)` for all editable data.

## 4. Validate in CMS

1. Open `/admin`
2. Fill content parts for the page
3. Confirm frontend render
4. Iterate section-by-section

## 5. Prompt templates for AI coding help

Use prompts like:

```text
Here is Figma MCP context for section <name> (<node-id>).
Update config/initializers/themes/default.rb and app/views/default/pages/homepage.html.erb.
Requirements:
- keep all text/media editable via Spina parts
- no hardcoded copy
- preserve existing sections
```

```text
Refactor this ERB section to match the attached Figma screenshot.
Do not change route/controller behavior.
Only edit view markup and styles.
```
