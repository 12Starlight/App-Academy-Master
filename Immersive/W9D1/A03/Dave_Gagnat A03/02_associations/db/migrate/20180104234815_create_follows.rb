class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :player_id, null: false
      t.integer :fan_id, null: false

      t.timestamps
    end
  end
end
