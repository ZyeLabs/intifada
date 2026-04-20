module Site
  module PageData
    ARTICLE_BREAKING_TRUTHY_VALUES = %w[yes true breaking 1 on].freeze

    def page_part_text(page, part_name, fallback = "")
      page&.content(part_name).presence || fallback
    end

    def article_tag(page)
      normalize_site_text(page&.content(:article_tag))
    end

    def article_badge_label(page, fallback: "News")
      return "Breaking news" if breaking_article?(page)

      article_tag(page).presence || fallback
    end

    def breaking_article?(article_page)
      ARTICLE_BREAKING_TRUTHY_VALUES.include?(article_page&.content(:breaking_news).to_s.strip.downcase)
    end

    def article_publish_time(article_page)
      date_text = article_page&.content(:published_date).to_s.strip

      if date_text.present?
        return parse_datetime(date_text) || parse_date(date_text)&.in_time_zone
      end

      raw = article_page&.content(:published_at).to_s.strip
      return article_page&.created_at if raw.blank?

      parse_datetime(raw) || parse_date(raw)&.in_time_zone || article_page&.created_at
    end

    def article_publish_datetime(article_page)
      article_publish_time(article_page) || article_page&.created_at
    end

    def article_publish_label(article_page)
      article_publish_datetime(article_page)&.strftime("%d %b %Y")
    end

    def article_publish_long_label(article_page)
      article_publish_datetime(article_page)&.strftime("%B %d, %Y")
    end

    def article_publish_short_label(article_page)
      article_publish_datetime(article_page)&.strftime("%b %d, %Y")
    end

    def article_author_name(article_page, fallback: "Editorial Desk")
      page_part_text(article_page, :author_name, fallback)
    end

    def article_summary(article_page, fallback: "")
      page_part_text(article_page, :standfirst, article_body_excerpt(article_page, fallback: fallback))
    end

    def page_body_excerpt(page, fallback: "", limit: nil)
      text = ActionController::Base.helpers.strip_tags(page&.content(:body).to_s).squish
      text = page_part_text(page, :summary, fallback) if text.blank?
      return text if text.blank? || limit.blank?

      text.length > limit ? "#{text.first(limit).rstrip}…" : text
    end

    def article_age_label(article_page)
      published_at = article_publish_datetime(article_page)
      return "JUST NOW" if published_at.blank?

      seconds = (Time.zone.now - published_at).to_i
      if seconds < 3600
        minutes = [seconds / 60, 1].max
        "#{minutes} MIN#{'S' if minutes != 1} AGO"
      elsif seconds < 86_400
        hours = [seconds / 3600, 1].max
        "#{hours} HOUR#{'S' if hours != 1} AGO"
      elsif seconds < (86_400 * 7)
        days = [seconds / 86_400, 1].max
        "#{days} DAY#{'S' if days != 1} AGO"
      else
        article_publish_label(article_page).to_s.upcase
      end
    end

    def article_matches_tag?(page, tag)
      return false if page.blank?
      return true if tag.blank?

      article_tag_slug(article_tag(page)) == article_tag_slug(tag)
    end

    def article_tag_slug(value)
      normalize_site_text(value)&.parameterize
    end

    def campaign_deadline(campaign_page)
      text = campaign_page&.content(:campaign_deadline).to_s.strip
      return if text.blank?

      parse_datetime(text) || parse_date(text)&.in_time_zone
    end

    def campaign_deadline_label(campaign_page)
      deadline = campaign_deadline(campaign_page)
      return deadline.strftime("%d %b %Y").upcase if deadline

      campaign_page&.content(:campaign_deadline).presence
    end

    def campaign_deadline_day_number(campaign_page)
      deadline = campaign_deadline(campaign_page)
      return deadline.strftime("%d") if deadline

      parse_date(campaign_page&.content(:campaign_deadline).to_s)&.strftime("%d") || "--"
    end

    def campaign_deadline_month_short(campaign_page)
      deadline = campaign_deadline(campaign_page)
      return deadline.strftime("%b").upcase if deadline

      parse_date(campaign_page&.content(:campaign_deadline).to_s)&.strftime("%b")&.upcase || "TBC"
    end

    def campaign_status_label(campaign_page, fallback: "Active")
      raw = normalize_site_text(campaign_page&.content(:campaign_status))
      raw.present? ? raw.tr("_", " ").titleize : fallback
    end

    def campaign_active?(campaign_page)
      status = campaign_page&.content(:campaign_status).to_s.downcase
      !status.in?(%w[completed archived inactive closed past])
    end

    def event_datetime(event_page)
      date_text = event_page&.content(:event_date).to_s.strip
      return nil if date_text.blank?

      time_text = event_page&.content(:event_time).to_s.strip
      parse_datetime("#{date_text} #{time_text}") || parse_datetime(date_text) || parse_date(date_text)&.in_time_zone
    end

    def event_date_label(event_page)
      datetime = event_datetime(event_page)
      return datetime.strftime("%d %b %Y").upcase if datetime

      event_page&.content(:event_date).presence || "TBC"
    end

    def event_time_label(event_page)
      datetime = event_datetime(event_page)
      return datetime.strftime("%H:%M") if datetime && event_page&.content(:event_time).present?

      event_page&.content(:event_time).presence || "TBC"
    end

    def event_day_number(event_page)
      datetime = event_datetime(event_page)
      return datetime.strftime("%d") if datetime

      parse_date(event_page&.content(:event_date).to_s)&.strftime("%d") || "--"
    end

    def event_month_short(event_page)
      datetime = event_datetime(event_page)
      return datetime.strftime("%b").upcase if datetime

      parse_date(event_page&.content(:event_date).to_s)&.strftime("%b")&.upcase || "TBC"
    end

    def event_status_label(event_page, fallback: "Upcoming")
      raw = normalize_site_text(event_page&.content(:event_status))
      raw.present? ? raw.tr("_", " ").titleize : fallback
    end

    def upcoming_event?(event_page)
      status = event_page&.content(:event_status).to_s.downcase
      return true if status == "upcoming"
      return false if status.in?(%w[completed past archived closed done])

      datetime = event_datetime(event_page)
      return true if datetime.blank?

      datetime >= Time.zone.now.beginning_of_day
    end

    def article_breaking_sort_time(article_page)
      article_publish_datetime(article_page) || article_page&.created_at || Time.zone.at(0)
    end

    private

    def normalize_site_text(value)
      text = value.to_s.squish
      text.presence
    end

    def parse_datetime(value)
      Time.zone.parse(value)
    rescue ArgumentError, TypeError
      nil
    end

    def parse_date(value)
      Date.parse(value)
    rescue ArgumentError, TypeError
      nil
    end

    def article_body_excerpt(article_page, fallback: "")
      body_text = ActionController::Base.helpers.strip_tags(article_page&.content(:body).to_s).squish
      body_text.presence || fallback
    end
  end
end
