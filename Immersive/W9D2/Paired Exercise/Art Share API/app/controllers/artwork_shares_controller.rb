class ArtworkSharesController < ApplicationRecord

  def create
    artwork_shares = ArtworkShare.new(artwork_share_params)
    if artwork_shares.save
      render json: artwork_shares
    else
      render json: artwork_shares.errors.full_messages, status: :unprocessable_entity
      # 422 is the status code for an unprocessable entity.
      # You can either pass the status code or status symbol.
      # In other words, you can also return:
      # render json: artwork_shares.errors.full_messages, status: 422
    end
  end

  def destroy
    artwork_shares = ArtworkShare.find(params[:id])
    artwork_shares.destroy
    render json: artwork_shares
  end

  private

  def artwork_share_params
    params.require(:artwork_shares).permit(:artwork_id, :viewer_id)
  end
end
