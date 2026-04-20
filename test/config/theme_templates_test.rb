require "test_helper"

class ThemeTemplatesTest < ActiveSupport::TestCase
  test "catalogue pages do not expose cms parts while resource pages keep their fields" do
    theme = Spina::Theme.find_by_name("default")

    homepage = theme.view_templates.find { |template| template[:name] == "homepage" }
    events_index = theme.view_templates.find { |template| template[:name] == "events_index" }
    campaigns_index = theme.view_templates.find { |template| template[:name] == "campaigns_index" }
    article_template = theme.view_templates.find { |template| template[:name] == "article" }
    event_template = theme.view_templates.find { |template| template[:name] == "event" }
    campaign_template = theme.view_templates.find { |template| template[:name] == "campaign" }
    part_names = theme.parts.map { |part| part[:name] }
    article_tag_part = theme.parts.find { |part| part[:name] == "article_tag" }
    standfirst_part = theme.parts.find { |part| part[:name] == "standfirst" }

    assert_equal [], homepage[:parts]
    assert_equal [], events_index[:parts]
    assert_equal [], campaigns_index[:parts]
    assert_equal %w[article_tag standfirst hero_image author_name published_date breaking_news body related_story_1 related_story_2 related_story_3], article_template[:parts]
    assert_includes event_template[:parts], "event_date"
    assert_includes event_template[:parts], "registration_url"
    assert_includes campaign_template[:parts], "campaign_status"
    assert_includes campaign_template[:parts], "campaign_deadline"
    assert_includes campaign_template[:parts], "campaign_cta_url"
    assert_equal "Spina::Parts::Option", article_tag_part[:part_type]
    assert_equal [
      "Palestine advocacy",
      "Muslim activism",
      "Palestine education",
      "BDS campaigns",
      "Islamic perspectives on justice",
      "Zionism",
      "Israel",
      "Apartheid",
      "Anti Islam hate speech",
      "War on Islam",
      "Demonisation of Islam"
    ], article_tag_part[:options].map(&:first)
    assert_equal "Summary", standfirst_part[:title]
    assert_includes part_names, "campaign_deadline"
    refute_includes part_names, "progress_text"
    refute_includes part_names, "kicker"
    refute_includes part_names, "read_time"
    refute_includes part_names, "published_time"
    refute_includes part_names, "hero_caption"
    refute_includes part_names, "hero_credit"
    refute_includes part_names, "article_cta_label"
    refute_includes part_names, "article_cta_url"
  end
end
