Rails.application.routes.draw do
  resources :orders
  resources :menu_items
  resources :items
  resources :menus
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
