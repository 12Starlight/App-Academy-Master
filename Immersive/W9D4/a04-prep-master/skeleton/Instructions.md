## Instruction Steps

## First run commands
    bundle install
    bundle exec rails db:create 
    In the Gemfile
      add gem 'annotate' in development, :test
      add gem 'pry-rails' in development
      add gem 'better_errors' in development
      add gem 'binding_of_caller' in development
      uncomment gem 'bcrypt' above 
      bundle exec annotate

    rails g migration CreateUsers
    rails g migration CreateLinks
    rails g migration CreateComments
    keep the readme open in a split window on the right 
    keep the routes.rb file open in that same window


## Second 
    Go to db --> migrate to check, if migration exists
    Build migrations, with add_index

  <h3>CreateUsers</h3>

    class CreateUsers < ActiveRecord::Migration[5.1]
      def change
        create_table :users do |t|
          t.string :username, null: false
          t.string :password_digest, null: false 
          t.string :session_token, null: false 

          t.timestamps
        end

        add_index :users, :username, unique: true 
        add_index :users, :session_token, unique: true 
      end
    end


   <h3>CreateLinks</h3> 

    class CreateLinks < ActiveRecord::Migration[5.1]
      def change
        create_table :links do |t|
          t.string :title, null: false 
          t.string :url, null: false 
          t.integer :user_id, null: false
          
          t.timestamps
        end

        add_index :links, :user_id 
      end
    end


  <h3>CreateComments</h3> 

    class CreateComments < ActiveRecord::Migration[5.1]
      def change
        create_table :comments do |t|
          t.text :body, null: false
          t.integer :user_id, null: false 
          t.integer :link_id, null: false

          t.timestamps 
        end

        add_index :comments, :user_id
        add_index :comments, :link_id
      end
    end


## Third run migrations
    bundle exec rails db:migrate db:test:load


## Fourth build user model
    app --> models --> user.rb

    class User < ApplicationRecord
      validates :username, :password_digest, :session_token, presence: true 
      validates :password, length: {minimum: 6, allow_nil: true}

      attr_reader :password

      after_initialize :ensure_session_token 

      has_many :links
      has_many :comments


      def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil 
      end  

      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end 

      def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
      end 

      def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
      end

      def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
      end

    end 


## Fifth run rspec to check work
    run one at a time by looking at the readme and copy and pasting the rspec commands
      Ask: What do we expect to be failing at this point?
        ANSWER: Associations


## Sixth build associations
    comment out in user.rb because you have not created the files yet
      has_many :links
      has_many :comments

  <h3>Link</h3>
    app --> models --> link.rb
    
    class Link < ApplicationRecord
      validates :title, :url, presence: true

      belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id 

      has_many :comments,
        class_name: :Comment,
        primary_key: :id, 
        foreign_key: :link_id
    end 

  <h3>Comment</h3>
    app --> models --> comment.rb

    class Comment < ApplicationRecord
      validates :body, presence: true 

      belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

      belongs_to :link,
        class_name: :Link,
        primary_key: :id,
        foreign_key: :link_id
    end 

    Now go back to your user.rb file and uncomment out your associations
      run your rspec for the user, link, and comment
        NOTE: Use cmd + t to find a file


## Seventh build Application Controller
    app --> controllers --> application_controller.rb

    class ApplicationController < ActionController::Base
      protect_from_forgery with: :exception


      helper_method :current_user, :logged_in?

      def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user 
      end 
      
      def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
      end 

      def require_login
        redirect_to new_session_url unless logged_in?
      end

      def logged_in?
        !!current_user
      end

      def logout
        current_user.reset_session_token!
        session[:session_token] = nil 
      end 

    end


