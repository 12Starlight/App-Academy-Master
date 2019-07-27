# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  album_id   :integer
#  ord        :integer
#  type       :string
#  lyrics     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord

belongs_to :album,
  class_name: :Album 

belongs_to :artist,
  though: :album, 
  source: :artist  
end
