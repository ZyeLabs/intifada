class FakeSiteContentProxy
  def initialize(data)
    @data = data.transform_keys(&:to_sym)
  end

  def image_url(name, resize_to_fill: nil, resize_to_limit: nil)
    @data[name.to_sym]
  end

  def html(name)
    @data[name.to_sym].to_s.html_safe
  end
end

class FakeSitePage
  attr_reader :created_at, :data, :id, :materialized_path, :title

  def initialize(id:, title:, created_at:, data: {}, materialized_path: nil)
    @id = id
    @title = title
    @created_at = created_at
    @data = data.transform_keys(&:to_sym)
    @materialized_path = materialized_path || "/stories/#{id}"
    @content_proxy = FakeSiteContentProxy.new(@data)
  end

  def content(name = :__proxy__)
    return @content_proxy if name == :__proxy__

    @data[name.to_sym]
  end

  def homepage?
    false
  end

  def seo_title
    nil
  end

  def description
    nil
  end
end

class FakeViewContext
  include Site::PageData

  attr_reader :params

  def initialize(params: {}, resource_index_path: "/news")
    @params = params.with_indifferent_access
    @resource_index_path = resource_index_path
  end

  def asset_path(name)
    "/assets/#{name}"
  end

  def cms_page_path(page)
    page.materialized_path
  end

  def current_page
    nil
  end

  def current_spina_account
    nil
  end

  def donate_page_path
    "/donate"
  end

  def page_image_url(page, part_name: :hero_image, resize_to_fill: [960, 540], fallback: nil)
    page.content(part_name).presence || fallback
  end

  def resource_index_path(_resource_name)
    @resource_index_path
  end

  def safe_url(url, default: "#")
    value = url.to_s.strip
    value.present? ? value : default
  end
end
