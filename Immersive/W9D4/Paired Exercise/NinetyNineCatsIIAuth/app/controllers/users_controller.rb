class UsersController < ApplicationController
  #before_action redirect_to (index)

  def new 
    @user = User.new 
    render :new 
  end 

  def create 
    @user = User.new(user_params)
    if @user.save 
      session[:session_token] = @user.session_token 
      flash[:success] = "Welcome to 99 cats!"
      redirect_to user_url 
    else  
      flash.now[:errors] = @users.errors.full_messages
      render :new
    end
  end 

  private 
  def user_params
    params.require(:user).permit(:user_name, :password)
  end 
end
