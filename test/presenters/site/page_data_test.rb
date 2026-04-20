require "test_helper"

class Site::PageDataTest < ActiveSupport::TestCase
  test "article publish long label derives from the configured publish date" do
    story = FakeSitePage.new(
      id: 1,
      title: "Date Only Story",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/news/date-only-story",
      data: {
        author_name: "Editorial Desk",
        body: "<p>Body copy</p>",
        published_date: "2026-04-19"
      }
    )
    assert_equal "April 19, 2026", page_data_helper.article_publish_long_label(story)
  end

  private

  def page_data_helper
    @page_data_helper ||= Class.new do
      include Site::PageData
    end.new
  end
end
