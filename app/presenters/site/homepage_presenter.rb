module Site
  class HomepagePresenter < ApplicationPresenter
    include PageData

    STARTER_ARTICLE_TITLES = ["Welcome to the newsroom"].freeze
    STARTER_EVENT_TITLES = ["Community briefing event"].freeze
    STARTER_CAMPAIGN_TITLES = ["Support the current campaign"].freeze

    attr_reader :page, :articles_query, :campaigns_query, :events_query

    def initialize(view_context:, page:, articles_query:, campaigns_query:, events_query:)
      super(view_context: view_context)
      @page = page
      @articles_query = articles_query
      @campaigns_query = campaigns_query
      @events_query = events_query
    end

    def breaking_story
      @breaking_story ||= articles_query.breaking.find { |story| !placeholder_story?(story) }
    end

    def mission_text
      fallback = "Social Intifada is committed to unapologetic, front-foot digital activism. We do not negotiate with censorship."
      text = current_spina_account&.content(:footer_mission).to_s.squish
      return fallback if text.blank? || text.length > 150

      text
    end

    def lead_story
      @lead_story ||= articles_query.breaking.find { |story| !placeholder_story?(story) } ||
        articles_query.latest.find { |story| !placeholder_story?(story) }
    end

    def lead_story_card
      @lead_story_card ||= normalize_story_card(lead_story)
    end

    def latest_story_cards(limit: 4)
      cards = articles_query.latest.filter_map do |story|
        card = normalize_story_card(story)
        next if card.blank? || card[:key] == lead_story_card&.dig(:key)

        card
      end

      cards = [lead_story_card].compact if cards.empty? && lead_story_card.present?
      cards.first(limit)
    end

    def campaign_cards(limit: 3)
      cards = campaigns_query.active.filter_map do |campaign|
        normalize_campaign_card(campaign)
      end

      cards.first(limit)
    end

    def event_cards(limit: 3)
      cards = events_query.upcoming.filter_map do |event|
        normalize_event_card(event)
      end

      cards.first(limit)
    end

    private

    def normalize_story_card(story)
      return nil if story.blank?
      return nil if placeholder_story?(story)

      {
        key: "page-#{story.id}",
        title: story.title,
        kicker: article_badge_label(story, fallback: "News"),
        standfirst: article_summary(story, fallback: "Latest updates from the newsroom."),
        author_name: page_part_text(story, :author_name, "Editorial Desk"),
        age_label: article_age_label(story),
        image_url: page_image_url(story, part_name: :hero_image, resize_to_fill: [1280, 700], fallback: "events/upcoming-default.jpg"),
        url: cms_page_path(story)
      }
    end

    def normalize_campaign_card(campaign)
      return nil if campaign.blank?
      return nil if placeholder_campaign?(campaign)

      campaign_url = safe_url(page_part_text(campaign, :campaign_cta_url), default: cms_page_path(campaign))
      status = campaign_status_label(campaign, fallback: "Active")
      deadline_label = campaign_deadline_label(campaign)

      {
        key: "page-#{campaign.id}",
        title: campaign.title,
        status: status,
        deadline_label: deadline_label,
        meta_label: deadline_label.present? ? "Deadline #{deadline_label}" : nil,
        details: page_body_excerpt(campaign, fallback: "Campaign update coming soon.", limit: 108),
        cta_label: page_part_text(campaign, :campaign_cta_label, "Take action"),
        url: campaign_url,
        external: external_url?(campaign_url)
      }
    end

    def normalize_event_card(event)
      return nil if event.blank?
      return nil if placeholder_event?(event)

      event_url = safe_url(page_part_text(event, :registration_url), default: cms_page_path(event))
      status = event_status_label(event, fallback: "Upcoming")
      location = page_part_text(event, :event_location)

      {
        key: "page-#{event.id}",
        title: event.title,
        status: status,
        meta_label: event_meta_label(event),
        details: "Location: #{location.presence || 'TBC'}",
        location: location.presence || "Location TBC",
        time: page_part_text(event, :event_time),
        cta_label: page_part_text(event, :registration_label, "View details"),
        url: event_url,
        external: external_url?(event_url)
      }
    end

    def placeholder_story?(story)
      STARTER_ARTICLE_TITLES.include?(story.title) &&
        page_part_text(story, :article_tag).blank? &&
        page_part_text(story, :standfirst).blank?
    end

    def placeholder_campaign?(campaign)
      STARTER_CAMPAIGN_TITLES.include?(campaign.title) &&
        page_part_text(campaign, :campaign_status).blank? &&
        page_part_text(campaign, :campaign_deadline).blank?
    end

    def placeholder_event?(event)
      STARTER_EVENT_TITLES.include?(event.title) &&
        page_part_text(event, :event_date).blank? &&
        page_part_text(event, :event_location).blank?
    end

    def event_meta_label(event)
      [event_date_label(event), event_time_for_meta(event)].compact.join(" • ")
    end

    def event_time_for_meta(event)
      raw_time = page_part_text(event, :event_time)
      raw_time.presence
    end

    def external_url?(url)
      url.to_s.start_with?("http://", "https://")
    end
  end
end
