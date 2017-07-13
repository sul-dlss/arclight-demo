set :output, 'log/seed_cron.log'

# EC2 servers default to UTC. 10:00 PM UTC = 3:00 PM PDT/2:00 PM PST
every :day, at: '10:00 pm' do
  rake 'demo:seed'
end
