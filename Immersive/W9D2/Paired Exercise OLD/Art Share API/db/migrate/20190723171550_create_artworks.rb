class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false, uniqueness: true
      t.string :image_url, null: false
      t.integer :artist_id, null: false, uniqueness: true
    end
  end
end



