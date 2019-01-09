Rails.application.routes.draw do

  get '/pages', to: "pages#index"

  get '*path',  to: 'spa#index'




end