## Eighth build controllers
    rails g controller Users
    rails g controller Sessions
    create the routes in routes.rb for UsersController and SessionsController based on actions and rspec 

  <h3>routes.rb</h3>

    Rails.application.routes.draw do
      resources :users, only: [:create, :new]
      resource :session, only: [:create, :new, :destroy] 
    end

    resource is singlular


  <h3>Views</h3>

    create corresponding views for these two actions
      views --> users --> new.html.erb
        At the top comment out "users new"

      views --> sessions --> new.html.erb
        At the top comment out "sessions new"

      pc + tab creates a comment in ERB

  
  <h3>UsersController</h3>

    class UsersController < ApplicationController
      def new
        @user = User.new 
      end 

      def create
        @user = User.new(user_params)
        if @user.save
          login(@user)
          redirect_to links_url
        else  
          flash.now[:errors] = @user.errors.full_messages
          render :new 
        end  
      end 

      def user_params
        params.require(:user).permit(:username, :password)
      end  

    end    


  <h3>SessionsController</h3>

    class SessionsController < ApplicationController
      def create
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if user 
          login(user)
          redirect_to links_url
        else  
          flash.now[:errors] = ["Username and Password not valid!"]
          render :new
        end 
      end 

      def new

      end

      def destroy
        logout
        redirect_to new_session_url
      end 

    end


  <h3>LinksController</h3>

    class LinksController < ApplicationController
  
      before_action :require_login
      
      def index
        @links = Link.all
      end 

      def show
        @link = Link.find(params[:id])
      end 

      def new
        @link = Link.new 
      end 

      def create
        @link = Link.new(link_params)
        @link.user_id = current_user.id
        if @link.save 
          redirect_to link_url(@link)
        else   
          flash.now[:errors] = @link.errors.full_messages
          render :new
        end 
      end 

      def update
        @link = current_user.links.find(params[:id])
        if @link.update_attributes(link_params)
          redirect_to link_url(@link)
        else
          flash[:errors] = @link.errors.full_messages
          redirect_to :edit_link
        end
      end 

      def edit
        @link = Link.find(params[:id])
      end 

      def destroy

      end 

      private
      def link_params
        params.require(:link).permit(:title, :url)
      end 

    end

  <h3>routes.rb</h3>
    create routes in routes.rb based on actions in LinksController and rspec

    Rails.application.routes.draw do
      resources :users, only: [:create, :new]
      resource :session, only: [:create, :new, :destroy] 
      resources :links 
    end

  <h3>Views</h3>

  create corresponding views for these actions
    views --> links --> new.html.erb
      At the top comment out "links new"

    views --> links --> edit.html.erb
      At the top comment out "links edit"

    views --> links --> show.html.erb
      At the top comment out "links show"

    views --> links --> index.html.erb
      At the top comment out "links index"  

    pc + tab creates a comment in ERB  


  <h3>CommentsController</h3>  

    class CommentsController < ApplicationController
  
      before_action :require_login
      
      def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 
        @comment.link_id = params[:link_id]
        @comment.save 
        flash[:errors] = @comment.errors.full_messages
        redirect_to link_url(@comment.link_id)
      end 

      def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        redirect_to link_url(@comment.link_id)
      end 

      private
      def comment_params
        params.require(:comment).permit(:body)
      end 
    end

  <h3>routes.rb</h3>
    create routes in routes.rb based on actions in CommentsController and rspec
    run rspec and notice that the comments route is actually nested underneith the links route /links/1/comments
    we want them nested under links using a do block

    Rails.application.routes.draw do
      resources :users, only: [:create, :new]
      resource :session, only: [:create, :new, :destroy] 
      resources :links do
        resources :comments, only: [:create]
      end 

      resources :comments, only: [:destroy] 
    end

    based on the CommentsController, we only care about :create and :destroy. However, in the rspec it just says params: (id:comment.id), there is no mention of a link there, so it does not want destroy nested. It wants destroy on its own line


## Ninth build views --> sessions --> new
    start with app --> views --> sessions --> new.html.erb
    remember sessions are sign in

    <%# sessions new %>
    <h2>Sign In</h2>

    <form action="<%= session_url %>" method="post">
    <input type="hidden" 
    name="authenticity_token" 
    value="<%= form_authenticity_token %>">

    <label>
      Username
      <input type="text" name="user[username]" value="">
    </label>

    <label>
      Password
      <input type="text" name="user[password]" value="">
    </label>

    <input type="submit" name="" value="Sign In">

    </form>

    use pc + tab to create a comment in ERB
    use er + tab to create <% %>
    use pe + tab to create <%= %>


