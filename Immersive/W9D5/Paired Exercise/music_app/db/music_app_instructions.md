## Drop all previous work
    rails db:reset

## Create music_app
    rails new music_app -G --database=postgresql

## Install all gems in Gemfile
    gem 'byebug'
    gem 'annotate'
    gem 'pry-rails'
    gem 'binding_of_caller'
    gem 'better_errors'
    cd into the project 
    bundle install 
    bundle exec rails db:create

## Create User Table
    bundle exec rails g migration createUser col:type col:type col:type
    table  
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false 
      t.timestamps 

    index
      add_index :users, :email
      add_index :users, :session_token, unique: true

## Helpers for migration
    bundle exec rails g migration PrideCamelDescriptionToChange
    rails db:rollback -undoes migration 
    drop_table :tablename  
    add_column :tablename, :col, :type 
    remove_column :tablename, :col
    add_timestamps :tablename
    add_column :tablename, :created_at, :datetime, null: false
    add_column :tablename, :updated_at, :datetime, null: false 
    add_index :tablename, :col, :contraints 
    change_column_null :tablename, :colname, false 
    
## Create User model (user.rb)
    inherit from ApplicationRecord
    write out validations
      validates :email, :session_token, uniqueness: true
      validates :password, length: { minimum: 6, allow_nil: true }
      validates :email, :password_digest, :session_token, presence: true 
    
    add attr_reader :password
    after_initialize :ensure_session_token 
    build method skeleton for session_tokens
      def generate_session_token
      end

      def reset_session_token!
      end

      def ensure_session_token
      end 
    
    fill in methods
      def generate_session_token
        token = SecureRandom.urlsafe_base64(16)
      end

      def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
      end

      def ensure_session_token
        self.session_token ||= generate_session_token 
      end

    write out skeleton for password methods 
      def password=(password)
      end

      def is_password?(password)
      end 

    fill in the meat of the methods
      def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end

      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end 

    build in its entirety find_by_credentials(email, password)
      def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil 
      end

## Create UsersController and SessionsController 
    rails g controller Users
    rails g controller Sessions

    navigate to app --> controllers
    build routes for users (routes.rb)
      resources :users, only: [:show, :new, :create]

    build UsersController actions skeleton based on above routes 
      def show
      end

      def new
      end

      def create
      end 

      private
      def user_params
      end

    build private method
      private
      def user_params
        params.require(:user).permit(:email, :password)
      end

    fill in UsersController actions 
      def show
        render: show
      end

      def new
        @user = User.new
        render :new
      end

      def create
        @user = User.new(user_params)

        if @user.save
          login_user!(@user)
          flash[:notice] = 'Successfully created your account!'
          redirect_to new_session_url
        else
          flash.now[:errors] = @user.errors.full_messages
          render :new 
        end
      end 
    
    build routes for sessions (routes.rb)
      resource :session, only: [:new, :create, :destroy]

    create session actions skeleton
      def new
      end

      def create
      end

      def destroy
      end 

    flesh out session actions 
      def new
        render :new
      end

      def create
        user = User.find_by_credentials(
          params[:user][:email]
          params[:user][:password]
        )

        if user.all?
          flash.now[:errors] = ['Invalid Username And/Or Password']
          render :new 
        else
          login_user!
          redirect_to root_url
        end
      end

      def destroy
        current_user.reset_session_token!
        session[:session_token] = nil

        redirect_to new_session_url 
      end 

    create views for Users and Sessions with a comment and header 
      users
        new.html.erb
          <%# user new %>
          <h1 class="page-header">New User</h1>

        show.html.erb
          <%# user show %>
          <h1 class="page-header">User Profile</h1>
      
      sessions
        new.html.erb
          <%# session new %>
          <h1 class="page-header">Sign In</h1>
    
## Create methods in ApplicationController
    add helper method at top of page  
      helper_method :current_user, :logged_in?

    build ApplicationController methods skeleton
      def current_user
      end

      def logged_in?
      end

      def login_user!(user)
      end

    fill in methods 
      def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
      end

      def logged_in?
        !!current_user
      end

      def login_user(user)
        session[:session_token] = user.reset_session_token!
      end
    
## Create login/signup views and edit application.html.erb 
    application.html.erb
      <div class='main-content'>
        <h1 class='main-logo'>Music App</h1>

        <% if logged_in? %>
          <nav>
            <a class='button' href="<%= bands_url %>">Take me Home</a>
            
            <div class='user-detail'>
              <p>Logged in as: <%= current_user.email %></p>
            <form action=<%= session_url %> method='post'>
              <input
                type="hidden"
                name="_method"
                value="delete">
              <input
                type="hidden"
                name="authenticity_token"
                value="<%= form_authenticity_token %>">
              <input 
                type="submit" value="Sign Out">
            </form>
            </div>
          </nav>
        <% end %>

        <% if flash[:notice] %>
          <p><%= flash[:notice] %></p>
        <% end %>

        <% if flash[:errors] %>
          <p><%= flash[:errors].join(", ") %></p>
        <% end %>

        <%= yield %>
      </div>

    users, new.html.erb
      <a class='button' href=<%= new_session_url %> >Go to sign-in</a>

      <form class='form' action="<%= users_url %>" method="post">
        <input
          type="hidden"
          name="authenticity_token"
          value="<%= form_authenticity_token %>">

        <p>
          <label for='new-user-email'>Email</label>
          <input id='new-user-email' type="text" name="user[email]">
        </p>

        <p>
          <label for='new-user-password'>Password</label>
          <input id='new-user-password' type="password" name="user[password]">
        </p>

        <input type="submit" value="Submit">
      </form>

    users, show.html.erb
      <p>
        Email: <%= current_user.email %>
      </p>

    sessions, new.html.erb 
      <a class='button' href=<%= new_user_url %> >Go to Sign-up!</a>

      <form class='form' action="<%= session_url %>" method="post">
        <input
          type="hidden"
          name="authenticity_token"
          value="<%= form_authenticity_token %>">

        <p>
          <label for='new-user-email'>Email</label>
          <input id='new-user-email' type="text" name="user[email]">
        </p>

        <p>
          <label for='new-user-password'>Password</label>
          <input id='new-user-password' type="password" name="user[password]">
        </p>

        <input type="submit">
      </form>

