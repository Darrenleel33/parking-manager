class PricesController < ApplicationController
    def index
        render json: Price.all
    end


end
