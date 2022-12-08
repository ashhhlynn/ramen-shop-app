class ItemsController < ApplicationController

    def show
        item = Item.find_by(id: params[:id])
        render json: item, except: [:created_at, :updated_at, :order_id]
    end

end
