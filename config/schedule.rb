set :output, 'log/seed_cron.log'

# EC2 servers default to UTC. 9:15 PM UTC = 2:15 PM PDT/1:15 PM PST 
every :day, at: '9:15 pm' do
  rake 'demo:seed'
end
