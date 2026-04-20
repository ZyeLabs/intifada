class StaticPagesController < ApplicationController
  StaticPage = Struct.new(:title, :seo_title, :description, keyword_init: true) do
    def homepage?
      false
    end
  end

  layout "default/application"
  helper_method :current_page

  def about
  end

  def current_page
    @current_page ||= StaticPage.new(title: "About Us")
  end
end
