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

## Updating Arclight

To update to a new version of Arclight:

```
bundle update arclight
```

**NOTE** that if the solr configuration or the fixture data changes, you will need to copy those over manually.

## Regenerating the application

In the oft case that we need to re-run the rails generators, these are the basic steps for regenerating the demo application:

```
rails new arclight-demo -m https://raw.githubusercontent.com/sul-dlss/arclight/master/template.rb
rm -rf solr && cp -r path/to/arclight/solr ./
cp path/to/arclight/spec/fixtures/ead/* ./data/ead/
vi Rakefile # add demo:* tasks
vi Gemfile Rakefile # enable solr_wrapper for production
vi .travis.yml # add Travis configuration
```
