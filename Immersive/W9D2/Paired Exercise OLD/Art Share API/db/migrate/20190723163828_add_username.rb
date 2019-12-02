class AddUsername < ActiveRecord::Migration[5.2]
  def change
    # drop_table(:users)
    # create_table "users", force: cascade do |t|
    #   t.string "username", null:false, uniqueness: true
    #   t.timestamps
    add_column :users, :username, :string, null:false, uniqueness:true
    remove_column :users, :name
    remove_column :users, :email
  end
end
# add_column(table_name, column_name, type, options = {}) public
# rename_column(table_name, column_name, new_column_name) public 