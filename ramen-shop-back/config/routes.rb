Rails.application.routes.draw do
  resources :orders, only: [:index, :create, :destroy]
  resources :menus, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
