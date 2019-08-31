Rails.application.routes.draw do
  # get 'bands/index'
  # get 'bands/show'
  # get 'bands/new'
  # get 'bands/edit'
  resources :users, only: [:show, :new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :bands do 
    resources :albums, only: [:new]
  end

  resources :albums, only: [:show, :create, :edit, :update, :destroy]
end
