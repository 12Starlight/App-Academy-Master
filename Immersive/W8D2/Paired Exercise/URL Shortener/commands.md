rails new URLShortner -G --database=postgresql

added gems to Gemfile
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'byebug'
  gem 'pry-rails'

bundle install

bundle exec db:create

bundle exec rails g migration createUsers
  build columns
  manipulating or changing tables
    add_column :users, :email, :string, null: false
    add_index :users, :email, unique: true
    add_timestamps :users  
    drop_table(table_name, options = {}) public
    create_table

build validations for user.rb 
  validates :email, uniqueness: true, presence: true


test validations by creating user without email and one with email, then try to save! it 

[1] pry(main)> user = User.new
=> #<User:0x00007fb3f3d82ad0 id: nil, email: nil, created_at: nil, updated_at: nil>

[2] pry(main)> user.save!
   (0.2ms)  BEGIN
  User Create (6.2ms)  INSERT INTO "users" ("created_at", "updated_at") VALUES ($1, $2) RETURNING "id"  [["created_at", "2019-08-20 21:43:58.296341"], ["updated_at", "2019-08-20 21:43:58.296341"]]
   (0.2ms)  ROLLBACK
ActiveRecord::NotNullViolation: PG::NotNullViolation: ERROR:  null value in column "email" violates not-null constraint
DETAIL:  Failing row contains (1, null, 2019-08-20 21:43:58.296341, 2019-08-20 21:43:58.296341).
: INSERT INTO "users" ("created_at", "updated_at") VALUES ($1, $2) RETURNING "id"
from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/connection_adapters/postgresql_adapter.rb:611:in `async_exec_params'
Caused by PG::NotNullViolation: ERROR:  null value in column "email" violates not-null constraint
DETAIL:  Failing row contains (1, null, 2019-08-20 21:43:58.296341, 2019-08-20 21:43:58.296341).

from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/connection_adapters/postgresql_adapter.rb:611:in `async_exec_params'
[3] pry(main)> user2 = User.new("asdfasfd@gmail.com")
ArgumentError: When assigning attributes, you must pass a hash as an argument.
from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activemodel-5.2.3/lib/active_model/attribute_assignment.rb:30:in `assign_attributes'

[4] pry(main)> user2 = User.new(email: "asdfasfd@gmail.com")
=> #<User:0x00007fb3f5d6c8a0 id: nil, email: "asdfasfd@gmail.com", created_at: nil, updated_at: nil>

[5] pry(main)> user2.save!
   (0.2ms)  BEGIN
  User Create (1.5ms)  INSERT INTO "users" ("email", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["email", "asdfasfd@gmail.com"], ["created_at", "2019-08-20 21:45:20.581751"], ["updated_at", "2019-08-20 21:45:20.581751"]]
   (0.6ms)  COMMIT
=> true

[6] pry(main)> user3 = User.new(email: "asdfasfd@gmail.com")
=> #<User:0x00007fb3f572d458 id: nil, email: "asdfasfd@gmail.com", created_at: nil, updated_at: nil>

[7] pry(main)> user3.save!
   (5.6ms)  BEGIN
  User Create (18.0ms)  INSERT INTO "users" ("email", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["email", "asdfasfd@gmail.com"], ["created_at", "2019-08-20 22:04:30.150317"], ["updated_at", "2019-08-20 22:04:30.150317"]]
   (0.2ms)  ROLLBACK
ActiveRecord::RecordNotUnique: PG::UniqueViolation: ERROR:  duplicate key value violates unique constraint "index_users_on_email"
DETAIL:  Key (email)=(asdfasfd@gmail.com) already exists.
: INSERT INTO "users" ("email", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"
from /Users/rwoods12/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/connection_adapters/postgresql_adapter.rb:611:in `async_exec_params'
Caused by PG::UniqueViolation: ERROR:  duplicate key value violates unique constraint "index_users_on_email"
DETAIL:  Key (email)=(asdfasfd@gmail.com) already exists.

bundle exec rails g migrate createShortened_url
  build columns

build model shortned_url.rb 
  validates :user_id, uniqueness: true, presence: true
  validates :long_url, uniqueness: true, presence: true
  validates :short_url, presence: true 

build associations 
  shortned_url.rb belongs_to :user
  user.rb has_many :shortned_urls

build shortned_url.rb methods
    def self.random_code
      loop do 
          short_url = SecureRandom::urlsafe_base64 
          return short_url unless ShortenedUrl.exists?(short_url: short_url)
      end
    end   

https://guides.rubyonrails.org/association_basics.html 
https://guides.rubyonrails.org/association_basics.html 

