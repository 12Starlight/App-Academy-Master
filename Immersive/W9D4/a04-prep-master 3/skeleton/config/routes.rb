Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :links, except: [:destroy] do 
    resources :comments, only: [:create]
  end

  resources :comments, only: [:destroy]
end
