class ApplicationController < ActionController::Base
  def login(user)
    # figure out the session token
    token = user.reset_session_token!
    # ^ returns a session_token
    # session[:any_key] = "Any value we want to persist across request-response cycles"
    # at a later time:
    # session[:any_key] => "Any value we want to persist across request-response cycles"
    
    # tell the browser to remember that token
    session[:session_token] = token
  end

  def current_user
    return nil unless session[:session_token]
    the_token_from_before = session[:session_token]
    @current_user ||= User.find_by(session_token: the_token_from_before)
    @current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
