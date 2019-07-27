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
      ANSWER: We can actally use the session's session_token which is really just one of the cookies that we have access to that is going to have some of that information and the browser is going to have the session hash. So, we can go ahead and key into that

    Start with the first one
      session[:session_token]
        What we want to do here with this user, we want to go ahead and say we have this user and we can assume this user exists in our database because we will not call this method unless we have not shared that before. So, we will assume that this user is a true user object which means it has access to all those methods that we wrote on that user object in our user model

        bescause we wrote our reset_session_token! in a way that returns our session_token outside of the method as the last thing it returns, we know that the result of this will be the same session token that we can find, if we were to look in the database at this user. 

        So, by setting up this relationship, we are saying this user and their new session token is matching the session hash and the session's hash's session token. Now the relationship is good to go.
      
    Make the second one
      @current_user = user 
        Makes things easier for the next method 

  current_user
    We are building this method, so we have access later on when ever we need to call this method to the current_user and we are going to do that by saying either defer to the current_user instance variable, if it indeed already exists. Otherwise, find a user in our database using a possession token becauses that is how we know they will be logged in.

    Start with the first one
      @current_user ||= User.find_by_session_token(session[:session_token])
        This is a Rails built in method that we can call which will allow us to either defer to the current_user instance variable or go ahead and find a user based off of their session token. This will be our current user

  require_login
    We want to make sure that unless the user is logged in, they can not access our site
  
    Start with the first one
      redirect_to new_session_url unless logged_in?
        We want to redirect them to the login page unless they are logged in. Which is another way of saying that we are sending them to the sign in page

  logged_in? 
    We want a Boolean value because we are using a question mark. 
      current_user
        How can we know a user is logged in?
          ANSWER: We can look at the curent user, if their is a current_user, then that user is probably logged in. If there is no current_user, then nobody is logged in

          But, this is just an instance variable right here, not a Boolean value and we are relying on that Boolean value inside of the conditional for the preivous method ( require_login )

        How can we turn this instance variable into a Boolean?
          ANSWER: We are going to go ahead and use a !! and what that is going to do is say, if indeed an instance variable, then a user is returned back from this method which will be a truthy value. The first ! is going to turn this into a false value. The second ! turns the whole expression into a true Boolean value, if indeed there is a current user
            !! current_user 

  logout 
    The relationship between a user and the browser is defined by their session_token. If we sever that relationship, there will be no more current_user and nobody will be logged in. 
      
    Start with the first one  
      current_user.reset_session_token!
        This resets the session token for the current_user. It will go into our table, our database and reset the value of that column. So, now on one side there is no relationship between that current_user and the browser session hash

    Move onto the second one
      session[:session_token] = nil
        For a double layer of security, we are going to go ahead and set session:[:session_token] to nil. So, now neither of them are pointing at each other or anything closely matching

  This file only will pass one spec, which is checking if we are protected against CSRF attacks. So, we do not need to run rspec at this point

## Eigth build controllers
  rails g controller Users   
    Creates that users_controller file and a directory in our views folder for the templets, where our templets will go. 
  
  rails g controller Sessions
    Our user auth pattern relys not only on a user, but also a session controller. We make it plural by convention and also, we want to make sure it can handle all of the sessions that are going to be created and not just the sessions for that one user which in routes is the case. The user is only ever able to influence their individual session

  Before moving on, go to routes
    new, create 
      We could do resources :users and get all the resourceful routes that we need,however we do not need them all. So, run the spec for users_controller to find out exactly what we need. 

      We need a new and a create because we want to be able to create a new user and we want to be able to have a page to create a new user in the UsersController. 

    Next make sure these two actions have corresponding views. 
      So, in views --> users, create a new file and for now call it new.html.erb. Then at the top of the file just put a string "new"

      Next, go to views --> sessions, create a new file and for now call it new.html.erb. Then at the top of the file just put a string "new"
        If we want to make sure that users have the full functionality that they might need in order to create a session, we need a new 

        What else do we need in sessions? Do we need a whole page in order to have them be able to sign out? What about a whole page for editing their session? 
          ANSWER: They should not be editing their session and probably do not need a whole page to log out, just a button. So new is all we need 

  Now move onto routes and use that same logic above
    resources :users, only: [:create, :new]
      We know that we only need that create and that new, because that is what the specs told us. 
      
    resource :sesssion, only: [:create, :new, :destroy]  
      Then for resource, right do not forget, resource :session, singular. We only want what?
        ANSWER: We only want that create, :new, and :destroy
          That allows us to go to the login page, to sign in or log out
    
  Move routes.rb over to the side of the screen with the readme because you are going to want to think about your routes as you write your controllers. Then look at the specs to see what the methods do in the controllers

  UsersController
    new 
      @user = user.new
        Render new users templet. So that means that there is going to be an empty user there, ready for us to add stuff to, if we want to on our templet there on the front end.  

    create
      Build first part
        We know it is going to happen inside this UserController create action. We know that we are going to get some information from the front end, we want to hopefully save it into our database as a nice sparkling new user.

        We want to make sure that, if a user comes in we can go ahead and leverage the method below to pass through all the stuff we do want in this case, username and password and create a new user from that information
          @user = User.new(user_params)
    
      Build second part
        if @user.save 
          login(@user)
          # redirect_to links_url
        else 
          flash.now[:errors] = @users.errors.full_messages
        end
          We want to do something with this user, let us say we get the user. We still have to save it. Then ensure that they log in, so we want to point them in the right direction. Look at the rspec to see, where you want to point them which says:
            When you create a user with valid params (so it does not need saving), we want to redirect that user to the links index on success and we want to log in the user. It does not give a lot of information where we are going to send it, but the hint is: links index. 
            
            So, want to assume that rails is going to do exectly what we want it to do and that rails is going to have our back on this. Convention will allow us to uses this links_url to referece a particular index on our rails LinksController. Comment it out for now because there is no links_url yet

            When we save somthing, there has to be an account of when it is not saved. So, if there are errors, we want to tell the user all that. Look at the rspec to see where we want the users to go
              It does not even care
                render :new 
                  This allows us to render the page and send all the errors with it. Then run the rspec and ignore the commented out line because we have not built that links controller yet

    user_params     
      params.require(:user).permit(:usesrname, :password)
        Allows us to ensure that the only methods that we are getting, from our front end is exactly what we want. So, in this case, what do we need to make a user?
          ANSWER: We probably need a :username, and :password. The rest of this stuff, the password digest, the session token, all that stuff is going to get generated for us in our model where we made all that functionality. When someone wants to create a new user, that is what we are looking for. 

  SessionsController