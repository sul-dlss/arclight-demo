# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

require 'solr_wrapper/rake_task' unless Rails.env.production?


# Load out SOLR_URL from our configuration file
solr_config = YAML.load(ERB.new(File.read('./config/blacklight.yml')).result)
ENV['SOLR_URL'] = solr_config[Rails.env]['url']

# Read the repository configuration
repo_config = YAML.load(File.read('./config/repositories.yml'))

namespace :demo do
  desc 'Run Solr and Rails'
  task :server, [:rails_server_args] do |_t, args|
    SolrWrapper.wrap do |solr|
      solr.with_collection do
        system "bundle exec rails s #{args[:rails_server_args]}"
      end
    end
  end

  desc 'Seed fixture data to Solr'
  task :seed do
    # Identify the configured repos
    repo_config.keys.map do |repository|
      # Index a directory with a given repository ID that matches its filename
      system("DIR=./data/ead/#{repository} REPOSITORY_ID=#{repository} rake arclight:index_dir")
    end
  end
end
