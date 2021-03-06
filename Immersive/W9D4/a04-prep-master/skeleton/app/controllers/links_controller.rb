class LinksController < ApplicationController
  before_action :require_login


  def new
    @link = Link.new 
  end

  def create
    @link = Link.new(link_params)
    @link.user_id = current_user.id 

    if @link.save
      redirect_to link_url(@link)
    else
      flash.now[:errors] = @link.errors.full_messages
      render :new 
    end
  end

  def index
    @link = Link.all 
  end

  def show
    @link = Link.find(params[:id])
  end

  def edit
    
  end

  def edit 
  end

  private
  def link_params
    params.require(:link).permit(:title, :url)
  end
end
