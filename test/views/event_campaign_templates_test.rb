require "test_helper"

class EventCampaignTemplatesTest < ActionView::TestCase
  include Site::PageData

  test "events index renders matching upcoming and past catalogue sections without a featured event" do
    first_upcoming = build_page(
      1,
      "Mass Meeting",
      path: "/events/mass-meeting",
      data: {
        summary: "Join the organizing meeting.",
        body: "<p>Full details for the gathering.</p>",
        event_date: "2026-05-10",
        event_time: "18:30",
        event_location: "Community Hall",
        event_status: "upcoming",
        registration_label: "Reserve a seat",
        registration_url: "/register/mass-meeting",
        hero_image: "/assets/mass-meeting.jpg"
      }
    )
    second_upcoming = build_page(
      2,
      "Teach-In",
      path: "/events/teach-in",
      data: {
        event_date: "2026-05-17",
        event_time: "15:00",
        event_location: "Campus Centre",
        registration_label: "View more",
        registration_url: "/events/teach-in",
        hero_image: "/assets/teach-in.jpg"
      }
    )
    archived = build_page(
      3,
      "Past Screening",
      path: "/events/past-screening",
      data: {
        event_date: "2026-03-10",
        event_status: "completed",
        hero_image: "/assets/past-screening.jpg"
      }
    )

    query = build_events_query(upcoming: [first_upcoming, second_upcoming], past: [archived])
    current_page = build_page(100, "Events", path: "/events")

    configure_view_context(current_page: current_page, page_data: current_page.data, events_query: query)

    render template: "default/pages/events_index"

    assert_select ".collection-catalogue__masthead", count: 0
    assert_select ".collection-catalogue__eyebrow", count: 0
    assert_select ".collection-catalogue__stats", count: 0
    assert_select ".collection-catalogue__intro", count: 0
    assert_select ".collection-catalogue__section", count: 2
    assert_select ".collection-catalogue__jump-nav", count: 0
    assert_select ".collection-catalogue__section .collection-catalogue__heading h2", text: "Completed Events"
    assert_select ".collection-catalogue__section .catalogue-card", count: 3
    assert_select ".collection-catalogue__section .catalogue-card__button", text: "Reserve a seat"
    assert_select ".catalogue-card--past", count: 1
    assert_select ".catalogue-card__eyebrow", text: "Completed event"
    assert_select ".events-catalogue__feature", count: 0
  end

  test "campaign detail renders in the event template layout with related campaigns" do
    current_campaign = build_page(
      10,
      "Emergency Relief Drive",
      path: "/campaigns/emergency-relief-drive",
      data: {
        summary: "A focused relief push.",
        body: "<p>Campaign body copy.</p>",
        campaign_status: "active",
        campaign_deadline: "2026-05-30",
        campaign_cta_label: "Donate now",
        campaign_cta_url: "/donate",
        hero_image: "/assets/campaign-hero.jpg"
      }
    )
    related = [
      build_page(11, "Campaign One", path: "/campaigns/one", data: {campaign_status: "active", campaign_deadline: "2026-06-10", campaign_cta_label: "Take action", campaign_cta_url: "/campaigns/one"}),
      build_page(12, "Campaign Two", path: "/campaigns/two", data: {campaign_status: "active", campaign_deadline: "2026-06-18", campaign_cta_label: "Take action", campaign_cta_url: "/campaigns/two"}),
      build_page(13, "Campaign Three", path: "/campaigns/three", data: {campaign_status: "active", campaign_deadline: "2026-06-25", campaign_cta_label: "Take action", campaign_cta_url: "/campaigns/three"})
    ]

    query = build_campaigns_query(active: [current_campaign] + related, past: [], related: related)
    configure_view_context(current_page: current_campaign, page_data: current_campaign.data, campaigns_query: query)

    render template: "default/pages/campaign"

    assert_select ".event-template--campaign .event-template__eyebrow", text: "Active"
    assert_select ".event-template--campaign .event-template__about h2", text: "About the campaign"
    assert_select ".event-template--campaign .event-template__cta", text: "Donate now"
    assert_select ".event-template--campaign .event-template__meta", text: /30 MAY 2026/
    assert_select ".event-template--campaign .event-template__sticky-cta", count: 1
    assert_select ".campaigns-grid .catalogue-card", count: 3
  end

  test "campaigns index renders active and past catalogue sections without a featured campaign" do
    active = build_page(
      20,
      "Spotlight Campaign",
      path: "/campaigns/spotlight",
      data: {
        summary: "Lead campaign summary.",
        body: "<p>Lead campaign body.</p>",
        campaign_status: "active",
        campaign_deadline: "2026-05-10",
        campaign_cta_label: "Join the push",
        campaign_cta_url: "/campaigns/spotlight",
        hero_image: "/assets/spotlight.jpg"
      }
    )
    supporting = build_page(
      21,
      "Support Campaign",
      path: "/campaigns/support",
      data: {
        campaign_status: "active",
        campaign_deadline: "2026-05-20",
        campaign_cta_label: "Take action",
        campaign_cta_url: "/campaigns/support",
        hero_image: "/assets/support.jpg"
      }
    )
    archived = build_page(
      22,
      "Archived Campaign",
      path: "/campaigns/archived",
      data: {
        campaign_status: "completed",
        campaign_deadline: "2026-04-01",
        campaign_cta_label: "View campaign",
        campaign_cta_url: "/campaigns/archived",
        hero_image: "/assets/archived.jpg"
      }
    )

    current_page = build_page(
      200,
      "Campaigns",
      path: "/campaigns"
    )

    query = build_campaigns_query(active: [active, supporting], past: [archived], related: [supporting])
    configure_view_context(current_page: current_page, page_data: current_page.data, campaigns_query: query)

    render template: "default/pages/campaigns_index"

    assert_select ".collection-catalogue__masthead", count: 0
    assert_select ".collection-catalogue__eyebrow", count: 0
    assert_select ".collection-catalogue__stats", count: 0
    assert_select ".collection-catalogue__intro", count: 0
    assert_select ".collection-catalogue__section", count: 2
    assert_select ".collection-catalogue__jump-nav", count: 0
    assert_select ".collection-catalogue__collapse-summary", text: "Show completed campaigns"
    assert_select ".collection-catalogue__section .collection-catalogue__heading h2", text: "Completed Campaigns"
    assert_select ".collection-catalogue__section .catalogue-card", count: 3
    assert_select ".catalogue-card__button", text: "Join the push"
    assert_select ".catalogue-card--past", count: 1
    assert_select ".catalogue-card__stamp", count: 0
    assert_select ".catalogue-card__detail", count: 0
    assert_select ".catalogue-card__supporting", count: 0
    assert_select ".campaigns-index__feature", count: 0
  end

  private

  def build_page(id, title, path:, data: {}, created_at: "2026-04-19 09:00")
    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse(created_at),
      materialized_path: path,
      data: data
    )
  end

  def build_events_query(upcoming:, past:)
    query = Site::EventsQuery.new
    query.singleton_class.define_method(:upcoming) do |limit: nil|
      limit ? upcoming.first(limit) : upcoming
    end
    query.singleton_class.define_method(:past) do |limit: nil|
      limit ? past.first(limit) : past
    end
    query
  end

  def build_campaigns_query(active:, past:, related:)
    query = Site::CampaignsQuery.new
    query.singleton_class.define_method(:active) do |limit: nil|
      limit ? active.first(limit) : active
    end
    query.singleton_class.define_method(:past) do |limit: nil|
      limit ? past.first(limit) : past
    end
    query.singleton_class.define_method(:related_for) do |_campaign_page, limit: 3|
      related.first(limit)
    end
    query
  end

  def configure_view_context(current_page:, page_data:, events_query: nil, campaigns_query: nil)
    local_current_page = current_page
    local_page_data = page_data.transform_keys(&:to_sym)
    local_events_query = events_query
    local_campaigns_query = campaigns_query

    view.extend(Site::PageData)

    view.singleton_class.class_eval do
      define_method(:events_query) { local_events_query }
      define_method(:campaigns_query) { local_campaigns_query }
      define_method(:cms_page_path) { |page| page.materialized_path }
      define_method(:content) do |name = :__proxy__|
        return FakeSiteContentProxy.new(local_page_data) if name == :__proxy__

        local_page_data[name.to_sym]
      end
      define_method(:current_page) { local_current_page }
      define_method(:page_image_url) do |page, part_name: :hero_image, resize_to_fill: [960, 540], fallback: nil|
        page.content(part_name).presence || fallback
      end
      define_method(:safe_url) do |url, default: "#"|
        value = url.to_s.strip
        value.present? ? value : default
      end
    end
  end
end
