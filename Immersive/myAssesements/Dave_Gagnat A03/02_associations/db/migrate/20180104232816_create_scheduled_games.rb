class CreateScheduledGames < ActiveRecord::Migration[5.1]
  def change
    create_table :scheduled_games do |t|
      t.integer :home_team_id, null: false
      t.integer :away_team_id, null: false
      t.date :scheduled_date
      
      t.timestamps
    end
  end
end
