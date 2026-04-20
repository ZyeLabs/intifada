module Site
  class ArticlesQuery < BaseQuery
    DEFAULT_HISTORY_PAGE_SIZE = 8
    STARTER_ARTICLE_TITLES = ["Welcome to the newsroom"].freeze

    def latest(limit: nil)
      pages = sorted_resource_pages
      limit ? pages.first(limit) : pages
    end

    def breaking(limit: nil, tag: nil)
      pages = filter_by_tag(sorted_resource_pages, tag)
      pages = pages.select { |page| breaking_article?(page) }
      pages = pages.sort_by { |page| [article_breaking_sort_time(page), page.id.to_i] }.reverse
      limit ? pages.first(limit) : pages
    end

    def history(limit: nil, tag: nil)
      pages = filter_by_tag(latest, tag)
      limit ? pages.first(limit) : pages
    end

    def lead(tag: nil)
      breaking(tag: tag).first || history(tag: tag).first
    end

    def tag_options
      sorted_resource_pages.each_with_object({}) do |page, options|
        tag = article_tag(page)
        next if tag.blank?

        slug = article_tag_slug(tag)
        options[slug] ||= {label: tag, slug: slug, count: 0}
        options[slug][:count] += 1
      end.values.sort_by { |item| item[:label].downcase }
    end

    def related_for(article_page, selected: [], limit: 3)
      related = Array(selected).compact.uniq.reject { |page| page == article_page }.first(limit)
      return related if related.size >= limit

      current_tag = article_tag_slug(article_tag(article_page))
      append_until_limit!(related, history(tag: current_tag), exclude: article_page, limit: limit) if current_tag.present?
      append_until_limit!(related, latest, exclude: article_page, limit: limit)
      related
    end

    def history_total_count(tag: nil, exclude: nil)
      history_scope(tag: tag, exclude: exclude).size
    end

    def history_page(tag:, page:, per_page:, exclude: nil)
      page_number = [page.to_i, 1].max
      size = [per_page.to_i, 1].max
      pages = history_scope(tag: tag, exclude: exclude)
      pages.slice((page_number - 1) * size, size) || []
    end

    private

    def sorted_resource_pages
      @sorted_resource_pages ||= live_resource_pages("articles")
        .reject { |page| starter_article?(page) }
        .sort_by { |page| article_publish_time(page) || page.created_at }
        .reverse
    end

    def starter_article?(page)
      STARTER_ARTICLE_TITLES.include?(page.title) &&
        page.content(:article_tag).to_s.strip.blank? &&
        page.content(:standfirst).to_s.strip.blank?
    end

    def filter_by_tag(pages, tag)
      return pages if tag.blank?

      tag_slug = article_tag_slug(tag)
      pages.select { |page| article_matches_tag?(page, tag_slug) }
    end

    def history_scope(tag:, exclude:)
      filter_by_tag(sorted_resource_pages, tag).reject { |page| page == exclude }
    end

    def append_until_limit!(target, source, exclude:, limit:)
      source.each do |page|
        next if page == exclude || target.include?(page)

        target << page
        return target if target.size >= limit
      end

      target
    end
  end
end
