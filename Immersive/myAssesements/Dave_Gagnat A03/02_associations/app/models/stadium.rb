# == Schema Information
#
# Table name: stadia
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stadium < ApplicationRecord
  belongs_to :team,
    class_name: :Team,
    primary_key: :id,
    foreign_key: :team_id  

  has_many :seats,
    class_name: :Seat,
    primary_key: :id,
    foreign_key: :stadium_id    

  has_many :games,
    through: :team,
    source: :home_games

end
