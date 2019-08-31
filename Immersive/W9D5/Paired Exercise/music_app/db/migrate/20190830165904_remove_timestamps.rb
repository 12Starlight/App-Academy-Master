class RemoveTimestamps < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :timestamps 
  end
end
