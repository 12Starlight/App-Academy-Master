# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  ArtworkShare.destroy_all
  Artwork.destroy_all
  User.destroy_all

  u1 = User.create!(username: "Scooby")
  u2 = User.create!(username: "Shaggy")
  u3 = User.create!(username: "Wilma")

  a1 = u1.artworks.create!(title: "Snacks", image_url: "snacks.com")
  a2 = u1.artworks.create!(title: "Snacks2", image_url: "snacks.com")
  a3 = u3.artworks.create!(title: "SelfPortrait", image_url: "wilma.com")

  a_s1 = ArtworkShare.create!(artwork: a1, viewer: u2)
  a_s2 = ArtworkShare.create!(artwork: a1, viewer: u3)
  a_s3 = ArtworkShare.create!(artwork: a3, viewer: u1)

end

