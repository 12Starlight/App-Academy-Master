class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :album_id
      t.integer :ord
      t.string :type
      t.string :lyrics

      t.timestamps
    end
  end
end
