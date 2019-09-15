Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :lists do
    resources :tasks, only: [:create]
  end

  resources :tasks, only: [:destroy]
end
