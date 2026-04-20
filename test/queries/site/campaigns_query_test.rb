require "test_helper"

class Site::CampaignsQueryTest < ActiveSupport::TestCase
  test "active and past split campaigns by status and prioritize active deadlines" do
    later_active = build_campaign(1, "Later Active", created_at: "2026-04-19 09:00", status: "active", deadline: "2026-06-01")
    sooner_active = build_campaign(2, "Sooner Active", created_at: "2026-04-18 09:00", status: "active", deadline: "2026-05-01")
    newest_past = build_campaign(3, "Newest Past", created_at: "2026-04-17 09:00", status: "completed", deadline: "2026-04-10")
    older_past = build_campaign(4, "Older Past", created_at: "2026-04-16 09:00", status: "completed", deadline: "2026-03-10")

    query = build_query([older_past, later_active, newest_past, sooner_active])

    assert_equal [sooner_active, later_active], query.active
    assert_equal [newest_past, older_past], query.past
  end

  private

  def build_query(pages)
    query = Site::CampaignsQuery.new
    query.singleton_class.define_method(:live_resource_pages) { |_resource_name| pages }
    query
  end

  def build_campaign(id, title, created_at:, status:, deadline:)
    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse(created_at),
      materialized_path: "/campaigns/#{id}",
      data: {
        campaign_status: status,
        campaign_deadline: deadline
      }
    )
  end
end
