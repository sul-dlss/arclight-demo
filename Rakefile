# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

require 'solr_wrapper/rake_task'

namespace :demo do
  desc 'Run Solr and Blacklight for interactive development'
  task :server, [:rails_server_args] do |_t, args|
    SolrWrapper.wrap do |solr|
      solr.with_collection do
        system "bundle exec rails s #{args[:rails_server_args]}"
      end
    end
  end

  desc 'Seed fixture data to Solr'
  task :seed do
    system('DIR=./data/ead rake demo:index_dir')
  end

  # TODO: should be able to import this rake task from arclight gem
  desc 'Index a directory of documents'
  task :index_dir do
    solr_config = YAML.load(ERB.new(File.read('./config/blacklight.yml')).result)
    ENV['SOLR_URL'] = solr_config[Rails.env]['url']
    raise 'Please specify your directory, ex. DIR=<path/to/directory>' unless ENV['DIR']
    indexer = load_indexer
    Dir.glob(File.join(ENV['DIR'], '*.xml')).each do |file|
      print "Indexing #{File.basename(file)}..."
      indexer.update(file)
      print "done.\n"
    end
  end
end

def load_indexer
  options = {
    document: Arclight::CustomDocument,
    component: Arclight::CustomComponent
  }
  SolrEad::Indexer.new(options)
end
