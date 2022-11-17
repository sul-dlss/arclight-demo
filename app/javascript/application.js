// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import bootstrap from "bootstrap"
window.bootstrap = bootstrap // Required for Blacklight 7 so it can manage the modals
import "blacklight/blacklight"
import Truncate from 'arclight/truncate_controller'
Stimulus.register('arclight-truncate', Truncate)
import dialogPolyfill from "dialog-polyfill"
Blacklight.onLoad(() => {
  const dialog = document.querySelector('dialog')
  dialogPolyfill.registerDialog(dialog)
})

Blacklight.onLoad(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-7219229-32', 'auto');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');
});
