Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :artists, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show]
    resources :searches, only: []
    resources :playlists, only: [:show, :create, :destroy, :update]
    resources :songs_on_playlists, only: [:create, :destroy]

    get '/playlists/user/:id', to: 'playlists#show_user', as: 'show_user'
    get '/searches/:search', to: 'searches#search', as: 'search_term'
    get '/searches_all/', to: 'searches#all', as: 'search_all'
  end
  
  root to: 'static_pages#root'

end
