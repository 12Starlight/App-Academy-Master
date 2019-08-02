class DropTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :subs
    drop_table :posts
  end
end
