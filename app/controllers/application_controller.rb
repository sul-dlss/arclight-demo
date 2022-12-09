class ApplicationController < ActionController::Base
  # Adds a few additional behaviors into the application controller
  include Blacklight::Controller
  include Blacklight::LocalePicker::Concern
  layout :determine_layout

  protect_from_forgery with: :exception
end
