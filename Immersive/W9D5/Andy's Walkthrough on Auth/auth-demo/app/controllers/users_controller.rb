class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    # debugger
    # username, password
    # username=, password=
    if @user.save
      login(@user)
      render json: @user
      # successful creation
      # log them in
    else
      #something is wrong
      render json: "Nope", status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end