require "test_helper"
require "ostruct"

class NewsTemplatesTest < ActionView::TestCase
  include Site::PageData

  test "news index removes the masthead and renders a paginated archive calendar" do
    stories = (1..8).map do |index|
      build_story(index, "Updates Story #{index}", published_at: "2026-04-#{format('%02d', 20 - index)} 09:00", tag: "Updates")
    end

    assign_news_state(stories: stories, params: {tag: "updates"})

    render template: "default/pages/news_index"

    assert_select ".page-header", count: 0
    assert_select ".news-filter-bar__link.is-active", text: /Updates/
    assert_select ".news-filter-bar__link", text: "All"
    assert_select "h2.news-feature__title", count: 1
    assert_select ".news-related__item", count: 3
    assert_select ".news-calendar__title", text: "Updates Archive"
    assert_select ".news-archive-card", count: 6
    assert_select ".news-calendar__page", minimum: 2
    assert_select ".news-calendar__page.is-active", text: "1"
    assert_select ".news-calendar__page-label", text: "Page 1 of 2"
  end

  test "news index renders the filtered empty state with a reset action for unknown tags" do
    stories = [build_story(1, "Only Story", published_at: "2026-04-19 09:00", tag: "Updates")]

    assign_news_state(stories: stories, params: {tag: "field-reports"})

    render template: "default/pages/news_index"

    assert_select ".news-empty__title", text: /Nothing published yet for Field Reports/
    assert_select "a.news-empty__reset", text: "View all news"
    assert_includes rendered, "Clear the filter to browse everything in the newsroom."
  end

  test "article template renders share controls and related stories without legacy extras" do
    related_1 = build_story(11, "Related One", published_at: "2026-04-18 09:00", tag: "Updates")
    related_2 = build_story(12, "Related Two", published_at: "2026-04-17 09:00", tag: "Updates")
    related_3 = build_story(13, "Related Three", published_at: "2026-04-16 09:00", tag: "Analysis")

    current_story = build_story(
      10,
      "Main Story",
      published_at: "2026-04-19 09:00",
      tag: "Updates",
      extra_data: {
        body: "<p>Body copy</p>",
        related_story_1: related_1,
        related_story_2: related_2,
        related_story_3: related_3
      }
    )

    assign_article_state(current_story: current_story, stories: [current_story, related_1, related_2, related_3])

    render template: "default/pages/article"

    assert_select ".article-share__button", count: 2
    assert_select ".article-detail__caption", count: 0
    assert_select ".article-detail__aside .article-detail__cta-link", count: 0
    assert_select ".story-card", count: 3
  end

  private

  def assign_news_state(stories:, params:, page_data: {})
    @params = params.with_indifferent_access
    @page_data = page_data.transform_keys(&:to_sym)
    @articles_query = build_query(stories)
    @current_page = FakeSitePage.new(
      id: 100,
      title: "News",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/news",
      data: {}
    )
    @request_double = OpenStruct.new(original_url: "https://example.test/news")
    configure_view_context
    @news_index_presenter = Site::NewsIndexPresenter.new(view_context: view, page: @current_page, articles_query: @articles_query)
    configure_view_context
  end

  def assign_article_state(current_story:, stories:)
    @params = {}.with_indifferent_access
    @page_data = current_story.data
    @articles_query = build_query(stories)
    @current_page = current_story
    @request_double = OpenStruct.new(original_url: "https://example.test#{current_story.materialized_path}")
    configure_view_context
  end

  def build_query(pages)
    query = Site::ArticlesQuery.new
    query.singleton_class.define_method(:live_resource_pages) { |_resource_name| pages }
    query
  end

  def build_story(id, title, published_at:, tag:, extra_data: {})
    data = {
      article_tag: tag,
      author_name: "Editorial Desk",
      body: "<p>Default body</p>",
      hero_image: "/assets/#{id}.jpg",
      published_at: published_at,
      standfirst: "Standfirst for #{title}"
    }.merge(extra_data)

    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse(published_at),
      materialized_path: "/news/#{id}",
      data: data
    )
  end

  def configure_view_context
    local_articles_query = @articles_query
    local_current_page = @current_page
    local_news_index_presenter = @news_index_presenter
    local_page_data = @page_data
    local_params = @params
    local_request = @request_double

    view.extend(Site::PageData)

    view.singleton_class.class_eval do
      define_method(:articles_query) { local_articles_query }
      define_method(:cms_page_path) { |page| page.materialized_path }
      define_method(:content) do |name = :__proxy__|
        return FakeSiteContentProxy.new(local_page_data) if name == :__proxy__

        local_page_data[name.to_sym]
      end
      define_method(:current_page) { local_current_page }
      define_method(:news_index_presenter) { local_news_index_presenter }
      define_method(:page_image_url) do |page, part_name: :hero_image, resize_to_fill: [960, 540], fallback: nil|
        page.content(part_name).presence || fallback
      end
      define_method(:params) { local_params }
      define_method(:request) { local_request }
      define_method(:resource_index_path) { |_resource_name| "/news" }
      define_method(:safe_url) do |url, default: "#"|
        value = url.to_s.strip
        value.present? ? value : default
      end
    end
  end
end
