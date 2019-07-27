class FixStupidTypo < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :usrname, :username
  end
end
