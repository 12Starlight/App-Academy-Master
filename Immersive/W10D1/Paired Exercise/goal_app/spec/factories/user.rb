FactoryBot.define do 
  factory :user do 
    username { Faker::Games::Zelda.character }
    password { "specguide1" }
    # association :location, factory: :location
  end


end