## Tenth build views --> users --> new
    start with app --> views --> users --> new
    remember users are sign up
    
    <%# users new %>
    <h2>Sign Up</h2>

    <form action="<%= users_url %>" method="post">
    <input type="hidden" 
    name="authenticity_token" 
    value="<%= form_authenticity_token %>">

    <label>
      Username
      <input type="text" name="user[username]" value="">
    </label>

    <label>
      Password
      <input type="text" name="user[password]" value="">
    </label>

    <input type="submit" name="" value="Sign Up">

    </form>

    use pc + tab to create a comment in ERB
    use er + tab to create <% %>
    use pe + tab to create <%= %>


  <h3>application.html.erb</h3>
    go to app --> views --> layouts --> application.html.erb
    this is going to work a lot like ApplicationController where we can share html with the rest of the templets
    go to the body

  <h4>body</h4>

    <% if logged_in? %>
      <%= current_user.username %>
      
      <form action="<%= session_url %>" method="post">
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
        <input type="hidden" name="_method" value="delete">
      
        <input type="submit" name="" value="Sign Out">
      </form>
    <% else %>
      <a href="<%= new_session_url %>">Sign In</a>
      <a href="<%= new_user_url %>">Sign Up</a>
    <% end %>

    <% if flash[:errors] %>
      <ul>
      <% flash[:errors].each do |error| %>
        <li><%= error %></li>
      <% end %>
      </ul>
    <% end %>


## Eleventh build views --> links 

  <h3>_form.html.erb</h3>

    <%# form %>
    <% if type == :new %>
      <% action = links_url %>
      <% button_text = "Create New Link" %>
    <% else %>
      <% action = link_url(link) %>
      <% button_text = "Update Link" %>
    <% end %>


    <form action="<%= action %>" method="post">
      <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
      
      <% if type == :edit %>
        <input type="hidden" name="_method" value="patch">
      <% end %>
      

      <label>
        Title
        <input type="text" name="link[title]" value="<%= link.title %>">
      </label>

      <label>
        URL
        <input type="text" name="link[url]" value="<%= link.url %>">
      </label>

      <input type="submit" name="" value="<%= button_text %>">
    </form>


  <h3>new.html.erb</h3>

    <%# links new %>
    <h2>New Link</h2>

    <%= render 'form', type: :new, link: @link %>

  
  <h3>edit.html.erb</h3>

    <%# links edit %>
    <h2>Edit Link</h2>

    <%= render 'form', type: :edit, link: @link %>

  
  <h3>index.html.erb</h3>

    <%# "links index" %>
    <h2>Links Index</h2>
    <a href="<%= new_link_url %>">New Link</a>

    <ul>
    <% @links.each do |link| %>
      <li><a href="<%= link_url(link)%>"><%= link.title %></a></li>
      <li><%= link.url %></li>
    <% end %>
    </ul>


  <h3>show.html.erb</h3>  

    <%# "links show" %>
    <h2>Link Show</h2>

    <%= @link.user.username %>
    <%= @link.title %>
    <%= @link.url %>

    <a href="<%= links_url %>">Links</a>
    <a href="<%= edit_link_url %>">Edit Link</a>


## Twelfth build comments using --> views --> links --> show
    look at the comments_spec file, notice it says there is a form on the link show page
    go to app --> views --> links --> show
    work on everything below the previous code 

  <h3>comments</h3>

    <h3>Add Comment</h3>

    <form action="<%= link_comments_url(@link) %>" method="post">
      <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
      <label>
        Comment 
        <input type="text" name="comment[body]" value="">  
      </label>
      <input type="submit" name="" value="Add Comment">
    </form>

    <ul>
      <% @link.comments.each do |comment| %>
        <li><%= comment.body %></li>
        <form action="<%= comment_url(comment) %>" method="post">
          <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
          <input type="hidden" name="_method" value="delete">
          <input type="submit" name="" value="Remove Comment">
        </form>
      <% end %>
    </ul>
