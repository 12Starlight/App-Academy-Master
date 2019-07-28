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
      Creates that users_controller file and a directory in our views folder for the template, where our template will go. 
    
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
      Look at the specs, then look at the routes for session. We have :create, :new, and :destroy
        create
          Build first part
            user = User.find_by_credentials(params[:user][:username], params[:user][:password])
              We know that the session controller is not tied to any one model and that is because we are going to use it to sort of interact with the login capability and logout capability of our users. 
                What does it mean to create a session?
                  ANSWER: That means that we have a user and we are trying to log them in or trying to establish this connection between their session tokens, the browser session token, the user session token. How might we go about doing that?
                    ANSWER: Look at the specs which says: When they sign in with the correct credentials, that we can actually sign them in and we want to make sure that, if they sign in with the wrong credentials, we return them to sign in. 

                    So, this is key here. It is that new session URL we were talking about earlier. But, the word credentials hopefully rings a bell. We can say that we want to find the user, not by the session_token,but instead by find_by_credentials which we wrote a long time ago in the user model. 
                    
                    So, it is going to take in that username, and that params hash is going to have its whole information in a bunch of subkeys. So, it is going to have the params hash and inside of that params hash, we will have this user object which is going to have its own set of keys; in this case a username and a password

          Build second part
            if user
              login(user)
              redirect_to links_url
            else  
              flash.now[:errors] = "NO GO on the username and password"
              render :new 
            end  
              We want to make sure we even have a user. So, if there is a user, then log in that user using one of the methods we just made. If there is not a user, then we want to show that user that they messed up and send them some custom errors because unlike some of the other controllers we will do, we did not create anything here. 
              
              There was no errors that were sent back to us from our validations. This is goint to be completely us, we get to come up with the error. Then look at the rspec. It says it wants us to return the user to sign in ( render :new ), if there are invalid credentials and redirect_to links index on success.  

        new
          We do not need to do anything here, we do not have a model associated with this controller, where we need to render an empty object 

        destroy
          logout
          redirect_to new_session_url
            Logs out the current user   
              logout does not take anything, double check it by looking at ApplicationController where you built it, if you want. Then redirect to new session URL. So, if you get logged out, you go back to the login page. Remember, ignore the links_index 

    LinksController
      rails g controller Links
        Build routes in routes.rb by looking at the links rspec which say: We need :new, :create, :index, :show, :edit, and :update
          resources :links 
            Builds them all at once. Then run rails routes and look at the different routes 

        Looking at rails routes
          Notice: We got some user routes, session routes and a whole bunch of link routes. There is the links URL that pretty just gets to all those links later on when we want to

      Go to LinksController
        Write out the skeleton for index, show, new, create, update, edit, destroy and link_params because we are going to be passing in some information, we want to make sure that information is information we allow. Write out the last method entirely  

      At the top
        before_action :require_login
          Look at the rspec for links and notice that a bunch of the failing specs correspond to when we are logged out. Rails has these sweet callbacks that we can go ahead and make use of. What this is saying is before you try to handle any of these actions, you have to require this. So, if the user is not logged in, then they will be sent back to the login page. Then run rspec again and you will see a way better number of passing specs

      rspec
        We still have a new, create, index, login, etc

      index
        @links = Link.all
          Look at rails routes. We can loosely think of that as whenever we wanna go ahead and render a bunch of stuff.

      show
        @link = Link.find(params[:id])
          We wanna go ahead and render, just like one. We can expect that anytime we are hitting these actions, we are going to have some kind of params. Sometimes the params hash will be empty, but because of how Rails is going to go ahead and create this show route for us, we know we will have an ID there in the wild card pretty much everytime. 

          So, we can leverage that ID to find the specific link that should be on that show page, and then just return that link

      new
        @link = Link.new
          This is us creating a blank object and we can later on, use that object in our edit and our create. When we want to edit some stuff, we will go ahead and add some more things to this empty link object and hopefull be able to save it down in our create method

      create
        @link = Link.new(link_params)
          We are trying to create a link. We need to create an empty object. But, this time we are going to fill it with stuff from the private method below. So, we create a new link with those params. 

        @link.user_id = current_user.id
          But, a new link is perhaps a bit more than just a title and URL, right?
            ANSWER: As you might remember, a link is going to have a user_id. How could we find the specific user_id that would correspond to the link we are trying to create?
              ANSWER: We have that handy method that we love so much, in our application controller, that current_user method. Where we are going to be able to acess the specific object, the user object, and pull out their ID and then set it to our link as their forum key because the current_user is the only one who's actually creating a link at the time of this request being fired, so we know indeed this is the correct user and this will then be the correct user_id

              So, if we are indeed able to save that link and everything else has been input correctly, we want to do something specific, we want to redirect to that link. So, we can go ahead and use Rails's redirect_to and rails will pass it this link_url(@link) and pass it this object so that Rails can actually pull out the ID that has been saved and redirect directly to that show page

              However, if it does not work and does not save, we will go ahead and render those errors because our validations will have given those errors and we want to redirect_to links_url  
                if @link.save
                  redirect_to link_url(@link)
                else
                  flash.now[:errors] = @link.errors.full_message
                  render :new
                end

      update 
        @link = current_user.links.find(params[:id])
          We want to go ahead and find a particular set of links, we want to make sure that the only links that user can really interact with are their own. So, how might we specify that link is indeed theirs?
            ANSWER: We can use, your favorite method, current_user.links and that will give us through our assoications that we built way way long ago, that will give us access to the current_user's links.find

            Then we want to pass into it params[:id]. Now what we want to do is find that link based off the current_user to ensure that only the current_user is able to find their links, not be able to edit or update anybody else's and nobody can find their links because again, they will only be looking at their own links

        if @link.update_attributes(link_params)
          redirect_to link_url(@link)
        else 
          flash.now[:errors] = @link.errors.full_message
          redirect_to :edit
        end
          Now we want to try and update this link. I want to pass in link_params. If this indeed works we want to do what?
            ANSWER: Look at the specs to see what they want you to do, which say: when logged in they do not care where we send them, they just do want somebody to update somebody else's links. So, we will redirect_to link_url(@link) and pass in link

            So, if you are able to update it, we will show you your handywork and if not,x we will flash them those errors and we also want to go ahead and say redirect_to :edit
              flash.now[:errors] = @link.errors.full_message
              redirect_to :edit

          Now run rspec and go back to SessionController to uncomment 

      edit
        @link = Link.find(params[:id])
          Look at rspec 

      destroy

      private, link_params
        Always the same basic structure

      Creates template for links
        Go to views --> links and create new.html.erb, edit.html.erb, show.html.erb and because we want to see a specific link, we probably need an index.html.erb

    CommentsController
      rails g controller Comments  
        Run rspec and notice that the comments route is actually nested underneith the links route /links/1/comments to/from. Now it says specifically POST, right, but we do not actually know. 
        
      Let's make those routes in routes.rb
        resources :links do 
          resources :comments, only: [:create, :destory]
            
          That means wer are going to go ahead and nest them, and based off of the specs, we only care about :create and :destroy

      Make your new.html.erb in views --> comments 
  
      Now move onto CommentsController
        Create skeleton for :create, :destroy, fully build comment_params and pass in what ever is necessary to create a new instance ( :body ). Then looking at the rspec, you will notice that inside those spec files that were not allowing functionality, if indeed somebody was not logged in. 
          before_action :require_login

        create
          Start first part
            @comment = Comment.new(comment_params)

          Now do second part
            @comment.user_id = current_user.id  
              When you are logged in, but you have invalid params, we need to flash some errors. What do we know that comment needs in order to get saved?
                ANSWER: Like before, needs a user_id 

          Here is the third part
            @comment.link_id = params[:link_id]
              Now what else do we know that this comment will need?
                ANSWER: How about a link_id. How might we get this link_id?
                  ANSWER: The key is in the routes.rb file. So, we have nested our comments create and destroy route, underneith this links. What does that mean for us?
                    ANSWER: That means that, when we want to navigate or make a request to this particular create action here, we are going to have access to the specific link that this comment sort of corresponds to, and we can see, what that looks like by looking at the rspec in POST#create /links/1/comments

                    So, this is a snapshot of what those params will look like. So, we have links and this link_id, and that's corresponding to the specific link that they are trying to look at the comments for. That means we can go ahead and say
                      params[:link_id]

                    To see where this specifically comes from we can run rails routes and see that in that nested route we have this wild card. Where we have link_comment that is destroying, link_comments that is post, and we see here this link_id is indeed nested, and that it is actually the key in our params hash that we are looking for. So, this corresponds specifically to the key in ouor params hash 

                    link_comments POST   /links/:link_id/comments(.:format)     comments#create
                    link_comment DELETE /links/:link_id/comments/:id(.:format) comments#destroy

                    So, we are assuming that ID can get feed and run in here, and then what?
                      ANSWER:
                        If indeed we have all that stuff, we wanna save
                          @comment.save
                        If not, we want to, you guessed it        
                          flash.now[:error] = @comment.errors.full_messages   

                    Now, run rspec to find out where we are supposed to redirect_to the link_url(@comment.link_id) page. How do we get the link_id? 
                      ANSWER: Well, we still got it. So that should give us link_id, because again, this links_url requires that link_id in order to know where exactly to navigate to. Make sure to read the rspec and read what it actually says  
                        redirect_to link_url(@comment.link_id)

        destroy
          DELETE destroy when logged out redirects to the login page. For some reason, it cannot find those routes, why can it not find those routes?
            ANSWER: We can look at the params. 
              It just says params: (id: comment.id), I do not see any mention of a link there. So, it looks like it actually does not want the destroy nested in the routes.rb file under links. 

              It wants destroy on it's own line, free 
                  resources :links do
                    resources :comments, only: [:create]
                  end 

                  resources :comments, only: [:destroy]

          So, what do we want to do here?
            ANSWER: We want to go ahead and find a comment, and again we know we are going to get this (params[:id]) from the specs here. We can see actually it says params: (id) will be the comment.id, hense the ID will be the comment.id
              params: { id: comment.id } 

          What do we want to do with that information? 
            ANSWER: It is in our destroy action, so let us destroy
              @comment.destroy

          Last thing, we want to redirect to where? Where does it say in the spec? It says: We want to redirect back to the link
            redirect_to link_url(@comment.link_id)    

