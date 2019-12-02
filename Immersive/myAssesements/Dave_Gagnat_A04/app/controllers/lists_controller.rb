class ListsController < ApplicationController
  before_action :require_login
  before_action :ensure_author, only: [:edit]
  
  
  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
    render :show 
  end

  def new
    @list = List.new 
  end

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id 

    if @list.save
      redirect_to list_url(@list)
    else
      flash.now[:errors] = @list.errors.full_messages
      render :new
    end
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = current_user.lists.find(params[:id])

    if @list.update_attributes(list_params)
      redirect_to list_url(@list)
    else
      flash.now[:errors] = @list.errors.full_messages
      render :edit 
    end
  end


  private
  def list_params
    params.require(:list).permit(:name, :description)
  end

  def ensure_author
    redirect_to list_url(params[:id]) unless List.find(params[:id]).user_id == current_user.id 
  end
end
