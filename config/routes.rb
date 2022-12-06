Rails.application.routes.draw do
  # namespace :api do
  #   namespace :v1 do
  #     resources :tickets, only: [:index, :create, :view, :post]
  #   end
  # end
  resources :tickets, only: [:index, :create, :view, :post]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/tickets", to: "tickets#show"
  # post "/tickets", to: "tickets#create"
end