## Ninth build views --> sessions --> new
    First write out the helper methods in ApplicationController at the top of the file
      helper_method :current_user, :logger_in?
        We want to make these methods available to us in our views on our front end. So, we want to be able to conditionally render and do some certain things. Now we will be able to call these methods in our views template. This will allow us to check is the person logged in and who is the current user at this particular time. Maybe we want some of this information, maybe we will want it in our views. We will see how this plays out later. Now run the rspec
          NOTICE:
            There is going to be a sign up and sign in page, but only a sign out button. That is a good sign we will probably need to make a templet for sign up and sign out. 

            We can think of sign up as when a user wants to create a new user. When someone wants to create a new user, create a new instance in our database for that user. That is going to be a user page. So, that is going to be a new user. 

            And we can think here, that is when we have this sign in, that is when someone wants to create a session. We want to create a link between an existing user and the browser and make that session happen. In order to do that, we will probably be using our SessionController which is our new session templet there.   
        
    Next inside of the template for links/name put "links edit", and the name like that for all the template just so we can reference them later on. Then open up the "session new" and "user new" that we want to start with. 

    In the readme, notice that it says we need to make sure we spell everything with the correct capitalization because it uses 'Capybara' which is strict about that. This also, includes naming conventions. 

    When you open up spec --> features --> auth_spec.rb we can already see that it is asking us: 
          expect(page).to have_content 'Sign Up'

          expect(page).to have_content 'Username'
          expect(page).to have_content 'Password'

    That is a good indicator to us, that 'Capybara' is going to be looking for very specific strings, in the case, capital sign up, etc. That means that when we are over here and we are making our template. That we are going to make sure that our naming convention, matches exactly what 'Capybara' says. 

    Start with "session new". This is where we want to create a new session, we can think of that as when we are signing in.
      <h2>Sign In</h2>

    Now we are going to likely need some sort of form
      <form class="" action="index.html" method="post">

      </form>

    This form is going to be how we going to allow the user to pass in certain information and they are going to hopefully send that information down to our controller. It is going to evaluate that information and either log the user in or not log them in. 

      First do not worry about class="", the action="" is the important stuff where we are going to use ERB <%= %> and we want this to make a specific action
        Go back to the terminal and look at the rspec. Then run rails routes. This is going to be very useful for this part where we want to always use as a reference. Do not focus on remembering them, just use them as a reference

        So, if we want to create a new session, that means we are already going to be on this templet. That is the templet we are currently writing code in and that is what the user is going to see. Where hopefully there will be some sort of form there and they will be able input what ever credentials they have and then try and actually create a session.
          new_session GET  /session/new(.:format)  sessions#new

        So, the keyword create down here is the actual action that we want to send with this information that we are sending down. That means we will need this specific prefix here, this session prefix
            POST  /session(.:format)  sessions#create

            Prefix 
            --> session <-- DELETE  /session(.:format) sessions#destroy

        So, we will just write in here, the session_url
          action="<%= session_url %>"

        And that means that now, we will be able to send the correct information, in this form to the correct location. What we also need, anytime we are going to have a form is this authenticity token. Rails has a nice easy method that we can call form_authenticity_token
          <input type="hidden" name="authenticity_token" value="<%=  form_authenticity_token %>">

        This is going to allow us to make requests to our database from this templet and all the while, our rails back end is going to be protecting us from CSRF attacks. This is going to allow us to actually get past that and make the appropriate requests 

        Now that we have that form in there, we want to make a couple other input requests. It says we are looking for username and password. 'Capybara' is specific, so we will go ahead and use the lable and make it Username with the same capitalization conventions
          <label>
            Username 
            <input type="text" name="user[username]" value="">
          </label>

        Then we will put our input and we will say, type="text" and here is where we will use the conventions that we set up inside of our user params method. Here we are going to require a key of user inside of our user params, so that will ensure that there is a key of user sent down. Inside that key of user, that is pointing to another object or another Ruby hash that has a key of username inside of that. So, this will ensure that we have the appropriate nesting. So, that whatever information we input in the input text box, will get sent in the params under the appropriate nesting. 
          name="user[username]" 

        So, we can use this label convention to make another one real fast. This one we will call password. You need a password to log in. Then change username to password    
          <label>
            Password 
            <input type="text" name="user[password]" value="">
          </label>   

        One thing we definitely can not forget, any form we need to have a way to submit that form. So, we are going to make a button here for ourself. This button is going to fire off to <%= session_url %> as a specific action. The value is whatever text we want to be shown on that button. We will put sign in because we are on the sign in page
          <input type="submit" name="" value="Sign In">

