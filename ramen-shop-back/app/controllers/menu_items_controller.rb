class MenuItemsController < ApplicationController

def index
menu_items = MenuItem.all
render json: menu_items, except: [:created_at, :updated_at], include: [menus: {except: [:created_at, :updated_at]}]
end

end
