class UsersController < ApplicationController 
  
  def show
    render :show 
  end
    
  def new
    @user = User.new 
  end 

  def create
    @user = User.new(user_params)

    if @user.save
      # success
      log_in(@user)
      redirect_to emails_url 
    else
      # something is wrong
      flash.now[:errors] = @user.errors_full_messages
      render :new 
    end 
  end 


  private
  def user_params
    params.require(:user).permit(:password, :email) 
  end 

end 