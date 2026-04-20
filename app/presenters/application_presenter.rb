class ApplicationPresenter
  attr_reader :view_context

  delegate :asset_path, :cms_page_path, :current_page, :current_spina_account, :donate_page_path,
           :page_image_url, :params, :resource_index_path, :safe_url, to: :view_context

  def initialize(view_context:)
    @view_context = view_context
  end
end
