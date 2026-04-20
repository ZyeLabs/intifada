namespace :spina do
  desc "Create or update the first Spina admin user from environment variables"
  task setup_admin: :environment do
    email = ENV.fetch("SPINA_ADMIN_EMAIL", "admin@example.com")
    password = ENV.fetch("SPINA_ADMIN_PASSWORD", "change-me-now")
    name = ENV.fetch("SPINA_ADMIN_NAME", "Admin")

    account = Spina::Account.first_or_create!
    account.update!(theme: "default") if account.theme.blank?

    user = Spina::User.find_by(email: email) ||
           Spina::User.find_by(email: "admin@domain.com") ||
           Spina::User.first ||
           Spina::User.new
    user.email = email
    user.name = name
    user.admin = true
    user.password = password
    user.save!

    if email != "admin@domain.com"
      Spina::User.where(email: "admin@domain.com").where.not(id: user.id).delete_all
    end

    puts "Spina admin ready: #{user.email}"
  end

  desc "Sync theme pages/resources and primary navigation for the website"
  task sync_site: :environment do
    Spina::Resource.where(slug: nil).update_all(slug: {})

    account = Spina::Account.first_or_create!(name: ENV.fetch("SPINA_ACCOUNT_NAME", "Social Intifada"))
    account.update!(theme: "default") unless account.theme == "default"
    account.save!

    {
      "articles" => "news",
      "events" => "events",
      "campaigns" => "campaigns"
    }.each do |resource_name, slug_value|
      resource = Spina::Resource.find_by(name: resource_name)
      next if resource.blank?

      current_value = resource.read_attribute(:slug)
      desired_value = {I18n.default_locale.to_s => slug_value}
      resource.update_columns(slug: desired_value) if current_value != desired_value
    end

    navigation = Spina::Navigation.find_or_create_by!(name: "main") do |nav|
      nav.label = "Main navigation"
    end

    required_pages = %w[homepage about news events campaigns donate]
    required_pages.each_with_index do |name, index|
      page = Spina::Page.find_by(name: name)
      next if page.blank?

      item = Spina::NavigationItem.find_or_initialize_by(navigation: navigation, page: page)
      item.kind ||= "page"
      item.position ||= index
      item.save! if item.new_record? || item.changed?
    end

    starter_titles = {
      "articles" => "Welcome to the newsroom",
      "events" => "Community briefing event",
      "campaigns" => "Support the current campaign"
    }

    starter_titles.each do |resource_name, title|
      resource = Spina::Resource.find_by(name: resource_name)
      next if resource.blank? || resource.pages.exists?

      Spina::Page.create!(
        title: title,
        resource: resource,
        view_template: resource.view_template,
        show_in_menu: false
      )
    end

    puts "Spina site synced: pages, resources, and navigation are in place"
  end
end
