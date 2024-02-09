set :output, 'log/seed_cron.log'

job_type :rake, "cd :path && RAILS_LOG_LEVEL=warn :environment_variable=:environment bundle exec rake :task --silent :output"

# EC2 servers default to UTC. 10:00 PM UTC = 3:00 PM PDT/2:00 PM PST
every :day, at: '10:00 pm' do
  rake 'demo:seed'
end
