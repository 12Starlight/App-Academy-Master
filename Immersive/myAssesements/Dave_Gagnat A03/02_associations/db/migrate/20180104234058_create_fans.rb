class CreateFans < ActiveRecord::Migration[5.1]
  def change
    create_table :fans do |t|
      t.string :name, null: false
      t.integer :favorite_team_id

      t.timestamps
    end
  end
end
