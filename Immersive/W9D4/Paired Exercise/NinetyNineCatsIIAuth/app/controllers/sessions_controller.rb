class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:user_name]
      params[:user][:password]
    )

    if @user.nil?
      flash.now[:errors] = "Incorrect password and or user_name"
      render :new
    else
      login_user!(@user)
      redirect_to cats_url
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil 
    flash[:success] = "You have logged out :("
    redirect_to cats_url 
  end


end