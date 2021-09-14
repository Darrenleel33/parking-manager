Rails.application.routes.draw do
  resources :cars, only: [:index, :show, :create, :update, :destroy]
  resources :prices, only: [:index]
  resources :tickets, only: [:index, :show, :create, :destroy]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
