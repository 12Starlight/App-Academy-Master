install gems
  gem 'annotate'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'byebug'

bundle install

rails new polls_app -G --database=postgresql

bundle exec rails db:create 

rails generate migration createUser username:string 
rails generate migration createPoll title:string author_id:integer
rails generate migration createQuestion 
rails generate migration createAnswerChoice
rails generate migration createQuestion

bundle exec rails db:migrate

create models 