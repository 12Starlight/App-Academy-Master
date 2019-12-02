# == Schema Information
#
# Table name: fans
#
#  id               :bigint           not null, primary key
#  name             :string           not null
#  favorite_team_id :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Fan < ApplicationRecord
  belongs_to :favorite_team,
    class_name: :Team,
    primary_key: :id,
    foreign_key: :favorite_team_id

  has_many :follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :fan_id  
    
  has_many :seats,
    class_name: :Seat,
    primary_key: :id,
    foreign_key: :owner_id    
    
  has_many :followed_players,
    through: :follows,
    source: :player
end
