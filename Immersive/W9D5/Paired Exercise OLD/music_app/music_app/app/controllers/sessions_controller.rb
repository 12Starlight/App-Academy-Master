class SessionsController < ApplicationController
  def new 
    @user = User.new 
    render :new 
  end 

  def create 
    user = User.find_by_credentials(
      params[:user, :email],
      params[:user, :password]
    )

    if user 
      # success
      log_in(user)
      # redirects_to :show 
    else
      # something is wrong   
      flash.now[:errors] = ['Invalid email and password']
      render :new 
    end 
  end 

  def destroy 
    log_out
    redirect_to new_session_url
  end 

end 