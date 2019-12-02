# == Schema Information
#
# Table name: scheduled_games
#
#  id             :bigint           not null, primary key
#  home_team_id   :integer          not null
#  away_team_id   :integer          not null
#  scheduled_date :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ScheduledGame < ApplicationRecord
  belongs_to :home_team,
    class_name: :Team,
    primary_key: :id,
    foreign_key: :home_team_id  

  belongs_to :away_team,
    class_name: :Team,
    primary_key: :id,
    foreign_key: :away_team_id    
end
