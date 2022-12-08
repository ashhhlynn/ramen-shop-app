class OrdersController < ApplicationController


def create
order = Order.create(order_params)
params[:items].each do |mii|
    order.items.build(order_id: order.id, menu_item_id: mii[:id])
    end 
if order.save
    render({json: order, except: [:created_at, :updated_at], include: [items: {except: [:created_at, :updated_at]}]}) 
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
    params.require(:order).permit(:name, :total, :items => ([:order_id, :menu_item_id]))
end

end
