class UsersController < ApplicationController
  def new
    @user = User.new 
  end 

  def create
    if @user.save
      login(@user)
      # redirect_to links_url
    else  
      flash.now[:errors] = @users.errors.full_messages
    end  
  end 

  def user_params
    params.require(:user).permit(:username, :password)
  end  

end
