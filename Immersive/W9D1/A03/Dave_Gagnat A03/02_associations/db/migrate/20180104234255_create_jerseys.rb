class CreateJerseys < ActiveRecord::Migration[5.1]
  def change
    create_table :jerseys do |t|
      t.string :color
      t.integer :player_id
      
      t.timestamps
    end
  end
end
