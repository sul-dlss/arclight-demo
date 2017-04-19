# Arclight Demo Application

To setup the server:

```
bundle install
bundle exec rake demo:seed
```

Then, to run the server:

```
bundle exec rake demo:server
```

To update to a new version of Arclight:

```
bundle update arclight
```

## Regenerating the application

```
rails new arclight-demo -m https://raw.githubusercontent.com/sul-dlss/arclight-demo/master/template.rb
cp -r path/to/arclight/solr/conf solr/
cp -r path/to/arclight/db ./  # TODO: verify???
```
