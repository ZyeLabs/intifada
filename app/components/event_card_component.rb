class EventCardComponent < ApplicationComponent
  def initialize(page:, past: false)
    @page = page
    @past = past
  end

  private

  attr_reader :page, :past
end
