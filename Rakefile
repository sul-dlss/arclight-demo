# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

require 'solr_wrapper/rake_task' unless Rails.env.production?


# Load out SOLR_URL from our configuration file
solr_config = YAML.load(ERB.new(File.read('./config/blacklight.yml')).result)
ENV['SOLR_URL'] = solr_config[Rails.env]['url']

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
    system('DIR=./data/ead rake arclight:index_dir')
  end
end
