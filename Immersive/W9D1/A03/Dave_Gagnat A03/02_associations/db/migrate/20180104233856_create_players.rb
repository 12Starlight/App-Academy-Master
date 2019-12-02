class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.integer :team_id, null: false

      t.timestamps
    end
  end
end
