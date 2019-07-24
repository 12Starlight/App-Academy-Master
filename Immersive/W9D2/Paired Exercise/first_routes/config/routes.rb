Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # resources :users
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  get '/users/new', to: 'users#new'
  get '/users/:id/edit', to: 'users#edit'
  get '/users/:id', to: 'users#show'
  patch '/users/:id', to: 'users#update'
  put '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
end


# alias gcm='git commit -m'
# alias co='git checkout'
# alias be='bundle exec'
# alias bi='bundle install'
# alias gaa='git add -A .'
# alias gb='git branch'
# alias gc='git clone'
# alias gco='git checkout'
# alias gcm='git commit -m'
# alias gd='git diff'
# alias gdc='git diff --cached'
# alias goverwrite='git fetch origin master; git reset --hard FETCH_HEAD; git clean -df'
# alias gpo='git push -u origin master'
# alias gpr='git pull --rebase'
# alias grh='git reset --hard'
# alias gst='git status'
# alias rdbc='bundle exec rails db:create'
# alias rdbd='bundle exec rails db:drop'
# alias rdbm='bundle exec rails db:migrate'
# alias rdbs='bundle exec rails db:seed'
# alias rr='bundle exec rails routes'
# alias rs='rails s'
