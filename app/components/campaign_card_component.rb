class CampaignCardComponent < ApplicationComponent
  def initialize(page:, past: false, show_top_meta: true, show_supporting: true)
    @page = page
    @past = past
    @show_top_meta = show_top_meta
    @show_supporting = show_supporting
  end

  private

  attr_reader :page, :past, :show_top_meta, :show_supporting
end
