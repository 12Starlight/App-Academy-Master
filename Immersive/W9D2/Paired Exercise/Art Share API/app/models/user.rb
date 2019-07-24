# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord
  validates :username, uniqueness: true

  has_many :artworks,
    class_name: :Artwork,
    primary_key: :id, 
    foreign_key: :artist_id,
    dependent: :destroy

  has_many :viewers,
    class_name: :ArtworkShares,
    primary_key: :id,
    foreign_key: :viewer_id  

  has_many :shared_artworks,
    through: :artwork_shares,
    source: :artwork,
    dependent: :destroy
end

