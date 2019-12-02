# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  city       :string           not null
#  captain_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  belongs_to :captain,
    class_name: :Player,
    primary_key: :id,
    foreign_key: :captain_id  

  has_many :fans,
    class_name: :Fan,
    primary_key: :id,
    foreign_key: :favorite_team_id    

  has_many :players,
    class_name: :Player,
    primary_key: :id,
    foreign_key: :team_id     

  has_many :home_games,
    class_name: :ScheduledGame,
    primary_key: :id,
    foreign_key: :home_team_id      

  has_many :away_games,
    class_name: :ScheduledGame,
    primary_key: :id,
    foreign_key: :away_team_id      

  has_one :stadium,
    class_name: :Stadium,
    primary_key: :id,
    foreign_key: :team_id     

  has_many :home_opponents,
    through: :home_games,
    source: :away_team 

  has_many :away_opponents,
    through: :away_games,
    source: :home_team   
end
