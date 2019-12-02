# == Schema Information
#
# Table name: players
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Player < ApplicationRecord
  belongs_to :team,
    class_name: :Team,
    primary_key: :id,
    foreign_key: :team_id  

  has_many :follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :player_id  
    
  has_many :jerseys,
    class_name: :Jersey,
    primary_key: :id,
    foreign_key: :player_id 
    
  has_one :captain,
    through: :team,
    source: :captain 

  has_many :followers,
    through: :follows,
    source: :fan
end
