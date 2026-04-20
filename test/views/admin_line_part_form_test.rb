require "test_helper"
require "ostruct"

class AdminLinePartFormTest < ActionView::TestCase
  test "date-like line parts render a date input" do
    render_line_part(name: "campaign_deadline", title: "Campaign deadline", content: "2026-05-10")

    assert_select 'input[type="date"][name="part[content]"][value="2026-05-10"]'
  end

  test "time-like line parts render a time input" do
    render_line_part(name: "event_time", title: "Event time", content: "18:30")

    assert_select 'input[type="time"][name="part[content]"][value="18:30"]'
  end

  test "other line parts render a text input" do
    render_line_part(name: "author_name", title: "Author", content: "Editorial Desk")

    assert_select 'input[type="text"][name="part[content]"][value="Editorial Desk"]'
  end

  private

  def render_line_part(name:, title:, content:, hint: nil)
    part = OpenStruct.new(name: name, title: title, hint: hint, content: content)
    builder = ActionView::Helpers::FormBuilder.new(:part, part, view, {})

    render partial: "spina/admin/parts/lines/form", locals: {f: builder}
  end
end
