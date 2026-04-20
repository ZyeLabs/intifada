module Site
  class EventsQuery < BaseQuery
    def upcoming(limit: nil)
      pages = live_resource_pages("events").select { |page| upcoming_event?(page) }
      pages = pages.sort_by { |page| event_datetime(page) || Time.zone.now + 100.years }
      limit ? pages.first(limit) : pages
    end

    def past(limit: nil)
      pages = live_resource_pages("events").reject { |page| upcoming_event?(page) }
      pages = pages.sort_by { |page| event_datetime(page) || Time.zone.now - 100.years }.reverse
      limit ? pages.first(limit) : pages
    end

    def related_upcoming_for(event_page, limit: 3)
      upcoming.reject { |page| page == event_page }.first(limit)
    end
  end
end
