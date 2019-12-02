# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  artist_id   :integer
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord

belongs_to :artist,
  class_name: :Artist

has_many :tracks
  class_name: :Track
end
