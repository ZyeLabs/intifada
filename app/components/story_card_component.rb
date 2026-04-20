class StoryCardComponent < ApplicationComponent
  def initialize(page:, compact: false)
    @page = page
    @compact = compact
  end

  private

  attr_reader :page, :compact
end
