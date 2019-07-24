# == Schema Information
#
# Table name: artworks
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  image_url :string           not null
#  artist_id :integer          not null
#

class Artwork < ApplicationRecord
  validates :title, uniqueness: { scope: :artist_id }

  belongs_to :artist,
    class_name: :User, 
    primary_key: :id,
    foreign_key: :artist_id
  
  has_many :artwork_shares,
    class_name: :ArtworkShares,
    primary_key: :id,  
    foreign_key: :artwork_id

  has_many :shared_viewers,
    through: :artwork_shares,
    source: :viewers   
end



# class GoodnessValidator < ActiveModel::Validator
#   def validate(record)
#     if record.first_name == "Evil"
#       record.errors[:base] << "This person is evil"
#     end
#   end
# end
 
# class Person < ApplicationRecord
#   validates_with GoodnessValidator
# end