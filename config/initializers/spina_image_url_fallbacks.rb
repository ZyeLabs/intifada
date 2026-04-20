module SpinaImageUrlFallbacks
  module ImagesHelperOverride
    def thumbnail_url(image)
      safe_image_url(image, resize_to_fill: [400, 300])
    end

    def large_thumbnail_url(image)
      safe_image_url(image, resize_to_fit: [800, 600])
    end

    def preview_url(image)
      safe_image_url(image, resize_to_limit: [1600, 1200])
    end

    def embedded_image_url(image)
      return "" if image.nil?

      resize_key = Spina.config.embedded_image_size.is_a?(Array) ? :resize_to_limit : :resize
      safe_image_url(image, {resize_key => Spina.config.embedded_image_size})
    end

    private

    def safe_image_url(image, variant_options)
      return "" if image.nil?
      return original_url(image) unless image_variant_processing_available?

      main_app.url_for(image.variant(variant_options))
    rescue MiniMagick::Error, Errno::ENOENT
      original_url(image)
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
  end
end

Rails.application.config.to_prepare do
  Spina::ImagesHelper.prepend(SpinaImageUrlFallbacks::ImagesHelperOverride)
end