## Style users session and application  
    app --> stylesheets

## Phase I: Band/Album/Track
    Follow this order and build out a feature/resource at a time
      * Migrations 
      * Model definition (validations, associations, helper methods)
      * Routes
      * Controller + controller actions
      * Views (should coincide with the actions that render them)

## Start with bands
    * Migrations
        band
          bundle exec rails g migration createBand name:string
          table
            t.string :name, null: false

            t.timestamps

            add_index :bands, :name, unique: true 

          rails db:migrate

    * Model definition (validations, associations, helper methods)
        band.rb 
          validations
            validates :name, presence: true, uniqueness: true

          associations
            has_many :albums 

          helper methods 
            none 

    * Routes (routes.rb)
        resources :bands 

    * Controller + controller actions
        BandsController
          bundle exec rails g controller BandsController index show new edit

        add before_action :requre_user! at the top of the page    
        build out actions skeleton 
          def index
          end

          def show
          end

          def new
          end

          def create
          end

          def edit
          end

          def update
          end 

          def destroy
          end

          private
          def band_params
            params.require(:band).permit(:name)
          end

        flesh out actions
          def index
            @bands = Band.all
            render :index
          end 

          def show
            @band = Band.find(params[:id])
            render :show
          end

          def new
            @band = Band.new
            render :new
          end

          def create
            if @band.save
              redirect_to band_url(@band)
            else
              flash.now[:errors] = @band.errors.ful_messages
              render :new
            end
          end

          def edit
            @band = Band.find(params[:id])
            render :edit
          end

          def update
            @band = Band.find(params[:id])

            if @band = Band.find(params[:id])
              redirect_to band_url(@band)
            else
              flash.now[:errors] = @band.errors.full_messages
              render :edit
            end

          end

          def destroy
            @band = Band.find(params[:id])
            @band.destroy
            
            redirect_to bands_url
          end

          private
          def band_params
            params.require(:band).permit(:name)
          end

    * Views (band actions)
        bands, index.html.erb
          <%# band index %>
          <h1 class="page-header">Bands</h1>

          <u class="main-list">
            <% @bands.each do |band| %>
              <li><a href="<%= band_url(band) %>"><p><%= band.name %></p></a></li>
            <% end %>
          </u>

          <h4 class="sub-header">Links</h4>
          <ul>
            <li><a class="button" href="<%= new_band_url %>">New Band</a></li>
          </ul>

        bands, show.html.erb
          <%# band show %>
          <h1 class="page-header"><%= @band.name %></h1>

          <h4 class="sub-header">Albums</h4>

          <% if @band.albums.length > 0 %>
            <ul class="main-list">
            <% @band.albums.each do |album| %>
              <li><a href="<%= album_url(album) %>"><%= album.name %></a></li>
            <% end %>
            </ul>
          <% else %>
            <p>We need to add some albums stat pronto NOW</p>
          <% end %>

          <h4 class="sub-header">Links</h4>
          <ul class="page-links">
            <li><a class="button" href="<%= new_band_album_url(@band) %>">New Album</a></li>
            <li><a class="button" href="<%= edit_band_url(@band) %>">Edit Band</a></li>
            <li>
              <form action="<%= band_url(@band) %>" method="POST">
                <input type="hidden" name="_method" value="DELETE">
                <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
                <input type="submit" value="Destroy Band">
              </form>
            </li>
            <li><a class="button" href="<%= bands_url %>">All bands</a></li>
          </ul>

        bands, new.html.erb
          <%# band new %>
          <h1 class="page-header">New Band!</h1>

          <%= render "form", band: @band %>

        bands, edit.html.erb 
          <%# band edit %>
          <h1 class="page-header">Edit <%= @band.name %></h1>

          <%= render "form", band: @band %>

## Second albums 
    * Migrations
        album
          bundle exec rails g migration createAlbum name:string band_id:integer year:integer live:boolean 
          table
            t.string :name, null: false
            t.integer :band_id, null: false
            t.integer :year, null: false
            t.boolean :live, null: false, default: false 

            t.timestamps

            add_index :albums, [:band_id, :name], unique: true 

          rails db:migrate

    * Model definition (validations, associations, helper methods)
        album.rb 
          validations
            validates :band, :name, :year, presence: true
            validates :live, inclusion: { in: [true, false] }
            validates :name, uniqueness: { scope: :band_id }
            validates :year, numericality: { minimum: 1900, maximum: 9000 }

          associations
            belongs_to :band
            has_many :tracks, dependent: :destroy

          helper methods 
            after_initialize :set_defaults

          instance methods 
            def set_defaults
              self.live ||= false 
            end

    * Routes (routes.rb)
        resources :bands do 
          resources :albums, only: [:new]
        end

        resources :albums, only: [:show, :create, :edit, :update, :destroy]

    * Controller + controller actions
        AlbumsController
          bundle exec rails g controller Albums index new show create        