## Tenth build views --> users --> new
    We want to do something very similar. Open up the templet on the other side of the screen to have as a nice refrence. We want to go ahead and call this sign up. We want our action to be something else. Run rails routes and see what it shows.

    When we are trying to sign up a user, we are creating a new user. This post right here, will allow us to create a new user. 
      users POST /users(.:format) users#create

    Again we will be making this templet right now. We want to fire this request to our database, users new is getting that templet for us and then we are posting the information using the above create action    
      new_user GET  /users/new(.:format)  users#new

    So, again prefix users, let us go ahead and add that in here, and do not forget we need ERB, <%= users_url %> and that's a post again method="post". We will use the same authenticity token. Then use the same lables and change the value="Sign Up"
      --> users <-- POST  /users(.:format)  users#create

    Now, look at the rspec, notice it does want us to have this sign out button. Then the user is redirected to the login form. Hymmm, where can we put this button where we might be able to access it?
      ANSWER: Let us go ahead quickly and look at our application html.erb and we can see here in the specs it is telling us to add username to:
        views --> layouts --> application.html.erb layout. 

    So, what exactly are we going to do here, what is application.html.erb doing for us?
      ANSWER: Well, it is going to work for us in a similar way to how our ApplicationController works. We are going to be able to add html in here that we want shared with the rest of the template depending on which templet gets rendered. This yeild block <%= yield %> right here is actually what is rendering these template 

      So, when we go to the edit or the new, it is going to get passed in through here. So, all that code we wrote inside of like one of these template, that is going to go ahead and get passed through here. Then all this other stuff is also going to get rendered every single time we are navigating to a specific template 

      That means that, if we in here wanted to add some logic, we can say if logged in, we want to go ahead and show current_user.username, using that method that we gave ourselves access to from our ApplicationController. That spec is specifically tring to get us to show the current user and that current user's username.
        <% if logged_in? %>
          <% current_user.username %>
        <% else %>

        <% end %>

      So, we can think to some of the other websites we might be familiar with. If someone is logged in, something that might be likely to have always available to them on the browser or whatever page they are on is a log out button. Similarly, if a user is not logged in, they should be able to sign up or have a log in button.   

      We can actually code this up to match some of the other apps that we are more familiar with. So, because it is asking specifically for a sign out button, that does mean we are going to need another form. Forms are something you want to practice until they become familiar. 
      
      This is action is what? If we want to sign out, what kind of action might we need? 
        ANSWER: So, that is interacting with our session. We are trying to sever that connection between our user and the browser. We can look right here at this delete in rails routes  
          session DELETE /session(.:format) sessions#destroy

      So, this destroy controller action is what we want and we can get to that using this specific session prefix. So we will go ahead and inside of ERB, say session_url. And if indeed, we make that, we are going to need this other input type="hidden" name="authenticity_token" and value="<%= form_authenticity_token %>"  

      Now we also need something else, because we are making a type of request that is not going to be a post. We need to specifiy, agian with another hidden input, that this is going to be something differnt. In this case we want it to be delete.  

      Last, but not least. We want to put an input type="submit" which is titled value="Sign Out" because it says in the rspec that is what it is supposed to be called
        
        <form action="<% session_url %>" method="post">
          <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
          <input type="hidden" name="_method" value="delete">

          <input type="submit" name="" value="Sign Out">
        </form>

      Now we want to code up this else, where we want to say if a user is not logged in, let us take them to the login page. Let us take them to a create new user page. So, let us make an anchor tag and inside of here, using ERB again, we want to go to a specific link when we want to sign in or, if we are trying to sign up.  
        <a href="<%=%>">Sign In</a>
        <a href="<%=%>">Sign Up</a>

      So, where might we need to go to if we are trying to sign in?
        ANSWER: Checking rails routes, signing in is going to create a new session and signing up is trying to create a new user. So, these two templates, this new session and new user, those are actually where we want to go 
          --> new_user <-- GET  /users/new(.:format)  users#new
          --> new_session <-- GET /session/new(.:format)  sessions#new

        <a href="<%= new_session_url %>">Sign In</a>
        <a href="<%= new_user_url %>">Sign Up</a>

      So, now you have new_session_url and new_user_url, correctly mapped to what 'Capybara' will be looking for. Go ahead and run the rspec 

