Rails.application.routes.draw do
  get 'posts/show'
  get 'posts/new'
  get 'posts/create'
  get 'posts/edit'
  get 'posts/update'
  get 'posts/destroy'
  get 'subs/index'
  get 'subs/show'
  get 'subs/new'
  get 'subs/create'
  get 'subs/update'
  get 'subs/edit'
  # get 'sessions/create'
  # get 'sessions/destroy'
  # get 'users/new'
  # get 'users/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :new]
  resources :session, only: [:new, :create, :destroy]
end
