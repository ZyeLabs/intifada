module Site
  class CampaignsQuery < BaseQuery
    def active(limit: nil)
      pages = live_resource_pages("campaigns").select { |page| campaign_active?(page) }
      pages = pages.sort_by do |page|
        deadline = campaign_deadline(page)
        [deadline.present? ? 0 : 1, deadline || Time.zone.now + 100.years, -(page.created_at || Time.zone.at(0)).to_i]
      end
      limit ? pages.first(limit) : pages
    end

    def past(limit: nil)
      pages = live_resource_pages("campaigns").reject { |page| campaign_active?(page) }
      pages = pages.sort_by do |page|
        [campaign_deadline(page) || page.created_at || Time.zone.at(0), page.id.to_i]
      end.reverse
      limit ? pages.first(limit) : pages
    end

    def related_for(campaign_page, limit: 3)
      active.reject { |page| page == campaign_page }.first(limit)
    end
  end
end
