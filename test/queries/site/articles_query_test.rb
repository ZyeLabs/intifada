require "test_helper"

class Site::ArticlesQueryTest < ActiveSupport::TestCase
  test "lead prefers the newest breaking story before non-breaking articles" do
    featured = build_story(1, "Featured", published_at: "2026-04-16 10:00", tag: "Updates")
    older_breaking = build_story(2, "Older Breaking", published_at: "2026-04-17 09:00", tag: "Updates", breaking: true)
    newer_breaking = build_story(3, "Newer Breaking", published_at: "2026-04-18 12:00", tag: "Updates", breaking: true)

    query = build_query([featured, older_breaking, newer_breaking])

    assert_equal newer_breaking, query.lead
  end

  test "tag options expose counts and paginated history slices preserve publish order" do
    updates_1 = build_story(1, "Updates 1", published_at: "2026-04-19 09:00", tag: "Updates")
    analysis_1 = build_story(2, "Analysis 1", published_at: "2026-04-19 08:00", tag: "Analysis")
    updates_2 = build_story(3, "Updates 2", published_at: "2026-04-18 08:00", tag: "Updates")
    analysis_2 = build_story(4, "Analysis 2", published_at: "2026-04-17 08:00", tag: "Analysis")
    updates_3 = build_story(5, "Updates 3", published_at: "2026-04-16 08:00", tag: "Updates")

    query = build_query([updates_3, analysis_2, updates_2, analysis_1, updates_1])

    assert_equal [
      {label: "Analysis", slug: "analysis", count: 2},
      {label: "Updates", slug: "updates", count: 3}
    ], query.tag_options

    assert_equal 3, query.history_total_count(tag: "updates")
    assert_equal [updates_3], query.history_page(tag: "updates", page: 2, per_page: 2)
  end

  test "related_for keeps selected stories first and backfills from tag then latest" do
    current = build_story(1, "Current", published_at: "2026-04-19 09:00", tag: "Updates")
    selected = build_story(2, "Selected", published_at: "2026-04-18 09:00", tag: "Analysis")
    same_tag = build_story(3, "Same Tag", published_at: "2026-04-17 09:00", tag: "Updates")
    latest_other = build_story(4, "Latest Other", published_at: "2026-04-16 09:00", tag: "Campaigns")

    query = build_query([current, selected, same_tag, latest_other])

    related = query.related_for(current, selected: [selected], limit: 3)

    assert_equal [selected, same_tag, latest_other], related
  end

  test "starter article is excluded from latest and history ordering" do
    starter = FakeSitePage.new(
      id: 1,
      title: "Welcome to the newsroom",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/news/1",
      data: {}
    )
    published_story = build_story(2, "Published Story", published_at: "2026-04-18 09:00", tag: "Updates")

    query = build_query([starter, published_story])

    assert_equal [published_story], query.latest
    assert_equal [published_story], query.history
  end

  private

  def build_query(pages)
    query = Site::ArticlesQuery.new
    query.singleton_class.define_method(:live_resource_pages) { |_resource_name| pages }
    query
  end

  def build_story(id, title, published_at:, tag:, breaking: false)
    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse(published_at),
      materialized_path: "/news/#{id}",
      data: {
        article_tag: tag,
        author_name: "Editorial Desk",
        breaking_news: (breaking ? "Yes" : "No"),
        hero_image: "/assets/#{id}.jpg",
        published_at: published_at,
        standfirst: "Standfirst for #{title}"
      }
    )
  end
end
