require "test_helper"

class Site::NewsIndexPresenterTest < ActiveSupport::TestCase
  test "result count, page clamping, and paginated history include the full archive" do
    stories = (1..12).map do |index|
      build_story(index, "Story #{index}", published_at: "2026-04-#{format('%02d', 20 - index)} 09:00", tag: "Updates")
    end

    presenter = build_presenter(stories, params: {page: 99, tag: "updates"})
    first_page_presenter = build_presenter(stories, params: {page: 1, tag: "updates"})

    assert_equal 12, presenter.result_count
    assert_equal 2, presenter.total_pages
    assert_equal 2, presenter.current_page
    assert_equal 6, presenter.history_page_stories.size
    assert_equal "Story 7", presenter.history_page_stories.first.title
    assert_equal first_page_presenter.lead_story, first_page_presenter.history_page_stories.first
  end

  test "active filter falls back to a synthetic filter for unknown tags" do
    presenter = build_presenter([build_story(1, "Story", published_at: "2026-04-19 09:00", tag: "Updates")], params: {tag: "field-reports"})

    assert_equal({label: "Field Reports", slug: "field-reports", count: 0}, presenter.active_filter)
    assert presenter.filtered?
    assert_equal "Showing 0 stories in Field Reports", presenter.results_label
  end

  test "filter and page paths preserve tag and page parameters" do
    presenter = build_presenter([build_story(1, "Story", published_at: "2026-04-19 09:00", tag: "Updates")], params: {tag: "updates"})

    assert_equal "/news", presenter.filter_path
    assert_equal "/news?tag=updates", presenter.filter_path("updates")
    assert_equal "/news?tag=updates&page=2", presenter.page_path(2)
  end

  test "lead story prefers the latest breaking story over newer non-breaking stories" do
    breaking_story = build_story(1, "Breaking Story", published_at: "2026-04-18 09:00", tag: "Updates", breaking: true)
    latest_story = build_story(2, "Latest Story", published_at: "2026-04-19 09:00", tag: "Updates")

    presenter = build_presenter([latest_story, breaking_story])

    assert_equal breaking_story, presenter.lead_story
  end

  private

  def build_presenter(stories, params: {})
    page = FakeSitePage.new(
      id: 100,
      title: "News",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/news",
      data: {}
    )

    Site::NewsIndexPresenter.new(
      view_context: FakeViewContext.new(params: params, resource_index_path: "/news"),
      page: page,
      articles_query: build_query(stories)
    )
  end

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
        breaking_news: (breaking ? "yes" : "no"),
        hero_image: "/assets/#{id}.jpg",
        published_at: published_at,
        standfirst: "Standfirst for #{title}"
      }
    )
  end
end
