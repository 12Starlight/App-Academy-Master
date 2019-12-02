class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.date :date, null: false
      t.text :description, null: false
      t.boolean :completed, null: false

      t.timestamps
    end
    add_index :goals, :date
  end
end
