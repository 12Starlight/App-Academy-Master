class ApplicationController < ActionController::Base
  helper_method :current_user 
d
  def curent_user 
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

  def login_user!
    session[:session_token] = user.reset.session_token
    
  end
end
