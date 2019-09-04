class AddUserIdToGoals < ActiveRecord::Migration[6.0]
  def change
    add_column :goals, :user_id, :integer, null: false
    add_index :goals, :user_id
  end
end
