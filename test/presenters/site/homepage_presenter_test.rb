require "test_helper"

class Site::HomepagePresenterTest < ActiveSupport::TestCase
  test "homepage lead story follows the latest breaking article" do
    latest_story = build_story(1, "Latest Story", published_at: "2026-04-19 09:00")
    breaking_story = build_story(2, "Breaking Story", published_at: "2026-04-18 09:00", breaking: true)

    presenter = build_presenter(stories: [latest_story, breaking_story])

    assert_equal breaking_story, presenter.breaking_story
    assert_equal "Breaking Story", presenter.lead_story_card[:title]
    assert_equal "/news/2", presenter.lead_story_card[:url]
  end

  test "campaign cards expose deadlines instead of progress values" do
    campaign = build_campaign(1, "Campaign", deadline: "2026-05-10")

    presenter = build_presenter(stories: [], campaigns: [campaign], events: [])
    card = presenter.campaign_cards(limit: 3).first

    assert_equal "Active", card[:status]
    assert_equal "10 MAY 2026", card[:deadline_label]
    assert_equal "Deadline 10 MAY 2026", card[:meta_label]
    refute card.key?(:badge_label)
    refute card.key?(:progress_text)
  end

  test "homepage sections stay capped and expose relevant campaign and event details" do
    stories = [
      build_story(1, "Story 1", published_at: "2026-04-19 09:00"),
      build_story(2, "Story 2", published_at: "2026-04-19 08:00"),
      build_story(3, "Story 3", published_at: "2026-04-19 07:00"),
      build_story(4, "Story 4", published_at: "2026-04-19 06:00"),
      build_story(5, "Story 5", published_at: "2026-04-19 05:00"),
      build_story(6, "Story 6", published_at: "2026-04-19 04:00")
    ]
    campaigns = [
      build_campaign(1, "Campaign 1", deadline: "2026-05-01"),
      build_campaign(2, "Campaign 2", deadline: "2026-05-03"),
      build_campaign(3, "Campaign 3", deadline: "2026-05-05"),
      build_campaign(4, "Campaign 4", deadline: "2026-05-07")
    ]
    events = [
      build_event(1, "Event 1", event_date: "2026-04-22", event_time: "18:30", event_location: "Johannesburg"),
      build_event(2, "Event 2", event_date: "2026-04-24", event_time: "10:00", event_location: "Pretoria"),
      build_event(3, "Event 3", event_date: "2026-04-26", event_time: "12:00", event_location: "Cape Town"),
      build_event(4, "Event 4", event_date: "2026-04-28", event_time: "16:00", event_location: "Durban")
    ]

    presenter = build_presenter(stories: stories, campaigns: campaigns, events: events)

    assert_equal 4, presenter.latest_story_cards(limit: 4).size
    assert_equal 3, presenter.campaign_cards(limit: 3).size
    assert_equal 3, presenter.event_cards(limit: 3).size

    campaign_card = presenter.campaign_cards(limit: 3).first
    event_card = presenter.event_cards(limit: 3).first

    assert_equal "Deadline 01 MAY 2026", campaign_card[:meta_label]
    assert_equal "22 APR 2026 • 18:30", event_card[:meta_label]
    assert_equal "Location: Johannesburg", event_card[:details]
    assert_equal "Register now", event_card[:cta_label]
  end

  test "homepage does not render seeded placeholder content" do
    starter_story = FakeSitePage.new(
      id: 1,
      title: "Welcome to the newsroom",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/news/1",
      data: {}
    )
    starter_campaign = FakeSitePage.new(
      id: 2,
      title: "Support the current campaign",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/campaigns/2",
      data: {}
    )
    starter_event = FakeSitePage.new(
      id: 3,
      title: "Community briefing event",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/events/3",
      data: {}
    )

    presenter = build_presenter(
      stories: [starter_story],
      campaigns: [starter_campaign],
      events: [starter_event]
    )

    assert_nil presenter.lead_story_card
    assert_empty presenter.latest_story_cards(limit: 4)
    assert_empty presenter.campaign_cards(limit: 3)
    assert_empty presenter.event_cards(limit: 3)
  end

  test "latest news falls back to the lead story when it is the only real article" do
    starter_story = FakeSitePage.new(
      id: 1,
      title: "Welcome to the newsroom",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/news/1",
      data: {}
    )
    published_story = build_story(2, "Published Story", published_at: "2026-04-18 09:00")

    presenter = build_presenter(stories: [starter_story, published_story])

    assert_equal "Published Story", presenter.lead_story_card[:title]
    assert_equal ["Published Story"], presenter.latest_story_cards(limit: 4).map { |card| card[:title] }
  end

  private

  def build_presenter(stories:, campaigns: [], events: [])
    homepage = FakeSitePage.new(
      id: 100,
      title: "Home",
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/",
      data: {}
    )

    Site::HomepagePresenter.new(
      view_context: FakeViewContext.new(resource_index_path: "/news"),
      page: homepage,
      articles_query: build_query(Site::ArticlesQuery, stories),
      campaigns_query: build_query(Site::CampaignsQuery, campaigns),
      events_query: build_query(Site::EventsQuery, events)
    )
  end

  def build_query(klass, pages)
    query = klass.new
    query.singleton_class.define_method(:live_resource_pages) { |_resource_name| pages }
    query
  end

  def build_story(id, title, published_at:, breaking: false)
    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse(published_at),
      materialized_path: "/news/#{id}",
      data: {
        article_tag: "Updates",
        author_name: "Editorial Desk",
        breaking_news: (breaking ? "yes" : "no"),
        hero_image: "/assets/#{id}.jpg",
        published_at: published_at,
        standfirst: "Standfirst for #{title}"
      }
    )
  end

  def build_campaign(id, title, deadline:, status: "active")
    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/campaigns/#{id}",
      data: {
        summary: "Summary for #{title}",
        campaign_status: status,
        campaign_deadline: deadline,
        campaign_cta_label: "Take action",
        campaign_cta_url: "/campaigns/#{id}"
      }
    )
  end

  def build_event(id, title, event_date:, event_time:, event_location:, status: "upcoming")
    FakeSitePage.new(
      id: id,
      title: title,
      created_at: Time.zone.parse("2026-04-19 09:00"),
      materialized_path: "/events/#{id}",
      data: {
        summary: "Summary for #{title}",
        event_date: event_date,
        event_time: event_time,
        event_location: event_location,
        event_status: status,
        registration_label: "Register now",
        registration_url: "/events/#{id}"
      }
    )
  end
end
