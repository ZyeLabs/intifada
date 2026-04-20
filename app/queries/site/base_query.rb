module Site
  class BaseQuery
    include PageData

    private

    def live_resource_pages(resource_name)
      resource = Spina::Resource.find_by(name: resource_name)
      return [] if resource.blank?

      resource.pages.live.roots.includes(:translations).to_a
    end
  end
end
