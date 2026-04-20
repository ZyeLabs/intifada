Rails.application.routes.draw do
  get "/about-us", to: "static_pages#about"
  get "/about", to: redirect("/about-us")
  mount Spina::Engine => '/'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
