class SessionsController < ApplicationController
  def new
    debugger
  end

  def create
    # log in the user - goal
    # our_method_that_authenticates_user
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # debugger
    if @user
      # log them in
      # success
      login(@user)
      debugger
      render json: @user
    else
      render json: "Nope", status: 401
      # send an error
    end
  end

  def destroy
    # remove the token from the session
    # change the user's token
    logout
    render json: "Logged out successfully", status: 200
  end

  def notes
    # session is just a hash that represents cookie data
    # request sends anything that the browser remembers
    # we can tell the browser to rememeber things
    # we have access to this hash in our controller actions
    # GOAL: keep our user logged in until they log out
    # give them identifying piece of information (session_token) (in db)
    # When they log in, we will tell the browser to remember that token
    # on subsequent requests, we will use that token that the browser rememebers to find 
    # the current logged in user
  end
end