# Arclight Demo Application

[![Build Status](https://travis-ci.org/sul-dlss/arclight-demo.svg?branch=master)](https://travis-ci.org/sul-dlss/arclight-demo)

To setup the server:

```
bundle install
```

Then, to run the server:

```
bundle exec rake demo:server
bundle exec rake demo:seed
```

To update to a new version of Arclight:

```
bundle update arclight
```

## Regenerating the application

These are the basic steps for regenerating the demo application:

```
rails new arclight-demo -m https://raw.githubusercontent.com/sul-dlss/arclight/master/template.rb
rm -rf solr && cp -r path/to/arclight/solr ./
```
