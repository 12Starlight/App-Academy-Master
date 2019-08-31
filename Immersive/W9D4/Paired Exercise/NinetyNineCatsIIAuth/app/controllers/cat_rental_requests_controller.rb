class CatRentalRequestsController < ApplicationController
  def approve
    current_cat_rental_request.approve!
    redirect_to cat_url(current_cat)
  end

  def create
    @rental_request = CatRentalRequest.new(cat_rental_request_params)
    if @rental_request.save
      redirect_to cat_url(@rental_request.cat)
    else
      flash.now[:errors] = @rental_request.errors.full_messages
      render :new
    end
  end

  #/cat_rental_requests/:id/deny
  def deny
    current_cat_rental_request.deny!
    redirect_to cat_url(current_cat)
  end

  # go back and review this section
  # try to have a concrete understanding
  
  # i want to request to rent cat 4
  # /cat_rental/request/4/deny

  # #/cat_rental_request/deny
  # tom = Cat.new(blahblahbalh)
  # deny(tom)
  # def deny(current_cat)
  #   current_cat_rental_request.deny!
  #   redirect_to cat_url(current_cat)
  # end

  # current_id :id 
  # :id = 3
  # current_cat would current_cat.id = 3


  # current_cat = member :id 


  def new
    @rental_request = CatRentalRequest.new
  end

  private

  def current_cat_rental_request
    @rental_request ||=
      CatRentalRequest.includes(:cat).find(params[:id])
  end

  def current_cat
    current_cat_rental_request.cat
  end

  def cat_rental_request_params
    params.require(:cat_rental_request).permit(:cat_id, :end_date, :start_date, :status)
  end
end
