## First run commands
  bundle install 
  bundle exec rails db:create 
    Creates database for 'authenticastion_development' and 'authentication_test'
  rails g migration CreateUsers

## Second 
  Go to db --> migrate to check if migration exists 
  Build migration 
    Set it up with double levels of validations 
      t.string for
        username
        password_digest
        session_token
      t.timestamps 
    Add indexes
      add_index for
        username
        session_token

## Third run the command
  bundle exec rails db:migrate
    For the assesment run 
      bundle exec rails db:migrate db:test:load

## Forth build user model 
  user.rb
  Keep the ReadMe open
  
  Look at the files to the left in the models folder
    Make sure user inherits from ApplicationRecord
      User < ApplicationRecord
    
    Take care of validations
      The password column is not included because we do not want to save passwords in our database
        We just want to be able to understand when a user inputs a password, what password we should be expecting there, but we do not want to save that information anywhere 

        Instead what we are going to do is create some methods later on that allow us to check, if the password they put in is the same as the password_digest that we will save in our database 

        But, when they are submitting these passwords, we want to make sure we put some restrictions on them 
          minimum length of 6 
          it can be nil  
            By putting allow_nil it means that there is no column password in our database. This means that if we were to type user.password, then that is going to evaluate to nil. So a user can not just skip puting in a password and put something into our database 
 
            We want it to evaluate to nil because we do not want to save that password anywhere in our database. So, this says that when a user is trying to look up their password with user.password, allow nill, allow that to say nil and not error out and not be confused that you have an attribute that does not have an actual value outside of nil
    
    Make an attr_reader for password
      Because we made that validation we want to make sure we have access to passord later on
          
    Make your methods
      self.find_by_credentials(username, password)
        We want the ability to be able to look up a user based on their username and password 

        We start with the first one
          User = User.find_by(username: username)
            We are taking the name that they input and we are looking in our table to try and find this username. It is a good idea to put that database level validation in that index, so we can find the user faster

        Build the second one
          user && user.is_password?(password) ? user : nil 
            Now, we are going to say if we indeed have a user and a user was actually returned to us and that same user has entered the correct password, then we want to go ahead and return that user otherwise we want to return nil

      is_password?(password)  
        This is going to actually check the password and it has to be checked in a very specific way because we do not just save it in the database

        We want to start with the first one
          BCrypt::Password.new(self.passord_digest)
            Look in the readme for BCrypt::Password.new(digest) which takes in a digest and builds a password object for the digest. So we use this to build a password object which we can then call is_password?(password) on. This is a BCrypt method that is going to check, if a password matches a digest. So, we want to pass in that password again. It looks weird. But, inside is_password?(password) we will be calling is_password?(password)
      
      password_digest method ( password=(password) )
        What we are doing is overwriting the Rails password equals method. All of the columns have their own equals method, so that when Rails gets some input, it can go ahead an input these into the corresponding columns for that instance it is trying to create, but we want to take over that. This is in order to greate a password_digest    

        We start with the first one
          @password = password 
            This allows us to enable using our attr_reader and make these validations on this password 

        Then we do the second one
          self.password_digest = BCrypt::Password.create(password)
            Remember to look at the BCrypt Hints in the readme to create our password_digest

      reset_session_token! 
        This is going to let us know, if a user is logged in using their session token which we create using a radomly generated string. That we can save in our database which allows us to sync that user that has that session_token up with the browser session_token when their session is active or de-sync them when they do not have an active session
          
        We start with the first one
          self.session_token = SecureRandom.urlsafe_base64(16) 
            The default for base64 is 16. So it will work whether you write it or not. This generates a random hash and assigns it to the instance of the user currently working in this moment in time, to their session_token
        
        We now do the second one
          self.save!
            This ensures that what we assigned gets saved

        Now we do the third one
          self.session_token 
            We want to make sure we return the session token, so that later on if we want to set to to something, we can set it to for example the browser's session_session_token 

      ensure_session_token 
        Anytime we create a user, we want that user to definitely have a session_token. We always want to make sure our database is nice and stocked with a session_token 

        We start with the first one
          self.session_token ||= SecureRandom.urlsafe_base64
            They might already have a session_token, if not we will create one for them

        We want to make sure we also call that ensure_session_token method
          So, we put at the top of our methods a call back built into Rails that we can leverage
            after_initialize :ensure_session_token
              This is to make sure anytime a user is going to this user model, anytime a request response cycle, that a user is instantiated, that we can ensure that they have a session_token 

## Fifth run rspec to check work 
  Run each one at a time by looking at the readme and copy and pasting the rspec commands 
    Ask: What do we expect to be failing at this point?
      ANSWER: associations, and that is exactly what we have. All these rspecs are related to pretty much our auth pattern. We do not need to look at the specs too much. Our auth pattern is an auth pattern that we adhere to at App Academy. It is useful for not just Rails, but also your fullstack projects. So, do not worry about running your rspec until you have coded out your user auth pattern for your user model  

## Sixth build assiciations
  has_many :links
  has_many :comments
    Then comment them out because you have not created the files yet

  Run the following commands to create your migrations 
    rails g migration CreateLinks
    rails g migration CreateComments
      Read the readme to find what happens in our Link model
        Set it up with double validation
          t.string for
            title
            url 
          t.integer for
            foreign_key ( :user_id ) 
              We know this because each link is going to belong to a user and we definitely want to make sure this is null: false
          t.timestamp

        Add index's 
          As always it is the table followed by the column

      Read the readme to find what happens in our Comment model 
        Set it up with double validation
          t.text for
            body 
          t.integer for
            foreign_key ( :user_id )
            foreign_key ( :link_id )
              We know this because each comment belongs to a user and a link

          add_index's
            We have those foreign keys, which means they will need an index
              user_id
              link_id
      
  Now run migrations
    bundle exec rails db:migrate
      For the assesment run 
        bundle exec rails db:migrate db:test:load  
          This creates those two more tables in our database 

  Ceate two more files
    link.rb
    comment.rb
      Make sure they both inherit from ApplicationRecord
        Link < ApplicationRecord
        Comment < ApplicationRecord            

      Start with Link
        Write out validations
          title, url, presence: true
            We do not need to validate for the user_id because in Rails 5 we actually do that with our association. It is important to note: if you do not write an association with that foreign_key, then you do need to valiate user_id. However, if you are not using associations why would you have the foreign_key
        
        Write out associations
          Make sure your read the readme 
            We know that a link belongs to a user an we also know, that a link will have a corresponding comment or potentially many comments since each comment will belong to a user and a link
              belongs_to :user
              has_many :comments, foreign_key: :link_id, class_name: :Comment  

      Move on to comment
        Take care of validations
          body, presence: true 

        Then write out associations 
          Make sure that you read the readme 
            This belongs to a user and it also belongs to a Link
              belongs_to :user
              belongs_to :link

  Now go back to your user.rb file and uncomment out your associations
    run your rspec for the user, link, and comment 

    NOTE: to find a file you are looking or hit cmd + t and type in the file, then hit enter 

## Seventh build ApplicationController
  We are going to use this file to create some helper methods that are going to be maybe responsible for logging in, dealing with the sesson token and the correct access is given to the correct folks
  
  login(user)
    How can we tell a user is logged in? How do we define that relationship between the user that might be logged in and a website? 
      ANSWER: 