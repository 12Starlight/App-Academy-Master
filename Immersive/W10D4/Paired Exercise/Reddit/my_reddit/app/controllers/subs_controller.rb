class SubsController < ApplicationController
  before_action :requrie_login


  def index
    @subs = Sub.all
  end

  def show
    @subs = Sub.find(params[:id])
  end

  def new
    @sub = Sub.new
  end

  def create

    @sub = Sub.new(sub_params, moderator_id: current_user.id)
  end

  def update
  end

  def edit
  end


  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end

end

