class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login(user)
      #redirect_to home
    else
      flash.now[:errors] = ["username and password not valid"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
  
end
