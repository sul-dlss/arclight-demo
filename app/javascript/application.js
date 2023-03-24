// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import bootstrap from "bootstrap"
window.bootstrap = bootstrap // Required for Blacklight 7 so it can manage the modals
import "@github/auto-complete-element"
import "blacklight"
import Truncate from 'arclight/truncate_controller'
Stimulus.register('arclight-truncate', Truncate)
import dialogPolyfill from "dialog-polyfill"
Blacklight.onLoad(() => {
  const dialog = document.querySelector('dialog')
  dialogPolyfill.registerDialog(dialog)
})

import "arclight"