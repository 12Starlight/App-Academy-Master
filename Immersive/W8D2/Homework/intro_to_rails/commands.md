rails new intro_to_rails -G --database=postgresql

add gems to Gemfile
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'

bundle install

rails db:create

change config/database.yml
  adapter: postgresql
  pool: 5
  timeout: 5000

create your new Postgres database
  bundle exec rails db:create
  bundle exec rails db:migrate
  bundle exec rails db:seed

rails g migration createPeople name:text some_id:integer etc 
rails g migration createHouse some_id:integer another_id:integer

then go into app --> model.db
  person.rb
  house.rb 

then create associations

rails c 
[1] pry(main)> house = House.new(address: '308 Negra Arroyo Lane') 
=> #<House:0x00007ff56c7aad28 id: nil, address: "308 Negra Arroyo Lane", created_at: nil, updated_at: nil>

[2] pry(main)> person = Person.new(name: 'Walter White', house_id: house.id)
=> #<Person:0x00007ff56caced88 id: nil, name: "Walter White", house_id: nil, created_at: nil, updated_at: nil>

[3] pry(main)> house.save!
   (0.2ms)  BEGIN
  House Create (0.9ms)  INSERT INTO "houses" ("address", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["address", "308 Negra Arroyo Lane"], ["created_at", "2019-08-20 10:55:41.478024"], ["updated_at", "2019-08-20 10:55:41.478024"]]
   (0.4ms)  COMMIT
=> true

[4] pry(main)> person.save!
   (0.2ms)  BEGIN
   (0.2ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: House can't be blank, House must exist
from /Users/commandcenter/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
