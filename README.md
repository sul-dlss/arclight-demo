# Arclight Demo Application

To setup the server:

```
bundle
```

Then, to run the server:

```
solr_wrapper           # run this in one console
bin/rails demo:seed    # to load data from data/ead folder
bin/dev                # Compiles sass and runs the web server
```

## Updating Arclight

To update to a new version of Arclight:

```
bundle update arclight
```

**NOTE** that if the solr configuration or the fixture data changes, you will need to copy those over manually. Same with the arclight generators (e.g., catalog_controller.rb), you will need to run the `arclight:install` again.

## Updating the application

See https://github.com/sul-dlss/arclight/wiki/Upgrading-your-ArcLight-application

## Deploying
Deployment is handled via AWS CodePipeline
