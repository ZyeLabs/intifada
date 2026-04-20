module SiteContentHelper
  include Site::PageData

  ABOUT_ICON_SVGS = {
    "voice" => <<~SVG.freeze,
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 11.5V8.75C4 8.34 4.25 7.97 4.63 7.82L14.8 3.75C15.46 3.49 16.18 3.97 16.18 4.68V17.32C16.18 18.03 15.46 18.51 14.8 18.25L4.63 14.18C4.25 14.03 4 13.66 4 13.25V11.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M16.18 8.2C18.23 8.63 19.78 10.45 19.78 12.6C19.78 14.75 18.23 16.57 16.18 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M7.25 14.1L8.6 19.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    SVG
    "expose" => <<~SVG.freeze,
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3.5 12C5.78 8.18 8.58 6.27 12 6.27C15.42 6.27 18.22 8.18 20.5 12C18.22 15.82 15.42 17.73 12 17.73C8.58 17.73 5.78 15.82 3.5 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="2.55" stroke="currentColor" stroke-width="1.8"/>
        <path d="M18.8 5.2L5.2 18.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    SVG
    "aid" => <<~SVG.freeze,
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.1 8.4H10.25C11.36 8.4 12.25 9.3 12.25 10.4V12.9H8.8L7.1 11.5V8.4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M12.25 11.2H15.4C16.32 11.2 17.08 11.95 17.08 12.88V14.55C17.08 16.7 15.33 18.45 13.18 18.45H10.6C9.66 18.45 8.77 18.07 8.11 17.41L5.45 14.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.55 5.1V8.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M16.65 7H20.45" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    SVG
  }.freeze

  NAV_PRIMARY_ITEMS = [
    {label: "Home", url: "/"},
    {label: "About Us", url: "/about-us"},
    {label: "News", url: "/news"},
    {label: "Events", url: "/events"},
    {label: "Campaigns", url: "/campaigns"}
  ].freeze
  LIGHT_BG_LOGO_ASSET = "/white-bg-logo.svg".freeze
  DARK_BG_LOGO_ASSET = "/black-bg-logo.svg".freeze
  DEFAULT_INSTAGRAM_URL = "https://www.instagram.com/socialintifada/".freeze
  SOCIAL_ICON_SVGS = {
    "instagram" => <<~SVG.freeze
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="12" cy="12" r="4.1" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor"/>
      </svg>
    SVG
  }.freeze

  def articles_query
    @articles_query ||= Site::ArticlesQuery.new
  end

  def events_query
    @events_query ||= Site::EventsQuery.new
  end

  def campaigns_query
    @campaigns_query ||= Site::CampaignsQuery.new
  end

  def homepage_presenter
    @homepage_presenter ||= Site::HomepagePresenter.new(
      view_context: self,
      page: current_page,
      articles_query: articles_query,
      campaigns_query: campaigns_query,
      events_query: events_query
    )
  end

  def news_index_presenter
    @news_index_presenter ||= Site::NewsIndexPresenter.new(
      view_context: self,
      page: current_page,
      articles_query: articles_query
    )
  end

  def site_name_text
    site_account&.content(:site_name).presence || "Social Intifada"
  end

  def site_tagline_text
    site_account&.content(:site_tagline).presence || "Newsroom for awareness, mobilization, and principled reporting."
  end

  def brand_logo_url
    content_image_url(site_account, part_name: :brand_logo, fallback: nil, resize_to_limit: [360, 140])
  end

  def header_brand_logo_url
    LIGHT_BG_LOGO_ASSET
  end

  def footer_brand_logo_url
    DARK_BG_LOGO_ASSET
  end

  def favicon_logo_url
    LIGHT_BG_LOGO_ASSET
  end

  def header_donate_label
    site_account&.content(:header_donate_label).presence || "Support Us"
  end

  def header_donate_url
    safe_url(site_account&.content(:header_donate_url), default: donate_page_path || "/donate")
  end

  def footer_mission_text
    site_account&.content(:footer_mission).presence || "Committed to unapologetic, front-foot digital activism grounded in the principles of the Qur’an and Sunnah. We aim to raise awareness, educate, and empower individuals to stand in solidarity with Palestine and Bilad Ash Shaam."
  end

  def footer_contact_email
    site_account&.content(:footer_contact_email).presence
  end

  def social_links
    [
      {name: "Instagram", url: site_account&.content(:social_instagram_url).presence || DEFAULT_INSTAGRAM_URL, icon: "instagram"}
    ].select { |item| item[:url].present? }
  end

  def social_icon_svg(icon_name)
    SOCIAL_ICON_SVGS.fetch(icon_name.to_s) { SOCIAL_ICON_SVGS["instagram"] }.html_safe
  end

  def main_navigation_links
    NAV_PRIMARY_ITEMS
  end

  def nav_link_active?(url)
    current = normalized_path(request.path)
    target = normalized_path(url)
    return current == "/" if target == "/"

    current == target || current.start_with?("#{target}/")
  end

  def page_image_url(page, part_name: :hero_image, resize_to_fill: [960, 540], fallback: nil)
    content_image_url(page, part_name: part_name, fallback: fallback, resize_to_fill: resize_to_fill)
  end

  def cms_page_path(page)
    return "#" if page.blank?

    page.homepage? ? "/" : page.materialized_path
  end

  def safe_url(url, default: "#")
    value = url.to_s.strip
    value.present? ? value : default
  end

  def resource_index_path(resource_name)
    case resource_name
    when "articles"
      cms_page_path(Spina::Page.live.find_by(name: "news"))
    when "events"
      cms_page_path(Spina::Page.live.find_by(name: "events"))
    when "campaigns"
      cms_page_path(Spina::Page.live.find_by(name: "campaigns"))
    else
      "#"
    end
  end

  def donate_page_path
    page = Spina::Page.live.find_by(name: "donate")
    page ? cms_page_path(page) : nil
  end

  def about_icon_svg(icon_name)
    ABOUT_ICON_SVGS.fetch(icon_name.to_s, ABOUT_ICON_SVGS["voice"]).html_safe
  end

  private

  def content_image_url(record, part_name:, fallback:, **variant_options)
    image_part = record&.content(part_name)
    image = image_part.respond_to?(:spina_image) ? image_part.spina_image : nil
    return fallback_url(fallback) if image.blank? || !image.file.attached?

    if image_variant_processing_available?
      record.content.image_url(part_name, variant_options) || main_app.url_for(image.file)
    else
      main_app.url_for(image.file)
    end
  rescue MiniMagick::Error, Errno::ENOENT
    main_app.url_for(image.file)
  end

  def image_variant_processing_available?
    @image_variant_processing_available ||= begin
      processor = Rails.application.config.active_storage.variant_processor&.to_sym || :mini_magick

      case processor
      when :vips
        command_available?("vips")
      else
        command_available?("magick") || command_available?("convert")
      end
    end
  end

  def command_available?(command)
    system("which", command, out: File::NULL, err: File::NULL)
  end

  def site_account
    @site_account ||= begin
      current_spina_account
    rescue StandardError
      Spina::Account.first
    end
  end

  def fallback_url(asset_name)
    asset_name.present? ? asset_path(asset_name) : nil
  end

  def normalized_path(url)
    path = url.to_s.strip
    path = "/" if path.blank?
    return "/" if path == "/"

    path.chomp("/")
  end
end
