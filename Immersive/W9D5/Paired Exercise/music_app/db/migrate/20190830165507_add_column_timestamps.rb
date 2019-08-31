class AddColumnTimestamps < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :timestamps, :date  
  end
end
