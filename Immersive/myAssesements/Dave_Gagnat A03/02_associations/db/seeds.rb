# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Team.destroy_all
  Fan.destroy_all
  Stadium.destroy_all
  Player.destroy_all
  Jersey.destroy_all
  ScheduledGame.destroy_all
  Follow.destroy_all
  Seat.destroy_all

  puts 'Beginning to seed'

  #teams
  Team.new(name: "Giants", city: "San Jose", captain_id: 3).save!(validate: false)
  Team.new(name: "Flyers", city: "San Francisco", captain_id: 4).save!(validate: false)
  Team.new(name: "Sharks", city: "Palo Alto", captain_id: 5).save!(validate: false)
  Team.new(name: "Wizards", city: "Mountain View", captain_id: 6).save!(validate: false)

  giants = Team.find_by(name: "Giants")
  flyers = Team.find_by(name: "Flyers")
  sharks = Team.find_by(name: "Sharks")
  wizards = Team.find_by(name: "Wizards")

  #fans
  Fan.new(name: "Jack", favorite_team_id: giants.id).save!(validate: false)
  Fan.new(name: "Jill", favorite_team_id: giants.id).save!(validate: false)
  Fan.new(name: "Joe", favorite_team_id: flyers.id).save!(validate: false)
  Fan.new(name: "Jane", favorite_team_id: sharks.id).save!(validate: false)

  jack = Fan.find_by(name: "Jack")
  jill = Fan.find_by(name: "Jill")
  joe = Fan.find_by(name: "Joe")
  jane = Fan.find_by(name: "Jane")

  #stadiums
  Stadium.new(name: "Frisbee Field", team_id: giants.id).save!(validate: false)
  Stadium.new(name: "Discus Dome", team_id: flyers.id).save!(validate: false)
  Stadium.new(name: "Shark Tank", team_id: sharks.id).save!(validate: false)
  Stadium.new(name: "Magic Park", team_id: wizards.id).save!(validate: false)

  giants_stadium = Stadium.find_by(team_id: giants.id)
  flyers_stadium = Stadium.find_by(team_id: flyers.id)
  sharks_stadium = Stadium.find_by(team_id: sharks.id)
  wizards_stadium = Stadium.find_by(team_id: wizards.id)

  #players
  Player.new(name: "Giant George", team_id: giants.id).save!(validate: false)
  Player.new(name: "Big Bill", team_id: giants.id).save!(validate: false)
  Player.new(name: "Captain Carla", team_id: giants.id).save!(validate: false)
  Player.new(name: "Flying Felicia", team_id: flyers.id).save!(validate: false)
  Player.new(name: "Shane Sharker", team_id: sharks.id).save!(validate: false)
  Player.new(name: "Magic Mindy", team_id: wizards.id).save!(validate: false)

  giant_george = Player.find_by(name: "Giant George")
  big_bill = Player.find_by(name: "Big Bill")
  captain_carla = Player.find_by(name: "Captain Carla")
  flying_felicia = Player.find_by(name: "Flying Felicia")
  shane_sharker = Player.find_by(name: "Shane Sharker")
  magic_mindy = Player.find_by(name: "Magic Mindy")


  #jerseys
  Jersey.create!(color: "Green", player_id: giant_george.id)
  Jersey.create!(color: "Brown", player_id: giant_george.id)
  Jersey.create!(color: "Green", player_id: big_bill.id)
  Jersey.create!(color: "Green", player_id: captain_carla.id)
  Jersey.create!(color: "Yellow", player_id: flying_felicia.id)
  Jersey.create!(color: "Blue", player_id: shane_sharker.id)
  Jersey.create!(color: "Gold", player_id: magic_mindy.id)

  #rivalries
  ScheduledGame.create!(home_team_id: giants.id, away_team_id: sharks.id)
  ScheduledGame.create!(home_team_id: flyers.id, away_team_id: sharks.id)
  ScheduledGame.create!(home_team_id: flyers.id, away_team_id: wizards.id)
  ScheduledGame.create!(home_team_id: wizards.id, away_team_id: giants.id)
  ScheduledGame.create!(home_team_id: wizards.id, away_team_id: flyers.id)

  #follows
  Follow.create!(fan_id: jack.id, player_id: giant_george.id)
  Follow.create!(fan_id: joe.id, player_id: big_bill.id)
  Follow.create!(fan_id: jane.id, player_id: big_bill.id)
  Follow.create!(fan_id: jack.id, player_id: captain_carla.id)
  Follow.create!(fan_id: jill.id, player_id: captain_carla.id)

  Seat.create!(stadium_id: flyers_stadium.id, row: 1, chair_number: 1, owner_id: joe.id)
  Seat.create!(stadium_id: flyers_stadium.id, row: 1, chair_number: 1, owner_id: joe.id)

  puts 'Finished seeding'
end
