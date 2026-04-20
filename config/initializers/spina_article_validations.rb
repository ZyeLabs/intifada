Rails.application.config.to_prepare do
  next if Spina::Page.method_defined?(:required_article_fields_for_publication)

  Spina::Page.class_eval do
    validate :required_article_fields_for_publication

    private

    def required_article_fields_for_publication
      return unless view_template == "article"
      return if draft? || !active?

      {
        author_name: "Author",
        published_date: "Publish date",
        body: "Body"
      }.each do |part_name, label|
        value = content(part_name)
        missing = if part_name == :body
          ActionController::Base.helpers.strip_tags(value.to_s).squish.blank?
        else
          value.to_s.strip.blank?
        end
        errors.add(:base, "#{label} can't be blank") if missing
      end

      validate_article_date
    end

    def validate_article_date
      date_text = content(:published_date).to_s.strip
      return if date_text.blank?

      Date.parse(date_text)
    rescue ArgumentError
      errors.add(:base, "Publish date is invalid")
    end

  end
end
