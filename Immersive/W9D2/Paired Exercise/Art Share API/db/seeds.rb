# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ArtworkShare.destroy_all
Artwork.destroy_all
User.destroy_all

user1 = User.create!(username: 'user1')
user2 = User.create!(username: 'user2')
user3 = User.create!(username: 'user3')
user4 = User.create!(username: 'user4')
user5 = User.create!(username: 'user5')

# Artworks.create!(title: '1', image_url:'/url1', artist_id: User.first.id)
# Artworks.create!(title: '1', image_url:'/url1', artist: User.first)

work1 = Artwork.create!(title: '1', image_url:'/url1', artist: user1)
work2 = Artwork.create!(title:'2', image_url:'/url2', artist: user2)
work3 = Artwork.create!(title:'3', image_url:'/url3', artist: user3)
work4 = Artwork.create!(title:'4', image_url:'/url4', artist: user4)
work5 = Artwork.create!(title:'5', image_url:'/url5', artist: user5)

share1 = ArtworkShare.create!(artwork: work1, viewer: user1)
share2 = ArtworkShare.create!(artwork: work2, viewer: user2)
share3 = ArtworkShare.create!(artwork: work3, viewer: user3)
share4 = ArtworkShare.create!(artwork: work4, viewer: user4)
share5 = ArtworkShare.create!(artwork: work5, viewer: user5)