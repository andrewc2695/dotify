Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :artists, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show]
  end
  
  root to: 'static_pages#root'

end
