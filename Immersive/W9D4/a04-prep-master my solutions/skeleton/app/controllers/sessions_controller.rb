class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user 
      login(user)
      redirect_to links_url
    else  
      flash.now[:errors] = ["Username and Password not valid!"]
      render :new
    end 
  end 

  def new

  end

  def destroy
    logout
    redirect_to new_session_url
  end 

end
