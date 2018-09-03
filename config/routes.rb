Rails.application.routes.draw do
  get 'lifts/index'
  get 'lifts/new'
  get 'lifts/edit'
  get 'lifts/show'
  resources :lifts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
