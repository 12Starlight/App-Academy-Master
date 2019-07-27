Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'sessions#new' 

  resources :users, only: [:show, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :emails 

end
