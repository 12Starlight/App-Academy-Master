class CreateSeats < ActiveRecord::Migration[5.1]
  def change
    create_table :seats do |t|
      t.integer :stadium_id, null: false
      t.integer :row, null: false
      t.integer :chair_number, null: false
      t.integer :owner_id

      t.timestamps
    end
  end
end
