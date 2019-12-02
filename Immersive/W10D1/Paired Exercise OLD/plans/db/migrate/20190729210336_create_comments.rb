class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :goal_id, null: false

      t.timestamps
    end
    add_index :comments, :user_id, unique: true
    add_index :comments, :goal_id, unique: true
  end
end
