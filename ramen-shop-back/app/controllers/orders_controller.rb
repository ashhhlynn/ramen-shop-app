class OrdersController < ApplicationController


def create
order = Order.create(order_params)
    if order.save
    render({json: order, except: [:created_at, :updated_at], include: [items: {except: [:created_at, :updated_at, :order_id]}]}) 
    else
    render json: order.errors, status: :unprocessable_entity
    end
end

def index 
    orders = Order.all
    render json: orders 
end 

def destroy
    order = Order.find(params[:id])
    order.destroy
end 


private

def order_params
    params.require(:order).permit(:name, :total, :items => ([:id, :menu_item_id]))
end

end
