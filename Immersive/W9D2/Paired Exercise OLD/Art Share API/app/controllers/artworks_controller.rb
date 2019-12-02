class ArtworksController < ApplicationController
  def index
    render json: Artwork.find(params[:artist_id])
    render json: Artwork.find(params[:artworks])
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
      # 422 is the status code for an unprocessable entity.
      # You can either pass the status code or status symbol.
      # In other words, you can also return:
      # render json: artwork.errors.full_messages, status: 422
    end
  end

  def show
    render json: Artwork.find(params[:id])
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update_attributes(artwork_params)
      render json: artwork
    else
      render json: artwork.errors, status: :unprocessable_entity
    end
  end

  private

  def artwork_params
    params.require(:artist_id).permit(:title)
  end
end
