Rails.application.routes.draw do
  resources :products

  get 'static_pages/about'

  get 'static_pages/contact'

  get '/products', to: 'products#index'

  get 'static_pages/index'

  root 'static_pages#landing_page'

  post 'static_pages/thank_you'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :orders, only: [:index, :show, :create, :destroy]

end


