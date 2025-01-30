source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 7.2'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use Puma as the app server
# NOTE: this MUST match the puma version Elastic Beanstalk uses or
# things break.
gem 'puma', '6.0.0'

# NOTE: this MUST also match the puma version Elastic Beanstalk uses or
# things break.
gem 'date', '3.1.3'

gem 'bootsnap'

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3', '~> 2.5'
  gem 'solr_wrapper', '>= 0.3'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :production do
  gem 'mysql2'
end

gem 'blacklight', '~> 8.1'
gem 'arclight', '~> 1.1'
gem 'rsolr', '~> 2.0'
gem 'devise'
gem 'devise-guests', '~> 0.5'

gem 'whenever', require: false # Work around https://github.com/javan/whenever/issues/831

gem 'honeybadger'
gem "blacklight-locale_picker"

gem "cssbundling-rails", "~> 1.1"