## Eleventh build views --> links --> new     
    Look at the specs, we need a new link page that takes a title and URL. So, we are going to need a form again. Then redirects to the link show page upon success. That gets handled by our controllers. We are going to render some errors and display the new link form, if we failed. The form needs to be prefilled. We also see, that we have some index information, some show and edit as well. 

    We can see right away there is going to be a form for the edit, and probably a form for the link, for creating a link, that is probably our new template. So, now we need to go ahead and make a partial. This will make our code DRY to save us some work. Go to views --> links --> new and then also edit for links. 

    What we want to do here is create a form unltimately, and we want to create a template. So, we want to create a partial that we can leverage to keep our code a bit drier, if we are going to be reusing the same stuff. Create a new template in views --> links --> _form.html.erb 

    We want to wait on the _form.html.erb for now, and start at links new. Then let us make an h2 and say new link
      <h2>New Link</h2>

    Then make a form and we want to dynamically pass in what this action will be which we will worry about later. Next we need an input with type="hidden" and name="authenticity_token" then value="<%= form_authenticity_token %>". Make sure you have the ERB tags for all this stuff. Also, make sure there are no spaces either because it will lead to annoying errors. 
    
    After we need our label, just like we did for our users. A link is going to have a title and a URL. Look at the spec file and notice that 'Capybara' has URL all capitalized. In our database it will be a lowercase url. However, when me make this label later on, we want to make sure we use capital URL. 

    So, in our form for Title, we want type="text", name="link[title]" and value="link.title"

    Next, in our form for URL (notice it is capital), we want type="text", name="link[url]" and value="link.url". Notice that the url in the code are still lowercase.  
      
      <form action="<%= action %>" method="post">
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">

        <label>
          Title 
          <input type="text" name="link[title]" value="<%= link.title %>">
        </label>

        <label>
          URL
          <input type="text" name="link[url]" value="<%= link.url %>">
        </label>

        <input type="text" name="" value="<%= button_text %>">
      </form>

    For the link.url you might be wondering where is this comming from, well we are going to go ahead and write some code logic above our partial once we get there. Then we are going to incorporate some extra variables in that logic. This link however, will be comming ultimately from the original template that gets rendered. 

    So, in this case, if we are navagating to the new link form, this link will come later on as we will see, from the at link that is going to be available here in this link template. This will be set, once we do that render function. But, again just recognize that link.title and link.url is going to be a variable and as such, we want to make sure that we use this ERB tag here around link.title and link.url 

    Let us not forget anytime we need a forom we are going to need a submit button which we will call "<%= button_text %>". We are calling it button_text and wrapping it inside of an ERB tag, because we want it to change depending on what type of template this form is being rendered into.  

    That means that, just because we go to the new link page one time, we do not want this text to always be "create new link". We want it at some point to be able to say "update link", "click link", "click button" etc. So, sometimes this will say update link, sometimes it will say new link or something else. So, button_text has to change dynamically. 

    One last thing we are going to need to do. Maybe if we have an edit, we do not want that to be a post. So edit is going to go to a specific update action that is going to require an update. As opposed to a post, instead we are going to need a patch. 

    As a result we need to build some logic above our form at the top of the page. If type is equal == to :edit, we want to do something specific. We want to add a hidden input with name="_method" and a value="patch" This makes sure we add the correct action rather than making a post by default, if the form is comming from our edit template
      
      <% if type == :edit %>
        <input type="hidden" name="_method" value="patch">
      <% end %>

    Now take everything we did in the links new file and transfer it over to the form file. Now that we are in here, let us go ahead and do a little bit of that logic that we were talking about earlier. 

    So, if type equals == :new, then we want to do something. Look in rails routes. So, if this is new we want action = links_url and button_text to say "Create New Link". 
      
      Looking at our routes: if we want to go to the new form, we want that action not to be new link. Instead, we want that post action. We want to actually create that link. So, we are going to need this to be our action in that case.
          --> links <-- GET /links(.:format) links#index

      So here we will say, if it is indeed new, we will say this will be links URL
    

    If we are trying to edit something, then we want action = link_url and button_text to say "Update Link"   

      Looking at our routes: 
        edit_link GET /links/:id/edit(.:format) links#edit

        We do not want this one, this is the actual template, that is the actual page. We are getting that template to fill out the form. Instead we want to make this patch

      Looking at our routes:  
        --> PATCH <-- /links/:id(.:format) links#update

        Just the update, so here we are just going to defer it to link. However, let us take note, that it does need this ID links/:id which we can pass it by just saying link_url(link). This link again, like we mentioned before with link.title and link.url will be coming from the actual file that we are rendering this template from.  

    So, now let us code that out. First, go to links new and delete everything. We do not need that anymore, all we need is h2 New Link, and inside the ERB render 'form', then we will say type: :new that will correspond to new, because we are in our new link template. We also, want to go ahead and specify a link. In this case it will correspond with the instance variable @link that we set up in our controller
      <% render 'form', type: :new, @link %>

    Next we want to do something very similar in links edit. Make an h2 Edit Link, so we know and we will add that render statement. Instead of new, this will just be edit 
      <% render 'form', type: :edit, @link %>

    Now let us look at the rspec. So, it talks about displaying and rendering some errors, alright let us code that. We know that our new form, and edit form might have some errors. We do not want to write that in two different places. We could write that in our partial. 

    However, it makes more sense to put it in our application.html.erb file because a user might have typed in the wrong password when loggin in and we want to make sure we can get that user the correct errors that they need. This will make it available in the rest of our templates. 

      Similarly to how we did this with the current_user.username we can make sure that we render the appropriate errors.

    So, let us think about, where do we even keep our errors? 
      ANSWER: We keep those in our flash hash. So, if we have errors in there, we want to render those errors. So, let us go ahead and say we have a UL and let us render these errors as LI's 

      So, we will go ahead and say, if indeed there are errors, we will hop inside of the UL <% flash[:errors] do |error| %> Inside of this loop we want to create an LI and inside of this LI, we want it to be the actual error li <%= error %> li

      What this is saying is if indeed there is even a key of errors, if that exists, we want to go ahead and iterate over it because we are expecting it to be an array. Which we want to render each error that is in that array. 

      This allow us to not have to write this code anywehere else and will render errors for the user. 
        
        <% if flash[:errors] %>
          <ul>
          <% flash[:errors].each do |error| %>
            <li><%= error %></li>
          <% end %>
          </ul>
        <% end %>

    Now run the rspec and then open up the links show and links index. So, it kinda looks like, it is just not seeing anything. So, let us go ahead and code up our show and index pages. 

      First make an h2 Links Index and it says in the spec folder that it has a 'New Link' link to a new link page. So let us make an a tag and we are going to now look at rails routes. 

      When we want to go to that new link page this will get us there
        --> new_link <-- GET /links/new(.:format) links#new

      So, inside of ERB we want to put in new_link_url and we want this to say New Link. 
      
        <a href="<%= new_link_url %>"New Link<a>   
      

      It wants us to see all of the links also, we have @links instance variable that is created for us inside of our links controller and we can probably assume that @links equals link.all. 

      We do not have to assume though, we can just look back at our LinksController, but more or less, this will give us all the links. So, if we iterate over this right, and say @links.each do |link|, what do we wanna do?
        ANSWER: For each link we have, we want to render some stuff. Looking at the spec file, notice 'links to each of the link's show page via link title'. So, inside of the loop, we want another a tag.

        We are going to go ahead and say, we want this to go to a specific links show page with href="link_url(link). So, to double check we look at rails route
          Look at rails route:
            link GET /links/:id(.:format) links#show

        Which as we see, that will get us a specific route for a specific link and that is what we have here, cool. Now it wants it to be 'links to each of the links show page via link titles'

        So, here what we will need to do is ><%= link.title %><. So, now that should give us the link title, and we will be able to click that link title to get to that link show page

        Now, we want to add the URL, let us go ahead and list that inside of our loop too. First we want to put it inside of an LI and say <li><%= link.url %></li> which should give us the URL for this particular link. Then wrap the previous a tag in an LI as well. Now because we have these LI's go ahead and wrap the entire each loop in a UL 
          <ul>
          <% @links.each do |link| %>
            <li><a href="<%= link_url(link)%>"></a><%= link.title %></li>
            <li><%= link.url %></li>
          <% end %>
          </ul>
        
      Now looking at the spec file, what else do we need?
        ANSWER: Go to our show page

    In our show page, we want to make another h2 and call it Link Show. What else do we want to show?
      ANSWER: In the spec file it says, 'shows the link's author'

    So, we have access to our @link again, from our controller. So we say in ERB @link.user, because that is the name of our association, and .user.username. Then it wants @link.title and @link.url. The spec file wants all that stuff, it also says that it displays a link back to the links index titled links. 
      <%= @link.user.username %>
      <%= @link.title %>
      <%= @link.url %>

    Let us go ahead and make another a tag which we will call links, and now let us look at rails routes. It says, when we want to get to our links index we want to use this one right here
      Look at rails route:
        --> links <-- GET /links(.:format) links#index

    So, links_url looks like it should work and agian let us not forget, we want this to be inside of ERB
      a href="<%= links_url %>">Links a

    It also says, it has a link on the show page to edit a link. Pretty straight forward. We know there there is going to be a link passed in and in this case we have access to that. According to the spec file we want it to say Edit Link. now let us double check rails routes
      Look at rails route:
        --> edit_link <-- GET /links/:id/edit(.:format) links#edit

    Looing at the route, we can see that it is going to be edit_link URL, not links URL. That now looks awesome! Good job :D !!!! Almost done
      a href="<%= edit_link_url %>">Edit LInk a 

    Now run the rspec, now it is not likeing edit_url. It gave us that little hint, it said 'links controller'. So, go ahead and open up your LinksController. Let us see what we are missing. 

    Let us go down to our update and notice that here we are trying to redirect to edit. There was no spec for it, but using our deductive skills and our ability to read specs, we are able now to track this error here which says LinksController. Now this might have been an easy one, but it says also here links controller rb 34 in update. 
        # ./app/controllers/links_controller.rb:34:in `update'

    After going back there, we found that we had a redirect to the template edit. That is not taking us anywhere that we want. What we want it to say is edit link. That is the actual template we want it to go. 

    However, when we are doing that, we want to make sure that those errors are going to go along through that cycle. So, because we are no longer rendering, we do not want to use flash.now, we just want to use straight flash errors. Now run the rspec

