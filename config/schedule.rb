set :output, 'log/seed_cron.log'

every :day, at: '2:00 pm' do
  rake 'demo:seed'
end
