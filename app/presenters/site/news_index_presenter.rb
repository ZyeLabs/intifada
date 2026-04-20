module Site
  class NewsIndexPresenter < ApplicationPresenter
    HISTORY_PAGE_SIZE = 6

    attr_reader :page, :articles_query

    def initialize(view_context:, page:, articles_query:)
      super(view_context: view_context)
      @page = page
      @articles_query = articles_query
    end

    def active_filter
      requested = params[:tag].to_s.parameterize
      return if requested.blank?

      filter_options.find { |item| item[:slug] == requested } || {
        label: requested.tr("-", " ").titleize,
        slug: requested,
        count: 0
      }
    end

    def active_tag
      active_filter&.dig(:slug)
    end

    def current_page
      @current_page ||= [requested_page, total_pages].min
    end

    def filter_options
      @filter_options ||= articles_query.tag_options
    end

    def all_stories
      @all_stories ||= articles_query.history(tag: active_tag)
    end

    def result_count
      @result_count ||= articles_query.history_total_count(tag: active_tag)
    end

    def lead_story
      @lead_story ||= articles_query.lead(tag: active_tag)
    end

    def rail_stories
      all_stories.reject { |story| story == lead_story }.first(3)
    end

    def history_page_stories
      @history_page_stories ||= articles_query.history_page(
        tag: active_tag,
        page: current_page,
        per_page: HISTORY_PAGE_SIZE
      )
    end

    def total_pages
      @total_pages ||= begin
        count = articles_query.history_total_count(tag: active_tag)
        [(count.to_f / HISTORY_PAGE_SIZE).ceil, 1].max
      end
    end

    def filtered?
      active_filter.present?
    end

    def results_label
      count_label = "#{result_count} #{'story'.pluralize(result_count)}"
      return "#{count_label} in the newsroom" unless filtered?

      "Showing #{count_label} in #{active_filter[:label]}"
    end

    def rail_heading
      filtered? ? "More in #{active_filter[:label]}" : "Latest from the newsroom"
    end

    def archive_heading
      filtered? ? "#{active_filter[:label]} Archive" : "News Archive"
    end

    def pagination_pages
      (1..total_pages).to_a
    end

    def previous_page
      current_page > 1 ? current_page - 1 : nil
    end

    def next_page
      current_page < total_pages ? current_page + 1 : nil
    end

    def page_path(page_number)
      filter_path(active_tag, page: page_number)
    end

    def filter_path(tag = nil, page: 1)
      path = resource_index_path("articles")
      query_parts = []
      query_parts << "tag=#{ERB::Util.url_encode(tag.to_s)}" if tag.present?
      query_parts << "page=#{page.to_i}" if page.to_i > 1
      return path if query_parts.empty?

      "#{path}?#{query_parts.join('&')}"
    end

    private

    def requested_page
      requested = params[:page].to_i
      requested.positive? ? requested : 1
    end
  end
end
