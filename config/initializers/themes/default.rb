# Theme configuration file
# ========================
# This file is used for all theme configuration.
# It's where you define everything that's editable in Spina CMS.

Spina::Theme.register do |theme|
  # All views are namespaced based on the theme's name
  theme.name = "default"
  theme.title = "Social Intifada theme"

  # Parts
  # Define all editable parts you want to use in your view templates
  #
  # Built-in part types:
  # - Line
  # - MultiLine
  # - Text (Rich text editor)
  # - Image
  # - ImageCollection
  # - Attachment
  # - Option
  # - Repeater
  theme.parts = [
    # Global layout content
    {name: "brand_logo", title: "Brand logo", part_type: "Spina::Parts::Image"},
    {name: "site_name", title: "Site name", part_type: "Spina::Parts::Line"},
    {name: "site_tagline", title: "Site tagline", part_type: "Spina::Parts::MultiLine"},
    {name: "header_donate_label", title: "Header donate label", part_type: "Spina::Parts::Line"},
    {name: "header_donate_url", title: "Header donate URL", part_type: "Spina::Parts::Line"},
    {name: "footer_mission", title: "Footer mission", part_type: "Spina::Parts::MultiLine"},
    {name: "footer_contact_email", title: "Footer contact email", part_type: "Spina::Parts::Line"},
    {name: "social_instagram_url", title: "Instagram URL", part_type: "Spina::Parts::Line"},
    {name: "social_x_url", title: "X URL", part_type: "Spina::Parts::Line"},
    {name: "social_youtube_url", title: "YouTube URL", part_type: "Spina::Parts::Line"},

    # Shared content blocks
    {name: "page_title", title: "Page title", part_type: "Spina::Parts::Line"},
    {name: "page_intro", title: "Page intro", part_type: "Spina::Parts::MultiLine"},
    {name: "body", title: "Body", hint: "Rich text editor for headings, bold text, links, quotes, and embedded images", part_type: "Spina::Parts::Text"},
    {name: "hero_image", title: "Image", hint: "Main image shown for the page or post", part_type: "Spina::Parts::Image"},
    {name: "summary", title: "Summary", part_type: "Spina::Parts::MultiLine"},

    # News article fields
    {
      name: "article_tag",
      title: "Article tag",
      hint: "Category label shown on cards and the lead story",
      part_type: "Spina::Parts::Option",
      options: [
        ["Palestine advocacy", "Palestine advocacy"],
        ["Muslim activism", "Muslim activism"],
        ["Palestine education", "Palestine education"],
        ["BDS campaigns", "BDS campaigns"],
        ["Islamic perspectives on justice", "Islamic perspectives on justice"],
        ["Zionism", "Zionism"],
        ["Israel", "Israel"],
        ["Apartheid", "Apartheid"],
        ["Anti Islam hate speech", "Anti Islam hate speech"],
        ["War on Islam", "War on Islam"],
        ["Demonisation of Islam", "Demonisation of Islam"]
      ]
    },
    {name: "standfirst", title: "Summary", hint: "Short summary shown on the catalogue cards and article page", part_type: "Spina::Parts::MultiLine"},
    {name: "published_date", title: "Publish date", hint: "Required. Example: 2026-04-19", part_type: "Spina::Parts::Line"},
    {name: "author_name", title: "Author", hint: "Required byline shown on the article page and cards", part_type: "Spina::Parts::Line"},
    {name: "breaking_news", title: "Breaking news flag", hint: "Set this for urgent stories to show the breaking badge", part_type: "Spina::Parts::Option", options: [["Yes", "yes"], ["No", "no"]]},
    {name: "related_story_1", title: "Related story 1", part_type: "Spina::Parts::PageLink"},
    {name: "related_story_2", title: "Related story 2", part_type: "Spina::Parts::PageLink"},
    {name: "related_story_3", title: "Related story 3", part_type: "Spina::Parts::PageLink"},

    # Event fields
    {name: "event_date", title: "Event date", part_type: "Spina::Parts::Line"},
    {name: "event_time", title: "Event time", part_type: "Spina::Parts::Line"},
    {name: "event_location", title: "Event location", part_type: "Spina::Parts::Line"},
    {name: "event_status", title: "Event status", part_type: "Spina::Parts::Option", options: [["Upcoming", "upcoming"], ["Completed", "completed"]]},
    {name: "registration_label", title: "Registration label", part_type: "Spina::Parts::Line"},
    {name: "registration_url", title: "Registration URL", part_type: "Spina::Parts::Line"},

    # Campaign fields
    {name: "campaign_status", title: "Campaign status", part_type: "Spina::Parts::Option", options: [["Active", "active"], ["Completed", "completed"]]},
    {name: "campaign_deadline", title: "Campaign deadline", part_type: "Spina::Parts::Line"},
    {name: "campaign_cta_label", title: "Campaign CTA label", part_type: "Spina::Parts::Line"},
    {name: "campaign_cta_url", title: "Campaign CTA URL", part_type: "Spina::Parts::Line"},

    # Donate fields
    {name: "donate_primary_label", title: "Donate primary label", part_type: "Spina::Parts::Line"},
    {name: "donate_primary_url", title: "Donate primary URL", part_type: "Spina::Parts::Line"},
    {name: "donate_secondary_label", title: "Donate secondary label", part_type: "Spina::Parts::Line"},
    {name: "donate_secondary_url", title: "Donate secondary URL", part_type: "Spina::Parts::Line"},
    {
      name: "impact_points",
      title: "Impact points",
      part_type: "Spina::Parts::Repeater",
      item_name: "point",
      parts: %w[point_text]
    },
    {name: "point_text", title: "Point text", part_type: "Spina::Parts::Line"},

    # Fallback default page
    {name: "hero_title", title: "Hero title", part_type: "Spina::Parts::Line"}
  ]

  # View templates
  # Every page has a view template stored in app/views/my_theme/pages/*
  # You define which parts you want to enable for every view template
  # by referencing them from the theme.parts configuration above.
  theme.view_templates = [
    {
      name: "homepage",
      title: "Home",
      parts: []
    },
    {
      name: "news_index",
      title: "News Index",
      parts: []
    },
    {
      name: "events_index",
      title: "Events Index",
      parts: []
    },
    {
      name: "campaigns_index",
      title: "Campaigns Index",
      parts: []
    },
    {
      name: "donate",
      title: "Donate",
      parts: %w[page_title page_intro donate_primary_label donate_primary_url donate_secondary_label donate_secondary_url impact_points body]
    },
    {
      name: "article",
      title: "News Article",
      parts: %w[article_tag standfirst hero_image author_name published_date breaking_news body related_story_1 related_story_2 related_story_3],
      exclude_from: %w[events campaigns]
    },
    {
      name: "event",
      title: "Event",
      parts: %w[summary event_date event_time event_location event_status hero_image body registration_label registration_url],
      exclude_from: %w[articles campaigns]
    },
    {
      name: "campaign",
      title: "Campaign",
      parts: %w[summary campaign_status campaign_deadline hero_image body campaign_cta_label campaign_cta_url],
      exclude_from: %w[articles events]
    },
    {
      name: "show",
      title: "Page",
      parts: %w[hero_title body]
    }
  ]

  # Custom pages
  # Some pages should not be created by the user, but generated automatically.
  # By naming them you can reference them in your code.
  theme.custom_pages = [
    {name: "homepage", title: "Home", deletable: false, view_template: "homepage"},
    {name: "news", title: "News", deletable: false, view_template: "news_index"},
    {name: "events", title: "Events", deletable: false, view_template: "events_index"},
    {name: "campaigns", title: "Campaigns", deletable: false, view_template: "campaigns_index"},
    {name: "donate", title: "Donate", deletable: false, view_template: "donate"}
  ]

  # Navigations (optional)
  # If your project has multiple navigations, it can be useful to configure multiple
  # navigations.
  theme.navigations = []

  # Layout parts (optional)
  # You can create global content that doesn't belong to one specific page. We call these layout parts.
  # You only have to reference the name of the parts you want to have here.
  theme.layout_parts = %w[
    brand_logo
    site_name
    site_tagline
    header_donate_label
    header_donate_url
    footer_mission
    footer_contact_email
    social_instagram_url
    social_x_url
    social_youtube_url
  ]

  # Resources (optional)
  # Think of resources as a collection of pages. They are managed separately in Spina
  # allowing you to separate these pages from the 'main' collection of pages.
  theme.resources = [
    {name: "articles", label: "News Articles", view_template: "article", order_by: "created_at"},
    {name: "events", label: "Events", view_template: "event", order_by: "created_at"},
    {name: "campaigns", label: "Campaigns", view_template: "campaign", order_by: "created_at"}
  ]

  # Plugins (optional)
  theme.plugins = []

  # Embeds (optional)
  theme.embeds = []
end
